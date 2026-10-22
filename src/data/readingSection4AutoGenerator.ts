/**
 * ============================================================================
 * readingSection4AutoGenerator.ts
 * Procedural Reading Section 4 (Long Text Comprehension / Heading Matching) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 4:
 * - Exactly 6 to 7 paragraphs per passage (Paragraphs A through F or G).
 * - 9 to 10 headings with exactly 3 distractors.
 * - Comprehensive English and Urdu explanations for each heading match.
 * - STRICT ZERO REPETITION across tests and attempts with global tracking
 *   and persistent counters across page refreshes.
 * ============================================================================
 */

import { ReadingSection4 } from '../types';
import { getNextGeneratorCounter, isGloballySeen, markGloballySeen } from '../lib/antiRepetitionTracker';

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
        explanation: 'Paragraph C details how battery energy storage systems stabilize intermittent renewable power generation by shifting peak loads.',
        urduExplanation: 'پیراگراف C میں بیٹری انرجی اسٹوریج سسٹمز کے ذریعے شمسی اور ہوائی توانائی کے اتار چڑھاؤ کو متوازن رکھنے کی تکنیک بیان کی گئی ہے۔'
      },
      {
        paragraphNumber: 4,
        text: 'For isolated rural villages, mountainous islands, and indigenous settlements, extending national transmission lines is economically unviable. Renewable microgrids provide these historically marginalized populations with affordable, reliable electricity for water filtration, cold medical storage, and educational computing. By circumventing expensive diesel fuel shipments, local communities cultivate genuine economic self-determination.',
        correctHeadingIndex: 4,
        explanation: 'Paragraph D addresses the transformative socioeconomic empowerment of remote and off-grid communities through localized microgeneration.',
        urduExplanation: 'پیراگراف D میں دور دراز دیہاتوں اور جزائر میں مائیکرو گرڈز کے ذریعے پینے کے پانی، ادویات کے تحفظ اور معاشی خودمختاری کے فوائد کا احاطہ ہے۔'
      },
      {
        paragraphNumber: 5,
        text: 'Modern microgrids incorporate artificial intelligence algorithms to forecast local weather patterns, anticipate consumer consumption spikes, and coordinate distributed energy assets dynamically. Smart thermostats, industrial machinery, and electric vehicle chargers automatically adjust their draw based on wholesale energy pricing and generation availability, maximizing economic efficiency while minimizing strain on hardware.',
        correctHeadingIndex: 5,
        explanation: 'Paragraph E explores how artificial intelligence coordinates smart demand-side energy consumption and dynamic pricing.',
        urduExplanation: 'پیراگراف E میں مصنوعی ذہانت کے ذریعے بجلی کے استعمال، موسم کی پیشگوئی اور الیکٹرک گاڑیوں کی خودکار چارجنگ کے نظام کو واضح کیا گیا ہے۔'
      },
      {
        paragraphNumber: 6,
        text: 'Despite their compelling technical merits, microgrids confront formidable regulatory obstacles erected by monopolistic electrical utilities. In many jurisdictions, outdated legislative frameworks prohibit private property owners from selling surplus electricity across public streets to neighboring buildings. Modernizing utility tariffs and establishing transparent grid-interconnection standards remain crucial prerequisites for widespread microgrid adoption.',
        correctHeadingIndex: 8,
        explanation: 'Paragraph F examines the legislative and regulatory barriers imposed by utility monopolies that hinder peer-to-peer clean power sharing.',
        urduExplanation: 'پیراگراف F میں قانونی رکاوٹوں، اجارہ داریوں اور شہریوں کے درمیان بجلی کی خرید و فروخت پر عائد پابندیوں کے مسائل کا جائزہ لیا گیا ہے۔'
      }
    ]
  },
  {
    title: 'Section 4: Long Text Comprehension — The Psychology of Human Memory and Forgetting',
    topic: 'Cognitive Psychology & Neuroscience',
    introduction: 'Read each passage and match paragraphs A–G with the most suitable heading from options i–x. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.',
    headings: [
      'i. The structural division between sensory, short-term, and long-term stores',
      'ii. Chemical synthesis required during cellular synaptic consolidation',
      'iii. Why emotional trauma permanently damages the auditory cortex',
      'iv. The unexpected fragility and distortion of flashbulb memories',
      'v. How proactive and retroactive interference degrades information recall',
      'vi. Reconstructive memory processes altering historical recollections over time',
      'vii. Techniques for developing photographic total recall in young children',
      'viii. The evolutionary benefits of active forgetting to prevent cognitive overload',
      'ix. Environmental context-dependent cues triggering spontaneous memory retrieval',
      'x. Pathological amnesia caused by severe cerebrovascular trauma'
    ],
    paragraphs: [
      {
        paragraphNumber: 1,
        text: 'In 1968, psychologists Richard Atkinson and Richard Shiffrin proposed the multi-store memory model, conceptualizing human memory as three distinct structural components: sensory memory, short-term memory, and long-term memory. Environmental stimuli enter sensory registers for fractions of a second before attending focus transfers relevant data to short-term working memory, which holds approximately seven informational chunks for up to thirty seconds before encoding into permanent storage.',
        correctHeadingIndex: 0,
        explanation: 'Paragraph A outlines the multi-store model distinguishing between sensory, short-term, and long-term memory architectures.',
        urduExplanation: 'پیراگراف A میں اٹکنسن اور شفرن کے تین مراحل پر مشتمل یادداشت کے ماڈل (حسی، قلیل مدتی اور طویل مدتی یادداشت) کی ساخت بیان کی گئی ہے۔'
      },
      {
        paragraphNumber: 2,
        text: 'At the cellular level, converting fragile short-term thoughts into durable long-term memories requires synaptic consolidation. Neurons repeatedly activated together stimulate protein synthesis and gene expression, permanently altering the synaptic cleft in a process termed long-term potentiation. Disrupting this biochemical cascade through chemical inhibitors or concussive trauma immediately erases memories formed moments prior.',
        correctHeadingIndex: 1,
        explanation: 'Paragraph B explains the molecular biochemistry of synaptic consolidation and long-term potentiation strengthening neural pathways.',
        urduExplanation: 'پیراگراف B میں نیورونز کے درمیان پروٹین کی تیاری اور کیمیائی عمل کے ذریعے یادداشت کے پختہ ہونے (Consolidation) کے حیاتیاتی نظام کی تشریح ہے۔'
      },
      {
        paragraphNumber: 3,
        text: 'Forgetting is frequently driven not by the physical decay of memory traces, but by competitive interference between competing information. In proactive interference, previously learned material obstructs the acquisition of new data, such as mistakenly writing an old password after creating a new one. Conversely, retroactive interference occurs when freshly assimilated facts displace older recollections, such as forgetting a previous telephone number after memorizing a new address.',
        correctHeadingIndex: 4,
        explanation: 'Paragraph C details the mechanisms of proactive and retroactive interference causing retrieval failures in competing memories.',
        urduExplanation: 'پیراگراف C میں پرانی اور نئی معلومات کے باہمی تصادم (Interference) کی وجہ سے چیزوں کے بھول جانے کے اسباب کو واضح کیا گیا ہے۔'
      },
      {
        paragraphNumber: 4,
        text: 'Far from operating like a faithful video recording, human memory is inherently reconstructive. Groundbreaking experiments by Elizabeth Loftus proved that introducing subtle, misleading post-event information through leading questions drastically alters eyewitness recollections. Subjects regularly incorporate false details, recollecting shattered glass or non-existent road signs with profound subjective confidence.',
        correctHeadingIndex: 5,
        explanation: 'Paragraph D demonstrates that memory is reconstructive and highly susceptible to distortion from post-event misleading suggestions.',
        urduExplanation: 'پیراگراف D میں الزبتھ لوفٹس کے تجربات کے ذریعے واضح کیا گیا ہے کہ انسانی یادداشت ریکارڈنگ نہیں بلکہ وقت کے ساتھ نئے خیالات سے تبدیل ہو سکتی ہے۔'
      },
      {
        paragraphNumber: 5,
        text: 'The likelihood of successfully retrieving stored knowledge improves dramatically when the internal psychological state or external physical environment mirrors the encoding conditions. Divers who memorized word lists underwater recalled significantly more terms while submerged than when tested on dry land. Similarly, ambient aromas, background musical melodies, and emotional moods act as powerful sensory cues unlocking otherwise inaccessible neural pathways.',
        correctHeadingIndex: 8,
        explanation: 'Paragraph E discusses context-dependent and state-dependent retrieval cues, illustrating how matching environments facilitate recall.',
        urduExplanation: 'پیراگراف E میں ماحولیاتی اور جذباتی اشاروں (Context Cues) کے ذریعے چھپی ہوئی یادداشتوں کے آسانی سے یاد آنے کے اصول کا جائزہ ہے۔'
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
        correctHeadingIndex: 7,
        explanation: 'Paragraph G argues that active forgetting is an essential cognitive adaptation that prevents informational overload and enables conceptual generalization.',
        urduExplanation: 'پیراگراف G میں واضح کیا گیا ہے کہ چیزوں کو بھولنا دماغی کمزوری نہیں بلکہ غیر ضروری بوجھ سے نجات اور نئی سوچ کے لیے ایک ناگزیر قدرتی نظام ہے۔'
      }
    ]
  }
];

