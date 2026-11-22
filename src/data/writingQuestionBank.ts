// ICAP ECS Exam System - Official Writing Question Bank
// Extracted and verified from official "ICAP ECS Writing portion Questions.pdf"
// Total: 35 Complete Writing Practice Tests (140 parts, 385 prompts)
// Booklets:
// - Tests 1-10: Easy to Challenging, with Official B2 Model Answers (Pages 1-33)
// - Tests 11-20: Continuation tests with identical task structure & word limits (Pages 34-55)
// - Tests 21-35: Continuation tests with identical task structure & word limits (Pages 56-87)

import { AptisWritingModule } from '../types';

export interface WritingMarkingGuide {
  part1: {
    maxWords: number;
    criteria: string[];
  };
  part2: {
    minWords: number;
    maxWords: number;
    criteria: string[];
  };
  part3: {
    minWords: number;
    maxWords: number;
    criteria: string[];
  };
  part4: {
    taskA: {
      recipient: string;
      minWords: number;
      maxWords: number;
      register: string;
      criteria: string[];
      usefulPhrases: string[];
    };
    taskB: {
      recipient: string;
      minWords: number;
      maxWords: number;
      register: string;
      criteria: string[];
      usefulPhrases: string[];
    };
  };
  cefrBands: {
    band: string;
    description: string;
  }[];
}

export const WRITING_MARKING_GUIDE: WritingMarkingGuide = {
  part1: {
    maxWords: 5,
    criteria: [
      'Every answer is 1–5 words and answers the question asked.',
      'Spelling is correct (a single word or phrase is enough; no full essay).'
    ]
  },
  part2: {
    minWords: 20,
    maxWords: 30,
    criteria: [
      '20–30 words, written in complete sentences.',
      'Answers the form question directly.',
      'Uses at least one linking word (because, and, also).'
    ]
  },
  part3: {
    minWords: 30,
    maxWords: 40,
    criteria: [
      'Each answer is 30–40 words and replies to the person\'s exact question.',
      'Uses a friendly, natural tone with correct grammar.',
      'Gives a reason or an example in every answer.'
    ]
  },
  part4: {
    taskA: {
      recipient: 'Friend (Informal email)',
      minWords: 40,
      maxWords: 60,
      register: 'Informal / Casual',
      criteria: [
        'About 50 words (40–60 words).',
        'Informal tone (contractions, Hi/Best wishes, exclamation marks allowed).',
        'States your feelings clearly.',
        'Says what the club should do or which option you prefer.'
      ],
      usefulPhrases: [
        'Hi Sara, / Hey Tom,',
        'I\'m really upset / annoyed / excited that...',
        'I think they should...',
        'What do you think?',
        'Write soon, / Best wishes,'
      ]
    },
    taskB: {
      recipient: 'Club Official / Authority (Formal email)',
      minWords: 120,
      maxWords: 150,
      register: 'Formal / Professional',
      criteria: [
        '120–150 words with a clear opening and closing (Dear..., Yours sincerely).',
        'Formal tone: no contractions, no slang, polite phrases (I would like to suggest...).',
        'States feelings, makes a clear recommendation and gives at least two reasons.',
        'Uses linking words (firstly, however, therefore, moreover, in addition).',
        'Is clearly different in style from the friend email – this is what earns the top bands.'
      ],
      usefulPhrases: [
        'Dear Club Manager, / Dear Secretary,',
        'I am writing to express my concern / disappointment about...',
        'I would like to recommend / suggest...',
        'Firstly, ... Moreover, ... However, ...',
        'I would be grateful if you could consider...',
        'Yours sincerely,'
      ]
    }
  },
  cefrBands: [
    { band: 'B2', description: 'Can write clear, detailed texts on a variety of subjects. Can express feelings and opinions with effective arguments, clear tone differentiation (formal vs informal), and accurate grammar/cohesion.' },
    { band: 'B1', description: 'Can write straightforward connected text on topics of personal interest, expressing personal opinions and feelings with adequate vocabulary and basic linking words.' },
    { band: 'A2', description: 'Can write simple phrases and sentences about self, family, and routine activities with basic vocabulary and simple conjunctions.' },
    { band: 'A1', description: 'Can write short, isolated words and basic personal details.' }
  ]
};

