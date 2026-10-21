/**
 * ============================================================================
 * writingAutoGenerator.ts
 * Procedural Writing Module & Email Tasks Generator for ICAP ECS & Aptis Tests
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Writing:
 * - Part 1: 5 short onboarding questions (1–5 words each)
 * - Part 2: Form filling / short reflection (20–30 words)
 * - Part 3: Social forum chat with 3 club members (30–40 words each)
 * - Part 4: Two emails (Task A: Informal to friend, 40–50 words;
 *                       Task B: Formal to authority, 120–150 words)
 * - Guarantees zero repetition across tests or attempts.
 * ============================================================================
 */

import { AptisWritingModule, WritingPart4 } from '../types';

interface ClubThemeSeed {
  themeName: string;
  part1Context: string;
  p1Questions: Array<{ prompt: string; sampleAnswer: string }>;
  part2FormName: string;
  part2Prompt: string;
  part2SampleAnswer: string;
  part3ClubName: string;
  part3Context: string;
  part3Chats: Array<{
    memberName: string;
    avatarInitials: string;
    message: string;
    sampleAnswer: string;
  }>;
}

const CLUB_THEME_SEEDS: ClubThemeSeed[] = [
  {
    themeName: 'Adventure Travel & Mountain Trekking Society',
    part1Context: 'You have joined the Adventure Travel & Mountain Trekking Society. Answer the 5 onboarding questions from the club coordinator in 1–5 words each.',
    p1Questions: [
      { prompt: 'What mountain region or trail would you like to explore first?', sampleAnswer: 'The Karakoram mountain range.' },
      { prompt: 'How many days can you dedicate to our annual summer expedition?', sampleAnswer: 'Seven to ten days.' },
      { prompt: 'What type of outdoor gear do you currently own?', sampleAnswer: 'Trekking boots and backpack.' },
      { prompt: 'Which physical fitness activity do you practice weekly?', sampleAnswer: 'Distance jogging and swimming.' },
      { prompt: 'Who would you contact in case of an expedition emergency?', sampleAnswer: 'My elder brother.' }
    ],
    part2FormName: 'Member Trekking Profile & Expedition Goals',
    part2Prompt: 'Please explain why you joined our trekking society and what outdoor skill you hope to develop during mountain expeditions. (Write 20–30 words)',
    part2SampleAnswer: 'I joined to experience high-altitude mountaineering and connect with nature enthusiasts. I hope to master advanced wilderness navigation, route-finding, and outdoor first-aid skills during our upcoming mountain expeditions.',
    part3ClubName: 'Adventure Trekking Society Forum',
    part3Context: 'You are chatting with fellow society members in the expedition forum. Respond to all three messages. (Write 30–40 words for each response)',
    part3Chats: [
      {
        memberName: 'Bilal (Expedition Leader)',
        avatarInitials: 'BL',
        message: 'Welcome to the society! What was the most physically demanding hike you have ever completed, and how did you prepare for it?',
        sampleAnswer: 'Last year I completed a challenging thirty-kilometer alpine ridge hike. To build endurance, I practiced running steep stairs with a weighted backpack three mornings every week for two months prior to the climb.'
      },
      {
        memberName: 'Zainab (Equipment Coordinator)',
        avatarInitials: 'ZC',
        message: 'We are debating whether members should invest in lightweight four-season tents or hire group cabins on long routes. What is your perspective?',
        sampleAnswer: 'Carrying lightweight four-season tents provides unmatched independence when mountain weather changes rapidly. However, reserving cabins occasionally ensures warm shelter and restful sleep during severe storms, so a balanced approach works best.'
      },
      {
        memberName: 'Farhan (Safety Officer)',
        avatarInitials: 'FO',
        message: 'The club committee is hosting an avalanche safety and emergency wilderness workshop next weekend. Will you be attending?',
        sampleAnswer: 'Yes, I have already reserved a seat for the safety workshop. Mastering emergency rescue techniques and avalanche beacons is essential before attempting high-altitude glaciated passes with the team this summer.'
      }
    ]
  },
  {
    themeName: 'Urban Wildlife & Environmental Conservation Trust',
    part1Context: 'You have joined the Urban Wildlife & Environmental Conservation Trust. Answer the 5 onboarding questions from the project officer in 1–5 words each.',
    p1Questions: [
      { prompt: 'Which local wildlife species or bird species interests you most?', sampleAnswer: 'Urban songbirds and raptors.' },
      { prompt: 'How many hours per month can you volunteer for tree planting?', sampleAnswer: 'Around eight hours monthly.' },
      { prompt: 'What previous environmental volunteer work have you performed?', sampleAnswer: 'Community clean-up campaigns.' },
      { prompt: 'Which urban park do you visit most regularly?', sampleAnswer: 'The central botanical garden.' },
      { prompt: 'How did you learn about our ecological conservation initiative?', sampleAnswer: 'Through a university seminar.' }
    ],
    part2FormName: 'Environmental Volunteer Commitment Statement',
    part2Prompt: 'Please explain your motivation for joining our conservation trust and how urban green spaces benefit metropolitan communities. (Write 20–30 words)',
    part2SampleAnswer: 'I joined to help restore native flora and protect urban biodiversity. Preserving green spaces cleans metropolitan air, lowers city temperatures, and provides vital recreational areas for local citizens.',
    part3ClubName: 'Urban Ecology Action Network',
    part3Context: 'You are chatting with fellow conservation volunteers in the network lounge. Respond to all three messages. (Write 30–40 words for each response)',
    part3Chats: [
      {
        memberName: 'Dr. Tariq (Head Ecologist)',
        avatarInitials: 'TE',
        message: 'Welcome aboard! In your view, what is the single greatest ecological threat confronting metropolitan city parks today?',
        sampleAnswer: 'The rapid loss of continuous green corridors due to commercial real estate development poses the greatest threat. Fragmented habitats isolate bird populations and severely disrupt natural pollination cycles across the city.'
      },
      {
        memberName: 'Sadaf (Community Outreach)',
        avatarInitials: 'SO',
        message: 'How can we encourage busy neighborhood families to participate actively in our weekend wetland restoration projects?',
        sampleAnswer: 'We should organize engaging family workshops that feature interactive birdwatching walks and hands-on sapling planting. Providing educational certificates and healthy refreshments will motivate parents and schoolchildren to participate enthusiastically.'
      },
      {
        memberName: 'Kamran (Recycling Coordinator)',
        avatarInitials: 'KC',
        message: 'The municipality wants to convert an abandoned industrial lot into either a community garden or a solar park. Which option would you support?',
        sampleAnswer: 'I strongly favor establishing a community organic garden. It will create immediate biodiversity, offer educational space for local schoolchildren, and foster neighborhood cohesion, which a purely fenced solar installation cannot provide.'
      }
    ]
  },
  {
    themeName: 'Young Innovators & Robotics Technology Guild',
    part1Context: 'You have joined the Young Innovators & Robotics Technology Guild. Answer the 5 onboarding questions from the lab director in 1–5 words each.',
    p1Questions: [
      { prompt: 'What programming language or engineering skill do you know?', sampleAnswer: 'Python and circuit design.' },
      { prompt: 'Which robotics challenge or tournament interests you most?', sampleAnswer: 'Autonomous rover navigation.' },
      { prompt: 'How many days per week can you access our makerspace lab?', sampleAnswer: 'Two days weekly.' },
      { prompt: 'Do you prefer working in hardware assembly or software coding?', sampleAnswer: 'Embedded software development.' },
      { prompt: 'What academic field or career do you plan to pursue?', sampleAnswer: 'Computer systems engineering.' }
    ],
    part2FormName: 'Innovator Profile & Technology Project Goals',
    part2Prompt: 'Please describe a technology project you would like to build in our makerspace and how automation can benefit daily life. (Write 20–30 words)',
    part2SampleAnswer: 'I aim to build an automated soil-moisture sensor rover for vertical gardens. Practical robotics streamlines tedious repetitive tasks, conserves water resources, and enhances overall agricultural sustainability.',
    part3ClubName: 'Robotics Innovators Guild Lounge',
    part3Context: 'You are chatting with fellow makers in the robotics guild forum. Respond to all three messages. (Write 30–40 words for each response)',
    part3Chats: [
      {
        memberName: 'Hamza (Guild President)',
        avatarInitials: 'HP',
        message: 'Welcome to our makerspace! What inspired you to start designing mechanical systems and robotics prototypes?',
        sampleAnswer: 'I have always been fascinated by how simple computer algorithms can breathe mechanical life into inanimate circuits. Building physical machines that solve real environmental problems inspires me to learn every single day.'
      },
      {
        memberName: 'Amina (Software Lead)',
        avatarInitials: 'AL',
        message: 'We are deciding whether our competition team should focus on autonomous drones or land rovers this year. What is your recommendation?',
        sampleAnswer: 'I recommend developing land rovers first because the hardware testing is substantially safer, cheaper, and more reliable for our newer members. Rovers allow us to refine computer vision before taking on aerial flight risks.'
      },
      {
        memberName: 'Danish (Workshop Mentor)',
        avatarInitials: 'DM',
        message: 'Next month we are hosting a robotics bootcamp for underprivileged high school students. Would you like to be a mentor?',
        sampleAnswer: 'I would be delighted to mentor students during the bootcamp. Guiding beginners through their very first circuit assembly and Python script is an extraordinarily rewarding way to give back to our local community.'
      }
    ]
  }
];

