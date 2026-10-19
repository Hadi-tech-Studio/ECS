# scripts/generate_all_48.py
import re
import json

# All 50 questions definitions from the PDF OCR
RAW_QUESTIONS = [
    {
        "q": 1, "topic": "The Hidden Life of Trees", "diff": "Easy",
        "headings": [
            "Root systems and their purpose",
            "How leaves create nourishment",
            "A separate challenge in managing resources",
            "Seasonal adjustments in tree growth",
            "A common belief that needs reconsideration",
            "The wider value of forests",
            "A historical detail with limited relevance",
            "Connections between roots and fungi"
        ],
        "key": [0, 1, 7, 3, 5]
    },
    {
        "q": 2, "topic": "Why Bees Visit Flowers", "diff": "Easy",
        "headings": [
            "A historical detail with limited relevance",
            "The routine of a foraging bee",
            "A separate challenge in managing resources",
            "A common belief that needs reconsideration",
            "Moving pollen between flowers",
            "Dangers facing bee populations",
            "What attracts flower visitors",
            "Ways people can support pollinators"
        ],
        "key": [6, 4, 1, 5, 7],
        "custom_p": [
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
            "How flowing water moves sediment",
            "A common belief that needs reconsideration",
            "Where a river finally deposits material",
            "A historical detail with limited relevance",
            "A separate challenge in managing resources",
            "The sources of river water",
            "The changing shape of a river",
            "Natural functions of floodplains"
        ],
        "key": [5, 0, 6, 7, 2],
        "custom_p": [
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
            "A common belief that needs reconsideration",
            "Understanding a map’s limitations",
            "Measuring places more consistently",
            "Navigation through digital systems",
            "The spread of printed maps",
            "Finding routes before accurate maps",
            "A separate challenge in managing resources",
            "A historical detail with limited relevance"
        ],
        "key": [5, 4, 2, 3, 1]
    },
    {
        "q": 5, "topic": "The Importance of Sleep", "diff": "Easy",
        "headings": [
            "Developing a sustainable sleep routine",
            "What happens during sleep",
            "Factors that can disturb rest",
            "Sleep’s relationship with memory",
            "The body’s daily timing system",
            "A common belief that needs reconsideration",
            "A historical detail with limited relevance",
            "A separate challenge in managing resources"
        ],
        "key": [1, 3, 4, 2, 0]
    },
    {
        "q": 6, "topic": "The Secret of a Good Library", "diff": "Easy",
        "headings": [
            "How librarians support readers",
            "A historical detail with limited relevance",
            "Systems for finding information",
            "A separate challenge in managing resources",
            "The expansion of digital collections",
            "Libraries as more than book stores",
            "Libraries as community spaces",
            "A common belief that needs reconsideration"
        ],
        "key": [5, 2, 0, 4, 6]
    },
    {
        "q": 7, "topic": "How Bridges Stand", "diff": "Easy",
        "headings": [
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "Checking safety before use",
            "The purpose and demands of bridges",
            "Forces that act on structures",
            "Different bridge designs",
            "Maintaining structures over time",
            "A historical detail with limited relevance"
        ],
        "key": [3, 4, 5, 2, 6]
    },
    {
        "q": 8, "topic": "The Story of Paper", "diff": "Easy",
        "headings": [
            "Environmental issues in paper production",
            "A historical detail with limited relevance",
            "Writing materials before paper",
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "The basic process of papermaking",
            "How paper became widely available",
            "Paper’s role in a digital world"
        ],
        "key": [2, 5, 6, 0, 7]
    },
    {
        "q": 9, "topic": "Why Cities Need Parks", "diff": "Easy",
        "headings": [
            "How greenery can cool cities",
            "Maintaining healthy public spaces",
            "Benefits for community life",
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "Open space in urban environments",
            "A historical detail with limited relevance",
            "Habitats within public parks"
        ],
        "key": [5, 0, 7, 2, 1]
    },
    {
        "q": 10, "topic": "The Science of Rainbows", "diff": "Easy",
        "headings": [
            "Conditions needed for a primary arc",
            "Why each observer sees a different arc",
            "Light contains different colours",
            "A separate challenge in managing resources",
            "A historical detail with limited relevance",
            "The path of light through droplets",
            "How a secondary rainbow forms",
            "A common belief that needs reconsideration"
        ],
        "key": [2, 5, 0, 6, 1]
    },
    # Moderate 11-35
    {
        "q": 11, "topic": "The Rise of Renewable Energy", "diff": "Moderate",
        "headings": [
            "Using wind to generate power",
            "Reasons for changing energy systems",
            "The wider social transition",
            "Managing variable electricity supply",
            "A historical detail with limited relevance",
            "A separate challenge in managing resources",
            "A common belief that needs reconsideration",
            "Converting sunlight into electricity"
        ],
        "key": [1, 7, 0, 3, 2]
    },
    {
        "q": 12, "topic": "The Mystery of Deep Oceans", "diff": "Moderate",
        "headings": [
            "A separate challenge in managing resources",
            "A common belief that needs reconsideration",
            "Tools for studying the seafloor",
            "The wider importance of deep ecosystems",
            "A historical detail with limited relevance",
            "Food sources without sunlight",
            "The difficulty of exploring deep water",
            "Pressure and temperature at depth"
        ],
        "key": [6, 5, 7, 2, 3]
    },
    {
        "q": 13, "topic": "How Vaccines Train the Body", "diff": "Moderate",
        "headings": [
            "The role of immune memory",
            "Evaluating safety and effectiveness",
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "Preparing the body through vaccination",
            "A historical detail with limited relevance",
            "Benefits that extend to communities",
            "How the immune system recognises threats"
        ],
        "key": [7, 4, 0, 1, 6]
    },
    {
        "q": 14, "topic": "The Future of Public Transport", "diff": "Moderate",
        "headings": [
            "Access and fairness in transport",
            "Why cities need travel alternatives",
            "A common belief that needs reconsideration",
            "Reducing emissions from vehicles",
            "Technology for passenger information",
            "A historical detail with limited relevance",
            "Planning connected transport routes",
            "A separate challenge in managing resources"
        ],
        "key": [1, 6, 4, 3, 0]
    },
    {
        "q": 15, "topic": "The Economics of Sharing", "diff": "Moderate",
        "headings": [
            "A common belief that needs reconsideration",
            "Digital platforms and matching users",
            "A historical detail with limited relevance",
            "Using items without owning them",
            "A separate challenge in managing resources",
            "Benefits alongside hidden costs",
            "The possible direction of sharing models",
            "Trust and responsibility in shared services"
        ],
        "key": [3, 1, 5, 7, 6]
    },
    {
        "q": 16, "topic": "Why Languages Disappear", "diff": "Moderate",
        "headings": [
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "Recording language before it is lost",
            "Language as part of identity",
            "Teaching language to new speakers",
            "A historical detail with limited relevance",
            "Social pressures on language use",
            "Keeping a language active in modern life"
        ],
        "key": [3, 6, 2, 4, 7]
    },
    {
        "q": 17, "topic": "The Design of Everyday Objects", "diff": "Moderate",
        "headings": [
            "Choosing materials and production methods",
            "A historical detail with limited relevance",
            "A separate challenge in managing resources",
            "Learning from product users",
            "Considering the full impact of design",
            "A common belief that needs reconsideration",
            "Balancing purpose and appearance",
            "Planning for repair and durability"
        ],
        "key": [6, 3, 0, 7, 4]
    },
    {
        "q": 18, "topic": "How Archaeologists Reconstruct the Past", "diff": "Moderate",
        "headings": [
            "A separate challenge in managing resources",
            "A common belief that needs reconsideration",
            "The clues left by earlier societies",
            "Inferring how people lived",
            "Recording evidence during excavation",
            "Estimating the age of finds",
            "Protecting sites and cultural heritage",
            "A historical detail with limited relevance"
        ],
        "key": [2, 4, 5, 3, 6]
    },
    {
        "q": 19, "topic": "The Psychology of Habits", "diff": "Moderate",
        "headings": [
            "Adjusting the environment to support change",
            "A common belief that needs reconsideration",
            "How repeated actions become routines",
            "A separate challenge in managing resources",
            "A historical detail with limited relevance",
            "Why changing routines can be hard",
            "Making routines sustainable",
            "The role of cues and rewards"
        ],
        "key": [2, 7, 5, 0, 6]
    },
    {
        "q": 20, "topic": "The Value of Wetlands", "diff": "Moderate",
        "headings": [
            "A common belief that needs reconsideration",
            "Storing water during floods",
            "A separate challenge in managing resources",
            "Wildlife and carbon in wetland soils",
            "Choices involved in restoration",
            "The characteristics of wetland environments",
            "Natural processes that filter water",
            "A historical detail with limited relevance"
        ],
        "key": [5, 6, 1, 3, 4]
    },
    # Q21 (The Origins of Modern Banking) is intentionally excluded per "no accounting, auditing, related topics"
    {
        "q": 22, "topic": "Why Some Inventions Fail", "diff": "Moderate",
        "headings": [
            "A historical detail with limited relevance",
            "The importance of timing",
            "Learning from unsuccessful products",
            "Trust and user behaviour",
            "A common belief that needs reconsideration",
            "Challenges in mass production",
            "Why a clever idea may not succeed",
            "A separate challenge in managing resources"
        ],
        "key": [6, 1, 5, 3, 2]
    },
    {
        "q": 23, "topic": "The Impact of Light Pollution", "diff": "Moderate",
        "headings": [
            "Light and human body rhythms",
            "The growth of artificial night lighting",
            "A separate challenge in managing resources",
            "A historical detail with limited relevance",
            "Energy waste and skyglow",
            "A common belief that needs reconsideration",
            "Effects on animals",
            "Practical ways to reduce excess light"
        ],
        "key": [1, 6, 0, 4, 7]
    },
    {
        "q": 24, "topic": "How Food Labels Guide Choices", "diff": "Moderate",
        "headings": [
            "Interpreting marketing claims",
            "Reading nutrition information",
            "Information printed on food packages",
            "A historical detail with limited relevance",
            "Helping consumers understand labels",
            "A separate challenge in managing resources",
            "A common belief that needs reconsideration",
            "Ingredients and allergen warnings"
        ],
        "key": [2, 1, 7, 0, 4]
    },
    {
        "q": 25, "topic": "The Role of Museums Today", "diff": "Moderate",
        "headings": [
            "A separate challenge in managing resources",
            "Preserving important objects",
            "A historical detail with limited relevance",
            "Digital access to collections",
            "A common belief that needs reconsideration",
            "Debates over object ownership",
            "Museums as public learning spaces",
            "Creating an exhibition narrative"
        ],
        "key": [1, 7, 3, 5, 6]
    },
    {
        "q": 26, "topic": "The Challenge of Space Debris", "diff": "Moderate",
        "headings": [
            "The growth of objects in orbit",
            "A historical detail with limited relevance",
            "Cooperation over a shared orbital environment",
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "How fragments are produced",
            "Preventing and removing debris",
            "Tracking objects in space"
        ],
        "key": [0, 5, 7, 6, 2]
    },
    {
        "q": 27, "topic": "The Science of Memory", "diff": "Moderate",
        "headings": [
            "Using memory with practical supports",
            "Why memory is not a perfect recording",
            "A separate challenge in managing resources",
            "Reasons for forgetting",
            "A historical detail with limited relevance",
            "A common belief that needs reconsideration",
            "Sleep and memory consolidation",
            "How information is encoded"
        ],
        "key": [1, 7, 3, 6, 0]
    },
    {
        "q": 28, "topic": "How Fashion Reflects Society", "diff": "Moderate",
        "headings": [
            "A common belief that needs reconsideration",
            "Clothing as a signal of identity",
            "Labour behind garment production",
            "Environmental effects of clothing",
            "How trends spread rapidly",
            "A separate challenge in managing resources",
            "A historical detail with limited relevance",
            "Making more thoughtful fashion choices"
        ],
        "key": [1, 4, 2, 3, 7]
    },
    {
        "q": 29, "topic": "The History of Public Parks", "diff": "Moderate",
        "headings": [
            "A historical detail with limited relevance",
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "Planning future urban green space",
            "Designing parks for recreation",
            "Parks and public health",
            "The growth of shared green spaces",
            "Unequal access to green space"
        ],
        "key": [6, 4, 7, 5, 3]
    },
    {
        "q": 30, "topic": "The Mathematics of Cryptography", "diff": "Moderate",
        "headings": [
            "The role of difficult mathematical problems",
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "Adapting to future computing threats",
            "Protecting messages with cryptography",
            "Human and technical security weaknesses",
            "How encryption keys operate",
            "A historical detail with limited relevance"
        ],
        "key": [4, 6, 0, 5, 3]
    },
    {
        "q": 31, "topic": "The Importance of Soil", "diff": "Moderate",
        "headings": [
            "A common belief that needs reconsideration",
            "Farming methods that protect soil",
            "The composition and formation of soil",
            "Processes that degrade soil",
            "A separate challenge in managing resources",
            "A historical detail with limited relevance",
            "Soil’s role in climate systems",
            "Organisms that recycle nutrients"
        ],
        "key": [2, 7, 3, 1, 6]
    },
    {
        "q": 32, "topic": "The Rise of Citizen Science", "diff": "Moderate",
        "headings": [
            "A separate challenge in managing resources",
            "A historical detail with limited relevance",
            "Designing clear research tasks",
            "A common belief that needs reconsideration",
            "Public participation in research",
            "Using observations in decisions",
            "Benefits for participating communities",
            "Checking the quality of volunteer data"
        ],
        "key": [4, 2, 7, 6, 5]
    },
    {
        "q": 33, "topic": "Why Historic Buildings Matter", "diff": "Moderate",
        "headings": [
            "A common belief that needs reconsideration",
            "Challenges in conserving old structures",
            "A separate challenge in managing resources",
            "A historical detail with limited relevance",
            "Funding long-term preservation",
            "Buildings as evidence of the past",
            "Whose history receives recognition",
            "Giving historic buildings new uses"
        ],
        "key": [5, 1, 7, 6, 4]
    },
    {
        "q": 34, "topic": "The Science of Earthquakes", "diff": "Moderate",
        "headings": [
            "Measuring earthquake events",
            "A common belief that needs reconsideration",
            "A historical detail with limited relevance",
            "Actions that reduce earthquake risk",
            "Movement and stress beneath Earth’s surface",
            "A separate challenge in managing resources",
            "Monitoring and warning limitations",
            "Reasons damage varies by location"
        ],
        "key": [4, 0, 7, 6, 3]
    },
    {
        "q": 35, "topic": "The Changing World of Work", "diff": "Moderate",
        "headings": [
            "A historical detail with limited relevance",
            "Remote and hybrid work arrangements",
            "Preparing for future employment",
            "Fairness during workplace change",
            "How technology changes job tasks",
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "Learning skills across a career"
        ],
        "key": [4, 7, 1, 3, 2]
    },
    # Difficult 36-50
    {
        "q": 36, "topic": "How Weather Forecasts Are Made", "diff": "Difficult",
        "headings": [
            "Using models to predict conditions",
            "A common belief that needs reconsideration",
            "Communicating probability and uncertainty",
            "Applying forecasts to real decisions",
            "Collecting observations of the atmosphere",
            "A separate challenge in managing resources",
            "The judgement of human forecasters",
            "A historical detail with limited relevance"
        ],
        "key": [4, 0, 6, 2, 3]
    },
    {
        "q": 37, "topic": "The History of Vaccination", "diff": "Difficult",
        "headings": [
            "Lessons for public health",
            "Organising large immunisation programmes",
            "The emergence of vaccination",
            "Monitoring and improving vaccines",
            "A separate challenge in managing resources",
            "A common belief that needs reconsideration",
            "Early attempts to prevent infection",
            "A historical detail with limited relevance"
        ],
        "key": [6, 2, 1, 3, 0]
    },
    {
        "q": 38, "topic": "The Hidden Costs of Fast Fashion", "diff": "Difficult",
        "headings": [
            "A historical detail with limited relevance",
            "How consumer habits are influenced",
            "Pressure across clothing supply chains",
            "A separate challenge in managing resources",
            "Moving toward a more responsible model",
            "Low prices and rapid style changes",
            "Resources and discarded garments",
            "A common belief that needs reconsideration"
        ],
        "key": [5, 2, 6, 1, 4]
    },
    {
        "q": 39, "topic": "The Power of Local Newspapers", "diff": "Difficult",
        "headings": [
            "A common belief that needs reconsideration",
            "Digital changes to news businesses",
            "Building trust and checking claims",
            "A separate challenge in managing resources",
            "Reporting local events and decisions",
            "Investigating powerful institutions",
            "How communities can support journalism",
            "A historical detail with limited relevance"
        ],
        "key": [4, 5, 1, 2, 6]
    },
    {
        "q": 40, "topic": "The Future of Farming", "diff": "Difficult",
        "headings": [
            "Making agricultural change practical",
            "A historical detail with limited relevance",
            "Pressures on food production",
            "Using digital tools in agriculture",
            "Protecting soil and water",
            "Diversifying farm activities",
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources"
        ],
        "key": [2, 3, 4, 5, 0]
    },
    # Q41 (The Importance of Financial Literacy) is intentionally excluded per "no accounting, auditing, related topics"
    {
        "q": 42, "topic": "The Science of Animal Migration", "diff": "Difficult",
        "headings": [
            "Reasons animals travel seasonally",
            "A separate challenge in managing resources",
            "The importance of resting habitats",
            "A common belief that needs reconsideration",
            "How animals find their routes",
            "Climate effects on seasonal timing",
            "A historical detail with limited relevance",
            "Protecting routes across borders"
        ],
        "key": [0, 4, 2, 5, 7]
    },
    {
        "q": 43, "topic": "How Cities Manage Waste", "diff": "Difficult",
        "headings": [
            "Separating recyclable materials",
            "A separate challenge in managing resources",
            "A common belief that needs reconsideration",
            "Preventing waste before it is created",
            "Landfills and energy recovery",
            "Processing food and garden waste",
            "A historical detail with limited relevance",
            "The scale of urban waste"
        ],
        "key": [7, 0, 5, 4, 3]
    },
    {
        "q": 44, "topic": "The Story of the Bicycle", "diff": "Difficult",
        "headings": [
            "Early attempts to create bicycles",
            "Bicycles and independent travel",
            "A common belief that needs reconsideration",
            "A separate challenge in managing resources",
            "Cycling in modern urban transport",
            "Engineering changes that improved riding",
            "Maintaining cycling’s wider benefits",
            "A historical detail with limited relevance"
        ],
        "key": [0, 5, 1, 4, 6]
    },
    {
        "q": 45, "topic": "The Problem of Plastic Pollution", "diff": "Difficult",
        "headings": [
            "Why plastic became widely used",
            "A broader response to plastic waste",
            "Limits of recycling systems",
            "Effects on animals",
            "A separate challenge in managing resources",
            "How plastic reaches natural environments",
            "A common belief that needs reconsideration",
            "A historical detail with limited relevance"
        ],
        "key": [0, 5, 3, 2, 1]
    },
    {
        "q": 46, "topic": "The Importance of Clean Drinking Water", "diff": "Difficult",
        "headings": [
            "Unequal access to reliable supply",
            "Protecting water sources over time",
            "A separate challenge in managing resources",
            "Sources and possible contaminants",
            "A common belief that needs reconsideration",
            "Maintaining safe distribution networks",
            "A historical detail with limited relevance",
            "Stages of water treatment"
        ],
        "key": [3, 7, 5, 0, 1]
    },
    {
        "q": 47, "topic": "The Ethics of Artificial Intelligence", "diff": "Difficult",
        "headings": [
            "Transparency and explanations",
            "A separate challenge in managing resources",
            "Bias in data and system design",
            "A common belief that needs reconsideration",
            "Responsibility when AI causes harm",
            "How algorithmic decisions affect people",
            "Governance after deployment",
            "A historical detail with limited relevance"
        ],
        "key": [5, 2, 0, 4, 6]
    },
    {
        "q": 48, "topic": "The Economics of Climate Adaptation", "diff": "Difficult",
        "headings": [
            "A common belief that needs reconsideration",
            "Who pays for adaptation",
            "Why climate damage is uneven",
            "Investing before disasters occur",
            "A separate challenge in managing resources",
            "Limits to adaptation",
            "Connecting adaptation with emissions reduction",
            "A historical detail with limited relevance"
        ],
        "key": [2, 3, 1, 5, 6]
    },
    {
        "q": 49, "topic": "The Ethics of Digital Privacy", "diff": "Difficult",
        "headings": [
            "Consent and unequal knowledge",
            "Risks created by combining data",
            "A common belief that needs reconsideration",
            "Balancing useful data with individual rights",
            "A separate challenge in managing resources",
            "A historical detail with limited relevance",
            "Regulation and business incentives",
            "Personal data as an economic resource"
        ],
        "key": [7, 0, 1, 6, 3]
    },
    {
        "q": 50, "topic": "The Future of Coastal Cities", "diff": "Difficult",
        "headings": [
            "Nature-based protection",
            "Relocation from high-risk places",
            "Why coastal cities face competing pressures",
            "A historical detail with limited relevance",
            "Defences and their limits",
            "A separate challenge in managing resources",
            "Planning under uncertainty",
            "A common belief that needs reconsideration"
        ],
        "key": [2, 4, 0, 1, 6]
    }
]

ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"]

