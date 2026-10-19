# scripts/build_expanded_vocab_pools.py
import json

# ============================================================================
# VOCABULARY TASK 1: Word Matching / Synonyms (Target Word -> Synonym)
# ============================================================================
VOCAB_MATCHING = [
  # General English: Everyday, Education, Health, Tech, Environment, Travel, Hobbies, Social, Work, Relationships
  {
    "id": "vm-gen-01",
    "targetWord": "abundant",
    "correctMatch": "plentiful",
    "options": ["plentiful", "scarce", "fragile", "hostile"],
    "explanation": "'Abundant' means existing or available in large quantities; plentiful.",
    "urduExplanation": "'Abundant' کا مطلب وافر مقدار میں ہونا یا کثیر (Plentiful) ہے۔"
  },
  {
    "id": "vm-gen-02",
    "targetWord": "resilient",
    "correctMatch": "tough",
    "options": ["tough", "fragile", "hesitant", "clumsy"],
    "explanation": "'Resilient' describes the ability to recover quickly from difficulties; tough.",
    "urduExplanation": "'Resilient' کا مطلب مشکلات کا جوانمردی سے مقابلہ کرنے والا یا مضبوط (Tough) ہے۔"
  },
  {
    "id": "vm-gen-03",
    "targetWord": "hazardous",
    "correctMatch": "perilous",
    "options": ["perilous", "peaceful", "beneficial", "delightful"],
    "explanation": "'Hazardous' means risky or dangerous; perilous.",
    "urduExplanation": "'Hazardous' کا مطلب خطرناک یا نقصان دہ (Perilous) ہے۔"
  },
  {
    "id": "vm-gen-04",
    "targetWord": "tranquil",
    "correctMatch": "serene",
    "options": ["serene", "turbulent", "crowded", "hectic"],
    "explanation": "'Tranquil' means calm, quiet, and peaceful; serene.",
    "urduExplanation": "'Tranquil' کا مطلب پرسکون اور خاموش (Serene) ہے۔"
  },
  {
    "id": "vm-gen-05",
    "targetWord": "meticulous",
    "correctMatch": "thorough",
    "options": ["thorough", "careless", "hasty", "superficial"],
    "explanation": "'Meticulous' means showing great attention to detail; thorough.",
    "urduExplanation": "'Meticulous' کا مطلب انتہائی باریک بین اور محتاط (Thorough) ہے۔"
  },
  {
    "id": "vm-gen-06",
    "targetWord": "obsolete",
    "correctMatch": "outdated",
    "options": ["outdated", "modern", "fashionable", "essential"],
    "explanation": "'Obsolete' refers to something no longer produced or used; outdated.",
    "urduExplanation": "'Obsolete' کا مطلب پرانا یا متروک (Outdated) ہے۔"
  },
  {
    "id": "vm-gen-07",
    "targetWord": "profound",
    "correctMatch": "deep",
    "options": ["deep", "shallow", "trivial", "insignificant"],
    "explanation": "'Profound' means having very great knowledge, meaning, or depth.",
    "urduExplanation": "'Profound' کا مطلب گہرا اور معنی خیز (Deep) ہے۔"
  },
  {
    "id": "vm-gen-08",
    "targetWord": "diminish",
    "correctMatch": "decrease",
    "options": ["decrease", "expand", "multiply", "intensify"],
    "explanation": "'Diminish' means to make or become less; decrease.",
    "urduExplanation": "'Diminish' کا مطلب کم ہونا یا گھٹنا (Decrease) ہے۔"
  },
  {
    "id": "vm-gen-09",
    "targetWord": "thrive",
    "correctMatch": "prosper",
    "options": ["prosper", "deteriorate", "decline", "stagnate"],
    "explanation": "'Thrive' means to grow or develop vigorously; prosper.",
    "urduExplanation": "'Thrive' کا مطلب پھلنا پھولنا اور ترقی کرنا (Prosper) ہے۔"
  },
  {
    "id": "vm-gen-10",
    "targetWord": "candid",
    "correctMatch": "frank",
    "options": ["frank", "evasive", "deceitful", "cautious"],
    "explanation": "'Candid' means truthful and straightforward; frank.",
    "urduExplanation": "'Candid' کا مطلب کھرا اور صاف گو (Frank) ہے۔"
  },
  {
    "id": "vm-gen-11",
    "targetWord": "versatile",
    "correctMatch": "adaptable",
    "options": ["adaptable", "rigid", "inflexible", "limited"],
    "explanation": "'Versatile' means able to adapt to many different functions or activities.",
    "urduExplanation": "'Versatile' کا مطلب ہر فن مولا یا ہر ماحول میں ڈھلنے والا (Adaptable) ہے۔"
  },
  {
    "id": "vm-gen-12",
    "targetWord": "lucid",
    "correctMatch": "clear",
    "options": ["clear", "vague", "murky", "confusing"],
    "explanation": "'Lucid' means expressed clearly and easy to understand.",
    "urduExplanation": "'Lucid' کا مطلب واضح اور آسان فہم (Clear) ہے۔"
  },
  {
    "id": "vm-gen-13",
    "targetWord": "foster",
    "correctMatch": "nurture",
    "options": ["nurture", "discourage", "suppress", "neglect"],
    "explanation": "'Foster' means to encourage or promote the development of something.",
    "urduExplanation": "'Foster' کا مطلب پرورش کرنا یا پروان چڑھانا (Nurture) ہے۔"
  },
  {
    "id": "vm-gen-14",
    "targetWord": "feasible",
    "correctMatch": "viable",
    "options": ["viable", "impossible", "impractical", "unrealistic"],
    "explanation": "'Feasible' means possible to do easily or conveniently; viable.",
    "urduExplanation": "'Feasible' کا مطلب قابلِ عمل یا ممکن (Viable) ہے۔"
  },
  {
    "id": "vm-gen-15",
    "targetWord": "authentic",
    "correctMatch": "genuine",
    "options": ["genuine", "synthetic", "counterfeit", "artificial"],
    "explanation": "'Authentic' means of undisputed origin; genuine.",
    "urduExplanation": "'Authentic' کا مطلب اصلی اور مستند (Genuine) ہے۔"
  },
  {
    "id": "vm-gen-16",
    "targetWord": "unanimous",
    "correctMatch": "undivided",
    "options": ["undivided", "disputed", "divided", "controversial"],
    "explanation": "'Unanimous' means held by or having everyone's complete agreement.",
    "urduExplanation": "'Unanimous' کا مطلب متفقہ اور غیر منقسم (Undivided) ہے۔"
  },
  {
    "id": "vm-gen-17",
    "targetWord": "sluggish",
    "correctMatch": "slow-moving",
    "options": ["slow-moving", "energetic", "brisk", "rapid"],
    "explanation": "'Sluggish' means slow to act or respond; inactive.",
    "urduExplanation": "'Sluggish' کا مطلب سست رفتار اور کاہل (Slow-moving) ہے۔"
  },
  {
    "id": "vm-gen-18",
    "targetWord": "conspicuous",
    "correctMatch": "noticeable",
    "options": ["noticeable", "hidden", "inconspicuous", "obscure"],
    "explanation": "'Conspicuous' means standing out so as to be clearly visible; noticeable.",
    "urduExplanation": "'Conspicuous' کا مطلب نمایاں اور واضح طور پر نظر آنے والا (Noticeable) ہے۔"
  },
  {
    "id": "vm-gen-19",
    "targetWord": "tedious",
    "correctMatch": "monotonous",
    "options": ["monotonous", "exciting", "thrilling", "fascinating"],
    "explanation": "'Tedious' means too long, slow, or dull; tiresome or monotonous.",
    "urduExplanation": "'Tedious' کا مطلب اکتا دینے والا اور یکتا (Monotonous) ہے۔"
  },
  {
    "id": "vm-gen-20",
    "targetWord": "diligent",
    "correctMatch": "hardworking",
    "options": ["hardworking", "idle", "negligent", "careless"],
    "explanation": "'Diligent' means showing care and conscientiousness in one's work.",
    "urduExplanation": "'Diligent' کا مطلب محنتی اور پرعزم (Hardworking) ہے۔"
  },
  {
    "id": "vm-gen-21",
    "targetWord": "rudimentary",
    "correctMatch": "basic",
    "options": ["basic", "advanced", "sophisticated", "intricate"],
    "explanation": "'Rudimentary' means limited to basic principles; elementary.",
    "urduExplanation": "'Rudimentary' کا مطلب بنیادی اور ابتدائی (Basic) ہے۔"
  },
  {
    "id": "vm-gen-22",
    "targetWord": "eccentric",
    "correctMatch": "unconventional",
    "options": ["unconventional", "traditional", "ordinary", "customary"],
    "explanation": "'Eccentric' means unconventional and slightly strange.",
    "urduExplanation": "'Eccentric' کا مطلب غیر روایتی اور انوکھا (Unconventional) ہے۔"
  },
  {
    "id": "vm-gen-23",
    "targetWord": "stamina",
    "correctMatch": "endurance",
    "options": ["endurance", "weakness", "lethargy", "fatigue"],
    "explanation": "'Stamina' means the ability to sustain prolonged physical or mental effort.",
    "urduExplanation": "'Stamina' کا مطلب جسمانی یا ذہنی قوتِ برداشت (Endurance) ہے۔"
  },
  {
    "id": "vm-gen-24",
    "targetWord": "remedy",
    "correctMatch": "cure",
    "options": ["cure", "disease", "poison", "worsening"],
    "explanation": "'Remedy' means a treatment or cure for an illness or problem.",
    "urduExplanation": "'Remedy' کا مطلب علاج یا مداوا (Cure) ہے۔"
  },
  {
    "id": "vm-gen-25",
    "targetWord": "itinerary",
    "correctMatch": "travel plan",
    "options": ["travel plan", "souvenir", "luggage", "passport"],
    "explanation": "'Itinerary' refers to a planned route or journey schedule.",
    "urduExplanation": "'Itinerary' کا مطلب سفر کا تفصیلی شیڈول یا منصوبہ (Travel plan) ہے۔"
  },
  {
    "id": "vm-gen-26",
    "targetWord": "empathy",
    "correctMatch": "compassion",
    "options": ["compassion", "indifference", "apathy", "cruelty"],
    "explanation": "'Empathy' is the ability to understand and share the feelings of another.",
    "urduExplanation": "'Empathy' کا مطلب ہمدردی اور دوسرے کے احساسات کو سمجھنا (Compassion) ہے۔"
  },
  {
    "id": "vm-gen-27",
    "targetWord": "innovative",
    "correctMatch": "inventive",
    "options": ["inventive", "outdated", "imitative", "customary"],
    "explanation": "'Innovative' means featuring new methods; advanced and original.",
    "urduExplanation": "'Innovative' کا مطلب تخلیقی اور نیا طریقہ لانے والا (Inventive) ہے۔"
  },
  {
    "id": "vm-gen-28",
    "targetWord": "preserve",
    "correctMatch": "conserve",
    "options": ["conserve", "destroy", "neglect", "ruin"],
    "explanation": "'Preserve' means to maintain something in its original or existing state.",
    "urduExplanation": "'Preserve' کا مطلب محفوظ رکھنا اور حفاظت کرنا (Conserve) ہے۔"
  },
  {
    "id": "vm-gen-29",
    "targetWord": "collaborate",
    "correctMatch": "cooperate",
    "options": ["cooperate", "compete", "dispute", "isolate"],
    "explanation": "'Collaborate' means to work jointly on an activity or project.",
    "urduExplanation": "'Collaborate' کا مطلب باہمی تعاون سے مل کر کام کرنا (Cooperate) ہے۔"
  },
  {
    "id": "vm-gen-30",
    "targetWord": "affluent",
    "correctMatch": "wealthy",
    "options": ["wealthy", "destitute", "impoverished", "needy"],
    "explanation": "'Affluent' describes having a great deal of money; wealthy.",
    "urduExplanation": "'Affluent' کا مطلب دولت مند اور خوشحال (Wealthy) ہے۔"
  },

  # Occasional business & accounting items (~15%)
  {
    "id": "vm-biz-01",
    "targetWord": "reconcile",
    "correctMatch": "harmonize",
    "options": ["harmonize", "disregard", "postpone", "liquidate"],
    "explanation": "'Reconcile' means to check for harmony or agreement between accounts.",
    "urduExplanation": "'Reconcile' کا مطلب ہے کھاتوں کے درمیان تال میل اور مطابقت پیدا کرنا۔"
  },
  {
    "id": "vm-biz-02",
    "targetWord": "scrutinize",
    "correctMatch": "examine closely",
    "options": ["examine closely", "ignore", "approve quickly", "disclose"],
    "explanation": "'Scrutinize' means to examine working papers with close critical detail.",
    "urduExplanation": "'Scrutinize' کا مطلب ہے گہری نظر سے اور باریک بینی سے جانچ پڑتال کرنا۔"
  },
  {
    "id": "vm-biz-03",
    "targetWord": "statutory",
    "correctMatch": "mandatory by law",
    "options": ["mandatory by law", "voluntary", "temporary", "customary"],
    "explanation": "'Statutory' means required, enacted, or permitted by statute or law.",
    "urduExplanation": "'Statutory' کا مطلب ہے قانون کے تحت لازمی قرار دیا گیا۔"
  },
  {
    "id": "vm-biz-04",
    "targetWord": "prudent",
    "correctMatch": "cautious and sensible",
    "options": ["cautious and sensible", "reckless", "hasty", "generous"],
    "explanation": "'Prudent' denotes acting with care and sound financial foresight.",
    "urduExplanation": "'Prudent' کا مطلب ہے محتاط، دور اندیش اور عقل مندی سے کام لینے والا۔"
  },
  {
    "id": "vm-biz-05",
    "targetWord": "materiality",
    "correctMatch": "significance",
    "options": ["significance", "tangibility", "triviality", "decoration"],
    "explanation": "In auditing, 'materiality' refers to the threshold of significance that influences decisions.",
    "urduExplanation": "آڈٹ میں 'materiality' کا مطلب ہے اہمیت اور اثر انگیزی کی وہ حد جو فیصلوں کو بدل سکے۔"
  },
  {
    "id": "vm-biz-06",
    "targetWord": "substantiate",
    "correctMatch": "provide evidence for",
    "options": ["provide evidence for", "discredit", "overlook", "conceal"],
    "explanation": "'Substantiate' means to establish proof or back a claim with valid documentary evidence.",
    "urduExplanation": "'Substantiate' کا مطلب ہے ٹھوس شواہد اور دستاویزی ثبوتوں سے ثابت کرنا۔"
  }
]

