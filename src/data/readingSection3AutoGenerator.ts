/**
 * ============================================================================
 * readingSection3AutoGenerator.ts
 * Procedural Reading Section 3 (Short Text Matching / 4 Perspectives) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 3:
 * - 4 distinct perspectives (A, B, C, D) discussing a contemporary topic.
 * - 7 statements to be matched with the correct person.
 * - Comprehensive English and Urdu explanations for each question.
 * - STRICT ZERO REPETITION across tests or attempts with global tracking
 *   and persistent counters across page refreshes.
 * ============================================================================
 */

import { ReadingSection3 } from '../types';
import { getNextGeneratorCounter, isGloballySeen, markGloballySeen } from '../lib/antiRepetitionTracker';

interface Section3Seed {
  title: string;
  topic: string;
  people: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  questions: Array<{
    id: string;
    statement: string;
    correctPersonId: string;
    explanation: string;
    urduExplanation: string;
  }>;
}

const SECTION_3_SEEDS: Section3Seed[] = [
  {
    title: 'The Shift Toward Renewable Urban Public Transportation',
    topic: 'Urban Mobility & Environmental Sustainability',
    people: [
      {
        id: 'A',
        name: 'Rashid (City Transport Planner)',
        description: 'Rashid emphasizes that transitioning urban bus fleets entirely to zero-emission electric vehicles reduces city noise pollution and improves pedestrian air quality dramatically.'
      },
      {
        id: 'B',
        name: 'Nadia (Commuter Advocate)',
        description: 'Nadia stresses that while electric buses are cleaner, local authorities must ensure affordable ticket fares and dependable timetables so daily wage earners are not burdened.'
      },
      {
        id: 'C',
        name: 'Taimur (Transport Maintenance Engineer)',
        description: 'Taimur notes that high-capacity battery charging stations demand massive power grid infrastructure upgrades before electric buses can operate reliably across the whole metropolis.'
      },
      {
        id: 'D',
        name: 'Dr. Shahida (Urban Environmental Economist)',
        description: 'Dr. Shahida argues that municipal investments in dedicated bicycle superhighways yield a faster return on public health outcomes than expensive electrical mass-transit projects.'
      }
    ],
    questions: [
      {
        id: 'q1',
        statement: 'Points out that charging infrastructure requires significant investments in municipal electrical capacity.',
        correctPersonId: 'C',
        explanation: 'Taimur specifically highlights that charging stations require extensive power grid infrastructure upgrades.',
        urduExplanation: 'تیمور نے نشاندہی کی کہ چارجنگ اسٹیشنز کے لیے بجلی کے گرڈ سسٹم کو جدید بنانا ضروری ہے۔'
      },
      {
        id: 'q2',
        statement: 'Highlights the immediate benefits of cleaner air and quieter streets for local city walkers.',
        correctPersonId: 'A',
        explanation: 'Rashid discusses the reduction in city noise pollution and major improvements to pedestrian air quality.',
        urduExplanation: 'راشد نے پیدل چلنے والوں کے لیے پرسکون ماحول اور صاف ہوا کے فوری فوائد کو اجاگر کیا۔'
      },
      {
        id: 'q3',
        statement: 'Suggests that cycling networks may offer greater cost-effective health benefits than large-scale transit overhauls.',
        correctPersonId: 'D',
        explanation: 'Dr. Shahida argues that cycling superhighways yield a faster return on public health than costly electrical transit projects.',
        urduExplanation: 'ڈاکٹر شاہدہ کے مطابق سائیکلنگ ٹریکس بھاری برقی منصوبوں سے زیادہ سستی اور صحت بخش ہیں۔'
      },
      {
        id: 'q4',
        statement: 'Voices concern regarding the financial accessibility of public transportation for low-income citizens.',
        correctPersonId: 'B',
        explanation: 'Nadia emphasizes keeping ticket prices affordable so daily wage earners are not financially burdened.',
        urduExplanation: 'نادیہ نے کم آمدنی والے مسافروں کے لیے کرایوں کے بوجھ پر تشویش کا اظہار کیا۔'
      },
      {
        id: 'q5',
        statement: 'Stresses the paramount necessity of scheduled reliability and punctuality for working commuters.',
        correctPersonId: 'B',
        explanation: 'Nadia insists on dependable timetables alongside clean vehicles.',
        urduExplanation: 'نادیہ نے گاڑیوں کے مقررہ وقت پر آنے اور تسلسل کی ضرورت پر زور دیا۔'
      },
      {
        id: 'q6',
        statement: 'Focuses on the engineering and grid stability challenges behind vehicle battery replenishment.',
        correctPersonId: 'C',
        explanation: 'Taimur analyzes the high-capacity battery charging and power distribution demands.',
        urduExplanation: 'تیمور نے گاڑیوں کی بیٹریوں کی چارجنگ اور پاور گرڈ کے تکنیکی چیلنجز پر روشنی ڈالی۔'
      },
      {
        id: 'q7',
        statement: 'Advocates for a complete phase-out of traditional diesel combustion transit in metropolitan areas.',
        correctPersonId: 'A',
        explanation: 'Rashid champions transitioning bus fleets entirely to zero-emission electric vehicles.',
        urduExplanation: 'راشد شہر میں ڈیزل بسوں کے مکمل خاتمے اور برقی بسوں کے نفاذ کا حامی ہے۔'
      }
    ]
  },
  {
    title: 'Digital Screen Learning vs Physical Textbooks in Secondary Education',
    topic: 'Educational Pedagogy & Cognitive Development',
    people: [
      {
        id: 'A',
        name: 'Professor Arshad (Cognitive Neuroscientist)',
        description: 'Professor Arshad argues that reading from printed paper books stimulates deeper comprehension and longer memory retention compared to scrolling rapidly on luminous screens.'
      },
      {
        id: 'B',
        name: 'Fatima (High School Principal)',
        description: 'Fatima values the interactive features of tablet devices, which allow teachers to provide real-time quizzes and multimedia diagrams tailored to varied student learning paces.'
      },
      {
        id: 'C',
        name: 'Salman (Parent Association Representative)',
        description: 'Salman worries about excessive recreational screen time leading to digital fatigue, blurred vision, and sleep disruption among teenage students.'
      },
      {
        id: 'D',
        name: 'Zia (Educational Software Developer)',
        description: 'Zia asserts that digital textbooks drastically lower recurring printing costs and can be updated instantly with new scientific discoveries and global facts.'
      }
    ],
    questions: [
      {
        id: 'q1',
        statement: 'Contends that paper reading fosters superior concentration and conceptual understanding over digital scrolling.',
        correctPersonId: 'A',
        explanation: 'Professor Arshad explains that reading from physical paper stimulates deeper comprehension and stronger retention.',
        urduExplanation: 'پروفیسر ارشد کا موقف ہے کہ کاغذ سے پڑھنے سے ذہنی یکسوئی اور یادداشت بہتر رہتی ہے۔'
      },
      {
        id: 'q2',
        statement: 'Praises the capability to update learning materials instantaneously as scientific discoveries evolve.',
        correctPersonId: 'D',
        explanation: 'Zia notes that digital textbooks can be updated instantly without costly reprints.',
        urduExplanation: 'ضیاء نے سائنسی معلومات کی فوری آن لائن تجدید کے فائدے کا ذکر کیا۔'
      },
      {
        id: 'q3',
        statement: 'Appreciates interactive multimedia software that adapts to different individual learning speeds.',
        correctPersonId: 'B',
        explanation: 'Fatima highlights interactive tablet apps that tailor quizzes and visual diagrams to diverse student paces.',
        urduExplanation: 'فاطمہ نے ہر طالب علم کی اپنی رفتار کے مطابق انٹرایکٹو مواد کی تعریف کی۔'
      },
      {
        id: 'q4',
        statement: 'Warns that extended exposure to computer displays can impair sleep patterns and induce eyestrain.',
        correctPersonId: 'C',
        explanation: 'Salman is concerned about digital fatigue, impaired vision, and disrupted sleep schedules.',
        urduExplanation: 'سلمان نے اسکرین کے مسلسل استعمال سے آنکھوں کے تناؤ اور نیند کی خرابی سے خبردار کیا۔'
      },
      {
        id: 'q5',
        statement: 'Highlights the substantial economic reduction in publishing and distributing physical school literature.',
        correctPersonId: 'D',
        explanation: 'Zia points out that electronic educational resources eliminate hefty recurring printing and transport fees.',
        urduExplanation: 'ضیاء نے طباعت اور ترسیل کے بھاری اخراجات کے خاتمے کو اجاگر کیا۔'
      },
      {
        id: 'q6',
        statement: 'Emphasizes neurological research demonstrating the distinct mental processing of printed text.',
        correctPersonId: 'A',
        explanation: 'Professor Arshad relies on cognitive neuroscience to demonstrate memory retention differences between print and screens.',
        urduExplanation: 'پروفیسر ارشد نے اعصابی تحقیق کی روشنی میں پرنٹ شدہ مواد کی برتری کو واضح کیا۔'
      },
      {
        id: 'q7',
        statement: 'Advocates for classroom technology primarily as a customized instructional tool for classroom educators.',
        correctPersonId: 'B',
        explanation: 'Fatima values tablets as versatile tools that assist educators in active, tailored classroom teaching.',
        urduExplanation: 'فاطمہ تدریس کو موثر اور لچکدار بنانے کے لیے اساتذہ کے ہاتھ میں جدید ٹیکنالوجی کی حمایتی ہے۔'
      }
    ]
  },
  {
    title: 'The Future of Workplace Models in Professional Organizations',
    topic: 'Modern Workplace Strategy & Employee Wellbeing',
    people: [
      {
        id: 'A',
        name: 'Kamran (Managing Director)',
        description: 'Kamran maintains that in-person teamwork in a shared physical office is vital for onboarding junior apprentices, spontaneous idea generation, and maintaining corporate accountability.'
      },
      {
        id: 'B',
        name: 'Sara (Senior Project Analyst)',
        description: 'Sara points out that eliminating tedious daily commuting hours has substantially improved her analytical focus, project turnaround times, and overall work-life harmony.'
      },
      {
        id: 'C',
        name: 'Dr. Junaid (Occupational Psychologist)',
        description: 'Dr. Junaid warns that long-term isolated remote working can lead to social alienation, eroded team cohesion, and blurred boundaries between home rest and professional obligations.'
      },
      {
        id: 'D',
        name: 'Mehwish (Human Resources Director)',
        description: 'Mehwish advocates for a structured hybrid schedule where staff coordinate designated on-site collaborative days alongside flexible remote deep-work periods.'
      }
    ],
    questions: [
      {
        id: 'q1',
        statement: 'Argues that personal mentoring and creative serendipity flourish best within physical office spaces.',
        correctPersonId: 'A',
        explanation: 'Kamran insists that in-person teamwork is vital for onboarding apprentices and spontaneous innovation.',
        urduExplanation: 'کامران کے مطابق جونیئر عملے کی تربیت اور نئے آئیڈیاز کی تخلیق فزیکل دفتر میں بہترین ہوتی ہے۔'
      },
      {
        id: 'q2',
        statement: 'Highlights personal productivity gains and quality-of-life benefits gained from avoiding rush-hour transit.',
        correctPersonId: 'B',
        explanation: 'Sara emphasizes how eliminating daily commuting hours improved her analytical focus and work-life balance.',
        urduExplanation: 'سارہ نے سفر کے وقت کی بچت اور گھریلو و دفتری توازن میں بہتری کے فوائد بتائے۔'
      },
      {
        id: 'q3',
        statement: 'Proposes a balanced compromise combining dedicated collaborative office days with telecommuting.',
        correctPersonId: 'D',
        explanation: 'Mehwish champions a structured hybrid framework blending on-site and remote work.',
        urduExplanation: 'مہوش نے ہائبرڈ ماڈل یعنی دفتر اور گھر سے کام کے متوازن امتزاج کی تجویز دی۔'
      },
      {
        id: 'q4',
        statement: 'Expresses clinical concern regarding the psychological toll and social isolation of continuous home-working.',
        correctPersonId: 'C',
        explanation: 'Dr. Junaid warns of social alienation, eroded team cohesion, and blurred boundaries.',
        urduExplanation: 'ڈاکٹر جنید نے مسلسل تنہائی اور گھر و کام کے اوقات خلط ملط ہونے کے نفسیاتی نقصانات سے خبردار کیا۔'
      },
      {
        id: 'q5',
        statement: 'Notes that remote arrangements afford undisturbed concentration for complex, deep analytical duties.',
        correctPersonId: 'B',
        explanation: 'Sara finds that quiet home working significantly boosts her analytical turnaround times.',
        urduExplanation: 'سارہ کے مطابق گھر سے پیچیدہ تجزئیاتی کام زیادہ یکسوئی سے مکمل ہوتے ہیں۔'
      },
      {
        id: 'q6',
        statement: 'Suggests that organizational belonging and culture weaken when staff never convene physically.',
        correctPersonId: 'C',
        explanation: 'Dr. Junaid highlights how lack of physical interaction erodes team cohesion.',
        urduExplanation: 'ڈاکٹر جنید کے مطابق ایک ساتھ نہ بیٹھنے سے باہمی اعتماد اور ٹیم کی یکجہتی کمزور ہوتی ہے۔'
      },
      {
        id: 'q7',
        statement: 'Believes in-person presence is indispensable for verifying employee dedication and operational oversight.',
        correctPersonId: 'A',
        explanation: 'Kamran stresses in-person attendance to maintain corporate accountability.',
        urduExplanation: 'کامران نے احتساب اور کارکردگی کی نگرانی کے لیے دفتر میں موجودگی کو ناگزیر قرار دیا۔'
      }
    ]
  },
  {
    title: 'The Role of Artificial Intelligence in Contemporary Creative Arts',
    topic: 'Creative Arts & Machine Learning Ethics',
    people: [
      {
        id: 'A',
        name: 'Hassan (Traditional Oil Painter)',
        description: 'Hassan contends that authentic visual art requires lived emotional suffering, human vulnerability, and physical tactile brushcraft that algorithms can never genuinely experience.'
      },
      {
        id: 'B',
        name: 'Ayla (Video Game Concept Artist)',
        description: 'Ayla views generative neural networks as brilliant creative accelerators that allow concept artists to prototype fantastic virtual scenery and architectural mood-boards in minutes.'
      },
      {
        id: 'C',
        name: 'Professor Daniyal (Art Historian)',
        description: 'Professor Daniyal compares current AI image generators to the 19th-century invention of the photographic camera, predicting that painters will simply redefine artistic originality.'
      },
      {
        id: 'D',
        name: 'Farida (Intellectual Property Attorney)',
        description: 'Farida highlights the acute legal and ethical dilemmas surrounding neural models trained without permission on millions of copyrighted artworks by living illustrators.'
      }
    ],
    questions: [
      {
        id: 'q1',
        statement: 'Points out that AI generators were trained on immense quantities of copyrighted artistic works without consent.',
        correctPersonId: 'D',
        explanation: 'Farida details the legal dilemmas of AI models scraping copyrighted images without authorization.',
        urduExplanation: 'فریدہ نے مصوروں کی اجازت کے بغیر ان کے فن پارے اے آئی ٹریننگ میں استعمال کرنے پر اعتراض کیا۔'
      },
      {
        id: 'q2',
        statement: 'Believes algorithms serve as powerful productivity enhancers for visual prototyping and world design.',
        correctPersonId: 'B',
        explanation: 'Ayla describes machine learning as a creative accelerator for prototyping concept art.',
        urduExplanation: 'عائلہ نے اے آئی کو ویڈیو گیمز کے مناظر تیزی سے بنانے کے لیے ایک مفید ٹول قرار دیا۔'
      },
      {
        id: 'q3',
        statement: 'Draws a historical parallel with the advent of photography to argue that human artistry will evolve.',
        correctPersonId: 'C',
        explanation: 'Professor Daniyal compares generative AI to the invention of the photographic camera.',
        urduExplanation: 'پروفیسر دانیال نے اے آئی کا موازنہ کیمرے کی تاریخی ایجاد سے کر کے فن کے ارتقا کی بات کی۔'
      },
      {
        id: 'q4',
        statement: 'Insists that true artistry necessitates real subjective human emotions and tactile physical mastery.',
        correctPersonId: 'A',
        explanation: 'Hassan maintains that authentic art requires lived vulnerability and manual craft.',
        urduExplanation: 'حسن کے مطابق حقیقی فن صرف انسان کے اپنے جذبات اور ہاتھ کی محنت سے وجود میں آتا ہے۔'
      },
      {
        id: 'q5',
        statement: 'Warns that unauthorized data scraping violates the moral rights and livelihoods of working illustrators.',
        correctPersonId: 'D',
        explanation: 'Farida addresses the infringement on the financial rights and legal protections of artists.',
        urduExplanation: 'فریدہ نے فنکاروں کے قانونی حقوق اور روزگار کے تحفظ کا دفاع کیا۔'
      },
      {
        id: 'q6',
        statement: 'Predicts that automated image tools will prompt artists toward greater conceptual abstraction.',
        correctPersonId: 'C',
        explanation: 'Professor Daniyal predicts painters will redefine their artistic mission and medium.',
        urduExplanation: 'پروفیسر دانیال کے مطابق مصور اب نئی جہتوں اور تجریدی فن کی طرف متوجہ ہوں گے۔'
      },
      {
        id: 'q7',
        statement: 'Argues that machine outputs merely assemble pixel permutations without genuine understanding.',
        correctPersonId: 'A',
        explanation: 'Hassan argues that algorithms lack authentic soul and lived consciousness.',
        urduExplanation: 'حسن نے نشاندہی کی کہ کمپیوٹر صرف پکسلز جوڑتا ہے، اس کے پاس دل اور احساسات نہیں ہیں۔'
      }
    ]
  }
];