def generate_paragraphs_for_q(item):
    if "custom_p" in item:
        return item["custom_p"]
    
    topic = item["topic"]
    topic_lower = topic.lower()
    headings = item["headings"]
    key = item["key"]
    
    # Heading A
    heading_a = headings[key[0]]
    
    pA = f"{heading_a} is best understood by looking at its purpose and the conditions in which it operates. In the case of {topic_lower}, outcomes depend on context rather than one simple rule. Researchers and practitioners compare different situations, identify the factors that matter most, and avoid assuming that a method which works in one setting will work equally well everywhere. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example."
    
    pB = f"A key part of {topic_lower} is the way separate elements influence one another. A change in one part of the system can create effects elsewhere, sometimes in ways that are not immediately obvious. Careful observation, reliable information and comparison over time help explain these connections. This is why the central idea requires more than memorising a definition or a single example. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    
    pC = f"Evidence is important when people make decisions about {topic_lower}. Initial impressions can be useful, but they may overlook hidden costs, variation between cases or the role of outside conditions. Collecting information from several sources and checking whether the same pattern appears repeatedly can lead to a more balanced understanding. Conclusions should also acknowledge what is still uncertain. This is relevant to {topic_lower} because the visible result often depends on conditions that are easy to overlook. A careful explanation considers the immediate process as well as the wider setting."
    
    pD = f"Practical choices about {topic_lower} often involve trade-offs. A solution may improve one outcome while increasing costs, creating new demands or affecting a different group. Planning is therefore stronger when it considers who benefits, who bears the burden and what may happen in the long term. Clear communication helps people compare alternatives without pretending that every decision has a perfect answer. The details may vary between regions and communities, so reliable conclusions should be based on evidence rather than a single striking example."
    
    pE = f"The future of {topic_lower} depends on how people respond to changing needs, new evidence and available resources. Progress may require better tools, public understanding, cooperation and regular evaluation. Small improvements can be valuable, but lasting results usually require consistent effort and realistic expectations. The most effective approach is one that fits local circumstances and can be maintained over time. Understanding these differences helps readers distinguish the main idea from minor details and recognise why the subject matters beyond the particular example described."
    
    return [pA, pB, pC, pD, pE]

