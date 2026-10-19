/**
 * ============================================================================
 * aiTestGenerator.ts
 * AI-Powered Dynamic Exam Content Generation & Intelligent Replacement Engine
 * 
 * Uses Gemini AI models via the server-side proxy `/api/gemini/generate` to
 * produce brand-new, non-repeating test content for:
 * 1. Aptitude General Test (MCQs, Error Identification, Sentence Transformation, Vocab)
 * 2. Reading Test (Diverse Passages, Gaps, Logic Reordering, 4-Perspective Views, Headings)
 * 3. Writing Test (ECS Scenarios, Onboarding, Statements, Group Chats, Informal & Formal Emails)
 * 
 * Automatically validates all questions and tests them for semantic similarity
 * against the student's previous history. Automatically substitutes any similar
 * question with a newly generated or verified alternative.
 * ============================================================================
 */

import { callGeminiAPI } from './api-handler';
import { 
  GrammarQuestion, 
  ReadingSection1, 
  ReadingSection2, 
  ReadingSection3, 
  ReadingSection4, 
  AptisWritingModule,
  WritingPart4
} from '../types';
import { 
  isPart4DefaultOrBanned, 
  selectFreshPart4EmailTask 
} from '../data/expandedPart4EmailPool';
import { 
  isQuestionSubstantiallySimilar, 
  recordQuestionsToStudentHistory 
} from './questionHistoryService';
import { 
  validateGrammarQuestion, 
  validateReadingSection1, 
  validateReadingSection2, 
  validateReadingSection3, 
  validateReadingSection4, 
  validateWritingModule 
} from './questionValidationService';

/**
 * Attempts to generate a batch of fresh grammar questions using Gemini AI
 */
export async function generateAiGrammarQuestions(
  count: number = 10,
  topics: string[] = ['Verbs', 'Parts of Speech', 'Tenses', 'Articles', 'Collocations', 'Inversions', 'Subjunctive', 'Synonyms', 'Antonyms', 'Modal Conditionals', 'Active / Passive', 'Relative Clauses']
): Promise<GrammarQuestion[]> {
  const prompt = `You are a senior exam designer for the Aptis General Core Test.
Generate ${count} distinct, high-quality English grammar multiple-choice questions covering a wide variety of general English topics (everyday life, education, health, technology, environment, travel, hobbies, social issues, work, relationships, and general knowledge), along with occasional accounting and business topics.
The questions must cover the following 12 core areas:
- Verbs (gerunds, infinitives, causatives, phrasal verbs)
- Parts of Speech (adjectives, adverbs, nouns, prepositions, conjunctions)
- Tenses (present, past, continuous, perfect continuous, past perfect, future progressive)
- Articles & Determiners (definite, indefinite, zero article, quantifiers)
- Collocations & Common Idioms
- Inversions (negative adverbials, conditionals, correlatives)
- Subjunctive & Mandative Mood (demands, recommendations, necessity)
- Synonyms across general English contexts
- Antonyms across general English contexts
- Modal Conditionals & Mixed Conditionals (unreal past, deduction, obligation)
- Active / Passive Voice (formal reporting, impersonal structures)
- Relative Clauses (defining vs non-defining, prepositional relative clauses)

Return ONLY a valid JSON array of objects conforming to this exact schema:
[
  {
    "category": "Verbs" | "Parts of Speech" | "Tenses" | "Articles" | "Collocations" | "Inversions" | "Subjunctive" | "Synonyms" | "Antonyms" | "Modal Conditionals" | "Active / Passive" | "Relative Clauses",
    "difficulty": "Easy" | "Medium" | "Hard",
    "question": "Clear question sentence using a blank '_______' to be filled",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "englishExplanation": "Concise grammatical explanation",
    "urduExplanation": "اردو میں مختصر اور جامع وضاحت"
  }
]
CRITICAL RULES:
1. NEVER embed answer choices, options, or letters like [A], (A), [B] inside the question text. The question MUST contain only the sentence statement with '_______'.
2. Provide exactly 4 distinct, plausible options for each question.
3. The correctIndex MUST be 0, 1, 2, or 3.`;

  try {
    const result = await callGeminiAPI<GrammarQuestion[]>({
      prompt,
      systemInstruction: 'You are an expert Cambridge/Aptis/ICAP exam writer. Always output strictly valid JSON without conversational text.',
      responseMimeType: 'application/json',
      model: 'gemini-3.1-flash-lite'
    });

    if (Array.isArray(result) && result.length > 0) {
      const validated: GrammarQuestion[] = [];
      for (let i = 0; i < result.length; i++) {
        const item = result[i];
        const q: GrammarQuestion = {
          id: `ai-g-${Date.now()}-${i}-${Math.random().toString(36).substring(2, 7)}`,
          category: item.category || 'General Grammar',
          difficulty: item.difficulty || 'Medium',
          question: item.question,
          options: item.options,
          correctIndex: item.correctIndex,
          englishExplanation: item.englishExplanation || 'Follow standard ICAP grammar and syntax rules.',
          urduExplanation: item.urduExplanation || 'آئی کیپ گرائمر کے اصولوں کے مطابق درست جواب منتخب کریں۔'
        };

        // 1. Validate structure
        const valRes = validateGrammarQuestion(q);
        if (!valRes.valid) continue;

        // 2. Check semantic similarity against student history
        const simRes = isQuestionSubstantiallySimilar(q.question, 'grammar-mcq', q.options, 0.50);
        if (simRes.isSimilar) {
          console.info(`[aiTestGenerator] AI question skipped due to similarity: "${q.question.substring(0, 40)}..."`);
          continue; // Automatically skip similar questions
        }

        validated.push(q);
      }
      return validated;
    }
  } catch (err) {
    console.warn('[aiTestGenerator] AI grammar generation fallback to procedural pool:', err);
  }

  return [];
}