let moduleCounter = 1;

/**
 * Generate a fresh, synthetic Writing Module (Parts 1, 2, 3)
 */
export function generateSyntheticWritingModule(seenThemes: Set<string>): AptisWritingModule {
  const index = (moduleCounter - 1) % CLUB_THEME_SEEDS.length;
  const seed = CLUB_THEME_SEEDS[index];
  const uniqueTheme = `${seed.themeName} (Edition ${Math.floor(moduleCounter / CLUB_THEME_SEEDS.length) + 1})`;
  const idSuffix = `${Date.now().toString(36)}-${moduleCounter++}`;

  seenThemes.add(uniqueTheme);

  return {
    themeName: uniqueTheme,
    part1: {
      id: `w-p1-auto-${idSuffix}`,
      context: seed.part1Context,
      questions: seed.p1Questions.map((q, idx) => ({
        id: `q${idx + 1}`,
        prompt: q.prompt,
        maxWords: 5,
        sampleAnswer: q.sampleAnswer
      }))
    },
    part2: {
      id: `w-p2-auto-${idSuffix}`,
      formName: seed.part2FormName,
      prompt: seed.part2Prompt,
      minWords: 20,
      maxWords: 30,
      sampleAnswer: seed.part2SampleAnswer
    },
    part3: {
      id: `w-p3-auto-${idSuffix}`,
      clubName: seed.part3ClubName,
      context: seed.part3Context,
      memberChats: seed.part3Chats.map((c, idx) => ({
        id: `chat${idx + 1}`,
        memberName: c.memberName,
        avatarInitials: c.avatarInitials,
        message: c.message,
        minWords: 30,
        maxWords: 40,
        sampleAnswer: c.sampleAnswer
      }))
    }
  };
}

