import { VocabWordMatchItem, VocabDefinitionItem, VocabCollocationItem } from '../types';
import rawPoolData from './pdfVocabulary1000Pool.json';

export interface RawPdfVocabQuestion {
  id: string;
  num: number;
  category: 'Word Definition' | 'Word Usage' | 'Word Combination' | 'Word Matching';
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
  text: string;
  options: string[];
  correctLetter: string;
  correctIndex: number;
  correctAnswer: string;
}

export interface PdfVocabularyPoolData {
  defQuestions: RawPdfVocabQuestion[];
  usageQuestions: RawPdfVocabQuestion[];
  collocQuestions: RawPdfVocabQuestion[];
  matchQuestions: RawPdfVocabQuestion[];
}

export const PDF_VOCABULARY_1000: PdfVocabularyPoolData = rawPoolData as PdfVocabularyPoolData;

export const SEEN_PDF_VOCAB_STORAGE_KEY = 'icap_seen_pdf_vocab_ids';

// In-memory cache to guarantee ultra-fast synchronous lookup
let memorySeenVocabIds: Set<string> | null = null;

export function getSeenPdfVocabIds(): Set<string> {
  if (memorySeenVocabIds) return memorySeenVocabIds;
  if (typeof window === 'undefined') {
    memorySeenVocabIds = new Set<string>();
    return memorySeenVocabIds;
  }
  try {
    const raw = localStorage.getItem(SEEN_PDF_VOCAB_STORAGE_KEY);
    if (!raw) {
      memorySeenVocabIds = new Set<string>();
      return memorySeenVocabIds;
    }
    const arr = JSON.parse(raw);
    memorySeenVocabIds = new Set<string>(Array.isArray(arr) ? arr : []);
    return memorySeenVocabIds;
  } catch {
    memorySeenVocabIds = new Set<string>();
    return memorySeenVocabIds;
  }
}

export function saveSeenPdfVocabIds(seenSet: Set<string>): void {
  memorySeenVocabIds = seenSet;
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SEEN_PDF_VOCAB_STORAGE_KEY, JSON.stringify(Array.from(seenSet)));
  } catch (e) {
    console.warn('Failed to persist seen PDF vocab IDs:', e);
  }
}

export function clearSeenPdfVocabIds(): void {
  memorySeenVocabIds = new Set<string>();
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(SEEN_PDF_VOCAB_STORAGE_KEY);
    } catch {}
  }
}

// Fisher-Yates array shuffle
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Transforms a raw PDF Match Question into Aptis VocabWordMatchItem
 */
function toVocabWordMatchItem(q: RawPdfVocabQuestion): VocabWordMatchItem {
  const targetWord = q.text
    .replace(/^Choose the closest synonym of\s+/i, '')
    .replace(/\.$/, '')
    .trim();

  return {
    id: q.id,
    targetWord,
    correctMatch: q.correctAnswer,
    options: [...q.options],
    explanation: `The closest synonym for "${targetWord}" is "${q.correctAnswer}".`,
    urduExplanation: `لفظ "${targetWord}" کا ہم معنی (synonym) لفظ "${q.correctAnswer}" ہے۔`
  };
}

/**
 * Transforms a raw PDF Definition Question into Aptis VocabDefinitionItem
 */
function toVocabDefinitionItem(q: RawPdfVocabQuestion): VocabDefinitionItem {
  return {
    id: q.id,
    definition: q.text,
    correctWord: q.correctAnswer,
    options: [...q.options],
    explanation: `The term matching the definition "${q.text}" is "${q.correctAnswer}".`,
    urduExplanation: `تعریف "${q.text}" کے مطابق درست لفظ "${q.correctAnswer}" ہے۔`
  };
}

/**
 * Transforms a raw PDF Collocation Question into Aptis VocabCollocationItem
 */
function toVocabCollocationItem(q: RawPdfVocabQuestion): VocabCollocationItem {
  const cleanSentence = q.text
    .replace(/^Choose the word or phrase that best completes the collocation:\s*/i, '')
    .trim();

  return {
    id: q.id,
    sentence: cleanSentence,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: `The natural word combination/collocation is: "${cleanSentence.replace('____', q.correctAnswer)}".`,
    urduExplanation: `درست انگریزی کولکیشن کے لیے "${q.correctAnswer}" کا انتخاب کیا جاتا ہے۔`
  };
}

