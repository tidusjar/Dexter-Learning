/* Spanish — Year 4 Summer 2: ice-cream Spanish! Flavours, numbers, euros and ordering at the heladería */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'spanish',
  name: 'Spanish',
  icon: '🇪🇸',
  color: '#f4a261',
  tagline: 'Learn to order ice cream in Spanish — flavours, euros and friendly phrases!',
  lessons: [
    {
      id: 'flavours-1',
      title: 'Ice cream flavours 1',
      emoji: '🍦',
      vocab: [
        { es: 'el helado', en: 'ice cream' }, { es: 'chocolate', en: 'chocolate' },
        { es: 'fresa', en: 'strawberry' }, { es: 'vainilla', en: 'vanilla' },
        { es: 'limón', en: 'lemon' }, { es: 'menta', en: 'mint' },
        { es: 'el helado de fresa', en: 'strawberry ice cream' }
      ],
      learn: [
        {
          title: 'El helado — ice cream!',
          html: '<p>In Spanish, ice cream is <b>el helado</b> (say it: <i>el eh-LAH-doh</i>). To say a flavour, use <b>de</b> (meaning "of"): <b>el helado de chocolate</b> = chocolate ice cream — literally "the ice cream OF chocolate".</p>' +
                '<p>Your first five flavours:</p>' +
                '<table><tr><th>Spanish</th><th>English</th></tr>' +
                '<tr><td><b>chocolate</b></td><td>chocolate</td></tr>' +
                '<tr><td><b>fresa</b></td><td>strawberry</td></tr>' +
                '<tr><td><b>vainilla</b></td><td>vanilla</td></tr>' +
                '<tr><td><b>limón</b></td><td>lemon</td></tr>' +
                '<tr><td><b>menta</b></td><td>mint</td></tr></table>' +
                '<p>So a strawberry ice cream is <b>el helado de fresa</b>. ¡Delicioso, Dexter!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What does <b>el helado</b> mean?', options: ['Ice cream', 'The beach', 'Hello', 'A spoon'], answer: 0, explain: 'El helado = ice cream. The most important word this term!' },
        { type: 'choice', q: 'What flavour is <b>el helado de fresa</b>?', options: ['Strawberry', 'Chocolate', 'Mint', 'Lemon'], answer: 0, explain: 'Fresa means strawberry.' },
        { type: 'choice', q: 'What does <b>limón</b> mean?', options: ['Lemon', 'Lime cordial', 'Melon', 'Mint'], answer: 0, explain: 'Limón = lemon — it even sounds similar!' },
        { type: 'choice', q: 'How would you say "mint ice cream" in Spanish?', options: ['El helado de menta', 'El helado de fresa', 'El menta de helado', 'La menta fría'], answer: 0, explain: 'The pattern is "el helado de ___": el helado de menta.' },
        { type: 'type', q: 'Type the Spanish word for <b>strawberry</b>.', answer: ['fresa'], explain: 'Fresa! As in el helado de fresa.', hint: 'It starts with fr…' },
        { type: 'type', q: 'Type the Spanish word for <b>lemon</b>.', answer: ['limón', 'limon'], explain: 'Limón — with a little accent on the o.', hint: 'It sounds a lot like the English word!' },
        { type: 'match', q: 'Match the Spanish flavour to the English:', pairs: [
          ['fresa', 'strawberry'], ['vainilla', 'vanilla'], ['menta', 'mint'], ['limón', 'lemon'], ['chocolate', 'chocolate']
        ] },
        { type: 'choice', q: 'Which little word means "of" in "el helado <b>de</b> chocolate"?', options: ['de', 'el', 'la', 'un'], answer: 0, explain: '"De" means "of" — the ice cream OF chocolate.' },
        { type: 'type', q: 'Say "vanilla ice cream" in Spanish: el helado de ______', answer: ['vainilla', 'vanilla'], explain: 'El helado de vainilla — watch the tricky Spanish spelling: v-a-i-n-i-l-l-a.', hint: 'In Spanish there\'s an extra i: vai…' }
      ]
    },
    {
      id: 'flavours-2',
      title: 'Ice cream flavours 2',
      emoji: '🍨',
      vocab: [
        { es: 'naranja', en: 'orange' }, { es: 'plátano', en: 'banana' },
        { es: 'coco', en: 'coconut' }, { es: 'café', en: 'coffee' },
        { es: 'caramelo', en: 'caramel' }, { es: 'el helado de coco', en: 'coconut ice cream' }
      ],
      learn: [
        {
          title: 'Five more tasty flavours',
          html: '<p>Remember the pattern: <b>el helado de ___</b> (the ice cream of ___). Here are five more flavours for your menu:</p>' +
                '<table><tr><th>Spanish</th><th>English</th></tr>' +
                '<tr><td><b>naranja</b></td><td>orange</td></tr>' +
                '<tr><td><b>plátano</b></td><td>banana</td></tr>' +
                '<tr><td><b>coco</b></td><td>coconut</td></tr>' +
                '<tr><td><b>café</b></td><td>coffee</td></tr>' +
                '<tr><td><b>caramelo</b></td><td>caramel</td></tr></table>' +
                '<p>So banana ice cream is <b>el helado de plátano</b>, and coconut is <b>el helado de coco</b>. Now you know TEN flavours, Dexter — that\'s a whole ice cream shop!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What does <b>naranja</b> mean?', options: ['Orange', 'Banana', 'Coconut', 'Caramel'], answer: 0, explain: 'Naranja = orange (the fruit AND the colour!).' },
        { type: 'choice', q: 'What flavour is <b>el helado de plátano</b>?', options: ['Banana', 'Coffee', 'Coconut', 'Plum'], answer: 0, explain: 'Plátano means banana.' },
        { type: 'choice', q: 'What does <b>coco</b> mean?', options: ['Coconut', 'Cocoa', 'Coffee', 'Cola'], answer: 0, explain: 'Coco = coconut. Careful — it looks like cocoa but isn\'t!' },
        { type: 'choice', q: 'How would you say "coffee ice cream"?', options: ['El helado de café', 'El helado de coco', 'El café de helado', 'El helado de caramelo'], answer: 0, explain: 'Same pattern as always: el helado de café.' },
        { type: 'type', q: 'Type the Spanish word for <b>caramel</b>.', answer: ['caramelo'], explain: 'Caramelo — just add an o!', hint: 'It\'s the English word with one extra letter at the end.' },
        { type: 'type', q: 'Type the Spanish word for <b>orange</b>.', answer: ['naranja'], explain: 'Naranja!', hint: 'It starts with na…' },
        { type: 'match', q: 'Match the Spanish flavour to the English:', pairs: [
          ['naranja', 'orange'], ['plátano', 'banana'], ['coco', 'coconut'], ['café', 'coffee'], ['caramelo', 'caramel']
        ] },
        { type: 'choice', q: 'A customer asks for <b>el helado de caramelo</b>. What do you scoop?', options: ['Caramel', 'Coconut', 'Coffee', 'Carrot'], answer: 0, explain: 'Caramelo = caramel. Sticky and sweet!' },
        { type: 'type', q: 'Finish the pattern: banana ice cream = el helado ___ plátano', answer: ['de'], explain: '"De" (of) joins helado to the flavour every time.', hint: 'The tiny word that means "of".' },
        { type: 'sort', q: 'Sort the flavours: did you learn them in lesson 1 or this lesson?', buckets: ['Lesson 1 🍦', 'Lesson 2 🍨'], items: [
          { text: 'fresa (strawberry)', bucket: 0 }, { text: 'naranja (orange)', bucket: 1 },
          { text: 'menta (mint)', bucket: 0 }, { text: 'coco (coconut)', bucket: 1 },
          { text: 'limón (lemon)', bucket: 0 }, { text: 'café (coffee)', bucket: 1 }
        ] }
      ]
    },
    {
      id: 'numbers-euros',
      title: 'Numbers and euros',
      emoji: '💶',
      vocab: [
        { es: 'uno', en: 'one' }, { es: 'dos', en: 'two' }, { es: 'tres', en: 'three' },
        { es: 'cuatro', en: 'four' }, { es: 'cinco', en: 'five' }, { es: 'seis', en: 'six' },
        { es: 'siete', en: 'seven' }, { es: 'ocho', en: 'eight' }, { es: 'nueve', en: 'nine' },
        { es: 'diez', en: 'ten' }, { es: '¿Cuánto cuesta?', en: 'How much does it cost?' },
        { es: 'dos euros', en: 'two euros' }
      ],
      learn: [
        {
          title: 'Counting to 10 in Spanish',
          html: '<table><tr><th>Number</th><th>Spanish</th></tr>' +
                '<tr><td>1</td><td><b>uno</b></td></tr><tr><td>2</td><td><b>dos</b></td></tr>' +
                '<tr><td>3</td><td><b>tres</b></td></tr><tr><td>4</td><td><b>cuatro</b></td></tr>' +
                '<tr><td>5</td><td><b>cinco</b></td></tr><tr><td>6</td><td><b>seis</b></td></tr>' +
                '<tr><td>7</td><td><b>siete</b></td></tr><tr><td>8</td><td><b>ocho</b></td></tr>' +
                '<tr><td>9</td><td><b>nueve</b></td></tr><tr><td>10</td><td><b>diez</b></td></tr></table>'
        },
        {
          title: 'How much does it cost?',
          html: '<p>In Spain, people pay with <b>euros</b> (€), not pounds. To ask the price, say: <b>¿Cuánto cuesta?</b> = <i>How much does it cost?</i></p>' +
                '<p>The answer is just a number + euros: <b>dos euros</b> = 2 euros, <b>cinco euros</b> = 5 euros, <b>diez euros</b> = 10 euros. Easy as uno, dos, tres!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What does <b>¿Cuánto cuesta?</b> mean?', options: ['How much does it cost?', 'What time is it?', 'Where is the beach?', 'Do you like ice cream?'], answer: 0, explain: 'You\'ll need this question in every Spanish shop!' },
        { type: 'choice', q: 'What number is <b>cinco</b>?', options: ['5', '6', '4', '15'], answer: 0, explain: 'Cinco = 5.' },
        { type: 'choice', q: 'What number is <b>ocho</b>?', options: ['8', '9', '7', '18'], answer: 0, explain: 'Ocho = 8.' },
        { type: 'choice', q: 'An ice cream costs <b>dos euros</b>. How much is that?', options: ['2 euros', '10 euros', '12 euros', '3 euros'], answer: 0, explain: 'Dos = 2, so dos euros = 2 euros.' },
        { type: 'type', q: 'Type the Spanish for the number <b>3</b>.', answer: ['tres'], explain: 'Tres = 3. Uno, dos, TRES!', hint: 'Uno, dos, …' },
        { type: 'type', q: 'Type the Spanish for the number <b>10</b>.', answer: ['diez'], explain: 'Diez = 10.', hint: 'It starts with d…' },
        { type: 'type', q: 'Type the Spanish for the number <b>7</b>.', answer: ['siete'], explain: 'Siete = 7.', hint: 'Seis, …, ocho.' },
        { type: 'match', q: 'Match the Spanish number to the digit:', pairs: [
          ['uno', '1'], ['cuatro', '4'], ['seis', '6'], ['nueve', '9'], ['diez', '10']
        ] },
        { type: 'order', q: 'Put these Spanish numbers in counting order, smallest first:', items: ['uno', 'dos', 'cuatro', 'cinco', 'ocho', 'diez'], explain: '1, 2, 4, 5, 8, 10 — uno, dos, cuatro, cinco, ocho, diez.' },
        { type: 'choice', q: 'How would the shopkeeper say an ice cream costs <b>4 euros</b>?', options: ['Cuatro euros', 'Catorce euros', 'Cuarenta euros', 'Cinco euros'], answer: 0, explain: 'Cuatro = 4, so "cuatro euros".' }
      ]
    },
    {
      id: 'buying-icecream',
      title: 'At the ice cream shop',
      emoji: '🏪',
      vocab: [
        { es: '¡Hola!', en: 'Hello!' }, { es: '¡Buenos días!', en: 'Good morning!' },
        { es: 'Quisiera un helado, por favor', en: 'I would like an ice cream, please' },
        { es: 'un cucurucho', en: 'a cone' }, { es: 'una tarrina', en: 'a tub' },
        { es: 'Aquí tiene', en: 'Here you are' }, { es: 'gracias', en: 'thank you' },
        { es: 'de nada', en: "you\'re welcome" }, { es: '¡Adiós!', en: 'Goodbye!' }
      ],
      learn: [
        {
          title: 'Polite shop phrases',
          html: '<p>Time to order like a real Spanish speaker! Here are the magic phrases:</p>' +
                '<table><tr><th>Spanish</th><th>English</th></tr>' +
                '<tr><td><b>Hola</b> / <b>Buenos días</b></td><td>Hello / Good morning</td></tr>' +
                '<tr><td><b>Quisiera un helado de fresa, por favor</b></td><td>I would like a strawberry ice cream, please</td></tr>' +
                '<tr><td><b>por favor</b></td><td>please</td></tr>' +
                '<tr><td><b>gracias</b></td><td>thank you</td></tr>' +
                '<tr><td><b>de nada</b></td><td>you\'re welcome</td></tr>' +
                '<tr><td><b>Aquí tiene</b></td><td>here you are</td></tr>' +
                '<tr><td><b>adiós</b></td><td>goodbye</td></tr></table>'
        },
        {
          title: 'Cone or tub?',
          html: '<p>The shopkeeper might ask how you want your helado:</p>' +
                '<ul><li><b>un cucurucho</b> = a cone 🍦 (fun to say: <i>koo-koo-ROO-choh</i>!)</li>' +
                '<li><b>una tarrina</b> = a tub 🥡</li></ul>' +
                '<p>A whole conversation goes: greet → order with <b>Quisiera…</b> → ask <b>¿Cuánto cuesta?</b> → pay → say <b>gracias</b> → wave <b>adiós</b>!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What does <b>Quisiera un helado, por favor</b> mean?', options: ['I would like an ice cream, please', 'I don\'t like ice cream', 'Where is the ice cream shop?', 'This ice cream is cold'], answer: 0, explain: '"Quisiera" is the polite way to say "I would like".' },
        { type: 'choice', q: 'What is <b>un cucurucho</b>?', options: ['A cone', 'A tub', 'A spoon', 'A cucumber'], answer: 0, explain: 'Un cucurucho = a cone. One of the best words in Spanish!' },
        { type: 'choice', q: 'What is <b>una tarrina</b>?', options: ['A tub', 'A cone', 'A flavour', 'A napkin'], answer: 0, explain: 'Una tarrina = a tub.' },
        { type: 'choice', q: 'You say "gracias" and the shopkeeper replies <b>de nada</b>. What did they say?', options: ['You\'re welcome', 'No ice cream left', 'Nothing for you', 'Come back tomorrow'], answer: 0, explain: '"De nada" is the friendly reply to "gracias" — you\'re welcome!' },
        { type: 'choice', q: 'The shopkeeper hands over your cone and says <b>Aquí tiene</b>. What does it mean?', options: ['Here you are', 'That\'s expensive', 'It\'s melting', 'Hold tight'], answer: 0, explain: '"Aquí tiene" = here you are — said when handing something over.' },
        { type: 'type', q: 'Type the Spanish for <b>thank you</b>.', answer: ['gracias'], explain: 'Gracias! Always be polite at the heladería.', hint: 'It starts with gr…' },
        { type: 'type', q: 'Type the Spanish for <b>please</b> (two words).', answer: ['por favor'], explain: 'Por favor — pop it at the end of your order.', hint: 'Quisiera un helado, ___ ___.' },
        { type: 'match', q: 'Match the Spanish phrase to its meaning:', pairs: [
          ['Buenos días', 'Good morning'],
          ['por favor', 'please'],
          ['de nada', 'you\'re welcome'],
          ['adiós', 'goodbye'],
          ['Aquí tiene', 'here you are']
        ] },
        { type: 'order', q: 'Put this ice-cream-shop conversation in the right order:', items: [
          'Hola, buenos días.', 'Quisiera un helado de fresa, por favor.', '¿Cuánto cuesta?', 'Dos euros. Aquí tiene.', 'Gracias. ¡Adiós!'
        ], explain: 'Greet → order politely → ask the price → pay and receive → thank and say goodbye.' },
        { type: 'choice', q: 'How would you order a chocolate ice cream in a CONE?', options: ['Quisiera un cucurucho de chocolate, por favor', 'Quisiera una tarrina, gracias', 'Adiós, chocolate', 'De nada, un helado'], answer: 0, explain: 'Cucurucho = cone, and "Quisiera… por favor" makes it polite.' }
      ]
    },
    {
      id: 'heladeria-roleplay',
      title: 'Role-play: at the ice cream shop! 🍦',
      emoji: '🎭',
      learn: [
        {
          title: 'Your turn at la heladería!',
          html: '<p>You\'re in Spain, standing at the ice cream shop counter — and the shopkeeper only speaks Spanish! Have the WHOLE conversation: greet them, order your ice cream, pay and say goodbye.</p>' +
                '<p>Pick the right reply each time. If you\'re stuck, the English translation under the shopkeeper\'s words will help. ¡Buena suerte! (Good luck!)</p>'
        }
      ],
      roleplay: {
        steps: [
          { npc: '¡Buenos días!', npcEn: 'Good morning!', options: ['¡Buenos días!', '¡Adiós!', 'De nada'], answer: 0, explain: '"Buenos días" means good morning — greet them back! "Adiós" is goodbye.' },
          { npc: '¿Qué quieres?', npcEn: 'What would you like?', options: ['Quisiera un helado, por favor', 'Me llamo Dexter', 'No hablo'], answer: 0, explain: '"Quisiera un helado, por favor" = I would like an ice cream, please.' },
          { npc: '¿Un cucurucho o una tarrina?', npcEn: 'A cone or a tub?', options: ['Un cucurucho, por favor', 'Una mesa, por favor', 'Un zapato, por favor'], answer: 0, explain: 'Cucurucho = cone! A "mesa" is a table and a "zapato" is a shoe — tasty!' },
          { npc: '¿De qué sabor?', npcEn: 'Which flavour?', options: ['De fresa, por favor', 'De lunes, por favor', 'De fútbol, por favor'], answer: 0, explain: '"De fresa" = strawberry. "Lunes" is Monday and "fútbol" is football!' },
          { npc: 'Aquí tiene. Son dos euros.', npcEn: 'Here you are. That\'s two euros.', options: ['Aquí tiene dos euros', '¡Feliz cumpleaños!', 'Son tres euros'], answer: 0, explain: '"Aquí tiene" = here you are — hand over your two euros!' },
          { npc: '¡Gracias!', npcEn: 'Thank you!', options: ['De nada', 'Dos euros', 'Un helado grande'], answer: 0, explain: '"De nada" = you\'re welcome.' },
          { npc: '¡Adiós!', npcEn: 'Goodbye!', options: ['¡Adiós!', '¡Hola!', 'Por favor'], answer: 0, explain: '"Adiós" = goodbye — wave as you leave with your ice cream! 🍓' }
        ]
      }
    },
    {
      id: 'icecream-challenge',
      title: 'The ice cream final challenge',
      emoji: '🏆',
      vocab: [
        { es: 'el helado de chocolate', en: 'chocolate ice cream' },
        { es: 'el helado de limón', en: 'lemon ice cream' },
        { es: 'Quisiera un cucurucho de menta, por favor', en: 'I would like a mint cone, please' },
        { es: '¿Cuánto cuesta?', en: 'How much does it cost?' }
      ],
      learn: [
        {
          title: 'Everything you know!',
          html: '<p>This is it, Dexter — the GRAND FINAL of the heladería! Quick reminders before you start:</p>' +
                '<ul><li><b>Flavours:</b> fresa (strawberry), vainilla (vanilla), limón (lemon), menta (mint), naranja (orange), plátano (banana), coco (coconut), café (coffee), caramelo (caramel), chocolate</li>' +
                '<li><b>Numbers:</b> uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez</li>' +
                '<li><b>Phrases:</b> Hola / Buenos días, Quisiera… por favor, ¿Cuánto cuesta?, gracias, de nada, Aquí tiene, adiós — and cucurucho (cone) vs tarrina (tub)!</li></ul>' +
                '<p>¡Buena suerte! (Good luck!)</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'A customer orders <b>el helado de limón</b>. Which flavour do they want?', options: ['Lemon', 'Lime jelly', 'Mint', 'Banana'], answer: 0, explain: 'Limón = lemon.' },
        { type: 'choice', q: 'What does <b>¿Cuánto cuesta?</b> mean?', options: ['How much does it cost?', 'Which flavour is best?', 'Can I have a cone?', 'Is it cold?'], answer: 0, explain: 'Your go-to question for prices.' },
        { type: 'type', q: 'Type the Spanish word for <b>coconut</b>.', answer: ['coco'], explain: 'Coco — short and sweet!', hint: 'Four letters, two the same.' },
        { type: 'choice', q: 'The shopkeeper says your helado costs <b>seis euros</b>. How much is that?', options: ['6 euros', '7 euros', '16 euros', '60 euros'], answer: 0, explain: 'Seis = 6.' },
        { type: 'type', q: 'How do you say <b>goodbye</b> in Spanish?', answer: ['adiós', 'adios'], explain: 'Adiós! See you at the heladería tomorrow.', hint: 'It starts with a…' },
        { type: 'match', q: 'Match the Spanish to the English:', pairs: [
          ['plátano', 'banana'], ['menta', 'mint'], ['nueve', '9'], ['un cucurucho', 'a cone'], ['gracias', 'thank you']
        ] },
        { type: 'choice', q: 'Which is the POLITE way to order a vanilla ice cream?', options: ['Quisiera un helado de vainilla, por favor', 'Helado. Now.', 'Vainilla adiós', 'De nada, vainilla'], answer: 0, explain: '"Quisiera" (I would like) + "por favor" (please) = perfectly polite!' },
        { type: 'sort', q: 'Sort these words: flavour or number?', buckets: ['Flavour 🍦', 'Number 🔢'], items: [
          { text: 'caramelo', bucket: 0 }, { text: 'siete', bucket: 1 }, { text: 'naranja', bucket: 0 },
          { text: 'tres', bucket: 1 }, { text: 'café', bucket: 0 }, { text: 'diez', bucket: 1 }
        ] },
        { type: 'order', q: 'Put the conversation at the heladería in order:', items: [
          'Buenos días.', 'Quisiera un cucurucho de menta, por favor.', '¿Cuánto cuesta?', 'Cuatro euros. Aquí tiene.', 'Gracias.', 'De nada. ¡Adiós!'
        ], explain: 'Greeting → polite order → price question → handing over → thanks → you\'re welcome and goodbye.' },
        { type: 'choice', q: 'CHAMPION QUESTION: "Quisiera una tarrina de fresa, por favor. ¿Cuánto cuesta?" — what is the customer asking for?', options: ['A tub of strawberry ice cream, and the price', 'A cone of chocolate, for free', 'Directions to the beach', 'A glass of strawberry milk'], answer: 0, explain: 'Tarrina = tub, fresa = strawberry, ¿Cuánto cuesta? = how much? You\'ve cracked it, Dexter — ¡fantástico!' }
      ]
    }
  ]
});
