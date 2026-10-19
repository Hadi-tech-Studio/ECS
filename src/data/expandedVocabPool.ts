import { 
  VocabWordMatchItem, 
  VocabDefinitionItem, 
  VocabCollocationItem 
} from '../types';
import { APTIS_TEST_SET_1, APTIS_TEST_SET_2 } from './aptisMockData';

// ============================================================================
// VOCABULARY TASK 1: Word Matching / Synonyms (Target Word -> Synonym)
// Covers everyday life, education, health, tech, environment, travel, hobbies,
// work, relationships, and occasional business.
// ============================================================================
export const EXPANDED_VOCAB_MATCHING_POOL: VocabWordMatchItem[] = [
  ...APTIS_TEST_SET_1.core.vocabWordMatching,
  ...APTIS_TEST_SET_2.core.vocabWordMatching,
  {
    "id": "vm-gen-01",
    "targetWord": "abundant",
    "correctMatch": "plentiful",
    "options": [
      "plentiful",
      "scarce",
      "fragile",
      "hostile"
    ],
    "explanation": "'Abundant' means existing or available in large quantities; plentiful.",
    "urduExplanation": "'Abundant' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0648\u0627\u0641\u0631 \u0645\u0642\u062f\u0627\u0631 \u0645\u06cc\u06ba \u06c1\u0648\u0646\u0627 \u06cc\u0627 \u06a9\u062b\u06cc\u0631 (Plentiful) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-02",
    "targetWord": "resilient",
    "correctMatch": "tough",
    "options": [
      "tough",
      "fragile",
      "hesitant",
      "clumsy"
    ],
    "explanation": "'Resilient' describes the ability to recover quickly from difficulties; tough.",
    "urduExplanation": "'Resilient' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0645\u0634\u06a9\u0644\u0627\u062a \u06a9\u0627 \u062c\u0648\u0627\u0646\u0645\u0631\u062f\u06cc \u0633\u06d2 \u0645\u0642\u0627\u0628\u0644\u06c1 \u06a9\u0631\u0646\u06d2 \u0648\u0627\u0644\u0627 \u06cc\u0627 \u0645\u0636\u0628\u0648\u0637 (Tough) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-03",
    "targetWord": "hazardous",
    "correctMatch": "perilous",
    "options": [
      "perilous",
      "peaceful",
      "beneficial",
      "delightful"
    ],
    "explanation": "'Hazardous' means risky or dangerous; perilous.",
    "urduExplanation": "'Hazardous' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u062e\u0637\u0631\u0646\u0627\u06a9 \u06cc\u0627 \u0646\u0642\u0635\u0627\u0646 \u062f\u06c1 (Perilous) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-04",
    "targetWord": "tranquil",
    "correctMatch": "serene",
    "options": [
      "serene",
      "turbulent",
      "crowded",
      "hectic"
    ],
    "explanation": "'Tranquil' means calm, quiet, and peaceful; serene.",
    "urduExplanation": "'Tranquil' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u067e\u0631\u0633\u06a9\u0648\u0646 \u0627\u0648\u0631 \u062e\u0627\u0645\u0648\u0634 (Serene) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-05",
    "targetWord": "meticulous",
    "correctMatch": "thorough",
    "options": [
      "thorough",
      "careless",
      "hasty",
      "superficial"
    ],
    "explanation": "'Meticulous' means showing great attention to detail; thorough.",
    "urduExplanation": "'Meticulous' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0627\u0646\u062a\u06c1\u0627\u0626\u06cc \u0628\u0627\u0631\u06cc\u06a9 \u0628\u06cc\u0646 \u0627\u0648\u0631 \u0645\u062d\u062a\u0627\u0637 (Thorough) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-06",
    "targetWord": "obsolete",
    "correctMatch": "outdated",
    "options": [
      "outdated",
      "modern",
      "fashionable",
      "essential"
    ],
    "explanation": "'Obsolete' refers to something no longer produced or used; outdated.",
    "urduExplanation": "'Obsolete' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u067e\u0631\u0627\u0646\u0627 \u06cc\u0627 \u0645\u062a\u0631\u0648\u06a9 (Outdated) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-07",
    "targetWord": "profound",
    "correctMatch": "deep",
    "options": [
      "deep",
      "shallow",
      "trivial",
      "insignificant"
    ],
    "explanation": "'Profound' means having very great knowledge, meaning, or depth.",
    "urduExplanation": "'Profound' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06af\u06c1\u0631\u0627 \u0627\u0648\u0631 \u0645\u0639\u0646\u06cc \u062e\u06cc\u0632 (Deep) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-08",
    "targetWord": "diminish",
    "correctMatch": "decrease",
    "options": [
      "decrease",
      "expand",
      "multiply",
      "intensify"
    ],
    "explanation": "'Diminish' means to make or become less; decrease.",
    "urduExplanation": "'Diminish' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06a9\u0645 \u06c1\u0648\u0646\u0627 \u06cc\u0627 \u06af\u06be\u0679\u0646\u0627 (Decrease) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-09",
    "targetWord": "thrive",
    "correctMatch": "prosper",
    "options": [
      "prosper",
      "deteriorate",
      "decline",
      "stagnate"
    ],
    "explanation": "'Thrive' means to grow or develop vigorously; prosper.",
    "urduExplanation": "'Thrive' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u067e\u06be\u0644\u0646\u0627 \u067e\u06be\u0648\u0644\u0646\u0627 \u0627\u0648\u0631 \u062a\u0631\u0642\u06cc \u06a9\u0631\u0646\u0627 (Prosper) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-10",
    "targetWord": "candid",
    "correctMatch": "frank",
    "options": [
      "frank",
      "evasive",
      "deceitful",
      "cautious"
    ],
    "explanation": "'Candid' means truthful and straightforward; frank.",
    "urduExplanation": "'Candid' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06a9\u06be\u0631\u0627 \u0627\u0648\u0631 \u0635\u0627\u0641 \u06af\u0648 (Frank) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-11",
    "targetWord": "versatile",
    "correctMatch": "adaptable",
    "options": [
      "adaptable",
      "rigid",
      "inflexible",
      "limited"
    ],
    "explanation": "'Versatile' means able to adapt to many different functions or activities.",
    "urduExplanation": "'Versatile' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u0631 \u0641\u0646 \u0645\u0648\u0644\u0627 \u06cc\u0627 \u06c1\u0631 \u0645\u0627\u062d\u0648\u0644 \u0645\u06cc\u06ba \u0688\u06be\u0644\u0646\u06d2 \u0648\u0627\u0644\u0627 (Adaptable) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-12",
    "targetWord": "lucid",
    "correctMatch": "clear",
    "options": [
      "clear",
      "vague",
      "murky",
      "confusing"
    ],
    "explanation": "'Lucid' means expressed clearly and easy to understand.",
    "urduExplanation": "'Lucid' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0648\u0627\u0636\u062d \u0627\u0648\u0631 \u0622\u0633\u0627\u0646 \u0641\u06c1\u0645 (Clear) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-13",
    "targetWord": "foster",
    "correctMatch": "nurture",
    "options": [
      "nurture",
      "discourage",
      "suppress",
      "neglect"
    ],
    "explanation": "'Foster' means to encourage or promote the development of something.",
    "urduExplanation": "'Foster' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u067e\u0631\u0648\u0631\u0634 \u06a9\u0631\u0646\u0627 \u06cc\u0627 \u067e\u0631\u0648\u0627\u0646 \u0686\u0691\u06be\u0627\u0646\u0627 (Nurture) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-14",
    "targetWord": "feasible",
    "correctMatch": "viable",
    "options": [
      "viable",
      "impossible",
      "impractical",
      "unrealistic"
    ],
    "explanation": "'Feasible' means possible to do easily or conveniently; viable.",
    "urduExplanation": "'Feasible' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0642\u0627\u0628\u0644\u0650 \u0639\u0645\u0644 \u06cc\u0627 \u0645\u0645\u06a9\u0646 (Viable) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-15",
    "targetWord": "authentic",
    "correctMatch": "genuine",
    "options": [
      "genuine",
      "synthetic",
      "counterfeit",
      "artificial"
    ],
    "explanation": "'Authentic' means of undisputed origin; genuine.",
    "urduExplanation": "'Authentic' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0627\u0635\u0644\u06cc \u0627\u0648\u0631 \u0645\u0633\u062a\u0646\u062f (Genuine) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-16",
    "targetWord": "unanimous",
    "correctMatch": "undivided",
    "options": [
      "undivided",
      "disputed",
      "divided",
      "controversial"
    ],
    "explanation": "'Unanimous' means held by or having everyone's complete agreement.",
    "urduExplanation": "'Unanimous' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0645\u062a\u0641\u0642\u06c1 \u0627\u0648\u0631 \u063a\u06cc\u0631 \u0645\u0646\u0642\u0633\u0645 (Undivided) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-17",
    "targetWord": "sluggish",
    "correctMatch": "slow-moving",
    "options": [
      "slow-moving",
      "energetic",
      "brisk",
      "rapid"
    ],
    "explanation": "'Sluggish' means slow to act or respond; inactive.",
    "urduExplanation": "'Sluggish' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0633\u0633\u062a \u0631\u0641\u062a\u0627\u0631 \u0627\u0648\u0631 \u06a9\u0627\u06c1\u0644 (Slow-moving) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-18",
    "targetWord": "conspicuous",
    "correctMatch": "noticeable",
    "options": [
      "noticeable",
      "hidden",
      "inconspicuous",
      "obscure"
    ],
    "explanation": "'Conspicuous' means standing out so as to be clearly visible; noticeable.",
    "urduExplanation": "'Conspicuous' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0646\u0645\u0627\u06cc\u0627\u06ba \u0627\u0648\u0631 \u0648\u0627\u0636\u062d \u0637\u0648\u0631 \u067e\u0631 \u0646\u0638\u0631 \u0622\u0646\u06d2 \u0648\u0627\u0644\u0627 (Noticeable) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-19",
    "targetWord": "tedious",
    "correctMatch": "monotonous",
    "options": [
      "monotonous",
      "exciting",
      "thrilling",
      "fascinating"
    ],
    "explanation": "'Tedious' means too long, slow, or dull; tiresome or monotonous.",
    "urduExplanation": "'Tedious' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0627\u06a9\u062a\u0627 \u062f\u06cc\u0646\u06d2 \u0648\u0627\u0644\u0627 \u0627\u0648\u0631 \u06cc\u06a9\u062a\u0627 (Monotonous) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-20",
    "targetWord": "diligent",
    "correctMatch": "hardworking",
    "options": [
      "hardworking",
      "idle",
      "negligent",
      "careless"
    ],
    "explanation": "'Diligent' means showing care and conscientiousness in one's work.",
    "urduExplanation": "'Diligent' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0645\u062d\u0646\u062a\u06cc \u0627\u0648\u0631 \u067e\u0631\u0639\u0632\u0645 (Hardworking) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-21",
    "targetWord": "rudimentary",
    "correctMatch": "basic",
    "options": [
      "basic",
      "advanced",
      "sophisticated",
      "intricate"
    ],
    "explanation": "'Rudimentary' means limited to basic principles; elementary.",
    "urduExplanation": "'Rudimentary' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0627\u0648\u0631 \u0627\u0628\u062a\u062f\u0627\u0626\u06cc (Basic) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-22",
    "targetWord": "eccentric",
    "correctMatch": "unconventional",
    "options": [
      "unconventional",
      "traditional",
      "ordinary",
      "customary"
    ],
    "explanation": "'Eccentric' means unconventional and slightly strange.",
    "urduExplanation": "'Eccentric' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u063a\u06cc\u0631 \u0631\u0648\u0627\u06cc\u062a\u06cc \u0627\u0648\u0631 \u0627\u0646\u0648\u06a9\u06be\u0627 (Unconventional) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-23",
    "targetWord": "stamina",
    "correctMatch": "endurance",
    "options": [
      "endurance",
      "weakness",
      "lethargy",
      "fatigue"
    ],
    "explanation": "'Stamina' means the ability to sustain prolonged physical or mental effort.",
    "urduExplanation": "'Stamina' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u062c\u0633\u0645\u0627\u0646\u06cc \u06cc\u0627 \u0630\u06c1\u0646\u06cc \u0642\u0648\u062a\u0650 \u0628\u0631\u062f\u0627\u0634\u062a (Endurance) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-24",
    "targetWord": "remedy",
    "correctMatch": "cure",
    "options": [
      "cure",
      "disease",
      "poison",
      "worsening"
    ],
    "explanation": "'Remedy' means a treatment or cure for an illness or problem.",
    "urduExplanation": "'Remedy' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0639\u0644\u0627\u062c \u06cc\u0627 \u0645\u062f\u0627\u0648\u0627 (Cure) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-25",
    "targetWord": "itinerary",
    "correctMatch": "travel plan",
    "options": [
      "travel plan",
      "souvenir",
      "luggage",
      "passport"
    ],
    "explanation": "'Itinerary' refers to a planned route or journey schedule.",
    "urduExplanation": "'Itinerary' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0633\u0641\u0631 \u06a9\u0627 \u062a\u0641\u0635\u06cc\u0644\u06cc \u0634\u06cc\u0688\u0648\u0644 \u06cc\u0627 \u0645\u0646\u0635\u0648\u0628\u06c1 (Travel plan) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-26",
    "targetWord": "empathy",
    "correctMatch": "compassion",
    "options": [
      "compassion",
      "indifference",
      "apathy",
      "cruelty"
    ],
    "explanation": "'Empathy' is the ability to understand and share the feelings of another.",
    "urduExplanation": "'Empathy' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u0645\u062f\u0631\u062f\u06cc \u0627\u0648\u0631 \u062f\u0648\u0633\u0631\u06d2 \u06a9\u06d2 \u0627\u062d\u0633\u0627\u0633\u0627\u062a \u06a9\u0648 \u0633\u0645\u062c\u06be\u0646\u0627 (Compassion) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-27",
    "targetWord": "innovative",
    "correctMatch": "inventive",
    "options": [
      "inventive",
      "outdated",
      "imitative",
      "customary"
    ],
    "explanation": "'Innovative' means featuring new methods; advanced and original.",
    "urduExplanation": "'Innovative' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u062a\u062e\u0644\u06cc\u0642\u06cc \u0627\u0648\u0631 \u0646\u06cc\u0627 \u0637\u0631\u06cc\u0642\u06c1 \u0644\u0627\u0646\u06d2 \u0648\u0627\u0644\u0627 (Inventive) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-28",
    "targetWord": "preserve",
    "correctMatch": "conserve",
    "options": [
      "conserve",
      "destroy",
      "neglect",
      "ruin"
    ],
    "explanation": "'Preserve' means to maintain something in its original or existing state.",
    "urduExplanation": "'Preserve' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0645\u062d\u0641\u0648\u0638 \u0631\u06a9\u06be\u0646\u0627 \u0627\u0648\u0631 \u062d\u0641\u0627\u0638\u062a \u06a9\u0631\u0646\u0627 (Conserve) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-29",
    "targetWord": "collaborate",
    "correctMatch": "cooperate",
    "options": [
      "cooperate",
      "compete",
      "dispute",
      "isolate"
    ],
    "explanation": "'Collaborate' means to work jointly on an activity or project.",
    "urduExplanation": "'Collaborate' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0628\u0627\u06c1\u0645\u06cc \u062a\u0639\u0627\u0648\u0646 \u0633\u06d2 \u0645\u0644 \u06a9\u0631 \u06a9\u0627\u0645 \u06a9\u0631\u0646\u0627 (Cooperate) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-gen-30",
    "targetWord": "affluent",
    "correctMatch": "wealthy",
    "options": [
      "wealthy",
      "destitute",
      "impoverished",
      "needy"
    ],
    "explanation": "'Affluent' describes having a great deal of money; wealthy.",
    "urduExplanation": "'Affluent' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u062f\u0648\u0644\u062a \u0645\u0646\u062f \u0627\u0648\u0631 \u062e\u0648\u0634\u062d\u0627\u0644 (Wealthy) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vm-biz-01",
    "targetWord": "reconcile",
    "correctMatch": "harmonize",
    "options": [
      "harmonize",
      "disregard",
      "postpone",
      "liquidate"
    ],
    "explanation": "'Reconcile' means to check for harmony or agreement between accounts.",
    "urduExplanation": "'Reconcile' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u06a9\u06be\u0627\u062a\u0648\u06ba \u06a9\u06d2 \u062f\u0631\u0645\u06cc\u0627\u0646 \u062a\u0627\u0644 \u0645\u06cc\u0644 \u0627\u0648\u0631 \u0645\u0637\u0627\u0628\u0642\u062a \u067e\u06cc\u062f\u0627 \u06a9\u0631\u0646\u0627\u06d4"
  },
  {
    "id": "vm-biz-02",
    "targetWord": "scrutinize",
    "correctMatch": "examine closely",
    "options": [
      "examine closely",
      "ignore",
      "approve quickly",
      "disclose"
    ],
    "explanation": "'Scrutinize' means to examine working papers with close critical detail.",
    "urduExplanation": "'Scrutinize' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u06af\u06c1\u0631\u06cc \u0646\u0638\u0631 \u0633\u06d2 \u0627\u0648\u0631 \u0628\u0627\u0631\u06cc\u06a9 \u0628\u06cc\u0646\u06cc \u0633\u06d2 \u062c\u0627\u0646\u0686 \u067e\u0691\u062a\u0627\u0644 \u06a9\u0631\u0646\u0627\u06d4"
  },
  {
    "id": "vm-biz-03",
    "targetWord": "statutory",
    "correctMatch": "mandatory by law",
    "options": [
      "mandatory by law",
      "voluntary",
      "temporary",
      "customary"
    ],
    "explanation": "'Statutory' means required, enacted, or permitted by statute or law.",
    "urduExplanation": "'Statutory' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0642\u0627\u0646\u0648\u0646 \u06a9\u06d2 \u062a\u062d\u062a \u0644\u0627\u0632\u0645\u06cc \u0642\u0631\u0627\u0631 \u062f\u06cc\u0627 \u06af\u06cc\u0627\u06d4"
  },
  {
    "id": "vm-biz-04",
    "targetWord": "prudent",
    "correctMatch": "cautious and sensible",
    "options": [
      "cautious and sensible",
      "reckless",
      "hasty",
      "generous"
    ],
    "explanation": "'Prudent' denotes acting with care and sound financial foresight.",
    "urduExplanation": "'Prudent' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0645\u062d\u062a\u0627\u0637\u060c \u062f\u0648\u0631 \u0627\u0646\u062f\u06cc\u0634 \u0627\u0648\u0631 \u0639\u0642\u0644 \u0645\u0646\u062f\u06cc \u0633\u06d2 \u06a9\u0627\u0645 \u0644\u06cc\u0646\u06d2 \u0648\u0627\u0644\u0627\u06d4"
  },
  {
    "id": "vm-biz-05",
    "targetWord": "materiality",
    "correctMatch": "significance",
    "options": [
      "significance",
      "tangibility",
      "triviality",
      "decoration"
    ],
    "explanation": "In auditing, 'materiality' refers to the threshold of significance that influences decisions.",
    "urduExplanation": "\u0622\u0688\u0679 \u0645\u06cc\u06ba 'materiality' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0627\u06c1\u0645\u06cc\u062a \u0627\u0648\u0631 \u0627\u062b\u0631 \u0627\u0646\u06af\u06cc\u0632\u06cc \u06a9\u06cc \u0648\u06c1 \u062d\u062f \u062c\u0648 \u0641\u06cc\u0635\u0644\u0648\u06ba \u06a9\u0648 \u0628\u062f\u0644 \u0633\u06a9\u06d2\u06d4"
  },
  {
    "id": "vm-biz-06",
    "targetWord": "substantiate",
    "correctMatch": "provide evidence for",
    "options": [
      "provide evidence for",
      "discredit",
      "overlook",
      "conceal"
    ],
    "explanation": "'Substantiate' means to establish proof or back a claim with valid documentary evidence.",
    "urduExplanation": "'Substantiate' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0679\u06be\u0648\u0633 \u0634\u0648\u0627\u06c1\u062f \u0627\u0648\u0631 \u062f\u0633\u062a\u0627\u0648\u06cc\u0632\u06cc \u062b\u0628\u0648\u062a\u0648\u06ba \u0633\u06d2 \u062b\u0627\u0628\u062a \u06a9\u0631\u0646\u0627\u06d4"
  }
];