// ---------------------------------------------------------------------------
// Authentic context sentences for Word Usage (Sentence Completion) MCQs.
// Keys are lowercase correct-answer words. Values contain ____ as the blank.
// These REPLACE dummy template sentences from the PDF at runtime so that
// every displayed MCQ has a clear, meaningful, grammatically correct blank.
// ---------------------------------------------------------------------------
const USAGE_CONTEXT_SENTENCES: Record<string, string> = {
  "abandon": "Facing a major storm, the captain had to ____ the ship to ensure the safety of the crew.",
  "abate": "The storm began to ____ after midnight, allowing the rescue teams to resume their operations.",
  "abbreviate": "In formal writing, it is advisable to ____ long technical terms only when readers are familiar with them.",
  "abdicate": "The king chose to ____ the throne in favour of his eldest son after years of ill health.",
  "aberration": "Scientists dismissed the unexpected result as an ____ rather than a meaningful finding.",
  "abet": "The court found him guilty of aiding and abetting the fraud, as he helped to ____ the scheme.",
  "abhor": "Conscientious citizens ____ any form of discrimination or corruption in public office.",
  "abide": "A good citizen must ____ by the laws of the land, even when they seem inconvenient.",
  "abject": "The refugees lived in ____ poverty, lacking even the most basic necessities like clean water.",
  "abjure": "After decades of supporting the policy, the senator chose to ____ his position following a major scandal.",
  "abolish": "Campaigners called on the government to ____ the outdated tax that disproportionately affected the poor.",
  "abrupt": "His ____ departure from the meeting surprised everyone, as he left without saying a word.",
  "abscond": "The treasurer attempted to ____ with company funds, but was caught at the airport before boarding.",
  "absolve": "The priest listened carefully before deciding whether he could ____ the penitent of his sins.",
  "abstain": "Doctors recommended that he ____ from alcohol entirely to improve his liver condition.",
  "abundant": "The fertile river basin boasts an ____ supply of clean freshwater for local agriculture.",
  "acclaim": "The young author received widespread ____ for her debut novel, which sold millions of copies worldwide.",
  "acclimate": "New employees are given a month to ____ to the company's working culture and procedures.",
  "accolade": "Winning the Nobel Prize is the greatest ____ a scientist can receive for a lifetime of research.",
  "accord": "The two nations reached an ____ after weeks of diplomatic negotiations in Geneva.",
  "accurate": "The student gave an ____ answer supported by well-researched evidence.",
  "acerbic": "The critic was known for his ____ reviews, which could reduce even confident directors to self-doubt.",
  "acquiesce": "Rather than argue further, she decided to ____ to her manager's decision despite her reservations.",
  "acumen": "Her sharp financial ____ allowed her to identify profitable investment opportunities others had overlooked.",
  "adamant": "She was completely ____ that the report should be published, refusing to consider any delay.",
  "adept": "She was highly ____ at negotiating complex contracts, having spent fifteen years in commercial law.",
  "adequate": "The volunteers ensured there was an ____ supply of food and water for all the displaced families.",
  "admonish": "The teacher had to ____ the students for talking during the exam and reminded them of the rules.",
  "adorn": "The bride chose to ____ her hair with fresh jasmine flowers for the wedding ceremony.",
  "adroit": "The ____ negotiator managed to secure a favourable deal for both parties without any conflict.",
  "adverse": "The experimental drug was discontinued after several patients developed ____ side effects.",
  "adversity": "It is in times of ____ that a person's true strength and character are revealed.",
  "advocate": "As a barrister, she chose to ____ for defendants who could not afford legal representation.",
  "affable": "The new principal was so ____ that students felt comfortable approaching him with any concern.",
  "aggravate": "Continuing to work long hours without rest will only ____ the back injury you sustained last month.",
  "agile": "A successful modern enterprise must remain ____ to adjust quickly to rapid market shifts.",
  "alacrity": "The enthusiastic intern accepted the challenging assignment with genuine ____ and speed.",
  "alleviate": "Painkillers can ____ discomfort, but they do not address the underlying cause of the problem.",
  "allocate": "The committee agreed to ____ a larger portion of the budget to mental health services.",
  "aloof": "Despite working in a large team, he remained ____ and rarely participated in group discussions.",
  "altruistic": "Her decision to donate her entire inheritance to charity was widely regarded as a truly ____ act.",
  "ambiguous": "The contract clause was so ____ that both parties interpreted it differently, leading to a legal dispute.",
  "ameliorate": "The government introduced new housing schemes to ____ the living conditions of the urban poor.",
  "amiable": "Her ____ personality made her a favourite among colleagues, who always enjoyed her company.",
  "amicable": "After months of tension, the two companies reached an ____ settlement out of court.",
  "ample": "The conference hall provided ____ space for all the delegates and their support staff.",
  "analyze": "Before presenting conclusions, researchers must carefully ____ all collected data for patterns and trends.",
  "anarchy": "Without a functioning government, the country slid towards ____, with rival factions seizing control.",
  "animosity": "Years of unresolved disputes created deep ____ between the two neighbouring families.",
  "antagonize": "It would be unwise to ____ the senior managers if you hope to advance in this organisation.",
  "anticipate": "A skilled manager should ____ potential problems and prepare contingency plans well in advance.",
  "antipathy": "She felt a strong ____ towards any form of dishonesty, having been deceived in the past.",
  "apathy": "Widespread voter ____ was blamed for the record-low turnout in last month's election.",
  "appease": "In an attempt to ____ the protesters, the government promised to review its controversial policy.",
  "appraise": "The certified gemologist was asked to ____ the antique diamond necklace before the auction.",
  "apprehensive": "She felt deeply ____ about presenting her research to such a distinguished panel of experts.",
  "arbitrary": "The teacher's grading seemed completely ____, with no clear criteria distinguishing good work from poor work.",
  "ardent": "An ____ supporter of environmental conservation, she volunteered every weekend at the nature reserve.",
  "articulate": "The candidate was able to ____ her vision for the company clearly and persuasively during the interview.",
  "ascertain": "Before making a diagnosis, the doctor needed to ____ the exact cause of the patient's symptoms.",
  "ascetic": "Living an ____ life of strict discipline and simplicity, the monk owned nothing more than his robe.",
  "assess": "The panel will ____ each application on its individual merit before making a final decision.",
  "assiduous": "Her ____ preparation for the bar exam — studying sixteen hours a day — eventually paid off with a top score.",
  "astute": "An ____ observer of human behaviour, she quickly noticed the tension between the two colleagues.",
  "attain": "Through years of dedicated study, he managed to ____ the highest qualification available in his field.",
  "audacious": "It took an ____ entrepreneur to invest everything in an unproven technology that the world had never seen.",
  "auspicious": "The project launched on an ____ note, with early results exceeding all expectations.",
  "austere": "The monastery's ____ décor — bare stone walls and simple wooden furniture — reflected its philosophy of simplicity.",
  "avarice": "His ____ knew no bounds; even after amassing a fortune, he continued to exploit those beneath him.",
  "avid": "An ____ reader from an early age, she had devoured thousands of books by the time she was eighteen.",
  "banal": "The speech was disappointingly ____, offering nothing more than tired clichés and empty promises.",
  "belittle": "A good leader should never ____ team members for asking questions or suggesting new ideas.",
  "benign": "The doctor confirmed that the tumour was ____ and posed no risk to the patient's health.",
  "bequeath": "In his will, he chose to ____ his vast art collection to the national museum for public enjoyment.",
  "bewilder": "The complexity of the new tax code continued to ____ even experienced accountants.",
  "blatant": "The politician made a ____ attempt to mislead the public by citing figures out of context.",
  "bolster": "The government announced new subsidies to ____ the struggling agricultural sector.",
  "brevity": "The speaker was praised for the ____ of his address; he made his point clearly in under ten minutes.",
  "capricious": "The director's ____ decision-making made it difficult for the production team to plan anything reliably.",
  "censure": "The committee voted to formally ____ the minister for his conduct during the inquiry.",
  "chaotic": "The emergency room was utterly ____ following the mass-casualty incident, with staff running in every direction.",
  "circumspect": "A ____ investor carefully evaluates all risks before committing funds to any venture.",
  "coerce": "No one should be able to ____ another person into signing a legal document against their will.",
  "coherent": "The report lacked a ____ argument; the ideas were scattered and difficult to follow.",
  "concise": "A good cover letter should be ____, covering key qualifications without exceeding one page.",
  "concur": "After reviewing the data independently, both scientists were pleased to find that their conclusions ____.",
  "condone": "The school administration made it clear it would not ____ any form of bullying on the premises.",
  "conspicuous": "The empty chair at the head of the table was a ____ reminder that the CEO had resigned.",
  "contentious": "The new zoning proposal proved highly ____, with local residents deeply divided on the issue.",
  "corroborate": "The witness's account helped to ____ the defendant's claim that he was not present at the scene.",
  "daunt": "The sheer height of the mountain did not ____ the experienced climber, who had scaled taller peaks.",
  "dearth": "There is a serious ____ of qualified doctors in rural areas, leaving many communities without healthcare.",
  "debacle": "The product launch turned into a complete ____ when the servers crashed within minutes of going live.",
  "debilitate": "Chronic fatigue can ____ a person so severely that even simple daily tasks become exhausting.",
  "decorum": "Guests were expected to maintain appropriate ____ during the state dinner, dressing formally and speaking quietly.",
  "deference": "Out of ____ to his elders, he always stood when they entered the room and offered his seat.",
  "demure": "The ____ young diplomat spoke softly and carefully, never drawing unnecessary attention to herself.",
  "denounce": "Human rights organisations publicly ____ the government's decision to detain journalists without trial.",
  "deplete": "Years of overfishing have begun to ____ the fish stocks in the region's coastal waters.",
  "deride": "It is cruel to ____ someone for making an honest mistake when they were genuinely trying their best.",
  "desolate": "The abandoned factory stood ____ at the edge of town, its windows shattered and walls crumbling.",
  "despondent": "After failing the exam for the third time, she felt utterly ____ and questioned her abilities.",
  "diligent": "Only a ____ researcher who checks every source carefully can produce truly reliable work.",
  "discrepancy": "The senior auditor found an unexplained ____ between the bank statement and the internal journal.",
  "disdain": "She regarded the gossip with visible ____, refusing to engage in conversation she found beneath her.",
  "disseminate": "Social media platforms can ____ misinformation at an alarming speed, reaching millions within hours.",
  "dissent": "Freedom of speech includes the right to ____ from government policy without fear of punishment.",
  "divulge": "The spy refused to ____ any classified information despite hours of intense questioning.",
  "dubious": "The scientist was ____ about the new study's findings, as the methodology appeared deeply flawed.",
  "ebullient": "The ____ host welcomed each guest with extraordinary energy, making everyone feel instantly at ease.",
  "eclectic": "Her music playlist was wonderfully ____; it ranged from classical symphonies to West African jazz.",
  "elated": "She was ____ when she discovered her painting had won first prize at the national art competition.",
  "elicit": "The interviewer used open-ended questions to ____ more detailed responses from the candidates.",
  "eloquent": "The lawyer delivered an ____ closing argument that moved both the jury and the judge.",
  "emulate": "Young athletes aspire to ____ the dedication and discipline of their sporting heroes.",
  "enervate": "The extreme heat of the desert began to ____ the hikers, draining their energy and slowing their pace.",
  "engender": "A culture of transparency can ____ trust between employees and senior management over time.",
  "enigmatic": "The artist remained ____ in interviews, giving vague answers that only deepened public curiosity.",
  "ephemeral": "Fame in the entertainment industry can be ____, with stars rising and fading within a single season.",
  "equanimity": "She faced the unexpected diagnosis with remarkable ____, calmly discussing treatment options with her doctors.",
  "eradicate": "The global health community aims to completely ____ polio within the next decade through vaccination.",
  "erudite": "The professor was so ____ that his lectures drew students from departments across the entire university.",
  "esoteric": "The lecture on advanced topology was so ____ that only specialists in the field could follow it.",
  "exacerbate": "Refusing to seek medical attention will only ____ the infection and delay your recovery.",
  "exonerate": "New DNA evidence was presented to ____ the man who had spent twelve years in prison for a crime he did not commit.",
  "expedient": "With time running out, the committee chose the most ____ solution rather than the most thorough one.",
  "extol": "Critics continued to ____ the director's latest film as a masterpiece of modern cinema.",
  "fabricate": "The accused was found guilty of attempting to ____ evidence to mislead the investigation.",
  "facilitate": "The government appointed a mediator to ____ discussions between the striking workers and management.",
  "fallacious": "The politician's argument was entirely ____, based on statistics that had been selectively misrepresented.",
  "fastidious": "As a ____ editor, she checked every paragraph three times before approving a manuscript for publication.",
  "fathom": "Even experienced astronomers struggle to ____ the true vastness of the universe.",
  "fervent": "A ____ advocate for children's rights, she dedicated her entire career to education reform.",
  "flagrant": "The referee had no choice but to send off the player for a ____ violation of the rules.",
  "flourish": "Small businesses tend to ____ when local authorities reduce unnecessary bureaucracy and regulations.",
  "frugal": "Despite his enormous wealth, he lived a ____ lifestyle, spending only on necessities.",
  "furtive": "The student's ____ glances at his neighbour's paper made the invigilator immediately suspicious.",
  "gregarious": "The ____ salesperson thrived in social settings and could start a conversation with anyone.",
  "haughty": "Her ____ attitude alienated her colleagues, who found her dismissive and unwilling to listen.",
  "heed": "Travellers should always ____ the advice of local guides when navigating unfamiliar terrain.",
  "hinder": "Bureaucratic delays should not be allowed to ____ the delivery of vital humanitarian aid.",
  "hypothetical": "The professor posed a ____ scenario to encourage students to think critically about ethical dilemmas.",
  "imminent": "Scientists warn that without immediate action, an ____ environmental catastrophe is almost inevitable.",
  "impartial": "A judge must remain completely ____ and base decisions solely on the evidence presented in court.",
  "imperative": "It is ____ that all emergency exits remain clear and accessible at all times during the event.",
  "implicit": "His silence was an ____ admission that he had known about the problem all along.",
  "inadvertent": "The journalist made an ____ error when he confused the two politicians' names in the published article.",
  "incisive": "The journalist's ____ questions exposed the contradictions in the minister's public statements.",
  "indolent": "His ____ approach to study — rarely attending classes or completing assignments — led to his dismissal.",
  "inept": "The firm dismissed the contractor after observing his completely ____ execution of the project.",
  "infallible": "No scientific theory is completely ____; each must be tested and revised as new evidence emerges.",
  "ingenuous": "His ____ response to the trick question revealed that he had no idea he was being deceived.",
  "inhibit": "Excessive self-criticism can ____ creativity, making it harder to generate original ideas.",
  "innate": "The child's ____ curiosity about how things worked led her to pursue a career in engineering.",
  "insatiable": "She had an ____ thirst for knowledge, spending every spare moment reading or attending lectures.",
  "insipid": "The film received poor reviews for its ____ dialogue and predictable storyline that bored audiences.",
  "inundate": "After the announcement, the company's customer service team was ____ with thousands of enquiries.",
  "irascible": "The ____ coach frequently shouted at players over minor mistakes, creating a tense team environment.",
  "laconic": "Known for his brief and ____ replies, the general answered the reporter's question in one word.",
  "laud": "Critics were quick to ____ the documentary for its honest portrayal of life in conflict zones.",
  "lethargic": "She felt ____ for days after the illness, lacking the energy to carry out her usual routine.",
  "lucid": "Even in his eighties, the professor remained remarkably ____, delivering clear and compelling arguments.",
  "magnanimous": "In victory, the champion was ____, publicly praising his opponent's effort and sportsmanship.",
  "malevolent": "The villain's ____ intentions became clear when he began systematically sabotaging his rivals' careers.",
  "malleable": "Gold is a highly ____ metal, which makes it ideal for crafting intricate jewellery designs.",
  "meticulous": "A ____ surgeon checks every instrument and procedure twice before and during an operation.",
  "mitigate": "Planting trees along roadsides helps to ____ the effects of urban air pollution significantly.",
  "mundane": "Even the most ____ tasks, like filing invoices, must be completed accurately to keep operations running.",
  "naive": "It would be ____ to assume that every investment comes with guaranteed returns and no risk.",
  "nefarious": "The organised crime ring's ____ activities included extortion, trafficking, and large-scale financial fraud.",
  "obdurate": "Despite repeated pleas from his advisers, the executive remained ____ in his refusal to change strategy.",
  "obscure": "The meaning of the ancient inscription was so ____ that scholars debated it for centuries.",
  "obsolete": "With the rise of digital communication, the fax machine has become largely ____.",
  "obstinate": "Despite clear evidence that his approach was failing, the manager remained ____ and refused to change.",
  "ominous": "Dark clouds gathered on the horizon, an ____ sign that the outdoor festival might be disrupted.",
  "onerous": "The new regulations placed an ____ burden on small businesses, which struggled to comply.",
  "opulent": "The visiting delegation was welcomed into an ____ ballroom decorated with crystal chandeliers.",
  "ostensible": "His ____ reason for visiting the office was to drop off documents, but colleagues suspected an ulterior motive.",
  "ostentatious": "The celebrity arrived in an ____ limousine decorated with gold trim, attracting stares from passersby.",
  "pacify": "The company sent its most experienced executive to ____ the angry shareholders at the emergency meeting.",
  "paradox": "It is a ____ that the busiest people often seem to find the most time for others.",
  "parsimonious": "His ____ approach to spending — refusing to replace broken equipment — eventually cost the firm far more.",
  "perfidious": "The ____ ally secretly shared classified intelligence with the enemy while pretending to cooperate.",
  "perfunctory": "The manager gave only a ____ response to the employee's detailed proposal, barely glancing at it.",
  "perilous": "The rescue team undertook the ____ mission under cover of darkness to avoid detection by enemy forces.",
  "pervasive": "The ____ smell of smoke indicated that the fire had spread through most of the building.",
  "placate": "The airline offered vouchers to ____ passengers who had been stranded for more than twelve hours.",
  "plausible": "The suspect offered a ____ alibi, but investigators still needed to verify the details.",
  "pragmatic": "Rather than chasing an ideal solution, the engineer took a ____ approach and solved the problem with available resources.",
  "precarious": "The ageing bridge was in a ____ state; engineers warned it could collapse without urgent repairs.",
  "precipitate": "Acting in haste can ____ a crisis that careful planning might have prevented entirely.",
  "preclude": "The candidate's criminal record did not automatically ____ him from applying for a position.",
  "predilection": "She had a strong ____ for historical fiction, preferring it above all other literary genres.",
  "prodigal": "The ____ son spent his entire inheritance within two years and then returned home seeking forgiveness.",
  "prolific": "The ____ author published over forty novels during her career, delighting readers around the world.",
  "prudent": "It is always ____ to read the terms and conditions carefully before signing any legal agreement.",
  "pugnacious": "The ____ debater rarely listened to opposing arguments and preferred to attack rather than reason.",
  "quell": "Riot police were deployed to ____ the unrest that had broken out near the parliament building.",
  "quintessential": "The small bakery on the high street is the ____ British institution: warm, welcoming, and always busy.",
  "rancour": "Years of political rivalry had left deep ____ between the two party leaders, making cooperation impossible.",
  "recalcitrant": "The ____ student refused to hand in assignments despite numerous warnings from teachers and parents.",
  "reclusive": "The ageing musician became increasingly ____, rarely leaving his countryside estate or giving interviews.",
  "reconcile": "It took years of counselling for the estranged siblings to finally ____ their differences.",
  "redundant": "The editor removed all ____ phrases from the report to make it more concise and readable.",
  "relinquish": "The retiring CEO agreed to ____ all executive duties once a suitable successor had been appointed.",
  "remorse": "He expressed deep ____ for his actions and vowed never to repeat the same mistake.",
  "reproach": "Her mentor's gentle ____ reminded her that rushing through work often produces more errors than care.",
  "resilient": "Children raised in supportive environments tend to be more ____ in the face of life's challenges.",
  "reticent": "He was ____ about discussing his past, preferring to focus conversations on the present and future.",
  "revere": "Generations of students continue to ____ the great philosopher whose writings shaped modern ethics.",
  "rhetoric": "The politician relied heavily on persuasive ____, using emotional language rather than concrete evidence.",
  "sagacious": "A ____ leader anticipates problems before they arise and prepares the organisation accordingly.",
  "scrutinize": "The auditors were appointed to ____ every financial transaction made during the previous fiscal year.",
  "serene": "The garden at dawn was utterly ____, with nothing but birdsong breaking the silence.",
  "sporadic": "The region experienced ____ rainfall throughout the summer, making it difficult for farmers to plan.",
  "spurious": "The defence lawyer argued that the evidence presented against his client was entirely ____.",
  "staunch": "A ____ supporter of press freedom, she dedicated three decades to defending independent journalism.",
  "substantiate": "The researcher was unable to ____ her claims without conducting a peer-reviewed study.",
  "succinct": "The most effective presentations are ____, covering all key points without unnecessary repetition.",
  "superfluous": "The final paragraph of the essay was ____ and could be removed without losing any meaning.",
  "surreptitious": "He made a ____ attempt to copy the answer sheet, hoping the invigilator would not notice.",
  "tacit": "There was a ____ agreement among the colleagues never to discuss salary openly in the office.",
  "tenacious": "Despite repeated rejections, the ____ writer continued to submit her manuscript until it was finally accepted.",
  "transient": "The satisfaction of revenge is often ____, quickly replaced by regret and a sense of emptiness.",
  "ubiquitous": "Smartphones have become so ____ that it is now rare to see anyone without one in a public place.",
  "unanimous": "The board reached a ____ decision to appoint the new director without a single dissenting vote.",
  "vindicate": "The new evidence served to ____ the accused and led to his immediate release from custody.",
  "voracious": "A ____ reader, she could finish a four-hundred-page novel in a single sitting.",
  "wane": "As the decade progressed, public interest in the once-fashionable diet began to ____.",
  "zealous": "The ____ campaign volunteers worked around the clock, distributing leaflets and knocking on doors.",
};

