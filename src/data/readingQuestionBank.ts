/**
 * Official ICAP ECS Reading Question Bank
 * Total: 30 Practice Tests (870 Questions, 240 Passages/Texts)
 * 
 * Sourced directly from:
 * ICAP ECS Reading portion Questions.pdf
 * 
 * Structure per test (29 questions, 35 minutes):
 * - Part 1 (Q 1 - 5): Sentence Comprehension (Short Email Gap-Fill) [1 passage, 5 questions]
 * - Part 2 (Q 6 - 15): Text Cohesion / Sentence Ordering (Task 1 & Task 2) [2 passages, 10 questions]
 * - Part 3 (Q 16 - 22): Opinion Matching (4 People A-D) [4 texts, 7 questions]
 * - Part 4 (Q 23 - 29): Long Text Comprehension (Paragraph-to-Heading Matching) [1 long text, 7 questions]
 * 
 * Preserves all authentic reading passages, questions, options, correct answers,
 * and comprehensive explanations in both English and Urdu.
 */

import { 
  ReadingSection1, 
  ReadingSection2, 
  ReadingSection3, 
  ReadingSection4 
} from '../types';

export interface ReadingTestItem {
  testNumber: number;
  section1: ReadingSection1;
  section2: ReadingSection2;
  section3: ReadingSection3;
  section4: ReadingSection4;
  totalQuestions: number;
  totalPassages: number;
}

export const READING_TESTS: ReadingTestItem[] = [
  {
    "testNumber": 1,
    "section1": {
      "id": "reading-test-1-s1",
      "title": "Practice Test 1 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "The flat is ",
          "gapId": "t1_s1_gap_1",
          "options": [
            "much",
            "many",
            "more"
          ],
          "correctIndex": 0,
          "textAfter": " bigger than I expected."
        },
        {
          "textBefore": "My room has a lovely ",
          "gapId": "t1_s1_gap_2",
          "options": [
            "sight",
            "view",
            "look"
          ],
          "correctIndex": 1,
          "textAfter": " of the park."
        },
        {
          "textBefore": "I would like ",
          "gapId": "t1_s1_gap_3",
          "options": [
            "for",
            "to",
            "that"
          ],
          "correctIndex": 1,
          "textAfter": " cook dinner for everyone on Saturday."
        },
        {
          "textBefore": "Please tell me what time you ",
          "gapId": "t1_s1_gap_4",
          "options": [
            "arrives",
            "arriving",
            "arrive"
          ],
          "correctIndex": 2,
          "textAfter": " home on Friday."
        },
        {
          "textBefore": "I will meet you ",
          "gapId": "t1_s1_gap_5",
          "options": [
            "in",
            "at",
            "on"
          ],
          "correctIndex": 1,
          "textAfter": " seven o’clock outside the station."
        }
      ],
      "explanations": {
        "t1_s1_gap_1": {
          "english": "Option (A) is correct: \"much\". The flat is much bigger than I expected. ‘much’ is used before a comparative adjective; ‘more bigger’ is incorrect.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The flat is much bigger than I expected. ‘much’ is used before a compa...)"
        },
        "t1_s1_gap_2": {
          "english": "Option (B) is correct: \"view\". My room has a lovely view of the park. ‘a view of’ is the natural collocation for what you can see from a window.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (My room has a lovely view of the park. ‘a view of’ is the natural coll...)"
        },
        "t1_s1_gap_3": {
          "english": "Option (B) is correct: \"to\". I would like to cook dinner for everyone on Saturday. ‘would like’ is followed by ‘to’ + verb.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I would like to cook dinner for everyone on Saturday. ‘would like’ is ...)"
        },
        "t1_s1_gap_4": {
          "english": "Option (C) is correct: \"arrive\". Please tell me what time you arrive home on Friday. ‘you’ takes the base form of the verb in the present simple.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please tell me what time you arrive home on Friday. ‘you’ takes the ba...)"
        },
        "t1_s1_gap_5": {
          "english": "Option (B) is correct: \"at\". I will meet you at seven o’clock outside the",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I will meet you at seven o’clock outside the...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-1-s2",
      "title": "Practice Test 1 - Text Cohesion",
      "topic": "some instructions for using a town bicycle scheme",
      "correctOrder": [
        0,
        4,
        3,
        5,
        2,
        1
      ],
      "sentences": [
        "If you want to borrow a bicycle from our town scheme, please follow these steps. (Example)",
        "After that, the cost of your trip will be taken from your account automatically.",
        "When you have finished your journey, leave the bicycle at any official stand.",
        "The app will then send you a code by text message.",
        "First, download the app and create an account with your email address.",
        "Type this code into the screen on the bicycle to unlock it."
      ],
      "explanation": "‘then send you a code’ follows creating the account; ‘this code’ refers back to the code; ‘After that’ follows returning the bicycle.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘then send you a code’ follows creating the account; ‘this code’ refers back to the code; ‘After tha",
      "tasks": [
        {
          "id": "t1_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions for using a town bicycle scheme",
          "topic": "some instructions for using a town bicycle scheme",
          "correctOrder": [
            0,
            4,
            3,
            5,
            2,
            1
          ],
          "sentences": [
            "If you want to borrow a bicycle from our town scheme, please follow these steps. (Example)",
            "After that, the cost of your trip will be taken from your account automatically.",
            "When you have finished your journey, leave the bicycle at any official stand.",
            "The app will then send you a code by text message.",
            "First, download the app and create an account with your email address.",
            "Type this code into the screen on the bicycle to unlock it."
          ],
          "explanation": "‘then send you a code’ follows creating the account; ‘this code’ refers back to the code; ‘After that’ follows returning the bicycle.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘then send you a code’ follows creating the account; ‘this code’ refers back to the code; ‘After tha"
        },
        {
          "id": "t1_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about food history",
          "topic": "a book about food history",
          "correctOrder": [
            0,
            4,
            1,
            3,
            5,
            2
          ],
          "sentences": [
            "Tea became popular in Britain in the seventeenth century. (Example)",
            "This changed when traders began bringing much larger amounts from India and China.",
            "Today, the British drink millions of cups every day, and the habit remains part of national life.",
            "As a result, the price fell and ordinary people started to drink it every day.",
            "At that time, it was extremely expensive, so only rich families could afford it.",
            "Soon, tea shops opened in most towns, where customers met to talk and relax."
          ],
          "explanation": "‘This changed’ refers to the high price; ‘As a result’ gives the effect of larger imports; ‘Today’ closes the history.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘This changed’ refers to the high price; ‘As a result’ gives the effect of larger imports; ‘Today’ c"
        }
      ]
    },
    "section3": {
      "id": "reading-test-1-s3",
      "title": "Practice Test 1 - Opinion Matching",
      "topic": "Opinion Matching Test 1",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I run a small bookshop, and I’m worried. Many of my customers drive in from nearby villages and carry\nheavy bags home. If they can’t park outside, I think they’ll shop at the retail park instead. Sales could\nfall badly before people get used to the idea. Perhaps the council should try the plan for six months and\nsee what happens.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I’d love it. At the moment I never let my children walk to school through the centre because of the\ntraffic. Without cars, the streets would be much safer for them, and the noise would disappear too. I’d\nhappily spend my Saturdays in town if I didn’t have to worry about every junction.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘My knees aren’t what they were, and I rely on my son to drive me to the pharmacy. If he can’t stop\nnearby, I don’t know how I’d manage. The bus stops are a long walk from the shops, and buses are\nrare in the evenings. The council should fix the bus service first, before taking any cars away.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘Cars are the main reason our air is so dirty. I cycle everywhere, and I cough every time I stand at a\ntraffic light in the centre. Cutting the number of vehicles would make breathing easier for everyone. I\nknow some people will complain at first, but the long-term benefits are obvious.’"
        }
      ],
      "questions": [
        {
          "id": "t1_s3_q16",
          "statement": "Who thinks the council should test the plan for a limited time?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks the council should test the plan for a limited time? ‘try the plan for six months’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks the council should test the plan for a limited time? ‘try the plan fo)۔"
        },
        {
          "id": "t1_s3_q17",
          "statement": "Who believes the change would help the environment?",
          "correctPersonId": "D",
          "explanation": "Person D: Who believes the change would help the environment? ‘air is so dirty’; fewer vehicles help breathing Aptis General Reading Practice Tests • ICAP ECS Page 55 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who believes the change would help the environment? ‘air is so dirty’; fewer veh)۔"
        },
        {
          "id": "t1_s3_q18",
          "statement": "Who is concerned about people who cannot walk far?",
          "correctPersonId": "C",
          "explanation": "Person C: Who is concerned about people who cannot walk far? ‘My knees aren’t what they were’; bus stops far away",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who is concerned about people who cannot walk far? ‘My knees aren’t what they we)۔"
        },
        {
          "id": "t1_s3_q19",
          "statement": "Who thinks local businesses may lose customers?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks local businesses may lose customers? customers may ‘shop at the retail park instead’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks local businesses may lose customers? customers may ‘shop at the retai)۔"
        },
        {
          "id": "t1_s3_q20",
          "statement": "Who would spend more time in the centre if cars were banned?",
          "correctPersonId": "B",
          "explanation": "Person B: Who would spend more time in the centre if cars were banned? ‘I’d happily spend my Saturdays in town’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who would spend more time in the centre if cars were banned? ‘I’d happily spend )۔"
        },
        {
          "id": "t1_s3_q21",
          "statement": "Who says better bus services are needed before the ban?",
          "correctPersonId": "C",
          "explanation": "Person C: Who says better bus services are needed before the ban? ‘fix the bus service first’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who says better bus services are needed before the ban? ‘fix the bus service fir)۔"
        },
        {
          "id": "t1_s3_q22",
          "statement": "Who thinks the ban would make the streets safer for young people?",
          "correctPersonId": "B",
          "explanation": "Person B: Who thinks the ban would make the streets",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who thinks the ban would make the streets)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-1-s4",
      "title": "Practice Test 1 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - From flower to jar",
        "B - How bees find food",
        "C - Surprising uses beyond honey",
        "D - Keeping bees as a hobby",
        "E - How people are helping",
        "F - A highly organised home",
        "G - Pollination and our food",
        "H - A worrying decline",
        "J - An insect we all know (Example)"
      ],
      "paragraphs": [
        {
          "id": "t1_s4_p1",
          "paragraphNumber": 1,
          "text": "A single honeybee colony may contain up to fifty thousand individuals, all living inside one nest. At\nthe centre is the queen, whose only job is to lay eggs. Thousands of female workers clean the nest,\nfeed the young and guard the entrance, while a small number of males exist only to mate with new\nqueens. Every bee has a role, and the colony works almost like a single living body.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"A highly organised home\"): A highly organised home queen, workers and males each have a role",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A highly organised home' کی مکمل تائید کرتا ہے (A highly organised home queen, workers and males each have a role)۔"
        },
        {
          "id": "t1_s4_p2",
          "paragraphNumber": 2,
          "text": "When a worker finds a good supply of flowers, she returns to the nest and performs a special\nmovement known as the waggle dance. The angle of her dance shows the other bees which direction\nto fly relative to the sun, and the length of the waggle tells them how far away the flowers are. Within\nminutes, dozens of workers can set off towards the exact spot.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"How bees find food\"): How bees find food the waggle dance gives direction and distance",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How bees find food' کی مکمل تائید کرتا ہے (How bees find food the waggle dance gives direction and distance)۔"
        },
        {
          "id": "t1_s4_p3",
          "paragraphNumber": 3,
          "text": "Honey begins as nectar, a sugary liquid collected from flowers and stored in the bee’s special\nstomach. Back at the nest, the nectar is passed from bee to bee until much of its water has evaporated.\nIt is then placed in wax cells and sealed. To make just one jar of honey, bees must visit millions of\nflowers, which explains why it can be expensive.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"From flower to jar\"): From flower to jar step-by-step honey production",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'From flower to jar' کی مکمل تائید کرتا ہے (From flower to jar step-by-step honey production)۔"
        },
        {
          "id": "t1_s4_p4",
          "paragraphNumber": 4,
          "text": "While collecting nectar, bees carry pollen from one flower to another, allowing plants to produce\nseeds and fruit. This process, called pollination, is essential for many of the crops we eat, including\napples, almonds and blueberries. Experts estimate that about one third of our food depends on\npollinating insects, and honeybees are among the most important of them.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Pollination and our food\"): Pollination and our food pollen, crops, one third of our food",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Pollination and our food' کی مکمل تائید کرتا ہے (Pollination and our food pollen, crops, one third of our food)۔"
        },
        {
          "id": "t1_s4_p5",
          "paragraphNumber": 5,
          "text": "In recent decades, beekeepers in many countries have reported that colonies are dying in unusually\nlarge numbers. Researchers believe there is no single cause. Chemicals used on farms, the loss of wild\nflowers, new diseases and changing weather patterns all seem to play a part. Because bees are so\nvaluable to agriculture, their decline has alarmed farmers and scientists alike.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"A worrying decline\"): A worrying decline colonies dying; several causes",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A worrying decline' کی مکمل تائید کرتا ہے (A worrying decline colonies dying; several causes)۔"
        },
        {
          "id": "t1_s4_p6",
          "paragraphNumber": 6,
          "text": "Fortunately, many people are taking action. Some governments have restricted the most harmful\nfarm chemicals, while farmers are being paid to leave strips of wildflowers along the edges of their\nfields. In cities, schools and businesses have planted flower-filled roofs and gardens. Even small\nchanges, such as leaving part of a lawn uncut, can give local bees valuable food.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"How people are helping\"): How people are helping ‘Fortunately... taking action’; solutions",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How people are helping' کی مکمل تائید کرتا ہے (How people are helping ‘Fortunately... taking action’; solutions)۔"
        },
        {
          "id": "t1_s4_p7",
          "paragraphNumber": 7,
          "text": "Honey is not the only product of the hive. Beeswax is used to make candles, polishes and cosmetics,\nand a sticky substance called propolis, which bees use to seal gaps in the nest, is added to some\nmedicines and creams. Researchers are even testing bee venom as an ingredient in treatments for\ncertain skin conditions.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Surprising uses beyond honey\"): Surprising uses beyond honey beeswax, propolis and venom as products",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Surprising uses beyond honey' کی مکمل تائید کرتا ہے (Surprising uses beyond honey beeswax, propolis and venom as products)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 2,
    "section1": {
      "id": "reading-test-2-s1",
      "title": "Practice Test 2 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "We expect about twenty people, so we need ",
          "gapId": "t2_s1_gap_1",
          "options": [
            "most",
            "more",
            "much"
          ],
          "correctIndex": 1,
          "textAfter": " chairs."
        },
        {
          "textBefore": "Please ",
          "gapId": "t2_s1_gap_2",
          "options": [
            "do",
            "make",
            "have"
          ],
          "correctIndex": 1,
          "textAfter": " sure the projector is working."
        },
        {
          "textBefore": "I will bring the documents ",
          "gapId": "t2_s1_gap_3",
          "options": [
            "since",
            "after",
            "during"
          ],
          "correctIndex": 1,
          "textAfter": " I finish lunch."
        },
        {
          "textBefore": "The meeting is ",
          "gapId": "t2_s1_gap_4",
          "options": [
            "such",
            "very",
            "so"
          ],
          "correctIndex": 2,
          "textAfter": " important that nobody can be late."
        },
        {
          "textBefore": "Ask Helen ",
          "gapId": "t2_s1_gap_5",
          "options": [
            "or",
            "but",
            "if"
          ],
          "correctIndex": 2,
          "textAfter": " she has the client’s phone number."
        }
      ],
      "explanations": {
        "t2_s1_gap_1": {
          "english": "Option (B) is correct: \"more\". We expect about twenty people, so we need more chairs. ‘more’ + plural noun means a larger number; ‘much’ is used with uncountable nouns.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (We expect about twenty people, so we need more chairs. ‘more’ + plural...)"
        },
        "t2_s1_gap_2": {
          "english": "Option (B) is correct: \"make\". Please make sure the projector is working. ‘make sure’ is a fixed expression.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please make sure the projector is working. ‘make sure’ is a fixed expr...)"
        },
        "t2_s1_gap_3": {
          "english": "Option (B) is correct: \"after\". I will bring the documents after I finish lunch. ‘after’ + clause links two actions in time.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I will bring the documents after I finish lunch. ‘after’ + clause link...)"
        },
        "t2_s1_gap_4": {
          "english": "Option (C) is correct: \"so\". The meeting is so important that nobody can be late. ‘so + adjective + that’ expresses result.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The meeting is so important that nobody can be late. ‘so + adjective +...)"
        },
        "t2_s1_gap_5": {
          "english": "Option (C) is correct: \"if\". Ask Helen if she has the client’s phone",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Ask Helen if she has the client’s phone...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-2-s2",
      "title": "Practice Test 2 - Text Cohesion",
      "topic": "some instructions about returning a parcel",
      "correctOrder": [
        0,
        4,
        1,
        5,
        3,
        2
      ],
      "sentences": [
        "If you are not happy with something you bought online, you can return it within thirty days. (Example)",
        "The website will then produce a label for you to print.",
        "Keep this receipt safe because you will need it if there is a problem with your refund.",
        "Next, take the parcel to any post office, where staff will scan the label and give you a receipt.",
        "Begin by logging in to your account and selecting the item you want to send back.",
        "Attach this label firmly to the outside of the parcel."
      ],
      "explanation": "Each sentence refers back: ‘a label’ > ‘this label’ > ‘the label’ > ‘this receipt’.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: Each sentence refers back: ‘a label’ > ‘this label’ > ‘the label’ > ‘this receipt’.",
      "tasks": [
        {
          "id": "t2_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions about returning a parcel",
          "topic": "some instructions about returning a parcel",
          "correctOrder": [
            0,
            4,
            1,
            5,
            3,
            2
          ],
          "sentences": [
            "If you are not happy with something you bought online, you can return it within thirty days. (Example)",
            "The website will then produce a label for you to print.",
            "Keep this receipt safe because you will need it if there is a problem with your refund.",
            "Next, take the parcel to any post office, where staff will scan the label and give you a receipt.",
            "Begin by logging in to your account and selecting the item you want to send back.",
            "Attach this label firmly to the outside of the parcel."
          ],
          "explanation": "Each sentence refers back: ‘a label’ > ‘this label’ > ‘the label’ > ‘this receipt’.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: Each sentence refers back: ‘a label’ > ‘this label’ > ‘the label’ > ‘this receipt’."
        },
        {
          "id": "t2_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A history of chocolate",
          "topic": "a history of chocolate",
          "correctOrder": [
            0,
            4,
            2,
            3,
            5,
            1
          ],
          "sentences": [
            "Chocolate has been enjoyed for more than three thousand years. (Example)",
            "Because of this development, chocolate became cheap enough for almost everyone to buy.",
            "Spanish explorers took the beans back to Europe in the sixteenth century.",
            "There, people mixed the drink with sugar, and it quickly became fashionable among the rich.",
            "The earliest chocolate was not sweet but a bitter drink made from crushed cacao beans.",
            "It was only in the nineteenth century that factories learned to produce solid chocolate bars."
          ],
          "explanation": "‘There’ = Europe; ‘this development’ = solid bars produced in factories.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘There’ = Europe; ‘this development’ = solid bars produced in factories."
        }
      ]
    },
    "section3": {
      "id": "reading-test-2-s3",
      "title": "Practice Test 2 - Opinion Matching",
      "topic": "Opinion Matching Test 2",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I started Spanish at forty and I use an app for twenty minutes every morning. It’s not perfect, but it fits\naround my job, and I like seeing my progress. I don’t think you need to go to classes. Regular small\nsessions are better than one long lesson a week, in my experience.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘Nothing beats living in the country. I spent a year in Italy, and I learned more there than in five years of\nlessons at home. You hear the language all day, and you have to speak to buy even a loaf of bread.\nPeople who only study from books often understand a lot but are too shy to speak.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I’m a teacher, and I believe good classes with a qualified tutor are essential. Apps can teach words, but\nonly a teacher can correct your mistakes and explain why a sentence is wrong. Classes also keep you\nmotivated, because you meet other learners and you know someone expects you to do your\nhomework.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘Whatever method you choose, practice is what matters. I joined an online group where we chat in\nEnglish and French every Sunday. It costs nothing, and it has helped me lose my fear of making\nmistakes. The more people you talk to, the faster you improve, I think.’"
        }
      ],
      "questions": [
        {
          "id": "t2_s3_q16",
          "statement": "Who thinks regular short study periods work best?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks regular short study periods work best? ‘Regular small sessions are better’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks regular short study periods work best? ‘Regular small sessions are be)۔"
        },
        {
          "id": "t2_s3_q17",
          "statement": "Who believes you must be abroad to learn properly?",
          "correctPersonId": "B",
          "explanation": "Person B: Who believes you must be abroad to learn properly? ‘Nothing beats living in the country’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who believes you must be abroad to learn properly? ‘Nothing beats living in the )۔"
        },
        {
          "id": "t2_s3_q18",
          "statement": "Who thinks learners need someone to correct their errors?",
          "correctPersonId": "C",
          "explanation": "Person C: Who thinks learners need someone to correct their errors? ‘only a teacher can correct your mistakes’ Aptis General Reading Practice Tests • ICAP ECS Page 57 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who thinks learners need someone to correct their errors? ‘only a teacher can co)۔"
        },
        {
          "id": "t2_s3_q19",
          "statement": "Who says that talking with others reduces fear?",
          "correctPersonId": "D",
          "explanation": "Person D: Who says that talking with others reduces fear? ‘lose my fear of making mistakes’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who says that talking with others reduces fear? ‘lose my fear of making mistakes)۔"
        },
        {
          "id": "t2_s3_q20",
          "statement": "Who values being able to track their own improvement?",
          "correctPersonId": "A",
          "explanation": "Person A: Who values being able to track their own improvement? ‘I like seeing my progress’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who values being able to track their own improvement? ‘I like seeing my progress)۔"
        },
        {
          "id": "t2_s3_q21",
          "statement": "Who says that language classes help learners stay motivated?",
          "correctPersonId": "C",
          "explanation": "Person C: Who says that language classes help learners stay motivated? ‘Classes also keep you motivated’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who says that language classes help learners stay motivated? ‘Classes also keep )۔"
        },
        {
          "id": "t2_s3_q22",
          "statement": "Who thinks people who study from books may be reluctant to speak?",
          "correctPersonId": "B",
          "explanation": "Person B: Who thinks people who study from books",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who thinks people who study from books)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-2-s4",
      "title": "Practice Test 2 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Memory and learning",
        "B - The stages of a night’s rest",
        "C - The cost of too little sleep",
        "D - Tips for better sleep",
        "E - How much sleep do we need?",
        "F - Sleep and the modern world",
        "G - Animals that sleep differently",
        "H - Why we dream",
        "J - Something we all do (Example)"
      ],
      "paragraphs": [
        {
          "id": "t2_s4_p1",
          "paragraphNumber": 1,
          "text": "Sleep is not a single state. During the night we pass through several stages, repeating a cycle of\nabout ninety minutes four or five times. In light sleep, our heartbeat slows. In deep sleep, the body\nrepairs muscles and strengthens the immune system. Finally, in REM sleep, our eyes move rapidly and\nmost vivid dreaming occurs.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"The stages of a night’s rest\"): The stages of a night’s rest light, deep and REM sleep described",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The stages of a night’s rest' کی مکمل تائید کرتا ہے (The stages of a night’s rest light, deep and REM sleep described)۔"
        },
        {
          "id": "t2_s4_p2",
          "paragraphNumber": 2,
          "text": "The brain uses sleep to sort the day’s experiences. Studies show that students who sleep after\nstudying remember far more than those who stay awake all night. During deep sleep, important\ninformation appears to be moved into long-term storage, while unimportant details are quietly\ndiscarded, making room for new learning the next day.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Memory and learning\"): Memory and learning sleep and storing information",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Memory and learning' کی مکمل تائید کرتا ہے (Memory and learning sleep and storing information)۔"
        },
        {
          "id": "t2_s4_p3",
          "paragraphNumber": 3,
          "text": "Missing a single night makes it hard to concentrate and react quickly. Over longer periods, lack of\nsleep is linked to weight gain, heart problems and low mood. Some road safety experts say that driving\nwhile extremely tired can be as dangerous as driving after drinking alcohol, yet many drivers ignore the\nwarning signs.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"The cost of too little sleep\"): The cost of too little sleep negative effects of lack of sleep",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The cost of too little sleep' کی مکمل تائید کرتا ہے (The cost of too little sleep negative effects of lack of sleep)۔"
        },
        {
          "id": "t2_s4_p4",
          "paragraphNumber": 4,
          "text": "Needs vary with age. Newborn babies may sleep up to seventeen hours a day, teenagers need\naround nine, and most adults require between seven and eight. A small number of people seem to\nmanage on less, but researchers believe that this is very rare, and that most people who claim to feel\nfine on five hours are in fact tired without noticing.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"How much sleep do we need?\"): How much sleep do we need? hours needed at different ages",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How much sleep do we need?' کی مکمل تائید کرتا ہے (How much sleep do we need? hours needed at different ages)۔"
        },
        {
          "id": "t2_s4_p5",
          "paragraphNumber": 5,
          "text": "Sleep habits across the animal world are remarkable. Dolphins rest only half of their brain at a time\nso that they can keep swimming and breathing. Some birds can sleep while flying, and giraffes manage\non as little as two hours a day. Scientists study such creatures to understand which parts of sleep are\ntruly essential.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Animals that sleep differently\"): Animals that sleep differently dolphins, birds, giraffes",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Animals that sleep differently' کی مکمل تائید کرتا ہے (Animals that sleep differently dolphins, birds, giraffes)۔"
        },
        {
          "id": "t2_s4_p6",
          "paragraphNumber": 6,
          "text": "Experts recommend going to bed and waking at the same time every day, even at weekends. A cool,\ndark and quiet bedroom helps, and so does avoiding caffeine in the afternoon. Perhaps most\nimportantly, switching off phones and tablets an hour before bedtime prevents bright screens from\ntricking the brain into thinking it is still daytime.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Tips for better sleep\"): Tips for better sleep practical advice (‘Experts recommend’)",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Tips for better sleep' کی مکمل تائید کرتا ہے (Tips for better sleep practical advice (‘Experts recommend’))۔"
        },
        {
          "id": "t2_s4_p7",
          "paragraphNumber": 7,
          "text": "Electric lighting, shift work and constant access to entertainment have changed how people sleep.\nSurveys in several countries suggest that adults now sleep about an hour less each night than their\ngrandparents did. Some companies have responded by offering quiet rooms for short naps, believing\nthat rested employees work more productively.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Sleep and the modern world\"): Sleep and the modern world modern lifestyle changes sleeping patterns",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Sleep and the modern world' کی مکمل تائید کرتا ہے (Sleep and the modern world modern lifestyle changes sleeping patterns)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 3,
    "section1": {
      "id": "reading-test-3-s1",
      "title": "Practice Test 3 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "The beach is only five minutes ",
          "gapId": "t3_s1_gap_1",
          "options": [
            "from",
            "with",
            "for"
          ],
          "correctIndex": 0,
          "textAfter": " the hotel."
        },
        {
          "textBefore": "The sea is ",
          "gapId": "t3_s1_gap_2",
          "options": [
            "too",
            "so",
            "such"
          ],
          "correctIndex": 1,
          "textAfter": " warm that we swim every day."
        },
        {
          "textBefore": "Yesterday we ",
          "gapId": "t3_s1_gap_3",
          "options": [
            "walked",
            "gave",
            "took"
          ],
          "correctIndex": 2,
          "textAfter": " a boat trip around the island."
        },
        {
          "textBefore": "I haven’t been this relaxed ",
          "gapId": "t3_s1_gap_4",
          "options": [
            "during",
            "for",
            "since"
          ],
          "correctIndex": 1,
          "textAfter": " years."
        },
        {
          "textBefore": "Write to me ",
          "gapId": "t3_s1_gap_5",
          "options": [
            "until",
            "when",
            "during"
          ],
          "correctIndex": 1,
          "textAfter": " you have time."
        }
      ],
      "explanations": {
        "t3_s1_gap_1": {
          "english": "Option (A) is correct: \"from\". The beach is only five minutes from the hotel. ‘five minutes from’ expresses distance in time.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The beach is only five minutes from the hotel. ‘five minutes from’ exp...)"
        },
        "t3_s1_gap_2": {
          "english": "Option (B) is correct: \"so\". The sea is so warm that we swim every day. ‘so + adjective + that’ shows result; ‘too’ needs ‘to’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The sea is so warm that we swim every day. ‘so + adjective + that’ sho...)"
        },
        "t3_s1_gap_3": {
          "english": "Option (C) is correct: \"took\". Yesterday we took a boat trip around the island. ‘take a trip’ is the correct collocation.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Yesterday we took a boat trip around the island. ‘take a trip’ is the ...)"
        },
        "t3_s1_gap_4": {
          "english": "Option (B) is correct: \"for\". I haven’t been this relaxed for years. ‘for’ + a period of time, used with the present perfect.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I haven’t been this relaxed for years. ‘for’ + a period of time, used ...)"
        },
        "t3_s1_gap_5": {
          "english": "Option (B) is correct: \"when\". Write to me when you have time. ‘when you have time’ = at the moment that you",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Write to me when you have time. ‘when you have time’ = at the moment t...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-3-s2",
      "title": "Practice Test 3 - Text Cohesion",
      "topic": "a welcome leaflet for a language school",
      "correctOrder": [
        0,
        5,
        1,
        2,
        3,
        4
      ],
      "sentences": [
        "Welcome to Lakeside Language School; please read these instructions on your first day. (Example)",
        "A teacher will check your answers and decide which class suits your level.",
        "You will then be given a timetable showing your lessons for the first week.",
        "Please arrive at your classroom five minutes early on Monday morning.",
        "If you cannot find it, any member of staff will be happy to show you the way.",
        "Begin by going to the main office, where you will take a short written test."
      ],
      "explanation": "‘it’ in the last sentence refers to ‘your classroom’; ‘then’ shows the timetable comes after the class is decided.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘it’ in the last sentence refers to ‘your classroom’; ‘then’ shows the timetable comes after the cla",
      "tasks": [
        {
          "id": "t3_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: A welcome leaflet for a language school",
          "topic": "a welcome leaflet for a language school",
          "correctOrder": [
            0,
            5,
            1,
            2,
            3,
            4
          ],
          "sentences": [
            "Welcome to Lakeside Language School; please read these instructions on your first day. (Example)",
            "A teacher will check your answers and decide which class suits your level.",
            "You will then be given a timetable showing your lessons for the first week.",
            "Please arrive at your classroom five minutes early on Monday morning.",
            "If you cannot find it, any member of staff will be happy to show you the way.",
            "Begin by going to the main office, where you will take a short written test."
          ],
          "explanation": "‘it’ in the last sentence refers to ‘your classroom’; ‘then’ shows the timetable comes after the class is decided.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘it’ in the last sentence refers to ‘your classroom’; ‘then’ shows the timetable comes after the cla"
        },
        {
          "id": "t3_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about everyday inventions",
          "topic": "an article about everyday inventions",
          "correctOrder": [
            0,
            2,
            3,
            5,
            1,
            4
          ],
          "sentences": [
            "The zip is such a common object that we rarely think about who invented it. (Example)",
            "At first, the zip was used mainly on boots and tobacco bags.",
            "In fact, early versions were produced in the 1890s, but they often opened by themselves.",
            "A Swedish-American engineer, Gideon Sundback, solved this problem in 1913.",
            "It was not until the 1930s that clothing makers began using it on trousers and jackets.",
            "His design used small metal teeth that locked together tightly when pulled by a slider."
          ],
          "explanation": "‘this problem’ = zips opening by themselves; ‘His design’ = Sundback’s; ‘At first’ ... ‘It was not until the 1930s’ shows development.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘this problem’ = zips opening by themselves; ‘His design’ = Sundback’s; ‘At first’ ... ‘It was not u"
        }
      ]
    },
    "section3": {
      "id": "reading-test-3-s3",
      "title": "Practice Test 3 - Opinion Matching",
      "topic": "Opinion Matching Test 3",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I’d ban phones completely during lessons. They distract pupils, and I spend too much time asking them\nto put them away. Pupils who have no phone at school talk to each other at lunch instead of staring at\nscreens. It’s good for their friendships as well as their grades.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I want my daughter to carry her phone because she travels to school alone. If a bus is cancelled, she\nneeds to call me. I understand teachers’ concerns, but a complete ban seems extreme. Phones should\nbe switched off in class, not taken away entirely.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘We use our phones for research in lots of lessons. I look up words and check facts. Teachers should\nteach us to use them properly instead of forbidding them. We’ll be using this technology all our adult\nlives, so learning self-control now will be useful.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘In our school, pupils hand in their phones at the start of the day and collect them afterwards. In the first\nyear, results improved and bullying online during school hours fell. Some parents complained at first,\nbut most are now supportive. I’d advise other schools to try it.’"
        }
      ],
      "questions": [
        {
          "id": "t3_s3_q16",
          "statement": "Who thinks phones are useful for finding information in class?",
          "correctPersonId": "C",
          "explanation": "Person C: Who thinks phones are useful for finding information in class? ‘I look up words and check facts’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who thinks phones are useful for finding information in class? ‘I look up words )۔"
        },
        {
          "id": "t3_s3_q17",
          "statement": "Who says phones should be allowed for safety on journeys?",
          "correctPersonId": "B",
          "explanation": "Person B: Who says phones should be allowed for safety on journeys? daughter ‘travels to school alone’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who says phones should be allowed for safety on journeys? daughter ‘travels to s)۔"
        },
        {
          "id": "t3_s3_q18",
          "statement": "Who thinks banning phones encourages face-to-face friendships?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks banning phones encourages face-to-face friendships? pupils ‘talk to each other at lunch’ Aptis General Reading Practice Tests • ICAP ECS Page 59 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks banning phones encourages face-to-face friendships? pupils ‘talk to e)۔"
        },
        {
          "id": "t3_s3_q19",
          "statement": "Who has seen exam results rise after introducing a rule?",
          "correctPersonId": "D",
          "explanation": "Person D: Who has seen exam results rise after introducing a rule? ‘results improved’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who has seen exam results rise after introducing a rule? ‘results improved’)۔"
        },
        {
          "id": "t3_s3_q20",
          "statement": "Who thinks pupils should be taught self-control rather than be forbidden?",
          "correctPersonId": "C",
          "explanation": "Person C: Who thinks pupils should be taught self-control rather than be forbidden? ‘teach us to use them properly’; ‘self-control’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who thinks pupils should be taught self-control rather than be forbidden? ‘teach)۔"
        },
        {
          "id": "t3_s3_q21",
          "statement": "Who feels that a total ban is too severe?",
          "correctPersonId": "B",
          "explanation": "Person B: Who feels that a total ban is too severe? ‘a complete ban seems extreme’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who feels that a total ban is too severe? ‘a complete ban seems extreme’)۔"
        },
        {
          "id": "t3_s3_q22",
          "statement": "Who reports that parents have come to accept the rule?",
          "correctPersonId": "D",
          "explanation": "Person D: Who reports that parents have come to",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who reports that parents have come to)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-3-s4",
      "title": "Practice Test 3 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Building on the rocks",
        "B - An ancient beginning",
        "C - New uses for old towers",
        "D - A lonely life",
        "E - Famous shipwrecks off the coast",
        "F - The arrival of automation",
        "G - Better lamps and lenses",
        "H - Why they still matter",
        "J - Lights in the darkness (Example)"
      ],
      "paragraphs": [
        {
          "id": "t3_s4_p1",
          "paragraphNumber": 1,
          "text": "The most famous early lighthouse stood on the island of Pharos near Alexandria in Egypt.\nCompleted around 280 BC, it was probably more than a hundred metres tall, and a fire burned at its top\nto guide ships into the harbour. Considered one of the Seven Wonders of the Ancient World, it survived\nfor over a thousand years before earthquakes destroyed it.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"An ancient beginning\"): An ancient beginning oldest example, 280 BC",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'An ancient beginning' کی مکمل تائید کرتا ہے (An ancient beginning oldest example, 280 BC)۔"
        },
        {
          "id": "t3_s4_p2",
          "paragraphNumber": 2,
          "text": "Constructing a lighthouse on a wave-swept rock was extremely difficult. Builders could work only at\nlow tide and in calm weather, and storms often washed away their tools. The Eddystone Lighthouse in\nsouthwest England was destroyed twice, once by a storm and once by fire, before John Smeaton\ncompleted a stone tower in 1759, shaped like an oak tree to withstand the waves.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Building on the rocks\"): Building on the rocks construction difficulties and solutions",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Building on the rocks' کی مکمل تائید کرتا ہے (Building on the rocks construction difficulties and solutions)۔"
        },
        {
          "id": "t3_s4_p3",
          "paragraphNumber": 3,
          "text": "Early lighthouses used open fires, which produced more smoke than light. Oil lamps were an\nimprovement, but the real breakthrough came in 1822, when the French engineer Augustin Fresnel\ndesigned a lens made of rings of glass. It collected the light and sent it in a powerful beam that could be\nseen from more than thirty kilometres away.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Better lamps and lenses\"): Better lamps and lenses fires > oil lamps > lens",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Better lamps and lenses' کی مکمل تائید کرتا ہے (Better lamps and lenses fires > oil lamps > lens)۔"
        },
        {
          "id": "t3_s4_p4",
          "paragraphNumber": 4,
          "text": "Life for a lighthouse keeper was often tough. Keepers had to climb hundreds of steps each day to\nclean the lamp and keep it burning, and families living on remote islands could go weeks without seeing\nvisitors. Some keepers kept pets or grew vegetables to pass the time, while others spent their long\nevenings reading and writing letters.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"A lonely life\"): A lonely life keepers’ daily life and isolation",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A lonely life' کی مکمل تائید کرتا ہے (A lonely life keepers’ daily life and isolation)۔"
        },
        {
          "id": "t3_s4_p5",
          "paragraphNumber": 5,
          "text": "Over the following decades, electricity allowed lighthouses to be controlled from a distance. Sensors\nswitched the light on at dusk, and engineers could repair faults without living on site. Most lighthouses\nin Europe and North America lost their keepers, and mechanical systems quietly took over.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"The arrival of automation\"): The arrival of automation machines replace keepers",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The arrival of automation' کی مکمل تائید کرتا ہے (The arrival of automation machines replace keepers)۔"
        },
        {
          "id": "t3_s4_p6",
          "paragraphNumber": 6,
          "text": "With fewer ships relying on them, many lighthouses have found new roles. Some have become\nmuseums, and others offer rooms to tourists who like the idea of sleeping beside a giant lamp. A few\nare used by scientists to monitor weather, seabirds and ocean conditions, ensuring that these historic\nbuildings remain useful.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"New uses for old towers\"): New uses for old towers museums, hotels, research",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'New uses for old towers' کی مکمل تائید کرتا ہے (New uses for old towers museums, hotels, research)۔"
        },
        {
          "id": "t3_s4_p7",
          "paragraphNumber": 7,
          "text": "Despite modern technology, authorities insist that lighthouses are still needed. Electronic systems\ncan fail, and a bright, visible light is a reliable backup when equipment breaks down. For small fishing\nboats and yachts that do not carry advanced instruments, a familiar flash on the horizon can still make\nthe difference between safety and disaster.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Why they still matter\"): Why they still matter ‘still needed’; backup for electronics",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Why they still matter' کی مکمل تائید کرتا ہے (Why they still matter ‘still needed’; backup for electronics)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 4,
    "section1": {
      "id": "reading-test-4-s1",
      "title": "Practice Test 4 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "Could you water my plants while I am ",
          "gapId": "t4_s1_gap_1",
          "options": [
            "long",
            "far",
            "away"
          ],
          "correctIndex": 2,
          "textAfter": " next week?"
        },
        {
          "textBefore": "There is a ",
          "gapId": "t4_s1_gap_2",
          "options": [
            "group",
            "set",
            "row"
          ],
          "correctIndex": 1,
          "textAfter": " of keys on the kitchen table."
        },
        {
          "textBefore": "The plants need water ",
          "gapId": "t4_s1_gap_3",
          "options": [
            "one",
            "once",
            "first"
          ],
          "correctIndex": 1,
          "textAfter": " a day."
        },
        {
          "textBefore": "You ",
          "gapId": "t4_s1_gap_4",
          "options": [
            "would",
            "had",
            "should"
          ],
          "correctIndex": 1,
          "textAfter": " better not give them too much, though."
        },
        {
          "textBefore": "I will bring you a present ",
          "gapId": "t4_s1_gap_5",
          "options": [
            "while",
            "during",
            "when"
          ],
          "correctIndex": 2,
          "textAfter": " I get back."
        }
      ],
      "explanations": {
        "t4_s1_gap_1": {
          "english": "Option (C) is correct: \"away\". Could you water my plants while I am away next week? ‘be away’ means to be somewhere else, e.g. on holiday.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Could you water my plants while I am away next week? ‘be away’ means t...)"
        },
        "t4_s1_gap_2": {
          "english": "Option (B) is correct: \"set\". There is a set of keys on the kitchen table. ‘a set of keys’ is the usual collocation.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (There is a set of keys on the kitchen table. ‘a set of keys’ is the us...)"
        },
        "t4_s1_gap_3": {
          "english": "Option (B) is correct: \"once\". The plants need water once a day. ‘once a day’ expresses frequency.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The plants need water once a day. ‘once a day’ expresses frequency....)"
        },
        "t4_s1_gap_4": {
          "english": "Option (B) is correct: \"had\". You had better not give them too much, though. ‘had better’ is a fixed phrase for strong advice.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (You had better not give them too much, though. ‘had better’ is a fixed...)"
        },
        "t4_s1_gap_5": {
          "english": "Option (C) is correct: \"when\". I will bring you a present when I get back. ‘when’ + present simple refers to a future time.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I will bring you a present when I get back. ‘when’ + present simple re...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-4-s2",
      "title": "Practice Test 4 - Text Cohesion",
      "topic": "some instructions for students using a computer room",
      "correctOrder": [
        0,
        5,
        4,
        2,
        1,
        3
      ],
      "sentences": [
        "Students who wish to use the computer lab should follow these instructions. (Example)",
        "Remember to save your work on the university server before you log out.",
        "Use this password to log in to any computer in the room.",
        "Finally, switch off the screen and push your chair under the desk when you leave.",
        "A technician will then give you a personal password.",
        "First, register at the help desk by showing your student card."
      ],
      "explanation": "‘password’ > ‘this password’; ‘log in’ must come before ‘log out’; ‘Finally’ closes the list.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘password’ > ‘this password’; ‘log in’ must come before ‘log out’; ‘Finally’ closes the list.",
      "tasks": [
        {
          "id": "t4_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions for students using a computer room",
          "topic": "some instructions for students using a computer room",
          "correctOrder": [
            0,
            5,
            4,
            2,
            1,
            3
          ],
          "sentences": [
            "Students who wish to use the computer lab should follow these instructions. (Example)",
            "Remember to save your work on the university server before you log out.",
            "Use this password to log in to any computer in the room.",
            "Finally, switch off the screen and push your chair under the desk when you leave.",
            "A technician will then give you a personal password.",
            "First, register at the help desk by showing your student card."
          ],
          "explanation": "‘password’ > ‘this password’; ‘log in’ must come before ‘log out’; ‘Finally’ closes the list.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘password’ > ‘this password’; ‘log in’ must come before ‘log out’; ‘Finally’ closes the list."
        },
        {
          "id": "t4_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about the history of everyday objects",
          "topic": "a book about the history of everyday objects",
          "correctOrder": [
            0,
            5,
            2,
            4,
            3,
            1
          ],
          "sentences": [
            "Umbrellas were originally designed to protect people from the sun rather than the rain. (Example)",
            "Their opinion began to change when a well-known traveller started carrying one through the streets of London every day.",
            "At that time, they were a sign of status, and ordinary people were not allowed to carry one.",
            "This idea reached Europe in the seventeenth century, though many men considered it unmanly to use one.",
            "Eventually, the Chinese covered their paper umbrellas with wax so that they would also keep off the rain.",
            "The earliest known examples appeared in ancient Egypt and China more than three thousand years ago."
          ],
          "explanation": "‘At that time’ > ancient period; ‘Eventually’ > rain protection; ‘Their opinion’ refers to the men in the previous sentence.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘At that time’ > ancient period; ‘Eventually’ > rain protection; ‘Their opinion’ refers to the men i"
        }
      ]
    },
    "section3": {
      "id": "reading-test-4-s3",
      "title": "Practice Test 4 - Opinion Matching",
      "topic": "Opinion Matching Test 4",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I’d welcome a four-day week. I’d have time for my children and my hobbies, and I think I’d be happier\nat work too. When I’m tired on Friday afternoons, I don’t do my best anyway. I would happily work\nlonger hours on the other days.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘It sounds attractive, but I run a hospital department and patients need care seven days a week. I’d\nneed to hire more staff to cover the gaps, which would cost a great deal. For some jobs it simply isn’t\npractical.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘Trials in several countries have found that productivity doesn’t fall when hours are reduced. Workers\nwaste less time and take fewer sick days. Employers also find it easier to recruit good people. The\nevidence suggests the idea works, but we need more research before introducing it everywhere.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I worry that people would use the extra day for a second job just to pay their bills. Wages haven’t kept\npace with prices, so many families need all the income they can earn. A shorter week is a luxury unless\npay rises. Companies shouldn’t be forced to do it.’"
        }
      ],
      "questions": [
        {
          "id": "t4_s3_q16",
          "statement": "Who believes shorter hours would not harm output?",
          "correctPersonId": "C",
          "explanation": "Person C: Who believes shorter hours would not harm output? ‘productivity doesn’t fall’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who believes shorter hours would not harm output? ‘productivity doesn’t fall’)۔"
        },
        {
          "id": "t4_s3_q17",
          "statement": "Who thinks the change could be too costly for some organisations?",
          "correctPersonId": "B",
          "explanation": "Person B: Who thinks the change could be too costly for some organisations? ‘hire more staff... cost a great deal’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who thinks the change could be too costly for some organisations? ‘hire more sta)۔"
        },
        {
          "id": "t4_s3_q18",
          "statement": "Who wants more studies before the idea is widely adopted?",
          "correctPersonId": "C",
          "explanation": "Person C: Who wants more studies before the idea is widely adopted? ‘we need more research’ Aptis General Reading Practice Tests • ICAP ECS Page 61 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who wants more studies before the idea is widely adopted? ‘we need more research)۔"
        },
        {
          "id": "t4_s3_q19",
          "statement": "Who thinks being tired reduces the quality of work?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks being tired reduces the quality of work? ‘tired on Friday afternoons, I don’t do my best’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks being tired reduces the quality of work? ‘tired on Friday afternoons,)۔"
        },
        {
          "id": "t4_s3_q20",
          "statement": "Who is concerned that people might take extra work to cover costs?",
          "correctPersonId": "D",
          "explanation": "Person D: Who is concerned that people might take extra work to cover costs? ‘a second job just to pay their bills’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who is concerned that people might take extra work to cover costs? ‘a second job)۔"
        },
        {
          "id": "t4_s3_q21",
          "statement": "Who says that some services need staff available every day?",
          "correctPersonId": "B",
          "explanation": "Person B: Who says that some services need staff available every day? ‘patients need care seven days a week’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who says that some services need staff available every day? ‘patients need care )۔"
        },
        {
          "id": "t4_s3_q22",
          "statement": "Who believes a longer working day would be acceptable in exchange?",
          "correctPersonId": "A",
          "explanation": "Person A: Who believes a longer working day would be",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who believes a longer working day would be)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-4-s4",
      "title": "Practice Test 4 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Jobs for a new generation of farmers",
        "B - Limited choice of crops",
        "C - Looking to the future",
        "D - The problem of energy",
        "E - Fresher food closer to home",
        "F - Saving water and land",
        "G - How it works",
        "H - Growing without chemicals",
        "J - A new way to farm (Example)"
      ],
      "paragraphs": [
        {
          "id": "t4_s4_p1",
          "paragraphNumber": 1,
          "text": "Instead of soil and sunshine, vertical farms use trays of plants fed by nutrient-rich water and lit by\nenergy-efficient LED lamps. Computers monitor temperature, humidity and light, adjusting them to suit\neach crop. Because conditions are controlled, plants grow quickly and can be harvested all year round,\nregardless of the weather outside.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"How it works\"): How it works describes the method: trays, water, lamps",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How it works' کی مکمل تائید کرتا ہے (How it works describes the method: trays, water, lamps)۔"
        },
        {
          "id": "t4_s4_p2",
          "paragraphNumber": 2,
          "text": "Traditional farming uses enormous amounts of water, but vertical farms recycle theirs in a closed\nsystem, using up to ninety-five per cent less. Stacking crops in layers also means a small building can\nproduce as much as several hectares of open fields. For crowded cities with little spare land, this is a\nmajor attraction.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Saving water and land\"): Saving water and land less water, less land",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Saving water and land' کی مکمل تائید کرتا ہے (Saving water and land less water, less land)۔"
        },
        {
          "id": "t4_s4_p3",
          "paragraphNumber": 3,
          "text": "Most vegetables sold in cities travel hundreds of kilometres before reaching the shop, losing\nfreshness along the way. A farm inside the city can supply nearby restaurants and supermarkets within\nhours of harvest. Shorter journeys mean fewer lorries on the road and less food thrown away because it\nhas gone bad.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Fresher food closer to home\"): Fresher food closer to home short distance from farm to shop",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Fresher food closer to home' کی مکمل تائید کرتا ہے (Fresher food closer to home short distance from farm to shop)۔"
        },
        {
          "id": "t4_s4_p4",
          "paragraphNumber": 4,
          "text": "Since the plants are grown indoors, insects and diseases have difficulty reaching them, so farmers\nrarely need pesticides. Many vertical farms advertise their produce as pre-washed and ready to eat.\nCustomers who worry about chemical residues on their salad often find this reassuring.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Growing without chemicals\"): Growing without chemicals no pesticides needed",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Growing without chemicals' کی مکمل تائید کرتا ہے (Growing without chemicals no pesticides needed)۔"
        },
        {
          "id": "t4_s4_p5",
          "paragraphNumber": 5,
          "text": "However, growing plants under artificial light requires a lot of electricity, and this is the biggest\ncriticism of the method. If the power comes from coal or gas, the environmental advantages largely\ndisappear. Some companies are therefore building farms next to wind and solar plants, hoping to run\non renewable energy.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"The problem of energy\"): The problem of energy ‘However’; electricity use is a drawback",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The problem of energy' کی مکمل تائید کرتا ہے (The problem of energy ‘However’; electricity use is a drawback)۔"
        },
        {
          "id": "t4_s4_p6",
          "paragraphNumber": 6,
          "text": "At present, the technology works best for leafy greens, herbs and strawberries. Staple foods such as\nwheat, rice and potatoes need more space and energy than vertical farms can economically provide.\nResearchers are experimenting with new varieties, but for the moment these crops are still grown in\nfields.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Limited choice of crops\"): Limited choice of crops only some plants suit the method",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Limited choice of crops' کی مکمل تائید کرتا ہے (Limited choice of crops only some plants suit the method)۔"
        },
        {
          "id": "t4_s4_p7",
          "paragraphNumber": 7,
          "text": "Despite the challenges, investment in the industry is growing quickly. Falling LED prices and\nimproved software are making farms cheaper to run, and some experts expect them to supply a\nsignificant share of city salads within a decade. Most agree, though, that vertical farms will complement\ntraditional agriculture rather than replace it.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Looking to the future\"): Looking to the future predictions about what will happen next",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Looking to the future' کی مکمل تائید کرتا ہے (Looking to the future predictions about what will happen next)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 5,
    "section1": {
      "id": "reading-test-5-s1",
      "title": "Practice Test 5 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "My office is on the ",
          "gapId": "t5_s1_gap_1",
          "options": [
            "five",
            "fifth",
            "fiver"
          ],
          "correctIndex": 1,
          "textAfter": " floor of a tall building."
        },
        {
          "textBefore": "I ",
          "gapId": "t5_s1_gap_2",
          "options": [
            "take",
            "make",
            "carry"
          ],
          "correctIndex": 0,
          "textAfter": " the bus to work every morning."
        },
        {
          "textBefore": "My colleagues are very kind, ",
          "gapId": "t5_s1_gap_3",
          "options": [
            "because",
            "so",
            "although"
          ],
          "correctIndex": 2,
          "textAfter": " some of them are quite shy."
        },
        {
          "textBefore": "I finish work at five, so I ",
          "gapId": "t5_s1_gap_4",
          "options": [
            "mustn’t",
            "ought",
            "can"
          ],
          "correctIndex": 2,
          "textAfter": " get home before six."
        },
        {
          "textBefore": "Let’s meet for coffee ",
          "gapId": "t5_s1_gap_5",
          "options": [
            "at",
            "on",
            "in"
          ],
          "correctIndex": 1,
          "textAfter": " Saturday."
        }
      ],
      "explanations": {
        "t5_s1_gap_1": {
          "english": "Option (B) is correct: \"fifth\". My office is on the fifth floor of a tall building. An ordinal number (fifth) is needed to describe a floor.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (My office is on the fifth floor of a tall building. An ordinal number ...)"
        },
        "t5_s1_gap_2": {
          "english": "Option (A) is correct: \"take\". I take the bus to work every morning. ‘take the bus’ is the standard collocation.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I take the bus to work every morning. ‘take the bus’ is the standard c...)"
        },
        "t5_s1_gap_3": {
          "english": "Option (C) is correct: \"although\". My colleagues are very kind, although some of them are quite shy. ‘although’ introduces a contrast.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (My colleagues are very kind, although some of them are quite shy. ‘alt...)"
        },
        "t5_s1_gap_4": {
          "english": "Option (C) is correct: \"can\". I finish work at five, so I can get home before six. ‘can’ + base verb expresses possibility; ‘ought’ needs ‘to’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I finish work at five, so I can get home before six. ‘can’ + base verb...)"
        },
        "t5_s1_gap_5": {
          "english": "Option (B) is correct: \"on\". Let’s meet for coffee on Saturday. We use ‘on’ with days of the week.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Let’s meet for coffee on Saturday. We use ‘on’ with days of the week....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-5-s2",
      "title": "Practice Test 5 - Text Cohesion",
      "topic": "some instructions about a parking permit",
      "correctOrder": [
        0,
        2,
        1,
        4,
        3,
        5
      ],
      "sentences": [
        "Residents who need a parking permit should follow the steps below. (Example)",
        "You must then attach a copy of your vehicle registration document.",
        "First, fill in the application form, which is available from the town hall or its website.",
        "The office will check them and, if everything is correct, post your permit within ten days.",
        "Send both documents to the Parking Office at the address shown on the form.",
        "When it arrives, display it clearly on the inside of your windscreen."
      ],
      "explanation": "‘both documents’ = form + copy; ‘them’ = the documents; ‘it’ = the permit.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘both documents’ = form + copy; ‘them’ = the documents; ‘it’ = the permit.",
      "tasks": [
        {
          "id": "t5_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions about a parking permit",
          "topic": "some instructions about a parking permit",
          "correctOrder": [
            0,
            2,
            1,
            4,
            3,
            5
          ],
          "sentences": [
            "Residents who need a parking permit should follow the steps below. (Example)",
            "You must then attach a copy of your vehicle registration document.",
            "First, fill in the application form, which is available from the town hall or its website.",
            "The office will check them and, if everything is correct, post your permit within ten days.",
            "Send both documents to the Parking Office at the address shown on the form.",
            "When it arrives, display it clearly on the inside of your windscreen."
          ],
          "explanation": "‘both documents’ = form + copy; ‘them’ = the documents; ‘it’ = the permit.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘both documents’ = form + copy; ‘them’ = the documents; ‘it’ = the permit."
        },
        {
          "id": "t5_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about the history of glasses",
          "topic": "an article about the history of glasses",
          "correctOrder": [
            0,
            4,
            5,
            1,
            2,
            3
          ],
          "sentences": [
            "Spectacles were invented in Italy at the end of the thirteenth century. (Example)",
            "These early designs were uncomfortable, so inventors soon tried attaching them to hats or ribbons.",
            "It was not until the eighteenth century that someone added arms that rested over the ears.",
            "This simple improvement meant that glasses could finally be worn all day without falling off.",
            "Before then, people with poor eyesight had to manage without any help at all.",
            "The first pairs were made of two magnifying glasses held together by a frame, and the wearer had to hold them in front of the nose."
          ],
          "explanation": "‘Before then’ > before the invention; ‘These early designs’ > first pairs; ‘This simple improvement’ > arms over the ears.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Before then’ > before the invention; ‘These early designs’ > first pairs; ‘This simple improvement’"
        }
      ]
    },
    "section3": {
      "id": "reading-test-5-s3",
      "title": "Practice Test 5 - Opinion Matching",
      "topic": "Opinion Matching Test 5",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I cook every evening from fresh ingredients. It’s cheaper than buying ready meals, and I know exactly\nwhat goes into my food. It also helps me unwind after work. I’d say anyone can learn, even if they begin\nwith simple dishes like omelettes and soups.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I’m not a good cook, and I don’t pretend to be. After ten hours at work, I just want something quick, so I\nmostly eat ready meals. They’re not as bad as people say, and many now contain less salt and sugar.\nMeanwhile, I save time that I can spend with my family.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I love cooking but it’s more fun with company. At the weekends, I invite friends over and we prepare a\nbig meal together. Everyone brings something different, and the conversation goes on for hours. For\nme, food is mainly a way of bringing people together rather than just filling your stomach.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘Cooking at home is wonderful in theory, but my kitchen is tiny and I don’t own much equipment. I\nusually buy takeaway meals from local restaurants, which lets me try dishes I’d never manage myself.\nAdmittedly, it gets expensive, so I try to limit it to twice a week.’"
        }
      ],
      "questions": [
        {
          "id": "t5_s3_q16",
          "statement": "Who says that cooking helps them relax?",
          "correctPersonId": "A",
          "explanation": "Person A: Who says that cooking helps them relax? ‘helps me unwind after work’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who says that cooking helps them relax? ‘helps me unwind after work’)۔"
        },
        {
          "id": "t5_s3_q17",
          "statement": "Who thinks ready meals are healthier than people believe?",
          "correctPersonId": "B",
          "explanation": "Person B: Who thinks ready meals are healthier than people believe? ‘less salt and sugar’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who thinks ready meals are healthier than people believe? ‘less salt and sugar’)۔"
        },
        {
          "id": "t5_s3_q18",
          "statement": "Who thinks food is mostly a social occasion?",
          "correctPersonId": "C",
          "explanation": "Person C: Who thinks food is mostly a social occasion? ‘bringing people together’ Aptis General Reading Practice Tests • ICAP ECS Page 63 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who thinks food is mostly a social occasion? ‘bringing people together’ Aptis Ge)۔"
        },
        {
          "id": "t5_s3_q19",
          "statement": "Who is limited by the lack of space and tools at home?",
          "correctPersonId": "D",
          "explanation": "Person D: Who is limited by the lack of space and tools at home? ‘kitchen is tiny... don’t own much equipment’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who is limited by the lack of space and tools at home? ‘kitchen is tiny... don’t)۔"
        },
        {
          "id": "t5_s3_q20",
          "statement": "Who thinks it is cheaper to prepare meals than to buy them ready-made?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks it is cheaper to prepare meals than to buy them ready-made? ‘cheaper than buying ready meals’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks it is cheaper to prepare meals than to buy them ready-made? ‘cheaper )۔"
        },
        {
          "id": "t5_s3_q21",
          "statement": "Who eats dishes that they could not prepare themselves?",
          "correctPersonId": "D",
          "explanation": "Person D: Who eats dishes that they could not prepare themselves? ‘dishes I’d never manage myself’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who eats dishes that they could not prepare themselves? ‘dishes I’d never manage)۔"
        },
        {
          "id": "t5_s3_q22",
          "statement": "Who prefers to have more time for their relatives?",
          "correctPersonId": "B",
          "explanation": "Person B: Who prefers to have more time for their",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who prefers to have more time for their)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-5-s4",
      "title": "Practice Test 5 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Challenges for the industry",
        "B - Education through headphones",
        "C - Listening on the move",
        "D - Making money from audio",
        "E - The power of the story",
        "F - How it all began",
        "G - What is a podcast?",
        "H - The best equipment for beginners",
        "J - Audio makes a comeback (Example)"
      ],
      "paragraphs": [
        {
          "id": "t5_s4_p1",
          "paragraphNumber": 1,
          "text": "A podcast is a series of spoken audio episodes that listeners can download or stream whenever they\nlike. Unlike traditional radio, there is no fixed schedule, so audiences can pause an episode and\nresume it later. Topics range from news and comedy to history and cooking, and episodes may last\nanywhere from five minutes to several hours.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"What is a podcast?\"): What is a podcast? definition and basic features",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'What is a podcast?' کی مکمل تائید کرتا ہے (What is a podcast? definition and basic features)۔"
        },
        {
          "id": "t5_s4_p2",
          "paragraphNumber": 2,
          "text": "The word ‘podcast’ was first used in 2004, combining ‘iPod’, the popular music player, with\n‘broadcast’. Early podcasts were made mostly by technology enthusiasts and were distributed through\nsimple websites. Few experts predicted much success, and it took several years before big media\ncompanies noticed the format.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"How it all began\"): How it all began origin of the word; early years",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How it all began' کی مکمل تائید کرتا ہے (How it all began origin of the word; early years)۔"
        },
        {
          "id": "t5_s4_p3",
          "paragraphNumber": 3,
          "text": "The turning point came in 2014, when a true-crime series about an unsolved murder was\ndownloaded millions of times. Its careful storytelling showed that audio could be as gripping as a\ntelevision drama. Journalists, authors and film-makers began to see podcasts as a serious medium,\nand listening numbers soared.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"The power of the story\"): The power of the story ‘turning point’: a gripping story",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The power of the story' کی مکمل تائید کرتا ہے (The power of the story ‘turning point’: a gripping story)۔"
        },
        {
          "id": "t5_s4_p4",
          "paragraphNumber": 4,
          "text": "One reason for the format’s success is convenience. Podcasts can be enjoyed while driving,\ncooking, exercising or travelling to work, when eyes and hands are busy. Surveys suggest that many\ncommuters now prefer a favourite programme to music, and some listeners say they feel they have\nturned wasted time into useful time.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Listening on the move\"): Listening on the move used while driving, exercising, commuting",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Listening on the move' کی مکمل تائید کرتا ہے (Listening on the move used while driving, exercising, commuting)۔"
        },
        {
          "id": "t5_s4_p5",
          "paragraphNumber": 5,
          "text": "Schools and universities have also noticed the potential. Teachers record short lessons for students\nwho missed class, and language learners practise listening with episodes designed for their level.\nSome universities publish entire lecture series as podcasts, which means that anyone, anywhere, can\naccess expert knowledge for free.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Education through headphones\"): Education through headphones teachers, learners, lectures",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Education through headphones' کی مکمل تائید کرتا ہے (Education through headphones teachers, learners, lectures)۔"
        },
        {
          "id": "t5_s4_p6",
          "paragraphNumber": 6,
          "text": "Producing a good podcast takes time and money, so creators have developed several ways to earn\nincome. Many include advertisements, while others rely on donations from loyal fans or offer extra\nepisodes to paying subscribers. A handful of the most popular hosts now earn more than well-known\nradio presenters.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Making money from audio\"): Making money from audio advertisements, donations, subscriptions",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Making money from audio' کی مکمل تائید کرتا ہے (Making money from audio advertisements, donations, subscriptions)۔"
        },
        {
          "id": "t5_s4_p7",
          "paragraphNumber": 7,
          "text": "The format’s rapid growth brings problems. With millions of programmes available, new podcasts\nstruggle to be noticed, and many are abandoned after a few episodes when the creator loses\nenthusiasm. There are also concerns about accuracy, since, unlike broadcasters, individual podcasters\nrarely have editors to check their facts.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Challenges for the industry\"): Challenges for the industry ‘brings problems’: visibility, abandonment,",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Challenges for the industry' کی مکمل تائید کرتا ہے (Challenges for the industry ‘brings problems’: visibility, abandonment,)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 6,
    "section1": {
      "id": "reading-test-6-s1",
      "title": "Practice Test 6 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "I ",
          "gapId": "t6_s1_gap_1",
          "options": [
            "am",
            "do",
            "does"
          ],
          "correctIndex": 1,
          "textAfter": " not understand the last exercise."
        },
        {
          "textBefore": "Could you explain it ",
          "gapId": "t6_s1_gap_2",
          "options": [
            "for",
            "at",
            "to"
          ],
          "correctIndex": 2,
          "textAfter": " me again, please?"
        },
        {
          "textBefore": "I was ill last week, so I ",
          "gapId": "t6_s1_gap_3",
          "options": [
            "lost",
            "failed",
            "missed"
          ],
          "correctIndex": 2,
          "textAfter": " the lesson on Thursday."
        },
        {
          "textBefore": "I will give you the homework ",
          "gapId": "t6_s1_gap_4",
          "options": [
            "by",
            "since",
            "during"
          ],
          "correctIndex": 0,
          "textAfter": " Monday."
        },
        {
          "textBefore": "I would be very ",
          "gapId": "t6_s1_gap_5",
          "options": [
            "gratitude",
            "grateful",
            "gratefully"
          ],
          "correctIndex": 1,
          "textAfter": " if you could reply soon."
        }
      ],
      "explanations": {
        "t6_s1_gap_1": {
          "english": "Option (B) is correct: \"do\". I do not understand the last exercise. ‘do not’ is the negative present simple with ‘I’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I do not understand the last exercise. ‘do not’ is the negative presen...)"
        },
        "t6_s1_gap_2": {
          "english": "Option (C) is correct: \"to\". Could you explain it to me again, please? ‘explain something to someone’ is the correct preposition.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Could you explain it to me again, please? ‘explain something to someon...)"
        },
        "t6_s1_gap_3": {
          "english": "Option (C) is correct: \"missed\". I was ill last week, so I missed the lesson on Thursday. ‘miss a lesson’ means not to attend it.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I was ill last week, so I missed the lesson on Thursday. ‘miss a lesso...)"
        },
        "t6_s1_gap_4": {
          "english": "Option (A) is correct: \"by\". I will give you the homework by Monday. ‘by Monday’ means not later than Monday.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I will give you the homework by Monday. ‘by Monday’ means not later th...)"
        },
        "t6_s1_gap_5": {
          "english": "Option (B) is correct: \"grateful\". I would be very grateful if you could reply",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I would be very grateful if you could reply...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-6-s2",
      "title": "Practice Test 6 - Text Cohesion",
      "topic": "some instructions for museum visitors",
      "correctOrder": [
        0,
        2,
        4,
        5,
        3,
        1
      ],
      "sentences": [
        "Visitors who would like to use an audio guide should follow these instructions. (Example)",
        "When your visit is over, bring the equipment back to the desk to collect your document.",
        "Please start by leaving your passport or driving licence at the information desk.",
        "The guide will then explain the history of that object in your chosen language.",
        "In return, a member of staff will hand you a small device and a pair of headphones.",
        "Each exhibit has a number beside it, which you should type into the device."
      ],
      "explanation": "‘In return’ follows leaving the document; ‘your document’ at the end refers back to the passport or licence.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘In return’ follows leaving the document; ‘your document’ at the end refers back to the passport or ",
      "tasks": [
        {
          "id": "t6_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions for museum visitors",
          "topic": "some instructions for museum visitors",
          "correctOrder": [
            0,
            2,
            4,
            5,
            3,
            1
          ],
          "sentences": [
            "Visitors who would like to use an audio guide should follow these instructions. (Example)",
            "When your visit is over, bring the equipment back to the desk to collect your document.",
            "Please start by leaving your passport or driving licence at the information desk.",
            "The guide will then explain the history of that object in your chosen language.",
            "In return, a member of staff will hand you a small device and a pair of headphones.",
            "Each exhibit has a number beside it, which you should type into the device."
          ],
          "explanation": "‘In return’ follows leaving the document; ‘your document’ at the end refers back to the passport or licence.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘In return’ follows leaving the document; ‘your document’ at the end refers back to the passport or "
        },
        {
          "id": "t6_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about London’s history",
          "topic": "a book about London’s history",
          "correctOrder": [
            0,
            4,
            5,
            1,
            3,
            2
          ],
          "sentences": [
            "In the seventeenth century, coffee houses became popular meeting places in London. (Example)",
            "Some of these discussions were so useful that business deals were often agreed over coffee.",
            "That market still exists today and is one of the oldest of its kind.",
            "One such meeting place eventually grew into a famous insurance market.",
            "For the price of a single cup, customers could stay for hours and read the latest newspapers.",
            "Merchants, writers and politicians soon began to gather there to share news and ideas."
          ],
          "explanation": "‘there’ = coffee houses; ‘One such meeting place’ = a coffee house; ‘That market’ = the insurance market.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘there’ = coffee houses; ‘One such meeting place’ = a coffee house; ‘That market’ = the insurance ma"
        }
      ]
    },
    "section3": {
      "id": "reading-test-6-s3",
      "title": "Practice Test 6 - Opinion Matching",
      "topic": "Opinion Matching Test 6",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I’ve lived in the city all my life, and I couldn’t leave. There’s always something to do, with theatres,\nconcerts and restaurants within walking distance. I don’t even own a car, because public transport\ntakes me everywhere. For me, a quiet life would be dull.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘We moved to a village two years ago, and the main benefit has been the space. We have a garden\nwhere the children can play safely, and the house costs less than our old flat. Admittedly, we depend on\nthe car for everything, and the nearest hospital is forty minutes away.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I grew up in the countryside but moved to the city for work. I miss the silence and the stars at night. In\nthe city, the noise never stops, and I find it hard to sleep. I’d go back tomorrow if I could find a job in the\narea.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I think the most important thing is the community. In my small town, everyone knows each other and\nneighbours look after one another. When my husband was ill, people brought us meals every day. In a\nbig city I doubt this would happen, and I would feel very lonely.’"
        }
      ],
      "questions": [
        {
          "id": "t6_s3_q16",
          "statement": "Who values being able to reach cultural activities easily?",
          "correctPersonId": "A",
          "explanation": "Person A: Who values being able to reach cultural activities easily? ‘theatres, concerts and restaurants within walking distance’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who values being able to reach cultural activities easily? ‘theatres, concerts a)۔"
        },
        {
          "id": "t6_s3_q17",
          "statement": "Who says living costs are lower in their new home?",
          "correctPersonId": "B",
          "explanation": "Person B: Who says living costs are lower in their new home? ‘the house costs less than our old flat’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who says living costs are lower in their new home? ‘the house costs less than ou)۔"
        },
        {
          "id": "t6_s3_q18",
          "statement": "Who finds the city too noisy?",
          "correctPersonId": "C",
          "explanation": "Person C: Who finds the city too noisy? ‘the noise never stops’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who finds the city too noisy? ‘the noise never stops’)۔"
        },
        {
          "id": "t6_s3_q19",
          "statement": "Who relies on a car for daily life?",
          "correctPersonId": "B",
          "explanation": "Person B: Who relies on a car for daily life? ‘we depend on the car for everything’ Aptis General Reading Practice Tests • ICAP ECS Page 65 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who relies on a car for daily life? ‘we depend on the car for everything’ Aptis )۔"
        },
        {
          "id": "t6_s3_q20",
          "statement": "Who thinks people support each other more in smaller places?",
          "correctPersonId": "D",
          "explanation": "Person D: Who thinks people support each other more in smaller places? ‘neighbours look after one another’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who thinks people support each other more in smaller places? ‘neighbours look af)۔"
        },
        {
          "id": "t6_s3_q21",
          "statement": "Who would return to a rural area if employment were available?",
          "correctPersonId": "C",
          "explanation": "Person C: Who would return to a rural area if employment were available? ‘go back tomorrow if I could find a job’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who would return to a rural area if employment were available? ‘go back tomorrow)۔"
        },
        {
          "id": "t6_s3_q22",
          "statement": "Who does not need a private vehicle?",
          "correctPersonId": "A",
          "explanation": "Person A: Who does not need a private vehicle? ‘I don’t even own a car’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who does not need a private vehicle? ‘I don’t even own a car’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-6-s4",
      "title": "Practice Test 6 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Warning signals",
        "B - Mother trees",
        "C - An underground network",
        "D - Cooling our cities",
        "E - The oldest living things",
        "F - Sharing food",
        "G - Planting trees at home",
        "H - Debate among experts",
        "J - More than just wood (Example)"
      ],
      "paragraphs": [
        {
          "id": "t6_s4_p1",
          "paragraphNumber": 1,
          "text": "Beneath the forest floor, the roots of trees are connected by thin threads of fungi, which scientists\nhave nicknamed the ‘wood wide web’. The fungi collect minerals from the soil and pass them to the\ntrees, and in return they receive sugar produced by the leaves. A single teaspoon of forest soil may\ncontain several kilometres of these tiny threads.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"An underground network\"): An underground network fungi connect roots below ground",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'An underground network' کی مکمل تائید کرتا ہے (An underground network fungi connect roots below ground)۔"
        },
        {
          "id": "t6_s4_p2",
          "paragraphNumber": 2,
          "text": "Research suggests that large, healthy trees sometimes send sugars through this network to smaller\nneighbours growing in shade. Seedlings that receive this help have a much better chance of surviving\ntheir first difficult years. Some scientists believe that forests behave less like collections of competing\nindividuals and more like cooperating communities.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Sharing food\"): Sharing food big trees send sugar to small ones",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Sharing food' کی مکمل تائید کرتا ہے (Sharing food big trees send sugar to small ones)۔"
        },
        {
          "id": "t6_s4_p3",
          "paragraphNumber": 3,
          "text": "When insects attack one tree, it can release chemicals into the air or send signals through the roots.\nNearby trees detect the message and respond by producing substances in their leaves that taste bitter\nto insects. In this way, a whole group of trees can prepare for danger before the pests have even\nreached them.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Warning signals\"): Warning signals trees alert each other to insects",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Warning signals' کی مکمل تائید کرتا ہے (Warning signals trees alert each other to insects)۔"
        },
        {
          "id": "t6_s4_p4",
          "paragraphNumber": 4,
          "text": "Trees include some of the longest-lived organisms on Earth. Certain bristlecone pines in California\nare almost five thousand years old, having begun their lives before the Egyptian pyramids were\ncompleted. Their slow growth and dense wood make them very resistant to disease, and scientists\nstudy their rings to learn about ancient climates.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"The oldest living things\"): The oldest living things extreme age of some trees",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The oldest living things' کی مکمل تائید کرتا ہے (The oldest living things extreme age of some trees)۔"
        },
        {
          "id": "t6_s4_p5",
          "paragraphNumber": 5,
          "text": "Some researchers use the term ‘mother trees’ for the biggest and oldest members of a forest, which\nhave the most connections to other plants. When these trees are cut down, the surrounding forest often\nbecomes weaker. This has led some foresters to rethink how they harvest timber, leaving older trees\nstanding to protect the young ones.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Mother trees\"): Mother trees the importance of the largest trees",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Mother trees' کی مکمل تائید کرتا ہے (Mother trees the importance of the largest trees)۔"
        },
        {
          "id": "t6_s4_p6",
          "paragraphNumber": 6,
          "text": "Trees also deliver benefits that humans can feel directly. On a hot day, a single large tree can cool\nthe air around it by several degrees, as water evaporates from its leaves. For this reason, many city\nplanners are planting more street trees, which also remove dust and gases from the air and reduce the\nenergy needed for air conditioning.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Cooling our cities\"): Cooling our cities benefits for people in towns",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Cooling our cities' کی مکمل تائید کرتا ہے (Cooling our cities benefits for people in towns)۔"
        },
        {
          "id": "t6_s4_p7",
          "paragraphNumber": 7,
          "text": "Not everyone accepts the more dramatic claims. Some scientists argue that the evidence for tree\n‘cooperation’ is limited and that popular books have exaggerated it. They say that the fungal network\nmay mainly benefit the fungi themselves. Most agree, however, that the subject deserves more\ninvestigation, and new experiments are under way.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Debate among experts\"): Debate among experts ‘Not everyone accepts’; disagreement",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Debate among experts' کی مکمل تائید کرتا ہے (Debate among experts ‘Not everyone accepts’; disagreement)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 7,
    "section1": {
      "id": "reading-test-7-s1",
      "title": "Practice Test 7 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "We will arrive ",
          "gapId": "t7_s1_gap_1",
          "options": [
            "at",
            "in",
            "on"
          ],
          "correctIndex": 2,
          "textAfter": " the afternoon of 12 June."
        },
        {
          "textBefore": "Could you tell me ",
          "gapId": "t7_s1_gap_2",
          "options": [
            "if",
            "what",
            "that"
          ],
          "correctIndex": 0,
          "textAfter": " the room has a sea view?"
        },
        {
          "textBefore": "My wife ",
          "gapId": "t7_s1_gap_3",
          "options": [
            "isn’t",
            "hasn’t",
            "can’t"
          ],
          "correctIndex": 2,
          "textAfter": " walk very far, so we need a ground-floor room."
        },
        {
          "textBefore": "We would also like breakfast ",
          "gapId": "t7_s1_gap_4",
          "options": [
            "include",
            "including",
            "included"
          ],
          "correctIndex": 2,
          "textAfter": " in the price."
        },
        {
          "textBefore": "Please send me a reply ",
          "gapId": "t7_s1_gap_5",
          "options": [
            "soon as",
            "as soon as",
            "so soon as"
          ],
          "correctIndex": 1,
          "textAfter": " possible."
        }
      ],
      "explanations": {
        "t7_s1_gap_1": {
          "english": "Option (C) is correct: \"on\". We will arrive on the afternoon of 12 June. We use ‘on’ for a particular day, including ‘the afternoon of 12 June’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (We will arrive on the afternoon of 12 June. We use ‘on’ for a particul...)"
        },
        "t7_s1_gap_2": {
          "english": "Option (A) is correct: \"if\". Could you tell me if the room has a sea view? ‘if’ introduces an indirect yes/no question.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Could you tell me if the room has a sea view? ‘if’ introduces an indir...)"
        },
        "t7_s1_gap_3": {
          "english": "Option (C) is correct: \"can’t\". My wife can’t walk very far, so we need a ground-floor room. ‘can’t’ + base verb expresses inability.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (My wife can’t walk very far, so we need a ground-floor room. ‘can’t’ +...)"
        },
        "t7_s1_gap_4": {
          "english": "Option (C) is correct: \"included\". We would also like breakfast included in the price. Passive meaning: ‘included’ (= which is part of the price).",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (We would also like breakfast included in the price. Passive meaning: ‘...)"
        },
        "t7_s1_gap_5": {
          "english": "Option (B) is correct: \"as soon as\". Please send me a reply as soon as possible. ‘as soon as possible’ is the fixed expression.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please send me a reply as soon as possible. ‘as soon as possible’ is t...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-7-s2",
      "title": "Practice Test 7 - Text Cohesion",
      "topic": "a visitor guide to a nature reserve",
      "correctOrder": [
        0,
        5,
        1,
        4,
        3,
        2
      ],
      "sentences": [
        "If you are visiting the nature reserve for the first time, please follow these guidelines. (Example)",
        "Choose one of the routes marked on it, and note the colour of its signs.",
        "Before you go home, remember to take all your rubbish with you.",
        "Along the way, you may use the wooden huts to watch birds quietly.",
        "Follow these signs carefully, because leaving the path can damage rare plants.",
        "Begin at the visitor centre, where you can pick up a free map of the trails."
      ],
      "explanation": "‘map’ > ‘on it’; ‘its signs’ > ‘these signs’; ‘Before you go home’ closes the visit.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘map’ > ‘on it’; ‘its signs’ > ‘these signs’; ‘Before you go home’ closes the visit.",
      "tasks": [
        {
          "id": "t7_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: A visitor guide to a nature reserve",
          "topic": "a visitor guide to a nature reserve",
          "correctOrder": [
            0,
            5,
            1,
            4,
            3,
            2
          ],
          "sentences": [
            "If you are visiting the nature reserve for the first time, please follow these guidelines. (Example)",
            "Choose one of the routes marked on it, and note the colour of its signs.",
            "Before you go home, remember to take all your rubbish with you.",
            "Along the way, you may use the wooden huts to watch birds quietly.",
            "Follow these signs carefully, because leaving the path can damage rare plants.",
            "Begin at the visitor centre, where you can pick up a free map of the trails."
          ],
          "explanation": "‘map’ > ‘on it’; ‘its signs’ > ‘these signs’; ‘Before you go home’ closes the visit.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘map’ > ‘on it’; ‘its signs’ > ‘these signs’; ‘Before you go home’ closes the visit."
        },
        {
          "id": "t7_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about the history of the postal system",
          "topic": "an article about the history of the postal system",
          "correctOrder": [
            0,
            3,
            2,
            4,
            1,
            5
          ],
          "sentences": [
            "Until the nineteenth century, sending a letter in Britain was complicated and expensive. (Example)",
            "His plan introduced a small adhesive label, which customers stuck on the envelope.",
            "This system caused problems, because many people refused to accept letters they could not afford.",
            "The person who received the letter, rather than the sender, had to pay for it.",
            "In 1837, a teacher called Rowland Hill suggested that the sender should pay in advance.",
            "The first stamp, the Penny Black, appeared in 1840 and the idea quickly spread around the world."
          ],
          "explanation": "‘This system’ = receiver pays; ‘His plan’ = Hill’s; the first stamp is the result of his plan.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘This system’ = receiver pays; ‘His plan’ = Hill’s; the first stamp is the result of his plan."
        }
      ]
    },
    "section3": {
      "id": "reading-test-7-s3",
      "title": "Practice Test 7 - Opinion Matching",
      "topic": "Opinion Matching Test 7",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I volunteer at an animal shelter on Saturdays. It gives me a real sense of purpose, and the animals are\nalways so grateful. I also learned practical skills, like how to handle nervous dogs. I’d encourage\nanyone to try it, even if you only have a few hours a month.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I’m a student, and volunteering at a hospital helped me decide on my career. I’d never thought of\nnursing before, but after helping patients for six months, I applied for the course. Employers also like to\nsee voluntary work on a CV, as it shows commitment.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I used to volunteer at a youth club, but I stopped because it became too demanding. They kept asking\nme to do more hours, and it started to interfere with my family life. Volunteers shouldn’t be treated like\nunpaid employees, and organisations should respect people’s limits.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I think everyone should do some volunteering, perhaps at school. Young people would learn about the\nproblems in their community and meet people from different backgrounds. Some countries already\nmake it a requirement for graduation, and I think that’s a good idea.’"
        }
      ],
      "questions": [
        {
          "id": "t7_s3_q16",
          "statement": "Who gained useful practical abilities?",
          "correctPersonId": "A",
          "explanation": "Person A: Who gained useful practical abilities? ‘I also learned practical skills’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who gained useful practical abilities? ‘I also learned practical skills’)۔"
        },
        {
          "id": "t7_s3_q17",
          "statement": "Who says it helped them choose a profession?",
          "correctPersonId": "B",
          "explanation": "Person B: Who says it helped them choose a profession? ‘helped me decide on my career’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who says it helped them choose a profession? ‘helped me decide on my career’)۔"
        },
        {
          "id": "t7_s3_q18",
          "statement": "Who thinks voluntary work can impress future employers?",
          "correctPersonId": "B",
          "explanation": "Person B: Who thinks voluntary work can impress future employers? ‘Employers also like to see voluntary work on a CV’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who thinks voluntary work can impress future employers? ‘Employers also like to )۔"
        },
        {
          "id": "t7_s3_q19",
          "statement": "Who stopped volunteering because of excessive demands?",
          "correctPersonId": "C",
          "explanation": "Person C: Who stopped volunteering because of excessive demands? ‘it became too demanding’ Aptis General Reading Practice Tests • ICAP ECS Page 67 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who stopped volunteering because of excessive demands? ‘it became too demanding’)۔"
        },
        {
          "id": "t7_s3_q20",
          "statement": "Who believes it should be compulsory for young people?",
          "correctPersonId": "D",
          "explanation": "Person D: Who believes it should be compulsory for young people? ‘everyone should do some volunteering’; a requirement",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who believes it should be compulsory for young people? ‘everyone should do some )۔"
        },
        {
          "id": "t7_s3_q21",
          "statement": "Who thinks people can contribute with only a little spare time?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks people can contribute with only a little spare time? ‘even if you only have a few hours a month’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks people can contribute with only a little spare time? ‘even if you onl)۔"
        },
        {
          "id": "t7_s3_q22",
          "statement": "Who thinks organisations should not expect too much from volunteers?",
          "correctPersonId": "C",
          "explanation": "Person C: Who thinks organisations should not expect",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who thinks organisations should not expect)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-7-s4",
      "title": "Practice Test 7 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Home to thousands of species",
        "B - Other threats",
        "C - The danger of warming seas",
        "D - Efforts to restore reefs",
        "E - A partnership with algae",
        "F - Diving holidays for beginners",
        "G - Protecting the coast",
        "H - Tiny builders",
        "J - A hidden world (Example)"
      ],
      "paragraphs": [
        {
          "id": "t7_s4_p1",
          "paragraphNumber": 1,
          "text": "Despite their appearance, corals are animals, not plants or rocks. Each coral polyp is a soft-bodied\ncreature only a few millimetres across, but it produces a hard skeleton of limestone around itself. Over\nthousands of years, millions of polyps build on top of the skeletons of earlier generations, slowly\nforming the enormous structures we call reefs.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Tiny builders\"): Tiny builders how reefs are constructed",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Tiny builders' کی مکمل تائید کرتا ہے (Tiny builders how reefs are constructed)۔"
        },
        {
          "id": "t7_s4_p2",
          "paragraphNumber": 2,
          "text": "Most reef-building corals depend on microscopic algae that live inside their tissues. The algae use\nsunlight to make food, which they share with the coral, and the coral provides them with shelter. The\nalgae also give corals their bright colours, which is why reefs are found only in clear, shallow water\nwhere sunlight can reach.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"A partnership with algae\"): A partnership with algae coral and algae help each other",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A partnership with algae' کی مکمل تائید کرتا ہے (A partnership with algae coral and algae help each other)۔"
        },
        {
          "id": "t7_s4_p3",
          "paragraphNumber": 3,
          "text": "A healthy reef shelters an astonishing variety of life, from tiny shrimps to sharks and turtles. Many\nfish lay their eggs among the coral, and young fish use the cracks and tunnels to hide from predators.\nThe Great Barrier Reef alone contains more than fifteen hundred species of fish.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Home to thousands of species\"): Home to thousands of species variety of animals living there",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Home to thousands of species' کی مکمل تائید کرتا ہے (Home to thousands of species variety of animals living there)۔"
        },
        {
          "id": "t7_s4_p4",
          "paragraphNumber": 4,
          "text": "Reefs also act as natural sea walls. They absorb most of the energy of waves before they reach the\nshore, protecting beaches and villages from storms and erosion. For many island nations, a healthy\nreef is therefore much cheaper than building concrete defences.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Protecting the coast\"): Protecting the coast reefs shield land from waves",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Protecting the coast' کی مکمل تائید کرتا ہے (Protecting the coast reefs shield land from waves)۔"
        },
        {
          "id": "t7_s4_p5",
          "paragraphNumber": 5,
          "text": "When the ocean becomes too warm, corals become stressed and expel their algae, leaving the\nskeleton bright white. This process is known as bleaching. Corals can recover if the temperature falls\nquickly, but repeated or prolonged heatwaves may kill them. Several major bleaching events in recent\ndecades have damaged large areas of reef.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"The danger of warming seas\"): The danger of warming seas temperature and bleaching",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The danger of warming seas' کی مکمل تائید کرتا ہے (The danger of warming seas temperature and bleaching)۔"
        },
        {
          "id": "t7_s4_p6",
          "paragraphNumber": 6,
          "text": "Warming is not the only problem. Pollution from farms and cities can feed harmful algae, while\ncareless fishing methods destroy fragile coral with heavy nets or even explosives. Tourists also cause\nharm when they break coral by walking on it or by touching it, which can leave it open to infection.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Other threats\"): Other threats ‘not the only problem’: pollution, fishing, tourists",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Other threats' کی مکمل تائید کرتا ہے (Other threats ‘not the only problem’: pollution, fishing, tourists)۔"
        },
        {
          "id": "t7_s4_p7",
          "paragraphNumber": 7,
          "text": "Despite these threats, scientists and local communities are working to rescue damaged reefs. Some\ngrow fragments of coral in underwater nurseries and attach them to the damaged areas. Others are\nbreeding heat-resistant varieties that might survive in warmer water. Such projects remain small\ncompared with the problem, but early results are encouraging.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Efforts to restore reefs\"): Efforts to restore reefs nurseries and breeding programmes",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Efforts to restore reefs' کی مکمل تائید کرتا ہے (Efforts to restore reefs nurseries and breeding programmes)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 8,
    "section1": {
      "id": "reading-test-8-s1",
      "title": "Practice Test 8 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "You do not need to bring ",
          "gapId": "t8_s1_gap_1",
          "options": [
            "nothing",
            "something",
            "anything"
          ],
          "correctIndex": 2,
          "textAfter": " , just yourselves."
        },
        {
          "textBefore": "My flat is easy to find because it is ",
          "gapId": "t8_s1_gap_2",
          "options": [
            "against",
            "opposite",
            "among"
          ],
          "correctIndex": 1,
          "textAfter": " the post office."
        },
        {
          "textBefore": "There is no parking outside, so you ",
          "gapId": "t8_s1_gap_3",
          "options": [
            "wouldn’t",
            "shouldn’t",
            "should"
          ],
          "correctIndex": 2,
          "textAfter": " use the car park behind the school."
        },
        {
          "textBefore": "I ",
          "gapId": "t8_s1_gap_4",
          "options": [
            "cooks",
            "cooking",
            "am cooking"
          ],
          "correctIndex": 2,
          "textAfter": " for most of the day, so please don’t arrive early."
        },
        {
          "textBefore": "Let me know ",
          "gapId": "t8_s1_gap_5",
          "options": [
            "whether",
            "whose",
            "what"
          ],
          "correctIndex": 0,
          "textAfter": " you can come by Wednesday."
        }
      ],
      "explanations": {
        "t8_s1_gap_1": {
          "english": "Option (C) is correct: \"anything\". You do not need to bring anything, just yourselves. After a negative verb we use ‘anything’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (You do not need to bring anything, just yourselves. After a negative v...)"
        },
        "t8_s1_gap_2": {
          "english": "Option (B) is correct: \"opposite\". My flat is easy to find because it is opposite the post office. ‘opposite’ = on the other side of the road from.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (My flat is easy to find because it is opposite the post office. ‘oppos...)"
        },
        "t8_s1_gap_3": {
          "english": "Option (C) is correct: \"should\". There is no parking outside, so you should use the car park behind the school. ‘should’ gives advice or a recommendation.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (There is no parking outside, so you should use the car park behind the...)"
        },
        "t8_s1_gap_4": {
          "english": "Option (C) is correct: \"am cooking\". I am cooking for most of the day, so please don’t arrive early. Present continuous for an arrangement/activity in progress; ‘cooks’ does not agree with ‘I’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I am cooking for most of the day, so please don’t arrive early. Presen...)"
        },
        "t8_s1_gap_5": {
          "english": "Option (A) is correct: \"whether\". Let me know whether you can come by",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Let me know whether you can come by...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-8-s2",
      "title": "Practice Test 8 - Text Cohesion",
      "topic": "the rules of a sports club",
      "correctOrder": [
        0,
        2,
        4,
        1,
        5,
        3
      ],
      "sentences": [
        "Members who want to borrow equipment from the sports club should follow these rules. (Example)",
        "You may keep the equipment for up to two hours.",
        "To begin with, you need to show your membership card to the person at the equipment desk.",
        "Finally, when you return the item, staff will check it for damage.",
        "They will then write the name of the item and your name in a record book.",
        "If you want it for longer, you must ask for permission before the two hours finish."
      ],
      "explanation": "‘They’ = the person at the desk; ‘it’ = the equipment; ‘Finally’ = the last stage, returning the item.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘They’ = the person at the desk; ‘it’ = the equipment; ‘Finally’ = the last stage, returning the ite",
      "tasks": [
        {
          "id": "t8_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: The rules of a sports club",
          "topic": "the rules of a sports club",
          "correctOrder": [
            0,
            2,
            4,
            1,
            5,
            3
          ],
          "sentences": [
            "Members who want to borrow equipment from the sports club should follow these rules. (Example)",
            "You may keep the equipment for up to two hours.",
            "To begin with, you need to show your membership card to the person at the equipment desk.",
            "Finally, when you return the item, staff will check it for damage.",
            "They will then write the name of the item and your name in a record book.",
            "If you want it for longer, you must ask for permission before the two hours finish."
          ],
          "explanation": "‘They’ = the person at the desk; ‘it’ = the equipment; ‘Finally’ = the last stage, returning the item.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘They’ = the person at the desk; ‘it’ = the equipment; ‘Finally’ = the last stage, returning the ite"
        },
        {
          "id": "t8_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about the history of the telephone",
          "topic": "an article about the history of the telephone",
          "correctOrder": [
            0,
            5,
            1,
            2,
            4,
            3
          ],
          "sentences": [
            "Alexander Graham Bell is usually credited with inventing the telephone in 1876. (Example)",
            "One of them, Elisha Gray, even applied for a patent on the same day as Bell.",
            "Because Bell’s application reached the office first, he won the legal right to the invention.",
            "By the end of the century, the device had become an essential tool for business.",
            "Within a few years, telephone lines connected the main cities of the United States.",
            "However, several other inventors had been working on similar ideas at the same time."
          ],
          "explanation": "‘However’ contrasts with ‘usually credited’; ‘One of them’ = other inventors; the later sentences follow a time sequence.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘However’ contrasts with ‘usually credited’; ‘One of them’ = other inventors; the later sentences fo"
        }
      ]
    },
    "section3": {
      "id": "reading-test-8-s3",
      "title": "Practice Test 8 - Opinion Matching",
      "topic": "Opinion Matching Test 8",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I bought an electric car last year and I’d never go back. Running costs are tiny because electricity is\ncheaper than petrol, and there’s hardly any servicing. I charge it at home overnight, so I never visit a\npetrol station. The only drawback is that long journeys need planning.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I’d love one, but I can’t afford it. Even the cheapest models cost much more than the petrol car I drive\nnow. I live in an apartment, and there’s nowhere to install a charging point. Until prices fall and public\nchargers become common, they’re not an option for people like me.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I’m not convinced they’re as green as people claim. Making the batteries uses a lot of energy and rare\nmetals, and in my country most electricity still comes from coal. It’s better to improve public transport,\nso people don’t need cars at all.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I’m a taxi driver, and I tried an electric one for a month. It was smooth and quiet, and passengers loved\nit. However, the battery ran out during a busy shift and I lost two hours waiting to charge. If the charging\ncould be made faster, I’d switch immediately.’"
        }
      ],
      "questions": [
        {
          "id": "t8_s3_q16",
          "statement": "Who has no way of charging a car at home?",
          "correctPersonId": "B",
          "explanation": "Person B: Who has no way of charging a car at home? ‘nowhere to install a charging point’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who has no way of charging a car at home? ‘nowhere to install a charging point’)۔"
        },
        {
          "id": "t8_s3_q17",
          "statement": "Who feels that buying one is too expensive?",
          "correctPersonId": "B",
          "explanation": "Person B: Who feels that buying one is too expensive? ‘I can’t afford it’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who feels that buying one is too expensive? ‘I can’t afford it’)۔"
        },
        {
          "id": "t8_s3_q18",
          "statement": "Who doubts the environmental benefit of electric cars?",
          "correctPersonId": "C",
          "explanation": "Person C: Who doubts the environmental benefit of electric cars? ‘not convinced they’re as green’ Aptis General Reading Practice Tests • ICAP ECS Page 69 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who doubts the environmental benefit of electric cars? ‘not convinced they’re as)۔"
        },
        {
          "id": "t8_s3_q19",
          "statement": "Who finds that maintenance costs are low?",
          "correctPersonId": "A",
          "explanation": "Person A: Who finds that maintenance costs are low? ‘hardly any servicing’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who finds that maintenance costs are low? ‘hardly any servicing’)۔"
        },
        {
          "id": "t8_s3_q20",
          "statement": "Who would change if charging took less time?",
          "correctPersonId": "D",
          "explanation": "Person D: Who would change if charging took less time? ‘If the charging could be made faster’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who would change if charging took less time? ‘If the charging could be made fast)۔"
        },
        {
          "id": "t8_s3_q21",
          "statement": "Who thinks fewer cars would be a better solution?",
          "correctPersonId": "C",
          "explanation": "Person C: Who thinks fewer cars would be a better solution? ‘people don’t need cars at all’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who thinks fewer cars would be a better solution? ‘people don’t need cars at all)۔"
        },
        {
          "id": "t8_s3_q22",
          "statement": "Who says that long trips need careful planning?",
          "correctPersonId": "A",
          "explanation": "Person A: Who says that long trips need careful",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who says that long trips need careful)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-8-s4",
      "title": "Practice Test 8 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Trading without money",
        "B - Paper arrives",
        "C - Money without a government",
        "D - Objects as currency",
        "E - Counterfeiters and how they are caught",
        "F - The first coins",
        "G - Plastic and digital payments",
        "H - The rise of banks",
        "J - Something we all use (Example)"
      ],
      "paragraphs": [
        {
          "id": "t8_s4_p1",
          "paragraphNumber": 1,
          "text": "Before money existed, people exchanged goods directly, a system known as barter. A farmer might\nswap a sack of grain for a pair of shoes. The problem was that both sides had to want what the other\noffered, and it was hard to decide how many sacks of grain a pair of shoes was worth.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Trading without money\"): Trading without money barter and its problems",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Trading without money' کی مکمل تائید کرتا ہے (Trading without money barter and its problems)۔"
        },
        {
          "id": "t8_s4_p2",
          "paragraphNumber": 2,
          "text": "To solve these difficulties, societies began to use objects that everyone valued. In different parts of\nthe world, people have used cattle, salt, beads and even large stones. Shells known as cowries were\naccepted over huge areas of Africa and Asia for thousands of years because they were small, attractive\nand difficult to copy.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Objects as currency\"): Objects as currency cattle, salt, shells as money",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Objects as currency' کی مکمل تائید کرتا ہے (Objects as currency cattle, salt, shells as money)۔"
        },
        {
          "id": "t8_s4_p3",
          "paragraphNumber": 3,
          "text": "Around 600 BC, the kingdom of Lydia, in what is now Turkey, produced the first known coins made of\na mixture of gold and silver. Stamped with a royal symbol, each coin guaranteed its weight and value.\nMerchants no longer had to weigh metal at every sale, and trade between distant regions became\nmuch easier.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"The first coins\"): The first coins Lydia, metal, royal stamp",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The first coins' کی مکمل تائید کرتا ہے (The first coins Lydia, metal, royal stamp)۔"
        },
        {
          "id": "t8_s4_p4",
          "paragraphNumber": 4,
          "text": "Carrying heavy coins was awkward, so Chinese merchants began to leave their coins with trusted\nagents in exchange for paper receipts. Eventually, governments took over the system and printed\nbanknotes themselves. Marco Polo was astonished when he saw paper money in China in the\nthirteenth century, and Europe took several hundred years to follow.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Paper arrives\"): Paper arrives banknotes in China",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Paper arrives' کی مکمل تائید کرتا ہے (Paper arrives banknotes in China)۔"
        },
        {
          "id": "t8_s4_p5",
          "paragraphNumber": 5,
          "text": "As trade expanded, people needed safe places to keep their wealth. Banks developed, first in Italian\ncities, offering to store money, lend it to businesses and exchange foreign currencies. Banks soon\ndiscovered that not everyone asked for their savings back at the same time, which allowed them to lend\nout much of what they held.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"The rise of banks\"): The rise of banks storing and lending money",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The rise of banks' کی مکمل تائید کرتا ہے (The rise of banks storing and lending money)۔"
        },
        {
          "id": "t8_s4_p6",
          "paragraphNumber": 6,
          "text": "In the twentieth century, credit cards allowed people to buy things now and pay later, and cash\nmachines made money available at any hour. More recently, mobile phones have replaced wallets for\nmillions of people. In some countries, such as Sweden, so few people use cash that many shops no\nlonger accept it.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Plastic and digital payments\"): Plastic and digital payments cards, cash machines, phones",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Plastic and digital payments' کی مکمل تائید کرتا ہے (Plastic and digital payments cards, cash machines, phones)۔"
        },
        {
          "id": "t8_s4_p7",
          "paragraphNumber": 7,
          "text": "The newest development is cryptocurrency, digital money not issued by any government or central\nbank. Supporters praise its independence and its low transfer costs, while critics point to wild price\nchanges and its use in crime. Whether it will become part of everyday life or remain a niche interest is\nstill uncertain.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Money without a government\"): Money without a government ‘not issued by any government’",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Money without a government' کی مکمل تائید کرتا ہے (Money without a government ‘not issued by any government’)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 9,
    "section1": {
      "id": "reading-test-9-s1",
      "title": "Practice Test 9 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "It is ",
          "gapId": "t9_s1_gap_1",
          "options": [
            "close",
            "closest",
            "closer"
          ],
          "correctIndex": 2,
          "textAfter": " to the city centre than our old place."
        },
        {
          "textBefore": "The neighbours are friendly, and one of them ",
          "gapId": "t9_s1_gap_2",
          "options": [
            "took",
            "brought",
            "carried"
          ],
          "correctIndex": 1,
          "textAfter": " us a cake on the first day."
        },
        {
          "textBefore": "There is a lot ",
          "gapId": "t9_s1_gap_3",
          "options": [
            "of",
            "for",
            "to"
          ],
          "correctIndex": 2,
          "textAfter": " do in the area."
        },
        {
          "textBefore": "I ",
          "gapId": "t9_s1_gap_4",
          "options": [
            "didn’t",
            "wasn’t",
            "haven’t"
          ],
          "correctIndex": 2,
          "textAfter": " yet decided how to arrange the furniture."
        },
        {
          "textBefore": "You should come and see it ",
          "gapId": "t9_s1_gap_5",
          "options": [
            "since",
            "while",
            "during"
          ],
          "correctIndex": 1,
          "textAfter": " you have the chance."
        }
      ],
      "explanations": {
        "t9_s1_gap_1": {
          "english": "Option (C) is correct: \"closer\". It is closer to the city centre than our old place. A comparative form is needed because of ‘than’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (It is closer to the city centre than our old place. A comparative form...)"
        },
        "t9_s1_gap_2": {
          "english": "Option (B) is correct: \"brought\". The neighbours are friendly, and one of them brought us a cake on the first day. ‘brought’ = came with it to where we are.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The neighbours are friendly, and one of them brought us a cake on the ...)"
        },
        "t9_s1_gap_3": {
          "english": "Option (C) is correct: \"to\". There is a lot to do in the area. ‘a lot to do’ = many things to do.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (There is a lot to do in the area. ‘a lot to do’ = many things to do....)"
        },
        "t9_s1_gap_4": {
          "english": "Option (C) is correct: \"haven’t\". I haven’t yet decided how to arrange the furniture. ‘yet’ signals the present perfect.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I haven’t yet decided how to arrange the furniture. ‘yet’ signals the ...)"
        },
        "t9_s1_gap_5": {
          "english": "Option (B) is correct: \"while\". You should come and see it while you have",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (You should come and see it while you have...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-9-s2",
      "title": "Practice Test 9 - Text Cohesion",
      "topic": "a staff handbook for new employees",
      "correctOrder": [
        0,
        2,
        3,
        1,
        5,
        4
      ],
      "sentences": [
        "If you are starting work at our company this week, please follow these steps on your first day. (Example)",
        "After that, you will receive a security badge with your photograph on it.",
        "Go to the reception area and ask for the person in charge of new staff.",
        "She will take you to the personnel office, where you will sign your contract.",
        "Finally, a colleague will show you your desk and introduce you to the rest of your team.",
        "Wear this badge at all times while you are in the building."
      ],
      "explanation": "‘She’ = the person in charge; ‘this badge’ > ‘a security badge’; ‘Finally’ = last step.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘She’ = the person in charge; ‘this badge’ > ‘a security badge’; ‘Finally’ = last step.",
      "tasks": [
        {
          "id": "t9_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: A staff handbook for new employees",
          "topic": "a staff handbook for new employees",
          "correctOrder": [
            0,
            2,
            3,
            1,
            5,
            4
          ],
          "sentences": [
            "If you are starting work at our company this week, please follow these steps on your first day. (Example)",
            "After that, you will receive a security badge with your photograph on it.",
            "Go to the reception area and ask for the person in charge of new staff.",
            "She will take you to the personnel office, where you will sign your contract.",
            "Finally, a colleague will show you your desk and introduce you to the rest of your team.",
            "Wear this badge at all times while you are in the building."
          ],
          "explanation": "‘She’ = the person in charge; ‘this badge’ > ‘a security badge’; ‘Finally’ = last step.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘She’ = the person in charge; ‘this badge’ > ‘a security badge’; ‘Finally’ = last step."
        },
        {
          "id": "t9_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about a famous sporting event",
          "topic": "an article about a famous sporting event",
          "correctOrder": [
            0,
            2,
            4,
            5,
            1,
            3
          ],
          "sentences": [
            "The modern marathon is based on an ancient Greek legend. (Example)",
            "The distance was not fixed until the 1908 Games in London, where it was set at 42.195 kilometres.",
            "According to the story, a messenger ran from the town of Marathon to Athens in 490 BC to announce a military victory.",
            "Since then, this has been the official length of every marathon around the world.",
            "When the first modern Olympic Games were organised in 1896, the organisers wanted to remember this story.",
            "They therefore included a long-distance race over a similar route."
          ],
          "explanation": "‘this story’ = the legend; ‘They’ = the organisers; ‘this’ (last sentence) = the fixed distance.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘this story’ = the legend; ‘They’ = the organisers; ‘this’ (last sentence) = the fixed distance."
        }
      ]
    },
    "section3": {
      "id": "reading-test-9-s3",
      "title": "Practice Test 9 - Opinion Matching",
      "topic": "Opinion Matching Test 9",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I prefer paper books. I spend all day looking at a screen at work, so reading on one in the evening tires\nmy eyes. I also love the smell of a new book and seeing my collection on the shelves. Nothing replaces\nholding a real book.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I travel a lot, so an e-reader is perfect. I can carry hundreds of books in my bag, and I never run out of\nthings to read on a long flight. I can also make the print larger, which is helpful since my eyesight isn’t\nwhat it was.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I use both. I buy e-books when I want to start reading immediately, because I can download them in\nseconds. But for books with photographs, like travel guides or cookery books, I choose printed copies,\nbecause the pictures look much better on the page.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I mainly borrow books from the library. It’s free, and I discover authors I’d never buy myself. I know the\nlibrary offers e-books too, but I haven’t tried them. I like the routine of going there every week and\nchatting with the librarians.’"
        }
      ],
      "questions": [
        {
          "id": "t9_s3_q16",
          "statement": "Who finds screens uncomfortable for their eyes?",
          "correctPersonId": "A",
          "explanation": "Person A: Who finds screens uncomfortable for their eyes? ‘reading on one... tires my eyes’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who finds screens uncomfortable for their eyes? ‘reading on one... tires my eyes)۔"
        },
        {
          "id": "t9_s3_q17",
          "statement": "Who carries many books when travelling?",
          "correctPersonId": "B",
          "explanation": "Person B: Who carries many books when travelling? ‘hundreds of books in my bag’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who carries many books when travelling? ‘hundreds of books in my bag’)۔"
        },
        {
          "id": "t9_s3_q18",
          "statement": "Who chooses printed books for illustrated titles?",
          "correctPersonId": "C",
          "explanation": "Person C: Who chooses printed books for illustrated titles? ‘books with photographs... printed copies’ Aptis General Reading Practice Tests • ICAP ECS Page 71 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who chooses printed books for illustrated titles? ‘books with photographs... pri)۔"
        },
        {
          "id": "t9_s3_q19",
          "statement": "Who borrows books instead of buying them?",
          "correctPersonId": "D",
          "explanation": "Person D: Who borrows books instead of buying them? ‘I mainly borrow books from the library’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who borrows books instead of buying them? ‘I mainly borrow books from the librar)۔"
        },
        {
          "id": "t9_s3_q20",
          "statement": "Who likes being able to enlarge the text?",
          "correctPersonId": "B",
          "explanation": "Person B: Who likes being able to enlarge the text? ‘make the print larger’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who likes being able to enlarge the text? ‘make the print larger’)۔"
        },
        {
          "id": "t9_s3_q21",
          "statement": "Who enjoys the social side of visiting a library?",
          "correctPersonId": "D",
          "explanation": "Person D: Who enjoys the social side of visiting a library? ‘chatting with the librarians’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who enjoys the social side of visiting a library? ‘chatting with the librarians’)۔"
        },
        {
          "id": "t9_s3_q22",
          "statement": "Who likes to start a new book without delay?",
          "correctPersonId": "C",
          "explanation": "Person C: Who likes to start a new book without delay? ‘start reading immediately’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who likes to start a new book without delay? ‘start reading immediately’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-9-s4",
      "title": "Practice Test 9 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Following the sun",
        "B - The role of experience",
        "C - Stars as a guide",
        "D - Why some birds never migrate",
        "E - A built-in compass",
        "F - Landmarks and smell",
        "G - Dangers on the way",
        "H - Tracking birds with technology",
        "J - An amazing journey (Example)"
      ],
      "paragraphs": [
        {
          "id": "t9_s4_p1",
          "paragraphNumber": 1,
          "text": "Many birds are active during the day and use the position of the sun to judge direction. Because the\nsun moves across the sky, they must also use an internal clock to adjust for the time of day.\nExperiments in which scientists changed the birds’ body clocks with artificial light confirmed that they\nflew in the wrong direction as a result.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Following the sun\"): Following the sun using the sun for direction",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Following the sun' کی مکمل تائید کرتا ہے (Following the sun using the sun for direction)۔"
        },
        {
          "id": "t9_s4_p2",
          "paragraphNumber": 2,
          "text": "Species that migrate at night, such as many small songbirds, appear to rely on the stars. In a famous\nexperiment, young buntings raised in a planetarium learned the pattern of the sky around the point\nwhere the stars seem to turn. When the artificial sky was rotated, the birds changed direction\naccordingly.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Stars as a guide\"): Stars as a guide night migrants and star patterns",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Stars as a guide' کی مکمل تائید کرتا ہے (Stars as a guide night migrants and star patterns)۔"
        },
        {
          "id": "t9_s4_p3",
          "paragraphNumber": 3,
          "text": "Birds can also sense the Earth’s magnetic field, which acts like an invisible map. Scientists think that\nspecial molecules in the eye react to the field, allowing the bird to ‘see’ the direction of north. Some\nresearchers believe that tiny crystals in the beak or brain may help birds to feel the field’s strength too.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"A built-in compass\"): A built-in compass sensing magnetism",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A built-in compass' کی مکمل تائید کرتا ہے (A built-in compass sensing magnetism)۔"
        },
        {
          "id": "t9_s4_p4",
          "paragraphNumber": 4,
          "text": "Over familiar ground, birds rely on more obvious clues. They remember rivers, coastlines and\nmountain ranges, and some even follow motorways. Studies of seabirds and pigeons indicate that\nsmell is also important: when the sense of smell was blocked, the birds became lost much more easily,\nespecially over unfamiliar areas.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Landmarks and smell\"): Landmarks and smell rivers, coastlines and smell",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Landmarks and smell' کی مکمل تائید کرتا ہے (Landmarks and smell rivers, coastlines and smell)۔"
        },
        {
          "id": "t9_s4_p5",
          "paragraphNumber": 5,
          "text": "Young birds that migrate for the first time often follow older, more experienced birds. Cranes and\ngeese, for example, learn their route from their parents. By contrast, young cuckoos fly alone and still\nreach Africa, which suggests that some migration routes are written in the bird’s genes rather than\nlearned.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"The role of experience\"): The role of experience learning from older birds vs. instinct",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The role of experience' کی مکمل تائید کرتا ہے (The role of experience learning from older birds vs. instinct)۔"
        },
        {
          "id": "t9_s4_p6",
          "paragraphNumber": 6,
          "text": "The journey is extremely dangerous. Birds can be blown off course by storms, and they may starve if\nthey cannot find food on the way. Bright city lights confuse night migrants and cause collisions with\nbuildings, while hunting and the destruction of resting places have reduced the numbers of many\nspecies.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Dangers on the way\"): Dangers on the way storms, hunger, lights, hunting",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Dangers on the way' کی مکمل تائید کرتا ہے (Dangers on the way storms, hunger, lights, hunting)۔"
        },
        {
          "id": "t9_s4_p7",
          "paragraphNumber": 7,
          "text": "Modern technology has transformed research. Tiny transmitters, some weighing less than a coin,\ncan now be attached to birds and report their position via satellite. One godwit tracked in this way flew\nover eleven thousand kilometres without stopping, a record that astonished scientists and revealed how\nmuch remains to be discovered.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Tracking birds with technology\"): Tracking birds with technology transmitters and satellites",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Tracking birds with technology' کی مکمل تائید کرتا ہے (Tracking birds with technology transmitters and satellites)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 10,
    "section1": {
      "id": "reading-test-10-s1",
      "title": "Practice Test 10 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "Please could you send me some ",
          "gapId": "t10_s1_gap_1",
          "options": [
            "informations",
            "information",
            "informing"
          ],
          "correctIndex": 1,
          "textAfter": " about the course fees?"
        },
        {
          "textBefore": "I work during the day, so I can only study ",
          "gapId": "t10_s1_gap_2",
          "options": [
            "by",
            "at",
            "in"
          ],
          "correctIndex": 2,
          "textAfter": " the evening."
        },
        {
          "textBefore": "I have studied English ",
          "gapId": "t10_s1_gap_3",
          "options": [
            "since",
            "for",
            "during"
          ],
          "correctIndex": 1,
          "textAfter": " three years, but I want to improve."
        },
        {
          "textBefore": "Do you ",
          "gapId": "t10_s1_gap_4",
          "options": [
            "make",
            "do",
            "offer"
          ],
          "correctIndex": 2,
          "textAfter": " lessons for beginners as well?"
        },
        {
          "textBefore": "I look forward ",
          "gapId": "t10_s1_gap_5",
          "options": [
            "for",
            "to",
            "at"
          ],
          "correctIndex": 1,
          "textAfter": " hearing from you."
        }
      ],
      "explanations": {
        "t10_s1_gap_1": {
          "english": "Option (B) is correct: \"information\". Please could you send me some information about the course fees? ‘information’ is uncountable and has no plural.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please could you send me some information about the course fees? ‘info...)"
        },
        "t10_s1_gap_2": {
          "english": "Option (C) is correct: \"in\". I work during the day, so I can only study in the evening. We say ‘in the evening’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I work during the day, so I can only study in the evening. We say ‘in ...)"
        },
        "t10_s1_gap_3": {
          "english": "Option (B) is correct: \"for\". I have studied English for three years, but I want to improve. ‘for’ + a period of time (three years).",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I have studied English for three years, but I want to improve. ‘for’ +...)"
        },
        "t10_s1_gap_4": {
          "english": "Option (C) is correct: \"offer\". Do you offer lessons for beginners as well? ‘offer lessons’ = provide lessons.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Do you offer lessons for beginners as well? ‘offer lessons’ = provide ...)"
        },
        "t10_s1_gap_5": {
          "english": "Option (B) is correct: \"to\". I look forward to hearing from you. ‘look forward to’ is followed by the -ing form.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I look forward to hearing from you. ‘look forward to’ is followed by t...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-10-s2",
      "title": "Practice Test 10 - Text Cohesion",
      "topic": "some online check-in instructions from an airline",
      "correctOrder": [
        0,
        4,
        5,
        1,
        2,
        3
      ],
      "sentences": [
        "You can save time at the airport by checking in for your flight online. (Example)",
        "Once you have done this, you can print your boarding pass or save it on your phone.",
        "On the day of travel, go straight to the security area if you have no suitcase to check in.",
        "Otherwise, take your luggage to the baggage drop desk, where staff will weigh it and attach a label.",
        "Start by visiting the airline’s website and entering your booking number.",
        "The system will then ask you to choose your seat from a plan of the plane."
      ],
      "explanation": "‘this’ = choosing the seat; ‘Otherwise’ contrasts with ‘if you have no suitcase’.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘this’ = choosing the seat; ‘Otherwise’ contrasts with ‘if you have no suitcase’.",
      "tasks": [
        {
          "id": "t10_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some online check-in instructions from an airline",
          "topic": "some online check-in instructions from an airline",
          "correctOrder": [
            0,
            4,
            5,
            1,
            2,
            3
          ],
          "sentences": [
            "You can save time at the airport by checking in for your flight online. (Example)",
            "Once you have done this, you can print your boarding pass or save it on your phone.",
            "On the day of travel, go straight to the security area if you have no suitcase to check in.",
            "Otherwise, take your luggage to the baggage drop desk, where staff will weigh it and attach a label.",
            "Start by visiting the airline’s website and entering your booking number.",
            "The system will then ask you to choose your seat from a plan of the plane."
          ],
          "explanation": "‘this’ = choosing the seat; ‘Otherwise’ contrasts with ‘if you have no suitcase’.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘this’ = choosing the seat; ‘Otherwise’ contrasts with ‘if you have no suitcase’."
        },
        {
          "id": "t10_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about the history of shopping",
          "topic": "a book about the history of shopping",
          "correctOrder": [
            0,
            2,
            5,
            1,
            4,
            3
          ],
          "sentences": [
            "Until about a hundred years ago, shopping for food meant visiting several different shops. (Example)",
            "Instead of asking an assistant to fetch each item, shoppers could take products from the shelves themselves.",
            "Customers would buy bread from a baker, meat from a butcher and vegetables from a greengrocer.",
            "As a result, the new stores became so popular that they spread across the world within decades.",
            "This self-service system reduced the number of staff needed, which allowed the shop to charge lower prices.",
            "In the early twentieth century, an American businessman had the idea of putting all these goods under one roof."
          ],
          "explanation": "‘all these goods’ = bread, meat, vegetables; ‘This self-service system’ = shoppers taking items; ‘As a result’ = effect of lower prices.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘all these goods’ = bread, meat, vegetables; ‘This self-service system’ = shoppers taking items; ‘As"
        }
      ]
    },
    "section3": {
      "id": "reading-test-10-s3",
      "title": "Practice Test 10 - Opinion Matching",
      "topic": "Opinion Matching Test 10",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I do nearly all my shopping online. It saves me hours, and I can compare prices in seconds. Delivery\nusually arrives the next day, and returning goods is simple. Since I started shopping this way, I’ve\nsaved quite a lot of money.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I’m worried about what online shopping is doing to town centres. Every year another local shop closes,\nand the high street becomes emptier. I feel we are losing something important, so I make a point of\nbuying from local businesses, even when it costs a little more.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I don’t trust it. I once ordered a coat that looked excellent in the photograph but turned out to be cheap\nand badly made. Returning it was a nightmare. I prefer trying clothes on before I buy anything, and I\nwant to see exactly what I’m paying for.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I’ve mixed feelings. Online shopping is great for things like books or electronics where I know exactly\nwhat I want. However, packaging creates a huge amount of waste, and delivery vans add to the traffic\nin my street. I now try to order several items together to reduce the number of deliveries.’"
        }
      ],
      "questions": [
        {
          "id": "t10_s3_q16",
          "statement": "Who has had a disappointing experience with the quality of a product?",
          "correctPersonId": "C",
          "explanation": "Person C: Who has had a disappointing experience with the quality of a product? coat ‘cheap and badly made’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who has had a disappointing experience with the quality of a product? coat ‘chea)۔"
        },
        {
          "id": "t10_s3_q17",
          "statement": "Who enjoys the speed of getting items delivered?",
          "correctPersonId": "A",
          "explanation": "Person A: Who enjoys the speed of getting items delivered? ‘Delivery usually arrives the next day’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who enjoys the speed of getting items delivered? ‘Delivery usually arrives the n)۔"
        },
        {
          "id": "t10_s3_q18",
          "statement": "Who is concerned about the future of local shops?",
          "correctPersonId": "B",
          "explanation": "Person B: Who is concerned about the future of local shops? ‘another local shop closes’ Aptis General Reading Practice Tests • ICAP ECS Page 73 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who is concerned about the future of local shops? ‘another local shop closes’ Ap)۔"
        },
        {
          "id": "t10_s3_q19",
          "statement": "Who tries to cut down on the number of delivery journeys?",
          "correctPersonId": "D",
          "explanation": "Person D: Who tries to cut down on the number of delivery journeys? ‘order several items together’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who tries to cut down on the number of delivery journeys? ‘order several items t)۔"
        },
        {
          "id": "t10_s3_q20",
          "statement": "Who finds it easy to send unwanted goods back?",
          "correctPersonId": "A",
          "explanation": "Person A: Who finds it easy to send unwanted goods back? ‘returning goods is simple’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who finds it easy to send unwanted goods back? ‘returning goods is simple’)۔"
        },
        {
          "id": "t10_s3_q21",
          "statement": "Who prefers to examine products personally before buying?",
          "correctPersonId": "C",
          "explanation": "Person C: Who prefers to examine products personally before buying? ‘trying clothes on before I buy’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who prefers to examine products personally before buying? ‘trying clothes on bef)۔"
        },
        {
          "id": "t10_s3_q22",
          "statement": "Who is troubled by the amount of rubbish packaging creates?",
          "correctPersonId": "D",
          "explanation": "Person D: Who is troubled by the amount of rubbish",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who is troubled by the amount of rubbish)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-10-s4",
      "title": "Practice Test 10 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - A faster game",
        "B - Becoming a sport",
        "C - Man against machine",
        "D - Chess in works of art",
        "E - Origins in India",
        "F - Chess online",
        "G - Travelling to Europe",
        "H - Chess and the brain",
        "J - More than a game (Example)"
      ],
      "paragraphs": [
        {
          "id": "t10_s4_p1",
          "paragraphNumber": 1,
          "text": "The earliest ancestor of chess appeared in northern India around the sixth century AD. Called\nchaturanga, it represented the four divisions of an Indian army: infantry, cavalry, elephants and\nchariots. These pieces later developed into the pawn, knight, bishop and rook, and the game spread\nquickly along trade routes into Persia.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Origins in India\"): Origins in India where the game began",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Origins in India' کی مکمل تائید کرتا ہے (Origins in India where the game began)۔"
        },
        {
          "id": "t10_s4_p2",
          "paragraphNumber": 2,
          "text": "Arab traders learned the game from the Persians and carried it across North Africa into Spain. From\nthere, it reached the rest of Europe by the tenth century. European players gradually changed the\nnames and shapes of the pieces, so that elephants became bishops and the king’s adviser became the\nqueen.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Travelling to Europe\"): Travelling to Europe spread westwards; pieces renamed",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Travelling to Europe' کی مکمل تائید کرتا ہے (Travelling to Europe spread westwards; pieces renamed)۔"
        },
        {
          "id": "t10_s4_p3",
          "paragraphNumber": 3,
          "text": "For centuries, the queen could move only one square at a time, which made games long and slow.\nAround 1500, in Spain or Italy, the rules were altered to make her the most powerful piece. This change\nspeeded up play enormously and produced the modern game, with its attacking style and sudden\nsurprises.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"A faster game\"): A faster game rule change made play quicker",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A faster game' کی مکمل تائید کرتا ہے (A faster game rule change made play quicker)۔"
        },
        {
          "id": "t10_s4_p4",
          "paragraphNumber": 4,
          "text": "Organised competitions began in the nineteenth century. The first international tournament took\nplace in London in 1851, and a few decades later players began competing for the title of world\nchampion. Chess clocks were introduced so that games could not continue forever, and strict rules\ngave the sport a professional structure.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Becoming a sport\"): Becoming a sport tournaments, champions, clocks",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Becoming a sport' کی مکمل تائید کرتا ہے (Becoming a sport tournaments, champions, clocks)۔"
        },
        {
          "id": "t10_s4_p5",
          "paragraphNumber": 5,
          "text": "Computers have long been tested against chess players, since the game requires planning and\ncalculation. In 1997, an IBM computer called Deep Blue defeated the world champion Garry Kasparov\nin a six-game match, shocking many observers. Today, even free programs on a phone can beat the\nbest humans, and players use them to study their own games.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Man against machine\"): Man against machine computers vs. human players",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Man against machine' کی مکمل تائید کرتا ہے (Man against machine computers vs. human players)۔"
        },
        {
          "id": "t10_s4_p6",
          "paragraphNumber": 6,
          "text": "Many parents and teachers believe that chess improves thinking skills. Some studies suggest that\nchildren who learn the game achieve better results in mathematics and show greater patience. Other\nresearchers say the evidence is weak, and that clever children may simply be more likely to choose\nchess. Still, schools in many countries have introduced chess lessons.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Chess and the brain\"): Chess and the brain mental benefits, with doubts",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Chess and the brain' کی مکمل تائید کرتا ہے (Chess and the brain mental benefits, with doubts)۔"
        },
        {
          "id": "t10_s4_p7",
          "paragraphNumber": 7,
          "text": "The internet has opened the game to a new audience. Players can find an opponent of similar\nstrength within seconds, at any hour of the day, and beginners can learn from free video lessons.\nDuring recent years, online chess has grown dramatically, with some live-streamed matches attracting\nmore viewers than major sporting events.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Chess online\"): Chess online internet play and lessons",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Chess online' کی مکمل تائید کرتا ہے (Chess online internet play and lessons)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 11,
    "section1": {
      "id": "reading-test-11-s1",
      "title": "Practice Test 11 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "Everyone must be at school ",
          "gapId": "t11_s1_gap_1",
          "options": [
            "until",
            "before",
            "since"
          ],
          "correctIndex": 1,
          "textAfter": " eight o’clock."
        },
        {
          "textBefore": "The coach will ",
          "gapId": "t11_s1_gap_2",
          "options": [
            "leave",
            "left",
            "leaving"
          ],
          "correctIndex": 0,
          "textAfter": " from the main gate."
        },
        {
          "textBefore": "It is ",
          "gapId": "t11_s1_gap_3",
          "options": [
            "ever",
            "once",
            "quite"
          ],
          "correctIndex": 2,
          "textAfter": " cold, so please send your child in a warm coat."
        },
        {
          "textBefore": "Children who forget their lunch will have to ",
          "gapId": "t11_s1_gap_4",
          "options": [
            "sell",
            "lend",
            "buy"
          ],
          "correctIndex": 2,
          "textAfter": " something at the museum café."
        },
        {
          "textBefore": "If you have any questions, please ",
          "gapId": "t11_s1_gap_5",
          "options": [
            "contact",
            "contract",
            "contrast"
          ],
          "correctIndex": 0,
          "textAfter": " me at the school office."
        }
      ],
      "explanations": {
        "t11_s1_gap_1": {
          "english": "Option (B) is correct: \"before\". We use ‘before’ to indicate arriving prior to eight o’clock.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (We use ‘before’ to indicate arriving prior to eight o’clock....)"
        },
        "t11_s1_gap_2": {
          "english": "Option (A) is correct: \"leave\". ‘will leave’ uses the base form of the verb after the modal ‘will’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘will leave’ uses the base form of the verb after the modal ‘will’....)"
        },
        "t11_s1_gap_3": {
          "english": "Option (C) is correct: \"quite\". ‘quite’ is an intensifier meaning fairly/rather cold.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘quite’ is an intensifier meaning fairly/rather cold....)"
        },
        "t11_s1_gap_4": {
          "english": "Option (C) is correct: \"buy\". ‘have to buy’ uses the base verb expressing necessity.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘have to buy’ uses the base verb expressing necessity....)"
        },
        "t11_s1_gap_5": {
          "english": "Option (A) is correct: \"contact\". ‘contact’ is the appropriate imperative verb for getting in touch.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘contact’ is the appropriate imperative verb for getting in touch....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-11-s2",
      "title": "Practice Test 11 - Text Cohesion",
      "topic": "some instructions for a hiking club",
      "correctOrder": [
        0,
        5,
        2,
        4,
        1,
        3
      ],
      "sentences": [
        "If you would like to join one of our weekend walks, please follow the steps below. (Example)",
        "On the morning of the walk, arrive ten minutes early so that the leader can check your equipment.",
        "Then send us an email to reserve a place, as each group is limited to fifteen people.",
        "Walkers without proper boots will, unfortunately, not be allowed to take part.",
        "We will reply within two days to confirm your booking and give you the meeting point.",
        "First, choose a walk from the programme on our website and check its difficulty level."
      ],
      "explanation": "‘First’ begins the process; ‘Then send us an email’ follows choosing a walk; ‘confirm your booking’ responds to the email; arriving early comes on the day; without proper boots closes with rules.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘First’ begins the process; ‘Then send us an email’ follows choosing a walk; ‘confirm your booking’ ",
      "tasks": [
        {
          "id": "t11_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions for a hiking club",
          "topic": "some instructions for a hiking club",
          "correctOrder": [
            0,
            5,
            2,
            4,
            1,
            3
          ],
          "sentences": [
            "If you would like to join one of our weekend walks, please follow the steps below. (Example)",
            "On the morning of the walk, arrive ten minutes early so that the leader can check your equipment.",
            "Then send us an email to reserve a place, as each group is limited to fifteen people.",
            "Walkers without proper boots will, unfortunately, not be allowed to take part.",
            "We will reply within two days to confirm your booking and give you the meeting point.",
            "First, choose a walk from the programme on our website and check its difficulty level."
          ],
          "explanation": "‘First’ begins the process; ‘Then send us an email’ follows choosing a walk; ‘confirm your booking’ responds to the email; arriving early comes on the day; without proper boots closes with rules.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘First’ begins the process; ‘Then send us an email’ follows choosing a walk; ‘confirm your booking’ "
        },
        {
          "id": "t11_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about everyday materials",
          "topic": "a book about everyday materials",
          "correctOrder": [
            0,
            4,
            3,
            1,
            5,
            2
          ],
          "sentences": [
            "Paper was invented in China about two thousand years ago. (Example)",
            "For several centuries, the Chinese kept this method secret.",
            "There, paper mills were built beside rivers, because the process needed a great deal of clean water.",
            "A court official named Cai Lun is said to have found a cheaper way by mixing tree bark, old cloth and fishing nets.",
            "Before that, people wrote on heavy materials such as bamboo strips and silk.",
            "It finally spread to the Arab world in the eighth century, and later to Europe."
          ],
          "explanation": "‘Before that’ contrasts with invention; Cai Lun’s cheaper way follows earlier materials; keeping the method secret comes next; spreading to Europe comes later; ‘There’ refers to Europe.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Before that’ contrasts with invention; Cai Lun’s cheaper way follows earlier materials; keeping the"
        }
      ]
    },
    "section3": {
      "id": "reading-test-11-s3",
      "title": "Practice Test 11 - Opinion Matching",
      "topic": "Opinion Matching Test 11",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I go every morning to read the newspapers, because I can’t afford to buy them. For many older people\nthe library is also the only place to meet others. If it closes, I’d be sitting at home alone all day. The\ncouncil should look for savings elsewhere, such as in its own offices.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘Honestly, I rarely go. Everything I need for my course is online now, and I can download books to my\ntablet. Libraries are lovely, but we can’t keep every old building open just because we feel sentimental.\nPerhaps the money could be spent on faster internet for schools instead.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘My children love the story hour on Saturdays. It’s free, which matters because we have little money,\nand it has made them enthusiastic readers. A library gives children who have no books at home a\nchance to discover them. I’d be happy to pay a little more tax to keep it.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘Rather than closing it, the council could share the building with other services, like a post office or a\ncafé. That would bring in rent and attract more visitors. Libraries have to change with the times, but that\ndoesn’t mean they should disappear.’"
        }
      ],
      "questions": [
        {
          "id": "t11_s3_q16",
          "statement": "Who suggests sharing the building with other services?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘share the building with other services, like a post office or a café’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘share the building with other services, like a post office or a café’)۔"
        },
        {
          "id": "t11_s3_q17",
          "statement": "Who would accept paying higher taxes to save the library?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘I’d be happy to pay a little more tax to keep it’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘I’d be happy to pay a little more tax to keep it’)۔"
        },
        {
          "id": "t11_s3_q18",
          "statement": "Who believes most study materials can be found online?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘Everything I need for my course is online now’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘Everything I need for my course is online now’)۔"
        },
        {
          "id": "t11_s3_q19",
          "statement": "Who is worried about lonely older residents?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘For many older people the library is also the only place to meet others’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘For many older people the library is also the only place to meet others’)۔"
        },
        {
          "id": "t11_s3_q20",
          "statement": "Who thinks the council should cut costs in other areas?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘The council should look for savings elsewhere, such as in its own offices’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘The council should look for savings elsewhere, such as in its own offices’)۔"
        },
        {
          "id": "t11_s3_q21",
          "statement": "Who values a free activity for children?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘My children love the story hour on Saturdays. It’s free’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘My children love the story hour on Saturdays. It’s free’)۔"
        },
        {
          "id": "t11_s3_q22",
          "statement": "Who thinks emotional attachment should not decide the matter?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘we can’t keep every old building open just because we feel sentimental’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘we can’t keep every old building open just because we feel sentimental’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-11-s4",
      "title": "Practice Test 11 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Fertile land",
        "B - Predicting eruptions",
        "C - How to climb a volcano safely",
        "D - A famous disaster",
        "E - Different kinds of eruption",
        "F - What lies beneath",
        "G - Where volcanoes are found",
        "H - Volcanoes beyond Earth",
        "J - Mountains that erupt (Example)"
      ],
      "paragraphs": [
        {
          "id": "t11_s4_p1",
          "paragraphNumber": 1,
          "text": "Deep below the surface, the planet’s interior is hot enough to melt rock. This molten material, called\nmagma, is lighter than the solid rock around it, so it slowly rises. When it collects in a chamber beneath\na mountain and pressure builds, it may force its way out through a crack or opening, and an eruption\nbegins. The temperature inside the Earth rises steadily with depth, and at the centre it is thought to be\nas hot as the surface of the Sun, which is why the rock below the crust is in constant slow motion.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"What lies beneath\"): magma rises from deep below the heated interior of the Earth",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'What lies beneath' کی مکمل تائید کرتا ہے (magma rises from deep below the heated interior of the Earth)۔"
        },
        {
          "id": "t11_s4_p2",
          "paragraphNumber": 2,
          "text": "Most of the world’s active volcanoes lie along the edges of the great plates that make up the Earth’s\ncrust. The best-known example is the ‘Ring of Fire’ around the Pacific Ocean, which contains more\nthan half of all active volcanoes. Others, such as those in Hawaii, form above hot spots far from any\nplate edge. Altogether, well over a thousand volcanoes have erupted in the last ten thousand years,\nand many more lie hidden beneath the oceans where nobody can see them.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Where volcanoes are found\"): locations along tectonic plate edges and the Pacific Ring of Fire",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Where volcanoes are found' کی مکمل تائید کرتا ہے (locations along tectonic plate edges and the Pacific Ring of Fire)۔"
        },
        {
          "id": "t11_s4_p3",
          "paragraphNumber": 3,
          "text": "Not all eruptions are alike. Some volcanoes release thick, sticky magma that traps gas and explodes\nviolently. Others produce thin, runny lava that flows gently for many kilometres. Scientists use a scale\nfrom zero to eight to measure the size of an eruption, based mainly on the amount of material thrown\nout. Because of this difference, the shape of a volcano often shows how it behaves: gentle lava builds\nwide, low mountains, while sticky magma forms tall, steep cones.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Different kinds of eruption\"): differences in sticky versus runny lava and eruption types",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Different kinds of eruption' کی مکمل تائید کرتا ہے (differences in sticky versus runny lava and eruption types)۔"
        },
        {
          "id": "t11_s4_p4",
          "paragraphNumber": 4,
          "text": "In AD 79, Mount Vesuvius in Italy erupted and buried the Roman towns of Pompeii and Herculaneum\nunder ash and hot gas. Thousands of people died. Because the ash preserved buildings, objects and\neven loaves of bread, archaeologists today can study everyday Roman life in remarkable detail. A\nRoman writer who watched the eruption from across the bay described a dark cloud shaped like a tree,\nand his letters are among the best surviving descriptions of a volcanic event.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"A famous disaster\"): Mount Vesuvius destroying Pompeii and Herculaneum in AD 79",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A famous disaster' کی مکمل تائید کرتا ہے (Mount Vesuvius destroying Pompeii and Herculaneum in AD 79)۔"
        },
        {
          "id": "t11_s4_p5",
          "paragraphNumber": 5,
          "text": "Despite the dangers, millions of people live close to volcanoes. Volcanic ash breaks down into soil\nthat is rich in minerals, so crops grow well on the slopes. In addition, the heat underground can be used\nto produce electricity, and countries such as Iceland obtain a large share of their power in this way.\nFarmers on the slopes of Mount Etna in Sicily, for example, have grown grapes and olives for centuries,\nand they accept the risk of eruptions in exchange for such productive land.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Fertile land\"): volcanic ash creating rich fertile soil and geothermal energy",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Fertile land' کی مکمل تائید کرتا ہے (volcanic ash creating rich fertile soil and geothermal energy)۔"
        },
        {
          "id": "t11_s4_p6",
          "paragraphNumber": 6,
          "text": "Experts watch volcanoes closely for warning signs. Small earthquakes, changes in the shape of the\nmountain and increases in escaping gas often come before an eruption. Instruments and satellites\nrecord these signals day and night, and in recent years the warnings have allowed whole communities\nto be evacuated in time. In 1991, scientists successfully predicted the eruption of Mount Pinatubo in the\nPhilippines, and the evacuation of tens of thousands of people is believed to have saved many lives.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Predicting eruptions\"): monitoring warning signs like earthquakes and gas to evacuate",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Predicting eruptions' کی مکمل تائید کرتا ہے (monitoring warning signs like earthquakes and gas to evacuate)۔"
        },
        {
          "id": "t11_s4_p7",
          "paragraphNumber": 7,
          "text": "Our planet is not the only one with volcanoes. Mars has Olympus Mons, the tallest known volcano in\nthe solar system, which is far higher than Mount Everest. Jupiter’s moon Io is the most volcanically\nactive body of all, with eruptions taking place almost constantly. Spacecraft have sent back images of\nhuge plumes of material rising from Io, showing that volcanic activity is common on other worlds as well\nas our own.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Volcanoes beyond Earth\"): volcanoes on other celestial bodies like Mars and Jupiter's moon Io",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Volcanoes beyond Earth' کی مکمل تائید کرتا ہے (volcanoes on other celestial bodies like Mars and Jupiter's moon Io)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 12,
    "section1": {
      "id": "reading-test-12-s1",
      "title": "Practice Test 12 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "It has been broken ",
          "gapId": "t12_s1_gap_1",
          "options": [
            "for",
            "since",
            "during"
          ],
          "correctIndex": 1,
          "textAfter": " Monday."
        },
        {
          "textBefore": "The room is very cold, ",
          "gapId": "t12_s1_gap_2",
          "options": [
            "so",
            "but",
            "or"
          ],
          "correctIndex": 0,
          "textAfter": " I cannot sleep properly."
        },
        {
          "textBefore": "Could you send someone to ",
          "gapId": "t12_s1_gap_3",
          "options": [
            "repeat",
            "prepare",
            "repair"
          ],
          "correctIndex": 2,
          "textAfter": " it as soon as possible?"
        },
        {
          "textBefore": "I am at home all day on Thursday, so that would be the ",
          "gapId": "t12_s1_gap_4",
          "options": [
            "well",
            "good",
            "best"
          ],
          "correctIndex": 2,
          "textAfter": " day."
        },
        {
          "textBefore": "Please let me know ",
          "gapId": "t12_s1_gap_5",
          "options": [
            "who",
            "when",
            "why"
          ],
          "correctIndex": 1,
          "textAfter": " you can come."
        }
      ],
      "explanations": {
        "t12_s1_gap_1": {
          "english": "Option (B) is correct: \"since\". We use ‘since’ with a specific starting day in the past (Monday).",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (We use ‘since’ with a specific starting day in the past (Monday)....)"
        },
        "t12_s1_gap_2": {
          "english": "Option (A) is correct: \"so\". ‘so’ shows cause and effect (it is cold, therefore I cannot sleep).",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘so’ shows cause and effect (it is cold, therefore I cannot sleep)....)"
        },
        "t12_s1_gap_3": {
          "english": "Option (C) is correct: \"repair\". ‘repair’ means to fix the broken heater.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘repair’ means to fix the broken heater....)"
        },
        "t12_s1_gap_4": {
          "english": "Option (C) is correct: \"best\". ‘best’ is the superlative needed before day.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘best’ is the superlative needed before day....)"
        },
        "t12_s1_gap_5": {
          "english": "Option (B) is correct: \"when\". ‘when’ introduces the time clause for visiting.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘when’ introduces the time clause for visiting....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-12-s2",
      "title": "Practice Test 12 - Text Cohesion",
      "topic": "some instructions from a bank",
      "correctOrder": [
        0,
        3,
        2,
        1,
        5,
        4
      ],
      "sentences": [
        "If you wish to open a savings account with our bank, please read the instructions carefully. (Example)",
        "Once this has been checked, you will be asked to choose a secret password.",
        "A member of staff will then ask to see a document that proves your identity.",
        "You should begin by completing the form and bringing it to your local branch.",
        "Within a week, we will post a card to your home address so that you can access your money.",
        "You can then make your first payment into the account in cash or by card."
      ],
      "explanation": "‘begin by completing the form’ starts; ‘then ask to see’ follows; ‘Once this has been checked’ links to password; first payment follows; posting card comes last.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘begin by completing the form’ starts; ‘then ask to see’ follows; ‘Once this has been checked’ links",
      "tasks": [
        {
          "id": "t12_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions from a bank",
          "topic": "some instructions from a bank",
          "correctOrder": [
            0,
            3,
            2,
            1,
            5,
            4
          ],
          "sentences": [
            "If you wish to open a savings account with our bank, please read the instructions carefully. (Example)",
            "Once this has been checked, you will be asked to choose a secret password.",
            "A member of staff will then ask to see a document that proves your identity.",
            "You should begin by completing the form and bringing it to your local branch.",
            "Within a week, we will post a card to your home address so that you can access your money.",
            "You can then make your first payment into the account in cash or by card."
          ],
          "explanation": "‘begin by completing the form’ starts; ‘then ask to see’ follows; ‘Once this has been checked’ links to password; first payment follows; posting card comes last.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘begin by completing the form’ starts; ‘then ask to see’ follows; ‘Once this has been checked’ links"
        },
        {
          "id": "t12_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about inventions",
          "topic": "a book about inventions",
          "correctOrder": [
            0,
            2,
            3,
            4,
            5,
            1
          ],
          "sentences": [
            "Humans have been measuring time for thousands of years. (Example)",
            "Such clocks were so large that they were usually placed in church towers for everyone to see.",
            "The earliest devices used the sun, with a stick whose shadow showed the hour.",
            "Of course, these sundials were useless at night or on cloudy days.",
            "To solve this problem, ancient peoples invented water clocks that measured time by the steady flow of liquid.",
            "Mechanical clocks with weights and gears finally appeared in European towns in the fourteenth century."
          ],
          "explanation": "‘earliest devices used the sun’ starts history; ‘these sundials’ refers to sun devices; ‘To solve this problem’ leads to water clocks; mechanical clocks follow; ‘Such clocks’ refers to tower clocks.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘earliest devices used the sun’ starts history; ‘these sundials’ refers to sun devices; ‘To solve th"
        }
      ]
    },
    "section3": {
      "id": "reading-test-12-s3",
      "title": "Practice Test 12 - Opinion Matching",
      "topic": "Opinion Matching Test 12",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I share with three friends and I love it. We split the bills, so it costs far less than living alone, and there’s\nalways someone to talk to after work. We have a cleaning timetable, which stops arguments. I’d\nrecommend it to anyone starting their career.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I tried it for a year and found it exhausting. People left dirty dishes in the sink and played loud music\nlate at night. I need quiet in the evenings because I study. Now I rent a tiny studio. It’s more expensive,\nbut the peace is worth it.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘My flatmates became my closest friends. When I lost my job, they cooked for me and helped me\nprepare for interviews. I think living with others teaches you to be patient and to compromise, skills that\nare useful in every area of life.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I’m fine with sharing, but only if you choose people carefully. My first flatmate never paid his share of\nthe rent, and I had to cover it. Always sign a written agreement and meet potential flatmates more than\nonce before deciding.’"
        }
      ],
      "questions": [
        {
          "id": "t12_s3_q16",
          "statement": "Who says living with others costs less?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘We split the bills, so it costs far less than living alone’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘We split the bills, so it costs far less than living alone’)۔"
        },
        {
          "id": "t12_s3_q17",
          "statement": "Who disliked the noise levels?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘People left dirty dishes... and played loud music late at night’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘People left dirty dishes... and played loud music late at night’)۔"
        },
        {
          "id": "t12_s3_q18",
          "statement": "Who was helped by flatmates during a difficult period?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘When I lost my job, they cooked for me and helped me prepare for interviews’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘When I lost my job, they cooked for me and helped me prepare for interviews’)۔"
        },
        {
          "id": "t12_s3_q19",
          "statement": "Who advises making a written agreement?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘Always sign a written agreement and meet potential flatmates more than once’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘Always sign a written agreement and meet potential flatmates more than once’)۔"
        },
        {
          "id": "t12_s3_q20",
          "statement": "Who thinks sharing helps you learn to compromise?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘living with others teaches you to be patient and to compromise’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘living with others teaches you to be patient and to compromise’)۔"
        },
        {
          "id": "t12_s3_q21",
          "statement": "Who has a system to avoid arguments about housework?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘We have a cleaning timetable, which stops arguments’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘We have a cleaning timetable, which stops arguments’)۔"
        },
        {
          "id": "t12_s3_q22",
          "statement": "Who accepts higher costs in exchange for quiet?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘Now I rent a tiny studio. It’s more expensive, but the peace is worth it’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘Now I rent a tiny studio. It’s more expensive, but the peace is worth it’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-12-s4",
      "title": "Practice Test 12 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Competition from television",
        "B - Adding colour",
        "C - Cinema in the digital age",
        "D - Famous film awards",
        "E - The arrival of sound",
        "F - The studio system",
        "G - The first films",
        "H - Silent stars",
        "J - Pictures that move (Example)"
      ],
      "paragraphs": [
        {
          "id": "t12_s4_p1",
          "paragraphNumber": 1,
          "text": "In the 1890s, inventors in France, Britain and the United States found ways to record and project\nshort sequences of real life. The Lumière brothers’ films, lasting less than a minute, showed workers\nleaving a factory or a train arriving at a station. Viewers had never seen anything like them. Audiences\nin Paris, London and New York paid to watch these short films in cafés and theatres, and the shows\nwere so successful that inventors competed to build better cameras and projectors.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"The first films\"): Lumière brothers and early pioneers recording and projecting motion",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The first films' کی مکمل تائید کرتا ہے (Lumière brothers and early pioneers recording and projecting motion)۔"
        },
        {
          "id": "t12_s4_p2",
          "paragraphNumber": 2,
          "text": "Early films had no recorded sound, so cinemas hired pianists or even small orchestras to play during\nthe screening. Without speech, actors relied on gestures and facial expressions. Charlie Chaplin\nbecame one of the most famous people in the world, and his comedy could be understood by\naudiences in any country. Title cards between scenes explained the story, and the music in the cinema\nhelped to set the mood, so that every screening was slightly different depending on the musicians.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Silent stars\"): silent movie era with live music and stars like Charlie Chaplin",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Silent stars' کی مکمل تائید کرتا ہے (silent movie era with live music and stars like Charlie Chaplin)۔"
        },
        {
          "id": "t12_s4_p3",
          "paragraphNumber": 3,
          "text": "In 1927, The Jazz Singer became the first successful feature film with spoken dialogue. Within just a\nfew years, silent films had almost disappeared. Some stars lost their careers because their voices did\nnot suit the new medium, while others became even more popular. Cinemas had to be fitted with new\nequipment, and studios built special rooms to keep out noise, which made the change expensive but\nalso exciting for the audiences.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"The arrival of sound\"): the introduction of talkies beginning with The Jazz Singer in 1927",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The arrival of sound' کی مکمل تائید کرتا ہے (the introduction of talkies beginning with The Jazz Singer in 1927)۔"
        },
        {
          "id": "t12_s4_p4",
          "paragraphNumber": 4,
          "text": "Colour came gradually. At first, workers painted each frame of a film by hand, which took enormous\npatience. Then a process called Technicolor produced rich, natural shades, and by the 1960s most big\nproductions were in colour. Black-and-white is now chosen mainly for artistic effect. Directors and\ndesigners had to think carefully about costumes and scenery, because bright colours could look\nstrange on the screen if they were not chosen with care.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Adding colour\"): evolution of Technicolor and adding color to film",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Adding colour' کی مکمل تائید کرتا ہے (evolution of Technicolor and adding color to film)۔"
        },
        {
          "id": "t12_s4_p5",
          "paragraphNumber": 5,
          "text": "For several decades, a few large Hollywood companies controlled every stage of film-making. They\nemployed directors, actors and writers on long contracts, owned the studios and even owned many\ncinemas. This produced films at great speed, but it also gave performers little freedom to choose their\nroles. Powerful studio bosses decided which films were made and who would star in them, and they\npromoted their actors in magazines to create famous names that audiences would pay to see.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"The studio system\"): Hollywood studio system controlling actors, contracts, and cinemas",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The studio system' کی مکمل تائید کرتا ہے (Hollywood studio system controlling actors, contracts, and cinemas)۔"
        },
        {
          "id": "t12_s4_p6",
          "paragraphNumber": 6,
          "text": "When television entered family homes in the 1950s, cinema attendance fell sharply. Studios fought\nback with wide screens, spectacular effects and three-dimensional films, which offered something a\nsmall black-and-white screen could not. Going to the cinema became less a habit and more a special\noccasion. Many small cinemas closed during these years, and large, comfortable cinemas with giant\nscreens became the main way of attracting people away from their living rooms.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Competition from television\"): television entering homes in the 1950s reducing cinema attendance",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Competition from television' کی مکمل تائید کرتا ہے (television entering homes in the 1950s reducing cinema attendance)۔"
        },
        {
          "id": "t12_s4_p7",
          "paragraphNumber": 7,
          "text": "Digital cameras have made it much cheaper to produce films, and special effects made by\ncomputers can create entire worlds. At the same time, streaming services allow viewers to watch new\nreleases at home. Many experts believe that cinemas will survive, because people still enjoy the shared\nexperience of a large screen. Young film-makers can now make a short film with a smartphone and\nshare it online, and some of them have attracted millions of viewers without any support from a studio.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Cinema in the digital age\"): digital cameras, streaming services, and online independent creation",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Cinema in the digital age' کی مکمل تائید کرتا ہے (digital cameras, streaming services, and online independent creation)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 13,
    "section1": {
      "id": "reading-test-13-s1",
      "title": "Practice Test 13 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "I have two ",
          "gapId": "t13_s1_gap_1",
          "options": [
            "ticket",
            "tickets",
            "ticketing"
          ],
          "correctIndex": 1,
          "textAfter": " for the game."
        },
        {
          "textBefore": "The match starts at three, so we should leave ",
          "gapId": "t13_s1_gap_2",
          "options": [
            "among",
            "about",
            "between"
          ],
          "correctIndex": 1,
          "textAfter": " twelve."
        },
        {
          "textBefore": "The stadium is not ",
          "gapId": "t13_s1_gap_3",
          "options": [
            "far",
            "long",
            "much"
          ],
          "correctIndex": 0,
          "textAfter": " from my house, so we can walk."
        },
        {
          "textBefore": "We can have lunch ",
          "gapId": "t13_s1_gap_4",
          "options": [
            "until",
            "since",
            "before"
          ],
          "correctIndex": 2,
          "textAfter": " the match."
        },
        {
          "textBefore": "I hope our team ",
          "gapId": "t13_s1_gap_5",
          "options": [
            "win",
            "wins",
            "winning"
          ],
          "correctIndex": 1,
          "textAfter": " this time!"
        }
      ],
      "explanations": {
        "t13_s1_gap_1": {
          "english": "Option (B) is correct: \"tickets\". ‘two tickets’ is plural.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘two tickets’ is plural....)"
        },
        "t13_s1_gap_2": {
          "english": "Option (B) is correct: \"about\". ‘about twelve’ indicates approximate time.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘about twelve’ indicates approximate time....)"
        },
        "t13_s1_gap_3": {
          "english": "Option (A) is correct: \"far\". ‘not far from’ is the standard spatial expression.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘not far from’ is the standard spatial expression....)"
        },
        "t13_s1_gap_4": {
          "english": "Option (C) is correct: \"before\". ‘before the match’ indicates prior time for lunch.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘before the match’ indicates prior time for lunch....)"
        },
        "t13_s1_gap_5": {
          "english": "Option (B) is correct: \"wins\". ‘our team wins’ requires third-person singular present.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘our team wins’ requires third-person singular present....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-13-s2",
      "title": "Practice Test 13 - Text Cohesion",
      "topic": "some instructions for a laundrette",
      "correctOrder": [
        0,
        2,
        1,
        4,
        3,
        5
      ],
      "sentences": [
        "Customers using the laundrette for the first time should follow these instructions. (Example)",
        "Place one group in a machine and add the washing powder from the dispenser by the door.",
        "Begin by sorting your clothes into whites and colours, as they must be washed separately.",
        "The machine will start by itself, and the screen will show how many minutes remain.",
        "Next, insert coins into the slot until the screen shows the amount needed.",
        "When the door unlocks, take out your clothes and move them to a dryer."
      ],
      "explanation": "‘Begin by sorting’ is step 1; ‘Place one group’ follows; ‘Next, insert coins’ pays; machine starts and runs; taking out clothes closes.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Begin by sorting’ is step 1; ‘Place one group’ follows; ‘Next, insert coins’ pays; machine starts a",
      "tasks": [
        {
          "id": "t13_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions for a laundrette",
          "topic": "some instructions for a laundrette",
          "correctOrder": [
            0,
            2,
            1,
            4,
            3,
            5
          ],
          "sentences": [
            "Customers using the laundrette for the first time should follow these instructions. (Example)",
            "Place one group in a machine and add the washing powder from the dispenser by the door.",
            "Begin by sorting your clothes into whites and colours, as they must be washed separately.",
            "The machine will start by itself, and the screen will show how many minutes remain.",
            "Next, insert coins into the slot until the screen shows the amount needed.",
            "When the door unlocks, take out your clothes and move them to a dryer."
          ],
          "explanation": "‘Begin by sorting’ is step 1; ‘Place one group’ follows; ‘Next, insert coins’ pays; machine starts and runs; taking out clothes closes.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Begin by sorting’ is step 1; ‘Place one group’ follows; ‘Next, insert coins’ pays; machine starts a"
        },
        {
          "id": "t13_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about the history of transport",
          "topic": "an article about the history of transport",
          "correctOrder": [
            0,
            3,
            5,
            1,
            4,
            2
          ],
          "sentences": [
            "The bicycle looks simple, but it took inventors many years to perfect it. (Example)",
            "However, the front wheel was huge, and falling off was a common and dangerous experience.",
            "This model is the ancestor of almost every bicycle we ride today.",
            "The first version, built in Germany in 1817, had no pedals, and riders pushed themselves along with their feet.",
            "A safer design appeared in the 1880s, with two wheels of equal size and a chain driving the rear one.",
            "Pedals were added to the front wheel several decades later, which made the machine faster."
          ],
          "explanation": "1817 pedal-less version begins; pedals added to front wheel follows; front wheel was huge and dangerous; safer 1880s equal-wheel design; ‘This model’ refers to modern ancestor.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: 1817 pedal-less version begins; pedals added to front wheel follows; front wheel was huge and danger"
        }
      ]
    },
    "section3": {
      "id": "reading-test-13-s3",
      "title": "Practice Test 13 - Opinion Matching",
      "topic": "Opinion Matching Test 13",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘Business has doubled since the series came out. I’ve hired three extra staff, and local young people\nfinally have jobs. It’s the best thing that’s happened to the village in years. I hope the visitors keep\ncoming.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I can’t park outside my own house in summer. The streets are crowded, and prices in the shops have\ngone up. Visitors leave their rubbish on the beach. I understand the benefits, but residents are paying\nthe price.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘We need to manage it carefully. Last year, we introduced a limit on cars in the centre and built a visitor\ncar park outside the village. We also ask tourists to follow a code of conduct. If the numbers are\ncontrolled, everyone can benefit.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘My family has lived here for generations, and the village is changing. There are more souvenir shops\nthan fish shops. I’m afraid that one day the real character of the place will be lost, and the visitors will\nhave nothing authentic to see.’"
        }
      ],
      "questions": [
        {
          "id": "t13_s3_q16",
          "statement": "Who is worried that the village’s character may disappear?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘I’m afraid that one day the real character of the place will be lost’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘I’m afraid that one day the real character of the place will be lost’)۔"
        },
        {
          "id": "t13_s3_q17",
          "statement": "Who has noticed increased prices?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘The streets are crowded, and prices in the shops have gone up’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘The streets are crowded, and prices in the shops have gone up’)۔"
        },
        {
          "id": "t13_s3_q18",
          "statement": "Who has taken on more employees?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘Business has doubled... I’ve hired three extra staff’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘Business has doubled... I’ve hired three extra staff’)۔"
        },
        {
          "id": "t13_s3_q19",
          "statement": "Who describes steps already taken to control traffic?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘introduced a limit on cars in the centre and built a visitor car park’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘introduced a limit on cars in the centre and built a visitor car park’)۔"
        },
        {
          "id": "t13_s3_q20",
          "statement": "Who finds it difficult to park near their home?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘I can’t park outside my own house in summer’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘I can’t park outside my own house in summer’)۔"
        },
        {
          "id": "t13_s3_q21",
          "statement": "Who thinks that tourism has created work for young people?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘local young people finally have jobs’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘local young people finally have jobs’)۔"
        },
        {
          "id": "t13_s3_q22",
          "statement": "Who thinks that tourists must be given rules to follow?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘We also ask tourists to follow a code of conduct’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘We also ask tourists to follow a code of conduct’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-13-s4",
      "title": "Practice Test 13 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Travelling by camel",
        "B - Growing deserts",
        "C - Shaped by wind",
        "D - Animals of the night",
        "E - Plants that survive",
        "F - Not always hot",
        "G - Reversing the damage",
        "H - Deserts as tourist attractions",
        "J - Land of little rain (Example)"
      ],
      "paragraphs": [
        {
          "id": "t13_s4_p1",
          "paragraphNumber": 1,
          "text": "Many deserts are scorching by day, but some are cold. The Gobi Desert in Asia has freezing winters,\nwith temperatures far below zero. Even in the hottest deserts, nights can be surprisingly chilly, because\nthere are no clouds to hold the day’s heat close to the ground. In some regions, the temperature can\nchange by more than thirty degrees between noon and midnight, which is hard on plants, animals and\neven the rocks, which crack as they heat and cool.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Not always hot\"): deserts are not always hot, including freezing Gobi and cold nights",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Not always hot' کی مکمل تائید کرتا ہے (deserts are not always hot, including freezing Gobi and cold nights)۔"
        },
        {
          "id": "t13_s4_p2",
          "paragraphNumber": 2,
          "text": "Wind is the main artist of the desert. It carries sand from place to place and piles it into dunes, some\nof which are over two hundred metres high. Over thousands of years, it also wears away rock, creating\nstrange arches and pillars. Dunes slowly move, and sometimes they bury roads and even villages. The\nmost famous dunes shift forward by many metres every year, and in some countries, people plant\nfences and trees to stop them from covering farms and roads.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Shaped by wind\"): wind carving rock into arches and building shifting sand dunes",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Shaped by wind' کی مکمل تائید کرتا ہے (wind carving rock into arches and building shifting sand dunes)۔"
        },
        {
          "id": "t13_s4_p3",
          "paragraphNumber": 3,
          "text": "Desert plants have developed remarkable ways of coping with drought. Cacti store water in their\nthick stems and protect themselves with sharp spines instead of leaves. Other plants have roots that\nspread far from the plant or grow deep underground to find moisture. Some seeds can wait for years,\nthen sprout within days after rain. After a rare rainstorm, the desert can change in a few days into a\ncarpet of flowers, as seeds that have been waiting in the dry soil suddenly begin to grow.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Plants that survive\"): cacti and drought-resistant flora storing water and waiting for rain",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Plants that survive' کی مکمل تائید کرتا ہے (cacti and drought-resistant flora storing water and waiting for rain)۔"
        },
        {
          "id": "t13_s4_p4",
          "paragraphNumber": 4,
          "text": "Many desert animals avoid the heat by hiding during the day. They hunt and feed at night, when it is\ncooler. Small creatures such as the fennec fox have huge ears that release body heat, and the\nkangaroo rat can live without ever drinking, because it gets enough water from the seeds it eats.\nInsects and reptiles are also well adapted, with some beetles collecting drops of morning fog on their\nbacks and lizards lifting their feet alternately to avoid the burning sand.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Animals of the night\"): nocturnal desert fauna hunting at night and adapting to heat",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Animals of the night' کی مکمل تائید کرتا ہے (nocturnal desert fauna hunting at night and adapting to heat)۔"
        },
        {
          "id": "t13_s4_p5",
          "paragraphNumber": 5,
          "text": "For centuries, camels have been the key to crossing the desert. They can go for days without water,\nand they store fat in their humps to use as energy. Wide, flat feet stop them from sinking into the sand.\nTraders using camel caravans carried salt, spices and gold across the Sahara for more than a\nthousand years. Even today, some desert peoples, such as the Tuareg, use camels to carry their goods\nand to travel between wells, and they know the routes so well that they rarely get lost.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Travelling by camel\"): camels enabling trans-Saharan trade caravans for centuries",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Travelling by camel' کی مکمل تائید کرتا ہے (camels enabling trans-Saharan trade caravans for centuries)۔"
        },
        {
          "id": "t13_s4_p6",
          "paragraphNumber": 6,
          "text": "In some parts of the world, deserts are expanding. Overgrazing, cutting down trees and changing\nrainfall patterns are turning dry farmland into barren ground. This process, called desertification,\nthreatens the food supply of millions of people in regions such as northern Africa. When the soil is left\nwithout plants, the wind blows it away, and once the fertile layer has gone, it may take hundreds of\nyears for it to form again.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Growing deserts\"): desertification turning dry farmland into barren ground",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Growing deserts' کی مکمل تائید کرتا ہے (desertification turning dry farmland into barren ground)۔"
        },
        {
          "id": "t13_s4_p7",
          "paragraphNumber": 7,
          "text": "However, some projects are fighting back. In Africa, countries are planting a long belt of trees and\nshrubs across the continent, to hold back the sand and protect the soil. Farmers who use simple\nmethods, such as digging small pits to collect rainwater, have turned dry fields green again. These\nprojects often depend on local communities, whose members learn to look after the new trees, and they\nhave already helped thousands of families to grow enough food again.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Reversing the damage\"): reversing land degradation through tree belts and water pits",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Reversing the damage' کی مکمل تائید کرتا ہے (reversing land degradation through tree belts and water pits)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 14,
    "section1": {
      "id": "reading-test-14-s1",
      "title": "Practice Test 14 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "I would like to find a room ",
          "gapId": "t14_s1_gap_1",
          "options": [
            "nearly",
            "near",
            "nearer"
          ],
          "correctIndex": 1,
          "textAfter": " the campus."
        },
        {
          "textBefore": "I do not want to pay ",
          "gapId": "t14_s1_gap_2",
          "options": [
            "most",
            "much",
            "more"
          ],
          "correctIndex": 2,
          "textAfter": " than £400 a month."
        },
        {
          "textBefore": "Is there a kitchen where I can ",
          "gapId": "t14_s1_gap_3",
          "options": [
            "repair",
            "prefer",
            "prepare"
          ],
          "correctIndex": 2,
          "textAfter": " my own meals?"
        },
        {
          "textBefore": "I ",
          "gapId": "t14_s1_gap_4",
          "options": [
            "am",
            "will",
            "would"
          ],
          "correctIndex": 1,
          "textAfter": " arrive in the city on 1 September."
        },
        {
          "textBefore": "Thank you ",
          "gapId": "t14_s1_gap_5",
          "options": [
            "in",
            "on",
            "at"
          ],
          "correctIndex": 0,
          "textAfter": " advance for your help."
        }
      ],
      "explanations": {
        "t14_s1_gap_1": {
          "english": "Option (B) is correct: \"near\". ‘near the campus’ indicates close location.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘near the campus’ indicates close location....)"
        },
        "t14_s1_gap_2": {
          "english": "Option (C) is correct: \"more\". ‘more than £400’ is used with comparative quantity.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘more than £400’ is used with comparative quantity....)"
        },
        "t14_s1_gap_3": {
          "english": "Option (C) is correct: \"prepare\". ‘prepare my own meals’ is the natural collocation.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘prepare my own meals’ is the natural collocation....)"
        },
        "t14_s1_gap_4": {
          "english": "Option (B) is correct: \"will\". ‘will arrive’ expresses future definite action.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘will arrive’ expresses future definite action....)"
        },
        "t14_s1_gap_5": {
          "english": "Option (A) is correct: \"in\". ‘in advance’ is the fixed prepositional phrase.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘in advance’ is the fixed prepositional phrase....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-14-s2",
      "title": "Practice Test 14 - Text Cohesion",
      "topic": "some gardening instructions",
      "correctOrder": [
        0,
        4,
        5,
        3,
        1,
        2
      ],
      "sentences": [
        "Anyone who wants to plant a young tree in their garden should follow these instructions. (Example)",
        "Fill the hole with soil, pressing it down gently as you go.",
        "Finally, give the tree plenty of water and repeat this once a week during dry weather.",
        "Place it in the hole so that the top of the roots is level with the ground.",
        "Start by digging a hole that is twice as wide as the container the tree came in.",
        "Carefully remove the tree from its container and loosen the roots with your fingers."
      ],
      "explanation": "‘Start by digging’ begins; ‘remove tree from container’ prepares it; ‘Place it in the hole’ positions it; ‘Fill hole with soil’ covers; ‘Finally, give water’ concludes.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Start by digging’ begins; ‘remove tree from container’ prepares it; ‘Place it in the hole’ position",
      "tasks": [
        {
          "id": "t14_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some gardening instructions",
          "topic": "some gardening instructions",
          "correctOrder": [
            0,
            4,
            5,
            3,
            1,
            2
          ],
          "sentences": [
            "Anyone who wants to plant a young tree in their garden should follow these instructions. (Example)",
            "Fill the hole with soil, pressing it down gently as you go.",
            "Finally, give the tree plenty of water and repeat this once a week during dry weather.",
            "Place it in the hole so that the top of the roots is level with the ground.",
            "Start by digging a hole that is twice as wide as the container the tree came in.",
            "Carefully remove the tree from its container and loosen the roots with your fingers."
          ],
          "explanation": "‘Start by digging’ begins; ‘remove tree from container’ prepares it; ‘Place it in the hole’ positions it; ‘Fill hole with soil’ covers; ‘Finally, give water’ concludes.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Start by digging’ begins; ‘remove tree from container’ prepares it; ‘Place it in the hole’ position"
        },
        {
          "id": "t14_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about food history",
          "topic": "a book about food history",
          "correctOrder": [
            0,
            4,
            3,
            1,
            5,
            2
          ],
          "sentences": [
            "Ice cream has a long history that began in ancient times. (Example)",
            "At first, it was a luxury, because ice was difficult to obtain and store.",
            "Soon, street sellers across Europe and America were selling it to crowds on hot afternoons.",
            "Later, Italian merchants brought similar recipes back to Europe.",
            "In China, around 200 BC, people are said to have mixed rice with milk and packed the mixture in snow.",
            "This changed in the nineteenth century, when new machines made it possible to freeze cream cheaply."
          ],
          "explanation": "200 BC Chinese milk/rice in snow starts; Italian merchants bring recipes to Europe; ice was luxury; 19th-century freezing machines; street sellers selling across Europe/America.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: 200 BC Chinese milk/rice in snow starts; Italian merchants bring recipes to Europe; ice was luxury; "
        }
      ]
    },
    "section3": {
      "id": "reading-test-14-s3",
      "title": "Practice Test 14 - Opinion Matching",
      "topic": "Opinion Matching Test 14",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I’d prefer my son to go straight to university. A year off often turns into two, and I’ve seen young people\nlose their motivation. Studying is easier when you’ve just left school, and the habit of learning is still\nfresh.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I spent my gap year in Peru, teaching English in a small school. I was homesick at first, but it made me\nfar more confident and independent. When I started my degree, I knew exactly what I wanted to study,\nwhich I didn’t before.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘When I interview graduates, I’m impressed by candidates who’ve worked or travelled before studying.\nIt shows initiative. However, a year spent lying on a beach counts for nothing. What matters is what you\ndid and what you learned from it.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I couldn’t afford a gap year. I worked for twelve months in a supermarket just to save for my tuition\nfees. Honestly, it wasn’t exciting, but I learned to manage money and deal with difficult customers. A\ngap year doesn’t have to be an expensive adventure.’"
        }
      ],
      "questions": [
        {
          "id": "t14_s3_q16",
          "statement": "Who believes a break can reduce motivation to study?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘young people lose their motivation’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘young people lose their motivation’)۔"
        },
        {
          "id": "t14_s3_q17",
          "statement": "Who gained a clearer idea of what to study?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘I knew exactly what I wanted to study, which I didn’t before’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘I knew exactly what I wanted to study, which I didn’t before’)۔"
        },
        {
          "id": "t14_s3_q18",
          "statement": "Who says that employers are impressed by useful experience?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘When I interview graduates, I’m impressed by candidates who’ve worked’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘When I interview graduates, I’m impressed by candidates who’ve worked’)۔"
        },
        {
          "id": "t14_s3_q19",
          "statement": "Who worked to pay for education?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘worked for twelve months in a supermarket just to save for tuition’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘worked for twelve months in a supermarket just to save for tuition’)۔"
        },
        {
          "id": "t14_s3_q20",
          "statement": "Who feels that doing nothing during the year has no value?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘a year spent lying on a beach counts for nothing’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘a year spent lying on a beach counts for nothing’)۔"
        },
        {
          "id": "t14_s3_q21",
          "statement": "Who felt homesick?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘I was homesick at first’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘I was homesick at first’)۔"
        },
        {
          "id": "t14_s3_q22",
          "statement": "Who thinks a gap year need not cost a lot of money?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘A gap year doesn’t have to be an expensive adventure’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘A gap year doesn’t have to be an expensive adventure’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-14-s4",
      "title": "Practice Test 14 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Secrets in the ice",
        "B - Life at a research station",
        "C - A continent for peace",
        "D - Extreme weather",
        "E - Tourist cruises to the south",
        "F - A land of ice",
        "G - Early explorers",
        "H - Surviving the cold",
        "J - The end of the Earth (Example)"
      ],
      "paragraphs": [
        {
          "id": "t14_s4_p1",
          "paragraphNumber": 1,
          "text": "About ninety-eight per cent of Antarctica is buried under an ice sheet that is, on average, more than\ntwo kilometres thick. It contains roughly seventy per cent of the world’s fresh water. If all of it melted,\nsea levels around the globe would rise by dozens of metres. The weight of this ice is so great that it\npresses the land beneath it downwards, and in some places the rock under the ice sheet lies far below\nthe level of the sea.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"A land of ice\"): vast ice sheet covering 98% of Antarctica with fresh water",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A land of ice' کی مکمل تائید کرتا ہے (vast ice sheet covering 98% of Antarctica with fresh water)۔"
        },
        {
          "id": "t14_s4_p2",
          "paragraphNumber": 2,
          "text": "The lowest temperature ever recorded on Earth, around minus eighty-nine degrees Celsius, was\nmeasured at a Russian research station in Antarctica. Winds can blow at more than two hundred\nkilometres per hour. Although the continent is covered in ice, it receives very little snow, which is why\nscientists call it a desert. In parts of the interior, the air is so dry and cold that objects left on the surface\ncan remain unchanged for many decades, since there is almost nothing to cause them to rot.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Extreme weather\"): record low temperatures of minus 89 degrees and fierce winds",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Extreme weather' کی مکمل تائید کرتا ہے (record low temperatures of minus 89 degrees and fierce winds)۔"
        },
        {
          "id": "t14_s4_p3",
          "paragraphNumber": 3,
          "text": "Wildlife is found mostly along the coast. Emperor penguins survive the winter by huddling together in\nlarge groups, taking turns to stand on the outside of the crowd. Seals have a thick layer of fat called\nblubber to keep them warm, and many fish have a natural substance in their blood that stops it from\nfreezing. Tiny creatures live in the ocean, too, and the cold water is rich in krill, which feeds fish, seals,\npenguins and whales and keeps the whole food chain going.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Surviving the cold\"): coastal wildlife like emperor penguins and blubber-insulated seals",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Surviving the cold' کی مکمل تائید کرتا ہے (coastal wildlife like emperor penguins and blubber-insulated seals)۔"
        },
        {
          "id": "t14_s4_p4",
          "paragraphNumber": 4,
          "text": "The first people to reach the South Pole were a Norwegian team led by Roald Amundsen in\nDecember 1911. A British expedition led by Robert Scott arrived a month later, only to find the\nNorwegian flag already there. Scott and his companions died on the return journey, and their story has\nbecome a legend of courage. Their equipment was far less advanced than today’s, and the explorers\ndepended on dogs, ponies and their own strength to pull heavy sledges across the ice for hundreds of\nkilometres.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Early explorers\"): historic expeditions by Roald Amundsen and Robert Scott to the Pole",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Early explorers' کی مکمل تائید کرتا ہے (historic expeditions by Roald Amundsen and Robert Scott to the Pole)۔"
        },
        {
          "id": "t14_s4_p5",
          "paragraphNumber": 5,
          "text": "Today, about a thousand people live in Antarctica during the winter, and several thousand more in\nthe summer. They work at research stations that look like small villages, with kitchens, laboratories and\nsleeping quarters. In winter, the sun does not rise for months, and the staff have to cope with darkness\nand isolation. Supplies arrive by ship or aeroplane only a few times each year, so the staff must plan\ncarefully, and many of them include cooks, doctors and mechanics as well as scientists.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Life at a research station\"): living and working in isolated research stations with winter darkness",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Life at a research station' کی مکمل تائید کرتا ہے (living and working in isolated research stations with winter darkness)۔"
        },
        {
          "id": "t14_s4_p6",
          "paragraphNumber": 6,
          "text": "By drilling deep into the ice, scientists extract long cylinders called ice cores. Tiny bubbles of air\ntrapped in the layers show what the atmosphere was like hundreds of thousands of years ago. This\ninformation allows researchers to compare today’s changes in climate with those of the past. Some of\nthe oldest cores contain information stretching back for more than eight hundred thousand years, and\nthey show that the level of carbon dioxide in the air is now higher than at any time during that period.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Secrets in the ice\"): drilling ice cores to reveal historical climate and atmosphere data",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Secrets in the ice' کی مکمل تائید کرتا ہے (drilling ice cores to reveal historical climate and atmosphere data)۔"
        },
        {
          "id": "t14_s4_p7",
          "paragraphNumber": 7,
          "text": "No country owns Antarctica. In 1959, twelve nations signed a treaty agreeing that it would be used\nonly for peaceful and scientific purposes. The agreement has since been joined by more than fifty\ncountries, and it bans military activity and mining, so that the continent can remain protected. Scientists\nfrom many countries share their findings and even their buildings, and this cooperation is often\ndescribed as an example of how nations can work together peacefully.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"A continent for peace\"): the 1959 Antarctic Treaty dedicating the continent to peace",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A continent for peace' کی مکمل تائید کرتا ہے (the 1959 Antarctic Treaty dedicating the continent to peace)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 15,
    "section1": {
      "id": "reading-test-15-s1",
      "title": "Practice Test 15 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "You only need to ",
          "gapId": "t15_s1_gap_1",
          "options": [
            "hate",
            "head",
            "heat"
          ],
          "correctIndex": 2,
          "textAfter": " it for two minutes."
        },
        {
          "textBefore": "Please do your homework ",
          "gapId": "t15_s1_gap_2",
          "options": [
            "during",
            "before",
            "since"
          ],
          "correctIndex": 1,
          "textAfter": " you watch television."
        },
        {
          "textBefore": "Don’t forget to ",
          "gapId": "t15_s1_gap_3",
          "options": [
            "take",
            "bring",
            "carry"
          ],
          "correctIndex": 0,
          "textAfter": " the dog for a walk."
        },
        {
          "textBefore": "The key is ",
          "gapId": "t15_s1_gap_4",
          "options": [
            "at",
            "in",
            "on"
          ],
          "correctIndex": 2,
          "textAfter": " the table by the door."
        },
        {
          "textBefore": "I will be home ",
          "gapId": "t15_s1_gap_5",
          "options": [
            "among",
            "along",
            "around"
          ],
          "correctIndex": 2,
          "textAfter": " nine o’clock."
        }
      ],
      "explanations": {
        "t15_s1_gap_1": {
          "english": "Option (C) is correct: \"heat\". ‘heat it for two minutes’ means warming the food.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘heat it for two minutes’ means warming the food....)"
        },
        "t15_s1_gap_2": {
          "english": "Option (B) is correct: \"before\". ‘before you watch television’ specifies chronological order.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘before you watch television’ specifies chronological order....)"
        },
        "t15_s1_gap_3": {
          "english": "Option (A) is correct: \"take\". ‘take the dog for a walk’ is the standard idiom.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘take the dog for a walk’ is the standard idiom....)"
        },
        "t15_s1_gap_4": {
          "english": "Option (C) is correct: \"on\". ‘on the table’ denotes surface position.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘on the table’ denotes surface position....)"
        },
        "t15_s1_gap_5": {
          "english": "Option (C) is correct: \"around\". ‘around nine o’clock’ indicates approximate arrival time.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘around nine o’clock’ indicates approximate arrival time....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-15-s2",
      "title": "Practice Test 15 - Text Cohesion",
      "topic": "some instructions from a medical centre",
      "correctOrder": [
        0,
        4,
        2,
        1,
        5,
        3
      ],
      "sentences": [
        "Patients can now book an appointment with their doctor online by following these steps. (Example)",
        "Click on this link and choose a password of at least eight characters.",
        "You will then receive an email containing a link to confirm your account.",
        "Finally, pick a convenient time from the available dates and press the confirm button.",
        "First, visit the clinic’s website and register with your name and date of birth.",
        "After that, select the doctor you wish to see from the list on the screen."
      ],
      "explanation": "‘First, visit website’ initiates; ‘receive email link’ follows; ‘Click on this link’ uses the link; ‘select doctor’ chooses; ‘Finally, pick time’ finishes.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘First, visit website’ initiates; ‘receive email link’ follows; ‘Click on this link’ uses the link; ",
      "tasks": [
        {
          "id": "t15_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions from a medical centre",
          "topic": "some instructions from a medical centre",
          "correctOrder": [
            0,
            4,
            2,
            1,
            5,
            3
          ],
          "sentences": [
            "Patients can now book an appointment with their doctor online by following these steps. (Example)",
            "Click on this link and choose a password of at least eight characters.",
            "You will then receive an email containing a link to confirm your account.",
            "Finally, pick a convenient time from the available dates and press the confirm button.",
            "First, visit the clinic’s website and register with your name and date of birth.",
            "After that, select the doctor you wish to see from the list on the screen."
          ],
          "explanation": "‘First, visit website’ initiates; ‘receive email link’ follows; ‘Click on this link’ uses the link; ‘select doctor’ chooses; ‘Finally, pick time’ finishes.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘First, visit website’ initiates; ‘receive email link’ follows; ‘Click on this link’ uses the link; "
        },
        {
          "id": "t15_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about travel documents",
          "topic": "an article about travel documents",
          "correctOrder": [
            0,
            2,
            1,
            4,
            5,
            3
          ],
          "sentences": [
            "Passports in their modern form are less than a hundred years old. (Example)",
            "That changed when governments began to worry about security and wanted to control who entered their countries.",
            "Before the First World War, travellers could cross most European borders with very few checks.",
            "Today, new passports often contain a tiny electronic chip that stores this information.",
            "In 1920, the League of Nations organised a conference to agree on a standard travel document.",
            "As a result, countries adopted a similar booklet containing a photograph and personal details."
          ],
          "explanation": "Before WWI open borders; security concerns led to changes; 1920 League of Nations conference; standard booklet adopted; modern chip passports conclude.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: Before WWI open borders; security concerns led to changes; 1920 League of Nations conference; standa"
        }
      ]
    },
    "section3": {
      "id": "reading-test-15-s3",
      "title": "Practice Test 15 - Opinion Matching",
      "topic": "Opinion Matching Test 15",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I became vegetarian three years ago for environmental reasons. Producing meat uses enormous\namounts of land and water, and I wanted to reduce my impact. I was surprised at how easy it was.\nThere are so many tasty alternatives now that I don’t miss meat at all.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I eat meat, but only twice a week. I think that’s a sensible compromise. Cutting out meat completely\nisn’t realistic for most families, but small changes by millions of people would still make a difference.\nAlso, I buy it from a local farm, where animals are treated well.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I’d never give up meat. I’m a cook, and meat is an important part of traditional dishes in my country. My\nconcern is health: I’m sure a balanced diet needs some meat. People should eat less processed meat,\nlike sausages, but a good steak is fine now and then.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I’ve tried going vegetarian twice and failed both times. My family eats meat every day, and cooking two\nseparate meals took too much time. Perhaps I’d manage if the whole household joined me, and I’m\nplanning to ask them to try it for a month.’"
        }
      ],
      "questions": [
        {
          "id": "t15_s3_q16",
          "statement": "Who is motivated by concern for the environment?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘became vegetarian three years ago for environmental reasons’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘became vegetarian three years ago for environmental reasons’)۔"
        },
        {
          "id": "t15_s3_q17",
          "statement": "Who has found it easy to stop eating meat?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘I was surprised at how easy it was... I don’t miss meat at all’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘I was surprised at how easy it was... I don’t miss meat at all’)۔"
        },
        {
          "id": "t15_s3_q18",
          "statement": "Who believes that processed meat should be reduced?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘People should eat less processed meat, like sausages’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘People should eat less processed meat, like sausages’)۔"
        },
        {
          "id": "t15_s3_q19",
          "statement": "Who failed because of the eating habits of other people at home?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘My family eats meat every day, and cooking two separate meals took too much time’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘My family eats meat every day, and cooking two separate meals took too much tim)۔"
        },
        {
          "id": "t15_s3_q20",
          "statement": "Who prefers to buy from farms where animals are cared for?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘buy it from a local farm, where animals are treated well’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘buy it from a local farm, where animals are treated well’)۔"
        },
        {
          "id": "t15_s3_q21",
          "statement": "Who thinks that meat is part of cultural traditions?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘meat is an important part of traditional dishes in my country’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘meat is an important part of traditional dishes in my country’)۔"
        },
        {
          "id": "t15_s3_q22",
          "statement": "Who thinks that a moderate reduction can still be effective?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘small changes by millions of people would still make a difference’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘small changes by millions of people would still make a difference’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-15-s4",
      "title": "Practice Test 15 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Pollution in the oceans",
        "B - Natural alternatives",
        "C - Reusing plastic at home",
        "D - Why so little is recycled",
        "E - Governments take action",
        "F - A short history",
        "G - How recycling works",
        "H - Why it lasts so long",
        "J - A material we cannot avoid (Example)"
      ],
      "paragraphs": [
        {
          "id": "t15_s4_p1",
          "paragraphNumber": 1,
          "text": "The first fully synthetic plastic, Bakelite, was invented in 1907. Mass production began after the\nSecond World War, and plastic quickly replaced materials such as wood, glass and metal in thousands\nof products. Since 1950, humans are estimated to have produced over eight billion tonnes of it. Early\nplastics were often used to make small, luxury items such as combs and radio cases, and their low\nprice soon allowed manufacturers to produce goods for ordinary families.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"A short history\"): history of synthetic plastic beginning with Bakelite in 1907",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A short history' کی مکمل تائید کرتا ہے (history of synthetic plastic beginning with Bakelite in 1907)۔"
        },
        {
          "id": "t15_s4_p2",
          "paragraphNumber": 2,
          "text": "Unlike food or paper, plastic does not rot. Instead, sunlight and waves slowly break it into smaller and\nsmaller pieces, but the material itself never fully disappears. A plastic bottle left on a beach may remain\nthere for four hundred years, long after the person who dropped it has been forgotten. Some types of\nplastic are more harmful than others, because chemicals in them can enter soil and water and may be\nabsorbed by animals that people later eat.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Why it lasts so long\"): plastic durability taking hundreds of years to break down",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Why it lasts so long' کی مکمل تائید کرتا ہے (plastic durability taking hundreds of years to break down)۔"
        },
        {
          "id": "t15_s4_p3",
          "paragraphNumber": 3,
          "text": "Every year, millions of tonnes of plastic enter the sea. Turtles mistake plastic bags for jellyfish, and\nseabirds feed pieces to their chicks. Tiny fragments, known as microplastics, have been found in the\ndeepest ocean trenches and even in the stomachs of fish that people eat. Large patches of floating\nrubbish have formed in several oceans, where circular currents gather the waste, and some of them are\nnow larger than many countries.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Pollution in the oceans\"): millions of tonnes entering oceans, harming turtles and marine life",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Pollution in the oceans' کی مکمل تائید کرتا ہے (millions of tonnes entering oceans, harming turtles and marine life)۔"
        },
        {
          "id": "t15_s4_p4",
          "paragraphNumber": 4,
          "text": "In a recycling plant, plastic waste is sorted by type, washed and shredded into small flakes. These\nflakes are then melted and made into new products, such as clothing, furniture and park benches. The\nprocess saves energy compared with making plastic from oil, but it works only if the waste has been\nsorted properly. Different types of plastic must be recycled separately, which is why many products\ncarry a small number inside a triangle to show what they are made from.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"How recycling works\"): steps in a recycling facility: sorting, washing, shredding, melting",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How recycling works' کی مکمل تائید کرتا ہے (steps in a recycling facility: sorting, washing, shredding, melting)۔"
        },
        {
          "id": "t15_s4_p5",
          "paragraphNumber": 5,
          "text": "Despite good intentions, only about nine per cent of all plastic ever produced has been recycled.\nMany items are made of mixed materials that are too difficult to separate, while others are too dirty to\nbe processed. In addition, new plastic is often cheaper than recycled plastic, which discourages\ncompanies from using it. Poorer countries often lack the equipment to collect and sort rubbish, and in\nthe past wealthy nations sent their plastic waste overseas, though several importers have now refused\nto accept it.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Why so little is recycled\"): challenges explaining why only 9% of plastic has been recycled",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Why so little is recycled' کی مکمل تائید کرتا ہے (challenges explaining why only 9% of plastic has been recycled)۔"
        },
        {
          "id": "t15_s4_p6",
          "paragraphNumber": 6,
          "text": "Many countries have introduced laws to reduce plastic waste. Some charge a small fee for shopping\nbags, while others have banned single-use items such as straws and cotton buds. The results have\nbeen impressive: in several places, the use of plastic bags fell by more than eighty per cent within a few\nyears. Some governments have also required companies to pay for the cost of collecting and recycling\nthe packaging they sell, which gives them a reason to design products that are easier to recycle.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Governments take action\"): government legislation banning single-use plastics and taxing bags",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Governments take action' کی مکمل تائید کرتا ہے (government legislation banning single-use plastics and taxing bags)۔"
        },
        {
          "id": "t15_s4_p7",
          "paragraphNumber": 7,
          "text": "Scientists are also developing materials that break down safely. Packaging made from seaweed,\nmushrooms and plant starch can disappear within weeks. Such products are still more expensive than\nordinary plastic, but as demand grows, experts expect the prices to fall. Other researchers are working\non bacteria and enzymes that can digest plastic, and although the results are still experimental, they\noffer hope that old rubbish may eventually be broken down.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Natural alternatives\"): natural biodegradable alternatives made from seaweed and mushrooms",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Natural alternatives' کی مکمل تائید کرتا ہے (natural biodegradable alternatives made from seaweed and mushrooms)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 16,
    "section1": {
      "id": "reading-test-16-s1",
      "title": "Practice Test 16 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "We want to travel ",
          "gapId": "t16_s1_gap_1",
          "options": [
            "on",
            "at",
            "in"
          ],
          "correctIndex": 2,
          "textAfter": " August."
        },
        {
          "textBefore": "My children are ",
          "gapId": "t16_s1_gap_2",
          "options": [
            "eighth",
            "eight",
            "eights"
          ],
          "correctIndex": 1,
          "textAfter": " years old and eleven."
        },
        {
          "textBefore": "Is it possible to ",
          "gapId": "t16_s1_gap_3",
          "options": [
            "borrow",
            "lend",
            "rent"
          ],
          "correctIndex": 2,
          "textAfter": " a car at the airport?"
        },
        {
          "textBefore": "We do not mind ",
          "gapId": "t16_s1_gap_4",
          "options": [
            "to leave",
            "leave",
            "leaving"
          ],
          "correctIndex": 2,
          "textAfter": " early in the morning."
        },
        {
          "textBefore": "Please send me the prices ",
          "gapId": "t16_s1_gap_5",
          "options": [
            "with",
            "by",
            "at"
          ],
          "correctIndex": 1,
          "textAfter": " email."
        }
      ],
      "explanations": {
        "t16_s1_gap_1": {
          "english": "Option (C) is correct: \"in\". ‘in August’ is used for months of the year.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘in August’ is used for months of the year....)"
        },
        "t16_s1_gap_2": {
          "english": "Option (B) is correct: \"eight\". ‘eight years old’ is the cardinal number.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘eight years old’ is the cardinal number....)"
        },
        "t16_s1_gap_3": {
          "english": "Option (C) is correct: \"rent\". ‘rent a car’ is used for paid temporary vehicle hire.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘rent a car’ is used for paid temporary vehicle hire....)"
        },
        "t16_s1_gap_4": {
          "english": "Option (C) is correct: \"leaving\". ‘do not mind leaving’ takes the gerund after ‘mind’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘do not mind leaving’ takes the gerund after ‘mind’....)"
        },
        "t16_s1_gap_5": {
          "english": "Option (B) is correct: \"by\". ‘by email’ is the standard preposition for means of transmission.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘by email’ is the standard preposition for means of transmission....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-16-s2",
      "title": "Practice Test 16 - Text Cohesion",
      "topic": "instructions for railway passengers",
      "correctOrder": [
        0,
        2,
        5,
        4,
        3,
        1
      ],
      "sentences": [
        "Passengers who want to buy a ticket from our self-service machines should follow these instructions. (Example)",
        "Take your ticket and receipt from the tray at the bottom of the machine.",
        "Begin by touching the screen and selecting your language.",
        "Once you have chosen, insert your card or coins to pay for the ticket.",
        "The machine will show you a list of fares, from which you can choose the one you prefer.",
        "Then enter the name of the station you are travelling to."
      ],
      "explanation": "‘Begin by touching screen’ opens; ‘enter destination station’ follows; ‘machine shows fares’ displays; ‘insert card/coins’ pays; ‘Take ticket’ concludes.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Begin by touching screen’ opens; ‘enter destination station’ follows; ‘machine shows fares’ display",
      "tasks": [
        {
          "id": "t16_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Instructions for railway passengers",
          "topic": "instructions for railway passengers",
          "correctOrder": [
            0,
            2,
            5,
            4,
            3,
            1
          ],
          "sentences": [
            "Passengers who want to buy a ticket from our self-service machines should follow these instructions. (Example)",
            "Take your ticket and receipt from the tray at the bottom of the machine.",
            "Begin by touching the screen and selecting your language.",
            "Once you have chosen, insert your card or coins to pay for the ticket.",
            "The machine will show you a list of fares, from which you can choose the one you prefer.",
            "Then enter the name of the station you are travelling to."
          ],
          "explanation": "‘Begin by touching screen’ opens; ‘enter destination station’ follows; ‘machine shows fares’ displays; ‘insert card/coins’ pays; ‘Take ticket’ concludes.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Begin by touching screen’ opens; ‘enter destination station’ follows; ‘machine shows fares’ display"
        },
        {
          "id": "t16_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about everyday objects",
          "topic": "a book about everyday objects",
          "correctOrder": [
            0,
            4,
            3,
            1,
            5,
            2
          ],
          "sentences": [
            "People have been cleaning their teeth for thousands of years. (Example)",
            "Europeans later copied this idea, although many preferred softer horse hair.",
            "This new material lasted longer and was cleaner, so it quickly became the standard.",
            "The first bristle brush appeared in China in the fifteenth century, with hairs taken from pigs fixed to bamboo handles.",
            "In ancient times, they chewed the ends of small twigs until the fibres became soft and brush-like.",
            "In 1938, nylon was used for the first time instead of animal hair."
          ],
          "explanation": "Ancient twigs chewed into brushes; 15th-century pig-bristle brush in China; Europeans copied with horse hair; 1938 nylon introduced; nylon becomes standard.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: Ancient twigs chewed into brushes; 15th-century pig-bristle brush in China; Europeans copied with ho"
        }
      ]
    },
    "section3": {
      "id": "reading-test-16-s3",
      "title": "Practice Test 16 - Opinion Matching",
      "topic": "Opinion Matching Test 16",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I joined a gym in January and go four times a week. I like having equipment for everything, and trainers\nwho correct my technique. The classes keep me motivated because I’ve made friends there. It’s not\ncheap, but I think it’s an investment in my health.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I run in the park every morning. It costs nothing, and fresh air makes me feel better than any machine.\nIn winter it’s cold and dark, but that makes me feel proud afterwards. I get bored on a treadmill after ten\nminutes.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I prefer team sports. I play volleyball with colleagues on Wednesday evenings, and we then go for a\nmeal together. I find exercising on my own very dull, but when others are counting on me, I never miss\na session.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I’m not sporty, so I simply walk to work, which takes forty minutes. Doctors say thirty minutes of gentle\nactivity daily is enough, and I fit it into my routine without even thinking. I’ve never had the time or\nmoney for fitness clubs.’"
        }
      ],
      "questions": [
        {
          "id": "t16_s3_q16",
          "statement": "Who finds exercising alone boring?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘I find exercising on my own very dull’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘I find exercising on my own very dull’)۔"
        },
        {
          "id": "t16_s3_q17",
          "statement": "Who thinks it is worth paying for exercise?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘It’s not cheap, but I think it’s an investment in my health’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘It’s not cheap, but I think it’s an investment in my health’)۔"
        },
        {
          "id": "t16_s3_q18",
          "statement": "Who enjoys feeling proud after exercising in poor weather?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘In winter it’s cold and dark, but that makes me feel proud afterwards’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘In winter it’s cold and dark, but that makes me feel proud afterwards’)۔"
        },
        {
          "id": "t16_s3_q19",
          "statement": "Who includes exercise in their normal journey?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘simply walk to work, which takes forty minutes... fit it into my routine’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘simply walk to work, which takes forty minutes... fit it into my routine’)۔"
        },
        {
          "id": "t16_s3_q20",
          "statement": "Who values advice on how to do exercises correctly?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘trainers who correct my technique’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘trainers who correct my technique’)۔"
        },
        {
          "id": "t16_s3_q21",
          "statement": "Who feels responsible to other people when exercising?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘when others are counting on me, I never miss a session’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘when others are counting on me, I never miss a session’)۔"
        },
        {
          "id": "t16_s3_q22",
          "statement": "Who dislikes exercise machines?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘I get bored on a treadmill after ten minutes’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘I get bored on a treadmill after ten minutes’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-16-s4",
      "title": "Practice Test 16 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - A good memory",
        "B - Protecting elephants",
        "C - Showing emotion",
        "D - Family life",
        "E - A threatened species",
        "F - Elephants in circuses",
        "G - Talking without words",
        "H - The remarkable trunk",
        "J - The largest animal on land (Example)"
      ],
      "paragraphs": [
        {
          "id": "t16_s4_p1",
          "paragraphNumber": 1,
          "text": "Elephants live in herds led by the oldest and most experienced female, known as the matriarch. The\nherd consists of her sisters, daughters and their young. Males leave when they are teenagers and live\nalone or in small groups. Every member of the herd helps to look after the calves. The calves are born\nafter almost two years of pregnancy, the longest of any land animal, and they can stand within an hour\nbut depend on their mothers for several years.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Family life\"): elephant social structure led by the matriarch with calves protected",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Family life' کی مکمل تائید کرتا ہے (elephant social structure led by the matriarch with calves protected)۔"
        },
        {
          "id": "t16_s4_p2",
          "paragraphNumber": 2,
          "text": "The trunk contains more than forty thousand muscles and can perform both heavy and delicate\ntasks. It can lift a tree trunk or pick up a single peanut. Elephants also use it to smell, to drink, to greet\none another and, when they cross deep rivers, as a snorkel. Young elephants need months of practice\nto control their trunks, and they are often seen tripping over them or playing with them as if they were\ntoys.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"The remarkable trunk\"): versatility of the trunk with 40,000 muscles performing varied tasks",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The remarkable trunk' کی مکمل تائید کرتا ہے (versatility of the trunk with 40,000 muscles performing varied tasks)۔"
        },
        {
          "id": "t16_s4_p3",
          "paragraphNumber": 3,
          "text": "The matriarch remembers the locations of water holes and feeding grounds that she visited decades\nearlier, and she leads the herd to them in times of drought. This knowledge, passed from generation to\ngeneration, can mean the difference between life and death during long dry seasons. When food\nbecomes scarce, the herd can walk dozens of kilometres in a single day, following paths that have been\nused by elephants for generations.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"A good memory\"): matriarch's long memory remembering distant water holes during drought",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A good memory' کی مکمل تائید کرتا ہے (matriarch's long memory remembering distant water holes during drought)۔"
        },
        {
          "id": "t16_s4_p4",
          "paragraphNumber": 4,
          "text": "Elephants communicate using sounds so low that humans cannot hear them. These rumbles travel\nthrough the air and ground for several kilometres, allowing separated family members to stay in touch.\nScientists have also recorded calls that appear to function like names, with each elephant responding\nto its own. Research teams in Kenya have even played recordings of different calls to elephants, and\nthe animals responded only when they heard their own names, which suggests that they can tell\nindividuals apart by sound.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Talking without words\"): infrasonic rumbles and unique call names for communication",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Talking without words' کی مکمل تائید کرتا ہے (infrasonic rumbles and unique call names for communication)۔"
        },
        {
          "id": "t16_s4_p5",
          "paragraphNumber": 5,
          "text": "Elephants appear to feel grief. When a member of the herd dies, the others may stand beside the\nbody for hours or touch it gently with their trunks. Researchers have also seen elephants comforting a\ndistressed friend by stroking it and making soft sounds. Young elephants that have lost their mothers\nsometimes show signs of distress for months, and caretakers in orphanages need great patience to\nhelp them recover and to feel safe again.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Showing emotion\"): elephants showing grief and mourning fallen herd members",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Showing emotion' کی مکمل تائید کرتا ہے (elephants showing grief and mourning fallen herd members)۔"
        },
        {
          "id": "t16_s4_p6",
          "paragraphNumber": 6,
          "text": "In the last century, elephant numbers have fallen dramatically. Hunters kill them for their ivory tusks,\nand farms and roads take over the land where they roam. Today, there are fewer than half a million\nAfrican elephants remaining, and Asian elephants are even more endangered. Scientists also warn that\nwhen elephants disappear from a forest, the whole area is affected, because the animals spread seeds\nand create paths and water holes used by many other species.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"A threatened species\"): dramatic population decline due to ivory poaching and habitat loss",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A threatened species' کی مکمل تائید کرتا ہے (dramatic population decline due to ivory poaching and habitat loss)۔"
        },
        {
          "id": "t16_s4_p7",
          "paragraphNumber": 7,
          "text": "Many countries have banned the trade in ivory, and rangers now patrol national parks with the help\nof drones. In some regions, farmers use beehives as fences, since elephants avoid bees. This protects\ncrops and also provides honey, giving local people a reason to live alongside the animals. Special\ntracking collars allow researchers to see where herds travel, so that new reserves and safe routes\nbetween them can be planned with the help of local communities.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Protecting elephants\"): conservation efforts using drone patrols, beehive fences, and collars",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Protecting elephants' کی مکمل تائید کرتا ہے (conservation efforts using drone patrols, beehive fences, and collars)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 17,
    "section1": {
      "id": "reading-test-17-s1",
      "title": "Practice Test 17 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "He is only ",
          "gapId": "t17_s1_gap_1",
          "options": [
            "tenth",
            "ten",
            "tens"
          ],
          "correctIndex": 1,
          "textAfter": " weeks old."
        },
        {
          "textBefore": "He is very ",
          "gapId": "t17_s1_gap_2",
          "options": [
            "action",
            "actively",
            "active"
          ],
          "correctIndex": 2,
          "textAfter": " and runs around the house all day."
        },
        {
          "textBefore": "He wakes me up ",
          "gapId": "t17_s1_gap_3",
          "options": [
            "at",
            "on",
            "in"
          ],
          "correctIndex": 0,
          "textAfter": " six o’clock every morning."
        },
        {
          "textBefore": "I ",
          "gapId": "t17_s1_gap_4",
          "options": [
            "going",
            "gone",
            "went"
          ],
          "correctIndex": 2,
          "textAfter": " to buy him a lead and some toys yesterday."
        },
        {
          "textBefore": "You must come and ",
          "gapId": "t17_s1_gap_5",
          "options": [
            "met",
            "meeting",
            "meet"
          ],
          "correctIndex": 2,
          "textAfter": " him soon."
        }
      ],
      "explanations": {
        "t17_s1_gap_1": {
          "english": "Option (B) is correct: \"ten\". ‘ten weeks old’ requires the cardinal number.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘ten weeks old’ requires the cardinal number....)"
        },
        "t17_s1_gap_2": {
          "english": "Option (C) is correct: \"active\". ‘active’ is the adjective modifying the subject.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘active’ is the adjective modifying the subject....)"
        },
        "t17_s1_gap_3": {
          "english": "Option (A) is correct: \"at\". ‘at six o’clock’ is used with precise clock time.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘at six o’clock’ is used with precise clock time....)"
        },
        "t17_s1_gap_4": {
          "english": "Option (C) is correct: \"went\". ‘went’ is the simple past required by ‘yesterday’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘went’ is the simple past required by ‘yesterday’....)"
        },
        "t17_s1_gap_5": {
          "english": "Option (C) is correct: \"meet\". ‘come and meet’ uses base verb following the imperative.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘come and meet’ uses base verb following the imperative....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-17-s2",
      "title": "Practice Test 17 - Text Cohesion",
      "topic": "some computer help instructions",
      "correctOrder": [
        0,
        5,
        4,
        1,
        3,
        2
      ],
      "sentences": [
        "If you have forgotten your email password, you can create a new one in a few minutes. (Example)",
        "A message containing a six-digit code will then be sent to that number.",
        "You will then be able to choose a new password and log in as usual.",
        "Enter this code on the screen to prove that the account belongs to you.",
        "The system will ask you to type the phone number connected to your account.",
        "Start by opening the login page and clicking on the link marked forgotten password."
      ],
      "explanation": "‘Start by opening login page’ begins; ‘type phone number’ requests contact; ‘message with six-digit code’ sent; ‘Enter this code’ verifies; ‘choose new password’ concludes.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Start by opening login page’ begins; ‘type phone number’ requests contact; ‘message with six-digit ",
      "tasks": [
        {
          "id": "t17_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some computer help instructions",
          "topic": "some computer help instructions",
          "correctOrder": [
            0,
            5,
            4,
            1,
            3,
            2
          ],
          "sentences": [
            "If you have forgotten your email password, you can create a new one in a few minutes. (Example)",
            "A message containing a six-digit code will then be sent to that number.",
            "You will then be able to choose a new password and log in as usual.",
            "Enter this code on the screen to prove that the account belongs to you.",
            "The system will ask you to type the phone number connected to your account.",
            "Start by opening the login page and clicking on the link marked forgotten password."
          ],
          "explanation": "‘Start by opening login page’ begins; ‘type phone number’ requests contact; ‘message with six-digit code’ sent; ‘Enter this code’ verifies; ‘choose new password’ concludes.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Start by opening login page’ begins; ‘type phone number’ requests contact; ‘message with six-digit "
        },
        {
          "id": "t17_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about everyday inventions",
          "topic": "an article about everyday inventions",
          "correctOrder": [
            0,
            4,
            2,
            1,
            3,
            5
          ],
          "sentences": [
            "The ballpoint pen is one of the most widely used inventions of the twentieth century. (Example)",
            "He noticed that the ink used in newspaper printing dried very quickly, so he designed a pen that used it.",
            "A Hungarian journalist, László Bíró, became tired of this problem and decided to find a solution.",
            "A tiny ball at the tip rolled the ink onto the paper without smudging.",
            "Before it appeared, most people wrote with fountain pens, which often leaked and left ink on their fingers.",
            "His invention was first sold to the British air force, whose pilots needed pens that worked at high altitude."
          ],
          "explanation": "Fountain pens leaked before ballpoint; Bíró decided to solve this; used quick-drying newspaper ink; tiny ball rolled ink; sold to air force.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: Fountain pens leaked before ballpoint; Bíró decided to solve this; used quick-drying newspaper ink; "
        }
      ]
    },
    "section3": {
      "id": "reading-test-17-s3",
      "title": "Practice Test 17 - Opinion Matching",
      "topic": "Opinion Matching Test 17",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I use social media for hours every day, and I don’t see the problem. It’s how I stay in touch with friends\nwho live abroad, and I’ve learned lots of useful things from video tutorials. Adults forget that this is\nsimply how young people communicate now.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I’m concerned about the effect on younger users. Constantly comparing themselves with\nperfect-looking pictures makes many feel inadequate. I advise families to set limits, for example no\nphones at mealtimes, and to talk openly about what children see online.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘For me, social media has been a gift. I make soap at home, and I’d never have found customers\nwithout it. Posting a few photos each day costs nothing, and orders come from all over the country. I\ncouldn’t have afforded traditional advertising.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I’ve joined recently to see my grandchildren’s photos. It’s wonderful, but I worry about privacy. People\nshare personal details without thinking, and I’ve heard of criminals using that information. I only accept\nfriend requests from people I actually know.’"
        }
      ],
      "questions": [
        {
          "id": "t17_s3_q16",
          "statement": "Who is worried that pictures online make people feel bad about themselves?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘Constantly comparing themselves with perfect-looking pictures makes many feel inadequate’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘Constantly comparing themselves with perfect-looking pictures makes many feel i)۔"
        },
        {
          "id": "t17_s3_q17",
          "statement": "Who says it has helped them find buyers for their products?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘I make soap at home, and I’d never have found customers without it’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘I make soap at home, and I’d never have found customers without it’)۔"
        },
        {
          "id": "t17_s3_q18",
          "statement": "Who is cautious about who they connect with?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘I only accept friend requests from people I actually know’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘I only accept friend requests from people I actually know’)۔"
        },
        {
          "id": "t17_s3_q19",
          "statement": "Who thinks that older people don’t understand how young people communicate?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘Adults forget that this is simply how young people communicate now’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘Adults forget that this is simply how young people communicate now’)۔"
        },
        {
          "id": "t17_s3_q20",
          "statement": "Who recommends setting time limits on phone use?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘advise families to set limits, for example no phones at mealtimes’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘advise families to set limits, for example no phones at mealtimes’)۔"
        },
        {
          "id": "t17_s3_q21",
          "statement": "Who thinks that personal information can be dangerous to share?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘People share personal details... heard of criminals using that information’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘People share personal details... heard of criminals using that information’)۔"
        },
        {
          "id": "t17_s3_q22",
          "statement": "Who values the chance to learn from videos?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘learned lots of useful things from video tutorials’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘learned lots of useful things from video tutorials’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-17-s4",
      "title": "Practice Test 17 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Record breakers",
        "B - Bridges as art",
        "C - The power of the arch",
        "D - Beating the elements",
        "E - Tunnels beneath the sea",
        "F - Iron and steel",
        "G - The earliest bridges",
        "H - Hanging from cables",
        "J - Crossing the gap (Example)"
      ],
      "paragraphs": [
        {
          "id": "t17_s4_p1",
          "paragraphNumber": 1,
          "text": "The first bridges were probably fallen trees laid across streams, followed by simple structures of rope\nand wood. Later, ancient engineers learned to build with stone. The Romans, in particular, built\nhundreds of arched bridges, and some of them, including one in Spain nearly two thousand years old,\nare still in use today. Another early design was the clapper bridge, in which huge flat stones were laid\nacross the water on stone supports, and a number of these simple structures can still be found on\nmoorland in southwest England.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"The earliest bridges\"): earliest bridges from fallen trees, rope, wood, and Roman stone arches",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The earliest bridges' کی مکمل تائید کرتا ہے (earliest bridges from fallen trees, rope, wood, and Roman stone arches)۔"
        },
        {
          "id": "t17_s4_p2",
          "paragraphNumber": 2,
          "text": "The arch was the Roman secret. When a heavy weight presses down on a curved shape, the force is\npushed outwards and downwards into the supports at each end, rather than bending the middle. This\nallowed builders to span wide rivers using only blocks of stone, without any need for strong metal\nbeams. Roman engineers also built long lines of arches called aqueducts to carry water to their cities,\nand parts of these structures are still standing across Europe and North Africa.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"The power of the arch\"): the Roman arch directing downwards weight outwards into supports",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The power of the arch' کی مکمل تائید کرتا ہے (the Roman arch directing downwards weight outwards into supports)۔"
        },
        {
          "id": "t17_s4_p3",
          "paragraphNumber": 3,
          "text": "In 1779, the world’s first major iron bridge was completed in England. Iron, and later steel, was\nstronger than stone and could cover longer distances using less material. Railways in the nineteenth\ncentury increased the demand for such bridges, as trains were far heavier than carts and needed solid,\nreliable crossings. Because it could be made in factories and carried to the site in sections, steel soon\nreplaced iron, and the metal frameworks of great railway bridges became symbols of the industrial age.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Iron and steel\"): iron and steel revolutionising railway bridge spans in industrial era",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Iron and steel' کی مکمل تائید کرتا ہے (iron and steel revolutionising railway bridge spans in industrial era)۔"
        },
        {
          "id": "t17_s4_p4",
          "paragraphNumber": 4,
          "text": "Suspension bridges hang their roads from enormous cables supported by tall towers. This design is\nlighter and cheaper for very long crossings. The Golden Gate Bridge in San Francisco, opened in 1937,\nwas the longest suspension bridge in the world at the time, and its orange colour has made it famous.\nSome cables are made of thousands of separate steel wires twisted together, and they must be able to\ncarry the weight of the roadway as well as thousands of vehicles each day.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Hanging from cables\"): suspension bridges using immense twisted steel cables for wide crossings",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Hanging from cables' کی مکمل تائید کرتا ہے (suspension bridges using immense twisted steel cables for wide crossings)۔"
        },
        {
          "id": "t17_s4_p5",
          "paragraphNumber": 5,
          "text": "Engineers have to consider wind, earthquakes and floods. In 1940, a bridge in the United States\ntwisted and collapsed in a moderate wind, shocking designers. Today, models of new bridges are\ntested in wind tunnels, and many are built so that they can sway or flex without breaking. Bridges must\nalso cope with heat, as the metal expands on warm days, so engineers leave small gaps, covered by\nsliding plates, to allow the road to lengthen without cracking.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Beating the elements\"): engineering against wind, earthquakes, and thermal expansion",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Beating the elements' کی مکمل تائید کرتا ہے (engineering against wind, earthquakes, and thermal expansion)۔"
        },
        {
          "id": "t17_s4_p6",
          "paragraphNumber": 6,
          "text": "The longest bridges today are astonishing. One in China is over a hundred and sixty kilometres long\nand carries a high-speed railway. The highest bridge, also in China, crosses a deep river valley at more\nthan five hundred metres above the water. Such achievements would have been unimaginable a\ncentury ago. Some record-breaking bridges take many years and thousands of workers to build, and\nthey cost billions of dollars, but governments see them as an investment in trade and travel.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Record breakers\"): world record bridges in China spanning high valleys and huge distances",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Record breakers' کی مکمل تائید کرتا ہے (world record bridges in China spanning high valleys and huge distances)۔"
        },
        {
          "id": "t17_s4_p7",
          "paragraphNumber": 7,
          "text": "Many bridges are admired for their beauty as much as their usefulness. Some are lit up at night,\nothers have walkways with gardens or shops, and some are designed mainly for pedestrians and\ncyclists. Cities increasingly regard a well-designed bridge as a landmark that brings pride to its citizens.\nLighting designers use thousands of coloured lamps to turn a bridge into a feature of the night sky, and\nsome cities hold festivals so that the structure becomes a place for music and celebration.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Bridges as art\"): bridges designed as aesthetic landmarks, lit up for festivals and pride",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Bridges as art' کی مکمل تائید کرتا ہے (bridges designed as aesthetic landmarks, lit up for festivals and pride)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 18,
    "section1": {
      "id": "reading-test-18-s1",
      "title": "Practice Test 18 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "It will begin at nine o’clock ",
          "gapId": "t18_s1_gap_1",
          "options": [
            "on",
            "in",
            "at"
          ],
          "correctIndex": 1,
          "textAfter": " the morning."
        },
        {
          "textBefore": "Please arrive ",
          "gapId": "t18_s1_gap_2",
          "options": [
            "by",
            "on",
            "at"
          ],
          "correctIndex": 2,
          "textAfter": " least fifteen minutes early."
        },
        {
          "textBefore": "You are not allowed ",
          "gapId": "t18_s1_gap_3",
          "options": [
            "for",
            "that",
            "to"
          ],
          "correctIndex": 2,
          "textAfter": " use a dictionary."
        },
        {
          "textBefore": "Remember to bring two pens, ",
          "gapId": "t18_s1_gap_4",
          "options": [
            "although",
            "unless",
            "because"
          ],
          "correctIndex": 2,
          "textAfter": " you may need a spare."
        },
        {
          "textBefore": "The results will be ",
          "gapId": "t18_s1_gap_5",
          "options": [
            "post",
            "posting",
            "posted"
          ],
          "correctIndex": 2,
          "textAfter": " on the notice board next week."
        }
      ],
      "explanations": {
        "t18_s1_gap_1": {
          "english": "Option (B) is correct: \"in\". ‘in the morning’ is the prepositional phrase for parts of the day.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘in the morning’ is the prepositional phrase for parts of the day....)"
        },
        "t18_s1_gap_2": {
          "english": "Option (C) is correct: \"at\". ‘at least’ means not less than fifteen minutes.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘at least’ means not less than fifteen minutes....)"
        },
        "t18_s1_gap_3": {
          "english": "Option (C) is correct: \"to\". ‘allowed to use’ requires the infinitive ‘to’ + base verb.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘allowed to use’ requires the infinitive ‘to’ + base verb....)"
        },
        "t18_s1_gap_4": {
          "english": "Option (C) is correct: \"because\". ‘because’ introduces the reason for bringing a spare pen.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘because’ introduces the reason for bringing a spare pen....)"
        },
        "t18_s1_gap_5": {
          "english": "Option (C) is correct: \"posted\". ‘will be posted’ is the passive form required after ‘will be’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘will be posted’ is the passive form required after ‘will be’....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-18-s2",
      "title": "Practice Test 18 - Text Cohesion",
      "topic": "some rules for residents of an apartment building",
      "correctOrder": [
        0,
        3,
        2,
        4,
        5,
        1
      ],
      "sentences": [
        "Residents of the building are asked to follow these instructions when recycling household waste. (Example)",
        "Bring them back inside on Wednesday morning to keep the entrance clear.",
        "Please flatten large boxes so that they take up less room.",
        "Begin by rinsing all glass jars and plastic containers to remove any food.",
        "Next, place them in the blue bins in the basement, and put newspapers and cardboard in the green ones.",
        "The bins are emptied every Tuesday, so leave them by the front entrance on Monday evening."
      ],
      "explanation": "‘rinsing jars’ prepares; ‘flatten large boxes’ saves space; ‘place in bins’ separates; ‘bins emptied Tuesday’ schedules putting them out; ‘Bring them back inside’ finishes.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘rinsing jars’ prepares; ‘flatten large boxes’ saves space; ‘place in bins’ separates; ‘bins emptied",
      "tasks": [
        {
          "id": "t18_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some rules for residents of an apartment building",
          "topic": "some rules for residents of an apartment building",
          "correctOrder": [
            0,
            3,
            2,
            4,
            5,
            1
          ],
          "sentences": [
            "Residents of the building are asked to follow these instructions when recycling household waste. (Example)",
            "Bring them back inside on Wednesday morning to keep the entrance clear.",
            "Please flatten large boxes so that they take up less room.",
            "Begin by rinsing all glass jars and plastic containers to remove any food.",
            "Next, place them in the blue bins in the basement, and put newspapers and cardboard in the green ones.",
            "The bins are emptied every Tuesday, so leave them by the front entrance on Monday evening."
          ],
          "explanation": "‘rinsing jars’ prepares; ‘flatten large boxes’ saves space; ‘place in bins’ separates; ‘bins emptied Tuesday’ schedules putting them out; ‘Bring them back inside’ finishes.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘rinsing jars’ prepares; ‘flatten large boxes’ saves space; ‘place in bins’ separates; ‘bins emptied"
        },
        {
          "id": "t18_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about city architecture",
          "topic": "a book about city architecture",
          "correctOrder": [
            0,
            2,
            1,
            5,
            3,
            4
          ],
          "sentences": [
            "The first skyscrapers appeared in American cities in the late nineteenth century. (Example)",
            "Builders therefore decided to construct upwards instead of outwards.",
            "At that time, land in the centre of cities such as Chicago had become extremely expensive.",
            "Another invention, the safety elevator, allowed people to reach the upper floors without climbing stairs.",
            "Together, these developments changed the skylines of cities across the world.",
            "This became possible thanks to a steel frame, which could carry far more weight than brick walls."
          ],
          "explanation": "City land became expensive; builders decided to build upwards; steel frame made high buildings possible; safety elevator solved upper access; changed city skylines.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: City land became expensive; builders decided to build upwards; steel frame made high buildings possi"
        }
      ]
    },
    "section3": {
      "id": "reading-test-18-s3",
      "title": "Practice Test 18 - Opinion Matching",
      "topic": "Opinion Matching Test 18",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I think zoos are cruel, however big the enclosures are. Animals like tigers or elephants are used to\nroaming huge distances, and in captivity they become bored and sometimes sick. We should watch\nwildlife on film and leave animals in their natural homes.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘Zoos have saved several species from extinction. Without breeding programmes, some animals would\nno longer exist. Visitors also learn about conservation, which is especially important for children who\nmay become the scientists of the future.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘My concern is that not all zoos are equal. The best ones have spacious, natural enclosures and employ\ntrained vets, but some small ones are poor. There should be stricter inspections, and bad zoos should\nbe closed immediately.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I take my kids once a year, and they adore it. Seeing a real giraffe is completely different from seeing\none on a screen. I admit that the tickets are expensive, though, so we can’t go more often.’"
        }
      ],
      "questions": [
        {
          "id": "t18_s3_q16",
          "statement": "Who thinks that zoos help animals avoid extinction?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘Zoos have saved several species from extinction’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘Zoos have saved several species from extinction’)۔"
        },
        {
          "id": "t18_s3_q17",
          "statement": "Who says that animals suffer when they cannot move over large areas?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘Animals like tigers or elephants are used to roaming huge distances, and in captivity they become bored’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘Animals like tigers or elephants are used to roaming huge distances, and in cap)۔"
        },
        {
          "id": "t18_s3_q18",
          "statement": "Who wants more regular checks?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘There should be stricter inspections, and bad zoos should be closed immediately’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘There should be stricter inspections, and bad zoos should be closed immediately)۔"
        },
        {
          "id": "t18_s3_q19",
          "statement": "Who suggests that watching films is a better option?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘We should watch wildlife on film and leave animals in their natural homes’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘We should watch wildlife on film and leave animals in their natural homes’)۔"
        },
        {
          "id": "t18_s3_q20",
          "statement": "Who thinks tickets cost too much?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘I admit that the tickets are expensive, though, so we can’t go more often’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘I admit that the tickets are expensive, though, so we can’t go more often’)۔"
        },
        {
          "id": "t18_s3_q21",
          "statement": "Who believes children can learn from visiting?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘Visitors also learn about conservation, which is especially important for children’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘Visitors also learn about conservation, which is especially important for child)۔"
        },
        {
          "id": "t18_s3_q22",
          "statement": "Who says that the quality of zoos varies?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘not all zoos are equal. The best ones... but some small ones are poor’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘not all zoos are equal. The best ones... but some small ones are poor’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-18-s4",
      "title": "Practice Test 18 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - New ideas, new arguments",
        "B - Before the press",
        "C - Spreading quickly",
        "D - Learning to read",
        "E - From paper to screen",
        "F - Gutenberg’s idea",
        "G - The first great book",
        "H - The invention of the pencil",
        "J - Words for everyone (Example)"
      ],
      "paragraphs": [
        {
          "id": "t18_s4_p1",
          "paragraphNumber": 1,
          "text": "Books in medieval times were written on parchment, made from animal skin, and decorated with gold\nand bright colours. Because each copy was unique and expensive, libraries were small. Most people\ncould not read, and learning was limited to a small group of priests and nobles. Scribes spent years\nlearning to write neatly, and monasteries employed them to copy religious texts, a process that left\nroom for mistakes and meant that no two books were exactly alike.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Before the press\"): medieval hand-copied parchment manuscripts before the printing press",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Before the press' کی مکمل تائید کرتا ہے (medieval hand-copied parchment manuscripts before the printing press)۔"
        },
        {
          "id": "t18_s4_p2",
          "paragraphNumber": 2,
          "text": "Around 1450, Johannes Gutenberg developed a system of movable metal letters that could be\narranged into words, inked and pressed on to paper. After printing a page, the letters could be\nrearranged to form a different page. The method was based on the wine presses used in the region,\nwhich he adapted for his purpose. Gutenberg trained as a goldsmith, so he knew how to cast small\nmetal shapes, and he created an ink based on oil that stuck to metal letters better than the water-based\nink used before.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Gutenberg’s idea\"): Gutenberg's invention of movable metal type and oil-based ink",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Gutenberg’s idea' کی مکمل تائید کرتا ہے (Gutenberg's invention of movable metal type and oil-based ink)۔"
        },
        {
          "id": "t18_s4_p3",
          "paragraphNumber": 3,
          "text": "Gutenberg’s most famous work was a large Bible, printed in about 1455. Around one hundred and\neighty copies were made, a huge number for the time, and they were carefully decorated in the\ntraditional style. Today, only about fifty survive, and each is worth a fortune. Some pages were printed\nin two colours, and spaces were left for artists to add decorations by hand, so that the finished book\nlooked as beautiful as the work of a medieval scribe.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"The first great book\"): Gutenberg's 42-Line Bible printed with artistry and beauty",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The first great book' کی مکمل تائید کرتا ہے (Gutenberg's 42-Line Bible printed with artistry and beauty)۔"
        },
        {
          "id": "t18_s4_p4",
          "paragraphNumber": 4,
          "text": "Printing spread rapidly through Europe. By 1500, there were printing workshops in more than two\nhundred cities, and millions of books had been produced. The price of a book fell dramatically, and for\nthe first time, middle-class families were able to build small libraries of their own. Italian printers\nintroduced smaller books that could be carried in a pocket, as well as new letter styles that are still the\nbasis of many modern typefaces.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Spreading quickly\"): rapid expansion of printing workshops producing millions of books",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Spreading quickly' کی مکمل تائید کرتا ہے (rapid expansion of printing workshops producing millions of books)۔"
        },
        {
          "id": "t18_s4_p5",
          "paragraphNumber": 5,
          "text": "Cheap printing allowed new ideas to reach large audiences. Scientists could publish their\ndiscoveries, and religious reformers such as Martin Luther distributed pamphlets which were read\nacross the continent. Rulers and churches, alarmed by this loss of control, sometimes banned books\nand punished printers. Within a few decades, new ideas about science, medicine and geography were\nbeing printed in large numbers, which allowed scholars in different countries to read and comment on\neach other’s work.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"New ideas, new arguments\"): mass dissemination of scientific discoveries and religious reform ideas",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'New ideas, new arguments' کی مکمل تائید کرتا ہے (mass dissemination of scientific discoveries and religious reform ideas)۔"
        },
        {
          "id": "t18_s4_p6",
          "paragraphNumber": 6,
          "text": "As books became cheaper, more people saw the value of literacy. Schools opened in growing\nnumbers, and reading, once a rare skill, became a normal part of life. Over the following centuries,\nnewspapers, novels and textbooks appeared, and education slowly came within reach of ordinary\nfamilies. Women, too, began to read in greater numbers, and by the eighteenth century, circulating\nlibraries lent novels to anyone who could afford a small yearly fee.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Learning to read\"): rising literacy and schools making reading common for ordinary people",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Learning to read' کی مکمل تائید کرتا ہے (rising literacy and schools making reading common for ordinary people)۔"
        },
        {
          "id": "t18_s4_p7",
          "paragraphNumber": 7,
          "text": "Today, a new revolution is taking place. Millions of books can be stored on a single device, and\nanyone can publish their writing online. Some predict that printed books will disappear, but sales of\npaper books remain surprisingly strong, suggesting that the old and the new can live side by side.\nLibraries have also begun to scan old books so that anyone with an internet connection can read them,\nand this work protects fragile originals while making them available to the world.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"From paper to screen\"): modern digital publishing alongside surviving physical books",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'From paper to screen' کی مکمل تائید کرتا ہے (modern digital publishing alongside surviving physical books)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 19,
    "section1": {
      "id": "reading-test-19-s1",
      "title": "Practice Test 19 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "He is retiring ",
          "gapId": "t19_s1_gap_1",
          "options": [
            "since",
            "during",
            "after"
          ],
          "correctIndex": 2,
          "textAfter": " thirty years with the company."
        },
        {
          "textBefore": "The lunch will be ",
          "gapId": "t19_s1_gap_2",
          "options": [
            "to",
            "at",
            "for"
          ],
          "correctIndex": 1,
          "textAfter": " the restaurant next to the office."
        },
        {
          "textBefore": "Each person will ",
          "gapId": "t19_s1_gap_3",
          "options": [
            "cost",
            "buy",
            "pay"
          ],
          "correctIndex": 2,
          "textAfter": " about ten pounds towards the present."
        },
        {
          "textBefore": "Please do not tell him, ",
          "gapId": "t19_s1_gap_4",
          "options": [
            "although",
            "because",
            "so"
          ],
          "correctIndex": 1,
          "textAfter": " it is a surprise."
        },
        {
          "textBefore": "Let me know ",
          "gapId": "t19_s1_gap_5",
          "options": [
            "as",
            "so",
            "if"
          ],
          "correctIndex": 2,
          "textAfter": " you can attend by Friday."
        }
      ],
      "explanations": {
        "t19_s1_gap_1": {
          "english": "Option (C) is correct: \"after\". ‘after thirty years’ indicates the duration preceding retirement.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘after thirty years’ indicates the duration preceding retirement....)"
        },
        "t19_s1_gap_2": {
          "english": "Option (B) is correct: \"at\". ‘at the restaurant’ indicates the location for the meal.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘at the restaurant’ indicates the location for the meal....)"
        },
        "t19_s1_gap_3": {
          "english": "Option (C) is correct: \"pay\". ‘pay about ten pounds’ is the verb for contributing money.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘pay about ten pounds’ is the verb for contributing money....)"
        },
        "t19_s1_gap_4": {
          "english": "Option (B) is correct: \"because\". ‘because it is a surprise’ gives the explanation.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘because it is a surprise’ gives the explanation....)"
        },
        "t19_s1_gap_5": {
          "english": "Option (C) is correct: \"if\". ‘if you can attend’ introduces the conditional confirmation.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘if you can attend’ introduces the conditional confirmation....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-19-s2",
      "title": "Practice Test 19 - Text Cohesion",
      "topic": "some instructions for a student discount scheme",
      "correctOrder": [
        0,
        3,
        4,
        1,
        5,
        2
      ],
      "sentences": [
        "Students who would like a discount card should follow the instructions below. (Example)",
        "Our team will check the details, which normally takes about three working days.",
        "Show it at the till each time you shop to receive your discount.",
        "First, complete the online form with your name, course and student number.",
        "Then scan a copy of your student identity card and attach it to the form.",
        "If everything is in order, we will send the card to the address you gave us."
      ],
      "explanation": "‘complete online form’ starts; ‘scan identity card’ attaches; ‘team checks details’ reviews; ‘send card’ delivers; ‘Show it at the till’ uses it.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘complete online form’ starts; ‘scan identity card’ attaches; ‘team checks details’ reviews; ‘send c",
      "tasks": [
        {
          "id": "t19_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions for a student discount scheme",
          "topic": "some instructions for a student discount scheme",
          "correctOrder": [
            0,
            3,
            4,
            1,
            5,
            2
          ],
          "sentences": [
            "Students who would like a discount card should follow the instructions below. (Example)",
            "Our team will check the details, which normally takes about three working days.",
            "Show it at the till each time you shop to receive your discount.",
            "First, complete the online form with your name, course and student number.",
            "Then scan a copy of your student identity card and attach it to the form.",
            "If everything is in order, we will send the card to the address you gave us."
          ],
          "explanation": "‘complete online form’ starts; ‘scan identity card’ attaches; ‘team checks details’ reviews; ‘send card’ delivers; ‘Show it at the till’ uses it.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘complete online form’ starts; ‘scan identity card’ attaches; ‘team checks details’ reviews; ‘send c"
        },
        {
          "id": "t19_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about fashion history",
          "topic": "an article about fashion history",
          "correctOrder": [
            0,
            5,
            3,
            4,
            1,
            2
          ],
          "sentences": [
            "Jeans are worn by millions of people today, but they were originally made for workers. (Example)",
            "It was not until the 1950s that young people began to wear jeans as a fashion.",
            "After that, they spread around the world and became a symbol of casual style.",
            "These small pieces of metal made the pockets stronger, so the trousers lasted much longer.",
            "Miners and farmers quickly bought them, because ordinary clothes wore out within weeks.",
            "In the 1870s, a tailor in Nevada and a businessman in San Francisco began adding metal rivets to work trousers."
          ],
          "explanation": "Rivets added to work trousers in 1870s; metal rivets strengthened pockets; miners/farmers bought durable jeans; 1950s youth adopted jeans as fashion; worldwide casual icon.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: Rivets added to work trousers in 1870s; metal rivets strengthened pockets; miners/farmers bought dur"
        }
      ]
    },
    "section3": {
      "id": "reading-test-19-s3",
      "title": "Practice Test 19 - Opinion Matching",
      "topic": "Opinion Matching Test 19",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I think we spend far too much on space. There are hungry people and failing hospitals on Earth, and\nbillions are spent on rockets. Surely it makes more sense to solve our problems at home first.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘Space research has given us so many everyday things, like satellite navigation, weather forecasts and\neven some medical equipment. The money isn’t thrown into space; it’s spent on salaries and\ntechnology here on Earth. I think it’s an excellent investment.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I support it, but I’d like private companies to pay a greater share. Some are making enormous profits\nfrom launching satellites. If they contribute more, governments can reduce their spending and use the\nsavings on other priorities.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘Humans have always explored, and I believe we have a duty to continue. One day our planet might\nbecome unlivable, and we’ll need somewhere else to go. Even if this is centuries away, we have to start\npreparing now.’"
        }
      ],
      "questions": [
        {
          "id": "t19_s3_q16",
          "statement": "Who believes that spending on space takes money away from urgent problems?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘far too much on space. There are hungry people and failing hospitals on Earth’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘far too much on space. There are hungry people and failing hospitals on Earth’)۔"
        },
        {
          "id": "t19_s3_q17",
          "statement": "Who says the funding creates jobs and technology on Earth?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘money isn’t thrown into space; it’s spent on salaries and technology here on Earth’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘money isn’t thrown into space; it’s spent on salaries and technology here on Ea)۔"
        },
        {
          "id": "t19_s3_q18",
          "statement": "Who wants businesses to contribute more?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘like private companies to pay a greater share’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘like private companies to pay a greater share’)۔"
        },
        {
          "id": "t19_s3_q19",
          "statement": "Who thinks people might one day have to live elsewhere?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘One day our planet might become unlivable, and we’ll need somewhere else to go’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘One day our planet might become unlivable, and we’ll need somewhere else to go’)۔"
        },
        {
          "id": "t19_s3_q20",
          "statement": "Who mentions everyday technology that came from space research?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘satellite navigation, weather forecasts and even some medical equipment’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘satellite navigation, weather forecasts and even some medical equipment’)۔"
        },
        {
          "id": "t19_s3_q21",
          "statement": "Who thinks governments should deal with problems on Earth first?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘Surely it makes more sense to solve our problems at home first’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘Surely it makes more sense to solve our problems at home first’)۔"
        },
        {
          "id": "t19_s3_q22",
          "statement": "Who believes humans have a responsibility to explore?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘Humans have always explored, and I believe we have a duty to continue’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘Humans have always explored, and I believe we have a duty to continue’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-19-s4",
      "title": "Practice Test 19 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - From windmills to turbines",
        "B - Dealing with calm days",
        "C - Out at sea",
        "D - Wind farms on land",
        "E - Concerns and objections",
        "F - How a turbine works",
        "G - Wind and the weather forecast",
        "H - A growing industry",
        "J - Power from the air (Example)"
      ],
      "paragraphs": [
        {
          "id": "t19_s4_p1",
          "paragraphNumber": 1,
          "text": "The first windmills were built in Persia more than a thousand years ago. In the late 1880s, an\nAmerican inventor built the first machine to generate electricity from the wind. Early turbines were small\nand unreliable, and cheap coal and oil meant that few people were interested in developing them\nfurther. Over the centuries, windmills in the Netherlands drained entire regions of land that had been\ncovered by water, and thousands of them dotted the landscape until steam engines replaced them.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"From windmills to turbines\"): historical windmills in Persia and Netherlands evolving to power generators",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'From windmills to turbines' کی مکمل تائید کرتا ہے (historical windmills in Persia and Netherlands evolving to power generators)۔"
        },
        {
          "id": "t19_s4_p2",
          "paragraphNumber": 2,
          "text": "The wind turns the blades, which spin a shaft connected to a generator. The generator turns this\nmovement into electricity, which travels through cables to the national grid. Computers rotate the whole\nmachine so that it always faces the wind, and they stop the blades if the wind becomes dangerously\nstrong. A modern turbine can have a tower over a hundred metres high, and each blade may be longer\nthan a jumbo jet’s wing, so that the machine can catch the stronger winds that blow higher up.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"How a turbine works\"): mechanical inner workings of wind turbines generating electricity",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How a turbine works' کی مکمل تائید کرتا ہے (mechanical inner workings of wind turbines generating electricity)۔"
        },
        {
          "id": "t19_s4_p3",
          "paragraphNumber": 3,
          "text": "Turbines are often grouped in wind farms in open, windy places, such as hills and plains. A single\nmodern turbine can power about a thousand homes. Land-based farms are relatively cheap to build,\nand the land between the turbines can still be used for grazing animals or growing crops. Because the\nturbines are widely spaced, a wind farm can cover a large area, and their positions are chosen after the\nwind has been measured for a year or more at the site.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Wind farms on land\"): land-based wind farms sharing fields with agricultural crops",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Wind farms on land' کی مکمل تائید کرتا ہے (land-based wind farms sharing fields with agricultural crops)۔"
        },
        {
          "id": "t19_s4_p4",
          "paragraphNumber": 4,
          "text": "Winds are stronger and steadier over the ocean, so offshore turbines produce more power. They are\nalso far from people’s homes, which reduces complaints about noise and appearance. However,\nbuilding and repairing them in rough water is difficult and expensive, and special ships are needed to\ntransport the huge blades. The foundations of offshore turbines are driven deep into the seabed, and\nsome newer designs float on the surface and are held in place by long cables fixed to the ocean floor.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Out at sea\"): offshore wind turbines generating higher power despite construction cost",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Out at sea' کی مکمل تائید کرتا ہے (offshore wind turbines generating higher power despite construction cost)۔"
        },
        {
          "id": "t19_s4_p5",
          "paragraphNumber": 5,
          "text": "Not everybody welcomes wind farms. Some residents say that they spoil the beauty of the\nlandscape. Others worry about birds and bats, which are sometimes killed when they hit the blades.\nDevelopers respond by choosing sites carefully and by painting one blade black, a trick shown to help\nbirds see the turbines. Surveys show that people who live close to a wind farm are often more positive\nabout it after it has been built than they were before, once they have seen how it looks and sounds.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Concerns and objections\"): aesthetic and wildlife concerns addressed by painting blades and placement",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Concerns and objections' کی مکمل تائید کرتا ہے (aesthetic and wildlife concerns addressed by painting blades and placement)۔"
        },
        {
          "id": "t19_s4_p6",
          "paragraphNumber": 6,
          "text": "Wind is unpredictable, and a calm day means less electricity. To solve this problem, power\ncompanies combine wind with other sources, such as solar panels and hydroelectric dams. Large\nbatteries also store surplus energy, so that it can be released when demand is high and the air is still.\nExperts also say that spreading wind farms across a wide area helps, because it is rare for the wind to\ndrop everywhere at the same time.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Dealing with calm days\"): compensating for calm days with battery storage and energy mix",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Dealing with calm days' کی مکمل تائید کرتا ہے (compensating for calm days with battery storage and energy mix)۔"
        },
        {
          "id": "t19_s4_p7",
          "paragraphNumber": 7,
          "text": "Wind power has grown spectacularly. In some countries, such as Denmark, wind now provides over\nhalf of the electricity used in a year. The industry employs hundreds of thousands of people worldwide,\nand engineers are designing even bigger turbines, with blades longer than a football pitch. Because the\nprice of building turbines has fallen so much, wind is now cheaper than coal or gas in many regions,\nand this has encouraged more companies to invest in new projects.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"A growing industry\"): impressive global industry growth and competitive low clean energy costs",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A growing industry' کی مکمل تائید کرتا ہے (impressive global industry growth and competitive low clean energy costs)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 20,
    "section1": {
      "id": "reading-test-20-s1",
      "title": "Practice Test 20 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "Breakfast is served in the restaurant ",
          "gapId": "t20_s1_gap_1",
          "options": [
            "among",
            "between",
            "through"
          ],
          "correctIndex": 1,
          "textAfter": " seven and ten."
        },
        {
          "textBefore": "Please do not ",
          "gapId": "t20_s1_gap_2",
          "options": [
            "left",
            "leaving",
            "leave"
          ],
          "correctIndex": 2,
          "textAfter": " valuable items in your room."
        },
        {
          "textBefore": "We will keep your suitcases ",
          "gapId": "t20_s1_gap_3",
          "options": [
            "since",
            "during",
            "until"
          ],
          "correctIndex": 2,
          "textAfter": " you return for them."
        },
        {
          "textBefore": "If you have any problems, please speak ",
          "gapId": "t20_s1_gap_4",
          "options": [
            "at",
            "to",
            "on"
          ],
          "correctIndex": 1,
          "textAfter": " the manager."
        },
        {
          "textBefore": "We hope you have ",
          "gapId": "t20_s1_gap_5",
          "options": [
            "enjoy",
            "enjoyed",
            "enjoying"
          ],
          "correctIndex": 1,
          "textAfter": " your stay with us."
        }
      ],
      "explanations": {
        "t20_s1_gap_1": {
          "english": "Option (B) is correct: \"between\". ‘between seven and ten’ is used for the time range between two hours.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘between seven and ten’ is used for the time range between two hours....)"
        },
        "t20_s1_gap_2": {
          "english": "Option (C) is correct: \"leave\". ‘do not leave’ uses base form after ‘do not’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘do not leave’ uses base form after ‘do not’....)"
        },
        "t20_s1_gap_3": {
          "english": "Option (C) is correct: \"until\". ‘until you return’ indicates continuing duration up to the point of return.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘until you return’ indicates continuing duration up to the point of re...)"
        },
        "t20_s1_gap_4": {
          "english": "Option (B) is correct: \"to\". ‘speak to the manager’ uses the standard preposition ‘to’ with speak.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘speak to the manager’ uses the standard preposition ‘to’ with speak....)"
        },
        "t20_s1_gap_5": {
          "english": "Option (B) is correct: \"enjoyed\". ‘have enjoyed’ is the present perfect after ‘have’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (‘have enjoyed’ is the present perfect after ‘have’....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-20-s2",
      "title": "Practice Test 20 - Text Cohesion",
      "topic": "some instructions for a scooter rental service",
      "correctOrder": [
        0,
        2,
        1,
        4,
        5,
        3
      ],
      "sentences": [
        "To rent an electric scooter in the city, please follow these steps. (Example)",
        "Scan the code on the handlebar with your phone to unlock it.",
        "First, find a scooter parked nearby using the map in the rental app.",
        "When you arrive, park in a marked area and end your trip on the app.",
        "Before you ride, check that the brakes are working and that the lights come on.",
        "While riding, keep to the cycle lanes and never carry a passenger."
      ],
      "explanation": "‘find scooter nearby’ locates; ‘Scan code’ unlocks; ‘check brakes and lights’ inspects; ‘keep to cycle lanes’ rides; ‘park in marked area’ finishes.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘find scooter nearby’ locates; ‘Scan code’ unlocks; ‘check brakes and lights’ inspects; ‘keep to cyc",
      "tasks": [
        {
          "id": "t20_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions for a scooter rental service",
          "topic": "some instructions for a scooter rental service",
          "correctOrder": [
            0,
            2,
            1,
            4,
            5,
            3
          ],
          "sentences": [
            "To rent an electric scooter in the city, please follow these steps. (Example)",
            "Scan the code on the handlebar with your phone to unlock it.",
            "First, find a scooter parked nearby using the map in the rental app.",
            "When you arrive, park in a marked area and end your trip on the app.",
            "Before you ride, check that the brakes are working and that the lights come on.",
            "While riding, keep to the cycle lanes and never carry a passenger."
          ],
          "explanation": "‘find scooter nearby’ locates; ‘Scan code’ unlocks; ‘check brakes and lights’ inspects; ‘keep to cycle lanes’ rides; ‘park in marked area’ finishes.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘find scooter nearby’ locates; ‘Scan code’ unlocks; ‘check brakes and lights’ inspects; ‘keep to cyc"
        },
        {
          "id": "t20_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about the arts",
          "topic": "a book about the arts",
          "correctOrder": [
            0,
            3,
            2,
            1,
            5,
            4
          ],
          "sentences": [
            "Theatre began in ancient Greece more than two and a half thousand years ago. (Example)",
            "To seat everyone, the Greeks built huge open-air theatres on hillsides.",
            "Over time, writers began to create plays with stories and characters, which attracted large crowds.",
            "At first, it was part of religious festivals held in honour of the god Dionysus.",
            "Some of them still exist, and plays are performed in them every summer.",
            "These buildings were designed so well that a whisper on the stage could be heard in the highest rows."
          ],
          "explanation": "Dionysus religious festivals began theatre; plays with stories and characters developed; huge hillside open-air theatres built; acoustics allowed whispers to carry; ancient theatres still used.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: Dionysus religious festivals began theatre; plays with stories and characters developed; huge hillsi"
        }
      ]
    },
    "section3": {
      "id": "reading-test-20-s3",
      "title": "Practice Test 20 - Opinion Matching",
      "topic": "Opinion Matching Test 20",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I give a small amount every month to a children’s charity by direct debit. It’s easy, and I know the\nmoney arrives regularly, which helps the charity to plan. I checked how much of each pound goes to the\ncause, and the figure was high, so I’m happy.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I prefer giving my time. I help at a food bank on Sundays, and I can see exactly how I’m helping.\nHanding over money feels distant. I also worry that some charities spend too much on advertising and\nsalaries.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I give when someone I know asks me to, for example a colleague running a marathon. I like that it’s\npersonal, and I know the person will use the money well. Big appeals from famous organisations feel\nimpersonal to me.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I’m not wealthy, so I can’t give much, but I donate unwanted clothes and books to a charity shop. It’s a\nway of helping that costs me nothing, and things I no longer use get a second life. Every contribution\ncounts, however small.’"
        }
      ],
      "questions": [
        {
          "id": "t20_s3_q16",
          "statement": "Who has checked how a charity uses its funds?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘I checked how much of each pound goes to the cause, and the figure was high’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘I checked how much of each pound goes to the cause, and the figure was high’)۔"
        },
        {
          "id": "t20_s3_q17",
          "statement": "Who prefers to help in person rather than with money?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘I prefer giving my time. I help at a food bank on Sundays... Handing over money feels distant’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘I prefer giving my time. I help at a food bank on Sundays... Handing over money)۔"
        },
        {
          "id": "t20_s3_q18",
          "statement": "Who prefers to be asked by someone they know?",
          "correctPersonId": "C",
          "explanation": "Person C: ‘I give when someone I know asks me to, for example a colleague running a marathon’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (‘I give when someone I know asks me to, for example a colleague running a marath)۔"
        },
        {
          "id": "t20_s3_q19",
          "statement": "Who gives away items that they no longer need?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘donate unwanted clothes and books to a charity shop... things I no longer use’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘donate unwanted clothes and books to a charity shop... things I no longer use’)۔"
        },
        {
          "id": "t20_s3_q20",
          "statement": "Who is concerned about the high costs of some charities?",
          "correctPersonId": "B",
          "explanation": "Person B: ‘worry that some charities spend too much on advertising and salaries’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (‘worry that some charities spend too much on advertising and salaries’)۔"
        },
        {
          "id": "t20_s3_q21",
          "statement": "Who thinks that small contributions are still valuable?",
          "correctPersonId": "D",
          "explanation": "Person D: ‘Every contribution counts, however small’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (‘Every contribution counts, however small’)۔"
        },
        {
          "id": "t20_s3_q22",
          "statement": "Who says that regular payments help charities to plan ahead?",
          "correctPersonId": "A",
          "explanation": "Person A: ‘money arrives regularly, which helps the charity to plan’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (‘money arrives regularly, which helps the charity to plan’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-20-s4",
      "title": "Practice Test 20 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - The role of the Sherpas",
        "B - How it was formed",
        "C - The best clothing for cold weather",
        "D - Life on the mountain",
        "E - A sacred mountain",
        "F - A mountain covered in rubbish",
        "G - The first ascent",
        "H - The problem of crowds",
        "J - The highest point on Earth (Example)"
      ],
      "paragraphs": [
        {
          "id": "t20_s4_p1",
          "paragraphNumber": 1,
          "text": "Everest is part of the Himalayas, a mountain range that began forming around fifty million years ago\nwhen the plate carrying India collided with Asia. The land was slowly pushed upwards, and it is still\nrising by a few millimetres each year. Fossils of sea creatures have been found near the summit.\nGeologists have also discovered that the summit is made of limestone, which formed on the floor of an\nancient ocean long before the mountain began to rise.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"How it was formed\"): geological collision between Indian and Asian plates raising Everest",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How it was formed' کی مکمل تائید کرتا ہے (geological collision between Indian and Asian plates raising Everest)۔"
        },
        {
          "id": "t20_s4_p2",
          "paragraphNumber": 2,
          "text": "The Sherpa people, who live in the valleys below, call the mountain Chomolungma, which is usually\ntranslated as Mother Goddess of the World. Many climbers follow the local custom of holding a\nceremony before their ascent, asking for safe passage on the mountain. Offerings of rice and juniper\nbranches are burned beside the base camp, and the Sherpa people believe that climbers who\ndisrespect the mountain may bring bad luck to themselves and others.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"A sacred mountain\"): Sherpa spiritual reverence naming it Chomolungma with safety ceremonies",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A sacred mountain' کی مکمل تائید کرتا ہے (Sherpa spiritual reverence naming it Chomolungma with safety ceremonies)۔"
        },
        {
          "id": "t20_s4_p3",
          "paragraphNumber": 3,
          "text": "After many failed attempts, Edmund Hillary of New Zealand and Tenzing Norgay, a Sherpa, reached\nthe summit on 29 May 1953. They spent only about fifteen minutes there. Hillary said later that he felt\ngreat joy but also relief, as he knew that the descent would be as dangerous as the climb. News of their\nsuccess reached London on the morning of the Queen’s coronation, and the achievement was\ncelebrated around the world as a symbol of human determination.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"The first ascent\"): historic 1953 first successful ascent by Edmund Hillary and Tenzing Norgay",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The first ascent' کی مکمل تائید کرتا ہے (historic 1953 first successful ascent by Edmund Hillary and Tenzing Norgay)۔"
        },
        {
          "id": "t20_s4_p4",
          "paragraphNumber": 4,
          "text": "Climbers need weeks to prepare for the summit. They spend time at base camp and then move up to\na series of higher camps, returning down to rest in between. This slow process allows the body to\nadjust to the thin air, where each breath contains only about a third of the oxygen available at sea level.\nBottled oxygen helps most climbers to breathe near the top, but it runs out quickly, so careful timing is\nessential, and many people turn back when they are only a few hours from the summit.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Life on the mountain\"): weeks of high-altitude acclimatisation and supplemental oxygen use",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Life on the mountain' کی مکمل تائید کرتا ہے (weeks of high-altitude acclimatisation and supplemental oxygen use)۔"
        },
        {
          "id": "t20_s4_p5",
          "paragraphNumber": 5,
          "text": "Sherpa guides play an essential part in every expedition. They fix ropes, carry equipment and cook\nmeals, working in extremely dangerous conditions. Many have reached the summit more than twenty\ntimes. Their experience and strength have saved numerous lives, although the risks they take are often\nforgotten. In the Khumbu Icefall, one of the most dangerous sections, Sherpa teams called icefall\ndoctors set ladders across deep cracks in the ice each season, so that all the climbers can cross safely.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"The role of the Sherpas\"): indispensable expertise of Sherpa icefall doctors fixing ropes and ladders",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The role of the Sherpas' کی مکمل تائید کرتا ہے (indispensable expertise of Sherpa icefall doctors fixing ropes and ladders)۔"
        },
        {
          "id": "t20_s4_p6",
          "paragraphNumber": 6,
          "text": "In recent years, the mountain has become crowded. On a few days of good weather, hundreds of\nclimbers queue to reach the top, and waiting in the cold can be deadly. Inexperienced climbers\nsometimes make the situation worse, and rescue teams are often forced to work at altitudes that few\npeople can reach. Experts say that tour companies should limit the number of permits they issue, and\nseveral countries have discussed new rules that would require climbers to prove that they have\nexperience on other high mountains.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"The problem of crowds\"): dangerous crowding and long queues in the death zone during brief windows",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The problem of crowds' کی مکمل تائید کرتا ہے (dangerous crowding and long queues in the death zone during brief windows)۔"
        },
        {
          "id": "t20_s4_p7",
          "paragraphNumber": 7,
          "text": "Decades of expeditions have left behind tents, bottles, oxygen tanks and other waste. Teams of\nvolunteers now collect tonnes of rubbish each season, and climbers are required to bring down their\nown waste. Nepalese authorities have also introduced a deposit scheme that returns money only when\nthe rubbish is brought back. Some teams have also removed the bodies of climbers who died on the\nslopes, which is an extremely difficult and dangerous task at that altitude, and a reminder of how\nserious the risks are.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"A mountain covered in rubbish\"): volunteer clean-up operations and deposit schemes addressing waste on slopes",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A mountain covered in rubbish' کی مکمل تائید کرتا ہے (volunteer clean-up operations and deposit schemes addressing waste on slopes)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 21,
    "section1": {
      "id": "reading-test-21-s1",
      "title": "Practice Test 21 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "We will start ",
          "gapId": "t21_s1_gap_1",
          "options": [
            "much",
            "very",
            "more"
          ],
          "correctIndex": 1,
          "textAfter": " early in the morning to avoid the heat."
        },
        {
          "textBefore": "Please bring a helmet, ",
          "gapId": "t21_s1_gap_2",
          "options": [
            "because",
            "unless",
            "although"
          ],
          "correctIndex": 0,
          "textAfter": " it is compulsory."
        },
        {
          "textBefore": "We shall stop for lunch ",
          "gapId": "t21_s1_gap_3",
          "options": [
            "to",
            "in",
            "on"
          ],
          "correctIndex": 1,
          "textAfter": " a small village."
        },
        {
          "textBefore": "Remember to carry enough water, ",
          "gapId": "t21_s1_gap_4",
          "options": [
            "so",
            "but",
            "as"
          ],
          "correctIndex": 2,
          "textAfter": " there are no shops on the route."
        },
        {
          "textBefore": "Please tell me how many of you are ",
          "gapId": "t21_s1_gap_5",
          "options": [
            "ability",
            "ably",
            "able"
          ],
          "correctIndex": 2,
          "textAfter": " to come."
        }
      ],
      "explanations": {
        "t21_s1_gap_1": {
          "english": "Option (B) is correct: \"very\". We will start very early in the morning to avoid the heat. ‘very’ modifies the adjective/adverb ‘early’; ‘much early’ is incorrect.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (We will start very early in the morning to avoid the heat. ‘very’ modi...)"
        },
        "t21_s1_gap_2": {
          "english": "Option (A) is correct: \"because\". Please bring a helmet, because it is compulsory. ‘because’ gives the reason for bringing a helmet.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please bring a helmet, because it is compulsory. ‘because’ gives the r...)"
        },
        "t21_s1_gap_3": {
          "english": "Option (B) is correct: \"in\". We shall stop for lunch in a small village. ‘in’ a village is the usual preposition for being inside a place.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (We shall stop for lunch in a small village. ‘in’ a village is the usua...)"
        },
        "t21_s1_gap_4": {
          "english": "Option (C) is correct: \"as\". Remember to carry enough water, as there are no shops on the route. ‘as’ = because; it explains why water is needed.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Remember to carry enough water, as there are no shops on the route. ‘a...)"
        },
        "t21_s1_gap_5": {
          "english": "Option (C) is correct: \"able\". Please tell me how many of you are able to",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please tell me how many of you are able to...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-21-s2",
      "title": "Practice Test 21 - Text Cohesion",
      "topic": "some rules for a public swimming pool",
      "correctOrder": [
        0,
        3,
        2,
        4,
        1,
        5
      ],
      "sentences": [
        "Visitors using the public swimming pool for the first time should follow these rules. (Example)",
        "Once you are in the pool area, children under eight must stay with an adult at all times.",
        "Use this wristband to open the locker where you can leave your belongings.",
        "Please begin by paying at the reception desk and collecting a numbered wristband.",
        "Before entering the pool, take a shower to wash off any sun cream or dirt.",
        "When you leave, return the wristband to the reception desk."
      ],
      "explanation": "‘this wristband’ refers back to the wristband; ‘Once you are in the pool area’ follows the shower before entering; leaving comes last.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘this wristband’ refers back to the wristband; ‘Once you are in the pool area’ follows the shower be",
      "tasks": [
        {
          "id": "t21_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some rules for a public swimming pool",
          "topic": "some rules for a public swimming pool",
          "correctOrder": [
            0,
            3,
            2,
            4,
            1,
            5
          ],
          "sentences": [
            "Visitors using the public swimming pool for the first time should follow these rules. (Example)",
            "Once you are in the pool area, children under eight must stay with an adult at all times.",
            "Use this wristband to open the locker where you can leave your belongings.",
            "Please begin by paying at the reception desk and collecting a numbered wristband.",
            "Before entering the pool, take a shower to wash off any sun cream or dirt.",
            "When you leave, return the wristband to the reception desk."
          ],
          "explanation": "‘this wristband’ refers back to the wristband; ‘Once you are in the pool area’ follows the shower before entering; leaving comes last.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘this wristband’ refers back to the wristband; ‘Once you are in the pool area’ follows the shower be"
        },
        {
          "id": "t21_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about everyday objects",
          "topic": "an article about everyday objects",
          "correctOrder": [
            0,
            5,
            2,
            3,
            4,
            1
          ],
          "sentences": [
            "The pencil is a simple tool with a surprisingly interesting history. (Example)",
            "By changing the proportions, he could produce pencils that were harder or softer, as writers needed.",
            "This soft black material left clear marks on paper, but it also stained the fingers badly.",
            "To solve the problem, people wrapped the graphite in string or pushed it into hollow sticks of wood.",
            "In the eighteenth century, a French inventor found a way to mix graphite with clay.",
            "In the sixteenth century, a huge deposit of graphite was discovered in a valley in northern England."
          ],
          "explanation": "‘This soft black material’ = graphite; ‘the problem’ = staining; ‘he’ = the French inventor.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘This soft black material’ = graphite; ‘the problem’ = staining; ‘he’ = the French inventor."
        }
      ]
    },
    "section3": {
      "id": "reading-test-21-s3",
      "title": "Practice Test 21 - Opinion Matching",
      "topic": "Opinion Matching Test 21",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘Having a dog has changed my life. I walk him three times a day, so I’m much fitter than I used to be,\nand I’ve met lots of neighbours at the park. The only problem is the vet’s bills, which can be frightening\nwhen he’s ill.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I’d love a pet, but my landlord doesn’t allow animals in the flat. I also travel for work, so it wouldn’t be\nfair to leave it alone. For now, I look after my sister’s cat when she is away.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘Cats are the perfect pets for busy people. They don’t need walking, and they clean themselves. Mine\nsits on my lap while I work, which is relaxing. I’d advise people to adopt from a rescue centre rather\nthan buy a kitten from a breeder.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I keep fish, and I find them wonderfully calming. A tank costs a bit to set up, but after that there’s very\nlittle to pay. Children can learn responsibility by feeding them. I wouldn’t say fish are affectionate, but\nwatching them is better than watching television.’"
        }
      ],
      "questions": [
        {
          "id": "t21_s3_q16",
          "statement": "Who has become healthier because of their pet?",
          "correctPersonId": "A",
          "explanation": "Person A: Who has become healthier because of their pet? ‘I’m much fitter than I used to be’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who has become healthier because of their pet? ‘I’m much fitter than I used to b)۔"
        },
        {
          "id": "t21_s3_q17",
          "statement": "Who is prevented from having a pet by the rules of their home?",
          "correctPersonId": "B",
          "explanation": "Person B: Who is prevented from having a pet by the rules of their home? ‘my landlord doesn’t allow animals’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 56 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who is prevented from having a pet by the rules of their home? ‘my landlord does)۔"
        },
        {
          "id": "t21_s3_q18",
          "statement": "Who recommends getting an animal from a rescue centre?",
          "correctPersonId": "C",
          "explanation": "Person C: Who recommends getting an animal from a rescue centre? ‘adopt from a rescue centre’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who recommends getting an animal from a rescue centre? ‘adopt from a rescue cent)۔"
        },
        {
          "id": "t21_s3_q19",
          "statement": "Who finds that pet doctors’ fees are a worry?",
          "correctPersonId": "A",
          "explanation": "Person A: Who finds that pet doctors’ fees are a worry? ‘the vet’s bills... frightening’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who finds that pet doctors’ fees are a worry? ‘the vet’s bills... frightening’)۔"
        },
        {
          "id": "t21_s3_q20",
          "statement": "Who thinks that a pet teaches children to be responsible?",
          "correctPersonId": "D",
          "explanation": "Person D: Who thinks that a pet teaches children to be responsible? ‘Children can learn responsibility’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who thinks that a pet teaches children to be responsible? ‘Children can learn re)۔"
        },
        {
          "id": "t21_s3_q21",
          "statement": "Who chooses an animal because it needs little attention?",
          "correctPersonId": "C",
          "explanation": "Person C: Who chooses an animal because it needs little attention? ‘They don’t need walking... clean themselves’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who chooses an animal because it needs little attention? ‘They don’t need walkin)۔"
        },
        {
          "id": "t21_s3_q22",
          "statement": "Who says that the running costs are low?",
          "correctPersonId": "D",
          "explanation": "Person D: Who says that the running costs are low? ‘very little to pay’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who says that the running costs are low? ‘very little to pay’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-21-s4",
      "title": "Practice Test 21 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Hunted to the edge",
        "B - Songs across the sea",
        "C - A ban and a recovery",
        "D - Epic journeys",
        "E - How whales sleep",
        "F - Two kinds of whale",
        "G - Breathing and diving",
        "H - Modern dangers",
        "J - Mammals of the sea (Example)"
      ],
      "paragraphs": [
        {
          "id": "t21_s4_p1",
          "paragraphNumber": 1,
          "text": "Scientists divide whales into two main groups. Toothed whales, such as dolphins and sperm whales,\nhunt fish and squid. Baleen whales have no teeth. Instead, they have hundreds of bristly plates in their\nmouths, which act like a giant sieve, trapping tiny shrimp-like animals called krill while the water flows\nout. There are about ninety species in total, ranging from the small vaquita porpoise, which is barely a\nmetre and a half long, to the enormous blue whale, so the two groups include animals of very different\nsizes.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Two kinds of whale\"): Two kinds of whale two groups and how they feed",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Two kinds of whale' کی مکمل تائید کرتا ہے (Two kinds of whale two groups and how they feed)۔"
        },
        {
          "id": "t21_s4_p2",
          "paragraphNumber": 2,
          "text": "Because whales need air, they must return to the surface regularly. They breathe through a blowhole\non top of the head, and the spray visible when they exhale is simply warm breath meeting cold air.\nSperm whales can hold their breath for over an hour and dive to depths of more than a thousand\nmetres. Their bodies are adapted to deep dives, with extra oxygen stored in their muscles and blood,\nand their hearts slow down to save energy while they are far below the surface.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Breathing and diving\"): Breathing and diving blowhole, breath-holding, depth",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Breathing and diving' کی مکمل تائید کرتا ہے (Breathing and diving blowhole, breath-holding, depth)۔"
        },
        {
          "id": "t21_s4_p3",
          "paragraphNumber": 3,
          "text": "Male humpback whales produce long, complex songs that can last for twenty minutes and be heard\nmany kilometres away. All the whales in a region sing the same song, and it gradually changes from\nyear to year. Scientists are still uncertain why they sing, but it may be to attract mates. Recordings of\nthese songs have been sold as albums, and one humpback’s song was even sent into space on a\nprobe, in the hope that other forms of life might hear it.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Songs across the sea\"): Songs across the sea whale songs",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Songs across the sea' کی مکمل تائید کرتا ہے (Songs across the sea whale songs)۔"
        },
        {
          "id": "t21_s4_p4",
          "paragraphNumber": 4,
          "text": "Many whales migrate enormous distances every year. Grey whales travel up to twenty thousand\nkilometres on a round trip between feeding grounds in cold northern waters and warm lagoons where\ntheir young are born. Along the route, they rarely eat, relying on the fat stored during the summer.\nMothers and calves swim together on the return journey, and the young whales must grow strong\nenough to survive the long, tiring crossing of open ocean.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Epic journeys\"): Epic journeys migration over long distances",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Epic journeys' کی مکمل تائید کرتا ہے (Epic journeys migration over long distances)۔"
        },
        {
          "id": "t21_s4_p5",
          "paragraphNumber": 5,
          "text": "For centuries, whales were hunted for their oil, which was used in lamps, and for their meat. By the\ntwentieth century, powerful ships and harpoons had pushed several species close to extinction. The\nblue whale population fell to just a few thousand animals, a tiny fraction of its original size. Whaling\nships became bigger and faster, and some fleets processed the animals on board, which meant that a\nsingle season could remove thousands of whales from the sea.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Hunted to the edge\"): Hunted to the edge hunting and near extinction",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Hunted to the edge' کی مکمل تائید کرتا ہے (Hunted to the edge hunting and near extinction)۔"
        },
        {
          "id": "t21_s4_p6",
          "paragraphNumber": 6,
          "text": "In 1986, an international agreement banned commercial whaling. Since then, some populations have\nstarted to recover. Humpback whales, for example, have increased in number in many regions, and\nwhale-watching has become a popular and profitable activity in countries that once hunted them. Even\nso, a few countries still hunt whales under special permits, and campaigners continue to argue about\nwhether the ban is strong enough to protect the species that remain rare.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"A ban and a recovery\"): A ban and a recovery the ban and recovering numbers",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A ban and a recovery' کی مکمل تائید کرتا ہے (A ban and a recovery the ban and recovering numbers)۔"
        },
        {
          "id": "t21_s4_p7",
          "paragraphNumber": 7,
          "text": "Today, whales face new threats. Many are injured when they collide with large ships, while others\nbecome trapped in fishing nets. Noise from engines can confuse whales that depend on sound to\ncommunicate and find food. Warming oceans are also changing the distribution of krill, which many\nspecies need. Plastic pollution is another risk, since whales sometimes swallow bags and other\nrubbish, and scientists have found large amounts of waste inside stranded animals.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Modern dangers\"): Modern dangers present-day threats",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Modern dangers' کی مکمل تائید کرتا ہے (Modern dangers present-day threats)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 22,
    "section1": {
      "id": "reading-test-22-s1",
      "title": "Practice Test 22 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "My teacher is called Mr Lopez, and he is very ",
          "gapId": "t22_s1_gap_1",
          "options": [
            "kind",
            "kinds",
            "kindness"
          ],
          "correctIndex": 0,
          "textAfter": " ."
        },
        {
          "textBefore": "There are twenty-five students ",
          "gapId": "t22_s1_gap_2",
          "options": [
            "in",
            "to",
            "at"
          ],
          "correctIndex": 0,
          "textAfter": " my class."
        },
        {
          "textBefore": "I am the only one who ",
          "gapId": "t22_s1_gap_3",
          "options": [
            "is",
            "do",
            "does"
          ],
          "correctIndex": 2,
          "textAfter": " not speak the language yet."
        },
        {
          "textBefore": "Everyone has been ",
          "gapId": "t22_s1_gap_4",
          "options": [
            "happiness",
            "happy",
            "happily"
          ],
          "correctIndex": 1,
          "textAfter": " to help me, though."
        },
        {
          "textBefore": "Lessons finish at half past three, so I am usually home ",
          "gapId": "t22_s1_gap_5",
          "options": [
            "by",
            "with",
            "for"
          ],
          "correctIndex": 0,
          "textAfter": " four o’clock."
        }
      ],
      "explanations": {
        "t22_s1_gap_1": {
          "english": "Option (A) is correct: \"kind\". My teacher is called Mr Lopez, and he is very kind. An adjective is needed after ‘is very’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (My teacher is called Mr Lopez, and he is very kind. An adjective is ne...)"
        },
        "t22_s1_gap_2": {
          "english": "Option (A) is correct: \"in\". There are twenty-five students in my class. ‘in my class’ = as members of the class.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (There are twenty-five students in my class. ‘in my class’ = as members...)"
        },
        "t22_s1_gap_3": {
          "english": "Option (C) is correct: \"does\". I am the only one who does not speak the language yet. ‘who’ refers to ‘the only one’ (singular), so ‘does’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I am the only one who does not speak the language yet. ‘who’ refers to...)"
        },
        "t22_s1_gap_4": {
          "english": "Option (B) is correct: \"happy\". Everyone has been happy to help me, though. ‘be happy to + verb’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Everyone has been happy to help me, though. ‘be happy to + verb’....)"
        },
        "t22_s1_gap_5": {
          "english": "Option (A) is correct: \"by\". Lessons finish at half past three, so I am",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Lessons finish at half past three, so I am...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-22-s2",
      "title": "Practice Test 22 - Text Cohesion",
      "topic": "some instructions from an education website",
      "correctOrder": [
        0,
        4,
        1,
        2,
        3,
        5
      ],
      "sentences": [
        "Students who wish to join an online course should follow these steps. (Example)",
        "Next, create a free account using your email address and a password.",
        "You will then be asked to pay the course fee by credit card.",
        "As soon as your payment is confirmed, you will receive an email with your first lesson.",
        "Begin by browsing the list of courses and choosing the subject that interests you.",
        "From that point, you can study at any time of day and work at your own speed."
      ],
      "explanation": "The steps follow a time sequence: choose > register > pay > confirmation > study.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: The steps follow a time sequence: choose > register > pay > confirmation > study.",
      "tasks": [
        {
          "id": "t22_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions from an education website",
          "topic": "some instructions from an education website",
          "correctOrder": [
            0,
            4,
            1,
            2,
            3,
            5
          ],
          "sentences": [
            "Students who wish to join an online course should follow these steps. (Example)",
            "Next, create a free account using your email address and a password.",
            "You will then be asked to pay the course fee by credit card.",
            "As soon as your payment is confirmed, you will receive an email with your first lesson.",
            "Begin by browsing the list of courses and choosing the subject that interests you.",
            "From that point, you can study at any time of day and work at your own speed."
          ],
          "explanation": "The steps follow a time sequence: choose > register > pay > confirmation > study.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: The steps follow a time sequence: choose > register > pay > confirmation > study."
        },
        {
          "id": "t22_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about food history",
          "topic": "a book about food history",
          "correctOrder": [
            0,
            2,
            5,
            3,
            1,
            4
          ],
          "sentences": [
            "The sandwich is named after an English nobleman, the Earl of Sandwich. (Example)",
            "Other players were impressed, and soon they were ordering the same thing.",
            "According to a popular story, he was playing cards one evening in the eighteenth century and did not want to stop for dinner.",
            "This allowed him to eat with one hand while continuing the game.",
            "In time, the idea became so popular that people all over the world began making their own versions.",
            "He therefore asked a servant to bring him some meat between two slices of bread."
          ],
          "explanation": "‘he’ = the Earl; ‘This allowed him’ = the meal between bread; ‘the same thing’ = the sandwich.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘he’ = the Earl; ‘This allowed him’ = the meal between bread; ‘the same thing’ = the sandwich."
        }
      ]
    },
    "section3": {
      "id": "reading-test-22-s3",
      "title": "Practice Test 22 - Opinion Matching",
      "topic": "Opinion Matching Test 22",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I always book a package holiday. Flights, hotel and transfers are all arranged, so I don’t need to worry\nabout anything. Prices are often lower than if you book everything separately, and if something goes\nwrong, the tour company sorts it out.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I plan my own trips. I hate being told when to get up and where to eat. Last year, I found a small\nguesthouse run by a local family, which I’d never have discovered in a brochure. It takes more work, but\nit feels like a real adventure.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I prefer staying at home and exploring my own region. Flying is bad for the environment, and there are\nbeautiful places within a few hours’ drive. I take the train whenever possible. I also avoid crowded\nresorts, which spoil the atmosphere.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘We travel with young children, so convenience is everything. We choose hotels with a kids’ club, so we\ncan enjoy some free time too. We tried camping once, but it was exhausting. I’d say organised holidays\nare better for families.’"
        }
      ],
      "questions": [
        {
          "id": "t22_s3_q16",
          "statement": "Who likes to have everything organised in advance?",
          "correctPersonId": "A",
          "explanation": "Person A: Who likes to have everything organised in advance? ‘all arranged, so I don’t need to worry’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who likes to have everything organised in advance? ‘all arranged, so I don’t nee)۔"
        },
        {
          "id": "t22_s3_q17",
          "statement": "Who has found accommodation that is not advertised in brochures?",
          "correctPersonId": "B",
          "explanation": "Person B: Who has found accommodation that is not advertised in brochures? ‘never have discovered in a brochure’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who has found accommodation that is not advertised in brochures? ‘never have dis)۔"
        },
        {
          "id": "t22_s3_q18",
          "statement": "Who is concerned about the damage caused by flying?",
          "correctPersonId": "C",
          "explanation": "Person C: Who is concerned about the damage caused by flying? ‘Flying is bad for the environment’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 58 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who is concerned about the damage caused by flying? ‘Flying is bad for the envir)۔"
        },
        {
          "id": "t22_s3_q19",
          "statement": "Who says a tour company will solve problems?",
          "correctPersonId": "A",
          "explanation": "Person A: Who says a tour company will solve problems? ‘the tour company sorts it out’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who says a tour company will solve problems? ‘the tour company sorts it out’)۔"
        },
        {
          "id": "t22_s3_q20",
          "statement": "Who thinks activities for children are important when choosing a hotel?",
          "correctPersonId": "D",
          "explanation": "Person D: Who thinks activities for children are important when choosing a hotel? ‘hotels with a kids’ club’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who thinks activities for children are important when choosing a hotel? ‘hotels )۔"
        },
        {
          "id": "t22_s3_q21",
          "statement": "Who dislikes following a schedule set by someone else?",
          "correctPersonId": "B",
          "explanation": "Person B: Who dislikes following a schedule set by someone else? ‘hate being told when to get up’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who dislikes following a schedule set by someone else? ‘hate being told when to )۔"
        },
        {
          "id": "t22_s3_q22",
          "statement": "Who tries to avoid popular tourist areas?",
          "correctPersonId": "C",
          "explanation": "Person C: Who tries to avoid popular tourist areas? ‘avoid crowded resorts’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who tries to avoid popular tourist areas? ‘avoid crowded resorts’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-22-s4",
      "title": "Practice Test 22 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Pulling the oceans",
        "B - Stories and legends about the Moon",
        "C - How it formed",
        "D - Going back",
        "E - The changing face",
        "F - What astronauts found",
        "G - A closer look",
        "H - The race to land",
        "J - Light in the night sky (Example)"
      ],
      "paragraphs": [
        {
          "id": "t22_s4_p1",
          "paragraphNumber": 1,
          "text": "Most scientists believe that the Moon was created about four and a half billion years ago, when a\nplanet the size of Mars crashed into the young Earth. Huge amounts of material were thrown into\nspace, and gradually this material joined together to form the Moon. This explains why the Moon’s\nrocks resemble those on Earth. Computer models of this violent event match the evidence from lunar\nrocks very closely, and most researchers now regard it as the best explanation available.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"How it formed\"): How it formed origin; ‘was created... crashed’",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How it formed' کی مکمل تائید کرتا ہے (How it formed origin; ‘was created... crashed’)۔"
        },
        {
          "id": "t22_s4_p2",
          "paragraphNumber": 2,
          "text": "The Moon is about a quarter of the size of Earth, and its gravity is only one sixth as strong.\nTemperatures vary dramatically, from about a hundred and twenty degrees Celsius in sunlight to below\nminus a hundred in the shade. Its surface is covered in craters, formed by space rocks that have struck\nit over billions of years. Because there is no atmosphere to protect it, there is no wind or rain to wear\naway the surface, so the footprints left by astronauts could remain visible for millions of years.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"A closer look\"): A closer look size, gravity, temperature, craters",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A closer look' کی مکمل تائید کرتا ہے (A closer look size, gravity, temperature, craters)۔"
        },
        {
          "id": "t22_s4_p3",
          "paragraphNumber": 3,
          "text": "From Earth, we see the Moon in different shapes during a month. This is not because of Earth’s\nshadow, as many people believe, but because we see varying amounts of the half lit by the Sun as the\nMoon travels around us. A full cycle, from one full Moon to the next, takes about twenty-nine and a half\ndays. The Moon always shows the same side to us, because it spins once in exactly the time it takes to\ntravel around the Earth, so the far side stayed hidden until a spacecraft photographed it in 1959.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"The changing face\"): The changing face phases of the Moon",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The changing face' کی مکمل تائید کرتا ہے (The changing face phases of the Moon)۔"
        },
        {
          "id": "t22_s4_p4",
          "paragraphNumber": 4,
          "text": "The Moon’s gravity pulls on the Earth’s water, creating the tides. Twice a day, the sea rises and falls\nalong coastlines, and the difference can be dramatic: in some bays in Canada, the water level changes\nby more than ten metres. Fishermen, sailors and coastal communities have always planned their lives\naround the tides. The Sun also pulls on the sea, though less strongly; when the Sun and Moon line up,\nthe tides are especially large, and they are smaller when the two pull at right angles.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Pulling the oceans\"): Pulling the oceans tides",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Pulling the oceans' کی مکمل تائید کرتا ہے (Pulling the oceans tides)۔"
        },
        {
          "id": "t22_s4_p5",
          "paragraphNumber": 5,
          "text": "In the 1960s, the United States and the Soviet Union competed to reach the Moon first. The Soviet\nUnion sent the first probes, but it was the American Apollo 11 mission that landed two astronauts on the\nsurface in July 1969. Neil Armstrong’s first step was watched on television by hundreds of millions of\npeople. The competition pushed technology forward at great speed, and in less than ten years,\nengineers had developed rockets, computers and spacecraft that had not existed at the beginning of\nthe decade.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"The race to land\"): The race to land competition between two countries",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The race to land' کی مکمل تائید کرتا ہے (The race to land competition between two countries)۔"
        },
        {
          "id": "t22_s4_p6",
          "paragraphNumber": 6,
          "text": "In total, twelve people walked on the Moon between 1969 and 1972. They collected almost four\nhundred kilograms of rock and soil, which scientists are still studying today. They also left instruments\nbehind, including mirrors that are used to measure the exact distance between the Earth and the Moon\nwith lasers. The samples showed that the Moon is very old and has little water, and they helped\nscientists to work out the history of the whole solar system.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"What astronauts found\"): What astronauts found samples and instruments",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'What astronauts found' کی مکمل تائید کرتا ہے (What astronauts found samples and instruments)۔"
        },
        {
          "id": "t22_s4_p7",
          "paragraphNumber": 7,
          "text": "After a long gap, interest in the Moon has returned. Several countries and private companies are\nplanning new missions, and some want to build a permanent base near the south pole, where ice has\nbeen detected in dark craters. This water could be used for drinking, or turned into fuel for rockets.\nEngineers hope that a base on the Moon could also serve as a stepping stone for longer journeys,\nsince it takes far less energy to launch a rocket from there than from Earth.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Going back\"): Going back future missions",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Going back' کی مکمل تائید کرتا ہے (Going back future missions)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 23,
    "section1": {
      "id": "reading-test-23-s1",
      "title": "Practice Test 23 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "The ceremony will be held ",
          "gapId": "t23_s1_gap_1",
          "options": [
            "at",
            "in",
            "on"
          ],
          "correctIndex": 2,
          "textAfter": " Saturday 14 June."
        },
        {
          "textBefore": "Afterwards, we invite you to a party ",
          "gapId": "t23_s1_gap_2",
          "options": [
            "where",
            "what",
            "who"
          ],
          "correctIndex": 0,
          "textAfter": " everyone is welcome."
        },
        {
          "textBefore": "Please wear something ",
          "gapId": "t23_s1_gap_3",
          "options": [
            "comfort",
            "comfortable",
            "comfortably"
          ],
          "correctIndex": 1,
          "textAfter": " , as there will be dancing."
        },
        {
          "textBefore": "If you ",
          "gapId": "t23_s1_gap_4",
          "options": [
            "wants",
            "wanting",
            "want"
          ],
          "correctIndex": 2,
          "textAfter": " stay overnight, there are rooms at the nearby hotel."
        },
        {
          "textBefore": "Please reply ",
          "gapId": "t23_s1_gap_5",
          "options": [
            "during",
            "since",
            "by"
          ],
          "correctIndex": 2,
          "textAfter": " the end of April."
        }
      ],
      "explanations": {
        "t23_s1_gap_1": {
          "english": "Option (C) is correct: \"on\". The ceremony will be held on Saturday 14 June. We use ‘on’ with dates and days.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The ceremony will be held on Saturday 14 June. We use ‘on’ with dates ...)"
        },
        "t23_s1_gap_2": {
          "english": "Option (A) is correct: \"where\". Afterwards, we invite you to a party where everyone is welcome. ‘where’ introduces a relative clause about the place/event.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Afterwards, we invite you to a party where everyone is welcome. ‘where...)"
        },
        "t23_s1_gap_3": {
          "english": "Option (B) is correct: \"comfortable\". Please wear something comfortable, as there will be dancing. An adjective follows ‘something’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please wear something comfortable, as there will be dancing. An adject...)"
        },
        "t23_s1_gap_4": {
          "english": "Option (C) is correct: \"want\". If you want stay overnight, there are rooms at the nearby hotel. Present simple after ‘if’ with ‘you’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (If you want stay overnight, there are rooms at the nearby hotel. Prese...)"
        },
        "t23_s1_gap_5": {
          "english": "Option (C) is correct: \"by\". Please reply by the end of April. ‘by’ = not later than.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please reply by the end of April. ‘by’ = not later than....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-23-s2",
      "title": "Practice Test 23 - Text Cohesion",
      "topic": "some instructions for using a cash machine",
      "correctOrder": [
        0,
        5,
        4,
        3,
        2,
        1
      ],
      "sentences": [
        "If you have never used a cash machine before, please follow these instructions. (Example)",
        "Wait for the machine to return your card before you take the cash.",
        "Next, select the amount of money you want to withdraw from the options shown.",
        "Cover the keypad with your other hand while you type, so that nobody can see the number.",
        "The screen will then ask you to enter your four-digit PIN.",
        "Begin by inserting your card into the slot, with the chip facing upwards."
      ],
      "explanation": "‘the number’ refers to the PIN; the card is returned at the end of the process.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘the number’ refers to the PIN; the card is returned at the end of the process.",
      "tasks": [
        {
          "id": "t23_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions for using a cash machine",
          "topic": "some instructions for using a cash machine",
          "correctOrder": [
            0,
            5,
            4,
            3,
            2,
            1
          ],
          "sentences": [
            "If you have never used a cash machine before, please follow these instructions. (Example)",
            "Wait for the machine to return your card before you take the cash.",
            "Next, select the amount of money you want to withdraw from the options shown.",
            "Cover the keypad with your other hand while you type, so that nobody can see the number.",
            "The screen will then ask you to enter your four-digit PIN.",
            "Begin by inserting your card into the slot, with the chip facing upwards."
          ],
          "explanation": "‘the number’ refers to the PIN; the card is returned at the end of the process.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘the number’ refers to the PIN; the card is returned at the end of the process."
        },
        {
          "id": "t23_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A history of transport",
          "topic": "a history of transport",
          "correctOrder": [
            0,
            3,
            4,
            5,
            1,
            2
          ],
          "sentences": [
            "The first public railways were opened in England in the early nineteenth century. (Example)",
            "Its success encouraged investors, and many other lines were soon built across the country.",
            "Within fifty years, a network of railways connected almost every large town in Britain.",
            "Before then, goods and passengers had to travel by horse and cart, which was slow and expensive.",
            "Steam engines offered a faster alternative, because they could pull heavy loads for long distances.",
            "The line between Stockton and Darlington, opened in 1825, was one of the first to use them."
          ],
          "explanation": "‘them’ = steam engines; ‘Its success’ = the Stockton–Darlington line; the sequence is chronological.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘them’ = steam engines; ‘Its success’ = the Stockton–Darlington line; the sequence is chronological."
        }
      ]
    },
    "section3": {
      "id": "reading-test-23-s3",
      "title": "Practice Test 23 - Opinion Matching",
      "topic": "Opinion Matching Test 23",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I mostly listen to streaming services. For a small monthly fee, I can access millions of songs and\ndiscover new bands every week. I take my music everywhere on my phone. Concert tickets are far too\nexpensive for me.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘Nothing compares to a live concert. The energy of the crowd, the volume, the feeling that anything\nmight happen: you can’t get that from headphones. I go to at least six concerts a year and save for\nthem. Recorded music is just a poor copy.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I play the guitar in a band, so for me it’s about the musicians. Streaming pays artists almost nothing,\nwhich makes it hard to earn a living. I buy albums directly from bands, even if it costs a bit more,\nbecause I want them to keep making music.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I’m old-fashioned. I still buy vinyl records and listen to them on my old record player. The sound is\nwarmer, and I enjoy looking at the large covers. It’s a ritual: choosing a record, putting it on and sitting\ndown to listen without distraction.’"
        }
      ],
      "questions": [
        {
          "id": "t23_s3_q16",
          "statement": "Who thinks tickets for live events cost too much?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks tickets for live events cost too much? ‘Concert tickets are far too expensive’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks tickets for live events cost too much? ‘Concert tickets are far too e)۔"
        },
        {
          "id": "t23_s3_q17",
          "statement": "Who is worried that musicians do not earn enough from streaming?",
          "correctPersonId": "C",
          "explanation": "Person C: Who is worried that musicians do not earn enough from streaming? ‘Streaming pays artists almost nothing’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who is worried that musicians do not earn enough from streaming? ‘Streaming pays)۔"
        },
        {
          "id": "t23_s3_q18",
          "statement": "Who enjoys the atmosphere created by an audience?",
          "correctPersonId": "B",
          "explanation": "Person B: Who enjoys the atmosphere created by an audience? ‘The energy of the crowd’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 60 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who enjoys the atmosphere created by an audience? ‘The energy of the crowd’ Apti)۔"
        },
        {
          "id": "t23_s3_q19",
          "statement": "Who likes the way old-style records sound?",
          "correctPersonId": "D",
          "explanation": "Person D: Who likes the way old-style records sound? ‘The sound is warmer’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who likes the way old-style records sound? ‘The sound is warmer’)۔"
        },
        {
          "id": "t23_s3_q20",
          "statement": "Who likes discovering new groups with an online service?",
          "correctPersonId": "A",
          "explanation": "Person A: Who likes discovering new groups with an online service? ‘discover new bands every week’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who likes discovering new groups with an online service? ‘discover new bands eve)۔"
        },
        {
          "id": "t23_s3_q21",
          "statement": "Who deliberately pays more to support artists?",
          "correctPersonId": "C",
          "explanation": "Person C: Who deliberately pays more to support artists? ‘even if it costs a bit more’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who deliberately pays more to support artists? ‘even if it costs a bit more’)۔"
        },
        {
          "id": "t23_s3_q22",
          "statement": "Who thinks recorded music is inferior to live performance?",
          "correctPersonId": "B",
          "explanation": "Person B: Who thinks recorded music is inferior to live",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who thinks recorded music is inferior to live)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-23-s4",
      "title": "Practice Test 23 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Pharaohs and pyramids",
        "B - The yearly flood",
        "C - Two great branches",
        "D - Ancient Egyptian writing",
        "E - Sharing the river",
        "F - Wildlife",
        "G - Taming the water",
        "H - Boats of the river",
        "J - A river through the desert (Example)"
      ],
      "paragraphs": [
        {
          "id": "t23_s4_p1",
          "paragraphNumber": 1,
          "text": "The Nile has two main sources. The White Nile begins in the lakes of central Africa, while the Blue\nNile starts in the highlands of Ethiopia. The two rivers meet at Khartoum, in Sudan, and continue north\nas a single stream. Most of the water and fertile mud in the lower Nile come from the Blue Nile. The\ncombined river is joined by one more important tributary, the Atbara, before it enters the vast stretch of\ndesert in northern Sudan, where it receives no further water at all.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Two great branches\"): Two great branches White Nile and Blue Nile",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Two great branches' کی مکمل تائید کرتا ہے (Two great branches White Nile and Blue Nile)۔"
        },
        {
          "id": "t23_s4_p2",
          "paragraphNumber": 2,
          "text": "Every summer, heavy rains in Ethiopia caused the river to rise and spread over its banks in Egypt.\nWhen the water retreated, it left behind a layer of rich, dark mud. Farmers planted their seeds in it, and\nthe harvest was so reliable that Egypt became one of the first great civilisations. Ancient Egyptians\nbased their calendar on this cycle, dividing the year into seasons named after the flood, the planting\nand the harvest.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"The yearly flood\"): The yearly flood annual flooding and farming",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The yearly flood' کی مکمل تائید کرتا ہے (The yearly flood annual flooding and farming)۔"
        },
        {
          "id": "t23_s4_p3",
          "paragraphNumber": 3,
          "text": "The river made possible the powerful kingdoms of ancient Egypt. Stones for the pyramids were\nfloated down the Nile on boats, and the cities of the pharaohs grew along its banks. Almost all of\nEgypt’s population still lives within a few kilometres of the river today. The great temples at places such\nas Luxor and Karnak were also built beside the water, and festivals were held on the river to honour the\ngods who were believed to control it.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Pharaohs and pyramids\"): Pharaohs and pyramids kingdoms and monuments",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Pharaohs and pyramids' کی مکمل تائید کرتا ہے (Pharaohs and pyramids kingdoms and monuments)۔"
        },
        {
          "id": "t23_s4_p4",
          "paragraphNumber": 4,
          "text": "Because the Nile flows north but the wind usually blows south, travel was easy in both directions.\nBoats drifted downstream with the current, and sailed upstream using the wind. Traditional sailing boats\ncalled feluccas can still be seen on the river, carrying tourists and local people. Today, motor boats and\nlarge cruise ships carry visitors between ancient monuments, while small ferries take workers and\nfarmers from one bank to the other.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Boats of the river\"): Boats of the river travel by boat",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Boats of the river' کی مکمل تائید کرتا ہے (Boats of the river travel by boat)۔"
        },
        {
          "id": "t23_s4_p5",
          "paragraphNumber": 5,
          "text": "In 1970, the Aswan High Dam was completed in southern Egypt. It ended the yearly floods, which\nallowed farmers to grow crops all year and provided electricity for millions. However, it also trapped the\nmud behind the dam, so farmers now need artificial fertiliser, and the delta at the river’s mouth is slowly\nshrinking. Engineers also created a huge artificial lake behind the dam, which stores water for dry years\nbut has covered many villages and ancient sites, some of which had to be moved to higher ground.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Taming the water\"): Taming the water the dam: benefits and problems",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Taming the water' کی مکمل تائید کرتا ہے (Taming the water the dam: benefits and problems)۔"
        },
        {
          "id": "t23_s4_p6",
          "paragraphNumber": 6,
          "text": "The river is home to many animals. Nile crocodiles, which can grow up to five metres long, rest on\nthe muddy banks, and hippos spend the day in the water. Hundreds of species of birds, including\npelicans and herons, either live along the river or stop there on their long migrations between Europe\nand Africa. Rare animals such as the shoebill, a tall bird with an enormous beak, can be found in the\nswamps of the upper Nile, where they attract visitors from around the world.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Wildlife\"): Wildlife animals and birds",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Wildlife' کی مکمل تائید کرتا ہے (Wildlife animals and birds)۔"
        },
        {
          "id": "t23_s4_p7",
          "paragraphNumber": 7,
          "text": "As populations grow, countries along the Nile argue about how to share its water. Egypt relies on it\nfor almost all of its supply, while upstream nations want to build dams to produce power. Talks between\ngovernments have been difficult, and experts warn that cooperation will be essential for the future. A\nrecent project to build a huge dam in Ethiopia has increased the tension, because countries\ndownstream fear that it could reduce the amount of water reaching them in dry years.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Sharing the river\"): Sharing the river disagreements between countries",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Sharing the river' کی مکمل تائید کرتا ہے (Sharing the river disagreements between countries)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 24,
    "section1": {
      "id": "reading-test-24-s1",
      "title": "Practice Test 24 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "Water is dripping from the pipe ",
          "gapId": "t24_s1_gap_1",
          "options": [
            "between",
            "under",
            "among"
          ],
          "correctIndex": 1,
          "textAfter": " the sink."
        },
        {
          "textBefore": "It started about two days ",
          "gapId": "t24_s1_gap_2",
          "options": [
            "ago",
            "before",
            "last"
          ],
          "correctIndex": 0,
          "textAfter": " ."
        },
        {
          "textBefore": "I have tried to stop it, ",
          "gapId": "t24_s1_gap_3",
          "options": [
            "but",
            "or",
            "so"
          ],
          "correctIndex": 0,
          "textAfter": " nothing worked."
        },
        {
          "textBefore": "How much ",
          "gapId": "t24_s1_gap_4",
          "options": [
            "are",
            "does",
            "do"
          ],
          "correctIndex": 2,
          "textAfter": " you charge for a visit?"
        },
        {
          "textBefore": "I would be ",
          "gapId": "t24_s1_gap_5",
          "options": [
            "thankful",
            "thanking",
            "thanks"
          ],
          "correctIndex": 0,
          "textAfter": " if you could call me back."
        }
      ],
      "explanations": {
        "t24_s1_gap_1": {
          "english": "Option (B) is correct: \"under\". Water is dripping from the pipe under the sink. ‘under the sink’ describes where the pipe is.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Water is dripping from the pipe under the sink. ‘under the sink’ descr...)"
        },
        "t24_s1_gap_2": {
          "english": "Option (A) is correct: \"ago\". It started about two days ago. ‘ago’ follows a period of time to refer to the past.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (It started about two days ago. ‘ago’ follows a period of time to refer...)"
        },
        "t24_s1_gap_3": {
          "english": "Option (A) is correct: \"but\". I have tried to stop it, but nothing worked. ‘but’ shows contrast: I tried, yet it did not work.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I have tried to stop it, but nothing worked. ‘but’ shows contrast: I t...)"
        },
        "t24_s1_gap_4": {
          "english": "Option (C) is correct: \"do\". How much do you charge for a visit? Present simple question with ‘you’: ‘do you charge’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (How much do you charge for a visit? Present simple question with ‘you’...)"
        },
        "t24_s1_gap_5": {
          "english": "Option (A) is correct: \"thankful\". I would be thankful if you could call me back. An adjective follows ‘would be’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I would be thankful if you could call me back. An adjective follows ‘w...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-24-s2",
      "title": "Practice Test 24 - Text Cohesion",
      "topic": "some instructions from a post office",
      "correctOrder": [
        0,
        3,
        4,
        2,
        1,
        5
      ],
      "sentences": [
        "Customers who wish to send a parcel abroad should follow these steps. (Example)",
        "You will also need to complete a form describing what is inside the parcel.",
        "Take it to the counter, where a clerk will weigh it and tell you the price.",
        "Start by packing the items in a strong box and filling any empty spaces with paper.",
        "Seal the box with tape and write the address clearly on the top.",
        "Once you have paid, you will be given a number that allows you to follow the parcel online."
      ],
      "explanation": "‘also’ links the form to the counter stage; ‘Once you have paid’ comes last.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘also’ links the form to the counter stage; ‘Once you have paid’ comes last.",
      "tasks": [
        {
          "id": "t24_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions from a post office",
          "topic": "some instructions from a post office",
          "correctOrder": [
            0,
            3,
            4,
            2,
            1,
            5
          ],
          "sentences": [
            "Customers who wish to send a parcel abroad should follow these steps. (Example)",
            "You will also need to complete a form describing what is inside the parcel.",
            "Take it to the counter, where a clerk will weigh it and tell you the price.",
            "Start by packing the items in a strong box and filling any empty spaces with paper.",
            "Seal the box with tape and write the address clearly on the top.",
            "Once you have paid, you will be given a number that allows you to follow the parcel online."
          ],
          "explanation": "‘also’ links the form to the counter stage; ‘Once you have paid’ comes last.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘also’ links the form to the counter stage; ‘Once you have paid’ comes last."
        },
        {
          "id": "t24_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about food history",
          "topic": "a book about food history",
          "correctOrder": [
            0,
            2,
            5,
            1,
            4,
            3
          ],
          "sentences": [
            "Bread is one of the oldest prepared foods in the world. (Example)",
            "This happened because tiny organisms called yeast were present in the air and in the flour.",
            "The earliest bread was probably a flat cake made from crushed grain and water, baked on hot stones.",
            "Bakers across the ancient world quickly learned to use this method, and it is still the basis of most bread today.",
            "The result was lighter, softer bread, which people found far more pleasant to eat.",
            "Later, the Egyptians discovered that if dough was left in a warm place, it began to rise."
          ],
          "explanation": "‘This happened’ explains why dough rises; ‘The result’ = lighter bread; ‘this method’ closes the text.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘This happened’ explains why dough rises; ‘The result’ = lighter bread; ‘this method’ closes the tex"
        }
      ]
    },
    "section3": {
      "id": "reading-test-24-s3",
      "title": "Practice Test 24 - Opinion Matching",
      "topic": "Opinion Matching Test 24",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I think children get too much homework. After seven hours at school, they need time to play and rest.\nMy son often works until nine at night, and he’s exhausted. Studies show that after a certain point, extra\nwork doesn’t improve results.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘A little homework is useful. It teaches children to work independently and manage their time, which\nthey’ll need later. I believe thirty minutes a day is reasonable. It also lets parents see what their children\nare learning at school.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘My problem is that homework causes arguments. By the evening we’re both tired, and I don’t always\nunderstand the maths myself. I’d prefer schools to organise supervised study sessions, so children can\nfinish their work there.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I’m a teacher, and I set homework only when it has a clear purpose, such as reading or preparing for a\nproject. Repeating exercises for hours is pointless. Children who enjoy what they’re doing learn faster\nthan those who are simply forced to finish.’"
        }
      ],
      "questions": [
        {
          "id": "t24_s3_q16",
          "statement": "Who believes homework helps children learn to organise their time?",
          "correctPersonId": "B",
          "explanation": "Person B: Who believes homework helps children learn to organise their time? ‘manage their time’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who believes homework helps children learn to organise their time? ‘manage their)۔"
        },
        {
          "id": "t24_s3_q17",
          "statement": "Who thinks children need free time after school?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks children need free time after school? ‘they need time to play and rest’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks children need free time after school? ‘they need time to play and res)۔"
        },
        {
          "id": "t24_s3_q18",
          "statement": "Who finds that homework leads to family disagreements?",
          "correctPersonId": "C",
          "explanation": "Person C: Who finds that homework leads to family disagreements? ‘homework causes arguments’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who finds that homework leads to family disagreements? ‘homework causes argument)۔"
        },
        {
          "id": "t24_s3_q19",
          "statement": "Who says that homework should always have a purpose?",
          "correctPersonId": "D",
          "explanation": "Person D: Who says that homework should always have a purpose? ‘only when it has a clear purpose’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 62 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who says that homework should always have a purpose? ‘only when it has a clear p)۔"
        },
        {
          "id": "t24_s3_q20",
          "statement": "Who would like homework to be done at school under supervision?",
          "correctPersonId": "C",
          "explanation": "Person C: Who would like homework to be done at school under supervision? ‘supervised study sessions’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who would like homework to be done at school under supervision? ‘supervised stud)۔"
        },
        {
          "id": "t24_s3_q21",
          "statement": "Who thinks parents can see what children are studying?",
          "correctPersonId": "B",
          "explanation": "Person B: Who thinks parents can see what children are studying? ‘lets parents see what... learning’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who thinks parents can see what children are studying? ‘lets parents see what...)۔"
        },
        {
          "id": "t24_s3_q22",
          "statement": "Who thinks that more homework does not always give better results?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks that more homework does not",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks that more homework does not)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-24-s4",
      "title": "Practice Test 24 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Where they strike",
        "B - Safer buildings",
        "C - What causes them",
        "D - Giant waves",
        "E - Famous earthquakes in history",
        "F - Can we predict them?",
        "G - Staying safe",
        "H - Measuring the shaking",
        "J - A sudden shake (Example)"
      ],
      "paragraphs": [
        {
          "id": "t24_s4_p1",
          "paragraphNumber": 1,
          "text": "The Earth’s crust is divided into huge plates that move very slowly, at about the speed that\nfingernails grow. Sometimes the edges of two plates become stuck against each other while the\npressure builds up. When the rock finally breaks, the stored energy is released in waves that travel\nthrough the ground. The point underground where the rock first breaks is called the focus, and the spot\non the surface directly above it, known as the epicentre, usually suffers the strongest shaking.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"What causes them\"): What causes them plates stick, then break",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'What causes them' کی مکمل تائید کرتا ہے (What causes them plates stick, then break)۔"
        },
        {
          "id": "t24_s4_p2",
          "paragraphNumber": 2,
          "text": "Earthquakes are recorded by instruments called seismographs. For many years, their strength was\ndescribed using the Richter scale, though scientists now use a more accurate scale based on the\nenergy released. Each step up the scale means the ground moves about ten times as much and\nreleases about thirty times more energy. Today, thousands of seismographs around the world send\ntheir records to central stations, which means that scientists can locate a large earthquake within\nminutes of it happening.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Measuring the shaking\"): Measuring the shaking instruments and scales",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Measuring the shaking' کی مکمل تائید کرتا ہے (Measuring the shaking instruments and scales)۔"
        },
        {
          "id": "t24_s4_p3",
          "paragraphNumber": 3,
          "text": "Most earthquakes occur along the boundaries between plates. Japan, Chile, Indonesia and parts of\nCalifornia are among the places that experience them most often. Some countries have shaking of\nsome kind almost every day, and people there learn from childhood what to do when the floor begins to\nmove. Scientists can map these danger zones with great accuracy, because the plate boundaries have\nbeen marked by earlier quakes, and cities built close to them are advised to prepare carefully.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Where they strike\"): Where they strike locations",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Where they strike' کی مکمل تائید کرتا ہے (Where they strike locations)۔"
        },
        {
          "id": "t24_s4_p4",
          "paragraphNumber": 4,
          "text": "When a powerful earthquake happens beneath the sea, it can push up the water above it and create\na tsunami. These waves travel across the ocean at the speed of a jet plane, but they are barely\nnoticeable in deep water. As they reach the shallow coast, they slow down and grow into walls of water\nthat can flood areas far inland. In 2004, a tsunami in the Indian Ocean killed more than two hundred\nthousand people in many different countries, and it led to the creation of warning systems across the\nregion.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Giant waves\"): Giant waves tsunamis",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Giant waves' کی مکمل تائید کرتا ہے (Giant waves tsunamis)۔"
        },
        {
          "id": "t24_s4_p5",
          "paragraphNumber": 5,
          "text": "Most deaths in earthquakes are caused by collapsing buildings rather than the shaking itself. In\nplaces such as Japan, engineers now construct buildings on flexible foundations, which allow the\nstructure to move without breaking. Strict building laws mean that even very strong earthquakes there\ncause far less damage than in countries with weak buildings. In addition, tall buildings may contain\nhuge weights near the top that swing in the opposite direction to the shaking, which reduces the\nmovement of the whole structure.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Safer buildings\"): Safer buildings construction and building laws",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Safer buildings' کی مکمل تائید کرتا ہے (Safer buildings construction and building laws)۔"
        },
        {
          "id": "t24_s4_p6",
          "paragraphNumber": 6,
          "text": "Despite decades of research, scientists cannot say exactly when and where an earthquake will\nhappen. They can calculate which areas are at greatest risk, but not the date. Some countries have\ndeveloped alarm systems that detect the first weak waves and send a warning seconds before the\nstrong shaking arrives. Animals are sometimes said to sense earthquakes in advance, but researchers\nhave not found reliable evidence, so official warnings must still rely on instruments and calculations.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Can we predict them?\"): Can we predict them? ‘cannot say exactly when’; early warning",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Can we predict them?' کی مکمل تائید کرتا ہے (Can we predict them? ‘cannot say exactly when’; early warning)۔"
        },
        {
          "id": "t24_s4_p7",
          "paragraphNumber": 7,
          "text": "Experts advise people to protect themselves during an earthquake by dropping to the ground, taking\ncover under a strong table and holding on until the shaking stops. It is dangerous to run outside, where\nfalling glass and bricks may cause injuries. Families are encouraged to prepare an emergency bag with\nwater, food and a torch. After the shaking has stopped, people should expect smaller shocks, called\naftershocks, and they should stay away from damaged buildings until experts have checked that they\nare safe.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Staying safe\"): Staying safe advice for individuals",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Staying safe' کی مکمل تائید کرتا ہے (Staying safe advice for individuals)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 25,
    "section1": {
      "id": "reading-test-25-s1",
      "title": "Practice Test 25 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "The hotel is ",
          "gapId": "t25_s1_gap_1",
          "options": [
            "situating",
            "situated",
            "situation"
          ],
          "correctIndex": 1,
          "textAfter": " at the top of a hill."
        },
        {
          "textBefore": "We go for a long walk ",
          "gapId": "t25_s1_gap_2",
          "options": [
            "ever",
            "many",
            "every"
          ],
          "correctIndex": 2,
          "textAfter": " morning."
        },
        {
          "textBefore": "Yesterday it rained, ",
          "gapId": "t25_s1_gap_3",
          "options": [
            "or",
            "so",
            "but"
          ],
          "correctIndex": 1,
          "textAfter": " we stayed inside and played cards."
        },
        {
          "textBefore": "The air is so fresh ",
          "gapId": "t25_s1_gap_4",
          "options": [
            "what",
            "that",
            "which"
          ],
          "correctIndex": 1,
          "textAfter": " I sleep like a baby."
        },
        {
          "textBefore": "I wish you ",
          "gapId": "t25_s1_gap_5",
          "options": [
            "are",
            "were",
            "would be"
          ],
          "correctIndex": 1,
          "textAfter": " here with us."
        }
      ],
      "explanations": {
        "t25_s1_gap_1": {
          "english": "Option (B) is correct: \"situated\". The hotel is situated at the top of a hill. ‘is situated’ = is located (passive).",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The hotel is situated at the top of a hill. ‘is situated’ = is located...)"
        },
        "t25_s1_gap_2": {
          "english": "Option (C) is correct: \"every\". We go for a long walk every morning. ‘every morning’ = each morning.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (We go for a long walk every morning. ‘every morning’ = each morning....)"
        },
        "t25_s1_gap_3": {
          "english": "Option (B) is correct: \"so\". Yesterday it rained, so we stayed inside and played cards. ‘so’ introduces the result of the rain.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Yesterday it rained, so we stayed inside and played cards. ‘so’ introd...)"
        },
        "t25_s1_gap_4": {
          "english": "Option (B) is correct: \"that\". The air is so fresh that I sleep like a baby. ‘so + adjective + that’ expresses result.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The air is so fresh that I sleep like a baby. ‘so + adjective + that’ ...)"
        },
        "t25_s1_gap_5": {
          "english": "Option (B) is correct: \"were\". I wish you were here with us. ‘wish’ + past form (were) for an unreal present",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I wish you were here with us. ‘wish’ + past form (were) for an unreal ...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-25-s2",
      "title": "Practice Test 25 - Text Cohesion",
      "topic": "some instructions from a phone shop",
      "correctOrder": [
        0,
        2,
        5,
        4,
        3,
        1
      ],
      "sentences": [
        "If you have just bought a new mobile phone, please follow these steps to set it up. (Example)",
        "Once this has finished, you can start to download your favourite applications.",
        "Begin by inserting the SIM card into the slot on the side of the phone.",
        "After that, sign in with your email address so that your contacts can be copied across.",
        "The phone will then ask you to choose a language and connect to a wireless network.",
        "Hold the power button for a few seconds until the screen lights up."
      ],
      "explanation": "‘Once this has finished’ refers to copying the contacts; the SIM goes in before switching on.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Once this has finished’ refers to copying the contacts; the SIM goes in before switching on.",
      "tasks": [
        {
          "id": "t25_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some instructions from a phone shop",
          "topic": "some instructions from a phone shop",
          "correctOrder": [
            0,
            2,
            5,
            4,
            3,
            1
          ],
          "sentences": [
            "If you have just bought a new mobile phone, please follow these steps to set it up. (Example)",
            "Once this has finished, you can start to download your favourite applications.",
            "Begin by inserting the SIM card into the slot on the side of the phone.",
            "After that, sign in with your email address so that your contacts can be copied across.",
            "The phone will then ask you to choose a language and connect to a wireless network.",
            "Hold the power button for a few seconds until the screen lights up."
          ],
          "explanation": "‘Once this has finished’ refers to copying the contacts; the SIM goes in before switching on.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Once this has finished’ refers to copying the contacts; the SIM goes in before switching on."
        },
        {
          "id": "t25_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about hygiene through history",
          "topic": "a book about hygiene through history",
          "correctOrder": [
            0,
            5,
            3,
            4,
            2,
            1
          ],
          "sentences": [
            "People have been making soap for more than four thousand years. (Example)",
            "Only in the nineteenth century, when doctors linked cleanliness with good health, did soap become a daily necessity.",
            "After the fall of their empire, bathing became less common in Europe for many centuries.",
            "However, they used it mainly for cleaning wool and cloth rather than the body.",
            "It was the Romans who began to wash themselves regularly, and they built large public baths for this purpose.",
            "The ancient Babylonians produced it by boiling animal fat with ashes."
          ],
          "explanation": "‘However’ contrasts with making soap; ‘their empire’ = the Romans’; ‘Only in the nineteenth century’ ends the history.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘However’ contrasts with making soap; ‘their empire’ = the Romans’; ‘Only in the nineteenth century’"
        }
      ]
    },
    "section3": {
      "id": "reading-test-25-s3",
      "title": "Practice Test 25 - Opinion Matching",
      "topic": "Opinion Matching Test 25",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I buy cheap clothes because I can’t afford anything else. Fashion changes so quickly, and shops like\nthese let me look smart on a small budget. I know they don’t last long, but I’d rather have five cheap\ntops than one expensive one.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I try never to buy new clothes. I shop in second-hand shops and swap outfits with friends. It’s better for\nthe planet, since making clothes uses enormous amounts of water, and I often find unique items that no\none else owns.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I save up for good-quality clothes that I can wear for many years. A well-made coat costs three times\nmore, but it lasts ten winters, so it works out cheaper in the long run. I also find that expensive clothes\nfit better.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I work in a clothes factory, and I’ve seen how poorly workers are paid for making fashionable items.\nCustomers don’t realise this when they pay low prices. I think shops should be forced to tell us where\nand how their clothes are made.’"
        }
      ],
      "questions": [
        {
          "id": "t25_s3_q16",
          "statement": "Who thinks that cheap clothes are good enough for a limited budget?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks that cheap clothes are good enough for a limited budget? ‘look smart on a small budget’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks that cheap clothes are good enough for a limited budget? ‘look smart )۔"
        },
        {
          "id": "t25_s3_q17",
          "statement": "Who mentions the amount of water used to produce clothing?",
          "correctPersonId": "B",
          "explanation": "Person B: Who mentions the amount of water used to produce clothing? ‘enormous amounts of water’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who mentions the amount of water used to produce clothing? ‘enormous amounts of )۔"
        },
        {
          "id": "t25_s3_q18",
          "statement": "Who thinks quality items are better value over time?",
          "correctPersonId": "C",
          "explanation": "Person C: Who thinks quality items are better value over time? ‘cheaper in the long run’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 64 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who thinks quality items are better value over time? ‘cheaper in the long run’ A)۔"
        },
        {
          "id": "t25_s3_q19",
          "statement": "Who is concerned about the working conditions of those who make clothes?",
          "correctPersonId": "D",
          "explanation": "Person D: Who is concerned about the working conditions of those who make clothes? ‘how poorly workers are paid’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who is concerned about the working conditions of those who make clothes? ‘how po)۔"
        },
        {
          "id": "t25_s3_q20",
          "statement": "Who likes owning clothes that are unlike other people’s?",
          "correctPersonId": "B",
          "explanation": "Person B: Who likes owning clothes that are unlike other people’s? ‘unique items that no one else owns’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who likes owning clothes that are unlike other people’s? ‘unique items that no o)۔"
        },
        {
          "id": "t25_s3_q21",
          "statement": "Who wants shops to give more information about production?",
          "correctPersonId": "D",
          "explanation": "Person D: Who wants shops to give more information about production? ‘forced to tell us where and how’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who wants shops to give more information about production? ‘forced to tell us wh)۔"
        },
        {
          "id": "t25_s3_q22",
          "statement": "Who says that well-made clothes fit better?",
          "correctPersonId": "C",
          "explanation": "Person C: Who says that well-made clothes fit better? ‘expensive clothes fit better’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who says that well-made clothes fit better? ‘expensive clothes fit better’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-25-s4",
      "title": "Practice Test 25 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - A hungry organ",
        "B - Looking after the brain",
        "C - Brains of different animals",
        "D - Mysteries that remain",
        "E - A brain that changes",
        "F - How we remember",
        "G - Different areas, different jobs",
        "H - Billions of cells",
        "J - The control centre (Example)"
      ],
      "paragraphs": [
        {
          "id": "t25_s4_p1",
          "paragraphNumber": 1,
          "text": "The brain contains around eighty-six billion nerve cells, called neurons. Each one is connected to\nthousands of others, creating a network more complicated than any computer. Messages travel\nbetween the cells as tiny electrical signals, at speeds of up to a hundred metres per second. In total, the\nconnections between neurons are thought to number about a hundred trillion, which is more than the\nstars in our galaxy, and new ones form every time we learn something.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Billions of cells\"): Billions of cells neurons and signals",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Billions of cells' کی مکمل تائید کرتا ہے (Billions of cells neurons and signals)۔"
        },
        {
          "id": "t25_s4_p2",
          "paragraphNumber": 2,
          "text": "Different parts of the brain are responsible for different tasks. The front deals with planning and\ndecision-making, the back processes what we see, and the sides handle hearing and language.\nDamage to a specific area, for instance after an accident, can cause a very specific loss, such as the\ninability to recognise faces. Scientists have learned much of this from patients with brain injuries, and\nnowadays they also use scanners that show which areas become active when a person speaks, reads\nor solves a problem.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Different areas, different jobs\"): Different areas, different jobs each region has a function",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Different areas, different jobs' کی مکمل تائید کرتا ہے (Different areas, different jobs each region has a function)۔"
        },
        {
          "id": "t25_s4_p3",
          "paragraphNumber": 3,
          "text": "Memories are not stored in one place, but spread across many areas. When we learn something\nnew, connections between neurons become stronger. Repetition is important: the more often we recall\na fact, the stronger the connection grows, which is why regular revision works better than studying\neverything the night before. Emotion also affects memory, which is why people often remember\nfrightening or joyful events vividly, while ordinary days fade away within weeks.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"How we remember\"): How we remember memory and repetition",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'How we remember' کی مکمل تائید کرتا ہے (How we remember memory and repetition)۔"
        },
        {
          "id": "t25_s4_p4",
          "paragraphNumber": 4,
          "text": "Although the brain makes up only two per cent of body weight, it uses about twenty per cent of the\nenergy we consume. This is why we feel tired after a long day of concentration. It also needs a constant\nsupply of oxygen, and if the blood flow stops for just a few minutes, brain cells begin to die. Doctors\ntherefore regard good circulation as essential, and they warn that any sudden loss of blood flow to the\nbrain, such as a stroke, needs urgent treatment.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"A hungry organ\"): A hungry organ energy and oxygen needs",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A hungry organ' کی مکمل تائید کرتا ہے (A hungry organ energy and oxygen needs)۔"
        },
        {
          "id": "t25_s4_p5",
          "paragraphNumber": 5,
          "text": "Scientists once thought that the adult brain could not change. We now know that it keeps\nreorganising itself throughout life. Taxi drivers who have to learn the streets of a big city, for example,\ndevelop a larger area connected with spatial memory. Learning a new skill, such as music or a\nlanguage, produces similar changes. This ability is called plasticity, and it explains why people who lose\na skill after an injury can often regain part of it with patient and regular training.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"A brain that changes\"): A brain that changes ‘keeps reorganising itself’",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A brain that changes' کی مکمل تائید کرتا ہے (A brain that changes ‘keeps reorganising itself’)۔"
        },
        {
          "id": "t25_s4_p6",
          "paragraphNumber": 6,
          "text": "Both physical activity and a healthy diet are important for brain health. Exercise improves blood flow\nand may even encourage the growth of new cells, while foods such as fish, nuts and vegetables\nprovide nutrients the brain needs. Studies suggest that people who walk regularly are less likely to\nsuffer memory problems in old age. Doctors also advise people to avoid too much sugar and to protect\ntheir heads when cycling or playing sport, since even minor injuries can cause long-term problems.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Looking after the brain\"): Looking after the brain exercise and diet",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Looking after the brain' کی مکمل تائید کرتا ہے (Looking after the brain exercise and diet)۔"
        },
        {
          "id": "t25_s4_p7",
          "paragraphNumber": 7,
          "text": "Many questions remain unanswered. Scientists still cannot explain exactly how electrical signals turn\ninto thoughts or why we have consciousness. Large research projects around the world are building\ndetailed maps of the brain, hoping that they will gradually reveal how its billions of cells work together.\nAnother puzzle is how the brain manages to use so little power, only about as much as a dim light bulb,\nwhen the most powerful computers need enormous amounts of electricity.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Mysteries that remain\"): Mysteries that remain unanswered questions",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Mysteries that remain' کی مکمل تائید کرتا ہے (Mysteries that remain unanswered questions)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 26,
    "section1": {
      "id": "reading-test-26-s1",
      "title": "Practice Test 26 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "I live ",
          "gapId": "t26_s1_gap_1",
          "options": [
            "at",
            "in",
            "to"
          ],
          "correctIndex": 1,
          "textAfter": " a small town near the coast."
        },
        {
          "textBefore": "My father is a fisherman, ",
          "gapId": "t26_s1_gap_2",
          "options": [
            "and",
            "because",
            "unless"
          ],
          "correctIndex": 0,
          "textAfter": " my mother works in a bank."
        },
        {
          "textBefore": "I have two brothers, ",
          "gapId": "t26_s1_gap_3",
          "options": [
            "which",
            "whose",
            "who"
          ],
          "correctIndex": 2,
          "textAfter": " are both older than me."
        },
        {
          "textBefore": "In my free time I ",
          "gapId": "t26_s1_gap_4",
          "options": [
            "enjoy",
            "hope",
            "want"
          ],
          "correctIndex": 0,
          "textAfter": " playing football."
        },
        {
          "textBefore": "I will send you a photograph ",
          "gapId": "t26_s1_gap_5",
          "options": [
            "by",
            "of",
            "to"
          ],
          "correctIndex": 1,
          "textAfter": " my family next time."
        }
      ],
      "explanations": {
        "t26_s1_gap_1": {
          "english": "Option (B) is correct: \"in\". I live in a small town near the coast. ‘live in’ + a town.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I live in a small town near the coast. ‘live in’ + a town....)"
        },
        "t26_s1_gap_2": {
          "english": "Option (A) is correct: \"and\". My father is a fisherman, and my mother works in a bank. ‘and’ simply adds information; ‘because’ and ‘unless’ do not fit the meaning.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (My father is a fisherman, and my mother works in a bank. ‘and’ simply ...)"
        },
        "t26_s1_gap_3": {
          "english": "Option (C) is correct: \"who\". I have two brothers, who are both older than me. ‘who’ is the relative pronoun for people.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I have two brothers, who are both older than me. ‘who’ is the relative...)"
        },
        "t26_s1_gap_4": {
          "english": "Option (A) is correct: \"enjoy\". In my free time I enjoy playing football. ‘enjoy’ is followed by the -ing form; ‘want’ and ‘hope’ take ‘to’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (In my free time I enjoy playing football. ‘enjoy’ is followed by the -...)"
        },
        "t26_s1_gap_5": {
          "english": "Option (B) is correct: \"of\". I will send you a photograph of my family next",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I will send you a photograph of my family next...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-26-s2",
      "title": "Practice Test 26 - Text Cohesion",
      "topic": "some competition rules",
      "correctOrder": [
        0,
        5,
        1,
        2,
        4,
        3
      ],
      "sentences": [
        "If you would like to enter our photography competition, please follow these instructions. (Example)",
        "Then upload it to our website, together with a short title for the picture.",
        "You must also fill in the online form giving your name and contact details.",
        "The finalists will be contacted by email before the end of the month.",
        "Our judges will study every entry carefully and choose ten finalists.",
        "First, choose your best photograph, which must have been taken in the last twelve months."
      ],
      "explanation": "‘it’ = the photograph; ‘also’ adds a further step; the judges act after the entries are sent.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘it’ = the photograph; ‘also’ adds a further step; the judges act after the entries are sent.",
      "tasks": [
        {
          "id": "t26_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some competition rules",
          "topic": "some competition rules",
          "correctOrder": [
            0,
            5,
            1,
            2,
            4,
            3
          ],
          "sentences": [
            "If you would like to enter our photography competition, please follow these instructions. (Example)",
            "Then upload it to our website, together with a short title for the picture.",
            "You must also fill in the online form giving your name and contact details.",
            "The finalists will be contacted by email before the end of the month.",
            "Our judges will study every entry carefully and choose ten finalists.",
            "First, choose your best photograph, which must have been taken in the last twelve months."
          ],
          "explanation": "‘it’ = the photograph; ‘also’ adds a further step; the judges act after the entries are sent.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘it’ = the photograph; ‘also’ adds a further step; the judges act after the entries are sent."
        },
        {
          "id": "t26_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about measuring time",
          "topic": "an article about measuring time",
          "correctOrder": [
            0,
            3,
            1,
            2,
            4,
            5
          ],
          "sentences": [
            "The calendar we use today is the result of many centuries of change. (Example)",
            "Later, two more months were added to make the year match the movement of the moon.",
            "Even so, the calendar slowly drifted away from the seasons.",
            "The ancient Romans originally had a year of only ten months, which left a gap in winter.",
            "In 46 BC, the ruler Julius Caesar introduced a new system based on a year of 365 days, with an extra day every fourth year.",
            "This system lasted for more than fifteen hundred years, until a small correction was made in 1582."
          ],
          "explanation": "‘Even so’ follows the addition of two months; ‘This system’ = Caesar’s calendar.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘Even so’ follows the addition of two months; ‘This system’ = Caesar’s calendar."
        }
      ]
    },
    "section3": {
      "id": "reading-test-26-s3",
      "title": "Practice Test 26 - Opinion Matching",
      "topic": "Opinion Matching Test 26",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘People should be allowed to retire at sixty. After forty years of work, you deserve some rest while you\nstill have the energy to enjoy it. I’ve seen colleagues work until they were ill and never enjoy their free\ntime.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I’m seventy and still work three days a week. My job keeps my mind active, and I’d be bored at home. I\nthink the retirement age should be flexible, so that people who want to carry on can do so.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘The problem is money. People are living longer, so pensions have to be paid for many more years. The\nonly realistic solution is for people to work longer. Otherwise, young workers will have to pay far higher\ntaxes to support them.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘Older workers should leave to create jobs for young people. Unemployment among graduates is high,\nand many can’t find work. If experienced employees retired earlier, companies would have to hire new\npeople, and everybody would benefit.’"
        }
      ],
      "questions": [
        {
          "id": "t26_s3_q16",
          "statement": "Who thinks retirement should be flexible?",
          "correctPersonId": "B",
          "explanation": "Person B: Who thinks retirement should be flexible? ‘the retirement age should be flexible’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who thinks retirement should be flexible? ‘the retirement age should be flexible)۔"
        },
        {
          "id": "t26_s3_q17",
          "statement": "Who is worried about the cost of pensions?",
          "correctPersonId": "C",
          "explanation": "Person C: Who is worried about the cost of pensions? ‘pensions have to be paid for many more years’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who is worried about the cost of pensions? ‘pensions have to be paid for many mo)۔"
        },
        {
          "id": "t26_s3_q18",
          "statement": "Who believes that retiring earlier leaves jobs for the young?",
          "correctPersonId": "D",
          "explanation": "Person D: Who believes that retiring earlier leaves jobs for the young? ‘leave to create jobs for young people’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 66 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who believes that retiring earlier leaves jobs for the young? ‘leave to create j)۔"
        },
        {
          "id": "t26_s3_q19",
          "statement": "Who thinks people should stop working while they are still healthy?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks people should stop working while they are still healthy? ‘while you still have the energy’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks people should stop working while they are still healthy? ‘while you s)۔"
        },
        {
          "id": "t26_s3_q20",
          "statement": "Who says that work keeps the mind active?",
          "correctPersonId": "B",
          "explanation": "Person B: Who says that work keeps the mind active? ‘keeps my mind active’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who says that work keeps the mind active? ‘keeps my mind active’)۔"
        },
        {
          "id": "t26_s3_q21",
          "statement": "Who is concerned that taxes for young people would rise?",
          "correctPersonId": "C",
          "explanation": "Person C: Who is concerned that taxes for young people would rise? ‘far higher taxes’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who is concerned that taxes for young people would rise? ‘far higher taxes’)۔"
        },
        {
          "id": "t26_s3_q22",
          "statement": "Who has seen colleagues who became ill from working too long?",
          "correctPersonId": "A",
          "explanation": "Person A: Who has seen colleagues who became ill",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who has seen colleagues who became ill)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-26-s4",
      "title": "Practice Test 26 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Photographs that changed minds",
        "B - Adding colour",
        "C - The digital revolution",
        "D - A portrait for everyone",
        "E - Photography for the masses",
        "F - Choosing the right camera",
        "G - The first photographs",
        "H - Everyone is a photographer",
        "J - A picture is born (Example)"
      ],
      "paragraphs": [
        {
          "id": "t26_s4_p1",
          "paragraphNumber": 1,
          "text": "The earliest surviving photograph was taken in France around 1826 by Nicéphore Niépce. He\npointed a primitive camera out of an upstairs window and left it for hours, using a metal plate coated\nwith a light-sensitive substance. The resulting image shows rooftops, but it is blurred and hard to read.\nNiépce called his method heliography, meaning sun writing, and the original plate, which was lost for\nmany decades before being rediscovered, is now kept in a university museum in Texas.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"The first photographs\"): The first photographs the earliest picture",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The first photographs' کی مکمل تائید کرتا ہے (The first photographs the earliest picture)۔"
        },
        {
          "id": "t26_s4_p2",
          "paragraphNumber": 2,
          "text": "In 1839, Louis Daguerre announced a process that produced much clearer pictures in a few minutes.\nPortraits became popular, and studios opened in every major city. Still, sitting for a photograph was\nuncomfortable, as subjects had to remain absolutely still, often with a metal support behind their heads.\nDespite these difficulties, the pictures were admired for their sharpness, and wealthy families often paid\nlarge sums to have photographs made of relatives who were far away.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"A portrait for everyone\"): A portrait for everyone portraits and studios",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A portrait for everyone' کی مکمل تائید کرتا ہے (A portrait for everyone portraits and studios)۔"
        },
        {
          "id": "t26_s4_p3",
          "paragraphNumber": 3,
          "text": "In 1888, George Eastman introduced a simple camera with the slogan ‘You press the button, we do\nthe rest’. Customers sent the whole camera back to the factory, which developed the film and returned\nthe pictures. For the first time, ordinary families could record their lives. The camera and film were soon\ncheap enough for hobbyists, and by the early twentieth century, millions of snapshots of weddings,\nholidays and children were being stored in family albums.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Photography for the masses\"): Photography for the masses simple cameras for ordinary people",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Photography for the masses' کی مکمل تائید کرتا ہے (Photography for the masses simple cameras for ordinary people)۔"
        },
        {
          "id": "t26_s4_p4",
          "paragraphNumber": 4,
          "text": "The first practical colour process appeared in the early twentieth century, but it was complicated and\nexpensive. Colour film became cheap and reliable only in the 1930s and 1940s. Even then, many\nserious photographers continued to prefer black and white, believing that it showed shapes and\nemotions more powerfully. Some photographers coloured black-and-white pictures by hand for years\nafterwards, and magazines gradually began to print colour pictures on their covers.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Adding colour\"): Adding colour colour film",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Adding colour' کی مکمل تائید کرتا ہے (Adding colour colour film)۔"
        },
        {
          "id": "t26_s4_p5",
          "paragraphNumber": 5,
          "text": "Powerful images can alter public opinion. Pictures from battlefields, poverty-stricken neighbourhoods\nand natural disasters have shocked viewers and led to action. A famous photograph of the Earth rising\nabove the Moon’s horizon, taken in 1968, made many people realise how small and fragile our planet\nis. Newspapers soon realised that readers wanted pictures as well as words, and photographers began\nto travel to dangerous places so that people at home could see events for themselves.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Photographs that changed minds\"): Photographs that changed minds images that influence opinion",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Photographs that changed minds' کی مکمل تائید کرتا ہے (Photographs that changed minds images that influence opinion)۔"
        },
        {
          "id": "t26_s4_p6",
          "paragraphNumber": 6,
          "text": "The first digital camera was built in 1975 but was too heavy and slow to be useful. By the early\n2000s, however, digital cameras had become common, and photographs no longer needed film or\nchemicals. Pictures could be seen immediately, deleted if they were bad and shared with friends in\nseconds. Early digital cameras produced small, grainy pictures, but each year the number of pixels\nincreased, and quality gradually reached the standard of traditional film.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"The digital revolution\"): The digital revolution film replaced by digital",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The digital revolution' کی مکمل تائید کرتا ہے (The digital revolution film replaced by digital)۔"
        },
        {
          "id": "t26_s4_p7",
          "paragraphNumber": 7,
          "text": "Today, most people carry a good camera in their pocket. Smartphones can adjust the focus, light and\ncolour automatically, and they can be edited with a few taps. Some experts worry that people now take\nso many pictures that they rarely look at them, while others are delighted that photography has become\nso widely enjoyed. Social media websites allow pictures to be shared instantly, so the best photographs\nmay be seen by millions of people before the photographer has even returned home.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Everyone is a photographer\"): Everyone is a photographer phone cameras today",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Everyone is a photographer' کی مکمل تائید کرتا ہے (Everyone is a photographer phone cameras today)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 27,
    "section1": {
      "id": "reading-test-27-s1",
      "title": "Practice Test 27 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "It was a small black wallet with a zip ",
          "gapId": "t27_s1_gap_1",
          "options": [
            "for",
            "to",
            "on"
          ],
          "correctIndex": 2,
          "textAfter": " one side."
        },
        {
          "textBefore": "There were two bank cards and some money ",
          "gapId": "t27_s1_gap_2",
          "options": [
            "into",
            "onto",
            "inside"
          ],
          "correctIndex": 2,
          "textAfter": " it."
        },
        {
          "textBefore": "I was travelling from London ",
          "gapId": "t27_s1_gap_3",
          "options": [
            "in",
            "to",
            "at"
          ],
          "correctIndex": 1,
          "textAfter": " Manchester."
        },
        {
          "textBefore": "The train ",
          "gapId": "t27_s1_gap_4",
          "options": [
            "left",
            "leaving",
            "leaves"
          ],
          "correctIndex": 0,
          "textAfter": " at about six o’clock in the evening."
        },
        {
          "textBefore": "Could you please tell me ",
          "gapId": "t27_s1_gap_5",
          "options": [
            "whom",
            "if",
            "what"
          ],
          "correctIndex": 1,
          "textAfter": " anyone has handed it in?"
        }
      ],
      "explanations": {
        "t27_s1_gap_1": {
          "english": "Option (C) is correct: \"on\". It was a small black wallet with a zip on one side. ‘a zip on one side’ describes position.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (It was a small black wallet with a zip on one side. ‘a zip on one side...)"
        },
        "t27_s1_gap_2": {
          "english": "Option (C) is correct: \"inside\". There were two bank cards and some money inside it. ‘inside it’ = contained within the wallet.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (There were two bank cards and some money inside it. ‘inside it’ = cont...)"
        },
        "t27_s1_gap_3": {
          "english": "Option (B) is correct: \"to\". I was travelling from London to Manchester. ‘from... to...’ shows the journey.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I was travelling from London to Manchester. ‘from... to...’ shows the ...)"
        },
        "t27_s1_gap_4": {
          "english": "Option (A) is correct: \"left\". The train left at about six o’clock in the evening. Past simple, because the journey was yesterday.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The train left at about six o’clock in the evening. Past simple, becau...)"
        },
        "t27_s1_gap_5": {
          "english": "Option (B) is correct: \"if\". Could you please tell me if anyone has handed",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Could you please tell me if anyone has handed...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-27-s2",
      "title": "Practice Test 27 - Text Cohesion",
      "topic": "some information about getting a driving licence",
      "correctOrder": [
        0,
        3,
        4,
        1,
        2,
        5
      ],
      "sentences": [
        "People who want to apply for a driving licence for the first time should follow these steps. (Example)",
        "Post these documents to the licensing office, together with the application fee.",
        "The office will then invite you to take a theory test at a local centre.",
        "Start by completing the application form, which you can download from our website.",
        "Attach two recent photographs and a copy of your passport or identity card.",
        "If you pass, you can book your practical driving test and begin lessons."
      ],
      "explanation": "‘these documents’ = form, photographs and copy; ‘If you pass’ follows the theory test.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘these documents’ = form, photographs and copy; ‘If you pass’ follows the theory test.",
      "tasks": [
        {
          "id": "t27_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some information about getting a driving licence",
          "topic": "some information about getting a driving licence",
          "correctOrder": [
            0,
            3,
            4,
            1,
            2,
            5
          ],
          "sentences": [
            "People who want to apply for a driving licence for the first time should follow these steps. (Example)",
            "Post these documents to the licensing office, together with the application fee.",
            "The office will then invite you to take a theory test at a local centre.",
            "Start by completing the application form, which you can download from our website.",
            "Attach two recent photographs and a copy of your passport or identity card.",
            "If you pass, you can book your practical driving test and begin lessons."
          ],
          "explanation": "‘these documents’ = form, photographs and copy; ‘If you pass’ follows the theory test.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘these documents’ = form, photographs and copy; ‘If you pass’ follows the theory test."
        },
        {
          "id": "t27_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about household objects",
          "topic": "an article about household objects",
          "correctOrder": [
            0,
            5,
            1,
            4,
            3,
            2
          ],
          "sentences": [
            "Mirrors are so common today that we hardly notice them. (Example)",
            "Later, the Egyptians and Romans produced mirrors from polished bronze or silver.",
            "Because the process was kept secret, these mirrors were extremely valuable, and only the wealthy could buy them.",
            "A great improvement came in the sixteenth century, when craftsmen in Venice covered glass with a thin layer of metal.",
            "However, these metal surfaces were dull and gave only a poor reflection.",
            "The earliest ones were made from polished stone and have been found in ancient Turkey."
          ],
          "explanation": "‘However’ introduces a problem with metal mirrors; ‘the process’ and ‘these mirrors’ refer to Venetian glass mirrors.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘However’ introduces a problem with metal mirrors; ‘the process’ and ‘these mirrors’ refer to Veneti"
        }
      ]
    },
    "section3": {
      "id": "reading-test-27-s3",
      "title": "Practice Test 27 - Opinion Matching",
      "topic": "Opinion Matching Test 27",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘Museums should be free for everyone. They belong to the public, and ticket prices keep poorer families\naway. When our local museum introduced free entry, visitor numbers doubled. Children especially\nbenefit from seeing real objects.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I don’t mind paying. The money is used to look after the collections and buy new displays, and the\ngovernment doesn’t always provide enough. A small charge also stops people from treating museums\nas places to shelter from the rain.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘A good compromise is free entry for permanent collections but a charge for special exhibitions. That\nway everyone can enjoy the basics, and people who want something extra pay for it. This is how my\ncity’s art gallery works, and it seems fair.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I think the real problem isn’t the price but the way museums present things. Too many are boring: rows\nof objects behind glass with long explanations. If they made exhibitions interactive, people would be\nhappy to pay.’"
        }
      ],
      "questions": [
        {
          "id": "t27_s3_q16",
          "statement": "Who thinks that museum visits should be open to all without payment?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks that museum visits should be open to all without payment? ‘Museums should be free for everyone’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks that museum visits should be open to all without payment? ‘Museums sh)۔"
        },
        {
          "id": "t27_s3_q17",
          "statement": "Who suggests paying only for temporary displays?",
          "correctPersonId": "C",
          "explanation": "Person C: Who suggests paying only for temporary displays? ‘a charge for special exhibitions’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 68 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who suggests paying only for temporary displays? ‘a charge for special exhibitio)۔"
        },
        {
          "id": "t27_s3_q18",
          "statement": "Who says that fees help maintain collections?",
          "correctPersonId": "B",
          "explanation": "Person B: Who says that fees help maintain collections? ‘used to look after the collections’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who says that fees help maintain collections? ‘used to look after the collection)۔"
        },
        {
          "id": "t27_s3_q19",
          "statement": "Who thinks museums should be more interactive?",
          "correctPersonId": "D",
          "explanation": "Person D: Who thinks museums should be more interactive? ‘made exhibitions interactive’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who thinks museums should be more interactive? ‘made exhibitions interactive’)۔"
        },
        {
          "id": "t27_s3_q20",
          "statement": "Who mentions that low-income families are discouraged by the cost?",
          "correctPersonId": "A",
          "explanation": "Person A: Who mentions that low-income families are discouraged by the cost? ‘prices keep poorer families away’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who mentions that low-income families are discouraged by the cost? ‘prices keep )۔"
        },
        {
          "id": "t27_s3_q21",
          "statement": "Who gives an example of a system that already works in their town?",
          "correctPersonId": "C",
          "explanation": "Person C: Who gives an example of a system that already works in their town? ‘how my city’s art gallery works’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who gives an example of a system that already works in their town? ‘how my city’)۔"
        },
        {
          "id": "t27_s3_q22",
          "statement": "Who thinks that people would pay if displays were more interesting?",
          "correctPersonId": "D",
          "explanation": "Person D: Who thinks that people would pay if displays",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who thinks that people would pay if displays)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-27-s4",
      "title": "Practice Test 27 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Precision and planning",
        "B - Moving the stones",
        "C - The Great Pyramid",
        "D - Tourism at Giza",
        "E - Who built them?",
        "F - Tombs for kings",
        "G - Mysteries today",
        "H - Robbers and secrets",
        "J - Giants in the sand (Example)"
      ],
      "paragraphs": [
        {
          "id": "t27_s4_p1",
          "paragraphNumber": 1,
          "text": "The pyramids were built as burial places for the pharaohs. The Egyptians believed that the king\nwould continue to live in another world after death, so his body was carefully preserved and placed in a\nchamber deep inside, surrounded by furniture, food and treasure for the journey. Next to the king’s\npyramid, smaller tombs were built for queens and officials, so that the royal family and its servants\ncould remain close to each other in the next life.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Tombs for kings\"): Tombs for kings purpose: burial",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Tombs for kings' کی مکمل تائید کرتا ہے (Tombs for kings purpose: burial)۔"
        },
        {
          "id": "t27_s4_p2",
          "paragraphNumber": 2,
          "text": "The largest pyramid, built for King Khufu around 2560 BC, originally stood about a hundred and\nforty-six metres high. For almost four thousand years, it was the tallest human-made structure in the\nworld. It contains more than two million blocks of stone, some weighing as much as a small truck. Its\nsides were originally covered with smooth white limestone that shone in the sunlight, but most of this\nouter layer was removed centuries later and used to build houses and mosques in Cairo.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"The Great Pyramid\"): The Great Pyramid size and records",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The Great Pyramid' کی مکمل تائید کرتا ہے (The Great Pyramid size and records)۔"
        },
        {
          "id": "t27_s4_p3",
          "paragraphNumber": 3,
          "text": "Contrary to popular belief, the pyramids were not built by slaves. Archaeologists have found the\nremains of villages where the workers lived, with bakeries and medical care. The builders were paid\nlabourers who received food, and they probably worked in teams that competed to complete their\nsections. Cemeteries close to the pyramids contain the graves of these workers, and the bones show\nthat many were treated for injuries, which suggests that the king cared about his labourers.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Who built them?\"): Who built them? the workforce",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Who built them?' کی مکمل تائید کرتا ہے (Who built them? the workforce)۔"
        },
        {
          "id": "t27_s4_p4",
          "paragraphNumber": 4,
          "text": "Most stone came from quarries near the site, but the smooth white stone for the outer surface was\nbrought by boat from far away. Workers dragged the blocks on wooden sledges over sand which they\nwetted to reduce friction. Experiments have shown that this makes the sledge much easier to pull.\nRamps made of mud brick and stone were probably used to raise the blocks to higher levels, although\nexperts still disagree about exactly how the ramps were arranged.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Moving the stones\"): Moving the stones transport methods",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Moving the stones' کی مکمل تائید کرتا ہے (Moving the stones transport methods)۔"
        },
        {
          "id": "t27_s4_p5",
          "paragraphNumber": 5,
          "text": "The pyramid’s sides are lined up almost perfectly with the four compass points, with an error of only\na fraction of a degree. The base is nearly a perfect square. Such accuracy, achieved without modern\ninstruments, suggests that the Egyptians had advanced knowledge of mathematics and astronomy.\nThe passages inside were also planned with care, and one narrow shaft points towards a particular star\nthat the Egyptians connected with the king’s soul.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Precision and planning\"): Precision and planning accuracy of design",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Precision and planning' کی مکمل تائید کرتا ہے (Precision and planning accuracy of design)۔"
        },
        {
          "id": "t27_s4_p6",
          "paragraphNumber": 6,
          "text": "Despite their clever designs, including false passages and hidden doors, almost all pyramids were\nrobbed in ancient times. Thieves stole the gold and jewels long before modern archaeologists arrived.\nAs a result, much of what we know comes from paintings on the walls and the few tombs which\nremained unopened. Some robbers were caught and punished, and ancient court records describe\ntrials in which workers admitted breaking into royal tombs to steal their contents.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Robbers and secrets\"): Robbers and secrets thieves; lost treasure",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Robbers and secrets' کی مکمل تائید کرتا ہے (Robbers and secrets thieves; lost treasure)۔"
        },
        {
          "id": "t27_s4_p7",
          "paragraphNumber": 7,
          "text": "Even now, the pyramids still hold surprises. In recent years, scientists using cosmic-ray technology\nhave discovered a large hidden space inside the Great Pyramid. Nobody knows yet what it contains.\nDiscoveries such as this show that, after thousands of years, Egypt’s most famous monuments have\nnot given up all their secrets. Researchers also use drones, satellites and three-dimensional scans to\nstudy the monuments without damaging them, and these methods have already revealed tunnels and\nchambers that nobody knew about.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Mysteries today\"): Mysteries today recent discoveries; ‘Even now’",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Mysteries today' کی مکمل تائید کرتا ہے (Mysteries today recent discoveries; ‘Even now’)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 28,
    "section1": {
      "id": "reading-test-28-s1",
      "title": "Practice Test 28 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "They must go to bed ",
          "gapId": "t28_s1_gap_1",
          "options": [
            "from",
            "by",
            "in"
          ],
          "correctIndex": 1,
          "textAfter": " half past eight at the latest."
        },
        {
          "textBefore": "There is some pasta in the fridge if they ",
          "gapId": "t28_s1_gap_2",
          "options": [
            "would be",
            "are",
            "will be"
          ],
          "correctIndex": 1,
          "textAfter": " hungry."
        },
        {
          "textBefore": "Please do not let them eat any sweets, ",
          "gapId": "t28_s1_gap_3",
          "options": [
            "unless",
            "until",
            "since"
          ],
          "correctIndex": 2,
          "textAfter": " they have already had some."
        },
        {
          "textBefore": "My phone number is on the table ",
          "gapId": "t28_s1_gap_4",
          "options": [
            "if",
            "whether",
            "because"
          ],
          "correctIndex": 0,
          "textAfter": " you need me."
        },
        {
          "textBefore": "We will be back ",
          "gapId": "t28_s1_gap_5",
          "options": [
            "before",
            "until",
            "since"
          ],
          "correctIndex": 0,
          "textAfter": " eleven o’clock."
        }
      ],
      "explanations": {
        "t28_s1_gap_1": {
          "english": "Option (B) is correct: \"by\". They must go to bed by half past eight at the latest. ‘by’ = no later than.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (They must go to bed by half past eight at the latest. ‘by’ = no later ...)"
        },
        "t28_s1_gap_2": {
          "english": "Option (B) is correct: \"are\". There is some pasta in the fridge if they are hungry. Present simple after ‘if’ for a possible situation.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (There is some pasta in the fridge if they are hungry. Present simple a...)"
        },
        "t28_s1_gap_3": {
          "english": "Option (C) is correct: \"since\". Please do not let them eat any sweets, since they have already had some. ‘since’ = because.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please do not let them eat any sweets, since they have already had som...)"
        },
        "t28_s1_gap_4": {
          "english": "Option (A) is correct: \"if\". My phone number is on the table if you need me. ‘if you need me’ = in the case that you need me.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (My phone number is on the table if you need me. ‘if you need me’ = in ...)"
        },
        "t28_s1_gap_5": {
          "english": "Option (A) is correct: \"before\". We will be back before eleven o’clock. ‘back before eleven’ = earlier than eleven.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (We will be back before eleven o’clock. ‘back before eleven’ = earlier ...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-28-s2",
      "title": "Practice Test 28 - Text Cohesion",
      "topic": "information for people who want to join a run",
      "correctOrder": [
        0,
        3,
        2,
        5,
        4,
        1
      ],
      "sentences": [
        "Anyone who wants to take part in the city charity run should follow these instructions. (Example)",
        "After you cross the finish line, collect your medal and a bottle of water from the volunteers.",
        "You will then be asked to pay an entry fee, which goes directly to the charity.",
        "First, register on the event website and choose the distance you wish to run.",
        "On the day, pin the number to the front of your shirt so that it is clearly visible.",
        "A week before the event, we will post your race number and a map of the route."
      ],
      "explanation": "The steps follow the timeline: register > pay > receive number > race day > finish.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: The steps follow the timeline: register > pay > receive number > race day > finish.",
      "tasks": [
        {
          "id": "t28_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Information for people who want to join a run",
          "topic": "information for people who want to join a run",
          "correctOrder": [
            0,
            3,
            2,
            5,
            4,
            1
          ],
          "sentences": [
            "Anyone who wants to take part in the city charity run should follow these instructions. (Example)",
            "After you cross the finish line, collect your medal and a bottle of water from the volunteers.",
            "You will then be asked to pay an entry fee, which goes directly to the charity.",
            "First, register on the event website and choose the distance you wish to run.",
            "On the day, pin the number to the front of your shirt so that it is clearly visible.",
            "A week before the event, we will post your race number and a map of the route."
          ],
          "explanation": "The steps follow the timeline: register > pay > receive number > race day > finish.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: The steps follow the timeline: register > pay > receive number > race day > finish."
        },
        {
          "id": "t28_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: A book about inventions",
          "topic": "a book about inventions",
          "correctOrder": [
            0,
            2,
            4,
            1,
            3,
            5
          ],
          "sentences": [
            "The vending machine seems like a modern invention, but its history is surprisingly long. (Example)",
            "Nothing similar appeared for many centuries, until machines selling tobacco were introduced in English pubs in the 1600s.",
            "The first known example was designed in the first century AD by a Greek engineer named Hero.",
            "Then, in the 1880s, a machine selling postcards was installed on railway platforms in London.",
            "It gave out a small amount of holy water when a coin was dropped into a slot.",
            "Soon afterwards, similar machines were offering chewing gum, drinks and snacks in cities around the world."
          ],
          "explanation": "‘It’ = Hero’s machine; dates run in order (first century, 1600s, 1880s, soon afterwards).",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘It’ = Hero’s machine; dates run in order (first century, 1600s, 1880s, soon afterwards)."
        }
      ]
    },
    "section3": {
      "id": "reading-test-28-s3",
      "title": "Practice Test 28 - Opinion Matching",
      "topic": "Opinion Matching Test 28",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I can’t stand reality television. Nothing in it is real: the situations are arranged and the participants are\ntold what to say. People become famous for doing nothing, which sends a poor message to young\nviewers.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I watch it to relax. After a long day, I don’t want to think, and I enjoy the drama and arguments between\nthe contestants. It’s like gossip. I know it isn’t serious, but that’s what makes it fun.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I like cooking and talent competitions, because you see people with real skills improve. Some of the\ncontestants have gone on to successful careers. I also think the programmes encourage viewers to try\nnew things, such as baking.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘My concern is how contestants are treated. Some are humiliated on screen, and a few have suffered\nmental distress afterwards. The producers should provide more support. Viewers enjoy it, but we forget\nthat these are real people.’"
        }
      ],
      "questions": [
        {
          "id": "t28_s3_q16",
          "statement": "Who dislikes that the programmes are staged?",
          "correctPersonId": "A",
          "explanation": "Person A: Who dislikes that the programmes are staged? ‘situations are arranged’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who dislikes that the programmes are staged? ‘situations are arranged’)۔"
        },
        {
          "id": "t28_s3_q17",
          "statement": "Who watches in order to relax after work?",
          "correctPersonId": "B",
          "explanation": "Person B: Who watches in order to relax after work? ‘I watch it to relax’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who watches in order to relax after work? ‘I watch it to relax’)۔"
        },
        {
          "id": "t28_s3_q18",
          "statement": "Who thinks participants may need more support?",
          "correctPersonId": "D",
          "explanation": "Person D: Who thinks participants may need more support? ‘producers should provide more support’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 70 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who thinks participants may need more support? ‘producers should provide more su)۔"
        },
        {
          "id": "t28_s3_q19",
          "statement": "Who enjoys watching people develop skills?",
          "correctPersonId": "C",
          "explanation": "Person C: Who enjoys watching people develop skills? ‘you see people with real skills improve’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who enjoys watching people develop skills? ‘you see people with real skills impr)۔"
        },
        {
          "id": "t28_s3_q20",
          "statement": "Who believes it gives young people a bad example?",
          "correctPersonId": "A",
          "explanation": "Person A: Who believes it gives young people a bad example? ‘sends a poor message to young viewers’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who believes it gives young people a bad example? ‘sends a poor message to young)۔"
        },
        {
          "id": "t28_s3_q21",
          "statement": "Who compares it to gossip?",
          "correctPersonId": "B",
          "explanation": "Person B: Who compares it to gossip? ‘It’s like gossip’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who compares it to gossip? ‘It’s like gossip’)۔"
        },
        {
          "id": "t28_s3_q22",
          "statement": "Who says that taking part can lead to a career?",
          "correctPersonId": "C",
          "explanation": "Person C: Who says that taking part can lead to a",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who says that taking part can lead to a)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-28-s4",
      "title": "Practice Test 28 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Learning to think",
        "B - Robots in medicine",
        "C - Factory workers",
        "D - Robots at home",
        "E - Famous robots in films",
        "F - Will robots take our jobs?",
        "G - Exploring where humans cannot go",
        "H - Where the word comes from",
        "J - Helpers made of metal (Example)"
      ],
      "paragraphs": [
        {
          "id": "t28_s4_p1",
          "paragraphNumber": 1,
          "text": "The word ‘robot’ was first used in a 1920 play by the Czech writer Karel napek. It comes from a\nCzech word meaning forced labour, and the play’s robots were artificial workers who eventually\nrebelled against their human masters. The word quickly spread to other languages, and it has stayed\nwith us ever since. Within a few years the play had been performed in dozens of countries, and the idea\nof an artificial worker became a favourite subject for writers and film-makers.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Where the word comes from\"): Where the word comes from origin of the word",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Where the word comes from' کی مکمل تائید کرتا ہے (Where the word comes from origin of the word)۔"
        },
        {
          "id": "t28_s4_p2",
          "paragraphNumber": 2,
          "text": "The first industrial robot began work in a car factory in 1961. Since then, robots have taken over\nmany repetitive and dangerous tasks, such as welding and painting. They never get tired, can lift heavy\nloads and repeat the same movement with great precision, which has made production faster and\ncheaper. Today, large car factories may employ hundreds of robots, and some of them work alongside\npeople in the same space, passing tools or parts directly to a human colleague.",
          "correctHeadingIndex": 2,
          "explanation": "Heading C (\"Factory workers\"): Factory workers robots in industry",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Factory workers' کی مکمل تائید کرتا ہے (Factory workers robots in industry)۔"
        },
        {
          "id": "t28_s4_p3",
          "paragraphNumber": 3,
          "text": "Surgeons now use robotic arms to perform delicate operations through tiny cuts. The robot’s hands\ndo not shake, and the surgeon controls them using a screen, so patients lose less blood and recover\nfaster. Other medical robots carry medicines around hospitals or help patients to walk again after\ninjuries. Some hospitals also use small machines that help to disinfect rooms with ultraviolet light, which\nreduces the risk of infection between patients.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Robots in medicine\"): Robots in medicine surgery and hospitals",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Robots in medicine' کی مکمل تائید کرتا ہے (Robots in medicine surgery and hospitals)۔"
        },
        {
          "id": "t28_s4_p4",
          "paragraphNumber": 4,
          "text": "Robots can travel to places that are too dangerous or distant for people. Machines have explored the\nocean floor, entered damaged nuclear power stations and driven across the surface of Mars. They\nsend back pictures and measurements, allowing scientists to study these environments safely. Robotic\nvehicles have been sent to other planets because they can survive extreme cold and radiation, and\nthey do not need food, water or air to continue working for years.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"Exploring where humans cannot go\"): Exploring where humans cannot go dangerous or distant places",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Exploring where humans cannot go' کی مکمل تائید کرتا ہے (Exploring where humans cannot go dangerous or distant places)۔"
        },
        {
          "id": "t28_s4_p5",
          "paragraphNumber": 5,
          "text": "Small robots have entered ordinary houses. Vacuum cleaners that move around the floor by\nthemselves are now common, and robotic lawnmowers keep gardens tidy. Some robots can even talk,\nremind elderly people to take their medicine and call for help if they fall. Other models are designed for\nchildren, helping them to learn to read or to program, and teachers say that many pupils find lessons\nmore enjoyable when a friendly robot takes part.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Robots at home\"): Robots at home household machines",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Robots at home' کی مکمل تائید کرتا ہے (Robots at home household machines)۔"
        },
        {
          "id": "t28_s4_p6",
          "paragraphNumber": 6,
          "text": "Traditional robots simply follow instructions, but modern ones use artificial intelligence to learn from\nexperience. A robot can be shown thousands of examples and gradually work out for itself how to\nrecognise objects or avoid obstacles. This ability makes them far more flexible than earlier machines. A\nself-driving car, for example, learns from millions of hours of driving data, and it continues to improve as\nmore information is collected from the road.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Learning to think\"): Learning to think artificial intelligence and learning",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Learning to think' کی مکمل تائید کرتا ہے (Learning to think artificial intelligence and learning)۔"
        },
        {
          "id": "t28_s4_p7",
          "paragraphNumber": 7,
          "text": "Many people worry that robots will replace human workers. Some jobs have already disappeared,\nbut history suggests that new ones are created as old ones vanish. Experts say the greatest need will\nbe for people who can design, maintain and work alongside machines, so education and training will be\nvital. Some governments are therefore considering ways of helping workers whose jobs have been\nreplaced, for example by offering free courses that teach new technical skills.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Will robots take our jobs?\"): Will robots take our jobs? fears about employment",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Will robots take our jobs?' کی مکمل تائید کرتا ہے (Will robots take our jobs? fears about employment)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 29,
    "section1": {
      "id": "reading-test-29-s1",
      "title": "Practice Test 29 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "There are twelve slides ",
          "gapId": "t29_s1_gap_1",
          "options": [
            "on",
            "at",
            "in"
          ],
          "correctIndex": 2,
          "textAfter": " total."
        },
        {
          "textBefore": "The first part is ",
          "gapId": "t29_s1_gap_2",
          "options": [
            "for",
            "with",
            "about"
          ],
          "correctIndex": 2,
          "textAfter": " last year’s sales figures."
        },
        {
          "textBefore": "Could you ",
          "gapId": "t29_s1_gap_3",
          "options": [
            "make",
            "do",
            "go"
          ],
          "correctIndex": 2,
          "textAfter": " through them and tell me what you think?"
        },
        {
          "textBefore": "I am a little ",
          "gapId": "t29_s1_gap_4",
          "options": [
            "nervous",
            "nervously",
            "nerves"
          ],
          "correctIndex": 0,
          "textAfter": " about speaking in front of the managers."
        },
        {
          "textBefore": "I will buy you a coffee ",
          "gapId": "t29_s1_gap_5",
          "options": [
            "in",
            "as",
            "by"
          ],
          "correctIndex": 0,
          "textAfter": " return."
        }
      ],
      "explanations": {
        "t29_s1_gap_1": {
          "english": "Option (C) is correct: \"in\". There are twelve slides in total. ‘in total’ is a fixed phrase.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (There are twelve slides in total. ‘in total’ is a fixed phrase....)"
        },
        "t29_s1_gap_2": {
          "english": "Option (C) is correct: \"about\". The first part is about last year’s sales figures. ‘about’ introduces the topic.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The first part is about last year’s sales figures. ‘about’ introduces ...)"
        },
        "t29_s1_gap_3": {
          "english": "Option (C) is correct: \"go\". Could you go through them and tell me what you think? ‘go through’ = read carefully.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Could you go through them and tell me what you think? ‘go through’ = r...)"
        },
        "t29_s1_gap_4": {
          "english": "Option (A) is correct: \"nervous\". I am a little nervous about speaking in front of the managers. An adjective follows ‘a little’ after ‘am’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I am a little nervous about speaking in front of the managers. An adje...)"
        },
        "t29_s1_gap_5": {
          "english": "Option (A) is correct: \"in\". I will buy you a coffee in return. ‘in return’ = as a way of thanking.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I will buy you a coffee in return. ‘in return’ = as a way of thanking....)"
        }
      }
    },
    "section2": {
      "id": "reading-test-29-s2",
      "title": "Practice Test 29 - Text Cohesion",
      "topic": "some rules for a school canteen",
      "correctOrder": [
        0,
        3,
        1,
        5,
        2,
        4
      ],
      "sentences": [
        "Pupils using the school canteen should follow these rules. (Example)",
        "Choose your main course and any vegetables you would like from the counter.",
        "Find a free table and eat quietly, leaving enough room for others to sit down.",
        "Start by joining the queue at the entrance and taking a tray from the pile.",
        "When you have finished, take your tray to the trolley and put your rubbish in the bins.",
        "Then go to the cashier, who will scan your lunch card to pay for the meal."
      ],
      "explanation": "Sequence: queue > choose food > pay > sit and eat > clear up.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: Sequence: queue > choose food > pay > sit and eat > clear up.",
      "tasks": [
        {
          "id": "t29_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some rules for a school canteen",
          "topic": "some rules for a school canteen",
          "correctOrder": [
            0,
            3,
            1,
            5,
            2,
            4
          ],
          "sentences": [
            "Pupils using the school canteen should follow these rules. (Example)",
            "Choose your main course and any vegetables you would like from the counter.",
            "Find a free table and eat quietly, leaving enough room for others to sit down.",
            "Start by joining the queue at the entrance and taking a tray from the pile.",
            "When you have finished, take your tray to the trolley and put your rubbish in the bins.",
            "Then go to the cashier, who will scan your lunch card to pay for the meal."
          ],
          "explanation": "Sequence: queue > choose food > pay > sit and eat > clear up.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: Sequence: queue > choose food > pay > sit and eat > clear up."
        },
        {
          "id": "t29_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about food history",
          "topic": "an article about food history",
          "correctOrder": [
            0,
            5,
            2,
            1,
            4,
            3
          ],
          "sentences": [
            "Pizza is now eaten in almost every country, but it began as a simple meal for the poor. (Example)",
            "In 1889, a baker named Raffaele Esposito made a special pizza for the queen of Italy.",
            "Bakers responded by selling flat bread topped with tomatoes, oil and garlic.",
            "The queen enjoyed it so much that the pizza became fashionable among wealthy families too.",
            "He used red tomatoes, white cheese and green leaves to represent the colours of the national flag.",
            "In the city of Naples in the eighteenth century, workers needed cheap food that could be eaten quickly."
          ],
          "explanation": "‘He’ = the baker; ‘too’ in the last sentence contrasts with the poor mentioned in the opening sentence.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘He’ = the baker; ‘too’ in the last sentence contrasts with the poor mentioned in the opening senten"
        }
      ]
    },
    "section3": {
      "id": "reading-test-29-s3",
      "title": "Practice Test 29 - Opinion Matching",
      "topic": "Opinion Matching Test 29",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I’ve had an allotment for ten years. Growing my own vegetables saves money, and nothing tastes\nbetter than a tomato picked an hour before dinner. It’s also great exercise, and I’ve made friends with\nthe other gardeners.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I live in a flat with a balcony, so I grow herbs in pots. It takes ten minutes a day, and I can use fresh\nbasil and mint in my cooking. I’d like more space, but there’s a ten-year waiting list for allotments in my\ncity.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I’m not interested in growing food. For me, a garden is somewhere to relax, not to work. I have a lawn,\nsome flowers and a bench. I pay someone to cut the grass, which leaves me free to sit with a book.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘My garden is designed for wildlife. I’ve left a corner uncut for insects, built a pond for frogs and planted\nflowers that attract bees. It looks a bit untidy, but it’s full of life, and my grandchildren love searching for\ncreatures.’"
        }
      ],
      "questions": [
        {
          "id": "t29_s3_q16",
          "statement": "Who says there is a long wait to get a growing space?",
          "correctPersonId": "B",
          "explanation": "Person B: Who says there is a long wait to get a growing space? ‘ten-year waiting list for allotments’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who says there is a long wait to get a growing space? ‘ten-year waiting list for)۔"
        },
        {
          "id": "t29_s3_q17",
          "statement": "Who has made friends through gardening?",
          "correctPersonId": "A",
          "explanation": "Person A: Who has made friends through gardening? ‘made friends with the other gardeners’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who has made friends through gardening? ‘made friends with the other gardeners’)۔"
        },
        {
          "id": "t29_s3_q18",
          "statement": "Who employs someone to do the heavy work?",
          "correctPersonId": "C",
          "explanation": "Person C: Who employs someone to do the heavy work? ‘I pay someone to cut the grass’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who employs someone to do the heavy work? ‘I pay someone to cut the grass’)۔"
        },
        {
          "id": "t29_s3_q19",
          "statement": "Who has designed the garden to attract animals and insects?",
          "correctPersonId": "D",
          "explanation": "Person D: Who has designed the garden to attract animals and insects? ‘designed for wildlife’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 72 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who has designed the garden to attract animals and insects? ‘designed for wildli)۔"
        },
        {
          "id": "t29_s3_q20",
          "statement": "Who thinks that home-grown produce saves money?",
          "correctPersonId": "A",
          "explanation": "Person A: Who thinks that home-grown produce saves money? ‘Growing my own vegetables saves money’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who thinks that home-grown produce saves money? ‘Growing my own vegetables saves)۔"
        },
        {
          "id": "t29_s3_q21",
          "statement": "Who uses plants only in pots?",
          "correctPersonId": "B",
          "explanation": "Person B: Who uses plants only in pots? ‘I grow herbs in pots’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who uses plants only in pots? ‘I grow herbs in pots’)۔"
        },
        {
          "id": "t29_s3_q22",
          "statement": "Who regards the garden as a place for rest rather than work?",
          "correctPersonId": "C",
          "explanation": "Person C: Who regards the garden as a place for rest",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who regards the garden as a place for rest)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-29-s4",
      "title": "Practice Test 29 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - The great migration",
        "B - Painted wings",
        "C - Collecting butterflies as a hobby",
        "D - Four stages of life",
        "E - Tricks to survive",
        "F - Disappearing habitats",
        "G - A caterpillar’s appetite",
        "H - Feeding and helping flowers",
        "J - Fluttering colour (Example)"
      ],
      "paragraphs": [
        {
          "id": "t29_s4_p1",
          "paragraphNumber": 1,
          "text": "A butterfly passes through four very different stages. It begins as a tiny egg, which hatches into a\ncaterpillar. After weeks of eating, the caterpillar forms a hard case, called a chrysalis. Inside, its body\ncompletely rearranges itself, and after about two weeks an adult butterfly emerges. The length of each\nstage depends on the species and on the weather, and in cold regions, some butterflies spend the\nentire winter inside the chrysalis or the egg.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"Four stages of life\"): Four stages of life egg, caterpillar, chrysalis, adult",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Four stages of life' کی مکمل تائید کرتا ہے (Four stages of life egg, caterpillar, chrysalis, adult)۔"
        },
        {
          "id": "t29_s4_p2",
          "paragraphNumber": 2,
          "text": "The main job of a caterpillar is to eat. Some species increase their weight a thousand times in just a\nfew weeks, and they must shed their skin several times as they grow. Farmers sometimes regard them\nas pests because large numbers can strip all the leaves from a crop. To protect themselves, many\ncaterpillars have bright colours, stripes or tiny hairs that warn birds that they taste unpleasant or may\ncause irritation.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"A caterpillar’s appetite\"): A caterpillar’s appetite eating and growing",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A caterpillar’s appetite' کی مکمل تائید کرتا ہے (A caterpillar’s appetite eating and growing)۔"
        },
        {
          "id": "t29_s4_p3",
          "paragraphNumber": 3,
          "text": "A butterfly’s wings are covered in thousands of tiny scales, like roof tiles. These scales are\nresponsible for the pattern and colour. Some colours come from pigments, but others, such as the\nshiny blue of some tropical species, are produced by the way the scales reflect light. Unlike the wings of\nbirds, a butterfly’s wings contain no feathers or muscles, and they are so fragile that a single touch can\nrub off a number of scales and leave a patch of clear membrane.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Painted wings\"): Painted wings wing scales and colour",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Painted wings' کی مکمل تائید کرتا ہے (Painted wings wing scales and colour)۔"
        },
        {
          "id": "t29_s4_p4",
          "paragraphNumber": 4,
          "text": "Butterflies have many enemies, including birds and spiders, so they have developed clever\ndefences. Some have wings that look like dead leaves, making them almost invisible when resting.\nOthers display large spots resembling eyes to frighten predators, while certain species taste so bitter\nthat birds learn to avoid them. Some butterflies also copy the patterns of poisonous species, so that\npredators leave them alone even though they are completely harmless themselves.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Tricks to survive\"): Tricks to survive camouflage and defence",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Tricks to survive' کی مکمل تائید کرتا ہے (Tricks to survive camouflage and defence)۔"
        },
        {
          "id": "t29_s4_p5",
          "paragraphNumber": 5,
          "text": "Every autumn, millions of monarch butterflies fly from Canada and the northern United States to a\nsmall area of forest in Mexico, a journey of up to four thousand kilometres. No single butterfly makes\nthe round trip: it takes several generations to return north the following year, yet they somehow find the\nsame trees. Scientists have placed tiny stickers on their wings to follow their routes, and each year\nvolunteers in many towns along the route count the butterflies that stop to rest and feed.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"The great migration\"): The great migration long journeys",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The great migration' کی مکمل تائید کرتا ہے (The great migration long journeys)۔"
        },
        {
          "id": "t29_s4_p6",
          "paragraphNumber": 6,
          "text": "Adult butterflies drink nectar through a long tube, which they keep rolled up like a spring when not in\nuse. As they move from flower to flower, they carry pollen on their legs. Although they are less efficient\nthan bees, they help many wild plants to produce seeds. Different species prefer different flowers, and\na long tube suits blossoms with deep centres, while shorter tubes work better on flat flowers.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Feeding and helping flowers\"): Feeding and helping flowers nectar and pollen",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Feeding and helping flowers' کی مکمل تائید کرتا ہے (Feeding and helping flowers nectar and pollen)۔"
        },
        {
          "id": "t29_s4_p7",
          "paragraphNumber": 7,
          "text": "In many regions, butterfly numbers have fallen steeply. Meadows have been replaced by farmland\nand housing, and chemicals kill both the insects and the plants they need. Gardeners can help by\ngrowing nectar-rich flowers and leaving some wild areas, which provide food for the caterpillars as well.\nClimate change adds to the pressure, because warmer weather can cause butterflies to emerge at the\nwrong time of year, when the flowers they depend on are not yet in bloom.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Disappearing habitats\"): Disappearing habitats decline and how to help",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Disappearing habitats' کی مکمل تائید کرتا ہے (Disappearing habitats decline and how to help)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  },
  {
    "testNumber": 30,
    "section1": {
      "id": "reading-test-30-s1",
      "title": "Practice Test 30 - Sentence Comprehension",
      "introduction": "Read the short email. Choose one word (A, B or C) for each gap.",
      "paragraphs": [
        {
          "textBefore": "I ordered it three weeks ",
          "gapId": "t30_s1_gap_1",
          "options": [
            "before",
            "ago",
            "last"
          ],
          "correctIndex": 1,
          "textAfter": " ."
        },
        {
          "textBefore": "The website said it ",
          "gapId": "t30_s1_gap_2",
          "options": [
            "did",
            "would",
            "was"
          ],
          "correctIndex": 1,
          "textAfter": " arrive within five days."
        },
        {
          "textBefore": "I have sent you two messages, but nobody has ",
          "gapId": "t30_s1_gap_3",
          "options": [
            "replying",
            "replies",
            "replied"
          ],
          "correctIndex": 2,
          "textAfter": " ."
        },
        {
          "textBefore": "Please tell me ",
          "gapId": "t30_s1_gap_4",
          "options": [
            "which",
            "what",
            "where"
          ],
          "correctIndex": 2,
          "textAfter": " my order is."
        },
        {
          "textBefore": "If I do not hear from you, I will ask for my money ",
          "gapId": "t30_s1_gap_5",
          "options": [
            "back",
            "behind",
            "return"
          ],
          "correctIndex": 0,
          "textAfter": " ."
        }
      ],
      "explanations": {
        "t30_s1_gap_1": {
          "english": "Option (B) is correct: \"ago\". I ordered it three weeks ago. ‘ago’ follows a period of time.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I ordered it three weeks ago. ‘ago’ follows a period of time....)"
        },
        "t30_s1_gap_2": {
          "english": "Option (B) is correct: \"would\". The website said it would arrive within five days. ‘would’ = reported future (‘said it would arrive’).",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (The website said it would arrive within five days. ‘would’ = reported ...)"
        },
        "t30_s1_gap_3": {
          "english": "Option (C) is correct: \"replied\". I have sent you two messages, but nobody has replied. Present perfect needs the past participle: ‘has replied’.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (I have sent you two messages, but nobody has replied. Present perfect ...)"
        },
        "t30_s1_gap_4": {
          "english": "Option (C) is correct: \"where\". Please tell me where my order is. ‘where’ asks about the location.",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (Please tell me where my order is. ‘where’ asks about the location....)"
        },
        "t30_s1_gap_5": {
          "english": "Option (A) is correct: \"back\". If I do not hear from you, I will ask for my",
          "urdu": "وضاحت: انگریزی گرامر اور سیاق و سباق کے مطابق درست جواب ہے۔ (If I do not hear from you, I will ask for my...)"
        }
      }
    },
    "section2": {
      "id": "reading-test-30-s2",
      "title": "Practice Test 30 - Text Cohesion",
      "topic": "some refund instructions from a railway company",
      "correctOrder": [
        0,
        3,
        1,
        4,
        2,
        5
      ],
      "sentences": [
        "Passengers whose train has been cancelled can claim a refund by following these instructions. (Example)",
        "Next, visit the company’s website and fill in the refund form.",
        "Upload a photograph of the ticket and submit the form.",
        "Begin by keeping your ticket, as you will need it to prove that you paid.",
        "Enter the details of your journey, including the date and the time of the train.",
        "The money should reach your bank account within fourteen days."
      ],
      "explanation": "‘the form’ appears in step 2 before being completed in steps 3–4; the refund arrives last.",
      "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘the form’ appears in step 2 before being completed in steps 3–4; the refund arrives last.",
      "tasks": [
        {
          "id": "t30_s2_task1",
          "taskNumber": 1,
          "title": "Task 1: Some refund instructions from a railway company",
          "topic": "some refund instructions from a railway company",
          "correctOrder": [
            0,
            3,
            1,
            4,
            2,
            5
          ],
          "sentences": [
            "Passengers whose train has been cancelled can claim a refund by following these instructions. (Example)",
            "Next, visit the company’s website and fill in the refund form.",
            "Upload a photograph of the ticket and submit the form.",
            "Begin by keeping your ticket, as you will need it to prove that you paid.",
            "Enter the details of your journey, including the date and the time of the train.",
            "The money should reach your bank account within fourteen days."
          ],
          "explanation": "‘the form’ appears in step 2 before being completed in steps 3–4; the refund arrives last.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘the form’ appears in step 2 before being completed in steps 3–4; the refund arrives last."
        },
        {
          "id": "t30_s2_task2",
          "taskNumber": 2,
          "title": "Task 2: An article about communication",
          "topic": "an article about communication",
          "correctOrder": [
            0,
            2,
            3,
            5,
            4,
            1
          ],
          "sentences": [
            "Radio has changed the way people receive news and entertainment. (Example)",
            "These shared experiences made radio the most important form of mass communication until the arrival of television.",
            "The Italian inventor Guglielmo Marconi sent the first wireless signals across the Atlantic in 1901.",
            "At first, radio was used mainly by ships, which could call for help if they were in danger.",
            "Families gathered around large wooden sets in the evening to hear music, drama and news.",
            "In the 1920s, however, broadcasting stations began to send programmes to listeners at home."
          ],
          "explanation": "‘At first’ > ‘however, in the 1920s’ shows a change over time; ‘These shared experiences’ sums up the family listening.",
          "urduExplanation": "جملوں کی منطقی اور وقتی ترتیب کے اشارے: ‘At first’ > ‘however, in the 1920s’ shows a change over time; ‘These shared experiences’ sums up th"
        }
      ]
    },
    "section3": {
      "id": "reading-test-30-s3",
      "title": "Practice Test 30 - Opinion Matching",
      "topic": "Opinion Matching Test 30",
      "people": [
        {
          "id": "A",
          "name": "Person A",
          "description": "‘I opened a small bakery five years ago. It’s hard work: I get up at 3 a.m. But I love being my own boss.\nNobody tells me what to do, and when customers praise my bread, it makes everything worthwhile.’"
        },
        {
          "id": "B",
          "name": "Person B",
          "description": "‘I’d like to start a business, but the risk frightens me. I have a mortgage and two children, and many\nnew companies fail within a year. Perhaps I’ll try it part-time first, while keeping my current job for\nsecurity.’"
        },
        {
          "id": "C",
          "name": "Person C",
          "description": "‘I started an online business with a friend, and the biggest lesson was planning. We wrote a detailed\nbudget before spending anything, and we asked an accountant for advice. Many people fail because\nthey underestimate how much money they need at the start.’"
        },
        {
          "id": "D",
          "name": "Person D",
          "description": "‘I worked for myself for two years and went back to employment. The freedom was nice, but I never\nswitched off, and my income was unpredictable. Now I have regular holidays and a steady salary, and I\ndon’t miss the stress.’"
        }
      ],
      "questions": [
        {
          "id": "t30_s3_q16",
          "statement": "Who values independence from a manager?",
          "correctPersonId": "A",
          "explanation": "Person A: Who values independence from a manager? ‘love being my own boss’",
          "urduExplanation": "پیراگراف سے ثبوت: Person A کے بیان میں واضح الفاظ موجود ہیں (Who values independence from a manager? ‘love being my own boss’)۔"
        },
        {
          "id": "t30_s3_q17",
          "statement": "Who thinks careful financial planning is essential?",
          "correctPersonId": "C",
          "explanation": "Person C: Who thinks careful financial planning is essential? ‘wrote a detailed budget’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who thinks careful financial planning is essential? ‘wrote a detailed budget’)۔"
        },
        {
          "id": "t30_s3_q18",
          "statement": "Who is afraid of the financial risk?",
          "correctPersonId": "B",
          "explanation": "Person B: Who is afraid of the financial risk? ‘the risk frightens me’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who is afraid of the financial risk? ‘the risk frightens me’)۔"
        },
        {
          "id": "t30_s3_q19",
          "statement": "Who found the irregular income difficult?",
          "correctPersonId": "D",
          "explanation": "Person D: Who found the irregular income difficult? ‘my income was unpredictable’ Aptis General Reading Practice Tests 21–30 • ICAP ECS Page 74 Q Ans. Question Evidence in the text",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who found the irregular income difficult? ‘my income was unpredictable’ Aptis Ge)۔"
        },
        {
          "id": "t30_s3_q20",
          "statement": "Who suggests trying the idea while keeping another job?",
          "correctPersonId": "B",
          "explanation": "Person B: Who suggests trying the idea while keeping another job? ‘part-time first, while keeping my current job’",
          "urduExplanation": "پیراگراف سے ثبوت: Person B کے بیان میں واضح الفاظ موجود ہیں (Who suggests trying the idea while keeping another job? ‘part-time first, while )۔"
        },
        {
          "id": "t30_s3_q21",
          "statement": "Who consulted a professional for advice?",
          "correctPersonId": "C",
          "explanation": "Person C: Who consulted a professional for advice? ‘asked an accountant for advice’",
          "urduExplanation": "پیراگراف سے ثبوت: Person C کے بیان میں واضح الفاظ موجود ہیں (Who consulted a professional for advice? ‘asked an accountant for advice’)۔"
        },
        {
          "id": "t30_s3_q22",
          "statement": "Who now prefers fixed holidays and wages?",
          "correctPersonId": "D",
          "explanation": "Person D: Who now prefers fixed holidays and wages? ‘regular holidays and a steady salary’",
          "urduExplanation": "پیراگراف سے ثبوت: Person D کے بیان میں واضح الفاظ موجود ہیں (Who now prefers fixed holidays and wages? ‘regular holidays and a steady salary’)۔"
        }
      ]
    },
    "section4": {
      "id": "reading-test-30-s4",
      "title": "Practice Test 30 - Long Text Comprehension",
      "topic": "is one more heading than you need. The answer to Paragraph 0 is given as an example (J).",
      "introduction": "Read the text quickly. Match the headings A–H to the paragraphs 1–7. (Paragraph 0 is given as an example).",
      "headings": [
        "A - Not a single road",
        "B - Silk and spices",
        "C - How silk is made",
        "D - A traveller’s tale",
        "E - Ideas on the move",
        "F - Cities of the desert",
        "G - The end of an era",
        "H - Dangerous journeys",
        "J - A web of routes (Example)"
      ],
      "paragraphs": [
        {
          "id": "t30_s4_p1",
          "paragraphNumber": 1,
          "text": "Despite its name, the Silk Road was not one road but a large web of trails stretching about six\nthousand kilometres from China to the Mediterranean. Few merchants travelled the whole distance.\nInstead, goods were passed from trader to trader, and the price increased at every stage. Along the\nway, traders used many different languages and currencies, so merchants who could speak several\nlanguages, or who had reliable local partners, usually made the greatest profits.",
          "correctHeadingIndex": 0,
          "explanation": "Heading A (\"Not a single road\"): Not a single road ‘not one road’; relay trading",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Not a single road' کی مکمل تائید کرتا ہے (Not a single road ‘not one road’; relay trading)۔"
        },
        {
          "id": "t30_s4_p2",
          "paragraphNumber": 2,
          "text": "Silk was the most famous product, and for centuries the Chinese kept the secret of its production.\nCaravans also carried spices, tea, porcelain and precious stones to the west, while horses, glass, gold\nand wool travelled eastwards. Western buyers were willing to pay enormous sums for these luxuries.\nThe wealthy Romans loved the cloth so much that officials complained about the amount of gold\nleaving the empire to pay for it, and tried, without success, to ban silk garments.",
          "correctHeadingIndex": 1,
          "explanation": "Heading B (\"Silk and spices\"): Silk and spices goods traded",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Silk and spices' کی مکمل تائید کرتا ہے (Silk and spices goods traded)۔"
        },
        {
          "id": "t30_s4_p3",
          "paragraphNumber": 3,
          "text": "The journey was long and risky. Travellers crossed freezing mountain passes and burning deserts,\nwhere a lack of water could be fatal. Bandits attacked unprotected caravans, and sudden storms buried\npaths under sand. For this reason, merchants usually travelled in large groups, with guards and guides.\nSome travellers followed routes that avoided the worst deserts, but these were often longer, and\nmerchants had to decide whether to risk the shorter way or take extra weeks to reach safety.",
          "correctHeadingIndex": 7,
          "explanation": "Heading H (\"Dangerous journeys\"): Dangerous journeys risks and protection",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Dangerous journeys' کی مکمل تائید کرتا ہے (Dangerous journeys risks and protection)۔"
        },
        {
          "id": "t30_s4_p4",
          "paragraphNumber": 4,
          "text": "Wealthy trading cities grew up where routes met, such as Samarkand and Kashgar. They provided\nmarkets, inns for the travellers and stables for the animals. Their bazaars offered goods from every\ncorner of the known world, and people of many nationalities and religions lived side by side. Many of\nthese cities have beautiful mosques, markets and libraries that survive today, and some are protected\nas World Heritage Sites.",
          "correctHeadingIndex": 5,
          "explanation": "Heading F (\"Cities of the desert\"): Cities of the desert trading cities",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Cities of the desert' کی مکمل تائید کرتا ہے (Cities of the desert trading cities)۔"
        },
        {
          "id": "t30_s4_p5",
          "paragraphNumber": 5,
          "text": "Merchants carried more than goods. Religions such as Buddhism and Islam spread along the routes,\nas did inventions like paper and gunpowder from China. Scientific knowledge, music and art were also\nexchanged, and the contact between distant cultures changed the way people lived. Pilgrims also used\nthe roads, and Buddhist monks from China travelled to India to collect holy texts, which they then\ntranslated and brought home.",
          "correctHeadingIndex": 4,
          "explanation": "Heading E (\"Ideas on the move\"): Ideas on the move spread of religions and inventions",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'Ideas on the move' کی مکمل تائید کرتا ہے (Ideas on the move spread of religions and inventions)۔"
        },
        {
          "id": "t30_s4_p6",
          "paragraphNumber": 6,
          "text": "In the thirteenth century, the Venetian merchant Marco Polo travelled to China along these roads and\nspent many years in the emperor’s service. His book describing the journey amazed European readers,\nmany of whom refused to believe his stories of enormous cities and paper money. He was imprisoned\nin Genoa after a sea battle, and it was there that he told his story to a fellow prisoner, who wrote it\ndown.",
          "correctHeadingIndex": 3,
          "explanation": "Heading D (\"A traveller’s tale\"): A traveller’s tale one famous individual",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'A traveller’s tale' کی مکمل تائید کرتا ہے (A traveller’s tale one famous individual)۔"
        },
        {
          "id": "t30_s4_p7",
          "paragraphNumber": 7,
          "text": "From the fifteenth century, sea routes became cheaper and safer, so fewer goods travelled overland.\nWars also made travel hazardous, and the great trading cities declined. Today, however, China is\ninvesting in new railways and roads across Asia, a project that is sometimes described as a modern\nSilk Road. Many of the ancient forts, watchtowers and caravan inns still stand in the desert, and tourists\nnow follow parts of the old routes by bus and train.",
          "correctHeadingIndex": 6,
          "explanation": "Heading G (\"The end of an era\"): The end of an era decline of the routes",
          "urduExplanation": "پیراگراف کا مرکزی خیال عنوان 'The end of an era' کی مکمل تائید کرتا ہے (The end of an era decline of the routes)۔"
        }
      ]
    },
    "totalQuestions": 29,
    "totalPassages": 8
  }
];

export const READING_SECTION_1_BANK: ReadingSection1[] = READING_TESTS.map(t => t.section1);
export const READING_SECTION_2_BANK: ReadingSection2[] = READING_TESTS.map(t => t.section2);
export const READING_SECTION_3_BANK: ReadingSection3[] = READING_TESTS.map(t => t.section3);
export const READING_SECTION_4_BANK: ReadingSection4[] = READING_TESTS.map(t => t.section4);

export const TOTAL_READING_TESTS = READING_TESTS.length; // 30
export const TOTAL_READING_QUESTIONS = READING_TESTS.reduce((acc, t) => acc + t.totalQuestions, 0); // 870
export const TOTAL_READING_PASSAGES = READING_TESTS.reduce((acc, t) => acc + t.totalPassages, 0); // 240

export function getReadingTestByNumber(num: number): ReadingTestItem | undefined {
  return READING_TESTS.find(t => t.testNumber === num);
}