# ============================================================================
# VOCABULARY TASK 2: Word Definitions (Definition -> Word)
# ============================================================================
VOCAB_DEFINITIONS = [
  # General English definitions across science, nature, technology, education, everyday, health
  {
    "id": "vd-gen-01",
    "definition": "The natural environment or home where a specific species of animal, plant, or organism lives.",
    "correctWord": "Habitat",
    "options": ["Habitat", "Harvest", "Horizon", "Hangar"],
    "explanation": "A 'Habitat' is the natural home or environment of a plant or animal.",
    "urduExplanation": "کسی جاندار یا پودے کے قدرتی مسکن کو 'Habitat' کہا جاتا ہے۔"
  },
  {
    "id": "vd-gen-02",
    "definition": "A step-by-step set of mathematical rules or computational procedures used to solve a problem.",
    "correctWord": "Algorithm",
    "options": ["Algorithm", "Algebra", "Allusion", "Almanac"],
    "explanation": "An 'Algorithm' is a defined process or set of rules for computer calculations.",
    "urduExplanation": "مسئلہ حل کرنے کے کمپیوٹرائزڈ طریقہ کار کو 'Algorithm' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-03",
    "definition": "The formal academic subjects and educational content comprising a course of study at a school or university.",
    "correctWord": "Curriculum",
    "options": ["Curriculum", "Campus", "Corridor", "Certificate"],
    "explanation": "A 'Curriculum' represents the courses and educational topics offered in an academic institution.",
    "urduExplanation": "تعلیمی ادارے کے تدریسی نصاب کو 'Curriculum' کہا جاتا ہے۔"
  },
  {
    "id": "vd-gen-04",
    "definition": "A biological community of interacting living organisms and their physical abiotic environment.",
    "correctWord": "Ecosystem",
    "options": ["Ecosystem", "Economy", "Eclipse", "Ecology"],
    "explanation": "An 'Ecosystem' is a biological community interacting with its environment.",
    "urduExplanation": "جانداروں اور ان کے قدرتی ماحول کے باہمی نظام کو 'Ecosystem' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-05",
    "definition": "A slowly moving mass or river of compacted ice formed over centuries on high mountains.",
    "correctWord": "Glacier",
    "options": ["Glacier", "Geyser", "Gorge", "Gully"],
    "explanation": "A 'Glacier' is a dense river of ice formed by snow accumulation.",
    "urduExplanation": "پہاڑوں پر جمی برف کے بڑے تودے کو 'Glacier' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-06",
    "definition": "An elaborate, extensive musical composition for a full symphony orchestra, usually in four movements.",
    "correctWord": "Symphony",
    "options": ["Symphony", "Sonnet", "Solo", "Stanza"],
    "explanation": "A 'Symphony' is a classical orchestral composition in multiple movements.",
    "urduExplanation": "بڑے آرکسٹرا کے لیے ترتیب دی گئی کلاسیکی موسیقی کو 'Symphony' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-07",
    "definition": "An early sample, physical model, or preliminary release of a product built to test a concept.",
    "correctWord": "Prototype",
    "options": ["Prototype", "Paragraph", "Paragon", "Portfolio"],
    "explanation": "A 'Prototype' is an initial working model built to test a system or invention.",
    "urduExplanation": "کسی نئی ایجاد یا پراڈکٹ کے ابتدائی ماڈل کو 'Prototype' کہا جاتا ہے۔"
  },
  {
    "id": "vd-gen-08",
    "definition": "An organized journey undertaken by a group of people with a distinct scientific or exploration goal.",
    "correctWord": "Expedition",
    "options": ["Expedition", "Excursion", "Exhibition", "Evacuation"],
    "explanation": "An 'Expedition' is a journey with a specific exploration or scientific mission.",
    "urduExplanation": "کسی خاص تحقیقی یا مہماتی سفر کو 'Expedition' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-09",
    "definition": "The psychological ability to recognize, understand, and share the emotions and perspectives of others.",
    "correctWord": "Empathy",
    "options": ["Empathy", "Envy", "Egoism", "Entropy"],
    "explanation": "'Empathy' denotes understanding and vicariously experiencing another person's feelings.",
    "urduExplanation": "دوسروں کے جذبات کو سمجھنے اور محسوس کرنے کی صلاحیت کو 'Empathy' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-10",
    "definition": "A protected nature reserve or refuge where birds and wild animals are safeguarded from hunting.",
    "correctWord": "Sanctuary",
    "options": ["Sanctuary", "Stadium", "Studio", "Station"],
    "explanation": "A 'Sanctuary' is a secure place of shelter and safety for wildlife.",
    "urduExplanation": "جنگلی حیات کی حفاظت کے لیے محفوظ قدرتی پناہ گاہ کو 'Sanctuary' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-11",
    "definition": "An optical astronomical instrument with lenses or mirrors used to observe distant celestial bodies.",
    "correctWord": "Telescope",
    "options": ["Telescope", "Telegraph", "Thermometer", "Turbine"],
    "explanation": "A 'Telescope' magnifies distant stars, planets, and galaxies.",
    "urduExplanation": "ستاروں اور سیاروں کے مشاہدے کے لیے دوربین کو 'Telescope' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-12",
    "definition": "A historical object, tool, or decorative piece made by human beings in the ancient past.",
    "correctWord": "Artifact",
    "options": ["Artifact", "Artisan", "Archive", "Atlas"],
    "explanation": "An 'Artifact' is an archaeological relic of human manufacture.",
    "urduExplanation": "قدیم دور کی انسان ساختہ تاریخی شے یا باقیات کو 'Artifact' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-13",
    "definition": "The practice or charitable desire of promoting human welfare through generous donations and altruism.",
    "correctWord": "Philanthropy",
    "options": ["Philanthropy", "Philosophy", "Psychology", "Physiology"],
    "explanation": "'Philanthropy' involves donating wealth or resources to assist societal causes.",
    "urduExplanation": "انسانی فلاح و بہبود کے لیے سخاوت اور خیرات کو 'Philanthropy' کہا جاتا ہے۔"
  },
  {
    "id": "vd-gen-14",
    "definition": "The process of moving permanently from one geographic region or country to settle in another.",
    "correctWord": "Migration",
    "options": ["Migration", "Mutation", "Meditation", "Moderation"],
    "explanation": "'Migration' refers to seasonal or permanent movement between locations.",
    "urduExplanation": "ایک علاقے سے دوسرے علاقے منتقل ہونے کو 'Migration' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-15",
    "definition": "An extensive group, chain, or cluster of islands scattered across an ocean or sea.",
    "correctWord": "Archipelago",
    "options": ["Archipelago", "Aqueduct", "Avalanche", "Atoll"],
    "explanation": "An 'Archipelago' is an expansive chain or group of islands.",
    "urduExplanation": "جزائر کے جھرمٹ یا سلسلے کو 'Archipelago' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-16",
    "definition": "The biochemical process by which living organisms assimilate food substances essential for growth and health.",
    "correctWord": "Nutrition",
    "options": ["Nutrition", "Nausea", "Notification", "Notion"],
    "explanation": "'Nutrition' is the provision of nourishment necessary for health.",
    "urduExplanation": "صحت اور نشوونما کے لیے درکار غذائی عمل کو 'Nutrition' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-17",
    "definition": "A medical device used by doctors to listen to heartbeats and respiratory lung sounds.",
    "correctWord": "Stethoscope",
    "options": ["Stethoscope", "Syringe", "Scalpel", "Sedative"],
    "explanation": "A 'Stethoscope' is an acoustic medical instrument for auscultation.",
    "urduExplanation": "دل اور پھیپھڑوں کی آواز سننے والے طبی آلے کو 'Stethoscope' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-18",
    "definition": "The historic customs, valued traditions, and monuments passed down through generations of a society.",
    "correctWord": "Heritage",
    "options": ["Heritage", "Horizon", "Harvest", "Homage"],
    "explanation": "'Heritage' encompasses culture, buildings, and traditions inherited from ancestors.",
    "urduExplanation": "آباء و اجداد سے ورثے میں ملنے والی روایات اور یادگاروں کو 'Heritage' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-19",
    "definition": "The remote delivery of medical healthcare services and consultations using telecommunications technology.",
    "correctWord": "Telemedicine",
    "options": ["Telemedicine", "Therapy", "Transfusion", "Toxicology"],
    "explanation": "'Telemedicine' provides remote clinical healthcare via digital devices.",
    "urduExplanation": "انٹرنیٹ کے ذریعے دور دراز طبی معائنے کو 'Telemedicine' کہتے ہیں۔"
  },
  {
    "id": "vd-gen-20",
    "definition": "A biological organism's natural ability to withstand or ward off harmful pathogens and infections.",
    "correctWord": "Immunity",
    "options": ["Immunity", "Impunity", "Inflammation", "Insomnia"],
    "explanation": "'Immunity' is the state of protection against infectious disease.",
    "urduExplanation": "بیماریوں اور جراثیم کے خلاف جسم کی قدرتی مدافعت کو 'Immunity' کہتے ہیں۔"
  },

  # Occasional business & accounting definitions (~15%)
  {
    "id": "vd-biz-01",
    "definition": "A formal independent examination and verification of an organization's financial accounts and operational records.",
    "correctWord": "Audit",
    "options": ["Audit", "Auction", "Autopsy", "Avenue"],
    "explanation": "An audit is an independent review of books of account.",
    "urduExplanation": "مالیاتی کھاتوں کی غیر جانبدارانہ جانچ پڑتال کو 'Audit' کہا جاتا ہے۔"
  },
  {
    "id": "vd-biz-02",
    "definition": "A financial statement summarizing a company's assets, liabilities, and shareholders' equity at a specific point in time.",
    "correctWord": "Balance Sheet",
    "options": ["Balance Sheet", "Cash Ledger", "Stock Register", "Voucher File"],
    "explanation": "The balance sheet presents the financial position of an enterprise on a given date.",
    "urduExplanation": "مخصوص تاریخ پر کمپنی کے اثاثہ جات اور واجبات کو ظاہر کرنے والے گوشوارے کو 'Balance Sheet' کہتے ہیں۔"
  },
  {
    "id": "vd-biz-03",
    "definition": "The ease with which an asset can be converted into ready cash without affecting its market price.",
    "correctWord": "Liquidity",
    "options": ["Liquidity", "Longevity", "Legality", "Liability"],
    "explanation": "Liquidity refers to how quickly assets can be converted to cash.",
    "urduExplanation": "اثاثے کو فوری نقد رقم میں تبدیل کرنے کی آسانی اور صلاحیت کو 'Liquidity' کہتے ہیں۔"
  },
  {
    "id": "vd-biz-04",
    "definition": "The value of an owner's interest in a business, calculated as total assets minus total liabilities.",
    "correctWord": "Equity",
    "options": ["Equity", "Empathy", "Entity", "Entropy"],
    "explanation": "Equity is the residual interest in the assets of the entity after deducting liabilities.",
    "urduExplanation": "اثاثوں میں سے واجبات نکالنے کے بعد مالکان کے بقایا حصے کو 'Equity' کہتے ہیں۔"
  }
]