/**
 * Validates whether a raw usage question has a proper context sentence
 * (contains a blank ____ and is not a dummy template).
 */
function isValidUsageQuestion(q: RawPdfVocabQuestion): boolean {
  const t = q.text;
  if (!t.includes('____') && !t.includes('__')) return false;
  if (t.includes('The team needed a')) return false;
  if (t.includes('explain the meaning of')) return false;
  if (t.includes('before issuing its report')) return false;
  if (t.includes('The committee decided to')) return false;
  return true;
}

/**
 * Returns an authentic context sentence for a usage question, replacing
 * dummy template sentences with hand-curated alternatives from the dictionary.
 * Always returns a sentence that contains ____ as the blank.
 */
function resolveUsageSentence(q: RawPdfVocabQuestion): string {
  if (isValidUsageQuestion(q)) return q.text;
  const key = q.correctAnswer.toLowerCase().trim();
  const authentic = USAGE_CONTEXT_SENTENCES[key];
  if (authentic) return authentic;
  // Last-resort fallback: construct a basic sentence with ____
  return `The word that best fits this context is ____. (${q.correctAnswer})`;
}

/**
 * Transforms a raw PDF Usage Question into Aptis VocabCollocationItem.
 * Always uses an authentic, validated context sentence with a clear ____ blank.
 */
