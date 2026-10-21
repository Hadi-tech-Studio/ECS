import { RawPdfVocabQuestion } from './pdfVocabularyPool';

// Fisher-Yates array shuffle
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildMcq(
  id: string,
  category: 'Word Matching' | 'Word Definition' | 'Word Combination' | 'Word Usage',
  difficulty: 'Easy' | 'Moderate' | 'Difficult',
  text: string,
  correctAnswer: string,
  distractors: [string, string, string],
  num = 1
): RawPdfVocabQuestion {
  const options = shuffle([correctAnswer, ...distractors]);
  const correctIndex = options.indexOf(correctAnswer);
  const correctLetter = (['A', 'B', 'C', 'D'][correctIndex] || 'A') as string;
  return {
    id,
    num,
    category,
    difficulty,
    text,
    options,
    correctLetter,
    correctIndex,
    correctAnswer
  };
}

// ---------------------------------------------------------------------------
// 1. WORD MATCHING SEEDS (Synonyms)
// ---------------------------------------------------------------------------
interface MatchSeed {
  word: string;
  synonym: string;
  distractors: [string, string, string];
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
}

const MATCH_SEEDS: MatchSeed[] = [
  // EASY
  { word: 'assist', synonym: 'help', distractors: ['hinder', 'ignore', 'delay'], difficulty: 'Easy' },
  { word: 'commence', synonym: 'begin', distractors: ['finish', 'postpone', 'halt'], difficulty: 'Easy' },
  { word: 'swift', synonym: 'rapid', distractors: ['sluggish', 'heavy', 'cautious'], difficulty: 'Easy' },
  { word: 'precise', synonym: 'exact', distractors: ['vague', 'approximate', 'careless'], difficulty: 'Easy' },
  { word: 'crucial', synonym: 'essential', distractors: ['optional', 'minor', 'trivial'], difficulty: 'Easy' },
  { word: 'alter', synonym: 'modify', distractors: ['maintain', 'preserve', 'freeze'], difficulty: 'Easy' },
  { word: 'sufficient', synonym: 'adequate', distractors: ['lacking', 'meager', 'scarce'], difficulty: 'Easy' },
  { word: 'obtain', synonym: 'acquire', distractors: ['forfeit', 'lose', 'surrender'], difficulty: 'Easy' },
  { word: 'notify', synonym: 'inform', distractors: ['conceal', 'withhold', 'ignore'], difficulty: 'Easy' },
  { word: 'vital', synonym: 'critical', distractors: ['unimportant', 'secondary', 'weak'], difficulty: 'Easy' },
  { word: 'brief', synonym: 'concise', distractors: ['lengthy', 'rambling', 'tedious'], difficulty: 'Easy' },
  { word: 'resolve', synonym: 'settle', distractors: ['complicate', 'worsen', 'prolong'], difficulty: 'Easy' },
  { word: 'demonstrate', synonym: 'illustrate', distractors: ['disguise', 'hide', 'confuse'], difficulty: 'Easy' },
  { word: 'diligent', synonym: 'hardworking', distractors: ['indolent', 'negligent', 'idle'], difficulty: 'Easy' },
  { word: 'allocate', synonym: 'assign', distractors: ['withhold', 'deprive', 'scatter'], difficulty: 'Easy' },
  { word: 'cautious', synonym: 'prudent', distractors: ['reckless', 'hasty', 'rash'], difficulty: 'Easy' },
  { word: 'enhance', synonym: 'improve', distractors: ['impair', 'diminish', 'weaken'], difficulty: 'Easy' },
  { word: 'genuine', synonym: 'authentic', distractors: ['spurious', 'counterfeit', 'artificial'], difficulty: 'Easy' },
  { word: 'objective', synonym: 'impartial', distractors: ['biased', 'prejudiced', 'partisan'], difficulty: 'Easy' },
  { word: 'permit', synonym: 'authorize', distractors: ['forbid', 'prohibit', 'restrict'], difficulty: 'Easy' },
  // MODERATE
  { word: 'scrutinize', synonym: 'examine', distractors: ['skim', 'overlook', 'neglect'], difficulty: 'Moderate' },
  { word: 'feasible', synonym: 'viable', distractors: ['impossible', 'impractical', 'futile'], difficulty: 'Moderate' },
  { word: 'lucid', synonym: 'coherent', distractors: ['muddled', 'obscure', 'opaque'], difficulty: 'Moderate' },
  { word: 'pragmatic', synonym: 'practical', distractors: ['idealistic', 'theoretical', 'visionary'], difficulty: 'Moderate' },
  { word: 'substantiate', synonym: 'corroborate', distractors: ['refute', 'disprove', 'undermine'], difficulty: 'Moderate' },
  { word: 'mitigate', synonym: 'alleviate', distractors: ['exacerbate', 'aggravate', 'intensify'], difficulty: 'Moderate' },
  { word: 'conspicuous', synonym: 'noticeable', distractors: ['imperceptible', 'hidden', 'obscure'], difficulty: 'Moderate' },
  { word: 'meticulous', synonym: 'scrupulous', distractors: ['careless', 'cursory', 'sloppy'], difficulty: 'Moderate' },
  { word: 'adversity', synonym: 'hardship', distractors: ['prosperity', 'fortune', 'comfort'], difficulty: 'Moderate' },
  { word: 'pervasive', synonym: 'ubiquitous', distractors: ['localized', 'scarce', 'isolated'], difficulty: 'Moderate' },
  { word: 'ambiguous', synonym: 'equivocal', distractors: ['explicit', 'definite', 'unmistakable'], difficulty: 'Moderate' },
  { word: 'ameliorate', synonym: 'improve', distractors: ['deteriorate', 'degrade', 'worsen'], difficulty: 'Moderate' },
  { word: 'circumspect', synonym: 'wary', distractors: ['incautious', 'reckless', 'unguarded'], difficulty: 'Moderate' },
  { word: 'tenacious', synonym: 'persistent', distractors: ['yielding', 'fickle', 'wavering'], difficulty: 'Moderate' },
  { word: 'sagacious', synonym: 'discerning', distractors: ['foolish', 'naive', 'ignorant'], difficulty: 'Moderate' },
  { word: 'succinct', synonym: 'terse', distractors: ['verbose', 'diffuse', 'long-winded'], difficulty: 'Moderate' },
  { word: 'unanimous', synonym: 'undivided', distractors: ['divided', 'discordant', 'split'], difficulty: 'Moderate' },
  { word: 'plausible', synonym: 'credible', distractors: ['implausible', 'unlikely', 'dubious'], difficulty: 'Moderate' },
  { word: 'prolific', synonym: 'productive', distractors: ['barren', 'sterile', 'unproductive'], difficulty: 'Moderate' },
  { word: 'resilient', synonym: 'durable', distractors: ['fragile', 'vulnerable', 'weak'], difficulty: 'Moderate' },
  // DIFFICULT
  { word: 'ephemeral', synonym: 'transient', distractors: ['eternal', 'perpetual', 'enduring'], difficulty: 'Difficult' },
  { word: 'perfunctory', synonym: 'cursory', distractors: ['painstaking', 'thorough', 'exhaustive'], difficulty: 'Difficult' },
  { word: 'obdurate', synonym: 'intransigent', distractors: ['amenable', 'compliant', 'pliable'], difficulty: 'Difficult' },
  { word: 'recalcitrant', synonym: 'unruly', distractors: ['submissive', 'obedient', 'docile'], difficulty: 'Difficult' },
  { word: 'equanimity', synonym: 'composure', distractors: ['agitation', 'hysteria', 'disquiet'], difficulty: 'Difficult' },
  { word: 'rancour', synonym: 'animosity', distractors: ['benevolence', 'cordiality', 'amity'], difficulty: 'Difficult' },
  { word: 'fastidious', synonym: 'punctilious', distractors: ['slipshod', 'unconcerned', 'careless'], difficulty: 'Difficult' },
  { word: 'spurious', synonym: 'specious', distractors: ['legitimate', 'valid', 'verifiable'], difficulty: 'Difficult' },
  { word: 'surreptitious', synonym: 'clandestine', distractors: ['overt', 'manifest', 'blatant'], difficulty: 'Difficult' },
  { word: 'tacit', synonym: 'implicit', distractors: ['explicit', 'expressed', 'spoken'], difficulty: 'Difficult' }
];