# ============================================================================
# VOCABULARY TASK 3: Collocations (Sentence with blank -> correct collocation)
# ============================================================================
VOCAB_COLLOCATIONS = [
  # General English collocations across daily life, health, tech, education, travel, work
  {
    "id": "vc-gen-01",
    "sentence": "Before starting a strenuous workout, athletes should always _______ some light stretching exercises.",
    "options": ["do", "make", "create", "construct"],
    "correctIndex": 0,
    "explanation": "'Do stretching / exercise' is the natural verb collocation.",
    "urduExplanation": "ورزش یا اسٹریچنگ کے لیے فعل 'do' کا استعمال فطری ہے۔"
  },
  {
    "id": "vc-gen-02",
    "sentence": "The school principal decided to _______ an exception for the student who fell ill during exams.",
    "options": ["make", "do", "have", "take"],
    "correctIndex": 0,
    "explanation": "The idiom is 'make an exception'.",
    "urduExplanation": "استثنیٰ دینے کے لیے 'make an exception' بولا جاتا ہے۔"
  },
  {
    "id": "vc-gen-03",
    "sentence": "Residents are encouraged to _______ into the habit of sorting plastic and organic waste.",
    "options": ["get", "reach", "climb", "step"],
    "correctIndex": 0,
    "explanation": "'Get into the habit of' is the customary English expression.",
    "urduExplanation": "کوئی عادت اپنانے کے لیے 'get into the habit' استعمال ہوتا ہے۔"
  },
  {
    "id": "vc-gen-04",
    "sentence": "The volunteer conservationists managed to _______ public awareness about endangered coastal turtles.",
    "options": ["raise", "rise", "lift", "grow"],
    "correctIndex": 0,
    "explanation": "The standard transitive collocation is 'raise awareness'.",
    "urduExplanation": "شعور اجاگر کرنے کے لیے 'raise awareness' بولا جاتا ہے۔"
  },
  {
    "id": "vc-gen-05",
    "sentence": "The computer programmer worked late into the night to _______ the critical sprint deadline.",
    "options": ["meet", "hit", "reach", "touch"],
    "correctIndex": 0,
    "explanation": "One 'meets a deadline' when completing work on schedule.",
    "urduExplanation": "مقررہ وقت پر کام مکمل کرنے کے لیے 'meet a deadline' آتا ہے۔"
  },
  {
    "id": "vc-gen-06",
    "sentence": "It is essential for parents to _______ good manners and respect in their children from an early age.",
    "options": ["instill", "install", "insert", "inject"],
    "correctIndex": 0,
    "explanation": "One 'instills values/manners' into a person gradually.",
    "urduExplanation": "تربیت اور اقدار سکھانے کے لیے 'instill' کا لفظ موزوں ہے۔"
  },
  {
    "id": "vc-gen-07",
    "sentence": "The hiking expedition had to _______ harsh sub-zero temperatures and strong blizzard winds.",
    "options": ["brave", "dare", "venture", "threaten"],
    "correctIndex": 0,
    "explanation": "'Brave harsh weather' means to endure difficult conditions courageously.",
    "urduExplanation": "سخت موسم کا دلیری سے مقابلہ کرنے کے لیے 'brave' استعمال ہوتا ہے۔"
  },
  {
    "id": "vc-gen-08",
    "sentence": "With disciplined daily practice, Maria managed to _______ rapid progress in her French fluency.",
    "options": ["make", "do", "have", "create"],
    "correctIndex": 0,
    "explanation": "The standard collocation is 'make progress'.",
    "urduExplanation": "ترقی کرنے کے لیے 'make progress' کہا جاتا ہے۔"
  },
  {
    "id": "vc-gen-09",
    "sentence": "The software startup plans to _______ a revolutionary mobile application next month.",
    "options": ["launch", "startle", "fire", "eject"],
    "correctIndex": 0,
    "explanation": "Companies 'launch an app/product'.",
    "urduExplanation": "نئی پراڈکٹ یا ایپ مارکیٹ میں لانے کے لیے 'launch' آتا ہے۔"
  },
  {
    "id": "vc-gen-10",
    "sentence": "During the neighborhood town hall meeting, citizens gathered to _______ their grievances.",
    "options": ["voice", "sound", "noise", "shout"],
    "correctIndex": 0,
    "explanation": "'Voice grievances/concerns' means to express complaints formally.",
    "urduExplanation": "شکایات کا اظہار کرنے کے لیے 'voice grievances' استعمال ہوتا ہے۔"
  },
  {
    "id": "vc-gen-11",
    "sentence": "After three hours of diplomatic dialogue, both delegates managed to _______ common ground.",
    "options": ["find", "invent", "trace", "uncover"],
    "correctIndex": 0,
    "explanation": "'Find common ground' means finding shared mutual opinions.",
    "urduExplanation": "باہمی اتفاق کے نکات پانے کے لیے 'find common ground' آتا ہے۔"
  },
  {
    "id": "vc-gen-12",
    "sentence": "The museum curator delivered a moving eulogy to _______ tribute to the legendary sculptor.",
    "options": ["pay", "give", "spend", "lend"],
    "correctIndex": 0,
    "explanation": "'Pay tribute to' is the set idiomatic collocation.",
    "urduExplanation": "خراجِ تحسین پیش کرنے کے لیے 'pay tribute' بولا جاتا ہے۔"
  },
  {
    "id": "vc-gen-13",
    "sentence": "To stay energized throughout the workday, it helps to _______ a balanced, nutritious diet.",
    "options": ["maintain", "retain", "contain", "sustain"],
    "correctIndex": 0,
    "explanation": "'Maintain a balanced diet' is the customary health collocation.",
    "urduExplanation": "متوازن غذا کو برقرار رکھنے کے لیے 'maintain' آتا ہے۔"
  },
  {
    "id": "vc-gen-14",
    "sentence": "The ambitious student was determined to _______ advantage of every research scholarship opportunity.",
    "options": ["take", "make", "get", "do"],
    "correctIndex": 0,
    "explanation": "'Take advantage of' means to make good use of an opportunity.",
    "urduExplanation": "موقع سے فائدہ اٹھانے کے لیے 'take advantage of' آتا ہے۔"
  },
  {
    "id": "vc-gen-15",
    "sentence": "Before booking flights, smart travelers always _______ reservations at reputable hotels.",
    "options": ["make", "do", "have", "build"],
    "correctIndex": 0,
    "explanation": "The standard collocation is 'make reservations'.",
    "urduExplanation": "ہوٹل بکنگ کے لیے 'make reservations' استعمال ہوتا ہے۔"
  },
  {
    "id": "vc-gen-16",
    "sentence": "Doctors advise that individuals should _______ regular medical checkups at least once a year.",
    "options": ["undergo", "undertake", "understand", "underwrite"],
    "correctIndex": 0,
    "explanation": "'Undergo a checkup' means to experience or submit to an examination.",
    "urduExplanation": "طبی معائنے سے گزرنے کے لیے 'undergo' آتا ہے۔"
  },

  # Occasional business & accounting collocations (~15%)
  {
    "id": "vc-biz-01",
    "sentence": "Before finalizing the corporate acquisition, the legal counsel conducted thorough due _______.",
    "options": ["diligence", "duty", "effort", "patience"],
    "correctIndex": 0,
    "explanation": "'Due diligence' is the comprehensive appraisal of a business.",
    "urduExplanation": "'Due diligence' کاروباری جانچ پڑتال کا قانونی عمل ہے۔"
  },
  {
    "id": "vc-biz-02",
    "sentence": "Management established robust internal _______ to safeguard company assets against unauthorized use.",
    "options": ["controls", "commands", "demands", "barriers"],
    "correctIndex": 0,
    "explanation": "'Internal controls' are accounting mechanisms to ensure financial integrity.",
    "urduExplanation": "داخلی کنٹرول اور حفاظتی ضوابط کے لیے 'internal controls' آتا ہے۔"
  },
  {
    "id": "vc-biz-03",
    "sentence": "Financial statements must give a true and _______ view of the company's fiscal position.",
    "options": ["fair", "fine", "free", "firm"],
    "correctIndex": 0,
    "explanation": "'True and fair view' is the foundational standard of financial reporting.",
    "urduExplanation": "کھاتوں کے درست اور شفاف جائزے کو 'true and fair view' کہتے ہیں۔"
  }
]