function toVocabSentenceItem(q: RawPdfVocabQuestion): VocabCollocationItem {
  const sentence = resolveUsageSentence(q);
  return {
    id: q.id,
    sentence,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: `In this sentence, the appropriate word is "${q.correctAnswer}".`,
    urduExplanation: `جملے کے سیاق و سباق کے اعتبار سے درست لفظ "${q.correctAnswer}" ہے۔`
  };
}

// List of extreme C1-C2 / advanced GRE vocabulary words to ensure they are strictly treated as 'Difficult'
const ADVANCED_GRE_WORDS = new Set([
  'aberration', 'abjure', 'abject', 'abhor', 'abdicate', 'abate', 'abet', 'abscond', 'acquiesce', 'acerbic',
  'anarchy', 'animosity', 'apathy', 'appease', 'arduous', 'ascetic', 'assiduous', 'avarice', 'banal', 'belittle',
  'bequeath', 'blatant', 'boorish', 'cajole', 'callous', 'castigate', 'churlish', 'craven', 'cynical', 'defamation',
  'deleterious', 'demagogue', 'derision', 'despot', 'diatribe', 'didactic', 'diffident', 'disparage', 'ebullient',
  'eclectic', 'effrontery', 'egregious', 'elegy', 'ephemeral', 'erudite', 'esoteric', 'eulogy', 'evanescent',
  'exacerbate', 'exculpate', 'exigent', 'exonerate', 'fastidious', 'fatuous', 'fawning', 'garrulous', 'hackneyed',
  'hapless', 'harangue', 'hedonist', 'hegemony', 'iconoclast', 'ignominious', 'immutable', 'impecunious',
  'impervious', 'impetuous', 'implacable', 'impudent', 'inchoate', 'indefatigable', 'indolent', 'ineffable',
  'ineluctable', 'ingenuous', 'inimical', 'insidious', 'insipid', 'insolent', 'intransigent', 'invective',
  'inveterate', 'irascible', 'laconic', 'largesse', 'lethargic', 'loquacious', 'magnanimous', 'malevolent',
  'maverick', 'mendacious', 'mercurial', 'modicum', 'morose', 'multifarious', 'munificent', 'myriad', 'nadir',
  'nascent', 'nefarious', 'neophyte', 'noisome', 'obdurate', 'obfuscate', 'obsequious', 'obstinate', 'obstreperous',
  'onerous', 'opprobrium', 'ostentatious', 'panacea', 'pariah', 'parsimonious', 'paucity', 'pedantic', 'pejorative',
  'penurious', 'perfidious', 'perfunctory', 'pernicious', 'petulant', 'phlegmatic', 'pithy', 'placate', 'platitude',
  'plethora', 'polemic', 'precarious', 'precipitate', 'preclude', 'predilection', 'prodigal', 'profligate',
  'prolific', 'prosaic', 'proscribe', 'puerile', 'pugnacious', 'pulchritude', 'punctilious', 'pungent',
  'pusillanimous', 'quell', 'querulous', 'quixotic', 'quotidian', 'rancour', 'rapacious', 'recalcitrant', 'recant',
  'recondite', 'redoubtable', 'relegate', 'reprobate', 'repudiate', 'rescind', 'reticent', 'revere', 'rhetoric',
  'sagacious', 'salient', 'salubrious', 'sanctimonious', 'sanguine', 'scintillating', 'scrupulous', 'sedulous',
  'servile', 'soporific', 'specious', 'spurious', 'staunch', 'stolid', 'stratagem', 'strident', 'substantiate',
  'supercilious', 'superfluous', 'surreptitious', 'sycophant', 'tacit', 'taciturn', 'tantamount', 'temerity',
  'tenacious', 'tenuous', 'timorous', 'tirade', 'torpid', 'tractable', 'transient', 'trepidation', 'truculent',
  'ubiquitous', 'umbrage', 'unctuous', 'upbraid', 'usurp', 'vacillate', 'venerate', 'veracity', 'verbose',
  'vexation', 'vicarious', 'vilify', 'vindicate', 'virulent', 'vituperate', 'vociferous', 'voluble', 'voracious',
  'wane', 'wanton', 'winsome', 'wizened', 'xenophobia', 'zealous', 'zenith'
]);

