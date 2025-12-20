// src/games/wordle-clone/words.js

let ANSWERS = [];
let ALLOWED = new Set();
let loaded = false;

export async function loadWordLists() {
  if (loaded) return;

  try {
    const [answersRes, allowedRes] = await Promise.all([
      fetch('wordle-data/answers.json'),
      fetch('wordle-data/allowed.json')
    ]);

    if (!answersRes.ok || !allowedRes.ok) {
      throw new Error('Failed to load word list files');
    }

    const answersData = await answersRes.json();
    const allowedData = await allowedRes.json();

    ANSWERS = answersData.map(w => w.toUpperCase());
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
    console.log('First 5 answers:', ANSWERS.slice(0, 5));
  } catch (error) {
    console.error('❌ Failed to load word lists:', error);
    throw error;
  }
}

export function isValidGuess(word) {
  if (!loaded) {
    console.warn('Word lists not loaded yet');
    return false;
  }
  const upperWord = word.trim().toUpperCase();
  return ALLOWED.has(upperWord);
}

export function getDailyAnswer() {
  if (!loaded) throw new Error('Word lists not loaded');
  if (ANSWERS.length === 0) throw new Error('No answers loaded');

  const start = new Date('2021-06-19');
  const today = new Date();

  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const index =
    Math.floor((today - start) / 86400000) % ANSWERS.length;

  const answer = ANSWERS[index];
  console.log("Today's answer:", answer);

  return answer;
}