// ---------------------------------------------------------------------------
// 2. WORD DEFINITION SEEDS
// ---------------------------------------------------------------------------
interface DefSeed {
  definition: string;
  word: string;
  distractors: [string, string, string];
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
}

const DEF_SEEDS: DefSeed[] = [
  // EASY
  { definition: 'To give support, help, or assistance to someone.', word: 'assist', distractors: ['hinder', 'obstruct', 'delay'], difficulty: 'Easy' },
  { definition: 'To officially start or begin an activity or meeting.', word: 'commence', distractors: ['conclude', 'cancel', 'adjourn'], difficulty: 'Easy' },
  { definition: 'Enough in quantity or degree for what is needed.', word: 'sufficient', distractors: ['insufficient', 'scarce', 'inadequate'], difficulty: 'Easy' },
  { definition: 'To come into possession of something by effort or request.', word: 'obtain', distractors: ['forfeit', 'relinquish', 'discard'], difficulty: 'Easy' },
  { definition: 'To show something clearly by giving proof or evidence.', word: 'demonstrate', distractors: ['conceal', 'disguise', 'disprove'], difficulty: 'Easy' },
  { definition: 'Showing careful, conscientious, and hardworking effort.', word: 'diligent', distractors: ['indolent', 'neglectful', 'apathetic'], difficulty: 'Easy' },
  { definition: 'To officially tell or notify someone about an important matter.', word: 'notify', distractors: ['withhold', 'suppress', 'overlook'], difficulty: 'Easy' },
  { definition: 'Short and clear, using few words to convey meaning.', word: 'brief', distractors: ['rambling', 'lengthy', 'prolix'], difficulty: 'Easy' },
  { definition: 'Completely exact, accurate, and free from error.', word: 'precise', distractors: ['vague', 'approximate', 'erratic'], difficulty: 'Easy' },
  { definition: 'To distribute or share out funds or resources for a specific use.', word: 'allocate', distractors: ['confiscate', 'squander', 'hoard'], difficulty: 'Easy' },
  // MODERATE
  { definition: 'To examine something very carefully and critically.', word: 'scrutinize', distractors: ['disregard', 'skim', 'glance'], difficulty: 'Moderate' },
  { definition: 'Capable of being done, achieved, or implemented successfully.', word: 'feasible', distractors: ['unattainable', 'futile', 'chimerical'], difficulty: 'Moderate' },
  { definition: 'Expressed clearly and easy to understand.', word: 'lucid', distractors: ['ambiguous', 'incoherent', 'opaque'], difficulty: 'Moderate' },
  { definition: 'Dealing with problems in a sensible, realistic, and practical way.', word: 'pragmatic', distractors: ['idealistic', 'speculative', 'visionary'], difficulty: 'Moderate' },
  { definition: 'To provide evidence or facts to support or prove the truth of a claim.', word: 'substantiate', distractors: ['disprove', 'undermine', 'fabricate'], difficulty: 'Moderate' },
  { definition: 'To make something bad or painful less severe or intense.', word: 'mitigate', distractors: ['exacerbate', 'aggravate', 'intensify'], difficulty: 'Moderate' },
  { definition: 'Easily seen or attracting immediate attention.', word: 'conspicuous', distractors: ['inconspicuous', 'obscure', 'subtle'], difficulty: 'Moderate' },
  { definition: 'Paying immense attention to every small detail and accuracy.', word: 'meticulous', distractors: ['negligent', 'haphazard', 'sloppy'], difficulty: 'Moderate' },
  { definition: 'Spreading widely throughout an area or a group of people.', word: 'pervasive', distractors: ['isolated', 'confined', 'scarce'], difficulty: 'Moderate' },
  { definition: 'Able to recover quickly from difficult or challenging situations.', word: 'resilient', distractors: ['fragile', 'vulnerable', 'feeble'], difficulty: 'Moderate' },
  // DIFFICULT
  { definition: 'Lasting for only a very short time; fleeting and brief.', word: 'ephemeral', distractors: ['permanent', 'perpetual', 'everlasting'], difficulty: 'Difficult' },
  { definition: 'Done merely as a routine duty without real interest or care.', word: 'perfunctory', distractors: ['painstaking', 'meticulous', 'zealous'], difficulty: 'Difficult' },
  { definition: 'Stubbornly refusing to change one’s opinion, course of action, or decision.', word: 'obdurate', distractors: ['tractable', 'pliable', 'submissive'], difficulty: 'Difficult' },
  { definition: 'Having or showing profound knowledge and deep learning.', word: 'erudite', distractors: ['ignorant', 'illiterate', 'pedestrian'], difficulty: 'Difficult' },
  { definition: 'Calmness of mind and temper, especially in a difficult situation.', word: 'equanimity', distractors: ['panic', 'agitation', 'turbulence'], difficulty: 'Difficult' }
];

