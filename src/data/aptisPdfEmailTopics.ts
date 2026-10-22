import { WritingPart4, WritingScenario } from '../types';
import { generateSyntheticPart4EmailTask } from './writingAutoGenerator';
import { isGloballySeen, markGloballySeen } from '../lib/antiRepetitionTracker';

export interface PdfEmailTopicMeta {
  number: number;
  type: 'formal' | 'informal';
  title: string;
  defaultRecipientOrFriend: string;
  contextNoticeSnippet: string;
  taskPrompt: string;
  sampleAnswer: string;
  keyPoints: string[];
}

/**
 * FORMAL EMAIL TOPICS (Numbers 1 to 30 from PDF: Topics for Formal and Informal Emails - CA ECS Test)
 * Strictly non-accounting, non-auditing topics.
 */
export const PDF_FORMAL_EMAIL_TOPICS: Record<number, {
  number: number;
  title: string;
  entityName: string;
  recipientTitle: string;
  recipientName: string;
  contextNotice: string;
  formalPrompt: string;
  sampleAnswer: string;
  keyPoints: string[];
}> = {
  1: {
    number: 1,
    title: 'Request for Sponsorship for a College Event',
    entityName: 'College Student Council & Cultural Society',
    recipientTitle: 'Head of Corporate Affairs & Brand Partnerships',
    recipientName: 'Mr. Salman Qureshi',
    contextNotice: 'MEMORANDUM: Ref CS/2026/01\nTo: Event Organizing Committee\nThe College Annual Inter-University Science and Arts Festival is scheduled for next month. The executive committee requires each project lead to reach out to esteemed corporate organizations to secure platinum or gold event sponsorships and merchandise backing.',
    formalPrompt: 'Write a formal email to the Head of Corporate Affairs (Mr. Salman Qureshi). Introduce the upcoming annual college festival, articulate the mutual visibility and promotional benefits your institution offers to corporate sponsors, and request a meeting to discuss sponsorship tiers. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Qureshi,\n\nI am writing on behalf of the College Student Council to cordially invite your esteemed organization to partner with us as a primary corporate sponsor for our upcoming Annual Inter-University Science and Arts Festival, scheduled for next month.\n\nOur annual festival attracts more than three thousand university students, young innovators, and faculty members from across the country. Sponsoring this prominent youth event will offer your enterprise substantial brand visibility through nationwide promotional campaigns, banner placements across campus pavilions, and direct engagement during our flagship innovation exhibitions.\n\nWe would be honored to discuss our tiered sponsorship packages and explore how we can tailor our promotional platforms to meet your marketing objectives. Could we schedule a brief fifteen-minute meeting or virtual call early next week?\n\nThank you for your valuable time and consideration.\n\nYours sincerely,\nEvent Organizing Lead',
    keyPoints: [
      'Formal salutation and statement of sponsorship purpose',
      'Detail event scope (attendance, participants, date)',
      'Highlight specific promotional benefits for the corporate sponsor',
      'Politely request a meeting to discuss sponsorship tiers',
      'Professional sign-off without informal contractions'
    ]
  },
  2: {
    number: 2,
    title: 'Invitation to a Company for a Seminar',
    entityName: 'Campus Professional Development Centre',
    recipientTitle: 'Director of Human Capital & Talent Acquisition',
    recipientName: 'Ms. Ayesha Siddiqui',
    contextNotice: 'NOTICE: Ref PDC/2026/04\nOur college career center is hosting a national seminar entitled "Workplace Readiness and Digital Skills for Emerging Graduates". We invite distinguished corporate employers to conduct expert workshops and mentor student delegates.',
    formalPrompt: 'Write a formal email to the Director of Human Capital (Ms. Ayesha Siddiqui). Invite her company to conduct a dedicated masterclass at the upcoming career readiness seminar, explain the profile of participating students, and request their confirmation of participation. (Write 120–150 words)',
    sampleAnswer: 'Dear Ms. Siddiqui,\n\nI am writing on behalf of the Campus Professional Development Centre to cordially invite your distinguished organization to participate in our upcoming national seminar, "Workplace Readiness and Digital Skills for Emerging Graduates," scheduled for Friday, November 14th.\n\nOur seminar will convene over four hundred final-year students specializing in computer science, business administration, and industrial engineering. Given your organization’s stellar reputation for fostering innovation and cultivating young talent, we would be deeply privileged if your senior leadership team could deliver a keynote address or conduct a ninety-minute interactive masterclass on modern industry expectations.\n\nWe believe this engagement will provide immense inspiration to our aspiring graduates while showcasing your company’s thought leadership. Please let us know if you require further details regarding the event agenda.\n\nThank you for considering our invitation.\n\nYours sincerely,\nSeminar Coordinator',
    keyPoints: [
      'Courteous invitation to corporate leadership',
      'State seminar title, date, and target audience',
      'Specify proposed role (keynote address or interactive workshop)',
      'Emphasize mutual value for student talent and employer branding',
      'Formal closing and inquiry for confirmation'
    ]
  },
  3: {
    number: 3,
    title: 'Request for an Internship Opportunity',
    entityName: 'University Department of Management Studies',
    recipientTitle: 'Head of Talent Acquisition & Internships',
    recipientName: 'Mr. Tariq Mansoor',
    contextNotice: 'INTERNSHIP BULLETIN: Ref INT/2026/08\nFinal-year undergraduate students are encouraged to formally apply for structured summer industrial internships at reputable national and multinational corporations to satisfy degree practical requirements.',
    formalPrompt: 'Write a formal email to the Head of Talent Acquisition (Mr. Tariq Mansoor). Express your keen interest in securing a summer internship in his company’s operations department, outline your academic credentials and practical project skills, and request an interview. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Mansoor,\n\nI am writing to formally express my enthusiastic interest in securing a summer internship opportunity within your operations department, as advertised on your corporate portal.\n\nI am currently a penultimate-year undergraduate student majoring in Business Administration, maintaining a cumulative grade point average of 3.8. Throughout my academic coursework, I have completed comprehensive projects in supply chain coordination, process optimization, and database analytics. Furthermore, my active leadership in the university business society has sharpened my project management, interpersonal communication, and collaborative problem-solving skills.\n\nYour organization’s unwavering commitment to operational excellence aligns seamlessly with my career aspirations. I am eager to contribute diligently to your ongoing projects while learning under your esteemed mentorship. My curriculum vitae and academic transcripts are attached for your consideration.\n\nThank you for your time and favorable consideration.\n\nYours sincerely,\nApplicant',
    keyPoints: [
      'Clear statement of internship application',
      'Summarize academic background, GPA, and major',
      'Highlight relevant project competencies and soft skills',
      'Reference attached CV and express desire for interview',
      'Professional, respectful tone throughout'
    ]
  },
  4: {
    number: 4,
    title: 'Application for a Job',
    entityName: 'Corporate Talent Acquisition Portal',
    recipientTitle: 'Senior Human Resources Recruitment Manager',
    recipientName: 'Ms. Farzana Haque',
    contextNotice: 'VACANCY CIRCULAR: Ref HR/2026/12\nApex Corporation has announced an open recruitment drive for the position of Junior Operations Associate. Candidates must submit formal cover emails demonstrating relevant qualifications and professional readiness.',
    formalPrompt: 'Write a formal job application email to the Senior Recruitment Manager (Ms. Farzana Haque). State the position you are applying for, summarize your qualifications and demonstrable achievements, and articulate why you are an ideal fit for the organization. (Write 120–150 words)',
    sampleAnswer: 'Dear Ms. Haque,\n\nI am writing to formally apply for the position of Junior Operations Associate at Apex Corporation, as advertised on your careers portal (Reference HR/2026/12).\n\nHaving recently completed my Bachelor of Science in Information Systems with honors, I possess a rigorous foundation in enterprise workflows, data analysis, and client service delivery. During my previous twelve-week industrial attachment, I successfully automated routine customer reporting schedules, reducing processing turnaround times by twenty-five percent. In addition, I have developed strong team coordination and verbal communication skills through leading multidisciplinary university committees.\n\nI hold immense admiration for Apex Corporation’s culture of technological excellence and customer-centric values. I am confident that my diligence, technical versatility, and proactive attitude will enable me to make immediate, positive contributions to your operational teams. I welcome the opportunity to discuss my candidacy further in an interview.\n\nYours sincerely,\nJob Applicant',
    keyPoints: [
      'Specify exact job title and reference code',
      'Detail degree, practical achievements, and measurable impact',
      'Align personal strengths with company values',
      'Politely request interview consideration',
      'Maintain exemplary formal business English'
    ]
  },
  5: {
    number: 5,
    title: 'Request for Industrial Visit',
    entityName: 'College Department of Mechanical & Systems Engineering',
    recipientTitle: 'Plant Operations Director & Facility General Manager',
    recipientName: 'Engr. Rashid Kamal',
    contextNotice: 'ACADEMIC CIRCULAR: Ref ENG/2026/05\nTo bridge classroom theory and practical industrial operations, faculty heads have authorized organizing educational facility tours for third-year engineering students to visit advanced manufacturing plants.',
    formalPrompt: 'Write a formal email to the Plant Operations Director (Engr. Rashid Kamal). Request permission for a delegation of thirty engineering students and two faculty supervisors to conduct an educational industrial visit to his manufacturing facility. (Write 120–150 words)',
    sampleAnswer: 'Dear Engr. Kamal,\n\nI am writing on behalf of the Department of Systems Engineering to formally request permission to conduct an educational industrial visit to your state-of-the-art manufacturing facility in the upcoming month.\n\nOur delegation will comprise thirty third-year undergraduate engineering students accompanied by two senior faculty supervisors. As our curriculum currently focuses on automated assembly lines, quality control mechanisms, and industrial robotics, observing your company’s advanced operational workflows firsthand would provide invaluable practical insights to complement theoretical coursework.\n\nWe propose scheduling the half-day visit on either Thursday, October 22nd, or Tuesday, October 27th, according to your operational convenience. Our institution guarantees full compliance with all facility safety guidelines, nondisclosure protocols, and protective gear mandates. We would be profoundly grateful for your kind approval.\n\nThank you for supporting student technical education.\n\nYours sincerely,\nStudent Delegation Coordinator',
    keyPoints: [
      'State delegation composition (students, faculty)',
      'Explain academic purpose and specific areas of observation',
      'Propose tentative dates with flexibility',
      'Commit to facility safety rules and protocols',
      'Formal respectful conclusion'
    ]
  },
  6: {
    number: 6,
    title: 'Invitation to a Guest Speaker',
    entityName: 'University Debating & Leadership Guild',
    recipientTitle: 'Managing Director & Keynote Speaker',
    recipientName: 'Dr. Zafar Iqbal',
    contextNotice: 'LEADERSHIP FORUM DIRECTIVE: Ref LFD/2026/09\nThe annual University Leadership Conclave seeks eminent thought leaders and industry pioneers to address students on ethical governance, career resilience, and modern leadership strategies.',
    formalPrompt: 'Write a formal email to Dr. Zafar Iqbal inviting him as the keynote guest speaker for the Annual Leadership Conclave. Introduce the theme, specify the date and format, and explain why his expertise is uniquely inspiring for students. (Write 120–150 words)',
    sampleAnswer: 'Dear Dr. Iqbal,\n\nOn behalf of the University Leadership Guild, it is my distinct honor to cordially invite you as our distinguished keynote guest speaker at our upcoming Annual Leadership Conclave, scheduled for Saturday, November 28th, in the university main auditorium.\n\nThe theme for this year’s conclave is "Navigating Uncertainty: Ethical Decision-Making and Resilience in the Digital Era." We anticipate an enthusiastic audience of over five hundred students, young researchers, and faculty members. Your pioneering contributions to organizational governance and your widely acclaimed lectures on ethical business leadership make you the ideal voice to inspire our student community.\n\nWe would be privileged to host a forty-five-minute keynote address followed by an interactive fifteen-minute question-and-answer session. We would gladly accommodate any scheduling preferences or logistical arrangements you require.\n\nThank you for considering our invitation.\n\nYours sincerely,\nGuild President',
    keyPoints: [
      'Honorific formal invitation to keynote speaker',
      'Detail conclave theme, audience size, and venue',
      'Specify lecture format and time allocation',
      'Acknowledge recipient’s prestige and expertise',
      'Offer logistical flexibility and express gratitude'
    ]
  },
  7: {
    number: 7,
    title: 'Complaint About Poor Service',
    entityName: 'Customer Experience & Quality Assurance Bureau',
    recipientTitle: 'Customer Care & Quality Assurance Director',
    recipientName: 'Mr. Naveed Anwar',
    contextNotice: 'SERVICE INCIDENT REPORT: Ref CC/2026/19\nFollowing an unresolved conference facility booking where internet connectivity failed and scheduled catering arrived three hours late, customer delegates are filing formal grievance representations.',
    formalPrompt: 'Write a formal complaint email to the Customer Care Director (Mr. Naveed Anwar). Describe the severe service failures experienced during your recent conference room booking, explain the disruption caused, and request a partial refund and corrective measures. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Anwar,\n\nI am writing to formally register my serious dissatisfaction regarding the substandard service experienced during our corporate workshop booking at your convention center on October 10th (Booking Reference CC-8942).\n\nDespite confirming high-speed dedicated internet connectivity and technical support two weeks in advance, the conference hall network remained offline throughout the entire morning session. Consequently, our keynote speaker was unable to broadcast her virtual presentation to international delegates. Furthermore, the pre-ordered executive catering arrived three hours late without any prior communication or apology from your duty staff, causing immense embarrassment to our organizers.\n\nThis experience fell far below the professional hospitality standards advertised by your facility. I respectfully request an official investigation into these failures, a formal written apology, and a thirty percent partial refund on our facility rental invoice.\n\nI look forward to your prompt response.\n\nYours sincerely,\nEvent Manager',
    keyPoints: [
      'Cite booking reference and date clearly',
      'Enumerate specific service defects factually (network failure, late catering)',
      'Explain adverse impact on attendees and organizational reputation',
      'Formally demand redress (refund, investigation, apology)',
      'Firm, assertive, yet professional tone'
    ]
  },
  8: {
    number: 8,
    title: 'Request for a Business Meeting',
    entityName: 'Corporate Solutions & Strategic Partnerships',
    recipientTitle: 'Chief Strategy Officer',
    recipientName: 'Mr. Haris Qureshi',
    contextNotice: 'BUSINESS OUTREACH: Ref STR/2026/02\nFollowing the publication of our enterprise workflow software, we are scheduling formal executive introductory meetings with leading commercial enterprises to present collaborative integration opportunities.',
    formalPrompt: 'Write a formal email to the Chief Strategy Officer (Mr. Haris Qureshi). Request a formal business meeting to present your innovative workflow automation software and explore collaborative synergies. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Qureshi,\n\nI hope this email finds you well. I am writing to formally request a brief thirty-minute introductory business meeting to explore potential strategic collaboration between our two organizations.\n\nOur firm specializes in developing intelligent enterprise workflow and resource optimization platforms that help corporate enterprises streamline inter-departmental communications and eliminate redundant administrative bottlenecks. Having closely followed your organization’s remarkable growth and commitment to digital transformation, we believe our automated workflow platform could generate substantial operational efficiencies across your regional logistics divisions.\n\nWe would welcome the opportunity to present a high-level demonstration of our solution and discuss how our technology can seamlessly complement your strategic goals. We are available to meet at your executive offices or via video conference on either Tuesday, November 3rd, or Thursday, November 5th.\n\nThank you for your valuable time and consideration.\n\nYours sincerely,\nBusiness Development Lead',
    keyPoints: [
      'Polite formal opening stating meeting purpose',
      'Briefly describe solution and tangible operational value',
      'Align proposed synergy with recipient’s organizational goals',
      'Propose specific meeting duration and tentative dates',
      'Professional sign-off'
    ]
  },
  9: {
    number: 9,
    title: 'Proposal for a Corporate Social Responsibility (CSR) Event',
    entityName: 'Corporate Sustainability & Community Affairs',
    recipientTitle: 'Director of Corporate Social Responsibility',
    recipientName: 'Ms. Rubina Kausar',
    contextNotice: 'CSR DIRECTIVE: Ref CSR/2026/07\nOur community welfare association is partnering with regional corporate sponsors to launch the "Clean Water & Tree Plantation Drive" across underprivileged suburban neighborhoods.',
    formalPrompt: 'Write a formal email to the Director of Corporate Social Responsibility (Ms. Rubina Kausar). Submit a formal proposal for a joint community tree plantation and clean water initiative, detailing the environmental impact and employee volunteering benefits. (Write 120–150 words)',
    sampleAnswer: 'Dear Ms. Kausar,\n\nI am writing to formally present a collaborative Corporate Social Responsibility proposal on behalf of the Green Horizon Community Alliance, entitled "Urban Canopy & Clean Water Drive 2026."\n\nThis community initiative aims to plant five thousand indigenous saplings and install ten solar-powered water filtration units across vulnerable suburban neighborhoods over the upcoming winter quarter. Partnering in this initiative offers your organization an exceptional platform to demonstrate environmental stewardship while generating tangible social impact. Moreover, the project provides meaningful weekend volunteering opportunities for your corporate employees to engage directly with local families and community youth.\n\nA comprehensive project concept note outlining implementation timelines, resource allocations, and third-party impact assessment metrics is attached for your review. We would be delighted to arrange a presentation with your CSR committee at your earliest convenience.\n\nThank you for your continuous dedication to sustainable community development.\n\nYours sincerely,\nCSR Project Director',
    keyPoints: [
      'State name and purpose of CSR initiative',
      'Outline measurable project deliverables (saplings, water units)',
      'Highlight employee engagement and brand reputation benefits',
      'Reference attached proposal documentation',
      'Polite call to action for presentation'
    ]
  },
  10: {
    number: 10,
    title: 'Request for Financial Assistance',
    entityName: 'University Student Financial Aid Board',
    recipientTitle: 'Chairperson of Student Welfare & Scholarship Committee',
    recipientName: 'Prof. Masood Akhtar',
    contextNotice: 'STUDENT AID NOTICE: Ref SFA/2026/15\nStudents encountering unforeseen household financial hardship that threatens continuous semester enrollment must submit formal, documented requests for need-based tuition assistance.',
    formalPrompt: 'Write a formal email to the Chairperson of the Student Welfare Committee (Prof. Masood Akhtar). Request need-based financial tuition assistance, explain your recent financial hardship, highlight your strong academic record, and pledge continued diligence. (Write 120–150 words)',
    sampleAnswer: 'Dear Prof. Akhtar,\n\nI am writing to respectfully submit an application for need-based student financial assistance for the upcoming academic semester, under the university emergency welfare program.\n\nRecently, our family faced an unexpected medical emergency when my sole-earning parent suffered severe illness, resulting in substantial healthcare expenses and sudden loss of monthly income. Consequently, my family is currently unable to cover my semester tuition dues. Despite these challenging circumstances, I have maintained a cumulative grade point average of 3.85 while actively serving as a peer tutor in the university mathematics learning clinic.\n\nContinuing my university education is of paramount importance to me. Any partial tuition waiver, emergency bursary, or flexible payment plan would allow me to maintain continuous enrollment without academic disruption. All relevant medical invoices and household income affidavits are attached for your verification.\n\nThank you for your compassionate consideration.\n\nYours sincerely,\nUndergraduate Student',
    keyPoints: [
      'Respectful statement of financial assistance request',
      'Explain unforeseen hardship factually without melodrama',
      'Highlight strong academic performance and campus contribution',
      'Reference supporting verifiable documentation',
      'Sincere expression of gratitude'
    ]
  },
  11: {
    number: 11,
    title: 'Invitation to a Company for a Career Fair',
    entityName: 'University Placement & Corporate Relations Cell',
    recipientTitle: 'Head of Campus Recruitment & Employer Relations',
    recipientName: 'Mr. Danish Zubair',
    contextNotice: 'CAREER FAIR BULLETIN: Ref CF/2026/03\nThe University Placement Cell is organizing its flagship Annual Engineering and Management Career Expo. Over one thousand pre-screened graduates will participate.',
    formalPrompt: 'Write a formal email to the Head of Campus Recruitment (Mr. Danish Zubair). Invite his corporation to set up an exhibition booth at the upcoming Annual Career Expo, outline the talent pool available, and provide registration details. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Zubair,\n\nOn behalf of the University Placement and Corporate Relations Cell, I am delighted to cordially invite your esteemed organization to participate in our Annual National Career Expo, taking place on Wednesday, March 18th.\n\nThis premier campus recruitment event will feature over one thousand graduating students across disciplines including software engineering, data science, marketing, and human resource management. Our graduates have completed rigorous academic curricula enriched by real-world capstone projects and industry certifications. Participating in our expo will provide your talent acquisition team with direct access to pre-screened, motivated candidates, alongside dedicated spaces for on-the-spot interviews and corporate presentations.\n\nEnclosed is our employer registration brochure detailing booth packages, on-campus interview facilities, and digital promotion options. We would be thrilled to confirm your company’s participation by the end of this month.\n\nThank you for your enduring partnership with our university.\n\nYours sincerely,\nPlacement Cell Officer',
    keyPoints: [
      'Warm formal invitation to annual campus career expo',
      'State date, expected student disciplines, and candidate qualifications',
      'Detail employer benefits (booths, interview suites, pre-screening)',
      'Provide deadline for registration confirmation',
      'Courteous closing'
    ]
  },
  12: {
    number: 12,
    title: 'Request for a Training Session',
    entityName: 'Corporate Human Resources & Learning Division',
    recipientTitle: 'Head of Organizational Learning & Professional Development',
    recipientName: 'Ms. Samina Tariq',
    contextNotice: 'TRAINING DIRECTIVE: Ref TR/2026/06\nDepartment leads are invited to request specialized technical or soft-skills corporate workshops to address newly identified workflow skill gaps within operational teams.',
    formalPrompt: 'Write a formal email to the Head of Organizational Learning (Ms. Samina Tariq). Request a dedicated corporate training workshop on agile project management tools for your team, articulate the specific workflow benefits, and suggest tentative timelines. (Write 120–150 words)',
    sampleAnswer: 'Dear Ms. Tariq,\n\nI am writing to formally request a specialized professional training workshop on Agile Project Management and modern digital collaboration tools for the operational staff within our division.\n\nOver recent months, our department has transitioned towards cross-functional project delivery. While our team members possess strong technical foundations, we have identified significant efficiency gaps in sprint planning, automated task tracking, and cross-team backlog prioritization. A structured two-day interactive workshop conducted by your certified corporate trainers would substantially enhance our execution speed and eliminate project bottlenecks.\n\nWe would appreciate scheduling this training program during the second week of next month, preferably across two half-day sessions to prevent disruption to ongoing client deliverables. We are eager to collaborate with your team to customize the workshop curriculum to our team’s specific operational requirements.\n\nThank you for supporting our team’s professional development.\n\nYours sincerely,\nOperations Team Lead',
    keyPoints: [
      'State requested training topic clearly (Agile project management)',
      'Explain identified skill gaps and justification for the training',
      'Articulate concrete operational benefits',
      'Propose flexible scheduling to protect daily workflow',
      'Professional sign-off'
    ]
  },
  13: {
    number: 13,
    title: 'Inquiry About Professional Courses',
    entityName: 'Institute of Executive Education & Professional Certification',
    recipientTitle: 'Director of Admissions & Continuing Education',
    recipientName: 'Mr. Asim Jamil',
    contextNotice: 'EXECUTIVE EDUCATION ADVISORY: Ref ADM/2026/11\nProspective candidates seeking advanced postgraduate executive certificates in Business Leadership or Project Management may direct inquiries to the Admissions Directorate.',
    formalPrompt: 'Write a formal inquiry email to the Director of Admissions (Mr. Asim Jamil). Inquire about the Executive Certificate in Business Leadership, requesting details on weekend schedules, admission requirements, course fee structures, and installment plans. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Jamil,\n\nI am writing to formally inquire about the Executive Certificate in Strategic Business Leadership offered by your esteemed institute for the upcoming spring term.\n\nAs a mid-level project supervisor seeking to strengthen my strategic decision-making and cross-functional leadership capabilities, I found your curriculum highly pertinent. However, to evaluate whether the program fits my professional commitments, I would appreciate receiving further particulars regarding the course delivery format. Specifically, could you clarify whether lectures are conducted during weekend hours or weekday evenings, and whether blended remote learning modules are supported?\n\nAdditionally, I would be grateful if you could share the detailed fee schedule, available corporate sponsorship discounts, and the final application deadline for the spring cohort. A copy of the detailed course syllabus would also be greatly appreciated.\n\nThank you for your assistance and guidance.\n\nYours sincerely,\nProspective Applicant',
    keyPoints: [
      'State specific certificate course title',
      'Enumerate clear inquiries (schedule, weekend format, remote options)',
      'Request fee schedule, discounts, and application deadlines',
      'Professional tone with clear questions',
      'Formal closing'
    ]
  },
  14: {
    number: 14,
    title: 'Complaint About Defective Products',
    entityName: 'Corporate Procurement & Supplier Relations',
    recipientTitle: 'Head of Quality Control & Customer Logistics',
    recipientName: 'Mr. Imran Bashir',
    contextNotice: 'SUPPLY CHAIN REVISION: Ref PR/2026/22\nUpon receiving the latest batch of 50 office computer monitors under purchase order PO-4491, technical inspection revealed 12 units have shattered display panels or failing power adapters.',
    formalPrompt: 'Write a formal complaint email to the Supplier Quality Manager (Mr. Imran Bashir). Report the defective shipment of office monitors, specify the defects found, and request immediate replacement units alongside freight collection. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Bashir,\n\nI am writing to formally report a critical quality defect in our recent order of fifty commercial LED desktop monitors, delivered to our central offices on Monday under Purchase Order PO-4491.\n\nDuring our technical intake inspection yesterday, our IT staff identified twelve units that were completely unusable. Specifically, eight monitors suffered severe screen fractures resulting from inadequate packaging, while four additional units exhibited completely non-functional power supply boards. Given that our newly recruited customer support team commences operations next Monday, this hardware defect critically compromises our onboarding timeline.\n\nAs these defects represent a clear breach of our warranty agreement, I request that you dispatch twelve fully tested replacement monitors via expedited courier immediately. Furthermore, please arrange for your freight carrier to collect the damaged units from our facility at your expense.\n\nI look forward to your urgent confirmation.\n\nYours sincerely,\nProcurement Manager',
    keyPoints: [
      'Reference purchase order number and delivery date',
      'Enumerate exact defects and quantities (8 cracked screens, 4 faulty power units)',
      'Explain critical impact on operational timelines',
      'Demand specific remedies (expedited replacements, return freight)',
      'Firm, uncompromising professional tone'
    ]
  },
  15: {
    number: 15,
    title: 'Request for Extension of a Deadline',
    entityName: 'Academic Directorate & Examination Office',
    recipientTitle: 'Course Director & Senior Faculty Head',
    recipientName: 'Dr. Sarah Mansoor',
    contextNotice: 'COURSE POLICY CIRCULAR: Ref AC/2026/17\nTerm capstone project submissions are strictly due by Friday at 5:00 PM. Any student facing certified medical illness or emergency must submit a formal extension request.',
    formalPrompt: 'Write a formal email to your Course Director (Dr. Sarah Mansoor). Request a 72-hour extension on your term capstone submission deadline, explain the extenuating technical and medical delays encountered, and present your progress to date. (Write 120–150 words)',
    sampleAnswer: 'Dear Dr. Mansoor,\n\nI am writing to respectfully request a seventy-two-hour extension on the submission deadline for our term capstone research project, originally due this Friday, October 24th.\n\nOver the past week, two unforeseen setbacks significantly impeded our final project testing. First, our cloud simulation database suffered a severe server outage that erased four days of indexed test iterations. Concurrently, our lead programmer was hospitalized with acute viral fever, leaving our remaining team members to reconstruct the corrupted simulation models independently. We have already completed eighty percent of the analytical documentation and project report.\n\nA seventy-two-hour extension until Monday at 5:00 PM would enable our team to thoroughly validate the restored simulation data and deliver a rigorous capstone submission matching your standards. Medical certificates and cloud incident logs are attached for your review.\n\nThank you for your compassionate understanding.\n\nYours sincerely,\nProject Team Lead',
    keyPoints: [
      'Clear, polite request for specific extension duration (72 hours)',
      'Explain genuine extenuating circumstances (server outage, medical emergency)',
      'Detail substantial progress already achieved (80% complete)',
      'Attach corroborating proof (medical note, server logs)',
      'Courteous, responsible tone'
    ]
  },
  16: {
    number: 16,
    title: 'Follow-up on a Job Application',
    entityName: 'Executive Search & Human Capital Bureau',
    recipientTitle: 'Senior Talent Acquisition Specialist',
    recipientName: 'Ms. Nadia Farooq',
    contextNotice: 'RECRUITMENT NOTICE: Ref HR/2026/28\nApplicants who completed final-round panel interviews more than two weeks ago without receiving a formal outcome are authorized to submit professional follow-up inquiries.',
    formalPrompt: 'Write a formal follow-up email to the Talent Acquisition Specialist (Ms. Nadia Farooq). Inquire politely about the status of your application for the Communications Associate position following your final interview, reiterate your enthusiasm, and offer additional references. (Write 120–150 words)',
    sampleAnswer: 'Dear Ms. Farooq,\n\nI hope this email finds you well. I am writing to politely follow up regarding the status of my application for the Communications Associate position, following my panel interview on October 8th.\n\nI thoroughly enjoyed discussing the role with you and the marketing leadership team, and our conversation further reinforced my enthusiasm for joining your organization. I am especially excited about the prospect of contributing my digital storytelling, public relations, and stakeholder engagement skills to your upcoming corporate re-branding campaigns.\n\nI appreciate that your recruitment committee has a deliberate and thorough evaluation process. Could you kindly inform me if you have any updates regarding the next steps in the selection process? Please let me know if you require any additional work portfolios, academic transcripts, or professional references.\n\nThank you again for your time, courtesy, and continued consideration.\n\nYours sincerely,\nJob Candidate',
    keyPoints: [
      'Polite reference to interview date and position title',
      'Reiterate sincere enthusiasm for the specific company role',
      'Respectfully inquire about timeline or next recruitment steps',
      'Offer additional materials or references willingly',
      'Refined, gracious professional tone'
    ]
  },
  17: {
    number: 17,
    title: 'Request for Business Collaboration',
    entityName: 'Strategic Business Alliances Group',
    recipientTitle: 'Vice President of Strategic Alliances',
    recipientName: 'Mr. Kamran Sethi',
    contextNotice: 'PARTNERSHIP DIRECTIVE: Ref SA/2026/05\nOur logistics software division is initiating partnership discussions with premier regional warehouse networks to co-develop seamless end-to-end cargo dispatch systems.',
    formalPrompt: 'Write a formal email to the Vice President of Strategic Alliances (Mr. Kamran Sethi). Propose a formal business collaboration between your logistics software platform and his warehousing network, emphasizing mutual commercial advantages. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Sethi,\n\nI am writing to formally propose a strategic business partnership between CargoPulse Systems and your esteemed regional warehousing enterprise.\n\nAs the leading provider of automated cloud dispatch and cargo-tracking software, our platform has successfully enabled transport carriers to reduce shipment delays by thirty percent. We have observed your impressive expansion in temperature-controlled warehousing across industrial hubs. By integrating our automated tracking API directly with your facility management software, we can collectively offer commercial clients an unprecedented, unified warehousing and transit tracking solution.\n\nThis synergistic collaboration would allow both our enterprises to capture emerging market demand while delivering superior operational visibility to mutual customers. We would welcome the privilege of scheduling an exploratory discussion with your executive team next week to review technical integration models and partnership frameworks.\n\nThank you for your consideration, and I look forward to your positive response.\n\nYours sincerely,\nHead of Strategic Alliances',
    keyPoints: [
      'Formally introduce corporate partnership proposal',
      'Identify complementary strengths of both entities',
      'Articulate concrete mutual commercial and client benefits',
      'Propose exploratory meeting or technical presentation',
      'Professional, business-focused diction'
    ]
  },
  18: {
    number: 18,
    title: 'Invitation to a Corporate Conference',
    entityName: 'National Chamber of Commerce & Industry',
    recipientTitle: 'Chief Executive Officer & Industry Leader',
    recipientName: 'Mr. Jalaluddin Khan',
    contextNotice: 'CONFERENCE ANNOUNCEMENT: Ref NCC/2026/14\nThe National Chamber is hosting its Annual International Trade & Innovation Conference in Islamabad, inviting top executives to attend as VIP corporate delegates.',
    formalPrompt: 'Write a formal invitation email to Chief Executive Officer (Mr. Jalaluddin Khan). Invite him and his executive delegation to attend the Annual International Trade & Innovation Conference, outlining key plenary sessions and networking summits. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Khan,\n\nOn behalf of the National Chamber of Commerce and Industry, it is my distinct privilege to cordially invite you and your executive leadership team to the Annual International Trade and Innovation Conference, taking place on December 10th and 11th at the Serena Hotel, Islamabad.\n\nThis year’s conference will convene prominent policymakers, international trade commissioners, and corporate leaders to address "Sustainable Supply Chains and Cross-Border Digital Commerce." The program includes high-level ministerial roundtables, specialized panel discussions on export financing, and exclusive executive networking lounges designed to foster bilateral trade agreements.\n\nGiven your organization’s pioneering footprint in cross-border logistics, your presence would significantly enrich our plenary dialogues. Enclosed please find the conference prospectus and VIP delegate registration credentials. We would be profoundly honored to welcome your delegation.\n\nThank you for your leadership and distinguished service to national commerce.\n\nYours sincerely,\nConference Organizing Committee Chairman',
    keyPoints: [
      'Prestigious formal invitation to executive leadership',
      'Specify conference dates, venue, and central theme',
      'Highlight high-level program elements (ministerial roundtables, networking)',
      'Acknowledge recipient’s industry prestige',
      'Provide registration credentials and warm closing'
    ]
  },
  19: {
    number: 19,
    title: 'Request for a Letter of Recommendation',
    entityName: 'Faculty of Arts and Social Sciences',
    recipientTitle: 'Professor & Former Department Chairperson',
    recipientName: 'Dr. Munir Ahmed',
    contextNotice: 'GRADUATE STUDY DIRECTIVE: Ref GS/2026/10\nGraduates submitting applications for international postgraduate scholarships require formal letters of academic recommendation from senior university professors.',
    formalPrompt: 'Write a formal email to your former professor (Dr. Munir Ahmed). Respectfully request an academic letter of recommendation for your postgraduate scholarship application, remind him of your coursework and thesis performance, and offer your application packet. (Write 120–150 words)',
    sampleAnswer: 'Dear Dr. Ahmed,\n\nI hope this email finds you in good health and high spirits. I am writing to respectfully ask if you would be willing to provide an academic letter of recommendation supporting my application for the Commonwealth Postgraduate Master’s Scholarship in Public Policy.\n\nI had the distinct privilege of being your student in both Advanced Comparative Politics and Research Methodology during my undergraduate degree, where I achieved an \'A\' grade in both modules. Under your invaluable mentorship, I also completed my undergraduate dissertation examining regional educational governance, which was selected for the departmental honors roll.\n\nYour recommendation regarding my analytical rigor and research dedication would carry immense weight with the scholarship admissions committee. The submission deadline is November 30th. I have attached my curriculum vitae, academic transcript, and personal statement for your convenience.\n\nThank you for your enduring mentorship and guidance.\n\nYours sincerely,\nFormer Student & Research Mentee',
    keyPoints: [
      'Respectful, cordial opening to former professor',
      'Specify target scholarship program and submission deadline',
      'Remind professor of specific courses, grades, and thesis under his supervision',
      'Provide attached reference materials (CV, personal statement)',
      'Sincere expression of appreciation'
    ]
  },
  20: {
    number: 20,
    title: 'Apology for a Delayed Submission',
    entityName: 'Departmental Academic Standards Board',
    recipientTitle: 'Course Coordinator & Academic Supervisor',
    recipientName: 'Prof. Zahid Hussain',
    contextNotice: 'SUBMISSION ADVISORY: Ref AS/2026/14\nStudents whose formal technical term papers were submitted after the official portal closing must file a formal explanation and apology to the academic board.',
    formalPrompt: 'Write a formal apology email to your Course Coordinator (Prof. Zahid Hussain). Apologize sincerely for the delayed submission of your final project report, explain the genuine technical failure that occurred, and request evaluation without severe penalties. (Write 120–150 words)',
    sampleAnswer: 'Dear Prof. Hussain,\n\nI am writing to formally apologize for the delayed submission of my final semester project documentation, which was uploaded five hours past the midnight deadline yesterday.\n\nWhile attempting to upload the finalized digital manuscript yesterday evening, our area experienced an unexpected high-voltage power surge that damaged my home workstation router. Unfortunately, subsequent efforts to transmit the large multimedia appendices over cellular data resulted in repeated upload timeouts and file corruptions. I eventually traveled to the campus twenty-four-hour computer lab early this morning to successfully complete the submission.\n\nI fully acknowledge the strict academic deadlines established for this course and deeply regret the inconvenience my delay has caused your grading schedule. I have attached internet service disruption receipts and timestamps for your verification, and I respectfully request that my work be evaluated without punitive disqualification.\n\nThank you for your understanding.\n\nYours sincerely,\nStudent',
    keyPoints: [
      'Unreserved formal apology in opening sentence',
      'Provide truthful, factual account of technical obstacle',
      'Demonstrate corrective action taken (went to campus 24h lab)',
      'Respectfully appeal for leniency with attached proof',
      'Professional, contrite tone'
    ]
  },
  21: {
    number: 21,
    title: 'Request for Permission to Organize an Event',
    entityName: 'Campus Facilities & Student Affairs Administration',
    recipientTitle: 'Director of Student Affairs & Campus Administration',
    recipientName: 'Mr. Khurram Shahzad',
    contextNotice: 'STUDENT ACTIVITIES DIRECTIVE: Ref SA/2026/21\nAll student societies intending to host inter-collegiate events, guest seminars, or campus exhibitions must submit formal written proposals to the Director of Student Affairs for administrative sanction.',
    formalPrompt: 'Write a formal email to the Director of Student Affairs (Mr. Khurram Shahzad). Request formal administrative permission to organize a three-day Inter-College Debate Championship on campus, detailing proposed dates, venue requirements, and safety protocols. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Shahzad,\n\nI am writing on behalf of the University Literary and Debating Guild to formally request administrative permission to organize the 12th Annual Inter-College Parliamentary Debate Championship on campus from November 20th to November 22nd.\n\nWe anticipate hosting over twenty-four collegiate debate teams from regional universities, comprising approximately one hundred and fifty student delegates. We request the reservation of the main campus auditorium for opening and closing ceremonies, alongside four departmental seminar halls for concurrent preliminary rounds.\n\nOur organizing committee has developed a rigorous operational plan that ensures zero disturbance to regular academic classes. Furthermore, we have coordinated with campus security to manage delegate registration badges, vehicle parking, and emergency protocols. A detailed event charter, proposed budget, and security checklist are attached for your review. We would be grateful for your official sanction.\n\nThank you for your continuous encouragement of student co-curricular activities.\n\nYours sincerely,\nGuild President',
    keyPoints: [
      'Formal request for administrative event permission',
      'Detail event name, dates, participant numbers, and facilities requested',
      'Reassure management regarding safety and non-disruption of classes',
      'Reference attached event charter and security plan',
      'Respectful, structured closing'
    ]
  },
  22: {
    number: 22,
    title: 'Inquiry About a Company\'s Services',
    entityName: 'Corporate Operations & Vendor Assessment',
    recipientTitle: 'Head of Enterprise Sales & Client Solutions',
    recipientName: 'Ms. Huma Abbasi',
    contextNotice: 'PROCUREMENT BULLETIN: Ref PB/2026/09\nOur college administration is exploring outsourced cloud data hosting and automated backup archiving services to safeguard student academic records.',
    formalPrompt: 'Write a formal inquiry email to the Head of Enterprise Sales (Ms. Huma Abbasi). Inquire about her company’s cloud data management and cybersecurity services, requesting details on server redundancy, data encryption standards, and institutional pricing tiers. (Write 120–150 words)',
    sampleAnswer: 'Dear Ms. Abbasi,\n\nI am writing on behalf of Horizon Educational Foundation to formally inquire about your organization’s enterprise cloud data storage, backup automation, and cybersecurity solutions.\n\nOur institution currently oversees academic records, examination databases, and enrollment portals across five regional campuses. We are evaluating external cloud providers to upgrade our digital disaster recovery infrastructure. Specifically, we would appreciate detailed information regarding your server redundancy protocols, data encryption benchmarks both in transit and at rest, and uptime service level agreements.\n\nFurthermore, could you please provide your standard commercial schedule for educational institutions, along with information regarding onboarding migration timelines and technical support coverage? We would welcome the opportunity to review a technical brochure and arrange an initial technical briefing with your systems engineers.\n\nThank you for your time, and I look forward to your comprehensive response.\n\nYours sincerely,\nDirector of Information Technology',
    keyPoints: [
      'State specific institutional context and inquiry scope',
      'Ask targeted technical questions (redundancy, encryption, uptime SLAs)',
      'Request pricing schedules and onboarding migration timelines',
      'Propose a technical briefing with sales engineers',
      'Crisp, professional corporate register'
    ]
  },
  23: {
    number: 23,
    title: 'Proposal for a New Business Idea',
    entityName: 'Corporate Innovation & New Ventures Board',
    recipientTitle: 'Managing Partner & Head of Venture Incubation',
    recipientName: 'Mr. Bilal Farooqi',
    contextNotice: 'INNOVATION CHALLENGE: Ref INC/2026/04\nThe corporate incubation board invites employees and associates to submit formal business proposals for innovative digital customer service platforms.',
    formalPrompt: 'Write a formal email to the Head of Venture Incubation (Mr. Bilal Farooqi). Present a formal proposal for an AI-powered automated customer onboarding mobile platform, outlining the market problem, your proposed solution, and initial revenue models. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Farooqi,\n\nI am writing to formally submit an executive proposal for an innovative commercial platform, "SwiftOnboard," for evaluation under the corporate venture incubation program.\n\nPresently, traditional commercial client onboarding across our service sector requires extensive physical documentation and takes an average of four business days, causing an estimated twenty percent applicant drop-off rate. "SwiftOnboard" is a proprietary mobile workflow platform that integrates optical character recognition and instant identity validation, reducing end-to-end customer onboarding to under five minutes while guaranteeing strict regulatory compliance.\n\nOur market analysis reveals immense commercial demand among retail institutions, with projected recurring subscription revenues exceeding thirty million rupees within two operational years. The enclosed executive pitch deck provides comprehensive customer journey maps, system architecture diagrams, and financial feasibility models. I would welcome the privilege of delivering an executive presentation to your review committee.\n\nThank you for your strategic vision and consideration.\n\nYours sincerely,\nProduct Innovation Associate',
    keyPoints: [
      'Formally submit business proposal with project title',
      'Articulate customer friction/market problem clearly',
      'Describe technological solution and measurable efficiency gains',
      'Highlight commercial feasibility and revenue projection',
      'Request an executive pitch presentation'
    ]
  },
  24: {
    number: 24,
    title: 'Request for Employee Training',
    entityName: 'Corporate Workforce & Talent Development',
    recipientTitle: 'General Manager of Human Resources',
    recipientName: 'Mr. Waqas Mehmood',
    contextNotice: 'HUMAN RESOURCES CIRCULAR: Ref HR/2026/33\nSupervisors may nominate team staff members for specialized corporate training courses to meet newly implemented statutory workplace safety and compliance standards.',
    formalPrompt: 'Write a formal email to the General Manager of Human Resources (Mr. Waqas Mehmood). Formally request specialized workplace safety and environmental emergency training for your department staff, highlighting regulatory necessity and operational benefits. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Mehmood,\n\nI am writing to formally request the organization of a comprehensive Workplace Safety and Emergency Incident Management training program for the twenty-five staff members in our facility operations unit.\n\nFollowing recent revisions in national industrial workplace safety regulations, all commercial operating facilities are required to maintain certified emergency first-responders and standardized chemical handling procedures. Currently, twelve of our newly appointed operational staff lack formal emergency evacuation and fire-suppression certifications. Conducting an accredited two-day on-site training workshop will ensure total statutory compliance while safeguarding staff welfare and minimizing workplace hazards.\n\nWe have coordinated with the National Safety Institute, who can conduct this training next month with minimal disruption to scheduled facility shifts. A detailed training outline, along with participant rosters and budget estimates, is attached for your review and approval.\n\nThank you for your steadfast commitment to employee health and safety.\n\nYours sincerely,\nFacility Operations Supervisor',
    keyPoints: [
      'Formally identify training need and cohort size',
      'Cite revised regulatory mandates and safety necessity',
      'Emphasize risk reduction and staff wellbeing',
      'Reference attached training outline and budget',
      'Professional, authoritative workplace tone'
    ]
  },
  25: {
    number: 25,
    title: 'Invitation to a Business Partner',
    entityName: 'Commercial Operations & Strategic Joint Ventures',
    recipientTitle: 'Managing Director & Strategic Partner',
    recipientName: 'Mr. Sikandar Raza',
    contextNotice: 'ANNIVERSARY SUMMIT: Ref AS/2026/02\nTo celebrate a decade of successful commercial partnership, our board is hosting an Executive Partnership Gala and Strategy Summit.',
    formalPrompt: 'Write a formal email to Managing Director (Mr. Sikandar Raza). Cordially invite him and his executive directors as honored guests to your 10th Anniversary Commercial Gala, celebrating your successful partnership and discussing future market expansion. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Raza,\n\nOn behalf of the Board of Directors of Apex Solutions, it gives me immense pleasure to cordially invite you and your executive leadership team to our Tenth Anniversary Strategic Partnership Gala, taking place on Saturday, December 5th, at the Royal Palm Golf & Country Club.\n\nOver the past decade, our collaborative joint venture has established benchmark standards in regional supply chain innovation. Your steadfast trust, strategic alignment, and exceptional collaboration have been pivotal to our shared triumphs. This gala evening will not only celebrate our shared milestones but also provide an exclusive forum to unveil our collaborative expansion roadmap for entering international markets over the coming triennium.\n\nWe would be profoundly honored by your presence as our guest of honor. Enclosed please find the gala itinerary and VIP reservation credentials. We eagerly anticipate welcoming you to this memorable celebration.\n\nWith warm regards and highest esteem,\nYours sincerely,\nChief Executive Officer',
    keyPoints: [
      'Formal, gracious invitation to long-standing business partner',
      'Acknowledge past joint achievements and mutual milestones',
      'Highlight forward-looking strategic agenda (international expansion)',
      'Provide event venue, date, and VIP details',
      'Distinguished executive register'
    ]
  },
  26: {
    number: 26,
    title: 'Notification of a Change in Meeting Schedule',
    entityName: 'Executive Secretariat & Governance Board',
    recipientTitle: 'Members of the Executive Steering Committee',
    recipientName: 'Distinguished Committee Members',
    contextNotice: 'SCHEDULE RESCHEDULING DIRECTIVE: Ref ESC/2026/08\nDue to unexpected international travel by the Committee Chairman to attend a ministerial summit, the Quarterly Strategic Review Meeting originally set for Thursday must be rescheduled.',
    formalPrompt: 'Write a formal notification email to the Executive Steering Committee. Announce the rescheduling of the Quarterly Strategic Review meeting, explain the reason for the change, provide the new date and venue, and request agenda confirmations. (Write 120–150 words)',
    sampleAnswer: 'Dear Distinguished Committee Members,\n\nI am writing to formally notify you of an unavoidable schedule modification regarding our upcoming Quarterly Strategic Review Meeting, originally convened for Thursday, October 22nd.\n\nDue to urgent ministerial consultations requiring the Chairman’s presence at an international commerce summit in Dubai this week, the executive committee meeting has been rescheduled to Tuesday, October 27th, from 10:00 AM to 1:00 PM. The session will take place in Executive Boardroom A at our central headquarters, with full teleconferencing facilities enabled for members attending remotely.\n\nThe revised meeting agenda, along with updated quarterly performance dossiers and policy working papers, has been uploaded to the committee secure portal. Kindly confirm your availability for this revised date by reply email to the secretariat by Friday noon.\n\nWe sincerely apologize for any inconvenience this rescheduling may cause to your calendars.\n\nYours sincerely,\nSecretary to the Executive Committee',
    keyPoints: [
      'Clear, immediate notification of meeting rescheduling',
      'Explain valid high-level justification for postponement',
      'Specify revised date, time, venue, and hybrid link access',
      'Instruct members on agenda materials and confirmation deadline',
      'Polite formal apology for disruption'
    ]
  },
  27: {
    number: 27,
    title: 'Request for Quotation',
    entityName: 'Corporate Purchasing & Materials Management',
    recipientTitle: 'Sales & Commercial Contracts Director',
    recipientName: 'Mr. Tahir Mehmood',
    contextNotice: 'PROCUREMENT TENDER NOTICE: Ref RFQ/2026/18\nOur organization is upgrading its nationwide office infrastructure and seeks competitive price quotations for 200 ergonomic executive work desks and mesh chairs.',
    formalPrompt: 'Write a formal Request for Quotation (RFQ) email to the Commercial Sales Director (Mr. Tahir Mehmood). Request a detailed commercial quotation for 200 ergonomic office workstations, detailing specifications, bulk delivery terms, warranty clauses, and payment schedules. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Mehmood,\n\nI am writing on behalf of the Corporate Procurement Division of Apex Technologies to formally request a competitive price quotation for commercial office furniture under Reference RFQ/2026/18.\n\nOur organization is currently refurbishing our regional headquarters and requires two hundred modular ergonomic workstation desks alongside two hundred high-density mesh executive chairs with adjustable lumbar support. Detailed technical dimensions, load-bearing specifications, and material safety standards are enumerated in the attached procurement schedule.\n\nPlease provide your comprehensive quotation itemizing unit rates, volume discount tiers, applicable commercial taxes, freight charges to our central facility, and estimated delivery lead times. Furthermore, please specify your manufacturer warranty coverage and proposed credit payment terms. We request your formal quotation by Monday, November 16th.\n\nThank you for your prompt attention to this commercial tender.\n\nYours sincerely,\nSenior Procurement Officer',
    keyPoints: [
      'Formal RFQ statement citing tender reference number',
      'Specify quantities and clear product descriptions (200 desks, 200 chairs)',
      'Itemize quotation requirements (discounts, freight, taxes, delivery times)',
      'Request warranty duration and payment terms',
      'Set unambiguous submission deadline'
    ]
  },
  28: {
    number: 28,
    title: 'Response to a Customer Complaint',
    entityName: 'Client Experience & Corporate Service Assurance',
    recipientTitle: 'Corporate Client & Managing Director',
    recipientName: 'Mr. Owais Siddiqui',
    contextNotice: 'ESCALATED COMPLAINT RECORD: Ref CR/2026/41\nA premier corporate client filed a formal grievance regarding delayed delivery and non-responsive hotline assistance during their nationwide parcel logistics contract.',
    formalPrompt: 'Write a formal response email to the client (Mr. Owais Siddiqui). Acknowledge and apologize for the shipping delay and poor customer support, explain the internal remedial actions taken, and offer a service credit and dedicated account manager. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Siddiqui,\n\nThank you for contacting our executive office. I am writing to personally address your formal grievance (Reference CR/2026/41) regarding the unacceptable delay in your critical consignment delivery and the poor responsiveness of our customer support helpline last week.\n\nOn behalf of our entire leadership team, I offer our sincere apologies for the frustration and commercial inconvenience this disruption caused your operations. A rigorous internal inquiry revealed that an unannounced software upgrade at our northern logistics hub caused tracking server synchronization errors, compounded by inadequate staff escalation during peak hours. We have since rolled back the faulty update and instituted mandatory retraining for our support personnel.\n\nTo demonstrate our unwavering commitment to your partnership, we have credited fifty percent of your recent shipping invoice. In addition, I have personally assigned our Senior Client Relations Manager, Mr. Ali Raza, to oversee your account directly. Thank you for your patience.\n\nYours sincerely,\nDirector of Customer Experience',
    keyPoints: [
      'Empathetic, unreserved apology for specific service failures',
      'Provide transparent explanation without defensive excuses',
      'Detail corrective operational improvements instituted',
      'Offer tangible compensation (invoice credit, dedicated account manager)',
      'Rebuild trust through dignified professional commitment'
    ]
  },
  29: {
    number: 29,
    title: 'Request for Leave',
    entityName: 'Departmental Human Resources & Staff Administration',
    recipientTitle: 'Department Head & Operations Manager',
    recipientName: 'Ms. Shazia Parveen',
    contextNotice: 'ANNUAL LEAVE DIRECTIVE: Ref LV/2026/02\nEmployees requesting consecutive annual leaves exceeding five working days must submit formal applications detailing task delegation and emergency contact provisions.',
    formalPrompt: 'Write a formal leave application email to your Department Head (Ms. Shazia Parveen). Request ten working days of annual leave for family commitments, summarize how your current deliverables will be handled by colleagues, and provide emergency contact info. (Write 120–150 words)',
    sampleAnswer: 'Dear Ms. Parveen,\n\nI am writing to formally request ten working days of annual leave, commencing on Monday, November 10th, with a return to office date of Monday, November 24th, due to personal family commitments.\n\nAhead of my requested absence, I have ensured that all my primary project milestones are thoroughly on track. I have completed the final drafts for the monthly corporate newsletter and scheduled all automated vendor dispatches. Furthermore, my colleague, Mr. Bilal Ahmed, has kindly agreed to oversee routine client inquiries and manage emergency operational tickets during my absence. I have fully briefed him on all active project files and outstanding tasks.\n\nThroughout my leave, I will maintain intermittent access to my email for urgent consultations and can be reached on my mobile phone in the event of an operational emergency. Thank you for your considerate review of my application.\n\nYours sincerely,\nOperations Officer',
    keyPoints: [
      'State exact start and return dates clearly',
      'Explain personal family commitment with appropriate brevity',
      'Detail handover arrangements and responsible colleague (Mr. Bilal Ahmed)',
      'Provide emergency communication availability',
      'Polite formal sign-off'
    ]
  },
  30: {
    number: 30,
    title: 'Thank-You Email After a Business Meeting',
    entityName: 'Corporate Client Solutions & Enterprise Growth',
    recipientTitle: 'Chief Technology Officer & Managing Director',
    recipientName: 'Mr. Danish Alvi',
    contextNotice: 'MEETING MINUTES SUMMARY: Ref MTG/2026/19\nFollowing an exploratory enterprise consultation regarding cloud modernization with Atlas Holdings, account executives must transmit formal thank-you correspondence summarizing key action points.',
    formalPrompt: 'Write a formal thank-you email to Chief Technology Officer (Mr. Danish Alvi). Thank him for the productive business consultation, summarize key discussion points agreed upon, and outline next action steps and deliverables. (Write 120–150 words)',
    sampleAnswer: 'Dear Mr. Alvi,\n\nI would like to express my sincere appreciation for the generous time you and your technical leadership team extended to us during yesterday’s consultation meeting at your corporate headquarters.\n\nOur discussion regarding Atlas Holdings’ cloud infrastructure modernization was exceptionally productive. We gained deep clarity regarding your key priorities, particularly your focus on automated disaster recovery and zero-trust data encryption across your regional retail hubs. As agreed during the meeting, our systems architecture team is currently compiling a tailored proof-of-concept proposal that illustrates how our modular cloud migration framework can satisfy your security mandates within your targeted timeline.\n\nWe will deliver the comprehensive technical proposal alongside initial licensing projections by Friday, October 30th. Please let us know if any additional technical parameters should be incorporated. We look forward to advancing our strategic partnership.\n\nThank you once again for a thoroughly constructive session.\n\nYours sincerely,\nSenior Enterprise Solutions Manager',
    keyPoints: [
      'Gracious, formal gratitude for the meeting and host\'s time',
      'Reiterate core takeaways and client priorities agreed upon',
      'Set clear commitments and deadlines for next deliverables',
      'Reaffirm enthusiasm for future commercial cooperation',
      'Exemplary executive tone'
    ]
  }
};

