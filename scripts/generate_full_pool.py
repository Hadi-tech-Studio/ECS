# scripts/generate_full_pool.py
import json

QUESTIONS = [
  # Easy 1-10
  {
    "q": 1, "topic": "The Hidden Life of Trees", "diff": "Easy",
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
    "key": [0, 1, 7, 3, 5],
    "p": [
      "Root systems and their purpose is best understood by looking at its purpose and the conditions in which it operates. In the case of the hidden life of trees, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "A key part of the hidden life of trees is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "Evidence is important when people make decisions about the hidden life of trees. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the hidden life of trees because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "Practical choices about the hidden life of trees often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "The future of the hidden life of trees depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  },
  {
    "q": 2, "topic": "Why Bees Visit Flowers", "diff": "Easy",
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
    "key": [6, 4, 1, 5, 7],
    "p": [
      "Flowers attract pollinators with colour, scent and nectar. Nectar supplies sugary energy, while pollen contains nutrients that insects collect. Different flower shapes suit different visitors, and the timing of flowering affects when food is available. A garden with a range of plants can provide resources across more of the year. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "When an insect visits a flower, pollen may stick to its body and travel to another flower of the same species. This movement can allow fertilisation and the production of seeds or fruit. Pollination is not identical in every plant: some rely heavily on insects, while others use wind or other methods to move pollen. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "A worker bee may visit many flowers in one trip, following visual clues and learned routes. It returns with nectar or pollen, which other workers help process and store. The distance travelled depends on weather, food availability and the needs of the colony. Reliable patches of flowers reduce the effort required to find food. This is relevant to why bees visit flowers because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "Bees face pressures including habitat loss, parasites, disease, pesticides and changing weather. When flowers are available for only a short period, food can become scarce during other seasons. These factors interact, and the reasons for a population decline can differ between locations. Researchers therefore examine several possible pressures rather than assuming one cause explains every case. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "People can help pollinators by planting locally suitable flowers that bloom at different times and by reducing unnecessary pesticide use. Leaving undisturbed corners or hollow stems can provide nesting spaces for some species. These steps cannot solve every threat, but they improve local habitat and make gardens and public spaces more useful to wildlife. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  },
  {
    "q": 3, "topic": "The Journey of a River", "diff": "Easy",
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
    "key": [5, 0, 6, 7, 2],
    "p": [
      "Rivers may begin in mountains, springs, wetlands or areas where rainwater gathers into small channels. As tiny streams join, they form a larger drainage network. Steep slopes often make young rivers flow quickly, while the amount of water changes with rainfall, snowmelt and the condition of the surrounding land. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "Moving water wears away rock and soil and carries material downstream. Fine particles may remain suspended, while heavier stones roll or bounce along the bed. The quantity moved depends on current speed, channel shape and particle size. During floods, a river can transport much more sediment than it carries during ordinary conditions. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "As a river reaches flatter land, its channel may widen and curve. Faster flow near the outside of a bend often erodes the bank, while slower water on the inside may deposit sediment. These changes can shift a river’s course over time and create different habitats. Human engineering can alter the process by changing flow or blocking sediment. This is relevant to the journey of a river because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "When water rises above the banks, it may spread over low-lying floodplains. These areas can temporarily store water and receive nutrient-rich sediment, while wetlands provide habitats for birds, fish and insects. Floods can damage buildings, but keeping natural floodplains open can reduce some downstream pressure and preserve ecological functions. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "A river may end in a lake, sea or ocean, sometimes forming a delta where sediment accumulates. Waves, tides and currents influence the shape of its mouth. Rivers connect inland and coastal environments by moving water, nutrients and sediment, so dams, pollution or excessive extraction can affect places far from the original disturbance. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  },
  {
    "q": 4, "topic": "How Maps Changed Travel", "diff": "Easy",
    "headings": [
      "i. A common belief that needs reconsideration",
      "ii. Understanding a map’s limitations",
      "iii. Measuring places more consistently",
      "iv. Navigation through digital systems",
      "v. The spread of printed maps",
      "vi. Finding routes before accurate maps",
      "vii. A separate challenge in managing resources",
      "viii. A historical detail with limited relevance"
    ],
    "key": [5, 4, 2, 3, 1],
    "p": [
      "Finding routes before accurate maps is best understood by looking at its purpose and the conditions in which it operates. In the case of how maps changed travel, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "A key part of how maps changed travel is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "Evidence is important when people make decisions about how maps changed travel. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how maps changed travel because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "Practical choices about how maps changed travel often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "The future of how maps changed travel depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  },
  {
    "q": 5, "topic": "The Importance of Sleep", "diff": "Easy",
    "headings": [
      "i. Developing a sustainable sleep routine",
      "ii. What happens during sleep",
      "iii. Factors that can disturb rest",
      "iv. Sleep’s relationship with memory",
      "v. The body’s daily timing system",
      "vi. A common belief that needs reconsideration",
      "vii. A historical detail with limited relevance",
      "viii. A separate challenge in managing resources"
    ],
    "key": [1, 3, 4, 2, 0],
    "p": [
      "What happens during sleep is best understood by looking at its purpose and the conditions in which it operates. In the case of the importance of sleep, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "A key part of the importance of sleep is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "Evidence is important when people make decisions about the importance of sleep. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the importance of sleep because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "Practical choices about the importance of sleep often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "The future of the importance of sleep depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  },
  {
    "q": 6, "topic": "The Secret of a Good Library", "diff": "Easy",
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
    "key": [5, 2, 0, 4, 6],
    "p": [
      "Libraries as more than book stores is best understood by looking at its purpose and the conditions in which it operates. In the case of the secret of a good library, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "A key part of the secret of a good library is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "Evidence is important when people make decisions about the secret of a good library. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the secret of a good library because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "Practical choices about the secret of a good library often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "The future of the secret of a good library depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  },
  {
    "q": 7, "topic": "How Bridges Stand", "diff": "Easy",
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
    "key": [3, 4, 5, 2, 6],
    "p": [
      "The purpose and demands of bridges is best understood by looking at its purpose and the conditions in which it operates. In the case of how bridges stand, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "A key part of how bridges stand is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "Evidence is important when people make decisions about how bridges stand. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to how bridges stand because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "Practical choices about how bridges stand often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "The future of how bridges stand depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  },
  {
    "q": 8, "topic": "The Story of Paper", "diff": "Easy",
    "headings": [
      "i. Environmental issues in paper production",
      "ii. A historical detail with limited relevance",
      "iii. Writing materials before paper",
      "iv. A common belief that needs reconsideration",
      "v. A separate challenge in managing resources",
      "vi. The basic process of papermaking",
      "vii. How paper became widely available",
      "viii. Paper’s role in a digital world"
    ],
    "key": [2, 5, 6, 0, 7],
    "p": [
      "Writing materials before paper is best understood by looking at its purpose and the conditions in which it operates. In the case of the story of paper, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "A key part of the story of paper is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "Evidence is important when people make decisions about the story of paper. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the story of paper because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "Practical choices about the story of paper often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "The future of the story of paper depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  },
  {
    "q": 9, "topic": "Why Cities Need Parks", "diff": "Easy",
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
    "key": [5, 0, 7, 2, 1],
    "p": [
      "Open space in urban environments is best understood by looking at its purpose and the conditions in which it operates. In the case of why cities need parks, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "A key part of why cities need parks is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "Evidence is important when people make decisions about why cities need parks. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to why cities need parks because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "Practical choices about why cities need parks often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "The future of why cities need parks depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  },
  {
    "q": 10, "topic": "The Science of Rainbows", "diff": "Easy",
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
    "key": [2, 5, 0, 6, 1],
    "p": [
      "Light contains different colours is best understood by looking at its purpose and the conditions in which it operates. In the case of the science of rainbows, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "A key part of the science of rainbows is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described.",
      "Evidence is important when people make decisions about the science of rainbows. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to the science of rainbows because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting.",
      "Practical choices about the science of rainbows often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example.",
      "The future of the science of rainbows depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    ]
  }
]

print(f"Part 1 ready with {len(QUESTIONS)} questions.")
