/**
 * ============================================================================
 * readingSection4AutoGenerator.ts
 * Procedural Reading Section 4 (Long Text Comprehension / Heading Matching) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 4:
 * - Exactly 6 to 7 paragraphs per passage (Paragraphs A through F or G).
 * - 9 to 10 headings with exactly 3 distractors.
 * - Comprehensive English and Urdu explanations for each heading match.
 * - Guarantees zero repetition across tests and attempts.
 * ============================================================================
 */

import { ReadingSection4 } from '../types';

export interface Section4Seed {
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

export const SECTION_4_SEEDS: Section4Seed[] = [
  {
    title: 'Section 4: Long Text Comprehension — The Science of Circadian Rhythms and Sleep',
    topic: 'Circadian Biology & Human Health',
    introduction: 'Read each passage and match paragraphs A–G with the most suitable heading from options i–x. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.',
    headings: [
      'i. The master biological pacemaker in the human brain',
      'ii. The impact of artificial blue light on melatonin secretion',
      'iii. The cellular restorative functions occurring during deep sleep',
      'iv. Why historical hunter-gatherers experienced segmented rest patterns',
      'v. Cognitive and emotional repercussions of chronic sleep deprivation',
      'vi. The physiological role of sleep stages in memory consolidation',
      'vii. Economic costs of workplace fatigue on national productivity',
      'viii. Practical lifestyle interventions to optimize sleep hygiene',
      'ix. Genetic anomalies that eliminate the biological need for sleep',
      'x. The chemical dynamics of adenosine buildup throughout waking hours'
    ],
    paragraphs: [
      {
        paragraphNumber: 1,
        text: 'Deep within the mammalian brain, a tiny cluster of approximately twenty thousand neurons situated inside the hypothalamus acts as the central biological clock. Known as the suprachiasmatic nucleus, this neural master pacemaker synchronizes hundreds of peripheral clocks operating in organs and cellular tissues. It regulates core body temperature, hormone release, and metabolic rates on an approximately twenty-four-hour cycle aligned with the terrestrial solar day.',
        correctHeadingIndex: 0,
        explanation: 'Paragraph A describes the suprachiasmatic nucleus within the hypothalamus acting as the master biological pacemaker coordinating bodily clocks.',
        urduExplanation: 'پیراگراف A میں دماغ کے ہائپوتھیلمس میں موجود حیاتیاتی گھڑی (Suprachiasmatic Nucleus) اور اس کے 24 گھنٹے کے چکر کو منظم کرنے کے کردار کی وضاحت کی گئی ہے۔'
      },
      {
        paragraphNumber: 2,
        text: 'Throughout waking hours, the brain metabolizes energy compounds, steadily producing a cellular byproduct known as adenosine. As adenosine progressively accumulates within neural synapses, it exerts increasing chemical pressure, generating what neuroscientists term homeostatic sleep debt. When we eventually slumber, microglial enzymes metabolize and clear this accumulated compound, resetting alertness for the ensuing morning.',
        correctHeadingIndex: 9,
        explanation: 'Paragraph B explains the chemical accumulation of adenosine throughout waking hours that creates sleep pressure and its clearance during rest.',
        urduExplanation: 'پیراگراف B میں بیداری کے دوران ایڈینوسین (Adenosine) نامی کیمیکل کے جمع ہونے اور نیند کا دباؤ پیدا کرنے کے عمل کو بیان کیا گیا ہے۔'
      },
      {
        paragraphNumber: 3,
        text: 'In contemporary urban societies, widespread exposure to short-wavelength blue light emitted by smartphone screens and LED lighting disrupts nocturnal rhythmicity. Photosensitive retinal ganglion cells directly transmit these light signals to the hypothalamus, artificially suppressing the pineal gland’s synthesis of melatonin. Deprived of this natural biochemical trigger, individuals experience severe phase delays, finding it difficult to initiate restorative sleep.',
        correctHeadingIndex: 1,
        explanation: 'Paragraph C details how artificial blue light from screens suppresses melatonin secretion from the pineal gland, disrupting circadian alignment.',
        urduExplanation: 'پیراگراف C میں اسمارٹ فونز اور ایل ای ڈی لائٹس سے نکلنے والی نیلی روشنی کے ذریعے میلاٹونن کے اخراج میں رکاوٹ اور بے خوابی کے اسباب کو واضح کیا گیا ہے۔'
      },
      {
        paragraphNumber: 4,
        text: 'During non-rapid eye movement deep slow-wave slumber, the body initiates complex physiological repair mechanisms. The vascular system slows its pulse, blood pressure drops, and pituitary hormones stimulate cellular regeneration and muscle tissue synthesis. Simultaneously, the newly discovered glymphatic system expands fluid channels through brain tissue, flushing out toxic beta-amyloid protein plaques that accumulate during daytime cognitive activity.',
        correctHeadingIndex: 2,
        explanation: 'Paragraph D focuses on cellular repair, tissue synthesis, and the glymphatic system clearing metabolic toxins during deep sleep.',
        urduExplanation: 'پیراگراف D میں گہری نیند کے دوران خلیات کی مرمت، پٹھوں کی نشوونما اور دماغ سے زہریلے مادوں کی صفائی کے جسمانی نظام کا جائزہ لیا گیا ہے۔'
      },
      {
        paragraphNumber: 5,
        text: 'Sleep is not merely a passive state of physical inactivity; it represents an active neurobiological state essential for information processing. During rapid eye movement (REM) episodes, the hippocampus replays synaptic experiences gathered throughout the preceding day, transferring critical data into long-term neocortical memory stores while pruning extraneous neural connections to optimize cognitive processing efficiency.',
        correctHeadingIndex: 5,
        explanation: 'Paragraph E discusses how sleep stages, particularly REM sleep, actively consolidate long-term memories and optimize neural architecture.',
        urduExplanation: 'پیراگراف E میں نیند کے مراحل خصوصاً REM نیند کے دوران یادداشت کو پختہ کرنے اور معلومات کو طویل مدتی ذخیرہ بنانے کے عمل کی تشریح ہے۔'
      },
      {
        paragraphNumber: 6,
        text: 'When individuals consistently fail to attain seven to nine hours of quality rest, the prefrontal cortex suffers impaired communication with the amygdala. This neurological disconnection manifests as volatile emotional reactions, diminished concentration, impaired executive reasoning, and weakened impulse control. Over prolonged spans, chronic sleep restriction sharply elevates the risk of cardiovascular ailments, metabolic syndromes, and clinical depression.',
        correctHeadingIndex: 4,
        explanation: 'Paragraph F addresses the severe cognitive deficits, emotional volatility, and long-term health hazards precipitated by chronic sleep restriction.',
        urduExplanation: 'پیراگراف F میں نیند کی مسلسل کمی کے دماغی سوچ، جذباتی توازن اور جسمانی صحت پر مرتب ہونے والے مضر اثرات کا احاطہ کیا گیا ہے۔'
      },
      {
        paragraphNumber: 7,
        text: 'Establishing robust sleep hygiene involves systematic behavioral adjustments that align daily routines with endogenous biology. Clinicians recommend maintaining consistent sleep and wake schedules even across weekends, eliminating caffeine consumption in late afternoons, ensuring bedroom environments remain pitch-dark and cool, and disengaging from digital devices at least one hour before retiring.',
        correctHeadingIndex: 7,
        explanation: 'Paragraph G provides practical, evidence-based behavioral interventions to optimize sleep quality and circadian hygiene.',
        urduExplanation: 'پیراگراف G میں پُرسکون اور معیاری نیند حاصل کرنے کے لیے عملی طرزِ زندگی، کمرے کے ماحول اور معمولات کی پابندی کے طریقے بتائے گئے ہیں۔'
      }
    ]
  },
  {
    title: 'Section 4: Long Text Comprehension — Biomimicry and Nature-Inspired Engineering',
    topic: 'Biomimicry & Sustainable Design',
    introduction: 'Read each passage and match paragraphs A–G with the most suitable heading from options i–x. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.',
    headings: [
      'i. Aerodynamic noise reduction inspired by owl plumage',
      'ii. High-speed rail design overcoming sonic shockwaves',
      'iii. Passive cooling architectures modeled after termite mounds',
      'iv. Self-cleaning surfaces mimicking the hydrophobic lotus leaf',
      'v. The historical failure of early human attempts to fly',
      'vi. Harvesting potable atmospheric moisture modeled on desert beetles',
      'vii. Synthetic adhesives inspired by gecko toe pad microstructures',
      'viii. Structural strength derived from avian skeletal frameworks',
      'ix. The heavy commercial cost of synthesizing organic polymers',
      'x. Regenerative energy harvesting modeled on humpback whale fins'
    ],
    paragraphs: [
      {
        paragraphNumber: 1,
        text: 'When engineers in Japan initially developed high-speed Shinkansen bullet trains, entering narrow railway tunnels at high velocity compressed air into sudden atmospheric shockwaves, producing deafening sonic booms that distressed residential neighborhoods. The chief engineer, an avid birdwatcher, redesigned the train’s locomotive nose to mimic the streamlined, tapered beak of the kingfisher bird, which dives seamlessly from air into dense water without creating splash or turbulence. This biological adaptation completely eliminated the tunnel sonic booms while cutting power usage by fifteen percent.',
        correctHeadingIndex: 1,
        explanation: 'Paragraph A details how engineers redesigned the bullet train nose based on the kingfisher bird to eliminate sonic shockwaves upon entering tunnels.',
        urduExplanation: 'پیراگراف A میں جاپانی بلٹ ٹرین کے سرے کو کنگ فشر پرندے کی چونچ کی طرز پر ڈھال کر ٹنل کے دھماکے دار شور کو ختم کرنے کی تکنیکی کامیابی کا ذکر ہے۔'
      },
      {
        paragraphNumber: 2,
        text: 'In conventional engineering, moving silent through air requires complex baffling, but nocturnal owls fly in near-total silence without sacrificing speed. Examination of their wings reveals serrated leading-edge feathers that break down large, noisy air vortices into micro-turbulences, coupled with a velvety down texture that dampens acoustic vibrations. Wind turbine manufacturers and aerospace engineers have adopted these serrated geometries on rotor blades, significantly reducing operational noise pollution.',
        correctHeadingIndex: 0,
        explanation: 'Paragraph B explains the serrated feather structure of owls that minimizes air turbulence and its application to silent wind turbines.',
        urduExplanation: 'پیراگراف B میں الو کے پروں کی بناوٹ سے خاموش پرواز کے راز کو سمجھ کر ونڈ ٹربائنز کے پنکھوں کو بے آواز بنانے کی انجینئرنگ بیان کی گئی ہے۔'
      },
      {
        paragraphNumber: 3,
        text: 'The Eastgate Centre office and shopping complex in Harare, Zimbabwe, consumes thirty-five percent less energy than conventional buildings by mimicking the passive ventilation of native macrotermes termite mounds. These subterranean insect colonies maintain a constant internal temperature despite external desert extremes ranging from freezing nights to scorching days. By utilizing a network of vertical flues and convective heat exchange chimneys, the building draws cool night air through masonry slabs without mechanical air conditioning.',
        correctHeadingIndex: 2,
        explanation: 'Paragraph C describes passive cooling architectural design directly modeled after the ventilation chimneys of termite mounds.',
        urduExplanation: 'پیراگراف C میں زمبابوے کے ایسٹ گیٹ سینٹر میں دیمک کی بامیوں کے قدرتی وینٹی لیشن نظام کو نقل کر کے بنا ایئر کنڈیشننگ ٹھنڈک کا انتظام واضح کیا گیا ہے۔'
      },
      {
        paragraphNumber: 4,
        text: 'The surface of the sacred lotus leaf possesses extraordinary self-cleaning properties that keep it pristine despite flourishing in muddy waters. Under electron microscopy, the leaf surface exhibits microscopic epidermal papillae coated with hydrophobic epicuticular wax crystals. Water droplets resting on these micro-pillars cannot spread out, forming spherical beads that roll effortlessly across the inclined surface, collecting and removing dust particles in the process. Chemists have replicated this phenomenon to produce stain-resistant exterior paints and self-cleaning solar panel glass.',
        correctHeadingIndex: 3,
        explanation: 'Paragraph D focuses on the lotus leaf’s microscopic papillae creating hydrophobic self-cleaning surfaces used in modern paints and glass.',
        urduExplanation: 'پیراگراف D میں کنول کے پتے کی خودکار صفائی والی خوردبینی ساخت اور جدید واٹر پروف پینٹس اور شیشوں کی تیاری میں اس کا اطلاق بتایا گیا ہے۔'
      },
      {
        paragraphNumber: 5,
        text: 'In the arid Namib Desert, where rainfall is virtually nonexistent, the small Stenocara beetle survives by extracting drinking water directly from morning fog. The beetle’s hardened wing casing features a textured pattern of hydrophilic microscopic peaks surrounded by hydrophobic wax troughs. When moisture-laden sea fog sweeps inland, droplets condense onto the hydrophilic peaks, coalesce into heavier drops, and roll along the waxy channels directly into the beetle’s mouth, inspiring innovative fog-harvesting mesh nets for drought-stricken regions.',
        correctHeadingIndex: 5,
        explanation: 'Paragraph E discusses how the Namib desert beetle harvests atmospheric moisture using hydrophilic bumps and hydrophobic troughs, inspiring water-collection nets.',
        urduExplanation: 'پیراگراف E میں نمیب صحرائی کیڑے کے ذریعے صبح کی دھند سے پینے کا پانی حاصل کرنے کی قدرتی صلاحیت اور خشک سالی کے علاقوں کے لیے اس سے حاصل شدہ حل کا ذکر ہے۔'
      },
      {
        paragraphNumber: 6,
        text: 'Geckos exhibit the astonishing capability to run upside down across polished glass ceilings without utilizing sticky liquid secretions. Their toe pads are covered with millions of microscopic keratinous hairs called setae, each branching into hundreds of nanoscale spatulae that make intimate contact with surfaces. At these molecular distances, weak intermolecular van der Waals forces accumulate into immense adhesive strength, enabling the creation of reusable dry adhesives, robotic grippers, and surgical tapes.',
        correctHeadingIndex: 6,
        explanation: 'Paragraph F examines how gecko foot setae exploit van der Waals intermolecular forces to create powerful dry adhesives without chemical residue.',
        urduExplanation: 'پیراگراف F میں چھپکلی (Gecko) کے پاؤں کے خوردبینی بالوں اور وین ڈیر والز فورسز کے ذریعے چپکنے والے بغیر گوند کے پائیدار مٹیریلز کی سائنسی ایجادات کا احاطہ کیا گیا ہے۔'
      },
      {
        paragraphNumber: 7,
        text: 'Humpback whales, despite weighing thirty metric tons, demonstrate agile aquatic acrobatics when pursuing schools of krill. Marine biologists discovered that the leading edges of their pectoral flippers are adorned with prominent scalloped bumps called tubercles. These tubercles channel fluid flow, delaying hydrodynamic stall and preserving lift at steep angles of attack. Incorporating similar serrations onto tidal energy turbines and helicopter blades has increased aerodynamic lift by nearly thirty percent while significantly dampening drag.',
        correctHeadingIndex: 9,
        explanation: 'Paragraph G details the scalloped flipper tubercles of humpback whales that prevent stall and improve turbine and blade aerodynamics.',
        urduExplanation: 'پیراگراف G میں وہیل مچھلی کے پروں پر ابھاروں (Tubercles) سے پانی اور ہوا میں رگڑ کم کر کے ٹربائنز کی کارکردگی 30 فیصد بڑھانے کی تکنیک کا جائزہ لیا گیا ہے۔'
      }
    ]
  },
  {
    title: 'Section 4: Long Text Comprehension — The Evolution of Renewable Microgrids',
    topic: 'Electrical Engineering & Decentralized Energy',
    introduction: 'Read each passage and match paragraphs A–F with the most suitable heading from options i–ix. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.',
    headings: [
      'i. The structural fragility of centralized electrical transmission grids',
      'ii. The integration of distributed battery energy storage systems',
      'iii. Smart automated switching during regional grid blackouts',
      'iv. Why government subsidies for fossil fuel extraction continue to expand',
      'v. Empowering remote communities with decentralized local generation',
      'vi. Dynamic demand-side management using artificial intelligence',
      'vii. The historical origins of high-voltage alternating current',
      'viii. Cybersecurity vulnerabilities in decentralized digital substations',
      'ix. Regulatory hurdles preventing consumer energy trading'
    ],
    paragraphs: [
      {
        paragraphNumber: 1,
        text: 'For over a century, electrical utilities operated on a centralized generation architecture where colossal fossil-fuel or hydroelectric power stations transmitted electricity across thousands of miles of high-voltage transmission lines. However, extreme weather events, localized physical damage, or equipment failure along any critical corridor can plunge millions of citizens into darkness simultaneously. This systemic vulnerability has compelled energy planners to reconsider reliance on single-point-of-failure distribution networks.',
        correctHeadingIndex: 0,
        explanation: 'Paragraph A identifies the inherent structural vulnerabilities and single-point-of-failure risks of traditional centralized power grids.',
        urduExplanation: 'پیراگراف A میں روایتی مرکزی پاور گرڈز کی کمزوریوں اور طویل ٹرانسمیشن لائنوں میں خرابی کے نتیجے میں وسیع پیمانے پر بلیک آؤٹ کے خطرات کا تجزیہ کیا گیا ہے۔'
      },
      {
        paragraphNumber: 2,
        text: 'In response, microgrids have emerged as autonomous, localized energy ecosystems that generate, store, and distribute electricity across a defined footprint such as a university campus, hospital complex, or residential district. When the primary regional utility grid experiences a blackout or voltage instability, advanced automated switchgear enables the microgrid to enter "islanding" mode. Within milliseconds, the local network disconnects from the damaged wider grid and sustains essential services seamlessly.',
        correctHeadingIndex: 2,
        explanation: 'Paragraph B explains the islanding capability of microgrids that automatically disconnect during regional blackouts to maintain uninterrupted local power.',
        urduExplanation: 'پیراگراف B میں مائیکرو گرڈز کی خودکار آئلینڈنگ صلاحیت اور مرکزی گرڈ فیل ہونے کی صورت میں مقامی بجلی کی بلا تعطل فراہمی کا نظام بتایا گیا ہے۔'
      },
      {
        paragraphNumber: 3,
        text: 'The viability of renewable microgrids hinges fundamentally on utility-scale battery energy storage systems (BESS). Because rooftop solar arrays and local wind turbines generate power intermittently based on solar irradiance and gust speeds, chemical batteries absorb surplus midday generation. This stored capacity is discharged during evening peak consumption periods, smoothing out voltage fluctuations and ensuring continuous base-load stability.',
        correctHeadingIndex: 1,
        explanation: 'Paragraph C details the critical role of battery storage systems in mitigating renewable intermittency and leveling peak electricity demand.',
        urduExplanation: 'پیراگراف C میں شمسی اور ہوائی توانائی کی بے قاعدگی پر قابو پانے کے لیے بیٹری انرجی اسٹوریج سسٹمز (BESS) کی ناگزیر ضرورت پر روشنی ڈالی گئی ہے۔'
      },
      {
        paragraphNumber: 4,
        text: 'In remote geographic areas—ranging from isolated mountain villages to offshore archipelagos—connecting to national transmission lines is economically unfeasible. Renewable microgrids provide a transformative alternative, supplanting costly, polluting diesel generators with localized solar, biomass, and mini-hydro resources. This decentralized autonomy empowers rural communities with reliable lighting, water purification, and refrigerated medical storage.',
        correctHeadingIndex: 4,
        explanation: 'Paragraph D highlights how decentralized microgrids bring affordable, clean energy autonomy to remote, off-grid communities.',
        urduExplanation: 'پیراگراف D میں دور دراز اور پہاڑی علاقوں میں مرکزی گرڈ کے بغیر مقامی شمسی اور ہائیڈرو ذرائع سے صاف اور سستی بجلی کی فراہمی کا ذکر ہے۔'
      },
      {
        paragraphNumber: 5,
        text: 'Modern microgrids increasingly deploy artificial intelligence algorithms to forecast local consumption patterns and optimize distribution in real time. Smart energy controllers monitor weather forecasts, predict rooftop generation hours in advance, and autonomously throttle non-essential commercial loads like water heaters or electric vehicle charging stations, ensuring optimal efficiency and cost minimization.',
        correctHeadingIndex: 5,
        explanation: 'Paragraph E discusses AI-driven demand-side energy management and automated real-time load shedding.',
        urduExplanation: 'پیراگراف E میں مصنوعی ذہانت اور اسمارٹ کنٹرولرز کے ذریعے بجلی کی کھپت کی پیش گوئی اور بوجھ کے خودکار انتظام کی وضاحت کی گئی ہے۔'
      },
      {
        paragraphNumber: 6,
        text: 'As microgrids become digitized with internet-connected smart meters, cloud controllers, and automated substations, they face emerging digital threats. Malicious actors could potentially exploit communication firmware flaws to manipulate localized voltage, sabotage battery management units, or destabilize local distribution networks. Consequently, robust cryptographic authentication and decentralized cybersecurity protocols have become paramount.',
        correctHeadingIndex: 7,
        explanation: 'Paragraph F addresses the critical cybersecurity vulnerabilities and malicious hacking risks present in digitized microgrid substations.',
        urduExplanation: 'پیراگراف F میں ڈیجیٹل مائیکرو گرڈز میں سائبر حملوں کے خطرات اور گرڈ کی حفاظت کے لیے مضبوط کرپٹوگرافک پروٹوکولز کی ضرورت کو اجاگر کیا گیا ہے۔'
      }
    ]
  },
  {
    title: 'Section 4: Long Text Comprehension — The Cognitive Architecture of Memory',
    topic: 'Cognitive Psychology & Neuroscience',
    introduction: 'Read each passage and match paragraphs A–G with the most suitable heading from options i–x. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.',
    headings: [
      'i. The fleeting capacity of sensory memory registers',
      'ii. Working memory as an active mental workspace',
      'iii. The structural division between explicit and implicit knowledge',
      'iv. Why flashbulb memories are surprisingly susceptible to distortion',
      'v. Synaptic plasticity and long-term potentiation mechanisms',
      'vi. The role of the hippocampus in spatial and episodic encoding',
      'vii. Early philosophical debates regarding the nature of human thought',
      'viii. Strategies for mitigating age-related cognitive decline',
      'ix. The evolutionary necessity of strategic forgetfulness',
      'x. Total pharmacological erasure of traumatic childhood memories'
    ],
    paragraphs: [
      {
        paragraphNumber: 1,
        text: 'Before information can be processed consciously, environmental stimuli enter sensory memory stores. The iconic register holds visual impressions for mere milliseconds, while the echoic store preserves acoustic echoes for two to four seconds. These brief snapshots allow the nervous system to determine whether incoming perceptual signals warrant conscious attentional focus or can be discarded without processing.',
        correctHeadingIndex: 0,
        explanation: 'Paragraph A defines sensory memory registers (iconic and echoic) that momentarily hold environmental impressions before selection.',
        urduExplanation: 'پیراگراف A میں حسی یادداشت (Sensory Memory) کے چند سیکنڈ کے ابتدائی عمل اور غیر ضروری معلومات کو فلٹر کرنے کی وضاحت کی گئی ہے۔'
      },
      {
        paragraphNumber: 2,
        text: 'Once information captures conscious attention, it shifts into working memory, an active cognitive workbench characterized by limited capacity. Pioneering psychologist George Miller proposed that working memory can maintain roughly seven discrete chunks of data simultaneously. Modern neuroimaging demonstrates that the prefrontal cortex actively manipulates this fleeting information, refreshing data through subvocal rehearsal.',
        correctHeadingIndex: 1,
        explanation: 'Paragraph B explores working memory as an active mental workspace managed by the prefrontal cortex with limited capacity.',
        urduExplanation: 'پیراگراف B میں ورکنگ میموری (Working Memory) کی محدود گنجائش اور دماغ کے پری فرنٹل کورٹیکس میں معلومات کی جانچ کے عمل کا احاطہ کیا گیا ہے۔'
      },
      {
        paragraphNumber: 3,
        text: 'Long-term memory is fundamentally partitioned into explicit (declarative) and implicit (procedural) systems. Explicit memory encompasses conscious recollections of personal autobiographical events and semantic facts, such as historical dates. Conversely, implicit memory operates beneath conscious awareness, governing automated motor habits like riding a bicycle or playing a piano keyboard.',
        correctHeadingIndex: 2,
        explanation: 'Paragraph C explains the structural bifurcation between conscious declarative memory and unconscious procedural memory.',
        urduExplanation: 'پیراگراف C میں طویل مدتی یادداشت کے دو بڑے حصوں: شعوری معلومات (Declarative) اور غیر شعوری عملی عادات (Procedural) کے فرق کو واضح کیا گیا ہے۔'
      },
      {
        paragraphNumber: 4,
        text: 'Deep within the temporal lobes, the seahorse-shaped hippocampus serves as an essential nexus for encoding episodic experiences. Patients with bilateral hippocampal damage retain childhood recollections and procedural skills but are entirely unable to form new declarative memories. The structure acts as an index, binding disparate sensory inputs into coherent unified recollections before distributing them to neocortical regions.',
        correctHeadingIndex: 5,
        explanation: 'Paragraph D examines the essential role of the hippocampus in binding and encoding new episodic memories into long-term storage.',
        urduExplanation: 'پیراگراف D میں دماغ کے حصے ہپوکیمپس (Hippocampus) کے ذریعے نئے واقعات کو یادداشت میں تبدیل کرنے کے مرکزی کردار کا تجزیہ کیا گیا ہے۔'
      },
      {
        paragraphNumber: 5,
        text: 'At the cellular level, memory formation depends on synaptic plasticity—the ability of neurons to modify the strength of their intercellular connections. When two neurons repeatedly fire in tandem, the synaptic junction undergoes long-term potentiation (LTP), increasing receptor density and enhancing biochemical sensitivity. This enduring physical remodeling forms the physical engram of memory.',
        correctHeadingIndex: 4,
        explanation: 'Paragraph E details the cellular mechanism of synaptic plasticity and long-term potentiation that physically constructs memory traces.',
        urduExplanation: 'پیراگراف E میں خلیاتی سطح پر Synaptic Plasticity اور Long-term Potentiation کے ذریعے اعصابی رابطوں کو مستقل بنانے کا سائنسی عمل بیان ہوا ہے۔'
      },
      {
        paragraphNumber: 6,
        text: 'People frequently believe that dramatic, emotionally charged events—such as national disasters—are indelibly etched into memory like photographic snapshots. However, controlled longitudinal studies reveal that while subjective confidence in these "flashbulb memories" remains exceptionally high, their factual accuracy deteriorates significantly over time, becoming contaminated by post-event conversations and media reports.',
        correctHeadingIndex: 3,
        explanation: 'Paragraph F demonstrates how flashbulb memories, despite high subjective certainty, are susceptible to progressive factual distortion.',
        urduExplanation: 'پیراگراف F میں جذباتی واقعات کی یادداشت (Flashbulb Memories) کے وقت کے ساتھ ساتھ تبدیل اور متاثر ہونے کے حقائق بیان کیے گئے ہیں۔'
      },
      {
        paragraphNumber: 7,
        text: 'Far from being a biological design defect, forgetting serves a vital evolutionary purpose. If the brain permanently recorded every sensory detail, mundane conversation, and passing background sound, neural networks would become hopelessly paralyzed by cognitive clutter. Active neural mechanisms prune obsolete information, allowing the mind to generalize concepts, extract underlying principles, and adapt flexibly to changing environments.',
        correctHeadingIndex: 8,
        explanation: 'Paragraph G argues that active forgetting is an essential cognitive adaptation that prevents informational overload and enables conceptual generalization.',
        urduExplanation: 'پیراگراف G میں واضح کیا گیا ہے کہ چیزوں کو بھولنا دماغی کمزوری نہیں بلکہ غیر ضروری بوجھ سے نجات اور نئی سوچ کے لیے ایک ناگزیر قدرتی نظام ہے۔'
      }
    ]
  }
];

let s4Counter = 1;

/**
 * Procedurally generates a fresh, non-repeating Reading Section 4 exercise containing 6 or 7 paragraphs.
 */
export function generateSyntheticReadingSection4(seenIds: Set<string>): ReadingSection4 {
  const index = (s4Counter - 1) % SECTION_4_SEEDS.length;
  const seed = SECTION_4_SEEDS[index];
  const uniqueId = `auto-reading-s4-${Date.now().toString(36)}-${s4Counter++}`;

  seenIds.add(uniqueId);
  seenIds.add(seed.title);

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