/**
 * INFORMAL EMAIL TOPICS (Numbers 31 to 50 from PDF: Topics for Formal and Informal Emails - CA ECS Test)
 * Strictly non-accounting, non-auditing topics.
 */
export const PDF_INFORMAL_EMAIL_TOPICS: Record<number, {
  number: number;
  title: string;
  friendName: string;
  scenarioDescription: string;
  informalPrompt: string;
  sampleAnswer: string;
  keyPoints: string[];
}> = {
  31: {
    number: 31,
    title: 'Inviting a Friend to a Birthday Party',
    friendName: 'Hamza',
    scenarioDescription: 'You are organizing a birthday gathering this coming weekend at a favorite cafe.',
    informalPrompt: 'Write an email to your friend (Hamza). Invite him to your 21st birthday party this Saturday evening, tell him who else is coming, and ask him to let you know by tomorrow. (Write 40–60 words)',
    sampleAnswer: 'Hi Hamza,\n\nI hope you’re doing great! My 21st birthday is this Saturday, and I’m hosting a dinner at Cafe Bistro around 7:30 PM. Ali, Sara, and Zain are already coming, and we’re planning games and music afterward. It won’t be the same without you, so let me know by tomorrow if you can make it!\n\nCheers,\nYour Friend',
    keyPoints: ['Friendly greeting and invitation', 'Specify time and place', 'Mention mutual friends', 'Ask for quick RSVP']
  },
  32: {
    number: 32,
    title: 'Congratulating a Friend on Success',
    friendName: 'Sara',
    scenarioDescription: 'Your friend just won first prize in the national university software hackathon.',
    informalPrompt: 'Write an email to your friend (Sara). Congratulate her warmly on winning first place in the national coding competition, mention how hard she worked, and suggest celebrating over lunch. (Write 40–60 words)',
    sampleAnswer: 'Dear Sara,\n\nI just heard the fantastic news about your first-place win at the National Hackathon! Huge congratulations! You’ve put in so many late nights perfecting that code, and you totally deserve this victory. We definitely need to celebrate properly. Are you free for lunch this weekend? My treat!\n\nWarmly,\nYour Friend',
    keyPoints: ['Enthusiastic congratulations', 'Acknowledge hard work', 'Propose celebratory meetup']
  },
  33: {
    number: 33,
    title: 'Thanking a Friend for Help',
    friendName: 'Bilal',
    scenarioDescription: 'Your friend helped you fix your computer and recover lost project files before a critical deadline.',
    informalPrompt: 'Write an email to your friend (Bilal). Thank him sincerely for helping you recover your corrupted project files last night, express your relief, and invite him over for dinner. (Write 40–60 words)',
    sampleAnswer: 'Hi Bilal,\n\nI honestly cannot thank you enough for rescuing my term project last night! When my hard drive crashed, I was totally panicking. Thanks to your technical wizardry, I recovered all my files and submitted on time. You’re a real lifesaver! Let me cook you dinner this Friday to say thanks.\n\nBest,\nYour Friend',
    keyPoints: ['Heartfelt thanks for specific assistance', 'Describe personal relief', 'Offer reciprocal hospitality']
  },
  34: {
    number: 34,
    title: 'Apologizing to a Friend',
    friendName: 'Zainab',
    scenarioDescription: 'You accidentally missed your friend’s theater performance because of unexpected campus transport delays.',
    informalPrompt: 'Write an email to your friend (Zainab). Apologize sincerely for missing her college drama play, explain the transport trouble that trapped you, and ask to meet for coffee. (Write 40–60 words)',
    sampleAnswer: 'Dear Zainab,\n\nI am so terribly sorry for missing your drama play yesterday! The campus shuttle broke down on the ring road, and I was stranded without any taxi for nearly two hours. I’m heartbroken that I couldn’t see you perform. Can I take you out for coffee tomorrow so you can tell me all about it?\n\nLove,\nYour Friend',
    keyPoints: ['Sincere informal apology', 'Factual explanation of delay', 'Propose casual meetup to make amends']
  },
  35: {
    number: 35,
    title: 'Inviting a Friend to Spend Holidays',
    friendName: 'Daniyal',
    scenarioDescription: 'Your family has booked a mountain cabin for the upcoming winter break and you have a spare guest room.',
    informalPrompt: 'Write an email to your friend (Daniyal). Invite him to join you and your family at your mountain cottage in Murree for three days of hiking and bonfires next week. (Write 40–60 words)',
    sampleAnswer: 'Hey Daniyal,\n\nWhat are your plans for the upcoming semester break? My family booked a cozy wooden cottage in Murree for five days, and we have a spare room! We’re planning lots of mountain hiking, scenic photography, and nightly bonfires. You really must come along. Let me know if you can join us!\n\nCheers,\nYour Friend',
    keyPoints: ['Casual invitation to holiday trip', 'Highlight exciting activities (hiking, bonfires)', 'Encourage positive reply']
  },
  36: {
    number: 36,
    title: 'Advising a Friend About Career Choices',
    friendName: 'Hassan',
    scenarioDescription: 'Your friend is confused between taking a software engineering internship or joining a business consultancy.',
    informalPrompt: 'Write an email to your friend (Hassan). Give him friendly advice on choosing between two summer internship offers, suggest weighing long-term skills over starting stipends, and offer to chat. (Write 40–60 words)',
    sampleAnswer: 'Hi Hassan,\n\nHaving two great internship offers is a wonderful problem to have! If I were you, I’d prioritize the software engineering role at the startup. You’ll get hands-on coding experience and real responsibility, which matters far more for your future portfolio than a slightly higher stipend. Let’s talk through the details tonight!\n\nBest,\nYour Friend',
    keyPoints: ['Encouraging opening', 'Clear, reasoned career advice', 'Offer phone call or chat']
  },
  37: {
    number: 37,
    title: 'Sharing Your Exam Results',
    friendName: 'Usman',
    scenarioDescription: 'The semester examination results have just been announced and you scored an \'A\' grade.',
    informalPrompt: 'Write an email to your friend (Usman). Share your exciting semester examination results, ask how his grades turned out, and suggest hanging out this weekend. (Write 40–60 words)',
    sampleAnswer: 'Hey Usman,\n\nGuess what? The semester exam portal just went live, and I somehow managed an \'A\' in both Data Structures and Linear Algebra! I am so relieved after all those sleepless study nights. How did your results go? I hope you smashed your papers too. Let’s grab burgers this weekend and catch up!\n\nCheers,\nYour Friend',
    keyPoints: ['Excited tone sharing exam success', 'Ask about friend’s results empathetically', 'Suggest weekend meetup']
  },
  38: {
    number: 38,
    title: 'Describing Your First Day at College',
    friendName: 'Kashif',
    scenarioDescription: 'You just completed your orientation and first day of lectures at your new university.',
    informalPrompt: 'Write an email to your school friend (Kashif). Describe your first day at the university campus, mention your impressions of the professors and campus library, and ask about his week. (Write 40–60 words)',
    sampleAnswer: 'Hi Kashif,\n\nMy first day at university was totally overwhelming but so exciting! The campus is huge—I got lost twice trying to find the lecture hall. The computer science professors seem brilliant, and the library has three whole floors of study pods. How is your new term going? Miss our old school routines!\n\nWarmly,\nYour Friend',
    keyPoints: ['Vivid description of new campus', 'Mention faculty and facilities', 'Inquire about friend’s week']
  },
  39: {
    number: 39,
    title: 'Sharing Your Hostel Experience',
    friendName: 'Fahad',
    scenarioDescription: 'You recently moved into the campus student dormitory and are adjusting to hostel life.',
    informalPrompt: 'Write an email to your friend (Fahad). Tell him about living in the university hostel, describe your funny roommate, and invite him to visit you next month. (Write 40–60 words)',
    sampleAnswer: 'Hey Fahad,\n\nHostel life is definitely an adventure! My roommate, Tariq, plays acoustic guitar at 2 AM, but he makes amazing midnight noodles, so we get along great. Sharing a laundry room is crazy, but the freedom is awesome. You’ve got to come down and visit me on campus next month!\n\nBest,\nYour Friend',
    keyPoints: ['Humorous, lively tone', 'Describe hostel living and roommate', 'Invite friend to visit']
  },
  40: {
    number: 40,
    title: 'Inviting a Friend to a Family Function',
    friendName: 'Ahmed',
    scenarioDescription: 'Your older brother is getting married next month and your family is hosting a celebration dinner.',
    informalPrompt: 'Write an email to your close friend (Ahmed). Invite him to your elder brother’s wedding reception next month, mention that your family is eager to see him, and ask him to save the date. (Write 40–60 words)',
    sampleAnswer: 'Dear Ahmed,\n\nMy older brother, Farooq, is finally getting married next month! The main wedding reception is on Sunday, November 15th, and my parents specifically told me to make sure you attend. We’d love to have you at our family table. Please save the date in your calendar and let me know soon!\n\nWarm regards,\nYour Friend',
    keyPoints: ['Warm personal invitation', 'Mention event details (date, occasion)', 'Emphasize family connection']
  },
  41: {
    number: 41,
    title: 'Congratulating a Friend on a New Job',
    friendName: 'Maria',
    scenarioDescription: 'Your friend just accepted an exciting job offer as a Junior Systems Architect at a top firm.',
    informalPrompt: 'Write an email to your friend (Maria). Congratulate her warmly on landing her dream job at the tech firm, express your pride in her, and ask when she starts. (Write 40–60 words)',
    sampleAnswer: 'Hi Maria,\n\nI just saw your update about accepting the Systems Architect job—congratulations! I am so unbelievably proud of you! Landing a role at such a prestigious company straight out of college proves just how talented you are. When is your official start date? We must celebrate this milestone together soon!\n\nLove,\nYour Friend',
    keyPoints: ['Warm, enthusiastic congratulations', 'Praise friend’s talent and accomplishment', 'Ask for start date']
  },
  42: {
    number: 42,
    title: 'Advising a Friend on Exam Preparation',
    friendName: 'Saad',
    scenarioDescription: 'Your friend feels anxious and unprepared for the upcoming midterm examinations.',
    informalPrompt: 'Write an email to your friend (Saad). Offer supportive advice on preparing for the upcoming exams, suggest breaking revision into Pomodoro intervals, and offer to share your summary notes. (Write 40–60 words)',
    sampleAnswer: 'Hey Saad,\n\nDon’t stress about the midterms! Feeling overwhelmed is completely normal before exam week. Try breaking your syllabus into short 25-minute Pomodoro study blocks with five-minute breaks—it really helps concentration. Also, I’ve compiled comprehensive revision notes for chapters three and four that I’d love to share with you. Hang in there!\n\nCheers,\nYour Friend',
    keyPoints: ['Empathetic, encouraging tone', 'Practical study tips (Pomodoro intervals)', 'Offer to share revision notes']
  },
  43: {
    number: 43,
    title: 'Sharing Your Experience of a College Event',
    friendName: 'Nida',
    scenarioDescription: 'You attended the annual college cultural evening featuring musical performances and food stalls.',
    informalPrompt: 'Write an email to your friend (Nida). Tell her about your fun experience at yesterday’s college cultural festival, mention the acoustic music concert, and say you missed her there. (Write 40–60 words)',
    sampleAnswer: 'Hi Nida,\n\nYou really missed out on an incredible cultural festival yesterday! The campus courtyard was lit up with fairy lights and food stalls from all four provinces. The live acoustic band performance at the end had everyone singing along. I really wished you were there with us! Let’s go together next year.\n\nWarmly,\nYour Friend',
    keyPoints: ['Vivid, sensory description of festival', 'Express how much friend was missed', 'Look forward to future events']
  },
  44: {
    number: 44,
    title: 'Thanking a Friend for a Gift',
    friendName: 'Farhan',
    scenarioDescription: 'Your friend sent you a thoughtful noise-cancelling headphone set for your birthday.',
    informalPrompt: 'Write an email to your friend (Farhan). Thank him warmly for the birthday gift of noise-cancelling headphones, explain how useful they are for studying, and express your gratitude. (Write 40–60 words)',
    sampleAnswer: 'Dear Farhan,\n\nThank you so much for the amazing noise-cancelling headphones you sent for my birthday! You know me so well. They are an absolute blessing in the noisy campus library, and I’ve been using them every single day while studying. Your kindness and thoughtfulness truly mean the world to me. See you soon!\n\nBest,\nYour Friend',
    keyPoints: ['Warm thank-you for specific gift', 'Explain practical utility of gift', 'Express genuine gratitude']
  },
  45: {
    number: 45,
    title: 'Inviting a Friend to a Study Session',
    friendName: 'Talha',
    scenarioDescription: 'You want to form a study group before next week’s physics midterm.',
    informalPrompt: 'Write an email to your classmate friend (Talha). Invite him to a group revision session at the central library this Thursday afternoon, mention what topics you will cover, and ask him to join. (Write 40–60 words)',
    sampleAnswer: 'Hey Talha,\n\nA few of us from the physics class are getting together for a focused study group this Thursday at 3:00 PM in the central library second-floor room. We’re planning to solve past exam problems on thermodynamics and electromagnetic fields. Your problem-solving skills would be super helpful! Can you join us?\n\nCheers,\nYour Friend',
    keyPoints: ['Friendly invitation to study group', 'Specify time, venue, and topics', 'Highlight mutual benefits']
  },
  46: {
    number: 46,
    title: 'Sharing Your Experience of an Educational Trip',
    friendName: 'Amina',
    scenarioDescription: 'You just returned from a faculty-guided educational excursion to a national historical heritage park.',
    informalPrompt: 'Write an email to your friend (Amina). Share your exciting experience from the faculty heritage excursion, describe the ancient architectural ruins, and promise to show her your photos. (Write 40–60 words)',
    sampleAnswer: 'Hi Amina,\n\nI just got back from our department’s educational trip to Taxila heritage ruins, and it was breathtaking! Standing among two-thousand-year-old Buddhist monasteries and carved stone pillars made history feel so vivid. Our archaeology professor gave fascinating lectures on ancient trade routes. I took dozens of photos that I can’t wait to show you!\n\nWarmly,\nYour Friend',
    keyPoints: ['Share enthusiastic educational experience', 'Describe historical or visual highlights', 'Offer to share photographs']
  },
  47: {
    number: 47,
    title: 'Advising a Friend on Time Management',
    friendName: 'Junaid',
    scenarioDescription: 'Your friend is struggling to balance coursework, sports practice, and sleep.',
    informalPrompt: 'Write an email to your friend (Junaid). Share friendly, practical advice on managing his time between sports training and semester assignments, recommending a weekly digital planner. (Write 40–60 words)',
    sampleAnswer: 'Hi Junaid,\n\nI completely understand how exhausting it is to juggle football practice with heavy coursework. What saved me this semester was color-coding my schedule on Google Calendar and finishing assignments in the morning before training. Prioritizing seven hours of sleep also keeps your energy high. Give it a try this week!\n\nBest,\nYour Friend',
    keyPoints: ['Empathetic understanding of schedule overload', 'Practical time management tips', 'Encourage consistent sleep/balance']
  },
  48: {
    number: 48,
    title: 'Comforting a Friend After Failure',
    friendName: 'Daniyal',
    scenarioDescription: 'Your friend was rejected from an internship program he had set his heart on.',
    informalPrompt: 'Write an email to your friend (Daniyal). Comfort him after his internship rejection, remind him of his resilience and abilities, and offer to hang out and polish applications together. (Write 40–60 words)',
    sampleAnswer: 'Dear Daniyal,\n\nI was so sorry to hear about the internship outcome, but please don’t be discouraged! Rejections happen to the very best of us, and this single setback does not define your immense talent or potential. Let’s grab coffee tomorrow, review other upcoming job openings, and polish your resume together. Keep your chin up!\n\nWarmly,\nYour Friend',
    keyPoints: ['Compassionate, uplifting tone', 'Normalize rejection and remind friend of strengths', 'Offer concrete support']
  },
  49: {
    number: 49,
    title: 'Sharing Your Future Career Plans',
    friendName: 'Kamran',
    scenarioDescription: 'You recently decided on your post-graduation career path in environmental technology.',
    informalPrompt: 'Write an email to your friend (Kamran). Share your exciting future career decision to pursue sustainable green technology and renewable energy, and ask what path he is leaning towards. (Write 40–60 words)',
    sampleAnswer: 'Hey Kamran,\n\nI’ve finally made up my mind about my post-graduation plans! After completing my degree, I’m planning to pursue a master’s in Renewable Energy Systems and work on solar microgrid technologies. It combines my technical skills with my passion for sustainability. What career direction are you leaning towards? Let’s catch up soon!\n\nCheers,\nYour Friend',
    keyPoints: ['Enthusiastic sharing of personal career goal', 'Explain reasons behind decision', 'Inquire about friend’s ambitions']
  },
  50: {
    number: 50,
    title: 'Telling a Friend About Your New College or Academy',
    friendName: 'Zubair',
    scenarioDescription: 'You recently transferred to a new academic academy with modern facilities.',
    informalPrompt: 'Write an email to your friend (Zubair). Tell him about your experience at your new college academy, describe the modern labs and sports facilities, and invite him to visit. (Write 40–60 words)',
    sampleAnswer: 'Hi Zubair,\n\nI’ve settled in at the new academy, and it is even better than I hoped! The science labs have brand-new digital equipment, the teachers actually encourage debates, and there’s an indoor badminton court that we play on every evening. You’d love the campus atmosphere here. You must drop by and check it out this weekend!\n\nBest,\nYour Friend',
    keyPoints: ['Positive report on new institution', 'Highlight specific facilities (labs, sports)', 'Invite friend to visit campus']
  }
};

