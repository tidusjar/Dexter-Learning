/* Node script: sanity-checks all subject data files. Run: node validate.js */
'use strict';
const fs = require('fs');
const path = require('path');

global.window = {};
const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js')).sort();
for (const f of files) require(path.join(dataDir, f));

const SUBJECTS = global.window.SUBJECTS || [];
let errors = 0, totalLessons = 0, totalQuestions = 0;
const err = m => { errors++; console.error('ERROR: ' + m); };

const seenSub = new Set();
for (const s of SUBJECTS) {
  if (!s.id || !s.name || !s.icon || !s.color || !Array.isArray(s.lessons)) err(`subject ${s.id || '?'} missing fields`);
  if (seenSub.has(s.id)) err(`duplicate subject id ${s.id}`);
  seenSub.add(s.id);
  const seenLes = new Set();
  for (const l of s.lessons) {
    totalLessons++;
    const where = `${s.id}/${l.id}`;
    if (!l.id || !l.title) err(`${where}: missing id/title`);
    if (seenLes.has(l.id)) err(`${where}: duplicate lesson id`);
    seenLes.add(l.id);
    if (l.gen) {
      if (!['tables', 'arith', 'money'].includes(l.gen)) err(`${where}: unknown generator ${l.gen}`);
      continue;
    }
    if (l.write) {
      if (!l.write.prompt || !Array.isArray(l.write.checklist) || !l.write.checklist.length) err(`${where}: bad write block`);
      continue;
    }
    if (l.blocks) {
      const chs = l.blocks.challenges;
      if (!Array.isArray(chs) || chs.length < 3) { err(`${where}: needs >=3 challenges`); continue; }
      for (const [i, ch] of chs.entries()) {
        const tag = `${where} challenge${i + 1}`;
        const map = ch.map || [];
        if (!map.length || map.some(r => r.length !== map[0].length)) { err(`${tag}: ragged map`); continue; }
        const flat = map.join('');
        if ((flat.match(/S/g) || []).length !== 1 || (flat.match(/G/g) || []).length !== 1) err(`${tag}: needs exactly one S and one G`);
        if (/[^S G#.]/.test(flat.replace(/\./g, ' '))) err(`${tag}: unknown map character`);
        // simulate the provided solution: it must reach the treasure
        const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];
        let dir = { N: 0, E: 1, S: 2, W: 3 }[ch.dir || 'E'];
        let y = map.findIndex(r => r.includes('S'));
        let x = map[y].indexOf('S');
        let won = false;
        for (const c of ch.solution || []) {
          if (c === 'L') dir = (dir + 3) % 4;
          else if (c === 'R') dir = (dir + 1) % 4;
          else if (c === 'F') {
            const nx = x + dirs[dir][0], ny = y + dirs[dir][1];
            if (ny < 0 || ny >= map.length || nx < 0 || nx >= map[0].length || map[ny][nx] === '#') { err(`${tag}: solution crashes`); break; }
            x = nx; y = ny;
            if (map[ny][nx] === 'G') { won = true; break; }
          } else { err(`${tag}: bad solution command "${c}"`); break; }
        }
        if (!won) err(`${tag}: solution does not reach the treasure`);
      }
      continue;
    }
    if (!Array.isArray(l.questions) || l.questions.length < 5) err(`${where}: needs >=5 questions`);
    for (const [i, q] of (l.questions || []).entries()) {
      totalQuestions++;
      const tag = `${where} q${i + 1}`;
      if (q.type === 'choice') {
        if (!Array.isArray(q.options) || q.options.length < 2) err(`${tag}: bad options`);
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) err(`${tag}: answer index out of range`);
        if (new Set(q.options).size !== q.options.length) err(`${tag}: duplicate options`);
      } else if (q.type === 'type') {
        const a = Array.isArray(q.answer) ? q.answer : [q.answer];
        if (!a.length || a.some(x => typeof x !== 'string' || !x.trim())) err(`${tag}: bad answers`);
      } else if (q.type === 'match') {
        if (!Array.isArray(q.pairs) || q.pairs.length < 3) err(`${tag}: needs >=3 pairs`);
        else {
          if (q.pairs.some(p => !Array.isArray(p) || p.length !== 2)) err(`${tag}: malformed pair`);
          if (new Set(q.pairs.map(p => p[0])).size !== q.pairs.length) err(`${tag}: duplicate left values`);
          if (new Set(q.pairs.map(p => p[1])).size !== q.pairs.length) err(`${tag}: duplicate right values`);
        }
      } else if (q.type === 'sort') {
        if (!Array.isArray(q.buckets) || q.buckets.length < 2) err(`${tag}: bad buckets`);
        if (!Array.isArray(q.items) || q.items.length < 3) err(`${tag}: needs >=3 items`);
        for (const it of q.items || []) {
          if (!it.text || !Number.isInteger(it.bucket) || it.bucket < 0 || it.bucket >= (q.buckets || []).length) err(`${tag}: bad item "${it.text}"`);
        }
      } else if (q.type === 'order') {
        if (!Array.isArray(q.items) || q.items.length < 3) err(`${tag}: needs >=3 items`);
        if (new Set(q.items).size !== (q.items || []).length) err(`${tag}: duplicate order items`);
      } else {
        err(`${tag}: unknown type "${q.type}"`);
      }
      if (!q.q && q.type !== 'match') err(`${tag}: missing question text`);
    }
  }
}

console.log(`Subjects: ${SUBJECTS.length}`);
for (const s of SUBJECTS) {
  const qs = s.lessons.reduce((a, l) => a + (l.questions ? l.questions.length : 0), 0);
  console.log(`  ${s.icon} ${s.name}: ${s.lessons.length} lessons, ${qs} fixed questions${s.lessons.some(l => l.gen) ? ' + generated practice' : ''}${s.lessons.some(l => l.write) ? ' + writing quests' : ''}`);
}
console.log(`Total: ${totalLessons} lessons, ${totalQuestions} fixed questions`);
if (errors) { console.error(`\n${errors} error(s) found`); process.exit(1); }
console.log('All checks passed ✔');
