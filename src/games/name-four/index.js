// src/games/name-four/index.js

import './style.css';
import { progression } from '../../utils/progression.js';
import { NAME_FOUR_PUZZLES } from './data.js';
import {
  loadNameFourProgress,
  saveNameFourProgress
} from './storage.js';

const XP_PER_ANSWER = 25;

/* =========================
   DAILY ROTATION
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
   GAME START
========================= */
export function startNameFour(container) {
  const today = new Date().toDateString();
  const puzzle = getTodayPuzzle();
  const answers = puzzle.answers.map(a => a.toUpperCase());

  const saved = loadNameFourProgress();

  const found = new Set(
    saved?.date === today ? saved.found || [] : []
  );

  const revealed = new Set(
    saved?.date === today ? saved.revealed || [] : []
  );

  let guessCount = saved?.date === today ? saved.guessCount || 0 : 0;
  let xpAwarded = saved?.date === today ? saved.xpAwarded || 0 : 0;
  let completed = saved?.date === today && saved.completed;

  container.innerHTML = `
    <div class="name-four">
      <button class="back-btn" id="back-home">← Back</button>

      <h2>Name Four</h2>
      <div class="category">
        Category: <strong>${puzzle.category}</strong>
      </div>

      <div class="answer-grid" id="answer-grid"></div>

      <form id="guess-form" class="guess-form">
        <input
          id="guess-input"
          type="text"
          placeholder="Type a guess..."
          autocomplete="off"
          ${completed ? 'disabled' : ''}
        />
        <button type="submit" ${completed ? 'disabled' : ''}>
          Submit
        </button>
      </form>

      <div id="completion-message"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" id="mobile-back-home">← Back</button>
    </div>
  `;

  const input = document.getElementById('guess-input');
  const grid = document.getElementById('answer-grid');
  const completionMessage = document.getElementById('completion-message');

  document.getElementById('back-home').onclick = () => window.showHome();
  document.getElementById('mobile-back-home').onclick = () => window.showHome();

  renderGrid();

  if (completed) showCompletionMessage();

  /* =========================
     GUESS HANDLING
  ========================= */
  document.getElementById('guess-form').onsubmit = e => {
    e.preventDefault();
    if (completed) return;

    const raw = input.value.trim();
    if (!raw) return;

    const guess = raw.toUpperCase();
    input.value = '';
    guessCount++;

    if (found.has(guess) || revealed.has(guess)) {
      persist();
      return;
    }

    if (answers.includes(guess)) {
      found.add(guess);
      awardXP();
      renderGrid();

      if (found.size + revealed.size === 4) {
        finishGame();
      }
    }

    persist();
  };

  /* =========================
     RENDERING
  ========================= */
  function renderGrid() {
    grid.innerHTML = '';

    answers.forEach(answer => {
      const solved = found.has(answer) || revealed.has(answer);

      const box = document.createElement('div');
      box.className = `answer-box ${solved ? 'solved' : ''}`;

      const text = document.createElement('div');
      text.className = 'answer-text';
      text.textContent = solved
        ? answer
        : answer.replace(/[A-Z]/gi, '_');

      box.appendChild(text);

      if (!solved && !completed) {
        const revealBtn = document.createElement('button');
        revealBtn.className = 'reveal-single-btn';
        revealBtn.textContent = 'Reveal';

        revealBtn.onclick = () => {
          revealed.add(answer);
          renderGrid();

          if (found.size + revealed.size === 4) {
            finishGame();
          }

          persist();
        };

        box.appendChild(revealBtn);
      }

      grid.appendChild(box);
    });
  }

  /* =========================
     XP + PROGRESS
  ========================= */
  function awardXP() {
    xpAwarded += XP_PER_ANSWER;
    progression.addXP(XP_PER_ANSWER);
  }

  function persist(done = false) {
    saveNameFourProgress({
      date: today,
      found: [...found],
      revealed: [...revealed],
      completed: done || completed,
      guessCount,
      xpAwarded
    });
  }

  function finishGame() {
    completed = true;
    progression.markPlayedToday('name-four');

    input.disabled = true;
    document.querySelector('#guess-form button').disabled = true;

    persist(true);
    showCompletionMessage();
  }

  function showCompletionMessage() {
    completionMessage.innerHTML = `
      <div class="completion">
        🎉 Puzzle complete
        <div class="xp">+${xpAwarded} XP</div>
        <p>Total guesses: <strong>${guessCount}</strong></p>
        <p>Come back tomorrow for a new category</p>
      </div>
    `;
  }
}