# ============================================================================
# VOCABULARY TASK 4: Sentence Completion (Rich general English context)
# ============================================================================
VOCAB_SENTENCES = [
  # Everyday, education, health, tech, environment, travel, work
  {
    "id": "vs-gen-01",
    "sentence": "The botanist demonstrated remarkable _______ in cataloging over three hundred rare alpine wildflowers.",
    "options": ["diligence", "negligence", "arrogance", "indifference"],
    "correctIndex": 0,
    "explanation": "'Diligence' means careful and persistent work or effort.",
    "urduExplanation": "'Diligence' کا مطلب انتھک محنت اور لگن ہے۔"
  },
  {
    "id": "vs-gen-02",
    "sentence": "The city library announced that registration for the summer reading challenge is completely _______.",
    "options": ["voluntary", "compulsory", "burdensome", "tedious"],
    "correctIndex": 0,
    "explanation": "'Voluntary' means done, given, or acting of one's own free will.",
    "urduExplanation": "'Voluntary' کا مطلب رضاکارانہ یا اپنی مرضی سے ہے۔"
  },
  {
    "id": "vs-gen-03",
    "sentence": "The solar energy panels had an immediate positive _______ on our monthly household electricity bills.",
    "options": ["impact", "defect", "barrier", "hazard"],
    "correctIndex": 0,
    "explanation": "Having a positive 'impact' means producing a marked effect or influence.",
    "urduExplanation": "مثبت اثر ظاہر کرنے کے لیے 'impact' آتا ہے۔"
  },
  {
    "id": "vs-gen-04",
    "sentence": "Doctors recommend staying well-hydrated to _______ your immune system during changing seasons.",
    "options": ["bolster", "weaken", "deplete", "obstruct"],
    "correctIndex": 0,
    "explanation": "'Bolster' means to support, strengthen, or prop up.",
    "urduExplanation": "'Bolster' کا مطلب مضبوط بنانا یا تقویت دینا ہے۔"
  },
  {
    "id": "vs-gen-05",
    "sentence": "The professor gave a remarkably _______ lecture that simplified complex concepts of astrophysics.",
    "options": ["lucid", "confusing", "opaque", "chaotic"],
    "correctIndex": 0,
    "explanation": "'Lucid' means clear and easily intelligible.",
    "urduExplanation": "'Lucid' کا مطلب واضح اور آسان فہم ہے۔"
  },
  {
    "id": "vs-gen-06",
    "sentence": "Volunteers worked through the weekend to _______ food supplies to families displaced by coastal floods.",
    "options": ["distribute", "confiscate", "withhold", "conceal"],
    "correctIndex": 0,
    "explanation": "'Distribute' means to give out or share among a number of recipients.",
    "urduExplanation": "امدادی سامان تقسیم کرنے کے لیے 'distribute' آتا ہے۔"
  },
  {
    "id": "vs-gen-07",
    "sentence": "The newly planted saplings began to _______ as soon as regular rainfall nourished the soil.",
    "options": ["flourish", "wither", "decay", "collapse"],
    "correctIndex": 0,
    "explanation": "'Flourish' means to grow healthy and thrive.",
    "urduExplanation": "پودوں کے پھلنے پھولنے کے لیے 'flourish' آتا ہے۔"
  },
  {
    "id": "vs-gen-08",
    "sentence": "Her teammates praised her for remaining remarkably _______ under high-pressure tournament conditions.",
    "options": ["composed", "agitated", "hysterical", "distracted"],
    "correctIndex": 0,
    "explanation": "'Composed' means calm and in control of one's feelings.",
    "urduExplanation": "دباؤ میں پرسکون اور قابو میں رہنے کے لیے 'composed' آتا ہے۔"
  },
  {
    "id": "vs-gen-09",
    "sentence": "The environmental treaty urged all signatory nations to _______ greenhouse gas emissions significantly.",
    "options": ["curtail", "expand", "prolong", "inflate"],
    "correctIndex": 0,
    "explanation": "'Curtail' means to reduce in extent or quantity; impose a restriction on.",
    "urduExplanation": "اخراج میں کمی لانے یا روکنے کے لیے 'curtail' آتا ہے۔"
  },
  {
    "id": "vs-gen-10",
    "sentence": "Regular mindfulness meditation has been shown to _______ stress levels among college students.",
    "options": ["alleviate", "aggravate", "intensify", "multiply"],
    "correctIndex": 0,
    "explanation": "'Alleviate' means to make suffering or deficiency less severe.",
    "urduExplanation": "تکلیف یا دباؤ کو کم کرنے کے لیے 'alleviate' استعمال ہوتا ہے۔"
  },
  {
    "id": "vs-gen-11",
    "sentence": "The remote island has developed unique wildlife species due to millions of years of geographic _______.",
    "options": ["isolation", "integration", "congestion", "fusion"],
    "correctIndex": 0,
    "explanation": "'Isolation' refers to the state of being separated from others.",
    "urduExplanation": "تنہائی یا الگ تھلگ رہنے کے لیے 'isolation' آتا ہے۔"
  },
  {
    "id": "vs-gen-12",
    "sentence": "Modern smartphones incorporate biometric authentication to ensure personal data _______.",
    "options": ["confidentiality", "publicity", "casualness", "negligence"],
    "correctIndex": 0,
    "explanation": "'Confidentiality' is the state of keeping secrets or private information safe.",
    "urduExplanation": "معلومات کو صیغہ راز میں رکھنے کے لیے 'confidentiality' درست ہے۔"
  },
  {
    "id": "vs-gen-13",
    "sentence": "The archaeological excavation revealed that ancient civil engineering methods were surprisingly _______.",
    "options": ["sophisticated", "primitive", "clumsy", "useless"],
    "correctIndex": 0,
    "explanation": "'Sophisticated' means highly developed, complex, and refined.",
    "urduExplanation": "ترقی یافتہ اور جدید مہارت کے لیے 'sophisticated' آتا ہے۔"
  },
  {
    "id": "vs-gen-14",
    "sentence": "The community sports center offers affordable membership fees to _______ regular participation.",
    "options": ["encourage", "deter", "prevent", "penalize"],
    "correctIndex": 0,
    "explanation": "'Encourage' means to give support, confidence, or hope to someone.",
    "urduExplanation": "حوصلہ افزائی کرنے کے لیے 'encourage' آتا ہے۔"
  },

  # Occasional business & accounting sentences (~15%)
  {
    "id": "vs-biz-01",
    "sentence": "The CFO delivered a lucid presentation that served to _______ the complex regulatory guidelines.",
    "options": ["clarify", "confuse", "conceal", "condemn"],
    "correctIndex": 0,
    "explanation": "'Clarify' means to make an idea clear and easy to understand.",
    "urduExplanation": "معاملات کو آسان اور واضح انداز میں سمجھانے کو 'clarify' کہتے ہیں۔"
  },
  {
    "id": "vs-biz-02",
    "sentence": "The audit team carried out rigorous sample testing to _______ the authenticity of trade receivables.",
    "options": ["verify", "vibrate", "vanish", "violate"],
    "correctIndex": 0,
    "explanation": "'Verify' means to check or confirm the accuracy of records.",
    "urduExplanation": "درستگی اور سچائی کی تصدیق کے لیے 'verify' آتا ہے۔"
  }
]

