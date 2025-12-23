// src/games/sudoku/index.js

import './style.css';
import { generateSudoku } from './generator.js';
import { saveSudokuProgress, loadSudokuProgress } from './storage.js';
import { progression } from '../../utils/progression.js';


/* =========================
   DAILY SEED
========================= */
function getDailySeed() {
  const start = new Date('2025-01-01');
  const today = new Date();
  start.setHours(0,0,0,0);
  today.setHours(0,0,0,0);
  return Math.floor((today - start) / 86400000);
}

export function startSudoku(container) {
  const today = new Date().toDateString();
  let saved = loadSudokuProgress();

  let puzzle, solution, grid;
  if (saved && saved.date === today) {
    ({ puzzle, solution, grid } = saved);
  } else {
    const daily = generateSudoku(45);
    puzzle = daily.puzzle;
    solution = daily.solution;
    grid = puzzle.map(r => [...r]);

    saveSudokuProgress({
      date: today,
      puzzle,
      solution,
      grid
    });
  }

function render() {
  container.innerHTML = `
    <div class="sudoku">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Sudoku</h2>

      <div class="sudoku-grid">
        ${grid.map((row, r) =>
          row.map((val, c) => {
            const fixed = puzzle[r][c] !== 0;
            return `
              <input
                type="text"
                maxlength="1"
                class="cell ${fixed ? 'fixed' : ''}"
                data-r="${r}"
                data-c="${c}"
                value="${val || ''}"
                ${fixed ? 'disabled' : ''}
              />
            `;
          }).join('')
        ).join('')}
      </div>

      <button class="check-btn" id="checkSudokuBtn">
        Check
      </button>

      <div id="sudoku-feedback" class="sudoku-feedback"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;

  // Cell input handling
  container.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('input', () => {
      const r = +cell.dataset.r;
      const c = +cell.dataset.c;
      const v = +cell.value;

      if (v >= 1 && v <= 9) {
        grid[r][c] = v;
      } else {
        grid[r][c] = 0;
        cell.value = '';
      }

      saveSudokuProgress({ date: today, puzzle, solution, grid });
    });
  });

  const checkBtn = document.getElementById('checkSudokuBtn');
  checkBtn.addEventListener('click', () => {
    checkWin();
  });
}

function showSudokuFeedback(message, success = false) {
  const el = document.getElementById('sudoku-feedback');
  if (!el) return;

  el.innerHTML = `
    <div class="sudoku-feedback-box ${success ? 'success' : 'error'}">
      ${message}
    </div>
  `;

  setTimeout(() => {
    el.innerHTML = '';
  }, 1500);
}

function checkWin() {
  const isValidGroup = nums => {
    const set = new Set(nums);
    if (set.size !== 9) return false;
    for (let n of set) {
      if (n < 1 || n > 9) return false;
    }
    return true;
  };

  // Rows
  for (let r = 0; r < 9; r++) {
    if (!isValidGroup(grid[r])) {
      showSudokuFeedback('Win condition not met');
      return false;
    }
  }

  // Columns
  for (let c = 0; c < 9; c++) {
    const col = [];
    for (let r = 0; r < 9; r++) col.push(grid[r][c]);
    if (!isValidGroup(col)) {
      showSudokuFeedback('Win condition not met');
      return false;
    }
  }

  // Boxes
  for (let br = 0; br < 3; br++) {
    for (let bc = 0; bc < 3; bc++) {
      const box = [];
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          box.push(grid[br * 3 + r][bc * 3 + c]);
        }
      }
      if (!isValidGroup(box)) {
        showSudokuFeedback('Win condition not met');
        return false;
      }
    }
  }

  const GAME_ID = 'sudoku';
  const XP_REWARD = 100;

  // Prevent double rewards in one day
  if (!progression.hasPlayedToday(GAME_ID)) {
    progression.addXP(XP_REWARD);
    progression.markPlayedToday(GAME_ID);
  }

  localStorage.setItem(
    'sudokuReview',
    JSON.stringify({
      date: new Date().toDateString(),
      grid
    })
  );

  showSudokuFeedback('🎉 Puzzle complete!', true);
  return true;
}


  render();
}