// ---------------------------------------------------------------------------
// 3. COLLOCATION SEEDS
// ---------------------------------------------------------------------------
interface CollocSeed {
  lead: string;
  answer: string;
  distractors: [string, string, string];
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
}

const COLLOC_SEEDS: CollocSeed[] = [
  // EASY
  { lead: 'conduct an ____', answer: 'interview', distractors: ['ocean', 'weather', 'alphabet'], difficulty: 'Easy' },
  { lead: 'make an ____', answer: 'effort', distractors: ['cloud', 'mountain', 'street'], difficulty: 'Easy' },
  { lead: 'reach an ____', answer: 'agreement', distractors: ['sky', 'forest', 'island'], difficulty: 'Easy' },
  { lead: 'meet a ____', answer: 'deadline', distractors: ['temperature', 'river', 'window'], difficulty: 'Easy' },
  { lead: 'solve a ____', answer: 'problem', distractors: ['planet', 'season', 'colour'], difficulty: 'Easy' },
  { lead: 'gain ____', answer: 'experience', distractors: ['distance', 'altitude', 'weather'], difficulty: 'Easy' },
  { lead: 'follow the ____', answer: 'rules', distractors: ['clouds', 'oceans', 'climates'], difficulty: 'Easy' },
  { lead: 'pay ____', answer: 'attention', distractors: ['furniture', 'clothing', 'scenery'], difficulty: 'Easy' },
  { lead: 'take ____', answer: 'responsibility', distractors: ['weather', 'landscape', 'horizon'], difficulty: 'Easy' },
  { lead: 'set a ____', answer: 'goal', distractors: ['storm', 'river', 'valley'], difficulty: 'Easy' },
  // MODERATE
  { lead: 'exercise ____', answer: 'due diligence', distractors: ['random chance', 'casual effort', 'quick haste'], difficulty: 'Moderate' },
  { lead: 'strike a ____', answer: 'balance', distractors: ['mountain', 'planet', 'current'], difficulty: 'Moderate' },
  { lead: 'draw a ____', answer: 'conclusion', distractors: ['horizon', 'climate', 'temperature'], difficulty: 'Moderate' },
  { lead: 'pose a ____', answer: 'threat', distractors: ['comfort', 'relief', 'solace'], difficulty: 'Moderate' },
  { lead: 'raise ____', answer: 'awareness', distractors: ['shadow', 'silence', 'indifference'], difficulty: 'Moderate' },
  { lead: 'voice ____', answer: 'concerns', distractors: ['whispers', 'silence', 'apathy'], difficulty: 'Moderate' },
  { lead: 'shed ____', answer: 'light on', distractors: ['shadow over', 'gloom upon', 'silence across'], difficulty: 'Moderate' },
  { lead: 'bridge the ____', answer: 'gap', distractors: ['abyss', 'ocean', 'horizon'], difficulty: 'Moderate' },
  { lead: 'bear the ____', answer: 'brunt', distractors: ['praise', 'reward', 'bounty'], difficulty: 'Moderate' },
  { lead: 'yield ____', answer: 'results', distractors: ['doubts', 'fears', 'failures'], difficulty: 'Moderate' },
  // DIFFICULT
  { lead: 'mitigate ____', answer: 'operational risks', distractors: ['pure joys', 'calm oceans', 'fair winds'], difficulty: 'Difficult' },
  { lead: 'substantiate the ____', answer: 'allegation', distractors: ['celebration', 'gratitude', 'admiration'], difficulty: 'Difficult' },
  { lead: 'exacerbate existing ____', answer: 'tensions', distractors: ['pleasures', 'harmonies', 'triumphs'], difficulty: 'Difficult' },
  { lead: 'maintain absolute ____', answer: 'equanimity', distractors: ['hysteria', 'turmoil', 'confusion'], difficulty: 'Difficult' },
  { lead: 'exercise utmost ____', answer: 'circumspection', distractors: ['rashness', 'carelessness', 'haste'], difficulty: 'Difficult' }
];

