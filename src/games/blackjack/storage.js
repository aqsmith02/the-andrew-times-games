// src/games/blackjack/storage.js

const KEY = 'blackjack_progress';

export function saveBlackjackProgress(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function loadBlackjackProgress() {
  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : null;
}

export function clearBlackjackProgress() {
  localStorage.removeItem(KEY);
}