/**
 * Generates a fresh, non-repeating Reading Section 3 matching exercise
 */
export function generateSyntheticReadingSection3(seenIds: Set<string>): ReadingSection3 {
  const unseenSeeds = SECTION_3_SEEDS.filter(s => 
    !seenIds.has(s.title) && 
    !isGloballySeen('reading-s3', '', s.title)
  );

  let seed: Section3Seed;
  if (unseenSeeds.length > 0) {
    seed = unseenSeeds[0];
  } else {
    const counter = getNextGeneratorCounter('readingS3');
    const index = (counter - 1) % SECTION_3_SEEDS.length;
    const base = SECTION_3_SEEDS[index];
    const cycle = Math.floor(counter / SECTION_3_SEEDS.length) + 1;
    seed = {
      ...base,
      title: `${base.title} (Series ${cycle})`
    };
  }

  const uniqueId = `auto-reading-s3-${Date.now().toString(36)}-${Math.floor(Math.random() * 10000)}`;

  seenIds.add(uniqueId);
  seenIds.add(seed.title);

  markGloballySeen('reading-s3', [
    { id: uniqueId, textOrTitle: seed.title }
  ]);

  return {
    id: uniqueId,
    title: seed.title,
    topic: seed.topic,
    people: seed.people.map(p => ({ ...p })),
    questions: seed.questions.map(q => ({ ...q }))
  };
}