function getNormalizedTargetWord(q: RawPdfVocabQuestion): string {
  if (q.category === 'Word Matching') {
    return q.text.replace(/Choose the closest synonym of\s+/i, '').replace(/\.$/, '').trim().toLowerCase();
  }
  return q.correctAnswer.toLowerCase().trim();
}

/**
 * Returns the calibrated lexical difficulty of a question so that each test
 * has at most 1 hard question, and the rest are accessible medium/easy questions.
 */
function getCalibratedDifficulty(q: RawPdfVocabQuestion): 'Easy' | 'Moderate' | 'Difficult' {
  const target = getNormalizedTargetWord(q);
  if (ADVANCED_GRE_WORDS.has(target)) {
    return 'Difficult';
  }
  if (q.num <= 100) return 'Easy';
  if (q.num <= 200) return 'Moderate';
  return 'Difficult';
}

/**
 * Helper to select exactly N questions of a specific difficulty from a question list,
 * avoiding already seen questions until the pool is exhausted, then resetting that bucket.
 */
function pickBucket(
  pool: RawPdfVocabQuestion[],
  difficulty: 'Easy' | 'Moderate' | 'Difficult',
  count: number,
  seenSet: Set<string>,
  excludeIdsInCurrentAttempt: Set<string>
): RawPdfVocabQuestion[] {
  const diffPool = pool.filter(q => getCalibratedDifficulty(q) === difficulty);
  let available = diffPool.filter(q => !seenSet.has(q.id) && !excludeIdsInCurrentAttempt.has(q.id));

  // If not enough unseen items remain in this difficulty bucket, reset this bucket in seenSet
  if (available.length < count) {
    diffPool.forEach(q => seenSet.delete(q.id));
    available = diffPool.filter(q => !excludeIdsInCurrentAttempt.has(q.id));
  }

  const shuffled = shuffle(available);
  const selected = shuffled.slice(0, count);

  // Fallback if somehow still short
  if (selected.length < count) {
    const remainingNeeded = count - selected.length;
    const others = diffPool.filter(q => !selected.some(s => s.id === q.id));
    selected.push(...shuffle(others).slice(0, remainingNeeded));
  }

  // Mark selected items as seen and reserve for current attempt
  selected.forEach(q => {
    seenSet.add(q.id);
    excludeIdsInCurrentAttempt.add(q.id);
  });

  return selected;
}

