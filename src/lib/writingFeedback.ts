/**
 * writingFeedback.ts
 * Comprehensive writing evaluation and mistake detection engine for ICAP ECS and Aptis Writing.
 * Detects every mistake including grammar, spelling, word choice, sentence structure,
 * punctuation, clarity, and tone/register.
 * Compares student responses with benchmark suggested answers, providing itemized corrections
 * with explanations in English and Urdu, and improved full model answers.
 */

import { callGeminiAPI } from './api-handler';

export type WritingMistakeType = 
  | 'grammar' 
  | 'spelling' 
  | 'punctuation' 
  | 'word_choice' 
  | 'sentence_structure' 
  | 'clarity' 
  | 'tone'
  | 'capitalization'
  | 'subject_verb_agreement'
  | 'formatting';

export interface WritingMistake {
  id: string;
  original: string; // The exact snippet with error (what is wrong)
  replacement: string; // Corrected replacement snippet (corrected version)
  type: WritingMistakeType;
  explanation: string; // Brief reason why it is wrong and what rule applies
  urduExplanation?: string;
  startIndex: number;
  endIndex: number;
}

export interface WritingFeedbackResult {
  originalText: string;
  mistakes: WritingMistake[];
  improvedFullAnswer: string;
  benchmarkModelAnswer?: string;
  benchmarkComparisonNotes?: string;
  score: number; // 0-100
  bandRating: string;
  toneRegister: 'Formal' | 'Informal' | 'Mixed';
  grammarScore: number;
  vocabularyScore: number;
  cohesionScore: number;
  summaryFeedback: string;
  urduSummary?: string;
}

// Extensive dictionary of common spelling mistakes (word -> correct)
export const SPELLING_DICTIONARY: Record<string, string> = {
  'commited': 'committed',
  'untill': 'until',
  'seperate': 'separate',
  'seperated': 'separated',
  'seperately': 'separately',
  'seperation': 'separation',
  'recieve': 'receive',
  'recieved': 'received',
  'recieving': 'receiving',
  'occured': 'occurred',
  'occuring': 'occurring',
  'occurr': 'occur',
  'occurance': 'occurrence',
  'occurence': 'occurrence',
  'writting': 'writing',
  'writen': 'written',
  'writter': 'writer',
  'informtion': 'information',
  'infomation': 'information',
  'managment': 'management',
  'finanical': 'financial',
  'statment': 'statement',
  'statments': 'statements',
  'tellling': 'telling',
  'becuase': 'because',
  'becouse': 'because',
  'becasue': 'because',
  'definately': 'definitely',
  'definate': 'definite',
  'definitly': 'definitely',
  'defenitely': 'definitely',
  'neccessary': 'necessary',
  'necesary': 'necessary',
  'acheive': 'achieve',
  'acheived': 'achieved',
  'truely': 'truly',
  'tommorrow': 'tomorrow',
  'tommorow': 'tomorrow',
  'tomorow': 'tomorrow',
  'calender': 'calendar',
  'goverment': 'government',
  'govrenment': 'government',
  'liabilty': 'liability',
  'liabilites': 'liabilities',
  'procedue': 'procedure',
  'proceedure': 'procedure',
  'prosedure': 'procedure',
  'reconcilation': 'reconciliation',
  'accross': 'across',
  'arguement': 'argument',
  'oppurtunity': 'opportunity',
  'oportunity': 'opportunity',
  'possession': 'possession',
  'posession': 'possession',
  'disapoint': 'disappoint',
  'embarass': 'embarrass',
  'fourty': 'forty',
  'freind': 'friend',
  'freinds': 'friends',
  'sucess': 'success',
  'sucessful': 'successful',
  'succesful': 'successful',
  'succesfully': 'successfully',
  'sucessfully': 'successfully',
  'suprise': 'surprise',
  'beleive': 'believe',
  'beleived': 'believed',
  'belive': 'believe',
  'beleiving': 'believing',
  'enought': 'enough',
  'thier': 'their',
  'wierd': 'weird',
  'alot': 'a lot',
  'allot': 'a lot',
  'comunication': 'communication',
  'auditer': 'auditor',
  'acounting': 'accounting',
  'acountant': 'accountant',
  'accountent': 'accountant',
  'responsibilty': 'responsibility',
  'responisble': 'responsible',
  'resposible': 'responsible',
  'dificult': 'difficult',
  'diffcult': 'difficult',
  'confermation': 'confirmation',
  'schedul': 'schedule',
  'refering': 'referring',
  'begining': 'beginning',
  'existance': 'existence',
  'guarentee': 'guarantee',
  'maintainance': 'maintenance',
  'previlige': 'privilege',
  'priviledge': 'privilege',
  'recommand': 'recommend',
  'reccomend': 'recommend',
  'recommandation': 'recommendation',
  'accomodate': 'accommodate',
  'accomodation': 'accommodation',
  'adress': 'address',
  'adressed': 'addressed',
  'agressive': 'aggressive',
  'apparant': 'apparent',
  'colleague': 'colleague',
  'collegue': 'colleague',
  'comittee': 'committee',
  'disapear': 'disappear',
  'enviroment': 'environment',
  'enviornment': 'environment',
  'foriegn': 'foreign',
  'harrass': 'harass',
  'independant': 'independent',
  'judgement': 'judgment',
  'liason': 'liaison',
  'mispell': 'misspell',
  'noticable': 'noticeable',
  'prefered': 'preferred',
  'proffesional': 'professional',
  'proffesion': 'profession',
  'profesion': 'profession',
  'referance': 'reference',
  'relavent': 'relevant',
  'supercede': 'supersede',
  'tendancy': 'tendency',
  'unfortunatly': 'unfortunately',
  'unfortuanatly': 'unfortunately',
  'unfortunetly': 'unfortunately',
  'busines': 'business',
  'buisness': 'business',
  'bussiness': 'business',
  'busness': 'business',
  'experiance': 'experience',
  'experence': 'experience',
  'explaning': 'explaining',
  'dissapointed': 'disappointed',
  'appriciate': 'appreciate',
  'sinserely': 'sincerely',
  'sincerly': 'sincerely',
  'sencerely': 'sincerely',
  'faithfull': 'faithfully',
  'intrested': 'interested',
  'intersted': 'interested',
  'intrest': 'interest',
  'intresting': 'interesting',
  'sugestion': 'suggestion',
  'conveniance': 'convenience',
  'cancelation': 'cancellation',
  'availibility': 'availability',
  'attendence': 'attendance',
  'studing': 'studying',
  'comming': 'coming',
  'runing': 'running',
  'swiming': 'swimming',
  'realy': 'really',
  'allways': 'always',
  'peaple': 'people',
  'pepole': 'people',
  'diffrent': 'different',
  'differant': 'different',
  'futher': 'further',
  'hobbys': 'hobbies',
  'activites': 'activities',
  'leasure': 'leisure',
  'comfertable': 'comfortable',
  'confortable': 'comfortable',
  'beutiful': 'beautiful',
  'agrement': 'agreement',
  'knowlege': 'knowledge',
  'langauge': 'language',
  'yeasterday': 'yesterday',
  'wich': 'which',
  'woud': 'would',
  'coud': 'could',
  'shoud': 'should',
  'everyting': 'everything',
  'somthing': 'something',
  'noting': 'nothing',
  'anyting': 'anything',
  'conferance': 'conference',
  'buletin': 'bulletin',
  'incedent': 'incident',
  'incidently': 'incidentally',
  'occassion': 'occasion',
  'ocassion': 'occasion',
  'occassionally': 'occasionally',
  'dissapoint': 'disappoint',
  'disatisfied': 'dissatisfied',
  'dissatisfaction': 'dissatisfaction',
  'inconvienience': 'inconvenience',
  'inconvinience': 'inconvenience',
  'unconvienient': 'inconvenient',
  'persue': 'pursue',
  'persuing': 'pursuing',
  'necessery': 'necessary',
  'completly': 'completely',
  'defanitely': 'definitely',
  'cancelld': 'cancelled',
  'disscusion': 'discussion',
  'discus': 'discuss',
  'allready': 'already',
  'familar': 'familiar',
  'hight': 'height',
  'humourous': 'humorous',
  'imediately': 'immediately',
  'immediatly': 'immediately',
  'inteligence': 'intelligence',
  'libary': 'library',
  'mischevious': 'mischievous',
  'particuler': 'particular',
  'persistant': 'persistent',
  'posible': 'possible',
  'posibly': 'possibly',
  'relavence': 'relevance',
  'resistence': 'resistance',
  'sensable': 'sensible',
  'surprize': 'surprise',
  'vaccuum': 'vacuum',
  'vacum': 'vacuum',
  'vehical': 'vehicle',
  'comunicate': 'communicate',
  'discription': 'description',
  'sugest': 'suggest',
  'whitch': 'which',
  'whith': 'with',
  'becaus': 'because',
  'anouncement': 'announcement',
  'anounce': 'announce',
  'aplication': 'application',
  'apology': 'apology',
  'arive': 'arrive',
  'arival': 'arrival',
  'asociation': 'association',
  'asistant': 'assistant',
  'asistance': 'assistance',
  'becomming': 'becoming',
  'carefull': 'careful',
  'carefully': 'carefully',
  'certian': 'certain',
  'colum': 'column',
  'congradulations': 'congratulations',
  'concience': 'conscience',
  'conscientous': 'conscientious',
  'decieve': 'deceive',
  'disasterous': 'disastrous',
  'dosen\'t': 'doesn\'t',
  'dosent': 'doesn\'t',
  'easely': 'easily',
  'elagant': 'elegant',
  'enterance': 'entrance',
  'equiptment': 'equipment',
  'especialy': 'especially',
  'excelent': 'excellent',
  'facinating': 'fascinating',
  'finaly': 'finally',
  'foward': 'forward',
  'fourward': 'forward',
  'grammer': 'grammar',
  'grammatic': 'grammatical',
  'greatfull': 'grateful',
  'gratefull': 'grateful',
  'happend': 'happened',
  'hopeing': 'hoping',
  'ignorence': 'ignorance',
  'imaginery': 'imaginary',
  'immitate': 'imitate',
  'interupt': 'interrupt',
  'irrisponsible': 'irresponsible',
  'knowlegeable': 'knowledgeable',
  'lenght': 'length',
  'lisence': 'license',
  'lonley': 'lonely',
  'loosing': 'losing',
  'mathmatics': 'mathematics',
  'medecine': 'medicine',
  'minature': 'miniature',
  'mischeif': 'mischief',
  'naturely': 'naturally',
  'neice': 'niece',
  'nieghbor': 'neighbor',
  'nieghbour': 'neighbour',
  'nineth': 'ninth',
  'ninty': 'ninety',
  'oppinion': 'opinion',
  'originaly': 'originally',
  'paralel': 'parallel',
  'parliment': 'parliament',
  'passtime': 'pastime',
  'peacefull': 'peaceful',
  'peice': 'piece',
  'percieve': 'perceive',
  'permenant': 'permanent',
  'playwrite': 'playwright',
  'politican': 'politician',
  'posses': 'possess',
  'potatos': 'potatoes',
  'preceed': 'precede',
  'preceeding': 'preceding',
  'prescence': 'presence',
  'privelege': 'privilege',
  'procede': 'proceed',
  'probaly': 'probably',
  'propoganda': 'propaganda',
  'publically': 'publicly',
  'questionaire': 'questionnaire',
  'readible': 'readable',
  'reciept': 'receipt',
  'religeous': 'religious',
  'rememberance': 'remembrance',
  'restaraunt': 'restaurant',
  'resturant': 'restaurant',
  'rythm': 'rhythm',
  'saftey': 'safety',
  'satelite': 'satellite',
  'secratary': 'secretary',
  'secretry': 'secretary',
  'sieze': 'seize',
  'similer': 'similar',
  'skillfull': 'skillful',
  'speach': 'speech',
  'temperment': 'temperament',
  'therefor': 'therefore',
  'threshhold': 'threshold',
  'throught': 'through',
  'tounge': 'tongue',
  'twelth': 'twelfth',
  'tyrany': 'tyranny',
  'unforseen': 'unforeseen',
  'unplesant': 'unpleasant',
  'usefull': 'useful',
  'valuble': 'valuable',
  'villiage': 'village',
  'warrent': 'warrant',
  'weild': 'wield',
  'whereever': 'wherever',
  'yeild': 'yield'
};

