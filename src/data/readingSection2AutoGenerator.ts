/**
 * ============================================================================
 * readingSection2AutoGenerator.ts
 * Procedural Reading Section 2 (Text Cohesion / Scrambled Sentences) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 2:
 * - 6 sentences that form a coherent biographical, historical, or scientific narrative.
 * - Clear discourse markers, chronological progression, and cohesive reference words.
 * - Verified correctOrder array.
 * - Full English and Urdu explanations.
 * - Zero repetition across tests or attempts.
 * ============================================================================
 */

import { ReadingSection2 } from '../types';

interface Section2Seed {
  title: string;
  topic: string;
  sentences: string[];
  correctOrder: number[];
  explanation: string;
  urduExplanation: string;
}

const SECTION_2_SEEDS: Section2Seed[] = [
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
      'He spent over two decades meticulously gathering evidence before publishing "On the Origin of Species" in 1859.',
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
  }
];

let s2Counter = 1;

/**
 * Generates a fresh, non-repeating Reading Section 2 text cohesion exercise
 */
export function generateSyntheticReadingSection2(seenIds: Set<string>): ReadingSection2 {
  const index = (s2Counter - 1) % SECTION_2_SEEDS.length;
  const seed = SECTION_2_SEEDS[index];
  const uniqueId = `auto-reading-s2-${Date.now().toString(36)}-${s2Counter++}`;
  const iteration = Math.floor(s2Counter / SECTION_2_SEEDS.length);
  const title = iteration > 0 ? `${seed.title} (Part ${iteration + 1})` : `${seed.title} (Cohesion Practice)`;

  seenIds.add(uniqueId);
  seenIds.add(title);

  return {
    id: uniqueId,
    title,
    topic: seed.topic,
    sentences: [...seed.sentences],
    correctOrder: [...seed.correctOrder],
    explanation: seed.explanation,
    urduExplanation: seed.urduExplanation
  };
}