export interface SelectedOfficialVocabulary {
  vocabWordMatching: VocabWordMatchItem[];      // Task 1: Word Matching (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
  vocabDefinitions: VocabDefinitionItem[];       // Task 2: Word Definitions (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
  vocabCollocations: VocabCollocationItem[];     // Task 3: Combinations / Collocations (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
  vocabSentenceCompletion: VocabCollocationItem[]; // Task 4: Word Usage (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
  vocabContextMatching: VocabWordMatchItem[];   // Task 5: Context Matching (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
}

/**
 * Selects 25 official vocabulary questions strictly from the 1,000 PDF questions:
 * - 5 MCQs per category/task: exactly 2 Easy, 2 Moderate, 1 Difficult (Hard).
 * - Randomizes questions on every test attempt.
 * - Tracks seen questions in localStorage to avoid repetition until all PDF questions are used.
 */
export function selectOfficialPdfVocabulary(): SelectedOfficialVocabulary {
  const seenSet = getSeenPdfVocabIds();
  const currentAttemptReservedIds = new Set<string>();

  // Task 1: Word Matching (5 items: 2 Easy, 2 Moderate, 1 Difficult)
  const task1Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Task 2: Word Definitions (5 items: 2 Easy, 2 Moderate, 1 Difficult)
  const task2Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.defQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.defQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.defQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Task 3: Word Combination / Collocations (5 items: 2 Easy, 2 Moderate, 1 Difficult)
  const task3Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.collocQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.collocQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.collocQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Task 4: Word Usage / Sentence Completion (5 items: 2 Easy, 2 Moderate, 1 Difficult)
  const task4Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.usageQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.usageQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.usageQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Task 5: Context Matching / Synonyms (5 items: 2 Easy, 2 Moderate, 1 Difficult from distinct matchQuestions)
  const task5Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Persist updated seen IDs
  saveSeenPdfVocabIds(seenSet);

  return {
    vocabWordMatching: shuffle(task1Raw).map(toVocabWordMatchItem),
    vocabDefinitions: shuffle(task2Raw).map(toVocabDefinitionItem),
    vocabCollocations: shuffle(task3Raw).map(toVocabCollocationItem),
    vocabSentenceCompletion: shuffle(task4Raw).map(toVocabSentenceItem),
    vocabContextMatching: shuffle(task5Raw).map(toVocabWordMatchItem)
  };
}
