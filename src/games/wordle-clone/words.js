// src/games/wordle-clone/words.js

let ANSWERS = [];
let ALLOWED = new Set();
let loaded = false;

// Get the base path from vite config
const base = import.meta.env.BASE_URL || '/';

/* =========================
   SEEDED RANDOM UTILITIES
========================= */

function seededRandom(seed) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;
    return (h >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(array, seed) {
  const rng = seededRandom(seed);
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

/* =========================
   LOAD WORD LISTS
========================= */

export async function loadWordLists() {
  if (loaded) return;

  try {
    const [answersRes, allowedRes] = await Promise.all([
      fetch(`${base}wordle-data/answers.json`),
      fetch(`${base}wordle-data/allowed.json`)
    ]);

    if (!answersRes.ok || !allowedRes.ok) {
      throw new Error('Failed to load word list files');
    }

    const answersData = await answersRes.json();
    const allowedData = await allowedRes.json();

    // Load answers
    ANSWERS = answersData.map(w => w.toUpperCase());

    // 🔥 Deterministically shuffle answers so they feel random
    ANSWERS = shuffleWithSeed(ANSWERS, 'wordle-v1');

    // Load allowed guesses
    const allowedWords = allowedData.map(w => w.toUpperCase());
    ALLOWED = new Set([...ANSWERS, ...allowedWords]);

    loaded = true;

    console.log(
      '✅ Word lists loaded:',
      ANSWERS.length,
      'answers,',
      ALLOWED.size,
      'allowed'
    );
    console.log("Today's answer:", getDailyAnswer());
  } catch (error) {
    console.error('❌ Failed to load word lists:', error);
    throw error;
  }
}

/* =========================
   VALIDATION
========================= */

export function isValidGuess(word) {
  if (!loaded) {
    console.warn('Word lists not loaded yet');
    return false;
  }
  const upperWord = word.trim().toUpperCase();
  return ALLOWED.has(upperWord);
}

/* =========================
   DAILY ANSWER
========================= */

export function getDailyAnswer() {
  if (!loaded) throw new Error('Word lists not loaded');
  if (ANSWERS.length === 0) throw new Error('No answers loaded');

  const start = new Date('2021-06-19');
  const today = new Date();

  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const index =
    Math.floor((today - start) / 86400000) % ANSWERS.length;

  return ANSWERS[index];
}
