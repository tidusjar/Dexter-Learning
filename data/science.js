/* Science — Year 4 Summer 2: Living Things and their Habitats */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'science',
  name: 'Science',
  icon: '🔬',
  color: '#2a9d8f',
  tagline: 'Living things and their habitats — sort, classify and explore!',
  lessons: [
    {
      id: 'what-is-classification',
      title: 'What is classification?',
      emoji: '🗂️',
      learn: [
        {
          title: 'Sorting the living world',
          html: '<p><b>Classification</b> means sorting living things into groups based on what they have in common. Scientists do this so the millions of living things on Earth are easier to study and talk about.</p>' +
                '<p>How do we know something is <b>alive</b>? All living things do these jobs:</p>' +
                '<ul><li><b>Move</b> in some way (even plants turn towards the light)</li>' +
                '<li><b>Grow</b> bigger</li>' +
                '<li><b>Reproduce</b> — make more of their own kind</li>' +
                '<li><b>Need food</b> for energy</li></ul>' +
                '<p>A rock, a toy or a cloud is <b>non-living</b> — it cannot do these things. Careful, Dexter: something can be non-living but never have been alive (a stone), while a fallen log was once alive!</p>'
        },
        {
          title: 'Plants, animals, vertebrates and invertebrates',
          html: '<p>The two biggest groups of living things are <b>plants</b> and <b>animals</b>. Plants make their own food from sunlight and stay rooted in one place. Animals cannot make their own food, so they eat, and most can move about.</p>' +
                '<p>Animals split into two huge groups:</p>' +
                '<ul><li><b>Vertebrates</b> — animals WITH a backbone (a spine inside their body)</li>' +
                '<li><b>Invertebrates</b> — animals WITHOUT a backbone</li></ul>' +
                '<p>You have a backbone, so you are a vertebrate. A worm or a spider has no backbone, so it is an invertebrate.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What does <b>classification</b> mean?', options: ['Sorting living things into groups by what they share', 'Drawing pictures of animals', 'Counting how many legs an animal has', 'Giving animals names'], answer: 0, explain: 'Classification is sorting living things into groups with things in common.' },
        { type: 'choice', q: 'Which of these is a sign that something is ALIVE?', options: ['It can grow and reproduce', 'It is made of metal', 'It is heavy', 'It is a nice colour'], answer: 0, explain: 'Living things move, grow, reproduce and need food.' },
        { type: 'choice', q: 'Which of these is <b>non-living</b>?', options: ['A rock', 'A daisy', 'A frog', 'An oak tree'], answer: 0, explain: 'A rock cannot move, grow, reproduce or feed — it is non-living.' },
        { type: 'choice', q: 'What is the main difference between a plant and an animal?', options: ['Plants make their own food; animals must eat', 'Plants are always green', 'Animals are always bigger', 'Plants cannot die'], answer: 0, explain: 'Plants make food from sunlight; animals cannot, so they eat.' },
        { type: 'type', q: 'An animal WITH a backbone is called a... (one word)', answer: ['vertebrate', 'vertebrates'], explain: 'Vertebrates have a backbone (spine) inside them.' },
        { type: 'type', q: 'An animal WITHOUT a backbone is called an... (one word)', answer: ['invertebrate', 'invertebrates'], explain: 'Invertebrates, like worms and insects, have no backbone.' },
        { type: 'choice', q: 'Is a human a vertebrate or an invertebrate?', options: ['Vertebrate — we have a backbone', 'Invertebrate — we have no backbone', 'Neither', 'Both'], answer: 0, explain: 'You can feel the backbone down the middle of your back — you are a vertebrate!' },
        { type: 'sort', q: 'Sort these into living or non-living:', buckets: ['Living', 'Non-living'], items: [
          { text: 'A buttercup', bucket: 0 }, { text: 'A pebble', bucket: 1 }, { text: 'A robin', bucket: 0 },
          { text: 'A bicycle', bucket: 1 }, { text: 'An oak tree', bucket: 0 }, { text: 'A plastic toy', bucket: 1 }
        ], explain: 'Living things grow, move, reproduce and need food.' },
        { type: 'sort', q: 'Sort these animals: do they have a backbone or not?', buckets: ['Vertebrate (backbone)', 'Invertebrate (no backbone)'], items: [
          { text: 'Dog', bucket: 0 }, { text: 'Snail', bucket: 1 }, { text: 'Eagle', bucket: 0 },
          { text: 'Spider', bucket: 1 }, { text: 'Salmon', bucket: 0 }, { text: 'Earthworm', bucket: 1 }
        ], explain: 'Animals like dogs, birds and fish have backbones; snails, spiders and worms do not.' },
        { type: 'choice', q: 'Why do scientists classify living things into groups?', options: ['So the millions of species are easier to study and talk about', 'So animals know where to live', 'To count how many legs each animal has', 'To make animals easier to catch'], answer: 0, explain: 'Classification helps scientists organise and discuss the huge variety of life on Earth.' },
        { type: 'choice', q: 'A fallen log was once alive. A stone was never alive. What is the difference between these two non-living things?', options: ['The log was once alive; the stone was never alive', 'There is no difference — both are non-living', 'The stone was once alive; the log was not', 'Both were alive a long time ago'], answer: 0, explain: 'Good thinking, Dexter! Some non-living things were once alive (like wood), while others never were (like rock).' },
        { type: 'type', q: 'Plants make their own food from ______. (one word)', answer: ['sunlight', 'light', 'the sun'], explain: 'Plants use sunlight, water and air to make food — a clever trick called photosynthesis!' },
        { type: 'choice', q: 'Which TWO things are true of ALL living things?', options: ['They grow and they reproduce', 'They all have legs and eyes', 'They all live in water', 'They are all the same colour'], answer: 0, explain: 'All living things grow and reproduce (make more of their own kind).' },
        { type: 'match', q: 'Match each life process to what it means:', pairs: [
          ['Move', 'Change position or turn towards light'],
          ['Grow', 'Get bigger over time'],
          ['Reproduce', 'Make more of their own kind'],
          ['Feed', 'Take in energy to survive']
        ] },
        { type: 'sort', q: 'True or false about vertebrates and invertebrates?', buckets: ['True', 'False'], items: [
          { text: 'A worm is an invertebrate', bucket: 0 },
          { text: 'A human is an invertebrate', bucket: 1 },
          { text: 'Vertebrates have a backbone', bucket: 0 },
          { text: 'All animals are vertebrates', bucket: 1 },
          { text: 'A spider has no backbone', bucket: 0 }
        ], explain: 'Humans and fish are vertebrates; worms and spiders are invertebrates.' },
        { type: 'choice', q: 'Can a plant move?', options: ['Yes — plants can slowly turn towards light, even though they stay rooted', 'No — plants cannot move at all', 'Only if you water them', 'Only at night'], answer: 0, explain: 'Movement in plants can be very slow, but they do move — turning towards sunlight is a great example!' },
        { type: 'order', q: 'A scientist is sorting animals into groups. Put these steps in a sensible order:', items: [
          'Observe the animal carefully',
          'Ask: does it have a backbone?',
          'Place it in vertebrate or invertebrate group',
          'Ask more questions to narrow it down further'
        ], explain: 'Good classification starts with careful observation, then asks yes/no questions to sort into smaller and smaller groups.' },
        { type: 'type', q: 'What word means sorting living things into groups based on shared features? (starts with C)', answer: ['classification'], explain: 'Classification — the very foundation of biology!', hint: 'C _ _ _ _ _ _ _ _ _ _ _ _' }
      ]
    },
    {
      id: 'animal-groups',
      title: 'The five vertebrate groups',
      emoji: '🐾',
      learn: [
        {
          title: 'Five groups of backboned animals',
          html: '<p>All vertebrates fit into <b>five groups</b>. Each group has its own special features:</p>' +
                '<table><tr><th>Group</th><th>Key features</th><th>Example</th></tr>' +
                '<tr><td><b>Fish</b></td><td>Live in water, breathe with gills, have scales and fins</td><td>Salmon, shark</td></tr>' +
                '<tr><td><b>Amphibians</b></td><td>Moist skin, live in water AND on land, lay eggs in water</td><td>Frog, newt</td></tr>' +
                '<tr><td><b>Reptiles</b></td><td>Dry scaly skin, lay eggs on land</td><td>Snake, lizard, crocodile</td></tr>' +
                '<tr><td><b>Birds</b></td><td>Feathers, wings, beaks, lay eggs</td><td>Owl, penguin, robin</td></tr>' +
                '<tr><td><b>Mammals</b></td><td>Fur or hair, feed babies milk, usually born live</td><td>Dog, whale, human</td></tr></table>'
        },
        {
          title: 'Tricky ones to remember',
          html: '<p>Some animals try to trick you, Dexter!</p>' +
                '<ul><li>A <b>whale</b> and a <b>dolphin</b> live in the sea but are <b>mammals</b> — they breathe air and feed their babies milk.</li>' +
                '<li>A <b>penguin</b> cannot fly but is still a <b>bird</b> — it has feathers and a beak.</li>' +
                '<li>A <b>bat</b> can fly but is a <b>mammal</b> — it has fur and feeds its babies milk.</li></ul>'
        }
      ],
      questions: [
        { type: 'choice', q: 'Which group breathes using <b>gills</b> and has fins and scales?', options: ['Fish', 'Birds', 'Mammals', 'Reptiles'], answer: 0, explain: 'Fish use gills to breathe in water and have fins to swim.' },
        { type: 'choice', q: 'Which animals have <b>feathers</b>, wings and a beak?', options: ['Birds', 'Reptiles', 'Amphibians', 'Fish'], answer: 0, explain: 'Only birds have feathers.' },
        { type: 'choice', q: 'Which group has fur or hair and feeds its babies <b>milk</b>?', options: ['Mammals', 'Reptiles', 'Birds', 'Fish'], answer: 0, explain: 'Mammals feed their young milk and have fur or hair.' },
        { type: 'choice', q: 'A frog lives in water and on land and has moist skin. It is a...', options: ['Amphibian', 'Reptile', 'Fish', 'Mammal'], answer: 0, explain: 'Amphibians like frogs and newts live both in water and on land.' },
        { type: 'choice', q: 'A snake has dry, scaly skin and lays eggs on land. It is a...', options: ['Reptile', 'Amphibian', 'Fish', 'Bird'], answer: 0, explain: 'Reptiles such as snakes and lizards have dry scaly skin.' },
        { type: 'choice', q: 'A whale lives in the sea but breathes air and feeds its babies milk. It is a...', options: ['Mammal', 'Fish', 'Reptile', 'Amphibian'], answer: 0, explain: 'A whale is a mammal, even though it lives in water!' },
        { type: 'choice', q: 'A penguin cannot fly. Which group does it belong to?', options: ['Birds — it has feathers and a beak', 'Fish — it swims', 'Mammals — it stands up', 'Reptiles — it lives near ice'], answer: 0, explain: 'Penguins are birds because they have feathers and beaks, even though they cannot fly.' },
        { type: 'match', q: 'Match each animal to its vertebrate group:', pairs: [
          ['Shark', 'Fish'], ['Crocodile', 'Reptile'], ['Eagle', 'Bird'], ['Newt', 'Amphibian'], ['Tiger', 'Mammal']
        ] },
        { type: 'sort', q: 'Sort these animals into the right group:', buckets: ['Mammal', 'Bird', 'Reptile'], items: [
          { text: 'Bat', bucket: 0, why: 'A bat has fur and feeds milk, so it is a mammal.' },
          { text: 'Robin', bucket: 1 }, { text: 'Lizard', bucket: 2 },
          { text: 'Dolphin', bucket: 0 }, { text: 'Owl', bucket: 1 }, { text: 'Tortoise', bucket: 2 }
        ], explain: 'Fur and milk = mammal; feathers = bird; dry scales and eggs on land = reptile.' },
        { type: 'choice', q: 'What is special about how most mammals are born, compared to reptiles and birds?', options: ['Most mammals are born live (not hatched from eggs)', 'Mammals hatch from eggs like birds', 'Mammals are born underwater', 'Mammals are always born in winter'], answer: 0, explain: 'Most mammals give birth to live young — unlike reptiles and birds which hatch from eggs.' },
        { type: 'choice', q: 'A crocodile lays eggs on land and has dry, scaly skin. Which group is it in?', options: ['Reptile', 'Amphibian', 'Mammal', 'Fish'], answer: 0, explain: 'Dry scales and eggs laid on land = reptile. Crocodiles are reptiles.' },
        { type: 'choice', q: 'Which of these is true of ALL birds?', options: ['They all have feathers', 'They can all fly', 'They all live in trees', 'They all eat insects'], answer: 0, explain: 'All birds have feathers — even penguins that cannot fly!' },
        { type: 'choice', q: 'A newt lives in water and on land, and has moist skin. Which group does it belong to?', options: ['Amphibian', 'Reptile', 'Mammal', 'Fish'], answer: 0, explain: 'Newts are amphibians, just like frogs — moist skin, water AND land.' },
        { type: 'type', q: 'How many vertebrate groups are there altogether? (write the number as a word)', answer: ['five', '5'], explain: 'Fish, amphibians, reptiles, birds and mammals — that\'s five groups!' },
        { type: 'sort', q: 'Sort these animals into the correct vertebrate group:', buckets: ['Fish', 'Amphibian', 'Bird'], items: [
          { text: 'Salmon', bucket: 0 }, { text: 'Frog', bucket: 1 }, { text: 'Penguin', bucket: 2 },
          { text: 'Shark', bucket: 0 }, { text: 'Newt', bucket: 1 }, { text: 'Eagle', bucket: 2 }
        ], explain: 'Fish breathe with gills; amphibians have moist skin; birds have feathers.' },
        { type: 'match', q: 'Match each fact to the vertebrate group it describes:', pairs: [
          ['Breathe with gills, have fins and scales', 'Fish'],
          ['Moist skin, live in water AND on land', 'Amphibian'],
          ['Dry scaly skin, lay eggs on land', 'Reptile'],
          ['Have fur or hair, feed babies milk', 'Mammal']
        ] },
        { type: 'choice', q: 'Why is a bat classed as a mammal and NOT a bird?', options: ['A bat has fur and feeds its babies milk — birds have feathers', 'Bats cannot fly', 'Bats live in water', 'Bats lay eggs'], answer: 0, explain: 'Fur + milk = mammal. Wings alone don\'t make you a bird!' },
        { type: 'order', q: 'A scientist is comparing a dolphin and a shark. Put these observations in order from most to least useful for classifying them:', items: [
          'Does it breathe air or use gills?',
          'Does it feed its young milk?',
          'Does it have hair or fur?',
          'Is it big or small?'
        ], explain: 'The most useful questions are about key features of each group — breathing, milk and fur. Size tells you very little!' },
        { type: 'choice', q: 'Dexter spots an animal in a pond. It has gills as a youngster but develops lungs as an adult. Which group is it?', options: ['Amphibian', 'Fish', 'Reptile', 'Mammal'], answer: 0, explain: 'That\'s an amphibian! Frogs start life breathing with gills but grow lungs to live on land.' }
      ]
    },
    {
      id: 'invertebrates',
      title: 'Invertebrates and minibeasts',
      emoji: '🐛',
      learn: [
        {
          title: 'Animals with no backbone',
          html: '<p><b>Invertebrates</b> are animals with no backbone. Most animals on Earth are invertebrates! Here are some important groups:</p>' +
                '<table><tr><th>Group</th><th>Key features</th><th>Examples</th></tr>' +
                '<tr><td><b>Insects</b></td><td><b>6 legs</b> and <b>3 body parts</b> (head, thorax, abdomen), often wings</td><td>Ant, bee, beetle, butterfly</td></tr>' +
                '<tr><td><b>Arachnids</b></td><td><b>8 legs</b> and 2 body parts</td><td>Spider, scorpion</td></tr>' +
                '<tr><td><b>Molluscs</b></td><td>Soft body, often a shell, no legs</td><td>Snail, slug</td></tr>' +
                '<tr><td><b>Worms</b></td><td>Long, soft, no legs</td><td>Earthworm</td></tr></table>'
        },
        {
          title: 'Counting legs is the clue!',
          html: '<p>Counting legs is a brilliant way to tell minibeasts apart:</p>' +
                '<ul><li><b>6 legs</b> = an <b>insect</b> (remember: <i>insect = six</i>)</li>' +
                '<li><b>8 legs</b> = an <b>arachnid</b> (like a spider)</li>' +
                '<li><b>No legs</b> = a worm or a slug</li></ul>' +
                '<p>So a spider is NOT an insect, Dexter — it has 8 legs, so it is an arachnid!</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'How many legs does an <b>insect</b> have?', options: ['6', '8', '4', '10'], answer: 0, explain: 'Insects always have 6 legs. Insect = six!' },
        { type: 'choice', q: 'How many legs does a <b>spider</b> (arachnid) have?', options: ['8', '6', '4', '12'], answer: 0, explain: 'Spiders are arachnids and have 8 legs.' },
        { type: 'choice', q: 'How many body parts does an insect have?', options: ['3 — head, thorax and abdomen', '1', '2', '5'], answer: 0, explain: 'An insect has 3 body parts: head, thorax and abdomen.' },
        { type: 'choice', q: 'Is a spider an insect?', options: ['No — it has 8 legs, so it is an arachnid', 'Yes — all minibeasts are insects', 'Yes — it has 6 legs', 'No — it is a mollusc'], answer: 0, explain: 'A spider has 8 legs, so it is an arachnid, not an insect.' },
        { type: 'choice', q: 'A snail has a soft body and a shell. Which group is it in?', options: ['Molluscs', 'Insects', 'Arachnids', 'Worms'], answer: 0, explain: 'Snails and slugs are molluscs.' },
        { type: 'choice', q: 'What do all invertebrates have in common?', options: ['They have no backbone', 'They all have 6 legs', 'They all live in water', 'They all have shells'], answer: 0, explain: 'Invertebrate means an animal without a backbone.' },
        { type: 'type', q: 'A minibeast with 8 legs belongs to which group? (one word)', answer: ['arachnid', 'arachnids'], explain: 'Eight legs means it is an arachnid, like a spider.' },
        { type: 'match', q: 'Match each minibeast to its group:', pairs: [
          ['Bee', 'Insect'], ['Spider', 'Arachnid'], ['Slug', 'Mollusc'], ['Earthworm', 'Worm']
        ] },
        { type: 'sort', q: 'Sort these minibeasts by counting their legs:', buckets: ['Insect (6 legs)', 'Arachnid (8 legs)'], items: [
          { text: 'Ant', bucket: 0 }, { text: 'Scorpion', bucket: 1 }, { text: 'Beetle', bucket: 0 },
          { text: 'Spider', bucket: 1 }, { text: 'Butterfly', bucket: 0 }, { text: 'Ladybird', bucket: 0 }
        ], explain: '6 legs = insect; 8 legs = arachnid.' },
        { type: 'choice', q: 'What are the THREE body parts of an insect, in order from front to back?', options: ['Head, thorax, abdomen', 'Head, body, tail', 'Thorax, head, abdomen', 'Mouth, middle, end'], answer: 0, explain: 'Head (front) → thorax (middle, where legs attach) → abdomen (back).' },
        { type: 'choice', q: 'Most animals on Earth are invertebrates. True or false?', options: ['True — invertebrates are the most common animals', 'False — vertebrates are more common', 'False — only insects are common', 'True — but only in the sea'], answer: 0, explain: 'Absolutely true! Insects alone make up a huge proportion of all animal species on Earth.' },
        { type: 'choice', q: 'A scorpion has 8 legs. What group does it belong to?', options: ['Arachnid', 'Insect', 'Mollusc', 'Worm'], answer: 0, explain: 'Eight legs = arachnid. Scorpions are related to spiders.' },
        { type: 'type', q: 'A slug is a mollusc. What group does a snail belong to? (one word)', answer: ['mollusc', 'molluscs'], explain: 'Snails and slugs are both molluscs — soft bodies, often with a shell.' },
        { type: 'match', q: 'Match each fact to the invertebrate group it describes:', pairs: [
          ['6 legs, 3 body parts, often wings', 'Insect'],
          ['8 legs, 2 body parts', 'Arachnid'],
          ['Soft body, often a shell, no legs', 'Mollusc'],
          ['Long, soft, no legs at all', 'Worm']
        ] },
        { type: 'sort', q: 'Sort these minibeasts: do they have legs or no legs?', buckets: ['Has legs', 'No legs'], items: [
          { text: 'Earthworm', bucket: 1 }, { text: 'Bee', bucket: 0 }, { text: 'Slug', bucket: 1 },
          { text: 'Beetle', bucket: 0 }, { text: 'Spider', bucket: 0 }
        ], explain: 'Worms and slugs have no legs; insects and arachnids do.' },
        { type: 'choice', q: 'A butterfly goes through a big change in its life cycle. As an adult, how many legs does it have?', options: ['6 — it is an insect', '8 — it is an arachnid', '4 — it is a small mammal', 'None — it only uses wings'], answer: 0, explain: 'A butterfly is an insect, so it always has 6 legs — even though it flies!' },
        { type: 'order', q: 'Dexter is trying to identify a minibeast. Put these questions in the best order:', items: [
          'Does it have a backbone?',
          'Does it have legs?',
          'How many legs does it have — 6 or 8?',
          'Does it have wings as well?'
        ], explain: 'Start with the biggest question (backbone?) then narrow down with legs, leg count, then other features.' },
        { type: 'choice', q: 'Which group would a wasp belong to?', options: ['Insect — it has 6 legs and 3 body parts', 'Arachnid — it can sting', 'Mollusc — it has a stripy shell', 'Worm — it wriggles'], answer: 0, explain: 'Wasps are insects: 6 legs, 3 body parts, and wings!' },
        { type: 'type', q: 'The clue word for insects is "in___ = s__". Fill in: "insect = ___"', answer: ['six', '6'], explain: 'Insect = six! Six legs is the golden rule for insects.' }
      ]
    },
    {
      id: 'classification-keys',
      title: 'Classification keys',
      emoji: '🔑',
      learn: [
        {
          title: 'Asking yes / no questions',
          html: '<p>A <b>classification key</b> helps you name a living thing by asking a chain of questions. Each question must have a <b>yes or no</b> answer, and each answer splits the group into smaller groups.</p>' +
                '<p>Imagine sorting four animals: a robin, a frog, a snake and a dog.</p>' +
                '<ul><li><b>Does it have feathers?</b> Yes → it is the robin. No → keep going.</li>' +
                '<li><b>Does it have fur?</b> Yes → it is the dog. No → keep going.</li>' +
                '<li><b>Does it have legs?</b> Yes → it is the frog. No → it is the snake.</li></ul>'
        },
        {
          title: 'What makes a GOOD key question?',
          html: '<p>A good key question can only be answered <b>yes or no</b> and is about something you can clearly see or measure.</p>' +
                '<ul><li><b>Good:</b> "Does it have wings?" (yes or no)</li>' +
                '<li><b>Bad:</b> "Is it pretty?" (everyone might answer differently!)</li>' +
                '<li><b>Bad:</b> "What colour is it?" (this is not a yes/no question)</li></ul>' +
                '<p>You start with a question that splits everything into two big groups, then ask more questions to narrow it down.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What kind of answer does every question in a classification key need?', options: ['Yes or no', 'A long sentence', 'A number out of ten', 'A drawing'], answer: 0, explain: 'Every key question must split things with a yes or no answer.' },
        { type: 'choice', q: 'Which of these is a GOOD classification key question?', options: ['Does it have wings?', 'Is it cute?', 'What is its favourite food?', 'Do you like it?'], answer: 0, explain: '"Does it have wings?" can only be answered yes or no.' },
        { type: 'choice', q: 'Why is "Is it pretty?" a BAD key question?', options: ['Different people would answer differently', 'It is too long', 'It uses big words', 'Animals cannot be pretty'], answer: 0, explain: 'A key question must have a clear yes/no answer everyone agrees on.' },
        { type: 'choice', q: 'In a key, what happens after you answer each question?', options: ['The group splits into smaller groups', 'You start again from the beginning', 'You stop straight away', 'You draw a picture'], answer: 0, explain: 'Each yes/no answer splits the group until you reach one living thing.' },
        { type: 'choice', q: 'What is a classification key used FOR?', options: ['To identify and name a living thing', 'To feed animals', 'To measure how tall a plant is', 'To draw a map'], answer: 0, explain: 'A key helps you work out the name of a living thing.' },
        { type: 'choice', q: 'Which question would best come FIRST to split many animals into two big groups?', options: ['Does it have a backbone?', 'Is its name short?', 'Does it live in your house?', 'Is it your favourite?'], answer: 0, explain: '"Does it have a backbone?" splits all animals into vertebrates and invertebrates — a great first question.' },
        { type: 'type', q: 'A key question must be answered with two words: "yes or ___". What is the missing word?', answer: ['no'], explain: 'Key questions are always answered yes or no.' },
        { type: 'order', q: 'Use this key to identify a SPIDER. Put the questions in a sensible order:', items: [
          'Does it have a backbone? — No',
          'Does it have legs? — Yes',
          'Does it have 6 legs? — No, it has 8',
          'It must be a spider (arachnid)!'
        ], explain: 'Start broad (backbone?) then narrow down (legs? how many?) until only the spider is left.' },
        { type: 'match', q: 'Match each yes/no question to the animal it would point to:', pairs: [
          ['Does it have feathers?', 'Bird'], ['Does it have fur?', 'Mammal'], ['Does it have gills and fins?', 'Fish'], ['Does it have dry scales and lay eggs on land?', 'Reptile']
        ] },
        { type: 'choice', q: 'Why is "Is it big?" a poor classification key question?', options: ['Big and small are not exact — different people may disagree', 'It is too short', 'Animals cannot be big', 'It should say "Is it very big?" instead'], answer: 0, explain: 'A key question needs a clear yes or no. "Big" is vague — one person\'s big is another\'s small!' },
        { type: 'type', q: 'What is the name of the tool that uses yes/no questions to identify a living thing? (two words: classification ___)', answer: ['key', 'classification key'], explain: 'A classification key — your detective tool for naming any living thing!' },
        { type: 'choice', q: 'In a classification key, what should the FIRST question do?', options: ['Split the whole group into two large groups', 'Name the animal straight away', 'Ask about colour first', 'Count the number of animals'], answer: 0, explain: 'Start big! A great opening question (like "does it have a backbone?") divides ALL the animals into two large groups.' },
        { type: 'order', q: 'Use a key to identify a FROG. Put these clues in the right order:', items: [
          'Does it have a backbone? — Yes (vertebrate)',
          'Does it have feathers? — No',
          'Does it have moist skin and live in water and on land? — Yes',
          'It is a frog (amphibian)!'
        ], explain: 'First check for backbone, then narrow down by features until only the frog is left.' },
        { type: 'choice', q: 'Dexter uses a key and answers "Yes" to "Does it have a backbone?" and "Yes" to "Does it have feathers?". What has he found?', options: ['A bird', 'A mammal', 'A fish', 'An insect'], answer: 0, explain: 'Backbone + feathers = bird. The key has done its job!' },
        { type: 'sort', q: 'Sort these: good classification key questions or not?', buckets: ['Good key question ✅', 'Not a good key question ❌'], items: [
          { text: 'Does it have 6 legs?', bucket: 0 },
          { text: 'Is it your favourite animal?', bucket: 1 },
          { text: 'Does it have gills?', bucket: 0 },
          { text: 'Is it friendly?', bucket: 1 },
          { text: 'Does it have wings?', bucket: 0 }
        ], explain: 'Good questions have clear yes/no answers based on observable features.' },
        { type: 'match', q: 'Match each question to the group it identifies:', pairs: [
          ['Does it have 6 legs?', 'Insect'],
          ['Does it have 8 legs?', 'Arachnid'],
          ['Does it have moist skin?', 'Amphibian'],
          ['Does it have fur and feed milk?', 'Mammal']
        ] },
        { type: 'choice', q: 'Which word describes a classification key that works branch by branch, splitting into two at every step?', options: ['A branching key', 'A looping key', 'A sorting hat', 'A straight line key'], answer: 0, explain: 'A branching key splits like branches on a tree — each answer leads you along a different branch.' },
        { type: 'choice', q: 'You are trying to tell apart a shark and a dolphin. Which key question would work best?', options: ['Does it breathe through gills?', 'Is it bigger than a person?', 'Does it live in the sea?', 'Is it grey?'], answer: 0, explain: 'The shark uses gills; the dolphin breathes air through a blowhole — a perfect yes/no split!' }
      ]
    },
    {
      id: 'mystery-animal',
      title: 'Key detective: mystery creatures!',
      emoji: '🕵️',
      learn: [
        {
          title: 'Use a REAL classification key',
          html: '<p>Now it\'s time to use a classification key for real, Dexter! You\'ll be shown a <b>mystery creature</b>. Answer each yes/no question ABOUT that creature — look at it carefully! — and the key will lead you to its name.</p>' +
                '<p>Think like a scientist: count the legs, look for wings, fins, feathers or fur. One creature at a time — can you identify all six?</p>'
        }
      ],
      keylab: {
        tree: {
          q: 'Does it have legs?',
          no: {
            q: 'Does it have fins?',
            yes: { animal: 'Fish', emoji: '🐟' },
            no: { animal: 'Worm', emoji: '🪱' }
          },
          yes: {
            q: 'Does it have exactly 6 legs?',
            yes: {
              q: 'Does it have big colourful wings?',
              yes: { animal: 'Butterfly', emoji: '🦋' },
              no: { animal: 'Ant', emoji: '🐜' }
            },
            no: {
              q: 'Does it have feathers?',
              yes: { animal: 'Parrot', emoji: '🦜' },
              no: {
                q: 'Does it have 8 legs?',
                yes: { animal: 'Spider', emoji: '🕷️' },
                no: { animal: 'Cat', emoji: '🐈' }
              }
            }
          }
        }
      }
    },
    {
      id: 'life-cycles',
      title: 'Life cycles',
      emoji: '🦋',
      learn: [
        {
          title: 'How living things change and grow',
          html: '<p>A <b>life cycle</b> shows the stages a living thing goes through from the start of its life until it can make young of its own, again and again.</p>' +
                '<p>Some animals change shape completely as they grow. This big change is called <b>metamorphosis</b>.</p>' +
                '<p><b>Butterfly:</b> egg → caterpillar → chrysalis → butterfly.</p>' +
                '<p><b>Frog:</b> frogspawn (eggs) → tadpole → froglet → frog.</p>'
        },
        {
          title: 'The flowering plant cycle',
          html: '<p>Flowering plants have a life cycle too:</p>' +
                '<p><b>Seed → germination → growing plant → flower → seed dispersal</b> → and the new seeds start it all again.</p>' +
                '<ul><li><b>Germination</b> is when a seed begins to sprout and grow.</li>' +
                '<li><b>Pollination</b> is when pollen moves between flowers, often carried by bees.</li>' +
                '<li><b>Seed dispersal</b> is when seeds are spread away from the parent plant — by wind, water or animals.</li></ul>'
        }
      ],
      questions: [
        { type: 'order', q: 'Put the <b>butterfly</b> life cycle in the correct order:', items: ['Egg', 'Caterpillar', 'Chrysalis', 'Butterfly'], explain: 'Egg → caterpillar → chrysalis → butterfly.' },
        { type: 'order', q: 'Put the <b>frog</b> life cycle in the correct order:', items: ['Frogspawn', 'Tadpole', 'Froglet', 'Frog'], explain: 'Frogspawn (eggs) → tadpole → froglet → adult frog.' },
        { type: 'order', q: 'Put the <b>flowering plant</b> life cycle in the correct order:', items: ['Seed', 'Germination', 'Growing plant', 'Flower', 'Seed dispersal'], explain: 'Seed → germination → plant → flower → seed dispersal, then it begins again.' },
        { type: 'type', q: 'What is the BIG word for when an animal completely changes shape as it grows? (starts with M)', answer: ['metamorphosis'], explain: 'Metamorphosis — like a caterpillar turning into a butterfly.', hint: 'It starts with "meta..." and means a complete change.' },
        { type: 'choice', q: 'What is a young frog called BEFORE it grows legs?', options: ['A tadpole', 'A chrysalis', 'A caterpillar', 'A froglet'], answer: 0, explain: 'A tadpole hatches from frogspawn and later grows legs to become a froglet.' },
        { type: 'choice', q: 'What does <b>germination</b> mean?', options: ['When a seed begins to sprout and grow', 'When a flower dies', 'When a bee visits a flower', 'When leaves fall off in autumn'], answer: 0, explain: 'Germination is the start of a new plant from a seed.' },
        { type: 'choice', q: 'What is <b>seed dispersal</b>?', options: ['Spreading seeds away from the parent plant', 'Watering a plant', 'Picking flowers', 'A plant growing taller'], answer: 0, explain: 'Seeds are spread by wind, water or animals so new plants grow in new places.' },
        { type: 'choice', q: 'Inside which stage does a caterpillar turn into a butterfly?', options: ['The chrysalis', 'The egg', 'The frogspawn', 'The seed'], answer: 0, explain: 'The caterpillar forms a chrysalis and changes into a butterfly inside it.' },
        { type: 'match', q: 'Match each living thing to one stage of its life cycle:', pairs: [
          ['Butterfly', 'Caterpillar'], ['Frog', 'Tadpole'], ['Flowering plant', 'Germination'], ['Bee', 'Pollination']
        ] },
        { type: 'choice', q: 'What does a caterpillar do inside the chrysalis?', options: ['It changes completely into a butterfly', 'It grows an extra set of legs', 'It sleeps until spring', 'It lays eggs'], answer: 0, explain: 'Inside the chrysalis, the caterpillar goes through metamorphosis and becomes a butterfly.' },
        { type: 'choice', q: 'What is <b>pollination</b>?', options: ['When pollen moves between flowers, often carried by bees', 'When a seed starts to sprout', 'When leaves fall in autumn', 'When a plant gets watered'], answer: 0, explain: 'Pollination happens when pollen travels from one flower to another — bees do a brilliant job of this!' },
        { type: 'choice', q: 'Name ONE way seeds can be dispersed (spread away from the plant):', options: ['By wind, water or animals', 'By humans planting them only', 'By rain watering them in place', 'By growing extra roots'], answer: 0, explain: 'Wind, water and animals all help seeds travel to new places to grow.' },
        { type: 'choice', q: 'Does a frog go through metamorphosis?', options: ['Yes — it changes from a tadpole into a frog', 'No — frogs are born looking like tiny frogs', 'No — only butterflies change', 'Yes — but only the female frog'], answer: 0, explain: 'Frogs absolutely go through metamorphosis — from frogspawn to tadpole to froglet to frog.' },
        { type: 'type', q: 'What do we call a young frog that has just started growing legs? (one word, starts with F)', answer: ['froglet'], explain: 'A froglet is the stage between tadpole and adult frog — it has legs but is still small.' },
        { type: 'sort', q: 'Sort these: are they stages of the butterfly life cycle or the frog life cycle?', buckets: ['Butterfly life cycle', 'Frog life cycle'], items: [
          { text: 'Chrysalis', bucket: 0 },
          { text: 'Tadpole', bucket: 1 },
          { text: 'Caterpillar', bucket: 0 },
          { text: 'Frogspawn', bucket: 1 },
          { text: 'Froglet', bucket: 1 }
        ], explain: 'Butterfly: egg → caterpillar → chrysalis → butterfly. Frog: frogspawn → tadpole → froglet → frog.' },
        { type: 'choice', q: 'A butterfly lays eggs on a leaf. What hatches from those eggs?', options: ['Caterpillars', 'Baby butterflies', 'Chrysalises', 'Froglets'], answer: 0, explain: 'Butterfly eggs hatch into caterpillars, which then form a chrysalis and finally become butterflies.' },
        { type: 'match', q: 'Match each life cycle word to its meaning:', pairs: [
          ['Germination', 'A seed begins to sprout'],
          ['Metamorphosis', 'An animal completely changes shape'],
          ['Seed dispersal', 'Seeds spread away from the parent plant'],
          ['Chrysalis', 'The stage where a caterpillar turns into a butterfly']
        ] },
        { type: 'choice', q: 'In the flowering plant life cycle, what comes AFTER germination?', options: ['The plant grows bigger', 'Seed dispersal', 'Pollination', 'The seed is made'], answer: 0, explain: 'After a seed germinates (sprouts), the plant grows taller before it flowers.' },
        { type: 'order', q: 'What is the correct order for the FROG life cycle?', items: ['Frogspawn', 'Tadpole', 'Froglet', 'Adult frog'], explain: 'Frogspawn hatches into tadpoles, which grow legs to become froglets, then fully grown frogs.' }
      ]
    },
    {
      id: 'habitats-change',
      title: 'Habitats and environmental change',
      emoji: '🌳',
      learn: [
        {
          title: 'What is a habitat?',
          html: '<p>A <b>habitat</b> is the natural home of a living thing. A good habitat gives an animal or plant everything it needs: <b>food, water, shelter</b> and a safe place to raise its young.</p>' +
                '<p>Different living things live in different habitats:</p>' +
                '<ul><li><b>Pond</b> — frogs, fish, dragonflies, pond weed</li>' +
                '<li><b>Woodland</b> — owls, foxes, beetles, oak trees</li>' +
                '<li><b>Ocean</b> — whales, crabs, seaweed</li></ul>'
        },
        {
          title: 'When habitats change',
          html: '<p>Habitats can change, and this affects the living things that depend on them.</p>' +
                '<p><b>Changes caused by people</b> can harm habitats: <b>deforestation</b> (cutting down forests), <b>litter</b> and <b>pollution</b> in the air and water.</p>' +
                '<p><b>Natural changes</b> happen too, such as <b>floods</b> and <b>droughts</b> (a long time with no rain).</p>' +
                '<p>But people can also help! <b>Nature reserves</b>, <b>recycling</b> and <b>planting trees</b> protect habitats so animals and plants can thrive.</p>'
        }
      ],
      questions: [
        { type: 'choice', q: 'What is a <b>habitat</b>?', options: ['The natural home of a living thing', 'A type of food', 'A baby animal', 'A kind of weather'], answer: 0, explain: 'A habitat is where a living thing lives and finds what it needs.' },
        { type: 'choice', q: 'Which of these does a good habitat provide?', options: ['Food, water and shelter', 'Toys and games', 'Roads and cars', 'Televisions'], answer: 0, explain: 'A habitat must provide food, water and shelter to survive.' },
        { type: 'choice', q: 'Which animal would you find in a <b>pond</b> habitat?', options: ['A frog', 'A camel', 'A polar bear', 'An owl'], answer: 0, explain: 'Frogs, fish and dragonflies live in and around ponds.' },
        { type: 'choice', q: 'What does <b>deforestation</b> mean?', options: ['Cutting down lots of trees', 'Planting a forest', 'Watering plants', 'Cleaning a river'], answer: 0, explain: 'Deforestation is when forests are cut down, destroying habitats.' },
        { type: 'choice', q: 'What is a <b>drought</b>?', options: ['A long time with no rain', 'Too much rain and flooding', 'A very cold winter', 'A windy day'], answer: 0, explain: 'A drought is a long dry spell with little or no rain — a natural change.' },
        { type: 'choice', q: 'Which of these is a way people can HELP habitats?', options: ['Creating nature reserves', 'Dropping litter', 'Polluting rivers', 'Cutting down forests'], answer: 0, explain: 'Nature reserves, recycling and planting trees all protect habitats.' },
        { type: 'choice', q: 'Which of these is caused by PEOPLE rather than nature?', options: ['Pollution from factories', 'A flood after heavy rain', 'A drought in summer', 'A storm at sea'], answer: 0, explain: 'Pollution is a human-made change; floods, droughts and storms are natural.' },
        { type: 'sort', q: 'Sort these changes: are they GOOD or BAD for a habitat?', buckets: ['Good for habitats', 'Bad for habitats'], items: [
          { text: 'Planting new trees', bucket: 0 }, { text: 'Dropping litter', bucket: 1 },
          { text: 'Making a nature reserve', bucket: 0 }, { text: 'Polluting a river', bucket: 1 },
          { text: 'Recycling our rubbish', bucket: 0 }, { text: 'Cutting down a forest', bucket: 1 }
        ], explain: 'Planting, recycling and reserves help; litter, pollution and deforestation harm habitats.' },
        { type: 'match', q: 'Match each living thing to its habitat:', pairs: [
          ['Fox', 'Woodland'], ['Crab', 'Ocean'], ['Frog', 'Pond'], ['Seaweed', 'Ocean rock pool'], ['Oak tree', 'Forest floor']
        ] },
        { type: 'choice', q: 'If a woodland is cut down, what happens to the animals that live there?', options: ['They lose their home, food and shelter and may not survive', 'They move straight into the city', 'Nothing — animals don\'t need trees', 'They all become pets'], answer: 0, explain: 'Losing a habitat means losing food, shelter and a safe place to raise young — very serious for wildlife.' },
        { type: 'choice', q: 'What does a <b>nature reserve</b> do?', options: ['It protects a natural area so wildlife can live and thrive', 'It sells animals to people', 'It is a zoo in the countryside', 'It is a place to play sports'], answer: 0, explain: 'Nature reserves are protected areas where habitats and wildlife are kept safe.' },
        { type: 'choice', q: 'Which of these is a NATURAL change to a habitat (not caused by people)?', options: ['A flood after heavy rain', 'A factory polluting a river', 'Cutting down trees for farmland', 'Dropping litter in a pond'], answer: 0, explain: 'Floods happen naturally; pollution and deforestation are caused by people.' },
        { type: 'type', q: 'What do we call the cutting down of large areas of forest? (one word, starts with D)', answer: ['deforestation'], explain: 'Deforestation — one of the biggest threats to habitats around the world.', hint: 'D _ _ _ _ _ _ _ _ _ _ _ _' },
        { type: 'sort', q: 'Sort these: natural change to a habitat, or caused by people?', buckets: ['Natural change', 'Caused by people'], items: [
          { text: 'A drought dries up a pond', bucket: 0 },
          { text: 'Oil is spilled in the ocean', bucket: 1 },
          { text: 'A storm blows down trees', bucket: 0 },
          { text: 'A river is polluted by rubbish', bucket: 1 },
          { text: 'A forest is flooded by heavy rain', bucket: 0 }
        ], explain: 'Droughts, storms and floods are natural; spills, pollution and litter are human-caused.' },
        { type: 'choice', q: 'Why might a pond full of litter be a problem for a frog?', options: ['The frog needs clean water to lay eggs and for tadpoles to survive', 'Frogs hate the colour of litter', 'Litter makes the water too cold', 'Frogs only live in litter-filled ponds'], answer: 0, explain: 'Pollution in water damages the habitat frogs depend on for every stage of their life cycle.' },
        { type: 'match', q: 'Match each habitat threat to what causes it:', pairs: [
          ['Deforestation', 'Cutting down forests'],
          ['Pollution', 'Chemicals or litter in air and water'],
          ['Drought', 'A long period without rain'],
          ['Flooding', 'Too much rain, raising water levels']
        ] },
        { type: 'choice', q: 'Dexter wants to help local wildlife. Which of these would be most helpful?', options: ['Planting wildflowers in the garden', 'Pouring oil into the stream', 'Dropping crisp packets in the park', 'Cutting down the hedge'], answer: 0, explain: 'Wildflowers provide food and shelter for insects and birds — a brilliant way to help!' },
        { type: 'choice', q: 'Which animal from the lesson lives in a WOODLAND habitat?', options: ['An owl', 'A crab', 'A whale', 'A dragonfly'], answer: 0, explain: 'Owls and foxes are typical woodland animals.' },
        { type: 'order', q: 'Put these events in the order they would happen if a pond habitat was slowly destroyed:', items: [
          'A factory starts dumping waste near the pond',
          'The water becomes polluted',
          'Plants and insects in the pond begin to die',
          'Frogs and fish lose their food and shelter',
          'The pond habitat is destroyed'
        ], explain: 'Pollution starts a chain reaction — once the water is dirty, every living thing that depends on it is affected.' }
      ]
    }
  ]
});
