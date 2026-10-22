/**
 * ============================================================================
 * readingSection2AutoGenerator.ts
 * Procedural Reading Section 2 (Text Cohesion / Scrambled Sentences) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 2:
 * - Generates 2 distinct Text Cohesion tasks per test.
 * - Each task has 6 sentences forming a coherent biographical, historical, or scientific narrative.
 * - Clear discourse markers, chronological progression, and cohesive reference words.
 * - Verified correctOrder permutations [0..5].
 * - Full English and Urdu explanations.
 * - STRICT ZERO REPETITION across tests or attempts with global seen tracking
 *   and persistent counters across page refreshes.
 * ============================================================================
 */

import { ReadingSection2, ReadingSection2Task } from '../types';
import { getNextGeneratorCounter, isGloballySeen, markGloballySeen } from '../lib/antiRepetitionTracker';

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
    urduExplanation: 'انٹرنیٹ کی تاریخ: 1960ء کی دہائی میں محفوظ مواصلاتی نیٹ ورک کی ضرورت (0)، روایتی ٹیلی فون لائنوں کے خطرات (3)، ارپانیٹ اور پیکٹ سوئچنگ کا آغاز (1)، 1989ء میں ورلڈ وائڈ ویب کی ایجاد (4)، براؤزرز کی عام دستیابی (2) اور جدید معلوماتی نظام پر اثرات (5)۔'
  },
  {
    title: 'The Rosetta Stone and Egyptian Hieroglyphs',
    topic: 'Archaeology & Ancient Linguistics',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'For over a millennium, ancient Egyptian hieroglyphic inscriptions remained an undecipherable linguistic enigma.',
      'In 1799, French soldiers fortifying a redoubt near Rashid uncovered a dark granodiorite slab inscribed with ancient scripts.',
      'The artifact, known as the Rosetta Stone, displayed the identical decree in Greek, Demotic, and formal hieroglyphs.',
      'Working tirelessly with Greek comparative texts, French scholar Jean-François Champollion finally cracked the phonetic code in 1822.',
      'Because classical Greek was widely understood, philologists realized the stone provided an invaluable bilingual key.',
      'This breakthrough unlocked thousands of historical papyri and temple carvings, revealing three millennia of Egyptian civilization.'
    ],
    explanation: 'Historical puzzle order: 1000-year mystery of hieroglyphs (0), French discovery of stone near Rashid in 1799 (2), trilingual inscriptions explained (4), Greek acting as the translation key (1), Champollion cracking code in 1822 (3), and the unsealing of ancient Egyptian history (5).',
    urduExplanation: 'روزیٹا پتھر: ہیروگلیفس کا صدیوں پرانا راز (0)، 1799ء میں فرانسیسی فوجیوں کا دریافت کرنا (2)، تین زبانوں میں کندہ تحریر (4)، یونانی زبان کا کلیدی کردار (1)، 1822ء میں شمپولیون کی کامیابی (3) اور مصری تاریخ کے روشن دروازے (5)۔'
  },
  {
    title: 'The Construction of the Panama Canal',
    topic: 'Civil Engineering & Maritime Trade',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'Throughout the nineteenth century, merchant ships navigating between New York and San Francisco endured a perilous 13,000-mile voyage around Cape Horn.',
      'A French consortium led by Ferdinand de Lesseps attempted sea-level excavation in 1881 but collapsed due to tropical disease and landslides.',
      'American engineers redesigned the project with massive lock chambers and conquered yellow fever through mosquito eradication.',
      'The treacherous waters and fierce storms around South America’s southern tip claimed hundreds of vessels and crew annually.',
      'In August 1914, the Panama Canal officially opened, dramatically slashing transit times between the Atlantic and Pacific oceans.',
      'Today, expanded locks accommodate massive container vessels, preserving the canal as an indispensable artery of world trade.'
    ],
    explanation: 'Sequential narrative: The 13,000-mile voyage around Cape Horn (0), treacherous ocean storms claiming vessels (3), French attempt fails in 1881 (1), American lock redesign and disease control (4), official opening in August 1914 (2), and ongoing global trade significance today (5).',
    urduExplanation: 'پانامہ نہر: کیپ ہارن کے گرد 13 ہزار میل کا دشوار سفر (0)، طوفانی لہروں کے خطرات (3)، 1881ء میں فرانسیسی مہم کی ناکامی (1)، امریکی انجینئرز کی لاک ڈیزائن اور صفائی (4)، 1914ء میں افتتاح (2) اور جدید عالمی تجارت کا اہم راستہ (5)۔'
  },
  {
    title: 'Marie Curie and the Science of Radioactivity',
    topic: 'Nuclear Physics & Chemistry',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'In the late 1890s, French physicist Henri Becquerel observed that uranium salts spontaneously emitted mysterious energetic rays.',
      'Intrigued by this unexplained phenomenon, Polish-born scientist Marie Curie began analyzing pitchblende ore in a modest Paris shed.',
      'Through arduous chemical separation of tons of mineral pitchblende, she and Pierre Curie discovered two previously unknown elements.',
      'She coined the scientific term "radioactivity" and earned the Nobel Prize in Physics in 1903 alongside Becquerel.',
      'These newly isolated elements were named polonium, honoring her native homeland, and radium for its intense luminescence.',
      'Her pioneering investigations laid the foundations for modern atomic physics, radiology, and contemporary cancer treatments.'
    ],
    explanation: 'Scientific discovery narrative: Becquerel observes uranium rays (0), Curie investigates pitchblende ore (2), separation of pitchblende leads to discoveries (4), naming polonium and radium (1), coining "radioactivity" and 1903 Nobel Prize (3), and foundational legacy in medicine and physics (5).',
    urduExplanation: 'میری کیوری کی تحقیق: تابکاری کا مشاہدہ (0)، میری کیوری کی پیرس میں تحقیق (2)، معدنی کچ دھات سے نئے عناصر کی دریافت (4)، پولونیم اور ریڈیم کے نام (1)، 1903ء کا نوبل انعام (3) اور جدید میڈیکل فزکس و کینسر کے علاج کی بنیاد (5)۔'
  },
  {
    title: 'The Evolution of the Electric Battery',
    topic: 'Electrochemical Science & Storage',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'In the late eighteenth century, Italian anatomist Luigi Galvani believed animal muscle tissue generated its own intrinsic electrical fluid.',
      'Countering this theory, physicist Alessandro Volta demonstrated that electrical current resulted from contact between dissimilar metals separated by brine.',
      'In 1859, Gaston Planté invented the rechargeable lead-acid battery, enabling practical energy storage for industrial machinery.',
      'Galvani’s famous frog-leg twitches sparked fierce scientific debate across European universities regarding the true origin of electricity.',
      'By stacking alternating discs of zinc and copper with moistened cardboard, Volta constructed the first functional voltaic pile in 1800.',
      'Today, advanced lithium-ion and solid-state batteries power the global transition toward electric transportation and clean energy grids.'
    ],
    explanation: 'Evolutionary timeline: Galvani animal electricity concept (0), European debate over frog-leg twitches (3), Volta counters with chemical contact theory (1), Voltaic pile constructed in 1800 (4), Planté creates rechargeable battery in 1859 (2), and modern lithium-ion transition (5).',
    urduExplanation: 'برقی بیٹری کی تاریخ: گالوانی کا نظریہ (0)، سائنسدانوں کا مباحثہ (3)، وولٹا کا دو مختلف دھاتوں کا اصول (1)، 1800ء میں وولٹائیک پائل (4)، 1859ء میں ری چارج ایبل بیٹری (2) اور جدید لیتھیم آئن انرجی اسٹوریج (5)۔'
  },
  {
    title: 'The Hubble Space Telescope and Cosmic Observations',
    topic: 'Astrophysics & Space Exploration',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'For centuries, astronomers on Earth contended with atmospheric turbulence that blurred telescopic views of distant celestial bodies.',
      'To circumvent this barrier, NASA and ESA collaborated to launch the Hubble Space Telescope into low-Earth orbit in 1990.',
      'A daring 1993 space shuttle servicing mission installed corrective optics, restoring crystal-clear vision to the orbiting observatory.',
      'Ground-based optical observatories suffered severely from light pollution, air currents, and moisture absorption.',
      'Early transmissions revealed a tragic spherical aberration in the telescope’s primary mirror, producing fuzzy, distorted images.',
      'Over three decades, Hubble’s iconic deep-field imagery has transformed our understanding of cosmic age, black holes, and dark energy.'
    ],
    explanation: 'Narrative structure: Earth atmospheric blurring problem (0), light pollution and air distortion (3), Hubble launched in 1990 (1), flawed mirror discovered (4), 1993 servicing mission corrects optics (2), and three decades of revolutionary imagery (5).',
    urduExplanation: 'ہبل خلائی دوربین: زمین پر فضائی رکاوٹیں اور دھندلا پن (0)، آلودگی کے اثرات (3)، 1990ء میں ہبل کی خلا میں روانگی (1)، آئینے میں نقص کی دریافت (4)، 1993ء کا مرمتی مشن (2) اور کائنات کی عمر اور بلیک ہولز پر انقلابی انکشافات (5)۔'
  },
  {
    title: 'The Agricultural Green Revolution',
    topic: 'Agronomy & Global Food Security',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'By the mid-twentieth century, soaring global populations threatened catastrophic famines across developing nations in Asia and Latin America.',
      'Agronomist Norman Borlaug conducted intensive plant-breeding trials in Mexico to develop semi-dwarf, disease-resistant wheat varieties.',
      'Combined with improved irrigation and synthetic fertilizers, these high-yield varieties doubled crop yields across India and Pakistan within a decade.',
      'Traditional grain varieties featured tall, slender stalks that readily collapsed under heavy fertilizer application and rainstorms.',
      'His innovative dwarf varieties resisted lodging, channeling nutrients directly into plump grain heads rather than unproductive stems.',
      'Credited with saving over one billion lives from starvation, Borlaug was awarded the Nobel Peace Prize in 1970 for his agricultural triumph.'
    ],
    explanation: 'Challenge-solution sequence: Mid-century famine threats (0), tall stalks collapsing under rain (3), Borlaug develops semi-dwarf wheat in Mexico (1), dwarf varieties channeling nutrients to grain (4), crop yields doubling in India and Pakistan (2), and Borlaug saving a billion lives with 1970 Nobel Prize (5).',
    urduExplanation: 'سبز انقلاب: 20ویں صدی میں قحط کا خطرہ (0)، روایتی گندم کے پودوں کی کمزوری (3)، نارمن بورلاگ کی میکسیکو میں تحقیق (1)، بونے قد کی مضبوط گندم (4)، پاکستان اور بھارت میں پیداوار میں دوگنا اضافہ (2) اور 1970ء کا نوبل امن انعام (5)۔'
  },
  {
    title: 'The Eradication of Smallpox',
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
    title: 'The Structure of DNA and the Molecular Biology Revolution',
    topic: 'Genetics & Molecular Biochemistry',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'In the mid-twentieth century, biologists recognized that chromosomes transmitted heredity, but the chemical architecture of genes was unknown.',
      'At King’s College London, Rosalind Franklin used X-ray crystallography to produce "Photograph 51," revealing a sharp helical diffraction pattern.',
      'This breakthrough demonstrated how hereditary information is duplicated, spawning the biotechnology and genetic medicine industries.',
      'Without precise physical models, researchers debated fiercely whether genetic traits were encoded within complex proteins or nucleic acids.',
      'Drawing on Franklin’s diffraction data, James Watson and Francis Crick constructed their legendary double-helix molecular model in 1953.',
      'Today, genomic sequencing allows scientists to decipher ancestral migrations, diagnose hereditary diseases, and edit cellular DNA.'
    ],
    explanation: 'Chronological discovery: Mystery of heredity chemical structure (0), debates whether proteins or nucleic acids stored traits (3), Rosalind Franklin takes Photograph 51 (1), Watson and Crick construct double helix model (4), explains DNA replication mechanism (2), and modern genomics today (5).',
    urduExplanation: 'ڈی این اے کی ساخت: وراثت کے کیمیائی ڈھانچے کی تلاش (0)، پروٹین یا نیوکلیک ایسڈ پر مباحثہ (3)، روزالینڈ فرینکلن کا ایکسرے فوٹو (1)، واٹسن اور کرک کا ڈبل ہیلکس ماڈل (4)، نقالی کا طریقہ کار (2) اور جدید جینومکس پر اثرات (5)۔'
  },
  {
    title: 'The James Webb Space Telescope and Infrared Astronomy',
    topic: 'Cosmology & Space Instrumentation',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'While the Hubble Space Telescope revolutionized optical astronomy, it could not peer through thick clouds of interstellar dust.',
      'Cosmic dust particles scatter short optical wavelengths, leaving early galaxy formation largely invisible to conventional mirrors.',
      'To overcome this observational limit, international agencies engineered the James Webb Space Telescope with gold-coated beryllium mirrors.',
      'Launched on Christmas Day 2021, the observatory travelled one million miles into space to orbit the Sun-Earth Lagrange point L2.',
      'Its ultra-cold infrared instruments penetrate dust clouds, capturing primordial light emitted shortly after the Big Bang.',
      'Today, JWST provides unprecedented spectral data detailing atmospheric chemistry on distant exoplanets and cosmic evolution.'
    ],
    explanation: 'Logical progression: Hubble optical limits (0), cosmic dust scattering optical light (2), JWST engineered with gold-beryllium mirrors (4), launch in 2021 to L2 point (1), infrared instruments piercing cosmic dust (3), and discoveries of exoplanet atmospheres (5).',
    urduExplanation: 'جیمز ویب خلائی دوربین: ہبل کی بصری حدود (0)، کائناتی گرد کے اثرات (2)، جیمز ویب کی تیاری (4)، 2021ء میں لانچ (1)، انفراریڈ کے ذریعے کائناتی دھول کے پار دیکھنا (3) اور دور دراز سیاروں کے ماحول کا مطالعہ (5)۔'
  },
  {
    title: 'The Construction of the International Space Station',
    topic: 'Aerospace Engineering & Orbital Science',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'Following the conclusion of the Cold War, space agencies sought collaborative orbital ventures rather than competitive national space races.',
      'In November 1998, Russia launched the Zarya control module, placing the foundational building block of the station into orbit.',
      'Over the following decade, more than forty robotic and crewed assembly flights delivered laboratory modules, solar arrays, and living quarters.',
      'Independent national space stations were prohibitively expensive to operate and lacked long-term scientific viability.',
      'Weeks later, the American Space Shuttle Endeavour delivered the Unity node, successfully joining the first two pressurized sections.',
      'Continuously crewed since November 2000, the station serves as a microgravity laboratory advancing medicine, materials, and human spaceflight.'
    ],
    explanation: 'Sequential assembly: Post-Cold War collaboration (0), prohibitive costs of separate stations (3), Russia launches Zarya in 1998 (1), Endeavour joins Unity node weeks later (4), 40 assembly flights add modules (2), and continuous human occupation since 2000 (5).',
    urduExplanation: 'بین الاقوامی خلائی اسٹیشن: سرد جنگ کے بعد مشترکہ تحقیق (0)، الگ الگ اسٹیشنوں کے اخراجات (3)، 1998ء میں زاریا کا مدار میں داخل ہونا (1)، امریکی شٹل کے ذریعے جڑنا (4)، چالیس سے زائد پروازیں (2) اور سال 2000ء سے اب تک مسلسل تحقیق (5)۔'
  },
  {
    title: 'The Evolution of Maritime Navigation and the Marine Chronometer',
    topic: 'Horology & Maritime History',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'For centuries, mariners could readily calculate their latitude using the stars but had no reliable method for determining longitude at sea.',
      'Without precise longitude, sailing ships frequently drifted off course, leading to catastrophic shipwrecks on uncharted reefs.',
      'In 1714, the British Parliament offered a fortune via the Longitude Act to anyone who could solve the navigational dilemma.',
      'Self-taught Yorkshire clockmaker John Harrison realized that comparing local ship time with London solar time provided exact east-west distance.',
      'After decades of meticulous craftsmanship, his H4 marine pocket chronometer kept exceptionally accurate time amid rough ocean waves.',
      'Harrison’s seaworthy clock transformed maritime navigation, making global shipping and cartography infinitely safer.'
    ],
    explanation: 'Problem-solving chronology: Calculating latitude vs mystery of longitude (0), shipwrecks caused by longitude errors (2), 1714 Longitude Act reward (4), John Harrison compares ship time to London time (1), H4 chronometer withstands ocean voyages (3), and global shipping safety transformed (5).',
    urduExplanation: 'سمندری گھڑی اور جہاز رانی: عرض بلد اور طول بلد کا مسئلہ (0)، جہازوں کے تباہ کن حادثات (2)، برطانوی پارلیمنٹ کا انعام (4)، جان ہیریسن کی گھڑی کا نظریہ (1)، ایچ 4 میرین کرونومیٹر کی کامیابی (3) اور عالمی جہاز رانی کا محفوظ بننا (5)۔'
  }
];

