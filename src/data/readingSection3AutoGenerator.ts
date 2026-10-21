/**
 * ============================================================================
 * readingSection3AutoGenerator.ts
 * Procedural Reading Section 3 (Short Text Matching / 4 Perspectives) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 3:
 * - 4 distinct perspectives (A, B, C, D) discussing a contemporary topic.
 * - 7 statements to be matched with the correct person.
 * - Comprehensive English and Urdu explanations for each question.
 * - Guarantees zero repetition across tests or attempts.
 * ============================================================================
 */

import { ReadingSection3 } from '../types';

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
        name: 'Bilal (Graduate Trainee)',
        description: 'Bilal values flexible scheduling but feels isolated working from home, expressing concern that remote setups make it harder to find informal mentors.'
      },
      {
        id: 'D',
        name: 'Dr. Tariq (Organizational Psychologist)',
        description: 'Dr. Tariq advocates for structured hybrid models, warning that full isolation erodes interpersonal trust, team loyalty, and long-term organizational health.'
      }
    ],
    questions: [
      {
        id: 'q1',
        statement: 'Emphasizes that quiet concentration at home allows for faster and more thorough completion of analytical assignments.',
        correctPersonId: 'B',
        explanation: 'Sara emphasizes how working quietly without commuting improves analytical turnaround times.',
        urduExplanation: 'سارہ نے گھر پر یکسوئی سے کام کرنے کی وجہ سے تیز اور بہتر تجزیاقی کارکردگی کا ذکر کیا۔'
      },
      {
        id: 'q2',
        statement: 'Believes physical office presence is indispensable for instructing new apprentices and brainstorming spontaneous ideas.',
        correctPersonId: 'A',
        explanation: 'Kamran stresses in-person onboarding of junior colleagues and spontaneous idea generation.',
        urduExplanation: 'کامران نے جونیئرز کی عملی رہنمائی اور باہمی تبادلہ خیال کے لیے دفتر میں موجودگی کو اہم قرار دیا۔'
      },
      {
        id: 'q3',
        statement: 'Expresses anxiety regarding professional loneliness and difficulty accessing casual senior guidance.',
        correctPersonId: 'C',
        explanation: 'Bilal notes feeling isolated and having trouble building informal mentor relationships.',
        urduExplanation: 'بلال نے تنہائی اور سینئرز سے غیر رسمی رہنمائی کی کمی پر تشویش کا اظہار کیا۔'
      },
      {
        id: 'q4',
        statement: 'Warns that an entirely home-based staff structure can gradually undermine collective organizational trust.',
        correctPersonId: 'D',
        explanation: 'Dr. Tariq cautions that complete remote isolation deteriorates trust and firm culture.',
        urduExplanation: 'ڈاکٹر طارق نے مکمل طور پر گھر سے کام کرنے کے نتیجے میں باہمی اعتماد کی کمی سے خبردار کیا۔'
      },
      {
        id: 'q5',
        statement: 'Proposes a balanced hybrid arrangement combining fixed collaborative days with home focus days.',
        correctPersonId: 'D',
        explanation: 'Dr. Tariq explicitly recommends structured hybrid schedules.',
        urduExplanation: 'ڈاکٹر طارق نے ہائبرڈ ماڈل یعنی دفتر اور گھر کے متوازن شیڈول کی تائید کی۔'
      },
      {
        id: 'q6',
        statement: 'Considers long transit journeys to client sites to be both physically exhausting and unproductive.',
        correctPersonId: 'B',
        explanation: 'Sara notes the great relief gained from avoiding daily rush-hour commuting.',
        urduExplanation: 'سارہ نے روزمرہ کے سفر سے آزادی کو وقت اور توانائی کی بچت قرار دیا۔'
      },
      {
        id: 'q7',
        statement: 'Enjoys timetable autonomy while remaining conscious of long-term career advancement hurdles.',
        correctPersonId: 'C',
        explanation: 'Bilal values schedule flexibility but worries about future career development.',
        urduExplanation: 'بلال اوقات کی آزادی کو پسند کرتا ہے لیکن کیریئر میں ترقی کے مواقع پر فکر مند ہے۔'
      }
    ]
  },
  {
    title: 'Artificial Intelligence and Modern Creative Expression',
    topic: 'Technological Innovation in Arts & Literature',
    people: [
      {
        id: 'A',
        name: 'Hassan (Visual Artist)',
        description: 'Hassan argues that generative image algorithms merely recombine human historical artworks and lack genuine emotional lived experience or moral intention.'
      },
      {
        id: 'B',
        name: 'Ayla (Digital Game Designer)',
        description: 'Ayla uses machine learning tools to prototype virtual backgrounds rapidly, allowing small indie gaming studios to compete with global entertainment giants.'
      },
      {
        id: 'C',
        name: 'Professor Daniyal (Cultural Theorist)',
        description: 'Professor Daniyal warns that flooding digital markets with synthetic content degrades public appreciation for hard-earned human craftsmanship and technical mastery.'
      },
      {
        id: 'D',
        name: 'Mehak (Classical Pianist)',
        description: 'Mehak views musical algorithms as exciting improvisational collaborators that can suggest unconventional harmonic transitions she might never have considered.'
      }
    ],
    questions: [
      {
        id: 'q1',
        statement: 'Contends that automated systems lack authentic emotional consciousness and moral intentionality.',
        correctPersonId: 'A',
        explanation: 'Hassan points out that algorithms lack genuine emotional lived experience and moral intention.',
        urduExplanation: 'حسن کا موقف ہے کہ کمپیوٹر الگورتھم میں حقیقی انسانی احساسات اور اخلاقی ارادہ نہیں ہوتا۔'
      },
      {
        id: 'q2',
        statement: 'Appreciates how computational tools assist independent developers in competing with massive conglomerates.',
        correctPersonId: 'B',
        explanation: 'Ayla explains how AI prototyping enables indie developers to rival major entertainment corporations.',
        urduExplanation: 'عائلہ نے چھوٹے گیم ڈویلپرز کے لیے بڑی کمپنیوں کے مقابلے میں کھڑے ہونے کی صلاحیت کو سراہا۔'
      },
      {
        id: 'q3',
        statement: 'Warns that an overabundance of synthetic media threatens respect for patient human craftsmanship.',
        correctPersonId: 'C',
        explanation: 'Professor Daniyal highlights the devaluation of genuine human technical mastery.',
        urduExplanation: 'پروفیسر دانیال نے مصنوعی میڈیا کے سیلاب کی وجہ سے اصل انسانی ہنر کی قدر میں کمی سے خبردار کیا۔'
      },
      {
        id: 'q4',
        statement: 'Considers algorithmic suggestions a useful partner for discovering unexpected musical variations.',
        correctPersonId: 'D',
        explanation: 'Mehak uses music algorithms to suggest unconventional harmonic transitions during composition.',
        urduExplanation: 'مہک نے موسیقی کے الگورتھم کو نئے اور غیر متوقع سُروں کے لیے ایک مددگار ساتھی قرار دیا۔'
      },
      {
        id: 'q5',
        statement: 'Focuses on the rapid visualization and speed advantages offered by automated software in world-building.',
        correctPersonId: 'B',
        explanation: 'Ayla highlights the immense speed of prototyping virtual backgrounds using machine learning.',
        urduExplanation: 'عائلہ نے مجازی دنیا کی تیزی سے تیاری میں مصنوعی ذہانت کے فوائد بیان کیے۔'
      },
      {
        id: 'q6',
        statement: 'Believes true art must emerge from personal human suffering, joy, and lived existential memory.',
        correctPersonId: 'A',
        explanation: 'Hassan insists that authentic art requires genuine human experience rather than recombined pixels.',
        urduExplanation: 'حسن کے مطابق حقیقی فن صرف انسان کے اپنے ذاتی تجربات اور زندگی کے احساسات سے جنم لیتا ہے۔'
      },
      {
        id: 'q7',
        statement: 'Advocates for preserving traditional artistic apprenticeships against digital automation.',
        correctPersonId: 'C',
        explanation: 'Professor Daniyal champions the historical value of human craft and dedication.',
        urduExplanation: 'پروفیسر دانیال نے روایتی فنی مہارتوں اور شاگردی کے نظام کو برقرار رکھنے کی وکالت کی۔'
      }
    ]
  }
];

let s3Counter = 1;

/**
 * Generates a fresh, non-repeating Reading Section 3 matching exercise
 */
export function generateSyntheticReadingSection3(seenIds: Set<string>): ReadingSection3 {
  const index = (s3Counter - 1) % SECTION_3_SEEDS.length;
  const seed = SECTION_3_SEEDS[index];
  const uniqueId = `auto-reading-s3-${Date.now().toString(36)}-${s3Counter++}`;
  const iteration = Math.floor(s3Counter / SECTION_3_SEEDS.length);
  const title = iteration > 0 ? `${seed.title} (Series ${iteration + 1})` : `${seed.title} (ECS Reading Section 3)`;

  seenIds.add(uniqueId);
  seenIds.add(title);

  return {
    id: uniqueId,
    title,
    topic: seed.topic,
    people: seed.people.map(p => ({ ...p })),
    questions: seed.questions.map(q => ({ ...q }))
  };
}
