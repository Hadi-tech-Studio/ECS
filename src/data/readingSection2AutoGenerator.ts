/**
 * ============================================================================
 * readingSection2AutoGenerator.ts
 * Procedural Reading Section 2 (Text Cohesion / Scrambled Sentences) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 2:
 * - Generates 2 distinct Text Cohesion tasks per test.
 * - Each task has 6 sentences forming a coherent biographical, historical, or scientific narrative.
 * - Clear discourse markers, chronological progression, and cohesive reference words.
 * - Verified correctOrder permutations.
 * - Full English and Urdu explanations.
 * - Zero repetition across tests or attempts.
 * ============================================================================
 */

import { ReadingSection2, ReadingSection2Task } from '../types';

export interface Section2Seed {
  title: string;
  topic: string;
  sentences: string[];
  correctOrder: number[];
  explanation: string;
  urduExplanation: string;
}

export const SECTION_2_SEEDS: Section2Seed[] = [
  {
    title: 'The Invention of the Printing Press',
    topic: 'History of Technology & Communication',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'In medieval Europe, books were handwritten by scribes, making them exceedingly rare and costly.',
      'Recognizing this immense challenge, Johannes Gutenberg developed movable metal type in Mainz, Germany.',
      'This breakthrough lowered publication costs drastically and enabled rapid distribution of scientific knowledge.',
      'Consequently, ordinary citizens had virtually no access to educational literature or news.',
      'By 1455, his workshop completed printing the famous Gutenberg Bible, marking the dawn of mass media.',
      'Today, Gutenberg’s press is recognized as one of the most transformative inventions in human civilization.'
    ],
    explanation: 'Narrative order: Starts with the historical problem of handwritten books (0), details the consequence of public illiteracy (3), introduces Gutenberg developing movable type (1), mentions the completion of the Gutenberg Bible in 1455 (4), highlights the drastic reduction in publication costs (2), and concludes with his enduring historical legacy (5).',
    urduExplanation: 'منطقی تسلسل: قرونِ وسطیٰ میں کتابوں کی نایابی (0)، عوام کی بے خبری (3)، گٹن برگ کی دھاتی ٹائپ کی ایجاد (1)، 1455ء میں بائبل کی طباعت (4)، اشاعتی لاگت میں کمی (2) اور جدید ذرائع ابلاغ میں اس کے عظیم کردار پر اختتام (5)۔'
  },
  {
    title: 'The Discovery of Penicillin and Antibiotic Medicine',
    topic: 'Medical Science & Pharmacology',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'In the early twentieth century, even minor bacterial infections routinely resulted in fatal illnesses.',
      'Upon returning from holiday, Alexander Fleming noticed that mold had contaminated one of his bacterial petri dishes.',
      'Intriguingly, the area immediately surrounding the mold was entirely clear of bacterial growth.',
      'Later, Oxford researchers Howard Florey and Ernst Chain succeeded in purifying and mass-producing the drug.',
      'He identified the active fungal substance as penicillin and published his preliminary findings in 1929.',
      'During the Second World War, penicillin saved millions of wounded soldiers and revolutionized global healthcare.'
    ],
    explanation: 'Chronological progression: Establishes the historical danger of bacterial infections (0), introduces Fleming discovering mold upon return from holiday (2), describes his observation of clear halos around mold (4), names the substance penicillin in 1929 (1), explains Florey and Chain purifying the drug (3), and finishes with its impact during WWII and modern medicine (5).',
    urduExplanation: 'تاریخی ارتقا: جراثیمی بیماریوں کا مہلک ہونا (0)، فلیمنگ کا تعطیلات سے واپسی پر فنگس دیکھنا (2)، جراثیم کا خاتمہ (4)، پینسلین کا نام اور اشاعت (1)، فلورے اور چین کی محنت (3) اور دوسری جنگِ عظیم میں لاکھوں جانوں کی بچاؤ پر اختتام (5)۔'
  },
  {
    title: 'The Development of Renewable Solar Energy',
    topic: 'Environmental Engineering & Clean Energy',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'For more than two centuries, industrial economies depended almost exclusively on fossil fuels for electrical generation.',
      'In response to rising greenhouse emissions, physicists began exploring the photovoltaic effect discovered in the nineteenth century.',
      'These technological breakthroughs lowered solar panel manufacturing costs by over eighty percent within two decades.',
      'However, the burning of coal and petroleum released billions of tons of heat-trapping carbon dioxide into the atmosphere.',
      'During the early 2000s, commercial silicon manufacturing made domestic rooftop solar installations practically viable.',
      'Today, solar energy represents the fastest-growing power sector in the global transition toward carbon neutrality.'
    ],
    explanation: 'Logical cohesion: Describes historical reliance on fossil fuels (0), highlights the consequence of carbon emissions (3), shows scientists turning to photovoltaic effects (1), notes 2000s manufacturing making panels viable (4), details the 80% cost reduction (2), and concludes with solar as the fastest-growing sector today (5).',
    urduExplanation: 'منطقی ربط: جیواشم ایندھن پر انحصار (0)، کاربن کا اخراج اور فضائی آلودگی (3)، شمسی توانائی کے فوٹوولٹک اصول کی دریافت (1)، تجارتی تیاری کا آغاز (4)، لاگت میں نمایاں کمی (2) اور صاف توانائی کے تیز ترین شعبے کے طور پر موجودہ حیثیت (5)۔'
  },
  {
    title: 'The Voyage of the Beagle and Evolutionary Biology',
    topic: 'Natural History & Scientific Theory',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'In 1831, the young naturalist Charles Darwin boarded HMS Beagle for an extensive surveying expedition around South America.',
      'During his survey of the Galapagos archipelago, he observed striking variations among finches inhabiting different islands.',
      'Each species possessed beaks specifically adapted to exploit the unique food sources of its local environment.',
      'He spent over two decades meticulously gathering evidence before publishing On the Origin of Species in 1859.',
      'These observations convinced Darwin that organisms gradually modify traits over generations through natural selection.',
      'Today, evolutionary theory forms the foundational unifying framework for all modern biological disciplines.'
    ],
    explanation: 'Chronological narrative: Darwin embarks on the Beagle in 1831 (0), observes Galapagos finches (2), details their beak adaptations (4), deduces natural selection (1), publishes his landmark book after 20 years (3), and finishes with the modern role of evolution in biology (5).',
    urduExplanation: 'سائنسی سفر: 1831ء میں بیگل پر سفر (0)، گالاپاگوس جزائر پر چڑیوں کے نمونے (2)، چونچوں کی مخصوص بناوٹ (4)، قدرتی انتخاب کا نظریہ (1)، 1859ء میں کتاب کی اشاعت (3) اور جدید حیاتیات کی بنیاد کے طور پر تسلیم ہونا (5)۔'
  },
  {
    title: 'The Emergence of the Global Internet',
    topic: 'Computer Science & Information Technology',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'In the late 1960s, researchers sought a decentralized telecommunication network that could withstand regional network failures.',
      'To achieve this resilience, government engineers developed ARPANET, introducing packet-switching protocol architectures.',
      'In 1989, British computer scientist Tim Berners-Lee invented the World Wide Web to facilitate document sharing among physicists.',
      'Traditional circuit-switched telephone lines were too vulnerable to central node interruptions during emergencies.',
      'By the mid-1990s, commercial web browsers made the internet accessible to millions of households worldwide.',
      'Today, the internet forms an indispensable global backbone connecting billions of people, institutions, and economies.'
    ],
    explanation: 'Logical narrative: Begins with the late 1960s need for decentralized communications (0), explains vulnerabilities of circuit lines (3), introduces ARPANET packet switching (1), highlights Berners-Lee creating the World Wide Web in 1989 (4), notes 1990s commercial browser explosion (2), and ends with its ubiquitous global status today (5).',
    urduExplanation: 'ٹیکنالوجی کا سفر: 1960ء کی دہائی میں غیر مرکزی نیٹ ورک کی ضرورت (0)، روایتی فون لائنوں کی کمزوری (3)، آرپانیٹ کا قیام (1)، 1989ء میں ٹم برنرز لی کی ویب کی ایجاد (4)، 1990ء کی دہائی میں انٹرنیٹ کا عام ہونا (2) اور عالمی ڈیجیٹل معیشت کی شہ رگ بننا (5)۔'
  },
  {
    title: 'The Development of the Steam Engine',
    topic: 'Industrial Revolution & Mechanical Engineering',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'Early eighteenth-century coal mines in Britain were frequently crippled by severe underground flooding.',
      'Thomas Newcomen designed the first atmospheric engine in 1712, though it consumed colossal quantities of coal.',
      'In the 1760s, James Watt dramatically improved engine efficiency by introducing an independent steam condenser.',
      'Watt’s rotary engine subsequently powered mechanized textile mills, blast furnaces, and locomotive rail transport.',
      'This breakthrough reduced fuel consumption by seventy-five percent and enabled smooth rotational mechanical output.',
      'Ultimately, the refined steam engine served as the primary mechanical catalyst of the Industrial Revolution.'
    ],
    explanation: 'Narrative structure: Flooding in early coal mines (0), Newcomen engine (2), Watt adds independent condenser in 1760s (4), fuel consumption drops 75% (1), rotary power spreads to mills and rails (3), and steam engine catalyzes Industrial Revolution (5).',
    urduExplanation: 'صنعتی انقلاب: کوئلے کی کانوں میں پانی بھر جانا (0)، نیوکامن کا پہلا انجن (2)، جیمز واٹ کی جانب سے علیحدہ کنڈینسر کا اضافہ (4)، ایندھن میں 75 فیصد بچت (1)، کارخانوں اور ریل میں استعمال (3) اور صنعتی انقلاب کے انجن کی حیثیت اختیار کرنا (5)۔'
  },
  {
    title: 'The Discovery of the Structure of DNA',
    topic: 'Genetics & Molecular Biology',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'By the mid-twentieth century, biologists understood that chromosomes carried hereditary information but could not explain the physical mechanism.',
      'At King’s College London, chemist Rosalind Franklin produced critical X-ray diffraction photographs of crystallized DNA fibers.',
      'Their famous double-helix model immediately demonstrated how genetic replication occurs through complementary base pairing.',
      'Her exquisite Photograph 51 clearly revealed the characteristic helical geometry of the nucleic acid molecule.',
      'Using this structural evidence, James Watson and Francis Crick constructed a three-dimensional molecular model in Cambridge in 1953.',
      'Today, this foundational discovery underpins modern genetic medicine, biotechnology, and genomic forensics.'
    ],
    explanation: 'Logical chronology: Biologists uncertain of genetic mechanism (0), Rosalind Franklin captures X-ray photos (3), Photograph 51 reveals helical geometry (1), Watson and Crick construct 3D model in 1953 (4), model explains base-pair replication (2), and foundation of modern genetics (5).',
    urduExplanation: 'ڈی این اے کی دریافت: جینیاتی راز کی نایابی (0)، روزالینڈ فرینکلن کی ایکسرے تصاویر (3)، فوٹو 51 میں ہیلیکل ساخت (1)، واٹسن اور کرک کا 1953ء میں ماڈل (4)، جینیاتی تقسیم کا انکشاف (2) اور جدید جینومکس کی بنیاد پر اختتام (5)۔'
  },
  {
    title: 'The Invention of the Marine Chronometer',
    topic: 'Maritime History & Horological Navigation',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'For centuries, navigators could easily calculate latitude using the stars but lacked any reliable method to measure longitude at sea.',
      'In 1707, an entire British naval fleet wrecked off the Scilly Isles due to disastrous navigational errors.',
      'Spurred by this catastrophe, Parliament passed the Longitude Act of 1714, offering a massive reward for a precise solution.',
      'Carpentry-trained clockmaker John Harrison devoted four decades to designing intricate friction-free marine clocks.',
      'His masterpiece, the H4 sea watch, proved extraordinarily accurate during extensive Atlantic sea voyages in the 1760s.',
      'Harrison’s chronometer revolutionized oceanic voyages, dramatically enhancing maritime trade safety across the globe.'
    ],
    explanation: 'Chronological sequence: Inability to determine longitude (0), naval disaster off Scilly Isles in 1707 (2), Longitude Act of 1714 offering bounty (4), John Harrison designs marine clocks (1), H4 watch passes Atlantic tests in 1760s (3), and global trade safety transformed (5).',
    urduExplanation: 'طول البلد کا تعین: بحری جہازوں کی گمشدگی (0)، 1707ء کا بحری سانحہ (2)، 1714ء کا برطانوی انعام (4)، جان ہیریسن کی محنت (1)، H4 گھڑی کی کامیابی (3) اور عالمی بحری تجارت کا تحفظ (5)۔'
  },
  {
    title: 'The Wright Brothers and Controlled Powered Flight',
    topic: 'Aviation Engineering & Modern Transport',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'Throughout the nineteenth century, numerous ambitious aviators attempted powered flight, but all suffered catastrophic crashes.',
      'Brothers Wilbur and Orville Wright deduced that mechanical control, rather than raw engine power, was the critical unsolved hurdle.',
      'Through exhaustive wind-tunnel experiments with hundreds of miniature airfoil shapes, they developed three-axis flight control.',
      'Previous aviation pioneers had mistakenly focused solely on building larger wings and heavier steam propulsion units.',
      'On December 17, 1903, at Kitty Hawk, North Carolina, their Flyer achieved the first sustained, controlled powered heavier-than-air flight.',
      'Within a few decades, aviation evolved from experimental sand-dune gliders into a transformative worldwide transportation network.'
    ],
    explanation: 'Narrative order: 19th century crashes (0), mistaken focus of previous inventors (3), Wrights recognize control as key (1), wind-tunnel tests lead to 3-axis control (4), historic Kitty Hawk flight in 1903 (2), and worldwide air travel (5).',
    urduExplanation: 'ہوابازی کی تاریخ: ابتدائی پروازوں کی ناکامیاں (0)، بڑے پنکھوں کی غلط دوڑ (3)، رائٹ برادران کا کنٹرول پر توجہ دینا (1)، ونڈ ٹنل کے تجربات (4)، 1903ء کی کامیاب تاریخی پرواز (2) اور عالمی ہوائی نظام پر اختتام (5)۔'
  },
  {
    title: 'The Green Revolution and Agricultural Science',
    topic: 'Agronomy & Global Food Security',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'In the mid-twentieth century, rapidly expanding human populations in developing nations faced the looming specter of catastrophic famine.',
      'Traditional cereal crops possessed slender stems that buckled under the weight of heavy seed heads when fertilized.',
      'Agronomist Norman Borlaug bred semi-dwarf, disease-resistant wheat varieties in Mexico that channeled nutrients into robust grains.',
      'When these high-yield varieties were introduced to India and Pakistan during the 1960s, agricultural harvests doubled within five years.',
      'Combined with improved irrigation and fertilizer techniques, Borlaug’s agricultural package averted widespread starvation across Asia.',
      'Borlaug was awarded the 1970 Nobel Peace Prize for saving an estimated one billion human lives through food security.'
    ],
    explanation: 'Narrative structure: Threat of mid-20th century famines (0), tall wheat stems buckling under fertilizer (2), Norman Borlaug develops semi-dwarf varieties (4), double harvests in Pakistan/India in 1960s (1), famine averted across Asia (3), and 1970 Nobel Peace Prize (5).',
    urduExplanation: 'سبز انقلاب: قحط کا خطرہ (0)، گندم کی روایتی فصلوں کی کمزوری (2)، بورلاگ کا بونا اور طاقتور بیج تیار کرنا (4)، پاک و ہند میں پیداوار میں دگنا اضافہ (1)، قحط سالی سے بچاؤ (3) اور 1970ء کے نوبل انعام پر اختتام (5)۔'
  },
  {
    title: 'The Eradication of Smallpox in Public Health',
    topic: 'Epidemiology & Global Public Health',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'For millennia, smallpox ranked among humanity’s most devastating scourges, killing hundreds of millions of people across centuries.',
      'In 1796, English physician Edward Jenner noticed that dairymaids infected with harmless cowpox exhibited natural immunity against smallpox.',
      'In 1967, the World Health Organization launched an intensified global eradication campaign combining mass vaccination with targeted surveillance.',
      'He successfully inoculated young James Phipps using cowpox matter, establishing the world’s first systematic vaccine.',
      'Health workers tracked down isolated outbreaks across remote continents, swiftly quarantining cases and vaccinating entire surrounding villages.',
      'In 1980, the World Health Assembly formally declared smallpox completely eradicated, marking medicine’s greatest collective victory.'
    ],
    explanation: 'Chronological timeline: Devastation of smallpox for millennia (0), dairymaid immunity observation by Jenner (3), Jenner inoculates Phipps with cowpox (1), WHO launches global campaign in 1967 (4), ring vaccination strategy (2), and complete eradication certified in 1980 (5).',
    urduExplanation: 'چیچک کا خاتمہ: صدیوں پرانی وبا (0)، ایڈورڈ جینر کا گوالنوں میں قوتِ مدافعت کا مشاہدہ (3)، پہلا حفاظتی ٹیکہ (1)، 1967ء میں ڈبلیو ایچ او کی عالمی مہم (4)، رنگ ویکسینیشن (2) اور 1980ء میں مکمل خاتمے کا اعلان (5)۔'
  },
  {
    title: 'The Laying of the Transatlantic Telegraph Cable',
    topic: 'Telecommunications & International Commerce',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'Prior to the mid-nineteenth century, communication between Europe and North America was tethered to the physical transit time of sailing steamships.',
      'Important diplomatic communications and commercial trade market orders required at least ten days to cross the turbulent Atlantic Ocean.',
      'In 1858, American entrepreneur Cyrus Field financed the first submerged telegraph cable between Ireland and Newfoundland.',
      'Although this inaugural cable degraded within weeks due to excessive voltage, the initial transmission proved transatlantic electrical signaling viable.',
      'In 1866, the colossal iron ship SS Great Eastern successfully laid an armored, durable copper cable across the ocean seabed.',
      'Instantly, communication time shrank from twelve days to mere minutes, integrating world markets and ushering in the modern telecommunications era.'
    ],
    explanation: 'Logical narrative: Sailing ship communication limits (0), ten-day ocean crossing latency (2), Cyrus Field attempts 1858 cable (4), initial failure proves principle (1), Great Eastern lays durable cable in 1866 (3), and instant transcontinental communication (5).',
    urduExplanation: 'بحر اوقیانوس کا تار: بحری جہازوں کی سست رفتار خط و کتابت (0)، دس دن کا طویل سفر (2)، سائرس فیلڈ کی 1858ء میں کوشش (4)، تجرباتی کامیابی اور خرابی (1)، 1866ء میں گریٹ ایسٹرن کے ذریعے پائیدار کیبل بچھانا (3) اور لمحوں میں رابطے کا انقلاب (5)۔'
  },
  {
    title: 'The Rise of Luca Pacioli and Double-Entry Bookkeeping',
    topic: 'History of Accounting & Modern Commerce',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'During the early Italian Renaissance, merchants in Venice struggled to track complex maritime trade partnerships across the Mediterranean.',
      'Recognizing this growing commercial necessity, the Franciscan friar and mathematician Luca Pacioli compiled these scattered merchant customs.',
      'Consequently, this revolutionary methodology established the enduring principle that every debit transaction must have an equal credit offset.',
      'Without a standardized recording system, financial disputes and merchant bankruptcies were frequent occurrences.',
      'In 1494, he published his seminal encyclopedia Summa de Arithmetica, dedicating a landmark chapter specifically to double-entry ledger bookkeeping.',
      'Today, Pacioli is universally celebrated as the father of modern accounting, having created the foundational language of global business.'
    ],
    explanation: 'Chronological progression: Begins with Venetian merchants (0), lack of system causing bankruptcies (3), Pacioli compiling customs (1), 1494 publication of Summa (4), debit and credit principle (2), and legacy as father of accounting (5).',
    urduExplanation: 'وینس کے تاجروں کے مسائل (0)، نظام کے بغیر نقصانات (3)، پیکولی کی تحقیق (1)، 1494ء کی کتاب (4)، ڈیبٹ کریڈٹ کا اصول (2) اور بابائے اکاؤنٹنگ کا اعزاز (5)۔'
  },
  {
    title: 'The Evolution of Central Banking and Sovereign Currency',
    topic: 'Economics & Monetary History',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'For centuries, commercial transactions across Europe were settled strictly through heavy gold and silver bullion coins.',
      'To alleviate the logistical hazard of transporting heavy chests of metal, goldsmiths began issuing paper deposit receipts.',
      'Recognizing the immense economic power of this fiduciary credit, national governments moved to formalize these private paper promises.',
      'However, carrying large physical quantities of precious metal over long distances exposed merchants to highway robbery and immense shipping expenses.',
      'Soon, merchants began circulating these trusted paper notes directly among themselves as a convenient medium of exchange.',
      'In 1694, the Bank of England was chartered, marking the birth of modern institutional central banking and sovereign paper currency.'
    ],
    explanation: 'Development sequence: Heavy gold coins (0), dangers of highway robbery (3), goldsmith receipts (1), receipts circulating as paper money (4), government formalization (2), and Bank of England chartered in 1694 (5).',
    urduExplanation: 'دھاتی سکے (0)، ڈاکوؤں کے خطرات (3)، صرافوں کی رسیدیں (1)، رسیدوں کا تبادلہ (4)، حکومتی سرپرستی (2) اور 1694ء میں مرکزی بینک کا قیام (5)۔'
  },
  {
    title: 'The Invention of the Telephone and Audio Telephony',
    topic: 'Acoustics & Electrical Engineering',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'Throughout the nineteenth century, the electrical telegraph transmitted Morse code over long distances but could not convey human voice.',
      'Alexander Graham Bell, working with deaf students in Boston, became fascinated by how electrical currents might mimic acoustic sound waves.',
      'Partnering with skilled machinist Thomas Watson, Bell designed a liquid transmitter that varied electrical resistance when sound vibrated a diaphragm.',
      'In March 1876, Bell spoke the famous first words over the apparatus: "Mr. Watson, come here, I want to see you."',
      'The device converted mechanical sound waves into varying electrical signals and reproduced them clearly at the receiving end.',
      'Within decades, telephone lines interconnected cities, forever changing interpersonal relationships and real-time commercial trade.'
    ],
    explanation: 'Narrative structure: Telegraph limited to Morse code (0), Bell studies acoustic sound waves (2), liquid transmitter design with Watson (4), first words spoken in 1876 (1), acoustic to electrical conversion principle (3), and telephone interconnects global cities (5).',
    urduExplanation: 'ٹیلی فون کی ایجاد: ٹیلی گراف کی محدودیت (0)، بیل کی صوتی لہروں پر تحقیق (2)، واٹسن کے ساتھ ٹرانسمیٹر کی تیاری (4)، 1876ء کے پہلے الفاظ (1)، سگنلز کی صوتی تبدیلی (3) اور دنیا بھر میں ٹیلی فون کا جال بچھنا (5)۔'
  },
  {
    title: 'The Microprocessor Revolution and Personal Computing',
    topic: 'Semiconductor Electronics & Computing',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'In the 1960s, early digital computers were enormous, room-sized mainframes owned exclusively by defense agencies and elite universities.',
      'In 1971, engineers at Intel integrated an entire central processing unit onto a single silicon chip, creating the Intel 4004.',
      'This miniaturization lowered production costs exponentially and enabled the development of affordable microcomputers.',
      'Thousands of individual vacuum tubes and discrete transistors made these mammoth machines prohibitively costly to operate.',
      'By the late 1970s and 1980s, startups like Apple and IBM brought personal computers directly into ordinary classrooms and offices.',
      'Today, billions of microprocessors power everything from handheld smartphones to automated hospital machinery.'
    ],
    explanation: 'Logical chronology: Room-sized mainframes in 1960s (0), vacuum tubes causing prohibitive costs (3), Intel integrates CPU onto single chip in 1971 (1), costs fall and microcomputers emerge (4), Apple and IBM bring PCs to offices (2), and billions of microchips today (5).',
    urduExplanation: 'مائیکرو پروسیسر انقلاب: بڑے کمپیوٹرز (0)، ویکیوم ٹیوبوں کا مہنگا پن (3)، انٹیل کا 1971ء میں پہلا چپ بنانا (1)، مائیکرو کمپیوٹرز کا ظہور (4)، ایپل اور آئی بی ایم کا گھر گھر پہنچانا (2) اور جدید ڈیجیٹل دنیا کی تعمیر (5)۔'
  }
];

