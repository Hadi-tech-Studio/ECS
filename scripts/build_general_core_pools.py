# scripts/build_general_core_pools.py
import json

GRAMMAR_QUESTIONS = [
  # 1. VERBS (Everyday life, education, health, technology, travel, hobbies, work)
  {
    "id": "gen-v-01", "cat": "Verbs", "diff": "Medium",
    "q": "Before releasing the new smartphone app, the software engineers spent weeks _______ all reported bugs.",
    "opts": ["debugging", "debug", "to debug", "debugged"], "ans": 0,
    "eng": "The expression 'spend time doing something' is followed by a gerund ('debugging').",
    "urdu": "وقت صرف کرنے ('spend time') کے بعد ہمیشہ Gerund یعنی '-ing' والی شکل استعمال ہوتی ہے۔"
  },
  {
    "id": "gen-v-02", "cat": "Verbs", "diff": "Easy",
    "q": "Emma looks forward to _______ her grandparents in the countryside this weekend.",
    "opts": ["visiting", "visit", "to visit", "visited"], "ans": 0,
    "eng": "The phrasal prepositional idiom 'look forward to' requires a gerund ('visiting').",
    "urdu": "'Look forward to' کے بعد پریپوزیشن ہونے کی وجہ سے Gerund یعنی 'visiting' آتا ہے۔"
  },
  {
    "id": "gen-v-03", "cat": "Verbs", "diff": "Hard",
    "q": "The basketball coach made the players _______ extra conditioning sprints after practice.",
    "opts": ["run", "to run", "running", "ran"], "ans": 0,
    "eng": "The causative verb 'make' in the active voice requires an object followed by a bare infinitive ('run').",
    "urdu": "ایکٹو وائس میں کارفرما فعل (Causative) 'make' کے بعد بغیر 'to' کے بنیادی فعل آتا ہے۔"
  },
  {
    "id": "gen-v-04", "cat": "Verbs", "diff": "Medium",
    "q": "After years of living in a noisy metropolis, they decided _______ to a quiet seaside village.",
    "opts": ["to relocate", "relocating", "relocate", "relocated"], "ans": 0,
    "eng": "The verb 'decide' takes a to-infinitive ('to relocate').",
    "urdu": "فعل 'decide' کے بعد ہمیشہ 'to-infinitive' یعنی 'to relocate' آتا ہے۔"
  },
  {
    "id": "gen-v-05", "cat": "Verbs", "diff": "Medium",
    "q": "Doctors advise individuals experiencing chronic stress _______ regular physical exercise into their schedules.",
    "opts": ["to incorporate", "incorporating", "incorporate", "incorporated"], "ans": 0,
    "eng": "The verb 'advise' followed by a personal object takes a to-infinitive ('advise someone to do something').",
    "urdu": "جب فعل 'advise' کے بعد مفعول آئے تو اس کے بعد 'to-infinitive' آتا ہے۔"
  },
  {
    "id": "gen-v-06", "cat": "Verbs", "diff": "Hard",
    "q": "The wildlife conservationist admitted _______ the rapid decline of migratory birds during the dry season.",
    "opts": ["having underestimated", "to underestimate", "underestimate", "underestimated"], "ans": 0,
    "eng": "The verb 'admit' takes a gerund or perfect gerund ('having underestimated') when acknowledging an earlier mistake.",
    "urdu": "فعل 'admit' کے بعد ماضی کے عمل کا اعتراف کرنے کے لیے Perfect Gerund آتا ہے۔"
  },
  {
    "id": "gen-v-07", "cat": "Verbs", "diff": "Easy",
    "q": "The university library prohibits students from _______ hot beverages near the manuscript collections.",
    "opts": ["consuming", "consume", "to consume", "consumed"], "ans": 0,
    "eng": "The verb 'prohibit' takes the preposition 'from' followed by a gerund ('consuming').",
    "urdu": "'Prohibit from' کے بعد ہمیشہ Gerund یعنی 'consuming' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-v-08", "cat": "Verbs", "diff": "Medium",
    "q": "The local council suggested _______ more bicycle lanes to ease morning commuter traffic.",
    "opts": ["building", "to build", "build", "built"], "ans": 0,
    "eng": "The verb 'suggest' is directly followed by a gerund ('building') when no that-clause is used.",
    "urdu": "فعل 'suggest' کے فوراً بعد فعل آئے تو Gerund ('building') آتا ہے۔"
  },
  {
    "id": "gen-v-09", "cat": "Verbs", "diff": "Hard",
    "q": "The mountain expedition team could hardly afford _______ any navigational errors in blizzard conditions.",
    "opts": ["to risk", "risking", "risk", "risked"], "ans": 0,
    "eng": "The verb 'afford' is followed by a to-infinitive ('to risk').",
    "urdu": "فعل 'afford' کے بعد ہمیشہ 'to-infinitive' یعنی 'to risk' آتا ہے۔"
  },
  {
    "id": "gen-v-10", "cat": "Verbs", "diff": "Easy",
    "q": "Liam enjoys _______ landscape photographs during early morning sunrises.",
    "opts": ["taking", "to take", "take", "taken"], "ans": 0,
    "eng": "The verb 'enjoy' is followed by a gerund ('taking').",
    "urdu": "فعل 'enjoy' کے بعد ہمیشہ Gerund یعنی 'taking' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-v-11", "cat": "Verbs", "diff": "Medium",
    "q": "The volunteer coordinator reminded everyone _______ sunscreen and water bottles for the beach clean-up.",
    "opts": ["to bring", "bringing", "bring", "brought"], "ans": 0,
    "eng": "The verb 'remind' takes an object and a to-infinitive ('reminded everyone to bring').",
    "urdu": "فعل 'remind' کے بعد مفعول اور پھر 'to-infinitive' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-v-12", "cat": "Verbs", "diff": "Hard",
    "q": "The airline had the ground crew _______ all luggage scanners before passengers began boarding.",
    "opts": ["calibrate", "to calibrate", "calibrated", "calibrating"], "ans": 0,
    "eng": "Causative 'have' (had someone do something) takes a bare infinitive ('calibrate').",
    "urdu": "کارفرما فعل 'had' کے بعد مفعول اور بغیر 'to' کے بنیادی فعل آتا ہے۔"
  },
  {
    "id": "gen-v-13", "cat": "Verbs", "diff": "Medium",
    "q": "She avoids _______ sweet desserts late at night to maintain healthy sleep cycles.",
    "opts": ["eating", "to eat", "eat", "eaten"], "ans": 0,
    "eng": "The verb 'avoid' is followed by a gerund ('eating').",
    "urdu": "فعل 'avoid' کے بعد ہمیشہ Gerund یعنی 'eating' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-v-14", "cat": "Verbs", "diff": "Hard",
    "q": "The enterprise partner considered _______ the annual sustainability conference to a larger venue.",
    "opts": ["moving", "to move", "move", "moved"], "ans": 0,
    "eng": "The verb 'consider' takes a gerund ('moving') when deliberating an action.",
    "urdu": "کسی فیصلے پر غور کرنے کے لیے فعل 'consider' کے بعد Gerund آتا ہے۔"
  },

  # 2. TENSES (Travel, health, environment, education, daily habits)
  {
    "id": "gen-t-01", "cat": "Tenses", "diff": "Easy",
    "q": "Light _______ much faster than sound through the Earth's atmosphere.",
    "opts": ["travels", "traveled", "is traveling", "has traveled"], "ans": 0,
    "eng": "General scientific facts and universal truths are stated in the present simple tense.",
    "urdu": "سائنسی حقائق کو ہمیشہ Present Simple tense میں بیان کیا جاتا ہے۔"
  },
  {
    "id": "gen-t-02", "cat": "Tenses", "diff": "Medium",
    "q": "While Sophie _______ through the art gallery, she met a former high school classmate.",
    "opts": ["was walking", "walked", "has walked", "had walked"], "ans": 0,
    "eng": "Past continuous ('was walking') describes an ongoing action interrupted by a shorter event in the past.",
    "urdu": "ماضی میں جاری عمل کے دوران دوسرا واقعہ پیش آنے پر پہلے عمل کے لیے Past Continuous آتا ہے۔"
  },
  {
    "id": "gen-t-03", "cat": "Tenses", "diff": "Hard",
    "q": "By the time the international flight landed in Tokyo, the passengers _______ in the air for over eleven hours.",
    "opts": ["had been flying", "have flown", "flew", "were flying"], "ans": 0,
    "eng": "Past perfect continuous ('had been flying') emphasizes the continuous duration of an action preceding another past event.",
    "urdu": "ماضی کے کسی لمحے سے پہلے تک مسلسل جاری رہنے والے عمل کے لیے Past Perfect Continuous آتا ہے۔"
  },
  {
    "id": "gen-t-04", "cat": "Tenses", "diff": "Medium",
    "q": "Our astronomy club _______ public stargazing sessions at the observatory every second Friday.",
    "opts": ["organizes", "is organizing", "organized", "has organized"], "ans": 0,
    "eng": "Habitual, repeated routines and scheduled events in the present take the present simple tense.",
    "urdu": "روزمرہ کے معمولات اور شیڈول کے کاموں کے لیے Present Simple استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-t-05", "cat": "Tenses", "diff": "Hard",
    "q": "By the end of this academic year, Professor Malik _______ courses in environmental biology for twenty-five years.",
    "opts": ["will have been teaching", "will teach", "has taught", "taught"], "ans": 0,
    "eng": "Future perfect continuous indicates an action that will continue up to a designated future milestone.",
    "urdu": "مستقبل کے کسی مقررہ وقت تک طویل عرصے سے جاری رہنے والے عمل کے لیے Future Perfect Continuous آتا ہے۔"
  },
  {
    "id": "gen-t-06", "cat": "Tenses", "diff": "Easy",
    "q": "The local train to Edinburgh _______ from platform 4 every morning at precisely 07:15 AM.",
    "opts": ["departs", "departed", "is departing", "has departed"], "ans": 0,
    "eng": "Timetables and fixed transportation schedules use the present simple tense.",
    "urdu": "ٹرینوں اور پروازوں کے باقاعدہ ٹائم ٹیبل کے لیے Present Simple استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-t-07", "cat": "Tenses", "diff": "Medium",
    "q": "Scientists _______ ocean temperature fluctuations across coral reefs since the early 1990s.",
    "opts": ["have monitored", "monitored", "monitor", "were monitoring"], "ans": 0,
    "eng": "Present perfect ('have monitored') is used with 'since' for actions that began in the past and continue today.",
    "urdu": "'Since' کے ساتھ ماضی سے اب تک جاری رہنے والے عمل کے لیے Present Perfect آتا ہے۔"
  },
  {
    "id": "gen-t-08", "cat": "Tenses", "diff": "Hard",
    "q": "Before the archaeologists excavated the ancient ruins, no historian _______ the existence of this lost settlement.",
    "opts": ["had suspected", "suspected", "has suspected", "was suspecting"], "ans": 0,
    "eng": "Past perfect ('had suspected') denotes an event or state prior to another past event.",
    "urdu": "ماضی کے دوسرے واقعے سے پہلے کے عمل کے لیے Past Perfect کا استعمال کیا جاتا ہے۔"
  },
  {
    "id": "gen-t-09", "cat": "Tenses", "diff": "Medium",
    "q": "Listen! The orchestra _______ the opening symphony in the main auditorium right now.",
    "opts": ["is rehearsing", "rehearsed", "rehearses", "had rehearsed"], "ans": 0,
    "eng": "Present continuous ('is rehearsing') expresses an action happening at the moment of speaking.",
    "urdu": "بولتے وقت جاری عمل کو ظاہر کرنے کے لیے Present Continuous آتا ہے۔"
  },

  # 3. PARTS OF SPEECH (Everyday life, work, health, education, relationships)
  {
    "id": "gen-pos-01", "cat": "Parts of Speech", "diff": "Medium",
    "q": "Adopting a balanced diet and regular exercise contributes significantly to long-term physical _______.",
    "opts": ["vitality", "vital", "vitally", "vitalize"], "ans": 0,
    "eng": "Noun form 'vitality' is required as the object following the adjective 'physical'.",
    "urdu": "صفت 'physical' کے بعد مناسب اسم 'vitality' (توانائی و زندگی) آتا ہے۔"
  },
  {
    "id": "gen-pos-02", "cat": "Parts of Speech", "diff": "Easy",
    "q": "The documentary about deep ocean trenches was extraordinarily _______ and visually stunning.",
    "opts": ["informative", "information", "informatively", "inform"], "ans": 0,
    "eng": "An adjective ('informative') is required following the linking verb 'was' and intensifying adverb.",
    "urdu": "معاون فعل 'was' اور صفت کی تشریح کے لیے Adjective ('informative') درکار ہے۔"
  },
  {
    "id": "gen-pos-03", "cat": "Parts of Speech", "diff": "Hard",
    "q": "Despite facing severe weather challenges during the marathon, the runner persevered _______ until crossing the finish line.",
    "opts": ["courageously", "courageous", "courage", "courageousness"], "ans": 0,
    "eng": "An adverb ('courageously') modifies the verb 'persevered' to describe how the action was performed.",
    "urdu": "فعل 'persevered' کی کیفیت بیان کرنے کے لیے Adverb ('courageously') استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-pos-04", "cat": "Parts of Speech", "diff": "Medium",
    "q": "The urban landscape architects emphasized the importance of natural light and aesthetic _______ in city buildings.",
    "opts": ["harmony", "harmonious", "harmoniously", "harmonize"], "ans": 0,
    "eng": "Noun form 'harmony' follows the adjective 'aesthetic'.",
    "urdu": "صفت 'aesthetic' کے بعد اسم کی شکل 'harmony' (ہم آہنگی) درکار ہے۔"
  },
  {
    "id": "gen-pos-05", "cat": "Parts of Speech", "diff": "Easy",
    "q": "A warm cup of herbal tea can have a remarkably _______ effect before going to sleep.",
    "opts": ["soothing", "soothe", "soothed", "soothingly"], "ans": 0,
    "eng": "Participle adjective 'soothing' modifies the noun 'effect'.",
    "urdu": "اسم 'effect' کی وضاحت کے لیے صفت 'soothing' (سکون بخش) استعمال ہوتی ہے۔"
  },
  {
    "id": "gen-pos-06", "cat": "Parts of Speech", "diff": "Hard",
    "q": "The volunteer showed remarkable _______ when coordinating relief supplies during the flash flood crisis.",
    "opts": ["resourcefulness", "resourceful", "resourcefully", "resources"], "ans": 0,
    "eng": "Abstract noun 'resourcefulness' functions as the object following the adjective 'remarkable'.",
    "urdu": "'Remarkable' صفت کے بعد مناسب اسم 'resourcefulness' (ہمت و تدبر) آتا ہے۔"
  },

  # 4. ARTICLES (Travel, geography, daily life, general knowledge)
  {
    "id": "gen-art-01", "cat": "Articles", "diff": "Easy",
    "q": "Zainab bought _______ acoustic guitar to practice folk songs during her leisure time.",
    "opts": ["an", "a", "the", "zero article (no article)"], "ans": 0,
    "eng": "Singular countable noun phrase 'acoustic guitar' starting with a vowel sound takes 'an'.",
    "urdu": "واول آواز سے شروع ہونے والے واحد قابل شمار اسم سے پہلے 'an' آتا ہے۔"
  },
  {
    "id": "gen-art-02", "cat": "Articles", "diff": "Medium",
    "q": "Lake Baikal in Siberia is recognized as _______ deepest freshwater lake in the world.",
    "opts": ["the", "a", "an", "zero article (no article)"], "ans": 0,
    "eng": "Superlative adjectives ('deepest') strictly require the definite article 'the'.",
    "urdu": "سپرلیٹیو ڈگری ('deepest') سے پہلے ہمیشہ definite article 'the' آتا ہے۔"
  },
  {
    "id": "gen-art-03", "cat": "Articles", "diff": "Hard",
    "q": "During our road trip across North America, we spent three memorable days exploring _______ Grand Canyon.",
    "opts": ["the", "a", "an", "zero article (no article)"], "ans": 0,
    "eng": "Specific geographic natural wonders like canyons take the definite article 'the' ('the Grand Canyon').",
    "urdu": "معروف قدرتی جغرافیائی مقامات کے نام کے ساتھ 'the' کا استعمال کیا جاتا ہے۔"
  },
  {
    "id": "gen-art-04", "cat": "Articles", "diff": "Easy",
    "q": "Regular physical exercise is beneficial for _______ health and cardiovascular fitness.",
    "opts": ["zero article (no article)", "a", "an", "the"], "ans": 0,
    "eng": "Abstract uncountable nouns used in a general sense ('health') take zero article.",
    "urdu": "عام معنوں میں استعمال ہونے والے غیر مادی اسم ('health') سے پہلے کوئی آرٹیکل نہیں آتا۔"
  },
  {
    "id": "gen-art-05", "cat": "Articles", "diff": "Medium",
    "q": "He is planning to study marine ecology at _______ university in Vancouver next autumn.",
    "opts": ["a", "an", "the", "zero article (no article)"], "ans": 0,
    "eng": "'University' begins with a consonant glide sound /j/, requiring the indefinite article 'a'.",
    "urdu": "لفظ 'university' کی آواز /j/ (consonant) سے شروع ہوتی ہے، اس لیے 'a' آتا ہے۔"
  },

  # 5. COLLOCATIONS (Everyday habits, education, health, social issues, work)
  {
    "id": "gen-col-01", "cat": "Collocations", "diff": "Easy",
    "q": "After hiking up the steep hillside, the travelers stopped to _______ their breath and admire the valley.",
    "opts": ["catch", "hold", "take", "draw"], "ans": 0,
    "eng": "The standard natural collocation is to 'catch one's breath' after exertion.",
    "urdu": "تھکن کے بعد سانس بحال کرنے کے لیے انگریزی میں 'catch one's breath' بولا جاتا ہے۔"
  },
  {
    "id": "gen-col-02", "cat": "Collocations", "diff": "Medium",
    "q": "Attending international youth forums provides teenagers with a wonderful chance to _______ their horizons.",
    "opts": ["broaden", "widen", "spread", "expand"], "ans": 0,
    "eng": "'Broaden horizons' is the established natural collocation for expanding perspective and knowledge.",
    "urdu": "فہم و شعور اور تجربات کو وسیع کرنے کے لیے 'broaden one's horizons' کہا جاتا ہے۔"
  },
  {
    "id": "gen-col-03", "cat": "Collocations", "diff": "Hard",
    "q": "The dispute was resolved when community elders helped both parties _______ a fair compromise.",
    "opts": ["strike", "hit", "beat", "knock"], "ans": 0,
    "eng": "To 'strike a compromise' is an established formal collocation meaning to negotiate an agreement.",
    "urdu": "دونوں فریقین کے مابین سمجھوتہ طے پانے کے لیے 'strike a compromise' بولا جاتا ہے۔"
  },
  {
    "id": "gen-col-04", "cat": "Collocations", "diff": "Easy",
    "q": "Students are requested to _______ close attention to the laboratory safety instructions.",
    "opts": ["pay", "give", "make", "take"], "ans": 0,
    "eng": "'Pay attention' is the natural and idiomatic verb-noun collocation.",
    "urdu": "توجہ دینے کے لیے معیاری انگریزی ترکیب 'pay attention' ہے۔"
  },
  {
    "id": "gen-col-05", "cat": "Collocations", "diff": "Medium",
    "q": "The community group launched a neighborhood campaign to _______ awareness about food waste.",
    "opts": ["raise", "lift", "rise", "boost"], "ans": 0,
    "eng": "One 'raises awareness' about a social or environmental issue.",
    "urdu": "شعور بیدار کرنے کے لیے 'raise awareness' مستعمل ترکیب ہے۔"
  },
  {
    "id": "gen-col-06", "cat": "Collocations", "diff": "Hard",
    "q": "She decided to _______ a course in creative writing to cultivate her storytelling hobby.",
    "opts": ["take", "make", "pass", "do"], "ans": 0,
    "eng": "In standard English, students 'take a course' or enroll in a subject.",
    "urdu": "تعلیمی کورس میں داخلہ لینے یا پڑھنے کے لیے 'take a course' بولا جاتا ہے۔"
  },

  # 6. INVERSIONS (Literature, general knowledge, formal speech)
  {
    "id": "gen-inv-01", "cat": "Inversions", "diff": "Hard",
    "q": "Rarely _______ such crystal-clear night skies as we experienced high in the mountain observatory.",
    "opts": ["have we seen", "we have seen", "did we saw", "had we saw"], "ans": 0,
    "eng": "Sentence beginning with negative adverb 'Rarely' requires subject-auxiliary inversion ('have we seen').",
    "urdu": "منفی لفظ 'Rarely' سے جملہ شروع ہو تو Inversion یعنی امدادی فعل فاعل سے پہلے آتا ہے۔"
  },
  {
    "id": "gen-inv-02", "cat": "Inversions", "diff": "Hard",
    "q": "Not only _______ the national debate competition, but she also earned a full university scholarship.",
    "opts": ["did she win", "she won", "won she", "had she won"], "ans": 0,
    "eng": "When 'Not only' opens an independent clause, auxiliary inversion is mandatory ('did she win').",
    "urdu": "'Not only' سے شروع ہونے والے جملے میں auxiliary inversion ('did she win') لازمی ہے۔"
  },
  {
    "id": "gen-inv-03", "cat": "Inversions", "diff": "Hard",
    "q": "Seldom _______ temperatures in this coastal region dip below freezing during winter.",
    "opts": ["do", "does", "are", "have"], "ans": 0,
    "eng": "Negative limiting adverb 'Seldom' followed by plural subject 'temperatures' requires inversion with 'do'.",
    "urdu": "'Seldom' کے بعد جمع فاعل کے ساتھ انورژن میں 'do' کا استعمال ہوگا۔"
  },
  {
    "id": "gen-inv-04", "cat": "Inversions", "diff": "Hard",
    "q": "Under no circumstances _______ personal passwords with third parties online.",
    "opts": ["should users share", "users should share", "users share", "share users"], "ans": 0,
    "eng": "Negative prepositional phrase 'Under no circumstances' requires modal inversion ('should users share').",
    "urdu": "'Under no circumstances' سے شروع ہونے پر امدادی فعل فاعل سے پہلے آتا ہے۔"
  },

  # 7. SUBJUNCTIVE (Education, health, social guidelines, workplace)
  {
    "id": "gen-sub-01", "cat": "Subjunctive", "diff": "Hard",
    "q": "The nutritionist recommended that the athlete _______ whole grains and fresh leafy vegetables every day.",
    "opts": ["consume", "consumes", "consumed", "would consume"], "ans": 0,
    "eng": "Mandative subjunctive after verbs of recommendation requires the bare base form ('consume').",
    "urdu": "سفارش یا تجویز کے بعد mandative subjunctive میں فعل کی بنیادی شکل ('consume') آتی ہے۔"
  },
  {
    "id": "gen-sub-02", "cat": "Subjunctive", "diff": "Medium",
    "q": "It is imperative that every camper _______ plenty of drinking water on the desert expedition.",
    "opts": ["carry", "carries", "carried", "is carrying"], "ans": 0,
    "eng": "Impersonal expressions of necessity ('It is imperative that...') require the bare subjunctive form ('carry').",
    "urdu": "'It is imperative that' کے بعد سبجنکٹیو بنیادی فعل ('carry') آتا ہے۔"
  },
  {
    "id": "gen-sub-03", "cat": "Subjunctive", "diff": "Hard",
    "q": "The faculty dean requested that all thesis submissions _______ double-blind peer review before publication.",
    "opts": ["undergo", "undergoes", "underwent", "will undergo"], "ans": 0,
    "eng": "Subjunctive mood after verbs of request takes the base form ('undergo').",
    "urdu": "درخواست والے جملوں میں 'that' کے بعد بنیادی فارم ('undergo') استعمال ہوتی ہے۔"
  },

  # 8. SYNONYMS (Everyday vocabulary, science, society, relationships)
  {
    "id": "gen-syn-01", "cat": "Synonyms", "diff": "Easy",
    "q": "In casual conversation, the word 'tranquil' is closest in meaning to _______.",
    "opts": ["peaceful", "hectic", "boisterous", "crowded"], "ans": 0,
    "eng": "'Tranquil' describes a calm, serene, and peaceful state.",
    "urdu": "'Tranquil' کا مطلب پرسکون اور خاموش ماحول ('peaceful') ہے۔"
  },
  {
    "id": "gen-syn-02", "cat": "Synonyms", "diff": "Medium",
    "q": "In scientific literature, a material that bends easily without breaking is described as _______.",
    "opts": ["resilient", "fragile", "brittle", "rigid"], "ans": 0,
    "eng": "'Resilient' means capable of withstanding shock, bending, or adversity.",
    "urdu": "'Resilient' کا مطلب لچکدار اور دباؤ برداشت کرنے والا ہے۔"
  },
  {
    "id": "gen-syn-03", "cat": "Synonyms", "diff": "Hard",
    "q": "The term 'arduous' in the phrase 'an arduous mountain trek' is closest in meaning to _______.",
    "opts": ["exhausting", "effortless", "pleasant", "brief"], "ans": 0,
    "eng": "'Arduous' means requiring strenuous effort, difficult, and tiring.",
    "urdu": "'Arduous' کا مطلب کٹھن، تھکا دینے والا اور دشوار گزار ہے۔"
  },
  {
    "id": "gen-syn-04", "cat": "Synonyms", "diff": "Medium",
    "q": "The author gave a very 'candid' interview discussing her personal creative struggles.",
    "opts": ["frank", "deceptive", "evasive", "secretive"], "ans": 0,
    "eng": "'Candid' means truthful, straightforward, and frank.",
    "urdu": "'Candid' کا مطلب کھرا، بے باک اور صاف گو ('frank') ہے۔"
  },

  # 9. ANTONYMS (Health, environment, human traits, technology)
  {
    "id": "gen-ant-01", "cat": "Antonyms", "diff": "Medium",
    "q": "In lifestyle and health discussions, the direct antonym of 'sedentary' (physically inactive) is _______.",
    "opts": ["active", "sluggish", "dormant", "motionless"], "ans": 0,
    "eng": "The antonym of sedentary (seated, inactive) is active.",
    "urdu": "بیٹھے رہنے کے طرز زندگی ('sedentary') کا متضاد 'active' (سرگرم) ہے۔"
  },
  {
    "id": "gen-ant-02", "cat": "Antonyms", "diff": "Easy",
    "q": "In ecology and resource management, the antonym of 'abundant' is _______.",
    "opts": ["scarce", "copious", "plentiful", "bountiful"], "ans": 0,
    "eng": "The antonym of abundant (plentiful) is scarce (limited, rare).",
    "urdu": "وافر مقدار ('abundant') کا متضاد 'scarce' (کمیاب) ہے۔"
  },
  {
    "id": "gen-ant-03", "cat": "Antonyms", "diff": "Hard",
    "q": "The antonym of 'ephemeral' (short-lived moments) in literature and philosophy is _______.",
    "opts": ["perpetual", "fleeting", "transient", "momentary"], "ans": 0,
    "eng": "'Ephemeral' means lasting a short time; its antonym is 'perpetual' or everlasting.",
    "urdu": "عارضی اور جلد مٹنے والے ('ephemeral') کا متضاد 'perpetual' (ہمیشہ رہنے والا) ہے۔"
  },

  # 10. MODAL CONDITIONALS (Travel, education, daily dilemmas, relationships)
  {
    "id": "gen-mod-01", "cat": "Modal Conditionals", "diff": "Easy",
    "q": "If you leave home thirty minutes earlier, you _______ avoid the morning rush-hour traffic.",
    "opts": ["will", "would", "did", "have"], "ans": 0,
    "eng": "First conditional uses present simple in the if-clause and 'will' in the main clause.",
    "urdu": "پہلی شرط میں حقیقت پسندانہ مستقبل کے لیے 'will' آتا ہے۔"
  },
  {
    "id": "gen-mod-02", "cat": "Modal Conditionals", "diff": "Hard",
    "q": "If we had reserved the campsite tickets last month, we _______ sleeping in our car right now.",
    "opts": ["would not be", "will not be", "have not been", "are not"], "ans": 0,
    "eng": "Mixed conditional: past condition ('had reserved') with present outcome ('would not be sleeping now').",
    "urdu": "ماضی کی شرط اور موجودہ نتیجے کے امتزاج (Mixed Conditional) کے لیے 'would not be' آتا ہے۔"
  },
  {
    "id": "gen-mod-03", "cat": "Modal Conditionals", "diff": "Medium",
    "q": "If I had more free time during the week, I _______ join a local pottery or painting workshop.",
    "opts": ["would", "will", "can", "must"], "ans": 0,
    "eng": "Second conditional uses past simple in the if-clause and 'would' in the main clause for hypothetical present.",
    "urdu": "دوسری شرط میں فرضی حال کے لیے 'would' کا استعمال ہوتا ہے۔"
  },

  # 11. ACTIVE / PASSIVE (Science, history, everyday news, art)
  {
    "id": "gen-pas-01", "cat": "Active / Passive", "diff": "Easy",
    "q": "The botanical gardens _______ by thousands of tourists and locals every spring.",
    "opts": ["are visited", "visit", "visited", "were visiting"], "ans": 0,
    "eng": "Present simple passive ('are visited') describes habitual events focused on the recipient.",
    "urdu": "معمول کے کام کے لیے Present Simple Passive ('are visited') درست ہے۔"
  },
  {
    "id": "gen-pas-02", "cat": "Active / Passive", "diff": "Medium",
    "q": "The historic stone bridge _______ across the river during the late eighteenth century.",
    "opts": ["was constructed", "constructed", "has constructed", "constructs"], "ans": 0,
    "eng": "Past simple passive ('was constructed') specifies when a historic structure was built.",
    "urdu": "ماضی میں مکمل ہونے والے تعمیراتی کام کے لیے Past Simple Passive آتا ہے۔"
  },
  {
    "id": "gen-pas-03", "cat": "Active / Passive", "diff": "Hard",
    "q": "The newly discovered ancient manuscript is reported _______ by desert nomadic tribes for centuries.",
    "opts": ["to have been preserved", "preserving", "to preserve", "having preserved"], "ans": 0,
    "eng": "Reporting passive with perfect passive infinitive ('to have been preserved') indicates prior preservation.",
    "urdu": "ماضی کے محفوظ شدہ عمل کو رپورٹ کرنے کے لیے Perfect Passive Infinitive آتا ہے۔"
  },

  # 12. RELATIVE CLAUSES (People, places, hobbies, general knowledge)
  {
    "id": "gen-rel-01", "cat": "Relative Clauses", "diff": "Medium",
    "q": "The environmental biologist _______ discovered the new frog species presented her findings at the symposium.",
    "opts": ["who", "which", "whom", "whose"], "ans": 0,
    "eng": "The subject relative pronoun for people is 'who'.",
    "urdu": "انسان فاعل کی طرف اشارہ کرنے کے لیے relative pronoun 'who' آتا ہے۔"
  },
  {
    "id": "gen-rel-02", "cat": "Relative Clauses", "diff": "Medium",
    "q": "The coastal village _______ we spent our summer vacation has banned single-use plastic bags.",
    "opts": ["where", "which", "whose", "whom"], "ans": 0,
    "eng": "Relative adverb 'where' denotes a location in which an activity took place.",
    "urdu": "کسی مقام کی طرف اشارہ کرنے کے لیے 'where' استعمال ہوتا ہے۔"
  },
  {
    "id": "gen-rel-03", "cat": "Relative Clauses", "diff": "Hard",
    "q": "The mentor _______ advice helped me navigate my early career recently published a book on leadership.",
    "opts": ["whose", "who", "whom", "which"], "ans": 0,
    "eng": "Possessive relative pronoun 'whose' links the mentor to their advice.",
    "urdu": "ملکیت یا تعلق ظاہر کرنے کے لیے 'whose' آتا ہے۔"
  }
]