export const WRITING_TESTS: AptisWritingModule[] = [
  {
    "themeName": "Cooking Club",
    "part1": {
      "id": "w_t1_p1",
      "context": "You want to join the Cooking Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t1_p1_q1",
          "prompt": "What do you usually eat for breakfast?",
          "maxWords": 5,
          "sampleAnswer": "Rice and eggs."
        },
        {
          "id": "w_t1_p1_q2",
          "prompt": "What is your favourite food?",
          "maxWords": 5,
          "sampleAnswer": "Chicken biryani."
        },
        {
          "id": "w_t1_p1_q3",
          "prompt": "Who cooks at your home?",
          "maxWords": 5,
          "sampleAnswer": "My mother does."
        },
        {
          "id": "w_t1_p1_q4",
          "prompt": "What is your favourite drink?",
          "maxWords": 5,
          "sampleAnswer": "Fresh orange juice."
        },
        {
          "id": "w_t1_p1_q5",
          "prompt": "Where do you buy food?",
          "maxWords": 5,
          "sampleAnswer": "The local market."
        }
      ]
    },
    "part2": {
      "id": "w_t1_p2",
      "formName": "Cooking Club Application Form",
      "prompt": "Please tell us why you want to join the Cooking Club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to join because I love cooking and learning new recipes. I also hope to meet friendly people who enjoy food and share their favourite dishes."
    },
    "part3": {
      "id": "w_t1_p3",
      "clubName": "Cooking Club",
      "context": "You are communicating online with other members of the Cooking Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t1_p3_m1",
          "memberName": "Sam",
          "avatarInitials": "SA",
          "message": "Hi! Welcome to the club. What dishes can you cook?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I can cook simple dishes like rice, omelettes and vegetable curry. I learned them from my mother when I was fifteen. I am not very confident with desserts yet, so I hope to improve."
        },
        {
          "id": "w_t1_p3_m2",
          "memberName": "Maria",
          "avatarInitials": "MA",
          "message": "Welcome! Who taught you to cook?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "My grandmother taught me to cook. She always made traditional meals on Sundays, and I helped her in the kitchen. I learned a lot by watching her, and I still use her recipes today."
        },
        {
          "id": "w_t1_p3_m3",
          "memberName": "Ahmed",
          "avatarInitials": "AH",
          "message": "Hello! What would you like to learn at the club?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I would like to learn how to bake bread and cakes because I have never tried it. I also want to cook healthier meals, so I hope the club will teach us some easy recipes."
        }
      ]
    },
    "part4": {
      "id": "w_t1_p4",
      "clubName": "Cooking Club",
      "contextNotice": "Dear Member,\nWe are writing to tell you that our weekly cooking class will move from Friday evening to Saturday morning from\nnext month. The famous chef Ms Laura Bennett will teach the first class on Saturday. Members who cannot\nattend on Saturday should contact the club manager.\nThe Club Secretary",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Jenny,\nI've just read that our cooking class is moving to Saturday morning. I'm a bit disappointed because I like sleeping\nlate at weekends! However, it might suit members who work on Fridays. I think the club should ask everyone which\nday they prefer before deciding.\nWrite soon,\nAli"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\nI am writing about the change of our cooking class from Friday evening to Saturday morning. I was surprised when I\nread your email, and I must say I am a little worried.\nI understand that Ms Bennett can only teach on Saturdays, and I am very happy that such a famous chef will visit\nour club. However, many members work on Saturday mornings, and some of them may not be able to come. I would\ntherefore like to suggest that the club offers two sessions, one on Saturday morning and another on Friday evening.\nAlternatively, you could record the class so that absent members can watch it later.\nI would be grateful if you could consider my suggestion. Please let me know what the committee decides.\nYours sincerely,\nRavi Khan"
      }
    }
  },
  {
    "themeName": "Book Club",
    "part1": {
      "id": "w_t2_p1",
      "context": "You want to join the Book Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t2_p1_q1",
          "prompt": "What time do you wake up?",
          "maxWords": 5,
          "sampleAnswer": "At six o'clock."
        },
        {
          "id": "w_t2_p1_q2",
          "prompt": "What kind of books do you like?",
          "maxWords": 5,
          "sampleAnswer": "Adventure stories."
        },
        {
          "id": "w_t2_p1_q3",
          "prompt": "How do you get to the shops?",
          "maxWords": 5,
          "sampleAnswer": "I walk."
        },
        {
          "id": "w_t2_p1_q4",
          "prompt": "What did you eat for lunch?",
          "maxWords": 5,
          "sampleAnswer": "Rice and vegetables."
        },
        {
          "id": "w_t2_p1_q5",
          "prompt": "Who is your best friend?",
          "maxWords": 5,
          "sampleAnswer": "My neighbour, Ali."
        }
      ]
    },
    "part2": {
      "id": "w_t2_p2",
      "formName": "Book Club Application Form",
      "prompt": "Please tell us about your favourite book.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "My favourite book is about a boy who travels across a desert. I like it because it is exciting and shows that being brave is important."
    },
    "part3": {
      "id": "w_t2_p3",
      "clubName": "Book Club",
      "context": "You are communicating online with other members of the Book Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t2_p3_m1",
          "memberName": "Tom",
          "avatarInitials": "TO",
          "message": "Hi! Welcome to the club. How often do you read?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I read almost every day, usually for about thirty minutes before bed. At weekends I sometimes read for two hours if the book is interesting. Reading helps me relax after a long day at work."
        },
        {
          "id": "w_t2_p3_m2",
          "memberName": "Priya",
          "avatarInitials": "PR",
          "message": "Hello! Do you prefer paper books or e-books? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I prefer paper books because I like the smell and feel of the pages. E-books are useful when I travel, but my eyes get tired quickly when I read on a screen for a long time."
        },
        {
          "id": "w_t2_p3_m3",
          "memberName": "Jack",
          "avatarInitials": "JA",
          "message": "Welcome! Which book would you recommend to a new reader?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I would recommend a short adventure novel with a simple story, such as Treasure Island. It is easy to follow, and new readers can enjoy it without getting bored or confused."
        }
      ]
    },
    "part4": {
      "id": "w_t2_p4",
      "clubName": "Book Club",
      "contextNotice": "Dear Member,\nWe are sorry to tell you that the public library will be closed for repairs for six months. Our monthly meetings will\ntherefore take place in the Greenfield Café on the second Saturday of each month. The café is smaller than the\nlibrary, so we may have to limit the number of members at each meeting. If you have any problems with the new\narrangement, please contact the club secretary.\nThe Chairperson",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Nadia,\nDid you read the email about the book club? I feel a bit sad because the library is such a quiet and peaceful place. A\ncafé might be noisy and too small for us all. I think the club should look for another quiet room, maybe at the school.\nLove,\nRina"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Secretary,\nI am writing about the move of our monthly meetings from the library to the Greenfield Café. I understand that the\nlibrary must close for repairs, and I am grateful that you found a new place so quickly.\nHowever, I am slightly worried about the noise in a café, which may make our discussions difficult. I am also\nconcerned that limiting the number of members could leave some people out. Perhaps the club could ask the\ncommunity centre or a local school whether we could use a quiet room instead. If the café is the only choice, we\ncould split the club into two groups that meet on different Saturdays.\nThank you for your hard work. I hope you will consider these ideas.\nYours sincerely,\nMaria Lopez"
      }
    }
  },
  {
    "themeName": "Gardening Club",
    "part1": {
      "id": "w_t3_p1",
      "context": "You want to join the Gardening Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t3_p1_q1",
          "prompt": "What is your favourite flower?",
          "maxWords": 5,
          "sampleAnswer": "Red roses."
        },
        {
          "id": "w_t3_p1_q2",
          "prompt": "What is the weather like in summer?",
          "maxWords": 5,
          "sampleAnswer": "Very hot."
        },
        {
          "id": "w_t3_p1_q3",
          "prompt": "Do you have a garden?",
          "maxWords": 5,
          "sampleAnswer": "Yes, a small one."
        },
        {
          "id": "w_t3_p1_q4",
          "prompt": "What did you do last weekend?",
          "maxWords": 5,
          "sampleAnswer": "Visited my cousins."
        },
        {
          "id": "w_t3_p1_q5",
          "prompt": "What time do you go to bed?",
          "maxWords": 5,
          "sampleAnswer": "About eleven o'clock."
        }
      ]
    },
    "part2": {
      "id": "w_t3_p2",
      "formName": "Gardening Club Application Form",
      "prompt": "Please tell us what you hope to learn at the Gardening Club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to join because I love plants and would like to grow my own vegetables. I also hope to learn how to look after flowers properly."
    },
    "part3": {
      "id": "w_t3_p3",
      "clubName": "Gardening Club",
      "context": "You are communicating online with other members of the Gardening Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t3_p3_m1",
          "memberName": "Helen",
          "avatarInitials": "HE",
          "message": "Hi! Welcome to the club. What plants grow in your country?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Many tropical plants grow in my country because the weather is warm. Mango trees, jasmine and bananas are very common. In my area, almost every house has a few plants or fruit trees outside."
        },
        {
          "id": "w_t3_p3_m2",
          "memberName": "Raj",
          "avatarInitials": "RA",
          "message": "Hello! Can you describe your home or garden?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "My home is a small flat with a balcony. I keep a few pots there with herbs and flowers. It is not big, but it is a lovely place to drink tea in the evening."
        },
        {
          "id": "w_t3_p3_m3",
          "memberName": "Lucy",
          "avatarInitials": "LU",
          "message": "Welcome! What do you like doing outdoors at weekends?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "At weekends I like walking in the park and cycling by the river. Sometimes I have picnics with my family. I enjoy being outside because it makes me feel fresh and happy."
        }
      ]
    },
    "part4": {
      "id": "w_t3_p4",
      "clubName": "Gardening Club",
      "contextNotice": "Dear Member,\nWe regret to inform you that the town council has closed Riverside Park for the next year, so our annual plant\nsale cannot take place there. The sale will be held in the small school hall instead, and there will be space for only\nten stalls instead of thirty. Members who would like a stall must register with the club treasurer by Friday.\nThe Club Secretary",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Chloe,\nHave you heard that the plant sale is moving to the school hall? I'm quite upset because it's always been my\nfavourite day of the year. Only ten stalls is too few! I think the club should find a bigger place, like a church garden.\nShall we register together?\nBye,\nTom"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Secretary,\nI am writing about the annual plant sale. I was sorry to learn that Riverside Park is closed, because the sale is the\nhighlight of our year. I understand that you have found the school hall, and I thank you for your quick action.\nHowever, ten stalls will not be enough for all our members. Fewer stalls will mean fewer visitors and less money for\nthe club. I would like to suggest asking the council for another outdoor space, such as the market square.\nAlternatively, we could hold two smaller sales on different weekends so that every member has a chance to sell.\nI would be glad to help with advertising or setting up the stalls. Please let me know how I can register for a stall.\nYours sincerely,\nHassan Raza"
      }
    }
  },
  {
    "themeName": "History Club",
    "part1": {
      "id": "w_t4_p1",
      "context": "You want to join the History Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t4_p1_q1",
          "prompt": "What is your favourite school subject?",
          "maxWords": 5,
          "sampleAnswer": "History."
        },
        {
          "id": "w_t4_p1_q2",
          "prompt": "Which old building do you like?",
          "maxWords": 5,
          "sampleAnswer": "The old fort."
        },
        {
          "id": "w_t4_p1_q3",
          "prompt": "How do you spend your evenings?",
          "maxWords": 5,
          "sampleAnswer": "Watching TV, studying."
        },
        {
          "id": "w_t4_p1_q4",
          "prompt": "What did you do last summer?",
          "maxWords": 5,
          "sampleAnswer": "Visited my grandparents."
        },
        {
          "id": "w_t4_p1_q5",
          "prompt": "What kind of music do you like?",
          "maxWords": 5,
          "sampleAnswer": "Pop and classical."
        }
      ]
    },
    "part2": {
      "id": "w_t4_p2",
      "formName": "History Club Application Form",
      "prompt": "Please tell us why you are interested in history.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I am interested in history because it helps me understand how our world became the way it is. I also enjoy visiting old buildings and museums."
    },
    "part3": {
      "id": "w_t4_p3",
      "clubName": "History Club",
      "context": "You are communicating online with other members of the History Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t4_p3_m1",
          "memberName": "Daniel",
          "avatarInitials": "DA",
          "message": "Hi! Welcome to the club. Which period in history do you find the most interesting? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I find the Mughal period fascinating because of its architecture, art and powerful rulers. When I visit old forts and tombs, I can almost imagine what life was like. I would love to learn more about daily life then."
        },
        {
          "id": "w_t4_p3_m2",
          "memberName": "Sofia",
          "avatarInitials": "SO",
          "message": "Welcome! Is there a historical place near your home? What is it like?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "There is an old fort about ten kilometres from my home. It is built of red stone and has high walls and a large garden inside. Many families visit it at weekends, and it looks wonderful at sunset."
        },
        {
          "id": "w_t4_p3_m3",
          "memberName": "Karim",
          "avatarInitials": "KA",
          "message": "Hello! How do you think young people can learn more about history?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I think young people learn best by doing things, not only by reading books. School trips, films, museum games and local events could make history more exciting. If lessons are fun, students will remember them much longer."
        }
      ]
    },
    "part4": {
      "id": "w_t4_p4",
      "clubName": "History Club",
      "contextNotice": "Dear Member,\nWe regret to tell you that the number of members in the History Club has fallen sharply over the last two years.\nThe committee believes that we need a new project to attract more people. We are considering two ideas: a\nhistorical exhibition in the town hall, with video games that let visitors experience important events, or a street\nparade through the town centre involving students from local schools. Please let us know your views.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two projects you personally prefer. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Zara,\nDid you see the email from our History Club? I'm sad that so few people are joining. Personally, I prefer the\nexhibition with video games, because teenagers love gaming and it would make history exciting. The parade sounds\nfun too, but it needs a lot of organisation. What do you think?\nBest,\nImran"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two projects and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\nThank you for your email about the falling number of members. I was sorry to hear this, as the History Club has\nalways been important to me.\nAfter thinking carefully about both ideas, I would strongly recommend the historical exhibition with video games.\nFirstly, young people spend a lot of time on computers and phones, so games would attract them immediately.\nSecondly, an exhibition can run for several weeks, which means more visitors than a single parade could reach.\nFinally, it would be easier and safer to organise, because we would not need permission to close streets or worry\nabout the weather.\nThe parade is a lovely idea, but it could be a second project next year. I would be very happy to help prepare the\nexhibition.\nYours sincerely,\nSana Ali"
      }
    }
  },
  {
    "themeName": "Cycling Club",
    "part1": {
      "id": "w_t5_p1",
      "context": "You want to join the Cycling Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t5_p1_q1",
          "prompt": "How do you travel to work or school?",
          "maxWords": 5,
          "sampleAnswer": "By bicycle."
        },
        {
          "id": "w_t5_p1_q2",
          "prompt": "What is your favourite season?",
          "maxWords": 5,
          "sampleAnswer": "Autumn."
        },
        {
          "id": "w_t5_p1_q3",
          "prompt": "What do you carry in your bag?",
          "maxWords": 5,
          "sampleAnswer": "Water, phone, keys."
        },
        {
          "id": "w_t5_p1_q4",
          "prompt": "Where did you go yesterday?",
          "maxWords": 5,
          "sampleAnswer": "To the market."
        },
        {
          "id": "w_t5_p1_q5",
          "prompt": "Which sport do you watch on TV?",
          "maxWords": 5,
          "sampleAnswer": "Cricket."
        }
      ]
    },
    "part2": {
      "id": "w_t5_p2",
      "formName": "Cycling Club Application Form",
      "prompt": "Please tell us about your cycling experience and why you want to join.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I have cycled to college for three years and I enjoy it. I want to join the club to ride longer distances and make new friends."
    },
    "part3": {
      "id": "w_t5_p3",
      "clubName": "Cycling Club",
      "context": "You are communicating online with other members of the Cycling Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t5_p3_m1",
          "memberName": "Chris",
          "avatarInitials": "CH",
          "message": "Hi! Welcome to the club. How often do you exercise, and what do you do?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I try to exercise four times a week. I usually go cycling or jogging in the morning before work. On Saturdays I play football with my friends, which is great fun and keeps me fit."
        },
        {
          "id": "w_t5_p3_m2",
          "memberName": "Anna",
          "avatarInitials": "AN",
          "message": "Hello! What is the best place for cycling in your area?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "The best place near me is the canal path outside the city. It is flat, quiet and has beautiful views of fields and trees. There are no cars there, so it feels very safe."
        },
        {
          "id": "w_t5_p3_m3",
          "memberName": "Omar",
          "avatarInitials": "OM",
          "message": "Welcome! What problems do cyclists face in cities, in your opinion?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I think the biggest problems are heavy traffic and a lack of cycle lanes. Drivers often do not notice cyclists, which is dangerous. Cities should build separate lanes and teach drivers to be more careful."
        }
      ]
    },
    "part4": {
      "id": "w_t5_p4",
      "clubName": "Cycling Club",
      "contextNotice": "Dear Member,\nFollowing two accidents last month, the committee has decided to introduce new safety rules. From the first of\nnext month, all members must wear helmets and high-visibility jackets, which can be bought through the club for\nthirty pounds. In addition, our Sunday rides will be shortened from sixty to thirty kilometres. If you have any\ncomments, please contact the chairperson.\nThe Committee",
      "recipientTitle": "The chairperson",
      "recipientName": "The chairperson",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Dan,\nHave you seen the new rules? I understand that safety matters, but I'm annoyed about spending thirty pounds on\nequipment, and thirty kilometres is far too short for a Sunday ride. I think the club should offer cheaper helmets and\nkeep one long ride every month. What do you think?\nMark"
      },
      "taskB": {
        "prompt": "Write an email to the chairperson. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Chairperson,\nI am writing about the new safety rules. I was shocked to hear about last month's accidents, and I agree that\nsomething must be done to protect members. However, I have some concerns.\nFirst, thirty pounds is expensive for students and retired members, so I suggest that the club offers discounts or lets\nmembers use their own equipment if it meets safety standards. Second, reducing the Sunday rides to thirty\nkilometres will disappoint experienced cyclists. Perhaps we could organise two groups: a short ride for beginners\nand a longer one for experienced members, led by a trained guide.\nI believe these changes would keep everyone safe while keeping the club popular. Thank you for considering my\nsuggestions.\nYours sincerely,\nOlivia Grant"
      }
    }
  },
  {
    "themeName": "Photography Club",
    "part1": {
      "id": "w_t6_p1",
      "context": "You want to join the Photography Club. You have 5 messages from a member of the club. Write short\nanswers (1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t6_p1_q1",
          "prompt": "What do you do in your free time?",
          "maxWords": 5,
          "sampleAnswer": "Reading and walking."
        },
        {
          "id": "w_t6_p1_q2",
          "prompt": "What is your favourite colour?",
          "maxWords": 5,
          "sampleAnswer": "Dark green."
        },
        {
          "id": "w_t6_p1_q3",
          "prompt": "Who do you take photos of?",
          "maxWords": 5,
          "sampleAnswer": "Family and friends."
        },
        {
          "id": "w_t6_p1_q4",
          "prompt": "What did you do yesterday evening?",
          "maxWords": 5,
          "sampleAnswer": "Studied at home."
        },
        {
          "id": "w_t6_p1_q5",
          "prompt": "How do you listen to music?",
          "maxWords": 5,
          "sampleAnswer": "On my phone."
        }
      ]
    },
    "part2": {
      "id": "w_t6_p2",
      "formName": "Photography Club Application Form",
      "prompt": "Please tell us why you are interested in photography.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I became interested in photography when my uncle gave me his old camera. I enjoy capturing beautiful moments and showing people how I see the world."
    },
    "part3": {
      "id": "w_t6_p3",
      "clubName": "Photography Club",
      "context": "You are communicating online with other members of the Photography Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t6_p3_m1",
          "memberName": "Emma",
          "avatarInitials": "EM",
          "message": "Hi! Welcome to the club. What do you usually photograph, and why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I mostly photograph landscapes and street scenes, because I love noticing small details that people usually ignore. Early morning light makes ordinary places look magical, so I often get up early at weekends to take pictures."
        },
        {
          "id": "w_t6_p3_m2",
          "memberName": "Luca",
          "avatarInitials": "LU",
          "message": "Welcome! Tell us about a photo that is special to you.",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "My favourite photo shows my grandfather holding my baby cousin at his seventieth birthday party. The picture is not perfect technically, but it reminds me of how proud and happy he looked that day."
        },
        {
          "id": "w_t6_p3_m3",
          "memberName": "Nadia",
          "avatarInitials": "NA",
          "message": "Hello! How has technology changed the way people take photos?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Technology has made photography much easier and faster. Everyone has a camera in their pocket, and editing apps can improve a photo in seconds. However, some people now take too many pictures and forget to enjoy the moment."
        }
      ]
    },
    "part4": {
      "id": "w_t6_p4",
      "clubName": "Photography Club",
      "contextNotice": "Dear Member,\nOver the last year, very few people under the age of twenty-five have joined the Photography Club, and the\naverage age of our members is now fifty-eight. To change this, the committee is considering two ideas: a public\nphotography exhibition in the city gallery, showing the best work of our members, or a photography competition\nbetween local schools, with prizes donated by camera shops. We would like to hear your opinion.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two ideas you personally prefer. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Sara,\nI'm worried about our Photography Club. Too few young people are joining. I prefer the school competition, because\nteenagers love competing and winning prizes. An exhibition would mainly attract older visitors. If the club goes\nahead, I'd like to help as a judge. Would you join me?\nBest wishes,\nKaren"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two ideas for attracting young people and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\nThank you for your email about attracting younger members. I was disappointed to learn that so few young people\nhave joined recently, so I am pleased that the committee is looking for solutions.\nAfter considering both ideas, I would like to recommend the school photography competition. Firstly, teenagers\nenjoy competing and winning prizes, which would motivate them to take part. Secondly, working through schools\nwould allow us to reach hundreds of students at once, whereas an exhibition would mainly attract people who\nalready like photography. Finally, the competition could finish with a small exhibition of the winning photographs, so\nwe would still show our members' work.\nI would be happy to help judge the entries or visit schools to explain the rules.\nYours sincerely,\nDaniel Wright"
      }
    }
  },
  {
    "themeName": "Film Club",
    "part1": {
      "id": "w_t7_p1",
      "context": "You want to join the Film Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t7_p1_q1",
          "prompt": "What is your favourite film?",
          "maxWords": 5,
          "sampleAnswer": "Titanic."
        },
        {
          "id": "w_t7_p1_q2",
          "prompt": "Who is your favourite actor?",
          "maxWords": 5,
          "sampleAnswer": "Tom Hanks."
        },
        {
          "id": "w_t7_p1_q3",
          "prompt": "Where do you usually watch films?",
          "maxWords": 5,
          "sampleAnswer": "At home."
        },
        {
          "id": "w_t7_p1_q4",
          "prompt": "What snack do you eat at the cinema?",
          "maxWords": 5,
          "sampleAnswer": "Popcorn."
        },
        {
          "id": "w_t7_p1_q5",
          "prompt": "When do you meet your friends?",
          "maxWords": 5,
          "sampleAnswer": "At weekends."
        }
      ]
    },
    "part2": {
      "id": "w_t7_p2",
      "formName": "Film Club Application Form",
      "prompt": "Please tell us why you want to join the Film Club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I enjoy comedies and detective films because they are fun and keep me guessing. I would like to join the club to discuss films with other fans."
    },
    "part3": {
      "id": "w_t7_p3",
      "clubName": "Film Club",
      "context": "You are communicating online with other members of the Film Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t7_p3_m1",
          "memberName": "Jake",
          "avatarInitials": "JA",
          "message": "Hi! Welcome to the club. What was the last film you watched? Did you enjoy it?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "The last film I watched was a science-fiction movie about space travel. I enjoyed it because the special effects were amazing, but the ending was a little confusing. I would still recommend it to others."
        },
        {
          "id": "w_t7_p3_m2",
          "memberName": "Mina",
          "avatarInitials": "MI",
          "message": "Hello! Do you prefer watching films at the cinema or at home? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I prefer the cinema because the screen is huge and the sound is excellent. It also feels like a special event. At home, I get distracted by my phone, so I cannot concentrate."
        },
        {
          "id": "w_t7_p3_m3",
          "memberName": "Paul",
          "avatarInitials": "PA",
          "message": "Welcome! Which film would you recommend to the club, and why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I would recommend Cinema Paradiso, an Italian film about a boy and an old projectionist. It is moving and beautiful, and it shows how much people love films. I think everyone would enjoy discussing it."
        }
      ]
    },
    "part4": {
      "id": "w_t7_p4",
      "clubName": "Film Club",
      "contextNotice": "Dear Member,\nUnfortunately, the Starlight Cinema, where we hold our monthly screenings, has increased its ticket price from\nfive pounds to nine pounds. This is a serious problem for our club. The committee is therefore thinking of moving\nthe screenings to the community centre, where we could use a projector for free, although the screen is smaller\nand the seats are less comfortable. Please tell us what you think.\nThe Club Secretary",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Jess,\nI'm really annoyed about the cinema raising its prices! Nine pounds is too much for a monthly film. I think moving to\nthe community centre is a sensible idea, even if the screen is small. At least the club would save money. Shall we go\nto the next meeting together?\nSam"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Secretary,\nI am writing about the rise in ticket prices at the Starlight Cinema. I was surprised and disappointed, since the\nmonthly screenings are the highlight of my month.\nNine pounds is quite expensive, and I fear that students and pensioners will stop coming. I understand that the\ncommunity centre is cheaper, but a small screen and uncomfortable seats would spoil the experience. My\nsuggestion is to ask the cinema for a group discount, because we bring regular customers. If it refuses, we could try\nthe community centre for a few months and see how members feel. We could also bring cushions and borrow a\nlarger screen from a school.\nThank you for your hard work.\nYours sincerely,\nPriya Shah"
      }
    }
  },
  {
    "themeName": "Language Exchange Club",
    "part1": {
      "id": "w_t8_p1",
      "context": "You want to join the Language Exchange Club. You have 5 messages from a member of the club. Write short\nanswers (1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t8_p1_q1",
          "prompt": "What languages do you speak?",
          "maxWords": 5,
          "sampleAnswer": "Urdu, English, Punjabi."
        },
        {
          "id": "w_t8_p1_q2",
          "prompt": "Why is learning English important?",
          "maxWords": 5,
          "sampleAnswer": "Better job opportunities."
        },
        {
          "id": "w_t8_p1_q3",
          "prompt": "How do you practise English?",
          "maxWords": 5,
          "sampleAnswer": "Watching English series."
        },
        {
          "id": "w_t8_p1_q4",
          "prompt": "What do you find difficult?",
          "maxWords": 5,
          "sampleAnswer": "Spelling and pronunciation."
        },
        {
          "id": "w_t8_p1_q5",
          "prompt": "Describe your hometown.",
          "maxWords": 5,
          "sampleAnswer": "Busy, friendly, crowded city."
        }
      ]
    },
    "part2": {
      "id": "w_t8_p2",
      "formName": "Language Exchange Club Application Form",
      "prompt": "Please explain why you want to join and what you can offer other members.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I would like to improve my spoken English by practising with other members. In return, I can help beginners learn Urdu and share information about my culture."
    },
    "part3": {
      "id": "w_t8_p3",
      "clubName": "Language Exchange Club",
      "context": "You are communicating online with other members of the Language Exchange Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t8_p3_m1",
          "memberName": "Elena",
          "avatarInitials": "EL",
          "message": "Hi! Welcome to the club. What are the biggest challenges of learning a new language as an adult?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I think the biggest challenge is finding time, because adults have jobs and families. Another difficulty is the fear of making mistakes in front of others. However, regular practice and a patient partner make learning much less stressful."
        },
        {
          "id": "w_t8_p3_m2",
          "memberName": "Hiro",
          "avatarInitials": "HI",
          "message": "Hello! How can learning a language change the way people see other cultures?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Learning a language shows you that people think and express ideas differently. When I started English, I discovered new humour and traditions. This made me more curious and more tolerant towards people from other countries."
        },
        {
          "id": "w_t8_p3_m3",
          "memberName": "Marta",
          "avatarInitials": "MA",
          "message": "Welcome! Do you think online apps can replace speaking with real people? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Apps are useful for vocabulary and grammar, but they cannot fully replace real conversation. Speaking with people teaches you natural expressions, accents and body language. Ideally, learners should combine both methods to make the fastest progress."
        }
      ]
    },
    "part4": {
      "id": "w_t8_p4",
      "clubName": "Language Exchange Club",
      "contextNotice": "Dear Member,\nAs you know, our weekly conversation sessions have always been free. However, the library has recently\nintroduced a charge for the meeting room, and the club can no longer pay it from its savings. The committee has\ntherefore proposed two alternatives: introducing a monthly membership fee of ten pounds, or reducing the\nsessions from weekly to monthly. We would welcome your views before the final decision is made.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two alternatives you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Lara,\nI've just read the club's email and I'm really worried. I'd rather pay ten pounds than meet only once a month,\nbecause speaking every week is the only way to improve. The fee is small compared with other classes. Which\noption would you choose?\nAhmed"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two alternatives and give reasons. You may also suggest how the club could reduce the negative effects. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\nThank you for explaining the difficult situation caused by the library's new charges. I was concerned to read that the\nclub may have to change, because the sessions have helped me enormously.\nAfter careful thought, I recommend introducing the monthly fee of ten pounds. Regular practice is essential in\nlanguage learning, and monthly meetings would make it very hard for members to remember vocabulary or build\nfriendships. Moreover, ten pounds is cheaper than most commercial courses, so the fee would still be good value.\nTo make it fairer, the club could offer reduced prices for students and unemployed members. I would also be glad to\nhelp find sponsors, such as local language schools, to reduce costs.\nYours sincerely,\nHira Malik"
      }
    }
  },
  {
    "themeName": "Hiking Club",
    "part1": {
      "id": "w_t9_p1",
      "context": "You want to join the Hiking Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t9_p1_q1",
          "prompt": "What do you do to relax?",
          "maxWords": 5,
          "sampleAnswer": "Walk in parks."
        },
        {
          "id": "w_t9_p1_q2",
          "prompt": "How do you feel in the mountains?",
          "maxWords": 5,
          "sampleAnswer": "Calm and free."
        },
        {
          "id": "w_t9_p1_q3",
          "prompt": "What should hikers carry?",
          "maxWords": 5,
          "sampleAnswer": "Water, snacks, first-aid kit."
        },
        {
          "id": "w_t9_p1_q4",
          "prompt": "Which place would you like to visit?",
          "maxWords": 5,
          "sampleAnswer": "Northern Pakistan."
        },
        {
          "id": "w_t9_p1_q5",
          "prompt": "Who do you usually travel with?",
          "maxWords": 5,
          "sampleAnswer": "My cousins."
        }
      ]
    },
    "part2": {
      "id": "w_t9_p2",
      "formName": "Hiking Club Application Form",
      "prompt": "Please describe your experience of the outdoors and what you hope to gain from the club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I have hiked in the northern mountains with my family several times. I would like to join the club to explore new trails safely and learn about nature."
    },
    "part3": {
      "id": "w_t9_p3",
      "clubName": "Hiking Club",
      "context": "You are communicating online with other members of the Hiking Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t9_p3_m1",
          "memberName": "Ben",
          "avatarInitials": "BE",
          "message": "Hi! Welcome to the club. Why do you think spending time in nature is good for people?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Nature gives us a break from noise, screens and stress. When people walk among trees, they breathe fresher air and feel calmer. Exercise outdoors also improves health, so I think nature benefits both mind and body."
        },
        {
          "id": "w_t9_p3_m2",
          "memberName": "Leila",
          "avatarInitials": "LE",
          "message": "Hello! Should tourists pay to enter natural places like national parks? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I think a small entrance fee is reasonable if the money is used to protect the park. Maintaining trails and cleaning rubbish is expensive. However, the fee should be low, so that families with little money can still enjoy nature."
        },
        {
          "id": "w_t9_p3_m3",
          "memberName": "Sven",
          "avatarInitials": "SV",
          "message": "Welcome! Tell us about a place in your country that needs protecting.",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "In my country, the northern wetlands need protecting. They are home to many rare birds, but building and pollution are damaging them. I think the government should limit development and teach children to value these special places."
        }
      ]
    },
    "part4": {
      "id": "w_t9_p4",
      "clubName": "Hiking Club",
      "contextNotice": "Dear Member,\nThe National Park authority has announced that, from March to June, large groups will not be allowed on Eagle\nRidge Trail, where birds nest in spring. Our club usually walks there with about forty members every month. We\nmust now either travel to trails further away, which would require hiring a minibus at an extra cost of fifteen\npounds per person, or divide into groups of ten members who may use the trail with a permit. Please share your\nopinion.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two options you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Max,\nDid you see the news about Eagle Ridge? I'm sad we can't go together, but I understand that the birds need\nprotection. I prefer the small groups, because a minibus is too expensive. We could even invite friends to form a\ngroup. Would you like to join mine?\nJon"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two options and give reasons. You may also suggest how the club could make it work. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\nI am writing in response to your email about Eagle Ridge Trail. I was disappointed that we cannot walk there as\nusual, but I fully support protecting nesting birds, which is something our club should care about.\nI would recommend dividing into groups of ten with permits. Firstly, the minibus would cost an extra fifteen pounds\nper person, which many members cannot afford. Secondly, small groups disturb wildlife less and are easier for\nleaders to manage. Finally, members would still enjoy their favourite trail and remain close to the local community.\nTo make this work, the club could appoint group leaders and prepare a rota so that everyone gets a place. I would\nbe happy to lead one group.\nYours sincerely,\nFatima Noor"
      }
    }
  },
  {
    "themeName": "Music Club",
    "part1": {
      "id": "w_t10_p1",
      "context": "You want to join the Music Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t10_p1_q1",
          "prompt": "What music do you listen to?",
          "maxWords": 5,
          "sampleAnswer": "Pop and folk."
        },
        {
          "id": "w_t10_p1_q2",
          "prompt": "Do you play an instrument?",
          "maxWords": 5,
          "sampleAnswer": "Yes, the guitar."
        },
        {
          "id": "w_t10_p1_q3",
          "prompt": "Who is your favourite singer?",
          "maxWords": 5,
          "sampleAnswer": "Adele."
        },
        {
          "id": "w_t10_p1_q4",
          "prompt": "When do you listen to music?",
          "maxWords": 5,
          "sampleAnswer": "While studying and travelling."
        },
        {
          "id": "w_t10_p1_q5",
          "prompt": "What was your last concert?",
          "maxWords": 5,
          "sampleAnswer": "Last month, a charity concert."
        }
      ]
    },
    "part2": {
      "id": "w_t10_p2",
      "formName": "Music Club Application Form",
      "prompt": "Please explain why music is important to you.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "Music helps me relax after a stressful day and gives me energy when I feel tired. I would like to join the club to perform and learn from others."
    },
    "part3": {
      "id": "w_t10_p3",
      "clubName": "Music Club",
      "context": "You are communicating online with other members of the Music Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t10_p3_m1",
          "memberName": "Carla",
          "avatarInitials": "CA",
          "message": "Hi! Welcome to the club. Can you describe a concert or live event you have attended?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Last year I went to an open-air concert in the park. Thousands of people were singing together, and the atmosphere was unforgettable. Although it rained, nobody left, and it became one of the happiest evenings of my life."
        },
        {
          "id": "w_t10_p3_m2",
          "memberName": "Tariq",
          "avatarInitials": "TA",
          "message": "Hello! Do you think music lessons should be compulsory in schools? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I believe music lessons should be compulsory, at least in primary schools. Music improves concentration, creativity and teamwork. Even children who do not become musicians will gain a lifelong hobby, so I think schools should give it a regular place."
        },
        {
          "id": "w_t10_p3_m3",
          "memberName": "Yuki",
          "avatarInitials": "YU",
          "message": "Welcome! How has streaming changed the music industry, in your opinion?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Streaming has made music cheaper and easier to find, which is wonderful for listeners. However, many artists earn very little from it. I think the industry should find a fairer system, otherwise talented musicians may stop producing new music."
        }
      ]
    },
    "part4": {
      "id": "w_t10_p4",
      "clubName": "Music Club",
      "contextNotice": "Dear Member,\nWe are sorry to tell you that the Grand Concert Hall, where our club performs, will close for a year for renovation.\nAs the club still wants to give concerts, the committee is considering two options: holding open-air concerts in\nCentral Park during the summer, which would depend on good weather and cost very little, or broadcasting\nconcerts live online from a small rented studio, which would allow people anywhere to watch but would cost about\ntwo hundred pounds per concert. We would like to hear your views.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two options you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Ella,\nHave you heard that the concert hall is closing? I'm gutted, but the online option sounds exciting to me. Friends and\nfamily abroad could finally watch us play! The open-air option depends on the weather, which worries me. Maybe we\ncould practise together this weekend?\nRuth"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two options and give reasons. You may also suggest how to reduce its disadvantages. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\nThank you for informing us about the closure of the Grand Concert Hall. I was sorry to hear the news, as performing\nthere has been a highlight of my musical life.\nAfter considering both options, I would recommend holding open-air concerts in Central Park. Firstly, the cost is\nminimal, which is important for a club with limited funds. Secondly, a park attracts passers-by who would never visit\na concert hall, so we could find new members and audiences. Although the weather is a risk, we could solve this by\nchoosing a backup date or borrowing a large tent. Online concerts could be a useful addition later, once we have\nsaved enough money.\nI would be pleased to help with organising.\nYours sincerely,\nKamran Siddiqui"
      }
    }
  },
  {
    "themeName": "Swimming Club",
    "part1": {
      "id": "w_t11_p1",
      "context": "You want to join the Swimming Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t11_p1_q1",
          "prompt": "What time does your day start?",
          "maxWords": 5,
          "sampleAnswer": "At six o'clock."
        },
        {
          "id": "w_t11_p1_q2",
          "prompt": "What is your favourite fruit?",
          "maxWords": 5,
          "sampleAnswer": "Fresh sweet mangoes."
        },
        {
          "id": "w_t11_p1_q3",
          "prompt": "Do you like hot or cold weather?",
          "maxWords": 5,
          "sampleAnswer": "I prefer hot weather."
        },
        {
          "id": "w_t11_p1_q4",
          "prompt": "Who do you live with?",
          "maxWords": 5,
          "sampleAnswer": "With my parents."
        },
        {
          "id": "w_t11_p1_q5",
          "prompt": "What did you wear today?",
          "maxWords": 5,
          "sampleAnswer": "A blue cotton shirt."
        }
      ]
    },
    "part2": {
      "id": "w_t11_p2",
      "formName": "Swimming Club Application Form",
      "prompt": "Please tell us why you want to join the Swimming Club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to join the Swimming Club because swimming keeps me fit and healthy. I also hope to improve my technique and make active friends."
    },
    "part3": {
      "id": "w_t11_p3",
      "clubName": "Swimming Club",
      "context": "You are communicating online with other members of the Swimming Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t11_p3_m1",
          "memberName": "Adam",
          "avatarInitials": "AD",
          "message": "Hi! Welcome to the club. Can you swim well?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I can swim quite well because I took lessons as a child. However, I want to learn better breathing techniques so that I can swim longer distances without feeling exhausted."
        },
        {
          "id": "w_t11_p3_m2",
          "memberName": "Leyla",
          "avatarInitials": "LE",
          "message": "Hello! What do you do to stay healthy?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "To stay healthy, I try to jog three mornings every single week and drink plenty of water. I also avoid sugary snacks and prepare fresh, nutritious meals at home whenever possible."
        },
        {
          "id": "w_t11_p3_m3",
          "memberName": "Chen",
          "avatarInitials": "CH",
          "message": "Welcome! What do you like to do on a summer holiday?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "On summer holidays, I love visiting the beach with my family. We spend hours swimming in the ocean, relaxing under the sun, and trying delicious local seafood at outdoor cafes."
        }
      ]
    },
    "part4": {
      "id": "w_t11_p4",
      "clubName": "Swimming Club",
      "contextNotice": "Dear Member,\nWe are writing to tell you that the city pool will be closed for cleaning for two weeks in March. During this time our\nlessons will take place at the Hillside Sports Centre, which is twenty minutes further away by bus. Members who\nwould like to get a lift with other members should contact the club secretary.\nThe Coach",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Jenny,\nHave you seen the notice? The city pool is closing for two weeks and lessons are moving to Hillside Sports Centre! It's much further away, but maybe we can share a car or take the bus together. Let me know what you think!\nBest wishes,\nSam"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Secretary,\n\nI am writing in response to the announcement regarding the temporary closure of the city pool for cleaning. While I fully appreciate that regular maintenance is necessary for hygiene and safety, I am somewhat concerned about the temporary relocation to Hillside Sports Centre.\n\nThe new facility is significantly further away, and several members who rely on public transport may struggle to arrive punctually. Therefore, I would like to make two practical suggestions. Firstly, the club could organise an official car-pooling schedule so that members with vehicles can give lifts to others. Alternatively, perhaps weekend session times could be adjusted slightly later to allow adequate travel time.\n\nThank you very much for considering my recommendations, and I look forward to your reply.\n\nYours sincerely,\nAli Raza"
      }
    }
  },
  {
    "themeName": "Chess Club",
    "part1": {
      "id": "w_t12_p1",
      "context": "You want to join the Chess Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t12_p1_q1",
          "prompt": "What is your favourite game?",
          "maxWords": 5,
          "sampleAnswer": "I love playing chess."
        },
        {
          "id": "w_t12_p1_q2",
          "prompt": "How many people are in your family?",
          "maxWords": 5,
          "sampleAnswer": "Four people in total."
        },
        {
          "id": "w_t12_p1_q3",
          "prompt": "What do you drink in the morning?",
          "maxWords": 5,
          "sampleAnswer": "A cup of tea."
        },
        {
          "id": "w_t12_p1_q4",
          "prompt": "Where do you study or work?",
          "maxWords": 5,
          "sampleAnswer": "At the city college."
        },
        {
          "id": "w_t12_p1_q5",
          "prompt": "How do you relax?",
          "maxWords": 5,
          "sampleAnswer": "By reading classic books."
        }
      ]
    },
    "part2": {
      "id": "w_t12_p2",
      "formName": "Chess Club Application Form",
      "prompt": "Please tell us about your experience of playing chess.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I have played chess for two years with my grandfather. I want to join the club to learn new strategies and challenge experienced players."
    },
    "part3": {
      "id": "w_t12_p3",
      "clubName": "Chess Club",
      "context": "You are communicating online with other members of the Chess Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t12_p3_m1",
          "memberName": "Ravi",
          "avatarInitials": "RA",
          "message": "Hi! Welcome to the club. When did you learn to play chess?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I learned to play chess when I was twelve years old. My father taught me the basic moves during summer holidays, and we used to play friendly matches every weekend."
        },
        {
          "id": "w_t12_p3_m2",
          "memberName": "Julia",
          "avatarInitials": "JU",
          "message": "Hello! What other games do you enjoy?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Apart from chess, I really enjoy playing board games like Scrabble and Monopoly with my family. They are entertaining and help us spend enjoyable evenings together without using mobile phones."
        },
        {
          "id": "w_t12_p3_m3",
          "memberName": "Omar",
          "avatarInitials": "OM",
          "message": "Welcome! Do you like playing in a quiet place or a busy place? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I definitely prefer playing in a quiet place because chess requires deep concentration. Sudden noises or conversations easily distract me when I am planning several strategic moves ahead on the board."
        }
      ]
    },
    "part4": {
      "id": "w_t12_p4",
      "clubName": "Chess Club",
      "contextNotice": "Dear Member,\nWe are happy to tell you that our weekly chess evening will start one hour earlier, at six o'clock instead of seven.\nThe reason is that the school building closes at nine. A famous player, Mr Peter Lang, will visit us on the first\nevening to play against five members at the same time. Members who would like to play against him should write\ntheir name on the list at the front desk.\nThe Club Organiser",
      "recipientTitle": "The club organiser",
      "recipientName": "The club organiser",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Sara,\nDid you hear about the chess club? Our meetings will start an hour earlier at six because the building closes early! Also, Peter Lang is visiting to play simultaneous games. We should definitely sign up to play against him!\nTalk soon,\nZain"
      },
      "taskB": {
        "prompt": "Write an email to the club organiser. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Organiser,\n\nI am writing to share my thoughts regarding the upcoming changes to our weekly chess evenings. I was truly pleased to hear that the grandmaster Mr Peter Lang will visit our club, which is an exciting opportunity for all of us.\n\nHowever, starting at six o'clock might be challenging for members who work until five thirty, as evening traffic can cause unexpected delays. Consequently, I would like to propose two constructive suggestions. Firstly, could the simultaneous exhibition with Mr Lang be scheduled for seven o'clock so that all participants can arrive calmly? In addition, recording the matches would allow absent members to study the tactical moves afterwards.\n\nThank you very much for your dedication to the club, and I look forward to the event.\n\nYours sincerely,\nBilal Ahmed"
      }
    }
  },
  {
    "themeName": "Dance Club",
    "part1": {
      "id": "w_t13_p1",
      "context": "You want to join the Dance Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t13_p1_q1",
          "prompt": "What kind of music do you dance to?",
          "maxWords": 5,
          "sampleAnswer": "Energetic pop and salsa."
        },
        {
          "id": "w_t13_p1_q2",
          "prompt": "What did you have for dinner?",
          "maxWords": 5,
          "sampleAnswer": "Chicken soup and salad."
        },
        {
          "id": "w_t13_p1_q3",
          "prompt": "What is your favourite day of the week?",
          "maxWords": 5,
          "sampleAnswer": "Saturday is my favourite."
        },
        {
          "id": "w_t13_p1_q4",
          "prompt": "How do you get to the shops?",
          "maxWords": 5,
          "sampleAnswer": "I take the bus."
        },
        {
          "id": "w_t13_p1_q5",
          "prompt": "What is in your pocket?",
          "maxWords": 5,
          "sampleAnswer": "My house keys."
        }
      ]
    },
    "part2": {
      "id": "w_t13_p2",
      "formName": "Dance Club Application Form",
      "prompt": "Please tell us what you hope to learn at the Dance Club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to join the Dance Club because dancing brings me joy and reduces stress. I hope to learn rhythm and improve my coordination."
    },
    "part3": {
      "id": "w_t13_p3",
      "clubName": "Dance Club",
      "context": "You are communicating online with other members of the Dance Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t13_p3_m1",
          "memberName": "Nina",
          "avatarInitials": "NI",
          "message": "Hi! Welcome to the club. Have you ever danced at a party?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Yes, I danced at my cousin's wedding last winter. Everyone joined together on the dance floor, and although I was nervous at first, it turned out to be an unforgettable evening."
        },
        {
          "id": "w_t13_p3_m2",
          "memberName": "Tom",
          "avatarInitials": "TO",
          "message": "Hello! Who in your family likes dancing?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "My younger sister absolutely loves dancing and takes traditional dance lessons twice a week. She often practises her routines at home and tries to teach the whole family basic choreography."
        },
        {
          "id": "w_t13_p3_m3",
          "memberName": "Ayesha",
          "avatarInitials": "AY",
          "message": "Welcome! What do you do when you feel tired or sad?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Whenever I feel tired or down, I put on upbeat music and dance around my living room. Moving to energetic rhythms instantly improves my mood and restores my enthusiasm after a tough day."
        }
      ]
    },
    "part4": {
      "id": "w_t13_p4",
      "clubName": "Dance Club",
      "contextNotice": "Dear Member,\nWe are sorry to tell you that Ms Carla Diaz, our dance teacher, is ill and cannot teach for the next three weeks. A\nnew teacher, Mr Jon Hart, will take her classes. Mr Hart teaches modern dance, so the classes will be different\nfrom our usual salsa lessons. If you do not want to attend the modern dance classes, please contact the club\nmanager and we will return your money.\nThe Committee",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Maya,\nI just saw the email from the dance club. Ms Diaz is unwell, so Mr Hart is teaching modern dance instead of salsa! I feel bad for Ms Diaz, but modern dance could be fun. Are you going to continue?\nWrite soon,\nFatima"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing concerning the recent notification about Ms Diaz's sudden illness and the temporary introduction of modern dance classes. Firstly, I would like to extend my warmest wishes to Ms Diaz for a very swift and complete recovery.\n\nRegarding the classes, while I understand that modern dance differs from salsa, I believe this presents an exciting learning opportunity for everyone. Nevertheless, some members may feel disappointed by the abrupt change of style. Therefore, I would like to recommend that the club offers a free trial class with Mr Hart before processing refund requests. Furthermore, providing online salsa video tutorials could help members practise their steps at home in the meantime.\n\nThank you for your understanding and prompt communication regarding this matter.\n\nYours sincerely,\nSana Tariq"
      }
    }
  },
  {
    "themeName": "Drama Club",
    "part1": {
      "id": "w_t14_p1",
      "context": "You want to join the Drama Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t14_p1_q1",
          "prompt": "What was the last play you saw?",
          "maxWords": 5,
          "sampleAnswer": "Hamlet at city hall."
        },
        {
          "id": "w_t14_p1_q2",
          "prompt": "Which room in your home is the biggest?",
          "maxWords": 5,
          "sampleAnswer": "The bright living room."
        },
        {
          "id": "w_t14_p1_q3",
          "prompt": "What are you afraid of?",
          "maxWords": 5,
          "sampleAnswer": "I fear deep water."
        },
        {
          "id": "w_t14_p1_q4",
          "prompt": "Where would you like to live?",
          "maxWords": 5,
          "sampleAnswer": "In a quiet village."
        },
        {
          "id": "w_t14_p1_q5",
          "prompt": "How do you usually celebrate your birthday?",
          "maxWords": 5,
          "sampleAnswer": "With dinner and cake."
        }
      ]
    },
    "part2": {
      "id": "w_t14_p2",
      "formName": "Drama Club Application Form",
      "prompt": "Please tell us why you are interested in acting.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I am interested in acting because it allows me to explore different characters and emotions. I want to build confidence and perform on stage."
    },
    "part3": {
      "id": "w_t14_p3",
      "clubName": "Drama Club",
      "context": "You are communicating online with other members of the Drama Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t14_p3_m1",
          "memberName": "Lisa",
          "avatarInitials": "LI",
          "message": "Hi! Welcome to the club. Have you ever performed in front of an audience? What was it like?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Yes, I performed in a school play five years ago. I felt terrified before stepping on stage, but once the audience applauded, I felt an incredible sense of accomplishment and pride."
        },
        {
          "id": "w_t14_p3_m2",
          "memberName": "Hamza",
          "avatarInitials": "HA",
          "message": "Hello! What kind of stories do you enjoy: comedies, dramas or adventures? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I enjoy comedy dramas most because they make people laugh while addressing meaningful real-life issues. A witty story with relatable characters can brighten anyone's day and relieve daily tension effectively."
        },
        {
          "id": "w_t14_p3_m3",
          "memberName": "Grace",
          "avatarInitials": "GR",
          "message": "Welcome! Why do you think people enjoy watching live theatre?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "People love watching live theatre because the energy in the auditorium is completely genuine. Unlike recorded movies, actors and audiences share the exact same emotional space, creating an authentic and magical experience."
        }
      ]
    },
    "part4": {
      "id": "w_t14_p4",
      "clubName": "Drama Club",
      "contextNotice": "Dear Member,\nWe regret to inform you that the Town Theatre, where we usually perform our annual play, has doubled its rent.\nThe committee has found two possible solutions. We could perform in the open air in the school playground,\nwhich would be free but depends on the weather. Alternatively, we could present a shorter play in the Town\nTheatre's small hall, which is cheaper but has only sixty seats instead of three hundred. Please let us know what\nyou think.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two solutions you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Leo,\nHave you seen the drama club notice? The Town Theatre doubled its rent! The committee is choosing between the outdoor playground or the small hall. I definitely prefer the small hall because rain could ruin outdoor performances. What do you think?\nBest,\nUsman"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two solutions and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing to express my views regarding the venue options for our upcoming annual production following the rent increase at the Town Theatre. While both proposals have merits, I strongly recommend that we perform in the theatre's small hall rather than the school playground.\n\nAlthough the small hall has only sixty seats, it provides professional lighting, superior acoustics, and protection from unpredictable weather conditions. An outdoor performance carries a severe risk of cancellation if it rains. To overcome the seating limitation, I suggest staging four performances across two consecutive weekends so that all patrons can attend. Additionally, tickets could be priced slightly higher to offset rental expenses.\n\nI hope the committee finds these suggestions helpful.\n\nYours sincerely,\nKhadija Noor"
      }
    }
  },
  {
    "themeName": "Science Club",
    "part1": {
      "id": "w_t15_p1",
      "context": "You want to join the Science Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t15_p1_q1",
          "prompt": "What do you want to be in the future?",
          "maxWords": 5,
          "sampleAnswer": "A software engineer."
        },
        {
          "id": "w_t15_p1_q2",
          "prompt": "What was your favourite subject at school?",
          "maxWords": 5,
          "sampleAnswer": "Physics and chemistry."
        },
        {
          "id": "w_t15_p1_q3",
          "prompt": "Which gadget do you use most?",
          "maxWords": 5,
          "sampleAnswer": "My smartphone."
        },
        {
          "id": "w_t15_p1_q4",
          "prompt": "What is the weather like in winter?",
          "maxWords": 5,
          "sampleAnswer": "Chilly and foggy."
        },
        {
          "id": "w_t15_p1_q5",
          "prompt": "What do you do on public holidays?",
          "maxWords": 5,
          "sampleAnswer": "I visit my relatives."
        }
      ]
    },
    "part2": {
      "id": "w_t15_p2",
      "formName": "Science Club Application Form",
      "prompt": "Please tell us what you would like to discover or learn at the Science Club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I would like to discover practical physics and conduct experiments. Joining the club will help me understand scientific theories through hands-on learning."
    },
    "part3": {
      "id": "w_t15_p3",
      "clubName": "Science Club",
      "context": "You are communicating online with other members of the Science Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t15_p3_m1",
          "memberName": "Peter",
          "avatarInitials": "PE",
          "message": "Hi! Welcome to the club. Can you remember an interesting science experiment you saw or did?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "In high school, our teacher demonstrated a volcano experiment using vinegar and baking soda. The sudden foaming eruption amazed the entire class and sparked my lifelong fascination with chemistry and science."
        },
        {
          "id": "w_t15_p3_m2",
          "memberName": "Mei",
          "avatarInitials": "ME",
          "message": "Hello! Which scientific invention do you think has changed our lives the most? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "In my opinion, electricity is the invention that transformed human life most. Without electric power, modern medicine, computers, telecommunications, and industrial manufacturing would simply be impossible in our contemporary world."
        },
        {
          "id": "w_t15_p3_m3",
          "memberName": "Yusuf",
          "avatarInitials": "YU",
          "message": "Welcome! How can we make science more interesting for young children?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "We can make science captivating for children by introducing interactive games and colorful demonstrations. Allowing them to build simple gadgets with everyday household materials stimulates curiosity far better than reading textbooks."
        }
      ]
    },
    "part4": {
      "id": "w_t15_p4",
      "clubName": "Science Club",
      "contextNotice": "Dear Member,\nThe committee wishes to tell you that our laboratory in the university building will no longer be available on\nSaturdays because the university needs the space for exams. We can use it only on Wednesday evenings from\nnow on, but several experiments take more than two hours, so there may not be enough time. Some members\nhave suggested building a small workshop in the garden of the club secretary. Please give us your opinion.\nThe Club Secretary",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Dan,\nDid you read the science club update? We can't use the lab on Saturdays anymore, only Wednesday evenings! That's not enough time for big experiments. Some want to build a garden workshop. What do you think?\nCheers,\nFarhan"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Secretary,\n\nI am writing regarding the change in laboratory availability at the university. While I fully appreciate that exam preparations must take priority for the university, moving our sessions exclusively to Wednesday evenings presents serious logistical challenges for lengthy experiments.\n\nRegarding the proposal to construct a garden workshop, I believe this would be impractical due to chemical safety regulations and weather sensitivity. Instead, I would like to propose two alternative solutions. Firstly, the club could negotiate access to a different university department that has weekend availability. Alternatively, we could dedicate Wednesday evenings to theoretical planning and book full laboratory days during term breaks.\n\nThank you very much for considering my suggestions, and I look forward to your decision.\n\nYours sincerely,\nTariq Mehmood"
      }
    }
  },
  {
    "themeName": "Volunteer Club",
    "part1": {
      "id": "w_t16_p1",
      "context": "You want to join the Volunteer Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t16_p1_q1",
          "prompt": "What did you do last Sunday?",
          "maxWords": 5,
          "sampleAnswer": "I cleaned my room."
        },
        {
          "id": "w_t16_p1_q2",
          "prompt": "Who do you ask for help?",
          "maxWords": 5,
          "sampleAnswer": "My elder brother."
        },
        {
          "id": "w_t16_p1_q3",
          "prompt": "What is the most useful thing you own?",
          "maxWords": 5,
          "sampleAnswer": "My laptop computer."
        },
        {
          "id": "w_t16_p1_q4",
          "prompt": "Which season do you dislike?",
          "maxWords": 5,
          "sampleAnswer": "The humid monsoon season."
        },
        {
          "id": "w_t16_p1_q5",
          "prompt": "Where do you go to relax?",
          "maxWords": 5,
          "sampleAnswer": "To the central library."
        }
      ]
    },
    "part2": {
      "id": "w_t16_p2",
      "formName": "Volunteer Club Application Form",
      "prompt": "Please tell us why you would like to become a volunteer.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to become a volunteer because helping vulnerable people brings purpose to my life. I hope to contribute to community welfare projects."
    },
    "part3": {
      "id": "w_t16_p3",
      "clubName": "Volunteer Club",
      "context": "You are communicating online with other members of the Volunteer Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t16_p3_m1",
          "memberName": "Sandra",
          "avatarInitials": "SA",
          "message": "Hi! Welcome to the club. Have you ever helped someone in your neighbourhood? What did you do?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Last month, I helped an elderly neighbour by carrying her heavy groceries and repairing her garden fence. She was extremely grateful, and seeing her smile made my weekend truly meaningful."
        },
        {
          "id": "w_t16_p3_m2",
          "memberName": "Kofi",
          "avatarInitials": "KO",
          "message": "Hello! What kinds of problems do you think young people can help to solve in your community?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Young people can assist in cleaning public parks, tutoring underprivileged school pupils, and planting trees. Their energy and digital skills can also help charitable organisations raise awareness on social media platforms."
        },
        {
          "id": "w_t16_p3_m3",
          "memberName": "Alice",
          "avatarInitials": "AL",
          "message": "Welcome! What qualities do you think a good volunteer needs? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "A good volunteer needs genuine empathy, patience, and strong communication skills. Empathy enables volunteers to understand people's struggles, while patience ensures they remain dedicated even when challenging situations arise during fieldwork."
        }
      ]
    },
    "part4": {
      "id": "w_t16_p4",
      "clubName": "Volunteer Club",
      "contextNotice": "Dear Member,\nWe are very pleased to say that the Volunteer Club has been given a large donation. However, the donor has\nasked us to spend it on one project only, and the committee cannot decide between two. The first is to build a\nchildren's playground in the poorest part of the town. The second is to provide free hot meals every Friday for\nelderly people who live alone. We would like to know which project you think is more important.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two projects you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Sophie,\nGreat news about the volunteer club receiving that big donation! The committee is debating between a children's playground and meals for the elderly. Personally, I support hot meals because lonely seniors need urgent care. What do you think?\nTalk soon,\nAmina"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two projects and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing to share my views on allocating the generous donation our club has recently received. Both proposed initiatives are highly commendable, but after careful reflection, I strongly urge the committee to fund the hot meals project for elderly residents.\n\nMany elderly citizens in our neighbourhood live alone on limited pensions and suffer from poor nutrition and social isolation. A regular hot meal service provides vital nourishment and invaluable human companionship. To address the playground need, the club could organise a separate fundraising campaign or seek municipal community grants later this year. Furthermore, volunteers could deliver meals directly to homes to foster meaningful personal connections.\n\nI appreciate your leadership and hope you consider this recommendation.\n\nYours sincerely,\nHassan Raza"
      }
    }
  },
  {
    "themeName": "Running Club",
    "part1": {
      "id": "w_t17_p1",
      "context": "You want to join the Running Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t17_p1_q1",
          "prompt": "How far is your home from your workplace?",
          "maxWords": 5,
          "sampleAnswer": "About five kilometres."
        },
        {
          "id": "w_t17_p1_q2",
          "prompt": "What is your favourite number?",
          "maxWords": 5,
          "sampleAnswer": "Lucky number seven."
        },
        {
          "id": "w_t17_p1_q3",
          "prompt": "What did you buy last week?",
          "maxWords": 5,
          "sampleAnswer": "A pair of sneakers."
        },
        {
          "id": "w_t17_p1_q4",
          "prompt": "Which city would you like to visit?",
          "maxWords": 5,
          "sampleAnswer": "Tokyo, Japan."
        },
        {
          "id": "w_t17_p1_q5",
          "prompt": "What do you do before you go to sleep?",
          "maxWords": 5,
          "sampleAnswer": "I read a book."
        }
      ]
    },
    "part2": {
      "id": "w_t17_p2",
      "formName": "Running Club Application Form",
      "prompt": "Please tell us about your running experience and why you want to join.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I have jogged regularly for one year and want to join the club to build endurance, receive coaching, and participate in local 10k races."
    },
    "part3": {
      "id": "w_t17_p3",
      "clubName": "Running Club",
      "context": "You are communicating online with other members of the Running Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t17_p3_m1",
          "memberName": "Ivan",
          "avatarInitials": "IV",
          "message": "Hi! Welcome to the club. How do you feel after exercising?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "After exercising vigorously, I feel energetic, refreshed, and mentally clear. Even though my muscles feel tired initially, physical exertion releases stress and gives me a great sense of personal satisfaction."
        },
        {
          "id": "w_t17_p3_m2",
          "memberName": "Zoe",
          "avatarInitials": "ZO",
          "message": "Hello! Can you describe a race or sports event that you took part in or watched?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Last spring, I successfully ran a five-kilometre charity fun run in our local park. Hundreds of runners participated in colorful costumes, and the cheering spectators created an unforgettable, uplifting atmosphere."
        },
        {
          "id": "w_t17_p3_m3",
          "memberName": "Bilal",
          "avatarInitials": "BI",
          "message": "Welcome! What do you think stops some people from doing regular exercise?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Lack of time and low initial motivation often prevent people from exercising consistently. Additionally, individuals without supportive workout partners find it easier to abandon routines when facing fatigue or busy schedules."
        }
      ]
    },
    "part4": {
      "id": "w_t17_p4",
      "clubName": "Running Club",
      "contextNotice": "Dear Member,\nFrom next month, our Saturday morning runs will start at six o'clock instead of eight, because the park authority\nwill not allow groups on the paths after seven thirty. The authority has also asked us to run in groups of no more\nthan twenty people. Since we now have about fifty members, we will need to organise at least three groups.\nMembers who cannot run at six o'clock are asked to contact the chairperson.\nThe Committee",
      "recipientTitle": "The chairperson",
      "recipientName": "The chairperson",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Alex,\nHave you seen the running club notice? Morning runs are moving to six o'clock because the park closes paths early! That's super early for me, but maybe we can keep each other motivated. Will you manage to wake up?\nBest,\nImran"
      },
      "taskB": {
        "prompt": "Write an email to the chairperson. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Chairperson,\n\nI am writing regarding the recent committee decision to reschedule our Saturday group runs to six o'clock in the morning. While I understand that the park authority's regulations necessitate this time adjustment, the earlier start poses significant challenges for many dedicated members.\n\nMany participants have family obligations or long commutes that make arriving by six o'clock extremely difficult. Therefore, I would like to submit two practical proposals for your consideration. Firstly, could we establish two separate running groups, one at six o'clock and another group using roadside trails at eight o'clock? In addition, rotating weekend routes to different suburban parks would offer greater scheduling flexibility for all.\n\nThank you very much for your continuous efforts in guiding our running club.\n\nYours sincerely,\nNasir Khan"
      }
    }
  },
  {
    "themeName": "Astronomy Club",
    "part1": {
      "id": "w_t18_p1",
      "context": "You want to join the Astronomy Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t18_p1_q1",
          "prompt": "What do you notice first in a new place?",
          "maxWords": 5,
          "sampleAnswer": "The architecture and lights."
        },
        {
          "id": "w_t18_p1_q2",
          "prompt": "How do you spend rainy days?",
          "maxWords": 5,
          "sampleAnswer": "Reading and drinking coffee."
        },
        {
          "id": "w_t18_p1_q3",
          "prompt": "Where do you keep your keys?",
          "maxWords": 5,
          "sampleAnswer": "In my jacket pocket."
        },
        {
          "id": "w_t18_p1_q4",
          "prompt": "Which job would you never do?",
          "maxWords": 5,
          "sampleAnswer": "Working in a coalmine."
        },
        {
          "id": "w_t18_p1_q5",
          "prompt": "What advice would you give a new student?",
          "maxWords": 5,
          "sampleAnswer": "Manage your time well."
        }
      ]
    },
    "part2": {
      "id": "w_t18_p2",
      "formName": "Astronomy Club Application Form",
      "prompt": "Please explain why you are interested in astronomy and what you can contribute to the club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I am fascinated by astronomy because looking at stars inspires curiosity about the universe. I want to contribute telescope maintenance and star charting."
    },
    "part3": {
      "id": "w_t18_p3",
      "clubName": "Astronomy Club",
      "context": "You are communicating online with other members of the Astronomy Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t18_p3_m1",
          "memberName": "Rosa",
          "avatarInitials": "RO",
          "message": "Hi! Welcome to the club. Do you think it is worth spending large amounts of money on space exploration? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Space exploration is absolutely worth the expense because space research yields revolutionary technological advancements. Discoveries made through space missions improve satellite navigation, environmental monitoring, and materials science for everyone on Earth."
        },
        {
          "id": "w_t18_p3_m2",
          "memberName": "Dev",
          "avatarInitials": "DE",
          "message": "Hello! Can you describe a moment when you felt amazed by nature or the night sky?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "During a camping trip in the northern valleys, I looked up at midnight and witnessed the Milky Way stretching across pitch-black sky. The countless glowing stars left me completely breathless with wonder."
        },
        {
          "id": "w_t18_p3_m3",
          "memberName": "Hana",
          "avatarInitials": "HA",
          "message": "Welcome! How might life change if people discovered intelligent life on another planet?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Discovering extraterrestrial life would profoundly change human perspective and philosophy. It would unite humanity as one global community and inspire international cooperation in science, technology, and cosmic exploration like never before."
        }
      ]
    },
    "part4": {
      "id": "w_t18_p4",
      "clubName": "Astronomy Club",
      "contextNotice": "Dear Member,\nWe regret to inform you that the observatory on Mount Pine, where we hold our observation nights, will be closed\nto the public from June because of safety problems with the road. Two solutions have been suggested. The first\nis to hire a bus to take members to a new site in the countryside, which has excellent dark skies but would cost\neach member about twelve pounds per night. The second is to hold the observation nights on the roof of the town\nlibrary, which is free and easy to reach, but the city lights would make it difficult to see faint stars. Please send us\nyour views.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two solutions you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Lucas,\nI just read the astronomy club update. Mount Pine observatory is closing in June! They're choosing between a bus to dark skies for twelve pounds or the library roof for free. Dark skies are totally worth twelve pounds! What do you reckon?\nBest,\nZubair"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two solutions and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing to provide feedback on the proposed alternatives for our observation nights following the closure of Mount Pine observatory. Having evaluated both possibilities thoroughly, I strongly advocate for hiring a bus to the countryside location.\n\nAstronomy requires clear, dark skies to observe deep-space nebulae and faint constellations, which is virtually impossible from the town library roof due to severe urban light pollution. While twelve pounds is an additional expense, the exceptional visual clarity guarantees an authentic educational experience. To make this affordable for everyone, the club could negotiate group transport discounts or subsidise student members from annual membership reserves. Furthermore, trips could take place fortnightly.\n\nThank you for considering my view, and I await the committee's final decision.\n\nYours sincerely,\nRashid Ali"
      }
    }
  },
  {
    "themeName": "Business Club",
    "part1": {
      "id": "w_t19_p1",
      "context": "You want to join the Business Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t19_p1_q1",
          "prompt": "What is your biggest strength?",
          "maxWords": 5,
          "sampleAnswer": "Patience and determination."
        },
        {
          "id": "w_t19_p1_q2",
          "prompt": "What do you spend most money on?",
          "maxWords": 5,
          "sampleAnswer": "Groceries and textbooks."
        },
        {
          "id": "w_t19_p1_q3",
          "prompt": "How do you start your working day?",
          "maxWords": 5,
          "sampleAnswer": "With a quick workout."
        },
        {
          "id": "w_t19_p1_q4",
          "prompt": "Which country would you like to work in?",
          "maxWords": 5,
          "sampleAnswer": "In the United Kingdom."
        },
        {
          "id": "w_t19_p1_q5",
          "prompt": "What skill would you like to learn?",
          "maxWords": 5,
          "sampleAnswer": "Digital financial analysis."
        }
      ]
    },
    "part2": {
      "id": "w_t19_p2",
      "formName": "Business Club Application Form",
      "prompt": "Please explain why you want to join the Business Club and what you hope to achieve.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to join the Business Club to network with entrepreneurs, learn financial planning, and develop practical skills to launch my own accounting consultancy."
    },
    "part3": {
      "id": "w_t19_p3",
      "clubName": "Business Club",
      "context": "You are communicating online with other members of the Business Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t19_p3_m1",
          "memberName": "Frank",
          "avatarInitials": "FR",
          "message": "Hi! Welcome to the club. What do you think makes a small business successful?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "A small business succeeds when it delivers outstanding customer service and addresses an authentic market need. Maintaining strict financial discipline and adapting quickly to customer feedback are equally crucial factors."
        },
        {
          "id": "w_t19_p3_m2",
          "memberName": "Dina",
          "avatarInitials": "DI",
          "message": "Hello! Do you believe working from home is better than working in an office? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I believe working from home offers superior flexibility and eliminates stressful commuting hours. However, office environments foster spontaneous collaboration and team bonding, which are harder to replicate through video calls."
        },
        {
          "id": "w_t19_p3_m3",
          "memberName": "Kenji",
          "avatarInitials": "KE",
          "message": "Welcome! How has the internet changed the way people buy and sell things?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "The internet has revolutionized commerce by allowing small entrepreneurs to reach global audiences instantly. Consumers now enjoy limitless product variety, competitive pricing, and doorstep delivery at the simple click of a button."
        }
      ]
    },
    "part4": {
      "id": "w_t19_p4",
      "clubName": "Business Club",
      "contextNotice": "Dear Member,\nAs you know, our monthly talks by local business owners have always been free. However, the number of\nmembers has grown to more than two hundred, and our meeting room is now too small. The committee has two\nproposals. We could rent a conference hall in the city centre and charge members a small entry fee of five\npounds per talk. Alternatively, we could keep the talks free but limit entry to the first eighty members who register\nonline. We would like to hear your opinion before we decide.\nThe Club Secretary",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two proposals you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Chloe,\nDid you see the business club email? We have over 200 members now, so our room is too small! They might charge five pounds for a bigger hall or limit entry to eighty people. I'd rather pay five pounds than miss talks! What's your take?\nBest,\nSaad"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings, then recommend ONE of the two proposals and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Secretary,\n\nI am writing in response to the committee's consultation on managing our expanding membership during monthly talks. I am delighted to see our business club prosper, and I strongly recommend renting a larger conference hall with a modest admission fee.\n\nCapping attendance at eighty attendees online would inevitably exclude enthusiastic members and generate widespread frustration. Paying five pounds per session is entirely reasonable given the exceptional networking and practical knowledge gained from guest speakers. To optimize this approach, I suggest offering discounted annual passes for frequent attendees and live-streaming sessions for members unable to attend in person. This ensures maximum accessibility while covering rental costs comfortably.\n\nThank you for your tireless commitment to our business community.\n\nYours sincerely,\nMohammad Asim"
      }
    }
  },
  {
    "themeName": "Environment Club",
    "part1": {
      "id": "w_t20_p1",
      "context": "You want to join the Environment Club. You have 5 messages from a member of the club. Write short\nanswers (1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t20_p1_q1",
          "prompt": "What do you throw away every day?",
          "maxWords": 5,
          "sampleAnswer": "Empty plastic packaging."
        },
        {
          "id": "w_t20_p1_q2",
          "prompt": "How do you feel about big cities?",
          "maxWords": 5,
          "sampleAnswer": "They feel too crowded."
        },
        {
          "id": "w_t20_p1_q3",
          "prompt": "What is your best memory of school?",
          "maxWords": 5,
          "sampleAnswer": "Playing soccer with classmates."
        },
        {
          "id": "w_t20_p1_q4",
          "prompt": "What do you do to save money?",
          "maxWords": 5,
          "sampleAnswer": "Cooking meals at home."
        },
        {
          "id": "w_t20_p1_q5",
          "prompt": "Which animal is important to you?",
          "maxWords": 5,
          "sampleAnswer": "The snow leopard."
        }
      ]
    },
    "part2": {
      "id": "w_t20_p2",
      "formName": "Environment Club Application Form",
      "prompt": "Please describe what you are doing, or would like to do, to protect the environment.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I actively compost kitchen waste, minimise plastic usage, and plant saplings. I want to collaborate with other members on urban conservation projects."
    },
    "part3": {
      "id": "w_t20_p3",
      "clubName": "Environment Club",
      "context": "You are communicating online with other members of the Environment Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t20_p3_m1",
          "memberName": "Oliver",
          "avatarInitials": "OL",
          "message": "Hi! Welcome to the club. Who should be more responsible for protecting the environment: individuals or governments? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Both entities must share responsibility equally. While governments should enforce environmental laws and regulate industrial emissions, individual citizens must adopt sustainable consumption habits, reduce waste, and conserve energy in daily life."
        },
        {
          "id": "w_t20_p3_m2",
          "memberName": "Amira",
          "avatarInitials": "AM",
          "message": "Hello! Can you describe an environmental problem in your area?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "A pressing environmental issue in my area is illegal plastic dumping in local streams. This blocks drainage during monsoon rains, causes street flooding, and severely damages aquatic ecosystems throughout the district."
        },
        {
          "id": "w_t20_p3_m3",
          "memberName": "Tao",
          "avatarInitials": "TA",
          "message": "Welcome! Do you think modern technology will help us solve environmental problems, or make them worse?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Modern technology holds immense potential to resolve environmental crises through renewable energy, electric transportation, and satellite conservation monitoring. However, sustainable technology must be accompanied by responsible corporate policies to prevent further environmental harm."
        }
      ]
    },
    "part4": {
      "id": "w_t20_p4",
      "clubName": "Environment Club",
      "contextNotice": "Dear Member,\nWe are writing to inform you that the club's yearly tree-planting day will take place on the first Sunday of May. The\ntown council has offered us a choice of two locations. The first is a large area beside the river, where thousands\nof trees could be planted, but it is an hour's journey from the town centre. The second is a smaller area behind the\ntown hospital, which is easy to reach but has space for only about four hundred trees. Please tell us which\nlocation you prefer.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two locations you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Liam,\nHave you seen the tree-planting notice? The club is choosing between planting along Riverside Walk or the East Industrial Zone. I think Riverside Walk is nicer, but the industrial zone needs green trees much more urgently to reduce smog! What do you think?\nTalk soon,\nFaizan"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two locations and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing to express my formal recommendation regarding the site selection for our annual tree-planting initiative in May. Having assessed both prospective locations thoroughly, I firmly believe our club should plant trees in the East Industrial Zone.\n\nWhile Riverside Walk is undeniably popular for recreation, the industrial district suffers from heavy air pollution and sparse green cover. Planting dense tree belts there will actively filter industrial emissions, cool urban concrete streets, and improve residents' long-term respiratory health. To facilitate the event, the club could arrange shuttle transport from town and partner with industrial companies for watering maintenance. Furthermore, informative display boards could highlight our conservation efforts.\n\nThank you for championing environmental protection in our community.\n\nYours sincerely,\nZainab Qureshi"
      }
    }
  },
  {
    "themeName": "Art Club",
    "part1": {
      "id": "w_t21_p1",
      "context": "You want to join the Art Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t21_p1_q1",
          "prompt": "What colour is your front door?",
          "maxWords": 5,
          "sampleAnswer": "Dark wooden brown."
        },
        {
          "id": "w_t21_p1_q2",
          "prompt": "What is your favourite animal?",
          "maxWords": 5,
          "sampleAnswer": "A majestic horse."
        },
        {
          "id": "w_t21_p1_q3",
          "prompt": "Where do you keep your books?",
          "maxWords": 5,
          "sampleAnswer": "On my bedroom shelves."
        },
        {
          "id": "w_t21_p1_q4",
          "prompt": "How old were you at school?",
          "maxWords": 5,
          "sampleAnswer": "I was six years old."
        },
        {
          "id": "w_t21_p1_q5",
          "prompt": "What do you do at lunchtime?",
          "maxWords": 5,
          "sampleAnswer": "I eat sandwiches outside."
        }
      ]
    },
    "part2": {
      "id": "w_t21_p2",
      "formName": "Art Club Application Form",
      "prompt": "Please tell us why you want to join the Art Club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to join the Art Club because painting allows me to express creativity freely. I hope to learn watercolor techniques and exhibit my artwork."
    },
    "part3": {
      "id": "w_t21_p3",
      "clubName": "Art Club",
      "context": "You are communicating online with other members of the Art Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t21_p3_m1",
          "memberName": "Emily",
          "avatarInitials": "EM",
          "message": "Hi! Welcome to the club. Do you like drawing or painting?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I definitely prefer painting with watercolors because blending colors creates delicate, flowing textures. Drawing with pencils is useful for sketching outlines, but vibrant colors bring emotional life to any artwork."
        },
        {
          "id": "w_t21_p3_m2",
          "memberName": "Sunil",
          "avatarInitials": "SU",
          "message": "Hello! What is the most beautiful place you have ever seen?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "The most breathtaking place I have ever seen is Lake Saif-ul-Malook in northern mountains. The crystal-clear emerald water reflects towering snow-capped peaks, creating a majestic panorama that resembles a living canvas."
        },
        {
          "id": "w_t21_p3_m3",
          "memberName": "Mia",
          "avatarInitials": "MI",
          "message": "Welcome! Do you have any pictures on the walls of your home?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Yes, I have framed landscape paintings hanging on my living room walls. They depict serene countryside scenes and lush forests, which bring a calm, refreshing atmosphere into our family home every day."
        }
      ]
    },
    "part4": {
      "id": "w_t21_p4",
      "clubName": "Art Club",
      "contextNotice": "Dear Member,\nWe are writing to tell you that our weekly painting class will move from the school art room to the library. The\nlibrary has a large, bright room with big windows, but members must bring their own paints and brushes. The\nfamous painter Ms Helen Wood will give a short talk at the first class. Members who need help carrying materials\nshould contact the club secretary.\nThe Club Teacher",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Sarah,\nDid you hear our painting class is moving from the school art room to the library basement? The basement has poor lighting, which makes painting difficult! I think we should ask for a better venue. What do you think?\nTalk soon,\nSaba"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Secretary,\n\nI am writing to express my concern regarding the relocation of our weekly painting class from the school art room to the library basement. While I understand that the previous school venue was unavailable, the basement presents significant drawbacks for visual art.\n\nNatural daylight is essential for mixing accurate colours and observing subtle brushwork, neither of which is possible under weak artificial fluorescent lighting. Therefore, I would like to submit two constructive recommendations. Firstly, could the club investigate hiring the community centre hall, which boasts large skylights and ample space? Alternatively, scheduling sessions on Saturday mornings would enable us to utilise brighter classrooms or outdoor spaces. Furthermore, portable lamps could provide temporary relief.\n\nThank you very much for considering my suggestions.\n\nYours sincerely,\nFarah Naz"
      }
    }
  },
  {
    "themeName": "Football Club",
    "part1": {
      "id": "w_t22_p1",
      "context": "You want to join the Football Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t22_p1_q1",
          "prompt": "What time do you eat dinner?",
          "maxWords": 5,
          "sampleAnswer": "Around eight o'clock."
        },
        {
          "id": "w_t22_p1_q2",
          "prompt": "Which team do you support?",
          "maxWords": 5,
          "sampleAnswer": "Real Madrid."
        },
        {
          "id": "w_t22_p1_q3",
          "prompt": "Who is your best teacher?",
          "maxWords": 5,
          "sampleAnswer": "Mr Ahmad, my math teacher."
        },
        {
          "id": "w_t22_p1_q4",
          "prompt": "What do you carry to school?",
          "maxWords": 5,
          "sampleAnswer": "Notebooks and pens."
        },
        {
          "id": "w_t22_p1_q5",
          "prompt": "What is the date today?",
          "maxWords": 5,
          "sampleAnswer": "Monday, 23rd November."
        }
      ]
    },
    "part2": {
      "id": "w_t22_p2",
      "formName": "Football Club Application Form",
      "prompt": "Please tell us about your experience of playing football.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I have played football for four years as a midfield playmaker. I want to join the club to refine tactical positioning and win local league matches."
    },
    "part3": {
      "id": "w_t22_p3",
      "clubName": "Football Club",
      "context": "You are communicating online with other members of the Football Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t22_p3_m1",
          "memberName": "Carlos",
          "avatarInitials": "CA",
          "message": "Hi! Welcome to the club. How often do you play football?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I play football three times every week with college friends at our local ground. Playing regularly keeps my reflexes sharp, builds cardiovascular endurance, and helps me relieve academic stress effectively."
        },
        {
          "id": "w_t22_p3_m2",
          "memberName": "Nadia",
          "avatarInitials": "NA",
          "message": "Hello! Who is your favourite player? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "My favourite player is Lionel Messi because his dribbling vision and precise passing are extraordinary. Beyond his unmatched football skills, his humble attitude and sportsmanship on the pitch inspire young players worldwide."
        },
        {
          "id": "w_t22_p3_m3",
          "memberName": "Ben",
          "avatarInitials": "BE",
          "message": "Welcome! What do you do when it rains and you cannot play outside?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "When heavy rain forces us inside, my teammates and I gather at my home to watch tactical analysis of international matches. We discuss team formations, player movements, and defensive strategies together."
        }
      ]
    },
    "part4": {
      "id": "w_t22_p4",
      "clubName": "Football Club",
      "contextNotice": "Dear Member,\nWe are sorry to tell you that the football field behind the school is closed because the grass is being replaced. Our\nSunday matches will be played at the Greenway Stadium instead. The stadium is bigger and has changing\nrooms, but members will have to pay two pounds each time to use it. Members who cannot pay should speak to\nthe club manager.\nThe Coach",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Jack,\nHave you seen the football club notice? The pitch behind the school is closed for re-seeding! The manager proposed either an indoor sports hall with smaller teams or astroturf across town. I vote for astroturf so we keep full teams. What do you reckon?\nCheers,\nKamran"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing to share my views on the alternative venues proposed while our main football pitch undergoes essential grass re-seeding. Having considered both options carefully, I strongly recommend hiring the astroturf pitch across town.\n\nAlthough the astroturf requires extra travel, it allows us to train with full eleven-a-side teams and maintain competitive match fitness. In contrast, the indoor sports hall requires smaller squads, which would disrupt established team tactics and exclude several players. To facilitate travel to the astroturf, members could organise car-pooling arrangements. Additionally, scheduling weekend training sessions would avoid weekday rush-hour traffic completely, ensuring that all players arrive punctually.\n\nThank you very much for guiding our club through this temporary transition.\n\nYours sincerely,\nArslan Tariq"
      }
    }
  },
  {
    "themeName": "Pet Lovers Club",
    "part1": {
      "id": "w_t23_p1",
      "context": "You want to join the Pet Lovers Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t23_p1_q1",
          "prompt": "What is your favourite sweet?",
          "maxWords": 5,
          "sampleAnswer": "Dark chocolate bars."
        },
        {
          "id": "w_t23_p1_q2",
          "prompt": "How many rooms are there in your home?",
          "maxWords": 5,
          "sampleAnswer": "Four rooms in total."
        },
        {
          "id": "w_t23_p1_q3",
          "prompt": "What do you do on Friday evenings?",
          "maxWords": 5,
          "sampleAnswer": "I relax with friends."
        },
        {
          "id": "w_t23_p1_q4",
          "prompt": "Who is the funniest person you know?",
          "maxWords": 5,
          "sampleAnswer": "My cousin Bilal."
        },
        {
          "id": "w_t23_p1_q5",
          "prompt": "What time is it now?",
          "maxWords": 5,
          "sampleAnswer": "Half past three."
        }
      ]
    },
    "part2": {
      "id": "w_t23_p2",
      "formName": "Pet Lovers Club Application Form",
      "prompt": "Please tell us about the animals you like and why.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I love cats and birds because caring for them teaches gentle responsibility. I want to join the club to learn professional pet grooming and nutrition."
    },
    "part3": {
      "id": "w_t23_p3",
      "clubName": "Pet Lovers Club",
      "context": "You are communicating online with other members of the Pet Lovers Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t23_p3_m1",
          "memberName": "Grace",
          "avatarInitials": "GR",
          "message": "Hi! Welcome to the club. Do you have a pet, or would you like one?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I currently have a friendly rescue cat named Oliver. He greets me warmly at the door every afternoon, and playing with him brings immense comfort and relaxation after a long working day."
        },
        {
          "id": "w_t23_p3_m2",
          "memberName": "Ali",
          "avatarInitials": "AL",
          "message": "Hello! What is the best way to look after a pet, in your opinion?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "The best way to care for pets is providing wholesome nutrition, clean drinking water, and regular veterinary check-ups. Showing genuine affection, daily exercise, and creating a safe domestic environment are equally vital."
        },
        {
          "id": "w_t23_p3_m3",
          "memberName": "Katia",
          "avatarInitials": "KA",
          "message": "Welcome! Which animals live near your home?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Around my suburban neighbourhood, we frequently observe cheerful sparrows, stray cats, and occasional friendly street dogs. Local residents often leave water bowls on sidewalks, especially during intense hot summer months."
        }
      ]
    },
    "part4": {
      "id": "w_t23_p4",
      "clubName": "Pet Lovers Club",
      "contextNotice": "Dear Member,\nOur annual pet show will take place on Saturday 12th April in Central Park. This year there will be a new prize for\nthe best-dressed pet, and the winner will receive a year of free pet food. Unfortunately, the park does not allow\nlarge dogs because of the children's play area. Members with large dogs should contact the club organiser.\nThe Club Secretary",
      "recipientTitle": "The club organiser",
      "recipientName": "The club organiser",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi David,\nDid you read the pet show update? There's a new prize for the most obedient pet, but some members think it causes too much stress for animals! I think it's fine if tricks are gentle. What's your opinion?\nBest,\nSana"
      },
      "taskB": {
        "prompt": "Write an email to the club organiser. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Organiser,\n\nI am writing regarding the proposed 'Most Obedient Pet' category at our forthcoming annual pet show in Central Park. While rewarding well-trained animals is an interesting concept, I share the concern that competitive pressure may cause distress to sensitive pets.\n\nTo ensure our show remains animal-friendly and celebratory, I would like to propose two modifications. Firstly, replace strict obedience testing with a 'Best Trick' or 'Happiest Rescue Pet' demonstration, focusing on joyful companionship rather than rigid discipline. Furthermore, certified veterinarians should be invited to provide free health consultations and welfare tips to pet owners throughout the event. This approach will encourage responsible pet ownership in an inclusive atmosphere.\n\nThank you very much for considering my suggestions.\n\nYours sincerely,\nNoman Haider"
      }
    }
  },
  {
    "themeName": "Sewing Club",
    "part1": {
      "id": "w_t24_p1",
      "context": "You want to join the Sewing Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t24_p1_q1",
          "prompt": "What clothes do you wear at home?",
          "maxWords": 5,
          "sampleAnswer": "Comfortable cotton trousers."
        },
        {
          "id": "w_t24_p1_q2",
          "prompt": "What is the best present you received?",
          "maxWords": 5,
          "sampleAnswer": "A leather wristwatch."
        },
        {
          "id": "w_t24_p1_q3",
          "prompt": "Which shop is nearest to your house?",
          "maxWords": 5,
          "sampleAnswer": "The corner grocery store."
        },
        {
          "id": "w_t24_p1_q4",
          "prompt": "What do you eat on holidays?",
          "maxWords": 5,
          "sampleAnswer": "Traditional sweet rice."
        },
        {
          "id": "w_t24_p1_q5",
          "prompt": "Who do you phone every week?",
          "maxWords": 5,
          "sampleAnswer": "My grandmother."
        }
      ]
    },
    "part2": {
      "id": "w_t24_p2",
      "formName": "Sewing Club Application Form",
      "prompt": "Please tell us why you are interested in sewing.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I am interested in sewing because designing customized garments is deeply satisfying. I want to learn dressmaking patterns, alteration techniques, and decorative stitching."
    },
    "part3": {
      "id": "w_t24_p3",
      "clubName": "Sewing Club",
      "context": "You are communicating online with other members of the Sewing Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t24_p3_m1",
          "memberName": "Laura",
          "avatarInitials": "LA",
          "message": "Hi! Welcome to the club. Have you ever made something with your hands?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Yes, last Eid I hand-stitched an embroidered cushion cover using silk threads. Selecting contrasting geometric patterns and finishing the neat seams gave me tremendous satisfaction and sparked my passion for textile design."
        },
        {
          "id": "w_t24_p3_m2",
          "memberName": "Sam",
          "avatarInitials": "SA",
          "message": "Hello! What kind of clothes do you like wearing?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I prefer wearing relaxed, breathable clothes made from natural fibres like organic cotton and linen. Simple tailored shirts and comfortable trousers suit my daily routine best and keep me feeling comfortable throughout the day."
        },
        {
          "id": "w_t24_p3_m3",
          "memberName": "Rita",
          "avatarInitials": "RI",
          "message": "Welcome! Who in your family makes or mends clothes?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "My mother is wonderfully skilled at tailoring and mends all our family clothes with great care. Watching her alter dresses and repair vintage jackets inspired me to develop my own needlework abilities."
        }
      ]
    },
    "part4": {
      "id": "w_t24_p4",
      "clubName": "Sewing Club",
      "contextNotice": "Dear Member,\nWe are pleased to tell you that our new sewing machines have arrived, and they are much faster than the old\nones. However, the teacher will need two weeks to show everyone how to use them safely. During this time, our\nusual classes will be replaced by short training sessions on Thursday mornings. Members who cannot come on\nThursdays should contact the club manager.\nThe Committee",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Megan,\nGreat news that our new high-speed sewing machines arrived! But the manager said beginners must complete a safety course before using them. I think that's sensible so nobody gets hurt. Will you join the Saturday safety session?\nWrite soon,\nBushra"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing to express my enthusiasm regarding the arrival of our new high-speed sewing machines. These modern appliances will certainly enhance the quality and efficiency of our club projects.\n\nI fully endorse the safety training requirement for beginners, as operating computerized machinery without proper guidance carries a risk of injury and equipment damage. To make the certification process convenient, I suggest holding two short training workshops on consecutive weekday evenings and Saturday mornings. Moreover, placing clear laminated safety guides beside each workstation would serve as a helpful permanent reminder for all members. This will ensure everyone operates the equipment safely and with complete confidence.\n\nThank you very much for continually upgrading our club facilities.\n\nYours sincerely,\nMariam Siddiqui"
      }
    }
  },
  {
    "themeName": "Camping Club",
    "part1": {
      "id": "w_t25_p1",
      "context": "You want to join the Camping Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t25_p1_q1",
          "prompt": "Which part of the day do you like best?",
          "maxWords": 5,
          "sampleAnswer": "Early sunrise morning."
        },
        {
          "id": "w_t25_p1_q2",
          "prompt": "What did you pack on your last trip?",
          "maxWords": 5,
          "sampleAnswer": "Sleeping bag and tent."
        },
        {
          "id": "w_t25_p1_q3",
          "prompt": "How do you stay in touch with friends?",
          "maxWords": 5,
          "sampleAnswer": "Through instant messaging."
        },
        {
          "id": "w_t25_p1_q4",
          "prompt": "Where were you born?",
          "maxWords": 5,
          "sampleAnswer": "In Lahore, Pakistan."
        },
        {
          "id": "w_t25_p1_q5",
          "prompt": "What is your favourite dessert?",
          "maxWords": 5,
          "sampleAnswer": "Warm chocolate pudding."
        }
      ]
    },
    "part2": {
      "id": "w_t25_p2",
      "formName": "Camping Club Application Form",
      "prompt": "Please tell us about your experience of camping and what you hope to do with the club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I have camped twice in northern valleys and loved wilderness cooking. I hope to learn mountain survival skills, campfire safety, and navigation."
    },
    "part3": {
      "id": "w_t25_p3",
      "clubName": "Camping Club",
      "context": "You are communicating online with other members of the Camping Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t25_p3_m1",
          "memberName": "Harry",
          "avatarInitials": "HA",
          "message": "Hi! Welcome to the club. Can you describe a trip when something went wrong? What happened?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "During a camping trip last autumn, a sudden midnight thunderstorm soaked our tent and extinguished our campfire. We had to pack our gear in pitch darkness and shelter inside our jeep until morning."
        },
        {
          "id": "w_t25_p3_m2",
          "memberName": "Preeti",
          "avatarInitials": "PR",
          "message": "Hello! What do you think are the best things to take on a camping trip? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Essential items for any camping expedition include a durable waterproof tent, a warm sleeping bag, and a reliable multi-tool knife. A portable water filter and first-aid supplies are also non-negotiable for safety."
        },
        {
          "id": "w_t25_p3_m3",
          "memberName": "Jules",
          "avatarInitials": "JU",
          "message": "Welcome! Why do you think some people prefer camping to staying in hotels?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Camping connects people directly with undisturbed nature, allowing them to escape digital screens and bustling city noise. Sleeping beneath starry skies and preparing outdoor meals creates deeper memories than staying in luxury hotel rooms."
        }
      ]
    },
    "part4": {
      "id": "w_t25_p4",
      "clubName": "Camping Club",
      "contextNotice": "Dear Member,\nWe regret to inform you that our summer camping trip to Lake Eden cannot take place as planned because the\ncampsite has been sold. The committee has found two other places. The first is a mountain campsite which has\nbeautiful views but no showers or electricity. The second is a seaside campsite with excellent facilities, but it is\nexpensive and only has space for thirty members. Please let us know which place you would prefer.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two places you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Ethan,\nDid you hear about our summer trip to Lake Eden? It's cancelled because campsite roads were damaged by landslides! The manager suggested Pine Forest instead, which has great hiking trails. Do you fancy going there instead?\nBest wishes,\nAdnan"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two places and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing in response to the notification regarding the cancellation of our summer camping expedition to Lake Eden due to severe road damage. While this news is disappointing, ensuring member safety is paramount.\n\nI strongly support relocating the trip to Pine Forest campsite as proposed. Pine Forest offers well-maintained trails, secure designated camping zones, and reliable freshwater springs. To ensure a seamless trip, I suggest sending an updated equipment checklist suited to higher elevation weather. Furthermore, the club could organise group transport from the city centre to minimize travel costs for students and ensure all members arrive together safely without navigational difficulties.\n\nThank you very much for your proactive leadership and swift organisation.\n\nYours sincerely,\nUsman Farooq"
      }
    }
  },
  {
    "themeName": "Coding Club",
    "part1": {
      "id": "w_t26_p1",
      "context": "You want to join the Coding Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t26_p1_q1",
          "prompt": "What do you do on your computer every day?",
          "maxWords": 5,
          "sampleAnswer": "Write software code."
        },
        {
          "id": "w_t26_p1_q2",
          "prompt": "Which country makes the best phones?",
          "maxWords": 5,
          "sampleAnswer": "South Korea and Japan."
        },
        {
          "id": "w_t26_p1_q3",
          "prompt": "How do you learn new things?",
          "maxWords": 5,
          "sampleAnswer": "Watching online tutorials."
        },
        {
          "id": "w_t26_p1_q4",
          "prompt": "What was the last film you watched?",
          "maxWords": 5,
          "sampleAnswer": "The Social Network."
        },
        {
          "id": "w_t26_p1_q5",
          "prompt": "Where do you want to work?",
          "maxWords": 5,
          "sampleAnswer": "At a tech startup."
        }
      ]
    },
    "part2": {
      "id": "w_t26_p2",
      "formName": "Coding Club Application Form",
      "prompt": "Please tell us why you want to learn to write computer programs.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to learn coding because programming empowers me to build useful digital solutions. I hope to master web development, algorithms, and database management."
    },
    "part3": {
      "id": "w_t26_p3",
      "clubName": "Coding Club",
      "context": "You are communicating online with other members of the Coding Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t26_p3_m1",
          "memberName": "Marta",
          "avatarInitials": "MA",
          "message": "Hi! Welcome to the club. Do you think children should learn coding at school? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Yes, computer programming teaches logical thinking, problem decomposition, and resilience. Introducing computational principles early equips pupils with indispensable digital literacy that will prove invaluable in almost every modern professional career."
        },
        {
          "id": "w_t26_p3_m2",
          "memberName": "Ken",
          "avatarInitials": "KE",
          "message": "Hello! Can you describe a time when technology made your life easier?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Last year, automated online banking and mobile payment apps saved me hours of waiting in crowded bank branches. Managing transactions and bill payments instantly via smartphone makes daily personal administration effortless."
        },
        {
          "id": "w_t26_p3_m3",
          "memberName": "Zainab",
          "avatarInitials": "ZA",
          "message": "Welcome! What problems do you think computers will never be able to solve?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Computers cannot replicate genuine human empathy, moral judgment, and emotional intuition. While algorithms process vast statistical data efficiently, authentic creativity, ethical reasoning, and compassionate caregiving remain uniquely human qualities that machines cannot duplicate."
        }
      ]
    },
    "part4": {
      "id": "w_t26_p4",
      "clubName": "Coding Club",
      "contextNotice": "Dear Member,\nThe committee wishes to tell you that our weekly lessons will no longer be held at the Community College\nbecause the computer room is needed for evening classes. We have been offered a smaller room at the library\nwith only ten computers, although it is open every evening. Members who have a laptop could bring it with them.\nAlternatively, lessons could take place online. Please tell us what you think.\nThe Club Secretary",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Leo,\nDid you see the coding club email? The college venue isn't available, so we're choosing between moving online or renting an IT suite for three pounds per session. I prefer the IT suite because coding in person is much better! What do you think?\nTalk soon,\nHaris"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Secretary,\n\nI am writing to provide feedback on the proposed venues for our weekly programming classes following the discontinuation of our classroom booking at the Community College. Having weighed the options, I strongly favour renting the downtown IT suite.\n\nWhile remote online sessions offer convenience, in-person workshops allow mentors to troubleshoot software bugs directly over learners' shoulders, which significantly accelerates comprehension for beginners. A fee of three pounds is very reasonable for high-speed internet and modern hardware. To assist members unable to attend physically, the club could record key lecture segments and post them in our shared repository. This balanced approach will satisfy both active and remote learners.\n\nThank you for your tireless dedication to our coding community.\n\nYours sincerely,\nBilal Chaudhry"
      }
    }
  },
  {
    "themeName": "Creative Writing Club",
    "part1": {
      "id": "w_t27_p1",
      "context": "You want to join the Creative Writing Club. You have 5 messages from a member of the club. Write short\nanswers (1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t27_p1_q1",
          "prompt": "What is your favourite word?",
          "maxWords": 5,
          "sampleAnswer": "Serendipity is beautiful."
        },
        {
          "id": "w_t27_p1_q2",
          "prompt": "What did you dream about last night?",
          "maxWords": 5,
          "sampleAnswer": "Walking in lush gardens."
        },
        {
          "id": "w_t27_p1_q3",
          "prompt": "How do you spend long journeys?",
          "maxWords": 5,
          "sampleAnswer": "Reading engaging novels."
        },
        {
          "id": "w_t27_p1_q4",
          "prompt": "Which month is your birthday?",
          "maxWords": 5,
          "sampleAnswer": "The month of August."
        },
        {
          "id": "w_t27_p1_q5",
          "prompt": "What was your first job?",
          "maxWords": 5,
          "sampleAnswer": "A library assistant."
        }
      ]
    },
    "part2": {
      "id": "w_t27_p2",
      "formName": "Creative Writing Club Application Form",
      "prompt": "Please tell us what kind of writing you enjoy and why you want to join.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I write short stories exploring family relationships and personal growth. I want to join the club to receive constructive critiques and polish dialogue writing."
    },
    "part3": {
      "id": "w_t27_p3",
      "clubName": "Creative Writing Club",
      "context": "You are communicating online with other members of the Creative Writing Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t27_p3_m1",
          "memberName": "Naomi",
          "avatarInitials": "NA",
          "message": "Hi! Welcome to the club. Have you ever written a story, poem or diary? What was it about?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Last year, I wrote a short story about an elderly watchmaker who fixed vintage clocks to preserve cherished memories of his deceased wife. Writing it helped me explore themes of love, grief, and passing time."
        },
        {
          "id": "w_t27_p3_m2",
          "memberName": "Victor",
          "avatarInitials": "VI",
          "message": "Hello! Who is your favourite writer, and what do you like about their work?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "My favourite author is George Orwell because his prose is remarkably clear, forceful, and devoid of needless jargon. His political allegories convey profound philosophical truths through gripping and accessible narratives."
        },
        {
          "id": "w_t27_p3_m3",
          "memberName": "Aisha",
          "avatarInitials": "AI",
          "message": "Welcome! Do you think people read less now than in the past? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "People certainly read fewer printed books today due to captivating digital entertainment like video games and social media feeds. However, short digital articles and audiobooks remain popular, showing that hunger for storytelling persists."
        }
      ]
    },
    "part4": {
      "id": "w_t27_p4",
      "clubName": "Creative Writing Club",
      "contextNotice": "Dear Member,\nWe are happy to announce that the club has been invited to publish a collection of members' stories. However,\nthe publisher has said that only twenty stories can be included. The committee has two ways of choosing them.\nWe could ask a famous author, Mr Daniel Fox, to read all the stories and select the best ones. Alternatively, we\ncould ask members to vote for the stories they like most. Please let us know which method you prefer.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two methods you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Clara,\nExciting news! The club is publishing a collection of our stories! But only twenty can be selected. They're debating whether Daniel Fox should choose them or if members should vote. I think Daniel Fox's professional feedback would be fairer! What do you think?\nBest,\nSaim"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two methods and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing to express my views regarding the selection process for our upcoming anthology of members' short stories. Publishing our work is a tremendous milestone, and I strongly recommend inviting Mr Daniel Fox to evaluate and select the stories.\n\nWhile a member vote sounds democratic, it risks turning into a popularity contest where members with large friend circles receive unfair advantages. Having an established author judge submissions ensures objective appraisal based on literary technique, originality, and storytelling depth. In addition, could Mr Fox be invited to write brief editorial comments for the chosen stories? This would make the anthology prestigious and educational for all aspiring writers in our club.\n\nThank you for orchestrating this fantastic publishing project.\n\nYours sincerely,\nNida Yasmin"
      }
    }
  },
  {
    "themeName": "Yoga Club",
    "part1": {
      "id": "w_t28_p1",
      "context": "You want to join the Yoga Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t28_p1_q1",
          "prompt": "What do you drink when you are thirsty?",
          "maxWords": 5,
          "sampleAnswer": "Cold mineral water."
        },
        {
          "id": "w_t28_p1_q2",
          "prompt": "How many hours do you sleep?",
          "maxWords": 5,
          "sampleAnswer": "Seven hours each night."
        },
        {
          "id": "w_t28_p1_q3",
          "prompt": "Which room do you clean first?",
          "maxWords": 5,
          "sampleAnswer": "My study bedroom."
        },
        {
          "id": "w_t28_p1_q4",
          "prompt": "What do you do at the weekend?",
          "maxWords": 5,
          "sampleAnswer": "I hike and rest."
        },
        {
          "id": "w_t28_p1_q5",
          "prompt": "What is your favourite smell?",
          "maxWords": 5,
          "sampleAnswer": "Fresh fragrant jasmine."
        }
      ]
    },
    "part2": {
      "id": "w_t28_p2",
      "formName": "Yoga Club Application Form",
      "prompt": "Please tell us why you would like to try yoga.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to try yoga to improve flexibility, posture, and mindfulness. Regular stretching will help me relieve back tension caused by long study hours."
    },
    "part3": {
      "id": "w_t28_p3",
      "clubName": "Yoga Club",
      "context": "You are communicating online with other members of the Yoga Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t28_p3_m1",
          "memberName": "Elena",
          "avatarInitials": "EL",
          "message": "Hi! Welcome to the club. How do you feel when you are under stress, and what do you do about it?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Under stress, my shoulders tighten and I experience frequent headaches. To restore calm, I close my eyes, practise slow deep belly breathing, and take a gentle twenty-minute walk outdoors in fresh air."
        },
        {
          "id": "w_t28_p3_m2",
          "memberName": "Pedro",
          "avatarInitials": "PE",
          "message": "Hello! Can you describe a time when you tried something completely new?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Last summer, I attended a martial arts self-defence seminar despite having zero combat experience. I felt awkward initially, but stepping outside my comfort zone taught me bodily coordination and boosted my personal confidence."
        },
        {
          "id": "w_t28_p3_m3",
          "memberName": "Samira",
          "avatarInitials": "SA",
          "message": "Welcome! Why do you think so many people are interested in healthy living nowadays?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Modern lifestyles involve prolonged screen exposure, sedentary desk jobs, and constant workplace pressure. Consequently, people seek holistic practices like yoga and balanced nutrition to protect their mental well-being and maintain long-term physical health."
        }
      ]
    },
    "part4": {
      "id": "w_t28_p4",
      "clubName": "Yoga Club",
      "contextNotice": "Dear Member,\nOur yoga teacher, Ms Sara Cole, has told us that she will be moving to another city at the end of the month. The\ncommittee has been looking for a replacement, and has found Mr Arjun Rao, who has taught yoga for ten years.\nHowever, his lessons are on Tuesday evenings, and ours have always been on Monday mornings. He also\ncharges ten pounds more per month. Please contact the secretary with your comments.\nThe Committee",
      "recipientTitle": "The secretary",
      "recipientName": "The secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Laura,\nDid you see the yoga club update? Ms Cole is leaving and Mr Rao is taking over on Tuesday evenings instead of Monday mornings. Plus, the monthly fee is ten pounds higher! Tuesday evenings actually suit me better after work. Will you stay with the club?\nWrite soon,\nMehwish"
      },
      "taskB": {
        "prompt": "Write an email to the secretary. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Secretary,\n\nI am writing regarding the upcoming changes in our yoga instruction following Ms Cole's departure. Firstly, I would like to convey my sincere appreciation to Ms Cole for her wonderful guidance over past terms.\n\nRegarding the transition to Mr Rao, Tuesday evening classes are very convenient for members who work during weekday mornings. However, the proposed ten-pound fee increase might deter students and pensioners on tight budgets. Therefore, I would like to offer two suggestions. Firstly, could the club introduce a concessionary membership rate for students? Additionally, offering a complimentary introductory workshop with Mr Rao would allow members to experience his teaching methodology before committing to higher fees.\n\nThank you for considering my views.\n\nYours sincerely,\nRabia Basit"
      }
    }
  },
  {
    "themeName": "Debate Club",
    "part1": {
      "id": "w_t29_p1",
      "context": "You want to join the Debate Club. You have 5 messages from a member of the club. Write short answers (1–5\nwords) to each message.",
      "questions": [
        {
          "id": "w_t29_p1_q1",
          "prompt": "Who is the most famous person in your country?",
          "maxWords": 5,
          "sampleAnswer": "Quaid-e-Azam Muhammad Ali Jinnah."
        },
        {
          "id": "w_t29_p1_q2",
          "prompt": "What do you complain about?",
          "maxWords": 5,
          "sampleAnswer": "Delayed public transportation."
        },
        {
          "id": "w_t29_p1_q3",
          "prompt": "How do you travel on holidays?",
          "maxWords": 5,
          "sampleAnswer": "By train and car."
        },
        {
          "id": "w_t29_p1_q4",
          "prompt": "What is your favourite sport to watch?",
          "maxWords": 5,
          "sampleAnswer": "Watching football tournaments."
        },
        {
          "id": "w_t29_p1_q5",
          "prompt": "What do you do in the evenings?",
          "maxWords": 5,
          "sampleAnswer": "Reading and discussing news."
        }
      ]
    },
    "part2": {
      "id": "w_t29_p2",
      "formName": "Debate Club Application Form",
      "prompt": "Please tell us why you are interested in debating.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I am interested in debating because constructing persuasive arguments sharpens critical reasoning. I hope to master rebuttal techniques and public speaking under competitive pressure."
    },
    "part3": {
      "id": "w_t29_p3",
      "clubName": "Debate Club",
      "context": "You are communicating online with other members of the Debate Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t29_p3_m1",
          "memberName": "Gareth",
          "avatarInitials": "GA",
          "message": "Hi! Welcome to the club. Do you think it is good to disagree with people? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Constructive disagreement is immensely beneficial because it challenges unexamined assumptions and exposes hidden flaws in our reasoning. Respectful debate fosters open-mindedness, intellectual humility, and prevents echo-chamber thinking within modern societies."
        },
        {
          "id": "w_t29_p3_m2",
          "memberName": "Lina",
          "avatarInitials": "LI",
          "message": "Hello! Can you describe a time when you changed your opinion about something?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I used to believe nuclear power was overly hazardous, but after studying comparative emissions data and modern reactor safeguards, I recognized that nuclear energy is indispensable for achieving zero-carbon baseload electricity globally."
        },
        {
          "id": "w_t29_p3_m3",
          "memberName": "Tariq",
          "avatarInitials": "TA",
          "message": "Welcome! What topics do you think young people should discuss more?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Young citizens should actively debate climate crisis mitigation, ethical artificial intelligence regulations, and educational inequality. Discussing these urgent challenges equips youth to participate meaningfully in civic governance and policy formulation."
        }
      ]
    },
    "part4": {
      "id": "w_t29_p4",
      "clubName": "Debate Club",
      "contextNotice": "Dear Member,\nWe regret to tell you that the town hall, where we hold our monthly debates, will not be available during the\nsummer. The committee is considering two options. We could hold the debates in a local café, which is free but\nnoisy and can seat only twenty people. Alternatively, we could hold them online, which would allow anyone to\njoin, but some members have said it is difficult to discuss properly on a screen. We would welcome your views.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two options you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Ryan,\nDid you see the debate club notice? The town hall is unavailable this summer! The manager proposed either meeting in a local cafe or debating online. I prefer debating online because cafes are far too noisy for serious speeches. What's your view?\nBest,\nDaniyal"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two options and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing in response to the announcement regarding the temporary unavailability of the town hall during summer months. Having reviewed the proposed alternatives carefully, I strongly recommend conducting our debates online.\n\nA crowded cafe with background chatter, music, and a twenty-person capacity limit would severely compromise speakers' vocal clarity and audience concentration. Online video platforms provide mute controls, automated timing tools, and unrestricted attendance for all members. To enhance the virtual debate experience, I suggest using breakout rooms for team preparation and recording debates so members can critique their delivery afterwards. This practical approach ensures uninterrupted continuity and maintains our society's high professional standards.\n\nThank you very much for keeping our debate society active and connected.\n\nYours sincerely,\nShehroz Malik"
      }
    }
  },
  {
    "themeName": "Martial Arts Club",
    "part1": {
      "id": "w_t30_p1",
      "context": "You want to join the Martial Arts Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t30_p1_q1",
          "prompt": "What do you do when you are bored?",
          "maxWords": 5,
          "sampleAnswer": "I practice push-ups."
        },
        {
          "id": "w_t30_p1_q2",
          "prompt": "What is the best thing about your town?",
          "maxWords": 5,
          "sampleAnswer": "The scenic green parks."
        },
        {
          "id": "w_t30_p1_q3",
          "prompt": "How do you keep fit?",
          "maxWords": 5,
          "sampleAnswer": "Daily running and stretching."
        },
        {
          "id": "w_t30_p1_q4",
          "prompt": "Which language do you speak at home?",
          "maxWords": 5,
          "sampleAnswer": "Urdu and English."
        },
        {
          "id": "w_t30_p1_q5",
          "prompt": "What do you wear to work or school?",
          "maxWords": 5,
          "sampleAnswer": "A casual collared shirt."
        }
      ]
    },
    "part2": {
      "id": "w_t30_p2",
      "formName": "Martial Arts Club Application Form",
      "prompt": "Please tell us why you want to learn martial arts.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to learn martial arts to develop self-discipline, mental focus, and practical self-defence. Regular sparring will also improve my physical agility and stamina."
    },
    "part3": {
      "id": "w_t30_p3",
      "clubName": "Martial Arts Club",
      "context": "You are communicating online with other members of the Martial Arts Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t30_p3_m1",
          "memberName": "Danny",
          "avatarInitials": "DA",
          "message": "Hi! Welcome to the club. Do you think children should learn self-defence? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Learning self-defence empowers children with spatial awareness, situational alertness, and personal boundary assertiveness. More importantly, reputable martial arts academies emphasize discipline, conflict de-escalation, and emotional control rather than physical violence."
        },
        {
          "id": "w_t30_p3_m2",
          "memberName": "Hoda",
          "avatarInitials": "HO",
          "message": "Hello! Can you describe a sport that you tried but did not enjoy?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I once tried competitive rowing, but the repetitive arm strain and freezing early morning water made it grueling. I quickly realized that dynamic sports involving quick footwork and tactical strategy suited my temperament much better."
        },
        {
          "id": "w_t30_p3_m3",
          "memberName": "Luis",
          "avatarInitials": "LU",
          "message": "Welcome! What qualities do you think a good athlete needs?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "A remarkable athlete requires fierce discipline, emotional resilience under pressure, and relentless dedication to continuous training. Maintaining humble sportsmanship and respect for opponents distinguishes great competitors from merely talented performers."
        }
      ]
    },
    "part4": {
      "id": "w_t30_p4",
      "clubName": "Martial Arts Club",
      "contextNotice": "Dear Member,\nFollowing a visit by the fire department, the club has been told that our training hall is no longer safe for more than\ntwenty people. Since we have about fifty members, we must either divide into three groups or find a new hall. The\ngroups would train on different evenings, so some members would have to change their plans. A bigger hall is\navailable across town, but it would cost every member five pounds more each month. Please share your opinion.\nThe Chairperson",
      "recipientTitle": "The chairperson",
      "recipientName": "The chairperson",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and what you think the club should do about the situation. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Marco,\nDid you see the martial arts notice? The fire department capped hall capacity at twenty! We have to choose between splitting into three groups on different nights or paying five pounds extra for a bigger hall. I'd rather pay five pounds to keep our whole squad together! What do you think?\nCheers,\nWaqas"
      },
      "taskB": {
        "prompt": "Write an email to the chairperson. Write about your feelings and what you think the club should do about the situation. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Chairperson,\n\nI am writing concerning the fire safety regulations affecting our training dojo capacity. Ensuring member safety is essential, and after assessing both options, I strongly recommend relocating to the larger training hall across town.\n\nSplitting fifty members into three smaller groups across different evenings would fragment our coaching continuity and restrict sparring partner variety. Paying five pounds extra per month is a modest and worthwhile investment to keep our entire community together in a fully compliant, spacious facility. To assist members with the commute, we could organize carpools from the old venue. In addition, student members could receive a slight discount subsidized by equipment merchandise sales, ensuring that no member is left behind.\n\nThank you for safeguarding our club's future.\n\nYours sincerely,\nMustafa Kamal"
      }
    }
  },
  {
    "themeName": "Robotics Club",
    "part1": {
      "id": "w_t31_p1",
      "context": "You want to join the Robotics Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t31_p1_q1",
          "prompt": "What do you do first when you get home?",
          "maxWords": 5,
          "sampleAnswer": "Wash up and relax."
        },
        {
          "id": "w_t31_p1_q2",
          "prompt": "How do you feel on Monday mornings?",
          "maxWords": 5,
          "sampleAnswer": "Motivated and ready."
        },
        {
          "id": "w_t31_p1_q3",
          "prompt": "Which invention would you like to own?",
          "maxWords": 5,
          "sampleAnswer": "A robotic home assistant."
        },
        {
          "id": "w_t31_p1_q4",
          "prompt": "What do you buy for your family?",
          "maxWords": 5,
          "sampleAnswer": "Fresh fruits and pastries."
        },
        {
          "id": "w_t31_p1_q5",
          "prompt": "Where do you shop for clothes?",
          "maxWords": 5,
          "sampleAnswer": "At local shopping malls."
        }
      ]
    },
    "part2": {
      "id": "w_t31_p2",
      "formName": "Robotics Club Application Form",
      "prompt": "Please explain why you are interested in robots and what you hope to build.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I am interested in robotics because integrating mechanical engineering with intelligent code is thrilling. I hope to build autonomous obstacle-avoiding rovers and drone mechanisms."
    },
    "part3": {
      "id": "w_t31_p3",
      "clubName": "Robotics Club",
      "context": "You are communicating online with other members of the Robotics Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t31_p3_m1",
          "memberName": "Aaron",
          "avatarInitials": "AA",
          "message": "Hi! Welcome to the club. Do you think robots will take away many people's jobs in the future? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Automation will inevitably eliminate repetitive manual and administrative roles, displacing certain traditional jobs. However, technological revolutions simultaneously generate new employment in software architecture, robotics servicing, data engineering, and system supervision."
        },
        {
          "id": "w_t31_p3_m2",
          "memberName": "Priyanka",
          "avatarInitials": "PR",
          "message": "Hello! Can you describe a machine that you could not live without?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "I could never manage without my smartphone in daily life. It functions as my navigational compass, academic library, primary communication hub, and financial wallet simultaneously, streamlining everyday responsibilities and academic research immensely."
        },
        {
          "id": "w_t31_p3_m3",
          "memberName": "Felix",
          "avatarInitials": "FE",
          "message": "Welcome! How could robots be used to help elderly or disabled people?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Robotics can revolutionize eldercare by deploying automated mobility exoskeletons, medication reminder dispensers, and robotic companions. Such assistive devices preserve seniors' independent dignity while ensuring vital physical safety and constant emergency monitoring."
        }
      ]
    },
    "part4": {
      "id": "w_t31_p4",
      "clubName": "Robotics Club",
      "contextNotice": "Dear Member,\nWe are pleased to tell you that the club has won a prize of two thousand pounds in a national competition. The\ncommittee has two proposals for spending the money. The first is to buy a high-quality robot kit, which would give\nmembers a chance to build advanced machines, but only about fifteen people could use it at one time. The\nsecond is to organise free workshops for local school children to introduce them to robotics, which would help the\ncommunity but leave little money for new equipment. Please tell us which proposal you support.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two proposals you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Nathan,\nDid you hear our robotics club won that two-thousand-pound national prize? The committee is deciding between buying an advanced robot kit for members or running free school workshops. I think school workshops would inspire so many kids! What's your vote?\nBest,\nTalha"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two proposals and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing to congratulate our club on winning the national competition prize of two thousand pounds. Regarding the committee's proposal for allocating these funds, I strongly advocate hosting free robotics workshops for local schoolchildren.\n\nWhile an advanced robotics kit would benefit fifteen experienced members, educational community outreach fulfills our social responsibility and sparks scientific passion among underprivileged youth. This initiative would also elevate our club's public reputation, attracting future municipal sponsorship. To accommodate members' hardware needs, we could purchase several affordable micro-controller kits with the remaining funds and invite workshop participants to assist in assembly. This strategy provides inspiring outreach while still supporting member development.\n\nThank you for leading our club to national recognition.\n\nYours sincerely,\nOmer Farooq"
      }
    }
  },
  {
    "themeName": "Architecture Club",
    "part1": {
      "id": "w_t32_p1",
      "context": "You want to join the Architecture Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t32_p1_q1",
          "prompt": "What is your neighbourhood like?",
          "maxWords": 5,
          "sampleAnswer": "Quiet, tree-lined, and historic."
        },
        {
          "id": "w_t32_p1_q2",
          "prompt": "Which building do you pass every day?",
          "maxWords": 5,
          "sampleAnswer": "The grand municipal library."
        },
        {
          "id": "w_t32_p1_q3",
          "prompt": "What would you change in your town?",
          "maxWords": 5,
          "sampleAnswer": "Create more pedestrian zones."
        },
        {
          "id": "w_t32_p1_q4",
          "prompt": "How do you decorate your room?",
          "maxWords": 5,
          "sampleAnswer": "With framed architectural blueprints."
        },
        {
          "id": "w_t32_p1_q5",
          "prompt": "What do you notice about new buildings?",
          "maxWords": 5,
          "sampleAnswer": "Their sleek glass facades."
        }
      ]
    },
    "part2": {
      "id": "w_t32_p2",
      "formName": "Architecture Club Application Form",
      "prompt": "Please describe your interest in buildings and cities, and what you could offer the club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I love architectural history and urban planning. I want to offer the club architectural sketching skills, historical research on heritage landmarks, and 3D modeling expertise."
    },
    "part3": {
      "id": "w_t32_p3",
      "clubName": "Architecture Club",
      "context": "You are communicating online with other members of the Architecture Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t32_p3_m1",
          "memberName": "Jasmine",
          "avatarInitials": "JA",
          "message": "Hi! Welcome to the club. Do you think old buildings should always be protected, or should they be replaced with modern ones? Why?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Historic structures possess irreplaceable cultural identity, authentic craftsmanship, and soul that modern concrete facades rarely match. Wherever structurally viable, historic buildings should be preserved through adaptive reuse rather than destroyed for commercial blocks."
        },
        {
          "id": "w_t32_p3_m2",
          "memberName": "Mehmet",
          "avatarInitials": "ME",
          "message": "Hello! What do you think makes a city a pleasant place to live?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "A livable city requires expansive green parks, clean pedestrian pathways, accessible public transit, and vibrant civic squares. Thoughtful zoning that mixes residential neighborhoods with local amenities creates thriving, walkable communities."
        },
        {
          "id": "w_t32_p3_m3",
          "memberName": "Chloe",
          "avatarInitials": "CH",
          "message": "Welcome! How could the way we design buildings help to fight climate change?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Sustainable architecture mitigates climate change by incorporating solar panels, rainwater harvesting tanks, and passive cross-ventilation. Selecting locally sourced recycled timber and thermally efficient insulation drastically reduces buildings' lifetime carbon emissions."
        }
      ]
    },
    "part4": {
      "id": "w_t32_p4",
      "clubName": "Architecture Club",
      "contextNotice": "Dear Member,\nThe city council has asked our club to help decide what to do with the old railway station, which has been empty\nfor twenty years. One suggestion is to turn it into a museum and cultural centre, which would preserve the\nbuilding but cost a great deal of public money. Another is to pull it down and build a park with a sports ground,\nwhich would be cheaper and more useful to local families but would remove a historic landmark. The council\nwould like to know the opinion of our members.\nThe Club Secretary",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two suggestions you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Fiona,\nDid you see the council consultation notice about the old railway station? They might convert it into a cultural museum or demolish it for a sports park. The station has incredible Victorian architecture, so we must save it as a museum! What do you think?\nTalk soon,\nSuleman"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings, then recommend ONE of the two suggestions and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Secretary,\n\nI am writing to submit my recommendations concerning the redevelopment of our city's historic railway station. Having evaluated both options presented by the city council, I urge our club to champion its transformation into a museum and cultural centre.\n\nThe nineteenth-century brick arches and ironwork constitute a priceless architectural landmark that reflects our industrial heritage. Demolishing this structure would erase decades of communal memory. While museum conversion requires upfront capital, it generates long-term tourism revenue and cultural prestige. To address the community's recreational needs, the council could incorporate an outdoor sculpture garden and walking tracks along the abandoned rail corridors surrounding the station, achieving a harmonious balance between preservation and recreation.\n\nThank you for representing our architectural society.\n\nYours sincerely,\nAdil Jahangir"
      }
    }
  },
  {
    "themeName": "Journalism Club",
    "part1": {
      "id": "w_t33_p1",
      "context": "You want to join the Journalism Club. You have 5 messages from a member of the club. Write short answers\n(1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t33_p1_q1",
          "prompt": "What news do you read first?",
          "maxWords": 5,
          "sampleAnswer": "International political headlines."
        },
        {
          "id": "w_t33_p1_q2",
          "prompt": "Which website do you use most?",
          "maxWords": 5,
          "sampleAnswer": "BBC and Reuters news."
        },
        {
          "id": "w_t33_p1_q3",
          "prompt": "Who tells you the news?",
          "maxWords": 5,
          "sampleAnswer": "Reputable digital news outlets."
        },
        {
          "id": "w_t33_p1_q4",
          "prompt": "What do you do during breaks?",
          "maxWords": 5,
          "sampleAnswer": "Read editorial opinion columns."
        },
        {
          "id": "w_t33_p1_q5",
          "prompt": "How do you check if something is true?",
          "maxWords": 5,
          "sampleAnswer": "By verifying primary sources."
        }
      ]
    },
    "part2": {
      "id": "w_t33_p2",
      "formName": "Journalism Club Application Form",
      "prompt": "Please explain why you want to join the Journalism Club and what stories interest you.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I want to join the Journalism Club to learn investigative reporting, interviewing ethics, and fact-checking standards. I am passionate about covering environmental justice and community issues."
    },
    "part3": {
      "id": "w_t33_p3",
      "clubName": "Journalism Club",
      "context": "You are communicating online with other members of the Journalism Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t33_p3_m1",
          "memberName": "Rachel",
          "avatarInitials": "RA",
          "message": "Hi! Welcome to the club. Do you think people can trust everything they read online? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Unregulated online media contains sensationalised headlines, unverified rumors, and algorithmic clickbait designed for advertising revenue. Readers must cross-reference claims against multiple credible, established investigative news agencies before accepting information as fact."
        },
        {
          "id": "w_t33_p3_m2",
          "memberName": "Imran",
          "avatarInitials": "IM",
          "message": "Hello! Can you describe a news story that affected you personally?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "A local investigative report documenting untreated factory wastewater dumping in our nearby river impacted me deeply. The journalist's rigorous evidence compelled municipal authorities to penalize the offending corporation and install water filtration plants."
        },
        {
          "id": "w_t33_p3_m3",
          "memberName": "Sophie",
          "avatarInitials": "SO",
          "message": "Welcome! What responsibilities do you think journalists have towards the public?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Journalists carry an immense civic responsibility to deliver impartial, verifiable truth without political bias or sensationalism. They act as public watchdogs holding powerful corporate and government institutions accountable to ordinary citizens."
        }
      ]
    },
    "part4": {
      "id": "w_t33_p4",
      "clubName": "Journalism Club",
      "contextNotice": "Dear Member,\nWe are writing to tell you that the club's monthly magazine will have to change. The printing costs have risen\nsharply, and the club cannot afford to continue as before. The committee suggests two possibilities. The first is to\nstop printing the magazine and publish it only on a website, which is cheaper and could reach more readers, but\nolder members might find it difficult to use. The second is to print it only four times a year, but keep it in its present\nform. Please send us your views.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two possibilities you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Marcus,\nDid you see the journalism club update? Printing costs jumped, so we must choose between going fully digital online or printing quarterly. I prefer going digital because online articles reach wider audiences instantly and save trees! What's your take?\nBest,\nKashif"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two possibilities and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing to share my views on reforming our monthly magazine in light of escalating print expenses. Having considered both alternatives proposed by the committee, I firmly endorse shifting to a fully digital publication.\n\nA modern website eliminates unsustainable paper and distribution expenditures while enabling multimedia storytelling, interactive infographics, and immediate reader feedback. It also dramatically broadens our readership among younger demographics. To accommodate older members who prefer physical formats, the club could produce a limited print summary twice yearly and organise digital reading workshops at the community centre. This will allow our journalism to thrive economically while preserving inclusivity for everyone.\n\nThank you for managing our editorial club through this evolving media landscape.\n\nYours sincerely,\nShahid Nadeem"
      }
    }
  },
  {
    "themeName": "Healthy Living Club",
    "part1": {
      "id": "w_t34_p1",
      "context": "You want to join the Healthy Living Club. You have 5 messages from a member of the club. Write short\nanswers (1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t34_p1_q1",
          "prompt": "What do you eat between meals?",
          "maxWords": 5,
          "sampleAnswer": "Almonds and fresh apples."
        },
        {
          "id": "w_t34_p1_q2",
          "prompt": "How do you start your weekends?",
          "maxWords": 5,
          "sampleAnswer": "With morning stretching exercises."
        },
        {
          "id": "w_t34_p1_q3",
          "prompt": "What helps you concentrate?",
          "maxWords": 5,
          "sampleAnswer": "Quiet rooms and coffee."
        },
        {
          "id": "w_t34_p1_q4",
          "prompt": "Which vegetable do you dislike?",
          "maxWords": 5,
          "sampleAnswer": "Overcooked bitter bittergourd."
        },
        {
          "id": "w_t34_p1_q5",
          "prompt": "What advice would you give a tired friend?",
          "maxWords": 5,
          "sampleAnswer": "Take rest and hydrate."
        }
      ]
    },
    "part2": {
      "id": "w_t34_p2",
      "formName": "Healthy Living Club Application Form",
      "prompt": "Please explain what you do to stay healthy and what you hope to learn from the club.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "I exercise daily, consume organic vegetables, and sleep eight hours nightly. I want to learn nutritional biochemistry, stress-management routines, and preventive wellness strategies from the club."
    },
    "part3": {
      "id": "w_t34_p3",
      "clubName": "Healthy Living Club",
      "context": "You are communicating online with other members of the Healthy Living Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t34_p3_m1",
          "memberName": "Dr Stone",
          "avatarInitials": "DR",
          "message": "Hi! Welcome to the club. Do you think schools should teach children how to cook and eat well? Why or why not?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Yes, mandatory culinary education in schools instills foundational dietary literacy early in childhood. Teaching children how to prepare wholesome meals counteracts reliance on ultra-processed junk foods and prevents chronic lifestyle diseases later."
        },
        {
          "id": "w_t34_p3_m2",
          "memberName": "Beth",
          "avatarInitials": "BE",
          "message": "Hello! Can you describe a habit you have changed to improve your health?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Two years ago, I eliminated sugary sodas and packaged pastries completely from my daily diet. Substituting infused lemon water and fresh fruit restored my daytime energy levels and cured my afternoon fatigue remarkably."
        },
        {
          "id": "w_t34_p3_m3",
          "memberName": "Ahmed",
          "avatarInitials": "AH",
          "message": "Welcome! Why do you think many people find it difficult to follow a healthy lifestyle?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Demanding corporate hours, long daily commutes, and aggressive marketing of cheap processed fast food create significant hurdles. Furthermore, establishing consistent fitness habits requires disciplined psychological willpower against comfortable sedentary routines."
        }
      ]
    },
    "part4": {
      "id": "w_t34_p4",
      "clubName": "Healthy Living Club",
      "contextNotice": "Dear Member,\nThe club's weekly morning exercise sessions have become so popular that the park café, where we meet\nafterwards for a healthy breakfast, can no longer serve everybody. The committee has therefore proposed two\nchanges. We could divide members into two groups, with one group exercising at six o'clock and the other at\nseven thirty. Alternatively, we could stop meeting at the café and ask each member to bring their own breakfast to\nshare in the park. We would like to know your opinion.\nThe Club Secretary",
      "recipientTitle": "The club secretary",
      "recipientName": "The club secretary",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two changes you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Hannah,\nDid you see the club notice about our breakfast gatherings? The cafe is overcrowded now! The secretary proposed either two exercise shifts or bringing our own picnic breakfast to the park. I love the picnic idea because sharing home-cooked snacks is wonderful! What do you think?\nTalk soon,\nSikandar"
      },
      "taskB": {
        "prompt": "Write an email to the club secretary. Write about your feelings, then recommend ONE of the two changes and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Secretary,\n\nI am writing in response to the committee's proposals for addressing overcrowding at the park cafe following our morning workouts. Having weighed the options, I strongly recommend adopting the park picnic model where members bring their own healthy breakfasts.\n\nDividing exercise sessions into two separate shifts would split our cohesive community and place unreasonable demands on our fitness instructors. Sharing homemade fruit platters and whole-grain snacks in the park fosters greater camaraderie and aligns perfectly with our healthy lifestyle philosophy. To ensure comfort during cooler mornings, the club could invest in portable outdoor folding benches and ask members to bring reusable thermo-flasks.\n\nThank you for your tireless commitment to our club's health.\n\nYours sincerely,\nDr Ayesha Siddiqui"
      }
    }
  },
  {
    "themeName": "Traditional Crafts Club",
    "part1": {
      "id": "w_t35_p1",
      "context": "You want to join the Traditional Crafts Club. You have 5 messages from a member of the club. Write short\nanswers (1–5 words) to each message.",
      "questions": [
        {
          "id": "w_t35_p1_q1",
          "prompt": "What do you keep from your childhood?",
          "maxWords": 5,
          "sampleAnswer": "An embroidered woolen blanket."
        },
        {
          "id": "w_t35_p1_q2",
          "prompt": "Which festival do you enjoy most?",
          "maxWords": 5,
          "sampleAnswer": "The colourful spring festival."
        },
        {
          "id": "w_t35_p1_q3",
          "prompt": "What do you wear on special days?",
          "maxWords": 5,
          "sampleAnswer": "Handmade embroidered formal attire."
        },
        {
          "id": "w_t35_p1_q4",
          "prompt": "Who makes decisions in your family?",
          "maxWords": 5,
          "sampleAnswer": "My father and mother."
        },
        {
          "id": "w_t35_p1_q5",
          "prompt": "What do you do when you have a problem?",
          "maxWords": 5,
          "sampleAnswer": "I consult wise elders."
        }
      ]
    },
    "part2": {
      "id": "w_t35_p2",
      "formName": "Traditional Crafts Club Application Form",
      "prompt": "Please explain why traditional crafts are important to you.",
      "minWords": 20,
      "maxWords": 30,
      "sampleAnswer": "Traditional handicrafts embody centuries of indigenous cultural artistry and patient dedication. I want to master block-printing techniques and help preserve ancestral weaving heritage from fading away."
    },
    "part3": {
      "id": "w_t35_p3",
      "clubName": "Traditional Crafts Club",
      "context": "You are communicating online with other members of the Traditional Crafts Club. Reply to their questions. Write in sentences. Use 30–40 words per answer.",
      "memberChats": [
        {
          "id": "w_t35_p3_m1",
          "memberName": "Fatima",
          "avatarInitials": "FA",
          "message": "Hi! Welcome to the club. Why do you think some people prefer handmade products to factory-made ones?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Handcrafted goods possess distinct personality, organic soul, and superior durability that assembly-line mass products simply cannot duplicate. Each artisan piece reflects unique personal dedication, cultural heritage, and human artistic touch."
        },
        {
          "id": "w_t35_p3_m2",
          "memberName": "George",
          "avatarInitials": "GE",
          "message": "Hello! Can you describe a craft or tradition that is special in your country?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "In my country, traditional hand-knotted carpet weaving is an exquisite centuries-old art form. Master weavers use pure wool and organic vegetable dyes to weave intricate floral emblems that endure for generations."
        },
        {
          "id": "w_t35_p3_m3",
          "memberName": "Mika",
          "avatarInitials": "MI",
          "message": "Welcome! What can be done to make sure that traditional skills are not lost in the future?",
          "minWords": 30,
          "maxWords": 40,
          "sampleAnswer": "Governments should establish artisan training academies with official apprenticeships to transmit traditional techniques to youth. In addition, organizing international craft exhibitions and fair-trade cooperatives ensures artisans earn dignified, sustainable livelihoods."
        }
      ]
    },
    "part4": {
      "id": "w_t35_p4",
      "clubName": "Traditional Crafts Club",
      "contextNotice": "Dear Member,\nWe are delighted to tell you that the club has been invited to sell its work at the International Craft Fair in the\ncapital city. However, the fair lasts for five days, and we can send only six members. The committee has two\nways of choosing them. We could select members who have been with the club the longest, since they have the\nmost experience. Alternatively, we could choose those whose work is the most original, which would give newer\nmembers a chance. Please tell us what you think.\nThe Club Manager",
      "recipientTitle": "The club manager",
      "recipientName": "The club manager",
      "friendName": "Jenny",
      "taskA": {
        "prompt": "Write an email to your friend. Write about your feelings and which of the two ways you would choose. Write about 50 words. Recommended time: 10 minutes.",
        "minWords": 40,
        "maxWords": 60,
        "sampleAnswer": "Hi Lucas,\nIncredible news that our craft club is invited to the International Craft Fair in the capital! We can only send six members, chosen either by longest membership or most original work. I think originality should win so fresh artistic talent shines! What's your vote?\nBest,\nJunaid"
      },
      "taskB": {
        "prompt": "Write an email to the club manager. Write about your feelings, then recommend ONE of the two ways and give reasons for your choice. Write 120–150 words. Recommended time: 20 minutes.",
        "minWords": 120,
        "maxWords": 150,
        "sampleAnswer": "Dear Club Manager,\n\nI am writing regarding the member selection process for the International Craft Fair in the capital. Being invited to showcase our creations on a global stage is an enormous honor for our society.\n\nI firmly advocate selecting representatives based on work originality rather than sheer seniority. Showcasing inventive, contemporary interpretations of traditional crafts will captivate international collectors and demonstrate that our traditions remain vibrant and evolving. To honor veteran members' invaluable expertise, the committee could invite senior artisans to serve on the selection panel and supervise exhibition packaging. Moreover, selected delegates should exhibit collaborative pieces representing the entire guild, ensuring that all contributors are celebrated.\n\nThank you for championing our craft community on the international stage.\n\nYours sincerely,\nZahid Mehmood"
      }
    }
  }
];

export function getWritingTest(testNumber: number): AptisWritingModule | undefined {
  if (testNumber < 1 || testNumber > WRITING_TESTS.length) return undefined;
  return WRITING_TESTS[testNumber - 1];
}

export function getAllWritingTests(): AptisWritingModule[] {
  return WRITING_TESTS;
}

export function getWritingTestsCount(): number {
  return WRITING_TESTS.length;
}