// ============================================================================
// VOCABULARY TASK 2: Word Definitions (Definition -> Word)
// ============================================================================
export const EXPANDED_VOCAB_DEFINITIONS_POOL: VocabDefinitionItem[] = [
  ...APTIS_TEST_SET_1.core.vocabDefinitions,
  ...APTIS_TEST_SET_2.core.vocabDefinitions,
  {
    "id": "vd-gen-01",
    "definition": "The natural environment or home where a specific species of animal, plant, or organism lives.",
    "correctWord": "Habitat",
    "options": [
      "Habitat",
      "Harvest",
      "Horizon",
      "Hangar"
    ],
    "explanation": "A 'Habitat' is the natural home or environment of a plant or animal.",
    "urduExplanation": "\u06a9\u0633\u06cc \u062c\u0627\u0646\u062f\u0627\u0631 \u06cc\u0627 \u067e\u0648\u062f\u06d2 \u06a9\u06d2 \u0642\u062f\u0631\u062a\u06cc \u0645\u0633\u06a9\u0646 \u06a9\u0648 'Habitat' \u06a9\u06c1\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vd-gen-02",
    "definition": "A step-by-step set of mathematical rules or computational procedures used to solve a problem.",
    "correctWord": "Algorithm",
    "options": [
      "Algorithm",
      "Algebra",
      "Allusion",
      "Almanac"
    ],
    "explanation": "An 'Algorithm' is a defined process or set of rules for computer calculations.",
    "urduExplanation": "\u0645\u0633\u0626\u0644\u06c1 \u062d\u0644 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u06a9\u0645\u067e\u06cc\u0648\u0679\u0631\u0627\u0626\u0632\u0688 \u0637\u0631\u06cc\u0642\u06c1 \u06a9\u0627\u0631 \u06a9\u0648 'Algorithm' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-03",
    "definition": "The formal academic subjects and educational content comprising a course of study at a school or university.",
    "correctWord": "Curriculum",
    "options": [
      "Curriculum",
      "Campus",
      "Corridor",
      "Certificate"
    ],
    "explanation": "A 'Curriculum' represents the courses and educational topics offered in an academic institution.",
    "urduExplanation": "\u062a\u0639\u0644\u06cc\u0645\u06cc \u0627\u062f\u0627\u0631\u06d2 \u06a9\u06d2 \u062a\u062f\u0631\u06cc\u0633\u06cc \u0646\u0635\u0627\u0628 \u06a9\u0648 'Curriculum' \u06a9\u06c1\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vd-gen-04",
    "definition": "A biological community of interacting living organisms and their physical abiotic environment.",
    "correctWord": "Ecosystem",
    "options": [
      "Ecosystem",
      "Economy",
      "Eclipse",
      "Ecology"
    ],
    "explanation": "An 'Ecosystem' is a biological community interacting with its environment.",
    "urduExplanation": "\u062c\u0627\u0646\u062f\u0627\u0631\u0648\u06ba \u0627\u0648\u0631 \u0627\u0646 \u06a9\u06d2 \u0642\u062f\u0631\u062a\u06cc \u0645\u0627\u062d\u0648\u0644 \u06a9\u06d2 \u0628\u0627\u06c1\u0645\u06cc \u0646\u0638\u0627\u0645 \u06a9\u0648 'Ecosystem' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-05",
    "definition": "A slowly moving mass or river of compacted ice formed over centuries on high mountains.",
    "correctWord": "Glacier",
    "options": [
      "Glacier",
      "Geyser",
      "Gorge",
      "Gully"
    ],
    "explanation": "A 'Glacier' is a dense river of ice formed by snow accumulation.",
    "urduExplanation": "\u067e\u06c1\u0627\u0691\u0648\u06ba \u067e\u0631 \u062c\u0645\u06cc \u0628\u0631\u0641 \u06a9\u06d2 \u0628\u0691\u06d2 \u062a\u0648\u062f\u06d2 \u06a9\u0648 'Glacier' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-06",
    "definition": "An elaborate, extensive musical composition for a full symphony orchestra, usually in four movements.",
    "correctWord": "Symphony",
    "options": [
      "Symphony",
      "Sonnet",
      "Solo",
      "Stanza"
    ],
    "explanation": "A 'Symphony' is a classical orchestral composition in multiple movements.",
    "urduExplanation": "\u0628\u0691\u06d2 \u0622\u0631\u06a9\u0633\u0679\u0631\u0627 \u06a9\u06d2 \u0644\u06cc\u06d2 \u062a\u0631\u062a\u06cc\u0628 \u062f\u06cc \u06af\u0626\u06cc \u06a9\u0644\u0627\u0633\u06cc\u06a9\u06cc \u0645\u0648\u0633\u06cc\u0642\u06cc \u06a9\u0648 'Symphony' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-07",
    "definition": "An early sample, physical model, or preliminary release of a product built to test a concept.",
    "correctWord": "Prototype",
    "options": [
      "Prototype",
      "Paragraph",
      "Paragon",
      "Portfolio"
    ],
    "explanation": "A 'Prototype' is an initial working model built to test a system or invention.",
    "urduExplanation": "\u06a9\u0633\u06cc \u0646\u0626\u06cc \u0627\u06cc\u062c\u0627\u062f \u06cc\u0627 \u067e\u0631\u0627\u0688\u06a9\u0679 \u06a9\u06d2 \u0627\u0628\u062a\u062f\u0627\u0626\u06cc \u0645\u0627\u0688\u0644 \u06a9\u0648 'Prototype' \u06a9\u06c1\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vd-gen-08",
    "definition": "An organized journey undertaken by a group of people with a distinct scientific or exploration goal.",
    "correctWord": "Expedition",
    "options": [
      "Expedition",
      "Excursion",
      "Exhibition",
      "Evacuation"
    ],
    "explanation": "An 'Expedition' is a journey with a specific exploration or scientific mission.",
    "urduExplanation": "\u06a9\u0633\u06cc \u062e\u0627\u0635 \u062a\u062d\u0642\u06cc\u0642\u06cc \u06cc\u0627 \u0645\u06c1\u0645\u0627\u062a\u06cc \u0633\u0641\u0631 \u06a9\u0648 'Expedition' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-09",
    "definition": "The psychological ability to recognize, understand, and share the emotions and perspectives of others.",
    "correctWord": "Empathy",
    "options": [
      "Empathy",
      "Envy",
      "Egoism",
      "Entropy"
    ],
    "explanation": "'Empathy' denotes understanding and vicariously experiencing another person's feelings.",
    "urduExplanation": "\u062f\u0648\u0633\u0631\u0648\u06ba \u06a9\u06d2 \u062c\u0630\u0628\u0627\u062a \u06a9\u0648 \u0633\u0645\u062c\u06be\u0646\u06d2 \u0627\u0648\u0631 \u0645\u062d\u0633\u0648\u0633 \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u0635\u0644\u0627\u062d\u06cc\u062a \u06a9\u0648 'Empathy' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-10",
    "definition": "A protected nature reserve or refuge where birds and wild animals are safeguarded from hunting.",
    "correctWord": "Sanctuary",
    "options": [
      "Sanctuary",
      "Stadium",
      "Studio",
      "Station"
    ],
    "explanation": "A 'Sanctuary' is a secure place of shelter and safety for wildlife.",
    "urduExplanation": "\u062c\u0646\u06af\u0644\u06cc \u062d\u06cc\u0627\u062a \u06a9\u06cc \u062d\u0641\u0627\u0638\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 \u0645\u062d\u0641\u0648\u0638 \u0642\u062f\u0631\u062a\u06cc \u067e\u0646\u0627\u06c1 \u06af\u0627\u06c1 \u06a9\u0648 'Sanctuary' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-11",
    "definition": "An optical astronomical instrument with lenses or mirrors used to observe distant celestial bodies.",
    "correctWord": "Telescope",
    "options": [
      "Telescope",
      "Telegraph",
      "Thermometer",
      "Turbine"
    ],
    "explanation": "A 'Telescope' magnifies distant stars, planets, and galaxies.",
    "urduExplanation": "\u0633\u062a\u0627\u0631\u0648\u06ba \u0627\u0648\u0631 \u0633\u06cc\u0627\u0631\u0648\u06ba \u06a9\u06d2 \u0645\u0634\u0627\u06c1\u062f\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u062f\u0648\u0631\u0628\u06cc\u0646 \u06a9\u0648 'Telescope' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-12",
    "definition": "A historical object, tool, or decorative piece made by human beings in the ancient past.",
    "correctWord": "Artifact",
    "options": [
      "Artifact",
      "Artisan",
      "Archive",
      "Atlas"
    ],
    "explanation": "An 'Artifact' is an archaeological relic of human manufacture.",
    "urduExplanation": "\u0642\u062f\u06cc\u0645 \u062f\u0648\u0631 \u06a9\u06cc \u0627\u0646\u0633\u0627\u0646 \u0633\u0627\u062e\u062a\u06c1 \u062a\u0627\u0631\u06cc\u062e\u06cc \u0634\u06d2 \u06cc\u0627 \u0628\u0627\u0642\u06cc\u0627\u062a \u06a9\u0648 'Artifact' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-13",
    "definition": "The practice or charitable desire of promoting human welfare through generous donations and altruism.",
    "correctWord": "Philanthropy",
    "options": [
      "Philanthropy",
      "Philosophy",
      "Psychology",
      "Physiology"
    ],
    "explanation": "'Philanthropy' involves donating wealth or resources to assist societal causes.",
    "urduExplanation": "\u0627\u0646\u0633\u0627\u0646\u06cc \u0641\u0644\u0627\u062d \u0648 \u0628\u06c1\u0628\u0648\u062f \u06a9\u06d2 \u0644\u06cc\u06d2 \u0633\u062e\u0627\u0648\u062a \u0627\u0648\u0631 \u062e\u06cc\u0631\u0627\u062a \u06a9\u0648 'Philanthropy' \u06a9\u06c1\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vd-gen-14",
    "definition": "The process of moving permanently from one geographic region or country to settle in another.",
    "correctWord": "Migration",
    "options": [
      "Migration",
      "Mutation",
      "Meditation",
      "Moderation"
    ],
    "explanation": "'Migration' refers to seasonal or permanent movement between locations.",
    "urduExplanation": "\u0627\u06cc\u06a9 \u0639\u0644\u0627\u0642\u06d2 \u0633\u06d2 \u062f\u0648\u0633\u0631\u06d2 \u0639\u0644\u0627\u0642\u06d2 \u0645\u0646\u062a\u0642\u0644 \u06c1\u0648\u0646\u06d2 \u06a9\u0648 'Migration' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-15",
    "definition": "An extensive group, chain, or cluster of islands scattered across an ocean or sea.",
    "correctWord": "Archipelago",
    "options": [
      "Archipelago",
      "Aqueduct",
      "Avalanche",
      "Atoll"
    ],
    "explanation": "An 'Archipelago' is an expansive chain or group of islands.",
    "urduExplanation": "\u062c\u0632\u0627\u0626\u0631 \u06a9\u06d2 \u062c\u06be\u0631\u0645\u0679 \u06cc\u0627 \u0633\u0644\u0633\u0644\u06d2 \u06a9\u0648 'Archipelago' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-16",
    "definition": "The biochemical process by which living organisms assimilate food substances essential for growth and health.",
    "correctWord": "Nutrition",
    "options": [
      "Nutrition",
      "Nausea",
      "Notification",
      "Notion"
    ],
    "explanation": "'Nutrition' is the provision of nourishment necessary for health.",
    "urduExplanation": "\u0635\u062d\u062a \u0627\u0648\u0631 \u0646\u0634\u0648\u0648\u0646\u0645\u0627 \u06a9\u06d2 \u0644\u06cc\u06d2 \u062f\u0631\u06a9\u0627\u0631 \u063a\u0630\u0627\u0626\u06cc \u0639\u0645\u0644 \u06a9\u0648 'Nutrition' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-17",
    "definition": "A medical device used by doctors to listen to heartbeats and respiratory lung sounds.",
    "correctWord": "Stethoscope",
    "options": [
      "Stethoscope",
      "Syringe",
      "Scalpel",
      "Sedative"
    ],
    "explanation": "A 'Stethoscope' is an acoustic medical instrument for auscultation.",
    "urduExplanation": "\u062f\u0644 \u0627\u0648\u0631 \u067e\u06be\u06cc\u067e\u06be\u0691\u0648\u06ba \u06a9\u06cc \u0622\u0648\u0627\u0632 \u0633\u0646\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0637\u0628\u06cc \u0622\u0644\u06d2 \u06a9\u0648 'Stethoscope' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-18",
    "definition": "The historic customs, valued traditions, and monuments passed down through generations of a society.",
    "correctWord": "Heritage",
    "options": [
      "Heritage",
      "Horizon",
      "Harvest",
      "Homage"
    ],
    "explanation": "'Heritage' encompasses culture, buildings, and traditions inherited from ancestors.",
    "urduExplanation": "\u0622\u0628\u0627\u0621 \u0648 \u0627\u062c\u062f\u0627\u062f \u0633\u06d2 \u0648\u0631\u062b\u06d2 \u0645\u06cc\u06ba \u0645\u0644\u0646\u06d2 \u0648\u0627\u0644\u06cc \u0631\u0648\u0627\u06cc\u0627\u062a \u0627\u0648\u0631 \u06cc\u0627\u062f\u06af\u0627\u0631\u0648\u06ba \u06a9\u0648 'Heritage' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-19",
    "definition": "The remote delivery of medical healthcare services and consultations using telecommunications technology.",
    "correctWord": "Telemedicine",
    "options": [
      "Telemedicine",
      "Therapy",
      "Transfusion",
      "Toxicology"
    ],
    "explanation": "'Telemedicine' provides remote clinical healthcare via digital devices.",
    "urduExplanation": "\u0627\u0646\u0679\u0631\u0646\u06cc\u0679 \u06a9\u06d2 \u0630\u0631\u06cc\u0639\u06d2 \u062f\u0648\u0631 \u062f\u0631\u0627\u0632 \u0637\u0628\u06cc \u0645\u0639\u0627\u0626\u0646\u06d2 \u06a9\u0648 'Telemedicine' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-gen-20",
    "definition": "A biological organism's natural ability to withstand or ward off harmful pathogens and infections.",
    "correctWord": "Immunity",
    "options": [
      "Immunity",
      "Impunity",
      "Inflammation",
      "Insomnia"
    ],
    "explanation": "'Immunity' is the state of protection against infectious disease.",
    "urduExplanation": "\u0628\u06cc\u0645\u0627\u0631\u06cc\u0648\u06ba \u0627\u0648\u0631 \u062c\u0631\u0627\u062b\u06cc\u0645 \u06a9\u06d2 \u062e\u0644\u0627\u0641 \u062c\u0633\u0645 \u06a9\u06cc \u0642\u062f\u0631\u062a\u06cc \u0645\u062f\u0627\u0641\u0639\u062a \u06a9\u0648 'Immunity' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-biz-01",
    "definition": "A formal independent examination and verification of an organization's financial accounts and operational records.",
    "correctWord": "Audit",
    "options": [
      "Audit",
      "Auction",
      "Autopsy",
      "Avenue"
    ],
    "explanation": "An audit is an independent review of books of account.",
    "urduExplanation": "\u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u06a9\u06be\u0627\u062a\u0648\u06ba \u06a9\u06cc \u063a\u06cc\u0631 \u062c\u0627\u0646\u0628\u062f\u0627\u0631\u0627\u0646\u06c1 \u062c\u0627\u0646\u0686 \u067e\u0691\u062a\u0627\u0644 \u06a9\u0648 'Audit' \u06a9\u06c1\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vd-biz-02",
    "definition": "A financial statement summarizing a company's assets, liabilities, and shareholders' equity at a specific point in time.",
    "correctWord": "Balance Sheet",
    "options": [
      "Balance Sheet",
      "Cash Ledger",
      "Stock Register",
      "Voucher File"
    ],
    "explanation": "The balance sheet presents the financial position of an enterprise on a given date.",
    "urduExplanation": "\u0645\u062e\u0635\u0648\u0635 \u062a\u0627\u0631\u06cc\u062e \u067e\u0631 \u06a9\u0645\u067e\u0646\u06cc \u06a9\u06d2 \u0627\u062b\u0627\u062b\u06c1 \u062c\u0627\u062a \u0627\u0648\u0631 \u0648\u0627\u062c\u0628\u0627\u062a \u06a9\u0648 \u0638\u0627\u06c1\u0631 \u06a9\u0631\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06af\u0648\u0634\u0648\u0627\u0631\u06d2 \u06a9\u0648 'Balance Sheet' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-biz-03",
    "definition": "The ease with which an asset can be converted into ready cash without affecting its market price.",
    "correctWord": "Liquidity",
    "options": [
      "Liquidity",
      "Longevity",
      "Legality",
      "Liability"
    ],
    "explanation": "Liquidity refers to how quickly assets can be converted to cash.",
    "urduExplanation": "\u0627\u062b\u0627\u062b\u06d2 \u06a9\u0648 \u0641\u0648\u0631\u06cc \u0646\u0642\u062f \u0631\u0642\u0645 \u0645\u06cc\u06ba \u062a\u0628\u062f\u06cc\u0644 \u06a9\u0631\u0646\u06d2 \u06a9\u06cc \u0622\u0633\u0627\u0646\u06cc \u0627\u0648\u0631 \u0635\u0644\u0627\u062d\u06cc\u062a \u06a9\u0648 'Liquidity' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vd-biz-04",
    "definition": "The value of an owner's interest in a business, calculated as total assets minus total liabilities.",
    "correctWord": "Equity",
    "options": [
      "Equity",
      "Empathy",
      "Entity",
      "Entropy"
    ],
    "explanation": "Equity is the residual interest in the assets of the entity after deducting liabilities.",
    "urduExplanation": "\u0627\u062b\u0627\u062b\u0648\u06ba \u0645\u06cc\u06ba \u0633\u06d2 \u0648\u0627\u062c\u0628\u0627\u062a \u0646\u06a9\u0627\u0644\u0646\u06d2 \u06a9\u06d2 \u0628\u0639\u062f \u0645\u0627\u0644\u06a9\u0627\u0646 \u06a9\u06d2 \u0628\u0642\u0627\u06cc\u0627 \u062d\u0635\u06d2 \u06a9\u0648 'Equity' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  }
];

// ============================================================================
// VOCABULARY TASK 3: Collocations & Word Pairing
// ============================================================================
export const EXPANDED_VOCAB_COLLOCATIONS_POOL: VocabCollocationItem[] = [
  ...APTIS_TEST_SET_1.core.vocabCollocations,
  ...APTIS_TEST_SET_2.core.vocabCollocations,
  {
    "id": "vc-gen-01",
    "sentence": "Before starting a strenuous workout, athletes should always _______ some light stretching exercises.",
    "options": [
      "do",
      "make",
      "create",
      "construct"
    ],
    "correctIndex": 0,
    "explanation": "'Do stretching / exercise' is the natural verb collocation.",
    "urduExplanation": "\u0648\u0631\u0632\u0634 \u06cc\u0627 \u0627\u0633\u0679\u0631\u06cc\u0686\u0646\u06af \u06a9\u06d2 \u0644\u06cc\u06d2 \u0641\u0639\u0644 'do' \u06a9\u0627 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u0641\u0637\u0631\u06cc \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-02",
    "sentence": "The school principal decided to _______ an exception for the student who fell ill during exams.",
    "options": [
      "make",
      "do",
      "have",
      "take"
    ],
    "correctIndex": 0,
    "explanation": "The idiom is 'make an exception'.",
    "urduExplanation": "\u0627\u0633\u062a\u062b\u0646\u06cc\u0670 \u062f\u06cc\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'make an exception' \u0628\u0648\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-03",
    "sentence": "Residents are encouraged to _______ into the habit of sorting plastic and organic waste.",
    "options": [
      "get",
      "reach",
      "climb",
      "step"
    ],
    "correctIndex": 0,
    "explanation": "'Get into the habit of' is the customary English expression.",
    "urduExplanation": "\u06a9\u0648\u0626\u06cc \u0639\u0627\u062f\u062a \u0627\u067e\u0646\u0627\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'get into the habit' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-04",
    "sentence": "The volunteer conservationists managed to _______ public awareness about endangered coastal turtles.",
    "options": [
      "raise",
      "rise",
      "lift",
      "grow"
    ],
    "correctIndex": 0,
    "explanation": "The standard transitive collocation is 'raise awareness'.",
    "urduExplanation": "\u0634\u0639\u0648\u0631 \u0627\u062c\u0627\u06af\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'raise awareness' \u0628\u0648\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-05",
    "sentence": "The computer programmer worked late into the night to _______ the critical sprint deadline.",
    "options": [
      "meet",
      "hit",
      "reach",
      "touch"
    ],
    "correctIndex": 0,
    "explanation": "One 'meets a deadline' when completing work on schedule.",
    "urduExplanation": "\u0645\u0642\u0631\u0631\u06c1 \u0648\u0642\u062a \u067e\u0631 \u06a9\u0627\u0645 \u0645\u06a9\u0645\u0644 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'meet a deadline' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-06",
    "sentence": "It is essential for parents to _______ good manners and respect in their children from an early age.",
    "options": [
      "instill",
      "install",
      "insert",
      "inject"
    ],
    "correctIndex": 0,
    "explanation": "One 'instills values/manners' into a person gradually.",
    "urduExplanation": "\u062a\u0631\u0628\u06cc\u062a \u0627\u0648\u0631 \u0627\u0642\u062f\u0627\u0631 \u0633\u06a9\u06be\u0627\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'instill' \u06a9\u0627 \u0644\u0641\u0638 \u0645\u0648\u0632\u0648\u06ba \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-07",
    "sentence": "The hiking expedition had to _______ harsh sub-zero temperatures and strong blizzard winds.",
    "options": [
      "brave",
      "dare",
      "venture",
      "threaten"
    ],
    "correctIndex": 0,
    "explanation": "'Brave harsh weather' means to endure difficult conditions courageously.",
    "urduExplanation": "\u0633\u062e\u062a \u0645\u0648\u0633\u0645 \u06a9\u0627 \u062f\u0644\u06cc\u0631\u06cc \u0633\u06d2 \u0645\u0642\u0627\u0628\u0644\u06c1 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'brave' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-08",
    "sentence": "With disciplined daily practice, Maria managed to _______ rapid progress in her French fluency.",
    "options": [
      "make",
      "do",
      "have",
      "create"
    ],
    "correctIndex": 0,
    "explanation": "The standard collocation is 'make progress'.",
    "urduExplanation": "\u062a\u0631\u0642\u06cc \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'make progress' \u06a9\u06c1\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-09",
    "sentence": "The software startup plans to _______ a revolutionary mobile application next month.",
    "options": [
      "launch",
      "startle",
      "fire",
      "eject"
    ],
    "correctIndex": 0,
    "explanation": "Companies 'launch an app/product'.",
    "urduExplanation": "\u0646\u0626\u06cc \u067e\u0631\u0627\u0688\u06a9\u0679 \u06cc\u0627 \u0627\u06cc\u067e \u0645\u0627\u0631\u06a9\u06cc\u0679 \u0645\u06cc\u06ba \u0644\u0627\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'launch' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-10",
    "sentence": "During the neighborhood town hall meeting, citizens gathered to _______ their grievances.",
    "options": [
      "voice",
      "sound",
      "noise",
      "shout"
    ],
    "correctIndex": 0,
    "explanation": "'Voice grievances/concerns' means to express complaints formally.",
    "urduExplanation": "\u0634\u06a9\u0627\u06cc\u0627\u062a \u06a9\u0627 \u0627\u0638\u06c1\u0627\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'voice grievances' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-11",
    "sentence": "After three hours of diplomatic dialogue, both delegates managed to _______ common ground.",
    "options": [
      "find",
      "invent",
      "trace",
      "uncover"
    ],
    "correctIndex": 0,
    "explanation": "'Find common ground' means finding shared mutual opinions.",
    "urduExplanation": "\u0628\u0627\u06c1\u0645\u06cc \u0627\u062a\u0641\u0627\u0642 \u06a9\u06d2 \u0646\u06a9\u0627\u062a \u067e\u0627\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'find common ground' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-12",
    "sentence": "The museum curator delivered a moving eulogy to _______ tribute to the legendary sculptor.",
    "options": [
      "pay",
      "give",
      "spend",
      "lend"
    ],
    "correctIndex": 0,
    "explanation": "'Pay tribute to' is the set idiomatic collocation.",
    "urduExplanation": "\u062e\u0631\u0627\u062c\u0650 \u062a\u062d\u0633\u06cc\u0646 \u067e\u06cc\u0634 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'pay tribute' \u0628\u0648\u0644\u0627 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-13",
    "sentence": "To stay energized throughout the workday, it helps to _______ a balanced, nutritious diet.",
    "options": [
      "maintain",
      "retain",
      "contain",
      "sustain"
    ],
    "correctIndex": 0,
    "explanation": "'Maintain a balanced diet' is the customary health collocation.",
    "urduExplanation": "\u0645\u062a\u0648\u0627\u0632\u0646 \u063a\u0630\u0627 \u06a9\u0648 \u0628\u0631\u0642\u0631\u0627\u0631 \u0631\u06a9\u06be\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'maintain' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-14",
    "sentence": "The ambitious student was determined to _______ advantage of every research scholarship opportunity.",
    "options": [
      "take",
      "make",
      "get",
      "do"
    ],
    "correctIndex": 0,
    "explanation": "'Take advantage of' means to make good use of an opportunity.",
    "urduExplanation": "\u0645\u0648\u0642\u0639 \u0633\u06d2 \u0641\u0627\u0626\u062f\u06c1 \u0627\u0679\u06be\u0627\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'take advantage of' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-15",
    "sentence": "Before booking flights, smart travelers always _______ reservations at reputable hotels.",
    "options": [
      "make",
      "do",
      "have",
      "build"
    ],
    "correctIndex": 0,
    "explanation": "The standard collocation is 'make reservations'.",
    "urduExplanation": "\u06c1\u0648\u0679\u0644 \u0628\u06a9\u0646\u06af \u06a9\u06d2 \u0644\u06cc\u06d2 'make reservations' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-gen-16",
    "sentence": "Doctors advise that individuals should _______ regular medical checkups at least once a year.",
    "options": [
      "undergo",
      "undertake",
      "understand",
      "underwrite"
    ],
    "correctIndex": 0,
    "explanation": "'Undergo a checkup' means to experience or submit to an examination.",
    "urduExplanation": "\u0637\u0628\u06cc \u0645\u0639\u0627\u0626\u0646\u06d2 \u0633\u06d2 \u06af\u0632\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'undergo' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-biz-01",
    "sentence": "Before finalizing the corporate acquisition, the legal counsel conducted thorough due _______.",
    "options": [
      "diligence",
      "duty",
      "effort",
      "patience"
    ],
    "correctIndex": 0,
    "explanation": "'Due diligence' is the comprehensive appraisal of a business.",
    "urduExplanation": "'Due diligence' \u06a9\u0627\u0631\u0648\u0628\u0627\u0631\u06cc \u062c\u0627\u0646\u0686 \u067e\u0691\u062a\u0627\u0644 \u06a9\u0627 \u0642\u0627\u0646\u0648\u0646\u06cc \u0639\u0645\u0644 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-biz-02",
    "sentence": "Management established robust internal _______ to safeguard company assets against unauthorized use.",
    "options": [
      "controls",
      "commands",
      "demands",
      "barriers"
    ],
    "correctIndex": 0,
    "explanation": "'Internal controls' are accounting mechanisms to ensure financial integrity.",
    "urduExplanation": "\u062f\u0627\u062e\u0644\u06cc \u06a9\u0646\u0679\u0631\u0648\u0644 \u0627\u0648\u0631 \u062d\u0641\u0627\u0638\u062a\u06cc \u0636\u0648\u0627\u0628\u0637 \u06a9\u06d2 \u0644\u06cc\u06d2 'internal controls' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vc-biz-03",
    "sentence": "Financial statements must give a true and _______ view of the company's fiscal position.",
    "options": [
      "fair",
      "fine",
      "free",
      "firm"
    ],
    "correctIndex": 0,
    "explanation": "'True and fair view' is the foundational standard of financial reporting.",
    "urduExplanation": "\u06a9\u06be\u0627\u062a\u0648\u06ba \u06a9\u06d2 \u062f\u0631\u0633\u062a \u0627\u0648\u0631 \u0634\u0641\u0627\u0641 \u062c\u0627\u0626\u0632\u06d2 \u06a9\u0648 'true and fair view' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  }
];

// ============================================================================
// VOCABULARY TASK 4: Sentence Completion
// ============================================================================
export const EXPANDED_VOCAB_SENTENCE_POOL: VocabCollocationItem[] = [
  ...APTIS_TEST_SET_1.core.vocabSentenceCompletion.map(item => ({ ...item, id: `vs-set1-${item.id}` })),
  ...APTIS_TEST_SET_2.core.vocabSentenceCompletion.map(item => ({ ...item, id: `vs-set2-${item.id}` })),
  {
    "id": "vs-gen-01",
    "sentence": "The botanist demonstrated remarkable _______ in cataloging over three hundred rare alpine wildflowers.",
    "options": [
      "diligence",
      "negligence",
      "arrogance",
      "indifference"
    ],
    "correctIndex": 0,
    "explanation": "'Diligence' means careful and persistent work or effort.",
    "urduExplanation": "'Diligence' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0627\u0646\u062a\u06be\u06a9 \u0645\u062d\u0646\u062a \u0627\u0648\u0631 \u0644\u06af\u0646 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-02",
    "sentence": "The city library announced that registration for the summer reading challenge is completely _______.",
    "options": [
      "voluntary",
      "compulsory",
      "burdensome",
      "tedious"
    ],
    "correctIndex": 0,
    "explanation": "'Voluntary' means done, given, or acting of one's own free will.",
    "urduExplanation": "'Voluntary' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0631\u0636\u0627\u06a9\u0627\u0631\u0627\u0646\u06c1 \u06cc\u0627 \u0627\u067e\u0646\u06cc \u0645\u0631\u0636\u06cc \u0633\u06d2 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-03",
    "sentence": "The solar energy panels had an immediate positive _______ on our monthly household electricity bills.",
    "options": [
      "impact",
      "defect",
      "barrier",
      "hazard"
    ],
    "correctIndex": 0,
    "explanation": "Having a positive 'impact' means producing a marked effect or influence.",
    "urduExplanation": "\u0645\u062b\u0628\u062a \u0627\u062b\u0631 \u0638\u0627\u06c1\u0631 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'impact' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-04",
    "sentence": "Doctors recommend staying well-hydrated to _______ your immune system during changing seasons.",
    "options": [
      "bolster",
      "weaken",
      "deplete",
      "obstruct"
    ],
    "correctIndex": 0,
    "explanation": "'Bolster' means to support, strengthen, or prop up.",
    "urduExplanation": "'Bolster' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0645\u0636\u0628\u0648\u0637 \u0628\u0646\u0627\u0646\u0627 \u06cc\u0627 \u062a\u0642\u0648\u06cc\u062a \u062f\u06cc\u0646\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-05",
    "sentence": "The professor gave a remarkably _______ lecture that simplified complex concepts of astrophysics.",
    "options": [
      "lucid",
      "confusing",
      "opaque",
      "chaotic"
    ],
    "correctIndex": 0,
    "explanation": "'Lucid' means clear and easily intelligible.",
    "urduExplanation": "'Lucid' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0648\u0627\u0636\u062d \u0627\u0648\u0631 \u0622\u0633\u0627\u0646 \u0641\u06c1\u0645 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-06",
    "sentence": "Volunteers worked through the weekend to _______ food supplies to families displaced by coastal floods.",
    "options": [
      "distribute",
      "confiscate",
      "withhold",
      "conceal"
    ],
    "correctIndex": 0,
    "explanation": "'Distribute' means to give out or share among a number of recipients.",
    "urduExplanation": "\u0627\u0645\u062f\u0627\u062f\u06cc \u0633\u0627\u0645\u0627\u0646 \u062a\u0642\u0633\u06cc\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'distribute' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-07",
    "sentence": "The newly planted saplings began to _______ as soon as regular rainfall nourished the soil.",
    "options": [
      "flourish",
      "wither",
      "decay",
      "collapse"
    ],
    "correctIndex": 0,
    "explanation": "'Flourish' means to grow healthy and thrive.",
    "urduExplanation": "\u067e\u0648\u062f\u0648\u06ba \u06a9\u06d2 \u067e\u06be\u0644\u0646\u06d2 \u067e\u06be\u0648\u0644\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'flourish' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-08",
    "sentence": "Her teammates praised her for remaining remarkably _______ under high-pressure tournament conditions.",
    "options": [
      "composed",
      "agitated",
      "hysterical",
      "distracted"
    ],
    "correctIndex": 0,
    "explanation": "'Composed' means calm and in control of one's feelings.",
    "urduExplanation": "\u062f\u0628\u0627\u0624 \u0645\u06cc\u06ba \u067e\u0631\u0633\u06a9\u0648\u0646 \u0627\u0648\u0631 \u0642\u0627\u0628\u0648 \u0645\u06cc\u06ba \u0631\u06c1\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'composed' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-09",
    "sentence": "The environmental treaty urged all signatory nations to _______ greenhouse gas emissions significantly.",
    "options": [
      "curtail",
      "expand",
      "prolong",
      "inflate"
    ],
    "correctIndex": 0,
    "explanation": "'Curtail' means to reduce in extent or quantity; impose a restriction on.",
    "urduExplanation": "\u0627\u062e\u0631\u0627\u062c \u0645\u06cc\u06ba \u06a9\u0645\u06cc \u0644\u0627\u0646\u06d2 \u06cc\u0627 \u0631\u0648\u06a9\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'curtail' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-10",
    "sentence": "Regular mindfulness meditation has been shown to _______ stress levels among college students.",
    "options": [
      "alleviate",
      "aggravate",
      "intensify",
      "multiply"
    ],
    "correctIndex": 0,
    "explanation": "'Alleviate' means to make suffering or deficiency less severe.",
    "urduExplanation": "\u062a\u06a9\u0644\u06cc\u0641 \u06cc\u0627 \u062f\u0628\u0627\u0624 \u06a9\u0648 \u06a9\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'alleviate' \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-11",
    "sentence": "The remote island has developed unique wildlife species due to millions of years of geographic _______.",
    "options": [
      "isolation",
      "integration",
      "congestion",
      "fusion"
    ],
    "correctIndex": 0,
    "explanation": "'Isolation' refers to the state of being separated from others.",
    "urduExplanation": "\u062a\u0646\u06c1\u0627\u0626\u06cc \u06cc\u0627 \u0627\u0644\u06af \u062a\u06be\u0644\u06af \u0631\u06c1\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'isolation' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-12",
    "sentence": "Modern smartphones incorporate biometric authentication to ensure personal data _______.",
    "options": [
      "confidentiality",
      "publicity",
      "casualness",
      "negligence"
    ],
    "correctIndex": 0,
    "explanation": "'Confidentiality' is the state of keeping secrets or private information safe.",
    "urduExplanation": "\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u06a9\u0648 \u0635\u06cc\u063a\u06c1 \u0631\u0627\u0632 \u0645\u06cc\u06ba \u0631\u06a9\u06be\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'confidentiality' \u062f\u0631\u0633\u062a \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-13",
    "sentence": "The archaeological excavation revealed that ancient civil engineering methods were surprisingly _______.",
    "options": [
      "sophisticated",
      "primitive",
      "clumsy",
      "useless"
    ],
    "correctIndex": 0,
    "explanation": "'Sophisticated' means highly developed, complex, and refined.",
    "urduExplanation": "\u062a\u0631\u0642\u06cc \u06cc\u0627\u0641\u062a\u06c1 \u0627\u0648\u0631 \u062c\u062f\u06cc\u062f \u0645\u06c1\u0627\u0631\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 'sophisticated' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-gen-14",
    "sentence": "The community sports center offers affordable membership fees to _______ regular participation.",
    "options": [
      "encourage",
      "deter",
      "prevent",
      "penalize"
    ],
    "correctIndex": 0,
    "explanation": "'Encourage' means to give support, confidence, or hope to someone.",
    "urduExplanation": "\u062d\u0648\u0635\u0644\u06c1 \u0627\u0641\u0632\u0627\u0626\u06cc \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 'encourage' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  },
  {
    "id": "vs-biz-01",
    "sentence": "The CFO delivered a lucid presentation that served to _______ the complex regulatory guidelines.",
    "options": [
      "clarify",
      "confuse",
      "conceal",
      "condemn"
    ],
    "correctIndex": 0,
    "explanation": "'Clarify' means to make an idea clear and easy to understand.",
    "urduExplanation": "\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u06a9\u0648 \u0622\u0633\u0627\u0646 \u0627\u0648\u0631 \u0648\u0627\u0636\u062d \u0627\u0646\u062f\u0627\u0632 \u0645\u06cc\u06ba \u0633\u0645\u062c\u06be\u0627\u0646\u06d2 \u06a9\u0648 'clarify' \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4"
  },
  {
    "id": "vs-biz-02",
    "sentence": "The audit team carried out rigorous sample testing to _______ the authenticity of trade receivables.",
    "options": [
      "verify",
      "vibrate",
      "vanish",
      "violate"
    ],
    "correctIndex": 0,
    "explanation": "'Verify' means to check or confirm the accuracy of records.",
    "urduExplanation": "\u062f\u0631\u0633\u062a\u06af\u06cc \u0627\u0648\u0631 \u0633\u0686\u0627\u0626\u06cc \u06a9\u06cc \u062a\u0635\u062f\u06cc\u0642 \u06a9\u06d2 \u0644\u06cc\u06d2 'verify' \u0622\u062a\u0627 \u06c1\u06d2\u06d4"
  }
];

// ============================================================================
// VOCABULARY TASK 5: Context Matching
// ============================================================================
export const EXPANDED_VOCAB_CONTEXT_POOL: VocabWordMatchItem[] = [
  ...APTIS_TEST_SET_1.core.vocabContextMatching,
  ...APTIS_TEST_SET_2.core.vocabContextMatching,
  {
    "id": "vx-gen-01",
    "targetWord": "objective",
    "correctMatch": "unbiased",
    "options": [
      "unbiased",
      "emotional",
      "prejudiced",
      "subjective"
    ],
    "explanation": "'Objective' means impartial, factual, and unbiased.",
    "urduExplanation": "'Objective' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u063a\u06cc\u0631 \u062c\u0627\u0646\u0628\u062f\u0627\u0631 \u0627\u0648\u0631 \u062d\u0642\u06cc\u0642\u062a \u067e\u0633\u0646\u062f (Unbiased) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-02",
    "targetWord": "comply",
    "correctMatch": "abide by",
    "options": [
      "abide by",
      "resist",
      "reject",
      "disregard"
    ],
    "explanation": "'Comply' means to act in accordance with a wish, request, or rule.",
    "urduExplanation": "'Comply' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0627\u0635\u0648\u0644\u0648\u06ba \u06a9\u06cc \u067e\u0627\u0633\u062f\u0627\u0631\u06cc \u06a9\u0631\u0646\u0627 (Abide by) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-03",
    "targetWord": "fluctuate",
    "correctMatch": "oscillate",
    "options": [
      "oscillate",
      "stabilize",
      "freeze",
      "stagnate"
    ],
    "explanation": "'Fluctuate' means to rise and fall irregularly in number or amount.",
    "urduExplanation": "'Fluctuate' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0627\u062a\u0627\u0631 \u0686\u0691\u06be\u0627\u0624 \u0622\u0646\u0627 \u06cc\u0627 \u062c\u06be\u0648\u0644\u0646\u0627 (Oscillate) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-04",
    "targetWord": "consolidate",
    "correctMatch": "combine",
    "options": [
      "combine",
      "scatter",
      "divide",
      "isolate"
    ],
    "explanation": "'Consolidate' means to combine multiple things into a single more effective whole.",
    "urduExplanation": "'Consolidate' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06cc\u06a9\u062c\u0627 \u06a9\u0631\u0646\u0627 \u06cc\u0627 \u0645\u0644\u0627 \u06a9\u0631 \u0645\u0636\u0628\u0648\u0637 \u06a9\u0631\u0646\u0627 (Combine) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-05",
    "targetWord": "adverse",
    "correctMatch": "unfavourable",
    "options": [
      "unfavourable",
      "beneficial",
      "advantageous",
      "pleasant"
    ],
    "explanation": "'Adverse' describes conditions that prevent success or development.",
    "urduExplanation": "'Adverse' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0646\u0627 \u0645\u0648\u0627\u0641\u0642 \u06cc\u0627 \u0645\u0646\u0641\u06cc (Unfavourable) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-06",
    "targetWord": "competent",
    "correctMatch": "capable",
    "options": [
      "capable",
      "inept",
      "clumsy",
      "unskilled"
    ],
    "explanation": "'Competent' means having the necessary ability, knowledge, or skill.",
    "urduExplanation": "'Competent' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0642\u0627\u0628\u0644 \u0627\u0648\u0631 \u0628\u0627\u0635\u0644\u0627\u062d\u06cc\u062a (Capable) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-07",
    "targetWord": "allocate",
    "correctMatch": "distribute",
    "options": [
      "distribute",
      "withhold",
      "confiscate",
      "gather"
    ],
    "explanation": "'Allocate' means to apportion or distribute resources for a specific purpose.",
    "urduExplanation": "'Allocate' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0648\u0633\u0627\u0626\u0644 \u06a9\u0648 \u0645\u062e\u0635\u0648\u0635 \u06a9\u0627\u0645 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0645\u062e\u062a\u0635 \u06a9\u0631\u0646\u0627 (Distribute) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-08",
    "targetWord": "transparency",
    "correctMatch": "openness",
    "options": [
      "openness",
      "secrecy",
      "opacity",
      "ambiguity"
    ],
    "explanation": "'Transparency' implies honesty, clarity, and openness.",
    "urduExplanation": "'Transparency' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0634\u0641\u0627\u0641\u06cc\u062a \u0627\u0648\u0631 \u06a9\u06be\u0644\u0627 \u067e\u0646 (Openness) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-09",
    "targetWord": "perseverance",
    "correctMatch": "persistence",
    "options": [
      "persistence",
      "hesitation",
      "quitting",
      "doubt"
    ],
    "explanation": "'Perseverance' is persistence in doing something despite difficulty or delay.",
    "urduExplanation": "'Perseverance' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u062b\u0627\u0628\u062a \u0642\u062f\u0645\u06cc \u0627\u0648\u0631 \u0627\u0633\u062a\u0642\u0627\u0645\u062a (Persistence) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-10",
    "targetWord": "harmonious",
    "correctMatch": "concordant",
    "options": [
      "concordant",
      "discordant",
      "clashing",
      "hostile"
    ],
    "explanation": "'Harmonious' means tuneful, agreeable, and in peaceful accord.",
    "urduExplanation": "'Harmonious' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u0645 \u0622\u06c1\u0646\u06af \u0627\u0648\u0631 \u062e\u0648\u0634\u06af\u0648\u0627\u0631 (Concordant) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-11",
    "targetWord": "innovative",
    "correctMatch": "pioneering",
    "options": [
      "pioneering",
      "imitative",
      "obsolete",
      "conservative"
    ],
    "explanation": "'Innovative' involves pioneering new ideas or original techniques.",
    "urduExplanation": "'Innovative' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u062c\u062f\u062a \u0637\u0631\u0627\u0632 \u0627\u0648\u0631 \u0631\u06c1\u0646\u0645\u0627 (Pioneering) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-12",
    "targetWord": "pivotal",
    "correctMatch": "crucial",
    "options": [
      "crucial",
      "minor",
      "trivial",
      "inessential"
    ],
    "explanation": "'Pivotal' means of crucial importance in relation to the development of something.",
    "urduExplanation": "'Pivotal' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0627\u06c1\u0645\u06cc\u062a \u06a9\u0627 \u062d\u0627\u0645\u0644 \u06cc\u0627 \u06a9\u0644\u06cc\u062f\u06cc (Crucial) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-13",
    "targetWord": "scrutiny",
    "correctMatch": "inspection",
    "options": [
      "inspection",
      "neglect",
      "disregard",
      "glance"
    ],
    "explanation": "'Scrutiny' means critical observation or examination.",
    "urduExplanation": "'Scrutiny' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u0628\u0627\u0631\u06cc\u06a9 \u0628\u06cc\u0646\u06cc \u0633\u06d2 \u0645\u0639\u0627\u0626\u0646\u06c1 (Inspection) \u06c1\u06d2\u06d4"
  },
  {
    "id": "vx-gen-14",
    "targetWord": "sustainable",
    "correctMatch": "renewable",
    "options": [
      "renewable",
      "exhaustible",
      "destructive",
      "harmful"
    ],
    "explanation": "'Sustainable' means able to be maintained at a certain rate without depleting resources.",
    "urduExplanation": "'Sustainable' \u06a9\u0627 \u0645\u0637\u0644\u0628 \u067e\u0627\u0626\u06cc\u062f\u0627\u0631 \u0627\u0648\u0631 \u0642\u0627\u0628\u0644\u0650 \u062a\u062c\u062f\u06cc\u062f (Renewable) \u06c1\u06d2\u06d4"
  }
];
