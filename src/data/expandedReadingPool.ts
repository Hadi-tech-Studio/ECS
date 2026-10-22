import { 
  ReadingSection1, 
  ReadingSection2, 
  ReadingSection3, 
  ReadingSection4 
} from '../types';
import { APTIS_TEST_SET_1, APTIS_TEST_SET_2 } from './aptisMockData';
import { PDF_READING_SECTION_1_POOL } from './pdfReadingSection1Pool';
import { PDF_READING_SECTION_4_POOL, ensureSixToSevenParagraphs } from './pdfReadingSection4Pool';

// ============================================================================
// READING SECTION 1: Sentence Comprehension / Sentence Completion (5 Gaps)
// Sourced 100% strictly from the official APTIS Sentence Completion Practice PDF (50 Questions)
// ============================================================================
export const EXPANDED_READING_SECTION_1: ReadingSection1[] = PDF_READING_SECTION_1_POOL;

// ============================================================================
// READING SECTION 2: Text Cohesion / Scrambled Narrative (2 Tasks, 6 Sentences Each)
// ============================================================================
export const EXPANDED_READING_SECTION_2: ReadingSection2[] = [
  APTIS_TEST_SET_1.reading.section2,
  APTIS_TEST_SET_2.reading.section2,
  {
    id: 'read-sec2-pair-01',
    title: 'Reading Section 2: Text Cohesion',
    topic: 'History of Accounting & Automated Audit Technology',
    correctOrder: [0, 3, 1, 4, 2, 5],
    sentences: [
      'During the early Italian Renaissance, merchants in Venice struggled to track complex maritime trade partnerships across the Mediterranean.',
      'Recognizing this growing commercial necessity, the Franciscan friar and mathematician Luca Pacioli compiled these scattered merchant customs.',
      'Consequently, this revolutionary methodology established the enduring principle that every debit transaction must have an equal credit offset.',
      'Without a standardized recording system, financial disputes and merchant bankruptcies were frequent occurrences.',
      'In 1494, he published his seminal encyclopedia "Summa de Arithmetica", dedicating a landmark chapter specifically to double-entry ledger bookkeeping.',
      'Today, Pacioli is universally celebrated as the father of modern accounting, having created the foundational language of global business.'
    ],
    explanation: 'Chronological progression: Begins with Venetian merchants (0), lack of standardized system (3), Pacioli compiling customs (1), 1494 publication (4), debit-credit offset (2), and legacy as father of accounting (5).',
    urduExplanation: 'وینس کے تاجروں کے مسائل (0)، بغیر نظام کے دیوالیہ پن (3)، پیکولی کی کاوش (1)، 1494ء کی کتاب (4)، ڈیبٹ کریڈٹ کا اصول (2) اور بابائے اکاؤنٹنگ کا اعزاز (5)۔',
    tasks: [
      {
        id: 'read-sec2-p03',
        taskNumber: 1,
        title: 'Task 1: The Rise of Luca Pacioli and Double-Entry Bookkeeping',
        topic: 'History of Accounting & Modern Commerce',
        correctOrder: [0, 3, 1, 4, 2, 5],
        sentences: [
          'During the early Italian Renaissance, merchants in Venice struggled to track complex maritime trade partnerships across the Mediterranean.',
          'Recognizing this growing commercial necessity, the Franciscan friar and mathematician Luca Pacioli compiled these scattered merchant customs.',
          'Consequently, this revolutionary methodology established the enduring principle that every debit transaction must have an equal credit offset.',
          'Without a standardized recording system, financial disputes and merchant bankruptcies were frequent occurrences.',
          'In 1494, he published his seminal encyclopedia "Summa de Arithmetica", dedicating a landmark chapter specifically to double-entry ledger bookkeeping.',
          'Today, Pacioli is universally celebrated as the father of modern accounting, having created the foundational language of global business.'
        ],
        explanation: 'Chronological progression: Begins with Venetian merchants (0), lack of standardized system (3), Pacioli compiling customs (1), 1494 publication (4), debit-credit offset (2), and legacy as father of accounting (5).',
        urduExplanation: 'وینس کے تاجروں کے مسائل (0)، بغیر نظام کے دیوالیہ پن (3)، پیکولی کی کاوش (1)، 1494ء کی کتاب (4)، ڈیبٹ کریڈٹ کا اصول (2) اور بابائے اکاؤنٹنگ کا اعزاز (5)۔'
      },
      {
        id: 'read-sec2-p04',
        taskNumber: 2,
        title: 'Task 2: Automated Continuous Auditing in Modern Professional Firms',
        topic: 'Audit Technology & Automation',
        correctOrder: [0, 3, 1, 4, 2, 5],
        sentences: [
          'Traditionally, statutory audits relied heavily on retroactive sampling of historical financial transactions.',
          'As an immediate result, anomaly detection algorithms now flag irregular journal entries in real time.',
          'This technological shift has fundamentally transformed the speed and assurance of statutory financial reporting.',
          'However, the widespread adoption of cloud enterprise resource planning systems initiated an automated continuous audit model.',
          'These instantaneous alerts allow compliance teams to investigate potential control overrides before period-end close.',
          'Consequently, chartered accountants can deliver far more strategic, proactive advisory value to corporate stakeholders.'
        ],
        explanation: 'Logical flow: Traditional retroactive audits (0), cloud ERP turning point (3), real-time anomaly algorithms (1), alerts enable prompt investigation (4), technological transformation (2), and strategic advisory role (5).',
        urduExplanation: 'روایتی آڈٹ سے کلاؤڈ سسٹمز (0, 3)، پھر رئیل ٹائم الگورتھم (1)، الرٹس کی جانچ (4)، سائنسی تبدیلی (2) اور اسٹریٹجک کردار (5)۔'
      }
    ]
  },
  {
    id: 'read-sec2-pair-02',
    title: 'Reading Section 2: Text Cohesion',
    topic: 'Corporate Ethics & Monetary Evolution',
    correctOrder: [0, 2, 4, 1, 3, 5],
    sentences: [
      'At the turn of the millennium, energy conglomerate Enron was widely heralded as one of the most innovative corporations in the world.',
      'Public outrage intensified when it was discovered that external auditors had actively colluded in concealing the impending insolvency.',
      'Behind this glamorous facade, senior executives had systematically concealed billions of dollars in toxic liabilities using special purpose entities.',
      'In direct legislative response, the United States Congress enacted the landmark Sarbanes-Oxley Act of 2002 to overhaul corporate responsibility.',
      'When independent whistleblowers eventually alerted financial journalists, the artificial market valuation unraveled in catastrophic bankruptcy.',
      'Consequently, international capital markets instituted rigorous internal control mandates and independent audit oversight committees.'
    ],
    explanation: 'Narrative structure: Enron initial high reputation (0), hidden toxic liabilities (2), whistleblowers alert journalists (4), auditor collusion revealed (1), Sarbanes-Oxley Act passed (3), and permanent global internal control standards (5).',
    urduExplanation: 'اینرون کی کامیابی (0)، پوشیدہ نقصانات (2)، دیوالیہ پن (4)، آڈیٹرز کی ملی بھگت (1)، ساربنز ایکٹ (3) اور اصلاحات (5)۔',
    tasks: [
      {
        id: 'read-sec2-p05',
        taskNumber: 1,
        title: 'Task 1: The Enron Collapse and the Genesis of Modern Corporate Governance',
        topic: 'Corporate Ethics & Statutory Regulation',
        correctOrder: [0, 2, 4, 1, 3, 5],
        sentences: [
          'At the turn of the millennium, energy conglomerate Enron was widely heralded as one of the most innovative corporations in the world.',
          'Public outrage intensified when it was discovered that external auditors had actively colluded in concealing the impending insolvency.',
          'Behind this glamorous facade, senior executives had systematically concealed billions of dollars in toxic liabilities using special purpose entities.',
          'In direct legislative response, the United States Congress enacted the landmark Sarbanes-Oxley Act of 2002 to overhaul corporate responsibility.',
          'When independent whistleblowers eventually alerted financial journalists, the artificial market valuation unraveled in catastrophic bankruptcy.',
          'Consequently, international capital markets instituted rigorous internal control mandates and independent audit oversight committees.'
        ],
        explanation: 'Narrative structure: Enron initial high reputation (0), hidden toxic liabilities (2), whistleblowers alert journalists (4), auditor collusion revealed (1), Sarbanes-Oxley Act passed (3), and permanent global internal control standards (5).',
        urduExplanation: 'اینرون کی کامیابی (0)، پوشیدہ نقصانات (2)، دیوالیہ پن (4)، آڈیٹرز کی ملی بھگت (1)، ساربنز ایکٹ (3) اور اصلاحات (5)۔'
      },
      {
        id: 'read-sec2-p06',
        taskNumber: 2,
        title: 'Task 2: The Evolution of Central Banking and Paper Currency',
        topic: 'Economics & Monetary History',
        correctOrder: [0, 3, 1, 4, 2, 5],
        sentences: [
          'For centuries, commercial transactions across Europe were settled strictly through heavy gold and silver bullion coins.',
          'To alleviate the logistical hazard of transporting heavy chests of metal, goldsmiths began issuing paper deposit receipts.',
          'Recognizing the immense economic power of this fiduciary credit, national governments moved to formalize these private paper promises.',
          'However, carrying large physical quantities of precious metal over long distances exposed merchants to highway robbery and immense shipping expenses.',
          'Soon, merchants began circulating these trusted paper notes directly among themselves as a convenient medium of exchange.',
          'In 1694, the Bank of England was chartered, marking the birth of modern institutional central banking and sovereign paper currency.'
        ],
        explanation: 'Chronological development: Settlement via bullion (0), vulnerability and burden of metals (3), goldsmith deposit receipts (1), circulation of paper notes (4), governmental formalization (2), and Bank of England chartered in 1694 (5).',
        urduExplanation: 'دھاتی سکے (0)، ڈاکوؤں کے خطرات (3)، صرافوں کی رسیدیں (1)، رسیدوں کا تبادلہ (4)، حکومتی سرپرستی (2) اور 1694ء میں بینک آف انگلینڈ (5)۔'
      }
    ]
  }
];

