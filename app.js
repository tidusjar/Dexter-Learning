/* ============================================================
   Dexter's Learning Adventure — engine
   Plain JS, no build step. Progress lives in localStorage.
   ============================================================ */
(function () {
  'use strict';

  var SUBJECTS = window.SUBJECTS || [];
  var STORE_KEY = 'dexter-learning-v1';
  var app = document.getElementById('app');

  /* ---------------- progress store ---------------- */
  function defaultStore() {
    return { lessons: {}, writings: {}, checks: {}, log: [], points: 0 };
  }
  function loadStore() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultStore();
      var s = JSON.parse(raw);
      return Object.assign(defaultStore(), s);
    } catch (e) {
      return defaultStore();
    }
  }
  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {}
  }
  var store = loadStore();

  function lessonKey(subId, lesId) { return subId + '/' + lesId; }
  function getLessonProg(subId, lesId) { return store.lessons[lessonKey(subId, lesId)] || null; }

  function recordResult(subId, lesId, pct) {
    var key = lessonKey(subId, lesId);
    var rec = store.lessons[key] || { best: 0, stars: 0, attempts: 0 };
    rec.attempts += 1;
    rec.lastPlayed = todayStr();
    if (pct > rec.best) rec.best = pct;
    var stars = starsFor(rec.best);
    if (stars > rec.stars) rec.stars = stars;
    rec.completed = rec.best >= 50;
    store.lessons[key] = rec;
    store.points += Math.round(pct / 10);
    store.log.push({ d: todayStr(), l: key, s: pct });
    if (store.log.length > 500) store.log = store.log.slice(-500);
    saveStore();
    return rec;
  }

  function starsFor(pct) {
    if (pct >= 90) return 3;
    if (pct >= 70) return 2;
    if (pct >= 50) return 1;
    return 0;
  }
  function starString(n) {
    var s = '';
    for (var i = 0; i < 3; i++) s += i < n ? '⭐' : '☆';
    return s;
  }
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function daysPlayed() {
    var set = {};
    store.log.forEach(function (e) { set[e.d] = true; });
    return Object.keys(set).length;
  }
  function streak() {
    var set = {};
    store.log.forEach(function (e) { set[e.d] = true; });
    var n = 0;
    var d = new Date();
    if (!set[todayStr()]) d.setDate(d.getDate() - 1); // streak survives until tomorrow
    for (;;) {
      var key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      if (!set[key]) break;
      n++;
      d.setDate(d.getDate() - 1);
    }
    return n;
  }

  /* ---------------- helpers ---------------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'class') node.className = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (k === 'text') node.textContent = attrs[k];
        else if (k.slice(0, 2) === 'on') node.addEventListener(k.slice(2), attrs[k]);
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function rnd(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function findSubject(id) {
    for (var i = 0; i < SUBJECTS.length; i++) if (SUBJECTS[i].id === id) return SUBJECTS[i];
    return null;
  }
  function findLesson(sub, lesId) {
    for (var i = 0; i < sub.lessons.length; i++) if (sub.lessons[i].id === lesId) return sub.lessons[i];
    return null;
  }

  function confetti() {
    var layer = document.getElementById('confetti-layer');
    var colours = ['#e63946', '#f4a261', '#2a9d8f', '#457b9d', '#ffd166', '#9b5de5'];
    for (var i = 0; i < 80; i++) {
      var c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = pick(colours);
      c.style.animationDuration = (1.8 + Math.random() * 2) + 's';
      c.style.animationDelay = (Math.random() * 0.6) + 's';
      layer.appendChild(c);
      (function (node) { setTimeout(function () { node.remove(); }, 5000); })(c);
    }
  }

  /* ---------------- maths generators ---------------- */
  function fmtMoney(p) {
    return '£' + Math.floor(p / 100) + '.' + String(p % 100).padStart(2, '0');
  }
  var GENERATORS = {
    tables: function () {
      var a = rnd(2, 12), b = rnd(2, 12);
      if (Math.random() < 0.3) { // missing-number style
        return { type: 'type', q: '❓ × ' + b + ' = ' + (a * b) + '   What is the missing number?', answer: [String(a)] };
      }
      return { type: 'type', q: 'What is ' + a + ' × ' + b + '?', answer: [String(a * b)] };
    },
    arith: function () {
      var kind = pick(['add', 'sub', 'mul', 'div']);
      if (kind === 'add') {
        var a = rnd(120, 880), b = rnd(45, 900);
        return { type: 'type', q: 'What is ' + a + ' + ' + b + '?', answer: [String(a + b)] };
      }
      if (kind === 'sub') {
        var x = rnd(300, 980), y = rnd(40, 280);
        return { type: 'type', q: 'What is ' + x + ' − ' + y + '?', answer: [String(x - y)] };
      }
      if (kind === 'mul') {
        var m = rnd(12, 96), n = rnd(3, 9);
        return { type: 'type', q: 'What is ' + m + ' × ' + n + '?', answer: [String(m * n)] };
      }
      var d = rnd(2, 12), q2 = rnd(3, 12);
      return { type: 'type', q: 'What is ' + (d * q2) + ' ÷ ' + d + '?', answer: [String(q2)] };
    },
    money: function () {
      if (Math.random() < 0.5) {
        var p1 = rnd(45, 450), p2 = rnd(30, 400);
        return {
          type: 'type',
          q: 'A drink costs ' + fmtMoney(p1) + ' and a snack costs ' + fmtMoney(p2) + '. How much altogether? (like £9.99)',
          answer: [fmtMoney(p1 + p2), fmtMoney(p1 + p2).replace('£', '')]
        };
      }
      var cost = rnd(120, 480);
      var paidWith = cost <= 250 ? 300 : 500;
      if (Math.random() < 0.4) paidWith = 1000;
      return {
        type: 'type',
        q: 'You buy something for ' + fmtMoney(cost) + ' and pay with ' + fmtMoney(paidWith) + '. How much change do you get? (like £9.99)',
        answer: [fmtMoney(paidWith - cost), fmtMoney(paidWith - cost).replace('£', '')]
      };
    }
  };

  /* ---------------- routing ---------------- */
  function route() {
    var hash = location.hash.replace(/^#\/?/, '');
    var parts = hash.split('/').filter(Boolean);
    window.scrollTo(0, 0);
    if (parts.length === 0) return renderHome();
    if (parts[0] === 'planner') return renderPlanner();
    if (parts[0] === 'awards') return renderAwards();
    if (parts[0] === 'grownups') return renderGrownups();
    if (parts[0] === 'subject' && parts[1]) {
      var sub = findSubject(parts[1]);
      if (sub) return renderSubject(sub);
    }
    if (parts[0] === 'lesson' && parts[1] && parts[2]) {
      var s = findSubject(parts[1]);
      var l = s && findLesson(s, parts[2]);
      if (l) return renderLesson(s, l);
    }
    renderHome();
  }
  window.addEventListener('hashchange', route);

  /* ---------------- views ---------------- */
  function renderHome() {
    app.innerHTML = '';
    var totalLessons = 0, doneLessons = 0, totalStars = 0;
    SUBJECTS.forEach(function (s) {
      s.lessons.forEach(function (l) {
        totalLessons++;
        var p = getLessonProg(s.id, l.id);
        if (p && p.completed) doneLessons++;
        if (p) totalStars += p.stars;
      });
    });

    var hero = el('div', { class: 'hero' }, [
      el('h1', { text: '⚔️ Ahoy, Dexter!' }),
      el('p', { text: 'Welcome to your Viking learning adventure. Pick a subject and earn your stars!' }),
      el('div', { class: 'stats' }, [
        el('div', { class: 'stat', html: '🏅 <b>' + store.points + '</b> points' }),
        el('div', { class: 'stat', html: '⭐ <b>' + totalStars + '</b> stars' }),
        el('div', { class: 'stat', html: '✅ <b>' + doneLessons + '</b>/' + totalLessons + ' quests done' }),
        el('div', { class: 'stat', html: '🔥 <b>' + streak() + '</b> day streak' })
      ])
    ]);
    app.appendChild(hero);

    var grid = el('div', { class: 'subject-grid' });
    SUBJECTS.forEach(function (s) {
      var done = 0;
      s.lessons.forEach(function (l) {
        var p = getLessonProg(s.id, l.id);
        if (p && p.completed) done++;
      });
      var pct = s.lessons.length ? Math.round(done / s.lessons.length * 100) : 0;
      var card = el('a', { class: 'subject-card', href: '#/subject/' + s.id, style: 'border-top-color:' + s.color }, [
        el('div', { class: 'icon', text: s.icon }),
        el('h2', { text: s.name }),
        el('p', { class: 'tagline', text: s.tagline }),
        el('div', { class: 'progress-bar' }, [el('div', { style: 'width:' + pct + '%' })]),
        el('span', { class: 'progress-label', text: done + ' of ' + s.lessons.length + ' quests · ' + pct + '%' })
      ]);
      grid.appendChild(card);
    });
    app.appendChild(grid);
  }

  function renderSubject(sub) {
    app.innerHTML = '';
    app.appendChild(el('a', { class: 'back-link', href: '#/', text: '← All subjects' }));
    app.appendChild(el('h1', { text: sub.icon + ' ' + sub.name }));
    app.appendChild(el('p', { class: 'subtitle', text: sub.tagline }));
    var list = el('div', { class: 'lesson-list' });
    sub.lessons.forEach(function (les, i) {
      var p = getLessonProg(sub.id, les.id);
      var desc;
      if (les.gen) desc = 'Practice game — play it as many times as you like!';
      else if (les.write) desc = 'Writing quest';
      else desc = (les.questions ? les.questions.length : 0) + ' questions';
      if (p && p.best) desc += ' · best score ' + p.best + '%';
      var row = el('a', {
        class: 'lesson-row' + (p && p.completed ? ' done' : ''),
        href: '#/lesson/' + sub.id + '/' + les.id
      }, [
        el('span', { class: 'emoji', text: les.emoji || '📘' }),
        el('div', { class: 'info' }, [
          el('h3', { text: (i + 1) + '. ' + les.title }),
          el('p', { text: desc })
        ]),
        el('span', { class: 'stars', text: starString(p ? p.stars : 0) })
      ]);
      list.appendChild(row);
    });
    app.appendChild(list);
  }

  /* ---------------- lesson flow ---------------- */
  function renderLesson(sub, les) {
    app.innerHTML = '';
    app.appendChild(el('a', { class: 'back-link', href: '#/subject/' + sub.id, text: '← ' + sub.name }));
    app.appendChild(el('h1', { text: (les.emoji || '') + ' ' + les.title }));

    if (les.write) return renderWriting(sub, les);

    var wrap = el('div');
    app.appendChild(wrap);

    (les.learn || []).forEach(function (card) {
      wrap.appendChild(el('div', { class: 'learn-card' }, [
        card.title ? el('h3', { text: '📖 ' + card.title }) : null,
        el('div', { html: card.html })
      ]));
    });

    var questions = buildQuestions(les);
    var startLabel = (les.learn && les.learn.length ? 'Start the quiz! 🚀' : 'Start! 🚀');
    wrap.appendChild(el('button', {
      class: 'big-btn',
      text: startLabel,
      onclick: function () { runQuiz(sub, les, questions, wrap); }
    }));
  }

  function buildQuestions(les) {
    if (les.gen) {
      var fn = GENERATORS[les.gen];
      var n = les.target || 10;
      var qs = [];
      for (var i = 0; i < n; i++) qs.push(fn());
      return qs;
    }
    return shuffle(les.questions || []);
  }

  function runQuiz(sub, les, questions, wrap) {
    var idx = 0;
    var score = 0; // may be fractional for sort questions
    next();

    function next() {
      if (idx >= questions.length) return finish();
      wrap.innerHTML = '';
      var q = questions[idx];
      wrap.appendChild(el('div', { class: 'quiz-head' }, [
        el('span', { class: 'quiz-progress', text: 'Question ' + (idx + 1) + ' of ' + questions.length }),
        el('div', { class: 'progress-bar', style: 'flex:1;max-width:240px' }, [
          el('div', { style: 'width:' + Math.round(idx / questions.length * 100) + '%' })
        ])
      ]));
      var card = el('div', { class: 'question-card' });
      wrap.appendChild(card);
      renderQuestion(q, card, function (points) {
        score += points;
        idx++;
        next();
      });
    }

    function finish() {
      var pct = Math.round(score / questions.length * 100);
      var rec = recordResult(sub.id, les.id, pct);
      var stars = starsFor(pct);
      if (pct >= 70) confetti();
      wrap.innerHTML = '';
      var msg = pct >= 90 ? 'AMAZING work, Dexter! 🎉' :
                pct >= 70 ? 'Great job, Dexter! 💪' :
                pct >= 50 ? 'Good effort — keep practising!' :
                'Tricky one! Read the learn cards and try again — you can do it!';
      wrap.appendChild(el('div', { class: 'result-card' }, [
        el('div', { class: 'big-emoji', text: pct >= 70 ? '🏆' : pct >= 50 ? '😊' : '💪' }),
        el('h2', { text: msg }),
        el('div', { class: 'result-stars', text: starString(stars) }),
        el('p', { class: 'result-score', text: 'You scored ' + Math.round(score * 10) / 10 + ' out of ' + questions.length + ' (' + pct + '%)' }),
        el('p', { text: 'Best ever: ' + rec.best + '% · Points: ' + store.points + ' 🏅' }),
        el('div', { class: 'quiz-actions', style: 'justify-content:center' }, [
          el('button', { class: 'big-btn secondary', text: 'Try again 🔁', onclick: function () { renderLesson(sub, les); } }),
          el('a', { class: 'big-btn', href: '#/subject/' + sub.id, style: 'text-decoration:none', text: 'Back to ' + sub.name + ' ➡️' })
        ])
      ]));
    }
  }

  /* ---------------- question renderers ---------------- */
  function renderQuestion(q, card, done) {
    if (q.type === 'choice') return qChoice(q, card, done);
    if (q.type === 'type') return qType(q, card, done);
    if (q.type === 'match') return qMatch(q, card, done);
    if (q.type === 'sort') return qSort(q, card, done);
    if (q.type === 'order') return qOrder(q, card, done);
    // unknown type: skip but count as correct so data typos never block progress
    done(1);
  }

  function feedbackAndNext(card, ok, explain, done, points) {
    var fb = el('div', { class: 'feedback ' + (ok ? 'good' : 'bad') }, [
      el('b', { text: ok ? pick(['Correct! 🎉', 'Yes! ⚡', 'Nailed it! 🛡️', 'Brilliant! 🌟']) : 'Not quite! ' }),
      explain ? el('span', { html: ' ' + explain }) : null
    ]);
    card.appendChild(fb);
    var actions = el('div', { class: 'quiz-actions' });
    var btn = el('button', { class: 'big-btn', text: 'Next ➡️', onclick: function () { done(points); } });
    actions.appendChild(btn);
    card.appendChild(actions);
    btn.focus();
  }

  function qChoice(q, card, done) {
    card.appendChild(el('p', { class: 'question-text', html: q.q }));
    var opts = q.options.map(function (text, i) { return { text: text, correct: i === q.answer }; });
    if (q.keepOrder !== true) opts = shuffle(opts);
    var box = el('div', { class: 'options' });
    var answered = false;
    opts.forEach(function (o) {
      var b = el('button', { class: 'option-btn', html: o.text });
      b.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        var buttons = box.querySelectorAll('button');
        buttons.forEach(function (bb) { bb.disabled = true; });
        opts.forEach(function (oo, j) { if (oo.correct) buttons[j].classList.add('correct'); });
        if (!o.correct) b.classList.add('wrong');
        feedbackAndNext(card, o.correct, q.explain, done, o.correct ? 1 : 0);
      });
      box.appendChild(b);
    });
    card.appendChild(box);
  }

  function normalise(s) {
    return String(s).toLowerCase().trim()
      .replace(/[£,!?.]/g, '')
      .replace(/\s+/g, ' ');
  }

  function qType(q, card, done) {
    card.appendChild(el('p', { class: 'question-text', html: q.q }));
    var input = el('input', { class: 'answer-input', type: 'text', autocomplete: 'off', autocapitalize: 'off', placeholder: 'Type your answer…' });
    card.appendChild(input);
    if (q.hint) card.appendChild(el('p', { class: 'progress-label', text: '💡 Hint: ' + q.hint }));
    var actions = el('div', { class: 'quiz-actions' });
    var answered = false;
    function check() {
      if (answered) return;
      var given = normalise(input.value);
      if (!given) return;
      answered = true;
      var answers = (Array.isArray(q.answer) ? q.answer : [q.answer]).map(normalise);
      var ok = answers.indexOf(given) !== -1;
      input.disabled = true;
      input.classList.add(ok ? 'correct' : 'wrong');
      btn.remove();
      var explain = q.explain || '';
      if (!ok) explain = 'The answer was <b>' + esc(Array.isArray(q.answer) ? q.answer[0] : q.answer) + '</b>. ' + explain;
      feedbackAndNext(card, ok, explain, done, ok ? 1 : 0);
    }
    var btn = el('button', { class: 'big-btn', text: 'Check ✔️', onclick: check });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    actions.appendChild(btn);
    card.appendChild(actions);
    input.focus();
  }

  function qMatch(q, card, done) {
    card.appendChild(el('p', { class: 'question-text', html: q.q || 'Match the pairs! Tap one from each side.' }));
    var lefts = q.pairs.map(function (p) { return p[0]; });
    var rights = shuffle(q.pairs.map(function (p) { return p[1]; }));
    var cols = el('div', { class: 'match-cols' });
    var colL = el('div', { class: 'match-col' });
    var colR = el('div', { class: 'match-col' });
    cols.appendChild(colL); cols.appendChild(colR);
    card.appendChild(cols);

    var selected = null; // {side, value, node}
    var matched = 0, mistakes = 0;

    function correctRight(leftVal) {
      for (var i = 0; i < q.pairs.length; i++) if (q.pairs[i][0] === leftVal) return q.pairs[i][1];
      return null;
    }
    function makeItem(side, value) {
      var b = el('button', { class: 'match-item', html: value });
      b.addEventListener('click', function () {
        if (b.classList.contains('matched')) return;
        if (selected && selected.node === b) {
          b.classList.remove('selected'); selected = null; return;
        }
        if (!selected || selected.side === side) {
          if (selected) selected.node.classList.remove('selected');
          selected = { side: side, value: value, node: b };
          b.classList.add('selected');
          return;
        }
        var leftVal = side === 'L' ? value : selected.value;
        var rightVal = side === 'R' ? value : selected.value;
        var isMatch = correctRight(leftVal) === rightVal;
        var other = selected.node;
        if (isMatch) {
          b.classList.remove('selected'); other.classList.remove('selected');
          b.classList.add('matched'); other.classList.add('matched');
          matched++;
          if (matched === q.pairs.length) {
            var points = mistakes === 0 ? 1 : (mistakes <= 2 ? 0.5 : 0);
            var msg = mistakes === 0 ? 'All matched first time!' : 'All matched — ' + mistakes + ' slip' + (mistakes > 1 ? 's' : '') + ' on the way.';
            feedbackAndNext(card, mistakes === 0, (q.explain ? q.explain + ' ' : '') + msg, done, points);
          }
        } else {
          mistakes++;
          b.classList.add('shake'); other.classList.add('shake');
          setTimeout(function () {
            b.classList.remove('shake'); other.classList.remove('shake');
            other.classList.remove('selected');
          }, 380);
          selected = null;
          return;
        }
        selected = null;
      });
      return b;
    }
    lefts.forEach(function (v) { colL.appendChild(makeItem('L', v)); });
    rights.forEach(function (v) { colR.appendChild(makeItem('R', v)); });
  }

  function qSort(q, card, done) {
    card.appendChild(el('p', { class: 'question-text', html: q.q }));
    var items = shuffle(q.items);
    var i = 0, correct = 0;
    var stage = el('div');
    card.appendChild(stage);
    show();
    function show() {
      if (i >= items.length) {
        var points = correct / items.length;
        feedbackAndNext(card, correct === items.length,
          'You sorted ' + correct + ' of ' + items.length + ' correctly. ' + (q.explain || ''), done, points);
        return;
      }
      stage.innerHTML = '';
      var item = items[i];
      stage.appendChild(el('p', { class: 'progress-label', text: 'Item ' + (i + 1) + ' of ' + items.length }));
      stage.appendChild(el('div', { class: 'sort-item', html: item.text }));
      var row = el('div', { class: 'bucket-row' });
      q.buckets.forEach(function (bName, bIdx) {
        row.appendChild(el('button', {
          class: 'bucket-btn', html: bName,
          onclick: function () {
            var ok = bIdx === item.bucket;
            if (ok) correct++;
            var note = el('div', { class: 'feedback ' + (ok ? 'good' : 'bad'),
              html: ok ? '✔️ Yes!' : '✖️ It belongs in <b>' + esc(q.buckets[item.bucket]) + '</b>' + (item.why ? ' — ' + item.why : '') });
            stage.appendChild(note);
            row.querySelectorAll('button').forEach(function (bb) { bb.disabled = true; });
            setTimeout(function () { i++; show(); }, ok ? 700 : 2200);
          }
        }));
      });
      stage.appendChild(row);
    }
  }

  function qOrder(q, card, done) {
    card.appendChild(el('p', { class: 'question-text', html: q.q }));
    card.appendChild(el('p', { class: 'order-slot-label', text: 'Tap the steps in the right order — first one first!' }));
    var result = el('div', { class: 'order-result' });
    var pool = el('div', { class: 'order-pool' });
    card.appendChild(result);
    card.appendChild(pool);
    var nextIdx = 0, mistakes = 0;
    shuffle(q.items.map(function (t, i) { return { t: t, i: i }; })).forEach(function (item) {
      var chip = el('button', { class: 'order-chip', html: item.t });
      chip.addEventListener('click', function () {
        if (chip.classList.contains('placed')) return;
        if (item.i === nextIdx) {
          chip.classList.add('placed');
          chip.innerHTML = '<b>' + (nextIdx + 1) + '.</b> ' + item.t;
          result.appendChild(chip);
          nextIdx++;
          if (nextIdx === q.items.length) {
            var points = mistakes === 0 ? 1 : (mistakes <= 2 ? 0.5 : 0);
            feedbackAndNext(card, mistakes === 0,
              (q.explain ? q.explain + ' ' : '') + (mistakes ? mistakes + ' wrong tap' + (mistakes > 1 ? 's' : '') + '.' : 'Perfect order!'),
              done, points);
          }
        } else {
          mistakes++;
          chip.classList.add('shake');
          setTimeout(function () { chip.classList.remove('shake'); }, 380);
        }
      });
      pool.appendChild(chip);
    });
  }

  /* ---------------- writing quests ---------------- */
  function renderWriting(sub, les) {
    var key = lessonKey(sub.id, les.id);
    var wrap = el('div');
    app.appendChild(wrap);

    (les.learn || []).forEach(function (card) {
      wrap.appendChild(el('div', { class: 'learn-card' }, [
        card.title ? el('h3', { text: '📖 ' + card.title }) : null,
        el('div', { html: card.html })
      ]));
    });

    var card = el('div', { class: 'question-card' });
    card.appendChild(el('p', { class: 'question-text', html: les.write.prompt }));
    var ta = el('textarea', { class: 'write-area', placeholder: 'Write here, Dexter…' });
    ta.value = store.writings[key] || '';
    card.appendChild(ta);
    var wc = el('p', { class: 'word-count' });
    card.appendChild(wc);

    var checks = store.checks[key] || {};
    var list = el('ul', { class: 'checklist' });
    (les.write.checklist || []).forEach(function (itemText, i) {
      var cb = el('input', { type: 'checkbox' });
      cb.checked = !!checks[i];
      cb.addEventListener('change', function () {
        checks[i] = cb.checked;
        store.checks[key] = checks;
        saveStore();
        update();
      });
      list.appendChild(el('li', null, [el('label', null, [cb, el('span', { html: itemText })])]));
    });
    card.appendChild(el('h3', { text: '✅ My checklist' }));
    card.appendChild(list);

    var doneBtn = el('button', { class: 'big-btn', text: 'I finished my writing! 🎉' });
    var prog = getLessonProg(sub.id, les.id);
    if (prog && prog.completed) {
      card.appendChild(el('div', { class: 'feedback good', html: '🌟 You already finished this quest — but you can keep improving it!' }));
    }
    doneBtn.addEventListener('click', function () {
      recordResult(sub.id, les.id, 100);
      confetti();
      renderLesson(sub, les);
      window.scrollTo(0, 0);
    });
    card.appendChild(el('div', { class: 'quiz-actions' }, [doneBtn]));

    var minWords = les.write.minWords || 30;
    function countWords() {
      var t = ta.value.trim();
      return t ? t.split(/\s+/).length : 0;
    }
    function update() {
      var w = countWords();
      wc.textContent = w + ' words (aim for at least ' + minWords + ')';
      wc.className = 'word-count' + (w >= minWords ? ' met' : '');
      var allChecked = (les.write.checklist || []).every(function (_, i) { return checks[i]; });
      doneBtn.disabled = !(w >= minWords && allChecked);
    }
    var saveTimer = null;
    ta.addEventListener('input', function () {
      update();
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        store.writings[key] = ta.value;
        saveStore();
      }, 400);
    });
    update();
    wrap.appendChild(card);
  }

  /* ---------------- planner ---------------- */
  function buildPlan() {
    // Round-robin lessons across subjects into 10 school days.
    var queues = SUBJECTS.map(function (s) {
      return s.lessons.map(function (l) { return { sub: s, les: l }; });
    });
    var ordered = [];
    var added = true;
    while (added) {
      added = false;
      queues.forEach(function (qu) {
        if (qu.length) { ordered.push(qu.shift()); added = true; }
      });
    }
    var days = [];
    var perDay = Math.ceil(ordered.length / 10);
    for (var d = 0; d < 10; d++) {
      days.push(ordered.slice(d * perDay, (d + 1) * perDay));
    }
    return days;
  }

  function renderPlanner() {
    app.innerHTML = '';
    app.appendChild(el('a', { class: 'back-link', href: '#/', text: '← Home' }));
    app.appendChild(el('h1', { text: '📅 Dexter\'s Two-Week Plan' }));
    app.appendChild(el('p', { class: 'subtitle', text: 'A few quests a day keeps the Viking brain strong! Tick them off as you go — and replay the maths practice games any day.' }));
    var days = buildPlan();
    var doneTotal = 0, total = 0;
    days.forEach(function (tasks, d) {
      var allDone = tasks.length > 0 && tasks.every(function (t) {
        var p = getLessonProg(t.sub.id, t.les.id);
        return p && p.completed;
      });
      var card = el('div', { class: 'day-card' });
      card.appendChild(el('h3', { text: (allDone ? '🏆 ' : '🗓️ ') + 'Day ' + (d + 1) + (d === 4 || d === 9 ? '  (end of week ' + (d === 4 ? 1 : 2) + '!)' : '') }));
      tasks.forEach(function (t) {
        total++;
        var p = getLessonProg(t.sub.id, t.les.id);
        var isDone = p && p.completed;
        if (isDone) doneTotal++;
        card.appendChild(el('a', {
          class: 'day-task' + (isDone ? ' done' : ''),
          href: '#/lesson/' + t.sub.id + '/' + t.les.id
        }, [
          el('span', { class: 'tick', text: isDone ? '✅' : '⬜' }),
          el('span', { text: t.sub.icon + ' ' + t.sub.name + ': ' + t.les.title }),
          el('span', { class: 'stars', style: 'margin-left:auto', text: p ? starString(p.stars) : '' })
        ]));
      });
      app.appendChild(card);
    });
    var pct = total ? Math.round(doneTotal / total * 100) : 0;
    app.insertBefore(el('div', { class: 'panel' }, [
      el('div', { class: 'progress-bar' }, [el('div', { style: 'width:' + pct + '%' })]),
      el('p', { class: 'progress-label', text: doneTotal + ' of ' + total + ' quests finished (' + pct + '%)' })
    ]), app.children[3]);
  }

  /* ---------------- awards ---------------- */
  function renderAwards() {
    app.innerHTML = '';
    app.appendChild(el('a', { class: 'back-link', href: '#/', text: '← Home' }));
    app.appendChild(el('h1', { text: '🏆 Dexter\'s Trophy Cabinet' }));

    var totalStars = 0, done = 0, total = 0, subjectsDone = 0;
    SUBJECTS.forEach(function (s) {
      var sDone = 0;
      s.lessons.forEach(function (l) {
        total++;
        var p = getLessonProg(s.id, l.id);
        if (p) totalStars += p.stars;
        if (p && p.completed) { done++; sDone++; }
      });
      if (sDone === s.lessons.length && s.lessons.length) subjectsDone++;
    });

    var awards = [
      { icon: '🐣', name: 'First Steps', desc: 'Finish your first quest', got: done >= 1 },
      { icon: '⚔️', name: 'Young Viking', desc: 'Finish 5 quests', got: done >= 5 },
      { icon: '🛡️', name: 'Shield Bearer', desc: 'Finish 10 quests', got: done >= 10 },
      { icon: '🚢', name: 'Longship Captain', desc: 'Finish 20 quests', got: done >= 20 },
      { icon: '👑', name: 'Viking Chief', desc: 'Finish every quest!', got: done >= total && total > 0 },
      { icon: '⭐', name: 'Star Catcher', desc: 'Earn 15 stars', got: totalStars >= 15 },
      { icon: '🌟', name: 'Star Hoard', desc: 'Earn 50 stars', got: totalStars >= 50 },
      { icon: '🔥', name: 'On Fire!', desc: '3-day streak', got: streak() >= 3 },
      { icon: '🌋', name: 'Unstoppable', desc: '7-day streak', got: streak() >= 7 },
      { icon: '🗺️', name: 'Explorer', desc: 'Complete a whole subject', got: subjectsDone >= 1 },
      { icon: '🦉', name: 'Wise Owl', desc: 'Complete 4 whole subjects', got: subjectsDone >= 4 },
      { icon: '🏅', name: 'Point Hoarder', desc: 'Collect 500 points', got: store.points >= 500 }
    ];
    var got = awards.filter(function (a) { return a.got; }).length;
    app.appendChild(el('p', { class: 'subtitle', text: 'You have unlocked ' + got + ' of ' + awards.length + ' trophies. Keep questing!' }));
    var grid = el('div', { class: 'award-grid' });
    awards.forEach(function (a) {
      grid.appendChild(el('div', { class: 'award' + (a.got ? '' : ' locked') }, [
        el('div', { class: 'icon', text: a.icon }),
        el('b', { text: a.name }),
        el('p', { text: a.desc })
      ]));
    });
    app.appendChild(grid);
  }

  /* ---------------- grown-ups ---------------- */
  function renderGrownups() {
    app.innerHTML = '';
    app.appendChild(el('a', { class: 'back-link', href: '#/', text: '← Home' }));
    app.appendChild(el('h1', { text: '👪 Grown-ups\' corner' }));

    // recent activity
    var act = el('div', { class: 'panel' });
    act.appendChild(el('h2', { text: '📊 Recent activity' }));
    if (!store.log.length) {
      act.appendChild(el('p', { text: 'No quests played yet.' }));
    } else {
      var byDay = {};
      store.log.forEach(function (e) { (byDay[e.d] = byDay[e.d] || []).push(e); });
      Object.keys(byDay).sort().reverse().slice(0, 14).forEach(function (d) {
        var entries = byDay[d];
        var avg = Math.round(entries.reduce(function (a, e) { return a + e.s; }, 0) / entries.length);
        act.appendChild(el('p', { html: '<b>' + d + '</b> — ' + entries.length + ' quest attempt' + (entries.length > 1 ? 's' : '') + ', average score ' + avg + '%' }));
      });
    }
    app.appendChild(act);

    // writings
    var writes = el('div', { class: 'panel' });
    writes.appendChild(el('h2', { text: '✍️ Dexter\'s writing' }));
    var anyWriting = false;
    SUBJECTS.forEach(function (s) {
      s.lessons.forEach(function (l) {
        var w = store.writings[lessonKey(s.id, l.id)];
        if (w && w.trim()) {
          anyWriting = true;
          writes.appendChild(el('h3', { text: s.icon + ' ' + l.title }));
          writes.appendChild(el('p', { style: 'white-space:pre-wrap;background:#f8f9fa;padding:12px;border-radius:10px', text: w }));
        }
      });
    });
    if (!anyWriting) writes.appendChild(el('p', { text: 'Writing quests will show up here once Dexter starts them.' }));
    app.appendChild(writes);

    // backup
    var backup = el('div', { class: 'panel' });
    backup.appendChild(el('h2', { text: '💾 Save & restore progress' }));
    backup.appendChild(el('p', { text: 'Progress is saved automatically in this browser. To move it to another device (or keep a backup), copy the code below and paste it on the other device, then press Restore.' }));
    var ta = el('textarea');
    ta.value = JSON.stringify(store);
    backup.appendChild(ta);
    backup.appendChild(el('div', { class: 'quiz-actions' }, [
      el('button', { class: 'big-btn secondary', text: 'Copy backup code', onclick: function () {
        ta.select();
        try { navigator.clipboard.writeText(ta.value); } catch (e) { document.execCommand('copy'); }
        alert('Backup code copied! Save it somewhere safe (email it to yourself).');
      } }),
      el('button', { class: 'big-btn', text: 'Restore from code', onclick: function () {
        try {
          var s = JSON.parse(ta.value);
          if (!s || typeof s !== 'object' || !s.lessons) throw new Error('bad');
          store = Object.assign(defaultStore(), s);
          saveStore();
          alert('Progress restored!');
          route();
        } catch (e) { alert('That code does not look right — paste the whole backup code and try again.'); }
      } })
    ]));
    app.appendChild(backup);

    // reset
    var danger = el('div', { class: 'panel' });
    danger.appendChild(el('h2', { text: '🧨 Start again' }));
    danger.appendChild(el('button', { class: 'danger', text: 'Reset ALL progress', onclick: function () {
      if (confirm('Really delete all of Dexter\'s progress, stars and writing? This cannot be undone.') &&
          confirm('Are you absolutely sure?')) {
        store = defaultStore();
        saveStore();
        alert('All progress has been reset.');
        location.hash = '#/';
      }
    } }));
    app.appendChild(danger);
  }

  /* ---------------- boot ---------------- */
  route();
})();