// Whitelist of valid common words, names, abbreviations, and field answers that must NEVER be flagged as spelling errors
export const VALID_WORDS_WHITELIST = new Set([
  'karachi', 'lahore', 'islamabad', 'rawalpindi', 'faisalabad', 'peshawar', 'quetta', 'multan', 'sialkot', 'gujranwala',
  'pakistan', 'pakistani', 'icap', 'ca', 'acca', 'cima', 'cfa', 'ifrs', 'gaap', 'audit', 'auditor', 'auditing',
  'chartered', 'accountant', 'accountancy', 'trainee', 'article', 'articleship', 'ledger', 'debit', 'credit',
  'reading', 'cricket', 'football', 'music', 'traveling', 'travelling', 'cooking', 'swimming', 'badminton', 'tennis',
  'books', 'novels', 'english', 'urdu', 'hi', 'hello', 'hey', 'dear', 'thanks', 'regards', 'sincerely', 'faithfully',
  'gym', 'badminton', 'hobbies', 'hobby', 'student', 'finance', 'manager', 'consultant', 'officer', 'executive',
  'sir', 'madam', 'mr', 'mrs', 'ms', 'dr', 'association', 'society', 'club', 'president', 'secretary', 'committee'
]);

// Grammar & Idiom / Collocation rules with regex patterns
export interface GrammarRule {
  pattern: RegExp;
  replacement: string;
  type: WritingMistakeType;
  explanation: string;
  urduExplanation?: string;
}