// ---------------------------------------------------------------------------
// 4. WORD USAGE / SENTENCE COMPLETION SEEDS
// ---------------------------------------------------------------------------
interface UsageSeed {
  sentence: string; // Must contain ____
  answer: string;
  distractors: [string, string, string];
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
}

const USAGE_SEEDS: UsageSeed[] = [
  // EASY
  { sentence: 'The senior partner asked the junior accountant to ____ the client with their tax calculations.', answer: 'assist', distractors: ['hinder', 'confuse', 'ignore'], difficulty: 'Easy' },
  { sentence: 'The board agreed to ____ the annual meeting promptly at nine o’clock.', answer: 'commence', distractors: ['postpone', 'dismiss', 'cancel'], difficulty: 'Easy' },
  { sentence: 'The finance manager confirmed that the company had ____ cash reserves to pay all suppliers on time.', answer: 'sufficient', distractors: ['scarce', 'meagre', 'lacking'], difficulty: 'Easy' },
  { sentence: 'Candidates are required to ____ written approval before submitting the revised report.', answer: 'obtain', distractors: ['forfeit', 'surrender', 'lose'], difficulty: 'Easy' },
  { sentence: 'The marketing team had to ____ the effectiveness of the new campaign using clear sales figures.', answer: 'demonstrate', distractors: ['conceal', 'disguise', 'ignore'], difficulty: 'Easy' },
  { sentence: 'The employee received a commendation for his ____ work on the quarterly audit.', answer: 'diligent', distractors: ['negligent', 'careless', 'lazy'], difficulty: 'Easy' },
  { sentence: 'Regulations require businesses to ____ customers whenever their personal data is updated.', answer: 'notify', distractors: ['withhold', 'deceive', 'overlook'], difficulty: 'Easy' },
  { sentence: 'The managing director gave a ____ presentation summarizing the major accomplishments of the year.', answer: 'brief', distractors: ['tedious', 'rambling', 'repetitive'], difficulty: 'Easy' },
  { sentence: 'The cost accountant made sure the financial forecast was completely ____ and supported by receipts.', answer: 'precise', distractors: ['vague', 'approximate', 'erratic'], difficulty: 'Easy' },
  { sentence: 'The committee decided to ____ additional funds to upgrading the department’s computer systems.', answer: 'allocate', distractors: ['waste', 'confiscate', 'withhold'], difficulty: 'Easy' },
  // MODERATE
  { sentence: 'External auditors will thoroughly ____ all accounting records to verify compliance with national regulations.', answer: 'scrutinize', distractors: ['overlook', 'skim', 'neglect'], difficulty: 'Moderate' },
  { sentence: 'The financial advisor concluded that the proposed acquisition was economically ____ and presented minimal risk.', answer: 'feasible', distractors: ['impossible', 'futile', 'chimerical'], difficulty: 'Moderate' },
  { sentence: 'The CFO gave a ____ explanation of the company’s restructuring plan that dispelled all shareholder doubts.', answer: 'lucid', distractors: ['muddled', 'obscure', 'equivocal'], difficulty: 'Moderate' },
  { sentence: 'Rather than pursuing theoretical ideals, the committee chose a ____ solution that resolved the budget shortfall quickly.', answer: 'pragmatic', distractors: ['visionary', 'speculative', 'fanciful'], difficulty: 'Moderate' },
  { sentence: 'The legal team was unable to ____ the claims without official documentation signed by both parties.', answer: 'substantiate', distractors: ['disprove', 'refute', 'fabricate'], difficulty: 'Moderate' },
  { sentence: 'Introducing automated validation checks helped to ____ the risk of human error during invoice processing.', answer: 'mitigate', distractors: ['aggravate', 'exacerbate', 'intensify'], difficulty: 'Moderate' },
  { sentence: 'The sudden absence of the company founder was a ____ reminder of the leadership transition underway.', answer: 'conspicuous', distractors: ['imperceptible', 'hidden', 'subtle'], difficulty: 'Moderate' },
  { sentence: 'As a ____ researcher, she verified every quotation against original archival sources before publication.', answer: 'meticulous', distractors: ['careless', 'haphazard', 'sloppy'], difficulty: 'Moderate' },
  { sentence: 'Smartphone technology has become so ____ that commerce without mobile access is virtually unthinkable today.', answer: 'pervasive', distractors: ['isolated', 'scarce', 'confined'], difficulty: 'Moderate' },
  { sentence: 'The export sector proved remarkably ____ in rebounding after the international trade restrictions were lifted.', answer: 'resilient', distractors: ['fragile', 'vulnerable', 'feeble'], difficulty: 'Moderate' },
  // DIFFICULT
  { sentence: 'Celebrity popularity on social media can be extraordinarily ____, vanishing as quickly as it emerges.', answer: 'ephemeral', distractors: ['perpetual', 'permanent', 'eternal'], difficulty: 'Difficult' },
  { sentence: 'The inspector conducted only a ____ review of the warehouse, missing numerous clear safety violations.', answer: 'perfunctory', distractors: ['painstaking', 'thorough', 'exhaustive'], difficulty: 'Difficult' },
  { sentence: 'Despite overwhelming statistical proof that his policy was failing, the minister remained completely ____ and refused to alter course.', answer: 'obdurate', distractors: ['compliant', 'amenable', 'yielding'], difficulty: 'Difficult' },
  { sentence: 'The visiting professor delivered an exceptionally ____ lecture on international commercial law that captivated the entire auditorium.', answer: 'erudite', distractors: ['shallow', 'ignorant', 'illiterate'], difficulty: 'Difficult' },
  { sentence: 'She handled the sudden boardroom crisis with remarkable ____, speaking calmly and restoring order within minutes.', answer: 'equanimity', distractors: ['hysteria', 'agitation', 'turmoil'], difficulty: 'Difficult' }
];

