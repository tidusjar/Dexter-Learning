/* History — Year 4 Summer 2: The Vikings — raiders or traders? */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'history',
  name: 'History',
  icon: '🏺',
  color: '#bc6c25',
  tagline: 'Vikings: raiders or traders?',
  lessons: [
    {
      id: 'who-were-vikings',
      title: 'Who were the Vikings?',
      emoji: '⚔️',
      learn: [
        {
          title: 'Where and when',
          html: '<p>The <b>Vikings</b> came from <b>Scandinavia</b> — the lands we now call <b>Norway, Sweden and Denmark</b> in northern Europe.</p>' +
                '<p>The <b>Viking Age</b> in Britain lasted from about <b>AD 793 to 1066</b>. It began with their first big raid on the monastery at <b>Lindisfarne in 793</b>. It ended in <b>1066</b>, the year of the <b>Battle of Stamford Bridge</b> and the Norman conquest.</p>' +
                '<p>The word <b>Viking</b> is thought to mean a sea raider or pirate. They were famous sailors who crossed the seas in their ships.</p>'
        },
        {
          title: 'Settling in Britain',
          html: '<p>The Vikings did not only raid — many came to <b>stay</b>. They settled in a large part of England that became known as the <b>Danelaw</b>, where Viking (Danish) laws were followed.</p>' +
                '<p>One of their greatest towns was <b>Jorvik</b> — the Viking name for the city we call <b>York</b> today.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Which part of the world did the Vikings come from?', options: ['Scandinavia (Norway, Sweden, Denmark)', 'Africa', 'Australia', 'South America'], answer: 0, explain: 'The Vikings came from Scandinavia in northern Europe.' },
        { type: 'choice', q: 'In which year did the first big Viking raid on Lindisfarne happen?', options: ['AD 793', 'AD 1066', 'AD 1500', 'AD 100'], answer: 0, explain: 'The raid on Lindisfarne monastery in AD 793 marks the start of the Viking Age in Britain.' },
        { type: 'choice', q: 'In which year did the Viking Age in Britain end?', options: ['1066', '793', '1215', '900'], answer: 0, explain: '1066 — the year of the Battle of Stamford Bridge and the Norman conquest.' },
        { type: 'choice', q: 'What did the Vikings call the city we now call <b>York</b>?', options: ['Jorvik', 'London', 'Lindisfarne', 'Dublin'], answer: 0, explain: 'York was the great Viking town of Jorvik.' },
        { type: 'choice', q: 'What was the part of England ruled by Viking law called?', options: ['The Danelaw', 'The Domesday', 'The Danegeld', 'The Doomzone'], answer: 0, explain: 'The Danelaw was the area where Viking (Danish) laws were followed.' },
        { type: 'choice', q: 'The word "Viking" is thought to mean a...', options: ['Sea raider or pirate', 'Farmer', 'King', 'Baker'], answer: 0, explain: 'Viking is thought to mean a sea raider or pirate — they were famous sailors.' },
        { type: 'type', q: 'The Vikings first raided a monastery on the island of L________ in 793. What is the place?', answer: ['lindisfarne'], explain: 'Lindisfarne, off the north-east coast of England.', hint: 'It is a holy island in north-east England, starting with "Lindis".' },
        { type: 'match', q: 'Match each fact to the right answer:', pairs: [
          ['Viking homeland', 'Scandinavia'], ['Viking name for York', 'Jorvik'], ['Start of the Viking Age', 'AD 793'], ['End of the Viking Age', '1066']
        ] },
        { type: 'order', q: 'Put these Viking events in time order, <b>earliest first</b>:', items: ['Vikings raid Lindisfarne (793)', 'Vikings settle in the Danelaw', 'Jorvik becomes a great Viking town', 'Battle of Stamford Bridge (1066)'], explain: 'The raids came first, then settling, then the Viking Age ended in 1066.' }
      ]
    },
    {
      id: 'longships',
      title: 'Longships and exploration',
      emoji: '🛶',
      learn: [
        {
          title: 'The amazing longship',
          html: '<p>The Vikings were brilliant shipbuilders. Their <b>longships</b> were the secret to their success.</p>' +
                '<ul><li>They had a <b>shallow draught</b> — the bottom sat high in the water, so they could sail in shallow rivers as well as the open sea, and land right on a beach.</li>' +
                '<li>They were powered by <b>oars and a sail</b>, so they could move even with no wind.</li>' +
                '<li>A carved <b>dragon prow</b> (the front) was made to frighten enemies and evil spirits.</li></ul>' +
                '<p>Because they could travel <b>up rivers</b> and land on beaches, Vikings could appear suddenly where nobody expected them.</p>'
        },
        {
          title: 'Explorers of the world',
          html: '<p>Vikings navigated using the <b>sun and the stars</b> to find their way across the ocean.</p>' +
                '<p>They sailed astonishing distances. They reached <b>Iceland</b> and <b>Greenland</b>, and a Viking called <b>Leif Erikson</b> even reached <b>North America</b> — about 500 years before Christopher Columbus!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What was a Viking ship called?', options: ['A longship', 'A galleon', 'A submarine', 'A canoe'], answer: 0, explain: 'Vikings sailed in longships.' },
        { type: 'choice', q: 'Why was a <b>shallow draught</b> useful?', options: ['Ships could sail up rivers and land on beaches', 'Ships could sink more easily', 'Ships could fly', 'Ships did not need a crew'], answer: 0, explain: 'A shallow draught let longships travel up rivers and land right on a beach.' },
        { type: 'choice', q: 'How were longships powered?', options: ['Oars and a sail', 'A steam engine', 'A motor', 'Magic'], answer: 0, explain: 'Longships used both oars and a sail, so they could move with or without wind.' },
        { type: 'choice', q: 'What was carved on the front (prow) of a longship?', options: ['A dragon head to frighten enemies', 'A clock', 'A flower', 'A football'], answer: 0, explain: 'A dragon prow was meant to scare enemies and evil spirits.' },
        { type: 'choice', q: 'How did Vikings find their way across the sea?', options: ['By the sun and the stars', 'By using a phone', 'By guessing only', 'By following roads'], answer: 0, explain: 'Vikings navigated using the sun and the stars.' },
        { type: 'choice', q: 'Which Viking explorer is said to have reached North America?', options: ['Leif Erikson', 'Christopher Columbus', 'Hiccup', 'Captain Cook'], answer: 0, explain: 'Leif Erikson reached North America about 500 years before Columbus.' },
        { type: 'type', q: 'Vikings reached two icy islands beginning with "I" and "G": Iceland and G________. What is the second one?', answer: ['greenland'], explain: 'Iceland and Greenland were both reached by Viking explorers.' },
        { type: 'choice', q: 'Why could Vikings surprise their enemies so easily?', options: ['Their ships could appear suddenly up rivers and on beaches', 'Their ships were invisible', 'They never made any noise ever', 'They travelled underground'], answer: 0, explain: 'Shallow longships let Vikings appear where nobody expected them.' },
        { type: 'match', q: 'Match each part of the longship to its job:', pairs: [
          ['Shallow draught', 'Sail in shallow rivers'], ['Oars', 'Row with no wind'], ['Sail', 'Catch the wind'], ['Dragon prow', 'Frighten enemies']
        ] }
      ]
    },
    {
      id: 'raiders',
      title: 'Raiders!',
      emoji: '🪓',
      learn: [
        {
          title: 'The raid on Lindisfarne',
          html: '<p>In <b>AD 793</b>, Vikings attacked the monastery on the holy island of <b>Lindisfarne</b>. This was the first great Viking raid on Britain, and it shocked everyone.</p>' +
                '<p>Why attack a <b>monastery</b>? Monasteries were where monks lived and prayed. They were full of <b>treasure</b> — gold cups, silver crosses and jewelled books — and they were <b>undefended</b>, because monks were peaceful men with no soldiers to protect them.</p>' +
                '<p>The Vikings used <b>surprise attacks</b>: they appeared from the sea, grabbed the treasure, took some monks as prisoners, and sailed away before anyone could stop them.</p>'
        },
        {
          title: 'Fear and Danegeld',
          html: '<p>The Anglo-Saxons (the people living in England) were <b>terrified</b> of the Vikings. Monks wrote about the raids, describing the attackers as fierce and frightening.</p>' +
                '<p>To try to stop the raids, the Anglo-Saxons sometimes paid the Vikings money to go away. This payment was called <b>Danegeld</b> — meaning "Dane gold".</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What kind of place did the Vikings raid at Lindisfarne in 793?', options: ['A monastery', 'A castle', 'A school', 'A football stadium'], answer: 0, explain: 'Lindisfarne was a monastery, where monks lived and prayed.' },
        { type: 'choice', q: 'Why did Vikings choose to raid monasteries?', options: ['They were full of treasure and undefended', 'They had the best food', 'Monks invited them', 'They were easy to find on a map'], answer: 0, explain: 'Monasteries held treasure and had no soldiers to defend them.' },
        { type: 'choice', q: 'How did the Vikings usually attack?', options: ['By surprise, then sailing away quickly', 'Slowly, after a warning letter', 'Only at Christmas', 'By digging tunnels'], answer: 0, explain: 'Vikings used surprise raids and left before defenders could gather.' },
        { type: 'choice', q: 'Why were monasteries <b>undefended</b>?', options: ['Monks were peaceful and had no soldiers', 'They had thick walls', 'They were hidden underground', 'Dragons guarded them'], answer: 0, explain: 'Monks were peaceful men with no army, making monasteries easy targets.' },
        { type: 'choice', q: 'How did most Anglo-Saxons feel about the Viking raids?', options: ['Terrified', 'Bored', 'Delighted', 'Sleepy'], answer: 0, explain: 'The raids shocked and frightened the Anglo-Saxons.' },
        { type: 'choice', q: 'What was the money paid to make Vikings go away called?', options: ['Danegeld', 'Pocket money', 'Pound coins', 'Danelaw'], answer: 0, explain: 'Danegeld means "Dane gold" — money paid to the Vikings to leave.' },
        { type: 'type', q: 'The first famous Viking raid in 793 was on the monastery of L________. What is the place?', answer: ['lindisfarne'], explain: 'Lindisfarne, a holy island off north-east England.' },
        { type: 'choice', q: 'What sorts of things would raiders take from a monastery?', options: ['Gold, silver and jewelled books', 'Footballs and games', 'Cars and bikes', 'Mobile phones'], answer: 0, explain: 'Raiders took gold cups, silver crosses and precious books.' },
        { type: 'order', q: 'Put a typical Viking raid in order:', items: ['Longships appear from the sea', 'Vikings rush ashore by surprise', 'They grab treasure from the monastery', 'They sail away before help arrives'], explain: 'Surprise was the key: arrive, raid, and escape quickly.' }
      ]
    },
    {
      id: 'traders',
      title: 'Traders!',
      emoji: '⚖️',
      learn: [
        {
          title: 'Vikings the merchants',
          html: '<p>The Vikings were not only raiders — many were clever <b>traders</b>. They travelled along rivers and seas to buy and sell goods, reaching as far as <b>Russia</b> and even <b>Baghdad</b> in the Middle East.</p>' +
                '<p>They <b>sold</b> things from the north: <b>furs, amber, walrus ivory and wool</b>.</p>' +
                '<p>They <b>bought</b> wonderful goods from far away: <b>silver, silk, spices and glass</b>.</p>'
        },
        {
          title: 'Jorvik and the clues archaeologists find',
          html: '<p><b>Jorvik</b> (York) grew into a busy and important <b>trading town</b>, full of craftworkers and merchants.</p>' +
                '<p>How do we know Vikings traded so far? <b>Archaeologists</b> — scientists who dig up the past — have found amazing clues. <b>Coins from Arabia</b> have been dug up in Viking towns! This is <b>evidence</b> that Vikings really did trade with faraway lands.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'As well as raiding, what else were many Vikings?', options: ['Traders who bought and sold goods', 'Astronauts', 'Train drivers', 'Footballers'], answer: 0, explain: 'Many Vikings were skilled traders.' },
        { type: 'choice', q: 'How far did Viking traders travel?', options: ['As far as Russia and Baghdad', 'Only to the next village', 'Never far from home', 'To the Moon'], answer: 0, explain: 'Viking trade routes stretched all the way to Russia and Baghdad.' },
        { type: 'choice', q: 'Which of these did Vikings SELL to other lands?', options: ['Furs and amber', 'Silk and spices', 'Mobile phones', 'Cars'], answer: 0, explain: 'Vikings sold furs, amber, walrus ivory and wool from the north.' },
        { type: 'choice', q: 'Which of these did Vikings BUY from faraway lands?', options: ['Silk and spices', 'Furs and walrus ivory', 'Snow', 'Longships'], answer: 0, explain: 'Vikings bought silver, silk, spices and glass.' },
        { type: 'choice', q: 'Which Viking town grew into a great trading centre?', options: ['Jorvik (York)', 'Lindisfarne', 'Paris', 'Rome'], answer: 0, explain: 'Jorvik (York) was a busy and important trading town.' },
        { type: 'choice', q: 'A scientist who digs up the past to find clues is called an...', options: ['Archaeologist', 'Astronaut', 'Author', 'Artist'], answer: 0, explain: 'Archaeologists dig up objects to learn about the past.' },
        { type: 'choice', q: 'Arabic coins found buried in Viking York are an example of...', options: ['Evidence that Vikings traded far away', 'Vikings being lazy', 'Vikings living in Arabia', 'A made-up story'], answer: 0, explain: 'The coins are evidence that Vikings traded with distant lands.' },
        { type: 'type', q: 'The great Viking trading town in England was called J______. What is its name?', answer: ['jorvik'], explain: 'Jorvik is the Viking name for York.' },
        { type: 'sort', q: 'Sort these goods: did Vikings SELL them or BUY them?', buckets: ['Vikings SOLD', 'Vikings BOUGHT'], items: [
          { text: 'Furs', bucket: 0 }, { text: 'Silk', bucket: 1 }, { text: 'Amber', bucket: 0 },
          { text: 'Spices', bucket: 1 }, { text: 'Walrus ivory', bucket: 0 }, { text: 'Glass', bucket: 1 }
        ], explain: 'Vikings sold northern goods (furs, amber, ivory) and bought luxuries (silk, spices, glass).' }
      ]
    },
    {
      id: 'daily-life',
      title: 'Viking daily life',
      emoji: '🏠',
      learn: [
        {
          title: 'Home, food and family',
          html: '<p>Most Vikings were not raiders at all — most were <b>farmers</b>. They grew crops and kept animals.</p>' +
                '<p>They lived in a <b>longhouse</b>: one long room with a <b>central fire</b> for heat, light and cooking. In winter, the family\'s <b>animals were brought inside</b> one end to keep them safe and warm.</p>' +
                '<p>Viking children did <b>not go to school</b>. They learned by helping their parents with farming, cooking and crafts. Vikings wrote using letters called <b>runes</b>, made of straight lines that were easy to carve.</p>'
        },
        {
          title: 'Gods and the days of the week',
          html: '<p>The Vikings believed in many <b>gods</b>, including <b>Odin</b> (the chief god), <b>Thor</b> (god of thunder) and <b>Freya</b> (goddess of love).</p>' +
                '<p>Some of our <b>days of the week</b> are named after these gods!</p>' +
                '<ul><li><b>Wednesday</b> = Woden\'s day (Woden is another name for Odin)</li>' +
                '<li><b>Thursday</b> = Thor\'s day</li>' +
                '<li><b>Friday</b> = Freya\'s day</li></ul>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What job did MOST Vikings do?', options: ['They were farmers', 'They were all raiders', 'They were all kings', 'They were all sailors'], answer: 0, explain: 'Most Vikings were farmers, not raiders.' },
        { type: 'choice', q: 'What was a Viking home called?', options: ['A longhouse', 'A longship', 'A castle', 'A bungalow'], answer: 0, explain: 'Vikings lived in longhouses — one long room with a central fire.' },
        { type: 'choice', q: 'What was in the middle of a longhouse?', options: ['A central fire for heat and cooking', 'A swimming pool', 'A television', 'A garden'], answer: 0, explain: 'A central fire gave heat, light and a place to cook.' },
        { type: 'choice', q: 'Where did the animals go in winter?', options: ['Inside one end of the longhouse', 'On the roof', 'In the longship', 'They flew south'], answer: 0, explain: 'Animals were kept inside the longhouse in winter to stay warm and safe.' },
        { type: 'choice', q: 'Did Viking children go to school?', options: ['No — they learned by helping their parents', 'Yes — every day', 'Only on Sundays', 'Yes — at a longship school'], answer: 0, explain: 'Viking children did not go to school; they learned skills from their families.' },
        { type: 'choice', q: 'What were the Viking letters made of straight lines called?', options: ['Runes', 'Emojis', 'Numbers', 'Hieroglyphs'], answer: 0, explain: 'Vikings wrote using runes, which were easy to carve.' },
        { type: 'choice', q: 'Which day of the week is named after the god <b>Thor</b>?', options: ['Thursday', 'Monday', 'Sunday', 'Saturday'], answer: 0, explain: 'Thursday means "Thor\'s day".' },
        { type: 'type', q: 'Friday is named after which Viking goddess?', answer: ['freya', 'freyja'], explain: 'Friday means "Freya\'s day".', hint: 'Her name starts with "Fre..."' },
        { type: 'match', q: 'Match each day or role to its Viking god:', pairs: [
          ['Wednesday', 'Woden (Odin)'], ['Thursday', 'Thor'], ['Friday', 'Freya'], ['Chief of the gods', 'Odin']
        ] }
      ]
    },
    {
      id: 'raiders-or-traders',
      title: 'The BIG question: raiders or traders?',
      emoji: '🤔',
      learn: [
        {
          title: 'What do historians do?',
          html: '<p>A <b>historian</b> is a person who studies the past. To work out what really happened, historians look at <b>evidence</b> — clues left behind, such as old writing, buried objects and ruins.</p>' +
                '<p>Some evidence shows the Vikings were fierce <b>raiders</b>. For example, monks wrote about the terrifying attack on Lindisfarne.</p>' +
                '<p>Other evidence shows the Vikings were peaceful <b>traders</b>. For example, archaeologists found <b>Arabic coins</b> in Viking York, proving they traded far and wide.</p>'
        },
        {
          title: 'The answer is... both!',
          html: '<p>So, were the Vikings raiders or traders? The best answer, using all the evidence, is that they were <b>BOTH</b>.</p>' +
                '<p>Some Vikings raided, some traded, and some did both at different times. Good historians look at <b>all</b> the evidence before they decide, instead of believing just one story.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What is a <b>historian</b>?', options: ['A person who studies the past', 'A person who sails ships', 'A person who paints', 'A person who farms'], answer: 0, explain: 'Historians study the past using evidence.' },
        { type: 'choice', q: 'What do historians use to work out what really happened?', options: ['Evidence — clues left behind', 'Magic', 'Lucky guesses', 'Dreams'], answer: 0, explain: 'Historians study evidence like old writing and buried objects.' },
        { type: 'choice', q: 'Were the Vikings raiders or traders?', options: ['Both — the evidence shows they did both', 'Only raiders', 'Only traders', 'Neither'], answer: 0, explain: 'Using all the evidence, the best answer is that the Vikings were BOTH.' },
        { type: 'choice', q: 'Monks writing about the attack on Lindisfarne is evidence that Vikings were...', options: ['Raiders', 'Traders', 'Farmers only', 'Bakers'], answer: 0, explain: 'The fearful accounts of attacks are evidence of raiding.' },
        { type: 'choice', q: 'Arabic coins found in Viking York are evidence that Vikings were...', options: ['Traders', 'Raiders', 'Cooks', 'Painters'], answer: 0, explain: 'Coins from far away show the Vikings traded over long distances.' },
        { type: 'choice', q: 'Why should historians look at ALL the evidence?', options: ['So they do not believe just one side of the story', 'To make it take longer', 'Because evidence is fun to count', 'So they can ignore the truth'], answer: 0, explain: 'Looking at all the evidence gives a fairer, truer picture of the past.' },
        { type: 'sort', q: 'Sort each piece of evidence: does it show RAIDERS or TRADERS?', buckets: ['Evidence they were RAIDERS', 'Evidence they were TRADERS'], items: [
          { text: 'Monks wrote about the attack on Lindisfarne', bucket: 0 },
          { text: 'Arabic coins found in Viking York', bucket: 1 },
          { text: 'Anglo-Saxons paid Danegeld to make Vikings leave', bucket: 0 },
          { text: 'Silk from far away found in a Viking town', bucket: 1 },
          { text: 'Treasure stolen from a monastery', bucket: 0 },
          { text: 'A market full of furs and amber for sale', bucket: 1 }
        ], explain: 'Attacks, stolen treasure and Danegeld show raiding; coins, silk and markets show trading.' },
        { type: 'match', q: 'Match each clue to what it tells a historian:', pairs: [
          ['Stolen monastery treasure', 'They raided'], ['Arabic coins in York', 'They traded'], ['Danegeld payments', 'People feared raids'], ['A trading market', 'They bought and sold goods']
        ] }
      ]
    },
    {
      id: 'write-verdict',
      title: 'Writing quest: my verdict',
      emoji: '✍️',
      write: {
        prompt: 'You are the historian now, Dexter! Write your <b>verdict</b>: were the Vikings <b>raiders or traders</b>? Give your opinion and back it up with <b>at least two pieces of evidence</b> from your lessons (like the raid on Lindisfarne, Danegeld, Arabic coins in York, or trade with Baghdad). Use the word <b>because</b> to explain your thinking, and remember to mention the other side of the argument too!',
        minWords: 40,
        checklist: [
          'I clearly gave my <b>opinion</b> (raiders, traders, or both)',
          'I used <b>at least two pieces of evidence</b>',
          'I used the word <b>because</b> to explain my thinking',
          'I mentioned the <b>other side</b> of the argument',
          'I checked my <b>capital letters and full stops</b>'
        ]
      },
      learn: [
        { title: 'Be a history detective!', html: '<p>Remember the evidence on both sides: <b>raiders</b> — the attack on Lindisfarne, stolen treasure, Danegeld; <b>traders</b> — Arabic coins in Jorvik, silk and spices, trade routes to Baghdad. A great verdict uses evidence and the word <b>because</b>!</p>' }
      ]
    }
  ]
});
