/* Design & Technology — Year 4 Summer 2: healthy eating & picnics, electricity & torches */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'dt',
  name: 'Design & Technology',
  icon: '🔧',
  color: '#9b5de5',
  tagline: 'Plan a healthy picnic feast, then design and build your own torch!',
  lessons: [
    {
      id: 'healthy-eating',
      title: 'The Eatwell Guide',
      emoji: '🥗',
      learn: [
        {
          title: 'The food groups',
          html: '<p>The <b>Eatwell Guide</b> is a big plate picture that shows how to eat a healthy, balanced diet. It splits food into groups:</p>' +
                '<ul><li><b>Fruit and vegetables</b> 🍎🥕 — try to eat at least <b>5 portions a day</b> ("5 a day"). The biggest group!</li>' +
                '<li><b>Carbohydrates (starchy foods)</b> 🍞 — bread, pasta, rice, potatoes and cereals. They give you <b>energy</b>.</li>' +
                '<li><b>Proteins</b> 🍗 — meat, fish, eggs, beans and lentils. They help your body <b>grow and repair</b>.</li>' +
                '<li><b>Dairy</b> 🥛 — milk, cheese and yoghurt. Full of <b>calcium</b> for strong bones and teeth.</li>' +
                '<li><b>Oils and spreads</b> 🧈 — only <b>small amounts</b>.</li></ul>' +
                '<p>Sugary treats like sweets, cake and fizzy drinks aren\'t really part of the guide at all — they\'re fine <b>only occasionally</b>, not every day!</p>'
        },
        {
          title: 'Building a balanced meal',
          html: '<p>A <b>balanced meal</b> takes food from several groups — not just one. A cheese sandwich with cucumber sticks and an apple has starchy bread, dairy cheese, AND fruit and veg. Brilliant!</p>' +
                '<p>A plate of only chips, or only sweets, is NOT balanced — your body needs a mix of foods to grow strong, Dexter. Don\'t forget water or milk to drink, too.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'How many portions of fruit and vegetables should you try to eat each day?', options: ['At least 5', 'Just 1', 'Exactly 10', 'None — they\'re treats'], answer: 0, explain: 'That\'s why we say "5 a day"!' },
        { type: 'choice', q: 'Bread, pasta, rice and potatoes belong to which food group?', options: ['Carbohydrates (starchy foods)', 'Dairy', 'Proteins', 'Oils and spreads'], answer: 0, explain: 'Starchy carbohydrates give you energy to run, play and think.' },
        { type: 'choice', q: 'What do protein foods like fish, eggs and beans help your body do?', options: ['Grow and repair', 'Glow in the dark', 'Nothing at all', 'Fall asleep faster'], answer: 0, explain: 'Proteins are your body\'s building blocks for growing and repairing.' },
        { type: 'choice', q: 'Why is dairy food like milk and cheese good for you?', options: ['It has calcium for strong bones and teeth', 'It makes you taller instantly', 'It is full of sugar', 'It gives you super speed'], answer: 0, explain: 'Calcium in dairy keeps your bones and teeth strong.' },
        { type: 'choice', q: 'How much oil and spread should we eat?', options: ['Only small amounts', 'As much as possible', 'A whole jar a day', 'None ever — it\'s banned'], answer: 0, explain: 'We need a little, but only a small amount.' },
        { type: 'choice', q: 'How often should we have sugary treats like sweets and cake?', options: ['Only occasionally', 'With every meal', 'At least 5 a day', 'Never, not even at birthdays'], answer: 0, explain: 'Treats are fine now and then — just not every day!' },
        { type: 'sort', q: 'Sort these foods into the right Eatwell groups:', buckets: ['Fruit & veg 🍎', 'Carbohydrates 🍞', 'Proteins 🍗'], items: [
          { text: 'Banana', bucket: 0 }, { text: 'Carrot', bucket: 0 }, { text: 'Pasta', bucket: 1 },
          { text: 'Rice', bucket: 1 }, { text: 'Eggs', bucket: 2 }, { text: 'Baked beans', bucket: 2 },
          { text: 'Broccoli', bucket: 0 }
        ] },
        { type: 'match', q: 'Match each food group to its job:', pairs: [
          ['Carbohydrates', 'Give you energy'],
          ['Proteins', 'Help you grow and repair'],
          ['Dairy', 'Calcium for bones and teeth'],
          ['Fruit and veg', 'Vitamins — aim for 5 a day']
        ] },
        { type: 'choice', q: 'Which of these is the most BALANCED lunch?', options: ['Tuna sandwich, cherry tomatoes, yoghurt and water', 'A big bag of sweets', 'Three packets of crisps', 'Just a slice of cake'], answer: 0, explain: 'It mixes protein, starchy bread, veg and dairy — lots of groups in one lunch!' },
        { type: 'type', q: 'Milk, cheese and yoghurt all belong to which food group? (one word)', answer: ['dairy'], explain: 'They\'re all dairy foods, full of calcium.', hint: 'It starts with D and comes from milk…' }
      ]
    },
    {
      id: 'plan-picnic',
      title: 'Planning a healthy picnic',
      emoji: '🧺',
      learn: [
        {
          title: 'The perfect packed lunch',
          html: '<p>Designers always <b>plan</b> before they make! A balanced picnic needs something from several food groups:</p>' +
                '<ul><li>A <b>starchy</b> base — sandwich, wrap, pasta salad or pitta</li>' +
                '<li>Some <b>protein or dairy</b> — chicken, tuna, egg, cheese or yoghurt</li>' +
                '<li><b>Fruit and veg</b> — apple slices, grapes, carrot sticks, cucumber</li>' +
                '<li>A <b>drink</b> — water or milk beat fizzy drinks every time</li>' +
                '<li>Maybe ONE small treat — not five!</li></ul>'
        },
        {
          title: 'Food safety and evaluating',
          html: '<p>Keep your picnic SAFE: <b>wash your hands</b> before touching food, keep food <b>covered</b> so insects can\'t land on it, and carry it in a <b>cool bag</b> so things like cheese and yoghurt stay cold and fresh.</p>' +
                '<p>Afterwards, designers <b>evaluate</b> — they ask: How did it <b>taste</b>? How did it <b>look</b>? Was it <b>healthy</b> and balanced? What would I change next time?</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What should you ALWAYS do before preparing picnic food?', options: ['Wash your hands', 'Do ten star jumps', 'Put on sunglasses', 'Eat a sweet first'], answer: 0, explain: 'Clean hands stop germs getting onto the food.' },
        { type: 'choice', q: 'Why should you carry a picnic in a cool bag?', options: ['To keep food cold and fresh so it\'s safe to eat', 'To make the bag look stylish', 'So the food tastes spicy', 'To keep wasps warm'], answer: 0, explain: 'Foods like cheese, yoghurt and cooked chicken need to stay cool to be safe.' },
        { type: 'choice', q: 'Why should picnic food be kept covered?', options: ['So insects and germs can\'t get on it', 'So nobody can see it', 'To keep it a surprise', 'To make it heavier'], answer: 0, explain: 'A lid or wrap keeps flies and dirt away from your food.' },
        { type: 'choice', q: 'Which is the most BALANCED picnic?', options: ['Cheese wrap, carrot sticks, an apple and water', 'Four chocolate bars and cola', 'Three bags of crisps', 'A bag of marshmallows and a lolly'], answer: 0, explain: 'It has starchy food, dairy, veg, fruit AND a healthy drink.' },
        { type: 'choice', q: 'Which drink is the healthiest everyday choice for a picnic?', options: ['Water', 'Fizzy cola', 'Energy drink', 'Triple-syrup milkshake'], answer: 0, explain: 'Water (or milk) is the best everyday drink — no added sugar.' },
        { type: 'choice', q: 'When designers EVALUATE their picnic, what do they think about?', options: ['Taste, looks and healthiness', 'Only the price of the basket', 'How fast they can eat it', 'The weather last Tuesday'], answer: 0, explain: 'Evaluating means judging how it tasted, looked, and how healthy it was — and what to improve.' },
        { type: 'sort', q: 'Sort these picnic ideas: everyday food or occasional treat?', buckets: ['Everyday food ✅', 'Occasional treat 🍬'], items: [
          { text: 'Cucumber sticks', bucket: 0 }, { text: 'Chocolate cake', bucket: 1 },
          { text: 'Wholemeal sandwich', bucket: 0 }, { text: 'Fizzy drink', bucket: 1 },
          { text: 'Grapes', bucket: 0 }, { text: 'Sweets', bucket: 1 }, { text: 'Yoghurt', bucket: 0 }
        ] },
        { type: 'order', q: 'Put the picnic-planning steps in a sensible order:', items: [
          'Plan a balanced menu from the food groups', 'Wash your hands', 'Prepare the food and cover it', 'Pack everything into a cool bag', 'Enjoy the picnic!', 'Evaluate: taste, looks, healthiness'
        ], explain: 'Plan → wash → prepare → pack → eat → evaluate. Just like a real designer!' },
        { type: 'choice', q: 'Dexter\'s picnic has a ham sandwich and water. What is MISSING to make it balanced?', options: ['Some fruit or vegetables', 'Another sandwich', 'A bigger bottle', 'More ham'], answer: 0, explain: 'Adding fruit or veg — like an apple or carrot sticks — would balance it nicely.' }
      ]
    },
    {
      id: 'write-picnic',
      title: 'Writing quest: my healthy picnic menu',
      emoji: '📝',
      write: {
        prompt: 'You are the picnic designer! Plan <b>YOUR perfect healthy picnic menu</b>. Write down what you would pack, which food groups each item comes from, what you would drink, and explain why your picnic is balanced. You could even give your picnic a fancy name!',
        minWords: 30,
        checklist: [
          'I included something from the <b>fruit and veg</b> group',
          'I included a <b>starchy food</b> (bread, wrap, pasta, rice…)',
          'I included a <b>protein or dairy</b> item',
          'I included a <b>drink</b>',
          'I gave <b>one reason</b> why my picnic is balanced'
        ]
      },
      learn: [
        { title: 'Chef Dexter\'s challenge!', html: '<p>Remember the Eatwell Guide: pick from <b>different food groups</b> — fruit and veg, starchy carbohydrates, protein, dairy — plus a healthy drink. One small treat is allowed… but only one!</p>' }
      ]
    },
    {
      id: 'electricity-basics',
      title: 'Electrical circuits',
      emoji: '🔋',
      learn: [
        {
          title: 'What a circuit needs',
          html: '<p>An electrical <b>circuit</b> is a loop that electricity flows around. A simple circuit needs:</p>' +
                '<ul><li>A <b>cell or battery</b> — the power source</li>' +
                '<li><b>Wires</b> — the path for the electricity</li>' +
                '<li>Something to power — a <b>bulb</b>, <b>buzzer</b> or <b>motor</b></li>' +
                '<li>A <b>complete loop</b> with no gaps!</li></ul>' +
                '<p>If there is a gap anywhere, the electricity can\'t flow and the bulb stays dark. A <b>switch</b> works by making a gap on purpose: switch OFF = gap = no flow; switch ON = loop complete = light!</p>'
        },
        {
          title: 'Conductors, insulators and SAFETY',
          html: '<p><b>Conductors</b> let electricity flow through them — <b>metals</b> like copper, steel and aluminium are great conductors. That\'s why wires are made of metal.</p>' +
                '<p><b>Insulators</b> do NOT let electricity through — <b>plastic, wood and rubber</b> are insulators. That\'s why wires are covered in plastic, to keep us safe.</p>' +
                '<p>⚠️ <b>SAFETY:</b> batteries in school experiments are safe, but <b>mains electricity</b> (plugs and sockets at home) is powerful enough to hurt you badly. NEVER poke anything into a socket or play with plugs and cables.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What gives a circuit its power?', options: ['A cell or battery', 'A lump of cheese', 'The light bulb', 'The plastic coating'], answer: 0, explain: 'The cell or battery is the power source that pushes electricity around the loop.' },
        { type: 'choice', q: 'Why won\'t a bulb light if there is a gap in the circuit?', options: ['Electricity can only flow around a complete loop', 'The bulb gets shy', 'Gaps make electricity faster', 'Bulbs only work at night'], answer: 0, explain: 'No complete loop = no flow = no light!' },
        { type: 'choice', q: 'How does a switch turn things OFF?', options: ['It makes a gap in the circuit so electricity can\'t flow', 'It eats the electricity', 'It unscrews the bulb', 'It hides the battery'], answer: 0, explain: 'A switch opens a gap in the loop. Closing the switch completes the circuit again.' },
        { type: 'choice', q: 'What is a CONDUCTOR?', options: ['A material that lets electricity flow through it', 'A material that blocks electricity', 'A type of battery', 'Someone who drives a train'], answer: 0, explain: 'Conductors, like metals, let electricity pass through.' },
        { type: 'choice', q: 'Why are wires covered in plastic?', options: ['Plastic is an insulator and keeps us safe', 'Plastic makes the electricity stronger', 'To make them tastier', 'To make them heavier'], answer: 0, explain: 'The plastic insulation stops electricity reaching our hands.' },
        { type: 'sort', q: 'Sort these materials: conductor or insulator?', buckets: ['Conductor ⚡', 'Insulator 🚫'], items: [
          { text: 'Copper', bucket: 0, why: 'Copper is a metal — wires are often made of it.' },
          { text: 'Plastic ruler', bucket: 1 }, { text: 'Steel paperclip', bucket: 0 },
          { text: 'Wooden spoon', bucket: 1 }, { text: 'Rubber band', bucket: 1 },
          { text: 'Aluminium foil', bucket: 0 }
        ] },
        { type: 'order', q: 'Put the steps for building a circuit in order:', items: [
          'Collect a battery, wires and a bulb', 'Connect a wire from the battery to the bulb', 'Connect a second wire from the bulb back to the battery', 'Check the loop is complete with no gaps', 'Watch the bulb light up!'
        ], explain: 'Build the loop step by step — the bulb only lights when the loop is complete.' },
        { type: 'choice', q: 'Which of these is SAFE to experiment with?', options: ['A small battery circuit from a school kit', 'A plug socket at home', 'Mains cables', 'A broken lamp that\'s still plugged in'], answer: 0, explain: 'Battery kits are safe. NEVER play with mains electricity, sockets or plugs.' },
        { type: 'type', q: 'Metals like copper let electricity flow through them. What do we call materials like this? (one word)', answer: ['conductor', 'conductors'], explain: 'Conductors conduct (carry) electricity.', hint: 'It starts with C…' },
        { type: 'match', q: 'Match each circuit part to its job:', pairs: [
          ['Battery', 'Provides the power'],
          ['Wires', 'Carry the electricity around'],
          ['Bulb', 'Lights up when the loop is complete'],
          ['Switch', 'Makes or closes a gap in the loop']
        ] }
      ]
    },
    {
      id: 'circuit-lab',
      title: 'Circuit Lab: make it light up!',
      emoji: '🔌',
      learn: [
        {
          title: 'Build real circuits',
          html: '<p>Time to build, Dexter! Fill every gap in the loop with a part. The bulb only lights when:</p>' +
                '<ul><li>The loop is <b>complete</b> — no gaps!</li>' +
                '<li>There\'s a <b>battery</b> to push the electricity and a <b>bulb</b> to light.</li>' +
                '<li>Everything in the loop is a <b>conductor</b> — and any <b>switch</b> is CLOSED.</li></ul>' +
                '<p>Watch out for sneaky <b>insulators</b> hiding in the parts box — plastic and rubber block electricity!</p>'
        }
      ],
      circuit: {
        challenges: [
          { name: 'Light it up!', slots: 4, parts: ['battery', 'bulb', 'wire', 'wire'], solution: ['battery', 'bulb', 'wire', 'wire'], hint: 'Use every part — the loop must be complete all the way round.' },
          { name: 'Add a switch', slots: 4, parts: ['battery', 'bulb', 'wire', 'switch'], solution: ['battery', 'bulb', 'wire', 'switch'], hint: 'Place everything… then tap the switch to CLOSE it!' },
          { name: 'Conductor check', slots: 4, parts: ['battery', 'bulb', 'wire', 'wire', 'spoon', 'duck'], solution: ['battery', 'bulb', 'wire', 'wire'], hint: 'Two of these parts are insulators — leave them in the box!' }
        ]
      }
    },
    {
      id: 'design-torch',
      title: 'Design a torch',
      emoji: '🔦',
      learn: [
        {
          title: 'What\'s inside a torch?',
          html: '<p>A torch is really just a clever circuit in a case! The main parts are:</p>' +
                '<ul><li><b>Case</b> — holds everything together (and looks cool)</li>' +
                '<li><b>Battery</b> — the power source</li>' +
                '<li><b>Bulb or LED</b> — makes the light</li>' +
                '<li><b>Switch</b> — when you press it, it <b>completes the circuit</b> and the light comes on</li>' +
                '<li><b>Reflector</b> — a shiny cone behind the bulb that bounces the light forward into a strong beam</li></ul>'
        },
        {
          title: 'Thinking like a designer',
          html: '<p>Before designing, ask <b>design questions</b>:</p>' +
                '<ul><li><b>Who is it for?</b> A camper? A child reading in bed? A deep-sea diver?</li>' +
                '<li><b>Does it need to be waterproof?</b> Yes, if it\'s for rainy camping or swimming!</li>' +
                '<li><b>Small or big? Bright or gentle?</b> A pocket torch for walks; a soft night-light for bedtime.</li></ul>' +
                '<p>When the torch is made, <b>evaluate</b> it: Does it light up? Is it easy to switch on? Does it suit the person it was designed for? What would you improve?</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What does the SWITCH on a torch actually do?', options: ['Completes the circuit so electricity can flow to the bulb', 'Makes the battery heavier', 'Changes the torch\'s colour', 'Charges the battery'], answer: 0, explain: 'Pressing the switch closes the gap, completes the loop, and the light shines.' },
        { type: 'choice', q: 'What is the job of the REFLECTOR?', options: ['To bounce the light forward into a strong beam', 'To store spare batteries', 'To make the torch waterproof', 'To turn the torch off'], answer: 0, explain: 'The shiny reflector bounces light forward so the beam is brighter.' },
        { type: 'choice', q: 'Which part of the torch makes the light?', options: ['The bulb or LED', 'The case', 'The switch', 'The reflector'], answer: 0, explain: 'The bulb or LED glows when electricity flows through it.' },
        { type: 'choice', q: 'What is the FIRST question a good designer asks?', options: ['Who is the torch for?', 'What colour glitter to use?', 'How much will I get paid?', 'Can it also make toast?'], answer: 0, explain: 'Knowing the user helps you choose the size, brightness and features.' },
        { type: 'choice', q: 'A torch is being designed for a kayaker who paddles in the rain. Which feature matters MOST?', options: ['It must be waterproof', 'It must smell of strawberries', 'It must be made of paper', 'It must play music'], answer: 0, explain: 'On the water, keeping the circuit dry is the top job!' },
        { type: 'choice', q: 'Why should a bedtime reading torch NOT be super bright?', options: ['A gentle light suits reading at night without dazzling you', 'Bright torches are always broken', 'Bulbs only work in daylight', 'Bright light makes books heavier'], answer: 0, explain: 'Designers match brightness to the user — gentle light for bedtime reading.' },
        { type: 'match', q: 'Match each torch part to its job:', pairs: [
          ['Case', 'Holds all the parts together'],
          ['Battery', 'Powers the circuit'],
          ['Reflector', 'Bounces light into a beam'],
          ['Switch', 'Turns the torch on and off'],
          ['Bulb or LED', 'Makes the light']
        ] },
        { type: 'sort', q: 'Sort these design ideas: pocket torch for a walker, or night-light for a little brother?', buckets: ['Pocket torch 🥾', 'Night-light 🌙'], items: [
          { text: 'Small enough to fit in a pocket', bucket: 0 },
          { text: 'Soft, gentle glow', bucket: 1 },
          { text: 'Bright beam to light the path', bucket: 0 },
          { text: 'Friendly animal shape', bucket: 1 },
          { text: 'Tough case for outdoors', bucket: 0 },
          { text: 'Stays on safely all night', bucket: 1 }
        ] },
        { type: 'choice', q: 'When you EVALUATE your finished torch, which question helps most?', options: ['Does it work well for the person I designed it for?', 'Is it the same as everyone else\'s?', 'Did I finish first?', 'Is it the most expensive?'], answer: 0, explain: 'Great designers test their product against the user\'s needs — and plan improvements.' }
      ]
    },
    {
      id: 'write-torch',
      title: 'Writing quest: design my own torch',
      emoji: '💡',
      write: {
        prompt: 'You are the chief torch designer! <b>Design and describe your very own torch.</b> Who is it for? What does it look like? Which parts does it have (battery, bulb or LED, switch)? Give it ONE amazing special feature — waterproof? glow-in-the-dark case? dragon-shaped? Then say one thing you would test to check it works. You could draw it too!',
        minWords: 30,
        checklist: [
          'I said <b>who the torch is for</b>',
          'I described <b>what it looks like</b>',
          'I named its <b>parts</b> (battery, bulb or LED, switch)',
          'I gave it <b>one special feature</b>',
          'I said <b>one thing I would test or evaluate</b>'
        ]
      },
      learn: [
        { title: 'Designer\'s briefing', html: '<p>Remember: a torch needs a <b>case</b>, a <b>battery</b>, a <b>bulb or LED</b>, a <b>switch</b> to complete the circuit, and a shiny <b>reflector</b> for a strong beam. Think about your user first — a torch for a camper is very different from a night-light for a baby!</p>' }
      ]
    }
  ]
});