/**
 * Procedural story generator when pre-defined seeds are exhausted.
 * Generates endless unique 6-sentence coherent narratives.
 */
function generateProceduralSection2Seed(index: number): Section2Seed {
  const proceduralTopics = [
    {
      title: 'The Domestication of Wheat and the Neolithic Revolution',
      topic: 'Archaeology & Human Civilization',
      order: [0, 3, 1, 4, 2, 5],
      s: [
        'Before the advent of agriculture, human bands survived exclusively as nomadic hunter-gatherers following seasonal animal herds.',
        'Around ten thousand years ago in the Fertile Crescent, hunter-gatherers began collecting and selecting wild grains with non-shattering rachis.',
        'Consequently, reliable grain granaries fostered population booms, social specialization, and the rise of the world’s first permanent towns.',
        'Constantly moving across unpredictable landscapes meant families suffered frequent food insecurity during harsh winters.',
        'By deliberately replanting plump kernels, early villagers cultivated domesticated wheat and barley varieties that yielded bountiful harvests.',
        'This agricultural shift fundamentally altered human social structures, laying the bedrock for all literate human civilizations.'
      ],
      en: 'Chronology: Nomadic hunting problem (0), winter food insecurity (3), wild grain selection in Fertile Crescent (1), deliberate replanting (4), granaries and permanent towns (2), and legacy of civilization (5).',
      ur: 'زرعی انقلاب: شکاری دور (0)، خوراک کی قلت (3)، زرخیز ہلال میں گندم کی کاشت (1)، باقاعدہ فصلیں (4)، شہروں کا قیام (2) اور انسانی تہذیب کی بنیاد (5)۔'
    },
    {
      title: 'The Discovery of Ocean Hydrothermal Vents',
      topic: 'Marine Biology & Oceanography',
      order: [0, 2, 4, 1, 3, 5],
      s: [
        'For generations, marine biologists assumed all complex life on Earth depended directly or indirectly on solar photosynthesis.',
        'At depths exceeding two thousand meters, sunlight cannot penetrate, leaving abyssal ocean plains in perpetual freezing darkness.',
        'In 1977, oceanographers piloting the submersible Alvin explored the Galapagos Rift and discovered mineral-rich underwater volcanic chimneys.',
        'These volcanic plumes spewed superheated, mineral-laden fluids, sustaining dense biological communities of giant tube worms and crabs.',
        'Geochemists discovered that specialized bacteria metabolized hydrogen sulfide, proving life could flourish via chemosynthesis without sunlight.',
        'This landmark discovery revolutionized biological science and expanded the possibilities of discovering extraterrestrial life on icy moons.'
      ],
      en: 'Discovery sequence: Sunlight assumption (0), abyss in perpetual darkness (2), Alvin dives in 1977 (4), tube worms and crabs (1), chemosynthesis mechanism (3), and extraterrestrial astrobiology implications (5).',
      ur: 'سمندری چشمے: سورج کی روشنی پر انحصار کا نظریہ (0)، گہرے سمندر کی تاریکی (2)، 1977ء میں ایلون کی غوطہ خوری (4)، حیات کا دریافت ہونا (1)، کیموسنتھیسس کا طریقہ (3) اور خلائی حیات کی تلاش میں اہمیت (5)۔'
    },
    {
      title: 'The Wright Brothers and Controlled Powered Flight',
      topic: 'Aeronautical Engineering & Aviation',
      order: [0, 3, 1, 4, 2, 5],
      s: [
        'Throughout the nineteenth century, daring inventors attempted powered flight using steam engines, resulting in catastrophic crashes.',
        'Wilbur and Orville Wright recognized that the fundamental barrier was not raw engine horsepower but aerodynamic three-axis control.',
        'Using their wind tunnel data, they constructed the lightweight Flyer with counter-rotating wooden propellers and wing-warping cables.',
        'Early aviators possessed no reliable mechanism to stabilize aircraft against crosswinds or steer them smoothly through mid-air maneuvers.',
        'On December 17, 1903, at Kitty Hawk, Orville piloted the first sustained, controlled, heavier-than-air powered flight in history.',
        'Within four decades, aviation evolved from fragile canvas gliders into transatlantic airliners, shrinking geographical distances worldwide.'
      ],
      en: 'Aviation milestone: 19th-century steam crashes (0), lack of stability mechanisms (3), Wright brothers focus on 3-axis control (1), wind tunnel and Flyer construction (4), Kitty Hawk flight in 1903 (2), and global aviation expansion (5).',
      ur: 'رائٹ برادرز کی پرواز: ابتدائی ناکام تجربات (0)، توازن اور کنٹرول کا فقدان (3)، تین جہتی کنٹرول کا اصول (1)، ونڈ ٹنل اور فلائر کی تیاری (4)، 1903ء کی پہلی کامیاب پرواز (2) اور ہوابازی کا عالمی انقلاب (5)۔'
    },
    {
      title: 'The Recovery of the Earth’s Ozone Layer',
      topic: 'Atmospheric Chemistry & Environmental Law',
      order: [0, 2, 4, 1, 3, 5],
      s: [
        'In the 1970s, atmospheric scientists warned that artificial chlorofluorocarbons (CFCs) were migrating into the upper stratosphere.',
        'Stratospheric ozone filters out lethal solar ultraviolet radiation, shielding living organisms from cellular DNA damage.',
        'In 1985, British Antarctic Survey scientists confirmed a catastrophic seasonal thinning of the ozone shield over Antarctica.',
        'In response, world governments united in 1987 to ratify the landmark Montreal Protocol, mandating the phase-out of harmful propellants.',
        'Laboratory tests proved chlorine atoms released by CFCs acted as catalytic destroyers, obliterating thousands of ozone molecules each.',
        'Today, global ozone concentrations are actively healing, demonstrating that coordinated international environmental diplomacy can avert planetary crises.'
      ],
      en: 'Environmental progress: CFC warning in 1970s (0), ozone role in shielding UV (2), Antarctic hole discovered in 1985 (4), chlorine breakdown mechanism (1), Montreal Protocol signed in 1987 (3), and ozone healing today (5).',
      ur: 'اوزون تہہ کا تحفظ: 1970ء میں سی ایف سی کا خطرہ (0)، اوزون کا حفاظتی کردار (2)، 1985ء میں انٹارکٹک شگاف کی تصدیق (4)، کیمیائی عمل (1)، 1987ء کا مانٹریال پروٹوکول (3) اور اوزون تہہ کی بحالی (5)۔'
    }
  ];

  const selected = proceduralTopics[index % proceduralTopics.length];
  const cycle = Math.floor(index / proceduralTopics.length) + 1;
  const cycleTitle = cycle > 1 ? `${selected.title} (Part ${cycle})` : selected.title;

  return {
    title: cycleTitle,
    topic: selected.topic,
    sentences: [...selected.s],
    correctOrder: [...selected.order],
    explanation: selected.en,
    urduExplanation: selected.ur
  };
}