/**
 * Attempts to generate a fresh Reading Section 1 (Workplace/Professional Notice with 5 gaps)
 */
export async function generateAiReadingSection1(): Promise<ReadingSection1 | null> {
  const prompt = `Create a brand new Aptis General Reading Test Section 1 for professional accounting trainees.
Topic: A corporate or financial memorandum, audit protocol notice, or workplace policy announcement.
It must contain 5 paragraphs with one gap each (gap1 to gap5).
Each gap must have 3 distinct options (correctIndex 0, 1, or 2).
Include English and Urdu explanations for each gap.

Return ONLY a valid JSON object matching this schema:
{
  "title": "Clear Title of Memo/Notice",
  "introduction": "Read the text below. Choose the word that best fits each gap.",
  "paragraphs": [
    {
      "textBefore": "Text before the gap...",
      "gapId": "gap1",
      "options": ["option1", "option2", "option3"],
      "correctIndex": 0,
      "textAfter": "...text after the gap."
    }
  ],
  "explanations": {
    "gap1": { "english": "Explanation...", "urdu": "وضاحت..." },
    "gap2": { "english": "Explanation...", "urdu": "وضاحت..." },
    "gap3": { "english": "Explanation...", "urdu": "وضاحت..." },
    "gap4": { "english": "Explanation...", "urdu": "وضاحت..." },
    "gap5": { "english": "Explanation...", "urdu": "وضاحت..." }
  }
}`;

  try {
    const result = await callGeminiAPI<any>({
      prompt,
      systemInstruction: 'You are an expert Cambridge/Aptis exam designer. Output strict JSON only.',
      responseMimeType: 'application/json',
      model: 'gemini-3.1-flash-lite'
    });

    if (result && result.title && Array.isArray(result.paragraphs) && result.paragraphs.length === 5) {
      const section: ReadingSection1 = {
        id: `ai-r-sec1-${Date.now()}`,
        title: result.title,
        introduction: result.introduction || 'Read the notice below. Choose the word that best fits each gap.',
        paragraphs: result.paragraphs,
        explanations: result.explanations || {}
      };

      const val = validateReadingSection1(section);
      if (val.valid) {
        const sim = isQuestionSubstantiallySimilar(section.title, 'reading-s1', undefined, 0.60);
        if (!sim.isSimilar) {
          return section;
        }
      }
    }
  } catch (err) {
    console.warn('[aiTestGenerator] AI Reading Section 1 fallback to procedural:', err);
  }

  return null;
}

/**
 * Attempts to generate a brand-new Writing Module (Theme, Part 1, Part 2, Part 3, Part 4)
 */