/**
 * Storage key for tracking seen email topics from the PDF
 */
const SEEN_PDF_EMAIL_TOPICS_KEY = 'aptis_seen_pdf_email_topics';

/**
 * Retrieve seen topic numbers from localStorage
 */
export function getSeenPdfEmailTopics(): number[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(SEEN_PDF_EMAIL_TOPICS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Record a topic number as seen without repetition
 */
export function markPdfEmailTopicSeen(topicNumber: number): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getSeenPdfEmailTopics();
    const updated = Array.from(new Set([topicNumber, ...current]));
    localStorage.setItem(SEEN_PDF_EMAIL_TOPICS_KEY, JSON.stringify(updated));
  } catch {}
}

/**
 * Reset seen topics
 */
export function resetSeenPdfEmailTopics(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SEEN_PDF_EMAIL_TOPICS_KEY);
  } catch {}
}

/**
 * Natural pairings between Formal Topics (1-30) and Informal Topics (31-50)
 * ensures thematic harmony without ANY accounting or auditing concepts.
 */
export const PDF_TOPIC_PAIRS: { formalNum: number; informalNum: number }[] = [
  { formalNum: 1, informalNum: 43 }, // Request for Sponsorship -> Sharing College Event Experience
  { formalNum: 2, informalNum: 45 }, // Invitation to a Company for Seminar -> Inviting Friend to Study Session
  { formalNum: 3, informalNum: 49 }, // Request for Internship -> Sharing Future Career Plans
  { formalNum: 4, informalNum: 32 }, // Application for Job -> Congratulating Friend on Success
  { formalNum: 5, informalNum: 46 }, // Request for Industrial Visit -> Sharing Experience of Educational Trip
  { formalNum: 6, informalNum: 31 }, // Invitation to Guest Speaker -> Inviting Friend to Birthday Party
  { formalNum: 7, informalNum: 33 }, // Complaint About Poor Service -> Thanking Friend for Help
  { formalNum: 8, informalNum: 36 }, // Request for Business Meeting -> Advising Friend About Career Choices
  { formalNum: 9, informalNum: 35 }, // Proposal for CSR Event -> Inviting Friend to Spend Holidays
  { formalNum: 10, informalNum: 48 }, // Request for Financial Assistance -> Comforting Friend After Failure
  { formalNum: 11, informalNum: 41 }, // Invitation for Career Fair -> Congratulating Friend on New Job
  { formalNum: 12, informalNum: 47 }, // Request for Training Session -> Advising Friend on Time Management
  { formalNum: 13, informalNum: 42 }, // Inquiry About Professional Courses -> Advising Friend on Exam Prep
  { formalNum: 14, informalNum: 34 }, // Complaint About Defective Products -> Apologizing to a Friend
  { formalNum: 15, informalNum: 37 }, // Request for Extension of Deadline -> Sharing Exam Results
  { formalNum: 16, informalNum: 49 }, // Follow-up on Job Application -> Sharing Future Career Plans
  { formalNum: 17, informalNum: 36 }, // Request for Business Collaboration -> Advising Friend on Career Choices
  { formalNum: 18, informalNum: 40 }, // Invitation to Corporate Conference -> Inviting Friend to Family Function
  { formalNum: 19, informalNum: 33 }, // Request for Recommendation -> Thanking Friend for Help
  { formalNum: 20, informalNum: 34 }, // Apology for Delayed Submission -> Apologizing to a Friend
  { formalNum: 21, informalNum: 31 }, // Request Permission for Event -> Inviting Friend to Birthday Party
  { formalNum: 22, informalNum: 50 }, // Inquiry About Company Services -> Telling Friend About New College/Academy
  { formalNum: 23, informalNum: 49 }, // Proposal for New Business Idea -> Sharing Future Career Plans
  { formalNum: 24, informalNum: 47 }, // Request for Employee Training -> Advising Friend on Time Management
  { formalNum: 25, informalNum: 35 }, // Invitation to Business Partner -> Inviting Friend to Spend Holidays
  { formalNum: 26, informalNum: 44 }, // Notification of Change in Meeting Schedule -> Thanking Friend for Gift
  { formalNum: 27, informalNum: 38 }, // Request for Quotation -> Describing First Day at College
  { formalNum: 28, informalNum: 39 }, // Response to Customer Complaint -> Sharing Hostel Experience
  { formalNum: 29, informalNum: 40 }, // Request for Leave -> Inviting Friend to Family Function
  { formalNum: 30, informalNum: 33 }, // Thank-You After Business Meeting -> Thanking Friend for Help
];

