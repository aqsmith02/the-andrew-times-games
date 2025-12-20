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
      <div class="name-four-review">
        <button class="back-btn" onclick="showHome()">← Back</button>

        <div class="review-card">
          <h2>Today's Name Four Review</h2>
          <p style="text-align: center; color: #6b7280;">
            No completed game to review today.
          </p>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="name-four-review">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <div class="review-card">
        <h2>Today's Name Four Review</h2>

        <div class="category">
          Category: <strong>${puzzle.category}</strong>
        </div>

        <div class="answers">
          ${saved.found.map(word => `
            <div class="review-answer">${word}</div>
          `).join('')}
        </div>

        <div class="stats">
          Total guesses made:
          <strong>${saved.guessCount ?? saved.found.length}</strong>
        </div>
      </div>
    </div>
  `;
}