export async function generateAiWritingModule(): Promise<AptisWritingModule | null> {
  const prompt = `Create a completely new, authentic Aptis General Writing Test module.
Choose an engaging student, collegiate, or community club context (e.g., Young Leaders & Public Speaking Guild, University Technology & Design Society, Campus Environmental Action Circle, Cultural Heritage Association, Collegiate Literary Club).
CRITICAL RULE: DO NOT include accounting, auditing, or related topics (no balance sheets, audit firms, ISA, IFRS, or ledgers).

Structure:
1. Part 1: 5 short onboarding questions (1-5 words each).
2. Part 2: Form Name and prompt requiring a 20-30 words declaration of personal motivation/interests.
3. Part 3: 3 distinct member chat queries with sender names and questions (requiring 30-40 words each).
4. Part 4: Executive notice announcing an unexpected change or request based on general academic/campus events.
   - Task A: Informal email to a member friend (40-60 words).
   - Task B: Formal email to the President/Authority (120-150 words).

Return ONLY a valid JSON object matching the AptisWritingModule schema:
{
  "themeName": "Name of Society or Club",
  "part1": {
    "context": "You have joined the [Club]. Answer the 5 onboarding questions from the coordinator in 1-5 words each.",
    "questions": [
      { "id": "q1", "prompt": "Question 1?", "maxWords": 5, "sampleAnswer": "Sample answer." },
      { "id": "q2", "prompt": "Question 2?", "maxWords": 5, "sampleAnswer": "Sample answer." },
      { "id": "q3", "prompt": "Question 3?", "maxWords": 5, "sampleAnswer": "Sample answer." },
      { "id": "q4", "prompt": "Question 4?", "maxWords": 5, "sampleAnswer": "Sample answer." },
      { "id": "q5", "prompt": "Question 5?", "maxWords": 5, "sampleAnswer": "Sample answer." }
    ]
  },
  "part2": {
    "formName": "Membership Profile & Objectives Form",
    "prompt": "Please state why you joined... (Write 20-30 words)",
    "minWords": 20,
    "maxWords": 30,
    "sampleAnswer": "High quality sample answer."
  },
  "part3": {
    "clubName": "Club Discussion Room",
    "context": "You are chatting with members. Respond to all 3 messages. (Write 30-40 words each)",
    "memberChats": [
      { "id": "chat1", "memberName": "Ayesha (Senior Student)", "avatarInitials": "AS", "message": "Message 1?", "minWords": 30, "maxWords": 40, "sampleAnswer": "Sample response." },
      { "id": "chat2", "memberName": "Bilal (Project Lead)", "avatarInitials": "BL", "message": "Message 2?", "minWords": 30, "maxWords": 40, "sampleAnswer": "Sample response." },
      { "id": "chat3", "memberName": "Farhan (Coordinator)", "avatarInitials": "FC", "message": "Message 3?", "minWords": 30, "maxWords": 40, "sampleAnswer": "Sample response." }
    ]
  },
  "part4": {
    "clubName": "Club Executive Announcement",
    "contextNotice": "Official notice text regarding the unexpected event cancellation...",
    "taskA": {
      "prompt": "Write an email to your club friend. Express your thoughts and suggest an alternative. (Write 40-60 words)",
      "minWords": 40,
      "maxWords": 60,
      "sampleAnswer": "Hi... sample informal email."
    },
    "taskB": {
      "prompt": "Write a formal email to the President. Express your dissatisfaction and request a solution or refund. (Write 120-150 words)",
      "minWords": 120,
      "maxWords": 150,
      "sampleAnswer": "Dear President... sample formal email."
    }
  }
}`;

  try {
    const result = await callGeminiAPI<AptisWritingModule>({
      prompt,
      systemInstruction: 'You are an expert Cambridge/Aptis exam designer. Output strict JSON only without conversational text.',
      responseMimeType: 'application/json',
      model: 'gemini-3.1-flash-lite'
    });

    if (result && result.themeName && result.part1 && result.part2 && result.part3 && result.part4) {
      let finalPart4 = result.part4;
      if (isPart4DefaultOrBanned(finalPart4)) {
        finalPart4 = selectFreshPart4EmailTask(new Set());
      }

      const module: AptisWritingModule = {
        themeName: result.themeName,
        part1: {
          id: `ai-w-p1-${Date.now()}`,
          context: result.part1.context,
          questions: result.part1.questions
        },
        part2: {
          id: `ai-w-p2-${Date.now()}`,
          formName: result.part2.formName,
          prompt: result.part2.prompt,
          minWords: result.part2.minWords || 20,
          maxWords: result.part2.maxWords || 30,
          sampleAnswer: result.part2.sampleAnswer
        },
        part3: {
          id: `ai-w-p3-${Date.now()}`,
          clubName: result.part3.clubName,
          context: result.part3.context,
          memberChats: result.part3.memberChats.map((c, idx) => ({
            id: `ai-chat-${idx + 1}`,
            memberName: c.memberName,
            avatarInitials: c.avatarInitials || c.memberName.substring(0, 2).toUpperCase(),
            message: c.message,
            minWords: c.minWords || 30,
            maxWords: c.maxWords || 40,
            sampleAnswer: c.sampleAnswer
          }))
        },
        part4: {
          id: `ai-w-p4-${Date.now()}`,
          clubName: finalPart4.clubName || result.part4.clubName || 'Executive Committee',
          scenarioTopic: finalPart4.scenarioTopic,
          communicationPurpose: finalPart4.communicationPurpose,
          recipientTitle: finalPart4.recipientTitle,
          recipientName: finalPart4.recipientName,
          friendName: finalPart4.friendName,
          contextNotice: finalPart4.contextNotice,
          taskA: finalPart4.taskA,
          taskB: finalPart4.taskB
        }
      };

      const val = validateWritingModule(module);
      if (val.valid) {
        const sim = isQuestionSubstantiallySimilar(module.themeName, 'writing-task', undefined, 0.60);
        if (!sim.isSimilar) {
          return module;
        }
      }
    }
  } catch (err) {
    console.warn('[aiTestGenerator] AI Writing Module fallback to procedural pool:', err);
  }

  return null;
}