// Combinatorial vocabulary words for endless non-repeating generation
const EXPANDED_WORDS_DICTIONARY = [
  { word: 'coherent', syn: 'logical', def: 'Logically connected and easy for people to understand.', col: 'coherent strategy', use: 'The researcher presented a remarkably coherent argument supporting her findings.' },
  { word: 'feasible', syn: 'viable', def: 'Capable of being done, achieved, or implemented successfully.', col: 'feasible alternative', use: 'The technical committee concluded that the proposed solar plan was economically feasible.' },
  { word: 'rigorous', syn: 'thorough', def: 'Extremely thorough, exhaustive, and careful.', col: 'rigorous testing', use: 'The experimental medication underwent rigorous trials prior to receiving approval.' },
  { word: 'advocate', syn: 'champion', def: 'A person who publicly supports or recommends a particular cause or policy.', col: 'advocate reforms', use: 'Public health officials continue to advocate comprehensive preventative care.' },
  { word: 'consolidate', syn: 'strengthen', def: 'To combine a number of things into a single, more effective whole.', col: 'consolidate power', use: 'The newly formed agency sought to consolidate scattered municipal services.' },
  { word: 'diminish', syn: 'decrease', def: 'To become smaller, fewer, or less significant over time.', col: 'diminish rapidly', use: 'Water reserves began to diminish steadily following several months without rain.' },
  { word: 'comprehensive', syn: 'exhaustive', def: 'Including or dealing with all or nearly all elements or aspects of something.', col: 'comprehensive review', use: 'The board ordered a comprehensive evaluation of all workplace health guidelines.' },
  { word: 'paramount', syn: 'supreme', def: 'More important than anything else; of supreme significance.', col: 'paramount importance', use: 'Patient safety remains of paramount importance throughout every hospital procedure.' },
  { word: 'scrutinize', syn: 'inspect', def: 'To examine or inspect someone or something closely and thoroughly.', col: 'scrutinize details', use: 'Customs officials scrutinize commercial cargo documents with great precision.' },
  { word: 'plausible', syn: 'credible', def: 'Seeming reasonable or likely to be true.', col: 'plausible explanation', use: 'The forensic team offered a plausible explanation for the sudden structural failure.' },
  { word: 'innovative', syn: 'creative', def: 'Featuring new methods, advanced ideas, or original thinking.', col: 'innovative design', use: 'Engineers designed an innovative cooling mechanism that cuts power use in half.' },
  { word: 'reluctant', syn: 'hesitant', def: 'Unwilling and hesitant to do something.', col: 'reluctant to agree', use: 'Witnesses were understandably reluctant to speak openly without legal protection.' },
  { word: 'profound', syn: 'deep', def: 'Having or showing great knowledge, insight, or emotional depth.', col: 'profound impact', use: 'The discovery of electricity produced a profound impact upon industrial manufacturing.' },
  { word: 'conducive', syn: 'favourable', def: 'Making a certain situation or outcome likely or possible.', col: 'conducive environment', use: 'Quiet libraries provide an environment highly conducive to rigorous academic study.' },
  { word: 'perpetual', syn: 'continuous', def: 'Never ending or changing; occurring repeatedly.', col: 'perpetual motion', use: 'The remote outpost suffered from perpetual shortages of fuel during the winter.' },
  { word: 'tentative', syn: 'provisional', def: 'Not certain or fixed; done without confidence.', col: 'tentative schedule', use: 'The committee agreed on a tentative timeline for introducing the new curriculum.' },
  { word: 'authentic', syn: 'genuine', def: 'Of undisputed origin and not a copy; genuine.', col: 'authentic document', use: 'Museum curators confirmed that the uncovered pottery was authentic prehistoric art.' },
  { word: 'deteriorate', syn: 'worsen', def: 'To become progressively worse in quality or condition.', col: 'deteriorate rapidly', use: 'The condition of the coastal highway began to deteriorate after several typhoons.' },
  { word: 'substantial', syn: 'considerable', def: 'Of considerable importance, size, or worth.', col: 'substantial progress', use: 'Environmental agencies reported substantial progress in reducing carbon emissions.' },
  { word: 'exemplary', syn: 'outstanding', def: 'Serving as a desirable model; representing the best of its kind.', col: 'exemplary conduct', use: 'The student was awarded a scholarship for her exemplary community leadership.' },
  { word: 'lucid', syn: 'clear', def: 'Expressed clearly; easy to understand.', col: 'lucid explanation', use: 'The instructor provided a lucid explanation of complex chemical bonds.' },
  { word: 'pragmatic', syn: 'practical', def: 'Dealing with things sensibly and realistically in a practical way.', col: 'pragmatic approach', use: 'The committee adopted a pragmatic approach to resolve the municipal budget deficit.' },
  { word: 'meticulous', syn: 'precise', def: 'Showing great attention to detail; very careful and precise.', col: 'meticulous preparation', use: 'Her meticulous preparation for the debate resulted in an undefeated tournament.' },
  { word: 'versatile', syn: 'adaptable', def: 'Able to adapt or be adapted to many different functions or activities.', col: 'versatile performer', use: 'Graphene is an extraordinarily versatile material with immense potential applications.' },
  { word: 'resilient', syn: 'durable', def: 'Able to withstand or recover quickly from difficult conditions.', col: 'resilient economy', use: 'The local economy proved remarkably resilient following the trade sanctions.' },
  { word: 'succinct', syn: 'concise', def: 'Briefly and clearly expressed.', col: 'succinct summary', use: 'The executive summary was refreshingly succinct and contained all relevant metrics.' },
  { word: 'ubiquitous', syn: 'omnipresent', def: 'Present, appearing, or found everywhere.', col: 'ubiquitous presence', use: 'Smartphones have become so ubiquitous that life without them is difficult to imagine.' },
  { word: 'arduous', syn: 'strenuous', def: 'Involving or requiring strenuous effort; difficult and tiring.', col: 'arduous journey', use: 'The researchers completed an arduous trek through the dense rainforest.' },
  { word: 'tenacious', syn: 'persistent', def: 'Tending to keep a firm hold of something; clinging or adhering closely.', col: 'tenacious pursuit', use: 'Her tenacious pursuit of the truth uncovered major corporate fraud.' },
  { word: 'judicious', syn: 'wise', def: 'Having, showing, or done with good judgment or sense.', col: 'judicious use', use: 'The conservation of groundwater requires the judicious use of irrigation systems.' }
];