# Generate additional diverse questions across categories to reach 100+
more_verbs = [
  ("The university sports committee decided _______ the annual marathon to next autumn.", ["to postpone", "postponing", "postpone", "postponed"], "Verbs", "Medium", "The verb 'decide' takes a to-infinitive.", "فعل 'decide' کے بعد 'to-infinitive' آتا ہے۔"),
  ("Volunteers are committed to _______ the homeless shelter during cold winter months.", ["supporting", "support", "to support", "supported"], "Verbs", "Easy", "'Committed to' is followed by a gerund.", "'Committed to' کے بعد Gerund آتا ہے۔"),
  ("The doctor advised the patient against _______ heavy weights immediately after surgery.", ["lifting", "lift", "to lift", "lifted"], "Verbs", "Medium", "'Advise against' takes a gerund.", "'Advise against' کے بعد Gerund آتا ہے۔"),
  ("She managed _______ her master's dissertation while working a full-time job.", ["to finish", "finishing", "finish", "finished"], "Verbs", "Hard", "'Manage' takes a to-infinitive.", "'Manage' کے بعد 'to-infinitive' آتا ہے۔"),
  ("Young photographers often practice _______ natural landscapes at dawn.", ["capturing", "to capture", "capture", "captured"], "Verbs", "Easy", "'Practice' takes a gerund.", "'Practice' کے بعد Gerund آتا ہے۔")
]

for idx, (q, opts, cat, diff, eng, urdu) in enumerate(more_verbs):
    GRAMMAR_QUESTIONS.append({
        "id": f"gen-v-extra-{idx+1:02d}", "cat": cat, "diff": diff,
        "q": q, "opts": opts, "ans": 0, "eng": eng, "urdu": urdu
    })

print(f"Total general grammar questions: {len(GRAMMAR_QUESTIONS)}")
