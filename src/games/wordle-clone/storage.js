const STORAGE_KEY = 'wordle_progress';

export function saveWordleProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadWordleProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  return JSON.parse(saved);
}
