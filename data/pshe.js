/* PSHE — Year 4 Summer 2: friendships, solving fall-outs, growing and changing, big feelings */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'pshe',
  name: 'PSHE',
  icon: '💛',
  color: '#e76f51',
  tagline: 'Being a brilliant friend, understanding big feelings, and growing up',
  lessons: [
    {
      id: 'good-friends',
      title: 'What makes a good friend?',
      emoji: '🤝',
      learn: [
        {
          title: 'The recipe for friendship',
          html: '<p>Good friends come in all shapes and sizes, but the best ones share some special ingredients:</p>' +
                '<ul><li><b>Kindness</b> — they care how you feel</li>' +
                '<li><b>Listening</b> — they really hear what you say, not just wait for their turn to talk</li>' +
                '<li><b>Sharing</b> — toys, snacks, ideas and time</li>' +
                '<li><b>Including others</b> — nobody gets left out of the game</li>' +
                '<li><b>Keeping promises</b> — if they say they\'ll do something, they do it</li>' +
                '<li><b>Being trustworthy</b> — you can tell them things and they don\'t use them to be unkind</li></ul>' +
                '<p>Nobody is a perfect friend all the time — we all have grumpy days! What matters is trying to be kind, and saying sorry when we get it wrong.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Which of these is a sign of a GOOD friend?', options: ['They listen when you talk', 'They only talk about themselves', 'They laugh when you fall over', 'They keep score of favours'], answer: 0, explain: 'Real listening — hearing what you say and caring about it — is friendship gold.' },
        { type: 'choice', q: 'What does it mean to be <b>trustworthy</b>?', options: ['People can rely on you and tell you things safely', 'You always win games', 'You are the loudest in the class', 'You never make mistakes'], answer: 0, explain: 'A trustworthy friend keeps their word and doesn\'t use your secrets to be unkind.' },
        { type: 'choice', q: 'A new child joins your class and looks lonely at playtime. What would a good friend do?', options: ['Invite them to join the game', 'Ignore them — they\'re new', 'Whisper about them', 'Tell them the game is full'], answer: 0, explain: 'Including others is one of the kindest things a friend can do.' },
        { type: 'choice', q: 'Your friend promised to save you a seat, and they did — even when others asked. What friendship ingredient is that?', options: ['Keeping promises', 'Showing off', 'Being bossy', 'Luck'], answer: 0, explain: 'Doing what you said you would do — that\'s keeping a promise.' },
        { type: 'choice', q: 'Does a good friend have to be perfect all the time?', options: ['No — everyone has off days; what matters is being kind and saying sorry', 'Yes — one mistake ends a friendship', 'Yes — friends must always agree', 'No — friends never need to say sorry'], answer: 0, explain: 'We all get things wrong sometimes. Trying again and saying sorry is what counts.' },
        { type: 'sort', q: 'Sort these: friendly behaviour or unkind behaviour?', buckets: ['Friendly 💛', 'Unkind 💔'], items: [
          { text: 'Sharing your felt tips', bucket: 0 },
          { text: 'Leaving someone out on purpose', bucket: 1 },
          { text: 'Cheering a friend up when they\'re sad', bucket: 0 },
          { text: 'Laughing at someone\'s mistake', bucket: 1 },
          { text: 'Keeping a promise', bucket: 0 },
          { text: 'Spreading unkind rumours', bucket: 1 },
          { text: 'Letting someone else go first', bucket: 0 }
        ] },
        { type: 'match', q: 'Match the friendship skill to what it looks like:', pairs: [
          ['Listening', 'Looking at your friend and hearing them out'],
          ['Sharing', 'Taking turns with the football'],
          ['Including', 'Saying "come and join our game!"'],
          ['Kindness', 'Helping someone who is hurt or upset']
        ] },
        { type: 'type', q: 'Fill the gap: a good friend keeps their p________ (if they say they\'ll do something, they do it).', answer: ['promises', 'promise'], explain: 'Keeping promises shows your friends they can count on you.', hint: 'It rhymes with "compromises"… sort of!' },
        { type: 'choice', q: 'Can you be friends with someone who likes different things from you?', options: ['Yes — friends don\'t have to be the same', 'No — friends must like the same things', 'Only if they change their hobbies', 'Only on weekends'], answer: 0, explain: 'Differences make friendships interesting — you can teach each other new things!' }
      ]
    },
    {
      id: 'friendship-problems',
      title: 'Solving friendship problems',
      emoji: '🛠️',
      learn: [
        {
          title: 'Falling out happens!',
          html: '<p>Even best friends fall out sometimes — it\'s completely <b>normal</b> and it doesn\'t mean the friendship is over. The repair kit looks like this:</p>' +
                '<ol><li><b>Calm down first</b> — take some deep breaths or a little time apart</li>' +
                '<li><b>Listen to each other</b> — let each person say how they feel, without interrupting</li>' +
                '<li><b>Say sorry</b> for your part — even if it wasn\'t all your fault</li>' +
                '<li><b>Find a fair solution</b> — take turns, share, or play something you both like</li></ol>' +
                '<p>If you feel <b>left out</b>: it\'s OK to tell your friends calmly how you feel ("I felt sad when I wasn\'t picked"), ask to join in, or find someone else to play with. Feelings like that are normal and they pass.</p>'
        },
        {
          title: 'When to get help',
          html: '<p>Some problems are too big to fix alone — and that\'s fine! A <b>trusted adult</b> (a parent, carer, teacher or grandparent) can help when a problem keeps happening or someone is being hurt.</p>' +
                '<p>There\'s a difference between <b>telling tales</b> and <b>asking for help</b>:</p>' +
                '<ul><li><b>Telling tales</b> is trying to get someone INTO trouble over something small ("He looked at me funny!").</li>' +
                '<li><b>Asking for help</b> is trying to get someone OUT of trouble — when someone is unsafe, very upset, or being treated unkindly again and again. That\'s always the right thing to do.</li></ul>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Is it normal for friends to fall out sometimes?', options: ['Yes — even best friends disagree sometimes', 'No — real friends never argue', 'Only on Mondays', 'Only if they\'re not really friends'], answer: 0, explain: 'Everyone falls out occasionally. What matters is making up kindly afterwards.' },
        { type: 'choice', q: 'What is the FIRST step when you\'ve fallen out with a friend?', options: ['Calm down — maybe take some deep breaths', 'Shout louder than them', 'Tell everyone it was their fault', 'Never speak to them again'], answer: 0, explain: 'It\'s hard to fix anything while you\'re still boiling — calm down first.' },
        { type: 'order', q: 'Put the "making up" steps in order:', items: [
          'Calm down', 'Listen to each other\'s side', 'Say sorry for your part', 'Find a fair solution together', 'Carry on playing as friends'
        ], explain: 'Calm → listen → sorry → fair fix → friends again!' },
        { type: 'choice', q: 'You feel left out of a game at playtime. What\'s a good first move?', options: ['Calmly tell your friends how you feel, or ask to join in', 'Kick the ball away', 'Decide everyone hates you forever', 'Hide and tell no one'], answer: 0, explain: 'Friends often don\'t realise — telling them calmly usually fixes it.' },
        { type: 'choice', q: 'Why should you LISTEN to your friend\'s side after a fall-out?', options: ['You might understand how they felt and find a fair fix', 'So you can interrupt them better', 'To prove you\'re right', 'Listening is just being polite to teachers'], answer: 0, explain: 'There are two sides to every fall-out — listening helps you both feel understood.' },
        { type: 'choice', q: 'Who counts as a <b>trusted adult</b> you could go to for help?', options: ['A parent, carer, teacher or grandparent', 'A stranger online', 'Anyone who gives you sweets', 'Nobody — keep problems secret'], answer: 0, explain: 'Trusted adults are the grown-ups who look after you and keep you safe.' },
        { type: 'choice', q: 'Someone in the playground keeps being unkind to a younger child every day. Telling a teacher is…', options: ['Asking for help — the right thing to do', 'Telling tales — keep quiet', 'None of your business', 'Only OK if you film it first'], answer: 0, explain: 'When someone is unsafe or upset again and again, getting an adult is HELPING, never telling tales.' },
        { type: 'sort', q: 'Telling tales or asking for help?', buckets: ['Telling tales 🙄', 'Asking for help ✅'], items: [
          { text: '"He took the blue pencil I wanted!"', bucket: 0 },
          { text: '"Someone is crying and won\'t stop — I\'m worried."', bucket: 1 },
          { text: '"She finished her snack before lunchtime!"', bucket: 0 },
          { text: '"A big kid keeps pushing my friend over every day."', bucket: 1 },
          { text: '"He hummed during quiet reading!"', bucket: 0 },
          { text: '"Someone is doing something dangerous near the road."', bucket: 1 }
        ] },
        { type: 'choice', q: 'You said sorry but your friend is still upset. What should you do?', options: ['Give them a bit of time and space — feelings take a while to settle', 'Take the sorry back', 'Demand they forgive you right now', 'Tell everyone they are being silly'], answer: 0, explain: 'A genuine sorry plus a little patience usually mends things. Big feelings need time.' }
      ]
    },
    {
      id: 'changing-me',
      title: 'Growing and changing',
      emoji: '🌱',
      learn: [
        {
          title: 'The journey of life',
          html: '<p>Every human goes through the same amazing journey of <b>life stages</b>:</p>' +
                '<p><b>baby → toddler → child → teenager → adult → older adult</b></p>' +
                '<ul><li><b>Babies</b> can\'t walk, talk or feed themselves — they need grown-ups for everything! They cry to tell us what they need.</li>' +
                '<li><b>Toddlers</b> learn to walk and say their first words.</li>' +
                '<li><b>Children</b> (like you, Dexter!) can run, read, write, make friends and learn new things every day.</li>' +
                '<li><b>Teenagers</b> grow taller and their bodies change to become more like adults\'. They become more independent.</li>' +
                '<li><b>Adults</b> are fully grown — they can work, drive and look after others.</li>' +
                '<li><b>Older adults</b> may slow down a little, but are full of stories and wisdom!</li></ul>'
        },
        {
          title: 'Change is normal',
          html: '<p>As you grow, your <b>body</b> changes — you get taller and stronger, your baby teeth fall out and adult teeth grow. What you <b>can do</b> changes too: things that were impossible at 4 are easy at 9!</p>' +
                '<p>Change can feel <b>exciting</b> AND <b>worrying</b> at the same time — and BOTH feelings are completely normal. New school years, new clubs, new responsibilities… If a change ever worries you, talk to a trusted adult, like a parent, carer or teacher. They were children once too (honestly!).</p>'
        }
      ],
      questions: [
        { type: 'order', q: 'Put the life stages in order, starting with the youngest:', items: [
          'Baby', 'Toddler', 'Child', 'Teenager', 'Adult', 'Older adult'
        ], explain: 'We all travel through the stages in the same order: baby → toddler → child → teenager → adult → older adult.' },
        { type: 'choice', q: 'Which of these can a BABY do?', options: ['Cry to tell us what it needs', 'Ride a bike', 'Read a book', 'Cook dinner'], answer: 0, explain: 'Babies can\'t talk yet, so crying is how they communicate.' },
        { type: 'choice', q: 'Which life stage usually learns to walk and say first words?', options: ['Toddler', 'Baby', 'Teenager', 'Adult'], answer: 0, explain: 'Toddlers "toddle" — those first wobbly steps give them their name!' },
        { type: 'choice', q: 'What is one way YOUR body has changed since you were a baby?', options: ['You\'ve grown taller and stronger', 'You\'ve grown an extra arm', 'You\'ve got smaller', 'Nothing has changed at all'], answer: 0, explain: 'Growing taller and stronger — and swapping baby teeth for adult teeth — are normal changes.' },
        { type: 'choice', q: 'During which stage does a body change to become more like an adult\'s?', options: ['Teenager', 'Baby', 'Older adult', 'Toddler'], answer: 0, explain: 'Teenagers grow fast and their bodies gradually become adult bodies.' },
        { type: 'sort', q: 'Who can do it: a baby or a 9-year-old child?', buckets: ['Baby 👶', '9-year-old 🧒'], items: [
          { text: 'Drink milk and sleep a lot', bucket: 0 },
          { text: 'Read a chapter book', bucket: 1 },
          { text: 'Be carried everywhere', bucket: 0 },
          { text: 'Ride a bike to the park', bucket: 1 },
          { text: 'Make friends and tell jokes', bucket: 1 },
          { text: 'Cry as their only way of talking', bucket: 0 }
        ] },
        { type: 'choice', q: 'How can change (like a new school year) make people feel?', options: ['Excited AND worried — both at once is normal', 'Only excited — worry is wrong', 'Only worried — excitement is wrong', 'Nothing — people don\'t have feelings about change'], answer: 0, explain: 'It\'s completely normal to feel two feelings at once about a big change.' },
        { type: 'choice', q: 'If a change is worrying you, what\'s a good thing to do?', options: ['Talk to a trusted adult about it', 'Keep it secret forever', 'Pretend you\'re fine until you burst', 'Worry alone at 3am'], answer: 0, explain: 'Sharing a worry with a parent, carer or teacher makes it smaller — worries hate being talked about!' },
        { type: 'match', q: 'Match the life stage to a clue:', pairs: [
          ['Baby', 'Needs grown-ups for everything'],
          ['Child', 'Learns at school and loves to play'],
          ['Teenager', 'Growing fast and becoming independent'],
          ['Adult', 'Fully grown, can work and drive'],
          ['Older adult', 'Full of stories and wisdom']
        ] }
      ]
    },
    {
      id: 'big-feelings',
      title: 'Big feelings',
      emoji: '🌈',
      learn: [
        {
          title: 'Everyone has feelings',
          html: '<p>Happy, sad, angry, excited, nervous, jealous, proud, worried… <b>everyone</b> has big feelings sometimes — even grown-ups! Feelings aren\'t good or bad; they\'re messages from your brain. Naming a feeling ("I feel frustrated") is the first step to handling it.</p>' +
                '<p>When a feeling gets REALLY big, try a <b>calming strategy</b>:</p>' +
                '<ul><li>Take slow, <b>deep breaths</b> (smell the flower… blow out the candle…)</li>' +
                '<li><b>Count</b> slowly to 10</li>' +
                '<li><b>Talk to someone</b> about it</li>' +
                '<li>Run around or do some <b>exercise</b></li>' +
                '<li>Find a bit of <b>quiet time</b> with a book or some music</li></ul>'
        },
        {
          title: 'Being brave and your trusted team',
          html: '<p>New situations — like moving school, joining a club, or learning at home — can feel scary at first. Being <b>brave</b> doesn\'t mean having no fear; it means doing the new thing even though you feel a bit wobbly. The wobbles almost always shrink once you start!</p>' +
                '<p>Everyone needs a <b>trusted adult team</b> — your go-to grown-ups when feelings get too big to carry alone. Yours might include a parent or carer, a grandparent, a teacher or another family member. Pick about five people: that\'s a whole hand of helpers!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Do grown-ups have big feelings too?', options: ['Yes — everyone does, at every age', 'No — feelings stop at age 18', 'Only on birthdays', 'Only children have feelings'], answer: 0, explain: 'Big feelings are part of being human, whatever your age.' },
        { type: 'choice', q: 'Why does NAMING a feeling help?', options: ['It\'s the first step to understanding and handling it', 'It makes the feeling disappear instantly', 'It\'s a magic spell', 'It doesn\'t help at all'], answer: 0, explain: '"Name it to tame it!" — once you know it\'s frustration or worry, you can choose what to do.' },
        { type: 'choice', q: 'Which of these is a CALMING strategy?', options: ['Taking slow, deep breaths', 'Screaming into your friend\'s ear', 'Slamming every door in the house', 'Holding your breath until bedtime'], answer: 0, explain: 'Slow breathing tells your body it\'s safe to calm down.' },
        { type: 'choice', q: 'What does being BRAVE really mean?', options: ['Doing the new thing even though you feel a bit scared', 'Never feeling scared at all', 'Pretending nothing bothers you', 'Only doing things you find easy'], answer: 0, explain: 'Brave people feel the wobbles too — they just don\'t let the wobbles decide.' },
        { type: 'choice', q: 'You feel nervous before starting a new club. What usually happens to the nerves once you begin?', options: ['They shrink — new things feel less scary once you start', 'They grow forever', 'They turn into hiccups', 'They never change'], answer: 0, explain: 'The worrying-about-it part is almost always worse than the doing-it part!' },
        { type: 'sort', q: 'Sort these: helpful or unhelpful when you\'re angry?', buckets: ['Helpful 🌟', 'Unhelpful 🌧️'], items: [
          { text: 'Count slowly to 10', bucket: 0 },
          { text: 'Throw your shoes at the wall', bucket: 1 },
          { text: 'Tell someone how you feel', bucket: 0 },
          { text: 'Say something mean on purpose', bucket: 1 },
          { text: 'Run around the garden', bucket: 0 },
          { text: 'Bottle it up for weeks', bucket: 1 },
          { text: 'Quiet time with a book', bucket: 0 }
        ] },
        { type: 'match', q: 'Match the situation to a feeling word:', pairs: [
          ['Winning a prize', 'Proud'],
          ['First day somewhere new', 'Nervous'],
          ['A friend moves away', 'Sad'],
          ['Waiting for your birthday', 'Excited']
        ] },
        { type: 'choice', q: 'Who belongs in your "trusted adult team"?', options: ['Grown-ups who care for you — like a parent, carer, grandparent or teacher', 'Anyone famous on the internet', 'Strangers at the bus stop', 'Nobody — teams are for football'], answer: 0, explain: 'Aim for about five trusted grown-ups — a whole hand of helpers!' },
        { type: 'type', q: 'Fill the gap: when a feeling gets too big, take slow, deep b________.', answer: ['breaths', 'breath', 'breathes'], explain: 'Deep breaths are the quickest calm-down trick there is — and they\'re free!', hint: 'In through the nose, out through the mouth…' }
      ]
    },
    {
      id: 'write-friend',
      title: 'Writing quest: a brilliant friend',
      emoji: '💌',
      write: {
        prompt: 'Write about a <b>great friend</b> — real or imaginary! Tell us what makes them such a good friend and describe something kind they have done (or would do). OR, if you prefer, write a short <b>kind letter TO a friend</b>, telling them why you\'re glad to know them. Use some feelings words — happy, proud, safe, cheerful…',
        minWords: 30,
        checklist: [
          'I said <b>what makes them a good friend</b> (kind? funny? a great listener?)',
          'I gave an <b>example of something kind</b> they did',
          'I used at least one <b>feelings word</b>',
          'I checked my <b>capital letters and full stops</b>'
        ]
      },
      learn: [
        { title: 'Friendship inspiration', html: '<p>Think about the friendship ingredients: <b>kindness, listening, sharing, including others, keeping promises</b>. Which ones does your friend have? How do they make you FEEL? A tiny true story about something kind they did will make your writing shine, Dexter!</p>' }
      ]
    }
  ]
});
