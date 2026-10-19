import { GrammarQuestion } from '../types';

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

export const GENERAL_ENGLISH_CORE_POOL: GrammarQuestion[] = [
  {
    "id": "gen-verb-01",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "Before launching the new smartphone app, the software engineers insisted on _______ all beta test feedback.",
    "options": [
      "reviewing",
      "review",
      "to review",
      "reviewed"
    ],
    "correctIndex": 0,
    "englishExplanation": "The prepositional structure 'insist on' requires a gerund ('-ing' form).",
    "urduExplanation": "\u0627\u0635\u0637\u0644\u0627\u062d 'insist on' \u06a9\u06d2 \u0628\u0639\u062f \u06c1\u0645\u06cc\u0634\u06c1 \u062c\u06cc\u0631\u0646\u0688 \u06cc\u0639\u0646\u06cc '-ing' \u0648\u0627\u0644\u06cc \u0634\u06a9\u0644 \u0622\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-02",
    "category": "Verbs",
    "difficulty": "Easy",
    "question": "Sarah enjoys _______ historical novels during her weekend leisure hours.",
    "options": [
      "reading",
      "read",
      "to read",
      "reads"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'enjoy' is always followed by a gerund ('reading').",
    "urduExplanation": "\u0641\u0639\u0644 'enjoy' \u06a9\u06d2 \u0641\u0648\u0631\u0627\u064b \u0628\u0639\u062f Gerund ('reading') \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-03",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The university dean made all graduate researchers _______ their lab safety credentials.",
    "options": [
      "renew",
      "to renew",
      "renewing",
      "renewed"
    ],
    "correctIndex": 0,
    "englishExplanation": "The causative verb 'make' in active voice requires an object followed by a bare infinitive ('renew').",
    "urduExplanation": "\u0627\u06cc\u06a9\u0679\u0648 \u0648\u0627\u0626\u0633 \u0645\u06cc\u06ba Causative verb 'make' \u06a9\u06d2 \u0628\u0639\u062f \u0628\u063a\u06cc\u0631 'to' \u06a9\u06d2 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-04",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "After finishing her medical residency, Dr. Amina decided _______ to a rural clinic to serve underprivileged families.",
    "options": [
      "to relocate",
      "relocating",
      "relocate",
      "relocated"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'decide' is followed by a to-infinitive ('to relocate').",
    "urduExplanation": "\u0641\u0639\u0644 'decide' \u06a9\u06d2 \u0628\u0639\u062f \u06c1\u0645\u06cc\u0634\u06c1 'to-infinitive' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-05",
    "category": "Verbs",
    "difficulty": "Easy",
    "question": "Many urban households are trying _______ carbon emissions by installing solar rooftop panels.",
    "options": [
      "to reduce",
      "reducing",
      "reduce",
      "reduced"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'try' when denoting an effort to accomplish an objective takes a to-infinitive.",
    "urduExplanation": "\u06a9\u0633\u06cc \u0645\u0642\u0635\u062f \u06a9\u06d2 \u062d\u0635\u0648\u0644 \u06a9\u06cc \u06a9\u0648\u0634\u0634 \u06a9\u06d2 \u0644\u06cc\u06d2 'try' \u06a9\u06d2 \u0628\u0639\u062f 'to-infinitive' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-06",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The mountain expedition leader regretted _______ the early meteorological warnings about the blizzard.",
    "options": [
      "having disregarded",
      "to disregard",
      "disregard",
      "disregarding"
    ],
    "correctIndex": 0,
    "englishExplanation": "Regretting a past action completed prior to the feeling of regret uses the perfect gerund ('having disregarded').",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u06a9\u06d2 \u06a9\u0633\u06cc \u06a9\u0627\u0645 \u067e\u0631 \u067e\u0686\u06be\u062a\u0627\u0648\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 Perfect Gerund ('having disregarded') \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-07",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "My grandfather prefers _______ fresh vegetables in his backyard garden rather than buying them at the supermarket.",
    "options": [
      "growing",
      "grow",
      "grown",
      "to be grown"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'prefer' expressing a general habitual activity is followed by a gerund ('growing').",
    "urduExplanation": "\u0639\u0645\u0648\u0645\u06cc \u067e\u0633\u0646\u062f \u0627\u0648\u0631 \u0639\u0627\u062f\u062a \u06a9\u06d2 \u0627\u0638\u06c1\u0627\u0631 \u06a9\u06d2 \u0644\u06cc\u06d2 'prefer' \u06a9\u06d2 \u0628\u0639\u062f Gerund \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-08",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The fitness coach had the marathon runners _______ their hydration levels every thirty minutes.",
    "options": [
      "monitor",
      "to monitor",
      "monitoring",
      "monitored"
    ],
    "correctIndex": 0,
    "englishExplanation": "Causative 'have' (had someone do something) takes a bare infinitive without 'to'.",
    "urduExplanation": "\u062c\u0628 'have' \u06cc\u0627 'had' \u06a9\u0627\u0631\u0641\u0631\u0645\u0627 \u0641\u0639\u0644 (Causative) \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u0622\u0626\u06d2 \u062a\u0648 \u0645\u0641\u0639\u0648\u0644 \u06a9\u06d2 \u0628\u0639\u062f \u0628\u063a\u06cc\u0631 'to' \u06a9\u06d2 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-09",
    "category": "Verbs",
    "difficulty": "Easy",
    "question": "The airline passenger refused _______ his seat belt during the unexpected mid-flight turbulence.",
    "options": [
      "to unbuckle",
      "unbuckling",
      "unbuckle",
      "unbuckled"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'refuse' is followed by a to-infinitive ('to unbuckle').",
    "urduExplanation": "\u0641\u0639\u0644 'refuse' \u06a9\u06d2 \u0628\u0639\u062f \u06c1\u0645\u06cc\u0634\u06c1 'to-infinitive' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-10",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "We are all looking forward to _______ the ancient ruins of Persepolis on our upcoming archaeological tour.",
    "options": [
      "exploring",
      "explore",
      "explored",
      "to explore"
    ],
    "correctIndex": 0,
    "englishExplanation": "In 'look forward to', 'to' is a preposition and must be followed by a gerund ('exploring').",
    "urduExplanation": "'Look forward to' \u0645\u06cc\u06ba 'to' \u067e\u0631\u06cc\u067e\u0648\u0632\u06cc\u0634\u0646 \u06c1\u06d2 \u062c\u0633 \u06a9\u06d2 \u0628\u0639\u062f Gerund ('exploring') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-11",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The city health inspector prohibited the street food vendor from _______ food without hygienic gloves.",
    "options": [
      "handling",
      "handle",
      "to handle",
      "handled"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'prohibit' takes the preposition 'from' followed by a gerund ('from handling').",
    "urduExplanation": "\u0644\u0641\u0638 'prohibit' \u06a9\u06d2 \u0633\u0627\u062a\u06be 'from' \u0627\u0648\u0631 \u0627\u0633 \u06a9\u06d2 \u0628\u0639\u062f Gerund \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-12",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "She successfully managed _______ her master's dissertation while working forty hours a week.",
    "options": [
      "to finish",
      "finishing",
      "finish",
      "finished"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'manage' (meaning to succeed in doing something) requires a to-infinitive ('to finish').",
    "urduExplanation": "\u06a9\u0633\u06cc \u06a9\u0627\u0645 \u0645\u06cc\u06ba \u06a9\u0627\u0645\u06cc\u0627\u0628 \u06c1\u0648\u0646\u06d2 \u06a9\u06d2 \u0645\u0639\u0646\u06cc \u0645\u06cc\u06ba 'manage' \u06a9\u06d2 \u0628\u0639\u062f 'to-infinitive' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-13",
    "category": "Verbs",
    "difficulty": "Easy",
    "question": "Tom promised _______ his younger brother with mathematics homework every Tuesday evening.",
    "options": [
      "to assist",
      "assisting",
      "assist",
      "assisted"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'promise' is followed by a to-infinitive ('to assist').",
    "urduExplanation": "\u0641\u0639\u0644 'promise' \u06a9\u06d2 \u0628\u0639\u062f \u06c1\u0645\u06cc\u0634\u06c1 'to-infinitive' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-14",
    "category": "Verbs",
    "difficulty": "Hard",
    "question": "The wildlife sanctuary ranger let the injured falcon _______ back into the mountainous wilderness.",
    "options": [
      "fly",
      "to fly",
      "flying",
      "flew"
    ],
    "correctIndex": 0,
    "englishExplanation": "The causative verb 'let' is followed by an object and a bare infinitive ('fly').",
    "urduExplanation": "\u0641\u0639\u0644 'let' \u06a9\u06d2 \u0628\u0639\u062f \u0628\u063a\u06cc\u0631 'to' \u06a9\u06d2 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 ('fly') \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-15",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "He admitted _______ his smartphone during the final university examination.",
    "options": [
      "using",
      "use",
      "to use",
      "used"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'admit' when acknowledging an action is followed by a gerund ('using').",
    "urduExplanation": "\u06a9\u0633\u06cc \u0639\u0645\u0644 \u06a9\u0627 \u0627\u0639\u062a\u0631\u0627\u0641 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'admit' \u06a9\u06d2 \u0628\u0639\u062f Gerund \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-verb-16",
    "category": "Verbs",
    "difficulty": "Medium",
    "question": "The enterprise project team avoided _______ major design changes so close to the client release date.",
    "options": [
      "making",
      "to make",
      "make",
      "made"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'avoid' is followed by a gerund ('making').",
    "urduExplanation": "\u0641\u0639\u0644 'avoid' \u06a9\u06d2 \u0628\u0639\u062f \u06c1\u0645\u06cc\u0634\u06c1 Gerund ('making') \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-01",
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Pure water _______ at 100 degrees Celsius under standard atmospheric pressure.",
    "options": [
      "boils",
      "is boiling",
      "has boiled",
      "boiled"
    ],
    "correctIndex": 0,
    "englishExplanation": "Scientific laws, general truths, and unchanging facts take the present simple tense ('boils').",
    "urduExplanation": "\u0633\u0627\u0626\u0646\u0633\u06cc \u062d\u0642\u0627\u0626\u0642 \u0627\u0648\u0631 \u0645\u0633\u062a\u0642\u0644 \u0633\u0686\u0627\u0626\u06cc\u0648\u06ba \u06a9\u0648 \u0628\u06cc\u0627\u0646 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 Present Simple \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-02",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "While Arthur _______ along the coastal path, a pod of dolphins surfaced near the beach.",
    "options": [
      "was cycling",
      "cycled",
      "has cycled",
      "had cycled"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past continuous ('was cycling') describes an ongoing background action interrupted by a distinct event.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u06a9\u06d2 \u062c\u0627\u0631\u06cc \u0639\u0645\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 Past Continuous ('was cycling') \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-03",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By the time the rescue helicopter landed on the summit, the mountaineers _______ a snow cave for protection.",
    "options": [
      "had constructed",
      "constructed",
      "have constructed",
      "were constructing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past perfect ('had constructed') denotes an action completed before another past milestone.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u0645\u06cc\u06ba \u06a9\u0633\u06cc \u062f\u0648\u0633\u0631\u06d2 \u0648\u0627\u0642\u0639\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0645\u06a9\u0645\u0644 \u06c1\u0648\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0639\u0645\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 Past Perfect \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-04",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Our municipal community library _______ coding and digital literacy workshops every weekend.",
    "options": [
      "organizes",
      "is organizing",
      "organized",
      "has organized"
    ],
    "correctIndex": 0,
    "englishExplanation": "Recurring habitual actions and regular timetables use the present simple ('organizes').",
    "urduExplanation": "\u0631\u0648\u0632\u0645\u0631\u06c1 \u06a9\u06d2 \u0645\u0639\u0645\u0648\u0644 \u0627\u0648\u0631 \u0628\u0627\u0631 \u0628\u0627\u0631 \u06c1\u0648\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0627\u0645\u0648\u06ba \u06a9\u06d2 \u0644\u06cc\u06d2 Present Simple \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-05",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "This time next week, the international marine biologists _______ deep sea coral reefs off the Pacific coast.",
    "options": [
      "will be examining",
      "examine",
      "examined",
      "have examined"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future continuous ('will be examining') refers to an action that will be actively in progress at a specific future moment.",
    "urduExplanation": "\u0645\u0633\u062a\u0642\u0628\u0644 \u06a9\u06d2 \u06a9\u0633\u06cc \u0645\u0642\u0631\u0631\u06c1 \u0648\u0642\u062a \u067e\u0631 \u062c\u0627\u0631\u06cc \u0631\u06c1\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0627\u0645 \u06a9\u06d2 \u0644\u06cc\u06d2 Future Continuous \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-06",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Dr. Watson _______ at this research institute for twelve years before taking a sabbatical.",
    "options": [
      "had been working",
      "has been working",
      "was working",
      "works"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past perfect continuous ('had been working') emphasizes an ongoing continuous duration prior to a point in the past.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u06a9\u06d2 \u06a9\u0633\u06cc \u0648\u0627\u0642\u0639\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u062a\u0633\u0644\u0633\u0644 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u062c\u0627\u0631\u06cc \u0631\u06c1\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0627\u0645 \u06a9\u06d2 \u0644\u06cc\u06d2 Past Perfect Continuous \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-07",
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Over the past five years, electric vehicle ownership _______ exponentially across metropolitan areas.",
    "options": [
      "has increased",
      "increases",
      "increased",
      "was increasing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present perfect ('has increased') connects past developments to the present moment.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u0633\u06d2 \u0634\u0631\u0648\u0639 \u06c1\u0648 \u06a9\u0631 \u062d\u0627\u0644 \u062a\u06a9 \u0627\u062b\u0631 \u0627\u0646\u062f\u0627\u0632 \u06c1\u0648\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0627\u0645 \u06a9\u06d2 \u0644\u06cc\u06d2 Present Perfect \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-08",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By the end of this decade, renewable energy sources _______ more than half of global electricity demands.",
    "options": [
      "will have supplied",
      "will supply",
      "have supplied",
      "supply"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future perfect ('will have supplied') indicates an achievement that will be completed by a future deadline.",
    "urduExplanation": "\u0645\u0633\u062a\u0642\u0628\u0644 \u06a9\u06d2 \u06a9\u0633\u06cc \u0648\u0642\u062a \u062a\u06a9 \u0645\u06a9\u0645\u0644 \u06c1\u0648 \u062c\u0627\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0627\u0645 \u06a9\u06d2 \u0644\u06cc\u06d2 Future Perfect \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-09",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "As soon as the flight attendant _______ the safety demonstration, passengers may recline their seats.",
    "options": [
      "concludes",
      "will conclude",
      "concluded",
      "had concluded"
    ],
    "correctIndex": 0,
    "englishExplanation": "Time clauses introduced by 'as soon as' referring to the future use the present simple ('concludes').",
    "urduExplanation": "'As soon as' \u0648\u0627\u0644\u06d2 \u0679\u0627\u0626\u0645 \u06a9\u0644\u0627\u0632 \u0645\u06cc\u06ba \u0645\u0633\u062a\u0642\u0628\u0644 \u06a9\u06cc \u062c\u06af\u06c1 Present Simple \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-10",
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Listen! The neighborhood orchestra _______ Vivaldi's Four Seasons in the town square.",
    "options": [
      "is performing",
      "performs",
      "performed",
      "has performed"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present continuous ('is performing') is used for an action taking place right now at the time of speaking.",
    "urduExplanation": "\u0628\u0627\u062a \u0686\u06cc\u062a \u06a9\u06d2 \u0648\u0642\u062a \u062c\u0627\u0631\u06cc \u0639\u0645\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 Present Continuous \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-11",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Hardly had the conference speaker begun her presentation when the microphone battery _______ dead.",
    "options": [
      "went",
      "had gone",
      "goes",
      "was going"
    ],
    "correctIndex": 0,
    "englishExplanation": "In 'Hardly... when', the first clause uses past perfect and the time clause uses the past simple ('went').",
    "urduExplanation": "'Hardly had... when' \u0648\u0627\u0644\u06cc \u0633\u0627\u062e\u062a \u0645\u06cc\u06ba 'when' \u06a9\u06d2 \u0628\u0639\u062f Past Simple \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-12",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Elena _______ two marathons since she joined the athletic club eighteen months ago.",
    "options": [
      "has completed",
      "completed",
      "had completed",
      "completes"
    ],
    "correctIndex": 0,
    "englishExplanation": "The main clause accompanying a 'since' clause uses the present perfect ('has completed').",
    "urduExplanation": "'Since' \u0648\u0627\u0644\u06d2 \u06a9\u0644\u0627\u0632 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0645\u06cc\u0646 \u06a9\u0644\u0627\u0632 \u0645\u06cc\u06ba Present Perfect \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-13",
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Every summer, thousands of migratory birds _______ to the coastal wetlands to breed.",
    "options": [
      "travel",
      "are traveling",
      "traveled",
      "have traveled"
    ],
    "correctIndex": 0,
    "englishExplanation": "Regular annual migratory patterns require the present simple ('travel').",
    "urduExplanation": "\u0633\u0627\u0644\u0627\u0646\u06c1 \u0642\u062f\u0631\u062a\u06cc \u0645\u0639\u0645\u0648\u0644\u0627\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 Present Simple \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-14",
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "The archaeologists _______ at the excavation site for five months before unearthing the Roman mosaic.",
    "options": [
      "had been digging",
      "have been digging",
      "were digging",
      "dug"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past perfect continuous ('had been digging') indicates duration continuing up to a past discovery.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u06a9\u06d2 \u06a9\u0633\u06cc \u0648\u0627\u0642\u0639\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u062c\u0627\u0631\u06cc \u0637\u0648\u06cc\u0644 \u0645\u062d\u0646\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 Past Perfect Continuous \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-15",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Don't phone me between seven and eight tonight because I _______ dinner for my visiting relatives.",
    "options": [
      "will be cooking",
      "cook",
      "cooked",
      "have cooked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future continuous ('will be cooking') denotes an activity that will be in progress during a specified time span.",
    "urduExplanation": "\u0645\u0633\u062a\u0642\u0628\u0644 \u06a9\u06d2 \u062f\u0648\u0631\u0627\u0646\u06cc\u06d2 \u0645\u06cc\u06ba \u062c\u0627\u0631\u06cc \u0631\u06c1\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0639\u0645\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 Future Continuous \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-tense-16",
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "The company _______ its quarterly financial statement by the end of next business week.",
    "options": [
      "will have published",
      "published",
      "publishes",
      "has published"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future perfect ('will have published') indicates completion before a specified future deadline.",
    "urduExplanation": "\u0645\u0633\u062a\u0642\u0628\u0644 \u06a9\u06cc \u062f\u06cc \u06af\u0626\u06cc \u062a\u0627\u0631\u06cc\u062e \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0645\u06a9\u0645\u0644 \u06c1\u0648\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0627\u0645 \u06a9\u06d2 \u0644\u06cc\u06d2 Future Perfect \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-01",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "Regular cardiovascular exercise contributes substantially to mental and physical _______.",
    "options": [
      "well-being",
      "well",
      "fit",
      "healthily"
    ],
    "correctIndex": 0,
    "englishExplanation": "The noun 'well-being' is required after the preposition 'to' and coordinate adjectives.",
    "urduExplanation": "\u062d\u0631\u0641\u0650 \u0631\u0628\u0637 'to' \u0627\u0648\u0631 \u0635\u0641\u0627\u062a \u06a9\u06d2 \u0628\u0639\u062f \u0627\u0633\u0645 'well-being' \u062f\u0631\u0633\u062a \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-02",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "The guest lecture on environmental conservation was extraordinarily _______.",
    "options": [
      "informative",
      "inform",
      "information",
      "informatively"
    ],
    "correctIndex": 0,
    "englishExplanation": "The predicate adjective 'informative' is required after the linking verb 'was' and adverb 'extraordinarily'.",
    "urduExplanation": "\u0631\u0628\u0637\u06cc \u0641\u0639\u0644 'was' \u0627\u0648\u0631 \u0627\u06cc\u0688\u0648\u0631\u0628 \u06a9\u06d2 \u0628\u0639\u062f \u0635\u0641\u062a ('informative') \u062f\u0631\u06a9\u0627\u0631 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-03",
    "category": "Parts of Speech",
    "difficulty": "Hard",
    "question": "Despite facing steep economic hurdles, the ambitious young entrepreneur pursued her vision _______.",
    "options": [
      "relentlessly",
      "relentless",
      "relent",
      "relentlessness"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'relentlessly' modifies the past action verb 'pursued'.",
    "urduExplanation": "\u0641\u0639\u0644 'pursued' \u06a9\u06cc \u06a9\u06cc\u0641\u06cc\u062a \u0638\u0627\u06c1\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0638\u0631\u0641 ('relentlessly') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-04",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "The city council planted flowering cherry trees to enhance urban _______.",
    "options": [
      "aesthetics",
      "aesthetic",
      "aesthetically",
      "aesthetician"
    ],
    "correctIndex": 0,
    "englishExplanation": "The noun 'aesthetics' functions as the direct object of the verb phrase 'enhance'.",
    "urduExplanation": "\u0641\u0639\u0644 'enhance' \u06a9\u06d2 \u0628\u0639\u062f \u0645\u0641\u0639\u0648\u0644 \u06a9\u06d2 \u0637\u0648\u0631 \u067e\u0631 \u0627\u0633\u0645 'aesthetics' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-05",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "The train arrived _______ time, allowing the commuters to catch their connecting bus smoothly.",
    "options": [
      "on",
      "in",
      "at",
      "by"
    ],
    "correctIndex": 0,
    "englishExplanation": "'On time' means punctual or according to the published timetable.",
    "urduExplanation": "\u0648\u0642\u062a \u06a9\u06cc \u067e\u0627\u0628\u0646\u062f\u06cc \u0627\u0648\u0631 \u0634\u06cc\u0688\u0648\u0644 \u06a9\u06d2 \u0645\u0637\u0627\u0628\u0642 \u067e\u06c1\u0646\u0686\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'on time' \u0628\u0648\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-06",
    "category": "Parts of Speech",
    "difficulty": "Hard",
    "question": "She completed the marathon in under three hours, _______ surprised her experienced trainer.",
    "options": [
      "which",
      "that",
      "what",
      "who"
    ],
    "correctIndex": 0,
    "englishExplanation": "The sentential relative pronoun 'which' refers back to the entire preceding clause.",
    "urduExplanation": "\u067e\u0648\u0631\u06d2 \u067e\u0686\u06be\u0644\u06d2 \u062c\u0645\u0644\u06d2 \u06a9\u06cc \u0637\u0631\u0641 \u0627\u0634\u0627\u0631\u06c1 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u06a9\u0648\u0645\u0627 \u06a9\u06d2 \u0628\u0639\u062f 'which' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-07",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "Neither the head chef nor his assistants _______ willing to disclose the secret recipe.",
    "options": [
      "were",
      "was",
      "is",
      "are being"
    ],
    "correctIndex": 0,
    "englishExplanation": "With 'neither... nor', the verb agrees in number with the nearer subject ('assistants' -> 'were').",
    "urduExplanation": "'Neither... nor' \u0645\u06cc\u06ba \u0641\u0639\u0644 \u0642\u0631\u06cc\u0628\u06cc \u0641\u0627\u0639\u0644 ('assistants') \u06a9\u06d2 \u0645\u0637\u0627\u0628\u0642 \u062c\u0645\u0639 ('were') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-08",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "Because of torrential rain, the outdoor tennis tournament was postponed _______ next Friday.",
    "options": [
      "until",
      "since",
      "during",
      "while"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Postponed until' denotes delaying an event up to a specific future point in time.",
    "urduExplanation": "\u06a9\u0633\u06cc \u062a\u0642\u0631\u06cc\u0628 \u06a9\u0648 \u0622\u0626\u0646\u062f\u06c1 \u062a\u0627\u0631\u06cc\u062e \u062a\u06a9 \u0645\u0624\u062e\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'until' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-09",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "The scientific paper was praised for being both concise _______ comprehensive.",
    "options": [
      "and",
      "or",
      "but",
      "nor"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correlative conjunction 'both' pairs exclusively with 'and'.",
    "urduExplanation": "'Both' \u06a9\u06d2 \u0633\u0627\u062a\u06be \u06c1\u0645\u06cc\u0634\u06c1 'and' \u06a9\u06cc \u062c\u0648\u0691\u06cc \u0628\u0646\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-10",
    "category": "Parts of Speech",
    "difficulty": "Hard",
    "question": "The remote volcanic island is virtually _______ to tourists due to harsh ocean currents.",
    "options": [
      "inaccessible",
      "inaccessibly",
      "inaccessibility",
      "access"
    ],
    "correctIndex": 0,
    "englishExplanation": "Predicate adjective 'inaccessible' follows the linking verb 'is' and adverb 'virtually'.",
    "urduExplanation": "\u0631\u0628\u0637\u06cc \u0641\u0639\u0644 'is' \u0627\u0648\u0631 \u0627\u06cc\u0688\u0648\u0631\u0628 \u06a9\u06d2 \u0628\u0639\u062f \u0635\u0641\u062a 'inaccessible' (\u0646\u0627\u0642\u0627\u0628\u0644\u0650 \u0631\u0633\u0627\u0626\u06cc) \u0622\u0626\u06d2 \u06af\u06cc\u06d4"
  },
  {
    "id": "gen-pos-11",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "Children who spend excessive time on electronic screens often suffer _______ eye fatigue.",
    "options": [
      "from",
      "with",
      "of",
      "by"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'suffer' takes the preposition 'from' when describing ailments.",
    "urduExplanation": "\u0628\u06cc\u0645\u0627\u0631\u06cc \u06cc\u0627 \u062a\u06a9\u0644\u06cc\u0641 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0641\u0639\u0644 'suffer' \u06a9\u06d2 \u0628\u0639\u062f 'from' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-12",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "He solved the complex physics equation _______ without checking the textbook answers.",
    "options": [
      "easily",
      "easy",
      "easiness",
      "eased"
    ],
    "correctIndex": 0,
    "englishExplanation": "Adverb 'easily' modifies the transitive verb 'solved'.",
    "urduExplanation": "\u0641\u0639\u0644 'solved' \u06a9\u06cc \u0648\u0636\u0627\u062d\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 \u0638\u0631\u0641 'easily' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-13",
    "category": "Parts of Speech",
    "difficulty": "Hard",
    "question": "_______ the adverse weather warnings, the daring explorers commenced their Arctic expedition.",
    "options": [
      "Notwithstanding",
      "Although",
      "Whereas",
      "Unless"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Notwithstanding' functions as a preposition followed by a noun phrase ('the adverse weather warnings').",
    "urduExplanation": "\u0627\u0633\u0645 \u06cc\u0627 \u0627\u0633\u0645\u06cc \u0641\u0642\u0631\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u062a\u0636\u0627\u062f \u06a9\u06d2 \u0644\u06cc\u06d2 'Notwithstanding' \u0628\u0637\u0648\u0631 \u067e\u0631\u06cc\u067e\u0648\u0632\u06cc\u0634\u0646 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-14",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "The university library provides access to millions of scholarly journals, _______ are peer-reviewed.",
    "options": [
      "many of which",
      "many of that",
      "much of which",
      "many of them"
    ],
    "correctIndex": 0,
    "englishExplanation": "Quantifier relative phrase 'many of which' connects the non-defining clause referring to plural journals.",
    "urduExplanation": "\u063a\u06cc\u0631 \u062c\u0627\u0646\u062f\u0627\u0631 \u062c\u0645\u0639 \u0627\u0634\u06cc\u0627\u0621 \u06a9\u06d2 \u0644\u06cc\u06d2 'many of which' \u06a9\u0627 \u062a\u0639\u0644\u0642 \u062f\u0627\u0631 \u062c\u0645\u0644\u06c1 \u0628\u0646\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-15",
    "category": "Parts of Speech",
    "difficulty": "Easy",
    "question": "The new public transit line is famous _______ its punctuality and cleanliness.",
    "options": [
      "for",
      "with",
      "about",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adjective 'famous' collocates with the preposition 'for'.",
    "urduExplanation": "\u0635\u0641\u062a 'famous' \u06a9\u06d2 \u0628\u0639\u062f \u06c1\u0645\u06cc\u0634\u06c1 \u067e\u0631\u06cc\u067e\u0648\u0632\u06cc\u0634\u0646 'for' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pos-16",
    "category": "Parts of Speech",
    "difficulty": "Medium",
    "question": "The corporate headquarters operates _______ an environmental sustainability framework.",
    "options": [
      "under",
      "between",
      "among",
      "during"
    ],
    "correctIndex": 0,
    "englishExplanation": "Operating 'under a framework' is the standard prepositional idiom.",
    "urduExplanation": "\u06a9\u0633\u06cc \u0636\u0627\u0628\u0637\u06d2 \u06cc\u0627 \u0641\u0631\u06cc\u0645 \u0648\u0631\u06a9 \u06a9\u06d2 \u0645\u0627\u062a\u062d\u062a \u06a9\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'under' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-01",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "Farhan bought _______ high-resolution digital camera to practice landscape photography.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Singular countable noun phrase 'high-resolution digital camera' begins with a consonant sound, taking 'a'.",
    "urduExplanation": "\u0648\u0627\u062d\u062f \u0642\u0627\u0628\u0644 \u06af\u0646\u062a\u06cc \u0627\u0633\u0645 \u062c\u0648 consonant \u0622\u0648\u0627\u0632 \u0633\u06d2 \u0634\u0631\u0648\u0639 \u06c1\u0648 \u0627\u0633 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 'a' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-02",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "K2 is the second highest mountain peak in _______ world.",
    "options": [
      "the",
      "a",
      "an",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Unique planetary entities ('the world', 'the sun', 'the sky') require the definite article 'the'.",
    "urduExplanation": "\u0645\u0646\u0641\u0631\u062f \u0627\u0648\u0631 \u06cc\u06a9\u062a\u0627 \u0686\u06cc\u0632\u0648\u06ba ('the world') \u0633\u06d2 \u067e\u06c1\u0644\u06d2 definite article 'the' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-03",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "_______ integrity is considered an indispensable virtue in professional life.",
    "options": [
      "No article",
      "The",
      "A",
      "An"
    ],
    "correctIndex": 0,
    "englishExplanation": "Abstract uncountable nouns ('integrity') used in a general sense take zero article.",
    "urduExplanation": "\u0645\u062c\u0631\u062f \u0627\u0648\u0631 \u0646\u0627\u0642\u0627\u0628\u0644\u0650 \u0634\u0645\u0627\u0631 \u0627\u0633\u0645 ('integrity') \u062c\u0628 \u0639\u0627\u0645 \u0645\u0639\u0646\u0648\u06ba \u0645\u06cc\u06ba \u0622\u0626\u06d2 \u062a\u0648 \u06a9\u0648\u0626\u06cc \u0622\u0631\u0679\u06cc\u06a9\u0644 \u0646\u06c1\u06cc\u06ba \u0622\u062a\u0627\u06d4"
  },
  {
    "id": "gen-art-04",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "She plays _______ violin beautifully in the university chamber orchestra.",
    "options": [
      "the",
      "a",
      "an",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Musical instruments take the definite article 'the' when referring to playing them as a skill.",
    "urduExplanation": "\u0645\u0648\u0633\u06cc\u0642\u06cc \u06a9\u06d2 \u0622\u0644\u0627\u062a \u0628\u062c\u0627\u0646\u06d2 \u06a9\u06d2 \u062d\u0648\u0627\u0644\u06d2 \u0633\u06d2 'the' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-05",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "The documentary examined the diverse marine ecosystems of _______ Pacific Ocean.",
    "options": [
      "the",
      "a",
      "an",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Oceans, seas, and rivers require the definite article 'the' ('the Pacific Ocean').",
    "urduExplanation": "\u0633\u0645\u0646\u062f\u0631\u0648\u06ba \u0627\u0648\u0631 \u062f\u0631\u06cc\u0627\u0624\u06ba \u06a9\u06d2 \u0646\u0627\u0645\u0648\u06ba \u0633\u06d2 \u067e\u06c1\u0644\u06d2 'the' \u0644\u06af\u0627\u06cc\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-06",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "Dr. Khan was elected _______ president of the national medical association.",
    "options": [
      "no article",
      "the",
      "a",
      "an"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero article is used with unique titles and elected offices following verbs like 'elect', 'appoint', or 'make'.",
    "urduExplanation": "'Elect' \u06cc\u0627 'appoint' \u06a9\u06d2 \u0628\u0639\u062f \u0622\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0648\u0627\u062d\u062f \u0627\u0648\u0631 \u0645\u062e\u0635\u0648\u0635 \u0639\u06c1\u062f\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0622\u0631\u0679\u06cc\u06a9\u0644 \u0646\u06c1\u06cc\u06ba \u0622\u062a\u0627\u06d4"
  },
  {
    "id": "gen-art-07",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "My roommate wants to adopt _______ stray kitten from the animal rescue shelter.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Indefinite singular countable noun 'stray kitten' takes 'a'.",
    "urduExplanation": "\u06a9\u0633\u06cc \u0627\u06cc\u06a9 \u063a\u06cc\u0631 \u0645\u0639\u06cc\u0646 \u0628\u0644\u06cc \u06a9\u06d2 \u0628\u0686\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'a' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u06af\u0627\u06d4"
  },
  {
    "id": "gen-art-08",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "During our trip to Europe, we stayed in _______ United Kingdom for two weeks before traveling to France.",
    "options": [
      "the",
      "a",
      "an",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Country names containing words like 'Kingdom', 'States', or 'Republic' take 'the'.",
    "urduExplanation": "\u062c\u0646 \u0645\u0645\u0627\u0644\u06a9 \u06a9\u06d2 \u0646\u0627\u0645 \u0645\u06cc\u06ba 'Kingdom' \u06cc\u0627 'States' \u0622\u0626\u06d2\u060c \u0627\u0646 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 'the' \u0644\u06af\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-09",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "_______ breakfast we ate at the seaside cafe this morning was truly exceptional.",
    "options": [
      "The",
      "A",
      "An",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Meals normally take zero article, but when specified or modified by a restrictive clause, they require 'the'.",
    "urduExplanation": "\u06a9\u06be\u0627\u0646\u0648\u06ba \u06a9\u06d2 \u0646\u0627\u0645 \u0639\u0627\u0645 \u0637\u0648\u0631 \u067e\u0631 \u0628\u063a\u06cc\u0631 \u0622\u0631\u0679\u06cc\u06a9\u0644 \u0622\u062a\u06d2 \u06c1\u06cc\u06ba\u060c \u0644\u06cc\u06a9\u0646 \u0645\u062e\u0635\u0648\u0635 \u0646\u0627\u0634\u062a\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'The' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-10",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "An apple _______ day is said to keep the doctor away.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "The indefinite article 'a' indicates frequency/rate ('a day' = per day).",
    "urduExplanation": "\u0634\u0631\u062d \u0627\u0648\u0631 \u0631\u0648\u0632\u0627\u0646\u06c1 \u06a9\u06d2 \u062a\u0646\u0627\u0633\u0628 \u06a9\u06d2 \u0644\u06cc\u06d2 'a day' \u0628\u0648\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-11",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "The scientific team studied _______ behavior of honeybees in urban environments.",
    "options": [
      "the",
      "a",
      "an",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Specific behavior defined by the prepositional phrase 'of honeybees' requires 'the'.",
    "urduExplanation": "'Of' \u06a9\u06d2 \u0630\u0631\u06cc\u0639\u06d2 \u0645\u062e\u0635\u0648\u0635 \u06a9\u06cc\u06d2 \u06af\u0626\u06d2 \u0627\u0633\u0645 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 definite article 'the' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-12",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "He has _______ extensive knowledge of Renaissance Italian art and architecture.",
    "options": [
      "an",
      "a",
      "the",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Knowledge' is uncountable, but when preceded by an adjective denoting a particular scope, it takes 'a/an' ('an extensive knowledge of').",
    "urduExplanation": "\u0627\u06af\u0631\u0686\u06c1 'knowledge' \u0627\u0646 \u06a9\u0627\u0624\u0646\u0679\u06cc\u0628\u0644 \u06c1\u06d2\u060c \u0644\u06cc\u06a9\u0646 \u0635\u0641\u062a \u06a9\u06d2 \u0633\u0627\u062a\u06be \u062e\u0627\u0635 \u0634\u0639\u0628\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'an extensive knowledge' \u062f\u0631\u0633\u062a \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-13",
    "category": "Articles",
    "difficulty": "Easy",
    "question": "She works as _______ environmental consultant for clean energy startups.",
    "options": [
      "an",
      "a",
      "the",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Professions and job roles in the singular taking a vowel sound use 'an'.",
    "urduExplanation": "\u067e\u06cc\u0634\u0648\u06ba \u0627\u0648\u0631 \u0645\u0644\u0627\u0632\u0645\u062a\u0648\u06ba \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u062c\u0648 vowel \u0622\u0648\u0627\u0632 \u0633\u06d2 \u0634\u0631\u0648\u0639 \u06c1\u0648\u06ba 'an' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-14",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "_______ Sahara Desert is the largest hot desert on Earth.",
    "options": [
      "The",
      "A",
      "An",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "Deserts require the definite article 'the' ('the Sahara Desert').",
    "urduExplanation": "\u0635\u062d\u0631\u0627\u0626\u06cc \u0639\u0644\u0627\u0642\u0648\u06ba \u06a9\u06d2 \u0646\u0627\u0645\u0648\u06ba \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u06c1\u0645\u06cc\u0634\u06c1 'The' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-art-15",
    "category": "Articles",
    "difficulty": "Hard",
    "question": "The patient was admitted to _______ hospital after experiencing severe chest pains.",
    "options": [
      "no article",
      "the",
      "a",
      "an"
    ],
    "correctIndex": 0,
    "englishExplanation": "Institutions like 'hospital', 'school', 'prison' take zero article when visited for their primary institutional purpose.",
    "urduExplanation": "\u062c\u0628 \u06c1\u0633\u067e\u062a\u0627\u0644 \u0639\u0644\u0627\u062c \u06a9\u06d2 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0645\u0642\u0635\u062f \u06a9\u06d2 \u0644\u06cc\u06d2 \u062c\u0627\u06cc\u0627 \u062c\u0627\u0626\u06d2 \u062a\u0648 \u0628\u0631\u0637\u0627\u0646\u0648\u06cc \u0627\u0646\u06af\u0644\u0634 \u0645\u06cc\u06ba \u06a9\u0648\u0626\u06cc \u0622\u0631\u0679\u06cc\u06a9\u0644 \u0646\u06c1\u06cc\u06ba \u0622\u062a\u0627\u06d4"
  },
  {
    "id": "gen-art-16",
    "category": "Articles",
    "difficulty": "Medium",
    "question": "The board reviewed _______ annual report presented by the executive committee.",
    "options": [
      "the",
      "a",
      "an",
      "no article"
    ],
    "correctIndex": 0,
    "englishExplanation": "The specific annual report identified by the modifying clause requires 'the'.",
    "urduExplanation": "\u0645\u062e\u0635\u0648\u0635 \u0627\u0648\u0631 \u0645\u062a\u0639\u06cc\u0646 \u0633\u0627\u0644\u0627\u0646\u06c1 \u0631\u067e\u0648\u0631\u0679 \u06a9\u06d2 \u0644\u06cc\u06d2 'the' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-01",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "Before choosing a university major, students should _______ the pros and cons carefully.",
    "options": [
      "weigh",
      "measure",
      "count",
      "calculate"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Weigh the pros and cons' is the standard English collocation for assessing advantages and disadvantages.",
    "urduExplanation": "'Weigh the pros and cons' \u0646\u0641\u0639 \u0627\u0648\u0631 \u0646\u0642\u0635\u0627\u0646 \u06a9\u0627 \u062c\u0627\u0626\u0632\u06c1 \u0644\u06cc\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0645\u062e\u0635\u0648\u0635 \u0627\u0635\u0637\u0644\u0627\u062d \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-02",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "To maintain optimal fitness, you should _______ regular exercise into your weekly schedule.",
    "options": [
      "incorporate",
      "fabricate",
      "manufacture",
      "assemble"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Incorporate regular exercise' is the natural, idiomatic collocation.",
    "urduExplanation": "\u0645\u0639\u0645\u0648\u0644 \u0645\u06cc\u06ba \u0648\u0631\u0632\u0634 \u06a9\u0648 \u0634\u0627\u0645\u0644 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'incorporate' \u0645\u0648\u0632\u0648\u06ba \u062a\u0631\u06cc\u0646 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-03",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "After intense deliberation, the two community associations managed to _______ a compromise.",
    "options": [
      "strike",
      "hit",
      "beat",
      "smash"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Strike a compromise' means to successfully negotiate a mutual agreement.",
    "urduExplanation": "'Strike a compromise' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0633\u0645\u062c\u06be\u0648\u062a\u06c1 \u0627\u0648\u0631 \u0628\u0627\u06c1\u0645\u06cc \u0627\u062a\u0641\u0627\u0642 \u0631\u0627\u0626\u06d2 \u0642\u0627\u0626\u0645 \u06a9\u0631\u0646\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-04",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "The research scientists worked diligently around the clock to _______ the publication deadline.",
    "options": [
      "meet",
      "catch",
      "reach",
      "achieve"
    ],
    "correctIndex": 0,
    "englishExplanation": "One 'meets a deadline' when finishing work within the designated timeframe.",
    "urduExplanation": "\u0645\u0642\u0631\u0631\u06c1 \u0648\u0642\u062a \u067e\u0631 \u06a9\u0627\u0645 \u0645\u06a9\u0645\u0644 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'meet a deadline' \u06a9\u06c1\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-05",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "She made a conscious effort to _______ a good impression during her job interview.",
    "options": [
      "make",
      "do",
      "have",
      "give"
    ],
    "correctIndex": 0,
    "englishExplanation": "The natural verb collocation is 'make an impression' on someone.",
    "urduExplanation": "\u0627\u0686\u06be\u0627 \u062a\u0627\u062b\u0631 \u0642\u0627\u0626\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'make an impression' \u0628\u0648\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-06",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "The unexpected technological breakthrough _______ into question long-standing scientific dogmas.",
    "options": [
      "called",
      "put",
      "brought",
      "asked"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Call into question' is an idiomatic collocation meaning to cast doubt upon something.",
    "urduExplanation": "'Call into question' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06a9\u0633\u06cc \u0628\u0627\u062a \u067e\u0631 \u0634\u06a9 \u06cc\u0627 \u0633\u0648\u0627\u0644\u06cc\u06c1 \u0646\u0634\u0627\u0646 \u0627\u0679\u06be\u0627\u0646\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-07",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "Local environmental activists are campaigning to _______ public awareness about plastic waste.",
    "options": [
      "raise",
      "rise",
      "lift",
      "arouse"
    ],
    "correctIndex": 0,
    "englishExplanation": "The standard transitive verb collocation is 'raise awareness'.",
    "urduExplanation": "\u0634\u0639\u0648\u0631 \u0627\u0648\u0631 \u0622\u06af\u0627\u06c1\u06cc \u0628\u06cc\u062f\u0627\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'raise awareness' \u0628\u0648\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-08",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "After walking ten miles through the national park, the hikers decided to _______ a break.",
    "options": [
      "take",
      "make",
      "do",
      "hold"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Take a break' is the standard natural collocation for resting.",
    "urduExplanation": "\u0622\u0631\u0627\u0645 \u06cc\u0627 \u0648\u0642\u0641\u06c1 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'take a break' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-09",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "The city transportation department must _______ precautions against icy winter roads.",
    "options": [
      "take",
      "make",
      "do",
      "render"
    ],
    "correctIndex": 0,
    "englishExplanation": "The correct verb collocation is 'take precautions'.",
    "urduExplanation": "\u062d\u0641\u0627\u0638\u062a\u06cc \u0627\u0642\u062f\u0627\u0645\u0627\u062a \u0627\u0648\u0631 \u0627\u062d\u062a\u06cc\u0627\u0637 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'take precautions' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-10",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "Learning a new foreign language requires students to _______ attention to subtle nuances.",
    "options": [
      "pay",
      "give",
      "spend",
      "lend"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Pay attention to' is the standard verb-noun collocation.",
    "urduExplanation": "\u062a\u0648\u062c\u06c1 \u062f\u06cc\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'pay attention' \u06a9\u06cc \u0633\u0627\u062e\u062a \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-11",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "He decided to _______ up classical guitar as a creative weekend hobby.",
    "options": [
      "take",
      "pick",
      "set",
      "bring"
    ],
    "correctIndex": 0,
    "englishExplanation": "The phrasal verb 'take up' means to begin practicing a new hobby or pastime.",
    "urduExplanation": "\u0646\u06cc\u0627 \u0645\u0634\u063a\u0644\u06c1 \u06cc\u0627 \u0633\u0631\u06af\u0631\u0645\u06cc \u0634\u0631\u0648\u0639 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'take up' \u0628\u0648\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-12",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "The diplomatic delegation worked tirelessly to _______ common ground between the two nations.",
    "options": [
      "find",
      "locate",
      "spot",
      "invent"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Find common ground' is the established idiom for identifying shared mutual interests.",
    "urduExplanation": "\u0645\u0634\u062a\u0631\u06a9\u06c1 \u0646\u06a9\u0627\u062a \u0627\u0648\u0631 \u0628\u0627\u06c1\u0645\u06cc \u0645\u0641\u0627\u062f\u0627\u062a \u062a\u0644\u0627\u0634 \u06a9\u0631\u0646\u06d2 \u06a9\u0648 'find common ground' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "gen-col-13",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "During the public town hall meeting, several local residents _______ their concerns about traffic congestion.",
    "options": [
      "voiced",
      "spoke",
      "sounded",
      "told"
    ],
    "correctIndex": 0,
    "englishExplanation": "One 'voices concerns' or opinions to express feelings formally.",
    "urduExplanation": "\u062a\u062d\u0641\u0638\u0627\u062a \u0627\u0648\u0631 \u062e\u062f\u0634\u0627\u062a \u06a9\u0627 \u0627\u0638\u06c1\u0627\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'voice concerns' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-14",
    "category": "Collocations",
    "difficulty": "Easy",
    "question": "I would like to _______ an appointment with Dr. Harrison for a routine dental checkup.",
    "options": [
      "make",
      "do",
      "take",
      "form"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Make an appointment' is the customary collocation.",
    "urduExplanation": "\u0688\u0627\u06a9\u0679\u0631 \u0633\u06d2 \u0648\u0642\u062a \u0637\u06d2 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'make an appointment' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-15",
    "category": "Collocations",
    "difficulty": "Hard",
    "question": "The new smartphone feature had an immediate _______ on mobile battery longevity.",
    "options": [
      "impact",
      "affect",
      "shock",
      "force"
    ],
    "correctIndex": 0,
    "englishExplanation": "The noun 'impact' collocates with 'have an immediate impact on'.",
    "urduExplanation": "'Have an impact on' \u0627\u062b\u0631 \u0627\u0646\u062f\u0627\u0632 \u06c1\u0648\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u062f\u0631\u0633\u062a \u0627\u0635\u0637\u0644\u0627\u062d \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-col-16",
    "category": "Collocations",
    "difficulty": "Medium",
    "question": "Before signing the commercial lease agreement, the company conducted thorough due _______.",
    "options": [
      "diligence",
      "duty",
      "effort",
      "patience"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Due diligence' is the standard legal and commercial collocation for comprehensive appraisal.",
    "urduExplanation": "'Due diligence' \u06a9\u0627\u0631\u0648\u0628\u0627\u0631\u06cc \u062c\u0627\u0646\u0686 \u067e\u0691\u062a\u0627\u0644 \u06a9\u06cc \u0645\u0633\u0644\u0645\u06c1 \u0627\u0635\u0637\u0644\u0627\u062d \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-01",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Rarely _______ such a breathtaking natural aurora as we witnessed in northern Norway.",
    "options": [
      "have I seen",
      "I have seen",
      "did I saw",
      "had I saw"
    ],
    "correctIndex": 0,
    "englishExplanation": "A clause beginning with negative restrictive adverb 'Rarely' triggers subject-auxiliary inversion ('have I seen').",
    "urduExplanation": "\u0645\u0646\u0641\u06cc \u06cc\u0627 \u0645\u062d\u062f\u0648\u062f \u06a9\u0631\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0644\u0641\u0638 'Rarely' \u0633\u06d2 \u0634\u0631\u0648\u0639 \u06c1\u0648\u0646\u06d2 \u067e\u0631 Inversion ('have I seen') \u0644\u0627\u0632\u0645\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-02",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Not only _______ the national science olympiad, but she also earned a full university scholarship.",
    "options": [
      "did she win",
      "she won",
      "won she",
      "had she won"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Not only' opening a clause demands auxiliary inversion ('did she win').",
    "urduExplanation": "'Not only' \u0633\u06d2 \u06a9\u0644\u0627\u0632 \u0634\u0631\u0648\u0639 \u06c1\u0648\u0646\u06d2 \u067e\u0631 \u0645\u0639\u0627\u0648\u0646 \u0641\u0639\u0644 \u0641\u0627\u0639\u0644 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-03",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Under no circumstances _______ personal passwords with anyone online.",
    "options": [
      "should you share",
      "you should share",
      "you share",
      "do you share"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Under no circumstances' requires inversion ('should you share').",
    "urduExplanation": "'Under no circumstances' (\u06a9\u0633\u06cc \u0628\u06be\u06cc \u0635\u0648\u0631\u062a \u0645\u06cc\u06ba \u0646\u06c1\u06cc\u06ba) \u06a9\u06d2 \u0628\u0639\u062f \u0641\u0627\u0639\u0644 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 'should' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-04",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Scarcely _______ the mountain summit when a sudden snowstorm engulfed the ridge.",
    "options": [
      "had the climbers reached",
      "the climbers reached",
      "reached the climbers",
      "have the climbers reached"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Scarcely + past perfect inversion' followed by 'when' describes two closely sequential past events.",
    "urduExplanation": "'Scarcely had + subject + reached' \u0633\u0627\u062e\u062a \u0645\u06cc\u06ba \u0627\u0646\u0648\u0631\u0698\u0646 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-05",
    "category": "Inversions",
    "difficulty": "Medium",
    "question": "Seldom _______ wild tigers venture so close to human settlements in the valley.",
    "options": [
      "do",
      "are",
      "have",
      "were"
    ],
    "correctIndex": 0,
    "englishExplanation": "Negative frequency adverb 'Seldom' opening the sentence requires present auxiliary inversion ('do').",
    "urduExplanation": "'Seldom' \u0633\u06d2 \u0634\u0631\u0648\u0639 \u06c1\u0648\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u062c\u0645\u0644\u06d2 \u0645\u06cc\u06ba \u067e\u0631\u06cc\u0632\u0646\u0679 \u0627\u0646\u0648\u0631\u0698\u0646 \u06a9\u06d2 \u0644\u06cc\u06d2 'do' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-06",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Little _______ that their modest software prototype would revolutionize global communication.",
    "options": [
      "did they suspect",
      "they suspected",
      "suspected they",
      "had they suspect"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Little' meaning 'not at all' at the start of a sentence requires inversion ('did they suspect').",
    "urduExplanation": "'Little' \u062c\u0628 \u0645\u0646\u0641\u06cc \u0645\u0639\u0646\u0648\u06ba \u0645\u06cc\u06ba \u0634\u0631\u0648\u0639 \u0645\u06cc\u06ba \u0622\u0626\u06d2 \u062a\u0648 \u0627\u0646\u0648\u0631\u0698\u0646 ('did they suspect') \u062f\u0631\u06a9\u0627\u0631 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-07",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Only after the laboratory results were verified _______ the medical breakthrough announced to the public.",
    "options": [
      "was",
      "is",
      "were",
      "had been"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Only after' clauses require inversion in the subsequent main clause ('was the medical breakthrough announced').",
    "urduExplanation": "'Only after' \u06a9\u06d2 \u0628\u0639\u062f \u0645\u06cc\u0646 \u06a9\u0644\u0627\u0632 \u0645\u06cc\u06ba \u0627\u0646\u0648\u0631\u0698\u0646 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0645\u0639\u0627\u0648\u0646 \u0641\u0639\u0644 ('was') \u0641\u0627\u0639\u0644 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-08",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Should you _______ any difficulties operating the telescope, consult the astronomical guide.",
    "options": [
      "experience",
      "experienced",
      "to experience",
      "experiencing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Inverted first conditional ('Should + subject + bare infinitive') replaces 'If you experience'.",
    "urduExplanation": "\u067e\u06c1\u0644\u06cc \u0634\u0631\u0637 \u06a9\u06cc \u0627\u0646\u0648\u0631\u0698\u0646 \u0645\u06cc\u06ba 'Should' \u06a9\u06d2 \u0628\u0639\u062f \u0628\u063a\u06cc\u0631 'to' \u06a9\u06d2 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 ('experience') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-09",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Had the fire alarms _______ properly, the historic museum gallery could have been evacuated earlier.",
    "options": [
      "sounded",
      "sound",
      "sounding",
      "been sounding"
    ],
    "correctIndex": 0,
    "englishExplanation": "Inverted third conditional ('Had + subject + past participle') replaces 'If the fire alarms had sounded'.",
    "urduExplanation": "\u062a\u06be\u0631\u0688 \u06a9\u0646\u0688\u06cc\u0634\u0646\u0644 \u06a9\u06cc \u0627\u0646\u0648\u0631\u0698\u0646 \u0645\u06cc\u06ba 'Had + subject + 3rd form' \u06a9\u06cc \u0633\u0627\u062e\u062a \u06c1\u0648\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-10",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Were the city council _______ more bicycle lanes, fewer residents would commute by private car.",
    "options": [
      "to construct",
      "construct",
      "constructed",
      "constructing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Inverted second conditional uses 'Were + subject + to-infinitive'.",
    "urduExplanation": "\u0633\u06cc\u06a9\u0646\u0688 \u06a9\u0646\u0688\u06cc\u0634\u0646\u0644 \u06a9\u06cc \u0627\u0646\u0648\u0631\u0698\u0646 \u0645\u06cc\u06ba 'Were + subject + to construct' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-11",
    "category": "Inversions",
    "difficulty": "Medium",
    "question": "Never before _______ such passionate enthusiasm among high school volunteers for community cleanups.",
    "options": [
      "had the organizers witnessed",
      "the organizers had witnessed",
      "witnessed the organizers",
      "did the organizers witnessed"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Never before' opening a sentence triggers auxiliary inversion.",
    "urduExplanation": "'Never before' \u0633\u06d2 \u0641\u0642\u0631\u06c1 \u0634\u0631\u0648\u0639 \u06c1\u0648 \u062a\u0648 \u0645\u0639\u0627\u0648\u0646 \u0641\u0639\u0644 \u0641\u0627\u0639\u0644 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-12",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "No sooner had the curtain fallen _______ the audience erupted in thunderous applause.",
    "options": [
      "than",
      "when",
      "then",
      "after"
    ],
    "correctIndex": 0,
    "englishExplanation": "'No sooner had... than' is the mandatory correlative pair.",
    "urduExplanation": "'No sooner' \u06a9\u06d2 \u0633\u0627\u062a\u06be \u06c1\u0645\u06cc\u0634\u06c1 'than' \u06a9\u0627 \u062c\u0648\u0691\u0627 \u0628\u0646\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-13",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Only by working cooperatively _______ human society solve pressing environmental challenges.",
    "options": [
      "can",
      "may",
      "will be",
      "should have"
    ],
    "correctIndex": 0,
    "englishExplanation": "Clauses beginning with 'Only by...' take subject-modal inversion in the main clause ('can human society solve').",
    "urduExplanation": "'Only by' \u0633\u06d2 \u0634\u0631\u0648\u0639 \u06c1\u0648\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0641\u0642\u0631\u06d2 \u0645\u06cc\u06ba \u0645\u0627\u0688\u0644 \u0648\u0631\u0628 'can' \u0641\u0627\u0639\u0644 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-14",
    "category": "Inversions",
    "difficulty": "Medium",
    "question": "At no point during the public debate _______ the candidate lose her composure.",
    "options": [
      "did",
      "was",
      "has",
      "had"
    ],
    "correctIndex": 0,
    "englishExplanation": "Negative expression 'At no point' triggers auxiliary inversion with 'did'.",
    "urduExplanation": "'At no point' \u06a9\u06d2 \u0628\u0639\u062f \u0645\u0627\u0636\u06cc \u06a9\u06d2 \u0644\u06cc\u06d2 \u0627\u0646\u0648\u0631\u0698\u0646 \u0645\u06cc\u06ba 'did' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-15",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "On no account _______ tourists attempt to feed wild animals in the national reserve.",
    "options": [
      "must",
      "can have",
      "ought",
      "need"
    ],
    "correctIndex": 0,
    "englishExplanation": "'On no account' expressing absolute prohibition triggers modal inversion ('must tourists attempt').",
    "urduExplanation": "'On no account' (\u06c1\u0631\u06af\u0632 \u0646\u06c1\u06cc\u06ba) \u06a9\u06d2 \u0628\u0639\u062f \u0645\u0645\u0627\u0646\u0639\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 \u0645\u0627\u0688\u0644 \u0648\u0631\u0628 'must' \u0641\u0627\u0639\u0644 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-inv-16",
    "category": "Inversions",
    "difficulty": "Hard",
    "question": "Should any technical issues _______ during software deployment, rollback protocols will activate.",
    "options": [
      "arise",
      "arose",
      "arisen",
      "arising"
    ],
    "correctIndex": 0,
    "englishExplanation": "Inverted conditional 'Should + subject + bare infinitive' requires base form 'arise'.",
    "urduExplanation": "'Should' \u0648\u0627\u0644\u06cc \u0627\u0646\u0648\u0631\u0698\u0646 \u0645\u06cc\u06ba \u06c1\u0645\u06cc\u0634\u06c1 \u067e\u06c1\u0644\u06cc \u0641\u0627\u0631\u0645 'arise' \u0622\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-01",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "The university academic committee recommended that each doctoral student _______ an original thesis.",
    "options": [
      "submit",
      "submits",
      "submitted",
      "will submit"
    ],
    "correctIndex": 0,
    "englishExplanation": "Mandative subjunctive after verbs of recommendation requires the base verb form ('submit').",
    "urduExplanation": "\u0633\u0641\u0627\u0631\u0634 \u06cc\u0627 \u062a\u062c\u0648\u06cc\u0632 \u0648\u0627\u0644\u06d2 \u0641\u0639\u0644 \u06a9\u06d2 \u0628\u0639\u062f Mandative Subjunctive \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 ('submit') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-02",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "It is essential that every patient _______ prescribed antibiotic courses completely.",
    "options": [
      "finish",
      "finishes",
      "finished",
      "is finishing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Impersonal adjectives of urgency ('It is essential that...') take base subjunctive ('finish').",
    "urduExplanation": "\u0636\u0631\u0648\u0631\u062a \u0627\u0648\u0631 \u062a\u0627\u06a9\u06cc\u062f \u0648\u0627\u0644\u06d2 \u062c\u0645\u0644\u0648\u06ba \u0645\u06cc\u06ba 'that' \u06a9\u06d2 \u0628\u0639\u062f \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 ('finish') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-03",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "The aviation safety regulator insisted that the airliner _______ grounded pending structural inspection.",
    "options": [
      "be",
      "is",
      "was",
      "being"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive mandative subjunctive requires 'be + past participle' ('be grounded').",
    "urduExplanation": "\u067e\u06cc\u0633\u0648 \u0633\u0628\u062c\u06cc\u06a9\u0679\u0648 \u0645\u06cc\u06ba 'be' \u0627\u0648\u0631 \u0641\u0639\u0644 \u06a9\u06cc \u062a\u06cc\u0633\u0631\u06cc \u0641\u0627\u0631\u0645 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-04",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The athletic trainer demanded that the injured soccer player _______ off the field immediately.",
    "options": [
      "step",
      "steps",
      "stepped",
      "is stepping"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'demand that' requires base subjunctive form ('step').",
    "urduExplanation": "\u062d\u06a9\u0645 \u06cc\u0627 \u0645\u0637\u0627\u0644\u0628\u06d2 \u0648\u0627\u0644\u06d2 \u0641\u0639\u0644 \u06a9\u06d2 \u0628\u0639\u062f \u0633\u0628\u062c\u06cc\u06a9\u0679\u0648 \u0645\u06cc\u06ba \u0641\u0639\u0644 \u06a9\u06cc \u0628\u0646\u06cc\u0627\u062f\u06cc \u0634\u06a9\u0644 ('step') \u0622\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-05",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "It is crucial that all confidential customer records _______ securely encrypted against data breaches.",
    "options": [
      "be",
      "are",
      "were",
      "have been"
    ],
    "correctIndex": 0,
    "englishExplanation": "Subjunctive passive requires base auxiliary 'be'.",
    "urduExplanation": "\u0632\u0648\u0631 \u062f\u06cc\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0641\u0642\u0631\u06d2 \u0645\u06cc\u06ba 'It is crucial that...' \u06a9\u06d2 \u0628\u0639\u062f \u067e\u06cc\u0633\u06cc\u0648 \u0645\u06cc\u06ba 'be' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-06",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The environmental scientist proposed that the city _______ single-use plastic bags in all supermarkets.",
    "options": [
      "ban",
      "bans",
      "banned",
      "will ban"
    ],
    "correctIndex": 0,
    "englishExplanation": "Verbs of proposal ('propose that') take base subjunctive ('ban').",
    "urduExplanation": "'Propose that' \u06a9\u06d2 \u0628\u0639\u062f \u0633\u0628\u062c\u06cc\u06a9\u0679\u0648 \u0645\u0648\u0688 \u0645\u06cc\u06ba \u0628\u063a\u06cc\u0631 \u06a9\u0633\u06cc \u0627\u0636\u0627\u0641\u06d2 \u06a9\u06d2 'ban' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-07",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "It is imperative that the emergency medical team _______ the disaster zone within twenty minutes.",
    "options": [
      "reach",
      "reaches",
      "reached",
      "is reaching"
    ],
    "correctIndex": 0,
    "englishExplanation": "'It is imperative that...' governs the bare subjunctive ('reach').",
    "urduExplanation": "\u062d\u06a9\u0645\u06cc\u06c1 \u062c\u0645\u0644\u0648\u06ba \u0645\u06cc\u06ba 'that' \u06a9\u06d2 \u0628\u0639\u062f \u06c1\u0645\u06cc\u0634\u06c1 \u0628\u06cc\u0633 \u0641\u0627\u0631\u0645 ('reach') \u0622\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-08",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The university ethics board required that the lead researcher _______ written consent from all human subjects.",
    "options": [
      "obtain",
      "obtains",
      "obtained",
      "obtaining"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb 'require that' is followed by a base form subjunctive ('obtain').",
    "urduExplanation": "'Require that' \u06a9\u06d2 \u0628\u0639\u062f \u062a\u06cc\u0633\u0631\u06d2 \u0634\u062e\u0635 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0628\u06be\u06cc 's' \u06a9\u06d2 \u0628\u063a\u06cc\u0631 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-09",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "The hospital superintendent suggested that visiting hours _______ curtailed to prevent contagion.",
    "options": [
      "be",
      "are",
      "were",
      "have been"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive subjunctive takes 'be + past participle'.",
    "urduExplanation": "\u067e\u06cc\u0633\u06cc\u0648 \u0633\u0628\u062c\u06cc\u06a9\u0679\u0648 \u0645\u06cc\u06ba 'be' \u06a9\u06cc \u0628\u0646\u06cc\u0627\u062f\u06cc \u0634\u06a9\u0644 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-10",
    "category": "Subjunctive",
    "difficulty": "Easy",
    "question": "The professor urged that each student _______ present at the orientation lecture on Monday.",
    "options": [
      "be",
      "is",
      "was",
      "are"
    ],
    "correctIndex": 0,
    "englishExplanation": "Urging actions uses the subjunctive 'be'.",
    "urduExplanation": "'Urge that' \u06a9\u06d2 \u0628\u0639\u062f \u0633\u0628\u062c\u06cc\u06a9\u0679\u0648 \u0645\u06cc\u06ba 'be' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-11",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "It is desirable that the international conference delegate _______ fluent English and French.",
    "options": [
      "speak",
      "speaks",
      "spoke",
      "is speaking"
    ],
    "correctIndex": 0,
    "englishExplanation": "'It is desirable that' takes the base subjunctive ('speak').",
    "urduExplanation": "'It is desirable that' \u06a9\u06d2 \u0628\u0639\u062f \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 'speak' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-12",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The head coach requested that the team captain _______ the post-game press briefing.",
    "options": [
      "attend",
      "attends",
      "attended",
      "will attend"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Request that' takes base form subjunctive ('attend').",
    "urduExplanation": "'Request that' \u06a9\u06d2 \u0628\u0639\u062f \u0633\u0646\u06af\u0648\u0644\u0631 \u0633\u0628\u062c\u06cc\u06a9\u0679 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0628\u06be\u06cc \u0628\u063a\u06cc\u0631 's' \u06a9\u06d2 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-13",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "God _______ the Queen is an ancient formulaic subjunctive expression still used in ceremony.",
    "options": [
      "save",
      "saves",
      "saved",
      "is saving"
    ],
    "correctIndex": 0,
    "englishExplanation": "Formulaic subjunctive expressions preserve archaic base verb forms ('save').",
    "urduExplanation": "\u062f\u0639\u0627\u0626\u06cc\u06c1 \u0627\u0648\u0631 \u0631\u0633\u0645\u06cc \u0641\u0642\u0631\u0648\u06ba \u0645\u06cc\u06ba \u0641\u0627\u0631\u0645\u0648\u0644\u0627\u0626\u06a9 \u0633\u0628\u062c\u06cc\u06a9\u0679\u0648 ('save') \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-14",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The wildlife conservation director requested that rangers _______ nocturnal patrols in the reserve.",
    "options": [
      "conduct",
      "conducts",
      "conducted",
      "conducting"
    ],
    "correctIndex": 0,
    "englishExplanation": "Mandative subjunctive after 'requested that' takes bare infinitive 'conduct'.",
    "urduExplanation": "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u06a9\u06d2 \u062c\u0645\u0644\u06d2 \u0645\u06cc\u06ba 'that' \u06a9\u06d2 \u0628\u0639\u062f \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 'conduct' \u062f\u0631\u0633\u062a \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-15",
    "category": "Subjunctive",
    "difficulty": "Hard",
    "question": "It is vital that the clean water filtration plant _______ operational during the flood emergency.",
    "options": [
      "remain",
      "remains",
      "remained",
      "is remaining"
    ],
    "correctIndex": 0,
    "englishExplanation": "'It is vital that' takes the bare base form ('remain').",
    "urduExplanation": "'It is vital that' \u06a9\u06d2 \u0628\u0639\u062f \u0633\u0628\u062c\u06cc\u06a9\u0679\u0648 \u0645\u06cc\u06ba 'remain' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-sub-16",
    "category": "Subjunctive",
    "difficulty": "Medium",
    "question": "The audit committee recommended that internal reporting procedures _______ formally revised.",
    "options": [
      "be",
      "are",
      "were",
      "have been"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive mandative subjunctive requires 'be + past participle'.",
    "urduExplanation": "\u0633\u0628\u062c\u06cc\u06a9\u0679\u0648 \u067e\u06cc\u0633\u06cc\u0648 \u0645\u06cc\u06ba 'be' \u06a9\u06cc \u0628\u0646\u06cc\u0627\u062f\u06cc \u0634\u06a9\u0644 \u0622\u062a\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-01",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "In environmental science, the word 'depletion' is closest in meaning to _______.",
    "options": [
      "exhaustion",
      "expansion",
      "creation",
      "preservation"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Depletion' means the reduction or exhaustion of natural resources.",
    "urduExplanation": "'Depletion' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0642\u062f\u0631\u062a\u06cc \u0648\u0633\u0627\u0626\u0644 \u06a9\u0627 \u062e\u062a\u0645 \u06c1\u0648\u0646\u0627 \u06cc\u0627 \u06a9\u0645\u06cc \u0622\u0646\u0627 (Exhaustion) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-02",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "When organizing a community fundraiser, finding a suitable venue is considered _______.",
    "options": [
      "paramount",
      "trivial",
      "negligible",
      "secondary"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Paramount' means of supreme importance, dominant, or primary.",
    "urduExplanation": "'Paramount' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0627\u0648\u0644\u06cc\u0646 \u0627\u06c1\u0645\u06cc\u062a \u06a9\u0627 \u062d\u0627\u0645\u0644 \u06cc\u0627 \u0633\u0628 \u0633\u06d2 \u0636\u0631\u0648\u0631\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-03",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The diplomat's approach to the negotiations was praised for being extremely _______.",
    "options": [
      "prudent",
      "rash",
      "hasty",
      "reckless"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Prudent' means showing wise foresight, discretion, and careful judgment.",
    "urduExplanation": "'Prudent' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u062f\u0627\u0646\u0634\u0645\u0646\u062f\u0627\u0646\u06c1\u060c \u0645\u062d\u062a\u0627\u0637 \u0627\u0648\u0631 \u062f\u0648\u0631 \u0627\u0646\u062f\u06cc\u0634 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-04",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "In everyday speech, an 'authentic' Persian rug is described as _______.",
    "options": [
      "genuine",
      "counterfeit",
      "synthetic",
      "artificial"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Authentic' means genuine, original, and not copied.",
    "urduExplanation": "'Authentic' \u06a9\u0627 \u06c1\u0645 \u0645\u0639\u0646\u06cc 'genuine' (\u0627\u0635\u0644\u06cc \u0627\u0648\u0631 \u06a9\u06be\u0631\u0627) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-05",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "The new public transit system proved remarkably _______ during peak morning rush hour.",
    "options": [
      "resilient",
      "fragile",
      "inflexible",
      "brittle"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Resilient' means capable of withstanding shock, stress, or disruption.",
    "urduExplanation": "'Resilient' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0645\u0636\u0628\u0648\u0637 \u0627\u0648\u0631 \u062f\u0628\u0627\u0624 \u06a9\u0648 \u0628\u0631\u062f\u0627\u0634\u062a \u06a9\u0631\u0646\u06d2 \u0648\u0627\u0644\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-06",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The scientist offered a _______ explanation that demystified the quantum physics problem.",
    "options": [
      "lucid",
      "opaque",
      "obscure",
      "convoluted"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Lucid' means clear, easily understood, and transparent.",
    "urduExplanation": "'Lucid' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0627\u0646\u062a\u06c1\u0627\u0626\u06cc \u0648\u0627\u0636\u062d \u0627\u0648\u0631 \u0622\u0633\u0627\u0646 \u0641\u06c1\u0645 (Clear) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-07",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "The tropical rainforest is famous for its _______ variety of plant and insect species.",
    "options": [
      "vast",
      "tiny",
      "meager",
      "scanty"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Vast' means immense, huge, or extensive in scope.",
    "urduExplanation": "'Vast' \u06a9\u0627 \u06c1\u0645 \u0645\u0639\u0646\u06cc \u0644\u0641\u0638 'immense' \u06cc\u0627 \u0648\u0633\u06cc\u0639 \u0648 \u0639\u0631\u06cc\u0636 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-08",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "The company's digital marketing strategy yielded _______ growth across three international markets.",
    "options": [
      "substantial",
      "negligible",
      "trivial",
      "insignificant"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Substantial' means considerable, notable, and of real worth.",
    "urduExplanation": "'Substantial' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0646\u0645\u0627\u06cc\u0627\u06ba\u060c \u0628\u0691\u0627 \u0627\u0648\u0631 \u0642\u0627\u0628\u0644\u0650 \u0630\u06a9\u0631 (Considerable) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-09",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The researcher carried out a _______ examination of ancient historical manuscripts.",
    "options": [
      "meticulous",
      "careless",
      "cursory",
      "superficial"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Meticulous' means showing great attention to detail, thorough and precise.",
    "urduExplanation": "'Meticulous' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0627\u0646\u062a\u06c1\u0627\u0626\u06cc \u0628\u0627\u0631\u06cc\u06a9 \u0628\u06cc\u0646 \u0627\u0648\u0631 \u0645\u062d\u062a\u0627\u0637 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-10",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "After the storm cleared, the alpine mountain lake appeared completely _______.",
    "options": [
      "tranquil",
      "turbulent",
      "chaotic",
      "furious"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Tranquil' means calm, peaceful, and free from disturbance.",
    "urduExplanation": "'Tranquil' \u06a9\u0627 \u06c1\u0645 \u0645\u0639\u0646\u06cc 'calm' \u0627\u0648\u0631 \u067e\u0631\u0633\u06a9\u0648\u0646 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-11",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "The doctor warned that sleep deprivation can _______ memory retention and focus.",
    "options": [
      "impair",
      "enhance",
      "strengthen",
      "boost"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Impair' means to weaken or damage something in its quality or function.",
    "urduExplanation": "'Impair' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06a9\u0633\u06cc \u0686\u06cc\u0632 \u06a9\u0648 \u0646\u0642\u0635\u0627\u0646 \u067e\u06c1\u0646\u0686\u0627\u0646\u0627 \u06cc\u0627 \u06a9\u0645\u0632\u0648\u0631 \u06a9\u0631\u0646\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-12",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The old typewriter became _______ once portable personal computers became universally affordable.",
    "options": [
      "obsolete",
      "fashionable",
      "contemporary",
      "modern"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Obsolete' means no longer produced or used, out of date.",
    "urduExplanation": "'Obsolete' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u067e\u0631\u0627\u0646\u0627\u060c \u0645\u062a\u0631\u0648\u06a9 \u0627\u0648\u0631 \u063a\u06cc\u0631 \u0645\u0633\u062a\u0639\u0645\u0644 (Outdated) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-13",
    "category": "Synonyms",
    "difficulty": "Easy",
    "question": "The community garden began to _______ once irrigation pipelines were properly installed.",
    "options": [
      "flourish",
      "wither",
      "decay",
      "decline"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Flourish' means to grow or develop in a healthy or vigorous way; thrive.",
    "urduExplanation": "'Flourish' \u06a9\u0627 \u06c1\u0645 \u0645\u0639\u0646\u06cc 'thrive' (\u067e\u06be\u0644\u0646\u0627 \u067e\u06be\u0648\u0644\u0646\u0627) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-14",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "Her remarks during the team brainstorming session were praised for being straightforward and _______.",
    "options": [
      "candid",
      "deceptive",
      "evasive",
      "ambiguous"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Candid' means truthful, frank, and straightforward.",
    "urduExplanation": "'Candid' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0635\u0627\u0641 \u06af\u0648 \u0627\u0648\u0631 \u0633\u0686\u0627 (Frank / Honest) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-15",
    "category": "Synonyms",
    "difficulty": "Hard",
    "question": "The architectural design was celebrated for its _______ blend of modern and classical styles.",
    "options": [
      "harmonious",
      "discordant",
      "clashing",
      "jarring"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Harmonious' means forming a pleasing or consistent whole.",
    "urduExplanation": "'Harmonious' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u0645 \u0622\u06c1\u0646\u06af \u0627\u0648\u0631 \u062e\u0648\u0634\u06af\u0648\u0627\u0631 \u0627\u0645\u062a\u0632\u0627\u062c \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-syn-16",
    "category": "Synonyms",
    "difficulty": "Medium",
    "question": "The independent auditing firm verified that the financial records were completely _______.",
    "options": [
      "accurate",
      "flawed",
      "erroneous",
      "deceptive"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Accurate' means correct in all details, exact and error-free.",
    "urduExplanation": "'Accurate' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0628\u0627\u0644\u06a9\u0644 \u062f\u0631\u0633\u062a \u0627\u0648\u0631 \u0628\u06d2 \u0639\u06cc\u0628 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-01",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "In health and lifestyle discussions, the antonym of 'sedentary' (desk-bound) is _______.",
    "options": [
      "active",
      "motionless",
      "sluggish",
      "dormant"
    ],
    "correctIndex": 0,
    "englishExplanation": "The opposite of sedentary (inactive, sitting much of the time) is active.",
    "urduExplanation": "'Sedentary' (\u0628\u06cc\u0679\u06be \u06a9\u0631 \u0648\u0642\u062a \u06af\u0632\u0627\u0631\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0637\u0631\u0632 \u0632\u0646\u062f\u06af\u06cc) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'active' (\u0645\u062a\u062d\u0631\u06a9) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-02",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "In environmental geography, the antonym of 'abundant' resources is _______.",
    "options": [
      "scarce",
      "copious",
      "plentiful",
      "ample"
    ],
    "correctIndex": 0,
    "englishExplanation": "The antonym of abundant (existing in large quantities) is scarce.",
    "urduExplanation": "'Abundant' (\u0648\u0627\u0641\u0631 \u0645\u0642\u062f\u0627\u0631) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'scarce' (\u06a9\u0645\u06cc\u0627\u0628 \u06cc\u0627 \u0646\u0627\u06cc\u0627\u0628) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-03",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "The scientific report was praised for its objective approach; the antonym of 'objective' is _______.",
    "options": [
      "biased",
      "impartial",
      "neutral",
      "unprejudiced"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Objective' (unbiased, factual) has the direct opposite 'biased' or 'subjective'.",
    "urduExplanation": "'Objective' (\u063a\u06cc\u0631 \u062c\u0627\u0646\u0628\u062f\u0627\u0631) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'biased' (\u0637\u0631\u0641\u062f\u0627\u0631 \u06cc\u0627 \u0645\u062a\u0639\u0635\u0628) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-04",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "The ceramic antique teapot is remarkably fragile; the antonym of 'fragile' is _______.",
    "options": [
      "sturdy",
      "delicate",
      "brittle",
      "weak"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Fragile' (easily broken) is antonymous to 'sturdy' or 'durable'.",
    "urduExplanation": "'Fragile' (\u0646\u0627\u0632\u06a9 \u0627\u0648\u0631 \u062c\u0644\u062f\u06cc \u0679\u0648\u0679\u0646\u06d2 \u0648\u0627\u0644\u0627) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'sturdy' (\u0645\u0636\u0628\u0648\u0637) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-05",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "In meteorological forecasts, the opposite of 'turbulent' air is _______.",
    "options": [
      "calm",
      "stormy",
      "chaotic",
      "gusty"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Turbulent' (characterized by unrest and violent disorder) is opposite to 'calm'.",
    "urduExplanation": "'Turbulent' (\u0637\u0648\u0641\u0627\u0646\u06cc \u0627\u0648\u0631 \u0628\u06d2 \u0686\u06cc\u0646) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'calm' (\u067e\u0631\u0633\u06a9\u0648\u0646) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-06",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "The software terms of service were intentionally ambiguous; the opposite of 'ambiguous' is _______.",
    "options": [
      "explicit",
      "vague",
      "nebulous",
      "equivocal"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Ambiguous' (having double or unclear meaning) is opposite to 'explicit' (stated clearly).",
    "urduExplanation": "'Ambiguous' (\u0645\u0628\u06c1\u0645) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'explicit' (\u0628\u0627\u0644\u06a9\u0644 \u0648\u0627\u0636\u062d \u0627\u0648\u0631 \u062f\u0648 \u0679\u0648\u06a9) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-07",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "In economics, the antonym of 'mandatory' regulations is _______.",
    "options": [
      "optional",
      "compulsory",
      "statutory",
      "obligatory"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Mandatory' (required by law) has the antonym 'optional'.",
    "urduExplanation": "'Mandatory' (\u0644\u0627\u0632\u0645\u06cc) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'optional' (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-08",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "The new manager has a very lenient approach to office hours; the opposite of 'lenient' is _______.",
    "options": [
      "strict",
      "tolerant",
      "forgiving",
      "indulgent"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Lenient' (permissive, merciful) is opposite to 'strict' or 'stringent'.",
    "urduExplanation": "'Lenient' (\u0646\u0631\u0645 \u0645\u0632\u0627\u062c \u0627\u0648\u0631 \u0631\u0639\u0627\u06cc\u062a \u062f\u06cc\u0646\u06d2 \u0648\u0627\u0644\u0627) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'strict' (\u0633\u062e\u062a \u06af\u06cc\u0631) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-09",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "In psychology, the opposite of 'ephemeral' (short-lived feelings) is _______.",
    "options": [
      "permanent",
      "transient",
      "fleeting",
      "momentary"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Ephemeral' (lasting a very short time) is opposite to 'permanent' or 'enduring'.",
    "urduExplanation": "'Ephemeral' (\u0639\u0627\u0631\u0636\u06cc \u0627\u0648\u0631 \u0686\u0646\u062f \u0644\u0645\u062d\u0648\u06ba \u06a9\u0627) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'permanent' (\u062f\u0627\u0626\u0645\u06cc \u0627\u0648\u0631 \u0645\u0633\u062a\u0642\u0644) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-10",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "The young student is known for being extremely humble; the antonym of 'humble' is _______.",
    "options": [
      "arrogant",
      "modest",
      "courteous",
      "respectful"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Humble' (modest) is opposite to 'arrogant' or 'haughty'.",
    "urduExplanation": "'Humble' (\u0639\u0627\u062c\u0632\u0627\u0646\u06c1) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'arrogant' (\u0645\u063a\u0631\u0648\u0631) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-11",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "In urban planning, the antonym of 'dense' population centers is _______.",
    "options": [
      "sparse",
      "crowded",
      "congested",
      "compact"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Dense' (closely packed together) is opposite to 'sparse' (thinly dispersed).",
    "urduExplanation": "'Dense' (\u06af\u0646\u062c\u0627\u0646 \u0622\u0628\u0627\u062f) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'sparse' (\u067e\u0631\u0627\u06af\u0646\u062f\u06c1 \u06cc\u0627 \u06a9\u0645 \u0622\u0628\u0627\u062f) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-12",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "The team gave a perfunctory review of the manuscript; the antonym of 'perfunctory' is _______.",
    "options": [
      "thorough",
      "cursory",
      "careless",
      "superficial"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Perfunctory' (carried out with minimum effort or reflection) is opposite to 'thorough'.",
    "urduExplanation": "'Perfunctory' (\u0633\u0631\u0631\u0633\u06cc \u0627\u0648\u0631 \u0628\u06d2 \u062f\u0644\u06cc \u0633\u06d2 \u06a9\u06cc\u0627 \u06af\u06cc\u0627) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'thorough' (\u062c\u0627\u0645\u0639 \u0627\u0648\u0631 \u06af\u06c1\u0631\u0627) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-13",
    "category": "Antonyms",
    "difficulty": "Easy",
    "question": "The mountain air in the morning is remarkably pure; the antonym of 'pure' is _______.",
    "options": [
      "contaminated",
      "clean",
      "fresh",
      "unblemished"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Pure' (clean, unadulterated) has the antonym 'contaminated' or 'polluted'.",
    "urduExplanation": "'Pure' (\u062e\u0627\u0644\u0635 \u0627\u0648\u0631 \u0635\u0627\u0641) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'contaminated' (\u0622\u0644\u0648\u062f\u06c1) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-14",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "The athletic trainer praised the athlete's flexibility; the antonym of 'flexible' is _______.",
    "options": [
      "rigid",
      "pliable",
      "elastic",
      "supple"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Flexible' (adaptable, easily bent) is opposite to 'rigid' or 'stiff'.",
    "urduExplanation": "'Flexible' (\u0644\u0686\u06a9\u062f\u0627\u0631) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'rigid' (\u0633\u062e\u062a \u0627\u0648\u0631 \u063a\u06cc\u0631 \u0644\u0686\u06a9\u062f\u0627\u0631) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-15",
    "category": "Antonyms",
    "difficulty": "Hard",
    "question": "The country experienced a period of economic boom; the antonym of 'prosperity' is _______.",
    "options": [
      "adversity",
      "wealth",
      "affluence",
      "fortune"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Prosperity' (wealth and good fortune) has the antonym 'adversity' or 'poverty'.",
    "urduExplanation": "'Prosperity' (\u062e\u0648\u0634\u062d\u0627\u0644\u06cc) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'adversity' (\u062a\u0646\u06af\u062f\u0633\u062a\u06cc \u06cc\u0627 \u0628\u062f\u062d\u0627\u0644\u06cc) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-ant-16",
    "category": "Antonyms",
    "difficulty": "Medium",
    "question": "The commercial company recorded a net profit this year; the antonym of 'profit' is _______.",
    "options": [
      "loss",
      "revenue",
      "dividend",
      "surplus"
    ],
    "correctIndex": 0,
    "englishExplanation": "In commercial accounts, the direct opposite of 'profit' is 'loss'.",
    "urduExplanation": "'Profit' (\u0645\u0646\u0627\u0641\u0639) \u06a9\u0627 \u0645\u062a\u0636\u0627\u062f 'loss' (\u0646\u0642\u0635\u0627\u0646 \u06cc\u0627 \u062e\u0633\u0627\u0631\u06c1) \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-01",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "If you leave early for the international airport, you _______ avoid the morning traffic jams.",
    "options": [
      "will",
      "would",
      "did",
      "have"
    ],
    "correctIndex": 0,
    "englishExplanation": "First conditional uses 'If + present simple' paired with 'will + bare infinitive'.",
    "urduExplanation": "\u067e\u06c1\u0644\u06cc \u0634\u0631\u0637 \u0645\u06cc\u06ba 'If + present simple' \u06a9\u06d2 \u0633\u0627\u062a\u06be 'will' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-02",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "If I had known about the train cancellation, I _______ the express bus instead.",
    "options": [
      "would have taken",
      "took",
      "will take",
      "take"
    ],
    "correctIndex": 0,
    "englishExplanation": "Third conditional requires 'would have + past participle' in the result clause for hypothetical pasts.",
    "urduExplanation": "\u062a\u06be\u0631\u0688 \u06a9\u0646\u0688\u06cc\u0634\u0646\u0644 \u06a9\u06d2 \u0646\u062a\u06cc\u062c\u06c1 \u0648\u0627\u0644\u06d2 \u062d\u0635\u06d2 \u0645\u06cc\u06ba 'would have + 3rd form' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-03",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "If the city council _______ more public parks in the downtown district, urban air quality would improve.",
    "options": [
      "created",
      "creates",
      "will create",
      "had created"
    ],
    "correctIndex": 0,
    "englishExplanation": "Second conditional requires past simple ('created') in the if-clause with 'would + verb' in the main clause.",
    "urduExplanation": "\u0633\u06cc\u06a9\u0646\u0688 \u06a9\u0646\u0688\u06cc\u0634\u0646\u0644 \u06a9\u06d2 \u0634\u0631\u0637 \u0648\u0627\u0644\u06d2 \u062d\u0635\u06d2 \u0645\u06cc\u06ba Past Simple ('created') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-04",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "If you heat ice above zero degrees Celsius, it _______ into liquid water.",
    "options": [
      "melts",
      "melted",
      "will melt",
      "would melt"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional expresses constant scientific truth using present simple in both clauses.",
    "urduExplanation": "\u0633\u0627\u0626\u0646\u0633\u06cc \u0633\u0686\u0627\u0626\u06cc\u0648\u06ba \u06a9\u06d2 \u0644\u06cc\u06d2 \u0632\u06cc\u0631\u0648 \u06a9\u0646\u0688\u06cc\u0634\u0646\u0644 \u0645\u06cc\u06ba \u062f\u0648\u0646\u0648\u06ba \u0637\u0631\u0641 Present Simple \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-05",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "If she had taken the medical scholarship in London, she _______ a licensed neurosurgeon today.",
    "options": [
      "would be",
      "will be",
      "had been",
      "is"
    ],
    "correctIndex": 0,
    "englishExplanation": "Mixed conditional: past hypothetical action ('had taken') with a present result ('would be... today').",
    "urduExplanation": "\u0645\u06a9\u0633\u0688 \u06a9\u0646\u0688\u06cc\u0634\u0646\u0644 \u0645\u06cc\u06ba \u0645\u0627\u0636\u06cc \u06a9\u06cc \u0634\u0631\u0637 \u06a9\u0627 \u0627\u062b\u0631 \u062d\u0627\u0644 \u067e\u0631 \u0638\u0627\u06c1\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'would be... today' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-06",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "You _______ have left your keys on the kitchen counter because they aren't in your jacket pocket.",
    "options": [
      "must",
      "should",
      "would",
      "shall"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Must have + past participle' expresses logical certainty based on strong evidence in the present.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u06a9\u06d2 \u0648\u0627\u0642\u0639\u06d2 \u067e\u0631 \u067e\u062e\u062a\u06c1 \u06cc\u0642\u06cc\u0646 \u0627\u0648\u0631 \u0642\u06cc\u0627\u0633 \u06a9\u06d2 \u0644\u06cc\u06d2 'must have left' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-07",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "He _______ have arrived in Tokyo already; his flight only departed two hours ago.",
    "options": [
      "cannot",
      "must",
      "should",
      "might"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Cannot have + past participle' expresses logical impossibility in the past.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u0645\u06cc\u06ba \u06a9\u0633\u06cc \u06a9\u0627\u0645 \u06a9\u06d2 \u0646\u0627 \u0645\u0645\u06a9\u0646 \u06c1\u0648\u0646\u06d2 \u06a9\u0627 \u06cc\u0642\u06cc\u0646 \u0638\u0627\u06c1\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'cannot have' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-08",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "Unless it _______ raining by noon, the community outdoor soccer match will be rescheduled.",
    "options": [
      "stops",
      "stopped",
      "will stop",
      "is stopping"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Unless' meaning 'if not' takes the present simple tense ('stops') when referring to future conditions.",
    "urduExplanation": "'Unless' \u0648\u0627\u0644\u06d2 \u06a9\u0644\u0627\u0632 \u0645\u06cc\u06ba \u0645\u0633\u062a\u0642\u0628\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 Present Simple ('stops') \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-09",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "Had you informed me about the flight schedule alteration earlier, I _______ waiting at the arrivals gate.",
    "options": [
      "would not have been",
      "will not be",
      "am not",
      "was not"
    ],
    "correctIndex": 0,
    "englishExplanation": "Inverted third conditional with a continuous result clause takes 'would not have been waiting'.",
    "urduExplanation": "\u062a\u06be\u0631\u0688 \u06a9\u0646\u0688\u06cc\u0634\u0646\u0644 \u06a9\u0646\u0679\u06cc\u0646\u06cc\u0648\u0633 \u0645\u06cc\u06ba 'would not have been waiting' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-10",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "You ought to _______ your physician before starting any rigorous dietary regimen.",
    "options": [
      "consult",
      "to consult",
      "consulting",
      "consulted"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Ought to' is followed by a bare infinitive ('consult').",
    "urduExplanation": "'Ought to' \u06a9\u06d2 \u0628\u0639\u062f \u0628\u0646\u06cc\u0627\u062f\u06cc \u0641\u0639\u0644 ('consult') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-11",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "If it _______ for the lifeguard's immediate intervention, the young swimmer would have drowned.",
    "options": [
      "had not been",
      "were not",
      "is not",
      "has not been"
    ],
    "correctIndex": 0,
    "englishExplanation": "'If it had not been for...' is the standard counterfactual past conditional construction.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u0645\u06cc\u06ba \u06a9\u0633\u06cc \u06a9\u06cc \u0645\u062f\u062f \u06cc\u0627 \u0645\u062f\u0627\u062e\u0644\u062a \u06a9\u06cc \u0646\u0641\u06cc \u06a9\u06d2 \u0644\u06cc\u06d2 'If it had not been for' \u0628\u0648\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-12",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "You _______ show your photographic identity card before boarding the passenger ferry.",
    "options": [
      "must",
      "might",
      "could",
      "would"
    ],
    "correctIndex": 0,
    "englishExplanation": "Strong obligation or regulation is expressed by the modal 'must'.",
    "urduExplanation": "\u0644\u0627\u0632\u0645\u06cc \u0636\u0627\u0628\u0637\u06d2 \u0627\u0648\u0631 \u067e\u0627\u0628\u0646\u062f\u06cc \u06a9\u06d2 \u0644\u06cc\u06d2 'must' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-13",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "If I were in your position, I _______ enroll in the advanced data science certification course.",
    "options": [
      "would",
      "will",
      "can",
      "shall"
    ],
    "correctIndex": 0,
    "englishExplanation": "'If I were you/in your position' expressing advice takes 'would + verb'.",
    "urduExplanation": "\u0645\u0634\u0648\u0631\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'If I were in your position' \u06a9\u06d2 \u0633\u0627\u062a\u06be 'would' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-14",
    "category": "Modal Conditionals",
    "difficulty": "Hard",
    "question": "We _______ have purchased the concert tickets online, as the stadium box office was completely sold out.",
    "options": [
      "should",
      "would",
      "must",
      "might"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Should have + past participle' expresses past advisability or regret about an action that was not taken.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u0645\u06cc\u06ba \u06a9\u0633\u06cc \u0627\u0686\u06be\u06d2 \u06a9\u0627\u0645 \u06a9\u06d2 \u0646\u06c1 \u06c1\u0648\u0646\u06d2 \u067e\u0631 \u067e\u0686\u06be\u062a\u0627\u0648\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'should have purchased' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-15",
    "category": "Modal Conditionals",
    "difficulty": "Easy",
    "question": "Passengers _______ smoke inside the passenger cabin under any circumstances.",
    "options": [
      "must not",
      "need not",
      "might not",
      "could not"
    ],
    "correctIndex": 0,
    "englishExplanation": "Absolute prohibition is expressed by 'must not'.",
    "urduExplanation": "\u0633\u062e\u062a \u0645\u0645\u0627\u0646\u0639\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 'must not' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-mod-16",
    "category": "Modal Conditionals",
    "difficulty": "Medium",
    "question": "If the company _______ the budget forecast, it will expand its hiring next quarter.",
    "options": [
      "meets",
      "met",
      "will meet",
      "had met"
    ],
    "correctIndex": 0,
    "englishExplanation": "First conditional uses present simple ('meets') in the conditional clause.",
    "urduExplanation": "\u067e\u06c1\u0644\u06cc \u0634\u0631\u0637 \u0645\u06cc\u06ba 'if' \u06a9\u06d2 \u0633\u0627\u062a\u06be Present Simple ('meets') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-01",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "The historic stone bridge _______ by local master craftsmen in 1885.",
    "options": [
      "was constructed",
      "constructed",
      "has constructed",
      "was constructing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past simple passive ('was constructed') is used with a specific past time marker ('in 1885').",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u06a9\u06d2 \u0645\u062e\u0635\u0648\u0635 \u0633\u0627\u0644 (1885) \u0645\u06cc\u06ba \u062a\u0639\u0645\u06cc\u0631 \u06a9\u06d2 \u0644\u06cc\u06d2 Past Simple Passive ('was constructed') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-02",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "Automated security updates _______ automatically on all university computers overnight.",
    "options": [
      "are installed",
      "install",
      "installed",
      "were installing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present simple passive ('are installed') describes routine automated procedures.",
    "urduExplanation": "\u0631\u0648\u0632\u0645\u0631\u06c1 \u06a9\u06d2 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0645\u0639\u0645\u0648\u0644\u0627\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 Present Simple Passive \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-03",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "The ancient sunken shipwreck is believed _______ by an underwater earthquake over two thousand years ago.",
    "options": [
      "to have been sunk",
      "to sink",
      "to be sunk",
      "having sunk"
    ],
    "correctIndex": 0,
    "englishExplanation": "Reporting passive with a past event takes the perfect passive infinitive ('to have been sunk').",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u0628\u0639\u06cc\u062f \u06a9\u06d2 \u0648\u0627\u0642\u0639\u06d2 \u06a9\u06cc \u0631\u067e\u0648\u0631\u0679\u0646\u06af \u06a9\u06d2 \u0644\u06cc\u06d2 Perfect Passive Infinitive ('to have been sunk') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-04",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "Millions of organic fair-trade coffee beans _______ in Latin America every year.",
    "options": [
      "are harvested",
      "harvest",
      "were harvested",
      "harvested"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present simple passive ('are harvested') denotes annual agricultural routines.",
    "urduExplanation": "\u0633\u0627\u0644\u0627\u0646\u06c1 \u067e\u06cc\u062f\u0627\u0648\u0627\u0631 \u0627\u0648\u0631 \u0632\u0631\u0639\u06cc \u0645\u0639\u0645\u0648\u0644\u0627\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 Present Simple Passive \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-05",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "The new pediatric hospital wing _______ by the prime minister next month.",
    "options": [
      "will be inaugurated",
      "inaugurates",
      "will inaugurate",
      "has inaugurated"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future passive ('will be inaugurated') denotes a scheduled future official ceremony.",
    "urduExplanation": "\u0645\u0633\u062a\u0642\u0628\u0644 \u06a9\u06cc \u0628\u0627\u0636\u0627\u0628\u0637\u06c1 \u062a\u0642\u0631\u06cc\u0628 \u06a9\u06d2 \u0644\u06cc\u06d2 Future Passive ('will be inaugurated') \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-06",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "The missing expedition diary _______ to have been preserved in a sealed ceramic jar.",
    "options": [
      "is said",
      "says",
      "said",
      "has said"
    ],
    "correctIndex": 0,
    "englishExplanation": "Impersonal reporting passive ('is said to have been...') expresses widespread historical belief.",
    "urduExplanation": "\u062a\u0627\u0631\u06cc\u062e\u06cc \u0631\u0648\u0627\u06cc\u0627\u062a \u06a9\u0648 \u0628\u06cc\u0627\u0646 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u067e\u06cc\u0633\u06cc\u0648 \u0631\u067e\u0648\u0631\u0679\u0646\u06af \u0648\u0631\u0628 'is said' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-07",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "All laboratory equipment must _______ thoroughly sanitized before each chemistry experiment.",
    "options": [
      "be",
      "is",
      "was",
      "being"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal passive requires 'modal + be + past participle'.",
    "urduExplanation": "\u0645\u0627\u0688\u0644 \u0648\u0631\u0628 'must' \u06a9\u06d2 \u0628\u0639\u062f \u067e\u06cc\u0633\u0648 \u0648\u0627\u0626\u0633 \u0645\u06cc\u06ba 'be' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-08",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "While the concert hall was _______ renovated, symphony rehearsals took place in the school gymnasium.",
    "options": [
      "being",
      "been",
      "be",
      "having been"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past continuous passive requires 'was/were + being + past participle'.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u0645\u06cc\u06ba \u062c\u0627\u0631\u06cc \u06a9\u0627\u0645 \u06a9\u06d2 \u067e\u06cc\u0633\u06cc\u0648 \u0648\u0627\u0626\u0633 \u06a9\u06d2 \u0644\u06cc\u06d2 'was being renovated' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-09",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "The archaeological discovery _______ by the scientific academy before news reached the press.",
    "options": [
      "had been authenticated",
      "authenticated",
      "has been authenticated",
      "was authenticating"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past perfect passive ('had been authenticated') indicates completion prior to another past event.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u06a9\u06d2 \u062f\u0648\u0633\u0631\u06d2 \u0648\u0627\u0642\u0639\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0645\u06a9\u0645\u0644 \u06c1\u0648\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0639\u0645\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 Past Perfect Passive \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-10",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "Penicillin _______ by Alexander Fleming in 1928, revolutionizing modern medicine.",
    "options": [
      "was discovered",
      "discovered",
      "is discovered",
      "has discovered"
    ],
    "correctIndex": 0,
    "englishExplanation": "Historical scientific discoveries with past dates use the past simple passive ('was discovered').",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u06a9\u06cc \u0633\u0627\u0626\u0646\u0633\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 Past Simple Passive ('was discovered') \u062f\u0631\u0633\u062a \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-11",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "New electric charging stations _______ across the national highway network since January.",
    "options": [
      "have been installed",
      "are installed",
      "were installed",
      "installed"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present perfect passive ('have been installed') with 'since' links recent developments to the present.",
    "urduExplanation": "'Since January' \u06a9\u06d2 \u0633\u0627\u062a\u06be \u062c\u0627\u0631\u06cc \u06cc\u0627 \u0645\u06a9\u0645\u0644 \u0639\u0645\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 Present Perfect Passive \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-12",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "The endangered mountain gorillas are considered _______ from the brink of extinction.",
    "options": [
      "to have been rescued",
      "to rescue",
      "to be rescuing",
      "having rescued"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive infinitive after reporting verb takes 'to have been rescued' for completed actions.",
    "urduExplanation": "\u0645\u06a9\u0645\u0644 \u0634\u062f\u06c1 \u0639\u0645\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 \u067e\u06cc\u0633\u06cc\u0648 \u0627\u0646\u0641\u06cc\u0646\u06cc\u0679\u0648 'to have been rescued' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-13",
    "category": "Active / Passive",
    "difficulty": "Easy",
    "question": "The library books should _______ returned on or before their due date.",
    "options": [
      "be",
      "are",
      "have",
      "being"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal passive takes 'should be + past participle'.",
    "urduExplanation": "\u0645\u0627\u0688\u0644 'should' \u06a9\u06d2 \u0628\u0639\u062f \u067e\u06cc\u0633\u06cc\u0648 \u0645\u06cc\u06ba 'be' \u0644\u06af\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-14",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "The wildlife documentary _______ narrated by a famous nature broadcaster.",
    "options": [
      "was",
      "did",
      "had",
      "has"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past simple passive requires auxiliary 'was' + past participle 'narrated'.",
    "urduExplanation": "\u067e\u06cc\u0633\u06cc\u0648 \u062c\u0645\u0644\u06d2 \u0645\u06cc\u06ba \u0645\u0639\u0627\u0648\u0646 \u0641\u0639\u0644 'was' \u0622\u0626\u06d2 \u06af\u0627\u06d4"
  },
  {
    "id": "gen-pas-15",
    "category": "Active / Passive",
    "difficulty": "Hard",
    "question": "Solar panels _______ widely manufactured across domestic facilities by the end of next year.",
    "options": [
      "will have been",
      "will be",
      "have been",
      "were"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future perfect passive ('will have been manufactured') marks completion prior to a future milestone.",
    "urduExplanation": "\u0645\u0633\u062a\u0642\u0628\u0644 \u06a9\u06d2 \u0648\u0642\u062a \u062a\u06a9 \u0645\u06a9\u0645\u0644 \u06c1\u0648 \u062c\u0627\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u067e\u06cc\u0633\u06cc\u0648 \u0639\u0645\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 Future Perfect Passive \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-pas-16",
    "category": "Active / Passive",
    "difficulty": "Medium",
    "question": "The quarterly financial ledger _______ thoroughly audited before filing tax returns.",
    "options": [
      "was",
      "is",
      "did",
      "has"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past passive takes auxiliary 'was' with past participle 'audited'.",
    "urduExplanation": "\u0645\u0627\u0636\u06cc \u06a9\u06d2 \u067e\u06cc\u0633\u06cc\u0648 \u0639\u0645\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 'was audited' \u062f\u0631\u0633\u062a \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-01",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "The marine biologist _______ groundbreaking research on coral bleaching won an international award.",
    "options": [
      "whose",
      "who",
      "whom",
      "which"
    ],
    "correctIndex": 0,
    "englishExplanation": "Possessive relative pronoun 'whose' connects the person ('marine biologist') to their research.",
    "urduExplanation": "\u0645\u0644\u06a9\u06cc\u062a \u06cc\u0627 \u06a9\u0627\u0645 \u06a9\u06cc \u0646\u0633\u0628\u062a \u0638\u0627\u06c1\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 relative pronoun 'whose' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-02",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "She is the talented chef _______ created the signature fusion dish at the culinary festival.",
    "options": [
      "who",
      "which",
      "whose",
      "where"
    ],
    "correctIndex": 0,
    "englishExplanation": "Subject relative pronoun 'who' refers to people ('chef').",
    "urduExplanation": "\u0627\u0646\u0633\u0627\u0646 \u06a9\u06cc \u0637\u0631\u0641 \u0628\u0637\u0648\u0631 \u0641\u0627\u0639\u0644 \u0627\u0634\u0627\u0631\u06c1 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'who' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-03",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The university laboratory, _______ we carried out our genetic sequencing experiments, has state-of-the-art microscopes.",
    "options": [
      "where",
      "which",
      "that",
      "whose"
    ],
    "correctIndex": 0,
    "englishExplanation": "Relative adverb 'where' refers to a physical location in which an activity takes place.",
    "urduExplanation": "\u06a9\u0633\u06cc \u062c\u06af\u06c1 \u067e\u0631 \u06a9\u0627\u0645 \u06c1\u0648\u0646\u06d2 \u06a9\u06cc \u0648\u0636\u0627\u062d\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 'where' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-04",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "The solar energy panels _______ were installed on the library roof generate surplus electricity.",
    "options": [
      "that",
      "who",
      "whom",
      "whose"
    ],
    "correctIndex": 0,
    "englishExplanation": "Defining relative pronoun 'that' (or 'which') refers to inanimate objects in restrictive clauses.",
    "urduExplanation": "\u0628\u06d2 \u062c\u0627\u0646 \u0627\u0634\u06cc\u0627\u0621 \u06a9\u06d2 \u0644\u06cc\u06d2 'that' \u06cc\u0627 'which' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-05",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "Professor Davis, _______ lectures on astrophysics attract hundreds of students, is retiring this semester.",
    "options": [
      "whose",
      "who",
      "whom",
      "which"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Whose' indicates possession within a non-defining relative clause.",
    "urduExplanation": "\u067e\u0631\u0648\u0641\u06cc\u0633\u0631 \u06a9\u06d2 \u0644\u06cc\u06a9\u0686\u0631\u0632 \u06a9\u06cc \u0645\u0644\u06a9\u06cc\u062a \u0628\u062a\u0627\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'whose' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-06",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The historical period _______ the industrial revolution flourished saw dramatic urbanization.",
    "options": [
      "when",
      "where",
      "which",
      "whose"
    ],
    "correctIndex": 0,
    "englishExplanation": "Relative adverb 'when' refers to an era or time period in which events transpired.",
    "urduExplanation": "\u0632\u0645\u0627\u0646\u06c1 \u06cc\u0627 \u0648\u0642\u062a \u06a9\u06cc \u0648\u0636\u0627\u062d\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 relative adverb 'when' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-07",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "The young software developer _______ the team hired last month has already optimized the database.",
    "options": [
      "whom",
      "whose",
      "which",
      "where"
    ],
    "correctIndex": 0,
    "englishExplanation": "Object relative pronoun 'whom' refers to a person acting as the object of 'hired'.",
    "urduExplanation": "\u062c\u0628 \u0627\u0646\u0633\u0627\u0646 \u0645\u0641\u0639\u0648\u0644 \u06a9\u06cc \u062c\u06af\u06c1 \u0622\u0626\u06d2 \u062a\u0648 \u0631\u0633\u0645\u06cc \u0627\u0646\u06af\u0631\u06cc\u0632\u06cc \u0645\u06cc\u06ba 'whom' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-08",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "The antique pocket watch _______ my grandfather gave me keeps precise time.",
    "options": [
      "which",
      "who",
      "whose",
      "where"
    ],
    "correctIndex": 0,
    "englishExplanation": "Relative pronoun 'which' refers to an object ('antique pocket watch').",
    "urduExplanation": "\u0686\u06cc\u0632\u0648\u06ba \u06a9\u06d2 \u0644\u06cc\u06d2 relative pronoun 'which' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-09",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The mountain village, _______ residents live to an average age of ninety, has a pristine natural environment.",
    "options": [
      "whose",
      "who",
      "whom",
      "where"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Whose' indicates possession connecting the village and its residents.",
    "urduExplanation": "\u06af\u0627\u0624\u06ba \u06a9\u06d2 \u0631\u06c1\u0627\u0626\u0634\u06cc\u0648\u06ba \u06a9\u0627 \u062a\u0639\u0644\u0642 \u0638\u0627\u06c1\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'whose' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-10",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "She couldn't remember the exact reason _______ the project meeting had been postponed.",
    "options": [
      "why",
      "which",
      "where",
      "whom"
    ],
    "correctIndex": 0,
    "englishExplanation": "Relative adverb 'why' naturally modifies 'the reason'.",
    "urduExplanation": "\u0644\u0641\u0638 'the reason' \u06a9\u06d2 \u0628\u0639\u062f \u0648\u062c\u06c1 \u0628\u06cc\u0627\u0646 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'why' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-11",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "This is the volunteer foundation _______ builds eco-friendly schools in rural provinces.",
    "options": [
      "that",
      "who",
      "whom",
      "where"
    ],
    "correctIndex": 0,
    "englishExplanation": "Organizations and institutions as single entities take 'that' or 'which'.",
    "urduExplanation": "\u062a\u0646\u0638\u06cc\u0645 \u06cc\u0627 \u0627\u062f\u0627\u0631\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'that' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-12",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The international committee, _______ members represent twenty-four nations, voted unanimously on the climate accord.",
    "options": [
      "whose",
      "who",
      "whom",
      "which"
    ],
    "correctIndex": 0,
    "englishExplanation": "Possessive relative pronoun 'whose' links 'committee' and 'members'.",
    "urduExplanation": "\u06a9\u0645\u06cc\u0679\u06cc \u06a9\u06d2 \u0627\u0631\u0627\u06a9\u06cc\u0646 \u06a9\u06cc \u0646\u0633\u0628\u062a \u0638\u0627\u06c1\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'whose' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-13",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "He recommended a secluded sandy cove _______ tourists rarely visit during off-peak season.",
    "options": [
      "which",
      "where",
      "when",
      "whose"
    ],
    "correctIndex": 0,
    "englishExplanation": "Direct object of transitive verb 'visit' takes 'which' (or 'that'), not 'where'.",
    "urduExplanation": "\u0641\u0639\u0644 'visit' \u06a9\u06d2 \u0628\u0631\u0627\u06c1 \u0631\u0627\u0633\u062a \u0645\u0641\u0639\u0648\u0644 \u06a9\u06d2 \u0644\u06cc\u06d2 'which' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-14",
    "category": "Relative Clauses",
    "difficulty": "Easy",
    "question": "The doctor _______ examined the patient in the emergency triage room was very reassuring.",
    "options": [
      "who",
      "which",
      "whose",
      "where"
    ],
    "correctIndex": 0,
    "englishExplanation": "'Who' is the subject pronoun referring to the doctor.",
    "urduExplanation": "\u0688\u0627\u06a9\u0679\u0631 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0641\u0627\u0639\u0644\u06cc \u062d\u0627\u0644\u062a \u0645\u06cc\u06ba 'who' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-15",
    "category": "Relative Clauses",
    "difficulty": "Hard",
    "question": "The university library contains over fifty thousand manuscripts, some _______ date back to the tenth century.",
    "options": [
      "of which",
      "of whom",
      "of that",
      "of whose"
    ],
    "correctIndex": 0,
    "englishExplanation": "Partitive relative structure 'some of which' refers to inanimate manuscripts in a non-defining clause.",
    "urduExplanation": "\u0628\u06d2 \u062c\u0627\u0646 \u0627\u0634\u06cc\u0627\u0621 \u06a9\u06d2 \u062d\u0635\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'some of which' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "gen-rel-16",
    "category": "Relative Clauses",
    "difficulty": "Medium",
    "question": "The commercial company _______ products dominate the electronics market is based in Seoul.",
    "options": [
      "whose",
      "who",
      "which",
      "where"
    ],
    "correctIndex": 0,
    "englishExplanation": "Possessive relative pronoun 'whose' shows that the products belong to the company.",
    "urduExplanation": "\u06a9\u0645\u067e\u0646\u06cc \u06a9\u06cc \u0645\u0635\u0646\u0648\u0639\u0627\u062a \u06a9\u06cc \u0646\u0633\u0628\u062a \u0638\u0627\u06c1\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'whose' \u062f\u0631\u0633\u062a \u06c1\u06d2\u06d4"
  }
];