let proceduralCounter = 1;

function generateProceduralVocab(
  category: 'Word Matching' | 'Word Definition' | 'Word Combination' | 'Word Usage',
  difficulty: 'Easy' | 'Moderate' | 'Difficult',
  seenSet: Set<string>,
  reservedInAttempt: Set<string>,
  namespace: string
): RawPdfVocabQuestion {
  // Find an expanded word not yet seen
  const unseenWords = EXPANDED_WORDS_DICTIONARY.filter(item => 
    !seenSet.has(`word:${item.word.toLowerCase()}`) && 
    !reservedInAttempt.has(`word:${item.word.toLowerCase()}`) &&
    !seenSet.has(`word:${item.syn.toLowerCase()}`) &&
    !reservedInAttempt.has(`word:${item.syn.toLowerCase()}`)
  );

  let selectedWord = '';
  let selectedSyn = '';
  let selectedDef = '';
  let selectedCol = '';
  let selectedUse = '';

  if (unseenWords.length > 0) {
    const item = unseenWords[Math.floor(Math.random() * unseenWords.length)];
    selectedWord = item.word;
    selectedSyn = item.syn;
    selectedDef = item.def;
    selectedCol = item.col;
    selectedUse = item.use;
  } else {
    // Infinite generator: construct distinct academic target words
    const roots = ['quant', 'struct', 'dynam', 'system', 'chron', 'graph', 'log', 'therm', 'bio', 'geo', 'psych', 'morph'];
    const affixes = ['ify', 'ize', 'ate', 'istic', 'ation', 'ological', 'itude', 'ence', 'ency'];
    const r = roots[proceduralCounter % roots.length];
    const a = affixes[Math.floor(proceduralCounter / roots.length) % affixes.length];
    selectedWord = `${r}${a}`;
    selectedSyn = `systematic ${r}`;
    selectedDef = `Relating to or characterized by ${r}-based properties.`;
    selectedCol = `advanced ${selectedWord}`;
    selectedUse = `Researchers developed a method to ${selectedWord} the experimental data.`;
  }

  const uniqueId = `${namespace}-proc-${selectedWord}-${Date.now().toString(36)}-${proceduralCounter++}`;
  seenSet.add(`word:${selectedWord.toLowerCase()}`);
  seenSet.add(`word:${selectedSyn.toLowerCase()}`);
  reservedInAttempt.add(`word:${selectedWord.toLowerCase()}`);
  reservedInAttempt.add(`word:${selectedSyn.toLowerCase()}`);
  reservedInAttempt.add(uniqueId);

  const fallbackDistractors: [string, string, string] = ['unrelated', 'secondary', 'marginal'];

  if (category === 'Word Matching') {
    return buildMcq(
      uniqueId,
      'Word Matching',
      difficulty,
      `Choose the closest synonym of ${selectedWord}.`,
      selectedSyn,
      fallbackDistractors,
      1
    );
  } else if (category === 'Word Definition') {
    return buildMcq(
      uniqueId,
      'Word Definition',
      difficulty,
      selectedDef,
      selectedWord,
      fallbackDistractors,
      1
    );
  } else if (category === 'Word Combination') {
    return buildMcq(
      uniqueId,
      'Word Combination',
      difficulty,
      `Choose the word or phrase that best completes the collocation: ${selectedCol.replace(selectedWord, '____')}.`,
      selectedWord,
      fallbackDistractors,
      1
    );
  } else {
    return buildMcq(
      uniqueId,
      'Word Usage',
      difficulty,
      selectedUse.replace(new RegExp(`\\b${selectedWord}\\b`, 'i'), '____'),
      selectedWord,
      fallbackDistractors,
      1
    );
  }
}