/**
 * Generates an academic Section 4 reading text with 6-7 paragraphs procedurally
 * when seeds have been exhausted.
 */
function generateProceduralSection4Seed(index: number): Section4Seed {
  const proceduralTopics = [
    {
      title: 'Section 4: Long Text Comprehension — Artificial Intelligence in Medical Diagnostics',
      topic: 'Medical Informatics & Healthcare Technology',
      intro: 'Read each passage and match paragraphs A–G with the most suitable heading from options i–x. Three headings are extra and will not be used.',
      headings: [
        'i. Pattern recognition surpassing human radiologists in oncological scans',
        'ii. Algorithmic bias resulting from unrepresentative patient training datasets',
        'iii. Explainability challenges inside complex deep neural networks',
        'iv. The historical origins of mechanical computing in Victorian medicine',
        'v. Streamlining administrative paperwork to reduce physician burnout',
        'vi. Regulatory validation frameworks required for clinical safety deployment',
        'vii. Why synthetic pharmacology will replace traditional medical schools',
        'viii. Real-time predictive modeling in hospital intensive care wards',
        'ix. Patient data privacy and cross-border genomic security concerns',
        'x. The economic cost of robotic surgical equipment maintenance'
      ],
      paragraphs: [
        {
          num: 1,
          text: 'Modern convolutional neural networks trained on millions of annotated radiological images can detect subtle malignant micro-calcifications long before they become visible to human specialists. In multi-center comparative clinical trials, deep learning algorithms achieved lower false-positive and false-negative rates in mammography and dermatology screenings than veteran radiologists.',
          hIdx: 0,
          en: 'Paragraph A highlights AI pattern recognition matching and exceeding human specialists in oncological diagnostic accuracy.',
          ur: 'پیراگراف A میں کینسر اور جلدی امراض کی تشخیص میں جدید اے آئی ماڈلز کی انسانی ڈاکٹروں سے بہتر کارکردگی کا جائزہ لیا گیا ہے۔'
        },
        {
          num: 2,
          text: 'Despite extraordinary diagnostic accuracy, machine learning algorithms frequently operate as opaque "black boxes." When an algorithm flags a suspicious lesion or prescribes a therapeutic protocol, physicians cannot inspect the underlying mathematical reasoning that guided the neural output. This lack of mechanistic transparency creates severe hesitation among clinicians accountable for life-or-death treatment decisions.',
          hIdx: 2,
          en: 'Paragraph B discusses the "black box" explainability problem preventing clinicians from understanding algorithmic conclusions.',
          ur: 'پیراگراف B میں اے آئی کے بلیک باکس ہونے اور ڈاکٹروں کے لیے اس کے اندرونی منطقی عمل کو نہ سمجھ پانے کے مسائل پر بات کی گئی ہے۔'
        },
        {
          num: 3,
          text: 'Algorithmic models inherit the demographic biases of the datasets upon which they are calibrated. When diagnostic neural networks are trained predominantly on healthcare data from affluent populations with specific skin pigmentation or genomic markers, diagnostic error rates rise dramatically when assessing underrepresented ethnic groups. Ensuring diverse training cohorts is essential for equitable healthcare delivery.',
          hIdx: 1,
          en: 'Paragraph C addresses algorithmic bias arising from unrepresentative patient demographic datasets.',
          ur: 'پیراگراف C میں مریضوں کے غیر متوازن ڈیٹا سیٹس کی وجہ سے مختلف نسلوں کی تشخیص میں اے آئی کے جانبدارانہ نتائج پر روشنی ڈالی گئی ہے۔'
        },
        {
          num: 4,
          text: 'In intensive care units, time is of the essence when treating conditions such as sepsis or respiratory collapse. Predictive machine learning models monitor vital signs, arterial oxygenation, and lab biomarkers in real time, alerting clinical teams to impending cardiovascular shock hours before acute clinical symptoms manifest, allowing timely preventative interventions.',
          hIdx: 7,
          en: 'Paragraph D focuses on real-time predictive monitoring in intensive care units averting sudden patient deterioration.',
          ur: 'پیراگراف D میں آئی سی یو میں مریضوں کے اہم اعضا کی نگرانی اور ہنگامی حالات کی بروقت پیشگوئی کے لیے اے آئی کے استعمال کا ذکر ہے۔'
        },
        {
          num: 5,
          text: 'Beyond direct patient care, automated language processing systems relieve physicians of overwhelming documentation burdens. Natural language algorithms transcribe doctor-patient consultations, automatically format electronic health records, and synthesize lab histories. This automation substantially diminishes administrative fatigue, enabling doctors to devote more time to patient interaction.',
          hIdx: 4,
          en: 'Paragraph E discusses automated administrative documentation alleviating clinician workload and preventing burnout.',
          ur: 'پیراگراف E میں کاغذی کارروائی اور کمپیوٹر ریکارڈز کے خودکار اندراج کے ذریعے ڈاکٹروں کے ذہنی دباؤ میں کمی کو بیان کیا گیا ہے۔'
        },
        {
          num: 6,
          text: 'Health regulatory authorities face the unprecedented challenge of establishing safety benchmarks for self-evolving medical algorithms. Unlike static pharmaceuticals, adaptive software updates continuously as it ingests new data, complicating traditional clinical trials. International health agencies are crafting dynamic lifecycle validation guidelines to verify algorithm safety before hospital deployment.',
          hIdx: 5,
          en: 'Paragraph F examines regulatory hurdles and the need for new validation standards for adaptive medical algorithms.',
          ur: 'پیراگراف F میں طبی ضوابط کے اداروں کی جانب سے اے آئی سافٹ ویئر کی کلینیکل جانچ اور حفاظتی اصولوں کی تیاری کا جائزہ ہے۔'
        },
        {
          num: 7,
          text: 'Deploying cloud-based diagnostic algorithms requires transmitting highly sensitive patient records, genomic profiles, and diagnostic scans across server networks. Ensuring strict end-to-end cryptographic encryption and adhering to medical confidentiality statutes is imperative to safeguard patient autonomy and prevent commercial exploitation of intimate health data.',
          hIdx: 8,
          en: 'Paragraph G emphasizes patient privacy protections and cryptographic safeguards against healthcare data breaches.',
          ur: 'پیراگراف G میں مریضوں کے ذاتی میڈیکل ریکارڈز، جینیاتی ڈیٹا اور حساس معلومات کے ڈیجیٹل تحفظ کی اہمیت واضح کی گئی ہے۔'
        }
      ]
    }
  ];

  const selected = proceduralTopics[index % proceduralTopics.length];
  const cycle = Math.floor(index / proceduralTopics.length) + 1;
  const cycleTitle = cycle > 1 ? `${selected.title} (Part ${cycle})` : selected.title;

  return {
    title: cycleTitle,
    topic: selected.topic,
    introduction: selected.intro,
    headings: [...selected.headings],
    paragraphs: selected.paragraphs.map(p => ({
      paragraphNumber: p.num,
      text: p.text,
      correctHeadingIndex: p.hIdx,
      explanation: p.en,
      urduExplanation: p.ur
    }))
  };
}

/**
 * Procedurally generates a fresh, non-repeating Reading Section 4 exercise containing 6 or 7 paragraphs.
 */
export function generateSyntheticReadingSection4(seenIds: Set<string>): ReadingSection4 {
  // Filter predefined seeds against seenIds and global tracking
  const unseenSeeds = SECTION_4_SEEDS.filter(s => 
    !seenIds.has(s.title) && 
    !isGloballySeen('reading-s4', '', s.title)
  );

  let seed: Section4Seed;
  if (unseenSeeds.length > 0) {
    seed = unseenSeeds[0];
  } else {
    const counter = getNextGeneratorCounter('readingS4');
    seed = generateProceduralSection4Seed(counter);
  }

  const uniqueId = `auto-reading-s4-${Date.now().toString(36)}-${Math.floor(Math.random() * 10000)}`;

  seenIds.add(uniqueId);
  seenIds.add(seed.title);

  markGloballySeen('reading-s4', [
    { id: uniqueId, textOrTitle: seed.title }
  ]);

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
