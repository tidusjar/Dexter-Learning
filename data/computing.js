/* Computing — Year 4: algorithms, loops, debugging, the internet, online safety */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'computing',
  name: 'Computing',
  icon: '💻',
  color: '#3a86ff',
  tagline: 'Algorithms, loops, debugging, how the internet works — and staying safe online',
  lessons: [
    {
      id: 'algorithms',
      title: 'What is an algorithm?',
      emoji: '🤖',
      learn: [
        {
          title: 'Step-by-step instructions',
          html: '<p>An <b>algorithm</b> is a set of <b>step-by-step instructions</b> for doing a task or solving a problem — like a recipe, directions to the park, or instructions for building a model longship.</p>' +
                '<p>Computers follow instructions <b>EXACTLY</b> as they are written — they can\'t guess what you meant! So a good algorithm must be:</p>' +
                '<ul><li><b>Precise</b> — "Walk forward 3 steps" is precise; "go over there a bit" is not!</li>' +
                '<li><b>In the right order</b> — you must spread the butter BEFORE you put the bread slices together.</li>' +
                '<li><b>Complete</b> — don\'t miss any steps out.</li></ul>' +
                '<p>You follow algorithms every day: getting dressed, brushing your teeth, even tidying your room (well… sometimes!).</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What is an algorithm?', options: ['A set of step-by-step instructions for doing a task', 'A type of computer game', 'A robot from space', 'A really difficult sum'], answer: 0, explain: 'Algorithms are just instructions in order — like a recipe!' },
        { type: 'choice', q: 'How does a computer follow instructions?', options: ['Exactly as they are written — it can\'t guess what you meant', 'It works out what you probably meant', 'It asks a teacher', 'It does whatever it likes'], answer: 0, explain: 'Computers do EXACTLY what they\'re told — nothing more, nothing less.' },
        { type: 'order', q: 'Put this jam sandwich algorithm in the right order:', items: ['Get two slices of bread', 'Spread butter on the bread', 'Spread jam on top of the butter', 'Put the slices together', 'Cut the sandwich in half'], explain: 'Order matters — jam before butter would be a sticky disaster!' },
        { type: 'choice', q: 'Why does the ORDER of steps matter in an algorithm?', options: ['Doing steps in the wrong order can ruin the result', 'It doesn\'t matter at all', 'Computers like alphabetical order', 'Longer orders are always better'], answer: 0, explain: 'Imagine putting your shoes on BEFORE your socks!' },
        { type: 'choice', q: 'Which instruction is the most PRECISE?', options: ['Walk forward 3 steps', 'Go over there', 'Move a bit', 'Do the thing'], answer: 0, explain: 'A computer needs exact instructions — "3 steps" tells it exactly what to do.' },
        { type: 'sort', q: 'Sort these instructions: precise enough for a robot, or too vague?', buckets: ['Precise 🎯', 'Too vague 🌫️'], items: [
          { text: 'Turn right 90 degrees', bucket: 0 },
          { text: 'Go somewhere nice', bucket: 1 },
          { text: 'Pick up the red brick', bucket: 0 },
          { text: 'Tidy up a bit', bucket: 1 },
          { text: 'Take 5 steps forward', bucket: 0 },
          { text: 'Do it properly this time', bucket: 1 }
        ], explain: 'Robots need exact numbers and clear actions.' },
        { type: 'match', q: 'Match each everyday algorithm to its task:', pairs: [
          ['A recipe', 'Cooking a meal'],
          ['Satnav directions', 'Driving somewhere new'],
          ['LEGO instructions', 'Building a model'],
          ['Sheet music', 'Playing a song']
        ] },
        { type: 'type', q: 'What is the special computing word for a set of step-by-step instructions? (starts with A)', answer: ['algorithm', 'an algorithm', 'algorithms'], explain: 'Algorithm — say it like "AL-go-rith-um"!', hint: 'A _ _ _ _ _ _ _ _' },
        { type: 'choice', q: 'A robot is told: "Make toast." Nothing happens. Why?', options: ['The instruction isn\'t broken into precise steps the robot can follow', 'Robots don\'t like toast', 'The robot is being lazy', 'Toast is impossible to make'], answer: 0, explain: 'The robot needs every step: get bread, put it in the toaster, push the lever…' }
      ]
    },
    {
      id: 'loops',
      title: 'Loops — repeat after me!',
      emoji: '🔁',
      learn: [
        {
          title: 'Repetition makes programs shorter',
          html: '<p>A <b>loop</b> tells a computer to <b>repeat</b> instructions a number of times. In <b>Scratch</b>, you use the orange <b>"repeat"</b> block.</p>' +
                '<p>Instead of writing:</p><p><i>move forward, turn right, move forward, turn right, move forward, turn right, move forward, turn right</i></p>' +
                '<p>…you can just write: <b>repeat 4 times [move forward, turn right]</b> — and that draws a <b>square</b>!</p>' +
                '<p>The number of repeats matches the number of sides: <b>repeat 3</b> for a triangle, <b>repeat 4</b> for a square, <b>repeat 6</b> for a hexagon, <b>repeat 8</b> for an octagon.</p>' +
                '<p>Loops make programs <b>shorter</b>, <b>neater</b> and with <b>fewer chances for mistakes</b>.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What does a loop do in a program?', options: ['Repeats instructions a number of times', 'Deletes the program', 'Makes the screen brighter', 'Ties the computer in a knot'], answer: 0, explain: 'Loop = repeat! It saves writing the same thing over and over.' },
        { type: 'type', q: '"Repeat 4 times: [move forward, turn right]" — what shape does this draw?', answer: ['square', 'a square'], explain: '4 equal sides and 4 right-angle turns = a square!' },
        { type: 'choice', q: '"Repeat 3 times: [clap]" — how many claps is that?', options: ['3', '1', '6', '9'], answer: 0, explain: 'The clap happens 3 times.' },
        { type: 'type', q: '"Repeat 5 times: [jump, jump]" — how many jumps altogether?', answer: ['10', 'ten'], explain: '2 jumps, repeated 5 times: 2 × 5 = 10. Loops and times tables are friends!' },
        { type: 'choice', q: 'Why do programmers use loops?', options: ['Programs become shorter and have fewer chances for mistakes', 'Loops make the computer warmer', 'It\'s the law', 'Loops are just for decoration'], answer: 0, explain: 'Writing "repeat 8" once beats writing the same step 8 times!' },
        { type: 'match', q: 'Match the shape to the loop that draws it:', pairs: [
          ['Triangle', 'Repeat 3 times'],
          ['Square', 'Repeat 4 times'],
          ['Hexagon', 'Repeat 6 times'],
          ['Octagon', 'Repeat 8 times']
        ] },
        { type: 'choice', q: 'In Scratch, what colour is the "repeat" block?', options: ['Orange', 'Blue', 'Pink', 'Invisible'], answer: 0, explain: 'The repeat block lives with the orange Control blocks in Scratch.' },
        { type: 'choice', q: 'Which job is PERFECT for a loop?', options: ['Drawing the 8 sides of an octagon', 'Doing one single jump', 'Switching the computer on', 'Saying hello once'], answer: 0, explain: 'Anything that repeats — like 8 identical sides — is loop territory!' },
        { type: 'choice', q: 'A program says "repeat 6 times: [move forward, turn 60 degrees]". What shape appears?', options: ['A hexagon', 'A square', 'A circle', 'A triangle'], answer: 0, explain: '6 sides and 6 turns of 60° make a hexagon — just like a honeycomb cell.' }
      ]
    },
    {
      id: 'debugging',
      title: 'Debugging — bug hunters!',
      emoji: '🐛',
      learn: [
        {
          title: 'Finding and fixing bugs',
          html: '<p>A <b>bug</b> is a mistake in a program that stops it working properly. <b>Debugging</b> means <b>finding the bug and fixing it</b>.</p>' +
                '<p>The best way to debug is to be a detective: <b>go through the program step by step</b>, doing exactly what it says (you can even act it out!), and <b>predict</b> what should happen. Where what HAPPENS is different from what you EXPECTED — that\'s where the bug is hiding!</p>' +
                '<p>🦋 <b>Fun fact:</b> in 1947, engineers found a real moth stuck inside a huge computer making it go wrong — one of the first ever computer "bugs" was an actual insect!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What is a "bug" in computing?', options: ['A mistake in a program that stops it working properly', 'A spider living in the keyboard', 'A type of computer virus only', 'A button you must never press'], answer: 0, explain: 'Bugs are just mistakes — every programmer makes them, even experts!' },
        { type: 'choice', q: 'What does "debugging" mean?', options: ['Finding the mistake in a program and fixing it', 'Cleaning the computer screen', 'Deleting the whole program', 'Catching insects in the garden'], answer: 0, explain: 'De-BUG-ging = getting the bugs out!' },
        { type: 'choice', q: 'This program SHOULD draw a square: "repeat 4 times [move forward, turn 60 degrees]". What is the bug?', options: ['The turn should be 90 degrees, not 60', 'The repeat should be 100 times', '"Move forward" is spelled wrong', 'There is no bug'], answer: 0, explain: 'Squares have right-angle corners — 90°, not 60°.' },
        { type: 'choice', q: 'A sandwich robot does: get bread → spread jam → spread butter ON TOP of the jam. What kind of bug is this?', options: ['Steps in the wrong order', 'A missing step', 'Too many loops', 'A spelling mistake'], answer: 0, explain: 'All the right steps — but the order is scrambled. Butter goes first!' },
        { type: 'choice', q: 'What is the BEST way to find a bug?', options: ['Go through the program step by step and check what each step does', 'Change everything at random', 'Turn the computer off and hope', 'Blame the cat'], answer: 0, explain: 'Step-by-step detective work finds the exact spot where things go wrong.' },
        { type: 'type', q: '"Repeat 3 times: [clap]" should make SIX claps. What number should replace the 3?', answer: ['6', 'six'], explain: 'Change repeat 3 to repeat 6 — bug fixed!' },
        { type: 'choice', q: 'A program to get dressed says: "put on shoes, put on socks". What\'s wrong?', options: ['Socks must come before shoes', 'You don\'t need socks', 'Shoes are not clothes', 'Nothing is wrong'], answer: 0, explain: 'Shoes over bare feet, socks on top? That\'s a wrong-order bug!' },
        { type: 'sort', q: 'Sort these into good debugging habits and unhelpful ones:', buckets: ['Good debugging 🔍', 'Not helpful 🙈'], items: [
          { text: 'Test the program to see what it actually does', bucket: 0 },
          { text: 'Read the steps one at a time', bucket: 0 },
          { text: 'Change things randomly and hope', bucket: 1 },
          { text: 'Predict what SHOULD happen, then compare', bucket: 0 },
          { text: 'Give up straight away', bucket: 1 },
          { text: 'Act the program out like a robot', bucket: 0 }
        ] },
        { type: 'choice', q: 'One of the first ever computer "bugs" was…', options: ['A real moth stuck inside a computer', 'A spilled cup of tea', 'A naughty kitten', 'A piece of cheese'], answer: 0, explain: 'True story from 1947 — the engineers even taped the moth into their logbook!' }
      ]
    },
    {
      id: 'internet',
      title: 'How does the internet work?',
      emoji: '🌐',
      learn: [
        {
          title: 'Networks of networks',
          html: '<p>A <b>network</b> is a group of computers <b>connected together</b> so they can share information. The <b>internet</b> is the biggest network of all — millions of networks all over the world joined up, by cables (some running under the sea!), and by Wi-Fi.</p>' +
                '<ul><li>A <b>server</b> is a powerful computer that stores websites, videos and games and sends them to you when you ask.</li>' +
                '<li>A <b>router</b> is the box in your house that directs data between your devices and the internet.</li>' +
                '<li>Data travels in tiny pieces called <b>packets</b>, which zoom along and get put back together when they arrive.</li></ul>' +
                '<p>The <b>World Wide Web</b> (the websites you visit) is just ONE thing that uses the internet — video calls, games and messages use it too.</p>' +
                '<p>⚠️ Remember: <b>anyone</b> can put things on the internet, so not everything you read online is true. Always check with a trusted adult or a reliable source!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What is a network?', options: ['A group of computers connected so they can share information', 'A single computer on its own', 'A TV channel', 'A type of fishing net'], answer: 0, explain: 'Connected computers = a network. Your school probably has one!' },
        { type: 'choice', q: 'What is the internet?', options: ['Millions of networks around the world, all connected together', 'One giant computer in America', 'Another name for a laptop', 'A program you install'], answer: 0, explain: 'It\'s a network of networks, joined by cables and Wi-Fi all over the planet.' },
        { type: 'type', q: 'What do we call the powerful computer that stores websites and sends them to you? (starts with S)', answer: ['server', 'a server', 'servers'], explain: 'Servers "serve" you the websites you ask for — like a waiter serving food!', hint: 'S _ _ _ _ _' },
        { type: 'choice', q: 'What does a router do?', options: ['Directs data between your devices and the internet', 'Makes the internet faster by glowing', 'Stores all your toys', 'Prints your homework'], answer: 0, explain: 'The router is the box at home that connects your devices to the internet.' },
        { type: 'choice', q: 'Data travels across the internet in small pieces called…', options: ['Packets', 'Parcels', 'Envelopes', 'Crumbs'], answer: 0, explain: 'Packets — they travel separately and get rebuilt at the other end!' },
        { type: 'choice', q: 'What is the World Wide Web?', options: ['The websites we visit — one of many things that USE the internet', 'Exactly the same thing as the internet', 'A spider\'s home', 'A computer brand'], answer: 0, explain: 'The web (websites) runs ON the internet — like one app among many.' },
        { type: 'choice', q: 'Is everything you read on the internet true?', options: ['No — anyone can post things online, so you should check carefully', 'Yes — computers never lie', 'Yes — it\'s checked by teachers', 'Only on Tuesdays'], answer: 0, explain: 'Always think: who wrote this? How do they know? Check with a trusted adult.' },
        { type: 'match', q: 'Match the internet word to its job:', pairs: [
          ['Server', 'Stores websites and sends them to you'],
          ['Router', 'Directs data in and out of your home'],
          ['Packet', 'A small piece of travelling data'],
          ['Wi-Fi', 'Connects devices without wires']
        ] },
        { type: 'choice', q: 'How does the internet cross the oceans between countries?', options: ['Through giant cables on the sea floor', 'By boat, once a week', 'Dolphins carry it', 'It can\'t cross water'], answer: 0, explain: 'Real undersea cables thousands of kilometres long connect the continents!' }
      ]
    },
    {
      id: 'online-safety',
      title: 'Staying safe online',
      emoji: '🛡️',
      learn: [
        {
          title: 'Your online shield',
          html: '<p>The internet is brilliant — but just like crossing a road, you need some safety rules:</p>' +
                '<ul><li><b>Keep personal information PRIVATE</b> — never share your full name, address, school, phone number or passwords with people online.</li>' +
                '<li><b>People online may not be who they say they are.</b> Someone claiming to be a child could be an adult. Never agree to meet anyone from the internet.</li>' +
                '<li><b>Strong passwords</b> mix letters, numbers and symbols — and you only share them with your parents. "Dragon!7Boat" beats "12345"!</li>' +
                '<li><b>Be kind online</b> — written words can hurt just as much as spoken ones.</li>' +
                '<li><b>If anything online makes you feel worried, scared or upset — STOP and TELL A TRUSTED ADULT.</b> You will never be in trouble for asking for help.</li></ul>'
        }
      ],
      questions: [
        { type: 'sort', q: 'Sort these: OK to share online, or keep PRIVATE?', buckets: ['OK to share 🙂', 'Keep private 🔒'], items: [
          { text: 'Your favourite colour', bucket: 0 },
          { text: 'Your home address', bucket: 1 },
          { text: 'Your password', bucket: 1 },
          { text: 'Your favourite football team', bucket: 0 },
          { text: 'The name of your school', bucket: 1 },
          { text: 'Your phone number', bucket: 1 }
        ], explain: 'Anything that helps a stranger find or pretend to be you stays private.' },
        { type: 'choice', q: 'Which of these is the STRONGEST password?', options: ['Dragon!7Boat', '12345', 'password', 'dexter'], answer: 0, explain: 'Long, with capitals, numbers and symbols — and not your own name!' },
        { type: 'choice', q: 'Someone you only know online asks to meet you in the park. What do you do?', options: ['Say no and tell a trusted adult straight away', 'Go, but take a snack', 'Agree if they seem friendly', 'Keep it secret'], answer: 0, explain: 'NEVER meet someone from the internet — tell a trusted adult immediately.' },
        { type: 'choice', q: 'Are people online always who they say they are?', options: ['No — anyone can pretend to be someone else online', 'Yes — the internet checks', 'Yes — lying online is impossible', 'Only grown-ups tell the truth'], answer: 0, explain: 'You can\'t see who is really typing — that\'s why personal info stays private.' },
        { type: 'choice', q: 'Someone sends you an unkind message in a game. What\'s the BEST response?', options: ['Don\'t reply — block them and tell a trusted adult', 'Send something unkind back', 'Cry and keep it secret', 'Give them your password to be friends'], answer: 0, explain: 'Don\'t feed unkindness. Block, and tell an adult — every time.' },
        { type: 'choice', q: 'A pop-up says "YOU\'VE WON A FREE TABLET! Click here!" What do you do?', options: ['Don\'t click — it\'s probably a trick. Tell an adult', 'Click it quickly before it disappears', 'Type in your address to claim it', 'Click it on a friend\'s computer instead'], answer: 0, explain: 'If it sounds too good to be true, it is. These tricks try to steal information.' },
        { type: 'choice', q: 'If something online makes you feel scared or upset, you should…', options: ['Stop and tell a trusted adult — you\'ll never be in trouble for asking for help', 'Keep watching to see what happens', 'Keep it a secret forever', 'Throw the computer away'], answer: 0, explain: 'Trusted adults are your team — telling them is always the right move.' },
        { type: 'type', q: 'Who should you tell if anything online worries you? (two words: a t______ a____)', answer: ['trusted adult', 'a trusted adult', 'trusted adults'], explain: 'A trusted adult — like a parent, carer or teacher.', hint: 'Someone like Mum, Dad or a teacher.' },
        { type: 'match', q: 'Match the situation to the safest action:', pairs: [
          ['Unkind message arrives', 'Block and tell an adult'],
          ['Pop-up promises a prize', 'Don\'t click it'],
          ['Website asks for your address', 'Keep it private'],
          ['Something online upsets you', 'Stop and tell a trusted adult']
        ] }
      ]
    },
    {
      id: 'code-lab',
      title: 'Code Lab: program the Robo-Viking!',
      emoji: '🦾',
      learn: [
        {
          title: 'Real block coding — just like Scratch!',
          html: '<p>The Hairy Hooligans built a <b>Robo-Viking</b>, but it has no brain — YOU are the programmer now, Dexter!</p>' +
                '<ul><li>Tap the coloured <b>blocks</b> to build your program: <b>⬆️ move forward</b>, <b>↩️↪️ turns</b>, and the mighty <b>🔁 repeat</b> loop (don\'t forget <b>⤴ end repeat</b> to close it!).</li>' +
                '<li>Press <b>▶️ Run</b> and watch the Robo-Viking follow your program EXACTLY — the arrow shows which way it is facing.</li>' +
                '<li>Guide it to the treasure 💰. If it crashes into a rock 🪨, <b>debug</b> your program and run it again!</li></ul>' +
                '<p>🌟 Top coders use <b>loops</b> to keep programs short — watch for the hints!</p>'
        }
      ],
      blocks: {
        challenges: [
          { name: 'First steps', map: ['S..G'], hint: 'Three moves forward does it!', solution: ['F', 'F', 'F'] },
          { name: 'Turn the corner', map: ['S..', '##.', '##G'], hint: 'Move, move… then turn right and keep going!', solution: ['F', 'F', 'R', 'F', 'F'] },
          { name: 'The winding path', map: ['#.G', '#.#', 'S.#'], hint: 'You\'ll need BOTH turns for this one.', solution: ['F', 'L', 'F', 'F', 'R', 'F'] },
          { name: 'The long march', map: ['S.....G'], hint: 'Top coders solve this with just 2 blocks: repeat ×6 and move!', solution: ['F', 'F', 'F', 'F', 'F', 'F'] },
          { name: 'The staircase', map: ['S.##', '#..#', '##..', '###G'], hint: 'Spot the pattern: move, turn right, move, turn left… repeat ×3!', solution: ['F', 'R', 'F', 'L', 'F', 'R', 'F', 'L', 'F', 'R', 'F'] },
          { name: 'Around the lake', map: ['S....', '.###.', '.###.', '....G'], hint: 'March along the top (repeat ×4), turn right, then march down!', solution: ['F', 'F', 'F', 'F', 'R', 'F', 'F', 'F'] }
        ]
      }
    }
  ]
});