// ============================================================================
// READING SECTION 3: Short Text Matching / 4 Perspectives on a Topic (7 Statements)
// ============================================================================
export const EXPANDED_READING_SECTION_3: ReadingSection3[] = [
  APTIS_TEST_SET_1.reading.section3,
  APTIS_TEST_SET_2.reading.section3,
  {
    id: 'read-sec3-p03',
    title: 'The Future of Remote Working in Professional Accounting & Audit',
    topic: 'Workplace Models & Professional Training',
    people: [
      {
        id: 'A',
        name: 'Kamran (Audit Partner)',
        description: 'Kamran believes physical office attendance is indispensable for trainee apprenticeships and rapid team problem-solving during busy audit season.'
      },
      {
        id: 'B',
        name: 'Sara (Senior Tax Consultant)',
        description: 'Sara emphasizes that eliminating long commutes has dramatically improved deep concentration and analytical report drafting for intricate corporate tax files.'
      },
      {
        id: 'C',
        name: 'Bilal (Audit Trainee)',
        description: 'Bilal appreciates the flexibility of remote working but worries about feeling isolated and missing out on spontaneous mentorship from senior managers.'
      },
      {
        id: 'D',
        name: 'Dr. Tariq (Organizational Psychologist)',
        description: 'Dr. Tariq advocates for structured hybrid schedules, warning that full remote work degrades long-term institutional loyalty and company culture.'
      }
    ],
    questions: [
      {
        id: 'q1',
        statement: 'Mentions that uninterrupted quiet time at home facilitates thorough review of complex financial data.',
        correctPersonId: 'B',
        explanation: 'Sara highlights how working without commute and distraction helps her concentrate deeply on intricate corporate tax files.',
        urduExplanation: 'سارہ نے واضح کیا کہ گھر پر پرسکون ماحول میں پیچیدہ ٹیکس امور پر گہری توجہ دی جا سکتی ہے۔'
      },
      {
        id: 'q2',
        statement: 'Believes in-person collaboration is essential for junior staff to master practical audit procedures quickly.',
        correctPersonId: 'A',
        explanation: 'Kamran stresses that physical office presence is indispensable for trainee apprenticeship and fast team problem-solving.',
        urduExplanation: 'کامران کا مؤقف ہے کہ جونیئر ٹرینیز کی عملی تربیت اور مسائل کے فوری حل کے لیے دفتر میں موجود ہونا ناگزیر ہے۔'
      },
      {
        id: 'q3',
        statement: 'Expresses concern about a lack of informal guidance and professional bonding with colleagues.',
        correctPersonId: 'C',
        explanation: 'Bilal notes feeling isolated and missing out on spontaneous, casual mentorship from senior managers.',
        urduExplanation: 'بلال کو تنہائی کا احساس اور سینئرز سے قدرتی رہنمائی نہ ملنے پر تشویش ہے۔'
      },
      {
        id: 'q4',
        statement: 'Warns that an entirely home-based workforce can undermine corporate culture and staff retention.',
        correctPersonId: 'D',
        explanation: 'Dr. Tariq points out that completely remote work weakens long-term organizational loyalty and firm culture.',
        urduExplanation: 'ڈاکٹر طارق نے خبردار کیا کہ مکمل طور پر گھر سے کام کرنے سے ادارہ جاتی وفاداری کمزور ہوتی ہے۔'
      },
      {
        id: 'q5',
        statement: 'Recommends a balanced model combining designated office days with home working.',
        correctPersonId: 'D',
        explanation: 'Dr. Tariq specifically champions a structured hybrid framework.',
        urduExplanation: 'ڈاکٹر طارق ہائبرڈ ماڈل (دفتر اور گھر کا امتزاج) کی پرزور وکالت کرتے ہیں۔'
      },
      {
        id: 'q6',
        statement: 'Finds daily travel to client locations both exhausting and inefficient.',
        correctPersonId: 'B',
        explanation: 'Sara emphasizes the major relief gained from eliminating long and draining commutes.',
        urduExplanation: 'سارہ نے طویل اور تھکا دینے والے سفر سے نجات کو بہترین قرار دیا ہے۔'
      },
      {
        id: 'q7',
        statement: 'Values schedule autonomy while simultaneously recognizing career development risks.',
        correctPersonId: 'C',
        explanation: 'Bilal appreciates schedule flexibility while acknowledging worries about career mentorship.',
        urduExplanation: 'بلال لچکدار اوقات کو پسند کرنے کے ساتھ ساتھ کیریئر میں رہنمائی کی کمی پر بھی متفکر ہے۔'
      }
    ]
  },
  {
    id: 'read-sec3-p04',
    title: 'Artificial Intelligence and the Future of Chartered Accountancy',
    topic: 'Technological Disruption & Accounting Skills',
    people: [
      {
        id: 'A',
        name: 'Farhan (Chief Technology Officer)',
        description: 'Farhan contends that machine learning will eliminate routine voucher entry, compelling future accountants to become data analysts and strategic advisors.'
      },
      {
        id: 'B',
        name: 'Zainab (Forensic Auditor)',
        description: 'Zainab argues that while algorithms excel at detecting statistical anomalies, human skepticism and legal intuition remain irreplaceable during fraud trials.'
      },
      {
        id: 'C',
        name: 'Hamza (Chartered Accountant Trainee)',
        description: 'Hamza feels anxious about AI taking over entry-level accounting roles, wondering how students will gain foundational experience.'
      },
      {
        id: 'D',
        name: 'Professor Amina (Accounting Academic)',
        description: 'Professor Amina asserts that university and professional curricula must urgently integrate Python, data visualization, and ethics alongside debit and credit rules.'
      }
    ],
    questions: [
      {
        id: 'q1',
        statement: 'Argues that professional judgment and human intuition cannot be replicated by automated tools in court proceedings.',
        correctPersonId: 'B',
        explanation: 'Zainab emphasizes that human skepticism and investigative intuition are irreplaceable during courtroom fraud cases.',
        urduExplanation: 'زینب کا موقف ہے کہ عدالتی کارروائی اور فراڈ کی تفتیش میں انسانی شکوک و بصیرت کا نعم البدل کوئی الگورتھم نہیں ہے۔'
      },
      {
        id: 'q2',
        statement: 'Predicts that repetitive bookkeeping tasks will be completely automated, shifting focus to advisory roles.',
        correctPersonId: 'A',
        explanation: 'Farhan contends machine learning will remove routine voucher work, transforming accountants into strategic advisors.',
        urduExplanation: 'فرحان کے مطابق معمول کی بک کیپنگ خودکار ہو جائے گی اور اکاؤنٹنٹس مشاورتی کردار اپنائیں گے۔'
      },
      {
        id: 'q3',
        statement: 'Expresses apprehension regarding the availability of introductory positions for young trainees.',
        correctPersonId: 'C',
        explanation: 'Hamza worries about the disappearance of entry-level jobs where trainees historically built foundational experience.',
        urduExplanation: 'حمزہ کو جونیئر لیول کی ملازمتوں کے خاتمے اور بنیادی تجربہ نہ ملنے پر تشویش ہے۔'
      },
      {
        id: 'q4',
        statement: 'Advocates for a comprehensive reform of educational accounting syllabi to include coding and data analytics.',
        correctPersonId: 'D',
        explanation: 'Professor Amina insists that accounting education must immediately adopt data science and coding tools.',
        urduExplanation: 'پروفیسر آمنہ نے نصاب میں پائتھون اور ڈیٹا اینالیٹکس شامل کرنے پر زور دیا ہے۔'
      },
      {
        id: 'q5',
        statement: 'Specializes in uncovering corporate deception and evaluating evidentiary trails.',
        correctPersonId: 'B',
        explanation: 'Zainab is a forensic auditor specializing in fraud investigations and legal evidence.',
        urduExplanation: 'زینب بطور فارنزک آڈیٹر مالیاتی فراڈ اور شواہد کی کھوج میں مہارت رکھتی ہے۔'
      },
      {
        id: 'q6',
        statement: 'Views modern technological adoption as an imperative evolution rather than a threat to the accounting profession.',
        correctPersonId: 'A',
        explanation: 'Farhan sees automation as an opportunity for accountants to elevate their commercial value.',
        urduExplanation: 'فرحان ٹیکنالوجی کو خطرہ نہیں بلکہ چارٹرڈ اکاؤنٹنٹ کے کردار کی مثبت ترقی سمجھتا ہے۔'
      },
      {
        id: 'q7',
        statement: 'Highlights the critical balance between technological fluency and moral responsibility.',
        correctPersonId: 'D',
        explanation: 'Professor Amina highlights ethical governance alongside computational tools in training.',
        urduExplanation: 'پروفیسر آمنہ نے تکنیکی مہارت کے ساتھ اخلاقی ذمے داری کی ضرورت کو اجاگر کیا ہے۔'
      }
    ]
  }
];

// ============================================================================
// READING SECTION 4: Long Text Comprehension strictly from the Attached PDF Workbook
// ============================================================================
export const EXPANDED_READING_SECTION_4: ReadingSection4[] = PDF_READING_SECTION_4_POOL.map(ensureSixToSevenParagraphs);