let s2Counter = 1;

/**
 * Generates two completely distinct Text Cohesion tasks for a single test attempt.
 * Ensures Task 1 and Task 2 are distinct from one another and non-repeating across attempts.
 */
export function generateReadingSection2Pair(seenIds: Set<string>): { task1: ReadingSection2Task; task2: ReadingSection2Task } {
  const n = SECTION_2_SEEDS.length;
  
  // Pick two distinct seeds
  let idx1 = (s2Counter - 1) % n;
  let idx2 = s2Counter % n;
  s2Counter += 2;

  // If both indices somehow collide, shift idx2
  if (idx1 === idx2) {
    idx2 = (idx2 + 1) % n;
  }

  const seed1 = SECTION_2_SEEDS[idx1];
  const seed2 = SECTION_2_SEEDS[idx2];

  const uniqueId1 = `auto-reading-s2-t1-${Date.now().toString(36)}-${idx1}-${Math.floor(Math.random() * 1000)}`;
  const uniqueId2 = `auto-reading-s2-t2-${Date.now().toString(36)}-${idx2}-${Math.floor(Math.random() * 1000)}`;

  seenIds.add(uniqueId1);
  seenIds.add(seed1.title);
  seenIds.add(uniqueId2);
  seenIds.add(seed2.title);

  const task1: ReadingSection2Task = {
    id: uniqueId1,
    taskNumber: 1,
    title: `Task 1: ${seed1.title}`,
    topic: seed1.topic,
    sentences: [...seed1.sentences],
    correctOrder: [...seed1.correctOrder],
    explanation: seed1.explanation,
    urduExplanation: seed1.urduExplanation
  };

  const task2: ReadingSection2Task = {
    id: uniqueId2,
    taskNumber: 2,
    title: `Task 2: ${seed2.title}`,
    topic: seed2.topic,
    sentences: [...seed2.sentences],
    correctOrder: [...seed2.correctOrder],
    explanation: seed2.explanation,
    urduExplanation: seed2.urduExplanation
  };

  return { task1, task2 };
}

/**
 * Generates a full ReadingSection2 object populated with 2 distinct tasks,
 * while preserving top-level fields for backwards compatibility.
 */
export function generateSyntheticReadingSection2(seenIds: Set<string>): ReadingSection2 {
  const { task1, task2 } = generateReadingSection2Pair(seenIds);

  const combinedId = `auto-reading-s2-combined-${Date.now().toString(36)}-${s2Counter}`;
  seenIds.add(combinedId);

  return {
    id: combinedId,
    title: 'Reading Section 2: Text Cohesion',
    topic: `${task1.topic} & ${task2.topic}`,
    sentences: [...task1.sentences],
    correctOrder: [...task1.correctOrder],
    explanation: task1.explanation,
    urduExplanation: task1.urduExplanation,
    tasks: [task1, task2]
  };
}