/**
 * Generates two completely distinct Text Cohesion tasks for a single test attempt.
 * Ensures Task 1 and Task 2 are distinct from one another and non-repeating across attempts.
 */
export function generateReadingSection2Pair(seenIds: Set<string>): { task1: ReadingSection2Task; task2: ReadingSection2Task } {
  // 1. Gather all candidates from seeds that have NOT been seen globally
  const unseenSeeds: Section2Seed[] = [];
  for (const s of SECTION_2_SEEDS) {
    if (!seenIds.has(s.title) && !isGloballySeen('reading-s2', '', s.title)) {
      unseenSeeds.push(s);
    }
  }

  let seed1: Section2Seed;
  let seed2: Section2Seed;

  if (unseenSeeds.length >= 2) {
    // Pick two distinct unseen seeds
    seed1 = unseenSeeds[0];
    seed2 = unseenSeeds[1];
  } else if (unseenSeeds.length === 1) {
    seed1 = unseenSeeds[0];
    const counter = getNextGeneratorCounter('readingS2');
    seed2 = generateProceduralSection2Seed(counter);
  } else {
    // All predefined seeds exhausted: generate dynamically unique procedural seeds
    const c1 = getNextGeneratorCounter('readingS2');
    const c2 = getNextGeneratorCounter('readingS2');
    seed1 = generateProceduralSection2Seed(c1);
    seed2 = generateProceduralSection2Seed(c2);
  }

  const uniqueId1 = `auto-reading-s2-t1-${Date.now().toString(36)}-${Math.floor(Math.random() * 10000)}`;
  const uniqueId2 = `auto-reading-s2-t2-${Date.now().toString(36)}-${Math.floor(Math.random() * 10000)}`;

  seenIds.add(uniqueId1);
  seenIds.add(seed1.title);
  seenIds.add(uniqueId2);
  seenIds.add(seed2.title);

  // Mark globally seen so they never reappear
  markGloballySeen('reading-s2', [
    { id: uniqueId1, textOrTitle: seed1.title },
    { id: uniqueId2, textOrTitle: seed2.title }
  ]);

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

  const combinedId = `auto-reading-s2-combined-${Date.now().toString(36)}-${Math.floor(Math.random() * 10000)}`;
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