export const GRAMMAR_AND_STYLE_RULES: GrammarRule[] = [
  // ==========================================
  // 1. SUBJECT-VERB AGREEMENT & TENSES
  // ==========================================
  {
    pattern: /\bhe don't\b/gi,
    replacement: 'he does not',
    type: 'subject_verb_agreement',
    explanation: "Third-person singular subject 'he' requires 'does not' rather than 'don't'.",
    urduExplanation: "تیسرے شخص واحد فاعل (He) کے ساتھ 'does not' آتا ہے، 'don't' نہیں۔"
  },
  {
    pattern: /\bshe don't\b/gi,
    replacement: 'she does not',
    type: 'subject_verb_agreement',
    explanation: "Third-person singular subject 'she' requires 'does not'.",
    urduExplanation: "فاعل (She) کے ساتھ 'does not' درست ہے۔"
  },
  {
    pattern: /\bit don't\b/gi,
    replacement: 'it does not',
    type: 'subject_verb_agreement',
    explanation: "Third-person singular subject 'it' requires 'does not'.",
    urduExplanation: "فاعل (It) کے ساتھ 'does not' استعمال کریں۔"
  },
  {
    pattern: /\b(he|she|it)\s+have\b/gi,
    replacement: '$1 has',
    type: 'subject_verb_agreement',
    explanation: "Third-person singular subjects ('he', 'she', 'it') take 'has' instead of 'have'.",
    urduExplanation: "واحد فاعل (he/she/it) کے ساتھ 'has' آتا ہے۔"
  },
  {
    pattern: /\b(they|we|you)\s+has\b/gi,
    replacement: '$1 have',
    type: 'subject_verb_agreement',
    explanation: "Plural subjects ('they', 'we', 'you') take 'have' instead of 'has'.",
    urduExplanation: "جمع فاعل (they/we/you) کے ساتھ 'have' استعمال کریں۔"
  },
  {
    pattern: /\b(they|we|you)\s+was\b/gi,
    replacement: '$1 were',
    type: 'subject_verb_agreement',
    explanation: "Plural subjects take 'were' in past tense, not 'was'.",
    urduExplanation: "جمع فاعل کے ساتھ ماضی میں 'were' آتا ہے۔"
  },
  {
    pattern: /\b(he|she|it)\s+were\b/gi,
    replacement: '$1 was',
    type: 'subject_verb_agreement',
    explanation: "Singular third-person subject takes 'was' in past tense.",
    urduExplanation: "واحد فاعل کے ساتھ 'was' درست ہے۔"
  },
  {
    pattern: /\b(he|she|it)\s+do\b/gi,
    replacement: '$1 does',
    type: 'subject_verb_agreement',
    explanation: "Third-person singular subject requires 'does' rather than 'do'.",
    urduExplanation: "واحد فاعل کے ساتھ 'does' آتا ہے۔"
  },
  {
    pattern: /\beveryone are\b/gi,
    replacement: 'everyone is',
    type: 'subject_verb_agreement',
    explanation: "Indefinite pronoun 'everyone' takes a singular verb ('everyone is').",
    urduExplanation: "ضمیر 'everyone' ہمیشہ واحد فعل (is) کے ساتھ آتا ہے۔"
  },
  {
    pattern: /\beverybody are\b/gi,
    replacement: 'everybody is',
    type: 'subject_verb_agreement',
    explanation: "Indefinite pronoun 'everybody' takes a singular verb ('everybody is').",
    urduExplanation: "'everybody' کے ساتھ واحد فعل 'is' آتا ہے۔"
  },
  {
    pattern: /\b(everyone|everybody|someone|somebody|anyone|anybody|nobody|no one)\s+have\b/gi,
    replacement: '$1 has',
    type: 'subject_verb_agreement',
    explanation: "Indefinite pronouns ('everyone', 'somebody', etc.) are grammatically singular and take 'has'.",
    urduExplanation: "'everyone' یا 'somebody' کے ساتھ واحد فعل 'has' آتا ہے۔"
  },
  {
    pattern: /\bthere is (many|several|few|two|three|four|five|multiple|various)\b/gi,
    replacement: 'there are $1',
    type: 'subject_verb_agreement',
    explanation: "Plural predicate nouns require plural existential verb 'there are'.",
    urduExplanation: "جمع اشیاء کے لیے 'there are' استعمال ہوتا ہے۔"
  },
  {
    pattern: /\bthere are a\b/gi,
    replacement: 'there is a',
    type: 'subject_verb_agreement',
    explanation: "Singular noun with article 'a' requires singular 'there is'.",
    urduExplanation: "واحد اسم کے لیے 'there is a' درست ہے۔"
  },
  {
    pattern: /\beach of (them|us|the members|the students) are\b/gi,
    replacement: 'each of $1 is',
    type: 'subject_verb_agreement',
    explanation: "The subject 'each' is grammatically singular and requires the verb 'is'.",
    urduExplanation: "'each' کے بعد فعل ہمیشہ واحد (is) ہوتا ہے۔"
  },
  {
    pattern: /\bone of the ([a-z]+) are\b/gi,
    replacement: 'one of the $1 is',
    type: 'subject_verb_agreement',
    explanation: "Subject is 'one', which is singular and requires 'is'.",
    urduExplanation: "'One of the...' کے ساتھ فعل ہمیشہ واحد (is) ہوتا ہے۔"
  },
  {
    pattern: /\bthe informations? (are|were)\b/gi,
    replacement: 'the information is',
    type: 'grammar',
    explanation: "'Information' is an uncountable noun with no plural 's' and takes a singular verb.",
    urduExplanation: "لفظ 'information' غیر شمار شدہ ہے، اس کے ساتھ 's' نہیں لگتا اور فعل واحد ہوتا ہے۔"
  },
  {
    pattern: /\bthe equipments? (are|were)\b/gi,
    replacement: 'the equipment was',
    type: 'grammar',
    explanation: "'Equipment' is uncountable in English and takes a singular verb.",
    urduExplanation: "'Equipment' کی جمع نہیں بنتی، اس کے ساتھ واحد فعل آتا ہے۔"
  },
  {
    pattern: /\bthe news (are|were)\b/gi,
    replacement: 'the news is',
    type: 'grammar',
    explanation: "'News' is an uncountable noun and requires a singular verb ('is' / 'was').",
    urduExplanation: "'News' بظاہر جمع لگتا ہے لیکن اس کے ساتھ واحد فعل آتا ہے۔"
  },
  {
    pattern: /\bhave went\b/gi,
    replacement: 'have gone',
    type: 'grammar',
    explanation: "Present perfect tense requires past participle: 'have gone', not past simple 'went'.",
    urduExplanation: "'have' کے ساتھ ورب کی تیسری فارم (gone) استعمال ہوتی ہے، 'went' نہیں۔"
  },
  {
    pattern: /\bhas went\b/gi,
    replacement: 'has gone',
    type: 'grammar',
    explanation: "Use past participle 'gone' with auxiliary 'has'.",
    urduExplanation: "'has' کے بعد تیسری فارم 'gone' درست ہے۔"
  },
  {
    pattern: /\bhave wrote\b/gi,
    replacement: 'have written',
    type: 'grammar',
    explanation: "Use the past participle 'written' with the auxiliary 'have'.",
    urduExplanation: "'have' کے بعد ورب کی تیسری فارم 'written' لگائی جاتی ہے۔"
  },
  {
    pattern: /\bhas wrote\b/gi,
    replacement: 'has written',
    type: 'grammar',
    explanation: "Use past participle 'written' with 'has'.",
    urduExplanation: "'has' کے بعد 'written' درست ہے۔"
  },
  {
    pattern: /\bdid not went\b/gi,
    replacement: 'did not go',
    type: 'grammar',
    explanation: "After auxiliary 'did not', use the base form 'go' rather than the past form 'went'.",
    urduExplanation: "'did not' کے بعد ہمیشہ ورب کی پہلی فارم (go) آتی ہے۔"
  },
  {
    pattern: /\bdid not saw\b/gi,
    replacement: 'did not see',
    type: 'grammar',
    explanation: "After 'did not', use the base form 'see'.",
    urduExplanation: "'did not' کے ساتھ پہلی فارم 'see' استعمال کریں۔"
  },
  {
    pattern: /\bdid not wrote\b/gi,
    replacement: 'did not write',
    type: 'grammar',
    explanation: "Use base verb 'write' following 'did not'.",
    urduExplanation: "'did not' کے بعد 'write' آئے گا۔"
  },
  {
    pattern: /\bdid not took\b/gi,
    replacement: 'did not take',
    type: 'grammar',
    explanation: "Use base verb 'take' after 'did not'.",
    urduExplanation: "'did not' کے بعد پہلی فارم 'take' درست ہے۔"
  },
  {
    pattern: /\bdid not knew\b/gi,
    replacement: 'did not know',
    type: 'grammar',
    explanation: "Use base verb 'know' after 'did not'.",
    urduExplanation: "'did not' کے بعد 'know' استعمال کریں۔"
  },
  {
    pattern: /\bwas knowing\b/gi,
    replacement: 'knew',
    type: 'grammar',
    explanation: "'Know' is a stative verb and is not normally used in continuous/progressive tenses.",
    urduExplanation: "ورب 'know' حالت ظاہر کرتا ہے، اس لیے اس کے ساتھ '-ing' نہیں لگتا۔"
  },
  {
    pattern: /\bam having a doubt\b/gi,
    replacement: 'have a doubt',
    type: 'grammar',
    explanation: "Use simple present 'have a doubt' / 'have a query' for mental state.",
    urduExplanation: "دماغی کیفیت یا شک ظاہر کرنے کے لیے 'have' سادہ حال میں آتا ہے۔"
  },
  // Infinitives
  {
    pattern: /\bto telling\b/gi,
    replacement: 'to inform',
    type: 'grammar',
    explanation: "After the infinitive marker 'to', use base verb 'inform' rather than gerund '-ing'.",
    urduExplanation: "'to' کے بعد ہمیشہ ورب کی پہلی فارم 'to inform' یا 'to tell' آتی ہے۔"
  },
  {
    pattern: /\bto informing\b/gi,
    replacement: 'to inform',
    type: 'grammar',
    explanation: "Use the base infinitive 'to inform' rather than 'to informing'.",
    urduExplanation: "'to' کے ساتھ ورب کی پہلی فارم 'to inform' درست ہے۔"
  },
  {
    pattern: /\bto giving\b/gi,
    replacement: 'to provide',
    type: 'grammar',
    explanation: "Use 'to provide' or 'to give' instead of 'to giving'.",
    urduExplanation: "'to' کے بعد 'to provide' یا 'to give' استعمال کریں۔"
  },
  {
    pattern: /\bto making\b/gi,
    replacement: 'to make',
    type: 'grammar',
    explanation: "Infinitive construction requires base form: 'to make'.",
    urduExplanation: "انفینیٹو کے ساتھ ورب کی پہلی فارم 'to make' استعمال ہوتی ہے۔"
  },
  {
    pattern: /\bto discussing\b/gi,
    replacement: 'to discuss',
    type: 'grammar',
    explanation: "Use base verb form 'to discuss' following the particle 'to'.",
    urduExplanation: "'to' کے بعد 'to discuss' درست ہے۔"
  },
  {
    pattern: /\bto writing\b/gi,
    replacement: 'to write',
    type: 'grammar',
    explanation: "Use base form 'to write'.",
    urduExplanation: "'to' کے ساتھ پہلی فارم 'to write' استعمال کریں۔"
  },
  {
    pattern: /\bmust to\b/gi,
    replacement: 'must',
    type: 'grammar',
    explanation: "Modal auxiliary 'must' is followed directly by the bare infinitive without 'to'.",
    urduExplanation: "ماڈل ورب 'must' کے بعد 'to' نہیں لگایا جاتا۔"
  },
  {
    pattern: /\bshould to\b/gi,
    replacement: 'should',
    type: 'grammar',
    explanation: "Modal auxiliary 'should' is followed directly by bare infinitive without 'to'.",
    urduExplanation: "'should' کے بعد 'to' کا استعمال غلط ہے۔"
  },
  {
    pattern: /\bcan to\b/gi,
    replacement: 'can',
    type: 'grammar',
    explanation: "Modal 'can' is followed by a bare verb without 'to'.",
    urduExplanation: "'can' کے فوراً بعد ورب کی پہلی فارم آتی ہے، 'to' نہیں۔"
  },
  {
    pattern: /\bcannot able to\b/gi,
    replacement: 'am unable to',
    type: 'grammar',
    explanation: "'Cannot' and 'able to' are redundant together. Use 'cannot' or 'am unable to'.",
    urduExplanation: "'Cannot' اور 'able to' کو ایک ساتھ استعمال کرنا غلط ہے۔ 'am unable to' لکھیں۔"
  },
  // Preposition collocations
  {
    pattern: /\bin night\b/gi,
    replacement: 'at night',
    type: 'grammar',
    explanation: "Standard English preposition with night is 'at night'.",
    urduExplanation: "رات کے لیے 'at night' درست پریپوزیشن ہے۔"
  },
  {
    pattern: /\bdiscuss about\b/gi,
    replacement: 'discuss',
    type: 'grammar',
    explanation: "'Discuss' is a transitive verb that directly takes an object without the preposition 'about'.",
    urduExplanation: "لفظ 'discuss' کے بعد 'about' لگانے کی ضرورت نہیں۔"
  },
  {
    pattern: /\bcomprise of\b/gi,
    replacement: 'comprise',
    type: 'grammar',
    explanation: "'Comprise' means 'consist of' and should not be followed by 'of' in active voice.",
    urduExplanation: "'Comprise' کے ساتھ 'of' نہیں لگایا جاتا۔"
  },
  {
    pattern: /\bcongratulate for\b/gi,
    replacement: 'congratulate on',
    type: 'grammar',
    explanation: "The correct preposition following 'congratulate' is 'on'.",
    urduExplanation: "مبارکباد کے لیے 'congratulate on' درست پریپوزیشن ہے۔"
  },
  {
    pattern: /\bresponsible of\b/gi,
    replacement: 'responsible for',
    type: 'grammar',
    explanation: "The correct preposition is 'responsible for'.",
    urduExplanation: "ذمہ داری کے لیے 'responsible for' درست ہے۔"
  },
  {
    pattern: /\bgood in\b/gi,
    replacement: 'good at',
    type: 'grammar',
    explanation: "When describing proficiency in a skill or subject, use 'good at'.",
    urduExplanation: "کسی کام یا مضمون میں مہارت کے لیے 'good at' استعمال ہوتا ہے۔"
  },
  {
    pattern: /\binterested for\b/gi,
    replacement: 'interested in',
    type: 'grammar',
    explanation: "The correct collocation is 'interested in'.",
    urduExplanation: "دلچسپی کے لیے 'interested in' درست ہے۔"
  },
  {
    pattern: /\blook forward to hear\b/gi,
    replacement: 'look forward to hearing',
    type: 'grammar',
    explanation: "In 'look forward to', 'to' is a preposition and must be followed by a gerund ('hearing').",
    urduExplanation: "'Look forward to' کے بعد ورب کے ساتھ '-ing' (hearing) لگانا لازمی ہے۔"
  },
  {
    pattern: /\blooking forward to meet\b/gi,
    replacement: 'looking forward to meeting',
    type: 'grammar',
    explanation: "Use gerund 'meeting' after 'looking forward to'.",
    urduExplanation: "'looking forward to' کے بعد 'meeting' آئے گا۔"
  },
  {
    pattern: /\bcomply to\b/gi,
    replacement: 'comply with',
    type: 'grammar',
    explanation: "The correct dependent preposition with comply is 'comply with'.",
    urduExplanation: "قوانین کی پاسداری کے لیے 'comply with' درست ہے۔"
  },
  {
    pattern: /\baccording with\b/gi,
    replacement: 'according to',
    type: 'grammar',
    explanation: "Standard idiom is 'according to'.",
    urduExplanation: "'according to' درست ترکیب ہے۔"
  },
  // Accidental duplicate words
  {
    pattern: /\b(the|is|in|that|and|to|we|they|he|she|it|of|for)\s+\1\b/gi,
    replacement: '$1',
    type: 'grammar',
    explanation: 'Accidental duplicate word detected.',
    urduExplanation: 'ایک ہی لفظ غلطی سے دو بار لکھا گیا ہے۔'
  },

  // ==========================================
  // 2. WORD CHOICE: Confusing Words & Idioms
  // ==========================================
  {
    pattern: /\bhave a big affect on\b/gi,
    replacement: 'have a significant effect on',
    type: 'word_choice',
    explanation: "'Effect' is the noun meaning result/impact, whereas 'affect' is primarily a verb.",
    urduExplanation: "اسم (Noun) کے طور پر 'effect' درست ہے، جبکہ 'affect' فعل ہوتا ہے۔"
  },
  {
    pattern: /\bit will effect our\b/gi,
    replacement: 'it will affect our',
    type: 'word_choice',
    explanation: "Use the verb 'affect' to mean influence or produce an effect on.",
    urduExplanation: "اثر ڈالنے کے لیے فعل 'affect' استعمال کریں۔"
  },
  {
    pattern: /\bmight loose\b/gi,
    replacement: 'might lose',
    type: 'word_choice',
    explanation: "Confused word: 'lose' means to misplace or suffer loss; 'loose' means not tight.",
    urduExplanation: "کھو دینے یا نقصان کے لیے 'lose' درست ہے، 'loose' کا مطلب ڈھیلا ہوتا ہے۔"
  },
  {
    pattern: /\bloose the opportunity\b/gi,
    replacement: 'lose the opportunity',
    type: 'word_choice',
    explanation: "Use 'lose' (to forfeit/miss) rather than 'loose' (unfastened).",
    urduExplanation: "موقع ضائع ہونے کے لیے 'lose the opportunity' لکھیں۔"
  },
  {
    pattern: /\btheir is\b/gi,
    replacement: 'there is',
    type: 'word_choice',
    explanation: "'There' indicates existence or location; 'their' is possessive.",
    urduExplanation: "موجودگی ظاہر کرنے کے لیے 'there is' آتا ہے، 'their' ملکیت کے لیے ہوتا ہے۔"
  },
  {
    pattern: /\btheir are\b/gi,
    replacement: 'there are',
    type: 'word_choice',
    explanation: "Use existential 'there are' rather than possessive 'their'.",
    urduExplanation: "'there are' درست املا اور انتخاب ہے۔"
  },
  {
    pattern: /\bthey're office\b/gi,
    replacement: 'their office',
    type: 'word_choice',
    explanation: "Use possessive pronoun 'their' before a noun, not the contraction 'they're' (they are).",
    urduExplanation: "ملکیت کے لیے 'their office' درست ہے، 'they're' کا مطلب 'they are' ہے۔"
  },
  {
    pattern: /\bplease advice me\b/gi,
    replacement: 'please advise me',
    type: 'word_choice',
    explanation: "'Advise' is the verb meaning to recommend; 'advice' is the uncountable noun.",
    urduExplanation: "فعل (Verb) کے لیے 'advise' درست ہے، جبکہ 'advice' اسم (Noun) ہے۔"
  },
  {
    pattern: /\ban advice\b/gi,
    replacement: 'some advice',
    type: 'word_choice',
    explanation: "'Advice' is uncountable; use 'some advice' or 'a piece of advice', not 'an advice'.",
    urduExplanation: "'Advice' غیر شمار شدہ اسم ہے، اس سے پہلے 'an' نہیں لگتا۔"
  },
  {
    pattern: /\baccounting principals\b/gi,
    replacement: 'accounting principles',
    type: 'word_choice',
    explanation: "'Principle' refers to a fundamental rule or truth; 'principal' refers to a chief person or school head.",
    urduExplanation: "اصولوں کے لیے 'principles' درست لفظ ہے۔"
  },
  {
    pattern: /\bborrow me\b/gi,
    replacement: 'lend me',
    type: 'word_choice',
    explanation: "'Lend' means to give temporarily; 'borrow' means to take temporarily.",
    urduExplanation: "امانت دینے کے لیے 'lend' اور لینے کے لیے 'borrow' استعمال ہوتا ہے۔"
  },
  {
    pattern: /\bexplain me\b/gi,
    replacement: 'explain to me',
    type: 'word_choice',
    explanation: "'Explain' requires the preposition 'to' before the person receiving the explanation.",
    urduExplanation: "لفظ 'explain' کے بعد شخص کے ساتھ 'to me' لگایا جاتا ہے۔"
  },
  {
    pattern: /\bsay me\b/gi,
    replacement: 'tell me',
    type: 'word_choice',
    explanation: "We tell someone something, or say something to someone. Use 'tell me'.",
    urduExplanation: "مجھ سے کہو کے لیے 'tell me' درست ہے۔"
  },
  {
    pattern: /\bdo a mistake\b/gi,
    replacement: 'make a mistake',
    type: 'word_choice',
    explanation: "The standard English collocation is 'make a mistake', not 'do a mistake'.",
    urduExplanation: "غلطی کے ساتھ فعل 'make' استعمال ہوتا ہے، یعنی 'make a mistake'۔"
  },
  {
    pattern: /\bdid a mistake\b/gi,
    replacement: 'made a mistake',
    type: 'word_choice',
    explanation: "Use past collocation 'made a mistake'.",
    urduExplanation: "ماضی میں 'made a mistake' درست ہے۔"
  },
  {
    pattern: /\bgive an exam\b/gi,
    replacement: 'take an exam',
    type: 'word_choice',
    explanation: "Students 'take' or 'sit' an exam; examiners 'give' or 'administer' an exam.",
    urduExplanation: "امتحان دینے والا طالب علم 'take an exam' کہتا ہے۔"
  },
  {
    pattern: /\bcope up with\b/gi,
    replacement: 'cope with',
    type: 'word_choice',
    explanation: "The correct idiom is 'cope with', without the redundant preposition 'up'.",
    urduExplanation: "درست محاورہ 'cope with' ہے، 'up' کا اضافہ غلط ہے۔"
  },
  {
    pattern: /\bpay attention on\b/gi,
    replacement: 'pay attention to',
    type: 'word_choice',
    explanation: "The standard preposition is 'pay attention to'.",
    urduExplanation: "توجہ دینے کے لیے 'pay attention to' درست پریپوزیشن ہے۔"
  },
  {
    pattern: /\bamount of people\b/gi,
    replacement: 'number of people',
    type: 'word_choice',
    explanation: "Use 'number of' for countable nouns like people; 'amount of' is for uncountable quantities.",
    urduExplanation: "لوگوں کی تعداد کے لیے 'number of people' استعمال کریں۔"
  },
  {
    pattern: /\bless people\b/gi,
    replacement: 'fewer people',
    type: 'word_choice',
    explanation: "Use 'fewer' with countable nouns and 'less' with uncountable amounts.",
    urduExplanation: "قابل شمار افراد کے لیے 'fewer' درست ہے۔"
  },

  // ==========================================
  // 3. SENTENCE STRUCTURE: Syntax, Run-ons & Fragments
  // ==========================================
  {
    pattern: /\b([a-z]+),\s+however,\s+([a-z]+)\b/gi,
    replacement: '$1. However, $2',
    type: 'sentence_structure',
    explanation: "Comma splice: 'however' cannot join two independent clauses with only commas. Use a period or semicolon.",
    urduExplanation: "دو مکمل جملوں کو صرف کوما اور 'however' سے نہیں جوڑا جا سکتا۔ فل اسٹاپ لگا کر نیا جملہ شروع کریں۔"
  },
  {
    pattern: /\b([a-z]+),\s+therefore,\s+([a-z]+)\b/gi,
    replacement: '$1. Therefore, $2',
    type: 'sentence_structure',
    explanation: "'Therefore' is a conjunctive adverb. Separate independent clauses with a period or semicolon.",
    urduExplanation: "'Therefore' سے پہلے فل اسٹاپ یا سیمی کولن لگانا لازمی ہے۔"
  },
  {
    pattern: /\bIs important that\b/gi,
    replacement: 'It is important that',
    type: 'sentence_structure',
    explanation: "Missing dummy subject: English requires the pronoun 'It' as subject: 'It is important that'.",
    urduExplanation: "انگریزی جملے میں فاعل کا ہونا ضروری ہے، اس لیے 'It is important' لکھیں۔"
  },
  {
    pattern: /\bIs necessary to\b/gi,
    replacement: 'It is necessary to',
    type: 'sentence_structure',
    explanation: "Sentence fragment missing subject: write 'It is necessary to'.",
    urduExplanation: "جملے کا آغاز 'It is necessary' سے کریں۔"
  },
  {
    pattern: /\bRarely I have seen\b/gi,
    replacement: 'Rarely have I seen',
    type: 'sentence_structure',
    explanation: "Negative adverbial 'Rarely' at the start of a clause triggers subject-auxiliary inversion.",
    urduExplanation: "منفی الفاظ (Rarely) سے جملہ شروع ہو تو امدادی فعل فاعل سے پہلے آتا ہے (Inversion)۔"
  },

  // ==========================================
  // 4. CAPITALIZATION: Pronoun 'I', Proper Nouns, Days & Months
  // ==========================================
  {
    pattern: /\bi am writing\b/g,
    replacement: 'I am writing',
    type: 'capitalization',
    explanation: "The personal pronoun 'I' must always be capitalized.",
    urduExplanation: "انگریزی میں ضمیر 'I' ہمیشہ کیپٹل لکھا جاتا ہے۔"
  },
  {
    pattern: /\bi have\b/g,
    replacement: 'I have',
    type: 'capitalization',
    explanation: "Capitalize the personal pronoun 'I'.",
    urduExplanation: "ضمیر 'I' کو ہمیشہ کیپٹل لکھیں۔"
  },
  {
    pattern: /\bi will\b/g,
    replacement: 'I will',
    type: 'capitalization',
    explanation: "Capitalize the personal pronoun 'I'.",
    urduExplanation: "ضمیر 'I' کو ہمیشہ کیپٹل لکھیں۔"
  },
  {
    pattern: /\bi think\b/g,
    replacement: 'I think',
    type: 'capitalization',
    explanation: "Capitalize the personal pronoun 'I'.",
    urduExplanation: "ضمیر 'I' کو ہمیشہ کیپٹل لکھیں۔"
  },
  {
    pattern: /\bi would\b/g,
    replacement: 'I would',
    type: 'capitalization',
    explanation: "Capitalize the personal pronoun 'I'.",
    urduExplanation: "ضمیر 'I' کو ہمیشہ کیپٹل لکھیں۔"
  },
  {
    pattern: /\bi can\b/g,
    replacement: 'I can',
    type: 'capitalization',
    explanation: "Capitalize the personal pronoun 'I'.",
    urduExplanation: "ضمیر 'I' کو ہمیشہ کیپٹل لکھیں۔"
  },
  {
    pattern: /\bi am\b/g,
    replacement: 'I am',
    type: 'capitalization',
    explanation: "Capitalize the personal pronoun 'I'.",
    urduExplanation: "ضمیر 'I' کو ہمیشہ کیپٹل لکھیں۔"
  },
  {
    pattern: /\b(i)\b/g,
    replacement: 'I',
    type: 'capitalization',
    explanation: "The personal pronoun 'I' must always be written in uppercase.",
    urduExplanation: "ضمیر 'I' ہمیشہ کیپٹل لکھا جاتا ہے۔"
  },
  {
    pattern: /\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/g,
    replacement: '$1',
    type: 'capitalization',
    explanation: "Days of the week are proper nouns and must begin with a capital letter.",
    urduExplanation: "ہفتے کے دنوں کے نام کا پہلا حرف ہمیشہ کیپٹل ہوتا ہے۔"
  },
  {
    pattern: /\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/g,
    replacement: '$1',
    type: 'capitalization',
    explanation: "Months of the year are proper nouns and must begin with a capital letter.",
    urduExplanation: "مہینوں کے نام ہمیشہ کیپٹل حرف سے شروع ہوتے ہیں۔"
  },
  {
    pattern: /\b(pakistan|pakistani|english|urdu)\b/g,
    replacement: '$1',
    type: 'capitalization',
    explanation: "Country names, nationalities, and languages must be capitalized.",
    urduExplanation: "ممالک، قومیتوں اور زبانوں کے نام ہمیشہ کیپٹل ہوتے ہیں۔"
  },

  // ==========================================
  // 5. PUNCTUATION: Spacing & Transition Commas
  // ==========================================
  {
    pattern: /\s+([,.:;!?])/g,
    replacement: '$1',
    type: 'punctuation',
    explanation: "No space should appear before a punctuation mark.",
    urduExplanation: "رموز اوقاف (کوما، فل اسٹاپ وغیرہ) سے پہلے خالی جگہ (Space) نہیں دی جاتی۔"
  },
  {
    pattern: /([,;:])([A-Za-z])/g,
    replacement: '$1 $2',
    type: 'punctuation',
    explanation: "Always insert a single space after a comma, colon, or semicolon.",
    urduExplanation: "کوما، کولن یا سیمی کولن کے بعد ایک اسپیس دینا لازمی ہے۔"
  },
  {
    pattern: /([!?]){2,}/g,
    replacement: '$1',
    type: 'punctuation',
    explanation: "Avoid multiple consecutive exclamation marks or question marks in academic/business writing.",
    urduExplanation: "تحریر میں بار بار سوالیہ یا فجائیہ نشانات لگانا غیر پیشہ ورانہ ہے۔"
  },
  {
    pattern: /\b(However|Furthermore|Therefore|In addition|First of all|On the other hand|Moreover|In conclusion|Consequently|Meanwhile)\s+([A-Za-z])/g,
    replacement: '$1, $2',
    type: 'punctuation',
    explanation: "Introductory transition words require a following comma.",
    urduExplanation: "ابتدائی ربطی الفاظ (Transitions) کے بعد کوما لگانا لازمی ہے۔"
  },

  // ==========================================
  // 6. FORMATTING: Salutations, Sign-offs & Layout
  // ==========================================
  {
    pattern: /\bdear sir\b/gi,
    replacement: 'Dear Sir/Madam,',
    type: 'formatting',
    explanation: "Formal email salutation should be written as 'Dear Sir/Madam,' followed by a comma.",
    urduExplanation: "باضابطہ ای میل میں 'Dear Sir/Madam,' لکھ کر کوما لگائیں۔"
  },
  {
    pattern: /\bdear (mr|ms|mrs|dr)\.?\s+([a-z]+)(?!,)/gi,
    replacement: 'Dear $1. $2,',
    type: 'formatting',
    explanation: "Email salutations must conclude with a comma before beginning the letter body.",
    urduExplanation: "ای میل کے آغاز میں القاب کے بعد کوما لگانا لازمی ہے۔"
  },
  {
    pattern: /\b(yours sincerely|yours faithfully|best regards|kind regards)(?!\s*,)\b/gi,
    replacement: '$1,',
    type: 'formatting',
    explanation: "Formal sign-offs must be followed by a comma (e.g., 'Yours sincerely,').",
    urduExplanation: "خط کے اختتام پر 'Yours sincerely,' یا 'Kind regards,' کے بعد کوما لگانا ضروری ہے۔"
  },

  // ==========================================
  // 5. CLARITY: Redundancy, Conciseness & Flow
  // ==========================================
  {
    pattern: /\bat this moment in time\b/gi,
    replacement: 'currently',
    type: 'clarity',
    explanation: "'At this moment in time' is unnecessarily wordy. Replace with 'currently' or 'at present'.",
    urduExplanation: "طویل اور غیر ضروری عبارت کے بجائے جامع لفظ 'currently' استعمال کریں۔"
  },
  {
    pattern: /\bdue to the fact that\b/gi,
    replacement: 'because',
    type: 'clarity',
    explanation: "Replace verbose phrase 'due to the fact that' with concise conjunction 'because'.",
    urduExplanation: "'due to the fact that' کی جگہ سادہ اور واضح لفظ 'because' لکھیں۔"
  },
  {
    pattern: /\bin order to\b/gi,
    replacement: 'to',
    type: 'clarity',
    explanation: "In most contexts, 'in order to' can be simplified to 'to' without changing the meaning.",
    urduExplanation: "'in order to' کے بجائے محض 'to' لکھنا تحریر کو چست بناتا ہے۔"
  },
  {
    pattern: /\brevert back\b/gi,
    replacement: 'reply',
    type: 'clarity',
    explanation: "'Back' is redundant with 'revert'. Use 'reply' or 'respond' in business correspondence.",
    urduExplanation: "'revert back' غلط ترکیب ہے، صرف 'reply' یا 'respond' کہیں۔"
  },
  {
    pattern: /\bend result\b/gi,
    replacement: 'result',
    type: 'clarity',
    explanation: "Tautology: all results occur at the end. Use simply 'result' or 'outcome'.",
    urduExplanation: "لفظ 'end result' میں تکرار ہے، صرف 'result' لکھنا کافی ہے۔"
  },
  {
    pattern: /\bfuture plans\b/gi,
    replacement: 'plans',
    type: 'clarity',
    explanation: "Plans are inherently future-oriented. Use simply 'plans'.",
    urduExplanation: "منصوبہ ہمیشہ مستقبل کا ہوتا ہے، اس لیے صرف 'plans' درست ہے۔"
  },
  {
    pattern: /\bpast history\b/gi,
    replacement: 'history',
    type: 'clarity',
    explanation: "Redundant phrase: history is always past. Use 'history'.",
    urduExplanation: "'past history' میں غیر ضروری تکرار ہے۔"
  },
  {
    pattern: /\bclose proximity\b/gi,
    replacement: 'near',
    type: 'clarity',
    explanation: "Wordy expression: use 'near' or 'close to'.",
    urduExplanation: "سیدھا اور واضح لفظ 'near' استعمال کریں۔"
  },

  // ==========================================
  // 6. TONE & REGISTER: Formal vs. Informal Consistency
  // ==========================================
  {
    pattern: /\bwarehouse guy\b/gi,
    replacement: 'warehouse supervisor',
    type: 'tone',
    explanation: "Colloquial term 'guy' should be replaced with formal professional designation ('supervisor' or 'personnel').",
    urduExplanation: "پیشہ ورانہ خط و کتابت میں 'guy' کے بجائے 'supervisor' یا 'personnel' استعمال کریں۔"
  },
  {
    pattern: /\bgive us two more days to give report\b/gi,
    replacement: 'grant a two-day extension to submit the report',
    type: 'tone',
    explanation: "Replace direct informal imperative with a polite, professional request for an extension.",
    urduExplanation: "آڈٹ رپورٹ میں 'give report' کے بجائے 'submit the report' کا مؤدبانہ انداز اپنائیں۔"
  },
  {
    pattern: /\bgive report to the firm\b/gi,
    replacement: 'submit the report to the firm',
    type: 'word_choice',
    explanation: "In formal audit and corporate reports, use 'submit the report' rather than 'give report'.",
    urduExplanation: "رپورٹ پیش کرنے کے لیے 'submit the report' مناسب لفظ ہے۔"
  },
  {
    pattern: /\baudit is late\b/gi,
    replacement: 'audit has experienced an unforeseen delay',
    type: 'tone',
    explanation: "Passive, diplomatic framing ('has experienced an unforeseen delay') is preferred over blunt phrasing.",
    urduExplanation: "کاروباری رابطے میں 'audit is late' کے بجائے 'has experienced a delay' زیادہ شائستہ ہے۔"
  },
  {
    pattern: /\bthanks and regards\b/gi,
    replacement: 'Yours sincerely',
    type: 'tone',
    explanation: "In official ICAP letters to external partners or clients, use formal sign-off 'Yours sincerely' or 'Yours faithfully'.",
    urduExplanation: "باضابطہ خط میں 'Yours sincerely' زیادہ مستند ہے۔"
  },
  {
    pattern: /\basap\b/gi,
    replacement: 'at your earliest convenience',
    type: 'tone',
    explanation: "Replace casual acronym 'ASAP' with standard business phrase 'at your earliest convenience'.",
    urduExplanation: "'ASAP' کے بجائے 'at your earliest convenience' باوقار انداز ہے۔"
  },
  {
    pattern: /\bkinds of stuffs\b/gi,
    replacement: 'various matters',
    type: 'tone',
    explanation: "'Stuff' is too informal for academic and business writing. Use 'items', 'matters', or 'materials'.",
    urduExplanation: "'Stuff' غیر رسمی لفظ ہے۔ 'matters' یا 'items' استعمال کریں۔"
  },
  {
    pattern: /\bgonna\b/gi,
    replacement: 'going to',
    type: 'tone',
    explanation: "Slang contraction 'gonna' must be written as 'going to'.",
    urduExplanation: "تحریر میں 'gonna' کے بجائے 'going to' لکھیں۔"
  },
  {
    pattern: /\bwanna\b/gi,
    replacement: 'want to',
    type: 'tone',
    explanation: "Slang contraction 'wanna' must be written as 'want to'.",
    urduExplanation: "تحریر میں 'wanna' کے بجائے 'want to' لکھیں۔"
  },
  {
    pattern: /\bkinda\b/gi,
    replacement: 'somewhat',
    type: 'tone',
    explanation: "Colloquial 'kinda' must be replaced with 'somewhat' or 'rather'.",
    urduExplanation: "غیر رسمی لفظ 'kinda' کے بجائے 'somewhat' لکھیں۔"
  }
];