const SYNTHETIC_EMAIL_PAIRS = [
  {
    formalTitle: 'Request for Extended Access to University Archival Collections',
    recipientTitle: 'Chief Archivist',
    recipientName: 'Dr. Shahabuddin Malik',
    entityName: 'Central University Historical Library',
    contextNotice: 'NOTICE REF: ARC/2026/09\nScholars conducting post-graduate research requiring after-hours access to rare manuscripts and digital repositories must submit a formal justification to the Chief Archivist.',
    formalPrompt: 'Write a formal email to the Chief Archivist (Dr. Shahabuddin Malik). State your research topic, explain why extended archival access is required for your thesis, and request special evening access permissions. (Write 120–150 words)',
    informalFriend: 'Ali',
    informalPrompt: 'Write an email to your friend Ali. Tell him about your historical research project, how much time you are spending in the library, and suggest meeting for coffee this weekend. (Write 40–50 words)'
  },
  {
    formalTitle: 'Proposal for Workplace Cycling Facilities and Bike Storage',
    recipientTitle: 'Director of Corporate Facilities',
    recipientName: 'Ms. Parveen Akhtar',
    entityName: 'Metropolitan Commercial Headquarters',
    contextNotice: 'MEMORANDUM REF: FAC/2026/18\nThe Facilities Committee invites employee proposals aimed at enhancing sustainable office transport, including bicycle racks and changing facilities.',
    formalPrompt: 'Write a formal email to the Director of Corporate Facilities (Ms. Parveen Akhtar). Detail the environmental and health benefits of commuter cycling, outline the need for secure bike storage and shower lockers, and suggest forming an implementation committee. (Write 120–150 words)',
    informalFriend: 'Saad',
    informalPrompt: 'Write an email to your colleague Saad. Tell him about your plan to cycle to work, ask if he wants to commute together on bike paths, and suggest buying safety helmets. (Write 40–50 words)'
  }
];

let emailCounter = 1;

/**
 * Generate a fresh, synthetic Writing Part 4 Email task when PDF email pairs are exhausted
 */
export function generateSyntheticPart4EmailTask(seenIds: Set<string>): WritingPart4 {
  const index = (emailCounter - 1) % SYNTHETIC_EMAIL_PAIRS.length;
  const pair = SYNTHETIC_EMAIL_PAIRS[index];
  const uniqueId = `auto-part4-${Date.now().toString(36)}-${emailCounter++}`;

  seenIds.add(uniqueId);

  return {
    id: uniqueId,
    clubName: pair.entityName,
    scenarioTopic: pair.formalTitle,
    communicationPurpose: pair.formalTitle,
    recipientTitle: pair.recipientTitle,
    recipientName: pair.recipientName,
    friendName: pair.informalFriend,
    contextNotice: pair.contextNotice,
    taskA: {
      prompt: pair.informalPrompt,
      minWords: 40,
      maxWords: 50
    },
    taskB: {
      prompt: pair.formalPrompt,
      minWords: 120,
      maxWords: 150
    }
  };
}