/**
 * Dynamically generates a brand-new, authentic Part 4 Email Writing Task (Task 4A informal + Task 4B formal)
/**
 * Dynamically generates a brand-new, authentic Part 4 Email Writing Task (Task 4A informal + Task 4B formal)
 * strictly using the attached PDF topics (Formal Emails 1-30, Informal Emails 31-50) using Gemini AI.
 * 
 * Strictest anti-repetition rules: NEVER produces the default library/Zoom/15% fee task,
 * NEVER includes accounting or auditing topics, and verifies that the output is fresh.
 */
export async function generateAiWritingPart4(
  contextTheme?: string,
  excludedKeywords?: string[]
): Promise<WritingPart4 | null> {
  const formalPdfTopicsList = [
    '1. Request for Sponsorship for a College Event',
    '2. Invitation to a Company for a Seminar',
    '3. Request for an Internship Opportunity',
    '4. Application for a Job',
    '5. Request for Industrial Visit',
    '6. Invitation to a Guest Speaker',
    '7. Complaint About Poor Service',
    '8. Request for a Business Meeting',
    '9. Proposal for a Corporate Social Responsibility (CSR) Event',
    '10. Request for Financial Assistance',
    '11. Invitation to a Company for a Career Fair',
    '12. Request for a Training Session',
    '13. Inquiry About Professional Courses',
    '14. Complaint About Defective Products',
    '15. Request for Extension of a Deadline',
    '16. Follow-up on a Job Application',
    '17. Request for Business Collaboration',
    '18. Invitation to a Corporate Conference',
    '19. Request for a Letter of Recommendation',
    '20. Apology for a Delayed Submission',
    '21. Request for Permission to Organize an Event',
    '22. Inquiry About a Company\'s Services',
    '23. Proposal for a New Business Idea',
    '24. Request for Employee Training',
    '25. Invitation to a Business Partner',
    '26. Notification of a Change in Meeting Schedule',
    '27. Request for Quotation',
    '28. Response to a Customer Complaint',
    '29. Request for Leave',
    '30. Thank-You Email After a Business Meeting'
  ];

  const informalPdfTopicsList = [
    '31. Inviting a Friend to a Birthday Party',
    '32. Congratulating a Friend on Success',
    '33. Thanking a Friend for Help',
    '34. Apologizing to a Friend',
    '35. Inviting a Friend to Spend Holidays',
    '36. Advising a Friend About Career Choices',
    '37. Sharing Your Exam Results',
    '38. Describing Your First Day at College',
    '39. Sharing Your Hostel Experience',
    '40. Inviting a Friend to a Family Function',
    '41. Congratulating a Friend on a New Job',
    '42. Advising a Friend on Exam Preparation',
    '43. Sharing Your Experience of a College Event',
    '44. Thanking a Friend for a Gift',
    '45. Inviting a Friend to a Study Session',
    '46. Sharing Your Experience of an Educational Trip',
    '47. Advising a Friend on Time Management',
    '48. Comforting a Friend After Failure',
    '49. Sharing Your Future Career Plans',
    '50. Telling a Friend About Your New College or Academy'
  ];

  const randomFormal = formalPdfTopicsList[Math.floor(Math.random() * formalPdfTopicsList.length)];
  const randomInformal = informalPdfTopicsList[Math.floor(Math.random() * informalPdfTopicsList.length)];

  const prompt = `You are a chief examiner designing an authentic writing assessment for the Aptis General Writing Test (Part 4: Email Writing).

CRITICAL REQUIREMENT:
The attached official syllabus PDF is the ONLY source for Formal and Informal email topics:
- Formal Topics (1 to 30)
- Informal Topics (31 to 50)
DO NOT include accounting, auditing, or related topics (no balance sheets, audit firms, ISA, IFRS, or ledgers).
NEVER generate anything about a community library, Zoom meetings, or a 15% fee increase.

Selected Formal Topic: "${randomFormal}"
Selected Informal Topic: "${randomInformal}"

Theme Context: ${contextTheme || 'College, Career, and Professional Development'}

Requirements:
1. "scenarioTopic": State the formal topic name and number (e.g., "${randomFormal}")
2. "communicationPurpose": Specific objective matching the formal topic
3. "recipientTitle": Realistic professional authority title for the formal topic (e.g., Director of Operations, Course Coordinator, Head of Corporate Relations)
4. "recipientName": Realistic professional name with title (e.g., Mr. Salman Qureshi, Dr. Sarah Mansoor, Ms. Nadia Farooq)
5. "friendName": A friend name for Task A (e.g., Hamza, Sara, Bilal, Zainab, Daniyal, Nida, Saad, Amina)
6. "clubName": The college or organizational entity name (e.g., Student Leadership Council, Campus Career Center)
7. "contextNotice": Realistic memorandum or notification text (60-90 words) establishing the situation for the topics.
8. "taskA":
   - prompt: Prompt to write an informal email to your friend (${randomInformal}). (Write 40–60 words)
   - minWords: 40
   - maxWords: 60
   - sampleAnswer: A high-scoring informal email model answer (40-60 words).
9. "taskB":
   - prompt: Prompt to write a formal email to the recipient (${randomFormal}). (Write 120–150 words)
   - minWords: 120
   - maxWords: 150
   - sampleAnswer: A high-scoring formal email model answer (120-150 words).

Return ONLY a valid JSON object matching this schema:
{
  "clubName": "...",
  "scenarioTopic": "...",
  "communicationPurpose": "...",
  "recipientTitle": "...",
  "recipientName": "...",
  "friendName": "...",
  "contextNotice": "...",
  "taskA": {
    "prompt": "...",
    "minWords": 40,
    "maxWords": 60,
    "sampleAnswer": "..."
  },
  "taskB": {
    "prompt": "...",
    "minWords": 120,
    "maxWords": 150,
    "sampleAnswer": "..."
  }
}`;

  try {
    const result = await callGeminiAPI<WritingPart4>({
      prompt,
      systemInstruction: 'You are an expert Cambridge/Aptis exam writer. Always output strictly valid JSON without conversational text.',
      responseMimeType: 'application/json',
      model: 'gemini-3.1-flash-lite'
    });

    if (
      result &&
      result.contextNotice &&
      result.taskA &&
      result.taskA.prompt &&
      result.taskB &&
      result.taskB.prompt &&
      !isPart4DefaultOrBanned(result)
    ) {
      // Check semantic similarity against student history
      const sim = isQuestionSubstantiallySimilar(result.contextNotice, 'writing-task', undefined, 0.45);
      if (!sim.isSimilar) {
        return {
          id: `ai-w-p4-${Date.now()}`,
          clubName: result.clubName || 'Student & Professional Association',
          scenarioTopic: result.scenarioTopic || randomFormal,
          communicationPurpose: result.communicationPurpose || 'Official Written Representation',
          recipientTitle: result.recipientTitle || 'Department Director',
          recipientName: result.recipientName || 'Mr. Salman Qureshi',
          friendName: result.friendName || 'Hamza',
          contextNotice: result.contextNotice,
          taskA: {
            prompt: result.taskA.prompt,
            minWords: result.taskA.minWords || 40,
            maxWords: result.taskA.maxWords || 60,
            sampleAnswer: result.taskA.sampleAnswer || ''
          },
          taskB: {
            prompt: result.taskB.prompt,
            minWords: result.taskB.minWords || 120,
            maxWords: result.taskB.maxWords || 150,
            sampleAnswer: result.taskB.sampleAnswer || ''
          }
        };
      }
    }
  } catch (err) {
    console.warn('[aiTestGenerator] AI Part 4 generation fallback to procedural pool:', err);
  }

  // Fallback strictly selects from PDF pool
  return selectFreshPart4EmailTask(new Set());
}