/**
 * Compare student's answer against the suggested benchmark model answer.
 * Produces insightful comparative notes on length, key information, and tone.
 */
function generateBenchmarkComparisonNotes(
  studentText: string,
  sampleAnswer?: string,
  targetWordCount?: string,
  register: 'formal' | 'informal' | 'general' = 'formal',
  taskType: 'part1' | 'part2' | 'part3' | 'part4A' | 'part4B' | 'general' = 'general'
): string {
  if (taskType === 'part1') {
    return 'Concise form entry accurately aligns with Part 1 specifications (1–5 words). Valid direct answers and alternative responses are fully accepted.';
  }

  if (!sampleAnswer || !sampleAnswer.trim()) {
    return 'Evaluated against ICAP English Communication Skills exam criteria for grammatical accuracy, cohesion, and register.';
  }

  const studentWords = studentText.trim() ? studentText.trim().split(/\s+/).filter(Boolean).length : 0;
  const sampleWords = sampleAnswer.trim().split(/\s+/).filter(Boolean).length;

  const notes: string[] = [];

  // 1. Length & Task Fulfillment
  if (taskType === 'part2') {
    if (studentWords >= 15 && studentWords <= 35) {
      notes.push(`Word count (${studentWords} words) meets the required Part 2 target (20–30 words) with concise, relevant details.`);
    } else if (studentWords < 15) {
      notes.push(`Response (${studentWords} words) is slightly brief for Part 2; aim for 20–30 words to fully explain your points.`);
    } else {
      notes.push(`Response (${studentWords} words) addresses the prompt clearly; keeping it closer to 20–30 words ensures maximum conciseness.`);
    }
  } else if (taskType === 'part3') {
    if (studentWords >= 25 && studentWords <= 45) {
      notes.push(`Word count (${studentWords} words) satisfies the Part 3 social club chat requirement (30–40 words) with natural conversational flow.`);
    } else if (studentWords < 25) {
      notes.push(`Response (${studentWords} words) is a bit short; expand with a reason or example to reach 30–40 words.`);
    } else {
      notes.push(`Word count (${studentWords} words) provides comprehensive detail for club chat communication.`);
    }
  } else {
    if (studentWords < Math.round(sampleWords * 0.6)) {
      notes.push(`Response length (${studentWords} words) is below the benchmark model answer (${sampleWords} words); expand development of ideas to fully address all task prompts.`);
    } else if (studentWords > Math.round(sampleWords * 1.6)) {
      notes.push(`Response length (${studentWords} words) exceeds standard concise exam length (${sampleWords} words); aim for tighter conciseness without sacrificing essential points.`);
    } else {
      notes.push(`Word count (${studentWords} words) is well balanced and aligns closely with the benchmark model answer (${sampleWords} words).`);
    }
  }

  // 2. Register & Salutation Alignment
  if (taskType === 'part4B' || (register === 'formal' && taskType !== 'part1' && taskType !== 'part2')) {
    const hasFormalSalutation = /^(Dear\s+[A-Za-z\s.,]+|To\s+the\s+President)/i.test(studentText.trim());
    const sampleHasFormalSalutation = /^(Dear\s+[A-Za-z\s.,]+|To\s+the\s+President)/i.test(sampleAnswer.trim());

    if (sampleHasFormalSalutation && !hasFormalSalutation) {
      notes.push(`Missing formal salutation compared to model solution (e.g. 'Dear Sir/Madam,' or 'Dear President,').`);
    }

    const hasFormalSignoff = /(Yours sincerely|Yours faithfully|Kind regards|Best regards)/i.test(studentText.trim());
    const sampleHasFormalSignoff = /(Yours sincerely|Yours faithfully)/i.test(sampleAnswer.trim());

    if (sampleHasFormalSignoff && !hasFormalSignoff) {
      notes.push(`Missing appropriate formal institutional sign-off found in model solution (e.g. 'Yours sincerely,').`);
    }
  }

  if (register === 'informal' && (taskType === 'part4A' || taskType === 'general')) {
    const hasInformalGreeting = /^(Hi|Hey|Hello\s+[A-Za-z]+|Dear\s+[A-Za-z]+)/i.test(studentText.trim());
    if (!hasInformalGreeting) {
      notes.push(`Model solution uses a friendly casual opening (e.g., 'Hi [Name],') suitable for a peer or friend.`);
    }
  }

  return notes.join(' ');
}

