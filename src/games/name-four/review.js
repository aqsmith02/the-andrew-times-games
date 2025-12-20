// src/games/name-four/review.js

import { NAME_FOUR_PUZZLES } from './data.js';
import { loadNameFourProgress } from './storage.js';

/* =========================
   DAILY ROTATION (same as game)
========================= */
function getTodayPuzzle() {
  const startDate = new Date('2025-01-01');
  const today = new Date();

  startDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffDays = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
  );

  return NAME_FOUR_PUZZLES[
    diffDays % NAME_FOUR_PUZZLES.length
  ];
}

/* =========================
   REVIEW SCREEN
========================= */
export function reviewNameFour(container) {
  const today = new Date().toDateString();
  const puzzle = getTodayPuzzle();
  const saved = loadNameFourProgress();

  if (!saved || saved.date !== today) {
    container.innerHTML = `
      <div class="name-four review">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>Name Four</h2>
        <p>No completed game to review today.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="name-four review">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <h2>Name Four — Review</h2>

      <div class="category">
        Category: <strong>${puzzle.category}</strong>
      </div>

      <div class="found">
        <h4>Correct Answers</h4>
        <ul class="found-list">
          ${saved.found.map(word => `<li>${word}</li>`).join('')}
        </ul>
      </div>

      <div class="stats">
        <p>Total guesses made: <strong>${saved.guessCount ?? saved.found.length}</strong></p>
      </div>
    </div>
  `;
}
