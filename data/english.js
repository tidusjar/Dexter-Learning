/* English — Year 4 Summer 2: persuasive writing, How to Train Your Dragon 'how to' writing, reading skills */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'english',
  name: 'English',
  icon: '📚',
  color: '#457b9d',
  tagline: 'Persuasive writing, How to Train Your Dragon, and super reading skills',
  lessons: [
    {
      id: 'persuasion-intro',
      title: 'What is persuasive writing?',
      emoji: '🗣️',
      learn: [
        {
          title: 'The power of persuasion',
          html: '<p><b>Persuasive writing</b> tries to make the reader think, feel or do something — like an advert, a poster or a letter asking for change.</p>' +
                '<p>Persuasive writers use special tricks called <b>devices</b>:</p>' +
                '<ul><li><b>Rhetorical question</b> — a question that doesn\'t need an answer: <i>"Who wouldn\'t want a pet dragon?"</i></li>' +
                '<li><b>Emotive language</b> — words that stir up feelings: <i>"poor, helpless creatures"</i></li>' +
                '<li><b>Exaggeration</b> — stretching the truth: <i>"the best sweets in the entire universe!"</i></li>' +
                '<li><b>Rule of three</b> — three powerful words or ideas: <i>"fast, fun and fearless"</i></li>' +
                '<li><b>Facts and statistics</b> — <i>"9 out of 10 Vikings agree!"</i></li>' +
                '<li><b>Direct address</b> — talking straight to the reader: <i>"YOU can make a difference."</i></li></ul>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What is persuasive writing trying to do?', options: ['Make the reader think, feel or do something', 'Tell a made-up story', 'List facts in any order', 'Describe the weather'], answer: 0, explain: 'Persuasion is all about changing the reader\'s mind!' },
        { type: 'choice', q: '"Who wouldn\'t want to sail the seas in a magnificent longship?" — which device is this?', options: ['Rhetorical question', 'Statistic', 'Rule of three', 'Alliteration'], answer: 0, explain: 'It\'s a question that doesn\'t expect an answer — a rhetorical question.' },
        { type: 'choice', q: '"Fast, fierce and fearless!" — which device is this?', options: ['Rule of three', 'Statistic', 'Rhetorical question', 'Simile'], answer: 0, explain: 'Three punchy words in a row — the rule of three (with alliteration too!).' },
        { type: 'choice', q: '"9 out of 10 dragon trainers recommend Toothless Treats." — which device?', options: ['A statistic', 'Emotive language', 'A rhetorical question', 'Exaggeration'], answer: 0, explain: 'Numbers used as evidence are statistics.' },
        { type: 'choice', q: '"This is the most AMAZING offer in the history of the world!" — which device?', options: ['Exaggeration', 'A fact', 'A statistic', 'Direct address'], answer: 0, explain: 'Stretching the truth to sound exciting = exaggeration (also called hyperbole).' },
        { type: 'choice', q: '"YOU could be our next champion." — which device?', options: ['Direct address', 'Rule of three', 'Statistic', 'Rhetorical question'], answer: 0, explain: 'It speaks straight to the reader using "you".' },
        { type: 'choice', q: '"Imagine the poor, shivering, abandoned puppies." — which device?', options: ['Emotive language', 'A statistic', 'A fact', 'Direct speech'], answer: 0, explain: 'Words chosen to tug at your feelings are emotive language.' },
        { type: 'sort', q: 'Sort these sentences: persuasive or just informative?', buckets: ['Persuasive 🗣️', 'Informative 📋'], items: [
          { text: 'Buy SuperSocks today — your feet deserve the best!', bucket: 0 },
          { text: 'Socks are usually made of cotton or wool.', bucket: 1 },
          { text: 'Surely you don\'t want to miss this once-in-a-lifetime deal?', bucket: 0 },
          { text: 'The library opens at 9 o\'clock.', bucket: 1 },
          { text: 'Join today — it will change your life forever!', bucket: 0 },
          { text: 'Vikings sailed in ships called longships.', bucket: 1 }
        ] },
        { type: 'match', q: 'Match the device to its example:', pairs: [
          ['Rhetorical question', 'Don\'t you deserve a treat?'],
          ['Rule of three', 'Big, bold and brilliant!'],
          ['Statistic', '8 out of 10 children love it'],
          ['Emotive language', 'The poor, lonely dragon wept']
        ] }
      ]
    },
    {
      id: 'persuasion-devices',
      title: 'Persuasive device detective',
      emoji: '🕵️',
      learn: [
        {
          title: 'Stronger sentences',
          html: '<p>Great persuaders also use:</p>' +
                '<ul><li><b>Imperative (bossy) verbs</b> — <i>Buy! Join! Visit! Don\'t miss out!</i></li>' +
                '<li><b>Alliteration</b> — words starting with the same sound: <i>"Dexter\'s dazzling dragons"</i></li>' +
                '<li><b>Flattery</b> — <i>"A clever person like you…"</i></li>' +
                '<li><b>Strong opinions said like facts</b> — <i>"Everybody knows that…"</i></li></ul>' +
                '<p>An advert might squeeze lots of devices into one line: <i>"Hurry! Clever kids choose Crunchy Critters — crispy, crunchy and completely delicious!"</i></p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Which of these is an imperative (bossy) verb sentence?', options: ['Visit our shop today!', 'Our shop is on the high street.', 'I went to the shop.', 'The shop was busy.'], answer: 0, explain: '"Visit" commands the reader to do something.' },
        { type: 'choice', q: '"Slippery slimy snakes slither south." — which device?', options: ['Alliteration', 'Statistic', 'Rhetorical question', 'Flattery'], answer: 0, explain: 'Lots of words starting with "s" — alliteration!' },
        { type: 'choice', q: '"A smart, kind reader like you will surely agree." — which device?', options: ['Flattery', 'Statistic', 'Exaggeration', 'Alliteration'], answer: 0, explain: 'Complimenting the reader is flattery.' },
        { type: 'choice', q: 'Which sentence uses the rule of three?', options: ['Our park is clean, safe and fun.', 'Our park is very clean.', 'The park opens at nine.', 'Is the park clean?'], answer: 0, explain: 'Three describing words in a row: clean, safe and fun.' },
        { type: 'choice', q: 'Which is an OPINION (not a fact)?', options: ['Chocolate is the best food ever.', 'Chocolate is made from cocoa beans.', 'Some chocolate contains milk.', 'Chocolate melts when heated.'], answer: 0, explain: '"Best ever" can\'t be proved — it\'s an opinion.' },
        { type: 'sort', q: 'Fact or opinion?', buckets: ['Fact ✅', 'Opinion 💭'], items: [
          { text: 'Vikings came from Scandinavia.', bucket: 0 },
          { text: 'Vikings were the coolest people in history.', bucket: 1 },
          { text: 'A longship could carry many warriors.', bucket: 0 },
          { text: 'Everyone should love sailing.', bucket: 1 },
          { text: 'The Viking age began over 1,000 years ago.', bucket: 0 },
          { text: 'History is the most interesting subject.', bucket: 1 }
        ] },
        { type: 'type', q: 'Fill in the missing imperative verb: "______ your tickets now before they sell out!" (starts with B)', answer: ['buy', 'book'], explain: '"Buy your tickets now!" — a bossy verb starts the command.' },
        { type: 'choice', q: 'Which slogan uses BOTH alliteration and exaggeration?', options: ['Peter\'s Pizzas — the most perfect pizzas on the planet!', 'Pizzas sold here.', 'We sell pizza and pasta.', 'Try our new pizza.'], answer: 0, explain: 'Lots of "p" sounds AND "most perfect on the planet" is exaggeration.' },
        { type: 'order', q: 'Put this persuasive letter in the correct order:', items: [
          'Dear Head Teacher,', 'I am writing to persuade you that we need a school dragon.', 'Firstly, a dragon would keep the school warm in winter.', 'Secondly, 9 out of 10 pupils agree lessons would be more exciting.', 'In conclusion, a dragon would make our school the best in Britain.', 'Yours sincerely, Dexter'
        ], explain: 'Greeting → introduction → points → conclusion → sign-off.' }
      ]
    },
    {
      id: 'httyd-instructions',
      title: 'How to Train Your Dragon: instruction writing',
      emoji: '🐉',
      learn: [
        {
          title: 'Hiccup\'s "How To…" guides',
          html: '<p>In <b>How to Train Your Dragon</b> by Cressida Cowell, a young Viking called <b>Hiccup Horrendous Haddock III</b> must catch and train a dragon to join his tribe, the Hairy Hooligans. His dragon, <b>Toothless</b>, is small, stubborn and VERY cheeky.</p>' +
                '<p>The book is written like a <b>"how to" guide</b>. Good instructions need:</p>' +
                '<ul><li>A clear <b>title</b> — "How to…"</li>' +
                '<li>A list of <b>what you need</b></li>' +
                '<li><b>Numbered steps</b> in order</li>' +
                '<li><b>Imperative verbs</b> at the start of steps — <i>Catch, Hold, Feed, Whisper…</i></li>' +
                '<li><b>Time conjunctions</b> — <i>First, Next, Then, After that, Finally</i></li>' +
                '<li>Helpful <b>tips and warnings</b> — <i>WARNING: never tickle a sleeping dragon!</i></li></ul>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Who wrote How to Train Your Dragon?', options: ['Cressida Cowell', 'Roald Dahl', 'J.K. Rowling', 'David Walliams'], answer: 0, explain: 'Cressida Cowell wrote the whole How to Train Your Dragon series.' },
        { type: 'choice', q: 'What is the hero of the book called?', options: ['Hiccup', 'Toothless', 'Snotlout', 'Stoick'], answer: 0, explain: 'Hiccup Horrendous Haddock III — a most unlikely hero!' },
        { type: 'type', q: 'What is the name of Hiccup\'s dragon?', answer: ['toothless'], explain: 'Toothless — small, cheeky and tricky to train!' },
        { type: 'choice', q: 'Which sentence is written like an INSTRUCTION?', options: ['Hold the dragon gently but firmly.', 'The dragon was green and scaly.', 'I like dragons a lot.', 'Dragons can breathe fire.'], answer: 0, explain: 'It starts with the imperative verb "Hold" and tells you what to do.' },
        { type: 'choice', q: 'Which word is an imperative (bossy) verb?', options: ['Whisper', 'Slowly', 'Dragon', 'Scary'], answer: 0, explain: '"Whisper" can command someone: "Whisper to the dragon."' },
        { type: 'choice', q: 'Which is a TIME conjunction for instructions?', options: ['Next', 'Because', 'But', 'Although'], answer: 0, explain: 'First, next, then, after that, finally — they show the order of steps.' },
        { type: 'order', q: 'Put these instructions for training a dragon in a sensible order:', items: [
          'First, choose a small, sleepy dragon.', 'Next, offer it a tasty fish.', 'Then, speak to it calmly in Dragonese.', 'After that, practise flying together every day.', 'Finally, show off your trained dragon to the tribe!'
        ] },
        { type: 'choice', q: 'Why do instructions use numbered steps?', options: ['So the reader does things in the right order', 'To make the page look longer', 'Because numbers are pretty', 'To hide the difficult parts'], answer: 0, explain: 'Order matters — feed the dragon BEFORE you ride it!' },
        { type: 'match', q: 'Match each part of a "how to" guide to its job:', pairs: [
          ['Title', 'Tells you what you will learn to do'],
          ['You will need', 'Lists the equipment'],
          ['Numbered steps', 'Explain what to do, in order'],
          ['Warning box', 'Keeps you safe from danger!']
        ] }
      ]
    },
    {
      id: 'write-howto',
      title: 'Writing quest: my own "How To" chapter',
      emoji: '✍️',
      write: {
        prompt: 'Write your own chapter called <b>"How to Train Your Dragon"</b> (or "How to Catch a Dragon"!). Give your dragon a name, list what you need, and write at least 5 numbered steps. Use imperative verbs (Catch… Feed… Whisper…), time words (First, Next, Finally) and add a WARNING!',
        minWords: 60,
        checklist: [
          'I gave my guide a <b>title</b> starting with "How to…"',
          'I listed <b>what you need</b>',
          'I wrote at least <b>5 numbered steps</b> in order',
          'I started steps with <b>imperative verbs</b> (Catch, Hold, Feed…)',
          'I used <b>time words</b> like First, Next, Then, Finally',
          'I added a <b>WARNING</b> or top tip',
          'I checked my <b>capital letters and full stops</b>'
        ]
      },
      learn: [
        { title: 'Hiccup needs your help!', html: '<p>The Hairy Hooligan tribe has lost its dragon-training manual! Write a new chapter to save the day. Remember Hiccup\'s rule: the best dragon trainers are clever, patient and kind.</p>' }
      ]
    },
    {
      id: 'reading-raid',
      title: 'Reading quest: The Raid (retrieval & inference)',
      emoji: '🛶',
      learn: [
        {
          title: 'Read this story extract carefully',
          html: '<p style="font-style:italic">Erik gripped the side of the longship as it slid silently through the fog. His knuckles were white and his heart hammered like a blacksmith\'s anvil. Tonight was his first raid, and he was determined not to let his father down.</p>' +
                '<p style="font-style:italic">"Steady, lad," whispered Old Bjorn, resting a huge hand on Erik\'s shoulder. "The monastery is just beyond those rocks. Remember — we move quickly, we move quietly, and we leave before the moon is high."</p>' +
                '<p style="font-style:italic">Erik nodded, but his stomach twisted. He could see candlelight flickering in a distant window. Somebody in there was still awake.</p>' +
                '<p><b>Detective tip:</b> <i>Retrieval</i> questions are answered by finding words in the text. <i>Inference</i> questions need you to read between the lines — use clues to work out what the author doesn\'t say directly.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'RETRIEVE: What was the weather like as the longship sailed?', options: ['Foggy', 'Sunny', 'Snowy', 'Windy'], answer: 0, explain: 'The ship "slid silently through the fog".' },
        { type: 'choice', q: 'RETRIEVE: Who rested a hand on Erik\'s shoulder?', options: ['Old Bjorn', 'His father', 'A monk', 'The captain'], answer: 0, explain: 'The text says "whispered Old Bjorn, resting a huge hand on Erik\'s shoulder".' },
        { type: 'choice', q: 'RETRIEVE: Where were the Vikings heading?', options: ['A monastery', 'A castle', 'A village market', 'Another ship'], answer: 0, explain: '"The monastery is just beyond those rocks."' },
        { type: 'choice', q: 'INFER: How is Erik feeling?', options: ['Nervous', 'Bored', 'Sleepy', 'Furious'], answer: 0, explain: 'White knuckles, a hammering heart and a twisting stomach are clues that he is nervous.' },
        { type: 'choice', q: 'INFER: "His heart hammered like a blacksmith\'s anvil" — what does this tell us?', options: ['His heart was beating hard and fast', 'He worked as a blacksmith', 'He could hear a blacksmith nearby', 'His heart was made of metal'], answer: 0, explain: 'It\'s a simile — comparing his pounding heart to hammering on an anvil.' },
        { type: 'choice', q: 'INFER: Why must the Vikings "leave before the moon is high"?', options: ['So they aren\'t seen — moonlight would give them away', 'Because the moon is dangerous', 'Because they are scared of the dark', 'Because the ship turns into a pumpkin'], answer: 0, explain: 'Raids depended on surprise — bright moonlight would let defenders spot them.' },
        { type: 'choice', q: 'INFER: Why does Erik\'s stomach twist when he sees candlelight?', options: ['He realises someone is awake and might raise the alarm', 'He is hungry for dinner', 'He loves candles', 'He feels seasick'], answer: 0, explain: '"Somebody in there was still awake" — the raid might be discovered!' },
        { type: 'choice', q: 'PREDICT: What is most likely to happen next?', options: ['The Vikings will land and begin the raid', 'Erik will go home for tea', 'The monastery will fly away', 'Old Bjorn will fall asleep'], answer: 0, explain: 'The story is building up to the raid beginning — that\'s the most sensible prediction.' },
        { type: 'choice', q: 'Which word in the text means "decided and not giving up"?', options: ['Determined', 'Whispered', 'Flickering', 'Distant'], answer: 0, explain: '"He was determined not to let his father down."' }
      ]
    },
    {
      id: 'reading-vikings30',
      title: 'Reading quest: Vikings in 30 Seconds (summarising)',
      emoji: '📖',
      learn: [
        {
          title: 'Read this information text',
          html: '<p style="font-style:italic">The Vikings were expert shipbuilders. Their longships were light, fast and could sail in shallow rivers as well as stormy seas. A carved dragon head often decorated the prow to frighten enemies — and, some believed, evil spirits.</p>' +
                '<p style="font-style:italic">But Vikings were not only warriors. Most were farmers who grew oats and barley and kept sheep, pigs and cattle. Others were skilled traders who travelled as far as Baghdad, swapping furs, walrus ivory and amber for silver, silk and spices.</p>' +
                '<p style="font-style:italic">At home, Vikings loved stories. On long winter nights, families gathered around the fire to hear sagas — exciting tales of gods, giants and heroes passed down by word of mouth.</p>' +
                '<p><b>Detective tip:</b> To <i>summarise</i>, find the MAIN idea of each paragraph and squash it into one short sentence. Leave out the small details!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What is the MAIN idea of the first paragraph?', options: ['Vikings built brilliant ships', 'Dragons are scary', 'Rivers are shallow', 'Storms are dangerous'], answer: 0, explain: 'Everything in that paragraph is about how good Viking ships were.' },
        { type: 'choice', q: 'What is the MAIN idea of the second paragraph?', options: ['Vikings had many jobs, like farming and trading', 'Vikings only fought battles', 'Baghdad is far away', 'Pigs are useful animals'], answer: 0, explain: 'The paragraph shows Vikings were farmers and traders, not just warriors.' },
        { type: 'choice', q: 'Which is the best SUMMARY of the whole text?', options: ['Vikings were skilled shipbuilders, farmers and traders who loved telling stories.', 'Vikings had dragon heads on ships.', 'Vikings ate oats and barley.', 'Winter nights are long and cold.'], answer: 0, explain: 'A summary covers ALL the main ideas in as few words as possible.' },
        { type: 'choice', q: 'RETRIEVE: Why did longships have a carved dragon head?', options: ['To frighten enemies and evil spirits', 'To help the ship float', 'To store food in', 'To make the ship heavier'], answer: 0, explain: 'The text says it was "to frighten enemies — and, some believed, evil spirits".' },
        { type: 'type', q: 'RETRIEVE: What were Viking stories told around the fire called?', answer: ['sagas', 'saga'], explain: 'Sagas — tales of gods, giants and heroes.' },
        { type: 'choice', q: 'RETRIEVE: Which of these did Viking traders GET in exchange for furs?', options: ['Silver, silk and spices', 'Sheep, pigs and cattle', 'Oats and barley', 'Longships'], answer: 0, explain: 'They swapped furs, ivory and amber FOR silver, silk and spices.' },
        { type: 'choice', q: 'INFER: Why could sailing in SHALLOW rivers be useful for Vikings?', options: ['They could travel far inland to towns other ships couldn\'t reach', 'Shallow water is warmer', 'Fish live in rivers', 'Rivers are prettier than seas'], answer: 0, explain: 'Shallow-bottomed ships let Vikings sail up rivers and appear where nobody expected!' },
        { type: 'choice', q: '"Passed down by word of mouth" means…', options: ['Told out loud from person to person, not written down', 'Written in books', 'Painted on walls', 'Sung only by birds'], answer: 0, explain: 'Sagas were spoken and remembered, not written down at first.' },
        { type: 'sort', q: 'Main idea or small detail?', buckets: ['Main idea 🎯', 'Small detail 🔍'], items: [
          { text: 'Vikings were expert shipbuilders', bucket: 0 },
          { text: 'Some Vikings kept pigs', bucket: 1 },
          { text: 'Vikings traded across the world', bucket: 0 },
          { text: 'Amber was one thing they traded', bucket: 1 },
          { text: 'Vikings loved telling stories', bucket: 0 }
        ] }
      ]
    },
    {
      id: 'grammar-boost',
      title: 'Grammar power-up',
      emoji: '⚡',
      learn: [
        {
          title: 'Expanded noun phrases & conjunctions',
          html: '<p>An <b>expanded noun phrase</b> adds detail to a noun: not just "the ship" but <i>"the sleek, wooden ship with a dragon\'s head"</i>.</p>' +
                '<p><b>Conjunctions</b> join ideas: <i>and, but, or, so, because, although, when, if</i>.</p>' +
                '<p><b>Fronted adverbials</b> start a sentence by saying how, when or where — and need a comma: <i>"Silently, the ship slipped through the fog."</i></p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Which is an expanded noun phrase?', options: ['The fierce, golden dragon with sharp claws', 'The dragon', 'Dragon', 'It flew'], answer: 0, explain: 'Adjectives and extra detail expand the noun "dragon".' },
        { type: 'choice', q: 'Choose the best conjunction: "Erik was scared, ______ he climbed aboard anyway."', options: ['but', 'because', 'or', 'if'], answer: 0, explain: '"But" shows the surprise — scared, BUT brave enough to go.' },
        { type: 'choice', q: 'Choose the best conjunction: "Take a cloak ______ the night will be cold."', options: ['because', 'but', 'or', 'although'], answer: 0, explain: '"Because" gives the reason.' },
        { type: 'choice', q: 'Which sentence starts with a fronted adverbial?', options: ['After the storm, the Vikings repaired their ship.', 'The Vikings repaired their ship.', 'The ship was broken.', 'Vikings are good at repairs.'], answer: 0, explain: '"After the storm," tells us WHEN — and look, it has its comma!' },
        { type: 'choice', q: 'Where should the comma go? "Slowly the dragon opened one eye."', options: ['After "Slowly"', 'After "dragon"', 'After "opened"', 'No comma needed'], answer: 0, explain: 'Fronted adverbials are followed by a comma: "Slowly, the dragon…"' },
        { type: 'choice', q: 'Which word is a NOUN in: "The brave warrior sailed quickly"?', options: ['warrior', 'brave', 'sailed', 'quickly'], answer: 0, explain: 'A noun is a person, place or thing — "warrior" is the person.' },
        { type: 'choice', q: 'Which word is an ADJECTIVE in: "The brave warrior sailed quickly"?', options: ['brave', 'warrior', 'sailed', 'quickly'], answer: 0, explain: 'Adjectives describe nouns — "brave" describes the warrior.' },
        { type: 'choice', q: 'Which word is an ADVERB in: "The brave warrior sailed quickly"?', options: ['quickly', 'brave', 'warrior', 'sailed'], answer: 0, explain: 'Adverbs describe HOW the verb happens — he sailed quickly.' },
        { type: 'match', q: 'Match the word type to its job:', pairs: [
          ['Noun', 'Names a person, place or thing'],
          ['Adjective', 'Describes a noun'],
          ['Verb', 'A doing or being word'],
          ['Adverb', 'Describes how, when or where']
        ] },
        { type: 'type', q: 'Add ONE adjective to expand this noun phrase: "the ______ longship" (any sensible describing word!)', answer: ['mighty', 'huge', 'fast', 'wooden', 'enormous', 'sleek', 'long', 'great', 'big', 'swift', 'fierce', 'old', 'giant', 'speedy', 'massive', 'powerful', 'strong', 'scary', 'amazing', 'beautiful', 'red', 'golden'], explain: 'Any good describing word works — like "the mighty longship".', hint: 'Think of a describing word: mighty, wooden, swift…' }
      ]
    },
    {
      id: 'write-persuade',
      title: 'Writing quest: persuade us!',
      emoji: '📣',
      write: {
        prompt: 'Choose ONE: persuade your family that <b>you should get a pet dragon</b>, OR write an advert persuading Vikings to <b>buy your amazing new longship</b>. Use at least THREE persuasive devices: a rhetorical question, the rule of three, exaggeration, emotive language or a statistic!',
        minWords: 50,
        checklist: [
          'I used a <b>rhetorical question</b>',
          'I used the <b>rule of three</b> or <b>exaggeration</b>',
          'I used <b>emotive language</b> or a <b>statistic</b>',
          'I spoke to the reader directly with "<b>you</b>"',
          'I checked my <b>capital letters and full stops</b>'
        ]
      },
      learn: [
        { title: 'Time to persuade!', html: '<p>Remember your devices: rhetorical questions ("Who wouldn\'t want…?"), rule of three ("fast, fierce and fearless"), exaggeration ("the best in the world!"), emotive language and statistics ("9 out of 10 Vikings agree!").</p>' }
      ]
    }
  ]
});