# ============================================================================
# VOCABULARY TASK 5: Context Matching (Word Pairs / Contextual Synonyms)
# ============================================================================
VOCAB_CONTEXT = [
  # General English word pairs
  {
    "id": "vx-gen-01",
    "targetWord": "objective",
    "correctMatch": "unbiased",
    "options": ["unbiased", "emotional", "prejudiced", "subjective"],
    "explanation": "'Objective' means impartial, factual, and unbiased.",
    "urduExplanation": "'Objective' کا مطلب غیر جانبدار اور حقیقت پسند (Unbiased) ہے۔"
  },
  {
    "id": "vx-gen-02",
    "targetWord": "comply",
    "correctMatch": "abide by",
    "options": ["abide by", "resist", "reject", "disregard"],
    "explanation": "'Comply' means to act in accordance with a wish, request, or rule.",
    "urduExplanation": "'Comply' کا مطلب اصولوں کی پاسداری کرنا (Abide by) ہے۔"
  },
  {
    "id": "vx-gen-03",
    "targetWord": "fluctuate",
    "correctMatch": "oscillate",
    "options": ["oscillate", "stabilize", "freeze", "stagnate"],
    "explanation": "'Fluctuate' means to rise and fall irregularly in number or amount.",
    "urduExplanation": "'Fluctuate' کا مطلب اتار چڑھاؤ آنا یا جھولنا (Oscillate) ہے۔"
  },
  {
    "id": "vx-gen-04",
    "targetWord": "consolidate",
    "correctMatch": "combine",
    "options": ["combine", "scatter", "divide", "isolate"],
    "explanation": "'Consolidate' means to combine multiple things into a single more effective whole.",
    "urduExplanation": "'Consolidate' کا مطلب یکجا کرنا یا ملا کر مضبوط کرنا (Combine) ہے۔"
  },
  {
    "id": "vx-gen-05",
    "targetWord": "adverse",
    "correctMatch": "unfavourable",
    "options": ["unfavourable", "beneficial", "advantageous", "pleasant"],
    "explanation": "'Adverse' describes conditions that prevent success or development.",
    "urduExplanation": "'Adverse' کا مطلب نا موافق یا منفی (Unfavourable) ہے۔"
  },
  {
    "id": "vx-gen-06",
    "targetWord": "competent",
    "correctMatch": "capable",
    "options": ["capable", "inept", "clumsy", "unskilled"],
    "explanation": "'Competent' means having the necessary ability, knowledge, or skill.",
    "urduExplanation": "'Competent' کا مطلب قابل اور باصلاحیت (Capable) ہے۔"
  },
  {
    "id": "vx-gen-07",
    "targetWord": "allocate",
    "correctMatch": "distribute",
    "options": ["distribute", "withhold", "confiscate", "gather"],
    "explanation": "'Allocate' means to apportion or distribute resources for a specific purpose.",
    "urduExplanation": "'Allocate' کا مطلب وسائل کو مخصوص کام کے لیے مختص کرنا (Distribute) ہے۔"
  },
  {
    "id": "vx-gen-08",
    "targetWord": "transparency",
    "correctMatch": "openness",
    "options": ["openness", "secrecy", "opacity", "ambiguity"],
    "explanation": "'Transparency' implies honesty, clarity, and openness.",
    "urduExplanation": "'Transparency' کا مطلب شفافیت اور کھلا پن (Openness) ہے۔"
  },
  {
    "id": "vx-gen-09",
    "targetWord": "perseverance",
    "correctMatch": "persistence",
    "options": ["persistence", "hesitation", "quitting", "doubt"],
    "explanation": "'Perseverance' is persistence in doing something despite difficulty or delay.",
    "urduExplanation": "'Perseverance' کا مطلب ثابت قدمی اور استقامت (Persistence) ہے۔"
  },
  {
    "id": "vx-gen-10",
    "targetWord": "harmonious",
    "correctMatch": "concordant",
    "options": ["concordant", "discordant", "clashing", "hostile"],
    "explanation": "'Harmonious' means tuneful, agreeable, and in peaceful accord.",
    "urduExplanation": "'Harmonious' کا مطلب ہم آہنگ اور خوشگوار (Concordant) ہے۔"
  },
  {
    "id": "vx-gen-11",
    "targetWord": "innovative",
    "correctMatch": "pioneering",
    "options": ["pioneering", "imitative", "obsolete", "conservative"],
    "explanation": "'Innovative' involves pioneering new ideas or original techniques.",
    "urduExplanation": "'Innovative' کا مطلب جدت طراز اور رہنما (Pioneering) ہے۔"
  },
  {
    "id": "vx-gen-12",
    "targetWord": "pivotal",
    "correctMatch": "crucial",
    "options": ["crucial", "minor", "trivial", "inessential"],
    "explanation": "'Pivotal' means of crucial importance in relation to the development of something.",
    "urduExplanation": "'Pivotal' کا مطلب بنیادی اہمیت کا حامل یا کلیدی (Crucial) ہے۔"
  },
  {
    "id": "vx-gen-13",
    "targetWord": "scrutiny",
    "correctMatch": "inspection",
    "options": ["inspection", "neglect", "disregard", "glance"],
    "explanation": "'Scrutiny' means critical observation or examination.",
    "urduExplanation": "'Scrutiny' کا مطلب باریک بینی سے معائنہ (Inspection) ہے۔"
  },
  {
    "id": "vx-gen-14",
    "targetWord": "sustainable",
    "correctMatch": "renewable",
    "options": ["renewable", "exhaustible", "destructive", "harmful"],
    "explanation": "'Sustainable' means able to be maintained at a certain rate without depleting resources.",
    "urduExplanation": "'Sustainable' کا مطلب پائیدار اور قابلِ تجدید (Renewable) ہے۔"
  }
]

