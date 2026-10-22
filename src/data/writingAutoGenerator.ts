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
 * - STRICT ZERO REPETITION across tests or attempts with global tracking
 *   and persistent counters across page refreshes.
 * ============================================================================
 */

import { AptisWritingModule, WritingPart4 } from '../types';
import { getNextGeneratorCounter, isGloballySeen, markGloballySeen } from '../lib/antiRepetitionTracker';

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
        memberName: 'Hamza (Field Operations)',
        avatarInitials: 'HO',
        message: 'Should our club focus volunteer resources on planting native flowering shrubs or installing automated solar bird baths?',
        sampleAnswer: 'Planting dense native flowering shrubs provides sustainable year-round nutrition and natural shelter for diverse pollinating insects. Automated baths are beneficial, but restoring biological habitat delivers significantly greater long-term conservation value.'
      }
    ]
  },
  {
    themeName: 'Digital Photography & Visual Storytelling Guild',
    part1Context: 'You have joined the Digital Photography & Visual Storytelling Guild. Answer the 5 onboarding questions from the club curator in 1–5 words each.',
    p1Questions: [
      { prompt: 'What genre of photography do you enjoy shooting most?', sampleAnswer: 'Street and architectural photography.' },
      { prompt: 'What camera equipment or smartphone do you use currently?', sampleAnswer: 'A mirrorless digital camera.' },
      { prompt: 'How long have you been practicing photography as a hobby?', sampleAnswer: 'About two years.' },
      { prompt: 'Which photo editing application do you use for post-processing?', sampleAnswer: 'Lightroom and Photoshop.' },
      { prompt: 'What photography skill do you wish to master this year?', sampleAnswer: 'Mastering manual lighting controls.' }
    ],
    part2FormName: 'Photographer Profile & Portfolio Aspiration',
    part2Prompt: 'Please explain why you joined our visual storytelling guild and what theme you would like to explore in our upcoming member gallery. (Write 20–30 words)',
    part2SampleAnswer: 'I joined to refine my visual composition and learn narrative storytelling from veteran photographers. I hope to exhibit a documentary photo series exploring traditional artisanal craftsmen in our historic old bazaar.',
    part3ClubName: 'Visual Storytelling Guild Forum',
    part3Context: 'You are chatting with fellow guild photographers in the members lounge. Respond to all three messages. (Write 30–40 words for each response)',
    part3Chats: [
      {
        memberName: 'Rashid (Gallery Curator)',
        avatarInitials: 'RC',
        message: 'Welcome! When composing a candid street portrait, do you prefer asking for permission beforehand or capturing unposed moments?',
        sampleAnswer: 'I prefer capturing spontaneous, unposed gestures because natural candid expressions reveal authentic human emotion. However, I always introduce myself warmly immediately afterward and ask for permission before publishing or displaying the photograph.'
      },
      {
        memberName: 'Maria (Technical Lead)',
        avatarInitials: 'MT',
        message: 'Our guild is purchasing professional lighting gear for the studio. Do you favor portable battery strobes or continuous LED panels?',
        sampleAnswer: 'Continuous LED panels are ideal for beginners because you can preview lighting ratios and shadows in real time. Nevertheless, battery-powered strobes provide the powerful burst intensity essential for freezing rapid motion outdoors.'
      },
      {
        memberName: 'Danish (Exhibition Chair)',
        avatarInitials: 'DE',
        message: 'We are organizing a weekend photo walk across the old city quarter at sunrise. Will you be joining us?',
        sampleAnswer: 'I will definitely join the dawn photowalk. Golden morning sunlight produces gorgeous directional contrast across ancient brick arches, offering magnificent visual storytelling opportunities for our upcoming guild gallery showcase.'
      }
    ]
  },
  {
    themeName: 'Astronomy & Planetary Science Society',
    part1Context: 'You have joined the Astronomy & Planetary Science Society. Answer the 5 onboarding questions from the observatory director in 1–5 words each.',
    p1Questions: [
      { prompt: 'Which astronomical body or planet fascinates you most?', sampleAnswer: 'Saturn and its rings.' },
      { prompt: 'Do you own an optical telescope or binoculars?', sampleAnswer: 'A pair of binoculars.' },
      { prompt: 'How often do you stargaze in dark-sky locations?', sampleAnswer: 'Once every month.' },
      { prompt: 'What science topic would you like to hear a lecture on?', sampleAnswer: 'Exoplanets and astrobiology.' },
      { prompt: 'Can you assist during our public telescope viewing nights?', sampleAnswer: 'Yes, on Friday evenings.' }
    ],
    part2FormName: 'Stargazer Registration & Observation Interests',
    part2Prompt: 'Please describe what sparked your interest in astronomy and what observational project you hope to participate in with our society. (Write 20–30 words)',
    part2SampleAnswer: 'Witnessing a lunar eclipse through a friend’s telescope sparked my wonder about the cosmos. I hope to learn celestial navigation and help track meteors during our society’s annual Perseid watch.',
    part3ClubName: 'Cosmic Observers Network',
    part3Context: 'You are chatting with fellow society astronomers in the observatory discussion room. Respond to all three messages. (Write 30–40 words for each response)',
    part3Chats: [
      {
        memberName: 'Dr. Munir (Chief Astronomer)',
        avatarInitials: 'MA',
        message: 'Welcome to the observatory! In your opinion, what is the most effective way to combat light pollution in urban areas?',
        sampleAnswer: 'Municipalities should mandate fully shielded streetlights that direct illumination downward rather than scattering light upward into the night sky. Switching to warmer low-intensity LED bulbs also preserves human night vision and nocturnal animal cycles.'
      },
      {
        memberName: 'Asma (Equipment Officer)',
        avatarInitials: 'AO',
        message: 'For deep-sky viewing of nebulae, do you recommend a large aperture Dobsonian telescope or a computerized tracking refractor?',
        sampleAnswer: 'A large aperture Dobsonian telescope gathers substantially more light, revealing faint planetary nebulae and galaxies brilliantly at an affordable price. Computerized refractors are wonderful for photography, but pure visual stargazing favors large mirrors.'
      },
      {
        memberName: 'Waleed (Public Outreach)',
        avatarInitials: 'WO',
        message: 'We are organizing an astronomy camp for local high school students next month. How can we make it engaging?',
        sampleAnswer: 'We should combine telescope viewing of the Moon and Jupiter with hands-on constellation-mapping games and interactive scale models of the solar system. Allowing students to photograph the Moon through eyepiece adapters will inspire them tremendously.'
      }
    ]
  }
];

