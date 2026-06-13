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
        { type: 'choice', q: 'A robot is told: "Make toast." Nothing happens. Why?', options: ['The instruction isn\'t broken into precise steps the robot can follow', 'Robots don\'t like toast', 'The robot is being lazy', 'Toast is impossible to make'], answer: 0, explain: 'The robot needs every step: get bread, put it in the toaster, push the lever…' },
        { type: 'choice', q: 'Which of these is the BEST example of an algorithm?', options: ['A recipe listing every step to bake a cake', 'A picture of a cake', 'The word "bake"', 'A list of ingredients with no instructions'], answer: 0, explain: 'An algorithm needs every step in order — a recipe is a perfect real-life algorithm!' },
        { type: 'sort', q: 'Sort these into things an algorithm MUST be, or things it does NOT need to be:', buckets: ['An algorithm MUST be this', 'An algorithm does NOT need this'], items: [
          { text: 'In the right order', bucket: 0 },
          { text: 'Written in a computer language', bucket: 1 },
          { text: 'Precise (exact, not vague)', bucket: 0 },
          { text: 'Very long', bucket: 1 },
          { text: 'Complete (no steps missing)', bucket: 0 }
        ], explain: 'Order, precision and completeness are must-haves; length and coding language are not required.' },
        { type: 'match', q: 'Match each algorithm problem to what went wrong:', pairs: [
          ['The robot turned left when it should have turned right', 'Wrong instruction'],
          ['The robot stopped halfway — a step was missing', 'Incomplete algorithm'],
          ['The robot put jam on before the bread', 'Wrong order'],
          ['"Go somewhere" — the robot did nothing', 'Not precise enough']
        ] },
        { type: 'type', q: 'An algorithm must not miss any steps — we say it must be c_______. (one word)', answer: ['complete'], explain: 'Complete — every step must be included, or the algorithm fails.' },
        { type: 'choice', q: 'Dexter writes instructions for getting to school: "Leave house. Walk to corner. Turn left. Walk 5 minutes. Arrive at school." Is this a good algorithm?', options: ['Yes — it is precise, ordered and complete', 'No — it is too vague', 'No — algorithms can only be on computers', 'No — it needs more than 5 steps'], answer: 0, explain: 'It\'s precise, in the right order and has every step — that\'s a great algorithm!' },
        { type: 'choice', q: 'If you write an algorithm to get dressed but forget the step "put on trousers", what kind of problem is that?', options: ['The algorithm is incomplete — a step is missing', 'The steps are in the wrong order', 'The algorithm is too precise', 'There is no problem'], answer: 0, explain: 'Missing steps make an algorithm incomplete — the robot would walk out without trousers!' },
        { type: 'order', q: 'Put these steps for brushing your teeth in the right order:', items: [
          'Pick up the toothbrush',
          'Put toothpaste on the brush',
          'Brush your teeth for two minutes',
          'Rinse your mouth with water',
          'Put the toothbrush away'
        ], explain: 'Order matters — you can\'t brush before you\'ve put the toothpaste on!' },
        { type: 'choice', q: 'A computer follows instructions precisely. What does precisely mean?', options: ['Exactly as written, with no guessing', 'As quickly as possible', 'In alphabetical order', 'With lots of emotion'], answer: 0, explain: 'Precisely means exactly — computers do exactly what they are told, nothing more.' },
        { type: 'choice', q: 'Which of these everyday activities is NOT an example of following an algorithm?', options: ['Daydreaming', 'Tying your shoelaces', 'Following a recipe', 'Building with LEGO instructions'], answer: 0, explain: 'Daydreaming has no set steps — all the others follow clear, ordered instructions.' }
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
        { type: 'choice', q: 'A program says "repeat 6 times: [move forward, turn 60 degrees]". What shape appears?', options: ['A hexagon', 'A square', 'A circle', 'A triangle'], answer: 0, explain: '6 sides and 6 turns of 60° make a hexagon — just like a honeycomb cell.' },
        { type: 'choice', q: 'Without a loop, you write "jump" 8 times. With a loop, how do you write the same thing?', options: ['Repeat 8 times: [jump]', 'Jump × jump × jump…', 'Loop jump 1 time', 'Repeat forever: [jump, stop]'], answer: 0, explain: 'Repeat 8 times is shorter, neater and easier to read than writing "jump" eight separate times.' },
        { type: 'type', q: '"Repeat 7 times: [stamp foot]" — how many stamps altogether?', answer: ['7', 'seven'], explain: 'The action happens once each loop, 7 loops = 7 stamps.' },
        { type: 'choice', q: 'Why are loops useful for drawing shapes like squares and hexagons?', options: ['Because each side is the same — you repeat the same steps for every side', 'Because loops make the pen move faster', 'Because shapes look better with loops', 'Because computers can only draw with loops'], answer: 0, explain: 'A square has 4 identical sides — a loop lets you write the steps once and repeat them 4 times.' },
        { type: 'match', q: 'Match the Scratch loop to how many times it runs each instruction:', pairs: [
          ['Repeat 3 times', '3 times'],
          ['Repeat 10 times', '10 times'],
          ['Repeat 1 time', 'Once'],
          ['Repeat 0 times', 'Never runs']
        ] },
        { type: 'sort', q: 'Sort these tasks: good use of a loop, or no loop needed?', buckets: ['Loop is useful here 🔁', 'No loop needed here ➡️'], items: [
          { text: 'Draw all 6 sides of a hexagon', bucket: 0 },
          { text: 'Say "Hello" just once', bucket: 1 },
          { text: 'Stamp 10 times in a row', bucket: 0 },
          { text: 'Turn the sprite to face right', bucket: 1 },
          { text: 'Play the same note 8 times', bucket: 0 }
        ], explain: 'Loops shine when you repeat the same action multiple times; for a one-off action, no loop is needed.' },
        { type: 'choice', q: 'A loop says "repeat 4 times: [move forward 10, turn right 90]". After one full loop, has the sprite drawn a complete square?', options: ['Yes — 4 sides, 4 right-angle turns = a square', 'No — it needs 6 sides for a shape', 'No — you need turn left for a square', 'No — the sides are too short'], answer: 0, explain: 'Four equal sides with four 90° turns close back on themselves — that\'s a perfect square!' },
        { type: 'choice', q: 'What is the advantage of using a loop instead of writing the same steps many times?', options: ['Fewer lines of code and fewer chances to make mistakes', 'The computer runs faster with loops', 'Loops use less electricity', 'You don\'t need a computer for loops'], answer: 0, explain: 'Loops make code shorter and cleaner — if you spot a mistake, you only fix it in one place.' },
        { type: 'order', q: 'Put the steps to draw a triangle using a loop in the right order:', items: [
          'Start the repeat block: repeat 3 times',
          'Move forward (one side of the triangle)',
          'Turn right 120 degrees',
          'End the repeat block',
          'The triangle is drawn!'
        ], explain: 'Each loop makes one side and turns the pen ready for the next — after 3 repeats, the triangle is complete.' },
        { type: 'choice', q: 'In Scratch, where do you find the "repeat" block?', options: ['In the orange Control blocks', 'In the blue Motion blocks', 'In the purple Looks blocks', 'In the green Operators blocks'], answer: 0, explain: 'The repeat block lives in the orange Control section — it controls the flow of your program.' }
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
        { type: 'choice', q: 'One of the first ever computer "bugs" was…', options: ['A real moth stuck inside a computer', 'A spilled cup of tea', 'A naughty kitten', 'A piece of cheese'], answer: 0, explain: 'True story from 1947 — the engineers even taped the moth into their logbook!' },
        { type: 'choice', q: 'Dexter\'s program should say "Hello" three times, but it only says it once. What is the likely bug?', options: ['The repeat number is wrong — it should be 3, not 1', 'The word "Hello" is spelled wrong', 'The computer is not switched on', 'There is no bug'], answer: 0, explain: 'If it only says "Hello" once, the loop is probably set to repeat 1 time instead of 3.' },
        { type: 'choice', q: 'What does it mean to "trace" through a program?', options: ['Go through each step carefully, writing down what happens', 'Delete the program and start again', 'Change the program at random', 'Print the program on paper'], answer: 0, explain: 'Tracing means following the program step by step — like being the computer yourself!' },
        { type: 'sort', q: 'Sort these bugs by type:', buckets: ['Wrong order bug', 'Missing step bug', 'Wrong value bug'], items: [
          { text: 'Shoes put on before socks', bucket: 0 },
          { text: 'Repeat says 3 but should be 6', bucket: 2 },
          { text: 'A sandwich made without bread', bucket: 1 },
          { text: 'Jam spread before the butter', bucket: 0 },
          { text: 'Turn 60° instead of 90° for a square', bucket: 2 }
        ], explain: 'Bugs have different types: wrong order, missing steps, or a number that\'s simply wrong.' },
        { type: 'match', q: 'Match each buggy program to its problem:', pairs: [
          ['"Repeat 3 times: [clap]" should make 9 claps', 'Wrong repeat number'],
          ['"Spread jam, then get the bread"', 'Wrong order'],
          ['"Move forward, turn right" — but the shape never closes', 'Missing the final step'],
          ['"Turn 60 degrees" when drawing a square', 'Wrong angle value']
        ] },
        { type: 'type', q: 'In 1947, what real creature was found inside a computer, causing it to go wrong?', answer: ['moth', 'a moth'], explain: 'A real moth was taped into the engineers\' logbook — one of the first real "bugs"!' },
        { type: 'choice', q: 'Why is it helpful to ACT OUT a program like a robot when debugging?', options: ['You can see exactly what each step does and spot where it goes wrong', 'It is more fun than using a computer', 'Acting burns more calories', 'Robots always find bugs faster'], answer: 0, explain: 'Acting it out forces you to follow every step exactly — just like a computer does — making bugs much easier to spot.' },
        { type: 'choice', q: 'A program to draw a square uses "repeat 4 times: [move forward, turn right 90]". It works perfectly. Dexter changes the angle to 45°. What happens now?', options: ['The shape changes — it will no longer be a square', 'It still draws a square', 'The program crashes', 'Nothing changes'], answer: 0, explain: 'Changing the angle is a bug — 45° turns won\'t make a square. You need 90° for each corner.' },
        { type: 'choice', q: 'What is the BEST first step when you notice your program is not working?', options: ['Read through the steps carefully to find where it goes wrong', 'Delete everything and start again', 'Ask a friend to do it for you', 'Switch the computer off'], answer: 0, explain: 'Read, trace and test before making any changes — find the bug before you fix it!' },
        { type: 'order', q: 'Put these debugging steps in the best order:', items: [
          'Run the program and notice it doesn\'t work correctly',
          'Read through every step of the program',
          'Predict what each step should do',
          'Find the step where what happens doesn\'t match what you expected',
          'Fix just that step and test again'
        ], explain: 'Good debugging is detective work: observe, read, predict, find, fix — then test!' }
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
        { type: 'choice', q: 'How does the internet cross the oceans between countries?', options: ['Through giant cables on the sea floor', 'By boat, once a week', 'Dolphins carry it', 'It can\'t cross water'], answer: 0, explain: 'Real undersea cables thousands of kilometres long connect the continents!' },
        { type: 'choice', q: 'If a packet of data gets lost on the way, what happens?', options: ['It is re-sent so the information arrives completely', 'The whole internet breaks', 'The data disappears forever', 'You have to restart your computer'], answer: 0, explain: 'The internet is clever — lost packets are resent until all the pieces arrive safely.' },
        { type: 'choice', q: 'Is the World Wide Web the same as the internet?', options: ['No — the web is just one part of the internet; emails and games also use it', 'Yes — they are exactly the same thing', 'Yes — the internet is inside the web', 'No — the web is bigger than the internet'], answer: 0, explain: 'The internet is the network; the web (websites) is just one thing that runs on it.' },
        { type: 'type', q: 'Data travels in tiny pieces called what? (one word, starts with P)', answer: ['packets', 'packet'], explain: 'Packets — small chunks of data that zoom across the internet and get reassembled at the other end.', hint: 'P _ _ _ _ _ _' },
        { type: 'match', q: 'Match each internet term to the right description:', pairs: [
          ['Network', 'A group of computers connected to share information'],
          ['Internet', 'Millions of networks all joined together'],
          ['Server', 'A powerful computer that stores and sends websites'],
          ['Router', 'The box that directs data in and out of your home']
        ] },
        { type: 'choice', q: 'Why might it be important to check whether information on a website comes from a trusted source?', options: ['Anyone can post anything online — not everything is true or accurate', 'Websites are always right', 'Only adults use the internet', 'Computers check every fact automatically'], answer: 0, explain: 'The internet has no single fact-checker — you need to think critically and check with trusted adults or reliable sources.' },
        { type: 'sort', q: 'Sort these: things that USE the internet, or things that ARE the internet?', buckets: ['Uses the internet', 'Part of what makes the internet'], items: [
          { text: 'Visiting a website', bucket: 0 },
          { text: 'Sending an email', bucket: 0 },
          { text: 'Undersea cables carrying data', bucket: 1 },
          { text: 'A router directing packets', bucket: 1 },
          { text: 'Playing an online game', bucket: 0 }
        ], explain: 'Websites, emails and games USE the internet; cables and routers form the internet\'s infrastructure.' },
        { type: 'choice', q: 'When you visit a website, which device sends the web page to your computer?', options: ['A server', 'A router', 'A Wi-Fi signal', 'A packet'], answer: 0, explain: 'A server stores the website and sends it to you when you type the address.' },
        { type: 'choice', q: 'What does Wi-Fi do?', options: ['Connects devices to a network without wires', 'Stores websites on your device', 'Sends packets to the server', 'Translates text on screen'], answer: 0, explain: 'Wi-Fi lets your phone, tablet or laptop join a network wirelessly — no cable needed!' },
        { type: 'order', q: 'Put these events in order when Dexter types a website address and gets the page:', items: [
          'Dexter types the website address',
          'The request travels as packets through the router',
          'The packets reach the server that stores the website',
          'The server sends the web page back as packets',
          'The packets arrive and the page appears on screen'
        ], explain: 'Request → router → server → response → page displayed. All of this happens in a fraction of a second!' }
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
        ] },
        { type: 'choice', q: 'Which of these is the BEST password for Dexter\'s account?', options: ['V1k!ngLongsh1p', 'dexter', '1234', 'password123'], answer: 0, explain: 'A mix of upper and lower case letters, numbers and symbols makes a really strong password!' },
        { type: 'sort', q: 'Sort these: fine to share with anyone, or only share with parents / trusted adults?', buckets: ['Fine to share 😊', 'Only share with parents/trusted adults 🔒'], items: [
          { text: 'Your password', bucket: 1 },
          { text: 'Your favourite colour', bucket: 0 },
          { text: 'Your full name and address', bucket: 1 },
          { text: 'Your favourite book', bucket: 0 },
          { text: 'The name of your school', bucket: 1 }
        ], explain: 'Passwords and personal details that could identify or locate you must be kept private.' },
        { type: 'choice', q: 'Someone in an online game says "I\'m 10 years old too — what school do you go to?" What should Dexter do?', options: ['Not answer — keep school name private and tell a trusted adult', 'Tell them — they might be a new friend', 'Give his school name and home address', 'Invite them to meet at school tomorrow'], answer: 0, explain: 'Even if someone claims to be your age, you cannot be sure. Keep personal details private.' },
        { type: 'choice', q: 'What makes cyberbullying (being unkind online) just as serious as face-to-face bullying?', options: ['Written words can hurt just as much as spoken ones', 'Online words disappear straight away', 'Only adults can be cyberbullied', 'It is only real if you meet in person'], answer: 0, explain: 'Words on a screen can be read over and over and shared widely — they can hurt a lot.' },
        { type: 'type', q: 'If a website or game asks for your personal information, the safest thing is to keep it ______. (one word)', answer: ['private'], explain: 'Private — your personal details are yours to protect.' },
        { type: 'choice', q: 'A message arrives saying "Click this link to claim your free prize!" You don\'t recognise who sent it. What should you do?', options: ['Delete it and tell a trusted adult', 'Click the link — free prizes are exciting!', 'Share it with all your friends', 'Reply and ask for more details'], answer: 0, explain: 'Surprise "prize" messages are usually scams trying to steal information — delete and tell an adult.' },
        { type: 'match', q: 'Match each online safety rule to the reason for it:', pairs: [
          ['Never share your password', 'Anyone with your password can pretend to be you'],
          ['Never agree to meet someone from online', 'People online may not be who they say they are'],
          ['Tell a trusted adult if you\'re upset', 'You\'ll never be in trouble for asking for help'],
          ['Be kind in messages and games', 'Written words can hurt just as much as spoken ones']
        ] },
        { type: 'choice', q: 'Which of these is a sign that a website might NOT be trustworthy?', options: ['It promises free expensive gifts just for clicking a link', 'It has a clear author and references', 'It was written by a well-known organisation', 'It tells you to check the facts elsewhere too'], answer: 0, explain: 'Promises of free gifts, no contact details, and sloppy spelling are warning signs of untrustworthy websites.' },
        { type: 'order', q: 'Dexter gets an upsetting message in an online game. Put his best steps in order:', items: [
          'Stop — don\'t reply straight away',
          'Block the person who sent the message',
          'Take a screenshot as evidence',
          'Tell a trusted adult what happened',
          'Work with the adult to report it if needed'
        ], explain: 'Stop, block, save evidence, tell an adult — always report unkind behaviour online.' },
        { type: 'choice', q: 'Why is it important to use DIFFERENT passwords for different websites?', options: ['If one password is stolen, your other accounts stay safe', 'It is the law in the UK', 'Computers require different passwords', 'It makes you type faster'], answer: 0, explain: 'If a thief gets one password and you use it everywhere, they can get into all your accounts. Different passwords = better protection.' }
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