/**
 * Client-Side Linguistic Analyzer
 * Analyzes student's text, locates all spelling, grammar, punctuation, sentence structure,
 * word choice, clarity, and tone mistakes, calculates offsets, and crafts an improved full version.
 */
export function analyzeTextClientSide(
  text: string,
  contextPrompt?: string,
  register: 'formal' | 'informal' | 'general' = 'formal',
  sampleAnswer?: string,
  taskType: 'part1' | 'part2' | 'part3' | 'part4A' | 'part4B' | 'general' = 'general'
): WritingFeedbackResult {
  if (!text || !text.trim()) {
    return {
      originalText: text || '',
      mistakes: [],
      improvedFullAnswer: sampleAnswer || '',
      benchmarkModelAnswer: sampleAnswer,
      benchmarkComparisonNotes: sampleAnswer ? 'No student response was submitted for comparative analysis.' : undefined,
      score: 0,
      bandRating: 'Beginner',
      toneRegister: register === 'formal' ? 'Formal' : 'Informal',
      grammarScore: 0,
      vocabularyScore: 0,
      cohesionScore: 0,
      summaryFeedback: 'No text was submitted for analysis.'
    };
  }

  const mistakes: WritingMistake[] = [];
  let mistakeCounter = 1;

  // 1. Check for Spelling Mistakes
  const wordRegex = /\b[A-Za-z]+(?:'[A-Za-z]+)?\b/g;
  let wordMatch: RegExpExecArray | null;

  while ((wordMatch = wordRegex.exec(text)) !== null) {
    const rawWord = wordMatch[0];
    const lowerWord = rawWord.toLowerCase();
    const startIndex = wordMatch.index;
    const endIndex = startIndex + rawWord.length;

    // Never flag whitelisted words, common valid accounting words, or Pakistani cities
    if (VALID_WORDS_WHITELIST.has(lowerWord)) {
      continue;
    }

    if (SPELLING_DICTIONARY[lowerWord]) {
      let correctedWord = SPELLING_DICTIONARY[lowerWord];
      // Preserve case
      if (rawWord[0] === rawWord[0].toUpperCase()) {
        correctedWord = correctedWord.charAt(0).toUpperCase() + correctedWord.slice(1);
      }

      mistakes.push({
        id: `spelling-${mistakeCounter++}`,
        original: rawWord,
        replacement: correctedWord,
        type: 'spelling',
        explanation: `Spelling mistake: '${rawWord}' should be correctly spelled as '${correctedWord}'.`,
        urduExplanation: `'${rawWord}' کے ہجے (Spelling) غلط ہیں، درست ہجے '${correctedWord}' ہیں۔`,
        startIndex,
        endIndex
      });
    }
  }

  // 2. Check for Grammar, Sentence Structure, Word Choice, Punctuation, Clarity, and Tone Rules
  for (const rule of GRAMMAR_AND_STYLE_RULES) {
    // If Part 1: skip tone, contractions, and stylistic rules (only real spelling/grammar)
    if (taskType === 'part1' && (rule.type === 'tone' || rule.type === 'clarity')) {
      continue;
    }

    // If informal register or Part 3 (club chat): allow contractions and casual phrases
    if ((register === 'informal' || taskType === 'part3') && rule.type === 'tone' && rule.explanation.includes('contractions')) {
      continue;
    }

    let match: RegExpExecArray | null;
    rule.pattern.lastIndex = 0; // reset regex state
    while ((match = rule.pattern.exec(text)) !== null) {
      const matchText = match[0];
      const startIndex = match.index;
      const endIndex = startIndex + matchText.length;

      // Ensure not already overlapping an existing mistake
      const alreadyCaptured = mistakes.some(
        m => (startIndex >= m.startIndex && startIndex < m.endIndex) ||
             (endIndex > m.startIndex && endIndex <= m.endIndex)
      );

      if (!alreadyCaptured) {
        let replacement = rule.replacement;
        if (rule.type === 'capitalization' && rule.replacement === '$1' && match[1]) {
          replacement = match[1].charAt(0).toUpperCase() + match[1].slice(1);
        } else if (rule.replacement === '$1' && match[1]) {
          replacement = match[1];
        } else if (rule.replacement.includes('$1') && match[1]) {
          replacement = rule.replacement.replace('$1', match[1]);
          if (rule.replacement.includes('$2') && match[2]) {
            replacement = replacement.replace('$2', match[2]);
          }
        }

        // Match case if replacement is simple
        if (matchText[0] === matchText[0].toUpperCase() && replacement[0] !== replacement[0].toUpperCase()) {
          replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }

        mistakes.push({
          id: `rule-${mistakeCounter++}`,
          original: matchText,
          replacement,
          type: rule.type,
          explanation: rule.explanation,
          urduExplanation: rule.urduExplanation,
          startIndex,
          endIndex
        });
      }
    }
  }

  // 3. Sentence-level capitalization & polite inquiry punctuation (for emails & Writing Hub)
  if (taskType !== 'part1') {
    const trimmed = text.trim();
    if (trimmed.length > 0 && /^[a-z]/.test(trimmed)) {
      const firstIdx = text.indexOf(trimmed[0]);
      const alreadyCaptured = mistakes.some(m => firstIdx >= m.startIndex && firstIdx < m.endIndex);
      if (!alreadyCaptured) {
        mistakes.push({
          id: `cap-${mistakeCounter++}`,
          original: trimmed[0],
          replacement: trimmed[0].toUpperCase(),
          type: 'capitalization',
          explanation: 'Sentences and formal emails must begin with a capital letter.',
          urduExplanation: 'جملے یا خط کا پہلا حرف ہمیشہ کیپٹل (بڑا) ہونا چاہیے۔',
          startIndex: firstIdx,
          endIndex: firstIdx + 1
        });
      }
    }

    // Check sentence start after a period
    const sentenceStartRegex = /([.!?]\s+)([a-z])/g;
    let sMatch: RegExpExecArray | null;
    while ((sMatch = sentenceStartRegex.exec(text)) !== null) {
      const letterIndex = sMatch.index + sMatch[1].length;
      const alreadyCaptured = mistakes.some(m => letterIndex >= m.startIndex && letterIndex < m.endIndex);
      if (!alreadyCaptured) {
        mistakes.push({
          id: `cap-${mistakeCounter++}`,
          original: sMatch[2],
          replacement: sMatch[2].toUpperCase(),
          type: 'capitalization',
          explanation: 'The first word following a sentence-ending period must begin with a capital letter.',
          urduExplanation: 'فل اسٹاپ کے بعد نئے جملے کا پہلا لفظ کیپٹل حرف سے شروع کریں۔',
          startIndex: letterIndex,
          endIndex: letterIndex + 1
        });
      }
    }
  }

  // Direct polite request question mark check in emails
  if (taskType === 'part4A' || taskType === 'part4B' || taskType === 'general') {
    const questionRegex = /\b(could you please [^.!?\n]+|can you please [^.!?\n]+|would you mind [^.!?\n]+|may i ask [^.!?\n]+)(\.)/gi;
    let qMatch: RegExpExecArray | null;
    while ((qMatch = questionRegex.exec(text)) !== null) {
      const dotIndex = qMatch.index + qMatch[0].length - 1;
      const alreadyCaptured = mistakes.some(m => dotIndex >= m.startIndex && dotIndex < m.endIndex);
      if (!alreadyCaptured) {
        mistakes.push({
          id: `punct-${mistakeCounter++}`,
          original: '.',
          replacement: '?',
          type: 'punctuation',
          explanation: "Direct polite requests and inquiries require a question mark ('?') rather than a period.",
          urduExplanation: "سوالیہ یا استفساری جملے کے اختتام پر سوالیہ نشان (?) لگانا لازمی ہے۔",
          startIndex: dotIndex,
          endIndex: dotIndex + 1
        });
      }
    }
  }

  // 3. Check for contractions in formal register (ONLY in formal emails like Task 4B, never in Part 1, 2, or 3)
  if (register === 'formal' && taskType !== 'part1' && taskType !== 'part2' && taskType !== 'part3') {
    const formalContractions: Record<string, string> = {
      "don't": "do not",
      "can't": "cannot",
      "won't": "will not",
      "didn't": "did not",
      "isn't": "is not",
      "aren't": "are not",
      "we'll": "we will",
      "i'm": "I am",
      "i've": "I have",
      "they're": "they are",
      "it's": "it is"
    };

    for (const [contraction, expansion] of Object.entries(formalContractions)) {
      const cRegex = new RegExp(`\\b${contraction}\\b`, 'gi');
      let cMatch: RegExpExecArray | null;
      while ((cMatch = cRegex.exec(text)) !== null) {
        const startIndex = cMatch.index;
        const endIndex = startIndex + cMatch[0].length;
        const alreadyCaptured = mistakes.some(
          m => (startIndex >= m.startIndex && startIndex < m.endIndex) ||
               (endIndex > m.startIndex && endIndex <= m.endIndex)
        );

        if (!alreadyCaptured) {
          const raw = cMatch[0];
          let rep = expansion;
          if (raw[0] === raw[0].toUpperCase()) {
            rep = rep.charAt(0).toUpperCase() + rep.slice(1);
          }
          mistakes.push({
            id: `tone-${mistakeCounter++}`,
            original: raw,
            replacement: rep,
            type: 'tone',
            explanation: `Formal register requires avoiding contractions like '${raw}'. Use the full form '${rep}'.`,
            urduExplanation: `باضابطہ تحریر میں شارٹ فارم (Contraction) سے پرہیز کریں اور '${rep}' مکمل لکھیں۔`,
            startIndex,
            endIndex
          });
        }
      }
    }
  }

  // 4. Check for missing terminal punctuation
  // CRITICAL FIX: Eliminate false full-stop (.) errors!
  // In Part 1: Form field entries (1-5 words) do NOT require full stops (e.g. "Accountant", "Lahore, Pakistan", "Reading books").
  // In Part 2 and Part 3: Short responses, conversational chat messages, or single clauses do NOT require strict periods.
  // Terminal punctuation is ONLY checked for formal continuous emails/paragraphs (Task 4B, Task 4A) with 10+ words.
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const isPart123 = taskType === 'part1' || taskType === 'part2' || taskType === 'part3';
  const shouldCheckTerminalPunctuation = !isPart123 && wordCount >= 10 && (taskType === 'part4B' || taskType === 'part4A' || taskType === 'general');

  if (shouldCheckTerminalPunctuation) {
    const trimmed = text.trim();
    if (trimmed.length > 0 && !/[.!?]$/.test(trimmed)) {
      const lastChar = trimmed.slice(-1);
      const lastIndex = text.lastIndexOf(lastChar);
      mistakes.push({
        id: `punct-${mistakeCounter++}`,
        original: lastChar,
        replacement: `${lastChar}.`,
        type: 'punctuation',
        explanation: 'Formal paragraph lacks terminal punctuation. Add a concluding period.',
        urduExplanation: 'باضابطہ پیراگراف کے اختتام پر فل اسٹاپ (.) لگانا لازمی ہے۔',
        startIndex: lastIndex,
        endIndex: lastIndex + 1
      });
    }
  }

  // Sort mistakes by startIndex
  mistakes.sort((a, b) => a.startIndex - b.startIndex);

  // 5. Generate the Improved Full Answer
  let improvedFullAnswer = text;
  const reversedMistakes = [...mistakes].sort((a, b) => b.startIndex - a.startIndex);
  for (const m of reversedMistakes) {
    improvedFullAnswer =
      improvedFullAnswer.slice(0, m.startIndex) +
      m.replacement +
      improvedFullAnswer.slice(m.endIndex);
  }

  // Clean up punctuation and spacing in improved version
  improvedFullAnswer = improvedFullAnswer
    .replace(/\s+([.,!?;:])/g, '$1')
    .replace(/([.,!?;:])(?=[A-Za-z])/g, '$1 ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // Ensure capitalization of sentence starts
  improvedFullAnswer = improvedFullAnswer.replace(/(^\s*|[.!?]\s+)([a-z])/g, (_, p1, p2) => p1 + p2.toUpperCase());

  // Calculate scores based on error density and task requirements
  const totalMistakes = mistakes.length;

  let baseScore = 95;
  if (taskType === 'part1') {
    // Part 1: Clean short answers get 100%
    baseScore = totalMistakes === 0 ? 100 : Math.max(50, 100 - totalMistakes * 15);
  } else if (taskType === 'part2' || taskType === 'part3') {
    baseScore = totalMistakes === 0 ? 98 : Math.max(55, 95 - totalMistakes * 8);
  } else {
    baseScore -= totalMistakes * 5;
    if (baseScore < 45) baseScore = 45;
    if (baseScore > 98) baseScore = 98;
  }

  let bandRating = 'CA Professional';
  if (baseScore < 60) bandRating = 'Beginner';
  else if (baseScore < 78) bandRating = 'Intermediate';

  const grammarErrors = mistakes.filter(m => m.type === 'grammar' || m.type === 'sentence_structure').length;
  const spellingErrors = mistakes.filter(m => m.type === 'spelling').length;
  const toneErrors = mistakes.filter(m => m.type === 'tone' || m.type === 'word_choice').length;
  const clarityErrors = mistakes.filter(m => m.type === 'clarity').length;

  const grammarScore = Math.max(50, 95 - grammarErrors * 9);
  const vocabularyScore = Math.max(50, 95 - (spellingErrors * 8 + toneErrors * 5));
  const cohesionScore = Math.max(60, 90 - (totalMistakes * 3 + clarityErrors * 4));

  const detectedCategories: string[] = [];
  if (grammarErrors > 0) detectedCategories.push(`${grammarErrors} grammar/structure`);
  if (spellingErrors > 0) detectedCategories.push(`${spellingErrors} spelling`);
  if (toneErrors > 0) detectedCategories.push(`${toneErrors} word choice/tone`);
  if (clarityErrors > 0) detectedCategories.push(`${clarityErrors} clarity`);

  const summaryFeedback = totalMistakes === 0
    ? (taskType === 'part1'
        ? 'Excellent! Valid, concise response accurately provided with correct spelling.'
        : 'Outstanding response! Demonstrates grammatical accuracy, appropriate vocabulary choice, and compliant tone register matching the benchmark model.')
    : `Identified ${totalMistakes} writing ${totalMistakes === 1 ? 'issue' : 'issues'} (${detectedCategories.join(', ')}). Review the highlighted errors below and examine how the improved version aligns with the suggested answer.`;

  const urduSummary = totalMistakes === 0
    ? (taskType === 'part1'
        ? 'بہترین جواب! معلومات بالکل درست اور واضح فراہم کی گئی ہیں۔'
        : 'شاندار تحریر! گرامر اور الفاظ کا چناؤ بالکل درست ہے۔')
    : `آپ کی تحریر میں ${totalMistakes} غلطیاں نوٹ کی گئی ہیں۔ ہر غلطی کی تصحیح اور مکمل بہتر ورژن نیچے فراہم کر دیا گیا ہے۔`;

  const benchmarkNotes = generateBenchmarkComparisonNotes(text, sampleAnswer, undefined, register, taskType);

  return {
    originalText: text,
    mistakes,
    improvedFullAnswer,
    benchmarkModelAnswer: sampleAnswer,
    benchmarkComparisonNotes: benchmarkNotes,
    score: baseScore,
    bandRating,
    toneRegister: register === 'formal' ? 'Formal' : register === 'informal' ? 'Informal' : 'Formal',
    grammarScore,
    vocabularyScore,
    cohesionScore,
    summaryFeedback,
    urduSummary
  };
}

/**
 * Async Writing Evaluation
 * Leverages Gemini 2.5 Flash if available, augmented with client-side fallback
 * to guarantee instantaneous, robust mistake detection and improved full answers.
 */
export async function analyzeWritingWithMistakes(
  text: string,
  scenarioContext?: { title?: string; prompt?: string; recipient?: string; sampleAnswer?: string; taskType?: 'part1' | 'part2' | 'part3' | 'part4A' | 'part4B' | 'general' },
  targetRegister: 'formal' | 'informal' | 'general' = 'formal'
): Promise<WritingFeedbackResult> {
  const taskType = scenarioContext?.taskType || 'general';
  const isShortOrInformalPart = taskType === 'part1' || taskType === 'part2' || taskType === 'part3';

  const fallback = analyzeTextClientSide(
    text,
    scenarioContext?.prompt,
    targetRegister,
    scenarioContext?.sampleAnswer,
    taskType
  );

  if (!text || !text.trim()) {
    return fallback;
  }

  const systemPrompt = `You are a Senior Lead Examiner for ICAP English Communication Skills (ECS) and Aptis General Writing.
Carefully examine the student's submitted response and COMPARE IT with the suggested benchmark model answer.
Your mission is to perform a thorough, uncompromising, multi-dimensional error analysis:
1. Detect and identify ALL genuine mistakes across every category:
   - Spelling: Misspelled words, letter transpositions, typos.
   - Capitalization: Capitalization of 'I', start of sentences, proper nouns, days, months, and languages.
   - Punctuation: Missing commas after transitions, question marks on direct requests, apostrophes, spacing around punctuation.
   - Subject-Verb Agreement: Singular vs. plural matching (he has vs. he have, there is vs. there are, everyone is vs. everyone are, etc.).
   - Grammar: Verb tenses, auxiliary verbs, modal verbs without 'to', infinitives, prepositions, and articles.
   - Sentence Structure: Run-ons, comma splices, fragments, awkward syntax, and missing dummy subjects ('It is...').
   - Word Choice: Imprecise diction, easily confused words (affect/effect, lose/loose, their/there, advice/advise), and collocations.
   - Formatting: Formal email salutations, polite openings, paragraph layout, and appropriate sign-offs.
   - Clarity: Redundant expressions, tautologies, and wordiness.
   - Tone & Register: Formality compliance according to recipient (formal for management/firm, informal for friends/peers).

CRITICAL INSTRUCTIONS FOR ACCURACY (ELIMINATING FALSE POSITIVES):
- For Part 1, Part 2, and Part 3: DO NOT penalize or flag missing terminal punctuation (periods/full stops at the end of the text). Short form responses (e.g., job titles, city names, brief hobbies) and conversational chat messages do NOT require terminal full stops.
- In Part 1, Part 2, and Part 3: Focus on detecting and correcting ALL spelling mistakes while accepting valid concise wording and synonyms.
- Whitelist and NEVER flag as spelling errors: Pakistani city names (Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, etc.), common Pakistani names, or standard accounting/business terminology (ICAP, CA, ledger, audit, debit, credit, voucher, accrual).
- Focus strictly on genuine errors: real misspellings, real grammatical flaws, capitalization faults, or formatting omissions.

2. For each mistake, specify:
   - original: the EXACT substring from student text containing the mistake (what is wrong)
   - replacement: the clean, corrected replacement snippet (corrected version)
   - type: "spelling" | "punctuation" | "grammar" | "sentence_structure" | "word_choice" | "capitalization" | "subject_verb_agreement" | "formatting" | "clarity" | "tone"
   - explanation: a specific, actionable reason explaining why this is wrong and how the correction improves it
   - urduExplanation: an Urdu explanation of the rule
3. Provide an "improvedFullAnswer": a polished, pristine, fully improved version of the entire student draft that fixes all issues while preserving the student's meaning.
4. Provide "benchmarkComparisonNotes": 2-3 specific sentences analyzing how the student's answer compares with the suggested answer in terms of content coverage, vocabulary level, and structural coherence.
5. Provide score (0-100), bandRating ("Beginner" | "Intermediate" | "CA Professional"), toneRegister ("Formal" | "Informal"), grammarScore, vocabularyScore, cohesionScore, summaryFeedback, and urduSummary.

CRITICAL: Return ONLY valid JSON matching this schema:
{
  "mistakes": [
    {
      "original": "exact error string",
      "replacement": "corrected string",
      "type": "spelling" | "punctuation" | "grammar" | "sentence_structure" | "word_choice" | "capitalization" | "subject_verb_agreement" | "formatting" | "clarity" | "tone",
      "explanation": "concise explanation",
      "urduExplanation": "اردو وضاحت"
    }
  ],
  "improvedFullAnswer": "Complete rewritten and polished answer...",
  "benchmarkComparisonNotes": "Comparison with suggested answer...",
  "score": 82,
  "bandRating": "CA Professional",
  "toneRegister": "Formal",
  "grammarScore": 85,
  "vocabularyScore": 82,
  "cohesionScore": 80,
  "summaryFeedback": "Specific feedback",
  "urduSummary": "اردو خلاصہ"
}`;

  const userPrompt = `Context/Prompt: "${scenarioContext?.title || ''} - ${scenarioContext?.prompt || 'Business & Exam Writing'}"
Task Type: ${taskType}
Target Register: ${targetRegister}
Suggested Benchmark Model Answer:
"""
${scenarioContext?.sampleAnswer || 'N/A'}
"""
Student Submitted Text:
"""
${text}
"""`;

  try {
    const aiResponse = await callGeminiAPI<any>(systemPrompt, userPrompt, null);

    const rawMistakes = Array.isArray(aiResponse?.mistakes)
      ? aiResponse.mistakes
      : (Array.isArray(aiResponse?.errors)
        ? aiResponse.errors
        : (Array.isArray(aiResponse?.sentences) ? aiResponse.sentences : []));

    const improvedAnswer = aiResponse?.improvedFullAnswer ||
      aiResponse?.improvedAnswer ||
      aiResponse?.improvedText ||
      aiResponse?.modelAnswer ||
      aiResponse?.revisedAnswer ||
      fallback.improvedFullAnswer;

    if (aiResponse && (rawMistakes.length > 0 || improvedAnswer || typeof aiResponse.score === 'number' || aiResponse.score)) {
      // Map and locate indices in original text
      const mappedMistakes: WritingMistake[] = [];
      let mIdx = 1;

      for (const m of rawMistakes) {
        const originalSnippet = m.original || m.originalSentence || m.error || m.mistake || m.text || '';
        const replacementSnippet = m.replacement || m.correctedSentence || m.correction || m.suggested || m.suggestion || '';
        if (!originalSnippet || !replacementSnippet) continue;

        let detectedType: WritingMistakeType = 'grammar';
        const rawTypeStr = (m.type || m.errorType || '').toLowerCase();
        if (rawTypeStr.includes('spell')) detectedType = 'spelling';
        else if (rawTypeStr.includes('capital')) detectedType = 'capitalization';
        else if (rawTypeStr.includes('subject') || rawTypeStr.includes('agreement') || rawTypeStr.includes('s-v')) detectedType = 'subject_verb_agreement';
        else if (rawTypeStr.includes('format') || rawTypeStr.includes('salutation') || rawTypeStr.includes('sign-off')) detectedType = 'formatting';
        else if (rawTypeStr.includes('punct')) detectedType = 'punctuation';
        else if (rawTypeStr.includes('word') || rawTypeStr.includes('vocab')) detectedType = 'word_choice';
        else if (rawTypeStr.includes('struct') || rawTypeStr.includes('syntax') || rawTypeStr.includes('run-on') || rawTypeStr.includes('splice')) detectedType = 'sentence_structure';
        else if (rawTypeStr.includes('clar') || rawTypeStr.includes('redund')) detectedType = 'clarity';
        else if (rawTypeStr.includes('tone') || rawTypeStr.includes('regis')) detectedType = 'tone';

        // Filter out false terminal punctuation errors on Parts 1, 2, and 3
        if (isShortOrInformalPart && detectedType === 'punctuation') {
          const expl = (m.explanation || '').toLowerCase();
          if (expl.includes('full stop') || expl.includes('period') || expl.includes('terminal') || originalSnippet === '.' || replacementSnippet === '.') {
            continue;
          }
        }

        const startIndex = text.indexOf(originalSnippet);
        const endIndex = startIndex !== -1 ? startIndex + originalSnippet.length : 0;

        mappedMistakes.push({
          id: `ai-${mIdx++}`,
          original: originalSnippet,
          replacement: replacementSnippet,
          type: detectedType,
          explanation: m.explanation || `Corrected '${originalSnippet}' to '${replacementSnippet}'.`,
          urduExplanation: m.urduExplanation,
          startIndex: startIndex !== -1 ? startIndex : 0,
          endIndex: endIndex !== -1 ? endIndex : originalSnippet.length
        });
      }

      // Merge with any client-side errors that might have been missed by AI
      for (const clientMistake of fallback.mistakes) {
        const alreadyExists = mappedMistakes.some(
          m => m.original.toLowerCase() === clientMistake.original.toLowerCase()
        );
        if (!alreadyExists) {
          mappedMistakes.push(clientMistake);
        }
      }

      mappedMistakes.sort((a, b) => a.startIndex - b.startIndex);

      const parsedScore = typeof aiResponse.score === 'number'
        ? aiResponse.score
        : (parseInt(aiResponse.score, 10) || fallback.score);

      return {
        originalText: text,
        mistakes: mappedMistakes.length > 0 ? mappedMistakes : fallback.mistakes,
        improvedFullAnswer: improvedAnswer,
        benchmarkModelAnswer: scenarioContext?.sampleAnswer || fallback.benchmarkModelAnswer,
        benchmarkComparisonNotes: aiResponse.benchmarkComparisonNotes || fallback.benchmarkComparisonNotes,
        score: parsedScore,
        bandRating: aiResponse.bandRating || fallback.bandRating,
        toneRegister: aiResponse.toneRegister || fallback.toneRegister,
        grammarScore: typeof aiResponse.grammarScore === 'number' ? aiResponse.grammarScore : fallback.grammarScore,
        vocabularyScore: typeof aiResponse.vocabularyScore === 'number' ? aiResponse.vocabularyScore : fallback.vocabularyScore,
        cohesionScore: typeof aiResponse.cohesionScore === 'number' ? aiResponse.cohesionScore : fallback.cohesionScore,
        summaryFeedback: aiResponse.summaryFeedback || aiResponse.summary || fallback.summaryFeedback,
        urduSummary: aiResponse.urduSummary || aiResponse.urduExplanation || fallback.urduSummary
      };
    }
  } catch (err) {
    console.warn('[analyzeWritingWithMistakes] Gemini API analysis fallback to client analysis:', err);
  }

  return fallback;
}

/**
 * High-level helper to evaluate an exam writing task (Part 1, 2, 3, 4A, 4B)
 */
export async function evaluateExamWritingTask(
  studentText: string,
  sampleAnswer: string,
  taskInfo: {
    taskName: string;
    prompt: string;
    targetWordCount?: string;
    register?: 'formal' | 'informal' | 'general';
    taskType?: 'part1' | 'part2' | 'part3' | 'part4A' | 'part4B' | 'general';
  }
): Promise<WritingFeedbackResult> {
  return analyzeWritingWithMistakes(
    studentText,
    {
      title: taskInfo.taskName,
      prompt: taskInfo.prompt,
      sampleAnswer: sampleAnswer,
      taskType: taskInfo.taskType
    },
    taskInfo.register || 'formal'
  );
}

/**
 * Synchronous instant evaluation helper for initial render
 */
export function evaluateExamWritingTaskSync(
  studentText: string,
  sampleAnswer: string,
  taskInfo: {
    taskName: string;
    prompt: string;
    targetWordCount?: string;
    register?: 'formal' | 'informal' | 'general';
    taskType?: 'part1' | 'part2' | 'part3' | 'part4A' | 'part4B' | 'general';
  }
): WritingFeedbackResult {
  return analyzeTextClientSide(
    studentText,
    taskInfo.prompt,
    taskInfo.register || 'formal',
    sampleAnswer,
    taskInfo.taskType || 'general'
  );
}
