// src/games/sudoku/storage.js

const KEY = 'sudoku_progress';

export function saveSudokuProgress(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function loadSudokuProgress() {
  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : null;
}

export function clearSudokuProgress() {
  localStorage.removeItem(KEY);
}