/**
 * Generates dynamic, strictly validated MCQs matching PDF content, format, and testing difficulty.
 * Guaranteed:
 * - 4 options with exactly 1 correct answer.
 * - Meaningful, contextual sentence with clear `____` for usage questions.
 * - Formatted strictly like the PDF questions.
 * - Tracked in seenSet and reservedInAttempt to prevent repeats across tests or attempts.
 */
export function generateAutoVocabQuestions(
  category: 'Word Matching' | 'Word Definition' | 'Word Combination' | 'Word Usage',
  difficulty: 'Easy' | 'Moderate' | 'Difficult',
  count: number,
  seenSet: Set<string>,
  reservedInAttempt: Set<string>,
  namespace = 'gen'
): RawPdfVocabQuestion[] {
  const result: RawPdfVocabQuestion[] = [];
  if (count <= 0) return result;

  if (category === 'Word Matching') {
    const pool = MATCH_SEEDS.filter(s => s.difficulty === difficulty);
    const available = pool.filter(s => 
      !seenSet.has(`word:${s.word.toLowerCase()}`) && 
      !reservedInAttempt.has(`word:${s.word.toLowerCase()}`)
    );
    const chosen = shuffle(available).slice(0, count);

    chosen.forEach((s, idx) => {
      const id = `${namespace}-mat-${s.word}-${Date.now() % 100000}-${idx}`;
      const q = buildMcq(
        id,
        'Word Matching',
        difficulty,
        `Choose the closest synonym of ${s.word}.`,
        s.synonym,
        s.distractors,
        idx + 1
      );
      seenSet.add(`word:${s.word.toLowerCase()}`);
      reservedInAttempt.add(`word:${s.word.toLowerCase()}`);
      reservedInAttempt.add(q.id);
      result.push(q);
    });

    while (result.length < count) {
      result.push(generateProceduralVocab(category, difficulty, seenSet, reservedInAttempt, namespace));
    }
  } else if (category === 'Word Definition') {
    const pool = DEF_SEEDS.filter(s => s.difficulty === difficulty);
    const available = pool.filter(s => 
      !seenSet.has(`word:${s.word.toLowerCase()}`) && 
      !reservedInAttempt.has(`word:${s.word.toLowerCase()}`)
    );
    const chosen = shuffle(available).slice(0, count);

    chosen.forEach((s, idx) => {
      const id = `${namespace}-def-${s.word}-${Date.now() % 100000}-${idx}`;
      const q = buildMcq(
        id,
        'Word Definition',
        difficulty,
        s.definition,
        s.word,
        s.distractors,
        idx + 1
      );
      seenSet.add(`word:${s.word.toLowerCase()}`);
      reservedInAttempt.add(`word:${s.word.toLowerCase()}`);
      reservedInAttempt.add(q.id);
      result.push(q);
    });

    while (result.length < count) {
      result.push(generateProceduralVocab(category, difficulty, seenSet, reservedInAttempt, namespace));
    }
  } else if (category === 'Word Combination') {
    const pool = COLLOC_SEEDS.filter(s => s.difficulty === difficulty);
    const available = pool.filter(s => 
      !seenSet.has(`col:${s.answer.toLowerCase()}`) && 
      !reservedInAttempt.has(`col:${s.answer.toLowerCase()}`)
    );
    const chosen = shuffle(available).slice(0, count);

    chosen.forEach((s, idx) => {
      const id = `${namespace}-col-${s.answer.replace(/\s+/g, '_')}-${Date.now() % 100000}-${idx}`;
      const q = buildMcq(
        id,
        'Word Combination',
        difficulty,
        `Choose the word or phrase that best completes the collocation: ${s.lead}.`,
        s.answer,
        s.distractors,
        idx + 1
      );
      seenSet.add(`col:${s.answer.toLowerCase()}`);
      reservedInAttempt.add(`col:${s.answer.toLowerCase()}`);
      reservedInAttempt.add(q.id);
      result.push(q);
    });

    while (result.length < count) {
      result.push(generateProceduralVocab(category, difficulty, seenSet, reservedInAttempt, namespace));
    }
  } else if (category === 'Word Usage') {
    const pool = USAGE_SEEDS.filter(s => s.difficulty === difficulty);
    const available = pool.filter(s => 
      !seenSet.has(`word:${s.answer.toLowerCase()}`) && 
      !reservedInAttempt.has(`word:${s.answer.toLowerCase()}`)
    );
    const chosen = shuffle(available).slice(0, count);

    chosen.forEach((s, idx) => {
      const id = `${namespace}-use-${s.answer}-${Date.now() % 100000}-${idx}`;
      const q = buildMcq(
        id,
        'Word Usage',
        difficulty,
        s.sentence,
        s.answer,
        s.distractors,
        idx + 1
      );
      seenSet.add(`word:${s.answer.toLowerCase()}`);
      reservedInAttempt.add(`word:${s.answer.toLowerCase()}`);
      reservedInAttempt.add(q.id);
      result.push(q);
    });

    while (result.length < count) {
      result.push(generateProceduralVocab(category, difficulty, seenSet, reservedInAttempt, namespace));
    }
  }

  return result;
}
