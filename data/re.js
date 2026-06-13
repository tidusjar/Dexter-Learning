/* RE — Year 4 Summer 2: how do different people describe God? Christianity, Islam, Hinduism and many views */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 're',
  name: 'RE',
  icon: '🕊️',
  color: '#6d6875',
  tagline: 'How do different people around the world describe God?',
  lessons: [
    {
      id: 'christianity-god',
      title: 'How do Christians describe God?',
      emoji: '✝️',
      learn: [
        {
          title: 'A loving Father and creator',
          html: '<p><b>Christians</b> are people who follow the religion of Christianity. Many Christians describe God as:</p>' +
                '<ul><li>A <b>loving Father</b> who cares for everyone like a parent cares for their children</li>' +
                '<li>The <b>creator</b> — the maker of the whole world and everything in it</li>' +
                '<li>Always ready to <b>listen and forgive</b></li></ul>' +
                '<p>Christians also have a special idea called the <b>Trinity</b>: one God known in three ways — <b>the Father, the Son (Jesus) and the Holy Spirit</b>. Some people picture it a bit like water, which can be liquid, ice or steam but is still all water.</p>'
        },
        {
          title: 'How Christians worship',
          html: '<p>Christians talk to God by <b>praying</b> — thanking, asking for help, or saying sorry. Their holy book is the <b>Bible</b>, full of stories and teachings about God and Jesus.</p>' +
                '<p>Many Christians meet at a <b>church</b>, especially on Sundays, to pray, sing and learn together. Remember: not every Christian believes or worships in exactly the same way — and that\'s true in every religion!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Many Christians describe God as a loving…', options: ['Father', 'Mountain', 'Stranger', 'Puzzle'], answer: 0, explain: 'Many Christians say God loves people like a kind parent loves their children.' },
        { type: 'choice', q: 'What does it mean when Christians call God "the creator"?', options: ['They believe God made the world and everything in it', 'God invented television', 'God paints pictures', 'God builds houses for a job'], answer: 0, explain: 'Creator means maker — Christians believe God made the universe.' },
        { type: 'choice', q: 'What are the three parts of the Trinity?', options: ['Father, Son and Holy Spirit', 'Sun, moon and stars', 'Bible, church and Sunday', 'Faith, hope and charity'], answer: 0, explain: 'One God known in three ways: the Father, the Son (Jesus) and the Holy Spirit.' },
        { type: 'type', q: 'What is the Christian holy book called?', answer: ['bible', 'the bible'], explain: 'The Bible — a library of books, stories and teachings.', hint: 'It starts with B.' },
        { type: 'choice', q: 'What building do many Christians go to for worship?', options: ['A church', 'A mosque', 'A mandir', 'A synagogue'], answer: 0, explain: 'Christians often meet at a church, especially on Sundays.' },
        { type: 'choice', q: 'What is praying?', options: ['Talking to God — thanking, asking or saying sorry', 'A type of singing competition', 'Reading any book quietly', 'A kind of exercise class'], answer: 0, explain: 'For Christians, prayer is a way of talking and listening to God.' },
        { type: 'choice', q: 'Why do some people compare the Trinity to water?', options: ['Water can be liquid, ice or steam but is still water — one thing, three forms', 'Because churches have fountains', 'Because the Bible is waterproof', 'Because it rains on Sundays'], answer: 0, explain: 'It\'s a simple picture to help explain one God known in three ways.' },
        { type: 'match', q: 'Match the Christian word to its meaning:', pairs: [
          ['Trinity', 'Father, Son and Holy Spirit'],
          ['Bible', 'The Christian holy book'],
          ['Church', 'A building for Christian worship'],
          ['Prayer', 'Talking to God']
        ] },
        { type: 'choice', q: 'Do all Christians believe and worship in exactly the same way?', options: ['No — Christians can believe and worship in different ways', 'Yes — every single one is identical', 'Yes — it\'s the law', 'No one knows'], answer: 0, explain: 'In every religion, people understand and practise their faith in their own ways.' },
        { type: 'choice', q: 'Which of these is NOT one of the three parts of the Trinity?', options: ['The Prophet', 'The Father', 'The Son', 'The Holy Spirit'], answer: 0, explain: 'The Trinity is Father, Son (Jesus) and Holy Spirit — "The Prophet" is not part of the Christian Trinity.' },
        { type: 'type', q: 'What word do Christians use to describe God as the maker of the whole world? (one word)', answer: ['creator', 'the creator'], explain: 'God is called the creator — the one who made everything.', hint: 'It starts with C.' },
        { type: 'sort', q: 'Sort these into: things Christians believe about God, or things that belong to a different religion:', buckets: ['Christian belief ✝️', 'Different tradition 🌍'], items: [
          { text: 'God is a loving Father', bucket: 0 },
          { text: 'The 99 beautiful names of Allah', bucket: 1 },
          { text: 'The Holy Spirit is part of the Trinity', bucket: 0 },
          { text: 'Brahman is the one supreme spirit', bucket: 1 },
          { text: 'The Bible is the Christian holy book', bucket: 0 }
        ] },
        { type: 'choice', q: 'When do many Christians meet at church to pray and sing together?', options: ['Especially on Sundays', 'Only at Christmas', 'Every day at sunrise', 'Only on Mondays'], answer: 0, explain: 'Sunday is a special day for many Christians — it\'s when churches are often fullest.' },
        { type: 'match', q: 'Match each form of water to the part of the Trinity it represents in the comparison:', pairs: [
          ['Liquid water', 'The Father'],
          ['Ice', 'The Son (Jesus)'],
          ['Steam', 'The Holy Spirit']
        ] },
        { type: 'choice', q: 'Christians believe God is always ready to do what?', options: ['Listen and forgive', 'Play tricks', 'Award prizes', 'Give homework'], answer: 0, explain: 'Christians describe God as always ready to listen and forgive — like a caring parent.' },
        { type: 'sort', q: 'Is each thing something Christians DO when they pray, or something else?', buckets: ['Reason to pray ✅', 'Not a reason to pray 🚫'], items: [
          { text: 'Saying thank you to God', bucket: 0 },
          { text: 'Asking God for help', bucket: 0 },
          { text: 'Scoring goals in football', bucket: 1 },
          { text: 'Saying sorry to God', bucket: 0 },
          { text: 'Watching television', bucket: 1 }
        ] },
        { type: 'choice', q: 'Dexter, what is ONE thing the Bible is full of, according to the learn card?', options: ['Stories and teachings about God and Jesus', 'Viking sagas and battles', 'Science experiments', 'Maps of ancient Egypt'], answer: 0, explain: 'The Bible contains stories and teachings about God and Jesus — it\'s like a whole library in one book!' },
        { type: 'type', q: 'What do Christians call the idea of one God known in three ways: Father, Son and Holy Spirit? (one word)', answer: ['trinity', 'the trinity'], explain: 'The Trinity — one God, three forms, like water can be liquid, ice or steam.', hint: 'It starts with T.' }
      ]
    },
    {
      id: 'islam-god',
      title: 'How do Muslims describe God?',
      emoji: '☪️',
      learn: [
        {
          title: 'Allah and the 99 beautiful names',
          html: '<p><b>Muslims</b> are people who follow the religion of Islam. Muslims call God <b>Allah</b> — which is simply the <b>Arabic word for God</b>.</p>' +
                '<p>Muslims believe there is only <b>one God</b>, and to describe how amazing God is, Islam teaches <b>99 beautiful names</b> for Allah. Each name describes something about God, for example:</p>' +
                '<ul><li><b>The Merciful</b> — full of kindness and forgiveness</li>' +
                '<li><b>The Creator</b> — maker of everything</li>' +
                '<li><b>The All-Knowing</b> — God knows and understands everything</li></ul>'
        },
        {
          title: 'No pictures — beautiful art instead',
          html: '<p>Muslims believe Allah is far too great to be drawn, so there are <b>no pictures of Allah</b> at all. Instead, Muslim artists create stunning <b>calligraphy</b> (beautiful decorated writing of Allah\'s names) and amazing <b>geometric patterns</b> — stars and shapes that repeat on and on, a bit like God going on forever.</p>' +
                '<p>The Muslim holy book is the <b>Qur\'an</b>, written in Arabic, and many Muslims pray at a <b>mosque</b>. Muslims treat the Qur\'an with great respect and care.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What does the word <b>Allah</b> mean?', options: ['It is the Arabic word for God', 'It is the name of a prophet', 'It means "hello" in Arabic', 'It is a city in Arabia'], answer: 0, explain: 'Allah is simply Arabic for God — Arabic-speaking Christians use the word too!' },
        { type: 'choice', q: 'How many "beautiful names" for Allah does Islam teach?', options: ['99', '9', '1,000', '12'], answer: 0, explain: '99 names, each describing something about God — like The Merciful and The Creator.' },
        { type: 'choice', q: 'What does the name "The Merciful" tell Muslims about Allah?', options: ['God is full of kindness and forgiveness', 'God is very tall', 'God lives in the desert', 'God only speaks Arabic'], answer: 0, explain: 'Mercy means kindness and forgiveness — one of the most-used names for Allah.' },
        { type: 'choice', q: 'Why are there NO pictures of Allah?', options: ['Muslims believe God is too great to be drawn', 'Nobody owns any paint', 'Pictures are banned in Arabia', 'Cameras don\'t work in mosques'], answer: 0, explain: 'Muslims show respect by never drawing God — beautiful writing and patterns are used instead.' },
        { type: 'choice', q: 'What is <b>calligraphy</b>?', options: ['Beautiful, decorated writing', 'A type of dance', 'A musical instrument', 'A prayer mat'], answer: 0, explain: 'Muslim artists write Allah\'s names in flowing, decorated letters — it\'s an art form!' },
        { type: 'type', q: 'What is the Muslim holy book called?', answer: ['qur\'an', 'quran', 'the qur\'an', 'the quran', 'koran', 'the koran'], explain: 'The Qur\'an — written in Arabic and treated with great respect.', hint: 'It starts with Q.' },
        { type: 'choice', q: 'Where do many Muslims go to pray?', options: ['A mosque', 'A church', 'A mandir', 'A gurdwara'], answer: 0, explain: 'The mosque is the Muslim place of worship.' },
        { type: 'match', q: 'Match the word to its meaning:', pairs: [
          ['Allah', 'The Arabic word for God'],
          ['Qur\'an', 'The Muslim holy book'],
          ['Mosque', 'A Muslim place of worship'],
          ['Calligraphy', 'Beautiful decorated writing'],
          ['The Merciful', 'One of the 99 names of Allah']
        ] },
        { type: 'choice', q: 'Why might repeating geometric patterns remind Muslims of God?', options: ['The patterns seem to go on forever, like God', 'Patterns are easy to draw', 'Stars are Allah\'s favourite shape', 'They don\'t — patterns are just decoration'], answer: 0, explain: 'Endless repeating patterns can remind people that God has no beginning or end.' },
        { type: 'choice', q: 'How many Gods do Muslims believe in?', options: ['One', 'Three', 'Ninety-nine', 'Hundreds'], answer: 0, explain: 'Muslims believe in one God — this is called monotheism. The 99 names all describe the same one God.' },
        { type: 'type', q: 'What is the Arabic word that Muslims use for God? (one word)', answer: ['allah', 'Allah'], explain: 'Allah is simply the Arabic word for God.', hint: 'It starts with A.' },
        { type: 'choice', q: 'Which of these is one of the 99 beautiful names for Allah?', options: ['The All-Knowing', 'The Great Builder', 'The Swift Sailor', 'The Tallest Mountain'], answer: 0, explain: 'The All-Knowing is one of the 99 names — it means God understands and knows everything.' },
        { type: 'sort', q: 'Sort these into: things associated with Islam, or things from a different tradition:', buckets: ['Islamic tradition ☪️', 'Different tradition 🌍'], items: [
          { text: 'The Qur\'an', bucket: 0 },
          { text: 'The Trinity', bucket: 1 },
          { text: 'Calligraphy of Allah\'s names', bucket: 0 },
          { text: 'The mandir', bucket: 1 },
          { text: 'Worshipping at a mosque', bucket: 0 }
        ] },
        { type: 'match', q: 'Match each of Allah\'s names to what it means:', pairs: [
          ['The Merciful', 'Full of kindness and forgiveness'],
          ['The Creator', 'Maker of everything'],
          ['The All-Knowing', 'God knows and understands everything']
        ] },
        { type: 'choice', q: 'Why do Muslim artists use calligraphy and geometric patterns instead of pictures?', options: ['Muslims believe Allah is too great to be drawn, so they use other art forms instead', 'They haven\'t invented painting yet', 'Painting is not allowed in Arabic countries', 'Pictures are only used in mosques'], answer: 0, explain: 'Calligraphy and patterns are a beautiful way to express faith without drawing God.' },
        { type: 'choice', q: 'Dexter, how should a Muslim treat the Qur\'an?', options: ['With great respect and care', 'Like any old book — leave it anywhere', 'Only read it once and then put it away forever', 'Lend it out without asking'], answer: 0, explain: 'The Qur\'an is the holy book of Islam and Muslims treat it with great respect.' },
        { type: 'sort', q: 'Is each statement true about the Qur\'an, or not?', buckets: ['True about the Qur\'an ✅', 'Not true about the Qur\'an 🚫'], items: [
          { text: 'It is the Muslim holy book', bucket: 0 },
          { text: 'It is written in Arabic', bucket: 0 },
          { text: 'It is also called the Bible', bucket: 1 },
          { text: 'Muslims treat it with great respect', bucket: 0 },
          { text: 'It has 99 chapters named after warriors', bucket: 1 }
        ] },
        { type: 'type', q: 'What is the name for the beautiful decorated writing that Muslims use to show the names of Allah? (one word)', answer: ['calligraphy'], explain: 'Calligraphy — flowing, decorated writing that is considered a true art form in Islamic tradition.', hint: 'It starts with C.' }
      ]
    },
    {
      id: 'hinduism-god',
      title: 'How do Hindus describe God?',
      emoji: '🪔',
      learn: [
        {
          title: 'One supreme spirit, many forms',
          html: '<p><b>Hindus</b> follow Hinduism, one of the world\'s oldest religions, which began in India. Many Hindus believe in <b>one supreme spirit</b> called <b>Brahman</b>, which is in everything and everyone.</p>' +
                '<p>Because Brahman is so hard to imagine, Hindus get to know God through <b>many different forms or deities</b>, each showing one part of God\'s character. For example:</p>' +
                '<ul><li><b>Ganesha</b> — shown with an elephant head; the remover of obstacles, popular for new beginnings</li>' +
                '<li><b>Lakshmi</b> — the goddess of good fortune and wealth</li>' +
                '<li><b>Vishnu</b> — the protector, who cares for the world</li></ul>' +
                '<p>It\'s a bit like one person being a parent, a teacher and a friend — one person, many roles.</p>'
        },
        {
          title: 'Murtis, mandirs and diva lamps',
          html: '<p>Hindus often worship with the help of a <b>murti</b> — a special statue of a deity. Hindus don\'t believe the statue itself is God; the murti helps them <b>focus</b> their thoughts while they worship.</p>' +
                '<p>The Hindu place of worship is the <b>mandir</b> (temple), although many Hindus also have a small shrine at home. During worship, Hindus may light a <b>diva lamp</b> — a small flame which is a symbol of light, goodness and God\'s presence.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What do many Hindus call the one supreme spirit?', options: ['Brahman', 'Ganesha', 'Mandir', 'Diva'], answer: 0, explain: 'Brahman is the one supreme spirit, believed to be in everything.' },
        { type: 'choice', q: 'Why do Hindus get to know God through MANY forms or deities?', options: ['Each form shows one part of God\'s character, which is easier to imagine', 'They can\'t decide which one is real', 'Each village must have its own god', 'It makes festivals longer'], answer: 0, explain: 'One supreme spirit, understood through many forms — like one person being a parent, teacher AND friend.' },
        { type: 'choice', q: 'Which deity is shown with an elephant head and is known as the remover of obstacles?', options: ['Ganesha', 'Lakshmi', 'Vishnu', 'Brahman'], answer: 0, explain: 'Ganesha is especially popular when starting something new.' },
        { type: 'choice', q: 'What is Lakshmi the goddess of?', options: ['Good fortune and wealth', 'Thunder and lightning', 'The sea', 'Winter'], answer: 0, explain: 'Hindus may think of Lakshmi when hoping for good fortune.' },
        { type: 'choice', q: 'What is a <b>murti</b>?', options: ['A statue that helps Hindus focus when they worship', 'A type of curry', 'A Hindu festival', 'A prayer said at bedtime'], answer: 0, explain: 'Hindus don\'t believe the statue IS God — it helps them focus their worship.' },
        { type: 'type', q: 'What is the Hindu place of worship called? (starts with M)', answer: ['mandir', 'a mandir', 'the mandir', 'mandir (temple)', 'temple'], explain: 'The mandir — the Hindu temple. Many Hindus also have a shrine at home.', hint: 'M _ _ _ _ _ — it means temple.' },
        { type: 'choice', q: 'What might a Hindu light during worship as a symbol of light and goodness?', options: ['A diva lamp', 'A bonfire', 'A torch app', 'A lighthouse'], answer: 0, explain: 'The small flame of a diva lamp is a symbol of light, goodness and God\'s presence.' },
        { type: 'match', q: 'Match the Hindu word to its meaning:', pairs: [
          ['Brahman', 'The one supreme spirit'],
          ['Ganesha', 'Elephant-headed remover of obstacles'],
          ['Murti', 'A statue that helps people focus in worship'],
          ['Mandir', 'The Hindu temple'],
          ['Diva lamp', 'A small flame, a symbol of light and goodness']
        ] },
        { type: 'choice', q: 'Vishnu is known as…', options: ['The protector, who cares for the world', 'The god of homework', 'The keeper of elephants', 'The first king of India'], answer: 0, explain: 'Vishnu is the protector — one of the most important Hindu deities.' },
        { type: 'choice', q: 'Where did Hinduism begin?', options: ['India', 'Egypt', 'Greece', 'China'], answer: 0, explain: 'Hinduism began in India and is one of the world\'s oldest religions.' },
        { type: 'type', q: 'What is the Hindu word for the one supreme spirit that is believed to be in everything and everyone? (one word)', answer: ['brahman', 'Brahman'], explain: 'Brahman is the one supreme spirit in Hinduism.', hint: 'It starts with B.' },
        { type: 'sort', q: 'Sort these into: Hindu traditions, or traditions from a different religion:', buckets: ['Hindu tradition 🪔', 'Different tradition 🌍'], items: [
          { text: 'Lighting a diva lamp', bucket: 0 },
          { text: 'Reading the Qur\'an', bucket: 1 },
          { text: 'Worshipping at a mandir', bucket: 0 },
          { text: 'The Trinity', bucket: 1 },
          { text: 'Using a murti to help focus worship', bucket: 0 }
        ] },
        { type: 'match', q: 'Match each Hindu deity to what they are known for:', pairs: [
          ['Ganesha', 'Remover of obstacles and good for new beginnings'],
          ['Lakshmi', 'Goddess of good fortune and wealth'],
          ['Vishnu', 'The protector who cares for the world']
        ] },
        { type: 'choice', q: 'What is a murti NOT?', options: ['God itself — the murti is only a statue that helps people focus', 'A statue of a deity', 'A tool used in Hindu worship', 'Something found in a mandir'], answer: 0, explain: 'Hindus don\'t believe the murti IS God — it helps them direct their thoughts during worship.' },
        { type: 'choice', q: 'Which deity would a Hindu particularly think of when starting something new?', options: ['Ganesha', 'Lakshmi', 'Vishnu', 'Brahman'], answer: 0, explain: 'Ganesha is the remover of obstacles and is especially popular for new beginnings.' },
        { type: 'sort', q: 'Is each statement true about Hinduism, or not?', buckets: ['True about Hinduism ✅', 'Not true about Hinduism 🚫'], items: [
          { text: 'Brahman is the one supreme spirit', bucket: 0 },
          { text: 'Hinduism began in India', bucket: 0 },
          { text: 'Hindus have exactly one deity', bucket: 1 },
          { text: 'A mandir is a Hindu place of worship', bucket: 0 },
          { text: 'The diva lamp is a symbol of light and goodness', bucket: 0 }
        ] },
        { type: 'choice', q: 'Dexter, why do Hindus worship through MANY different deities rather than just one?', options: ['Each deity helps people understand a different part of God\'s character, which is easier to imagine', 'They are all completely separate gods with nothing in common', 'Each deity lives in a different country', 'Only the most important deity is actually worshipped'], answer: 0, explain: 'It\'s like one person being a parent, a teacher and a friend — many roles, one underlying reality (Brahman).' },
        { type: 'type', q: 'What is the Hindu place of worship called? (starts with M)', answer: ['mandir', 'a mandir', 'the mandir', 'temple'], explain: 'The mandir — the Hindu temple, a place of worship and community.', hint: 'M _ _ _ _ _ — think "temple".' },
        { type: 'choice', q: 'Many Hindus also have a place of worship where?', options: ['At home — a home shrine', 'Only at school', 'Only at the mandir', 'In a mosque'], answer: 0, explain: 'As well as the mandir, many Hindus have a small shrine at home for daily worship.' }
      ]
    },
    {
      id: 'many-views',
      title: 'Many ways of believing',
      emoji: '🌍',
      learn: [
        {
          title: 'More world faiths',
          html: '<p>There are many more ways people understand God:</p>' +
                '<ul><li><b>Jewish people</b> believe in <b>one God</b>. Their most special teachings are in the <b>Torah</b>, and many worship at a <b>synagogue</b>.</li>' +
                '<li><b>Sikhs</b> also believe in one God, whom they call <b>Waheguru</b>, meaning <b>"Wonderful Lord"</b>. Sikhs worship at a <b>gurdwara</b>, where everyone is welcome to share a free meal called langar.</li></ul>' +
                '<p>And some people don\'t follow a religion at all:</p>' +
                '<ul><li>An <b>atheist</b> is someone who does <b>not believe in God</b>.</li>' +
                '<li>An <b>agnostic</b> is someone who <b>isn\'t sure</b> whether God exists.</li></ul>' +
                '<p>People with these views still think hard about big questions, and care about being good and kind.</p>'
        },
        {
          title: 'Different — and the same',
          html: '<p>Look how much the world\'s faiths and views <b>share</b>: almost all of them teach <b>love, kindness, honesty and caring for others</b> — sometimes called the Golden Rule: <i>treat other people the way you would like to be treated</i>.</p>' +
                '<p>People believe many different things, and <b>everyone deserves respect</b> — whether they pray in a church, mosque, mandir, synagogue or gurdwara, or don\'t pray at all. Asking questions politely and listening carefully is the best way to learn about each other, Dexter!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What do Jewish people call their most special teachings?', options: ['The Torah', 'The Qur\'an', 'The sagas', 'The Trinity'], answer: 0, explain: 'The Torah holds the most important Jewish teachings.' },
        { type: 'choice', q: 'What does the Sikh name for God, <b>Waheguru</b>, mean?', options: ['Wonderful Lord', 'Great Teacher', 'Kind Friend', 'Morning Star'], answer: 0, explain: 'Waheguru means "Wonderful Lord".' },
        { type: 'choice', q: 'Where do Sikhs worship?', options: ['A gurdwara', 'A mandir', 'A mosque', 'A church'], answer: 0, explain: 'The gurdwara — where everyone is welcome to share a free meal called langar.' },
        { type: 'choice', q: 'What is an <b>atheist</b>?', options: ['Someone who does not believe in God', 'Someone who believes in many gods', 'Someone who is not sure about God', 'Someone who goes to church'], answer: 0, explain: 'Atheists don\'t believe in God — and they still think hard about how to be good and kind.' },
        { type: 'choice', q: 'What is an <b>agnostic</b>?', options: ['Someone who isn\'t sure whether God exists', 'Someone who definitely believes in God', 'Someone who leads worship', 'Someone who studies rocks'], answer: 0, explain: 'Agnostics say "I don\'t know" — which is an honest answer to a very big question!' },
        { type: 'match', q: 'Match the place of worship to the religion:', pairs: [
          ['Church', 'Christianity'],
          ['Mosque', 'Islam'],
          ['Mandir', 'Hinduism'],
          ['Synagogue', 'Judaism'],
          ['Gurdwara', 'Sikhism']
        ] },
        { type: 'match', q: 'Match the faith word to its tradition:', pairs: [
          ['Torah', 'Judaism'],
          ['Waheguru', 'Sikhism'],
          ['Qur\'an', 'Islam'],
          ['Trinity', 'Christianity'],
          ['Brahman', 'Hinduism']
        ] },
        { type: 'choice', q: 'What is the "Golden Rule" found in many faiths and views?', options: ['Treat other people the way you would like to be treated', 'Always wear gold on Fridays', 'The oldest religion wins', 'Never ask questions'], answer: 0, explain: 'Love, kindness and fairness to others — an idea shared across the world.' },
        { type: 'choice', q: 'How should we treat people whose beliefs are different from ours?', options: ['With respect — listen politely and ask kind questions', 'Tell them they are wrong', 'Avoid them completely', 'Only respect people who agree with us'], answer: 0, explain: 'Everyone deserves respect, whatever they believe. Curious, kind questions help us understand each other.' },
        { type: 'sort', q: 'Sort these ideas: shared by many faiths and views, or belonging to ONE particular tradition?', buckets: ['Shared by many 🌍', 'One tradition 🔎'], items: [
          { text: 'Being kind to others', bucket: 0 },
          { text: 'The 99 names of Allah', bucket: 1, why: 'This belongs to Islam.' },
          { text: 'Caring for people in need', bucket: 0 },
          { text: 'The Trinity', bucket: 1, why: 'This is a Christian belief.' },
          { text: 'Telling the truth', bucket: 0 },
          { text: 'Murtis in the mandir', bucket: 1, why: 'These are part of Hindu worship.' }
        ] },
        { type: 'choice', q: 'Where do Jewish people worship?', options: ['A synagogue', 'A gurdwara', 'A mandir', 'A mosque'], answer: 0, explain: 'Jewish people worship at a synagogue.' },
        { type: 'type', q: 'What is the name of the free meal shared at a Sikh gurdwara? (one word)', answer: ['langar'], explain: 'Langar is a free meal shared at the gurdwara — everyone is welcome, no matter who they are.', hint: 'It starts with L.' },
        { type: 'choice', q: 'Which of these best describes what an AGNOSTIC believes?', options: ['They are not sure whether God exists or not', 'They definitely believe in God', 'They believe in many gods', 'They refuse to think about the question'], answer: 0, explain: 'Agnostics say "I don\'t know" — which is a thoughtful and honest answer.' },
        { type: 'sort', q: 'Sort these into: world faiths, or non-religious views:', buckets: ['A world faith 🙏', 'A non-religious view 💭'], items: [
          { text: 'Christianity', bucket: 0 },
          { text: 'Atheism', bucket: 1 },
          { text: 'Sikhism', bucket: 0 },
          { text: 'Agnosticism', bucket: 1 },
          { text: 'Islam', bucket: 0 }
        ] },
        { type: 'match', q: 'Match each faith or view to something that belongs to it:', pairs: [
          ['Judaism', 'The Torah'],
          ['Sikhism', 'Waheguru'],
          ['Atheism', 'Does not believe in God'],
          ['Agnosticism', 'Isn\'t sure if God exists']
        ] },
        { type: 'choice', q: 'What does "langar" mean in the Sikh tradition?', options: ['A free meal shared with everyone at the gurdwara', 'The Sikh holy book', 'A type of prayer', 'A special dance'], answer: 0, explain: 'Langar is the free communal meal at a gurdwara — a wonderful example of the Sikh value of sharing.' },
        { type: 'choice', q: 'Dexter, which of these values do almost ALL faiths and worldviews share?', options: ['Kindness and love for others', 'Worshipping in exactly the same way', 'Using the same holy book', 'Meeting on the same day of the week'], answer: 0, explain: 'Across all the traditions we\'ve studied, kindness and caring for others is almost universal.' },
        { type: 'type', q: 'What is the Sikh name for God, meaning "Wonderful Lord"? (one word)', answer: ['waheguru', 'Waheguru'], explain: 'Waheguru — the Sikh name for God, meaning Wonderful Lord.', hint: 'It starts with W.' },
        { type: 'choice', q: 'Which of these is the Jewish holy text containing their most special teachings?', options: ['The Torah', 'The Qur\'an', 'The Bible', 'The Vedas'], answer: 0, explain: 'The Torah holds the most important teachings for Jewish people.' }
      ]
    }
  ]
});
