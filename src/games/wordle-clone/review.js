// src/games/wordle-clone/review.js

import { loadWordleProgress } from './storage.js';

export function reviewTodayWordle(container) {
  const today = new Date().toDateString();
  const data = loadWordleProgress();

  // No data or wrong day
  if (!data || data.date !== today) {
    container.innerHTML = `
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align:center; color:#666;">
          Play today’s Wordle first!
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <h2>Today’s Wordle</h2>

      <div class="review-summary ${data.won ? 'won' : 'lost'}">
        ${data.won
          ? `🎉 Solved in ${data.rowsUsed} / 6 guesses`
          : `😢 Not solved today`
        }
      </div>

      <div class="wordle-review-grid">
        ${(data.guesses || []).map(guess => `
          <div class="review-row">
            ${guess.word.split('').map((letter, i) => `
              <div class="tile ${guess.result[i]}">
                ${letter}
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>

      <div class="review-answer">
        Answer: <strong>${data.answer}</strong>
      </div>
    </div>
  `;
}
