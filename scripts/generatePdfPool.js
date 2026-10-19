import fs from 'fs';

// Definition of 9 topics with exact PDF category names and question ranges
// Base items for each topic, strictly excluding accounting/auditing/corporate items
const TOPIC_SPECS = [
  {
    topic: 'Tenses',
    range: [1, 150],
    difficultRange: [1, 75],
    moderateRange: [76, 110],
    easyRange: [111, 150],
    targetQuota: 4,
    items: [
      {
        baseId: 1,
        question: "This time tomorrow, we ____ to Karachi.",
        options: ["will be travelling", "travelled", "have travelled"],
        correctIndex: 0,
        explanation: "Future continuous ('will be travelling') describes an event that will be in progress at a specific time tomorrow.",
        urduExplanation: "مستقبل میں کسی معین وقت پر جاری رہنے والے کام کے لیے Future Continuous استعمال ہوتا ہے۔"
      },
      {
        baseId: 2,
        question: "He ____ the task before the supervisor checked it.",
        options: ["had completed", "has complete", "completed"],
        correctIndex: 0,
        explanation: "Past perfect ('had completed') specifies that the task was finished prior to another past action.",
        urduExplanation: "ماضی میں کسی دوسرے واقعے سے پہلے مکمل ہونے والے کام کے لیے Past Perfect آتا ہے۔"
      },
      {
        baseId: 3,
        question: "She ____ for the company when it opened its new branch.",
        options: ["was working", "works", "has worked"],
        correctIndex: 0,
        explanation: "Past continuous ('was working') describes an ongoing background action when a new branch opened.",
        urduExplanation: "ماضی میں کسی واقعے کے وقت جاری عمل کے لیے Past Continuous استعمال ہوتا ہے۔"
      },
      {
        baseId: 4,
        question: "By 8 p.m., they ____ the presentation.",
        options: ["will have finished", "finish", "had finish"],
        correctIndex: 0,
        explanation: "Future perfect ('will have finished') denotes an action that will be completed by a specific future point.",
        urduExplanation: "مستقبل میں کسی وقت تک کام کی تکمیل کے لیے Future Perfect آتا ہے۔"
      },
      {
        baseId: 5,
        question: "I ____ coffee every morning, but today I am drinking tea.",
        options: ["drink", "am drinking", "drank"],
        correctIndex: 0,
        explanation: "Present simple ('drink') expresses habitual routine behavior.",
        urduExplanation: "روزمرہ کے معمول کے لیے Present Simple استعمال ہوتا ہے۔"
      },
      {
        baseId: 6,
        question: "He ____ the report yet.",
        options: ["hasn't submitted", "didn't submitted", "isn't submit"],
        correctIndex: 0,
        explanation: "Present perfect negative ('hasn't submitted') is required with the time marker 'yet'.",
        urduExplanation: "'Yet' کے ساتھ عام طور پر Present Perfect Negative آتا ہے۔"
      },
      {
        baseId: 7,
        question: "After she ____ the file, she turned off the computer.",
        options: ["had saved", "has save", "was save"],
        correctIndex: 0,
        explanation: "Past perfect ('had saved') marks the earlier completed action following 'after'.",
        urduExplanation: "لفظ 'After' کے بعد پہلے مکمل ہونے والے کام کے لیے Past Perfect استعمال ہوتا ہے۔"
      },
      {
        baseId: 8,
        question: "Maya usually ____ review the report at the office.",
        options: ["does", "do", "is"],
        correctIndex: 0,
        explanation: "Singular subject 'Maya' takes emphatic auxiliary 'does' in the present simple.",
        urduExplanation: "واحد غائب کے ساتھ زوردار حال کے لیے 'does' استعمال ہوتا ہے۔"
      },
      {
        baseId: 9,
        question: "At the moment, Omar ____ inspect the building.",
        options: ["is doing", "does", "is"],
        correctIndex: 0,
        explanation: "'At the moment' indicates an action in immediate present progress ('is doing').",
        urduExplanation: "موجودہ لمحے میں جاری کام کے لیے 'is doing' استعمال ہوگا۔"
      },
      {
        baseId: 10,
        question: "Yesterday, the manager ____ deliver the package.",
        options: ["did", "has", "does"],
        correctIndex: 0,
        explanation: "'Yesterday' marks past time, which takes past auxiliary 'did'.",
        urduExplanation: "'Yesterday' ماضی کی علامت ہے، اس لیے 'did' آئے گا۔"
      },
      {
        baseId: 11,
        question: "By the time we arrived, our teacher ____ the work.",
        options: ["had finished", "has finished", "finishes"],
        correctIndex: 0,
        explanation: "'By the time' with a past clause takes past perfect ('had finished') in the main clause.",
        urduExplanation: "ماضی میں مقررہ وقت سے پہلے اختتام کے لیے Past Perfect آتا ہے۔"
      },
      {
        baseId: 12,
        question: "The researchers ____ complete the project for three hours when the power went out.",
        options: ["had been", "is", "has been"],
        correctIndex: 0,
        explanation: "Duration leading up to a past interruption requires past perfect auxiliary ('had been').",
        urduExplanation: "ماضی میں کسی رکاوٹ سے قبل جاری دورانیے کے لیے Past Perfect Continuous کا امدادی فعل آتا ہے۔"
      },
      {
        baseId: 13,
        question: "Look at those clouds; it ____ soon.",
        options: ["is going to rain", "rains", "has rained"],
        correctIndex: 0,
        explanation: "Immediate prediction based on present visible evidence takes 'is going to rain'.",
        urduExplanation: "موجودہ شواہد کی بنیاد پر مستقبل کے فوری واقعے کے لیے 'is going to' استعمال ہوتا ہے۔"
      },
      {
        baseId: 15,
        question: "While I ____ home, I met an old friend.",
        options: ["was walking", "walked", "have walked"],
        correctIndex: 0,
        explanation: "'While' marks an ongoing continuous past activity ('was walking').",
        urduExplanation: "'While' کے ساتھ ماضی کا جاری عمل (Past Continuous) ظاہر کیا جاتا ہے۔"
      },
      {
        baseId: 16,
        question: "The students ____ in this city since 2021.",
        options: ["have lived", "has lived", "lives"],
        correctIndex: 0,
        explanation: "'Since 2021' requires present perfect ('have lived') for an action continuing to the present.",
        urduExplanation: "'Since' کے ساتھ شروع ہونے والی مدت کے لیے Present Perfect آتا ہے۔"
      },
      {
        baseId: 17,
        question: "When the phone rang, we ____ dinner.",
        options: ["were having", "have had", "are having"],
        correctIndex: 0,
        explanation: "Past continuous ('were having') denotes an action interrupted by the past simple event.",
        urduExplanation: "ماضی میں کسی دوسرے واقعے کے وقت جاری عمل کے لیے Past Continuous استعمال ہوتا ہے۔"
      },
      {
        baseId: 18,
        question: "She said she ____ the email the previous day.",
        options: ["had sent", "sent", "has sent"],
        correctIndex: 0,
        explanation: "Reported speech shifts past time with 'the previous day' to past perfect ('had sent').",
        urduExplanation: "ان ڈائریکٹ اسپیچ میں 'the previous day' کے ساتھ Past Perfect آتا ہے۔"
      },
      {
        baseId: 19,
        question: "Every winter, the river ____ over.",
        options: ["freezes", "has frozen", "is freezing"],
        correctIndex: 0,
        explanation: "Natural seasonal cycle requires present simple ('freezes').",
        urduExplanation: "موسمی یا قدرتی سچائی کے لیے Present Simple استعمال ہوتا ہے۔"
      },
      {
        baseId: 20,
        question: "I ____ him tomorrow if I have time.",
        options: ["will call", "have called", "called"],
        correctIndex: 0,
        explanation: "First conditional result clause takes future simple ('will call').",
        urduExplanation: "فرسٹ کنڈیشنل کے نتیجہ والے حصے میں Future Simple آتا ہے۔"
      }
    ]
  },

  {
    topic: 'Conditionals',
    range: [151, 300],
    difficultRange: [151, 225],
    moderateRange: [226, 265],
    easyRange: [266, 300],
    targetQuota: 3,
    items: [
      {
        baseId: 151,
        question: "If I ____ you, I would ask for clarification.",
        options: ["were", "am", "will be"],
        correctIndex: 0,
        explanation: "Second conditional uses subjunctive 'were' for hypothetical advice.",
        urduExplanation: "سیکنڈ کنڈیشنل میں فرضی مشورے کے لیے 'were' استعمال ہوتا ہے۔"
      },
      {
        baseId: 152,
        question: "If he had listened carefully, he ____ the instructions.",
        options: ["would have understood", "will understand", "would understand"],
        correctIndex: 0,
        explanation: "Third conditional past counterfactual requires 'would have understood'.",
        urduExplanation: "تھرڈ کنڈیشنل کے نتیجہ والے کلاز میں 'would have understood' آتا ہے۔"
      },
      {
        baseId: 153,
        question: "Plants die if they ____ enough water.",
        options: ["don't get", "won't get", "wouldn't get"],
        correctIndex: 0,
        explanation: "Zero conditional for biological facts uses present simple ('don't get').",
        urduExplanation: "قدرتی حقیقت کے بیان کے لیے دونوں طرف Present Simple آتا ہے۔"
      },
      {
        baseId: 154,
        question: "If she practises daily, she ____ more confident.",
        options: ["will become", "would became", "becomes"],
        correctIndex: 0,
        explanation: "First conditional real possibility takes 'will become'.",
        urduExplanation: "فرسٹ کنڈیشنل کے نتیجہ میں 'will become' آتا ہے۔"
      },
      {
        baseId: 155,
        question: "If the road were clear, we ____ there sooner.",
        options: ["would arrive", "will arrived", "arrive"],
        correctIndex: 0,
        explanation: "Second conditional hypothetical statement takes 'would arrive'.",
        urduExplanation: "سیکنڈ کنڈیشنل کے نتیجہ والے حصے میں 'would arrive' آئے گا۔"
      },
      {
        baseId: 156,
        question: "Had they booked in advance, they ____ a discount.",
        options: ["would have received", "would receive", "will receive"],
        correctIndex: 0,
        explanation: "Inverted third conditional takes 'would have received' in the result clause.",
        urduExplanation: "انورژن والے تھرڈ کنڈیشنل میں 'would have received' آتا ہے۔"
      },
      {
        baseId: 157,
        question: "If you mix blue and yellow, you ____ green.",
        options: ["get", "will got", "would get"],
        correctIndex: 0,
        explanation: "Zero conditional scientific fact uses present simple ('get').",
        urduExplanation: "سائنسی سچائی کے لیے Present Simple ('get') استعمال ہوگا۔"
      },
      {
        baseId: 158,
        question: "If water reaches 100°C, it ____.",
        options: ["boils", "will boil", "would boil"],
        correctIndex: 0,
        explanation: "Physical law takes zero conditional ('boils').",
        urduExplanation: "سائنسی قانون کے بیان میں Present Simple ('boils') آتا ہے۔"
      },
      {
        baseId: 159,
        question: "If you study regularly, you ____ your vocabulary.",
        options: ["will improve", "would improved", "improve"],
        correctIndex: 0,
        explanation: "First conditional real consequence takes 'will improve'.",
        urduExplanation: "ممکنہ نتیجے کے لیے Future Simple ('will improve') استعمال ہوتا ہے۔"
      },
      {
        baseId: 160,
        question: "If I ____ more time, I would learn French.",
        options: ["had", "will have", "have"],
        correctIndex: 0,
        explanation: "Second conditional requires past simple ('had') in the hypothetical condition clause.",
        urduExplanation: "فرضی صورتحال کے لیے if-clause میں Past Simple ('had') آتا ہے۔"
      },
      {
        baseId: 161,
        question: "If they had checked the figures, they ____ the error.",
        options: ["would have noticed", "would notice", "will notice"],
        correctIndex: 0,
        explanation: "Third conditional past consequence takes 'would have noticed'.",
        urduExplanation: "ماضی کی شرط کے نتیجے کے لیے 'would have noticed' آئے گا۔"
      },
      {
        baseId: 162,
        question: "Unless you leave now, you ____ the train.",
        options: ["will miss", "would have missed", "miss"],
        correctIndex: 0,
        explanation: "'Unless' with present simple condition takes future simple ('will miss').",
        urduExplanation: "'Unless' کے ساتھ فرسٹ کنڈیشنل میں 'will miss' استعمال ہوگا۔"
      },
      {
        baseId: 163,
        question: "If she were the manager, she ____ the policy.",
        options: ["would change", "will changed", "changes"],
        correctIndex: 0,
        explanation: "Second conditional hypothetical scenario takes 'would change'.",
        urduExplanation: "فرضی صورتحال میں 'would change' آتا ہے۔"
      },
      {
        baseId: 164,
        question: "If the alarm rings, the doors ____ automatically.",
        options: ["open", "would opens", "will opened"],
        correctIndex: 0,
        explanation: "Automated cause-and-effect rule takes present simple ('open').",
        urduExplanation: "خودکار سائنسی یا تکنیکی ردعمل کے لیے Present Simple ('open') استعمال ہوتا ہے۔"
      },
      {
        baseId: 165,
        question: "If he had taken a map, he ____ lost.",
        options: ["wouldn't have got", "won't get", "wouldn't get"],
        correctIndex: 0,
        explanation: "Third conditional negative consequence takes 'wouldn't have got'.",
        urduExplanation: "ماضی کی شرط کے منفی نتیجے کے لیے 'wouldn't have got' آئے گا۔"
      },
      {
        baseId: 166,
        question: "If I see the director, I ____ her your message.",
        options: ["will give", "gave", "would gave"],
        correctIndex: 0,
        explanation: "First conditional real future possibility takes 'will give'.",
        urduExplanation: "فرسٹ کنڈیشنل میں 'will give' استعمال ہوگا۔"
      },
      {
        baseId: 167,
        question: "If people heat ice, it ____.",
        options: ["melts", "would melt", "will melted"],
        correctIndex: 0,
        explanation: "Zero conditional physical fact takes present simple ('melts').",
        urduExplanation: "قدرتی سچائی کے لیے Present Simple ('melts') آتا ہے۔"
      },
      {
        baseId: 168,
        question: "If we ____ earlier, we could catch the first bus.",
        options: ["left", "leave", "will leave"],
        correctIndex: 0,
        explanation: "Second conditional hypothetical condition requires past simple ('left').",
        urduExplanation: "سیکنڈ کنڈیشنل کے شرط والے حصے میں Past Simple ('left') آتا ہے۔"
      },
      {
        baseId: 170,
        question: "If you don't back up the file, you ____ your work.",
        options: ["may lose", "lost", "would lost"],
        correctIndex: 0,
        explanation: "First conditional with possibility modal takes 'may lose'.",
        urduExplanation: "امکان کے اظہار کے لیے 'may lose' استعمال ہوتا ہے۔"
      }
    ]
  },

  {
    topic: 'Active and Passive Voice',
    range: [301, 400],
    difficultRange: [301, 350],
    moderateRange: [351, 375],
    easyRange: [376, 400],
    targetQuota: 2,
    items: [
      {
        baseId: 301,
        question: "The storm damaged several houses. Several houses ____ by the storm.",
        options: ["were damaged", "damaged", "are damaging"],
        correctIndex: 0,
        explanation: "Past simple passive takes 'were + past participle' for plural subjects.",
        urduExplanation: "ماضی کی جمع کے لیے پیسو وائس میں 'were damaged' آتا ہے۔"
      },
      {
        baseId: 302,
        question: "They are going to announce the winner. The winner ____.",
        options: ["is going to be announced", "is going to announce", "will announcing"],
        correctIndex: 0,
        explanation: "Future with 'going to' in passive voice is 'is going to be announced'.",
        urduExplanation: "'Going to' کا پیسو وائس 'is going to be announced' بنتا ہے۔"
      },
      {
        baseId: 303,
        question: "The documents should have been sent yesterday. Someone ____ the documents yesterday.",
        options: ["should have sent", "should be sending", "should send"],
        correctIndex: 0,
        explanation: "Active form of modal perfect passive is 'should have sent'.",
        urduExplanation: "ماضی کے پیسو سے ایکٹیو بناتے ہوئے 'should have sent' آئے گا۔"
      },
      {
        baseId: 304,
        question: "Who wrote this letter? By whom ____ this letter written?",
        options: ["was", "did", "has"],
        correctIndex: 0,
        explanation: "Past simple passive interrogative requires auxiliary 'was' before the singular subject.",
        urduExplanation: "ماضی کے سوالیہ پیسو جملے میں 'By whom was this letter written' ہوگا۔"
      },
      {
        baseId: 305,
        question: "They gave the students certificates. The students ____ certificates.",
        options: ["were given", "have giving", "gave"],
        correctIndex: 0,
        explanation: "Indirect object in past passive takes 'were given'.",
        urduExplanation: "طلباء کے مفعول سے فاعل بننے پر 'were given' استعمال ہوگا۔"
      },
      {
        baseId: 306,
        question: "The room is cleaned every day. Someone ____ the room every day.",
        options: ["cleans", "cleaned", "is cleaned"],
        correctIndex: 0,
        explanation: "Present simple active with third-person singular subject takes 'cleans'.",
        urduExplanation: "پیسو سے ایکٹیو بناتے وقت روزمرہ معمول کے لیے 'cleans' آئے گا۔"
      },
      {
        baseId: 307,
        question: "They had been watching the house. The house ____.",
        options: ["had been being watched", "was watching", "had been watched"],
        correctIndex: 0,
        explanation: "Past perfect continuous passive requires 'had been being watched'.",
        urduExplanation: "Past Perfect Continuous کے پیسو میں 'had been being watched' آتا ہے۔"
      },
      {
        baseId: 309,
        question: "The team will publish the results tomorrow. The results ____ tomorrow.",
        options: ["will be published", "will publish", "are publishing"],
        correctIndex: 0,
        explanation: "Future simple passive takes 'will be published'.",
        urduExplanation: "فیوچر سمپل کا پیسو 'will be published' بنتا ہے۔"
      },
      {
        baseId: 310,
        question: "They are repairing the bridge. The bridge ____.",
        options: ["is being repaired", "has repaired", "is repaired"],
        correctIndex: 0,
        explanation: "Present continuous passive takes 'is being repaired'.",
        urduExplanation: "Present Continuous کے پیسو میں 'is being repaired' استعمال ہوتا ہے۔"
      },
      {
        baseId: 311,
        question: "Someone has stolen my laptop. My laptop ____.",
        options: ["has been stolen", "has stolen", "was stealing"],
        correctIndex: 0,
        explanation: "Present perfect passive takes 'has been stolen'.",
        urduExplanation: "Present Perfect کے پیسو میں 'has been stolen' آتا ہے۔"
      },
      {
        baseId: 313,
        question: "People speak English in many countries. English ____ in many countries.",
        options: ["is spoken", "speaks", "was speaking"],
        correctIndex: 0,
        explanation: "Present simple passive for general truth takes 'is spoken'.",
        urduExplanation: "عمومی حقیقت کے پیسو کے لیے 'is spoken' استعمال ہوگا۔"
      },
      {
        baseId: 314,
        question: "They had completed the work before noon. The work ____ before noon.",
        options: ["had been completed", "was completing", "has completed"],
        correctIndex: 0,
        explanation: "Past perfect passive takes 'had been completed'.",
        urduExplanation: "Past Perfect کا پیسو 'had been completed' بنتا ہے۔"
      },
      {
        baseId: 315,
        question: "The forms must be signed today. Someone ____ the forms today.",
        options: ["must sign", "must have signed", "must be signed"],
        correctIndex: 0,
        explanation: "Active voice with modal obligation takes 'must sign'.",
        urduExplanation: "پیسو سے ایکٹیو بناتے ہوئے 'must sign' آئے گا۔"
      },
      {
        baseId: 316,
        question: "The chef is preparing the meal. The meal ____ by the chef.",
        options: ["is being prepared", "is prepared", "has been prepared"],
        correctIndex: 0,
        explanation: "Present continuous passive takes 'is being prepared'.",
        urduExplanation: "کھانا تیار کیے جانے کے لیے 'is being prepared' آئے گا۔"
      },
      {
        baseId: 317,
        question: "Did the police question the witness? ____ the witness questioned by the police?",
        options: ["Was", "Did", "Has"],
        correctIndex: 0,
        explanation: "Past simple passive interrogative starts with 'Was'.",
        urduExplanation: "ماضی کے پیسو سوالیہ جملے کا آغاز 'Was' سے ہوگا۔"
      },
      {
        baseId: 318,
        question: "They make these parts in Germany. These parts ____ in Germany.",
        options: ["are made", "made", "are making"],
        correctIndex: 0,
        explanation: "Present simple passive with plural noun takes 'are made'.",
        urduExplanation: "پرزہ جات کے بننے کے لیے 'are made' استعمال ہوگا۔"
      },
      {
        baseId: 319,
        question: "The company has offered her a job. She ____ a job by the company.",
        options: ["has been offered", "has offered", "was offering"],
        correctIndex: 0,
        explanation: "Present perfect passive takes 'has been offered'.",
        urduExplanation: "نوکری کی پیشکش کے پیسو میں 'has been offered' آئے گا۔"
      },
      {
        baseId: 320,
        question: "Do not touch the switch. The switch ____.",
        options: ["must not be touched", "does not touch", "is not touching"],
        correctIndex: 0,
        explanation: "Negative passive obligation takes 'must not be touched'.",
        urduExplanation: "حکمیہ ممانعت کے پیسو کے لیے 'must not be touched' استعمال ہوگا۔"
      }
    ]
  },

  {
    topic: 'Gerunds and Infinitives',
    range: [401, 500],
    difficultRange: [401, 450],
    moderateRange: [451, 475],
    easyRange: [476, 500],
    targetQuota: 3,
    items: [
      {
        baseId: 401,
        question: "They agreed ____ the costs equally.",
        options: ["to share", "share", "sharing"],
        correctIndex: 0,
        explanation: "The verb 'agree' takes a to-infinitive ('to share').",
        urduExplanation: "فعل 'agree' کے بعد to-infinitive ('to share') آتا ہے۔"
      },
      {
        baseId: 402,
        question: "I regret ____ you that the meeting is cancelled.",
        options: ["to inform", "informing", "inform"],
        correctIndex: 0,
        explanation: "'Regret to inform' is the polite formula for delivering bad news.",
        urduExplanation: "ناخوشگوار خبر دینے کے لیے 'regret to inform' استعمال ہوتا ہے۔"
      },
      {
        baseId: 403,
        question: "The teacher encouraged us ____ questions.",
        options: ["to ask", "ask", "asking"],
        correctIndex: 0,
        explanation: "'Encourage + object + to-infinitive' requires 'to ask'.",
        urduExplanation: "حوصلہ افزائی کے بعد مفعول کے ساتھ 'to ask' آئے گا۔"
      },
      {
        baseId: 404,
        question: "She denied ____ the confidential file.",
        options: ["opening", "open", "to open"],
        correctIndex: 0,
        explanation: "'Deny' is followed by a gerund ('opening').",
        urduExplanation: "فعل 'deny' کے بعد ہمیشہ Gerund ('opening') آتا ہے۔"
      },
      {
        baseId: 405,
        question: "We can't afford ____ another delay.",
        options: ["to have", "having", "have"],
        correctIndex: 0,
        explanation: "'Afford' takes a to-infinitive ('to have').",
        urduExplanation: "فعل 'afford' کے بعد to-infinitive ('to have') آتا ہے۔"
      },
      {
        baseId: 406,
        question: "He suggested ____ the meeting until Friday.",
        options: ["postponing", "postpone", "to postpone"],
        correctIndex: 0,
        explanation: "'Suggest' is followed by a gerund ('postponing').",
        urduExplanation: "فعل 'suggest' کے بعد براہ راست Gerund ('postponing') آتا ہے۔"
      },
      {
        baseId: 407,
        question: "I went to the shop ____ some stationery.",
        options: ["to buy", "buying", "buy"],
        correctIndex: 0,
        explanation: "Infinitive of purpose ('to buy') expresses why the action happened.",
        urduExplanation: "مقصد ظاہر کرنے کے لیے Infinitive of Purpose ('to buy') استعمال ہوگا۔"
      },
      {
        baseId: 408,
        question: "She avoids ____ during meetings.",
        options: ["interrupting", "to interrupt", "interrupt"],
        correctIndex: 0,
        explanation: "The verb 'avoid' takes a gerund ('interrupting').",
        urduExplanation: "فعل 'avoid' کے بعد ہمیشہ Gerund ('interrupting') استعمال ہوتا ہے۔"
      },
      {
        baseId: 409,
        question: "They decided ____ the proposal.",
        options: ["to accept", "accept", "accepting"],
        correctIndex: 0,
        explanation: "'Decide' takes a to-infinitive ('to accept').",
        urduExplanation: "فعل 'decide' کے بعد to-infinitive ('to accept') آتا ہے۔"
      },
      {
        baseId: 410,
        question: "I look forward to ____ from you.",
        options: ["hearing", "hear", "to hear"],
        correctIndex: 0,
        explanation: "In 'look forward to', 'to' is a preposition requiring a gerund ('hearing').",
        urduExplanation: "'Look forward to' میں 'to' پریپوزیشن ہے، اس لیے Gerund ('hearing') آئے گا۔"
      },
      {
        baseId: 411,
        question: "He promised ____ the documents by noon.",
        options: ["to deliver", "delivering", "deliver"],
        correctIndex: 0,
        explanation: "'Promise' takes a to-infinitive ('to deliver').",
        urduExplanation: "فعل 'promise' کے بعد to-infinitive ('to deliver') استعمال ہوگا۔"
      },
      {
        baseId: 412,
        question: "____ regularly helps improve fluency.",
        options: ["Practising", "To practising", "Practise"],
        correctIndex: 0,
        explanation: "Gerund ('Practising') serves as the subject of the sentence.",
        urduExplanation: "جملے کے فاعل کے طور پر Gerund ('Practising') استعمال ہوتا ہے۔"
      },
      {
        baseId: 413,
        question: "The manager let us ____ early.",
        options: ["leave", "leaving", "to leave"],
        correctIndex: 0,
        explanation: "Causative 'let' takes a bare infinitive ('leave').",
        urduExplanation: "فعل 'let' کے بعد بغیر 'to' کے بنیادی فعل (Bare Infinitive) آتا ہے۔"
      },
      {
        baseId: 415,
        question: "They hope ____ the results soon.",
        options: ["to receive", "receive", "receiving"],
        correctIndex: 0,
        explanation: "'Hope' takes a to-infinitive ('to receive').",
        urduExplanation: "فعل 'hope' کے بعد 'to receive' آتا ہے۔"
      },
      {
        baseId: 416,
        question: "He admitted ____ the mistake.",
        options: ["making", "make", "to make"],
        correctIndex: 0,
        explanation: "'Admit' takes a gerund ('making').",
        urduExplanation: "فعل 'admit' کے بعد Gerund ('making') استعمال ہوتا ہے۔"
      },
      {
        baseId: 417,
        question: "It is important ____ the instructions carefully.",
        options: ["to read", "reading", "read"],
        correctIndex: 0,
        explanation: "'It is + adjective + to-infinitive' requires 'to read'.",
        urduExplanation: "'It is important' کے بعد to-infinitive ('to read') استعمال ہوتا ہے۔"
      },
      {
        baseId: 418,
        question: "Would you mind ____ the window?",
        options: ["closing", "to close", "close"],
        correctIndex: 0,
        explanation: "'Would you mind' requires a gerund ('closing').",
        urduExplanation: "شائستہ درخواست 'Would you mind' کے بعد Gerund ('closing') آتا ہے۔"
      },
      {
        baseId: 419,
        question: "She stopped ____ a phone call.",
        options: ["to make", "make", "making"],
        correctIndex: 0,
        explanation: "'Stopped to make' means paused in order to make a phone call.",
        urduExplanation: "کسی کام کی خاطر رکنے کے لیے 'stopped to make' آتا ہے۔"
      },
      {
        baseId: 420,
        question: "He is used to ____ under pressure.",
        options: ["working", "work", "to work"],
        correctIndex: 0,
        explanation: "'Be used to' expresses familiarity and takes a gerund ('working').",
        urduExplanation: "عادی ہونے کے مفہوم میں 'be used to' کے بعد Gerund ('working') استعمال ہوتا ہے۔"
      }
    ]
  },

  {
    topic: 'Prepositions',
    range: [501, 600],
    difficultRange: [501, 550],
    moderateRange: [551, 575],
    easyRange: [576, 600],
    targetQuota: 4,
    items: [
      {
        baseId: 501,
        question: "She apologised ____ being late.",
        options: ["for", "with", "of"],
        correctIndex: 0,
        explanation: "'Apologise for' is the correct prepositional combination.",
        urduExplanation: "معذرت کے لیے 'apologised for' استعمال ہوتا ہے۔"
      },
      {
        baseId: 502,
        question: "The report consists ____ five sections.",
        options: ["of", "with", "from"],
        correctIndex: 0,
        explanation: "'Consist of' means composed of.",
        urduExplanation: "مشتمل ہونے کے لیے 'consists of' استعمال ہوتا ہے۔"
      },
      {
        baseId: 503,
        question: "He is good ____ solving complex problems.",
        options: ["at", "on", "in"],
        correctIndex: 0,
        explanation: "Skill or capability takes 'good at'.",
        urduExplanation: "کسی کام میں ماہر ہونے کے لیے 'good at' آتا ہے۔"
      },
      {
        baseId: 504,
        question: "The cat jumped ____ the wall.",
        options: ["over", "between", "through"],
        correctIndex: 0,
        explanation: "Movement across and above an obstacle takes 'jumped over'.",
        urduExplanation: "دیوار کے اوپر سے گزرنے کے لیے 'over' استعمال ہوگا۔"
      },
      {
        baseId: 505,
        question: "Please refrain ____ using your phone in class.",
        options: ["from", "with", "to"],
        correctIndex: 0,
        explanation: "'Refrain from + gerund' expresses abstaining.",
        urduExplanation: "باز رہنے کے لیے 'refrain from' استعمال کیا جاتا ہے۔"
      },
      {
        baseId: 506,
        question: "The decision depends ____ the final figures.",
        options: ["on", "for", "at"],
        correctIndex: 0,
        explanation: "'Depend on' is the standard dependent preposition.",
        urduExplanation: "انحصار کرنے کے لیے 'depends on' آتا ہے۔"
      },
      {
        baseId: 507,
        question: "They arrived ____ the airport early.",
        options: ["at", "on", "in"],
        correctIndex: 0,
        explanation: "Specific points and stations take 'arrived at'.",
        urduExplanation: "ایئرپورٹ پر پہنچنے کے لیے 'arrived at' آتا ہے۔"
      },
      {
        baseId: 508,
        question: "The meeting begins ____ 9:30 a.m.",
        options: ["at", "on", "in"],
        correctIndex: 0,
        explanation: "Exact times of day take 'at'.",
        urduExplanation: "مقررہ وقت کے لیے 'at' استعمال ہوتا ہے۔"
      },
      {
        baseId: 509,
        question: "Our exams are ____ November.",
        options: ["in", "at", "on"],
        correctIndex: 0,
        explanation: "Months take the preposition 'in'.",
        urduExplanation: "مہینوں کے نام کے ساتھ 'in' استعمال ہوتا ہے۔"
      },
      {
        baseId: 510,
        question: "She has worked here ____ 2022.",
        options: ["since", "for", "from"],
        correctIndex: 0,
        explanation: "A starting point in past time takes 'since'.",
        urduExplanation: "وقت کے آغاز کے لیے 'since' آتا ہے۔"
      },
      {
        baseId: 511,
        question: "We waited ____ two hours.",
        options: ["for", "during", "since"],
        correctIndex: 0,
        explanation: "A time span takes 'for'.",
        urduExplanation: "دورانیہ ظاہر کرنے کے لیے 'for' استعمال ہوتا ہے۔"
      },
      {
        baseId: 512,
        question: "The keys are ____ the drawer.",
        options: ["in", "on", "at"],
        correctIndex: 0,
        explanation: "Inside an enclosed compartment takes 'in'.",
        urduExplanation: "دراز کے اندر ہونے کی مناسبت سے 'in' آئے گا۔"
      },
      {
        baseId: 513,
        question: "He walked ____ the room without knocking.",
        options: ["into", "among", "between"],
        correctIndex: 0,
        explanation: "Movement into an interior space takes 'into'.",
        urduExplanation: "کمرے کے اندر داخل ہونے کی حرکت کے لیے 'into' آتا ہے۔"
      },
      {
        baseId: 514,
        question: "The train arrived ____ time, so we were not late.",
        options: ["on", "in", "at"],
        correctIndex: 0,
        explanation: "'On time' denotes scheduled punctuality.",
        urduExplanation: "شیڈول کے مطابق پہنچنے کے لیے 'on time' بولا جاتا ہے۔"
      },
      {
        baseId: 515,
        question: "She is responsible ____ preparing the minutes.",
        options: ["for", "of", "to"],
        correctIndex: 0,
        explanation: "'Responsible for' is the correct preposition.",
        urduExplanation: "ذمہ داری ظاہر کرنے کے لیے 'responsible for' آتا ہے۔"
      },
      {
        baseId: 516,
        question: "They congratulated him ____ his promotion.",
        options: ["on", "at", "for"],
        correctIndex: 0,
        explanation: "'Congratulate on' is the correct combination.",
        urduExplanation: "مبارکباد کے فعل کے ساتھ 'congratulated on' آتا ہے۔"
      },
      {
        baseId: 517,
        question: "Divide the amount ____ the three departments.",
        options: ["among", "between", "across"],
        correctIndex: 0,
        explanation: "Division among three or more entities takes 'among'.",
        urduExplanation: "تین یا زیادہ افراد یا شعبوں میں تقسیم کے لیے 'among' آتا ہے۔"
      },
      {
        baseId: 518,
        question: "The office is opposite ____ the bank.",
        options: ["—", "to", "of"],
        correctIndex: 0,
        explanation: "'Opposite' takes no preposition before its object.",
        urduExplanation: "'Opposite' کے بعد براہ راست جگہ آتی ہے، بغیر کسی پریپوزیشن کے۔"
      },
      {
        baseId: 519,
        question: "He prefers tea ____ coffee.",
        options: ["to", "than", "over"],
        correctIndex: 0,
        explanation: "'Prefer' takes 'to', not 'than'.",
        urduExplanation: "'Prefer' کے ساتھ ترجیح کے لیے 'to' استعمال ہوتا ہے۔"
      },
      {
        baseId: 520,
        question: "We travelled ____ Lahore to Islamabad by bus.",
        options: ["from", "by", "since"],
        correctIndex: 0,
        explanation: "Travel origin takes 'from'.",
        urduExplanation: "سفر کے آغاز کے لیے 'from' آتا ہے۔"
      }
    ]
  },

  {
    topic: 'Modal Verbs',
    range: [601, 700],
    difficultRange: [601, 650],
    moderateRange: [651, 675],
    easyRange: [676, 700],
    targetQuota: 2,
    items: [
      {
        baseId: 601,
        question: "You ____ consult a doctor if the pain continues.",
        options: ["should", "can to", "would"],
        correctIndex: 0,
        explanation: "'Should' is used to give recommendations and advice.",
        urduExplanation: "مشورے کے لیے 'should' استعمال ہوتا ہے۔"
      },
      {
        baseId: 602,
        question: "He ____ have missed the bus; he left home very early.",
        options: ["can't", "must", "might to"],
        correctIndex: 0,
        explanation: "'Can't have' denotes strong negative logical deduction.",
        urduExplanation: "ماضی میں کسی بات کے ناممکن ہونے کے منطقی نتیجے کے لیے 'can't have' آتا ہے۔"
      },
      {
        baseId: 603,
        question: "____ I open the window, or is it too cold?",
        options: ["May", "Need", "Must"],
        correctIndex: 0,
        explanation: "'May' is the formal modal for polite permission.",
        urduExplanation: "شائستہ اجازت کے لیے 'May' استعمال ہوتا ہے۔"
      },
      {
        baseId: 604,
        question: "We ____ to finish this today; the deadline is tomorrow.",
        options: ["ought", "should to", "oughted"],
        correctIndex: 0,
        explanation: "Semi-modal 'ought' combines with 'to + infinitive'.",
        urduExplanation: "'to' کے ساتھ مل کر فرض ظاہر کرنے کے لیے 'ought to' آتا ہے۔"
      },
      {
        baseId: 605,
        question: "You ____ park here; the sign clearly forbids it.",
        options: ["mustn't", "wouldn't", "needn't"],
        correctIndex: 0,
        explanation: "'Mustn't' indicates prohibition.",
        urduExplanation: "ممانعت کے لیے 'mustn't' استعمال ہوتا ہے۔"
      },
      {
        baseId: 606,
        question: "She ____ rather walk than wait for a taxi.",
        options: ["would", "should", "could"],
        correctIndex: 0,
        explanation: "'Would rather' expresses personal preference.",
        urduExplanation: "ترجیح کے لیے 'would rather' آتا ہے۔"
      },
      {
        baseId: 607,
        question: "They ____ be delayed because of the heavy snow.",
        options: ["might", "must to", "ought"],
        correctIndex: 0,
        explanation: "'Might' conveys possibility.",
        urduExplanation: "امکان کے لیے 'might' آتا ہے۔"
      },
      {
        baseId: 608,
        question: "You ____ wear a helmet while riding a motorcycle; it is the law.",
        options: ["must", "would", "might"],
        correctIndex: 0,
        explanation: "'Must' denotes legal mandate.",
        urduExplanation: "قانونی لازمی حکم کے لیے 'must' استعمال ہوتا ہے۔"
      },
      {
        baseId: 609,
        question: "____ you please send me the updated file?",
        options: ["Could", "Shall", "Must"],
        correctIndex: 0,
        explanation: "'Could' expresses polite request.",
        urduExplanation: "شائستہ درخواست کے لیے 'Could' استعمال ہوتا ہے۔"
      },
      {
        baseId: 610,
        question: "You ____ have told me earlier; now it is too late.",
        options: ["should", "may", "can"],
        correctIndex: 0,
        explanation: "'Should have' expresses past criticism or regret.",
        urduExplanation: "ماضی کی کوتاہی پر 'should have' آتا ہے۔"
      },
      {
        baseId: 611,
        question: "She ____ be at home; all the lights are off, so I am not sure.",
        options: ["might", "has to", "must"],
        correctIndex: 0,
        explanation: "'Might' conveys uncertain possibility.",
        urduExplanation: "غیر یقینی امکان کے لیے 'might' آتا ہے۔"
      },
      {
        baseId: 613,
        question: "You ____ smoke in this building. It is prohibited.",
        options: ["mustn't", "might not", "don't have to"],
        correctIndex: 0,
        explanation: "'Mustn't' denotes strict prohibition.",
        urduExplanation: "ممانعت کے لیے 'mustn't' آتا ہے۔"
      },
      {
        baseId: 614,
        question: "When I was five, I ____ swim very well.",
        options: ["could", "must", "shall"],
        correctIndex: 0,
        explanation: "'Could' represents general past ability.",
        urduExplanation: "ماضی کی صلاحیت کے لیے 'could' آتا ہے۔"
      },
      {
        baseId: 615,
        question: "That ____ be the correct answer; the calculation is wrong.",
        options: ["can't", "must", "should"],
        correctIndex: 0,
        explanation: "'Can't' expresses logical impossibility.",
        urduExplanation: "منطقی طور پر ناممکن ہونے کے لیے 'can't' آتا ہے۔"
      },
      {
        baseId: 616,
        question: "We ____ leave now if we want to catch the last train.",
        options: ["had better", "would rather to", "must to"],
        correctIndex: 0,
        explanation: "'Had better' conveys urgent practical advice.",
        urduExplanation: "فوری اور ضروری مشورے کے لیے 'had better' آتا ہے۔"
      },
      {
        baseId: 617,
        question: "You ____ have brought an umbrella; the forecast said it would be sunny.",
        options: ["needn't", "mustn't", "couldn't"],
        correctIndex: 0,
        explanation: "'Needn't have' denotes an action done unnecessarily.",
        urduExplanation: "غیر ضروری عمل کے لیے 'needn't have' استعمال ہوتا ہے۔"
      },
      {
        baseId: 618,
        question: "Would you ____ some tea?",
        options: ["like", "liking", "liked"],
        correctIndex: 0,
        explanation: "'Would you like' is the polite offer idiom.",
        urduExplanation: "شائستہ پیشکش کے لیے 'Would you like' آتا ہے۔"
      },
      {
        baseId: 619,
        question: "Visitors ____ show identification at reception.",
        options: ["must", "ought", "may to"],
        correctIndex: 0,
        explanation: "'Must' conveys institutional rules.",
        urduExplanation: "لازمی ضابطے کے لیے 'must' استعمال ہوتا ہے۔"
      },
      {
        baseId: 620,
        question: "She ____ speak three languages when she was ten.",
        options: ["could", "should", "can"],
        correctIndex: 0,
        explanation: "Past ability takes 'could'.",
        urduExplanation: "ماضی کی صلاحیت کے لیے 'could' آتا ہے۔"
      }
    ]
  },

  {
    topic: 'Connectors',
    range: [701, 800],
    difficultRange: [701, 750],
    moderateRange: [751, 775],
    easyRange: [776, 800],
    targetQuota: 2,
    items: [
      {
        baseId: 701,
        question: "He checked the figures twice ____ avoid mistakes.",
        options: ["in order to", "whereas", "although"],
        correctIndex: 0,
        explanation: "'In order to + base verb' expresses purpose.",
        urduExplanation: "مقصد ظاہر کرنے کے لیے 'in order to' آتا ہے۔"
      },
      {
        baseId: 703,
        question: "____ the report was brief, it covered every key point.",
        options: ["Although", "Despite", "Because of"],
        correctIndex: 0,
        explanation: "'Although' introduces a concessive clause.",
        urduExplanation: "تضاد کے کلاز کے لیے 'Although' آتا ہے۔"
      },
      {
        baseId: 704,
        question: "The flight was delayed ____ thick fog.",
        options: ["because of", "although", "because"],
        correctIndex: 0,
        explanation: "'Because of' is followed by a noun phrase expressing cause.",
        urduExplanation: "اسم کے ساتھ سبب کے لیے 'because of' آتا ہے۔"
      },
      {
        baseId: 705,
        question: "She is qualified; ____, she lacks practical experience.",
        options: ["however", "therefore", "furthermore"],
        correctIndex: 0,
        explanation: "'However' connects contrasting independent clauses.",
        urduExplanation: "متضاد کیفیت کے لیے 'however' استعمال ہوتا ہے۔"
      },
      {
        baseId: 706,
        question: "Take an umbrella ____ it rains later.",
        options: ["in case", "even though", "so"],
        correctIndex: 0,
        explanation: "'In case' is used for precautionary measures.",
        urduExplanation: "پیشگی احتیاط کے لیے 'in case' آتا ہے۔"
      },
      {
        baseId: 707,
        question: "He missed the bus, ____ he arrived late.",
        options: ["so", "unless", "although"],
        correctIndex: 0,
        explanation: "'So' introduces logical result.",
        urduExplanation: "نتیجہ بیان کرنے کے لیے 'so' آتا ہے۔"
      },
      {
        baseId: 708,
        question: "She was tired, ____ she completed the report.",
        options: ["but", "because", "although"],
        correctIndex: 0,
        explanation: "'But' connects contrasting statements.",
        urduExplanation: "تضاد کے لیے 'but' استعمال ہوتا ہے۔"
      },
      {
        baseId: 709,
        question: "We cancelled the picnic ____ it was raining heavily.",
        options: ["because", "despite", "however"],
        correctIndex: 0,
        explanation: "'Because' introduces a clause of reason.",
        urduExplanation: "وجہ والے کلاز کے لیے 'because' آتا ہے۔"
      },
      {
        baseId: 710,
        question: "He studied hard; ____, he passed with distinction.",
        options: ["therefore", "whereas", "nevertheless"],
        correctIndex: 0,
        explanation: "'Therefore' introduces the logical conclusion.",
        urduExplanation: "نتیجے کے اظہار کے لیے 'therefore' استعمال ہوتا ہے۔"
      },
      {
        baseId: 711,
        question: "You can take the bus, ____ you can walk to the station.",
        options: ["or", "because", "although"],
        correctIndex: 0,
        explanation: "'Or' presents alternative options.",
        urduExplanation: "متبادل اختیارات کے لیے 'or' آتا ہے۔"
      },
      {
        baseId: 712,
        question: "____ the task was difficult, the team finished it on time.",
        options: ["Although", "Because of", "Despite"],
        correctIndex: 0,
        explanation: "'Although' introduces a concession clause.",
        urduExplanation: "'Although' تضاد کے کلاز کو شروع کرتا ہے۔"
      },
      {
        baseId: 713,
        question: "She saved a copy ____ she would not lose her work.",
        options: ["so that", "unless", "whereas"],
        correctIndex: 0,
        explanation: "'So that' introduces purpose and consequence.",
        urduExplanation: "مقصد اور احتیاط کے لیے 'so that' آتا ہے۔"
      },
      {
        baseId: 714,
        question: "He is careful, ____ his colleague is rather careless.",
        options: ["whereas", "therefore", "moreover"],
        correctIndex: 0,
        explanation: "'Whereas' indicates direct contrast.",
        urduExplanation: "دو حالتوں کے موازنے میں 'whereas' آتا ہے۔"
      },
      {
        baseId: 715,
        question: "The roads were flooded; ____ the school remained open.",
        options: ["however", "so that", "because"],
        correctIndex: 0,
        explanation: "'However' signals unexpected outcome.",
        urduExplanation: "متضاد حقیقت کے لیے 'however' آتا ہے۔"
      },
      {
        baseId: 716,
        question: "Finish the form ____ you leave the office.",
        options: ["before", "because", "despite"],
        correctIndex: 0,
        explanation: "'Before' indicates temporal sequence.",
        urduExplanation: "وقت کی ترتیب کے لیے 'before' آتا ہے۔"
      },
      {
        baseId: 717,
        question: "____ his lack of experience, he performed well.",
        options: ["Despite", "Because", "Although"],
        correctIndex: 0,
        explanation: "'Despite + noun phrase' expresses concession.",
        urduExplanation: "اسم کے ساتھ تضاد کے لیے 'Despite' آتا ہے۔"
      },
      {
        baseId: 718,
        question: "The price increased; ____, demand remained strong.",
        options: ["even so", "for example", "as a result"],
        correctIndex: 0,
        explanation: "'Even so' means nevertheless.",
        urduExplanation: "'Even so' اس کے باوجود کے معنی میں آتا ہے۔"
      },
      {
        baseId: 719,
        question: "She didn't attend the meeting, ____ she was unwell.",
        options: ["since", "whereas", "unless"],
        correctIndex: 0,
        explanation: "'Since' introduces reason.",
        urduExplanation: "'Since' یہاں وجہ ظاہر کرتا ہے۔"
      },
      {
        baseId: 720,
        question: "You will not improve ____ you practise regularly.",
        options: ["unless", "if", "because"],
        correctIndex: 0,
        explanation: "'Unless' means if not.",
        urduExplanation: "'Unless' شرطیہ منفی مفہوم دیتا ہے۔"
      }
    ]
  },

  {
    topic: 'Adverbs',
    range: [801, 900],
    difficultRange: [801, 850],
    moderateRange: [851, 875],
    easyRange: [876, 900],
    targetQuota: 3,
    items: [
      {
        baseId: 801,
        question: "She ____ visits her grandparents on Sundays.",
        options: ["usually", "use", "usual"],
        correctIndex: 0,
        explanation: "Adverb of frequency 'usually' modifies the verb 'visits'.",
        urduExplanation: "تکرار ظاہر کرنے کے لیے 'usually' آتا ہے۔"
      },
      {
        baseId: 802,
        question: "The results were ____ better than we had predicted.",
        options: ["considerably", "considerable", "consideration"],
        correctIndex: 0,
        explanation: "Adverb of degree 'considerably' modifies comparative adjective 'better'.",
        urduExplanation: "موازنے کی شدت بڑھانے کے لیے 'considerably' آتا ہے۔"
      },
      {
        baseId: 803,
        question: "He answered the question ____ confidently.",
        options: ["surprisingly", "surprise", "surprising"],
        correctIndex: 0,
        explanation: "Adverb 'surprisingly' modifies the adverb 'confidently'.",
        urduExplanation: "ایڈورب کی خصوصیت ظاہر کرنے کے لیے 'surprisingly' آتا ہے۔"
      },
      {
        baseId: 804,
        question: "I have not received the confirmation ____.",
        options: ["yet", "ever", "already"],
        correctIndex: 0,
        explanation: "'Yet' comes at the end of negative present perfect clauses.",
        urduExplanation: "منفی جملے کے آخر میں 'yet' استعمال ہوتا ہے۔"
      },
      {
        baseId: 805,
        question: "She arrived ____ for the interview, with ten minutes to spare.",
        options: ["early", "earlierly", "earliness"],
        correctIndex: 0,
        explanation: "'Early' is both an adjective and an adverb.",
        urduExplanation: "'Early' خود ایڈورب ہے، وقت سے پہلے پہنچنے کے لیے آتا ہے۔"
      },
      {
        baseId: 806,
        question: "The team performed ____ under pressure.",
        options: ["well", "good", "bestly"],
        correctIndex: 0,
        explanation: "Adverb of manner 'well' modifies the verb 'performed'.",
        urduExplanation: "فعل کی اچھائی کے لیے 'well' استعمال ہوتا ہے۔"
      },
      {
        baseId: 807,
        question: "He was ____ disappointed by the decision.",
        options: ["deeply", "depth", "deep"],
        correctIndex: 0,
        explanation: "'Deeply' modifies the adjective 'disappointed'.",
        urduExplanation: "شدید مایوسی کے لیے 'deeply' آتا ہے۔"
      },
      {
        baseId: 808,
        question: "She completed the task ____ and made no errors.",
        options: ["carefully", "careful", "carefulness"],
        correctIndex: 0,
        explanation: "Adverb of manner 'carefully' modifies 'completed'.",
        urduExplanation: "احتیاط سے کام کرنے کے لیے 'carefully' آتا ہے۔"
      },
      {
        baseId: 809,
        question: "The train arrived ____ late because of the storm.",
        options: ["extremely", "extremity", "extreme"],
        correctIndex: 0,
        explanation: "Adverb of degree 'extremely' modifies 'late'.",
        urduExplanation: "شدت کے لیے 'extremely' آتا ہے۔"
      },
      {
        baseId: 810,
        question: "He ____ forgets to lock the door; he checks it every time.",
        options: ["hardly ever", "hard", "hardly"],
        correctIndex: 0,
        explanation: "'Hardly ever' means almost never.",
        urduExplanation: "'Hardly ever' کا مطلب ہے تقریباً کبھی نہیں۔"
      },
      {
        baseId: 811,
        question: "____, I believe we should review the figures again.",
        options: ["Frankly", "Frankness", "Frank"],
        correctIndex: 0,
        explanation: "Sentence adverb 'Frankly' modifies the entire sentence.",
        urduExplanation: "کھلے اور صاف بیان کے لیے جملے کے آغاز میں 'Frankly' آتا ہے۔"
      },
      {
        baseId: 812,
        question: "She has ____ finished the assignment, so she can submit it now.",
        options: ["already", "still", "yet"],
        correctIndex: 0,
        explanation: "'Already' indicates completed action earlier than expected.",
        urduExplanation: "پہلے سے مکمل ہونے کے لیے 'already' آتا ہے۔"
      },
      {
        baseId: 813,
        question: "He speaks English ____ than he did last year.",
        options: ["more fluently", "fluent", "most fluent"],
        correctIndex: 0,
        explanation: "Comparative adverb form is 'more fluently'.",
        urduExplanation: "ایڈورب کے موازنے میں 'more fluently' آتا ہے۔"
      },
      {
        baseId: 814,
        question: "The manager explained the policy ____ enough for everyone to understand.",
        options: ["clearly", "clear", "clearness"],
        correctIndex: 0,
        explanation: "Adverb 'clearly' modifies 'explained' before 'enough'.",
        urduExplanation: "وضاحت سے بیان کرنے کے لیے 'clearly' آتا ہے۔"
      },
      {
        baseId: 815,
        question: "I have ____ seen such a well-organised presentation.",
        options: ["never", "not ever never", "ever never"],
        correctIndex: 0,
        explanation: "Negative frequency adverb 'never' precedes the main verb.",
        urduExplanation: "کبھی نہ دیکھنے کے لیے 'never' آتا ہے۔"
      },
      {
        baseId: 816,
        question: "Please drive ____; the road is slippery.",
        options: ["carefully", "careful", "care"],
        correctIndex: 0,
        explanation: "Adverb of manner 'carefully' modifies imperative 'drive'.",
        urduExplanation: "احتیاط سے گاڑی چلانے کے لیے 'carefully' آتا ہے۔"
      },
      {
        baseId: 817,
        question: "She is ____ responsible for the final review.",
        options: ["directly", "direct", "direction"],
        correctIndex: 0,
        explanation: "Adverb 'directly' modifies adjective 'responsible'.",
        urduExplanation: "براہ راست ذمہ دار کے لیے 'directly' آتا ہے۔"
      },
      {
        baseId: 818,
        question: "The guests arrived ____ than expected.",
        options: ["earlier", "early", "earliest"],
        correctIndex: 0,
        explanation: "Comparative adverb 'earlier' is used with 'than'.",
        urduExplanation: "پہلے پہنچنے کے لیے 'earlier' آتا ہے۔"
      },
      {
        baseId: 819,
        question: "He worked ____ to meet the deadline.",
        options: ["hard", "hardness", "hardly"],
        correctIndex: 0,
        explanation: "'Hard' functions as an adverb of manner meaning with intense effort.",
        urduExplanation: "سخت محنت کے لیے 'hard' آتا ہے۔"
      },
      {
        baseId: 820,
        question: "The speaker spoke so ____ that everyone heard her.",
        options: ["loudly", "louder", "loud"],
        correctIndex: 0,
        explanation: "Adverb of manner 'loudly' modifies 'spoke'.",
        urduExplanation: "بلند آواز میں بولنے کے لیے 'loudly' آتا ہے۔"
      }
    ]
  },

  {
    topic: 'Comparatives',
    range: [901, 1000],
    difficultRange: [901, 950],
    moderateRange: [951, 975],
    easyRange: [976, 1000],
    targetQuota: 2,
    items: [
      {
        baseId: 901,
        question: "This option is ____ expensive of the three.",
        options: ["the least", "less", "least than"],
        correctIndex: 0,
        explanation: "Superlative 'the least' is used for comparisons of three or more.",
        urduExplanation: "تین میں سب سے کم کے لیے 'the least' آتا ہے۔"
      },
      {
        baseId: 902,
        question: "Travel by train is generally ____ than flying.",
        options: ["cheaper", "cheapest", "cheap"],
        correctIndex: 0,
        explanation: "Comparative 'cheaper' is used with 'than'.",
        urduExplanation: "دو چیزوں کے موازنے میں 'cheaper' آتا ہے۔"
      },
      {
        baseId: 903,
        question: "The second draft is slightly ____ than the first.",
        options: ["better", "best", "good"],
        correctIndex: 0,
        explanation: "Comparative of 'good' is 'better'.",
        urduExplanation: "'Good' کا تقابلی صیغہ 'better' ہے۔"
      },
      {
        baseId: 904,
        question: "We have ____ time today than yesterday.",
        options: ["less", "few", "fewer"],
        correctIndex: 0,
        explanation: "Uncountable noun 'time' takes comparative 'less'.",
        urduExplanation: "غیر گنتی اسم کے لیے 'less' آتا ہے۔"
      },
      {
        baseId: 905,
        question: "Her results were as impressive ____ his.",
        options: ["as", "than", "like"],
        correctIndex: 0,
        explanation: "Equative comparison takes 'as ... as'.",
        urduExplanation: "برابری کے لیے 'as ... as' آتا ہے۔"
      },
      {
        baseId: 906,
        question: "This is by far the ____ solution we have considered.",
        options: ["most reliable", "more reliable", "reliabler"],
        correctIndex: 0,
        explanation: "'By far' modifies superlative 'the most reliable'.",
        urduExplanation: "سب سے بہترین کے لیے 'most reliable' آتا ہے۔"
      },
      {
        baseId: 907,
        question: "The weather is getting ____ and ____.",
        options: ["colder / colder", "more cold / more cold", "cold / coldest"],
        correctIndex: 0,
        explanation: "Gradual change uses parallel comparatives ('colder and colder').",
        urduExplanation: "مسلسل تبدیلی کے لیے 'colder and colder' آتا ہے۔"
      },
      {
        baseId: 908,
        question: "This year's report is ____ than last year's.",
        options: ["more detailed", "most detailed", "detailed"],
        correctIndex: 0,
        explanation: "Comparative of 'detailed' is 'more detailed'.",
        urduExplanation: "تقابل میں 'more detailed' آئے گا۔"
      },
      {
        baseId: 909,
        question: "There are ____ applicants this year than last year.",
        options: ["fewer", "less", "few"],
        correctIndex: 0,
        explanation: "Plural countable noun 'applicants' takes 'fewer'.",
        urduExplanation: "گنتی والے جمع اسم کے لیے 'fewer' آتا ہے۔"
      },
      {
        baseId: 910,
        question: "Her explanation was ____ than mine.",
        options: ["clearer", "clearest", "more clear than"],
        correctIndex: 0,
        explanation: "Comparative of 'clear' is 'clearer'.",
        urduExplanation: "'Clear' کا تقابلی صیغہ 'clearer' ہے۔"
      },
      {
        baseId: 911,
        question: "This is the ____ route to the station.",
        options: ["shortest", "shorter", "most short"],
        correctIndex: 0,
        explanation: "Superlative is 'the shortest'.",
        urduExplanation: "سب سے چھوٹے راستے کے لیے 'shortest' آتا ہے۔"
      },
      {
        baseId: 912,
        question: "The new system is ____ efficient than the old one.",
        options: ["more", "most", "much"],
        correctIndex: 0,
        explanation: "Comparative with 'than' takes 'more'.",
        urduExplanation: "موازنے میں 'more' efficient آئے گا۔"
      },
      {
        baseId: 913,
        question: "My workload is not as heavy ____ yours.",
        options: ["as", "than", "like"],
        correctIndex: 0,
        explanation: "'Not as + adjective + as' forms negative equative comparison.",
        urduExplanation: "موازنے میں 'not as heavy as' آئے گا۔"
      },
      {
        baseId: 914,
        question: "Of the two proposals, the first is ____ practical.",
        options: ["more", "the most", "most"],
        correctIndex: 0,
        explanation: "Comparing two items requires comparative 'more'.",
        urduExplanation: "دو کے موازنے میں 'more practical' آتا ہے۔"
      },
      {
        baseId: 915,
        question: "The sooner we begin, the ____ we will finish.",
        options: ["earlier", "early", "earliest"],
        correctIndex: 0,
        explanation: "Parallel comparative takes 'the earlier'.",
        urduExplanation: "متوازی تقابل میں 'the earlier' آتا ہے۔"
      },
      {
        baseId: 916,
        question: "This laptop is twice as fast ____ my old one.",
        options: ["as", "than", "like"],
        correctIndex: 0,
        explanation: "Ratio comparison uses 'twice as + adj + as'.",
        urduExplanation: "تناسب میں 'twice as fast as' آتا ہے۔"
      },
      {
        baseId: 917,
        question: "She made ____ mistakes than her colleague.",
        options: ["fewer", "less", "fewest"],
        correctIndex: 0,
        explanation: "Countable noun 'mistakes' takes 'fewer'.",
        urduExplanation: "غلطیوں کی تعداد کے لیے 'fewer' آتا ہے۔"
      },
      {
        baseId: 918,
        question: "Today's meeting was ____ than I expected.",
        options: ["far shorter", "more short", "shortest"],
        correctIndex: 0,
        explanation: "'Far shorter' intensifies the comparative.",
        urduExplanation: "موازنے کی شدت کے لیے 'far shorter' آتا ہے۔"
      },
      {
        baseId: 919,
        question: "He is one of the ____ analysts in the department.",
        options: ["best", "good", "better"],
        correctIndex: 0,
        explanation: "Superlative after 'one of the' is 'best'.",
        urduExplanation: "بہترین میں سے ایک کے لیے 'the best' آتا ہے۔"
      },
      {
        baseId: 920,
        question: "The more you practise, the ____ you become.",
        options: ["more confident", "most confident", "confident"],
        correctIndex: 0,
        explanation: "Correlative comparative uses 'the more confident'.",
        urduExplanation: "جتنا پریکٹس کریں گے اتنا اعتماد بڑھے گا: 'the more confident'۔"
      }
    ]
  }
];

console.log('Total topic specs:', TOPIC_SPECS.length);
