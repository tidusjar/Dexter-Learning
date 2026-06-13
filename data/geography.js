/* Geography — Year 4 Summer 2: Settlements (linked to the Vikings topic) */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'geography',
  name: 'Geography',
  icon: '🌍',
  color: '#588157',
  tagline: 'Settlements — where do people choose to live, and why?',
  lessons: [
    {
      id: 'what-settlers-need',
      title: 'What did early settlers need?',
      emoji: '🏕️',
      learn: [
        {
          title: 'Choosing the perfect spot',
          html: '<p>Long ago, when people first decided where to build a home, they could not just pop to the shops! They had to choose a spot that gave them everything they needed to survive. We call a place where people live a <b>settlement</b>.</p>' +
                '<p>The most important things early settlers looked for were:</p>' +
                '<ul><li><b>Fresh water</b> to drink — usually a river, stream or spring</li>' +
                '<li><b>Food</b> — good soil for farming, and animals or fish to catch</li>' +
                '<li><b>Flat, dry land</b> to build on (not a swamp or a steep hill!)</li>' +
                '<li><b>Building materials</b> — wood and stone for houses</li>' +
                '<li><b>Defence</b> — a place that was easy to protect, like a hilltop</li>' +
                '<li><b>Shelter</b> from wind and bad weather</li>' +
                '<li>A <b>river crossing</b> or coast for transport and travel</li></ul>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What is a <b>settlement</b>?', options: ['A place where people live', 'A type of boat', 'A kind of food', 'A river crossing only'], answer: 0, explain: 'A settlement is any place where people make their home, from a hamlet to a city.' },
        { type: 'choice', q: 'Why did early settlers need to be near <b>fresh water</b>?', options: ['To drink, cook and water their animals', 'To go swimming for fun', 'To look pretty', 'There was no reason'], answer: 0, explain: 'Fresh water for drinking and farming was the most important need of all.' },
        { type: 'choice', q: 'Why would settlers want <b>flat, dry land</b>?', options: ['It is easier to build houses and grow crops', 'It is more colourful', 'Hills are illegal', 'Flat land is always warmer'], answer: 0, explain: 'Flat dry land is much easier to build and farm on than a swamp or steep slope.' },
        { type: 'choice', q: 'Which would settlers use for <b>building materials</b>?', options: ['Wood and stone', 'Gold and diamonds', 'Plastic and glass', 'Paper and card'], answer: 0, explain: 'Long ago people built homes from wood and stone they could find nearby.' },
        { type: 'choice', q: 'Why might settlers choose a spot that was easy to <b>defend</b>?', options: ['To keep safe from enemies and attackers', 'To make it easier to leave', 'So nobody could visit', 'To grow more flowers'], answer: 0, explain: 'A place that is easy to defend, like a hilltop, keeps people safe from attack.' },
        { type: 'choice', q: 'Which of these is NOT something early settlers really needed?', options: ['A games shop', 'Fresh water', 'Food', 'Shelter'], answer: 0, explain: 'Settlers needed water, food and shelter to survive — a games shop is a modern want, not a need!' },
        { type: 'type', q: 'Settlers needed flat, ___ land to build on (not a swamp). What is the missing word?', answer: ['dry'], explain: 'Flat, DRY land is easiest to build and farm on.' },
        { type: 'sort', q: 'Sort these: a real NEED for survival, or just a nice extra?', buckets: ['Need to survive', 'Nice to have'], items: [
          { text: 'Fresh water to drink', bucket: 0 }, { text: 'A pretty view', bucket: 1 },
          { text: 'Good soil to grow food', bucket: 0 }, { text: 'Lots of toys', bucket: 1 },
          { text: 'Shelter from the weather', bucket: 0 }, { text: 'A sweet shop', bucket: 1 }
        ], explain: 'Water, food and shelter are needs; views, toys and sweets are nice extras.' },
        { type: 'match', q: 'Match each settler need to the reason for it:', pairs: [
          ['Fresh water', 'To drink and cook'], ['Good soil', 'To grow crops'], ['Hilltop', 'To defend against attack'], ['River crossing', 'To travel and trade']
        ] },
        { type: 'choice', q: 'Why would a river be useful to early settlers?', options: ['It provides fresh water, fish and a way to travel', 'It blocks enemies better than a wall', 'Rivers make good farmland because they are dry', 'Rivers only provided decoration'], answer: 0, explain: 'A river provided drinking water, fish to eat, and a route for travel and trade — brilliant for a settlement!' },
        { type: 'choice', q: 'A place where you can cross a river safely is called a...', options: ['Ford', 'Spring', 'Moor', 'Mound'], answer: 0, explain: 'A ford is a shallow crossing point on a river — that\'s why so many place names end in -ford, like Oxford!' },
        { type: 'type', q: 'A place where people build their homes and live together is called a s__________. What is the word?', answer: ['settlement'], explain: 'A settlement is any place where people live — from a tiny hamlet to a huge city.' },
        { type: 'sort', q: 'Would Viking settlers want this feature, or avoid it?', buckets: ['Settlers WANTED this', 'Settlers AVOIDED this'], items: [
          { text: 'A river nearby for fresh water', bucket: 0 },
          { text: 'A boggy swamp to build on', bucket: 1 },
          { text: 'A hilltop with a good view for defence', bucket: 0 },
          { text: 'A steep cliff with no flat land', bucket: 1 },
          { text: 'Good soil nearby for farming', bucket: 0 },
          { text: 'Forests nearby for building timber', bucket: 0 }
        ], explain: 'Settlers wanted water, defence, good soil and materials. Swamps and cliffs made building impossible.' },
        { type: 'match', q: 'Match each building material to how settlers used it:', pairs: [
          ['Wood', 'To build the frame and walls of houses'], ['Stone', 'For strong walls and fireplaces'], ['Thatch (straw)', 'For roofing'], ['River clay', 'For bricks or to fill in wall gaps']
        ] },
        { type: 'choice', q: 'Why was SHELTER from wind and weather important for a settlement?', options: ['To keep people and animals warm and dry in winter', 'Because wind is always dangerous', 'To keep the settlement hidden', 'Weather only matters near the sea'], answer: 0, explain: 'Without shelter, people and crops would suffer badly in cold, wet or windy conditions.' },
        { type: 'order', q: 'Put these steps in the order an early settler might follow when choosing a place to live:', items: ['Find a river or spring for fresh water', 'Check the land is flat and dry for building', 'Look for forests nearby for wood', 'Check the spot can be defended from enemies', 'Build the settlement!'], explain: 'Finding water comes first, then checking land quality and materials, then thinking about defence.' },
        { type: 'choice', q: 'Why would early settlers prefer a site near a <b>coast or river crossing</b>?', options: ['To make travel and trade easier', 'Because water is always warm there', 'Coasts make better farmland', 'There is no particular reason'], answer: 0, explain: 'Coasts and river crossings were ancient highways — they allowed trade, travel and communication with other settlements.' },
        { type: 'type', q: 'What do we call a place in a river shallow enough to walk or ride across? (one word)', answer: ['ford'], explain: 'A ford is a shallow river crossing. Many towns grew up at fords — like Oxford!' },
        { type: 'choice', q: 'Dexter, which is the MOST important thing a settlement needs to survive?', options: ['Fresh water to drink', 'A market', 'A tall wall', 'A road'], answer: 0, explain: 'Without fresh water, no settlement can survive for long — it is the most vital need of all.' }
      ]
    },
    {
      id: 'settlement-types',
      title: 'Types of settlement',
      emoji: '🏘️',
      learn: [
        {
          title: 'From tiny hamlet to busy city',
          html: '<p>Settlements come in different sizes. The bigger the settlement, the more people live there and the more it has.</p>' +
                '<table><tr><th>Settlement</th><th>Size</th><th>Often has...</th></tr>' +
                '<tr><td><b>Hamlet</b></td><td>Smallest — just a few houses</td><td>Maybe a farm, no church</td></tr>' +
                '<tr><td><b>Village</b></td><td>Small</td><td>A church, a few shops, a school</td></tr>' +
                '<tr><td><b>Town</b></td><td>Bigger</td><td>Many shops, a market, a hospital</td></tr>' +
                '<tr><td><b>City</b></td><td>Largest</td><td>A cathedral, big hospitals, lots of everything</td></tr></table>' +
                '<p>A handy clue: in the UK, a place usually becomes a <b>city</b> when it has a <b>cathedral</b> (a very large, important church).</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Which is the <b>smallest</b> type of settlement?', options: ['Hamlet', 'Village', 'Town', 'City'], answer: 0, explain: 'A hamlet is the smallest — just a few houses.' },
        { type: 'choice', q: 'Which is the <b>largest</b> type of settlement?', options: ['City', 'Town', 'Village', 'Hamlet'], answer: 0, explain: 'A city is the largest, with the most people and buildings.' },
        { type: 'choice', q: 'A big church that often makes a place a CITY is called a...', options: ['Cathedral', 'Cottage', 'Castle', 'Cinema'], answer: 0, explain: 'A cathedral is a very large, important church — many UK cities have one.' },
        { type: 'choice', q: 'Which settlement is BIGGER than a village but smaller than a city?', options: ['Town', 'Hamlet', 'Cottage', 'Farm'], answer: 0, explain: 'The order from small to large is hamlet, village, town, city.' },
        { type: 'choice', q: 'Which of these would you most likely find in a CITY but NOT in a tiny hamlet?', options: ['A large hospital', 'A single house', 'A field', 'A tree'], answer: 0, explain: 'Cities have big hospitals and lots of services; a hamlet is just a few homes.' },
        { type: 'type', q: 'A settlement of just a few houses, smaller than a village, is called a... (one word)', answer: ['hamlet'], explain: 'A hamlet is the smallest settlement of all.' },
        { type: 'order', q: 'Put these settlements in order of size, <b>smallest first</b>:', items: ['Hamlet', 'Village', 'Town', 'City'], explain: 'Hamlet (smallest) → village → town → city (largest).' },
        { type: 'match', q: 'Match each settlement to a feature it often has:', pairs: [
          ['Hamlet', 'Just a few houses'], ['Village', 'A church and a small school'], ['Town', 'A market and a hospital'], ['City', 'A cathedral']
        ] },
        { type: 'sort', q: 'Sort these places: would you expect a small village or a big city?', buckets: ['Small village', 'Big city'], items: [
          { text: 'One small church', bucket: 0 }, { text: 'A huge cathedral', bucket: 1 },
          { text: 'A few shops', bucket: 0 }, { text: 'Many railway stations', bucket: 1 },
          { text: 'Quiet country lanes', bucket: 0 }, { text: 'Tall office buildings', bucket: 1 }
        ], explain: 'Villages are small and quiet; cities are large and busy with lots of services.' },
        { type: 'choice', q: 'How many houses would you typically find in a hamlet?', options: ['Just a few', 'Thousands', 'Hundreds', 'Exactly ten'], answer: 0, explain: 'A hamlet is tiny — just a few houses, often without even a church or shop.' },
        { type: 'choice', q: 'A village is BIGGER than a hamlet. What does a village have that a hamlet usually does not?', options: ['A church and some shops', 'A cathedral', 'A large hospital', 'An airport'], answer: 0, explain: 'Villages typically have a church and perhaps a few shops or a school — more than a hamlet.' },
        { type: 'type', q: 'What do we call a very large, important church that is often found in a city? (one word)', answer: ['cathedral'], explain: 'A cathedral is a grand church — in the UK, having one is a sign that a place is a city.' },
        { type: 'sort', q: 'Sort these features: would you find them in ALL settlements, or only in large towns and cities?', buckets: ['Found in most settlements', 'Only in large towns/cities'], items: [
          { text: 'Houses for people to live in', bucket: 0 },
          { text: 'A cathedral', bucket: 1 },
          { text: 'A large general hospital', bucket: 1 },
          { text: 'People living and working nearby', bucket: 0 },
          { text: 'A university', bucket: 1 },
          { text: 'A local road', bucket: 0 }
        ], explain: 'Houses and roads are found everywhere; cathedrals, hospitals and universities only appear in large places.' },
        { type: 'match', q: 'Match each settlement type to its correct description:', pairs: [
          ['Hamlet', 'A handful of houses, usually no services'], ['Village', 'Small community with a church and basic shops'], ['Town', 'Larger, with a market, hospital and many services'], ['City', 'The largest, usually with a cathedral']
        ] },
        { type: 'choice', q: 'Which of these is the correct order from <b>largest to smallest</b>?', options: ['City, town, village, hamlet', 'Hamlet, village, town, city', 'Village, town, hamlet, city', 'Town, city, hamlet, village'], answer: 0, explain: 'Largest first: city → town → village → hamlet.' },
        { type: 'type', q: 'What settlement type is bigger than a village but smaller than a city? (one word)', answer: ['town'], explain: 'The order is hamlet, village, TOWN, city. A town has markets, shops and a hospital.' },
        { type: 'choice', q: 'Why do you think settlements grow over time from hamlet to village to town?', options: ['More people arrive, needing more homes and services', 'Hamlets magically turn into cities overnight', 'Villages shrink into cities', 'Settlements only grow when kings allow it'], answer: 0, explain: 'As more people come to live somewhere, the settlement grows and needs more services — shops, schools, hospitals.' },
        { type: 'order', q: 'Put these settlement types in order from <b>most services</b> to <b>fewest services</b>:', items: ['City', 'Town', 'Village', 'Hamlet'], explain: 'Cities have everything (hospitals, universities, cathedrals); hamlets may have no services at all.' },
        { type: 'choice', q: 'Jorvik (Viking York) was described as a busy town full of craftworkers and merchants. What type of settlement was it most like?', options: ['A town or city', 'A hamlet', 'A farm', 'A monastery'], answer: 0, explain: 'With busy markets, craftworkers and merchants, Jorvik was a large, thriving settlement — like a town or city.' }
      ]
    },
    {
      id: 'place-names',
      title: 'Place name detectives!',
      emoji: '🔎',
      learn: [
        {
          title: 'Endings tell you who founded a place',
          html: '<p>The endings of UK place names are like clues left behind by the people who founded them long ago, Dexter! Look at how a town\'s name ends:</p>' +
                '<p><b>Anglo-Saxon endings:</b></p>' +
                '<ul><li><b>-ton</b> = a farm or village (Brighton)</li>' +
                '<li><b>-ham</b> = a homestead or village (Nottingham)</li>' +
                '<li><b>-ford</b> = a river crossing (Oxford)</li>' +
                '<li><b>-bury</b> = a fortified (defended) place (Canterbury)</li></ul>'
        },
        {
          title: 'Viking and Roman endings',
          html: '<p><b>Viking endings</b> (left by the Norse settlers!):</p>' +
                '<ul><li><b>-by</b> = a farm or village (Grimsby, Whitby)</li>' +
                '<li><b>-thorpe</b> = a small farm or village (Scunthorpe)</li>' +
                '<li><b>-kirk</b> = a church (Ormskirk)</li></ul>' +
                '<p><b>Roman endings:</b></p>' +
                '<ul><li><b>-chester</b>, <b>-caster</b> or <b>-cester</b> = a Roman fort (Manchester, Lancaster, Cirencester)</li></ul>' +
                '<p>So if a place ends in <b>-by</b>, the Vikings were probably there!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'A UK place name ending in <b>-by</b> was probably founded by the...', options: ['Vikings', 'Romans', 'Egyptians', 'Greeks'], answer: 0, explain: '-by means a Viking farm or village, like Grimsby or Whitby.' },
        { type: 'choice', q: 'What does the Roman ending <b>-chester</b> tell us a place once had?', options: ['A Roman fort', 'A Viking ship', 'A windmill', 'A castle'], answer: 0, explain: '-chester, -caster and -cester all mean a Roman fort.' },
        { type: 'choice', q: 'The Anglo-Saxon ending <b>-ford</b> means...', options: ['A river crossing', 'A church', 'A hill', 'A market'], answer: 0, explain: '-ford means a place where you could cross a river, like Oxford.' },
        { type: 'choice', q: 'Which of these place names was most likely founded by VIKINGS?', options: ['Whitby', 'Manchester', 'Oxford', 'Canterbury'], answer: 0, explain: 'Whitby ends in -by, a Viking ending.' },
        { type: 'choice', q: 'The Anglo-Saxon ending <b>-ton</b> usually means...', options: ['A farm or village', 'A river crossing', 'A Roman fort', 'A harbour'], answer: 0, explain: '-ton means a farm or village, like Brighton.' },
        { type: 'choice', q: 'Which ending means a <b>church</b> in Viking place names?', options: ['-kirk', '-ford', '-chester', '-ham'], answer: 0, explain: '-kirk is the Viking word for church, as in Ormskirk.' },
        { type: 'type', q: 'Manchester and Lancaster end in -chester / -caster. Which people built forts there? (one word)', answer: ['romans', 'roman', 'the romans'], explain: '-chester and -caster come from the Roman word for a fort.' },
        { type: 'match', q: 'Match each place name ending to its meaning:', pairs: [
          ['-by', 'Viking farm or village'], ['-ford', 'River crossing'], ['-chester', 'Roman fort'], ['-bury', 'Fortified place'], ['-thorpe', 'Small Viking village']
        ] },
        { type: 'sort', q: 'Sort these real UK place names by who founded them:', buckets: ['Viking', 'Roman', 'Anglo-Saxon'], items: [
          { text: 'Grimsby', bucket: 0 },
          { text: 'Scunthorpe', bucket: 0 },
          { text: 'Manchester', bucket: 1 },
          { text: 'Lancaster', bucket: 1 },
          { text: 'Nottingham', bucket: 2 },
          { text: 'Oxford', bucket: 2 }
        ], explain: '-by/-thorpe = Viking; -chester/-caster = Roman; -ham/-ton/-ford = Anglo-Saxon.' },
        { type: 'choice', q: 'What does the Anglo-Saxon ending <b>-ham</b> mean?', options: ['A homestead or village', 'A church', 'A Roman fort', 'A river crossing'], answer: 0, explain: '-ham means a homestead or village, like Nottingham or Birmingham.' },
        { type: 'choice', q: 'Which place name ending tells you a place was DEFENDED or fortified by the Anglo-Saxons?', options: ['-bury', '-by', '-ford', '-chester'], answer: 0, explain: '-bury means a fortified (defended) place, like Canterbury.' },
        { type: 'type', q: 'The Viking ending that means a farm or village is -___. What are the two letters?', answer: ['by'], explain: '-by is the Viking ending for a farm or village — as in Grimsby or Whitby.' },
        { type: 'choice', q: 'Which of these place names has a ROMAN ending?', options: ['Cirencester', 'Grimsby', 'Oxford', 'Whitby'], answer: 0, explain: 'Cirencester ends in -cester, a Roman fort ending. The other three have Viking or Anglo-Saxon endings.' },
        { type: 'match', q: 'Match each real place name to who probably founded it:', pairs: [
          ['Whitby', 'Vikings (-by)'], ['Manchester', 'Romans (-chester)'], ['Nottingham', 'Anglo-Saxons (-ham)'], ['Ormskirk', 'Vikings (-kirk)']
        ] },
        { type: 'choice', q: 'Brighton ends in -ton. Who probably founded Brighton?', options: ['Anglo-Saxons', 'Vikings', 'Romans', 'Normans'], answer: 0, explain: '-ton is an Anglo-Saxon ending meaning a farm or village — so Brighton was founded by Anglo-Saxons.' },
        { type: 'sort', q: 'Sort these place name endings: Viking or Anglo-Saxon?', buckets: ['Viking ending', 'Anglo-Saxon ending'], items: [
          { text: '-by', bucket: 0 },
          { text: '-thorpe', bucket: 0 },
          { text: '-kirk', bucket: 0 },
          { text: '-ton', bucket: 1 },
          { text: '-ham', bucket: 1 },
          { text: '-ford', bucket: 1 }
        ], explain: 'Vikings left -by, -thorpe and -kirk; Anglo-Saxons left -ton, -ham and -ford.' },
        { type: 'type', q: 'The Viking ending that means a church is -k___. What is the full ending? (4 letters)', answer: ['kirk'], explain: '-kirk is the Norse word for church. You can spot it in Ormskirk.' },
        { type: 'choice', q: 'Dexter, if you found a place called "Dexterby" on a map, who probably founded it?', options: ['Vikings', 'Romans', 'Anglo-Saxons', 'Normans'], answer: 0, explain: '-by is a Viking place name ending! "Dexterby" would be a Viking farm or village.' },
        { type: 'order', q: 'Put these place name clues in order from the OLDEST to the most RECENT settlers:', items: ['Romans (-chester/-caster)', 'Anglo-Saxons (-ton/-ham/-ford)', 'Vikings (-by/-thorpe/-kirk)'], explain: 'Romans came first (43 AD onwards), then Anglo-Saxons, then Vikings arrived from around 793 AD.' }
      ]
    },
    {
      id: 'reading-the-land',
      title: 'Reading the land',
      emoji: '🧭',
      learn: [
        {
          title: 'Compass directions and map features',
          html: '<p>A <b>compass</b> helps us describe direction. The four main points are <b>North, East, South and West</b>. A good way to remember them going clockwise is <i>"Never Eat Shrimp Wholemeal"</i> — N, E, S, W!</p>' +
                '<p>On a map we sort features into two types:</p>' +
                '<ul><li><b>Physical features</b> are made by nature: rivers, hills, forests, beaches.</li>' +
                '<li><b>Human features</b> are made by people: houses, roads, bridges, churches.</li></ul>'
        },
        {
          title: 'Why rivers and hilltops matter',
          html: '<p>Settlements often grew up <b>next to rivers</b>. A river gave people fresh water to drink, fish to eat, and a way to travel and trade by boat.</p>' +
                '<p>For safety, a good <b>defensive site</b> is high up, like a <b>hilltop</b>. From a hill you can see enemies coming from far away, and it is hard for them to attack uphill.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What are the four main points of a compass?', options: ['North, East, South, West', 'Up, Down, Left, Right', 'Top, Bottom, Side, Middle', 'Red, Blue, Green, Yellow'], answer: 0, explain: 'North, East, South and West are the four main compass directions.' },
        { type: 'choice', q: 'Which direction is OPPOSITE to North?', options: ['South', 'East', 'West', 'Up'], answer: 0, explain: 'North and South are opposites; East and West are opposites.' },
        { type: 'choice', q: 'Which of these is a <b>physical</b> feature (made by nature)?', options: ['A river', 'A road', 'A house', 'A bridge'], answer: 0, explain: 'A river is made by nature, so it is a physical feature.' },
        { type: 'choice', q: 'Which of these is a <b>human</b> feature (made by people)?', options: ['A bridge', 'A hill', 'A forest', 'A beach'], answer: 0, explain: 'A bridge is built by people, so it is a human feature.' },
        { type: 'choice', q: 'Why did many settlements grow up next to a <b>river</b>?', options: ['For water, food and travel by boat', 'Because rivers are noisy', 'To make the village colder', 'There was no reason'], answer: 0, explain: 'Rivers gave drinking water, fish, and an easy way to travel and trade.' },
        { type: 'choice', q: 'Why is a <b>hilltop</b> a good place to defend?', options: ['You can see enemies coming and it is hard to attack uphill', 'It is always sunny on hills', 'Hills have more food', 'Enemies love climbing'], answer: 0, explain: 'From a hilltop you can spot enemies far off, and attacking uphill is hard.' },
        { type: 'type', q: 'The direction opposite to East is... (one word)', answer: ['west'], explain: 'East and West are opposite directions on the compass.' },
        { type: 'sort', q: 'Sort these map features: physical (natural) or human (built)?', buckets: ['Physical feature', 'Human feature'], items: [
          { text: 'Mountain', bucket: 0 }, { text: 'Bridge', bucket: 1 }, { text: 'Forest', bucket: 0 },
          { text: 'Road', bucket: 1 }, { text: 'River', bucket: 0 }, { text: 'Church', bucket: 1 }
        ], explain: 'Nature makes physical features; people build human features.' },
        { type: 'order', q: 'Put the compass directions in order going clockwise, starting at North:', items: ['North', 'East', 'South', 'West'], explain: 'Clockwise from North: North, East, South, West.' },
        { type: 'choice', q: 'Which direction is OPPOSITE to East?', options: ['West', 'North', 'South', 'Down'], answer: 0, explain: 'East and West are opposite compass directions.' },
        { type: 'choice', q: 'A helpful way to remember compass directions clockwise is "Never Eat Shrimp ________". What is the missing word?', options: ['Wholemeal', 'Whenever', 'Well', 'Wildly'], answer: 0, explain: 'Never Eat Shrimp Wholemeal — N, E, S, W. A silly sentence, but it works, Dexter!' },
        { type: 'type', q: 'What do we call features on a map that are made by NATURE, like rivers and hills? (two words: physical ________)', answer: ['features', 'physical features'], explain: 'Physical features are natural ones — rivers, hills, forests and beaches.' },
        { type: 'sort', q: 'Sort these: physical features (natural) or human features (built by people)?', buckets: ['Physical feature', 'Human feature'], items: [
          { text: 'A sandy beach', bucket: 0 },
          { text: 'A motorway', bucket: 1 },
          { text: 'A hill', bucket: 0 },
          { text: 'A school building', bucket: 1 },
          { text: 'A lake', bucket: 0 },
          { text: 'A castle', bucket: 1 }
        ], explain: 'Beaches, hills and lakes are made by nature; motorways, schools and castles are built by people.' },
        { type: 'match', q: 'Match each compass direction to the direction directly opposite it:', pairs: [
          ['North', 'South'], ['East', 'West'], ['South', 'North'], ['West', 'East']
        ] },
        { type: 'choice', q: 'If you are facing North and turn to face the direction on your RIGHT, which direction are you facing?', options: ['East', 'West', 'South', 'Up'], answer: 0, explain: 'From North, turning clockwise (right) takes you to East.' },
        { type: 'choice', q: 'A settlement built on a hilltop would be EASY to defend. Why?', options: ['Defenders can see enemies from far away and attackers must climb uphill', 'The hill makes attackers invisible', 'Hills are always surrounded by water', 'Enemies cannot climb any hills'], answer: 0, explain: 'Height gives defenders a big advantage — they can see further and attack downhill while enemies struggle uphill.' },
        { type: 'type', q: 'Features on a map that are BUILT by people (like roads and bridges) are called h_____ features. What is the missing word?', answer: ['human'], explain: 'Human features are made by people — as opposed to physical features made by nature.' },
        { type: 'sort', q: 'Sort these into good reasons to settle NEXT TO A RIVER or ON A HILLTOP:', buckets: ['Reason to settle by a river', 'Reason to settle on a hilltop'], items: [
          { text: 'Easy to spot enemies approaching', bucket: 1 },
          { text: 'Fresh water to drink every day', bucket: 0 },
          { text: 'Hard for enemies to attack uphill', bucket: 1 },
          { text: 'Fish in the river for food', bucket: 0 },
          { text: 'Travel and trade by boat', bucket: 0 }
        ], explain: 'Rivers give water, fish and transport. Hilltops give defence — you can see and fight from above.' },
        { type: 'choice', q: 'Which of these BEST explains why geographers study both physical AND human features on a map?', options: ['Together they show the full picture of what a place is like', 'Physical features are more important than human ones', 'Human features are more interesting than rivers and hills', 'Maps only show one type of feature at a time'], answer: 0, explain: 'Both types of feature together tell the complete story of a place — its natural landscape AND how people have changed it.' }
      ]
    },
    {
      id: 'design-settlement',
      title: 'Design quest: build your Viking settlement',
      emoji: '🛖',
      write: {
        prompt: 'You are a Viking leader looking for a place to build a brand new settlement! <b>Describe and name your settlement.</b> Where would you build it, and why? What does it have? Give it a Viking or Saxon name ending (like <b>-by</b>, <b>-thorpe</b>, <b>-ton</b> or <b>-ham</b>). Explain your fresh water, your food plan, how you will defend it, and list at least <b>4 buildings</b>.',
        minWords: 40,
        checklist: [
          'I gave my settlement a <b>name with a Viking or Saxon ending</b> (-by, -thorpe, -ton, -ham…)',
          'I said where my <b>fresh water</b> comes from (a river, stream or spring)',
          'I explained my <b>food plan</b> (farming, fishing or animals)',
          'I described how I would <b>defend</b> my settlement (a hilltop, a river, a fence…)',
          'I listed <b>at least 4 buildings</b>',
          'I checked my <b>capital letters and full stops</b>'
        ]
      },
      learn: [
        { title: 'Think like a settler!', html: '<p>Remember what every settler needs: <b>fresh water, food, flat dry land, building materials, defence and shelter</b>. A spot by a river on a hill is perfect! Pick a clever name ending so future detectives know the Vikings built it.</p>' }
      ]
    }
  ]
});
