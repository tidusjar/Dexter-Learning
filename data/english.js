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
        ] },
        { type: 'type', q: 'Which persuasive device uses the number 9 out of 10 or a percentage to back up a claim? (one word)', answer: ['statistic', 'statistics', 'fact', 'facts and statistics'], explain: 'Numbers used as evidence are called statistics.', hint: 'It starts with S.' },
        { type: 'choice', q: '"Isn\'t it time YOU made a difference?" — what TWO devices can you spot?', options: ['Rhetorical question and direct address', 'Rule of three and flattery', 'Statistic and exaggeration', 'Emotive language and alliteration'], answer: 0, explain: 'It\'s a question with no answer expected (rhetorical), and it uses "you" to speak directly to the reader.' },
        { type: 'sort', q: 'Sort each example into its persuasive device:', buckets: ['Exaggeration 💥', 'Emotive language 💔'], items: [
          { text: 'The best biscuit the world has EVER seen!', bucket: 0 },
          { text: 'The poor, frightened animal shivered alone.', bucket: 1 },
          { text: 'A billion times better than any other!', bucket: 0 },
          { text: 'Helpless children need your kindness today.', bucket: 1 },
          { text: 'This is the greatest deal in all of history!', bucket: 0 }
        ] },
        { type: 'choice', q: 'Which of these is an example of DIRECT ADDRESS?', options: ['"You can help save the world!"', '"Fast, fun and fearless."', '"99% of experts agree."', '"Isn\'t that wonderful?"'], answer: 0, explain: 'Direct address speaks straight to the reader using "you".' },
        { type: 'match', q: 'Match each device to what it does:', pairs: [
          ['Exaggeration', 'Stretches the truth for effect'],
          ['Direct address', 'Speaks to the reader using "you"'],
          ['Rule of three', 'Groups three words or ideas together'],
          ['Rhetorical question', 'A question that needs no answer']
        ] },
        { type: 'choice', q: 'Dexter, which of these is the BEST reason to use emotive language in a persuasive text?', options: ['To stir up the reader\'s feelings so they care about the topic', 'To give the reader accurate data', 'To make the text longer', 'To confuse the reader'], answer: 0, explain: 'Emotive language targets the reader\'s emotions — making them feel sad, angry or excited about your argument.' },
        { type: 'sort', q: 'Sort these sentences by persuasive device:', buckets: ['Rhetorical question ❓', 'Rule of three ✂️✂️✂️'], items: [
          { text: 'Who could possibly say no to free chips?', bucket: 0 },
          { text: 'Clean, green and completely brilliant.', bucket: 1 },
          { text: 'Don\'t you want to be a hero?', bucket: 0 },
          { text: 'Strong, speedy and super reliable.', bucket: 1 },
          { text: 'Can you afford to miss this offer?', bucket: 0 }
        ] },
        { type: 'choice', q: 'Which sentence uses a STATISTIC to persuade?', options: ['"4 out of 5 dentists recommend brushing twice a day."', '"Brushing your teeth is really important."', '"EVERYONE loves a clean smile!"', '"Clean teeth are amazing!"'], answer: 0, explain: 'A real (or made-up!) number makes a claim sound more believable.' },
        { type: 'type', q: 'Name the device used in: "Poor, starving, forgotten creatures need your help now." (two words)', answer: ['emotive language', 'emotive'], explain: 'Words chosen to stir feelings — like "poor", "starving" and "forgotten" — are emotive language.' },
        { type: 'order', q: 'Put these persuasive devices in the order they appear in this advert: "YOU could save the planet! Isn\'t that amazing? Fast, free and fantastic — and 9 out of 10 experts agree!"', items: [
          'Direct address',
          'Rhetorical question',
          'Rule of three',
          'Statistic'
        ] },
        { type: 'choice', q: 'Which of these is a RHETORICAL question?', options: ['"Can you really afford to miss this?"', '"The show starts at 7 pm."', '"We sell five flavours."', '"Open Monday to Friday."'], answer: 0, explain: 'A rhetorical question is meant to make you think, not to get an actual answer.' },
        { type: 'choice', q: 'Dexter, why do writers use the RULE OF THREE?', options: ['Three words or ideas together feel powerful and memorable', 'Three is the only lucky number', 'It makes the text exactly the right length', 'It confuses the reader on purpose'], answer: 0, explain: 'Groups of three have a natural rhythm — they stick in the reader\'s mind!' },
        { type: 'sort', q: 'Sort these phrases into the correct persuasive device:', buckets: ['Rule of three 🔢', 'Direct address 👉'], items: [
          { text: 'Bold, bright and breathtaking!', bucket: 0 },
          { text: 'YOU deserve the best.', bucket: 1 },
          { text: 'Fresh, fast and free!', bucket: 0 },
          { text: 'Don\'t miss YOUR chance.', bucket: 1 },
          { text: 'Strong, sturdy and stylish.', bucket: 0 }
        ] },
        { type: 'match', q: 'Match the persuasive device to a question you could ask to spot it:', pairs: [
          ['Rhetorical question', 'Is there a question nobody needs to answer?'],
          ['Exaggeration', 'Is the claim too good to be true?'],
          ['Emotive language', 'Do the words try to make me feel something?'],
          ['Direct address', 'Does the writer use "you" to talk to me?']
        ] },
        { type: 'type', q: 'What is the name for a question in persuasive writing that doesn\'t need an answer? (two words)', answer: ['rhetorical question'], explain: 'A rhetorical question makes the reader think — no reply expected!', hint: 'It begins with R.' },
        { type: 'choice', q: 'Which of these uses EXAGGERATION?', options: ['"The greatest pizza in the entire universe!"', '"Pizza contains cheese."', '"This pizza is nice."', '"Pizza was invented in Italy."'], answer: 0, explain: '"Greatest in the entire universe" stretches the truth — that\'s exaggeration.' },
        { type: 'sort', q: 'Persuasive device or NOT a persuasive device?', buckets: ['A persuasive device ✅', 'Not a persuasive device 🚫'], items: [
          { text: 'Rhetorical question', bucket: 0 },
          { text: 'Using a full stop', bucket: 1 },
          { text: 'Emotive language', bucket: 0 },
          { text: 'Writing in alphabetical order', bucket: 1 },
          { text: 'Statistics', bucket: 0 },
          { text: 'Rule of three', bucket: 0 }
        ] },
        { type: 'choice', q: 'Which sentence uses BOTH a rhetorical question AND direct address?', options: ['"Don\'t YOU want to be a hero?"', '"Heroes are brilliant."', '"9 out of 10 heroes agree!"', '"Heroic, brave and bold!"'], answer: 0, explain: 'It\'s a question with no expected answer (rhetorical) AND it uses "you" (direct address).' },
        { type: 'choice', q: 'What makes persuasive writing different from a story?', options: ['Persuasive writing is meant to change the reader\'s mind, not entertain them with a plot', 'Persuasive writing must rhyme', 'Persuasive writing is always shorter', 'Persuasive writing uses no punctuation'], answer: 0, explain: 'A story entertains; persuasive writing tries to make you think, feel or do something.' },
        { type: 'type', q: 'A writer says: "Over a MILLION people agree!" What persuasive device is this? (one word)', answer: ['statistic', 'statistics'], explain: 'Using a number — even an impressive one — counts as a statistic.', hint: 'Think about devices involving numbers.' }
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
        ], explain: 'Greeting → introduction → points → conclusion → sign-off.' },
        { type: 'choice', q: '"Dazzling, delicious and dirt-cheap!" — which device does this use?', options: ['Alliteration AND rule of three', 'Flattery and statistic', 'Rhetorical question and direct address', 'Emotive language only'], answer: 0, explain: 'Three "d" sounds = alliteration; three words in a list = rule of three. Two for the price of one!' },
        { type: 'sort', q: 'Imperative (bossy) verb or NOT an imperative verb?', buckets: ['Imperative verb 👊', 'Not an imperative verb 🙅'], items: [
          { text: 'Grab your free ticket now!', bucket: 0 },
          { text: 'The dragon was enormous.', bucket: 1 },
          { text: 'Try our new Viking stew!', bucket: 0 },
          { text: 'We enjoyed the festival.', bucket: 1 },
          { text: 'Visit Valhalla today!', bucket: 0 }
        ] },
        { type: 'type', q: 'What device is being used in: "A bright, brave reader like you will surely agree…"? (one word)', answer: ['flattery'], explain: 'Flattery compliments the reader to make them feel good — and more likely to agree!' },
        { type: 'match', q: 'Match the persuasion device to its best description:', pairs: [
          ['Alliteration', 'Words starting with the same sound'],
          ['Flattery', 'A compliment to the reader'],
          ['Imperative verb', 'A bossy command word'],
          ['Strong opinion as fact', 'Saying "everybody knows…" as if it\'s definitely true']
        ] },
        { type: 'choice', q: '"Everybody knows that dragons make the best pets." — which device is this?', options: ['Strong opinion said like a fact', 'A statistic', 'A rhetorical question', 'A simile'], answer: 0, explain: '"Everybody knows" sounds certain, but it\'s actually just an opinion!' },
        { type: 'choice', q: 'Dexter, which of these sentences uses FLATTERY?', options: ['"A thoughtful, intelligent child like you will obviously agree."', '"Buy a dragon now!"', '"9 out of 10 Vikings love it!"', '"Swords, shields and strength!"'], answer: 0, explain: 'Flattery compliments the reader — "thoughtful, intelligent" — to get them on side.' },
        { type: 'choice', q: 'Which slogan uses ALLITERATION?', options: ['"Perfectly packaged, perfectly priced!"', '"Buy two, get one free."', '"The best deal in town."', '"Dragons are brilliant."'], answer: 0, explain: 'All those "p" sounds repeating — that\'s alliteration!' },
        { type: 'type', q: 'Complete this alliterative slogan for a Viking product: "Brilliant, bold, _______ boots!" (starts with B)', answer: ['brilliant', 'brave', 'battered', 'bouncy', 'bright', 'battle-ready', 'bargain'], explain: 'Any B-word works! Alliteration needs words starting with the same letter or sound.', hint: 'Think of a B word that could describe boots.' },
        { type: 'sort', q: 'Which device is being used?', buckets: ['Alliteration 🅰️', 'Flattery 😊'], items: [
          { text: 'Ferocious, fearless, fantastic fighters!', bucket: 0 },
          { text: 'A wise reader like you will understand.', bucket: 1 },
          { text: 'Super swift ships sail south!', bucket: 0 },
          { text: 'Smart kids choose our school.', bucket: 1 },
          { text: 'Bold, brave and breathtaking!', bucket: 0 }
        ] },
        { type: 'choice', q: 'Which of these is an IMPERATIVE verb?', options: ['Discover', 'Quietly', 'Brilliant', 'Ship'], answer: 0, explain: '"Discover" can be used as a command — "Discover our amazing deals!" That\'s an imperative verb.' },
        { type: 'type', q: 'Finish this alliterative slogan: "Dexter\'s Daring, Dazzling ________ Dragons!" (must start with D)', answer: ['dancing', 'dashing', 'deadly', 'delightful', 'dramatic', 'daring', 'dizzy', 'devoted', 'dazzling'], explain: 'Any D-word works — the key is that all the main words start with the same letter!', hint: 'Pick any D describing word.' },
        { type: 'sort', q: 'Is each sentence an imperative (command) or a statement?', buckets: ['Imperative — a command 👊', 'Statement — just information 📋'], items: [
          { text: 'Sign up before it\'s too late!', bucket: 0 },
          { text: 'The festival runs for three days.', bucket: 1 },
          { text: 'Taste the greatest burger ever made!', bucket: 0 },
          { text: 'Burgers come in three sizes.', bucket: 1 },
          { text: 'Don\'t miss your chance!', bucket: 0 }
        ] },
        { type: 'match', q: 'Match each persuasive sentence to the device it mainly uses:', pairs: [
          ['"Join us — you\'ll never regret it!"', 'Imperative verb'],
          ['"Wonderful warriors like you deserve the best."', 'Flattery'],
          ['"Vivid, vibrant, victorious Vikings!"', 'Alliteration'],
          ['"Everybody knows this is the finest longship."', 'Strong opinion said like a fact']
        ] },
        { type: 'choice', q: 'Why do advertisers use FLATTERY?', options: ['To make the reader feel clever or special so they\'re more likely to agree', 'To give accurate information about the product', 'To confuse the reader with long sentences', 'To make the advert shorter'], answer: 0, explain: 'When you feel good about yourself, you\'re more open to being persuaded!' },
        { type: 'order', q: 'Put these sections of a persuasive advert in the best order:', items: [
          'A catchy headline using alliteration',
          'A flattery sentence to win over the reader',
          'Three reasons to buy, using the rule of three',
          'A statistic to make it sound trustworthy',
          'An imperative verb call to action: "Buy now!"'
        ] },
        { type: 'choice', q: '"Hurry, Dexter! Limited stocks available — claim YOUR prize today!" — which imperative verb starts the command?', options: ['Hurry', 'Limited', 'Claim', 'Today'], answer: 0, explain: '"Hurry" is the first bossy verb — it commands the reader to act fast.' },
        { type: 'sort', q: 'Fact or opinion dressed up as a fact?', buckets: ['Real fact ✅', 'Strong opinion said like a fact 💭'], items: [
          { text: 'Everybody knows dragons make great pets.', bucket: 1 },
          { text: 'Longships were built using wood and rope.', bucket: 0 },
          { text: 'There\'s no doubt this is the best school in Britain.', bucket: 1 },
          { text: 'The Viking age began around 793 AD.', bucket: 0 },
          { text: 'Anyone sensible agrees that chips are delicious.', bucket: 1 }
        ] },
        { type: 'type', q: 'What is the name for a verb that gives a command, like "Run!", "Buy!" or "Visit!"? (one word)', answer: ['imperative'], explain: 'Imperative verbs are bossy command words — they tell the reader exactly what to do.', hint: 'It starts with I.' }
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
        ] },
        { type: 'choice', q: 'What is the full name of Hiccup\'s Viking tribe?', options: ['The Hairy Hooligans', 'The Terrible Terrors', 'The Dragon Riders', 'The Thunder Clans'], answer: 0, explain: 'Hiccup belongs to the Hairy Hooligans — a most impressive-sounding tribe!' },
        { type: 'choice', q: 'Which word best describes Hiccup\'s dragon, Toothless?', options: ['Cheeky', 'Enormous', 'Obedient', 'Fierce'], answer: 0, explain: 'The book says Toothless is small, stubborn and VERY cheeky!' },
        { type: 'type', q: 'What is the full name of the hero in How to Train Your Dragon? (first name only)', answer: ['hiccup'], explain: 'Hiccup Horrendous Haddock III — not the most warrior-like name, but a brilliant hero!', hint: 'It\'s an unusual name for an unusual hero!' },
        { type: 'sort', q: 'Sort these features: needed in instructions, or NOT needed?', buckets: ['Needed in instructions ✅', 'Not needed 🚫'], items: [
          { text: 'Numbered steps in order', bucket: 0 },
          { text: 'A rhyming poem', bucket: 1 },
          { text: 'Imperative (bossy) verbs', bucket: 0 },
          { text: 'A cliffhanger ending', bucket: 1 },
          { text: 'Time conjunctions like First and Next', bucket: 0 }
        ] },
        { type: 'match', q: 'Match the time conjunction to where it belongs in a sequence:', pairs: [
          ['First', 'The very beginning'],
          ['Next', 'The second step'],
          ['After that', 'Following on from something else'],
          ['Finally', 'The very last step']
        ] },
        { type: 'choice', q: 'What does a "WARNING" in an instruction text do?', options: ['Tells the reader about something dangerous or important to watch out for', 'Gives the reader a list of equipment', 'Introduces the topic', 'Summarises what was learned'], answer: 0, explain: 'Warnings keep the reader safe — like "WARNING: never tickle a sleeping dragon!"' },
        { type: 'order', q: 'Put these features of instructions in the correct order from first to last:', items: [
          'Title ("How to…")',
          'What you need',
          'Step 1 — the first action',
          'Step 2 — the next action',
          'Warning or top tip'
        ] },
        { type: 'choice', q: 'Why do instructions use imperative verbs at the START of each step?', options: ['To give a clear command so the reader knows exactly what to do', 'To make the text rhyme', 'To fill up space on the page', 'To confuse beginners'], answer: 0, explain: 'Starting with a verb (Catch! Hold! Feed!) tells the reader immediately what action to take.' },
        { type: 'type', q: 'Name ONE time conjunction you could use at the beginning of an instruction step.', answer: ['first', 'next', 'then', 'after that', 'finally', 'afterwards'], explain: 'First, Next, Then, After that and Finally are all brilliant time conjunctions for instructions.', hint: 'Think about the word you\'d use at the START of an instruction.' },
        { type: 'choice', q: 'In what year (approximately) does the How to Train Your Dragon book story take place?', options: ['In Viking times — about 1,000 years ago', 'In the future — 3000 AD', 'In Tudor England', 'In ancient Egypt'], answer: 0, explain: 'The story is set in a fictional Viking world, loosely inspired by real Norse history from around 1,000 years ago.' },
        { type: 'choice', q: 'Which of these is the BEST title for a "how to" guide?', options: ['"How to Catch a Viking Dragon"', '"Once upon a time there was a dragon"', '"Dragons are very interesting creatures"', '"My Favourite Dragon Facts"'], answer: 0, explain: 'Good instruction titles start with "How to…" so the reader knows straight away what they\'ll learn.' },
        { type: 'sort', q: 'Does each sentence belong in an instruction text or a story?', buckets: ['Instruction text 📋', 'Story 📖'], items: [
          { text: 'Step 1: Feed the dragon a fresh fish.', bucket: 0 },
          { text: 'Toothless growled and flapped his wings angrily.', bucket: 1 },
          { text: 'Warning: never make eye contact with a sleeping dragon!', bucket: 0 },
          { text: 'Hiccup crept nervously towards the cave entrance.', bucket: 1 },
          { text: 'Finally, reward your dragon with its favourite treat.', bucket: 0 }
        ] },
        { type: 'choice', q: 'Why is it important to list "What you need" at the start of instructions?', options: ['So the reader can gather everything before they begin', 'To make the guide look longer', 'Because lists are easier to draw', 'To confuse the reader with equipment'], answer: 0, explain: 'Imagine getting halfway through training your dragon and realising you forgot the fish!' },
        { type: 'type', q: 'What is the name of Hiccup\'s Viking tribe? (three words)', answer: ['the hairy hooligans', 'hairy hooligans'], explain: 'The Hairy Hooligans — quite a name for a tribe!', hint: 'It\'s a rather silly and brilliant name.' },
        { type: 'match', q: 'Match each imperative verb to a sensible dragon-training instruction:', pairs: [
          ['Catch', 'a small, sleepy dragon first'],
          ['Whisper', 'gently in Dragonese to calm it'],
          ['Feed', 'the dragon a fresh fish every morning'],
          ['Hold', 'on tightly when it starts to fly!']
        ] },
        { type: 'choice', q: 'Dexter, which time conjunction would you use to introduce the VERY LAST step?', options: ['Finally', 'First', 'Next', 'Because'], answer: 0, explain: '"Finally" signals the last step — like "Finally, show off your dragon to the whole tribe!"' },
        { type: 'sort', q: 'Which of these are time conjunctions and which are not?', buckets: ['Time conjunction ⏱️', 'Not a time conjunction 🚫'], items: [
          { text: 'Next', bucket: 0 },
          { text: 'Dragon', bucket: 1 },
          { text: 'After that', bucket: 0 },
          { text: 'Because', bucket: 1 },
          { text: 'Finally', bucket: 0 },
          { text: 'Enormous', bucket: 1 }
        ] },
        { type: 'choice', q: 'Which describes Toothless\'s SIZE in the book?', options: ['He is small', 'He is enormous', 'He is the same size as Hiccup', 'He is the biggest dragon in the tribe'], answer: 0, explain: 'Toothless is small, stubborn and cheeky — not a great first impression for a Viking dragon!' },
        { type: 'order', q: 'Put these features of an instruction text in the right order from beginning to end:', items: [
          'Title: "How to Train Your Dragon"',
          'Introduction: what you will learn',
          'You will need: equipment list',
          'Numbered steps in order',
          'Tips, warnings and top advice'
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
        { type: 'choice', q: 'Which word in the text means "decided and not giving up"?', options: ['Determined', 'Whispered', 'Flickering', 'Distant'], answer: 0, explain: '"He was determined not to let his father down."' },
        { type: 'choice', q: 'RETRIEVE: What did Old Bjorn say the Vikings must do before "the moon is high"?', options: ['Leave the monastery', 'Light a fire', 'Wake Erik\'s father', 'Count their treasure'], answer: 0, explain: '"We leave before the moon is high" — Old Bjorn\'s warning.' },
        { type: 'choice', q: 'RETRIEVE: How does the text describe Erik\'s knuckles?', options: ['White', 'Cold', 'Shaking', 'Bleeding'], answer: 0, explain: '"His knuckles were white" — a sign he was gripping the ship very hard.' },
        { type: 'choice', q: 'INFER: What does the phrase "the ship slid silently through the fog" suggest about how the Vikings were travelling?', options: ['Quietly and secretly, trying not to be noticed', 'As fast as possible', 'Noisily and boldly', 'Slowly because they were lost'], answer: 0, explain: '"Silently" and "fog" together suggest the Vikings were sneaking up without being seen.' },
        { type: 'choice', q: 'VOCAB: What does "flickering" mean in "candlelight flickering in a distant window"?', options: ['Burning with a small, unsteady light that moves', 'Blazing very brightly', 'Switching on and off electrically', 'Shining like the sun'], answer: 0, explain: 'Candles flicker — the flame wobbles gently, creating a dancing light.' },
        { type: 'choice', q: 'AUTHOR\'S CRAFT: The author says Erik\'s "heart hammered like a blacksmith\'s anvil." What kind of language technique is this?', options: ['A simile', 'Alliteration', 'A rhetorical question', 'A statistic'], answer: 0, explain: 'A simile compares two things using "like" or "as". Here his heartbeat is compared to hammering metal.' },
        { type: 'type', q: 'RETRIEVE: Who was Erik determined not to let down tonight?', answer: ['his father', 'father'], explain: '"He was determined not to let his father down."', hint: 'Think about who Erik wants to impress.' },
        { type: 'choice', q: 'INFER: Why does Old Bjorn say "Steady, lad" to Erik?', options: ['He can see Erik is nervous and wants to calm him down', 'He is telling Erik to hold onto the oar', 'He wants Erik to stop making noise', 'He thinks Erik is about to fall overboard'], answer: 0, explain: 'Old Bjorn notices Erik\'s fear and reassures him — "steady" means "calm down, you\'re all right".' },
        { type: 'choice', q: 'RETRIEVE: Where was the monastery — in front of the ship or behind it?', options: ['Just beyond the rocks, ahead of the ship', 'Far behind them', 'On top of a hill far away', 'Right next to the ship'], answer: 0, explain: '"The monastery is just beyond those rocks" — directly ahead of them.' },
        { type: 'choice', q: 'INFER: Is this Erik\'s first time on a raid?', options: ['Yes — the text says "Tonight was his first raid"', 'No — he has done this many times', 'We cannot tell from the text', 'Yes — because he is scared of water'], answer: 0, explain: 'The text tells us clearly: "Tonight was his first raid."' },
        { type: 'sort', q: 'RETRIEVAL or INFERENCE? Decide how you would answer each question:', buckets: ['Retrieval — find it in the text 🔍', 'Inference — use clues to work it out 🧠'], items: [
          { text: 'Where were the Vikings heading?', bucket: 0 },
          { text: 'How was Erik feeling?', bucket: 1 },
          { text: 'Who rested a hand on Erik\'s shoulder?', bucket: 0 },
          { text: 'Why must they leave before the moon is high?', bucket: 1 },
          { text: 'What was the weather like?', bucket: 0 }
        ] },
        { type: 'choice', q: 'RETRIEVE: What did Old Bjorn say about how they should move?', options: ['Quickly and quietly', 'Slowly and silently', 'Noisily and quickly', 'Carefully and bravely'], answer: 0, explain: '"We move quickly, we move quietly" — those are Old Bjorn\'s exact instructions.' },
        { type: 'choice', q: 'VOCAB: What does "gripped" mean in "Erik gripped the side of the longship"?', options: ['Held tightly', 'Let go of', 'Pushed away', 'Climbed over'], answer: 0, explain: 'To grip is to hold very tightly — Erik was holding on hard because he was scared.' },
        { type: 'choice', q: 'INFER: What does it tell us that Old Bjorn has a "huge hand"?', options: ['He is a large, experienced warrior — someone the crew would look to for calm', 'He plays the drums', 'He is the youngest Viking on the ship', 'He is frightened too'], answer: 0, explain: 'A huge hand suggests a big, strong man — an experienced Viking who has done this before.' },
        { type: 'choice', q: 'AUTHOR\'S CRAFT: Why does the author describe the ship sliding "silently" through the fog?', options: ['To create a tense, secretive atmosphere — raids needed to be quiet', 'To show the ship was very slow', 'To tell us the wind had stopped', 'To make the reader feel bored'], answer: 0, explain: '"Silently" and "fog" work together to build suspense — everything hidden, everything hushed.' },
        { type: 'type', q: 'VOCAB: In "candlelight flickering in a distant window" — what does "distant" mean?', answer: ['far away', 'far', 'a long way away', 'far off'], explain: '"Distant" means far away — the candlelight was not close to the ship.', hint: 'Think about the opposite of "nearby".' },
        { type: 'choice', q: 'INFER: How does Erik feel about letting his father down?', options: ['He really does NOT want to disappoint his father — that\'s what is pushing him through his fear', 'He doesn\'t care about his father at all', 'He hopes to avoid his father forever', 'He wants to show his father he is too young to raid'], answer: 0, explain: '"He was determined not to let his father down" — this is what keeps him going despite his fear.' },
        { type: 'choice', q: 'RETRIEVE: What kind of light could Erik see in a window of the monastery?', options: ['Candlelight', 'Firelight', 'Moonlight', 'Torchlight'], answer: 0, explain: 'The text says "candlelight flickering in a distant window".' },
        { type: 'choice', q: 'INFER: Do you think Old Bjorn has been on many raids before? How can you tell?', options: ['Yes — he speaks calmly and gives clear instructions, like someone experienced', 'No — he seems just as nervous as Erik', 'Yes — the text tells us directly that he is a veteran raider', 'We cannot tell anything about Old Bjorn from the text'], answer: 0, explain: 'His calmness, his huge hand and his precise instructions all suggest a man who has done this many times.' },
        { type: 'match', q: 'Match each quote from the passage to what it tells us:', pairs: [
          ['"His knuckles were white"', 'Erik was gripping the ship hard with fear'],
          ['"Slid silently through the fog"', 'The ship was moving secretly and quietly'],
          ['"Somebody in there was still awake"', 'The raid might be discovered'],
          ['"Steady, lad"', 'Old Bjorn was trying to calm Erik down']
        ] },
        { type: 'choice', q: 'PREDICT: If someone inside the monastery sees the Vikings, what is MOST LIKELY to happen?', options: ['They might raise the alarm and warn everyone', 'They will wave and offer the Vikings supper', 'The Vikings will immediately sail home', 'Nothing — they would go back to sleep'], answer: 0, explain: 'Raids relied on surprise — if spotted, the people inside could wake others and fight back.' }
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
        ] },
        { type: 'choice', q: 'RETRIEVE: Which crops did Viking farmers grow according to the text?', options: ['Oats and barley', 'Wheat and potatoes', 'Rice and corn', 'Carrots and turnips'], answer: 0, explain: 'The text tells us Viking farmers "grew oats and barley".' },
        { type: 'choice', q: 'RETRIEVE: Name ONE animal that Viking farmers kept, according to the text.', options: ['Sheep', 'Horses', 'Chickens', 'Goats'], answer: 0, explain: 'The text mentions "sheep, pigs and cattle" — sheep is one of them.' },
        { type: 'choice', q: 'RETRIEVE: How far did some Viking traders travel?', options: ['As far as Baghdad', 'Only around Scandinavia', 'As far as China', 'Only around the British Isles'], answer: 0, explain: '"Others were skilled traders who travelled as far as Baghdad."' },
        { type: 'choice', q: 'INFER: Why is the word "But" used at the start of the second paragraph?', options: ['To surprise the reader — Vikings weren\'t ONLY warriors; there\'s more to them', 'Because the author made a mistake', 'To begin a list of facts', 'To show the Vikings were angry'], answer: 0, explain: '"But" signals a contrast — the reader might expect all Vikings to be warriors, but the text says otherwise.' },
        { type: 'type', q: 'RETRIEVE: What were Viking family stories of gods, giants and heroes called? (one word)', answer: ['sagas', 'saga'], explain: 'Sagas — told aloud around the fire on long winter nights.', hint: 'It starts with S.' },
        { type: 'choice', q: 'VOCAB: What does "prow" mean in "A carved dragon head often decorated the prow"?', options: ['The front of the ship', 'The back of the ship', 'The sail', 'The oar'], answer: 0, explain: 'The prow is the very front of a ship — the part that cuts through the water.' },
        { type: 'match', q: 'Match each Viking trade item to its role in trade:', pairs: [
          ['Furs', 'Traded away — Vikings gave these'],
          ['Walrus ivory', 'Also traded away — Vikings gave these'],
          ['Silver', 'Brought back — Vikings received these'],
          ['Spices', 'Also brought back — Vikings received these']
        ] },
        { type: 'choice', q: 'INFER: Why might the author describe Viking longships as "light, fast and could sail in shallow rivers"?', options: ['To show that Viking ships had special qualities that gave them a big advantage', 'To prove that rivers are useful', 'To explain why ships are built from wood', 'To show that the sea was too dangerous'], answer: 0, explain: 'These qualities meant Vikings could attack places nobody else could reach — a huge advantage.' },
        { type: 'sort', q: 'Which paragraph does each detail come from?', buckets: ['Paragraph 1 — Ships 🚢', 'Paragraph 2 — Farming and trading 🌾', 'Paragraph 3 — Stories 📖'], items: [
          { text: 'Dragon heads on the prow', bucket: 0 },
          { text: 'Swapping furs for silver', bucket: 1 },
          { text: 'Sagas told by word of mouth', bucket: 2 },
          { text: 'Longships could sail in shallow rivers', bucket: 0 },
          { text: 'Families gathered around the fire', bucket: 2 }
        ] },
        { type: 'choice', q: 'SUMMARISE: Which sentence best sums up ALL THREE paragraphs in one go?', options: ['Vikings were skilled at sailing, had many peacetime roles, and loved storytelling.', 'Vikings were fierce warriors who attacked monasteries.', 'Vikings traded amber for spices and told stories.', 'Longships had dragon heads to scare evil spirits.'], answer: 0, explain: 'A good summary captures the main point of EVERY paragraph — ships, farming/trading AND stories.' }
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
        { type: 'type', q: 'Add ONE adjective to expand this noun phrase: "the ______ longship" (any sensible describing word!)', answer: ['mighty', 'huge', 'fast', 'wooden', 'enormous', 'sleek', 'long', 'great', 'big', 'swift', 'fierce', 'old', 'giant', 'speedy', 'massive', 'powerful', 'strong', 'scary', 'amazing', 'beautiful', 'red', 'golden'], explain: 'Any good describing word works — like "the mighty longship".', hint: 'Think of a describing word: mighty, wooden, swift…' },
        { type: 'choice', q: 'Which of these is a FRONTED ADVERBIAL?', options: ['With a thunderous roar, the dragon landed.', 'The dragon landed with a thunderous roar.', 'A thunderous dragon roared.', 'The roaring dragon landed.'], answer: 0, explain: 'A fronted adverbial comes FIRST in the sentence, before the subject — and needs a comma after it.' },
        { type: 'choice', q: 'Which conjunction shows a REASON?', options: ['because', 'but', 'or', 'and'], answer: 0, explain: '"Because" explains why: "Erik was scared because it was his first raid."' },
        { type: 'sort', q: 'Sort these words into their word class:', buckets: ['Conjunction 🔗', 'Adverb 🏃'], items: [
          { text: 'although', bucket: 0 },
          { text: 'quietly', bucket: 1 },
          { text: 'because', bucket: 0 },
          { text: 'silently', bucket: 1 },
          { text: 'when', bucket: 0 },
          { text: 'quickly', bucket: 1 }
        ] },
        { type: 'match', q: 'Match each conjunction to the type of link it makes:', pairs: [
          ['because', 'Gives a reason'],
          ['but', 'Shows a contrast or surprise'],
          ['although', 'Shows something unexpected'],
          ['if', 'Introduces a condition']
        ] },
        { type: 'choice', q: 'Which sentence has the expanded noun phrase?', options: ['The enormous, battered shield lay on the deck.', 'The shield lay on the deck.', 'A shield was there.', 'It was big.'], answer: 0, explain: '"Enormous, battered shield" has two adjectives expanding the noun — that\'s an expanded noun phrase.' },
        { type: 'choice', q: 'Dexter, where does the comma go in a fronted adverbial sentence?', options: ['After the fronted adverbial, before the main clause', 'At the very end of the sentence', 'Before the verb', 'Commas are never used with fronted adverbials'], answer: 0, explain: '"Silently, the ship slipped…" — the comma comes right after the fronted adverbial.' },
        { type: 'type', q: 'Turn this into a fronted adverbial sentence by moving the adverb to the front: "The dragon flew overhead quietly." Write only the fronted adverb.', answer: ['quietly'], explain: '"Quietly, the dragon flew overhead." — the adverb moves to the front, followed by a comma.', hint: 'Which word describes HOW the dragon flew?' },
        { type: 'order', q: 'Put these words in order to build a correct fronted adverbial sentence:', items: [
          'High in the mountains,',
          'a fierce',
          'Viking warrior',
          'sharpened his sword.'
        ] }
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
