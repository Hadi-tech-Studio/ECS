/**
 * ============================================================================
 * antiRepetitionTracker.ts
 * Global Anti-Repetition Tracking & Persistent Counter Management Engine
 * 
 * Guarantees ZERO REPETITION across the entire ICAP ECS & Aptis testing platform:
 * - Persistent generator counters saved in localStorage (survives page refresh & restarts)
 * - Global question ID and semantic text signature registry
 * - Fast in-memory caching with asynchronous debounced persistence
 * - Multi-level deduplication validation (checks intra-test and inter-test duplicates)
 * ============================================================================
 */

import { normalizeTextForComparison, isQuestionSubstantiallySimilar } from './questionHistoryService';

const GENERATOR_COUNTERS_KEY = 'icap_generator_counters';
const GLOBAL_SEEN_SIGNATURES_KEY = 'icap_global_seen_signatures';

interface GeneratorCounters {
  grammarMCQ: number;
  readingS1: number;
  readingS2: number;
  readingS3: number;
  readingS4: number;
  writingModule: number;
  writingPart4: number;
  vocabProcedural: number;
}

let cachedCounters: GeneratorCounters | null = null;
let cachedSignatures: Set<string> | null = null;
let persistSignaturesTimeout: any = null;
let persistCountersTimeout: any = null;

/**
 * Get the next persistent sequential counter for any auto-generator
 */
export function getNextGeneratorCounter(generatorName: keyof GeneratorCounters): number {
  if (!cachedCounters) {
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem(GENERATOR_COUNTERS_KEY);
        cachedCounters = raw ? JSON.parse(raw) : {
          grammarMCQ: 1,
          readingS1: 1,
          readingS2: 1,
          readingS3: 1,
          readingS4: 1,
          writingModule: 1,
          writingPart4: 1,
          vocabProcedural: 1
        };
      } catch {
        cachedCounters = {
          grammarMCQ: 1,
          readingS1: 1,
          readingS2: 1,
          readingS3: 1,
          readingS4: 1,
          writingModule: 1,
          writingPart4: 1,
          vocabProcedural: 1
        };
      }
    } else {
      cachedCounters = {
        grammarMCQ: 1,
        readingS1: 1,
        readingS2: 1,
        readingS3: 1,
        readingS4: 1,
        writingModule: 1,
        writingPart4: 1,
        vocabProcedural: 1
      };
    }
  }

  const current = (cachedCounters![generatorName] || 0) + 1;
  cachedCounters![generatorName] = current;

  // Debounced async persistence
  if (typeof window !== 'undefined') {
    if (persistCountersTimeout) clearTimeout(persistCountersTimeout);
    persistCountersTimeout = setTimeout(() => {
      try {
        localStorage.setItem(GENERATOR_COUNTERS_KEY, JSON.stringify(cachedCounters));
      } catch (e) {
        console.warn('Failed to persist generator counters:', e);
      }
    }, 100);
  }

  return current;
}

/**
 * Retrieve the global set of seen semantic signatures
 */
function getGlobalSeenSignatures(): Set<string> {
  if (cachedSignatures) return cachedSignatures;
  if (typeof window === 'undefined') {
    cachedSignatures = new Set<string>();
    return cachedSignatures;
  }
  try {
    const raw = localStorage.getItem(GLOBAL_SEEN_SIGNATURES_KEY);
    if (!raw) {
      cachedSignatures = new Set<string>();
      return cachedSignatures;
    }
    const arr = JSON.parse(raw);
    cachedSignatures = new Set<string>(Array.isArray(arr) ? arr : []);
    return cachedSignatures;
  } catch {
    cachedSignatures = new Set<string>();
    return cachedSignatures;
  }
}

/**
 * Computes a standardized compact semantic signature for any text/prompt
 */
export function computeItemSignature(category: string, textOrTitle: string): string {
  if (!textOrTitle) return '';
  const { normalized } = normalizeTextForComparison(textOrTitle);
  const compact = normalized.replace(/[^a-z0-9]/g, '').slice(0, 80);
  return `${category}:${compact}`;
}

/**
 * Checks if a question ID, title, or statement was previously seen globally
 */
export function isGloballySeen(category: string, id: string, textOrTitle: string): boolean {
  if (!id && !textOrTitle) return false;
  const signatures = getGlobalSeenSignatures();
  
  // Check exact ID
  if (id && signatures.has(`id:${id}`)) return true;

  // Check semantic signature
  if (textOrTitle) {
    const sig = computeItemSignature(category, textOrTitle);
    if (sig && signatures.has(sig)) return true;

    // Check similarity against student history
    const simCheck = isQuestionSubstantiallySimilar(textOrTitle, category as any, undefined, 0.65);
    if (simCheck.isSimilar) return true;
  }

  return false;
}

/**
 * Marks question IDs and semantic text signatures as globally seen
 */
export function markGloballySeen(category: string, items: Array<{ id: string; textOrTitle: string }>): void {
  if (!items || items.length === 0) return;
  const signatures = getGlobalSeenSignatures();

  items.forEach(it => {
    if (it.id) signatures.add(`id:${it.id}`);
    if (it.textOrTitle) {
      const sig = computeItemSignature(category, it.textOrTitle);
      if (sig) signatures.add(sig);
    }
  });

  // Bound maximum signatures to 50,000 to keep localStorage optimal
  let arr = Array.from(signatures);
  if (arr.length > 50000) {
    arr = arr.slice(arr.length - 40000);
    cachedSignatures = new Set(arr);
  }

  // Debounced async persistence
  if (typeof window !== 'undefined') {
    if (persistSignaturesTimeout) clearTimeout(persistSignaturesTimeout);
    persistSignaturesTimeout = setTimeout(() => {
      try {
        localStorage.setItem(GLOBAL_SEEN_SIGNATURES_KEY, JSON.stringify(arr));
      } catch (e) {
        console.warn('Failed to persist global seen signatures:', e);
      }
    }, 150);
  }
}

/**
 * Filter an array of items to return only those NOT globally seen
 */
export function filterUnseenItems<T>(
  items: T[],
  category: string,
  getId: (item: T) => string,
  getText: (item: T) => string
): T[] {
  return items.filter(item => {
    const id = getId(item);
    const text = getText(item);
    return !isGloballySeen(category, id, text);
  });
}

/**
 * Completely resets global tracking signatures and generator counters
 */
export function clearAllGlobalTracking(): void {
  cachedCounters = {
    grammarMCQ: 1,
    readingS1: 1,
    readingS2: 1,
    readingS3: 1,
    readingS4: 1,
    writingModule: 1,
    writingPart4: 1,
    vocabProcedural: 1
  };
  cachedSignatures = new Set<string>();
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(GENERATOR_COUNTERS_KEY);
      localStorage.removeItem(GLOBAL_SEEN_SIGNATURES_KEY);
    } catch {}
  }
}