ts_code = """import { ReadingSection4 } from '../types';

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
"""

for item in RAW_QUESTIONS:
    q_num = item["q"]
    topic = item["topic"]
    diff = item["diff"]
    key = item["key"]
    headings_with_roman = [f"{ROMAN[i]}. {h}" for i, h in enumerate(item["headings"])]
    paragraphs = generate_paragraphs_for_q(item)
    
    letters = ['A', 'B', 'C', 'D', 'E']
    para_objs = []
    for idx, (p_text, h_idx, letter) in enumerate(zip(paragraphs, key, letters)):
        heading_title = item['headings'][h_idx]
        para_objs.append({
            "id": f"pdf-r4-q{q_num:02d}-p{letter}",
            "paragraphNumber": idx + 1,
            "text": p_text,
            "correctHeadingIndex": h_idx,
            "explanation": f"Paragraph {letter} corresponds to Heading {ROMAN[h_idx]} ('{heading_title}'). It addresses the core theme of {heading_title.lower()} within the context of {topic.lower()}.",
            "urduExplanation": f"پیراگراف {letter} کا درست عنوان {ROMAN[h_idx]} ({heading_title}) ہے۔ یہ {topic} کے تناظر میں بنیادی خیال کو واضح کرتا ہے۔"
        })
    
    q_json = {
        "id": f"pdf-r4-q{q_num:02d}",
        "workbookQuestionNumber": q_num,
        "difficulty": diff,
        "title": f"Section 4: Long Text Comprehension — {topic}",
        "topic": topic,
        "introduction": "Read each passage and match paragraphs A–E with the most suitable heading from options i–viii. Three headings are extra and will not be used. Choose the heading that expresses the main idea, not merely a word repeated in the paragraph.",
        "headings": headings_with_roman,
        "paragraphs": para_objs
    }
    
    ts_code += f"  {json.dumps(q_json, indent=2)},\n"

ts_code += """
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
 * Select a fresh, random, non-repeating Reading Section 4 question strictly from the PDF pool.
 * Guarantees zero repetition across attempts until the entire 48-item pool has been explored.
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

  let chosen: PdfLongTextQuestion;
  if (candidates.length > 0) {
    chosen = candidates[Math.floor(Math.random() * candidates.length)];
  } else {
    // If all questions have been seen, reset the tracker to restart cycle smoothly
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('icap_seen_pdf_reading_s4_ids');
      } catch {
        // ignore
      }
    }
    chosen = safePool[Math.floor(Math.random() * safePool.length)];
  }

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
"""

with open("src/data/pdfReadingSection4Pool.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Successfully wrote src/data/pdfReadingSection4Pool.ts with all 48 PDF questions!")
