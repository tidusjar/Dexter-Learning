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
        { type: 'order', q: 'Put these Viking events in time order, <b>earliest first</b>:', items: ['Vikings raid Lindisfarne (793)', 'Vikings settle in the Danelaw', 'Jorvik becomes a great Viking town', 'Battle of Stamford Bridge (1066)'], explain: 'The raids came first, then settling, then the Viking Age ended in 1066.' },
        { type: 'choice', q: 'Which THREE countries make up Scandinavia?', options: ['Norway, Sweden and Denmark', 'France, Spain and Italy', 'Russia, Poland and Germany', 'Iceland, Ireland and Scotland'], answer: 0, explain: 'Scandinavia is made up of Norway, Sweden and Denmark in northern Europe.' },
        { type: 'choice', q: 'Which battle in 1066 helped mark the end of the Viking Age in Britain?', options: ['The Battle of Stamford Bridge', 'The Battle of Hastings', 'The Battle of Waterloo', 'The Battle of Lindisfarne'], answer: 0, explain: 'The Battle of Stamford Bridge in 1066 was the last great Viking battle in Britain.' },
        { type: 'sort', q: 'Sort these statements: TRUE about the Vikings, or FALSE?', buckets: ['True', 'False'], items: [
          { text: 'The Vikings came from Scandinavia', bucket: 0 },
          { text: 'The Viking Age started in AD 793', bucket: 0 },
          { text: 'The Viking Age ended in AD 1500', bucket: 1 },
          { text: 'Jorvik is the Viking name for York', bucket: 0 },
          { text: 'Vikings only ever raided and never settled', bucket: 1 },
          { text: 'The Danelaw followed Viking laws', bucket: 0 }
        ], explain: 'The Viking Age ended in 1066, and many Vikings settled permanently — they did not only raid.' },
        { type: 'type', q: 'In the Danelaw, which people\'s laws were followed? (one word)', answer: ['viking', 'danish', 'dane', 'danes', 'vikings'], explain: 'The Danelaw was an area of England where Viking (Danish) laws and customs were followed.' },
        { type: 'choice', q: 'How long did the Viking Age in Britain last, roughly?', options: ['About 273 years (793–1066)', 'About 50 years', 'About 1000 years', 'About 10 years'], answer: 0, explain: 'From 793 to 1066 is roughly 273 years — quite a long time, Dexter!' },
        { type: 'match', q: 'Match each place to its description:', pairs: [
          ['Scandinavia', 'The Viking homeland'], ['Lindisfarne', 'Site of the first big raid in 793'], ['Danelaw', 'Part of England under Viking law'], ['York', 'City the Vikings called Jorvik']
        ] },
        { type: 'choice', q: 'Which of these is NOT one of the Scandinavian countries the Vikings came from?', options: ['Poland', 'Norway', 'Sweden', 'Denmark'], answer: 0, explain: 'Poland is in central Europe, not Scandinavia. The Vikings came from Norway, Sweden and Denmark.' },
        { type: 'order', q: 'Put these facts about the Viking Age in the correct order, <b>earliest first</b>:', items: ['The Viking Age begins with the raid on Lindisfarne', 'Vikings settle and create the Danelaw', 'Jorvik (York) grows into a great Viking town', 'The Viking Age ends at the Battle of Stamford Bridge'], explain: 'The raids came first; then settlement and town growth; finally the end of the Viking Age in 1066.' },
        { type: 'type', q: 'What is the name of the region in England where Viking (Danish) laws were used? (one word)', answer: ['danelaw'], explain: 'The Danelaw — "dane" from Danish and "law" because it followed their laws.' },
        { type: 'choice', q: 'Why were the Vikings described as famous sailors?', options: ['They crossed the seas in their ships to raid and explore', 'They invented the compass', 'They lived underwater', 'They only sailed on rivers'], answer: 0, explain: 'The Vikings were brilliant shipbuilders who crossed seas to raid, trade and explore.' }
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
        ] },
        { type: 'choice', q: 'How much earlier than Christopher Columbus did Leif Erikson reach North America?', options: ['About 500 years', 'About 10 years', 'About 100 years', 'At the same time'], answer: 0, explain: 'Leif Erikson reached North America roughly 500 years before Columbus — incredible, Dexter!' },
        { type: 'choice', q: 'The front of a ship is called the...', options: ['Prow', 'Stern', 'Keel', 'Hull'], answer: 0, explain: 'The prow is the front of the ship — that\'s where the dragon head was carved.' },
        { type: 'sort', q: 'Sort these statements about longships: TRUE or FALSE?', buckets: ['True', 'False'], items: [
          { text: 'Longships had a shallow draught', bucket: 0 },
          { text: 'Longships could only be powered by oars', bucket: 1 },
          { text: 'A dragon head was carved on the prow', bucket: 0 },
          { text: 'Longships could sail up rivers', bucket: 0 },
          { text: 'Vikings used a phone to navigate', bucket: 1 }
        ], explain: 'Longships used both oars AND a sail. Vikings navigated by the sun and stars, not phones!' },
        { type: 'type', q: 'The carved front of a Viking ship is called the p_____. What is the word?', answer: ['prow'], explain: 'The prow is the front of the ship. Viking prows often had a dragon\'s head carved on them.' },
        { type: 'choice', q: 'Which two places did Viking explorers reach before North America?', options: ['Iceland and Greenland', 'Ireland and Scotland', 'France and Spain', 'Russia and Turkey'], answer: 0, explain: 'Vikings settled in Iceland and Greenland before Leif Erikson pushed on to North America.' },
        { type: 'match', q: 'Match each Viking explorer fact to the right detail:', pairs: [
          ['Leif Erikson', 'Reached North America'], ['Navigation tool', 'Sun and stars'], ['Two icy islands reached by Vikings', 'Iceland and Greenland'], ['500 years later', 'Christopher Columbus also reached America']
        ] },
        { type: 'order', q: 'Put these Viking exploration events in order, <b>earliest first</b>:', items: ['Vikings settle in Iceland', 'Vikings reach Greenland', 'Leif Erikson reaches North America', 'Christopher Columbus arrives in America (1492)'], explain: 'Iceland first, then Greenland, then North America — Columbus came last, about 500 years after Leif Erikson.' },
        { type: 'choice', q: 'Which of these made the longship so useful for raiding coastlines AND rivers?', options: ['Its shallow draught meant it could go almost anywhere', 'It had a very heavy iron bottom', 'It could only sail in calm water', 'It needed a huge harbour to dock'], answer: 0, explain: 'The shallow draught is the key — it let longships go where bigger ships couldn\'t.' },
        { type: 'sort', q: 'Sort these into what a longship DID have and what it did NOT have:', buckets: ['Longship DID have this', 'Longship did NOT have this'], items: [
          { text: 'A sail to catch the wind', bucket: 0 },
          { text: 'Oars for rowing', bucket: 0 },
          { text: 'A carved dragon prow', bucket: 0 },
          { text: 'A steam engine', bucket: 1 },
          { text: 'A GPS navigation system', bucket: 1 }
        ], explain: 'Longships had sails, oars and dragon prows. Steam engines and GPS are modern inventions!' },
        { type: 'type', q: 'What natural things did Vikings use to navigate at sea? (three words: sun and ____)', answer: ['stars', 'the stars'], explain: 'Vikings navigated by the sun and the stars — no maps or compasses needed!' }
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
        { type: 'order', q: 'Put a typical Viking raid in order:', items: ['Longships appear from the sea', 'Vikings rush ashore by surprise', 'They grab treasure from the monastery', 'They sail away before help arrives'], explain: 'Surprise was the key: arrive, raid, and escape quickly.' },
        { type: 'choice', q: 'Who were the Anglo-Saxons?', options: ['The people already living in England when the Vikings arrived', 'The Vikings themselves', 'The Romans', 'The Normans'], answer: 0, explain: 'The Anglo-Saxons were the people living in England before and during the Viking raids.' },
        { type: 'choice', q: 'What does the word "Danegeld" mean?', options: ['Dane gold — money paid to the Vikings', 'Viking treasure stolen from churches', 'The name of a Viking sword', 'A type of Viking ship'], answer: 0, explain: 'Danegeld literally means "Dane gold" — it was money paid to the Danes (Vikings) to make them leave.' },
        { type: 'sort', q: 'Sort these into things that made monasteries EASY targets and things that made them VALUABLE targets:', buckets: ['Easy to attack', 'Worth attacking'], items: [
          { text: 'Monks had no soldiers', bucket: 0 },
          { text: 'Full of gold and silver treasure', bucket: 1 },
          { text: 'Monks were peaceful men', bucket: 0 },
          { text: 'Jewelled books were stored there', bucket: 1 },
          { text: 'No army to defend the place', bucket: 0 },
          { text: 'Silver crosses and gold cups', bucket: 1 }
        ], explain: 'Monasteries were easy because they were undefended, and valuable because they held great treasure.' },
        { type: 'type', q: 'The money the Anglo-Saxons paid Vikings to go away was called D________. What is it?', answer: ['danegeld'], explain: 'Danegeld — "Dane gold" — was paid to the Vikings in the hope they would stop raiding.' },
        { type: 'match', q: 'Match each raiding fact to its explanation:', pairs: [
          ['Lindisfarne raid', 'First great Viking raid on Britain (793)'], ['Surprise attack', 'Vikings appeared and left before help arrived'], ['Danegeld', 'Money paid to make Vikings go away'], ['Monks', 'Peaceful men with no soldiers to defend them']
        ] },
        { type: 'choice', q: 'Apart from grabbing treasure, what else did Vikings sometimes do during raids?', options: ['Take monks as prisoners', 'Build schools', 'Plant gardens', 'Give gifts to the monks'], answer: 0, explain: 'Vikings sometimes took monks as prisoners as well as stealing the treasure.' },
        { type: 'choice', q: 'Why did the raid on Lindisfarne in 793 shock people so much?', options: ['A holy island and place of God was attacked for the first time', 'The monks fought back and won', 'It was the last ever Viking raid', 'The Vikings gave the treasure back'], answer: 0, explain: 'Attacking a holy monastery was shocking — it showed nobody was safe from these sea raiders.' },
        { type: 'order', q: 'Put these events connected to Viking raiding in chronological order:', items: ['The first raid on Lindisfarne (793)', 'Anglo-Saxons begin paying Danegeld', 'The Viking Age of raiding in Britain ends (1066)'], explain: 'Raids began in 793, Danegeld followed as a response, and the Viking Age ended in 1066.' },
        { type: 'choice', q: 'Which type of writing tells historians that the Anglo-Saxons were terrified of the Vikings?', options: ['Monks\' written accounts of the raids', 'Viking rune carvings', 'Roman scrolls', 'Norman tapestries'], answer: 0, explain: 'Monks wrote accounts describing the Viking attackers as fierce and terrifying — this is primary evidence.' }
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
        ], explain: 'Vikings sold northern goods (furs, amber, ivory) and bought luxuries (silk, spices, glass).' },
        { type: 'choice', q: 'Which distant city in the Middle East did Viking trade routes reach?', options: ['Baghdad', 'Cairo', 'Istanbul', 'Jerusalem'], answer: 0, explain: 'Viking traders reached all the way to Baghdad in the Middle East — amazing!' },
        { type: 'choice', q: 'What is amber?', options: ['A golden, fossilised tree resin used for jewellery', 'A type of silk cloth', 'A Viking weapon', 'A kind of ship'], answer: 0, explain: 'Amber is a golden, fossilised resin that Vikings found and sold as a precious material.' },
        { type: 'match', q: 'Match each traded good to which direction it went:', pairs: [
          ['Furs', 'Sold by Vikings heading south'], ['Silk', 'Bought by Vikings from the east'], ['Walrus ivory', 'Sold by Vikings (from the Arctic)'], ['Silver', 'Bought by Vikings from distant lands']
        ] },
        { type: 'type', q: 'Scientists who dig up buried objects to learn about the past are called a_____________. What is the word?', answer: ['archaeologists', 'archaeologist'], explain: 'Archaeologists are history detectives who dig up clues from the ground.' },
        { type: 'choice', q: 'Why is it significant that Arabic coins were found in Viking York?', options: ['It proves Vikings traded with people in distant lands', 'It proves Vikings stole from Arab people', 'It shows the coins blew there in the wind', 'It proves the Romans were there'], answer: 0, explain: 'Coins from Arabia could only have arrived through trade — brilliant evidence!' },
        { type: 'sort', q: 'Sort these Viking trading facts: TRUE or FALSE?', buckets: ['True', 'False'], items: [
          { text: 'Vikings traded as far as Baghdad', bucket: 0 },
          { text: 'Vikings only ever sold things and never bought anything', bucket: 1 },
          { text: 'Archaeologists found Arabic coins in Viking York', bucket: 0 },
          { text: 'Jorvik was an important Viking trading town', bucket: 0 },
          { text: 'Vikings sold silk from the north', bucket: 1 }
        ], explain: 'Silk came from the east and was BOUGHT by Vikings. They sold northern goods like furs and amber.' },
        { type: 'order', q: 'Put these steps in order to show how a Viking trade might work:', items: ['Load the longship with furs and amber from Scandinavia', 'Sail south along rivers towards trading towns', 'Arrive at Jorvik (York) market', 'Swap furs for silver, spices and silk', 'Sail home with the new goods'], explain: 'Trade was a long journey: gather goods, travel, trade, and return home.' },
        { type: 'choice', q: 'Jorvik was full of craftworkers and merchants. What does a MERCHANT do?', options: ['Buys and sells goods for a living', 'Makes pots and metalwork', 'Raids monasteries', 'Builds longships'], answer: 0, explain: 'A merchant is a trader — someone who earns money by buying and selling goods.' },
        { type: 'match', q: 'Match each Viking trade fact to its evidence or explanation:', pairs: [
          ['Arabic coins in York', 'Evidence of long-distance trade'], ['Jorvik (York)', 'The great Viking trading town'], ['Archaeologist', 'Digs up evidence from the past'], ['Baghdad', 'City in the Middle East reached by traders']
        ] }
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
        ] },
        { type: 'choice', q: 'Which Viking god was the god of thunder?', options: ['Thor', 'Odin', 'Freya', 'Loki'], answer: 0, explain: 'Thor was the Viking god of thunder — and Thursday is named after him!' },
        { type: 'choice', q: 'What was Freya the goddess of?', options: ['Love', 'Thunder', 'The sea', 'War'], answer: 0, explain: 'Freya was the Viking goddess of love, and Friday is named after her.' },
        { type: 'choice', q: 'Why were runes made of straight lines?', options: ['Straight lines are easy to carve into wood and stone', 'Curved lines were forbidden by Viking law', 'They were copied from Roman writing', 'Vikings did not like curves'], answer: 0, explain: 'Straight lines can be carved easily with a knife or chisel into wood, bone or stone.' },
        { type: 'sort', q: 'Sort these Viking daily life facts: TRUE or FALSE?', buckets: ['True', 'False'], items: [
          { text: 'Most Vikings were farmers', bucket: 0 },
          { text: 'Vikings lived in a longhouse', bucket: 0 },
          { text: 'Viking children went to school every day', bucket: 1 },
          { text: 'Thursday is named after Thor', bucket: 0 },
          { text: 'Wednesday is named after Freya', bucket: 1 },
          { text: 'Runes were made of straight lines', bucket: 0 }
        ], explain: 'Wednesday is named after Woden (Odin), not Freya. Viking children did not go to school.' },
        { type: 'type', q: 'Viking writing was made up of letters called r_____. What is the word?', answer: ['runes', 'rune'], explain: 'Runes were Viking letters made of straight lines, perfect for carving.' },
        { type: 'match', q: 'Match each Viking god to what they were god of:', pairs: [
          ['Odin', 'Chief of all the gods'], ['Thor', 'God of thunder'], ['Freya', 'Goddess of love'], ['Woden', 'Another name for Odin']
        ] },
        { type: 'choice', q: 'What three things did the central fire in a longhouse provide?', options: ['Heat, light and cooking', 'Water, food and fresh air', 'Entertainment, warmth and decoration', 'Smoke, ash and danger'], answer: 0, explain: 'The central fire was the heart of the longhouse — it gave heat, light and a way to cook.' },
        { type: 'choice', q: 'Which day of the week is named after Woden (another name for Odin)?', options: ['Wednesday', 'Tuesday', 'Thursday', 'Monday'], answer: 0, explain: 'Wednesday comes from "Woden\'s day" — Woden being another name for the chief god Odin.' },
        { type: 'order', q: 'Put these Viking daily life activities in a sensible order for a Viking morning:', items: ['Wake up in the longhouse', 'Feed the animals in their stall', 'Help with cooking on the central fire', 'Go out to work the fields'], explain: 'A Viking morning would start in the longhouse, care for animals, prepare food, then head out to farm.' },
        { type: 'type', q: 'What is the Viking name for the type of house they lived in? (one word)', answer: ['longhouse'], explain: 'A longhouse was one long room shared by the family — and sometimes the animals in winter!' }
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
        ] },
        { type: 'choice', q: 'Which of the following is a piece of EVIDENCE (a real clue from the past)?', options: ['Arabic coins dug up in Viking York', 'A guess that Vikings were friendly', 'A story someone made up', 'A modern film about Vikings'], answer: 0, explain: 'Real, physical evidence — like coins — is much more reliable than guesses or made-up stories.' },
        { type: 'choice', q: 'What kind of evidence shows us that people were AFRAID of the Vikings?', options: ['Written accounts by monks describing the terrible raids', 'Arabic coins in York', 'Silk found in Viking towns', 'A market selling furs and amber'], answer: 0, explain: 'Monks\' written accounts of fear and terror are evidence of how frightening the raids were.' },
        { type: 'type', q: 'A person who studies the past using evidence is called a h_________. What is the word?', answer: ['historian', 'historians'], explain: 'A historian uses evidence — old writing, buried objects, ruins — to learn about the past.' },
        { type: 'order', q: 'Put these steps in the order a historian would follow to reach a conclusion:', items: ['Find evidence from the past (writing, objects, ruins)', 'Study all the evidence carefully', 'Consider both sides of the argument', 'Reach a balanced conclusion based on everything found'], explain: 'Good historians gather all evidence, consider both sides, then form a balanced view.' },
        { type: 'choice', q: 'If a historian only looked at the monks\' accounts of raids, what mistake might they make?', options: ['They might think the Vikings were ONLY raiders, missing the trader evidence', 'They would be completely right about everything', 'They would decide the Vikings never existed', 'They would think monks were Vikings'], answer: 0, explain: 'Looking at only one type of evidence gives a one-sided picture. Good historians look at ALL the clues.' },
        { type: 'match', q: 'Match each type of evidence to the conclusion it supports:', pairs: [
          ['Monks\' written accounts of attacks', 'Vikings were fierce raiders'], ['Arabic coins in Jorvik', 'Vikings were long-distance traders'], ['Danegeld records', 'Anglo-Saxons feared Viking raids'], ['Furs and amber in markets', 'Vikings sold goods from the north']
        ] },
        { type: 'choice', q: 'What does it mean when we say historians look at evidence from "both sides"?', options: ['They look at clues that show raiding AND clues that show trading', 'They read two books at once', 'They ask two different people', 'They look at evidence from two countries only'], answer: 0, explain: 'Historians consider all the evidence — clues about raiding AND clues about trading — before deciding.' },
        { type: 'sort', q: 'Sort these into PRIMARY evidence (from the time) and SECONDARY evidence (written later):', buckets: ['Primary — from the time', 'Secondary — written later'], items: [
          { text: 'A monk\'s diary entry written during a Viking raid', bucket: 0 },
          { text: 'A history book written in 2020', bucket: 1 },
          { text: 'An Arabic coin buried in Viking Jorvik', bucket: 0 },
          { text: 'A school lesson about the Vikings today', bucket: 1 },
          { text: 'A Viking rune carved in stone over 1000 years ago', bucket: 0 }
        ], explain: 'Primary evidence is from the time itself; secondary evidence is created after the event, often using primary evidence.' },
        { type: 'type', q: 'The payment Anglo-Saxons made to Vikings to stop raiding was called D________ (two words together). What is it?', answer: ['danegeld'], explain: 'Danegeld — "Dane gold" — is evidence that the Anglo-Saxons were terrified of Viking raids.' },
        { type: 'choice', q: 'Which answer BEST describes the Vikings, using all the evidence?', options: ['They were skilled sailors who both raided and traded at different times', 'They were always cruel raiders who never did anything peaceful', 'They were only peaceful traders who never attacked anyone', 'They were farmers who never left Scandinavia'], answer: 0, explain: 'The full picture from the evidence shows the Vikings did BOTH — raiding and trading — at different times and places.' }
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
