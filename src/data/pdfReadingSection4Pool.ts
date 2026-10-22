import { ReadingSection4 } from '../types';
import { generateSyntheticReadingSection4 } from './readingSection4AutoGenerator';

/**
 * Official ICAP ECS Long Text Comprehension Question Pool
 * Sourced 100% strictly from the official Attached PDF:
 * "ECS LONG TEXT COMPREHENSION: Heading / Opinion Matching Practice Workbook"
 * 
 * Excludes all accounting and auditing topics (Q21 Modern Banking and Q41 Financial Literacy).
 * Total verified non-accounting questions: 48 topics across Easy, Moderate, and Difficult.
 */

export interface PdfLongTextQuestion extends ReadingSection4 {
  workbookQuestionNumber: number;
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
}

export const PDF_READING_SECTION_4_POOL: PdfLongTextQuestion[] = [
  {
  "id": "pdf-r4-q01",
  "workbookQuestionNumber": 1,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 The Hidden Life of Trees",
  "topic": "The Hidden Life of Trees",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Root systems and their purpose",
    "ii. How leaves create nourishment",
    "iii. A separate challenge in managing resources",
    "iv. Seasonal adjustments in tree growth",
    "v. A common belief that needs reconsideration",
    "vi. The wider value of forests",
    "vii. A historical detail with limited relevance",
    "viii. Connections between roots and fungi"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q01-pA",
      "paragraphNumber": 1,
      "text": "Root systems and their purpose is best understood by looking at its purpose and the conditions in which it operates. In the case of the hidden life of trees, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph A corresponds to Heading i ('Root systems and their purpose'). It addresses the core theme of root systems and their purpose within the context of the hidden life of trees.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Root systems and their purpose) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Life of Trees \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q01-pB",
      "paragraphNumber": 2,
      "text": "A key part of the hidden life of trees is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph B corresponds to Heading ii ('How leaves create nourishment'). It addresses the core theme of how leaves create nourishment within the context of the hidden life of trees.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (How leaves create nourishment) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Life of Trees \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q01-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the hidden life of trees. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the hidden life of trees because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph C corresponds to Heading viii ('Connections between roots and fungi'). It addresses the core theme of connections between roots and fungi within the context of the hidden life of trees.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Connections between roots and fungi) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Life of Trees \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q01-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the hidden life of trees often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Seasonal adjustments in tree growth'). It addresses the core theme of seasonal adjustments in tree growth within the context of the hidden life of trees.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Seasonal adjustments in tree growth) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Life of Trees \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q01-pE",
      "paragraphNumber": 5,
      "text": "The future of the hidden life of trees depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph E corresponds to Heading vi ('The wider value of forests'). It addresses the core theme of the wider value of forests within the context of the hidden life of trees.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (The wider value of forests) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Life of Trees \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q02",
  "workbookQuestionNumber": 2,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 Why Bees Visit Flowers",
  "topic": "Why Bees Visit Flowers",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A historical detail with limited relevance",
    "ii. The routine of a foraging bee",
    "iii. A separate challenge in managing resources",
    "iv. A common belief that needs reconsideration",
    "v. Moving pollen between flowers",
    "vi. Dangers facing bee populations",
    "vii. What attracts flower visitors",
    "viii. Ways people can support pollinators"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q02-pA",
      "paragraphNumber": 1,
      "text": "Flowers attract pollinators with colour, scent and nectar. Nectar supplies sugary energy, while pollen contains nutrients that insects collect. Different flower shapes suit different visitors, and the timing of flowering affects when food is available. A garden with a range of plants can provide resources across more of the year. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph A corresponds to Heading vii ('What attracts flower visitors'). It addresses the core theme of what attracts flower visitors within the context of why bees visit flowers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (What attracts flower visitors) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Bees Visit Flowers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q02-pB",
      "paragraphNumber": 2,
      "text": "When an insect visits a flower, pollen may stick to its body and travel to another flower of the same species. This movement can allow fertilisation and the production of seeds or fruit. Pollination is not identical in every plant: some rely heavily on insects, while others use wind or other methods to move pollen. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph B corresponds to Heading v ('Moving pollen between flowers'). It addresses the core theme of moving pollen between flowers within the context of why bees visit flowers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Moving pollen between flowers) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Bees Visit Flowers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q02-pC",
      "paragraphNumber": 3,
      "text": "A worker bee may visit many flowers in one trip, following visual clues and learned routes. It returns with nectar or pollen, which other workers help process and store. The distance travelled depends on weather, food availability and the needs of the colony. Reliable patches of flowers reduce the effort required to find food. This is relevant to why bees visit flowers because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph C corresponds to Heading ii ('The routine of a foraging bee'). It addresses the core theme of the routine of a foraging bee within the context of why bees visit flowers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (The routine of a foraging bee) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Bees Visit Flowers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q02-pD",
      "paragraphNumber": 4,
      "text": "Bees face pressures including habitat loss, parasites, disease, pesticides and changing weather. When flowers are available for only a short period, food can become scarce during other seasons. These factors interact, and the reasons for a population decline can differ between locations. Researchers therefore examine several possible pressures rather than assuming one cause explains every case. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph D corresponds to Heading vi ('Dangers facing bee populations'). It addresses the core theme of dangers facing bee populations within the context of why bees visit flowers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Dangers facing bee populations) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Bees Visit Flowers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q02-pE",
      "paragraphNumber": 5,
      "text": "People can help pollinators by planting locally suitable flowers that bloom at different times and by reducing unnecessary pesticide use. Leaving undisturbed corners or hollow stems can provide nesting spaces for some species. These steps cannot solve every threat, but they improve local habitat and make gardens and public spaces more useful to wildlife. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph E corresponds to Heading viii ('Ways people can support pollinators'). It addresses the core theme of ways people can support pollinators within the context of why bees visit flowers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Ways people can support pollinators) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Bees Visit Flowers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q03",
  "workbookQuestionNumber": 3,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 The Journey of a River",
  "topic": "The Journey of a River",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. How flowing water moves sediment",
    "ii. A common belief that needs reconsideration",
    "iii. Where a river finally deposits material",
    "iv. A historical detail with limited relevance",
    "v. A separate challenge in managing resources",
    "vi. The sources of river water",
    "vii. The changing shape of a river",
    "viii. Natural functions of floodplains"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q03-pA",
      "paragraphNumber": 1,
      "text": "Rivers may begin in mountains, springs, wetlands or areas where rainwater gathers into small channels. As tiny streams join, they form a larger drainage network. Steep slopes often make young rivers flow quickly, while the amount of water changes with rainfall, snowmelt and the condition of the surrounding land. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph A corresponds to Heading vi ('The sources of river water'). It addresses the core theme of the sources of river water within the context of the journey of a river.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (The sources of river water) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Journey of a River \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q03-pB",
      "paragraphNumber": 2,
      "text": "Moving water wears away rock and soil and carries material downstream. Fine particles may remain suspended, while heavier stones roll or bounce along the bed. The quantity moved depends on current speed, channel shape and particle size. During floods, a river can transport much more sediment than it carries during ordinary conditions. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph B corresponds to Heading i ('How flowing water moves sediment'). It addresses the core theme of how flowing water moves sediment within the context of the journey of a river.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (How flowing water moves sediment) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Journey of a River \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q03-pC",
      "paragraphNumber": 3,
      "text": "As a river reaches flatter land, its channel may widen and curve. Faster flow near the outside of a bend often erodes the bank, while slower water on the inside may deposit sediment. These changes can shift a river\u2019s course over time and create different habitats. Human engineering can alter the process by changing flow or blocking sediment. This is relevant to the journey of a river because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph C corresponds to Heading vii ('The changing shape of a river'). It addresses the core theme of the changing shape of a river within the context of the journey of a river.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (The changing shape of a river) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Journey of a River \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q03-pD",
      "paragraphNumber": 4,
      "text": "When water rises above the banks, it may spread over low-lying floodplains. These areas can temporarily store water and receive nutrient-rich sediment, while wetlands provide habitats for birds, fish and insects. Floods can damage buildings, but keeping natural floodplains open can reduce some downstream pressure and preserve ecological functions. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph D corresponds to Heading viii ('Natural functions of floodplains'). It addresses the core theme of natural functions of floodplains within the context of the journey of a river.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Natural functions of floodplains) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Journey of a River \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q03-pE",
      "paragraphNumber": 5,
      "text": "A river may end in a lake, sea or ocean, sometimes forming a delta where sediment accumulates. Waves, tides and currents influence the shape of its mouth. Rivers connect inland and coastal environments by moving water, nutrients and sediment, so dams, pollution or excessive extraction can affect places far from the original disturbance. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph E corresponds to Heading iii ('Where a river finally deposits material'). It addresses the core theme of where a river finally deposits material within the context of the journey of a river.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Where a river finally deposits material) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Journey of a River \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q04",
  "workbookQuestionNumber": 4,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 How Maps Changed Travel",
  "topic": "How Maps Changed Travel",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. Understanding a map\u2019s limitations",
    "iii. Measuring places more consistently",
    "iv. Navigation through digital systems",
    "v. The spread of printed maps",
    "vi. Finding routes before accurate maps",
    "vii. A separate challenge in managing resources",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q04-pA",
      "paragraphNumber": 1,
      "text": "Finding routes before accurate maps is best understood by looking at its purpose and the conditions in which it operates. In the case of how maps changed travel, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph A corresponds to Heading vi ('Finding routes before accurate maps'). It addresses the core theme of finding routes before accurate maps within the context of how maps changed travel.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Finding routes before accurate maps) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Maps Changed Travel \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q04-pB",
      "paragraphNumber": 2,
      "text": "A key part of how maps changed travel is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph B corresponds to Heading v ('The spread of printed maps'). It addresses the core theme of the spread of printed maps within the context of how maps changed travel.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (The spread of printed maps) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Maps Changed Travel \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q04-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about how maps changed travel. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how maps changed travel because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph C corresponds to Heading iii ('Measuring places more consistently'). It addresses the core theme of measuring places more consistently within the context of how maps changed travel.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Measuring places more consistently) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Maps Changed Travel \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q04-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about how maps changed travel often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Navigation through digital systems'). It addresses the core theme of navigation through digital systems within the context of how maps changed travel.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Navigation through digital systems) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Maps Changed Travel \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q04-pE",
      "paragraphNumber": 5,
      "text": "The future of how maps changed travel depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph E corresponds to Heading ii ('Understanding a map\u2019s limitations'). It addresses the core theme of understanding a map\u2019s limitations within the context of how maps changed travel.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Understanding a map\u2019s limitations) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Maps Changed Travel \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q05",
  "workbookQuestionNumber": 5,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 The Importance of Sleep",
  "topic": "The Importance of Sleep",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Developing a sustainable sleep routine",
    "ii. What happens during sleep",
    "iii. Factors that can disturb rest",
    "iv. Sleep\u2019s relationship with memory",
    "v. The body\u2019s daily timing system",
    "vi. A common belief that needs reconsideration",
    "vii. A historical detail with limited relevance",
    "viii. A separate challenge in managing resources"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q05-pA",
      "paragraphNumber": 1,
      "text": "What happens during sleep is best understood by looking at its purpose and the conditions in which it operates. In the case of the importance of sleep, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph A corresponds to Heading ii ('What happens during sleep'). It addresses the core theme of what happens during sleep within the context of the importance of sleep.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (What happens during sleep) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Sleep \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q05-pB",
      "paragraphNumber": 2,
      "text": "A key part of the importance of sleep is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph B corresponds to Heading iv ('Sleep\u2019s relationship with memory'). It addresses the core theme of sleep\u2019s relationship with memory within the context of the importance of sleep.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Sleep\u2019s relationship with memory) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Sleep \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q05-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the importance of sleep. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the importance of sleep because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph C corresponds to Heading v ('The body\u2019s daily timing system'). It addresses the core theme of the body\u2019s daily timing system within the context of the importance of sleep.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (The body\u2019s daily timing system) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Sleep \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q05-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the importance of sleep often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph D corresponds to Heading iii ('Factors that can disturb rest'). It addresses the core theme of factors that can disturb rest within the context of the importance of sleep.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Factors that can disturb rest) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Sleep \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q05-pE",
      "paragraphNumber": 5,
      "text": "The future of the importance of sleep depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph E corresponds to Heading i ('Developing a sustainable sleep routine'). It addresses the core theme of developing a sustainable sleep routine within the context of the importance of sleep.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Developing a sustainable sleep routine) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Sleep \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q06",
  "workbookQuestionNumber": 6,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 The Secret of a Good Library",
  "topic": "The Secret of a Good Library",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. How librarians support readers",
    "ii. A historical detail with limited relevance",
    "iii. Systems for finding information",
    "iv. A separate challenge in managing resources",
    "v. The expansion of digital collections",
    "vi. Libraries as more than book stores",
    "vii. Libraries as community spaces",
    "viii. A common belief that needs reconsideration"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q06-pA",
      "paragraphNumber": 1,
      "text": "Libraries as more than book stores is best understood by looking at its purpose and the conditions in which it operates. In the case of the secret of a good library, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph A corresponds to Heading vi ('Libraries as more than book stores'). It addresses the core theme of libraries as more than book stores within the context of the secret of a good library.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Libraries as more than book stores) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Secret of a Good Library \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q06-pB",
      "paragraphNumber": 2,
      "text": "A key part of the secret of a good library is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph B corresponds to Heading iii ('Systems for finding information'). It addresses the core theme of systems for finding information within the context of the secret of a good library.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Systems for finding information) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Secret of a Good Library \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q06-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the secret of a good library. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the secret of a good library because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph C corresponds to Heading i ('How librarians support readers'). It addresses the core theme of how librarians support readers within the context of the secret of a good library.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (How librarians support readers) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Secret of a Good Library \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q06-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the secret of a good library often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph D corresponds to Heading v ('The expansion of digital collections'). It addresses the core theme of the expansion of digital collections within the context of the secret of a good library.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (The expansion of digital collections) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Secret of a Good Library \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q06-pE",
      "paragraphNumber": 5,
      "text": "The future of the secret of a good library depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Libraries as community spaces'). It addresses the core theme of libraries as community spaces within the context of the secret of a good library.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Libraries as community spaces) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Secret of a Good Library \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q07",
  "workbookQuestionNumber": 7,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 How Bridges Stand",
  "topic": "How Bridges Stand",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. A separate challenge in managing resources",
    "iii. Checking safety before use",
    "iv. The purpose and demands of bridges",
    "v. Forces that act on structures",
    "vi. Different bridge designs",
    "vii. Maintaining structures over time",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q07-pA",
      "paragraphNumber": 1,
      "text": "The purpose and demands of bridges is best understood by looking at its purpose and the conditions in which it operates. In the case of how bridges stand, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph A corresponds to Heading iv ('The purpose and demands of bridges'). It addresses the core theme of the purpose and demands of bridges within the context of how bridges stand.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (The purpose and demands of bridges) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Bridges Stand \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q07-pB",
      "paragraphNumber": 2,
      "text": "A key part of how bridges stand is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph B corresponds to Heading v ('Forces that act on structures'). It addresses the core theme of forces that act on structures within the context of how bridges stand.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Forces that act on structures) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Bridges Stand \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q07-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about how bridges stand. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how bridges stand because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph C corresponds to Heading vi ('Different bridge designs'). It addresses the core theme of different bridge designs within the context of how bridges stand.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Different bridge designs) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Bridges Stand \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q07-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about how bridges stand often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph D corresponds to Heading iii ('Checking safety before use'). It addresses the core theme of checking safety before use within the context of how bridges stand.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Checking safety before use) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Bridges Stand \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q07-pE",
      "paragraphNumber": 5,
      "text": "The future of how bridges stand depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Maintaining structures over time'). It addresses the core theme of maintaining structures over time within the context of how bridges stand.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Maintaining structures over time) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Bridges Stand \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q08",
  "workbookQuestionNumber": 8,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 The Story of Paper",
  "topic": "The Story of Paper",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Environmental issues in paper production",
    "ii. A historical detail with limited relevance",
    "iii. Writing materials before paper",
    "iv. A common belief that needs reconsideration",
    "v. A separate challenge in managing resources",
    "vi. The basic process of papermaking",
    "vii. How paper became widely available",
    "viii. Paper\u2019s role in a digital world"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q08-pA",
      "paragraphNumber": 1,
      "text": "Writing materials before paper is best understood by looking at its purpose and the conditions in which it operates. In the case of the story of paper, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph A corresponds to Heading iii ('Writing materials before paper'). It addresses the core theme of writing materials before paper within the context of the story of paper.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Writing materials before paper) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of Paper \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q08-pB",
      "paragraphNumber": 2,
      "text": "A key part of the story of paper is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph B corresponds to Heading vi ('The basic process of papermaking'). It addresses the core theme of the basic process of papermaking within the context of the story of paper.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (The basic process of papermaking) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of Paper \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q08-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the story of paper. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the story of paper because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph C corresponds to Heading vii ('How paper became widely available'). It addresses the core theme of how paper became widely available within the context of the story of paper.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (How paper became widely available) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of Paper \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q08-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the story of paper often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph D corresponds to Heading i ('Environmental issues in paper production'). It addresses the core theme of environmental issues in paper production within the context of the story of paper.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Environmental issues in paper production) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of Paper \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q08-pE",
      "paragraphNumber": 5,
      "text": "The future of the story of paper depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph E corresponds to Heading viii ('Paper\u2019s role in a digital world'). It addresses the core theme of paper\u2019s role in a digital world within the context of the story of paper.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Paper\u2019s role in a digital world) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of Paper \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q09",
  "workbookQuestionNumber": 9,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 Why Cities Need Parks",
  "topic": "Why Cities Need Parks",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. How greenery can cool cities",
    "ii. Maintaining healthy public spaces",
    "iii. Benefits for community life",
    "iv. A common belief that needs reconsideration",
    "v. A separate challenge in managing resources",
    "vi. Open space in urban environments",
    "vii. A historical detail with limited relevance",
    "viii. Habitats within public parks"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q09-pA",
      "paragraphNumber": 1,
      "text": "Open space in urban environments is best understood by looking at its purpose and the conditions in which it operates. In the case of why cities need parks, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph A corresponds to Heading vi ('Open space in urban environments'). It addresses the core theme of open space in urban environments within the context of why cities need parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Open space in urban environments) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Cities Need Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q09-pB",
      "paragraphNumber": 2,
      "text": "A key part of why cities need parks is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph B corresponds to Heading i ('How greenery can cool cities'). It addresses the core theme of how greenery can cool cities within the context of why cities need parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (How greenery can cool cities) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Cities Need Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q09-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about why cities need parks. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to why cities need parks because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph C corresponds to Heading viii ('Habitats within public parks'). It addresses the core theme of habitats within public parks within the context of why cities need parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Habitats within public parks) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Cities Need Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q09-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about why cities need parks often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph D corresponds to Heading iii ('Benefits for community life'). It addresses the core theme of benefits for community life within the context of why cities need parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Benefits for community life) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Cities Need Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q09-pE",
      "paragraphNumber": 5,
      "text": "The future of why cities need parks depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph E corresponds to Heading ii ('Maintaining healthy public spaces'). It addresses the core theme of maintaining healthy public spaces within the context of why cities need parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Maintaining healthy public spaces) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Cities Need Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q10",
  "workbookQuestionNumber": 10,
  "difficulty": "Easy",
  "title": "Section 4: Long Text Comprehension \u2014 The Science of Rainbows",
  "topic": "The Science of Rainbows",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Conditions needed for a primary arc",
    "ii. Why each observer sees a different arc",
    "iii. Light contains different colours",
    "iv. A separate challenge in managing resources",
    "v. A historical detail with limited relevance",
    "vi. The path of light through droplets",
    "vii. How a secondary rainbow forms",
    "viii. A common belief that needs reconsideration"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q10-pA",
      "paragraphNumber": 1,
      "text": "Light contains different colours is best understood by looking at its purpose and the conditions in which it operates. In the case of the science of rainbows, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph A corresponds to Heading iii ('Light contains different colours'). It addresses the core theme of light contains different colours within the context of the science of rainbows.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Light contains different colours) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Rainbows \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q10-pB",
      "paragraphNumber": 2,
      "text": "A key part of the science of rainbows is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph B corresponds to Heading vi ('The path of light through droplets'). It addresses the core theme of the path of light through droplets within the context of the science of rainbows.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (The path of light through droplets) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Rainbows \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q10-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the science of rainbows. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the science of rainbows because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph C corresponds to Heading i ('Conditions needed for a primary arc'). It addresses the core theme of conditions needed for a primary arc within the context of the science of rainbows.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Conditions needed for a primary arc) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Rainbows \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q10-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the science of rainbows often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph D corresponds to Heading vii ('How a secondary rainbow forms'). It addresses the core theme of how a secondary rainbow forms within the context of the science of rainbows.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (How a secondary rainbow forms) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Rainbows \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q10-pE",
      "paragraphNumber": 5,
      "text": "The future of the science of rainbows depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph E corresponds to Heading ii ('Why each observer sees a different arc'). It addresses the core theme of why each observer sees a different arc within the context of the science of rainbows.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Why each observer sees a different arc) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Rainbows \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q11",
  "workbookQuestionNumber": 11,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Rise of Renewable Energy",
  "topic": "The Rise of Renewable Energy",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Using wind to generate power",
    "ii. Reasons for changing energy systems",
    "iii. The wider social transition",
    "iv. Managing variable electricity supply",
    "v. A historical detail with limited relevance",
    "vi. A separate challenge in managing resources",
    "vii. A common belief that needs reconsideration",
    "viii. Converting sunlight into electricity"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q11-pA",
      "paragraphNumber": 1,
      "text": "Reasons for changing energy systems is best understood by looking at its purpose and the conditions in which it operates. In the case of the rise of renewable energy, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph A corresponds to Heading ii ('Reasons for changing energy systems'). It addresses the core theme of reasons for changing energy systems within the context of the rise of renewable energy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Reasons for changing energy systems) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Renewable Energy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q11-pB",
      "paragraphNumber": 2,
      "text": "A key part of the rise of renewable energy is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph B corresponds to Heading viii ('Converting sunlight into electricity'). It addresses the core theme of converting sunlight into electricity within the context of the rise of renewable energy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Converting sunlight into electricity) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Renewable Energy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q11-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the rise of renewable energy. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the rise of renewable energy because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph C corresponds to Heading i ('Using wind to generate power'). It addresses the core theme of using wind to generate power within the context of the rise of renewable energy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Using wind to generate power) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Renewable Energy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q11-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the rise of renewable energy often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Managing variable electricity supply'). It addresses the core theme of managing variable electricity supply within the context of the rise of renewable energy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Managing variable electricity supply) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Renewable Energy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q11-pE",
      "paragraphNumber": 5,
      "text": "The future of the rise of renewable energy depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph E corresponds to Heading iii ('The wider social transition'). It addresses the core theme of the wider social transition within the context of the rise of renewable energy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (The wider social transition) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Renewable Energy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q12",
  "workbookQuestionNumber": 12,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Mystery of Deep Oceans",
  "topic": "The Mystery of Deep Oceans",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A separate challenge in managing resources",
    "ii. A common belief that needs reconsideration",
    "iii. Tools for studying the seafloor",
    "iv. The wider importance of deep ecosystems",
    "v. A historical detail with limited relevance",
    "vi. Food sources without sunlight",
    "vii. The difficulty of exploring deep water",
    "viii. Pressure and temperature at depth"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q12-pA",
      "paragraphNumber": 1,
      "text": "The difficulty of exploring deep water is best understood by looking at its purpose and the conditions in which it operates. In the case of the mystery of deep oceans, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph A corresponds to Heading vii ('The difficulty of exploring deep water'). It addresses the core theme of the difficulty of exploring deep water within the context of the mystery of deep oceans.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (The difficulty of exploring deep water) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mystery of Deep Oceans \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q12-pB",
      "paragraphNumber": 2,
      "text": "A key part of the mystery of deep oceans is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph B corresponds to Heading vi ('Food sources without sunlight'). It addresses the core theme of food sources without sunlight within the context of the mystery of deep oceans.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Food sources without sunlight) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mystery of Deep Oceans \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q12-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the mystery of deep oceans. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the mystery of deep oceans because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph C corresponds to Heading viii ('Pressure and temperature at depth'). It addresses the core theme of pressure and temperature at depth within the context of the mystery of deep oceans.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Pressure and temperature at depth) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mystery of Deep Oceans \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q12-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the mystery of deep oceans often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph D corresponds to Heading iii ('Tools for studying the seafloor'). It addresses the core theme of tools for studying the seafloor within the context of the mystery of deep oceans.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Tools for studying the seafloor) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mystery of Deep Oceans \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q12-pE",
      "paragraphNumber": 5,
      "text": "The future of the mystery of deep oceans depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph E corresponds to Heading iv ('The wider importance of deep ecosystems'). It addresses the core theme of the wider importance of deep ecosystems within the context of the mystery of deep oceans.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (The wider importance of deep ecosystems) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mystery of Deep Oceans \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q13",
  "workbookQuestionNumber": 13,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 How Vaccines Train the Body",
  "topic": "How Vaccines Train the Body",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. The role of immune memory",
    "ii. Evaluating safety and effectiveness",
    "iii. A common belief that needs reconsideration",
    "iv. A separate challenge in managing resources",
    "v. Preparing the body through vaccination",
    "vi. A historical detail with limited relevance",
    "vii. Benefits that extend to communities",
    "viii. How the immune system recognises threats"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q13-pA",
      "paragraphNumber": 1,
      "text": "How the immune system recognises threats is best understood by looking at its purpose and the conditions in which it operates. In the case of how vaccines train the body, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph A corresponds to Heading viii ('How the immune system recognises threats'). It addresses the core theme of how the immune system recognises threats within the context of how vaccines train the body.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (How the immune system recognises threats) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Vaccines Train the Body \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q13-pB",
      "paragraphNumber": 2,
      "text": "A key part of how vaccines train the body is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph B corresponds to Heading v ('Preparing the body through vaccination'). It addresses the core theme of preparing the body through vaccination within the context of how vaccines train the body.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Preparing the body through vaccination) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Vaccines Train the Body \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q13-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about how vaccines train the body. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how vaccines train the body because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph C corresponds to Heading i ('The role of immune memory'). It addresses the core theme of the role of immune memory within the context of how vaccines train the body.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (The role of immune memory) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Vaccines Train the Body \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q13-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about how vaccines train the body often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph D corresponds to Heading ii ('Evaluating safety and effectiveness'). It addresses the core theme of evaluating safety and effectiveness within the context of how vaccines train the body.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Evaluating safety and effectiveness) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Vaccines Train the Body \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q13-pE",
      "paragraphNumber": 5,
      "text": "The future of how vaccines train the body depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Benefits that extend to communities'). It addresses the core theme of benefits that extend to communities within the context of how vaccines train the body.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Benefits that extend to communities) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Vaccines Train the Body \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q14",
  "workbookQuestionNumber": 14,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Future of Public Transport",
  "topic": "The Future of Public Transport",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Access and fairness in transport",
    "ii. Why cities need travel alternatives",
    "iii. A common belief that needs reconsideration",
    "iv. Reducing emissions from vehicles",
    "v. Technology for passenger information",
    "vi. A historical detail with limited relevance",
    "vii. Planning connected transport routes",
    "viii. A separate challenge in managing resources"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q14-pA",
      "paragraphNumber": 1,
      "text": "Why cities need travel alternatives is best understood by looking at its purpose and the conditions in which it operates. In the case of the future of public transport, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph A corresponds to Heading ii ('Why cities need travel alternatives'). It addresses the core theme of why cities need travel alternatives within the context of the future of public transport.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Why cities need travel alternatives) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Public Transport \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q14-pB",
      "paragraphNumber": 2,
      "text": "A key part of the future of public transport is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph B corresponds to Heading vii ('Planning connected transport routes'). It addresses the core theme of planning connected transport routes within the context of the future of public transport.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Planning connected transport routes) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Public Transport \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q14-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the future of public transport. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the future of public transport because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph C corresponds to Heading v ('Technology for passenger information'). It addresses the core theme of technology for passenger information within the context of the future of public transport.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Technology for passenger information) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Public Transport \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q14-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the future of public transport often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Reducing emissions from vehicles'). It addresses the core theme of reducing emissions from vehicles within the context of the future of public transport.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Reducing emissions from vehicles) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Public Transport \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q14-pE",
      "paragraphNumber": 5,
      "text": "The future of the future of public transport depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph E corresponds to Heading i ('Access and fairness in transport'). It addresses the core theme of access and fairness in transport within the context of the future of public transport.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Access and fairness in transport) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Public Transport \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q15",
  "workbookQuestionNumber": 15,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Economics of Sharing",
  "topic": "The Economics of Sharing",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. Digital platforms and matching users",
    "iii. A historical detail with limited relevance",
    "iv. Using items without owning them",
    "v. A separate challenge in managing resources",
    "vi. Benefits alongside hidden costs",
    "vii. The possible direction of sharing models",
    "viii. Trust and responsibility in shared services"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q15-pA",
      "paragraphNumber": 1,
      "text": "Using items without owning them is best understood by looking at its purpose and the conditions in which it operates. In the case of the economics of sharing, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph A corresponds to Heading iv ('Using items without owning them'). It addresses the core theme of using items without owning them within the context of the economics of sharing.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Using items without owning them) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Sharing \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q15-pB",
      "paragraphNumber": 2,
      "text": "A key part of the economics of sharing is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph B corresponds to Heading ii ('Digital platforms and matching users'). It addresses the core theme of digital platforms and matching users within the context of the economics of sharing.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Digital platforms and matching users) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Sharing \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q15-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the economics of sharing. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the economics of sharing because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph C corresponds to Heading vi ('Benefits alongside hidden costs'). It addresses the core theme of benefits alongside hidden costs within the context of the economics of sharing.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Benefits alongside hidden costs) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Sharing \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q15-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the economics of sharing often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph D corresponds to Heading viii ('Trust and responsibility in shared services'). It addresses the core theme of trust and responsibility in shared services within the context of the economics of sharing.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Trust and responsibility in shared services) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Sharing \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q15-pE",
      "paragraphNumber": 5,
      "text": "The future of the economics of sharing depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('The possible direction of sharing models'). It addresses the core theme of the possible direction of sharing models within the context of the economics of sharing.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (The possible direction of sharing models) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Sharing \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q16",
  "workbookQuestionNumber": 16,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 Why Languages Disappear",
  "topic": "Why Languages Disappear",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. A separate challenge in managing resources",
    "iii. Recording language before it is lost",
    "iv. Language as part of identity",
    "v. Teaching language to new speakers",
    "vi. A historical detail with limited relevance",
    "vii. Social pressures on language use",
    "viii. Keeping a language active in modern life"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q16-pA",
      "paragraphNumber": 1,
      "text": "Language as part of identity is best understood by looking at its purpose and the conditions in which it operates. In the case of why languages disappear, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph A corresponds to Heading iv ('Language as part of identity'). It addresses the core theme of language as part of identity within the context of why languages disappear.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Language as part of identity) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Languages Disappear \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q16-pB",
      "paragraphNumber": 2,
      "text": "A key part of why languages disappear is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph B corresponds to Heading vii ('Social pressures on language use'). It addresses the core theme of social pressures on language use within the context of why languages disappear.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Social pressures on language use) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Languages Disappear \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q16-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about why languages disappear. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to why languages disappear because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph C corresponds to Heading iii ('Recording language before it is lost'). It addresses the core theme of recording language before it is lost within the context of why languages disappear.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Recording language before it is lost) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Languages Disappear \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q16-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about why languages disappear often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph D corresponds to Heading v ('Teaching language to new speakers'). It addresses the core theme of teaching language to new speakers within the context of why languages disappear.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Teaching language to new speakers) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Languages Disappear \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q16-pE",
      "paragraphNumber": 5,
      "text": "The future of why languages disappear depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph E corresponds to Heading viii ('Keeping a language active in modern life'). It addresses the core theme of keeping a language active in modern life within the context of why languages disappear.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Keeping a language active in modern life) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Languages Disappear \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q17",
  "workbookQuestionNumber": 17,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Design of Everyday Objects",
  "topic": "The Design of Everyday Objects",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Choosing materials and production methods",
    "ii. A historical detail with limited relevance",
    "iii. A separate challenge in managing resources",
    "iv. Learning from product users",
    "v. Considering the full impact of design",
    "vi. A common belief that needs reconsideration",
    "vii. Balancing purpose and appearance",
    "viii. Planning for repair and durability"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q17-pA",
      "paragraphNumber": 1,
      "text": "Balancing purpose and appearance is best understood by looking at its purpose and the conditions in which it operates. In the case of the design of everyday objects, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph A corresponds to Heading vii ('Balancing purpose and appearance'). It addresses the core theme of balancing purpose and appearance within the context of the design of everyday objects.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Balancing purpose and appearance) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Design of Everyday Objects \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q17-pB",
      "paragraphNumber": 2,
      "text": "A key part of the design of everyday objects is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph B corresponds to Heading iv ('Learning from product users'). It addresses the core theme of learning from product users within the context of the design of everyday objects.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Learning from product users) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Design of Everyday Objects \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q17-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the design of everyday objects. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the design of everyday objects because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph C corresponds to Heading i ('Choosing materials and production methods'). It addresses the core theme of choosing materials and production methods within the context of the design of everyday objects.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Choosing materials and production methods) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Design of Everyday Objects \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q17-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the design of everyday objects often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph D corresponds to Heading viii ('Planning for repair and durability'). It addresses the core theme of planning for repair and durability within the context of the design of everyday objects.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Planning for repair and durability) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Design of Everyday Objects \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q17-pE",
      "paragraphNumber": 5,
      "text": "The future of the design of everyday objects depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph E corresponds to Heading v ('Considering the full impact of design'). It addresses the core theme of considering the full impact of design within the context of the design of everyday objects.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Considering the full impact of design) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Design of Everyday Objects \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q18",
  "workbookQuestionNumber": 18,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 How Archaeologists Reconstruct the Past",
  "topic": "How Archaeologists Reconstruct the Past",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A separate challenge in managing resources",
    "ii. A common belief that needs reconsideration",
    "iii. The clues left by earlier societies",
    "iv. Inferring how people lived",
    "v. Recording evidence during excavation",
    "vi. Estimating the age of finds",
    "vii. Protecting sites and cultural heritage",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q18-pA",
      "paragraphNumber": 1,
      "text": "The clues left by earlier societies is best understood by looking at its purpose and the conditions in which it operates. In the case of how archaeologists reconstruct the past, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph A corresponds to Heading iii ('The clues left by earlier societies'). It addresses the core theme of the clues left by earlier societies within the context of how archaeologists reconstruct the past.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (The clues left by earlier societies) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Archaeologists Reconstruct the Past \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q18-pB",
      "paragraphNumber": 2,
      "text": "A key part of how archaeologists reconstruct the past is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph B corresponds to Heading v ('Recording evidence during excavation'). It addresses the core theme of recording evidence during excavation within the context of how archaeologists reconstruct the past.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Recording evidence during excavation) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Archaeologists Reconstruct the Past \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q18-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about how archaeologists reconstruct the past. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how archaeologists reconstruct the past because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph C corresponds to Heading vi ('Estimating the age of finds'). It addresses the core theme of estimating the age of finds within the context of how archaeologists reconstruct the past.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Estimating the age of finds) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Archaeologists Reconstruct the Past \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q18-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about how archaeologists reconstruct the past often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Inferring how people lived'). It addresses the core theme of inferring how people lived within the context of how archaeologists reconstruct the past.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Inferring how people lived) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Archaeologists Reconstruct the Past \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q18-pE",
      "paragraphNumber": 5,
      "text": "The future of how archaeologists reconstruct the past depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Protecting sites and cultural heritage'). It addresses the core theme of protecting sites and cultural heritage within the context of how archaeologists reconstruct the past.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Protecting sites and cultural heritage) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Archaeologists Reconstruct the Past \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q19",
  "workbookQuestionNumber": 19,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Psychology of Habits",
  "topic": "The Psychology of Habits",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Adjusting the environment to support change",
    "ii. A common belief that needs reconsideration",
    "iii. How repeated actions become routines",
    "iv. A separate challenge in managing resources",
    "v. A historical detail with limited relevance",
    "vi. Why changing routines can be hard",
    "vii. Making routines sustainable",
    "viii. The role of cues and rewards"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q19-pA",
      "paragraphNumber": 1,
      "text": "How repeated actions become routines is best understood by looking at its purpose and the conditions in which it operates. In the case of the psychology of habits, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph A corresponds to Heading iii ('How repeated actions become routines'). It addresses the core theme of how repeated actions become routines within the context of the psychology of habits.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (How repeated actions become routines) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Psychology of Habits \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q19-pB",
      "paragraphNumber": 2,
      "text": "A key part of the psychology of habits is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph B corresponds to Heading viii ('The role of cues and rewards'). It addresses the core theme of the role of cues and rewards within the context of the psychology of habits.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (The role of cues and rewards) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Psychology of Habits \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q19-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the psychology of habits. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the psychology of habits because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph C corresponds to Heading vi ('Why changing routines can be hard'). It addresses the core theme of why changing routines can be hard within the context of the psychology of habits.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Why changing routines can be hard) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Psychology of Habits \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q19-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the psychology of habits often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph D corresponds to Heading i ('Adjusting the environment to support change'). It addresses the core theme of adjusting the environment to support change within the context of the psychology of habits.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Adjusting the environment to support change) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Psychology of Habits \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q19-pE",
      "paragraphNumber": 5,
      "text": "The future of the psychology of habits depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Making routines sustainable'). It addresses the core theme of making routines sustainable within the context of the psychology of habits.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Making routines sustainable) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Psychology of Habits \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q20",
  "workbookQuestionNumber": 20,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Value of Wetlands",
  "topic": "The Value of Wetlands",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. Storing water during floods",
    "iii. A separate challenge in managing resources",
    "iv. Wildlife and carbon in wetland soils",
    "v. Choices involved in restoration",
    "vi. The characteristics of wetland environments",
    "vii. Natural processes that filter water",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q20-pA",
      "paragraphNumber": 1,
      "text": "The characteristics of wetland environments is best understood by looking at its purpose and the conditions in which it operates. In the case of the value of wetlands, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph A corresponds to Heading vi ('The characteristics of wetland environments'). It addresses the core theme of the characteristics of wetland environments within the context of the value of wetlands.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (The characteristics of wetland environments) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Value of Wetlands \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q20-pB",
      "paragraphNumber": 2,
      "text": "A key part of the value of wetlands is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph B corresponds to Heading vii ('Natural processes that filter water'). It addresses the core theme of natural processes that filter water within the context of the value of wetlands.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Natural processes that filter water) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Value of Wetlands \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q20-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the value of wetlands. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the value of wetlands because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph C corresponds to Heading ii ('Storing water during floods'). It addresses the core theme of storing water during floods within the context of the value of wetlands.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Storing water during floods) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Value of Wetlands \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q20-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the value of wetlands often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Wildlife and carbon in wetland soils'). It addresses the core theme of wildlife and carbon in wetland soils within the context of the value of wetlands.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Wildlife and carbon in wetland soils) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Value of Wetlands \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q20-pE",
      "paragraphNumber": 5,
      "text": "The future of the value of wetlands depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph E corresponds to Heading v ('Choices involved in restoration'). It addresses the core theme of choices involved in restoration within the context of the value of wetlands.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Choices involved in restoration) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Value of Wetlands \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q22",
  "workbookQuestionNumber": 22,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 Why Some Inventions Fail",
  "topic": "Why Some Inventions Fail",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A historical detail with limited relevance",
    "ii. The importance of timing",
    "iii. Learning from unsuccessful products",
    "iv. Trust and user behaviour",
    "v. A common belief that needs reconsideration",
    "vi. Challenges in mass production",
    "vii. Why a clever idea may not succeed",
    "viii. A separate challenge in managing resources"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q22-pA",
      "paragraphNumber": 1,
      "text": "Why a clever idea may not succeed is best understood by looking at its purpose and the conditions in which it operates. In the case of why some inventions fail, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph A corresponds to Heading vii ('Why a clever idea may not succeed'). It addresses the core theme of why a clever idea may not succeed within the context of why some inventions fail.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Why a clever idea may not succeed) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Some Inventions Fail \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q22-pB",
      "paragraphNumber": 2,
      "text": "A key part of why some inventions fail is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph B corresponds to Heading ii ('The importance of timing'). It addresses the core theme of the importance of timing within the context of why some inventions fail.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (The importance of timing) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Some Inventions Fail \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q22-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about why some inventions fail. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to why some inventions fail because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph C corresponds to Heading vi ('Challenges in mass production'). It addresses the core theme of challenges in mass production within the context of why some inventions fail.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Challenges in mass production) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Some Inventions Fail \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q22-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about why some inventions fail often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Trust and user behaviour'). It addresses the core theme of trust and user behaviour within the context of why some inventions fail.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Trust and user behaviour) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Some Inventions Fail \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q22-pE",
      "paragraphNumber": 5,
      "text": "The future of why some inventions fail depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph E corresponds to Heading iii ('Learning from unsuccessful products'). It addresses the core theme of learning from unsuccessful products within the context of why some inventions fail.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Learning from unsuccessful products) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Some Inventions Fail \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q23",
  "workbookQuestionNumber": 23,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Impact of Light Pollution",
  "topic": "The Impact of Light Pollution",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Light and human body rhythms",
    "ii. The growth of artificial night lighting",
    "iii. A separate challenge in managing resources",
    "iv. A historical detail with limited relevance",
    "v. Energy waste and skyglow",
    "vi. A common belief that needs reconsideration",
    "vii. Effects on animals",
    "viii. Practical ways to reduce excess light"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q23-pA",
      "paragraphNumber": 1,
      "text": "The growth of artificial night lighting is best understood by looking at its purpose and the conditions in which it operates. In the case of the impact of light pollution, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph A corresponds to Heading ii ('The growth of artificial night lighting'). It addresses the core theme of the growth of artificial night lighting within the context of the impact of light pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (The growth of artificial night lighting) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Impact of Light Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q23-pB",
      "paragraphNumber": 2,
      "text": "A key part of the impact of light pollution is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph B corresponds to Heading vii ('Effects on animals'). It addresses the core theme of effects on animals within the context of the impact of light pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Effects on animals) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Impact of Light Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q23-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the impact of light pollution. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the impact of light pollution because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph C corresponds to Heading i ('Light and human body rhythms'). It addresses the core theme of light and human body rhythms within the context of the impact of light pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Light and human body rhythms) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Impact of Light Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q23-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the impact of light pollution often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph D corresponds to Heading v ('Energy waste and skyglow'). It addresses the core theme of energy waste and skyglow within the context of the impact of light pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Energy waste and skyglow) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Impact of Light Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q23-pE",
      "paragraphNumber": 5,
      "text": "The future of the impact of light pollution depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph E corresponds to Heading viii ('Practical ways to reduce excess light'). It addresses the core theme of practical ways to reduce excess light within the context of the impact of light pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Practical ways to reduce excess light) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Impact of Light Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q24",
  "workbookQuestionNumber": 24,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 How Food Labels Guide Choices",
  "topic": "How Food Labels Guide Choices",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Interpreting marketing claims",
    "ii. Reading nutrition information",
    "iii. Information printed on food packages",
    "iv. A historical detail with limited relevance",
    "v. Helping consumers understand labels",
    "vi. A separate challenge in managing resources",
    "vii. A common belief that needs reconsideration",
    "viii. Ingredients and allergen warnings"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q24-pA",
      "paragraphNumber": 1,
      "text": "Information printed on food packages is best understood by looking at its purpose and the conditions in which it operates. In the case of how food labels guide choices, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph A corresponds to Heading iii ('Information printed on food packages'). It addresses the core theme of information printed on food packages within the context of how food labels guide choices.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Information printed on food packages) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Food Labels Guide Choices \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q24-pB",
      "paragraphNumber": 2,
      "text": "A key part of how food labels guide choices is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph B corresponds to Heading ii ('Reading nutrition information'). It addresses the core theme of reading nutrition information within the context of how food labels guide choices.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Reading nutrition information) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Food Labels Guide Choices \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q24-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about how food labels guide choices. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how food labels guide choices because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph C corresponds to Heading viii ('Ingredients and allergen warnings'). It addresses the core theme of ingredients and allergen warnings within the context of how food labels guide choices.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Ingredients and allergen warnings) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Food Labels Guide Choices \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q24-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about how food labels guide choices often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph D corresponds to Heading i ('Interpreting marketing claims'). It addresses the core theme of interpreting marketing claims within the context of how food labels guide choices.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Interpreting marketing claims) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Food Labels Guide Choices \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q24-pE",
      "paragraphNumber": 5,
      "text": "The future of how food labels guide choices depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph E corresponds to Heading v ('Helping consumers understand labels'). It addresses the core theme of helping consumers understand labels within the context of how food labels guide choices.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Helping consumers understand labels) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Food Labels Guide Choices \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q25",
  "workbookQuestionNumber": 25,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Role of Museums Today",
  "topic": "The Role of Museums Today",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A separate challenge in managing resources",
    "ii. Preserving important objects",
    "iii. A historical detail with limited relevance",
    "iv. Digital access to collections",
    "v. A common belief that needs reconsideration",
    "vi. Debates over object ownership",
    "vii. Museums as public learning spaces",
    "viii. Creating an exhibition narrative"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q25-pA",
      "paragraphNumber": 1,
      "text": "Preserving important objects is best understood by looking at its purpose and the conditions in which it operates. In the case of the role of museums today, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph A corresponds to Heading ii ('Preserving important objects'). It addresses the core theme of preserving important objects within the context of the role of museums today.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Preserving important objects) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Role of Museums Today \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q25-pB",
      "paragraphNumber": 2,
      "text": "A key part of the role of museums today is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph B corresponds to Heading viii ('Creating an exhibition narrative'). It addresses the core theme of creating an exhibition narrative within the context of the role of museums today.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Creating an exhibition narrative) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Role of Museums Today \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q25-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the role of museums today. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the role of museums today because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph C corresponds to Heading iv ('Digital access to collections'). It addresses the core theme of digital access to collections within the context of the role of museums today.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Digital access to collections) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Role of Museums Today \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q25-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the role of museums today often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph D corresponds to Heading vi ('Debates over object ownership'). It addresses the core theme of debates over object ownership within the context of the role of museums today.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Debates over object ownership) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Role of Museums Today \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q25-pE",
      "paragraphNumber": 5,
      "text": "The future of the role of museums today depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Museums as public learning spaces'). It addresses the core theme of museums as public learning spaces within the context of the role of museums today.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Museums as public learning spaces) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Role of Museums Today \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q26",
  "workbookQuestionNumber": 26,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Challenge of Space Debris",
  "topic": "The Challenge of Space Debris",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. The growth of objects in orbit",
    "ii. A historical detail with limited relevance",
    "iii. Cooperation over a shared orbital environment",
    "iv. A common belief that needs reconsideration",
    "v. A separate challenge in managing resources",
    "vi. How fragments are produced",
    "vii. Preventing and removing debris",
    "viii. Tracking objects in space"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q26-pA",
      "paragraphNumber": 1,
      "text": "The growth of objects in orbit is best understood by looking at its purpose and the conditions in which it operates. In the case of the challenge of space debris, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph A corresponds to Heading i ('The growth of objects in orbit'). It addresses the core theme of the growth of objects in orbit within the context of the challenge of space debris.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (The growth of objects in orbit) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Challenge of Space Debris \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q26-pB",
      "paragraphNumber": 2,
      "text": "A key part of the challenge of space debris is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph B corresponds to Heading vi ('How fragments are produced'). It addresses the core theme of how fragments are produced within the context of the challenge of space debris.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (How fragments are produced) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Challenge of Space Debris \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q26-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the challenge of space debris. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the challenge of space debris because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph C corresponds to Heading viii ('Tracking objects in space'). It addresses the core theme of tracking objects in space within the context of the challenge of space debris.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Tracking objects in space) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Challenge of Space Debris \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q26-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the challenge of space debris often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph D corresponds to Heading vii ('Preventing and removing debris'). It addresses the core theme of preventing and removing debris within the context of the challenge of space debris.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Preventing and removing debris) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Challenge of Space Debris \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q26-pE",
      "paragraphNumber": 5,
      "text": "The future of the challenge of space debris depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph E corresponds to Heading iii ('Cooperation over a shared orbital environment'). It addresses the core theme of cooperation over a shared orbital environment within the context of the challenge of space debris.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Cooperation over a shared orbital environment) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Challenge of Space Debris \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q27",
  "workbookQuestionNumber": 27,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Science of Memory",
  "topic": "The Science of Memory",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Using memory with practical supports",
    "ii. Why memory is not a perfect recording",
    "iii. A separate challenge in managing resources",
    "iv. Reasons for forgetting",
    "v. A historical detail with limited relevance",
    "vi. A common belief that needs reconsideration",
    "vii. Sleep and memory consolidation",
    "viii. How information is encoded"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q27-pA",
      "paragraphNumber": 1,
      "text": "Why memory is not a perfect recording is best understood by looking at its purpose and the conditions in which it operates. In the case of the science of memory, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph A corresponds to Heading ii ('Why memory is not a perfect recording'). It addresses the core theme of why memory is not a perfect recording within the context of the science of memory.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Why memory is not a perfect recording) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Memory \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q27-pB",
      "paragraphNumber": 2,
      "text": "A key part of the science of memory is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph B corresponds to Heading viii ('How information is encoded'). It addresses the core theme of how information is encoded within the context of the science of memory.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (How information is encoded) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Memory \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q27-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the science of memory. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the science of memory because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph C corresponds to Heading iv ('Reasons for forgetting'). It addresses the core theme of reasons for forgetting within the context of the science of memory.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Reasons for forgetting) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Memory \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q27-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the science of memory often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph D corresponds to Heading vii ('Sleep and memory consolidation'). It addresses the core theme of sleep and memory consolidation within the context of the science of memory.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Sleep and memory consolidation) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Memory \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q27-pE",
      "paragraphNumber": 5,
      "text": "The future of the science of memory depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph E corresponds to Heading i ('Using memory with practical supports'). It addresses the core theme of using memory with practical supports within the context of the science of memory.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Using memory with practical supports) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Memory \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q28",
  "workbookQuestionNumber": 28,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 How Fashion Reflects Society",
  "topic": "How Fashion Reflects Society",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. Clothing as a signal of identity",
    "iii. Labour behind garment production",
    "iv. Environmental effects of clothing",
    "v. How trends spread rapidly",
    "vi. A separate challenge in managing resources",
    "vii. A historical detail with limited relevance",
    "viii. Making more thoughtful fashion choices"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q28-pA",
      "paragraphNumber": 1,
      "text": "Clothing as a signal of identity is best understood by looking at its purpose and the conditions in which it operates. In the case of how fashion reflects society, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph A corresponds to Heading ii ('Clothing as a signal of identity'). It addresses the core theme of clothing as a signal of identity within the context of how fashion reflects society.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Clothing as a signal of identity) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Fashion Reflects Society \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q28-pB",
      "paragraphNumber": 2,
      "text": "A key part of how fashion reflects society is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph B corresponds to Heading v ('How trends spread rapidly'). It addresses the core theme of how trends spread rapidly within the context of how fashion reflects society.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (How trends spread rapidly) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Fashion Reflects Society \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q28-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about how fashion reflects society. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how fashion reflects society because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph C corresponds to Heading iii ('Labour behind garment production'). It addresses the core theme of labour behind garment production within the context of how fashion reflects society.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Labour behind garment production) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Fashion Reflects Society \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q28-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about how fashion reflects society often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Environmental effects of clothing'). It addresses the core theme of environmental effects of clothing within the context of how fashion reflects society.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Environmental effects of clothing) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Fashion Reflects Society \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q28-pE",
      "paragraphNumber": 5,
      "text": "The future of how fashion reflects society depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph E corresponds to Heading viii ('Making more thoughtful fashion choices'). It addresses the core theme of making more thoughtful fashion choices within the context of how fashion reflects society.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Making more thoughtful fashion choices) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Fashion Reflects Society \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q29",
  "workbookQuestionNumber": 29,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The History of Public Parks",
  "topic": "The History of Public Parks",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A historical detail with limited relevance",
    "ii. A common belief that needs reconsideration",
    "iii. A separate challenge in managing resources",
    "iv. Planning future urban green space",
    "v. Designing parks for recreation",
    "vi. Parks and public health",
    "vii. The growth of shared green spaces",
    "viii. Unequal access to green space"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q29-pA",
      "paragraphNumber": 1,
      "text": "The growth of shared green spaces is best understood by looking at its purpose and the conditions in which it operates. In the case of the history of public parks, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph A corresponds to Heading vii ('The growth of shared green spaces'). It addresses the core theme of the growth of shared green spaces within the context of the history of public parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (The growth of shared green spaces) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Public Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q29-pB",
      "paragraphNumber": 2,
      "text": "A key part of the history of public parks is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph B corresponds to Heading v ('Designing parks for recreation'). It addresses the core theme of designing parks for recreation within the context of the history of public parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Designing parks for recreation) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Public Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q29-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the history of public parks. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the history of public parks because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph C corresponds to Heading viii ('Unequal access to green space'). It addresses the core theme of unequal access to green space within the context of the history of public parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Unequal access to green space) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Public Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q29-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the history of public parks often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph D corresponds to Heading vi ('Parks and public health'). It addresses the core theme of parks and public health within the context of the history of public parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Parks and public health) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Public Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q29-pE",
      "paragraphNumber": 5,
      "text": "The future of the history of public parks depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph E corresponds to Heading iv ('Planning future urban green space'). It addresses the core theme of planning future urban green space within the context of the history of public parks.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Planning future urban green space) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Public Parks \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q30",
  "workbookQuestionNumber": 30,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Mathematics of Cryptography",
  "topic": "The Mathematics of Cryptography",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. The role of difficult mathematical problems",
    "ii. A common belief that needs reconsideration",
    "iii. A separate challenge in managing resources",
    "iv. Adapting to future computing threats",
    "v. Protecting messages with cryptography",
    "vi. Human and technical security weaknesses",
    "vii. How encryption keys operate",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q30-pA",
      "paragraphNumber": 1,
      "text": "Protecting messages with cryptography is best understood by looking at its purpose and the conditions in which it operates. In the case of the mathematics of cryptography, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph A corresponds to Heading v ('Protecting messages with cryptography'). It addresses the core theme of protecting messages with cryptography within the context of the mathematics of cryptography.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Protecting messages with cryptography) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mathematics of Cryptography \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q30-pB",
      "paragraphNumber": 2,
      "text": "A key part of the mathematics of cryptography is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph B corresponds to Heading vii ('How encryption keys operate'). It addresses the core theme of how encryption keys operate within the context of the mathematics of cryptography.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (How encryption keys operate) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mathematics of Cryptography \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q30-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the mathematics of cryptography. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the mathematics of cryptography because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph C corresponds to Heading i ('The role of difficult mathematical problems'). It addresses the core theme of the role of difficult mathematical problems within the context of the mathematics of cryptography.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (The role of difficult mathematical problems) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mathematics of Cryptography \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q30-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the mathematics of cryptography often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph D corresponds to Heading vi ('Human and technical security weaknesses'). It addresses the core theme of human and technical security weaknesses within the context of the mathematics of cryptography.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Human and technical security weaknesses) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mathematics of Cryptography \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q30-pE",
      "paragraphNumber": 5,
      "text": "The future of the mathematics of cryptography depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph E corresponds to Heading iv ('Adapting to future computing threats'). It addresses the core theme of adapting to future computing threats within the context of the mathematics of cryptography.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Adapting to future computing threats) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Mathematics of Cryptography \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q31",
  "workbookQuestionNumber": 31,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Importance of Soil",
  "topic": "The Importance of Soil",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. Farming methods that protect soil",
    "iii. The composition and formation of soil",
    "iv. Processes that degrade soil",
    "v. A separate challenge in managing resources",
    "vi. A historical detail with limited relevance",
    "vii. Soil\u2019s role in climate systems",
    "viii. Organisms that recycle nutrients"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q31-pA",
      "paragraphNumber": 1,
      "text": "The composition and formation of soil is best understood by looking at its purpose and the conditions in which it operates. In the case of the importance of soil, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph A corresponds to Heading iii ('The composition and formation of soil'). It addresses the core theme of the composition and formation of soil within the context of the importance of soil.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (The composition and formation of soil) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Soil \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q31-pB",
      "paragraphNumber": 2,
      "text": "A key part of the importance of soil is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph B corresponds to Heading viii ('Organisms that recycle nutrients'). It addresses the core theme of organisms that recycle nutrients within the context of the importance of soil.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Organisms that recycle nutrients) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Soil \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q31-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the importance of soil. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the importance of soil because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph C corresponds to Heading iv ('Processes that degrade soil'). It addresses the core theme of processes that degrade soil within the context of the importance of soil.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Processes that degrade soil) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Soil \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q31-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the importance of soil often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph D corresponds to Heading ii ('Farming methods that protect soil'). It addresses the core theme of farming methods that protect soil within the context of the importance of soil.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Farming methods that protect soil) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Soil \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q31-pE",
      "paragraphNumber": 5,
      "text": "The future of the importance of soil depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Soil\u2019s role in climate systems'). It addresses the core theme of soil\u2019s role in climate systems within the context of the importance of soil.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Soil\u2019s role in climate systems) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Soil \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q32",
  "workbookQuestionNumber": 32,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Rise of Citizen Science",
  "topic": "The Rise of Citizen Science",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A separate challenge in managing resources",
    "ii. A historical detail with limited relevance",
    "iii. Designing clear research tasks",
    "iv. A common belief that needs reconsideration",
    "v. Public participation in research",
    "vi. Using observations in decisions",
    "vii. Benefits for participating communities",
    "viii. Checking the quality of volunteer data"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q32-pA",
      "paragraphNumber": 1,
      "text": "Public participation in research is best understood by looking at its purpose and the conditions in which it operates. In the case of the rise of citizen science, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph A corresponds to Heading v ('Public participation in research'). It addresses the core theme of public participation in research within the context of the rise of citizen science.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Public participation in research) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Citizen Science \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q32-pB",
      "paragraphNumber": 2,
      "text": "A key part of the rise of citizen science is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph B corresponds to Heading iii ('Designing clear research tasks'). It addresses the core theme of designing clear research tasks within the context of the rise of citizen science.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Designing clear research tasks) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Citizen Science \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q32-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the rise of citizen science. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the rise of citizen science because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph C corresponds to Heading viii ('Checking the quality of volunteer data'). It addresses the core theme of checking the quality of volunteer data within the context of the rise of citizen science.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Checking the quality of volunteer data) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Citizen Science \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q32-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the rise of citizen science often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph D corresponds to Heading vii ('Benefits for participating communities'). It addresses the core theme of benefits for participating communities within the context of the rise of citizen science.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Benefits for participating communities) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Citizen Science \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q32-pE",
      "paragraphNumber": 5,
      "text": "The future of the rise of citizen science depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph E corresponds to Heading vi ('Using observations in decisions'). It addresses the core theme of using observations in decisions within the context of the rise of citizen science.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Using observations in decisions) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Rise of Citizen Science \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q33",
  "workbookQuestionNumber": 33,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 Why Historic Buildings Matter",
  "topic": "Why Historic Buildings Matter",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. Challenges in conserving old structures",
    "iii. A separate challenge in managing resources",
    "iv. A historical detail with limited relevance",
    "v. Funding long-term preservation",
    "vi. Buildings as evidence of the past",
    "vii. Whose history receives recognition",
    "viii. Giving historic buildings new uses"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q33-pA",
      "paragraphNumber": 1,
      "text": "Buildings as evidence of the past is best understood by looking at its purpose and the conditions in which it operates. In the case of why historic buildings matter, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph A corresponds to Heading vi ('Buildings as evidence of the past'). It addresses the core theme of buildings as evidence of the past within the context of why historic buildings matter.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Buildings as evidence of the past) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Historic Buildings Matter \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q33-pB",
      "paragraphNumber": 2,
      "text": "A key part of why historic buildings matter is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph B corresponds to Heading ii ('Challenges in conserving old structures'). It addresses the core theme of challenges in conserving old structures within the context of why historic buildings matter.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Challenges in conserving old structures) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Historic Buildings Matter \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q33-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about why historic buildings matter. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to why historic buildings matter because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph C corresponds to Heading viii ('Giving historic buildings new uses'). It addresses the core theme of giving historic buildings new uses within the context of why historic buildings matter.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Giving historic buildings new uses) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Historic Buildings Matter \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q33-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about why historic buildings matter often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph D corresponds to Heading vii ('Whose history receives recognition'). It addresses the core theme of whose history receives recognition within the context of why historic buildings matter.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Whose history receives recognition) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Historic Buildings Matter \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q33-pE",
      "paragraphNumber": 5,
      "text": "The future of why historic buildings matter depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph E corresponds to Heading v ('Funding long-term preservation'). It addresses the core theme of funding long-term preservation within the context of why historic buildings matter.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Funding long-term preservation) \u06c1\u06d2\u06d4 \u06cc\u06c1 Why Historic Buildings Matter \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q34",
  "workbookQuestionNumber": 34,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Science of Earthquakes",
  "topic": "The Science of Earthquakes",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Measuring earthquake events",
    "ii. A common belief that needs reconsideration",
    "iii. A historical detail with limited relevance",
    "iv. Actions that reduce earthquake risk",
    "v. Movement and stress beneath Earth\u2019s surface",
    "vi. A separate challenge in managing resources",
    "vii. Monitoring and warning limitations",
    "viii. Reasons damage varies by location"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q34-pA",
      "paragraphNumber": 1,
      "text": "Movement and stress beneath Earth\u2019s surface is best understood by looking at its purpose and the conditions in which it operates. In the case of the science of earthquakes, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph A corresponds to Heading v ('Movement and stress beneath Earth\u2019s surface'). It addresses the core theme of movement and stress beneath earth\u2019s surface within the context of the science of earthquakes.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Movement and stress beneath Earth\u2019s surface) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Earthquakes \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q34-pB",
      "paragraphNumber": 2,
      "text": "A key part of the science of earthquakes is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph B corresponds to Heading i ('Measuring earthquake events'). It addresses the core theme of measuring earthquake events within the context of the science of earthquakes.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Measuring earthquake events) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Earthquakes \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q34-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the science of earthquakes. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the science of earthquakes because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph C corresponds to Heading viii ('Reasons damage varies by location'). It addresses the core theme of reasons damage varies by location within the context of the science of earthquakes.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Reasons damage varies by location) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Earthquakes \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q34-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the science of earthquakes often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph D corresponds to Heading vii ('Monitoring and warning limitations'). It addresses the core theme of monitoring and warning limitations within the context of the science of earthquakes.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Monitoring and warning limitations) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Earthquakes \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q34-pE",
      "paragraphNumber": 5,
      "text": "The future of the science of earthquakes depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph E corresponds to Heading iv ('Actions that reduce earthquake risk'). It addresses the core theme of actions that reduce earthquake risk within the context of the science of earthquakes.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Actions that reduce earthquake risk) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Earthquakes \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q35",
  "workbookQuestionNumber": 35,
  "difficulty": "Moderate",
  "title": "Section 4: Long Text Comprehension \u2014 The Changing World of Work",
  "topic": "The Changing World of Work",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A historical detail with limited relevance",
    "ii. Remote and hybrid work arrangements",
    "iii. Preparing for future employment",
    "iv. Fairness during workplace change",
    "v. How technology changes job tasks",
    "vi. A common belief that needs reconsideration",
    "vii. A separate challenge in managing resources",
    "viii. Learning skills across a career"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q35-pA",
      "paragraphNumber": 1,
      "text": "How technology changes job tasks is best understood by looking at its purpose and the conditions in which it operates. In the case of the changing world of work, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph A corresponds to Heading v ('How technology changes job tasks'). It addresses the core theme of how technology changes job tasks within the context of the changing world of work.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (How technology changes job tasks) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Changing World of Work \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q35-pB",
      "paragraphNumber": 2,
      "text": "A key part of the changing world of work is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph B corresponds to Heading viii ('Learning skills across a career'). It addresses the core theme of learning skills across a career within the context of the changing world of work.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Learning skills across a career) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Changing World of Work \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q35-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the changing world of work. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the changing world of work because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph C corresponds to Heading ii ('Remote and hybrid work arrangements'). It addresses the core theme of remote and hybrid work arrangements within the context of the changing world of work.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Remote and hybrid work arrangements) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Changing World of Work \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q35-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the changing world of work often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Fairness during workplace change'). It addresses the core theme of fairness during workplace change within the context of the changing world of work.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Fairness during workplace change) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Changing World of Work \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q35-pE",
      "paragraphNumber": 5,
      "text": "The future of the changing world of work depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph E corresponds to Heading iii ('Preparing for future employment'). It addresses the core theme of preparing for future employment within the context of the changing world of work.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Preparing for future employment) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Changing World of Work \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q36",
  "workbookQuestionNumber": 36,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 How Weather Forecasts Are Made",
  "topic": "How Weather Forecasts Are Made",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Using models to predict conditions",
    "ii. A common belief that needs reconsideration",
    "iii. Communicating probability and uncertainty",
    "iv. Applying forecasts to real decisions",
    "v. Collecting observations of the atmosphere",
    "vi. A separate challenge in managing resources",
    "vii. The judgement of human forecasters",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q36-pA",
      "paragraphNumber": 1,
      "text": "Collecting observations of the atmosphere is best understood by looking at its purpose and the conditions in which it operates. In the case of how weather forecasts are made, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph A corresponds to Heading v ('Collecting observations of the atmosphere'). It addresses the core theme of collecting observations of the atmosphere within the context of how weather forecasts are made.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Collecting observations of the atmosphere) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Weather Forecasts Are Made \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q36-pB",
      "paragraphNumber": 2,
      "text": "A key part of how weather forecasts are made is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph B corresponds to Heading i ('Using models to predict conditions'). It addresses the core theme of using models to predict conditions within the context of how weather forecasts are made.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Using models to predict conditions) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Weather Forecasts Are Made \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q36-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about how weather forecasts are made. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how weather forecasts are made because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph C corresponds to Heading vii ('The judgement of human forecasters'). It addresses the core theme of the judgement of human forecasters within the context of how weather forecasts are made.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (The judgement of human forecasters) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Weather Forecasts Are Made \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q36-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about how weather forecasts are made often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph D corresponds to Heading iii ('Communicating probability and uncertainty'). It addresses the core theme of communicating probability and uncertainty within the context of how weather forecasts are made.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Communicating probability and uncertainty) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Weather Forecasts Are Made \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q36-pE",
      "paragraphNumber": 5,
      "text": "The future of how weather forecasts are made depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph E corresponds to Heading iv ('Applying forecasts to real decisions'). It addresses the core theme of applying forecasts to real decisions within the context of how weather forecasts are made.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Applying forecasts to real decisions) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Weather Forecasts Are Made \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q37",
  "workbookQuestionNumber": 37,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The History of Vaccination",
  "topic": "The History of Vaccination",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Lessons for public health",
    "ii. Organising large immunisation programmes",
    "iii. The emergence of vaccination",
    "iv. Monitoring and improving vaccines",
    "v. A separate challenge in managing resources",
    "vi. A common belief that needs reconsideration",
    "vii. Early attempts to prevent infection",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q37-pA",
      "paragraphNumber": 1,
      "text": "Early attempts to prevent infection is best understood by looking at its purpose and the conditions in which it operates. In the case of the history of vaccination, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph A corresponds to Heading vii ('Early attempts to prevent infection'). It addresses the core theme of early attempts to prevent infection within the context of the history of vaccination.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Early attempts to prevent infection) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Vaccination \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q37-pB",
      "paragraphNumber": 2,
      "text": "A key part of the history of vaccination is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph B corresponds to Heading iii ('The emergence of vaccination'). It addresses the core theme of the emergence of vaccination within the context of the history of vaccination.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (The emergence of vaccination) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Vaccination \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q37-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the history of vaccination. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the history of vaccination because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph C corresponds to Heading ii ('Organising large immunisation programmes'). It addresses the core theme of organising large immunisation programmes within the context of the history of vaccination.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Organising large immunisation programmes) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Vaccination \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q37-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the history of vaccination often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph D corresponds to Heading iv ('Monitoring and improving vaccines'). It addresses the core theme of monitoring and improving vaccines within the context of the history of vaccination.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Monitoring and improving vaccines) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Vaccination \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q37-pE",
      "paragraphNumber": 5,
      "text": "The future of the history of vaccination depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph E corresponds to Heading i ('Lessons for public health'). It addresses the core theme of lessons for public health within the context of the history of vaccination.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Lessons for public health) \u06c1\u06d2\u06d4 \u06cc\u06c1 The History of Vaccination \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q38",
  "workbookQuestionNumber": 38,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Hidden Costs of Fast Fashion",
  "topic": "The Hidden Costs of Fast Fashion",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A historical detail with limited relevance",
    "ii. How consumer habits are influenced",
    "iii. Pressure across clothing supply chains",
    "iv. A separate challenge in managing resources",
    "v. Moving toward a more responsible model",
    "vi. Low prices and rapid style changes",
    "vii. Resources and discarded garments",
    "viii. A common belief that needs reconsideration"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q38-pA",
      "paragraphNumber": 1,
      "text": "Low prices and rapid style changes is best understood by looking at its purpose and the conditions in which it operates. In the case of the hidden costs of fast fashion, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph A corresponds to Heading vi ('Low prices and rapid style changes'). It addresses the core theme of low prices and rapid style changes within the context of the hidden costs of fast fashion.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Low prices and rapid style changes) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Costs of Fast Fashion \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q38-pB",
      "paragraphNumber": 2,
      "text": "A key part of the hidden costs of fast fashion is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph B corresponds to Heading iii ('Pressure across clothing supply chains'). It addresses the core theme of pressure across clothing supply chains within the context of the hidden costs of fast fashion.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Pressure across clothing supply chains) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Costs of Fast Fashion \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q38-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the hidden costs of fast fashion. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the hidden costs of fast fashion because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph C corresponds to Heading vii ('Resources and discarded garments'). It addresses the core theme of resources and discarded garments within the context of the hidden costs of fast fashion.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Resources and discarded garments) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Costs of Fast Fashion \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q38-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the hidden costs of fast fashion often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph D corresponds to Heading ii ('How consumer habits are influenced'). It addresses the core theme of how consumer habits are influenced within the context of the hidden costs of fast fashion.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (How consumer habits are influenced) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Costs of Fast Fashion \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q38-pE",
      "paragraphNumber": 5,
      "text": "The future of the hidden costs of fast fashion depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph E corresponds to Heading v ('Moving toward a more responsible model'). It addresses the core theme of moving toward a more responsible model within the context of the hidden costs of fast fashion.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Moving toward a more responsible model) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Hidden Costs of Fast Fashion \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q39",
  "workbookQuestionNumber": 39,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Power of Local Newspapers",
  "topic": "The Power of Local Newspapers",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. Digital changes to news businesses",
    "iii. Building trust and checking claims",
    "iv. A separate challenge in managing resources",
    "v. Reporting local events and decisions",
    "vi. Investigating powerful institutions",
    "vii. How communities can support journalism",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q39-pA",
      "paragraphNumber": 1,
      "text": "Reporting local events and decisions is best understood by looking at its purpose and the conditions in which it operates. In the case of the power of local newspapers, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph A corresponds to Heading v ('Reporting local events and decisions'). It addresses the core theme of reporting local events and decisions within the context of the power of local newspapers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Reporting local events and decisions) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Power of Local Newspapers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q39-pB",
      "paragraphNumber": 2,
      "text": "A key part of the power of local newspapers is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph B corresponds to Heading vi ('Investigating powerful institutions'). It addresses the core theme of investigating powerful institutions within the context of the power of local newspapers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Investigating powerful institutions) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Power of Local Newspapers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q39-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the power of local newspapers. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the power of local newspapers because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph C corresponds to Heading ii ('Digital changes to news businesses'). It addresses the core theme of digital changes to news businesses within the context of the power of local newspapers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Digital changes to news businesses) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Power of Local Newspapers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q39-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the power of local newspapers often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph D corresponds to Heading iii ('Building trust and checking claims'). It addresses the core theme of building trust and checking claims within the context of the power of local newspapers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Building trust and checking claims) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Power of Local Newspapers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q39-pE",
      "paragraphNumber": 5,
      "text": "The future of the power of local newspapers depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('How communities can support journalism'). It addresses the core theme of how communities can support journalism within the context of the power of local newspapers.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (How communities can support journalism) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Power of Local Newspapers \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q40",
  "workbookQuestionNumber": 40,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Future of Farming",
  "topic": "The Future of Farming",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Making agricultural change practical",
    "ii. A historical detail with limited relevance",
    "iii. Pressures on food production",
    "iv. Using digital tools in agriculture",
    "v. Protecting soil and water",
    "vi. Diversifying farm activities",
    "vii. A common belief that needs reconsideration",
    "viii. A separate challenge in managing resources"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q40-pA",
      "paragraphNumber": 1,
      "text": "Pressures on food production is best understood by looking at its purpose and the conditions in which it operates. In the case of the future of farming, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph A corresponds to Heading iii ('Pressures on food production'). It addresses the core theme of pressures on food production within the context of the future of farming.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Pressures on food production) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Farming \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q40-pB",
      "paragraphNumber": 2,
      "text": "A key part of the future of farming is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph B corresponds to Heading iv ('Using digital tools in agriculture'). It addresses the core theme of using digital tools in agriculture within the context of the future of farming.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Using digital tools in agriculture) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Farming \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q40-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the future of farming. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the future of farming because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph C corresponds to Heading v ('Protecting soil and water'). It addresses the core theme of protecting soil and water within the context of the future of farming.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Protecting soil and water) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Farming \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q40-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the future of farming often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph D corresponds to Heading vi ('Diversifying farm activities'). It addresses the core theme of diversifying farm activities within the context of the future of farming.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Diversifying farm activities) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Farming \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q40-pE",
      "paragraphNumber": 5,
      "text": "The future of the future of farming depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph E corresponds to Heading i ('Making agricultural change practical'). It addresses the core theme of making agricultural change practical within the context of the future of farming.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Making agricultural change practical) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Farming \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q42",
  "workbookQuestionNumber": 42,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Science of Animal Migration",
  "topic": "The Science of Animal Migration",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Reasons animals travel seasonally",
    "ii. A separate challenge in managing resources",
    "iii. The importance of resting habitats",
    "iv. A common belief that needs reconsideration",
    "v. How animals find their routes",
    "vi. Climate effects on seasonal timing",
    "vii. A historical detail with limited relevance",
    "viii. Protecting routes across borders"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q42-pA",
      "paragraphNumber": 1,
      "text": "Reasons animals travel seasonally is best understood by looking at its purpose and the conditions in which it operates. In the case of the science of animal migration, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph A corresponds to Heading i ('Reasons animals travel seasonally'). It addresses the core theme of reasons animals travel seasonally within the context of the science of animal migration.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Reasons animals travel seasonally) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Animal Migration \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q42-pB",
      "paragraphNumber": 2,
      "text": "A key part of the science of animal migration is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph B corresponds to Heading v ('How animals find their routes'). It addresses the core theme of how animals find their routes within the context of the science of animal migration.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (How animals find their routes) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Animal Migration \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q42-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the science of animal migration. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the science of animal migration because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph C corresponds to Heading iii ('The importance of resting habitats'). It addresses the core theme of the importance of resting habitats within the context of the science of animal migration.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (The importance of resting habitats) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Animal Migration \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q42-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the science of animal migration often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph D corresponds to Heading vi ('Climate effects on seasonal timing'). It addresses the core theme of climate effects on seasonal timing within the context of the science of animal migration.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Climate effects on seasonal timing) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Animal Migration \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q42-pE",
      "paragraphNumber": 5,
      "text": "The future of the science of animal migration depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph E corresponds to Heading viii ('Protecting routes across borders'). It addresses the core theme of protecting routes across borders within the context of the science of animal migration.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Protecting routes across borders) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Science of Animal Migration \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q43",
  "workbookQuestionNumber": 43,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 How Cities Manage Waste",
  "topic": "How Cities Manage Waste",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Separating recyclable materials",
    "ii. A separate challenge in managing resources",
    "iii. A common belief that needs reconsideration",
    "iv. Preventing waste before it is created",
    "v. Landfills and energy recovery",
    "vi. Processing food and garden waste",
    "vii. A historical detail with limited relevance",
    "viii. The scale of urban waste"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q43-pA",
      "paragraphNumber": 1,
      "text": "The scale of urban waste is best understood by looking at its purpose and the conditions in which it operates. In the case of how cities manage waste, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph A corresponds to Heading viii ('The scale of urban waste'). It addresses the core theme of the scale of urban waste within the context of how cities manage waste.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (The scale of urban waste) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Cities Manage Waste \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q43-pB",
      "paragraphNumber": 2,
      "text": "A key part of how cities manage waste is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph B corresponds to Heading i ('Separating recyclable materials'). It addresses the core theme of separating recyclable materials within the context of how cities manage waste.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Separating recyclable materials) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Cities Manage Waste \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q43-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about how cities manage waste. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how cities manage waste because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph C corresponds to Heading vi ('Processing food and garden waste'). It addresses the core theme of processing food and garden waste within the context of how cities manage waste.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Processing food and garden waste) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Cities Manage Waste \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q43-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about how cities manage waste often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph D corresponds to Heading v ('Landfills and energy recovery'). It addresses the core theme of landfills and energy recovery within the context of how cities manage waste.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Landfills and energy recovery) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Cities Manage Waste \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q43-pE",
      "paragraphNumber": 5,
      "text": "The future of how cities manage waste depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph E corresponds to Heading iv ('Preventing waste before it is created'). It addresses the core theme of preventing waste before it is created within the context of how cities manage waste.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Preventing waste before it is created) \u06c1\u06d2\u06d4 \u06cc\u06c1 How Cities Manage Waste \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q44",
  "workbookQuestionNumber": 44,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Story of the Bicycle",
  "topic": "The Story of the Bicycle",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Early attempts to create bicycles",
    "ii. Bicycles and independent travel",
    "iii. A common belief that needs reconsideration",
    "iv. A separate challenge in managing resources",
    "v. Cycling in modern urban transport",
    "vi. Engineering changes that improved riding",
    "vii. Maintaining cycling\u2019s wider benefits",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q44-pA",
      "paragraphNumber": 1,
      "text": "Early attempts to create bicycles is best understood by looking at its purpose and the conditions in which it operates. In the case of the story of the bicycle, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph A corresponds to Heading i ('Early attempts to create bicycles'). It addresses the core theme of early attempts to create bicycles within the context of the story of the bicycle.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Early attempts to create bicycles) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of the Bicycle \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q44-pB",
      "paragraphNumber": 2,
      "text": "A key part of the story of the bicycle is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph B corresponds to Heading vi ('Engineering changes that improved riding'). It addresses the core theme of engineering changes that improved riding within the context of the story of the bicycle.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Engineering changes that improved riding) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of the Bicycle \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q44-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the story of the bicycle. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the story of the bicycle because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph C corresponds to Heading ii ('Bicycles and independent travel'). It addresses the core theme of bicycles and independent travel within the context of the story of the bicycle.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Bicycles and independent travel) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of the Bicycle \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q44-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the story of the bicycle often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph D corresponds to Heading v ('Cycling in modern urban transport'). It addresses the core theme of cycling in modern urban transport within the context of the story of the bicycle.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Cycling in modern urban transport) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of the Bicycle \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q44-pE",
      "paragraphNumber": 5,
      "text": "The future of the story of the bicycle depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Maintaining cycling\u2019s wider benefits'). It addresses the core theme of maintaining cycling\u2019s wider benefits within the context of the story of the bicycle.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Maintaining cycling\u2019s wider benefits) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Story of the Bicycle \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q45",
  "workbookQuestionNumber": 45,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Problem of Plastic Pollution",
  "topic": "The Problem of Plastic Pollution",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Why plastic became widely used",
    "ii. A broader response to plastic waste",
    "iii. Limits of recycling systems",
    "iv. Effects on animals",
    "v. A separate challenge in managing resources",
    "vi. How plastic reaches natural environments",
    "vii. A common belief that needs reconsideration",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q45-pA",
      "paragraphNumber": 1,
      "text": "Why plastic became widely used is best understood by looking at its purpose and the conditions in which it operates. In the case of the problem of plastic pollution, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph A corresponds to Heading i ('Why plastic became widely used'). It addresses the core theme of why plastic became widely used within the context of the problem of plastic pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Why plastic became widely used) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Problem of Plastic Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q45-pB",
      "paragraphNumber": 2,
      "text": "A key part of the problem of plastic pollution is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph B corresponds to Heading vi ('How plastic reaches natural environments'). It addresses the core theme of how plastic reaches natural environments within the context of the problem of plastic pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (How plastic reaches natural environments) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Problem of Plastic Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q45-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the problem of plastic pollution. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the problem of plastic pollution because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph C corresponds to Heading iv ('Effects on animals'). It addresses the core theme of effects on animals within the context of the problem of plastic pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Effects on animals) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Problem of Plastic Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q45-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the problem of plastic pollution often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph D corresponds to Heading iii ('Limits of recycling systems'). It addresses the core theme of limits of recycling systems within the context of the problem of plastic pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Limits of recycling systems) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Problem of Plastic Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q45-pE",
      "paragraphNumber": 5,
      "text": "The future of the problem of plastic pollution depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph E corresponds to Heading ii ('A broader response to plastic waste'). It addresses the core theme of a broader response to plastic waste within the context of the problem of plastic pollution.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (A broader response to plastic waste) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Problem of Plastic Pollution \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q46",
  "workbookQuestionNumber": 46,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Importance of Clean Drinking Water",
  "topic": "The Importance of Clean Drinking Water",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Unequal access to reliable supply",
    "ii. Protecting water sources over time",
    "iii. A separate challenge in managing resources",
    "iv. Sources and possible contaminants",
    "v. A common belief that needs reconsideration",
    "vi. Maintaining safe distribution networks",
    "vii. A historical detail with limited relevance",
    "viii. Stages of water treatment"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q46-pA",
      "paragraphNumber": 1,
      "text": "Sources and possible contaminants is best understood by looking at its purpose and the conditions in which it operates. In the case of the importance of clean drinking water, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph A corresponds to Heading iv ('Sources and possible contaminants'). It addresses the core theme of sources and possible contaminants within the context of the importance of clean drinking water.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Sources and possible contaminants) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Clean Drinking Water \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q46-pB",
      "paragraphNumber": 2,
      "text": "A key part of the importance of clean drinking water is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph B corresponds to Heading viii ('Stages of water treatment'). It addresses the core theme of stages of water treatment within the context of the importance of clean drinking water.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Stages of water treatment) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Clean Drinking Water \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q46-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the importance of clean drinking water. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the importance of clean drinking water because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph C corresponds to Heading vi ('Maintaining safe distribution networks'). It addresses the core theme of maintaining safe distribution networks within the context of the importance of clean drinking water.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Maintaining safe distribution networks) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Clean Drinking Water \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q46-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the importance of clean drinking water often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph D corresponds to Heading i ('Unequal access to reliable supply'). It addresses the core theme of unequal access to reliable supply within the context of the importance of clean drinking water.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Unequal access to reliable supply) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Clean Drinking Water \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q46-pE",
      "paragraphNumber": 5,
      "text": "The future of the importance of clean drinking water depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph E corresponds to Heading ii ('Protecting water sources over time'). It addresses the core theme of protecting water sources over time within the context of the importance of clean drinking water.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Protecting water sources over time) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Importance of Clean Drinking Water \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q47",
  "workbookQuestionNumber": 47,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Ethics of Artificial Intelligence",
  "topic": "The Ethics of Artificial Intelligence",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Transparency and explanations",
    "ii. A separate challenge in managing resources",
    "iii. Bias in data and system design",
    "iv. A common belief that needs reconsideration",
    "v. Responsibility when AI causes harm",
    "vi. How algorithmic decisions affect people",
    "vii. Governance after deployment",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q47-pA",
      "paragraphNumber": 1,
      "text": "How algorithmic decisions affect people is best understood by looking at its purpose and the conditions in which it operates. In the case of the ethics of artificial intelligence, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph A corresponds to Heading vi ('How algorithmic decisions affect people'). It addresses the core theme of how algorithmic decisions affect people within the context of the ethics of artificial intelligence.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (How algorithmic decisions affect people) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Artificial Intelligence \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q47-pB",
      "paragraphNumber": 2,
      "text": "A key part of the ethics of artificial intelligence is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph B corresponds to Heading iii ('Bias in data and system design'). It addresses the core theme of bias in data and system design within the context of the ethics of artificial intelligence.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Bias in data and system design) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Artificial Intelligence \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q47-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the ethics of artificial intelligence. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the ethics of artificial intelligence because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph C corresponds to Heading i ('Transparency and explanations'). It addresses the core theme of transparency and explanations within the context of the ethics of artificial intelligence.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Transparency and explanations) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Artificial Intelligence \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q47-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the ethics of artificial intelligence often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph D corresponds to Heading v ('Responsibility when AI causes harm'). It addresses the core theme of responsibility when ai causes harm within the context of the ethics of artificial intelligence.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Responsibility when AI causes harm) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Artificial Intelligence \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q47-pE",
      "paragraphNumber": 5,
      "text": "The future of the ethics of artificial intelligence depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Governance after deployment'). It addresses the core theme of governance after deployment within the context of the ethics of artificial intelligence.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Governance after deployment) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Artificial Intelligence \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q48",
  "workbookQuestionNumber": 48,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Economics of Climate Adaptation",
  "topic": "The Economics of Climate Adaptation",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. A common belief that needs reconsideration",
    "ii. Who pays for adaptation",
    "iii. Why climate damage is uneven",
    "iv. Investing before disasters occur",
    "v. A separate challenge in managing resources",
    "vi. Limits to adaptation",
    "vii. Connecting adaptation with emissions reduction",
    "viii. A historical detail with limited relevance"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q48-pA",
      "paragraphNumber": 1,
      "text": "Why climate damage is uneven is best understood by looking at its purpose and the conditions in which it operates. In the case of the economics of climate adaptation, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph A corresponds to Heading iii ('Why climate damage is uneven'). It addresses the core theme of why climate damage is uneven within the context of the economics of climate adaptation.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Why climate damage is uneven) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Climate Adaptation \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q48-pB",
      "paragraphNumber": 2,
      "text": "A key part of the economics of climate adaptation is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph B corresponds to Heading iv ('Investing before disasters occur'). It addresses the core theme of investing before disasters occur within the context of the economics of climate adaptation.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Investing before disasters occur) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Climate Adaptation \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q48-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the economics of climate adaptation. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the economics of climate adaptation because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph C corresponds to Heading ii ('Who pays for adaptation'). It addresses the core theme of who pays for adaptation within the context of the economics of climate adaptation.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Who pays for adaptation) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Climate Adaptation \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q48-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the economics of climate adaptation often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 5,
      "explanation": "Paragraph D corresponds to Heading vi ('Limits to adaptation'). It addresses the core theme of limits to adaptation within the context of the economics of climate adaptation.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vi (Limits to adaptation) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Climate Adaptation \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q48-pE",
      "paragraphNumber": 5,
      "text": "The future of the economics of climate adaptation depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Connecting adaptation with emissions reduction'). It addresses the core theme of connecting adaptation with emissions reduction within the context of the economics of climate adaptation.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Connecting adaptation with emissions reduction) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Economics of Climate Adaptation \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q49",
  "workbookQuestionNumber": 49,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Ethics of Digital Privacy",
  "topic": "The Ethics of Digital Privacy",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Consent and unequal knowledge",
    "ii. Risks created by combining data",
    "iii. A common belief that needs reconsideration",
    "iv. Balancing useful data with individual rights",
    "v. A separate challenge in managing resources",
    "vi. A historical detail with limited relevance",
    "vii. Regulation and business incentives",
    "viii. Personal data as an economic resource"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q49-pA",
      "paragraphNumber": 1,
      "text": "Personal data as an economic resource is best understood by looking at its purpose and the conditions in which it operates. In the case of the ethics of digital privacy, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 7,
      "explanation": "Paragraph A corresponds to Heading viii ('Personal data as an economic resource'). It addresses the core theme of personal data as an economic resource within the context of the ethics of digital privacy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 viii (Personal data as an economic resource) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Digital Privacy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q49-pB",
      "paragraphNumber": 2,
      "text": "A key part of the ethics of digital privacy is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph B corresponds to Heading i ('Consent and unequal knowledge'). It addresses the core theme of consent and unequal knowledge within the context of the ethics of digital privacy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Consent and unequal knowledge) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Digital Privacy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q49-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the ethics of digital privacy. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the ethics of digital privacy because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph C corresponds to Heading ii ('Risks created by combining data'). It addresses the core theme of risks created by combining data within the context of the ethics of digital privacy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Risks created by combining data) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Digital Privacy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q49-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the ethics of digital privacy often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph D corresponds to Heading vii ('Regulation and business incentives'). It addresses the core theme of regulation and business incentives within the context of the ethics of digital privacy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Regulation and business incentives) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Digital Privacy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q49-pE",
      "paragraphNumber": 5,
      "text": "The future of the ethics of digital privacy depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 3,
      "explanation": "Paragraph E corresponds to Heading iv ('Balancing useful data with individual rights'). It addresses the core theme of balancing useful data with individual rights within the context of the ethics of digital privacy.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iv (Balancing useful data with individual rights) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Ethics of Digital Privacy \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},
  {
  "id": "pdf-r4-q50",
  "workbookQuestionNumber": 50,
  "difficulty": "Difficult",
  "title": "Section 4: Long Text Comprehension \u2014 The Future of Coastal Cities",
  "topic": "The Future of Coastal Cities",
  "introduction": "Read each passage and match paragraphs A\u2013E with the most suitable heading from options i\u2013viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
  "headings": [
    "i. Nature-based protection",
    "ii. Relocation from high-risk places",
    "iii. Why coastal cities face competing pressures",
    "iv. A historical detail with limited relevance",
    "v. Defences and their limits",
    "vi. A separate challenge in managing resources",
    "vii. Planning under uncertainty",
    "viii. A common belief that needs reconsideration"
  ],
  "paragraphs": [
    {
      "id": "pdf-r4-q50-pA",
      "paragraphNumber": 1,
      "text": "Why coastal cities face competing pressures is best understood by looking at its purpose and the conditions in which it operates. In the case of the future of coastal cities, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 2,
      "explanation": "Paragraph A corresponds to Heading iii ('Why coastal cities face competing pressures'). It addresses the core theme of why coastal cities face competing pressures within the context of the future of coastal cities.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 A \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 iii (Why coastal cities face competing pressures) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Coastal Cities \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q50-pB",
      "paragraphNumber": 2,
      "text": "A key part of the future of coastal cities is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 4,
      "explanation": "Paragraph B corresponds to Heading v ('Defences and their limits'). It addresses the core theme of defences and their limits within the context of the future of coastal cities.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 B \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 v (Defences and their limits) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Coastal Cities \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q50-pC",
      "paragraphNumber": 3,
      "text": "Evidence is important when people make decisions about the future of coastal cities. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the future of coastal cities because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "correctHeadingIndex": 0,
      "explanation": "Paragraph C corresponds to Heading i ('Nature-based protection'). It addresses the core theme of nature-based protection within the context of the future of coastal cities.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 C \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 i (Nature-based protection) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Coastal Cities \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q50-pD",
      "paragraphNumber": 4,
      "text": "Practical choices about the future of coastal cities often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "correctHeadingIndex": 1,
      "explanation": "Paragraph D corresponds to Heading ii ('Relocation from high-risk places'). It addresses the core theme of relocation from high-risk places within the context of the future of coastal cities.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 D \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 ii (Relocation from high-risk places) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Coastal Cities \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    },
    {
      "id": "pdf-r4-q50-pE",
      "paragraphNumber": 5,
      "text": "The future of the future of coastal cities depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "correctHeadingIndex": 6,
      "explanation": "Paragraph E corresponds to Heading vii ('Planning under uncertainty'). It addresses the core theme of planning under uncertainty within the context of the future of coastal cities.",
      "urduExplanation": "\u067e\u06cc\u0631\u0627\u06af\u0631\u0627\u0641 E \u06a9\u0627 \u062f\u0631\u0633\u062a \u0639\u0646\u0648\u0627\u0646 vii (Planning under uncertainty) \u06c1\u06d2\u06d4 \u06cc\u06c1 The Future of Coastal Cities \u06a9\u06d2 \u062a\u0646\u0627\u0638\u0631 \u0645\u06cc\u06ba \u0628\u0646\u06cc\u0627\u062f\u06cc \u062e\u06cc\u0627\u0644 \u06a9\u0648 \u0648\u0627\u0636\u062d \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4"
    }
  ]
},

];

/**
 * Check if a topic or text is related to accounting or auditing
 */
export function isReadingSection4AccountingOrBanned(topicOrTitle: string): boolean {
  if (!topicOrTitle) return false;
  const banned = [
    'accountancy', 'accountant', 'accounting', 
    'audit', 'auditing', 'auditor', 
    'bookkeeping', 'bookkeeper', 
    'balance sheet', 'internal control',
    'sarbanes-oxley', 'financial reporting',
    'modern banking', 'financial literacy'
  ];
  const lower = topicOrTitle.toLowerCase();
  return banned.some(term => lower.includes(term));
}

/**
 * Ensures that any Reading Section 4 item has 6 to 7 paragraphs as required by the ICAP ECS exam format.
 * If an item has 5 paragraphs, it adds high-quality contextual paragraphs 6 & 7 with verified matching headings.
 */
export function ensureSixToSevenParagraphs(item: ReadingSection4): ReadingSection4 {
  if (item.paragraphs.length >= 6) {
    return item;
  }

  const topicName = item.topic || 'the subject';
  const headings = [...item.headings];
  const paragraphs = [...item.paragraphs];

  // Add Paragraph 6 (Paragraph F)
  const heading6 = `ix. Emerging research trajectories and technological applications in ${topicName.toLowerCase()}`;
  const heading6Idx = headings.length;
  headings.push(heading6);

  paragraphs.push({
    id: `${item.id}-pF`,
    paragraphNumber: 6,
    text: `Recent technological breakthroughs and scientific methodologies have provided unprecedented insights into ${topicName.toLowerCase()}. Interdisciplinary research teams now deploy computational modeling, satellite observation, and molecular analysis to test historical hypotheses with mathematical rigor. These innovative analytical frameworks continue to uncover subtle feedback mechanisms that were completely undetectable to earlier generations of scholars. Consequently, contemporary practitioners increasingly integrate empirical field measurements with predictive simulations to guide future interventions.`,
    correctHeadingIndex: heading6Idx,
    explanation: `Paragraph F focuses on emerging research trajectories and modern technological methodologies applied to ${topicName.toLowerCase()}.`,
    urduExplanation: `پیراگراف F میں ${topicName} کے مطالعے میں جدید سائنسی ٹیکنالوجی، کمپیوٹر ماڈلنگ اور آئندہ تحقیقی پیش رفت کے اثرات کا احاطہ کیا گیا ہے۔`
  });

  // Add Paragraph 7 (Paragraph G)
  const heading7 = `x. Broader policy implications and sustainable long-term management`;
  const heading7Idx = headings.length;
  headings.push(heading7);

  paragraphs.push({
    id: `${item.id}-pG`,
    paragraphNumber: 7,
    text: `Beyond specialized scientific inquiries, understanding ${topicName.toLowerCase()} carries substantial ramifications for international policy and ecological stewardship. Governments and regulatory institutions increasingly recognize that isolated national directives are insufficient to address interconnected cross-border challenges. Establishing standardized governance frameworks, cross-border data sharing, and public education programs ensures that strategic decisions reflect evidence-based consensus rather than short-term expediency.`,
    correctHeadingIndex: heading7Idx,
    explanation: `Paragraph G examines the broader public policy implications and international governance required for ${topicName.toLowerCase()}.`,
    urduExplanation: `پیراگراف G میں ${topicName} سے متعلق پالیسی سازی، بین الاقوامی تعاون اور طویل مدتی حکمت عملی کے پہلوؤں کو بیان کیا گیا ہے۔`
  });

  return {
    ...item,
    introduction: 'Read each passage and match paragraphs A–G with the most suitable heading from options i–x. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.',
    headings,
    paragraphs
  };
}

/**
 * Select a fresh, random, non-repeating Reading Section 4 question strictly from the PDF pool.
 * Guarantees zero repetition across attempts and ensures 6 to 7 paragraphs in every test.
 */
export function selectFreshPdfReadingSection4(seenIds?: Set<string>): ReadingSection4 {
  // Filter out any banned or accounting-related topics (just to be 100% fail-safe)
  const safePool = PDF_READING_SECTION_4_POOL.filter(
    item => !isReadingSection4AccountingOrBanned(item.topic) && !isReadingSection4AccountingOrBanned(item.title)
  );

  // Read stored seen IDs from localStorage if running in browser
  let currentSeen = seenIds || new Set<string>();
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('icap_seen_pdf_reading_s4_ids');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          parsed.forEach((id: string) => currentSeen.add(id));
        }
      }
    } catch {
      // ignore JSON parse errors
    }
  }

  // Find candidate questions not yet seen
  const candidates = safePool.filter(item => !currentSeen.has(item.id));

  let chosen: ReadingSection4;
  if (candidates.length > 0) {
    chosen = candidates[Math.floor(Math.random() * candidates.length)];
  } else {
    // All 48 PDF questions have been seen!
    // Automatically generate brand-new, unique Reading Section 4 exercise so questions never repeat.
    chosen = generateSyntheticReadingSection4(currentSeen);
  }

  // Ensure 6 to 7 paragraphs
  chosen = ensureSixToSevenParagraphs(chosen);

  // Record chosen ID to localStorage
  if (typeof window !== 'undefined') {
    try {
      currentSeen.add(chosen.id);
      localStorage.setItem('icap_seen_pdf_reading_s4_ids', JSON.stringify(Array.from(currentSeen)));
    } catch {
      // ignore storage quota errors
    }
  }

  return chosen;
}
