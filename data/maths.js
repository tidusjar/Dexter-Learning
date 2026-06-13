/* Maths — Year 4 Summer 2: money, time, shape, position & direction, arithmetic */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'maths',
  name: 'Maths',
  icon: '🔢',
  color: '#e63946',
  tagline: 'Money, time, shape, position — plus arithmetic and times-tables games!',
  lessons: [
    {
      id: 'money-compare',
      title: 'Comparing and ordering money',
      emoji: '💰',
      learn: [
        {
          title: 'Pounds and pence',
          html: '<p>There are <b>100 pence (p) in £1</b>. So £2.45 means 2 pounds and 45 pence — that is <b>245p</b> altogether.</p>' +
                '<p>To compare amounts, it helps to turn them all into pence first. Which is bigger: £1.09 or 95p? £1.09 = 109p, and 109p &gt; 95p, so <b>£1.09 is bigger</b>.</p>' +
                '<p>Watch out for sneaky amounts like £1.5 — that means £1.50 (150p), not £1.05!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'How many pence are there in £1?', options: ['100p', '10p', '1000p', '12p'], answer: 0, explain: 'There are 100 pence in every pound.' },
        { type: 'type', q: 'Write £3.20 in pence (just the number).', answer: ['320', '320p'], explain: '£3.20 = 300p + 20p = 320p.' },
        { type: 'type', q: 'Write 408p in pounds (like £2.36).', answer: ['£4.08', '4.08'], explain: '400p is £4, plus 8p = £4.08.' },
        { type: 'choice', q: 'Which is the <b>largest</b> amount?', options: ['£2.09', '£2.90', '£0.99', '209p'], answer: 1, explain: '£2.90 = 290p, which beats 209p and 99p.' },
        { type: 'choice', q: 'Which is the <b>smallest</b> amount?', options: ['150p', '£1.05', '£1.50', '£5.01'], answer: 1, explain: '£1.05 = 105p — smaller than 150p and the others.' },
        { type: 'choice', q: 'Which two amounts are the SAME?', options: ['£3.07 and 307p', '£3.70 and 307p', '£3.07 and 370p', '£7.30 and 37p'], answer: 0, explain: '£3.07 = 300p + 7p = 307p.' },
        { type: 'order', q: 'Put these amounts in order, <b>smallest first</b>:', items: ['89p', '£1.08', '£1.80', '£8.10'], explain: '89p, then 108p, 180p, 810p.' },
        { type: 'type', q: 'Dexter has a £2 coin, a 50p coin and a 20p coin. How much does he have? (like £1.45)', answer: ['£2.70', '2.70', '270p', '270'], explain: '£2 + 50p + 20p = £2.70.' },
        { type: 'choice', q: 'Which set of coins makes exactly £1.35?', options: ['£1 + 20p + 10p + 5p', '£1 + 20p + 20p', '50p + 50p + 20p', '£1 + 5p + 5p'], answer: 0, explain: '100 + 20 + 10 + 5 = 135p = £1.35.' },
        { type: 'sort', q: 'Sort these amounts: are they MORE or LESS than £2?', buckets: ['More than £2', 'Less than £2'], items: [
          { text: '£2.05', bucket: 0 }, { text: '199p', bucket: 1 }, { text: '£1.99', bucket: 1 },
          { text: '250p', bucket: 0 }, { text: '£0.95', bucket: 1 }, { text: '201p', bucket: 0 }
        ], explain: 'Turning everything into pence makes comparing easy: £2 = 200p.' },
        { type: 'coins', q: '🪙 You\'re the shopkeeper! Put coins in the till to make exactly <b>£1.35</b>, then press Pay.', target: 135, explain: '£1 + 20p + 10p + 5p is one way — there are lots of others!' },
        { type: 'type', q: 'Write 75p in pounds (like £3.20).', answer: ['£0.75', '0.75'], explain: '75p is less than £1, so it is £0.75.' },
        { type: 'type', q: 'Write £5.08 in pence (just the number).', answer: ['508', '508p'], explain: '£5.08 = 500p + 8p = 508p.' },
        { type: 'choice', q: 'Which amount is worth the <b>most</b>?', options: ['305p', '£3.05', '£3.50', '35p'], answer: 2, explain: '£3.50 = 350p, which beats 305p and 35p.' },
        { type: 'choice', q: 'Which amount is worth the <b>least</b>?', options: ['£2.00', '200p', '£2.01', '£0.99'], answer: 3, explain: '£0.99 = 99p — less than £2 = 200p and the others.' },
        { type: 'type', q: 'Dexter has a £1 coin, two 20p coins and a 5p coin. How much does he have? (like £1.45)', answer: ['£1.45', '1.45', '145p', '145'], explain: '100 + 20 + 20 + 5 = 145p = £1.45.' },
        { type: 'order', q: 'Put these amounts in order, <b>largest first</b>:', items: ['£10.00', '£9.99', '999p', '99p'] },
        { type: 'match', q: 'Match each amount in pence to its pounds version:', pairs: [
          ['250p', '£2.50'], ['107p', '£1.07'], ['60p', '£0.60'], ['500p', '£5.00']
        ] },
        { type: 'sort', q: 'Sort these amounts: are they MORE or LESS than £5?', buckets: ['More than £5', 'Less than £5'], items: [
          { text: '£5.01', bucket: 0 }, { text: '499p', bucket: 1 }, { text: '£4.99', bucket: 1 },
          { text: '510p', bucket: 0 }, { text: '£5.50', bucket: 0 }, { text: '£0.50', bucket: 1 }
        ], explain: '£5 = 500p — compare everything to 500p.' },
        { type: 'coins', q: '⚔️ A toy Viking sword costs <b>£2.85</b>. Put exactly the right coins in the till!', target: 285, explain: '£2 + 50p + 20p + 10p + 5p = 285p.' }
      ]
    },
    {
      id: 'money-calc',
      title: 'Adding money and giving change',
      emoji: '🛒',
      learn: [
        {
          title: 'Adding amounts and finding change',
          html: '<p>To add money, add the pounds and the pence: £2.30 + £1.45 → £3.75.</p>' +
                '<p>To find <b>change</b>, count up from the price to what you paid. If a comic costs £1.60 and you pay £2: count 40p up to £2, so the change is <b>40p</b>.</p>' +
                '<p>Tip: if the pence add up to more than 100, swap 100p for £1! £1.70 + £1.50 = £2 + 120p = <b>£3.20</b>.</p>'
        }
      ],
      questions: [
        { type: 'type', q: 'An apple costs 35p and a banana costs 25p. How much altogether? (in pence)', answer: ['60', '60p'], explain: '35 + 25 = 60p.' },
        { type: 'type', q: '£1.20 + £2.30 = ? (like £4.95)', answer: ['£3.50', '3.50', '350p'], explain: '£1 + £2 = £3, and 20p + 30p = 50p.' },
        { type: 'type', q: '£2.50 + £1.75 = ? (like £1.10)', answer: ['£4.25', '4.25', '425p'], explain: '50p + 75p = 125p = £1.25, so £3 + £1.25 = £4.25.' },
        { type: 'type', q: 'A toy Viking ship costs £4.99. You pay with a £5 note. How much change? (in pence)', answer: ['1', '1p'], explain: 'Count up: 99p + 1p = £1, so just 1p change.' },
        { type: 'type', q: 'A book costs £3.40. You pay £5. How much change? (like £2.05)', answer: ['£1.60', '1.60', '160p', '160'], explain: '£3.40 + 60p = £4, + £1 = £5. Change = £1.60.' },
        { type: 'choice', q: 'An ice cream is £1.85 and a drink is £1.20. Roughly how much is that altogether?', options: ['About £3', 'About £2', 'About £5', 'About £1'], answer: 0, explain: '£1.85 is nearly £2, plus £1.20 — about £3.' },
        { type: 'type', q: 'Dexter buys 3 stickers at 30p each. How much does he spend? (in pence)', answer: ['90', '90p'], explain: '3 × 30p = 90p.' },
        { type: 'type', q: 'A sandwich costs £2.25 and crisps cost 80p. Total? (like £1.95)', answer: ['£3.05', '3.05', '305p'], explain: '£2.25 + 80p: 25p + 80p = 105p = £1.05, so £3.05.' },
        { type: 'choice', q: 'You have £10. You spend £6.50. Do you have enough left to buy something for £3.49?', options: ['Yes — you have £3.50 left', 'No — you only have £3.40 left', 'No — you have nothing left'], answer: 0, explain: '£10 − £6.50 = £3.50, which is just enough!' },
        { type: 'type', q: 'Two friends share the cost of an £8.40 pizza equally. How much does each pay? (like £2.15)', answer: ['£4.20', '4.20', '420p'], explain: '£8.40 ÷ 2 = £4.20.' },
        { type: 'coins', q: '🍎 An apple costs <b>85p</b>. Put exactly the right coins in the till and press Pay!', target: 85, explain: '50p + 20p + 10p + 5p works — or 20p + 20p + 20p + 20p + 5p!' },
        { type: 'coins', q: '⛑️ A toy Viking helmet costs <b>£2.40</b>. Pay exactly!', target: 240, explain: '£2 + 20p + 20p is the quickest way.' },
        { type: 'type', q: '£1.75 + £2.50 = ? (like £3.80)', answer: ['£4.25', '4.25', '425p'], explain: '75p + 50p = 125p = £1.25, so £3 + £1.25 = £4.25.' },
        { type: 'type', q: 'A pen costs 65p and a ruler costs 45p. How much altogether? (in pence)', answer: ['110', '110p'], explain: '65 + 45 = 110p.' },
        { type: 'type', q: 'A Viking book costs £6.00. You pay with a £10 note. How much change? (like £2.50)', answer: ['£4.00', '4.00', '400p', '£4', '4'], explain: '£10 − £6 = £4.00.' },
        { type: 'type', q: 'Dexter buys 4 pencils at 25p each. How much does he spend? (in pence)', answer: ['100', '100p', '£1', '£1.00', '1.00'], explain: '4 × 25p = 100p = £1.00.' },
        { type: 'choice', q: 'A shield costs £3.60 and a helmet costs £2.75. Roughly how much is that altogether?', options: ['About £6', 'About £5', 'About £7', 'About £4'], answer: 0, explain: '£3.60 is nearly £4 and £2.75 is nearly £3 — about £6 or £7; £6 is closest.' },
        { type: 'type', q: 'Three friends share the cost of a £9.60 feast equally. How much does each pay? (like £2.30)', answer: ['£3.20', '3.20', '320p'], explain: '£9.60 ÷ 3 = £3.20.' },
        { type: 'type', q: 'A drink costs £1.30 and a snack costs £1.90. You pay £5. How much change? (like £1.25)', answer: ['£1.80', '1.80', '180p'], explain: '£1.30 + £1.90 = £3.20; £5.00 − £3.20 = £1.80.' },
        { type: 'coins', q: '🍞 A loaf of Viking bread costs <b>£1.60</b>. Pay exactly!', target: 160, explain: '£1 + 50p + 10p works perfectly.' }
      ]
    },
    {
      id: 'money-practice',
      title: 'Money practice game',
      emoji: '🪙',
      gen: 'money',
      target: 14,
      learn: [
        { title: 'Shopkeeper challenge!', html: '<p>You are the shopkeeper! Add up the prices and work out the change. Answer like <b>£3.45</b>. A new set of questions every time — play it every day!</p>' }
      ]
    },
    {
      id: 'time-clocks',
      title: 'Telling the time',
      emoji: '🕰️',
      learn: [
        {
          title: 'Reading clocks',
          html: '<p>The <b>short hand</b> shows the hour, the <b>long hand</b> shows the minutes.</p>' +
                '<ul><li>Long hand on 12 → <b>o\'clock</b></li><li>Long hand on 3 → <b>quarter past</b></li><li>Long hand on 6 → <b>half past</b></li><li>Long hand on 9 → <b>quarter to</b> the NEXT hour</li></ul>' +
                '<p>Each number on the clock face is worth <b>5 minutes</b> for the long hand. So the long hand on 4 means 20 minutes past.</p>'
        },
        {
          title: '24-hour time',
          html: '<p>After 12 noon, the 24-hour clock keeps counting: 1pm = <b>13:00</b>, 2pm = <b>14:00</b>… just add 12! And 15:30 = 3:30pm.</p>' +
                '<p>Morning times stay the same: 9am = 09:00.</p>'
        }
      ],
      questions: [
        { type: 'clock', h: 3, m: 0, q: '🕒 The Viking feast starts at the time on this clock. What time is it?', options: ['3 o\'clock', '12 o\'clock', 'Quarter past 3', 'Half past 3'], answer: 0, explain: 'The long hand is on 12 (o\'clock) and the short hand points at 3.' },
        { type: 'clock', h: 7, m: 30, q: '🕢 The longship sets sail at this time. What does the clock say?', options: ['Half past 7', 'Half past 6', '7 o\'clock', 'Quarter to 7'], answer: 0, explain: 'Long hand on 6 = half past, and the hour hand is between 7 and 8.' },
        { type: 'clock', h: 4, m: 15, q: '🕓 Dragon training begins now! Read the clock:', options: ['Quarter past 4', 'Quarter to 4', 'Quarter past 3', 'Half past 4'], answer: 0, explain: 'Long hand on 3 = quarter past, hour hand just past 4.' },
        { type: 'clock', h: 11, m: 45, q: '🕦 The raid must end at this time. What is it?', options: ['Quarter to 12', 'Quarter past 11', 'Quarter to 11', 'Half past 11'], answer: 0, explain: 'Long hand on 9 = quarter TO the NEXT hour — quarter to 12.' },
        { type: 'clock', h: 6, m: 20, q: '🕕 Supper time at the longhouse! Read this clock:', options: ['Twenty past 6', 'Twenty to 6', 'Ten past 6', 'Quarter past 6'], answer: 0, explain: 'The long hand on 4 means 4 × 5 = 20 minutes past.' },
        { type: 'clock', h: 9, m: 55, q: '🕘 Nearly bedtime — what time does this clock show?', options: ['Five to 10', 'Five past 9', 'Quarter to 10', 'Five to 9'], answer: 0, explain: 'The long hand on 11 means 5 minutes TO the next hour: five to 10.' },
        { type: 'type', q: 'The long hand points at the 4. How many minutes past the hour is that?', answer: ['20', '20 minutes'], explain: 'Each clock number is 5 minutes: 4 × 5 = 20.' },
        { type: 'type', q: 'Write 3pm in 24-hour time (like 17:00).', answer: ['15:00', '1500', '15.00'], explain: '3 + 12 = 15, so 3pm is 15:00.' },
        { type: 'type', q: 'Write 7pm in 24-hour time (like 14:00).', answer: ['19:00', '1900', '19.00'], explain: '7 + 12 = 19.' },
        { type: 'choice', q: 'What time is 17:30 on a normal (12-hour) clock?', options: ['5:30pm', '7:30pm', '5:30am', '7:30am'], answer: 0, explain: '17 − 12 = 5, so 17:30 is 5:30 in the afternoon.' },
        { type: 'choice', q: 'Which of these is a MORNING time?', options: ['08:45', '14:20', '19:05', '23:50'], answer: 0, explain: 'Times before 12:00 are in the morning (am).' },
        { type: 'type', q: 'How many minutes are there in one hour?', answer: ['60'], explain: '60 minutes = 1 hour.' },
        { type: 'type', q: 'How many seconds are there in one minute?', answer: ['60'], explain: '60 seconds = 1 minute.' },
        { type: 'match', q: 'Match the times that mean the same thing:', pairs: [
          ['Quarter past 3', '3:15'], ['Half past 7', '7:30'], ['Quarter to 10', '9:45'], ['8 o\'clock in the evening', '20:00']
        ] },
        { type: 'clock', h: 2, m: 0, q: '🕑 The Viking lookout spots a ship at this time. What time is it?', options: ['2 o\'clock', '12 o\'clock', 'Half past 2', 'Quarter past 2'], answer: 0, explain: 'Long hand on 12 means o\'clock; short hand on 2 means 2 o\'clock.' },
        { type: 'clock', h: 8, m: 15, q: '🕗 Warriors start training at this time. What does the clock say?', options: ['Quarter past 8', 'Quarter to 8', 'Quarter past 9', 'Half past 8'], answer: 0, explain: 'Long hand on 3 = quarter past; short hand just past 8.' },
        { type: 'clock', h: 5, m: 30, q: '🕠 The longship returns at this time. Read the clock!', options: ['Half past 5', 'Half past 6', '5 o\'clock', 'Quarter to 6'], answer: 0, explain: 'Long hand on 6 = half past; short hand between 5 and 6.' },
        { type: 'clock', h: 10, m: 45, q: '🕙 Time for the Viking council meeting! What time is shown?', options: ['Quarter to 11', 'Quarter past 10', 'Quarter to 10', 'Half past 10'], answer: 0, explain: 'Long hand on 9 = quarter TO the NEXT hour — quarter to 11.' },
        { type: 'type', q: 'The long hand points at the 7. How many minutes past the hour is that?', answer: ['35', '35 minutes'], explain: 'Each number is 5 minutes: 7 × 5 = 35.' },
        { type: 'choice', q: 'What time is 21:00 on a normal 12-hour clock?', options: ['9pm', '9am', '10pm', '8pm'], answer: 0, explain: '21 − 12 = 9, so 21:00 is 9 o\'clock in the evening — 9pm.' },
        { type: 'type', q: 'Write 11pm in 24-hour time (like 14:00).', answer: ['23:00', '2300', '23.00'], explain: '11 + 12 = 23, so 11pm is 23:00.' }
      ]
    },
    {
      id: 'time-problems',
      title: 'Time problems',
      emoji: '⏳',
      learn: [
        {
          title: 'How long does it take?',
          html: '<p>To find how long something takes, count up from the start time to the end time.</p>' +
                '<p>Film starts at 4:50 and ends at 6:05. Count: 4:50 → 5:00 is 10 minutes, then 5:00 → 6:00 is 1 hour, then 6:00 → 6:05 is 5 minutes. Total: <b>1 hour 15 minutes</b>.</p>' +
                '<p>Useful facts: 60 minutes = 1 hour · 24 hours = 1 day · 7 days = 1 week · 12 months = 1 year.</p>'
        }
      ],
      questions: [
        { type: 'type', q: 'Swimming starts at 10:00 and finishes at 10:45. How many minutes is that?', answer: ['45', '45 minutes'], explain: 'From 10:00 to 10:45 is 45 minutes.' },
        { type: 'choice', q: 'A film starts at 3:30 and lasts 1 hour 20 minutes. When does it finish?', options: ['4:50', '4:30', '5:00', '4:20'], answer: 0, explain: '3:30 + 1 hour = 4:30, + 20 min = 4:50.' },
        { type: 'type', q: 'How many minutes are there in 2 hours?', answer: ['120'], explain: '2 × 60 = 120 minutes.' },
        { type: 'type', q: 'How many hours are there in 2 days?', answer: ['48'], explain: '2 × 24 = 48 hours.' },
        { type: 'choice', q: 'Lunch starts at 12:15 and ends at 1:00. How long is lunch?', options: ['45 minutes', '30 minutes', '1 hour', '15 minutes'], answer: 0, explain: '12:15 → 1:00 is 45 minutes.' },
        { type: 'choice', q: 'Dexter\'s Viking lesson is 50 minutes long. It starts at 9:25. When does it end?', options: ['10:15', '10:25', '9:75', '10:05'], answer: 0, explain: '9:25 + 35 min = 10:00, + 15 more = 10:15.' },
        { type: 'type', q: 'How many days are there in 3 weeks?', answer: ['21'], explain: '3 × 7 = 21 days.' },
        { type: 'choice', q: 'Which is the LONGEST time?', options: ['100 minutes', '1 hour', 'Half an hour', '90 seconds'], answer: 0, explain: '100 minutes is 1 hour 40 minutes — longer than the rest.' },
        { type: 'type', q: 'A cake needs 35 minutes in the oven. It went in at 2:40. What time does it come out? (like 4:25)', answer: ['3:15', '315', '15:15', '3.15'], explain: '2:40 + 20 min = 3:00, + 15 min = 3:15.' },
        { type: 'order', q: 'Put these units of time in order, <b>shortest first</b>:', items: ['Second', 'Minute', 'Hour', 'Day', 'Week', 'Year'] },
        { type: 'type', q: 'How many minutes are there in half an hour?', answer: ['30', '30 minutes'], explain: 'Half of 60 = 30 minutes.' },
        { type: 'type', q: 'How many months are there in a year?', answer: ['12', 'twelve'], explain: 'There are 12 months in a year.' },
        { type: 'choice', q: 'A Viking voyage starts at 6:15 and ends at 8:45. How long does it last?', options: ['2 hours 30 minutes', '2 hours 15 minutes', '2 hours 45 minutes', '1 hour 30 minutes'], answer: 0, explain: '6:15 → 7:15 = 1 hr, → 8:15 = 2 hrs, → 8:45 = another 30 min. Total: 2 hours 30 minutes.' },
        { type: 'type', q: 'How many seconds are there in 2 minutes?', answer: ['120'], explain: '2 × 60 = 120 seconds.' },
        { type: 'choice', q: 'Dexter\'s reading time starts at 7:40 and lasts 25 minutes. When does it finish?', options: ['8:05', '8:15', '7:65', '8:00'], answer: 0, explain: '7:40 + 20 min = 8:00, + 5 more = 8:05.' },
        { type: 'type', q: 'How many hours are there in 3 days?', answer: ['72'], explain: '3 × 24 = 72 hours.' },
        { type: 'choice', q: 'Which is the SHORTEST time?', options: ['90 seconds', '2 minutes', '1 hour', '1 day'], answer: 0, explain: '90 seconds is 1 minute 30 seconds — shorter than 2 minutes, let alone an hour or a day!' },
        { type: 'type', q: 'A Viking training session runs from 10:30 to 11:15. How long is that? (in minutes)', answer: ['45', '45 minutes'], explain: '10:30 → 11:00 = 30 min, → 11:15 = another 15 min. 30 + 15 = 45 minutes.' },
        { type: 'sort', q: 'Sort these durations: are they MORE or LESS than 1 hour?', buckets: ['More than 1 hour', 'Less than 1 hour'], items: [
          { text: '90 minutes', bucket: 0 }, { text: '45 minutes', bucket: 1 }, { text: '70 minutes', bucket: 0 },
          { text: '30 minutes', bucket: 1 }, { text: '65 minutes', bucket: 0 }, { text: '59 minutes', bucket: 1 }
        ], explain: '1 hour = 60 minutes. Anything over 60 minutes is more than 1 hour.' },
        { type: 'choice', q: 'The feast starts at 5:50 and lasts 1 hour 30 minutes. When does it end?', options: ['7:20', '6:20', '7:50', '7:30'], answer: 0, explain: '5:50 + 1 hr = 6:50, + 30 min = 7:20.' }
      ]
    },
    {
      id: 'shape',
      title: 'Shapes and symmetry',
      emoji: '🔷',
      learn: [
        {
          title: 'Naming shapes',
          html: '<table><tr><th>Shape</th><th>Sides</th></tr><tr><td>Triangle</td><td>3</td></tr><tr><td>Quadrilateral (square, rectangle…)</td><td>4</td></tr><tr><td>Pentagon</td><td>5</td></tr><tr><td>Hexagon</td><td>6</td></tr><tr><td>Octagon</td><td>8</td></tr></table>' +
                '<p>A <b>line of symmetry</b> is a fold line where both halves match exactly. A square has 4 lines of symmetry; a rectangle has 2.</p>' +
                '<p><b>Angles:</b> a right angle is a quarter turn (90°). Angles smaller than a right angle are <b>acute</b>; bigger ones (but less than a straight line) are <b>obtuse</b>.</p>'
        }
      ],
      questions: [
        { type: 'type', q: 'How many sides does a hexagon have?', answer: ['6', 'six'], explain: 'Hex- means six!' },
        { type: 'type', q: 'How many sides does a pentagon have?', answer: ['5', 'five'], explain: 'Pent- means five.' },
        { type: 'choice', q: 'Which shape has 8 sides?', options: ['Octagon', 'Hexagon', 'Pentagon', 'Decagon'], answer: 0, explain: 'Oct- means eight — like an octopus\'s 8 legs!' },
        { type: 'choice', q: 'A shape with 4 equal sides and 4 right angles is a…', options: ['Square', 'Rectangle', 'Rhombus', 'Triangle'], answer: 0, explain: 'A rectangle has 4 right angles too, but its sides aren\'t all equal.' },
        { type: 'type', q: 'How many lines of symmetry does a square have?', answer: ['4', 'four'], explain: 'Two through the middles of the sides, two through the corners.' },
        { type: 'choice', q: 'An angle SMALLER than a right angle is called…', options: ['Acute', 'Obtuse', 'Straight', 'Reflex'], answer: 0, explain: 'A cute little angle is acute!' },
        { type: 'choice', q: 'How many degrees in a right angle?', options: ['90°', '100°', '180°', '45°'], answer: 0, explain: 'A right angle is a quarter turn: 90°.' },
        { type: 'match', q: 'Match each shape to its number of sides:', pairs: [
          ['Triangle', '3 sides'], ['Quadrilateral', '4 sides'], ['Pentagon', '5 sides'], ['Octagon', '8 sides']
        ] },
        { type: 'sort', q: 'Sort the shapes: 2D (flat) or 3D (solid)?', buckets: ['2D — flat', '3D — solid'], items: [
          { text: 'Circle', bucket: 0 }, { text: 'Cube', bucket: 1 }, { text: 'Sphere', bucket: 1 },
          { text: 'Triangle', bucket: 0 }, { text: 'Cylinder', bucket: 1 }, { text: 'Hexagon', bucket: 0 }
        ] },
        { type: 'type', q: 'How many faces does a cube have?', answer: ['6', 'six'], explain: 'Top, bottom and four sides — like a dice.' },
        { type: 'type', q: 'How many sides does an octagon have?', answer: ['8', 'eight'], explain: 'Oct- means eight — like an octopus!' },
        { type: 'choice', q: 'An angle BIGGER than a right angle (but less than a straight line) is called…', options: ['Obtuse', 'Acute', 'Straight', 'Right'], answer: 0, explain: 'Obtuse angles are between 90° and 180°.' },
        { type: 'choice', q: 'How many lines of symmetry does a rectangle have?', options: ['2', '4', '0', '1'], answer: 0, explain: 'A rectangle has one line through the middles of the long sides and one through the middles of the short sides — 2 in total.' },
        { type: 'type', q: 'A quadrilateral has how many sides?', answer: ['4', 'four'], explain: 'Quad- means four. Squares and rectangles are quadrilaterals.' },
        { type: 'choice', q: 'Dexter draws a shape with 5 sides. What is it called?', options: ['Pentagon', 'Hexagon', 'Octagon', 'Triangle'], answer: 0, explain: 'Pent- means five — a pentagon has 5 sides.' },
        { type: 'sort', q: 'Sort these angles: are they acute (less than 90°) or obtuse (more than 90°)?', buckets: ['Acute (less than 90°)', 'Obtuse (more than 90°)'], items: [
          { text: '45°', bucket: 0 }, { text: '120°', bucket: 1 }, { text: '30°', bucket: 0 },
          { text: '150°', bucket: 1 }, { text: '60°', bucket: 0 }, { text: '100°', bucket: 1 }
        ], explain: 'Acute angles are less than 90°; obtuse angles are between 90° and 180°.' },
        { type: 'type', q: 'A straight line is an angle of how many degrees?', answer: ['180', '180°'], explain: 'A straight line is two right angles: 90° + 90° = 180°.' },
        { type: 'match', q: 'Match each 3D shape to something it looks like:', pairs: [
          ['Sphere', 'Football'], ['Cube', 'Dice'], ['Cylinder', 'Tin of beans'], ['Cone', 'Ice cream cone']
        ] },
        { type: 'choice', q: 'A triangle has how many corners (vertices)?', options: ['3', '4', '2', '6'], answer: 0, explain: 'A triangle has 3 sides and 3 corners — they always match!' },
        { type: 'type', q: 'A full turn (going all the way round) is how many degrees?', answer: ['360', '360°'], explain: 'One full turn = 360°. A right angle is a quarter of that: 90°.' }
      ]
    },
    {
      id: 'position',
      title: 'Position and direction',
      emoji: '🧭',
      learn: [
        {
          title: 'Coordinates',
          html: '<p>Coordinates tell you where a point is on a grid: <b>(across, up)</b>.</p>' +
                '<p>Remember: <b>"along the corridor, then up the stairs"</b> — go ACROSS first (x), then UP (y). So (3, 5) means 3 across, 5 up.</p>' +
                '<p>A <b>translation</b> slides a shape without turning it — like "move 2 right and 1 up".</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'For the point (4, 2), what does the 4 tell you?', options: ['How far ACROSS to go', 'How far UP to go', 'The size of the point', 'Nothing'], answer: 0, explain: 'Along the corridor first: across 4, then up 2.' },
        { type: 'choice', q: 'Which point is 5 across and 1 up?', options: ['(5, 1)', '(1, 5)', '(5, 5)', '(1, 1)'], answer: 0, explain: 'Across first, up second: (5, 1).' },
        { type: 'type', q: 'A treasure chest is 0 across and 7 up. Write its coordinates like (3,4).', answer: ['(0,7)', '(0, 7)', '0,7'], explain: 'Across is 0, up is 7 → (0, 7).' },
        { type: 'choice', q: 'Start at (2, 3). Move 3 right. Where are you now?', options: ['(5, 3)', '(2, 6)', '(5, 6)', '(3, 3)'], answer: 0, explain: 'Moving right adds to the ACROSS number: 2 + 3 = 5.' },
        { type: 'choice', q: 'Start at (4, 1). Move 2 up. Where are you now?', options: ['(4, 3)', '(6, 1)', '(2, 1)', '(4, 2)'], answer: 0, explain: 'Moving up adds to the UP number: 1 + 2 = 3.' },
        { type: 'choice', q: 'A longship sails from (1, 1) to (1, 6). How did it move?', options: ['5 squares up', '5 squares right', '6 squares up', '1 square up'], answer: 0, explain: 'The across number stayed at 1; up went from 1 to 6 — that is 5 up.' },
        { type: 'choice', q: 'What is a translation?', options: ['Sliding a shape without turning it', 'Turning a shape around', 'Making a shape bigger', 'Cutting a shape in half'], answer: 0, explain: 'A translation slides a shape — same size, same way up.' },
        { type: 'choice', q: 'Start at (3, 5). Move 1 left and 2 down. Where do you end up?', options: ['(2, 3)', '(4, 7)', '(1, 3)', '(2, 7)'], answer: 0, explain: 'Left takes 1 off across (3→2); down takes 2 off up (5→3).' },
        { type: 'gridpick', q: '🏴‍☠️ Dig for treasure at <b>(3, 2)</b>! Tap that square on the grid.', cols: 6, rows: 5, target: [3, 2], explain: '3 along the corridor, then 2 up the stairs!' },
        { type: 'gridpick', q: 'Tap the point <b>(0, 4)</b> — careful, ACROSS comes first!', cols: 6, rows: 5, target: [0, 4], explain: 'Across 0 means stay by the left edge, then climb 4 up.' },
        { type: 'gridpick', q: 'The longship 🚢 sails <b>2 squares right and 1 up</b>. Tap the square where it lands!', cols: 6, rows: 5, marks: [{ x: 1, y: 1, emoji: '🚢' }], target: [3, 2], explain: 'From (1, 1): right 2 makes the across number 3, up 1 makes the up number 2 — it lands at (3, 2).' },
        { type: 'gridpick', q: 'The dragon 🐉 at (4, 3) flies <b>3 squares LEFT</b>. Tap where it lands!', cols: 6, rows: 5, marks: [{ x: 4, y: 3, emoji: '🐉' }], target: [1, 3], explain: 'Left takes away from the across number: 4 − 3 = 1, so it lands at (1, 3).' },
        { type: 'match', q: 'Match the move to what happens to the coordinates:', pairs: [
          ['Move right', 'Across number gets bigger'], ['Move left', 'Across number gets smaller'],
          ['Move up', 'Up number gets bigger'], ['Move down', 'Up number gets smaller']
        ] },
        { type: 'choice', q: 'For the point (2, 6), what does the 6 tell you?', options: ['How far UP to go', 'How far ACROSS to go', 'The size of the grid', 'Nothing important'], answer: 0, explain: 'The second number is always the UP number.' },
        { type: 'type', q: 'A longship is 4 across and 0 up. Write its coordinates like (3,4).', answer: ['(4,0)', '(4, 0)', '4,0'], explain: 'Across is 4, up is 0 → (4, 0).' },
        { type: 'choice', q: 'Start at (3, 4). Move 2 left and 3 down. Where do you end up?', options: ['(1, 1)', '(5, 7)', '(1, 7)', '(5, 1)'], answer: 0, explain: 'Left 2: 3 − 2 = 1 across. Down 3: 4 − 3 = 1 up. → (1, 1).' },
        { type: 'gridpick', q: '⚔️ Dexter hides a sword at <b>(2, 4)</b>. Tap that square!', cols: 6, rows: 6, target: [2, 4], explain: '2 along the corridor, then 4 up the stairs — (2, 4).' },
        { type: 'gridpick', q: 'The Viking 🪖 at (0, 2) marches <b>4 squares right and 2 up</b>. Tap where he lands!', cols: 6, rows: 6, marks: [{ x: 0, y: 2, emoji: '🪖' }], target: [4, 4], explain: 'From (0, 2): right 4 → across = 4; up 2 → up = 4. Lands at (4, 4).' },
        { type: 'gridpick', q: 'Tap the point <b>(5, 0)</b> — that\'s along the bottom edge!', cols: 6, rows: 6, target: [5, 0], explain: '5 across, 0 up — it sits right along the bottom edge of the grid.' },
        { type: 'choice', q: 'A shape at (2, 3) is translated 3 right and 4 up. What are the new coordinates?', options: ['(5, 7)', '(5, 4)', '(3, 7)', '(2, 7)'], answer: 0, explain: 'Right 3: 2 + 3 = 5 across. Up 4: 3 + 4 = 7 up. → (5, 7).' }
      ]
    },
    {
      id: 'tables-blast',
      title: 'Times-tables blast',
      emoji: '⚡',
      gen: 'tables',
      target: 18,
      learn: [
        { title: 'Tables training!', html: '<p>12 quick-fire times-table questions, up to 12 × 12. Watch out for the sneaky missing-number ones! New questions every time — can you beat your best score? Try to play this <b>every day</b>.</p>' }
      ]
    },
    {
      id: 'arith-gym',
      title: 'Arithmetic gym',
      emoji: '🏋️',
      gen: 'arith',
      target: 16,
      learn: [
        { title: 'Brain workout!', html: '<p>Ten mixed questions: adding, subtracting, multiplying and dividing. Use a pencil and paper for the big ones — column method is your friend! New questions every visit.</p>' }
      ]
    }
  ]
});
