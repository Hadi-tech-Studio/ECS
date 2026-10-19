import { AptisWritingModule } from '../types';
import { APTIS_TEST_SET_1, APTIS_TEST_SET_2 } from './aptisMockData';
import { createPart4FromPdfTopics } from './aptisPdfEmailTopics';

export const EXPANDED_WRITING_MODULES: AptisWritingModule[] = [
  APTIS_TEST_SET_1.writing,
  APTIS_TEST_SET_2.writing,
  {
    themeName: 'National Student Leadership & Collegiate Debating Guild',
    part1: {
      id: 'w-p1-guild-03',
      context: 'You have joined the National Student Leadership & Collegiate Debating Guild. Answer the 5 onboarding questions from the guild secretary in 1–5 words each.',
      questions: [
        {
          id: 'q1',
          prompt: 'What academic degree or field are you currently studying?',
          maxWords: 5,
          sampleAnswer: 'Political science and media.'
        },
        {
          id: 'q2',
          prompt: 'Which debate style or workshop interests you most?',
          maxWords: 5,
          sampleAnswer: 'Parliamentary debate tournaments.'
        },
        {
          id: 'q3',
          prompt: 'How often do you participate in public speaking sessions?',
          maxWords: 5,
          sampleAnswer: 'Weekly campus practice rounds.'
        },
        {
          id: 'q4',
          prompt: 'What is your preferred format for team workshops?',
          maxWords: 5,
          sampleAnswer: 'Interactive weekend panel debates.'
        },
        {
          id: 'q5',
          prompt: 'Which language would you like to practice for global conferences?',
          maxWords: 5,
          sampleAnswer: 'International English.'
        }
      ]
    },
    part2: {
      id: 'w-p2-guild-03',
      formName: 'Guild Leadership Goals & Community Profile',
      prompt: 'Please describe why you joined our debating guild and what leadership quality you consider most essential for young speakers. (Write 20–30 words)',
      minWords: 20,
      maxWords: 30,
      sampleAnswer: 'I joined this guild to master persuasive rhetoric and public diplomacy. Active listening and intellectual empathy are essential to lead constructive debates.'
    },
    part3: {
      id: 'w-p3-guild-03',
      clubName: 'Debate Guild Discussion Lounge',
      context: 'You are chatting with fellow student leaders in the guild forum. Respond to all three messages. (Write 30–40 words for each response)',
      memberChats: [
        {
          id: 'chat1',
          memberName: 'Zainab (Debate Captain)',
          avatarInitials: 'ZC',
          message: 'Welcome to our network! How are you balancing heavy midterm exams with weekly debating practice sessions?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'Balancing rigorous coursework with tournament preparation requires strict calendar scheduling. I dedicate two disciplined hours each morning to study before evening speech rehearsals begin.'
        },
        {
          id: 'chat2',
          memberName: 'Bilal (Adjudication Lead)',
          avatarInitials: 'BL',
          message: 'Our guild is organizing a regional championship on environmental sustainability. Do you think junior delegates should participate?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'Junior delegates should definitely participate because environmental policy debates sharpen critical thinking and global awareness. Hands-on tournament exposure builds lasting confidence far beyond regular classroom lectures.'
        },
        {
          id: 'chat3',
          memberName: 'Danish (Communications Officer)',
          avatarInitials: 'DC',
          message: 'The committee is proposing replacing physical tournaments with online video streams. What is your view on this change?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'While online streams provide travel convenience, physical championships foster spontaneous rebuttals and vital peer networking. A hybrid model combining monthly digital rounds with annual physical symposiums would be ideal.'
        }
      ]
    },
    part4: createPart4FromPdfTopics(21, 31) // Topic #21: Request for Permission to Organize an Event + Topic #31: Inviting Friend to Birthday Party
  },
  {
    themeName: 'National Young Innovators & Digital Skills Club',
    part1: {
      id: 'w-p1-tech-04',
      context: 'You have joined the National Young Innovators & Digital Skills Club. Answer the 5 onboarding questions from the club coordinator in 1–5 words each.',
      questions: [
        {
          id: 'q1',
          prompt: 'What programming language or technical tool are you learning?',
          maxWords: 5,
          sampleAnswer: 'Python data science tools.'
        },
        {
          id: 'q2',
          prompt: 'Which digital workshop topic appeals to you most?',
          maxWords: 5,
          sampleAnswer: 'Artificial intelligence and web design.'
        },
        {
          id: 'q3',
          prompt: 'On which day do you prefer attending club meetups?',
          maxWords: 5,
          sampleAnswer: 'Saturday afternoon.'
        },
        {
          id: 'q4',
          prompt: 'What computer operating system do you use daily?',
          maxWords: 5,
          sampleAnswer: 'Linux and Windows.'
        },
        {
          id: 'q5',
          prompt: 'Where did you first hear about our tech club?',
          maxWords: 5,
          sampleAnswer: 'University campus noticeboard.'
        }
      ]
    },
    part2: {
      id: 'w-p2-tech-04',
      formName: 'Digital Project Proposal & Skill Profile Form',
      prompt: 'Please explain what software or digital media project you want to build this semester and how our community can help you. (Write 20–30 words)',
      minWords: 20,
      maxWords: 30,
      sampleAnswer: 'I aim to build an open-source educational mobile app for community literacy. Technical mentorship from club seniors will help me write clean code and design intuitive interfaces.'
    },
    part3: {
      id: 'w-p3-tech-04',
      clubName: 'Tech Innovators Chat Room',
      context: 'You are chatting with other members in the club discussion room. Respond to all three messages. (Write 30–40 words for each response)',
      memberChats: [
        {
          id: 'chat1',
          memberName: 'Hassan (Full-Stack Developer)',
          avatarInitials: 'HD',
          message: 'Welcome! Are you more interested in front-end design, cloud architecture, or data visualization?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'I am particularly drawn to data visualization and user experience design. Presenting complex information intuitively helps communities understand vital trends, though robust backend software is equally essential.'
        },
        {
          id: 'chat2',
          memberName: 'Mariam (Cybersecurity Specialist)',
          avatarInitials: 'MS',
          message: 'We are hosting a weekend cybersecurity and digital privacy workshop. Do you think beginners should attend?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'Beginners should definitely attend because cyber hygiene and encryption are foundational for all software users. Learning password security and threat prevention early protects personal data and inspires secure computing habits.'
        },
        {
          id: 'chat3',
          memberName: 'Usman (Cloud Engineer)',
          avatarInitials: 'UE',
          message: 'The committee wants to replace all physical coding sessions with purely online discord streams. What is your opinion?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'Physical coding sessions allow hands-on pair programming and immediate bug debugging that streams cannot match. A hybrid structure preserving monthly in-person hackathons alongside online streams would serve us best.'
        }
      ]
    },
    part4: createPart4FromPdfTopics(15, 37) // Topic #15: Request for Extension of a Deadline + Topic #37: Sharing Your Exam Results
  },
  {
    themeName: 'Heritage Readers & Literary Arts Society',
    part1: {
      id: 'w-p1-book-05',
      context: 'You have joined the Heritage Readers & Literary Arts Society. Answer the 5 onboarding questions from the reading coordinator in 1–5 words each.',
      questions: [
        {
          id: 'q1',
          prompt: 'What literary genre do you read most frequently?',
          maxWords: 5,
          sampleAnswer: 'Historical fiction and biography.'
        },
        {
          id: 'q2',
          prompt: 'How many books did you complete last year?',
          maxWords: 5,
          sampleAnswer: 'Approximately fifteen volumes.'
        },
        {
          id: 'q3',
          prompt: 'Do you prefer physical printed books or e-readers?',
          maxWords: 5,
          sampleAnswer: 'Physical printed paperbacks.'
        },
        {
          id: 'q4',
          prompt: 'What time of day do you usually read?',
          maxWords: 5,
          sampleAnswer: 'Late in the evening.'
        },
        {
          id: 'q5',
          prompt: 'Who is your favourite classic author?',
          maxWords: 5,
          sampleAnswer: 'Charles Dickens.'
        }
      ]
    },
    part2: {
      id: 'w-p2-book-05',
      formName: 'Book Club Reading Preferences & Discussion Form',
      prompt: 'Please tell us about a book that made a lasting impression on your worldview and why you recommend it to fellow members. (Write 20–30 words)',
      minWords: 20,
      maxWords: 30,
      sampleAnswer: 'I recommend "To Kill a Mockingbird" because it profoundly illustrates moral courage, judicial fairness, and empathy in the face of deep societal prejudice.'
    },
    part3: {
      id: 'w-p3-book-05',
      clubName: 'Heritage Book Circle Chat Room',
      context: 'You are chatting with fellow circle members in the book lounge. Respond to all three messages. (Write 30–40 words for each response)',
      memberChats: [
        {
          id: 'chat1',
          memberName: 'Ayesha (Literature Teacher)',
          avatarInitials: 'AT',
          message: 'Welcome to our circle! Which historical period or culture’s literature fascinates you the most?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'I am deeply drawn to classical world poetry and post-colonial regional literature. Exploring how writers documented rapid urban changes, cultural identity, and human resilience offers profound historical perspectives.'
        },
        {
          id: 'chat2',
          memberName: 'Kamran (Novelist)',
          avatarInitials: 'KN',
          message: 'Our next month is dedicated to classic translated poetry. Do you find translated literature as powerful as the original text?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'While linguistic nuances inevitably shift during translation, gifted translators capture the emotional resonance and philosophical depth of the original masterpiece. Translations build vital bridges across diverse global cultures.'
        },
        {
          id: 'chat3',
          memberName: 'Farida (Historian)',
          avatarInitials: 'FH',
          message: 'The venue owner has raised rental rates, so we may have to relocate our monthly book meetings to a busy noisy cafe. What do you think?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'A noisy cafe would ruin the contemplative atmosphere necessary for serious literary debate. We should explore booking community library reading rooms or quiet university seminar halls instead.'
        }
      ]
    },
    part4: createPart4FromPdfTopics(6, 45) // Topic #6: Invitation to a Guest Speaker + Topic #45: Inviting a Friend to a Study Session
  },
  {
    themeName: 'Young Innovators & Sustainable Entrepreneurship Incubator',
    part1: {
      id: 'w-p1-entrepreneur-06',
      context: 'You have joined the Sustainable Entrepreneurship Incubator. Answer the 5 onboarding questions from the program director in 1–5 words each.',
      questions: [
        {
          id: 'q1',
          prompt: 'What sector does your project idea target?',
          maxWords: 5,
          sampleAnswer: 'Solar energy and conservation.'
        },
        {
          id: 'q2',
          prompt: 'What stage is your project currently at?',
          maxWords: 5,
          sampleAnswer: 'Prototype development stage.'
        },
        {
          id: 'q3',
          prompt: 'How many teammates are on your core team?',
          maxWords: 5,
          sampleAnswer: 'Three fellow students.'
        },
        {
          id: 'q4',
          prompt: 'Which mentor specialization would help you most?',
          maxWords: 5,
          sampleAnswer: 'Product design and marketing.'
        },
        {
          id: 'q5',
          prompt: 'How did you discover our incubator program?',
          maxWords: 5,
          sampleAnswer: 'Campus innovation showcase.'
        }
      ]
    },
    part2: {
      id: 'w-p2-entrepreneur-06',
      formName: 'Project Summary & Sustainability Form',
      prompt: 'Briefly summarize your project proposition, target community segment, and why your solution solves an urgent environmental challenge. (Write 20–30 words)',
      minWords: 20,
      maxWords: 30,
      sampleAnswer: 'Our solar water heating initiative provides affordable clean heat to off-grid rural clinics, drastically reducing diesel pollution while guaranteeing twenty-four-hour hot water.'
    },
    part3: {
      id: 'w-p3-entrepreneur-06',
      clubName: 'Incubator Founders Lounge Chat',
      context: 'You are discussing sustainability strategies with other student founders. Respond to all three messages. (Write 30–40 words for each response)',
      memberChats: [
        {
          id: 'chat1',
          memberName: 'Zayd (CleanTech Lead)',
          avatarInitials: 'ZL',
          message: 'Welcome! How do you validate customer demand before spending months manufacturing physical prototypes?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'We conduct extensive face-to-face field interviews with local health administrators and community elders. Validating real user frustrations early prevents wasted design effort and ensures our product truly solves pressing community needs.'
        },
        {
          id: 'chat2',
          memberName: 'Hina (Design Lead)',
          avatarInitials: 'HL',
          message: 'We are organizing an open pitch day for seed grants next month. Do you think young teams should focus more on financial projections or practical user testing?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'User testing and demonstrable prototype impact are far more convincing than speculative revenue charts. Judges want to see genuine customer enthusiasm, durable design mechanics, and measurable social benefit.'
        },
        {
          id: 'chat3',
          memberName: 'Rizwan (Operations Mentor)',
          avatarInitials: 'RM',
          message: 'The council is considering moving our physical co-working hub into an entirely virtual Discord server. Would that impact your team?',
          minWords: 30,
          maxWords: 40,
          sampleAnswer: 'Losing physical workshop space would severely hinder hardware prototyping and 3D printing. Having shared workbenches and spontaneous collaboration is indispensable for engineering and physical product development.'
        }
      ]
    },
    part4: createPart4FromPdfTopics(23, 49) // Topic #23: Proposal for a New Business Idea + Topic #49: Sharing Your Future Career Plans
  }
];
