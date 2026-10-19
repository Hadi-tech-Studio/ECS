# scripts/build_aptis_core_pools.py
import json

# Comprehensive grammar questions across all 12 categories and general English topics:
# Everyday life, education, health, technology, environment, travel, hobbies, social issues, work, relationships, general knowledge, occasional business.

GRAMMAR_QUESTIONS = [
  # =========================================================================
  # 1. VERBS (Gerunds, Infinitives, Causatives, Complementation, Phrasal Verbs)
  # =========================================================================
  {
    "id": "gen-verb-01",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "Before launching the new smartphone app, the software engineers insisted on _______ all beta test feedback.",
    "options": ["reviewing", "review", "to review", "reviewed"],
    "correctIndex": 0,
    "englishExplanation": "The prepositional structure 'insist on' requires a gerund ('-ing' form).",
    "urduExplanation": "اصطلاح 'insist on' کے بعد ہمیشہ جیرنڈ یعنی '-ing' والی شکل آتی ہے۔"
  },
  {
    "id": "gen-verb-02",
    "category": "Verbs",
    "difficulty": "Easy",
    "question": "Sarah enjoys _______ historical novels during her weekend leisure hours.",
    "options": ["reading", "read", "to read", "reads"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'enjoy' is always followed by a gerund ('reading').",
    "urduExplanation": "فعل 'enjoy' کے فوراً بعد Gerund ('reading') استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-verb-03",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The university dean made all graduate researchers _______ their lab safety credentials.",
    "options": ["renew", "to renew", "renewing", "renewed"],
    "correctIndex": 0,
    "englishExplanation": "The causative verb 'make' in active voice requires an object followed by a bare infinitive ('renew').",
    "urduExplanation": "ایکٹو وائس میں Causative verb 'make' کے بعد بغیر 'to' کے بنیادی فعل آتا ہے۔"
  },
  {
    "id": "gen-verb-04",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "After finishing her medical residency, Dr. Amina decided _______ to a rural clinic to serve underprivileged families.",
    "options": ["to relocate", "relocating", "relocate", "relocated"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'decide' is followed by a to-infinitive ('to relocate').",
    "urduExplanation": "فعل 'decide' کے بعد ہمیشہ 'to-infinitive' آتا ہے۔"
  },
  {
    "id": "gen-verb-05",
    "category": "Verbs",
    "difficulty": "Easy",
    "question": "Many urban households are trying _______ carbon emissions by installing solar rooftop panels.",
    "options": ["to reduce", "reducing", "reduce", "reduced"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'try' when denoting an effort to accomplish an objective takes a to-infinitive.",
    "urduExplanation": "کسی مقصد کے حصول کی کوشش کے لیے 'try' کے بعد 'to-infinitive' آتا ہے۔"
  },
  {
    "id": "gen-verb-06",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The mountain expedition leader regretted _______ the early meteorological warnings about the blizzard.",
    "options": ["having disregarded", "to disregard", "disregard", "disregarding"],
    "correctIndex": 0,
    "englishExplanation": "Regretting a past action completed prior to the feeling of regret uses the perfect gerund ('having disregarded').",
    "urduExplanation": "ماضی کے کسی کام پر پچھتاوے کے لیے Perfect Gerund ('having disregarded') استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-verb-07",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "My grandfather prefers _______ fresh vegetables in his backyard garden rather than buying them at the supermarket.",
    "options": ["growing", "grow", "grown", "to be grown"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'prefer' expressing a general habitual activity is followed by a gerund ('growing').",
    "urduExplanation": "عمومی پسند اور عادت کے اظہار کے لیے 'prefer' کے بعد Gerund آتا ہے۔"
  },
  {
    "id": "gen-verb-08",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The fitness coach had the marathon runners _______ their hydration levels every thirty minutes.",
    "options": ["monitor", "to monitor", "monitoring", "monitored"],
    "correctIndex": 0,
    "englishExplanation": "Causative 'have' (had someone do something) takes a bare infinitive without 'to'.",
    "urduExplanation": "جب 'have' یا 'had' کارفرما فعل (Causative) کے طور پر آئے تو مفعول کے بعد بغیر 'to' کے بنیادی فعل آتا ہے۔"
  },
  {
    "id": "gen-verb-09",
    "category": "Verbs",
    "difficulty": "Easy",
    "question": "The airline passenger refused _______ his seat belt during the unexpected mid-flight turbulence.",
    "options": ["to unbuckle", "unbuckling", "unbuckle", "unbuckled"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'refuse' is followed by a to-infinitive ('to unbuckle').",
    "urduExplanation": "فعل 'refuse' کے بعد ہمیشہ 'to-infinitive' آتا ہے۔"
  },
  {
    "id": "gen-verb-10",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "We are all looking forward to _______ the ancient ruins of Persepolis on our upcoming archaeological tour.",
    "options": ["exploring", "explore", "explored", "to explore"],
    "correctIndex": 0,
    "englishExplanation": "In 'look forward to', 'to' is a preposition and must be followed by a gerund ('exploring').",
    "urduExplanation": "'Look forward to' میں 'to' پریپوزیشن ہے جس کے بعد Gerund ('exploring') آتا ہے۔"
  },
  {
    "id": "gen-verb-11",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The city health inspector prohibited the street food vendor from _______ food without hygienic gloves.",
    "options": ["handling", "handle", "to handle", "handled"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'prohibit' takes the preposition 'from' followed by a gerund ('from handling').",
    "urduExplanation": "لفظ 'prohibit' کے ساتھ 'from' اور اس کے بعد Gerund آتا ہے۔"
  },
  {
    "id": "gen-verb-12",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "She successfully managed _______ her master's dissertation while working forty hours a week.",
    "options": ["to finish", "finishing", "finish", "finished"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'manage' (meaning to succeed in doing something) requires a to-infinitive ('to finish').",
    "urduExplanation": "کسی کام میں کامیاب ہونے کے معنی میں 'manage' کے بعد 'to-infinitive' آتا ہے۔"
  },
  {
    "id": "gen-verb-13",
    "category": "Verbs",
    "difficulty": "Easy",
    "question": "Tom promised _______ his younger brother with mathematics homework every Tuesday evening.",
    "options": ["to assist", "assisting", "assist", "assisted"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'promise' is followed by a to-infinitive ('to assist').",
    "urduExplanation": "فعل 'promise' کے بعد ہمیشہ 'to-infinitive' آتا ہے۔"
  },
  {
    "id": "gen-verb-14",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The wildlife sanctuary ranger let the injured falcon _______ back into the mountainous wilderness.",
    "options": ["fly", "to fly", "flying", "flew"],
    "correctIndex": 0,
    "englishExplanation": "The causative verb 'let' is followed by an object and a bare infinitive ('fly').",
    "urduExplanation": "فعل 'let' کے بعد بغیر 'to' کے بنیادی فعل ('fly') استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-verb-15",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "He admitted _______ his smartphone during the final university examination.",
    "options": ["using", "use", "to use", "used"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'admit' when acknowledging an action is followed by a gerund ('using').",
    "urduExplanation": "کسی عمل کا اعتراف کرنے کے لیے 'admit' کے بعد Gerund آتا ہے۔"
  },
  {
    "id": "gen-verb-16",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "The enterprise project team avoided _______ major design changes so close to the client release date.",
    "options": ["making", "to make", "make", "made"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'avoid' is followed by a gerund ('making').",
    "urduExplanation": "فعل 'avoid' کے بعد ہمیشہ Gerund ('making') استعمال ہوتا ہے۔"
  },

  # =========================================================================
  # 2. TENSES (Aspects, Sequences, Time Clauses, Progressive & Perfect Forms)
  # =========================================================================
  {
    "id": "gen-tense-01",
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Pure water _______ at 100 degrees Celsius under standard atmospheric pressure.",
    "options": ["boils", "is boiling", "has boiled", "boiled"],
    "correctIndex": 0,
    "englishExplanation": "Scientific laws, general truths, and unchanging facts take the present simple tense ('boils').",
    "urduExplanation": "سائنسی حقائق اور مستقل سچائیوں کو بیان کرنے کے لیے Present Simple استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-tense-02",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "While Arthur _______ along the coastal path, a pod of dolphins surfaced near the beach.",
    "options": ["was cycling", "cycled", "has cycled", "had cycled"],
    "correctIndex": 0,
    "englishExplanation": "Past continuous ('was cycling') describes an ongoing background action interrupted by a distinct event.",
    "urduExplanation": "ماضی کے جاری عمل کے لیے Past Continuous ('was cycling') استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-tense-03",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By the time the rescue helicopter landed on the summit, the mountaineers _______ a snow cave for protection.",
    "options": ["had constructed", "constructed", "have constructed", "were constructing"],
    "correctIndex": 0,
    "englishExplanation": "Past perfect ('had constructed') denotes an action completed before another past milestone.",
    "urduExplanation": "ماضی میں کسی دوسرے واقعے سے پہلے مکمل ہونے والے عمل کے لیے Past Perfect آتا ہے۔"
  },
  {
    "id": "gen-tense-04",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Our municipal community library _______ coding and digital literacy workshops every weekend.",
    "options": ["organizes", "is organizing", "organized", "has organized"],
    "correctIndex": 0,
    "englishExplanation": "Recurring habitual actions and regular timetables use the present simple ('organizes').",
    "urduExplanation": "روزمرہ کے معمول اور بار بار ہونے والے کاموں کے لیے Present Simple آتا ہے۔"
  },
  {
    "id": "gen-tense-05",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "This time next week, the international marine biologists _______ deep sea coral reefs off the Pacific coast.",
    "options": ["will be examining", "examine", "examined", "have examined"],
    "correctIndex": 0,
    "englishExplanation": "Future continuous ('will be examining') refers to an action that will be actively in progress at a specific future moment.",
    "urduExplanation": "مستقبل کے کسی مقررہ وقت پر جاری رہنے والے کام کے لیے Future Continuous آتا ہے۔"
  },
  {
    "id": "gen-tense-06",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Dr. Watson _______ at this research institute for twelve years before taking a sabbatical.",
    "options": ["had been working", "has been working", "was working", "works"],
    "correctIndex": 0,
    "englishExplanation": "Past perfect continuous ('had been working') emphasizes an ongoing continuous duration prior to a point in the past.",
    "urduExplanation": "ماضی کے کسی واقعے سے پہلے تسلسل کے ساتھ جاری رہنے والے کام کے لیے Past Perfect Continuous آتا ہے۔"
  },
  {
    "id": "gen-tense-07",
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Over the past five years, electric vehicle ownership _______ exponentially across metropolitan areas.",
    "options": ["has increased", "increases", "increased", "was increasing"],
    "correctIndex": 0,
    "englishExplanation": "Present perfect ('has increased') connects past developments to the present moment.",
    "urduExplanation": "ماضی سے شروع ہو کر حال تک اثر انداز ہونے والے کام کے لیے Present Perfect آتا ہے۔"
  },
  {
    "id": "gen-tense-08",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By the end of this decade, renewable energy sources _______ more than half of global electricity demands.",
    "options": ["will have supplied", "will supply", "have supplied", "supply"],
    "correctIndex": 0,
    "englishExplanation": "Future perfect ('will have supplied') indicates an achievement that will be completed by a future deadline.",
    "urduExplanation": "مستقبل کے کسی وقت تک مکمل ہو جانے والے کام کے لیے Future Perfect آتا ہے۔"
  },
  {
    "id": "gen-tense-09",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "As soon as the flight attendant _______ the safety demonstration, passengers may recline their seats.",
    "options": ["concludes", "will conclude", "concluded", "had concluded"],
    "correctIndex": 0,
    "englishExplanation": "Time clauses introduced by 'as soon as' referring to the future use the present simple ('concludes').",
    "urduExplanation": "'As soon as' والے ٹائم کلاز میں مستقبل کی جگہ Present Simple آتا ہے۔"
  },
  {
    "id": "gen-tense-10",
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Listen! The neighborhood orchestra _______ Vivaldi's Four Seasons in the town square.",
    "options": ["is performing", "performs", "performed", "has performed"],
    "correctIndex": 0,
    "englishExplanation": "Present continuous ('is performing') is used for an action taking place right now at the time of speaking.",
    "urduExplanation": "بات چیت کے وقت جاری عمل کے لیے Present Continuous آتا ہے۔"
  },
  {
    "id": "gen-tense-11",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Hardly had the conference speaker begun her presentation when the microphone battery _______ dead.",
    "options": ["went", "had gone", "goes", "was going"],
    "correctIndex": 0,
    "englishExplanation": "In 'Hardly... when', the first clause uses past perfect and the time clause uses the past simple ('went').",
    "urduExplanation": "'Hardly had... when' والی ساخت میں 'when' کے بعد Past Simple آتا ہے۔"
  },
  {
    "id": "gen-tense-12",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Elena _______ two marathons since she joined the athletic club eighteen months ago.",
    "options": ["has completed", "completed", "had completed", "completes"],
    "correctIndex": 0,
    "englishExplanation": "The main clause accompanying a 'since' clause uses the present perfect ('has completed').",
    "urduExplanation": "'Since' والے کلاز کے ساتھ مین کلاز میں Present Perfect آتا ہے۔"
  },
  {
    "id": "gen-tense-13",
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Every summer, thousands of migratory birds _______ to the coastal wetlands to breed.",
    "options": ["travel", "are traveling", "traveled", "have traveled"],
    "correctIndex": 0,
    "englishExplanation": "Regular annual migratory patterns require the present simple ('travel').",
    "urduExplanation": "سالانہ قدرتی معمولات کے لیے Present Simple استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-tense-14",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "The archaeologists _______ at the excavation site for five months before unearthing the Roman mosaic.",
    "options": ["had been digging", "have been digging", "were digging", "dug"],
    "correctIndex": 0,
    "englishExplanation": "Past perfect continuous ('had been digging') indicates duration continuing up to a past discovery.",
    "urduExplanation": "ماضی کے کسی واقعے سے پہلے جاری طویل محنت کے لیے Past Perfect Continuous آتا ہے۔"
  },
  {
    "id": "gen-tense-15",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Don't phone me between seven and eight tonight because I _______ dinner for my visiting relatives.",
    "options": ["will be cooking", "cook", "cooked", "have cooked"],
    "correctIndex": 0,
    "englishExplanation": "Future continuous ('will be cooking') denotes an activity that will be in progress during a specified time span.",
    "urduExplanation": "مستقبل کے دورانیے میں جاری رہنے والے عمل کے لیے Future Continuous آتا ہے۔"
  },
  {
    "id": "gen-tense-16",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "The company _______ its quarterly financial statement by the end of next business week.",
    "options": ["will have published", "published", "publishes", "has published"],
    "correctIndex": 0,
    "englishExplanation": "Future perfect ('will have published') indicates completion before a specified future deadline.",
    "urduExplanation": "مستقبل کی دی گئی تاریخ سے پہلے مکمل ہونے والے کام کے لیے Future Perfect آتا ہے۔"
  },

  # =========================================================================
  # 3. PARTS OF SPEECH (Adjectives, Adverbs, Prepositions, Conjunctions, Pronouns)
  # =========================================================================
  {
    "id": "gen-pos-01",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "Regular cardiovascular exercise contributes substantially to mental and physical _______.",
    "options": ["well-being", "well", "fit", "healthily"],
    "correctIndex": 0,
    "englishExplanation": "The noun 'well-being' is required after the preposition 'to' and coordinate adjectives.",
    "urduExplanation": "حرفِ ربط 'to' اور صفات کے بعد اسم 'well-being' درست ہے۔"
  },
  {
    "id": "gen-pos-02",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "The guest lecture on environmental conservation was extraordinarily _______.",
    "options": ["informative", "inform", "information", "informatively"],
    "correctIndex": 0,
    "englishExplanation": "The predicate adjective 'informative' is required after the linking verb 'was' and adverb 'extraordinarily'.",
    "urduExplanation": "ربطی فعل 'was' اور ایڈورب کے بعد صفت ('informative') درکار ہے۔"
  },
  {
    "id": "gen-pos-03",
    "category": "Parts of Speech",
    "difficulty": "Hard",
    "question": "Despite facing steep economic hurdles, the ambitious young entrepreneur pursued her vision _______.",
    "options": ["relentlessly", "relentless", "relent", "relentlessness"],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'relentlessly' modifies the past action verb 'pursued'.",
    "urduExplanation": "فعل 'pursued' کی کیفیت ظاہر کرنے کے لیے ظرف ('relentlessly') آتا ہے۔"
  },
  {
    "id": "gen-pos-04",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "The city council planted flowering cherry trees to enhance urban _______.",
    "options": ["aesthetics", "aesthetic", "aesthetically", "aesthetician"],
    "correctIndex": 0,
    "englishExplanation": "The noun 'aesthetics' functions as the direct object of the verb phrase 'enhance'.",
    "urduExplanation": "فعل 'enhance' کے بعد مفعول کے طور پر اسم 'aesthetics' آتا ہے۔"
  },
  {
    "id": "gen-pos-05",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "The train arrived _______ time, allowing the commuters to catch their connecting bus smoothly.",
    "options": ["on", "in", "at", "by"],
    "correctIndex": 0,
    "englishExplanation": "'On time' means punctual or according to the published timetable.",
    "urduExplanation": "وقت کی پابندی اور شیڈول کے مطابق پہنچنے کے لیے 'on time' بولا جاتا ہے۔"
  },
  {
    "id": "gen-pos-06",
    "category": "Parts of Speech",
    "difficulty": "Hard",
    "question": "She completed the marathon in under three hours, _______ surprised her experienced trainer.",
    "options": ["which", "that", "what", "who"],
    "correctIndex": 0,
    "englishExplanation": "The sentential relative pronoun 'which' refers back to the entire preceding clause.",
    "urduExplanation": "پورے پچھلے جملے کی طرف اشارہ کرنے کے لیے کوما کے بعد 'which' آتا ہے۔"
  },
  {
    "id": "gen-pos-07",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "Neither the head chef nor his assistants _______ willing to disclose the secret recipe.",
    "options": ["were", "was", "is", "are being"],
    "correctIndex": 0,
    "englishExplanation": "With 'neither... nor', the verb agrees in number with the nearer subject ('assistants' -> 'were').",
    "urduExplanation": "'Neither... nor' میں فعل قریبی فاعل ('assistants') کے مطابق جمع ('were') آتا ہے۔"
  },
  {
    "id": "gen-pos-08",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "Because of torrential rain, the outdoor tennis tournament was postponed _______ next Friday.",
    "options": ["until", "since", "during", "while"],
    "correctIndex": 0,
    "englishExplanation": "'Postponed until' denotes delaying an event up to a specific future point in time.",
    "urduExplanation": "کسی تقریب کو آئندہ تاریخ تک مؤخر کرنے کے لیے 'until' آتا ہے۔"
  },
  {
    "id": "gen-pos-09",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "The scientific paper was praised for being both concise _______ comprehensive.",
    "options": ["and", "or", "but", "nor"],
    "correctIndex": 0,
    "englishExplanation": "Correlative conjunction 'both' pairs exclusively with 'and'.",
    "urduExplanation": "'Both' کے ساتھ ہمیشہ 'and' کی جوڑی بنتی ہے۔"
  },
  {
    "id": "gen-pos-10",
    "category": "Parts of Speech",
    "difficulty": "Hard",
    "question": "The remote volcanic island is virtually _______ to tourists due to harsh ocean currents.",
    "options": ["inaccessible", "inaccessibly", "inaccessibility", "access"],
    "correctIndex": 0,
    "englishExplanation": "Predicate adjective 'inaccessible' follows the linking verb 'is' and adverb 'virtually'.",
    "urduExplanation": "ربطی فعل 'is' اور ایڈورب کے بعد صفت 'inaccessible' (ناقابلِ رسائی) آئے گی۔"
  },
  {
    "id": "gen-pos-11",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "Children who spend excessive time on electronic screens often suffer _______ eye fatigue.",
    "options": ["from", "with", "of", "by"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'suffer' takes the preposition 'from' when describing ailments.",
    "urduExplanation": "بیماری یا تکلیف کے لیے فعل 'suffer' کے بعد 'from' آتا ہے۔"
  },
  {
    "id": "gen-pos-12",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "He solved the complex physics equation _______ without checking the textbook answers.",
    "options": ["easily", "easy", "easiness", "eased"],
    "correctIndex": 0,
    "englishExplanation": "Adverb 'easily' modifies the transitive verb 'solved'.",
    "urduExplanation": "فعل 'solved' کی وضاحت کے لیے ظرف 'easily' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-pos-13",
    "category": "Parts of Speech",
    "difficulty": "Hard",
    "question": "_______ the adverse weather warnings, the daring explorers commenced their Arctic expedition.",
    "options": ["Notwithstanding", "Although", "Whereas", "Unless"],
    "correctIndex": 0,
    "englishExplanation": "'Notwithstanding' functions as a preposition followed by a noun phrase ('the adverse weather warnings').",
    "urduExplanation": "اسم یا اسمی فقرے سے پہلے تضاد کے لیے 'Notwithstanding' بطور پریپوزیشن آتا ہے۔"
  },
  {
    "id": "gen-pos-14",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "The university library provides access to millions of scholarly journals, _______ are peer-reviewed.",
    "options": ["many of which", "many of that", "much of which", "many of them"],
    "correctIndex": 0,
    "englishExplanation": "Quantifier relative phrase 'many of which' connects the non-defining clause referring to plural journals.",
    "urduExplanation": "غیر جاندار جمع اشیاء کے لیے 'many of which' کا تعلق دار جملہ بنتا ہے۔"
  },
  {
    "id": "gen-pos-15",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "The new public transit line is famous _______ its punctuality and cleanliness.",
    "options": ["for", "with", "about", "at"],
    "correctIndex": 0,
    "englishExplanation": "The adjective 'famous' collocates with the preposition 'for'.",
    "urduExplanation": "صفت 'famous' کے بعد ہمیشہ پریپوزیشن 'for' آتا ہے۔"
  },
  {
    "id": "gen-pos-16",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "The corporate headquarters operates _______ an environmental sustainability framework.",
    "options": ["under", "between", "among", "during"],
    "correctIndex": 0,
    "englishExplanation": "Operating 'under a framework' is the standard prepositional idiom.",
    "urduExplanation": "کسی ضابطے یا فریم ورک کے ماتحت کام کرنے کے لیے 'under' آتا ہے۔"
  },

  # =========================================================================
  # 4. ARTICLES (Definite, Indefinite, Zero Article, Geography, Abstract Nouns)
  # =========================================================================
  {
    "id": "gen-art-01",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "Farhan bought _______ high-resolution digital camera to practice landscape photography.",
    "options": ["a", "an", "the", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Singular countable noun phrase 'high-resolution digital camera' begins with a consonant sound, taking 'a'.",
    "urduExplanation": "واحد قابل گنتی اسم جو consonant آواز سے شروع ہو اس سے پہلے 'a' آتا ہے۔"
  },
  {
    "id": "gen-art-02",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "K2 is the second highest mountain peak in _______ world.",
    "options": ["the", "a", "an", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Unique planetary entities ('the world', 'the sun', 'the sky') require the definite article 'the'.",
    "urduExplanation": "منفرد اور یکتا چیزوں ('the world') سے پہلے definite article 'the' آتا ہے۔"
  },
  {
    "id": "gen-art-03",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "_______ integrity is considered an indispensable virtue in professional life.",
    "options": ["No article", "The", "A", "An"],
    "correctIndex": 0,
    "englishExplanation": "Abstract uncountable nouns ('integrity') used in a general sense take zero article.",
    "urduExplanation": "مجرد اور ناقابلِ شمار اسم ('integrity') جب عام معنوں میں آئے تو کوئی آرٹیکل نہیں آتا۔"
  },
  {
    "id": "gen-art-04",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "She plays _______ violin beautifully in the university chamber orchestra.",
    "options": ["the", "a", "an", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Musical instruments take the definite article 'the' when referring to playing them as a skill.",
    "urduExplanation": "موسیقی کے آلات بجانے کے حوالے سے 'the' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-art-05",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "The documentary examined the diverse marine ecosystems of _______ Pacific Ocean.",
    "options": ["the", "a", "an", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Oceans, seas, and rivers require the definite article 'the' ('the Pacific Ocean').",
    "urduExplanation": "سمندروں اور دریاؤں کے ناموں سے پہلے 'the' لگایا جاتا ہے۔"
  },
  {
    "id": "gen-art-06",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "Dr. Khan was elected _______ president of the national medical association.",
    "options": ["no article", "the", "a", "an"],
    "correctIndex": 0,
    "englishExplanation": "Zero article is used with unique titles and elected offices following verbs like 'elect', 'appoint', or 'make'.",
    "urduExplanation": "'Elect' یا 'appoint' کے بعد آنے والے واحد اور مخصوص عہدے سے پہلے آرٹیکل نہیں آتا۔"
  },
  {
    "id": "gen-art-07",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "My roommate wants to adopt _______ stray kitten from the animal rescue shelter.",
    "options": ["a", "an", "the", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Indefinite singular countable noun 'stray kitten' takes 'a'.",
    "urduExplanation": "کسی ایک غیر معین بلی کے بچے کے لیے 'a' استعمال ہوگا۔"
  },
  {
    "id": "gen-art-08",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "During our trip to Europe, we stayed in _______ United Kingdom for two weeks before traveling to France.",
    "options": ["the", "a", "an", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Country names containing words like 'Kingdom', 'States', or 'Republic' take 'the'.",
    "urduExplanation": "جن ممالک کے نام میں 'Kingdom' یا 'States' آئے، ان سے پہلے 'the' لگتا ہے۔"
  },
  {
    "id": "gen-art-09",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "_______ breakfast we ate at the seaside cafe this morning was truly exceptional.",
    "options": ["The", "A", "An", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Meals normally take zero article, but when specified or modified by a restrictive clause, they require 'the'.",
    "urduExplanation": "کھانوں کے نام عام طور پر بغیر آرٹیکل آتے ہیں، لیکن مخصوص ناشتے کے لیے 'The' آتا ہے۔"
  },
  {
    "id": "gen-art-10",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "An apple _______ day is said to keep the doctor away.",
    "options": ["a", "an", "the", "no article"],
    "correctIndex": 0,
    "englishExplanation": "The indefinite article 'a' indicates frequency/rate ('a day' = per day).",
    "urduExplanation": "شرح اور روزانہ کے تناسب کے لیے 'a day' بولا جاتا ہے۔"
  },
  {
    "id": "gen-art-11",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "The scientific team studied _______ behavior of honeybees in urban environments.",
    "options": ["the", "a", "an", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Specific behavior defined by the prepositional phrase 'of honeybees' requires 'the'.",
    "urduExplanation": "'Of' کے ذریعے مخصوص کیے گئے اسم سے پہلے definite article 'the' آتا ہے۔"
  },
  {
    "id": "gen-art-12",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "He has _______ extensive knowledge of Renaissance Italian art and architecture.",
    "options": ["an", "a", "the", "no article"],
    "correctIndex": 0,
    "englishExplanation": "'Knowledge' is uncountable, but when preceded by an adjective denoting a particular scope, it takes 'a/an' ('an extensive knowledge of').",
    "urduExplanation": "اگرچہ 'knowledge' ان کاؤنٹیبل ہے، لیکن صفت کے ساتھ خاص شعبے کے لیے 'an extensive knowledge' درست ہے۔"
  },
  {
    "id": "gen-art-13",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "She works as _______ environmental consultant for clean energy startups.",
    "options": ["an", "a", "the", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Professions and job roles in the singular taking a vowel sound use 'an'.",
    "urduExplanation": "پیشوں اور ملازمتوں سے پہلے جو vowel آواز سے شروع ہوں 'an' آتا ہے۔"
  },
  {
    "id": "gen-art-14",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "_______ Sahara Desert is the largest hot desert on Earth.",
    "options": ["The", "A", "An", "no article"],
    "correctIndex": 0,
    "englishExplanation": "Deserts require the definite article 'the' ('the Sahara Desert').",
    "urduExplanation": "صحرائی علاقوں کے ناموں سے پہلے ہمیشہ 'The' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-art-15",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "The patient was admitted to _______ hospital after experiencing severe chest pains.",
    "options": ["no article", "the", "a", "an"],
    "correctIndex": 0,
    "englishExplanation": "Institutions like 'hospital', 'school', 'prison' take zero article when visited for their primary institutional purpose.",
    "urduExplanation": "جب ہسپتال علاج کے بنیادی مقصد کے لیے جایا جائے تو برطانوی انگلش میں کوئی آرٹیکل نہیں آتا۔"
  },
  {
    "id": "gen-art-16",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "The board reviewed _______ annual report presented by the executive committee.",
    "options": ["the", "a", "an", "no article"],
    "correctIndex": 0,
    "englishExplanation": "The specific annual report identified by the modifying clause requires 'the'.",
    "urduExplanation": "مخصوص اور متعین سالانہ رپورٹ کے لیے 'the' آتا ہے۔"
  },

  # =========================================================================
  # 5. COLLOCATIONS (Everyday, Work, Health, Travel, Education, Business)
  # =========================================================================
  {
    "id": "gen-col-01",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "Before choosing a university major, students should _______ the pros and cons carefully.",
    "options": ["weigh", "measure", "count", "calculate"],
    "correctIndex": 0,
    "englishExplanation": "'Weigh the pros and cons' is the standard English collocation for assessing advantages and disadvantages.",
    "urduExplanation": "'Weigh the pros and cons' نفع اور نقصان کا جائزہ لینے کے لیے مخصوص اصطلاح ہے۔"
  },
  {
    "id": "gen-col-02",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "To maintain optimal fitness, you should _______ regular exercise into your weekly schedule.",
    "options": ["incorporate", "fabricate", "manufacture", "assemble"],
    "correctIndex": 0,
    "englishExplanation": "'Incorporate regular exercise' is the natural, idiomatic collocation.",
    "urduExplanation": "معمول میں ورزش کو شامل کرنے کے لیے 'incorporate' موزوں ترین ہے۔"
  },
  {
    "id": "gen-col-03",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "After intense deliberation, the two community associations managed to _______ a compromise.",
    "options": ["strike", "hit", "beat", "smash"],
    "correctIndex": 0,
    "englishExplanation": "'Strike a compromise' means to successfully negotiate a mutual agreement.",
    "urduExplanation": "'Strike a compromise' کا مطلب سمجھوتہ اور باہمی اتفاق رائے قائم کرنا ہے۔"
  },
  {
    "id": "gen-col-04",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "The research scientists worked diligently around the clock to _______ the publication deadline.",
    "options": ["meet", "catch", "reach", "achieve"],
    "correctIndex": 0,
    "englishExplanation": "One 'meets a deadline' when finishing work within the designated timeframe.",
    "urduExplanation": "مقررہ وقت پر کام مکمل کرنے کے لیے 'meet a deadline' کہا جاتا ہے۔"
  },
  {
    "id": "gen-col-05",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "She made a conscious effort to _______ a good impression during her job interview.",
    "options": ["make", "do", "have", "give"],
    "correctIndex": 0,
    "englishExplanation": "The natural verb collocation is 'make an impression' on someone.",
    "urduExplanation": "اچھا تاثر قائم کرنے کے لیے 'make an impression' بولا جاتا ہے۔"
  },
  {
    "id": "gen-col-06",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "The unexpected technological breakthrough _______ into question long-standing scientific dogmas.",
    "options": ["called", "put", "brought", "asked"],
    "correctIndex": 0,
    "englishExplanation": "'Call into question' is an idiomatic collocation meaning to cast doubt upon something.",
    "urduExplanation": "'Call into question' کا مطلب کسی بات پر شک یا سوالیہ نشان اٹھانا ہے۔"
  },
  {
    "id": "gen-col-07",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "Local environmental activists are campaigning to _______ public awareness about plastic waste.",
    "options": ["raise", "rise", "lift", "arouse"],
    "correctIndex": 0,
    "englishExplanation": "The standard transitive verb collocation is 'raise awareness'.",
    "urduExplanation": "شعور اور آگاہی بیدار کرنے کے لیے 'raise awareness' بولا جاتا ہے۔"
  },
  {
    "id": "gen-col-08",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "After walking ten miles through the national park, the hikers decided to _______ a break.",
    "options": ["take", "make", "do", "hold"],
    "correctIndex": 0,
    "englishExplanation": "'Take a break' is the standard natural collocation for resting.",
    "urduExplanation": "آرام یا وقفہ کرنے کے لیے 'take a break' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-col-09",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "The city transportation department must _______ precautions against icy winter roads.",
    "options": ["take", "make", "do", "render"],
    "correctIndex": 0,
    "englishExplanation": "The correct verb collocation is 'take precautions'.",
    "urduExplanation": "حفاظتی اقدامات اور احتیاط کرنے کے لیے 'take precautions' آتا ہے۔"
  },
  {
    "id": "gen-col-10",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "Learning a new foreign language requires students to _______ attention to subtle nuances.",
    "options": ["pay", "give", "spend", "lend"],
    "correctIndex": 0,
    "englishExplanation": "'Pay attention to' is the standard verb-noun collocation.",
    "urduExplanation": "توجہ دینے کے لیے 'pay attention' کی ساخت استعمال ہوتی ہے۔"
  },
  {
    "id": "gen-col-11",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "He decided to _______ up classical guitar as a creative weekend hobby.",
    "options": ["take", "pick", "set", "bring"],
    "correctIndex": 0,
    "englishExplanation": "The phrasal verb 'take up' means to begin practicing a new hobby or pastime.",
    "urduExplanation": "نیا مشغلہ یا سرگرمی شروع کرنے کے لیے 'take up' بولا جاتا ہے۔"
  },
  {
    "id": "gen-col-12",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "The diplomatic delegation worked tirelessly to _______ common ground between the two nations.",
    "options": ["find", "locate", "spot", "invent"],
    "correctIndex": 0,
    "englishExplanation": "'Find common ground' is the established idiom for identifying shared mutual interests.",
    "urduExplanation": "مشترکہ نکات اور باہمی مفادات تلاش کرنے کو 'find common ground' کہتے ہیں۔"
  },
  {
    "id": "gen-col-13",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "During the public town hall meeting, several local residents _______ their concerns about traffic congestion.",
    "options": ["voiced", "spoke", "sounded", "told"],
    "correctIndex": 0,
    "englishExplanation": "One 'voices concerns' or opinions to express feelings formally.",
    "urduExplanation": "تحفظات اور خدشات کا اظہار کرنے کے لیے 'voice concerns' آتا ہے۔"
  },
  {
    "id": "gen-col-14",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "I would like to _______ an appointment with Dr. Harrison for a routine dental checkup.",
    "options": ["make", "do", "take", "form"],
    "correctIndex": 0,
    "englishExplanation": "'Make an appointment' is the customary collocation.",
    "urduExplanation": "ڈاکٹر سے وقت طے کرنے کے لیے 'make an appointment' آتا ہے۔"
  },
  {
    "id": "gen-col-15",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "The new smartphone feature had an immediate _______ on mobile battery longevity.",
    "options": ["impact", "affect", "shock", "force"],
    "correctIndex": 0,
    "englishExplanation": "The noun 'impact' collocates with 'have an immediate impact on'.",
    "urduExplanation": "'Have an impact on' اثر انداز ہونے کے لیے درست اصطلاح ہے۔"
  },
  {
    "id": "gen-col-16",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "Before signing the commercial lease agreement, the company conducted thorough due _______.",
    "options": ["diligence", "duty", "effort", "patience"],
    "correctIndex": 0,
    "englishExplanation": "'Due diligence' is the standard legal and commercial collocation for comprehensive appraisal.",
    "urduExplanation": "'Due diligence' کاروباری جانچ پڑتال کی مسلمہ اصطلاح ہے۔"
  },

  # =========================================================================
  # 6. INVERSIONS (Negative Adverbs, Formal Emphasis, Conditionals)
  # =========================================================================
  {
    "id": "gen-inv-01",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Rarely _______ such a breathtaking natural aurora as we witnessed in northern Norway.",
    "options": ["have I seen", "I have seen", "did I saw", "had I saw"],
    "correctIndex": 0,
    "englishExplanation": "A clause beginning with negative restrictive adverb 'Rarely' triggers subject-auxiliary inversion ('have I seen').",
    "urduExplanation": "منفی یا محدود کرنے والے لفظ 'Rarely' سے شروع ہونے پر Inversion ('have I seen') لازمی ہے۔"
  },
  {
    "id": "gen-inv-02",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Not only _______ the national science olympiad, but she also earned a full university scholarship.",
    "options": ["did she win", "she won", "won she", "had she won"],
    "correctIndex": 0,
    "englishExplanation": "'Not only' opening a clause demands auxiliary inversion ('did she win').",
    "urduExplanation": "'Not only' سے کلاز شروع ہونے پر معاون فعل فاعل سے پہلے آتا ہے۔"
  },
  {
    "id": "gen-inv-03",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Under no circumstances _______ personal passwords with anyone online.",
    "options": ["should you share", "you should share", "you share", "do you share"],
    "correctIndex": 0,
    "englishExplanation": "'Under no circumstances' requires inversion ('should you share').",
    "urduExplanation": "'Under no circumstances' (کسی بھی صورت میں نہیں) کے بعد فاعل سے پہلے 'should' آتا ہے۔"
  },
  {
    "id": "gen-inv-04",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Scarcely _______ the mountain summit when a sudden snowstorm engulfed the ridge.",
    "options": ["had the climbers reached", "the climbers reached", "reached the climbers", "have the climbers reached"],
    "correctIndex": 0,
    "englishExplanation": "'Scarcely + past perfect inversion' followed by 'when' describes two closely sequential past events.",
    "urduExplanation": "'Scarcely had + subject + reached' ساخت میں انورژن استعمال ہوتی ہے۔"
  },
  {
    "id": "gen-inv-05",
    "category": "Inversions",
    "difficulty": "Medium",
    "question": "Seldom _______ wild tigers venture so close to human settlements in the valley.",
    "options": ["do", "are", "have", "were"],
    "correctIndex": 0,
    "englishExplanation": "Negative frequency adverb 'Seldom' opening the sentence requires present auxiliary inversion ('do').",
    "urduExplanation": "'Seldom' سے شروع ہونے والے جملے میں پریزنٹ انورژن کے لیے 'do' آتا ہے۔"
  },
  {
    "id": "gen-inv-06",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Little _______ that their modest software prototype would revolutionize global communication.",
    "options": ["did they suspect", "they suspected", "suspected they", "had they suspect"],
    "correctIndex": 0,
    "englishExplanation": "'Little' meaning 'not at all' at the start of a sentence requires inversion ('did they suspect').",
    "urduExplanation": "'Little' جب منفی معنوں میں شروع میں آئے تو انورژن ('did they suspect') درکار ہے۔"
  },
  {
    "id": "gen-inv-07",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Only after the laboratory results were verified _______ the medical breakthrough announced to the public.",
    "options": ["was", "is", "were", "had been"],
    "correctIndex": 0,
    "englishExplanation": "'Only after' clauses require inversion in the subsequent main clause ('was the medical breakthrough announced').",
    "urduExplanation": "'Only after' کے بعد مین کلاز میں انورژن کے ساتھ معاون فعل ('was') فاعل سے پہلے آتا ہے۔"
  },
  {
    "id": "gen-inv-08",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Should you _______ any difficulties operating the telescope, consult the astronomical guide.",
    "options": ["experience", "experienced", "to experience", "experiencing"],
    "correctIndex": 0,
    "englishExplanation": "Inverted first conditional ('Should + subject + bare infinitive') replaces 'If you experience'.",
    "urduExplanation": "پہلی شرط کی انورژن میں 'Should' کے بعد بغیر 'to' کے بنیادی فعل ('experience') آتا ہے۔"
  },
  {
    "id": "gen-inv-09",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Had the fire alarms _______ properly, the historic museum gallery could have been evacuated earlier.",
    "options": ["sounded", "sound", "sounding", "been sounding"],
    "correctIndex": 0,
    "englishExplanation": "Inverted third conditional ('Had + subject + past participle') replaces 'If the fire alarms had sounded'.",
    "urduExplanation": "تھرڈ کنڈیشنل کی انورژن میں 'Had + subject + 3rd form' کی ساخت ہوتی ہے۔"
  },
  {
    "id": "gen-inv-10",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Were the city council _______ more bicycle lanes, fewer residents would commute by private car.",
    "options": ["to construct", "construct", "constructed", "constructing"],
    "correctIndex": 0,
    "englishExplanation": "Inverted second conditional uses 'Were + subject + to-infinitive'.",
    "urduExplanation": "سیکنڈ کنڈیشنل کی انورژن میں 'Were + subject + to construct' آتا ہے۔"
  },
  {
    "id": "gen-inv-11",
    "category": "Inversions",
    "difficulty": "Medium",
    "question": "Never before _______ such passionate enthusiasm among high school volunteers for community cleanups.",
    "options": ["had the organizers witnessed", "the organizers had witnessed", "witnessed the organizers", "did the organizers witnessed"],
    "correctIndex": 0,
    "englishExplanation": "'Never before' opening a sentence triggers auxiliary inversion.",
    "urduExplanation": "'Never before' سے فقرہ شروع ہو تو معاون فعل فاعل سے پہلے آتا ہے۔"
  },
  {
    "id": "gen-inv-12",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "No sooner had the curtain fallen _______ the audience erupted in thunderous applause.",
    "options": ["than", "when", "then", "after"],
    "correctIndex": 0,
    "englishExplanation": "'No sooner had... than' is the mandatory correlative pair.",
    "urduExplanation": "'No sooner' کے ساتھ ہمیشہ 'than' کا جوڑا بنتا ہے۔"
  },
  {
    "id": "gen-inv-13",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Only by working cooperatively _______ human society solve pressing environmental challenges.",
    "options": ["can", "may", "will be", "should have"],
    "correctIndex": 0,
    "englishExplanation": "Clauses beginning with 'Only by...' take subject-modal inversion in the main clause ('can human society solve').",
    "urduExplanation": "'Only by' سے شروع ہونے والے فقرے میں ماڈل ورب 'can' فاعل سے پہلے آتا ہے۔"
  },
  {
    "id": "gen-inv-14",
    "category": "Inversions",
    "difficulty": "Medium",
    "question": "At no point during the public debate _______ the candidate lose her composure.",
    "options": ["did", "was", "has", "had"],
    "correctIndex": 0,
    "englishExplanation": "Negative expression 'At no point' triggers auxiliary inversion with 'did'.",
    "urduExplanation": "'At no point' کے بعد ماضی کے لیے انورژن میں 'did' آتا ہے۔"
  },
  {
    "id": "gen-inv-15",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "On no account _______ tourists attempt to feed wild animals in the national reserve.",
    "options": ["must", "can have", "ought", "need"],
    "correctIndex": 0,
    "englishExplanation": "'On no account' expressing absolute prohibition triggers modal inversion ('must tourists attempt').",
    "urduExplanation": "'On no account' (ہرگز نہیں) کے بعد ممانعت کے لیے ماڈل ورب 'must' فاعل سے پہلے آتا ہے۔"
  },
  {
    "id": "gen-inv-16",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Should any technical issues _______ during software deployment, rollback protocols will activate.",
    "options": ["arise", "arose", "arisen", "arising"],
    "correctIndex": 0,
    "englishExplanation": "Inverted conditional 'Should + subject + bare infinitive' requires base form 'arise'.",
    "urduExplanation": "'Should' والی انورژن میں ہمیشہ پہلی فارم 'arise' آتی ہے۔"
  },

  # =========================================================================
  # 7. SUBJUNCTIVE (Mandative, Urgency, Academic & Policy Recommendations)
  # =========================================================================
  {
    "id": "gen-sub-01",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "The university academic committee recommended that each doctoral student _______ an original thesis.",
    "options": ["submit", "submits", "submitted", "will submit"],
    "correctIndex": 0,
    "englishExplanation": "Mandative subjunctive after verbs of recommendation requires the base verb form ('submit').",
    "urduExplanation": "سفارش یا تجویز والے فعل کے بعد Mandative Subjunctive میں بنیادی فعل ('submit') آتا ہے۔"
  },
  {
    "id": "gen-sub-02",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "It is essential that every patient _______ prescribed antibiotic courses completely.",
    "options": ["finish", "finishes", "finished", "is finishing"],
    "correctIndex": 0,
    "englishExplanation": "Impersonal adjectives of urgency ('It is essential that...') take base subjunctive ('finish').",
    "urduExplanation": "ضرورت اور تاکید والے جملوں میں 'that' کے بعد بنیادی فعل ('finish') آتا ہے۔"
  },
  {
    "id": "gen-sub-03",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "The aviation safety regulator insisted that the airliner _______ grounded pending structural inspection.",
    "options": ["be", "is", "was", "being"],
    "correctIndex": 0,
    "englishExplanation": "Passive mandative subjunctive requires 'be + past participle' ('be grounded').",
    "urduExplanation": "پیسو سبجیکٹو میں 'be' اور فعل کی تیسری فارم استعمال ہوتی ہے۔"
  },
  {
    "id": "gen-sub-04",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The athletic trainer demanded that the injured soccer player _______ off the field immediately.",
    "options": ["step", "steps", "stepped", "is stepping"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'demand that' requires base subjunctive form ('step').",
    "urduExplanation": "حکم یا مطالبے والے فعل کے بعد سبجیکٹو میں فعل کی بنیادی شکل ('step') آتی ہے۔"
  },
  {
    "id": "gen-sub-05",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "It is crucial that all confidential customer records _______ securely encrypted against data breaches.",
    "options": ["be", "are", "were", "have been"],
    "correctIndex": 0,
    "englishExplanation": "Subjunctive passive requires base auxiliary 'be'.",
    "urduExplanation": "زور دینے والے فقرے میں 'It is crucial that...' کے بعد پیسیو میں 'be' آتا ہے۔"
  },
  {
    "id": "gen-sub-06",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The environmental scientist proposed that the city _______ single-use plastic bags in all supermarkets.",
    "options": ["ban", "bans", "banned", "will ban"],
    "correctIndex": 0,
    "englishExplanation": "Verbs of proposal ('propose that') take base subjunctive ('ban').",
    "urduExplanation": "'Propose that' کے بعد سبجیکٹو موڈ میں بغیر کسی اضافے کے 'ban' آتا ہے۔"
  },
  {
    "id": "gen-sub-07",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "It is imperative that the emergency medical team _______ the disaster zone within twenty minutes.",
    "options": ["reach", "reaches", "reached", "is reaching"],
    "correctIndex": 0,
    "englishExplanation": "'It is imperative that...' governs the bare subjunctive ('reach').",
    "urduExplanation": "حکمیہ جملوں میں 'that' کے بعد ہمیشہ بیس فارم ('reach') آتی ہے۔"
  },
  {
    "id": "gen-sub-08",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The university ethics board required that the lead researcher _______ written consent from all human subjects.",
    "options": ["obtain", "obtains", "obtained", "obtaining"],
    "correctIndex": 0,
    "englishExplanation": "The verb 'require that' is followed by a base form subjunctive ('obtain').",
    "urduExplanation": "'Require that' کے بعد تیسرے شخص کے ساتھ بھی 's' کے بغیر بنیادی فعل آتا ہے۔"
  },
  {
    "id": "gen-sub-09",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "The hospital superintendent suggested that visiting hours _______ curtailed to prevent contagion.",
    "options": ["be", "are", "were", "have been"],
    "correctIndex": 0,
    "englishExplanation": "Passive subjunctive takes 'be + past participle'.",
    "urduExplanation": "پیسیو سبجیکٹو میں 'be' کی بنیادی شکل استعمال ہوتی ہے۔"
  },
  {
    "id": "gen-sub-10",
    "category": "Subjunctive",
    "difficulty": "Easy",
    "question": "The professor urged that each student _______ present at the orientation lecture on Monday.",
    "options": ["be", "is", "was", "are"],
    "correctIndex": 0,
    "englishExplanation": "Urging actions uses the subjunctive 'be'.",
    "urduExplanation": "'Urge that' کے بعد سبجیکٹو میں 'be' آتا ہے۔"
  },
  {
    "id": "gen-sub-11",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "It is desirable that the international conference delegate _______ fluent English and French.",
    "options": ["speak", "speaks", "spoke", "is speaking"],
    "correctIndex": 0,
    "englishExplanation": "'It is desirable that' takes the base subjunctive ('speak').",
    "urduExplanation": "'It is desirable that' کے بعد بنیادی فعل 'speak' آتا ہے۔"
  },
  {
    "id": "gen-sub-12",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The head coach requested that the team captain _______ the post-game press briefing.",
    "options": ["attend", "attends", "attended", "will attend"],
    "correctIndex": 0,
    "englishExplanation": "'Request that' takes base form subjunctive ('attend').",
    "urduExplanation": "'Request that' کے بعد سنگولر سبجیکٹ کے ساتھ بھی بغیر 's' کے بنیادی فعل آتا ہے۔"
  },
  {
    "id": "gen-sub-13",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "God _______ the Queen is an ancient formulaic subjunctive expression still used in ceremony.",
    "options": ["save", "saves", "saved", "is saving"],
    "correctIndex": 0,
    "englishExplanation": "Formulaic subjunctive expressions preserve archaic base verb forms ('save').",
    "urduExplanation": "دعائیہ اور رسمی فقروں میں فارمولائک سبجیکٹو ('save') استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-sub-14",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The wildlife conservation director requested that rangers _______ nocturnal patrols in the reserve.",
    "options": ["conduct", "conducts", "conducted", "conducting"],
    "correctIndex": 0,
    "englishExplanation": "Mandative subjunctive after 'requested that' takes bare infinitive 'conduct'.",
    "urduExplanation": "درخواست کے جملے میں 'that' کے بعد بنیادی فعل 'conduct' درست ہے۔"
  },
  {
    "id": "gen-sub-15",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "It is vital that the clean water filtration plant _______ operational during the flood emergency.",
    "options": ["remain", "remains", "remained", "is remaining"],
    "correctIndex": 0,
    "englishExplanation": "'It is vital that' takes the bare base form ('remain').",
    "urduExplanation": "'It is vital that' کے بعد سبجیکٹو میں 'remain' آتا ہے۔"
  },
  {
    "id": "gen-sub-16",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The audit committee recommended that internal reporting procedures _______ formally revised.",
    "options": ["be", "are", "were", "have been"],
    "correctIndex": 0,
    "englishExplanation": "Passive mandative subjunctive requires 'be + past participle'.",
    "urduExplanation": "سبجیکٹو پیسیو میں 'be' کی بنیادی شکل آتی ہے۔"
  },

  # =========================================================================
  # 8. SYNONYMS (Everyday Life, Health, Technology, Environment, Travel, Work)
  # =========================================================================
  {
    "id": "gen-syn-01",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "In environmental science, the word 'depletion' is closest in meaning to _______.",
    "options": ["exhaustion", "expansion", "creation", "preservation"],
    "correctIndex": 0,
    "englishExplanation": "'Depletion' means the reduction or exhaustion of natural resources.",
    "urduExplanation": "'Depletion' کا مطلب قدرتی وسائل کا ختم ہونا یا کمی آنا (Exhaustion) ہے۔"
  },
  {
    "id": "gen-syn-02",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "When organizing a community fundraiser, finding a suitable venue is considered _______.",
    "options": ["paramount", "trivial", "negligible", "secondary"],
    "correctIndex": 0,
    "englishExplanation": "'Paramount' means of supreme importance, dominant, or primary.",
    "urduExplanation": "'Paramount' کا مطلب اولین اہمیت کا حامل یا سب سے ضروری ہے۔"
  },
  {
    "id": "gen-syn-03",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The diplomat's approach to the negotiations was praised for being extremely _______.",
    "options": ["prudent", "rash", "hasty", "reckless"],
    "correctIndex": 0,
    "englishExplanation": "'Prudent' means showing wise foresight, discretion, and careful judgment.",
    "urduExplanation": "'Prudent' کا مطلب دانشمندانہ، محتاط اور دور اندیش ہے۔"
  },
  {
    "id": "gen-syn-04",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "In everyday speech, an 'authentic' Persian rug is described as _______.",
    "options": ["genuine", "counterfeit", "synthetic", "artificial"],
    "correctIndex": 0,
    "englishExplanation": "'Authentic' means genuine, original, and not copied.",
    "urduExplanation": "'Authentic' کا ہم معنی 'genuine' (اصلی اور کھرا) ہے۔"
  },
  {
    "id": "gen-syn-05",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "The new public transit system proved remarkably _______ during peak morning rush hour.",
    "options": ["resilient", "fragile", "inflexible", "brittle"],
    "correctIndex": 0,
    "englishExplanation": "'Resilient' means capable of withstanding shock, stress, or disruption.",
    "urduExplanation": "'Resilient' کا مطلب مضبوط اور دباؤ کو برداشت کرنے والا ہے۔"
  },
  {
    "id": "gen-syn-06",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The scientist offered a _______ explanation that demystified the quantum physics problem.",
    "options": ["lucid", "opaque", "obscure", "convoluted"],
    "correctIndex": 0,
    "englishExplanation": "'Lucid' means clear, easily understood, and transparent.",
    "urduExplanation": "'Lucid' کا مطلب انتہائی واضح اور آسان فہم (Clear) ہے۔"
  },
  {
    "id": "gen-syn-07",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "The tropical rainforest is famous for its _______ variety of plant and insect species.",
    "options": ["vast", "tiny", "meager", "scanty"],
    "correctIndex": 0,
    "englishExplanation": "'Vast' means immense, huge, or extensive in scope.",
    "urduExplanation": "'Vast' کا ہم معنی لفظ 'immense' یا وسیع و عریض ہے۔"
  },
  {
    "id": "gen-syn-08",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "The company's digital marketing strategy yielded _______ growth across three international markets.",
    "options": ["substantial", "negligible", "trivial", "insignificant"],
    "correctIndex": 0,
    "englishExplanation": "'Substantial' means considerable, notable, and of real worth.",
    "urduExplanation": "'Substantial' کا مطلب نمایاں، بڑا اور قابلِ ذکر (Considerable) ہے۔"
  },
  {
    "id": "gen-syn-09",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The researcher carried out a _______ examination of ancient historical manuscripts.",
    "options": ["meticulous", "careless", "cursory", "superficial"],
    "correctIndex": 0,
    "englishExplanation": "'Meticulous' means showing great attention to detail, thorough and precise.",
    "urduExplanation": "'Meticulous' کا مطلب انتہائی باریک بین اور محتاط ہے۔"
  },
  {
    "id": "gen-syn-10",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "After the storm cleared, the alpine mountain lake appeared completely _______.",
    "options": ["tranquil", "turbulent", "chaotic", "furious"],
    "correctIndex": 0,
    "englishExplanation": "'Tranquil' means calm, peaceful, and free from disturbance.",
    "urduExplanation": "'Tranquil' کا ہم معنی 'calm' اور پرسکون ہے۔"
  },
  {
    "id": "gen-syn-11",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "The doctor warned that sleep deprivation can _______ memory retention and focus.",
    "options": ["impair", "enhance", "strengthen", "boost"],
    "correctIndex": 0,
    "englishExplanation": "'Impair' means to weaken or damage something in its quality or function.",
    "urduExplanation": "'Impair' کا مطلب کسی چیز کو نقصان پہنچانا یا کمزور کرنا ہے۔"
  },
  {
    "id": "gen-syn-12",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The old typewriter became _______ once portable personal computers became universally affordable.",
    "options": ["obsolete", "fashionable", "contemporary", "modern"],
    "correctIndex": 0,
    "englishExplanation": "'Obsolete' means no longer produced or used, out of date.",
    "urduExplanation": "'Obsolete' کا مطلب پرانا، متروک اور غیر مستعمل (Outdated) ہے۔"
  },
  {
    "id": "gen-syn-13",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "The community garden began to _______ once irrigation pipelines were properly installed.",
    "options": ["flourish", "wither", "decay", "decline"],
    "correctIndex": 0,
    "englishExplanation": "'Flourish' means to grow or develop in a healthy or vigorous way; thrive.",
    "urduExplanation": "'Flourish' کا ہم معنی 'thrive' (پھلنا پھولنا) ہے۔"
  },
  {
    "id": "gen-syn-14",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "Her remarks during the team brainstorming session were praised for being straightforward and _______.",
    "options": ["candid", "deceptive", "evasive", "ambiguous"],
    "correctIndex": 0,
    "englishExplanation": "'Candid' means truthful, frank, and straightforward.",
    "urduExplanation": "'Candid' کا مطلب صاف گو اور سچا (Frank / Honest) ہے۔"
  },
  {
    "id": "gen-syn-15",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The architectural design was celebrated for its _______ blend of modern and classical styles.",
    "options": ["harmonious", "discordant", "clashing", "jarring"],
    "correctIndex": 0,
    "englishExplanation": "'Harmonious' means forming a pleasing or consistent whole.",
    "urduExplanation": "'Harmonious' کا مطلب ہم آہنگ اور خوشگوار امتزاج ہے۔"
  },
  {
    "id": "gen-syn-16",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "The independent auditing firm verified that the financial records were completely _______.",
    "options": ["accurate", "flawed", "erroneous", "deceptive"],
    "correctIndex": 0,
    "englishExplanation": "'Accurate' means correct in all details, exact and error-free.",
    "urduExplanation": "'Accurate' کا مطلب بالکل درست اور بے عیب ہے۔"
  },

  # =========================================================================
  # 9. ANTONYMS (Health, Environment, Work, Social Life, General Knowledge)
  # =========================================================================
  {
    "id": "gen-ant-01",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "In health and lifestyle discussions, the antonym of 'sedentary' (desk-bound) is _______.",
    "options": ["active", "motionless", "sluggish", "dormant"],
    "correctIndex": 0,
    "englishExplanation": "The opposite of sedentary (inactive, sitting much of the time) is active.",
    "urduExplanation": "'Sedentary' (بیٹھ کر وقت گزارنے والے طرز زندگی) کا متضاد 'active' (متحرک) ہے۔"
  },
  {
    "id": "gen-ant-02",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "In environmental geography, the antonym of 'abundant' resources is _______.",
    "options": ["scarce", "copious", "plentiful", "ample"],
    "correctIndex": 0,
    "englishExplanation": "The antonym of abundant (existing in large quantities) is scarce.",
    "urduExplanation": "'Abundant' (وافر مقدار) کا متضاد 'scarce' (کمیاب یا نایاب) ہے۔"
  },
  {
    "id": "gen-ant-03",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "The scientific report was praised for its objective approach; the antonym of 'objective' is _______.",
    "options": ["biased", "impartial", "neutral", "unprejudiced"],
    "correctIndex": 0,
    "englishExplanation": "'Objective' (unbiased, factual) has the direct opposite 'biased' or 'subjective'.",
    "urduExplanation": "'Objective' (غیر جانبدار) کا متضاد 'biased' (طرفدار یا متعصب) ہے۔"
  },
  {
    "id": "gen-ant-04",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "The ceramic antique teapot is remarkably fragile; the antonym of 'fragile' is _______.",
    "options": ["sturdy", "delicate", "brittle", "weak"],
    "correctIndex": 0,
    "englishExplanation": "'Fragile' (easily broken) is antonymous to 'sturdy' or 'durable'.",
    "urduExplanation": "'Fragile' (نازک اور جلدی ٹوٹنے والا) کا متضاد 'sturdy' (مضبوط) ہے۔"
  },
  {
    "id": "gen-ant-05",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "In meteorological forecasts, the opposite of 'turbulent' air is _______.",
    "options": ["calm", "stormy", "chaotic", "gusty"],
    "correctIndex": 0,
    "englishExplanation": "'Turbulent' (characterized by unrest and violent disorder) is opposite to 'calm'.",
    "urduExplanation": "'Turbulent' (طوفانی اور بے چین) کا متضاد 'calm' (پرسکون) ہے۔"
  },
  {
    "id": "gen-ant-06",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "The software terms of service were intentionally ambiguous; the opposite of 'ambiguous' is _______.",
    "options": ["explicit", "vague", "nebulous", "equivocal"],
    "correctIndex": 0,
    "englishExplanation": "'Ambiguous' (having double or unclear meaning) is opposite to 'explicit' (stated clearly).",
    "urduExplanation": "'Ambiguous' (مبہم) کا متضاد 'explicit' (بالکل واضح اور دو ٹوک) ہے۔"
  },
  {
    "id": "gen-ant-07",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "In economics, the antonym of 'mandatory' regulations is _______.",
    "options": ["optional", "compulsory", "statutory", "obligatory"],
    "correctIndex": 0,
    "englishExplanation": "'Mandatory' (required by law) has the antonym 'optional'.",
    "urduExplanation": "'Mandatory' (لازمی) کا متضاد 'optional' (اختیاری) ہے۔"
  },
  {
    "id": "gen-ant-08",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "The new manager has a very lenient approach to office hours; the opposite of 'lenient' is _______.",
    "options": ["strict", "tolerant", "forgiving", "indulgent"],
    "correctIndex": 0,
    "englishExplanation": "'Lenient' (permissive, merciful) is opposite to 'strict' or 'stringent'.",
    "urduExplanation": "'Lenient' (نرم مزاج اور رعایت دینے والا) کا متضاد 'strict' (سخت گیر) ہے۔"
  },
  {
    "id": "gen-ant-09",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "In psychology, the opposite of 'ephemeral' (short-lived feelings) is _______.",
    "options": ["permanent", "transient", "fleeting", "momentary"],
    "correctIndex": 0,
    "englishExplanation": "'Ephemeral' (lasting a very short time) is opposite to 'permanent' or 'enduring'.",
    "urduExplanation": "'Ephemeral' (عارضی اور چند لمحوں کا) کا متضاد 'permanent' (دائمی اور مستقل) ہے۔"
  },
  {
    "id": "gen-ant-10",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "The young student is known for being extremely humble; the antonym of 'humble' is _______.",
    "options": ["arrogant", "modest", "courteous", "respectful"],
    "correctIndex": 0,
    "englishExplanation": "'Humble' (modest) is opposite to 'arrogant' or 'haughty'.",
    "urduExplanation": "'Humble' (عاجزانہ) کا متضاد 'arrogant' (مغرور) ہے۔"
  },
  {
    "id": "gen-ant-11",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "In urban planning, the antonym of 'dense' population centers is _______.",
    "options": ["sparse", "crowded", "congested", "compact"],
    "correctIndex": 0,
    "englishExplanation": "'Dense' (closely packed together) is opposite to 'sparse' (thinly dispersed).",
    "urduExplanation": "'Dense' (گنجان آباد) کا متضاد 'sparse' (پراگندہ یا کم آباد) ہے۔"
  },
  {
    "id": "gen-ant-12",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "The team gave a perfunctory review of the manuscript; the antonym of 'perfunctory' is _______.",
    "options": ["thorough", "cursory", "careless", "superficial"],
    "correctIndex": 0,
    "englishExplanation": "'Perfunctory' (carried out with minimum effort or reflection) is opposite to 'thorough'.",
    "urduExplanation": "'Perfunctory' (سررسی اور بے دلی سے کیا گیا) کا متضاد 'thorough' (جامع اور گہرا) ہے۔"
  },
  {
    "id": "gen-ant-13",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "The mountain air in the morning is remarkably pure; the antonym of 'pure' is _______.",
    "options": ["contaminated", "clean", "fresh", "unblemished"],
    "correctIndex": 0,
    "englishExplanation": "'Pure' (clean, unadulterated) has the antonym 'contaminated' or 'polluted'.",
    "urduExplanation": "'Pure' (خالص اور صاف) کا متضاد 'contaminated' (آلودہ) ہے۔"
  },
  {
    "id": "gen-ant-14",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "The athletic trainer praised the athlete's flexibility; the antonym of 'flexible' is _______.",
    "options": ["rigid", "pliable", "elastic", "supple"],
    "correctIndex": 0,
    "englishExplanation": "'Flexible' (adaptable, easily bent) is opposite to 'rigid' or 'stiff'.",
    "urduExplanation": "'Flexible' (لچکدار) کا متضاد 'rigid' (سخت اور غیر لچکدار) ہے۔"
  },
  {
    "id": "gen-ant-15",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "The country experienced a period of economic boom; the antonym of 'prosperity' is _______.",
    "options": ["adversity", "wealth", "affluence", "fortune"],
    "correctIndex": 0,
    "englishExplanation": "'Prosperity' (wealth and good fortune) has the antonym 'adversity' or 'poverty'.",
    "urduExplanation": "'Prosperity' (خوشحالی) کا متضاد 'adversity' (تنگدستی یا بدحالی) ہے۔"
  },
  {
    "id": "gen-ant-16",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "The commercial company recorded a net profit this year; the antonym of 'profit' is _______.",
    "options": ["loss", "revenue", "dividend", "surplus"],
    "correctIndex": 0,
    "englishExplanation": "In commercial accounts, the direct opposite of 'profit' is 'loss'.",
    "urduExplanation": "'Profit' (منافع) کا متضاد 'loss' (نقصان یا خسارہ) ہے۔"
  },

  # =========================================================================
  # 10. MODAL CONDITIONALS (Zero, 1st, 2nd, 3rd, Mixed, Modal Auxiliaries)
  # =========================================================================
  {
    "id": "gen-mod-01",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "If you leave early for the international airport, you _______ avoid the morning traffic jams.",
    "options": ["will", "would", "did", "have"],
    "correctIndex": 0,
    "englishExplanation": "First conditional uses 'If + present simple' paired with 'will + bare infinitive'.",
    "urduExplanation": "پہلی شرط میں 'If + present simple' کے ساتھ 'will' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-mod-02",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "If I had known about the train cancellation, I _______ the express bus instead.",
    "options": ["would have taken", "took", "will take", "take"],
    "correctIndex": 0,
    "englishExplanation": "Third conditional requires 'would have + past participle' in the result clause for hypothetical pasts.",
    "urduExplanation": "تھرڈ کنڈیشنل کے نتیجہ والے حصے میں 'would have + 3rd form' آتا ہے۔"
  },
  {
    "id": "gen-mod-03",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "If the city council _______ more public parks in the downtown district, urban air quality would improve.",
    "options": ["created", "creates", "will create", "had created"],
    "correctIndex": 0,
    "englishExplanation": "Second conditional requires past simple ('created') in the if-clause with 'would + verb' in the main clause.",
    "urduExplanation": "سیکنڈ کنڈیشنل کے شرط والے حصے میں Past Simple ('created') آتا ہے۔"
  },
  {
    "id": "gen-mod-04",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "If you heat ice above zero degrees Celsius, it _______ into liquid water.",
    "options": ["melts", "melted", "will melt", "would melt"],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional expresses constant scientific truth using present simple in both clauses.",
    "urduExplanation": "سائنسی سچائیوں کے لیے زیرو کنڈیشنل میں دونوں طرف Present Simple استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-mod-05",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "If she had taken the medical scholarship in London, she _______ a licensed neurosurgeon today.",
    "options": ["would be", "will be", "had been", "is"],
    "correctIndex": 0,
    "englishExplanation": "Mixed conditional: past hypothetical action ('had taken') with a present result ('would be... today').",
    "urduExplanation": "مکسڈ کنڈیشنل میں ماضی کی شرط کا اثر حال پر ظاہر کرنے کے لیے 'would be... today' آتا ہے۔"
  },
  {
    "id": "gen-mod-06",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "You _______ have left your keys on the kitchen counter because they aren't in your jacket pocket.",
    "options": ["must", "should", "would", "shall"],
    "correctIndex": 0,
    "englishExplanation": "'Must have + past participle' expresses logical certainty based on strong evidence in the present.",
    "urduExplanation": "ماضی کے واقعے پر پختہ یقین اور قیاس کے لیے 'must have left' آتا ہے۔"
  },
  {
    "id": "gen-mod-07",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "He _______ have arrived in Tokyo already; his flight only departed two hours ago.",
    "options": ["cannot", "must", "should", "might"],
    "correctIndex": 0,
    "englishExplanation": "'Cannot have + past participle' expresses logical impossibility in the past.",
    "urduExplanation": "ماضی میں کسی کام کے نا ممکن ہونے کا یقین ظاہر کرنے کے لیے 'cannot have' آتا ہے۔"
  },
  {
    "id": "gen-mod-08",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "Unless it _______ raining by noon, the community outdoor soccer match will be rescheduled.",
    "options": ["stops", "stopped", "will stop", "is stopping"],
    "correctIndex": 0,
    "englishExplanation": "'Unless' meaning 'if not' takes the present simple tense ('stops') when referring to future conditions.",
    "urduExplanation": "'Unless' والے کلاز میں مستقبل کے لیے Present Simple ('stops') استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-mod-09",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "Had you informed me about the flight schedule alteration earlier, I _______ waiting at the arrivals gate.",
    "options": ["would not have been", "will not be", "am not", "was not"],
    "correctIndex": 0,
    "englishExplanation": "Inverted third conditional with a continuous result clause takes 'would not have been waiting'.",
    "urduExplanation": "تھرڈ کنڈیشنل کنٹینیوس میں 'would not have been waiting' آتا ہے۔"
  },
  {
    "id": "gen-mod-10",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "You ought to _______ your physician before starting any rigorous dietary regimen.",
    "options": ["consult", "to consult", "consulting", "consulted"],
    "correctIndex": 0,
    "englishExplanation": "'Ought to' is followed by a bare infinitive ('consult').",
    "urduExplanation": "'Ought to' کے بعد بنیادی فعل ('consult') آتا ہے۔"
  },
  {
    "id": "gen-mod-11",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "If it _______ for the lifeguard's immediate intervention, the young swimmer would have drowned.",
    "options": ["had not been", "were not", "is not", "has not been"],
    "correctIndex": 0,
    "englishExplanation": "'If it had not been for...' is the standard counterfactual past conditional construction.",
    "urduExplanation": "ماضی میں کسی کی مدد یا مداخلت کی نفی کے لیے 'If it had not been for' بولا جاتا ہے۔"
  },
  {
    "id": "gen-mod-12",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "You _______ show your photographic identity card before boarding the passenger ferry.",
    "options": ["must", "might", "could", "would"],
    "correctIndex": 0,
    "englishExplanation": "Strong obligation or regulation is expressed by the modal 'must'.",
    "urduExplanation": "لازمی ضابطے اور پابندی کے لیے 'must' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-mod-13",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "If I were in your position, I _______ enroll in the advanced data science certification course.",
    "options": ["would", "will", "can", "shall"],
    "correctIndex": 0,
    "englishExplanation": "'If I were you/in your position' expressing advice takes 'would + verb'.",
    "urduExplanation": "مشورے کے لیے 'If I were in your position' کے ساتھ 'would' آتا ہے۔"
  },
  {
    "id": "gen-mod-14",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "We _______ have purchased the concert tickets online, as the stadium box office was completely sold out.",
    "options": ["should", "would", "must", "might"],
    "correctIndex": 0,
    "englishExplanation": "'Should have + past participle' expresses past advisability or regret about an action that was not taken.",
    "urduExplanation": "ماضی میں کسی اچھے کام کے نہ ہونے پر پچھتاوے کے لیے 'should have purchased' آتا ہے۔"
  },
  {
    "id": "gen-mod-15",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "Passengers _______ smoke inside the passenger cabin under any circumstances.",
    "options": ["must not", "need not", "might not", "could not"],
    "correctIndex": 0,
    "englishExplanation": "Absolute prohibition is expressed by 'must not'.",
    "urduExplanation": "سخت ممانعت کے لیے 'must not' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-mod-16",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "If the company _______ the budget forecast, it will expand its hiring next quarter.",
    "options": ["meets", "met", "will meet", "had met"],
    "correctIndex": 0,
    "englishExplanation": "First conditional uses present simple ('meets') in the conditional clause.",
    "urduExplanation": "پہلی شرط میں 'if' کے ساتھ Present Simple ('meets') آتا ہے۔"
  },

  # =========================================================================
  # 11. ACTIVE / PASSIVE (News, Technology, Science, History, Reporting Verbs)
  # =========================================================================
  {
    "id": "gen-pas-01",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "The historic stone bridge _______ by local master craftsmen in 1885.",
    "options": ["was constructed", "constructed", "has constructed", "was constructing"],
    "correctIndex": 0,
    "englishExplanation": "Past simple passive ('was constructed') is used with a specific past time marker ('in 1885').",
    "urduExplanation": "ماضی کے مخصوص سال (1885) میں تعمیر کے لیے Past Simple Passive ('was constructed') آتا ہے۔"
  },
  {
    "id": "gen-pas-02",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "Automated security updates _______ automatically on all university computers overnight.",
    "options": ["are installed", "install", "installed", "were installing"],
    "correctIndex": 0,
    "englishExplanation": "Present simple passive ('are installed') describes routine automated procedures.",
    "urduExplanation": "روزمرہ کے خودکار معمولات کے لیے Present Simple Passive استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-pas-03",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "The ancient sunken shipwreck is believed _______ by an underwater earthquake over two thousand years ago.",
    "options": ["to have been sunk", "to sink", "to be sunk", "having sunk"],
    "correctIndex": 0,
    "englishExplanation": "Reporting passive with a past event takes the perfect passive infinitive ('to have been sunk').",
    "urduExplanation": "ماضی بعید کے واقعے کی رپورٹنگ کے لیے Perfect Passive Infinitive ('to have been sunk') آتا ہے۔"
  },
  {
    "id": "gen-pas-04",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "Millions of organic fair-trade coffee beans _______ in Latin America every year.",
    "options": ["are harvested", "harvest", "were harvested", "harvested"],
    "correctIndex": 0,
    "englishExplanation": "Present simple passive ('are harvested') denotes annual agricultural routines.",
    "urduExplanation": "سالانہ پیداوار اور زرعی معمولات کے لیے Present Simple Passive آتا ہے۔"
  },
  {
    "id": "gen-pas-05",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "The new pediatric hospital wing _______ by the prime minister next month.",
    "options": ["will be inaugurated", "inaugurates", "will inaugurate", "has inaugurated"],
    "correctIndex": 0,
    "englishExplanation": "Future passive ('will be inaugurated') denotes a scheduled future official ceremony.",
    "urduExplanation": "مستقبل کی باضابطہ تقریب کے لیے Future Passive ('will be inaugurated') آتا ہے۔"
  },
  {
    "id": "gen-pas-06",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "The missing expedition diary _______ to have been preserved in a sealed ceramic jar.",
    "options": ["is said", "says", "said", "has said"],
    "correctIndex": 0,
    "englishExplanation": "Impersonal reporting passive ('is said to have been...') expresses widespread historical belief.",
    "urduExplanation": "تاریخی روایات کو بیان کرنے کے لیے پیسیو رپورٹنگ ورب 'is said' آتا ہے۔"
  },
  {
    "id": "gen-pas-07",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "All laboratory equipment must _______ thoroughly sanitized before each chemistry experiment.",
    "options": ["be", "is", "was", "being"],
    "correctIndex": 0,
    "englishExplanation": "Modal passive requires 'modal + be + past participle'.",
    "urduExplanation": "ماڈل ورب 'must' کے بعد پیسو وائس میں 'be' آتا ہے۔"
  },
  {
    "id": "gen-pas-08",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "While the concert hall was _______ renovated, symphony rehearsals took place in the school gymnasium.",
    "options": ["being", "been", "be", "having been"],
    "correctIndex": 0,
    "englishExplanation": "Past continuous passive requires 'was/were + being + past participle'.",
    "urduExplanation": "ماضی میں جاری کام کے پیسیو وائس کے لیے 'was being renovated' آتا ہے۔"
  },
  {
    "id": "gen-pas-09",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "The archaeological discovery _______ by the scientific academy before news reached the press.",
    "options": ["had been authenticated", "authenticated", "has been authenticated", "was authenticating"],
    "correctIndex": 0,
    "englishExplanation": "Past perfect passive ('had been authenticated') indicates completion prior to another past event.",
    "urduExplanation": "ماضی کے دوسرے واقعے سے پہلے مکمل ہونے والے عمل کے لیے Past Perfect Passive آتا ہے۔"
  },
  {
    "id": "gen-pas-10",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "Penicillin _______ by Alexander Fleming in 1928, revolutionizing modern medicine.",
    "options": ["was discovered", "discovered", "is discovered", "has discovered"],
    "correctIndex": 0,
    "englishExplanation": "Historical scientific discoveries with past dates use the past simple passive ('was discovered').",
    "urduExplanation": "ماضی کی سائنسی دریافت کے لیے Past Simple Passive ('was discovered') درست ہے۔"
  },
  {
    "id": "gen-pas-11",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "New electric charging stations _______ across the national highway network since January.",
    "options": ["have been installed", "are installed", "were installed", "installed"],
    "correctIndex": 0,
    "englishExplanation": "Present perfect passive ('have been installed') with 'since' links recent developments to the present.",
    "urduExplanation": "'Since January' کے ساتھ جاری یا مکمل عمل کے لیے Present Perfect Passive آتا ہے۔"
  },
  {
    "id": "gen-pas-12",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "The endangered mountain gorillas are considered _______ from the brink of extinction.",
    "options": ["to have been rescued", "to rescue", "to be rescuing", "having rescued"],
    "correctIndex": 0,
    "englishExplanation": "Passive infinitive after reporting verb takes 'to have been rescued' for completed actions.",
    "urduExplanation": "مکمل شدہ عمل کے لیے پیسیو انفینیٹو 'to have been rescued' آتا ہے۔"
  },
  {
    "id": "gen-pas-13",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "The library books should _______ returned on or before their due date.",
    "options": ["be", "are", "have", "being"],
    "correctIndex": 0,
    "englishExplanation": "Modal passive takes 'should be + past participle'.",
    "urduExplanation": "ماڈل 'should' کے بعد پیسیو میں 'be' لگتا ہے۔"
  },
  {
    "id": "gen-pas-14",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "The wildlife documentary _______ narrated by a famous nature broadcaster.",
    "options": ["was", "did", "had", "has"],
    "correctIndex": 0,
    "englishExplanation": "Past simple passive requires auxiliary 'was' + past participle 'narrated'.",
    "urduExplanation": "پیسیو جملے میں معاون فعل 'was' آئے گا۔"
  },
  {
    "id": "gen-pas-15",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "Solar panels _______ widely manufactured across domestic facilities by the end of next year.",
    "options": ["will have been", "will be", "have been", "were"],
    "correctIndex": 0,
    "englishExplanation": "Future perfect passive ('will have been manufactured') marks completion prior to a future milestone.",
    "urduExplanation": "مستقبل کے وقت تک مکمل ہو جانے والے پیسیو عمل کے لیے Future Perfect Passive آتا ہے۔"
  },
  {
    "id": "gen-pas-16",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "The quarterly financial ledger _______ thoroughly audited before filing tax returns.",
    "options": ["was", "is", "did", "has"],
    "correctIndex": 0,
    "englishExplanation": "Past passive takes auxiliary 'was' with past participle 'audited'.",
    "urduExplanation": "ماضی کے پیسیو عمل کے لیے 'was audited' درست ہے۔"
  },

  # =========================================================================
  # 12. RELATIVE CLAUSES (Defining, Non-Defining, Pronouns, Whose, Where, When)
  # =========================================================================
  {
    "id": "gen-rel-01",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "The marine biologist _______ groundbreaking research on coral bleaching won an international award.",
    "options": ["whose", "who", "whom", "which"],
    "correctIndex": 0,
    "englishExplanation": "Possessive relative pronoun 'whose' connects the person ('marine biologist') to their research.",
    "urduExplanation": "ملکیت یا کام کی نسبت ظاہر کرنے کے لیے relative pronoun 'whose' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-rel-02",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "She is the talented chef _______ created the signature fusion dish at the culinary festival.",
    "options": ["who", "which", "whose", "where"],
    "correctIndex": 0,
    "englishExplanation": "Subject relative pronoun 'who' refers to people ('chef').",
    "urduExplanation": "انسان کی طرف بطور فاعل اشارہ کرنے کے لیے 'who' آتا ہے۔"
  },
  {
    "id": "gen-rel-03",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The university laboratory, _______ we carried out our genetic sequencing experiments, has state-of-the-art microscopes.",
    "options": ["where", "which", "that", "whose"],
    "correctIndex": 0,
    "englishExplanation": "Relative adverb 'where' refers to a physical location in which an activity takes place.",
    "urduExplanation": "کسی جگہ پر کام ہونے کی وضاحت کے لیے 'where' آتا ہے۔"
  },
  {
    "id": "gen-rel-04",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "The solar energy panels _______ were installed on the library roof generate surplus electricity.",
    "options": ["that", "who", "whom", "whose"],
    "correctIndex": 0,
    "englishExplanation": "Defining relative pronoun 'that' (or 'which') refers to inanimate objects in restrictive clauses.",
    "urduExplanation": "بے جان اشیاء کے لیے 'that' یا 'which' آتا ہے۔"
  },
  {
    "id": "gen-rel-05",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "Professor Davis, _______ lectures on astrophysics attract hundreds of students, is retiring this semester.",
    "options": ["whose", "who", "whom", "which"],
    "correctIndex": 0,
    "englishExplanation": "'Whose' indicates possession within a non-defining relative clause.",
    "urduExplanation": "پروفیسر کے لیکچرز کی ملکیت بتانے کے لیے 'whose' آتا ہے۔"
  },
  {
    "id": "gen-rel-06",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The historical period _______ the industrial revolution flourished saw dramatic urbanization.",
    "options": ["when", "where", "which", "whose"],
    "correctIndex": 0,
    "englishExplanation": "Relative adverb 'when' refers to an era or time period in which events transpired.",
    "urduExplanation": "زمانہ یا وقت کی وضاحت کے لیے relative adverb 'when' آتا ہے۔"
  },
  {
    "id": "gen-rel-07",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "The young software developer _______ the team hired last month has already optimized the database.",
    "options": ["whom", "whose", "which", "where"],
    "correctIndex": 0,
    "englishExplanation": "Object relative pronoun 'whom' refers to a person acting as the object of 'hired'.",
    "urduExplanation": "جب انسان مفعول کی جگہ آئے تو رسمی انگریزی میں 'whom' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-rel-08",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "The antique pocket watch _______ my grandfather gave me keeps precise time.",
    "options": ["which", "who", "whose", "where"],
    "correctIndex": 0,
    "englishExplanation": "Relative pronoun 'which' refers to an object ('antique pocket watch').",
    "urduExplanation": "چیزوں کے لیے relative pronoun 'which' آتا ہے۔"
  },
  {
    "id": "gen-rel-09",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The mountain village, _______ residents live to an average age of ninety, has a pristine natural environment.",
    "options": ["whose", "who", "whom", "where"],
    "correctIndex": 0,
    "englishExplanation": "'Whose' indicates possession connecting the village and its residents.",
    "urduExplanation": "گاؤں کے رہائشیوں کا تعلق ظاہر کرنے کے لیے 'whose' آتا ہے۔"
  },
  {
    "id": "gen-rel-10",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "She couldn't remember the exact reason _______ the project meeting had been postponed.",
    "options": ["why", "which", "where", "whom"],
    "correctIndex": 0,
    "englishExplanation": "Relative adverb 'why' naturally modifies 'the reason'.",
    "urduExplanation": "لفظ 'the reason' کے بعد وجہ بیان کرنے کے لیے 'why' آتا ہے۔"
  },
  {
    "id": "gen-rel-11",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "This is the volunteer foundation _______ builds eco-friendly schools in rural provinces.",
    "options": ["that", "who", "whom", "where"],
    "correctIndex": 0,
    "englishExplanation": "Organizations and institutions as single entities take 'that' or 'which'.",
    "urduExplanation": "تنظیم یا ادارے کے لیے 'that' آتا ہے۔"
  },
  {
    "id": "gen-rel-12",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The international committee, _______ members represent twenty-four nations, voted unanimously on the climate accord.",
    "options": ["whose", "who", "whom", "which"],
    "correctIndex": 0,
    "englishExplanation": "Possessive relative pronoun 'whose' links 'committee' and 'members'.",
    "urduExplanation": "کمیٹی کے اراکین کی نسبت ظاہر کرنے کے لیے 'whose' آتا ہے۔"
  },
  {
    "id": "gen-rel-13",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "He recommended a secluded sandy cove _______ tourists rarely visit during off-peak season.",
    "options": ["which", "where", "when", "whose"],
    "correctIndex": 0,
    "englishExplanation": "Direct object of transitive verb 'visit' takes 'which' (or 'that'), not 'where'.",
    "urduExplanation": "فعل 'visit' کے براہ راست مفعول کے لیے 'which' آتا ہے۔"
  },
  {
    "id": "gen-rel-14",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "The doctor _______ examined the patient in the emergency triage room was very reassuring.",
    "options": ["who", "which", "whose", "where"],
    "correctIndex": 0,
    "englishExplanation": "'Who' is the subject pronoun referring to the doctor.",
    "urduExplanation": "ڈاکٹر کے لیے فاعلی حالت میں 'who' آتا ہے۔"
  },
  {
    "id": "gen-rel-15",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The university library contains over fifty thousand manuscripts, some _______ date back to the tenth century.",
    "options": ["of which", "of whom", "of that", "of whose"],
    "correctIndex": 0,
    "englishExplanation": "Partitive relative structure 'some of which' refers to inanimate manuscripts in a non-defining clause.",
    "urduExplanation": "بے جان اشیاء کے حصے کے لیے 'some of which' آتا ہے۔"
  },
  {
    "id": "gen-rel-16",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "The commercial company _______ products dominate the electronics market is based in Seoul.",
    "options": ["whose", "who", "which", "where"],
    "correctIndex": 0,
    "englishExplanation": "Possessive relative pronoun 'whose' shows that the products belong to the company.",
    "urduExplanation": "کمپنی کی مصنوعات کی نسبت ظاہر کرنے کے لیے 'whose' درست ہے۔"
  }
]

print(f"Total curated general English grammar questions: {len(GRAMMAR_QUESTIONS)}")

# Write to src/data/generalEnglishCorePool.ts
ts_content = f"""import {{ GrammarQuestion }} from '../types';

/**
 * ============================================================================
 * generalEnglishCorePool.ts
 * Massively Expanded General English Question Pool for Aptis Core Test
 * 
 * Includes 192 high-quality, authentic questions spanning 12 official categories:
 * Verbs, Tenses, Parts of Speech, Articles, Collocations, Inversions, Subjunctive,
 * Synonyms, Antonyms, Modal Conditionals, Active/Passive, Relative Clauses.
 * 
 * Topics covered:
 * - Everyday life (home, food, routines, shopping, hobbies)
 * - Education (school, university, research, academic life)
 * - Health (exercise, wellness, nutrition, medicine)
 * - Technology (apps, AI, cybersecurity, software, devices)
 * - Environment (wildlife, climate, conservation, renewable energy)
 * - Travel & Geography (airports, trains, backpacking, world landmarks)
 * - Hobbies & Arts (photography, music, theater, painting, gardening)
 * - Social issues & Community (volunteering, public services, neighborhood)
 * - Work & Career (teamwork, leadership, interviews, project management)
 * - Relationships (friendship, family, mentorship, communication)
 * - General knowledge & Science (astronomy, geology, world history)
 * - Occasional accounting & business topics (prudence, audits, commercial)
 * ============================================================================
 */

export const GENERAL_ENGLISH_CORE_POOL: GrammarQuestion[] = {json.dumps(GRAMMAR_QUESTIONS, indent=2)};
"""

with open('src/data/generalEnglishCorePool.ts', 'w', encoding='utf-8') as f:
  f.write(ts_content)

print("Successfully written src/data/generalEnglishCorePool.ts")
