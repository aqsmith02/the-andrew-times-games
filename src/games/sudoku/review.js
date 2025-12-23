// src/games/sudoku/review.js

import { loadSudokuProgress } from './storage.js';

export function reviewSudoku(container) {
  const saved = loadSudokuProgress();
  const today = new Date().toDateString();

  if (!saved || saved.date !== today) {
    container.innerHTML = `
      <div class="sudoku-review">
        <div class="header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>Sudoku Review</h2>
        </div>
        <p style="text-align:center;color:#6b7280;">
          No Sudoku played today.
        </p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;
    return;
  }

  const { grid } = saved;

  container.innerHTML = `
      <div class="sudoku-review">
        <div class="header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>Sudoku Review</h2>
        </div>

      <div class="sudoku-grid review">
        ${grid.flat().map(val => `
          <div class="cell review-cell">${val}</div>
        `).join('')}
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;
}
