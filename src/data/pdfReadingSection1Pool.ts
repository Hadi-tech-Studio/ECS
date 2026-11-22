// Official ICAP ECS Reading Section 1 Pool
import { ReadingSection1 } from '../types';
import { READING_SECTION_1_BANK } from './readingQuestionBank';

export const PDF_READING_SECTION_1_POOL: ReadingSection1[] = READING_SECTION_1_BANK;

const SEEN_PDF_RS1_KEY = 'icap_seen_pdf_reading_s1_ids';

export function getSeenPdfReadingSection1Ids(): Set<string> {
  try {
    const raw = localStorage.getItem(SEEN_PDF_RS1_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch { return new Set(); }
}

export function markSeenPdfReadingSection1Id(id: string): void {
  try {
    const seen = getSeenPdfReadingSection1Ids();
    seen.add(id);
    localStorage.setItem(SEEN_PDF_RS1_KEY, JSON.stringify([...seen]));
  } catch {}
}

export function clearSeenPdfReadingSection1Ids(): void {
  try { localStorage.removeItem(SEEN_PDF_RS1_KEY); } catch {}
}

export function selectOfficialPdfReadingSection1(providedSeen?: Set<string>): ReadingSection1 {
  const seen = providedSeen || getSeenPdfReadingSection1Ids();
  const unseen = PDF_READING_SECTION_1_POOL.filter(item => !seen.has(item.id));
  
  const chosen = unseen.length > 0 
    ? unseen[Math.floor(Math.random() * unseen.length)]
    : PDF_READING_SECTION_1_POOL[Math.floor(Math.random() * PDF_READING_SECTION_1_POOL.length)];

  if (chosen) {
    markSeenPdfReadingSection1Id(chosen.id);
    return chosen;
  }

  return PDF_READING_SECTION_1_POOL[0];
}