print(f"Task 1 (Matching): {len(VOCAB_MATCHING)} items")
print(f"Task 2 (Definitions): {len(VOCAB_DEFINITIONS)} items")
print(f"Task 3 (Collocations): {len(VOCAB_COLLOCATIONS)} items")
print(f"Task 4 (Sentences): {len(VOCAB_SENTENCES)} items")
print(f"Task 5 (Context): {len(VOCAB_CONTEXT)} items")

def format_items(items):
    formatted = []
    for item in items:
        j = json.dumps(item, indent=2)
        indented = '  ' + j.replace('\n', '\n  ')
        formatted.append(indented)
    return ',\n'.join(formatted)

matching_str = format_items(VOCAB_MATCHING)
definitions_str = format_items(VOCAB_DEFINITIONS)
collocations_str = format_items(VOCAB_COLLOCATIONS)
sentences_str = format_items(VOCAB_SENTENCES)
context_str = format_items(VOCAB_CONTEXT)

content = f"""import {{ 
  VocabWordMatchItem, 
  VocabDefinitionItem, 
  VocabCollocationItem 
}} from '../types';
import {{ APTIS_TEST_SET_1, APTIS_TEST_SET_2 }} from './aptisMockData';

// ============================================================================
// VOCABULARY TASK 1: Word Matching / Synonyms (Target Word -> Synonym)
// Covers everyday life, education, health, tech, environment, travel, hobbies,
// work, relationships, and occasional business.
// ============================================================================
export const EXPANDED_VOCAB_MATCHING_POOL: VocabWordMatchItem[] = [
  ...APTIS_TEST_SET_1.core.vocabWordMatching,
  ...APTIS_TEST_SET_2.core.vocabWordMatching,
{matching_str}
];

// ============================================================================
// VOCABULARY TASK 2: Word Definitions (Definition -> Word)
// ============================================================================
export const EXPANDED_VOCAB_DEFINITIONS_POOL: VocabDefinitionItem[] = [
  ...APTIS_TEST_SET_1.core.vocabDefinitions,
  ...APTIS_TEST_SET_2.core.vocabDefinitions,
{definitions_str}
];

// ============================================================================
// VOCABULARY TASK 3: Collocations & Word Pairing
// ============================================================================
export const EXPANDED_VOCAB_COLLOCATIONS_POOL: VocabCollocationItem[] = [
  ...APTIS_TEST_SET_1.core.vocabCollocations,
  ...APTIS_TEST_SET_2.core.vocabCollocations,
{collocations_str}
];

// ============================================================================
// VOCABULARY TASK 4: Sentence Completion
// ============================================================================
export const EXPANDED_VOCAB_SENTENCE_POOL: VocabCollocationItem[] = [
  ...APTIS_TEST_SET_1.core.vocabSentenceCompletion.map(item => ({{ ...item, id: `vs-set1-${{item.id}}` }})),
  ...APTIS_TEST_SET_2.core.vocabSentenceCompletion.map(item => ({{ ...item, id: `vs-set2-${{item.id}}` }})),
{sentences_str}
];

// ============================================================================
// VOCABULARY TASK 5: Context Matching
// ============================================================================
export const EXPANDED_VOCAB_CONTEXT_POOL: VocabWordMatchItem[] = [
  ...APTIS_TEST_SET_1.core.vocabContextMatching,
  ...APTIS_TEST_SET_2.core.vocabContextMatching,
{context_str}
];
"""


with open('src/data/expandedVocabPool.ts', 'w', encoding='utf-8') as f:
  f.write(content)

print("Successfully generated src/data/expandedVocabPool.ts")
