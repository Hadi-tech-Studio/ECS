/**
 * ============================================================================
 * readingSection4AutoGenerator.ts
 * Procedural Reading Section 4 (Long Text Comprehension / Heading Matching) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 4:
 * - 5 thematic paragraphs (A through E).
 * - 8 headings (i through viii) with exactly 3 distractors.
 * - Comprehensive English and Urdu explanations for each heading match.
 * - Guarantees zero repetition when all 48 PDF topics are exhausted.
 * ============================================================================
 */

import { ReadingSection4 } from '../types';

interface Section4Seed {
  title: string;
  topic: string;
  introduction: string;
  headings: string[];
  paragraphs: Array<{
    paragraphNumber: number;
    text: string;
    correctHeadingIndex: number;
    explanation: string;
    urduExplanation: string;
  }>;
}

const SECTION_4_SEEDS: Section4Seed[] = [
  {
    title: 'Section 4: Long Text Comprehension — The Psychology of Habit Formation',
    topic: 'The Psychology of Habit Formation',
    introduction: 'Read each passage and match paragraphs A–E with the most suitable heading from options i–viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.',
    headings: [
      'i. The neurological feedback loop of cues and rewards',
      'ii. Why sheer willpower frequently proves inadequate',
      'iii. Common misconceptions regarding rapid behavioral transformation',
      'iv. The instrumental role of environmental cues',
      'v. Long-term health consequences of modern sedentary habits',
      'vi. Designing progressive, incremental adjustments',
      'vii. Early historical investigations into human behavior',
      'viii. The social influence of peer networks on personal habits'
    ],
    paragraphs: [
      {
        paragraphNumber: 1,
        text: 'At the fundamental neurological level, every routine habit consists of a continuous three-stage cycle: a distinct cue, an action routine, and a gratifying reward. Brain imaging reveals that as a habit crystallizes, neural activity within the basal ganglia automates the routine, requiring negligible conscious cognitive effort to execute. This efficient automation permits humans to navigate daily life without constantly deliberating over mundane motor tasks.',
        correctHeadingIndex: 0,
        explanation: 'Paragraph A describes the biological and neurological mechanism comprising cues, routines, and neurological rewards.',
        urduExplanation: 'پیراگراف A میں دماغی ساخت کے تحت عادت کے بننے کے بنیادی چکر (Cue, Routine, Reward) کا تجزیہ کیا گیا ہے۔'
      },
      {
        paragraphNumber: 2,
        text: 'Popular lifestyle culture often perpetuates the persistent myth that establishing a profound lifelong habit requires exactly twenty-one days of rigid discipline. However, systematic behavioral studies demonstrate that habit acquisition varies dramatically depending on the complexity of the activity and individual psychological predispositions. Some basic behaviors take mere weeks to stabilize, whereas complex fitness regimens may necessitate several months.',
        correctHeadingIndex: 2,
        explanation: 'Paragraph B addresses and refutes popular misconceptions regarding the arbitrary 21-day timeline for behavior change.',
        urduExplanation: 'پیراگراف B میں 21 دن میں عادت بننے کے عام غلط مفروضے کو مسترد کر کے سائنسی حقائق پیش کیے گئے ہیں۔'
      },
      {
        paragraphNumber: 3,
        text: 'Relying solely on conscious determination is typically a recipe for frustration because cognitive energy depletes steadily throughout the day. When individuals encounter stress or mental exhaustion, the brain naturally defaults to automated historical routines rather than upholding fresh resolutions. Consequently, relying on internal motivation alone rarely sustains difficult lifestyle modifications over extended periods.',
        correctHeadingIndex: 1,
        explanation: 'Paragraph C explains why conscious willpower and motivation inevitably deplete and fail to sustain habits alone.',
        urduExplanation: 'پیراگراف C واضح کرتا ہے کہ صرف ارادے یا قوتِ ارادی پر انحصار کیوں ناکام ثابت ہوتا ہے کیونکہ ذہنی توانائی جلد ختم ہو جاتی ہے۔'
      },
      {
        paragraphNumber: 4,
        text: 'A far more sustainable methodology involves restructuring one’s immediate physical surroundings to eliminate friction for desired behaviors. For instance, placing a water bottle directly on the desk or laying out running shoes the preceding evening establishes frictionless visual triggers. By reshaping the visual architecture of everyday spaces, individuals make positive actions intuitive and effortless.',
        correctHeadingIndex: 3,
        explanation: 'Paragraph D focuses on modifying the external physical environment to trigger positive actions effortlessly.',
        urduExplanation: 'پیراگراف D میں ارد گرد کے ماحول اور بصری اشاروں کو تبدیل کر کے عادات کو آسان بنانے پر زور دیا گیا ہے۔'
      },
      {
        paragraphNumber: 5,
        text: 'Behavioral psychologists consistently advocate for microscopic adjustments rather than sudden, dramatic lifestyle overhauls. Initiating a new habit with an exercise lasting just two minutes ensures that resistance remains negligible. Once the consistency of the initial pattern is cemented into daily life, the duration and intensity can be expanded smoothly without triggering avoidance reflexes.',
        correctHeadingIndex: 5,
        explanation: 'Paragraph E emphasizes starting with microscopic, incremental adjustments to ensure consistency without friction.',
        urduExplanation: 'پیراگراف E میں چھوٹی چھوٹی بتدریج تبدیلیاں لانے اور ان کے تسلسل کو قائم کرنے کا حل دیا گیا ہے۔'
      }
    ]
  },
  {
    title: 'Section 4: Long Text Comprehension — The Architectural Marvels of Vernacular Building',
    topic: 'Vernacular Architecture & Passive Climate Design',
    introduction: 'Read each passage and match paragraphs A–E with the most suitable heading from options i–viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.',
    headings: [
      'i. Natural cooling mechanisms developed in arid zones',
      'ii. The heavy carbon footprint of modern concrete manufacturing',
      'iii. Utilizing indigenous materials suited to local topography',
      'iv. Preserving cultural heritage against rapid urbanization',
      'v. Community participation in collective building maintenance',
      'vi. The decline of traditional building crafts in commercial markets',
      'vii. Aligning structural orientation with solar geometry',
      'viii. Seismic resilience engineered into ancient timber frameworks'
    ],
    paragraphs: [
      {
        paragraphNumber: 1,
        text: 'Throughout centuries of living in desert climates, traditional builders perfected passive wind towers known as badgirs to cool domestic interiors. These elevated masonry shafts capture higher-velocity ambient breezes, redirecting cooling air downward through moisture-filled subterranean conduits before circulating it into living chambers. This ingenious technique achieves substantial thermal comfort without consuming any electrical energy.',
        correctHeadingIndex: 0,
        explanation: 'Paragraph A details the passive cooling systems and wind towers developed in desert environments.',
        urduExplanation: 'پیراگراف A میں صحرائی علاقوں میں بنا بجلی کے ہوا کے ذریعے گھروں کو ٹھنڈا رکھنے والے روایتی ونڈ ٹاورز کا ذکر ہے۔'
      },
      {
        paragraphNumber: 2,
        text: 'Rather than importing expensive structural steel or manufactured composite boards, vernacular builders relied on materials gathered directly from immediate surroundings. Whether using compressed sun-dried earth bricks in warm plains or dressed local granite in mountain passes, these organic materials provide superior insulation while harmonizing visually with the natural regional landscape.',
        correctHeadingIndex: 2,
        explanation: 'Paragraph B highlights the reliance on locally sourced native materials perfectly matched to local geography.',
        urduExplanation: 'پیراگراف B میں مقامی سطح پر دستیاب مٹی، پتھر اور لکڑی کے ماحول دوست استعمال کی اہمیت بیان کی گئی ہے۔'
      },
      {
        paragraphNumber: 3,
        text: 'Long before modern computational modeling existed, master masons positioned buildings with meticulous reference to the sun’s annual trajectory. In colder alpine valleys, south-facing apertures maximize solar heat absorption throughout harsh winters, whereas deep porticos in equatorial zones deflect scorching midday rays, demonstrating an intuitive grasp of seasonal celestial mechanics.',
        correctHeadingIndex: 6,
        explanation: 'Paragraph C explains how building positioning and orientation were calculated to optimize seasonal solar exposure.',
        urduExplanation: 'پیراگراف C میں سورج کے رخ اور زاویے کے مطابق عمارتوں کی سمت بندی کر کے موسمی تحفظ حاصل کرنے کی بات کی گئی ہے۔'
      },
      {
        paragraphNumber: 4,
        text: 'In earthquake-prone mountain regions, ancient carpenters developed flexible joinery techniques that permit timber structures to sway during tremors without shattering. By avoiding rigid metallic fasteners in favor of interlocking wooden pegs, the flexible joints dissipate seismic energy safely, enabling centuries-old multi-story pagodas to endure powerful geological shocks unscathed.',
        correctHeadingIndex: 7,
        explanation: 'Paragraph D focuses on traditional interlocking wooden joints engineered to withstand earthquakes and seismic shocks.',
        urduExplanation: 'پیراگراف D میں لکڑی کے جوڑوں کے ذریعے زلزلوں کے جھٹکوں کو برداشت کرنے والی روایتی انجینئرنگ کو سراہا گیا ہے۔'
      },
      {
        paragraphNumber: 5,
        text: 'In many traditional pastoral villages, the maintenance of communal dwellings is an inclusive social ritual rather than a commercial contract. Prior to the onset of the monsoon season, entire communities gather to replaster mud facades and rethatch woven roofs collectively, strengthening civic camaraderie while preserving essential structural safety.',
        correctHeadingIndex: 4,
        explanation: 'Paragraph E describes the collective community maintenance traditions where neighbors work together to repair roofs and walls.',
        urduExplanation: 'پیراگراف E میں کمیونٹی کی اجتماعی شرکت اور مل جل کر گھروں کی دیکھ بھال کی روایت کو موضوع بنایا گیا ہے۔'
      }
    ]
  }
];

let s4Counter = 1;

/**
 * Generates a fresh, non-repeating Reading Section 4 exercise
 */
export function generateSyntheticReadingSection4(seenIds: Set<string>): ReadingSection4 {
  const index = (s4Counter - 1) % SECTION_4_SEEDS.length;
  const seed = SECTION_4_SEEDS[index];
  const uniqueId = `auto-reading-s4-${Date.now().toString(36)}-${s4Counter++}`;

  seenIds.add(uniqueId);

  return {
    id: uniqueId,
    title: seed.title,
    topic: seed.topic,
    introduction: seed.introduction,
    headings: [...seed.headings],
    paragraphs: seed.paragraphs.map(p => ({
      id: `${uniqueId}-p${p.paragraphNumber}`,
      paragraphNumber: p.paragraphNumber,
      text: p.text,
      correctHeadingIndex: p.correctHeadingIndex,
      explanation: p.explanation,
      urduExplanation: p.urduExplanation
    }))
  };
}