/**
 * Creates a complete Aptis Part 4 Email task strictly using topics from the PDF
 */
export function createPart4FromPdfTopics(formalNum: number, informalNum: number): WritingPart4 {
  const formal = PDF_FORMAL_EMAIL_TOPICS[formalNum] || PDF_FORMAL_EMAIL_TOPICS[1];
  const informal = PDF_INFORMAL_EMAIL_TOPICS[informalNum] || PDF_INFORMAL_EMAIL_TOPICS[31];

  return {
    id: `pdf-part4-f${formal.number}-inf${informal.number}`,
    clubName: formal.entityName,
    scenarioTopic: `Topic #${formal.number}: ${formal.title}`,
    communicationPurpose: formal.title,
    recipientTitle: formal.recipientTitle,
    recipientName: formal.recipientName,
    friendName: informal.friendName,
    contextNotice: `${formal.contextNotice}\n\n[Writing Section Tasks based on Official PDF Topics #${formal.number} & #${informal.number}]`,
    taskA: {
      prompt: `[Informal Email Topic #${informal.number}: ${informal.title}]\n${informal.informalPrompt}`,
      minWords: 40,
      maxWords: 60,
      sampleAnswer: informal.sampleAnswer
    },
    taskB: {
      prompt: `[Formal Email Topic #${formal.number}: ${formal.title}]\n${formal.formalPrompt}`,
      minWords: 120,
      maxWords: 150,
      sampleAnswer: formal.sampleAnswer
    }
  };
}