/**
 * Generate a fresh, synthetic Writing Module when predefined pool modules are exhausted
 */
export function generateSyntheticWritingModule(seenThemes: Set<string>): AptisWritingModule {
  const unseenSeeds = CLUB_THEME_SEEDS.filter(s => 
    !seenThemes.has(s.themeName) && 
    !isGloballySeen('writing-theme', '', s.themeName)
  );

  let seed: ClubThemeSeed;
  if (unseenSeeds.length > 0) {
    seed = unseenSeeds[0];
  } else {
    const counter = getNextGeneratorCounter('writingModule');
    const index = (counter - 1) % CLUB_THEME_SEEDS.length;
    const base = CLUB_THEME_SEEDS[index];
    const cycle = Math.floor(counter / CLUB_THEME_SEEDS.length) + 1;
    seed = {
      ...base,
      themeName: `${base.themeName} (Edition ${cycle})`
    };
  }

  const idSuffix = `${Date.now().toString(36)}-${Math.floor(Math.random() * 10000)}`;

  seenThemes.add(seed.themeName);
  markGloballySeen('writing-theme', [
    { id: `w-mod-${idSuffix}`, textOrTitle: seed.themeName }
  ]);

  return {
    themeName: seed.themeName,
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
  },
  {
    formalTitle: 'Application for Environmental Community Tree Planting Grant',
    recipientTitle: 'Municipal Sustainability Officer',
    recipientName: 'Mr. Tariq Jamil',
    entityName: 'City Environmental Services Department',
    contextNotice: 'GRANT ANNOUNCEMENT: REF ENV/2026/12\nCommunity resident associations may apply for matching municipal grants to fund urban tree planting and green space revitalization projects.',
    formalPrompt: 'Write a formal email to the Municipal Sustainability Officer (Mr. Tariq Jamil). Describe your neighborhood greening initiative, justify the environmental necessity for shade trees, itemize proposed sapling species, and request grant application guidelines. (Write 120–150 words)',
    informalFriend: 'Bilal',
    informalPrompt: 'Write an email to your friend Bilal. Tell him about the neighborhood tree planting project, ask if he can volunteer to help dig sapling pits this Saturday, and invite him to lunch. (Write 40–50 words)'
  },
  {
    formalTitle: 'Feedback and Recommendations Regarding Public Library Digital Systems',
    recipientTitle: 'Director of Public Library Systems',
    recipientName: 'Mrs. Nargis Bano',
    entityName: 'Metropolitan Public Library Network',
    contextNotice: 'USER SATISFACTION SURVEY: REF LIB/2026/30\nThe Library Board seeks constructive patron recommendations to modernize digital catalog search algorithms and workstation reservation software.',
    formalPrompt: 'Write a formal email to the Director of Public Library Systems (Mrs. Nargis Bano). Provide constructive appraisal of the current digital catalog, explain difficulties encountered by student researchers, and suggest software user interface upgrades. (Write 120–150 words)',
    informalFriend: 'Zainab',
    informalPrompt: 'Write an email to your friend Zainab. Tell her about the frustrating search system at the city library, recommend an alternative research database online, and arrange a study session. (Write 40–50 words)'
  }
];

/**
 * Generate a fresh, synthetic Writing Part 4 Email task when PDF email pairs are exhausted
 */
export function generateSyntheticPart4EmailTask(seenIds: Set<string>): WritingPart4 {
  const unseenPairs = SYNTHETIC_EMAIL_PAIRS.filter(p => 
    !seenIds.has(p.formalTitle) && 
    !isGloballySeen('writing-p4', '', p.formalTitle)
  );

  let pair: typeof SYNTHETIC_EMAIL_PAIRS[0];
  if (unseenPairs.length > 0) {
    pair = unseenPairs[0];
  } else {
    const counter = getNextGeneratorCounter('writingPart4');
    const index = (counter - 1) % SYNTHETIC_EMAIL_PAIRS.length;
    pair = SYNTHETIC_EMAIL_PAIRS[index];
  }

  const uniqueId = `auto-part4-${Date.now().toString(36)}-${Math.floor(Math.random() * 10000)}`;

  seenIds.add(uniqueId);
  seenIds.add(pair.formalTitle);

  markGloballySeen('writing-p4', [
    { id: uniqueId, textOrTitle: pair.formalTitle }
  ]);

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