/**
 * Selects a fresh, non-repeating Part 4 email task strictly from the PDF topics
 */
export function selectFreshPdfPart4EmailTask(additionalSeenSet?: Set<string | number>): WritingPart4 {
  const seenFromStorage = new Set<number>(getSeenPdfEmailTopics());
  
  if (additionalSeenSet) {
    additionalSeenSet.forEach(val => {
      if (typeof val === 'number') seenFromStorage.add(val);
      else if (typeof val === 'string') {
        const match = val.match(/Topic #?(\d+)/i) || val.match(/f(\d+)/i);
        if (match) seenFromStorage.add(parseInt(match[1], 10));
      }
    });
  }

  // Filter pairs whose formal topic hasn't been seen recently or globally
  const unseenPairs = PDF_TOPIC_PAIRS.filter(p => {
    if (seenFromStorage.has(p.formalNum)) return false;
    const formal = PDF_FORMAL_EMAIL_TOPICS[p.formalNum];
    if (formal && isGloballySeen('writing-p4', `pdf-formal-${formal.number}`, formal.title)) return false;
    return true;
  });

  if (unseenPairs.length > 0) {
    const selectedPair = unseenPairs[Math.floor(Math.random() * unseenPairs.length)];
    markPdfEmailTopicSeen(selectedPair.formalNum);
    markPdfEmailTopicSeen(selectedPair.informalNum);
    const result = createPart4FromPdfTopics(selectedPair.formalNum, selectedPair.informalNum);
    markGloballySeen('writing-p4', [{ id: result.id, textOrTitle: result.scenarioTopic || '' }]);
    return result;
  }

  // All 30 PDF pairs have been seen!
  // Automatically generate brand-new, unique Part 4 email task matching ICAP ECS syllabus & difficulty
  const seenStrings = new Set<string>();
  if (additionalSeenSet) {
    additionalSeenSet.forEach(v => seenStrings.add(String(v)));
  }
  return generateSyntheticPart4EmailTask(seenStrings);
}

/**
 * Convert PDF topics to WritingScenario objects for the WritingLab component
 * (strictly non-accounting, non-auditing)
 */
export function getAllPdfWritingScenarios(): WritingScenario[] {
  const scenarios: WritingScenario[] = [];

  // Formal scenarios (1-30)
  for (let i = 1; i <= 30; i++) {
    const f = PDF_FORMAL_EMAIL_TOPICS[i];
    if (f) {
      scenarios.push({
        id: `pdf-formal-${f.number}`,
        title: `Formal Email #${f.number}: ${f.title}`,
        role: 'Student / Professional Candidate',
        recipient: `${f.recipientName} (${f.recipientTitle})`,
        scenario: `${f.contextNotice}\n\nTask: ${f.formalPrompt}`,
        requiredWordCount: { min: 120, max: 150 },
        keyPoints: f.keyPoints,
        sampleModelAnswer: f.sampleAnswer
      });
    }
  }

  // Informal scenarios (31-50)
  for (let i = 31; i <= 50; i++) {
    const inf = PDF_INFORMAL_EMAIL_TOPICS[i];
    if (inf) {
      scenarios.push({
        id: `pdf-informal-${inf.number}`,
        title: `Informal Email #${inf.number}: ${inf.title}`,
        role: 'Friend / Colleague',
        recipient: `${inf.friendName} (Close Friend)`,
        scenario: `${inf.scenarioDescription}\n\nTask: ${inf.informalPrompt}`,
        requiredWordCount: { min: 40, max: 60 },
        keyPoints: inf.keyPoints,
        sampleModelAnswer: inf.sampleAnswer
      });
    }
  }

  return scenarios;
}

/**
 * Pick a non-repeating scenario for WritingLab
 */
export function getRandomPdfWritingScenario(seenIds?: Set<string>): WritingScenario {
  const all = getAllPdfWritingScenarios();
  const unseen = seenIds ? all.filter(s => !seenIds.has(s.id)) : all;
  const candidates = unseen.length > 0 ? unseen : all;
  return candidates[Math.floor(Math.random() * candidates.length)];
}
