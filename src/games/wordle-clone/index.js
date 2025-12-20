// src/games/wordle-clone/index.js

import './style.css';
import { renderWordleGrid } from './render.js';
import { progression } from '../../utils/progression.js';
import { saveWordleProgress } from './storage.js';

const WORD_LENGTH = 5;
const MAX_ROWS = 6;
const WIN_XP = 100;
const ANSWER = 'MADLY'; // TODO: rotate daily later

export function startWordle(container) {
  let currentRow = 0;
  let currentCol = 0;
  let gameOver = false;
  const guesses = [];

  container.innerHTML = `
    <div class="wordle-wrapper">
      <button class="back-btn" id="back-home">← Back</button>
      <div id="wordle-root"></div>
    </div>
  `;

  const root = document.getElementById('wordle-root');
  renderWordleGrid(root);
  const rows = root.querySelectorAll('.row');

  document.getElementById('back-home').onclick = () => {
    cleanup();
    window.showHome();
  };

  /* =========================
     INPUT HANDLING
  ========================= */
  function addLetter(letter) {
    if (currentCol >= WORD_LENGTH) return;
    rows[currentRow].children[currentCol].textContent = letter;
    currentCol++;
  }

  function removeLetter() {
    if (currentCol === 0) return;
    currentCol--;
    rows[currentRow].children[currentCol].textContent = '';
  }

  function handleKey(key) {
    if (gameOver) return;

    if (key === 'ENTER') {
      if (currentCol !== WORD_LENGTH) return;
      submitGuess();
      return;
    }

    if (key === '⌫' || key === 'BACKSPACE') {
      removeLetter();
      return;
    }

    if (/^[A-Z]$/.test(key)) {
      addLetter(key);
    }
  }

  /* =========================
     GAME LOGIC
  ========================= */
  function submitGuess() {
    const tiles = rows[currentRow].children;
    const guess = Array.from(tiles)
      .map(t => t.textContent)
      .join('');

    evaluateGuess(guess);

    guesses.push({
      word: guess,
      result: Array.from(tiles).map(tile =>
        tile.classList.contains('correct')
          ? 'correct'
          : tile.classList.contains('present')
          ? 'present'
          : 'absent'
      )
    });
  }

  function evaluateGuess(guess) {
    const answerLetters = ANSWER.split('');
    const tiles = rows[currentRow].children;

    // Pass 1: correct letters
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guess[i] === answerLetters[i]) {
        tiles[i].classList.add('correct');
        answerLetters[i] = null;
      }
    }

    // Pass 2: present / absent
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (tiles[i].classList.contains('correct')) continue;

      const index = answerLetters.indexOf(guess[i]);
      if (index !== -1) {
        tiles[i].classList.add('present');
        answerLetters[index] = null;
      } else {
        tiles[i].classList.add('absent');
      }
    }

    // WIN
    if (guess === ANSWER) {
      endGame(true);
      return;
    }

    currentRow++;
    currentCol = 0;

    // LOSS
    if (currentRow === MAX_ROWS) {
      endGame(false);
    }
  }

  function endGame(won) {
    gameOver = true;

    if (won) {
      progression.addXP(WIN_XP);
      showMessage(`🎉 You got it! +${WIN_XP} XP`);
    } else {
      showMessage(`😢 The word was ${ANSWER}`);
    }

    progression.markPlayedToday('wordle');

    // ✅ SAVE ONCE — COMPLETE DATA
    saveWordleProgress({
      date: new Date().toDateString(),
      answer: ANSWER,
      won,
      rowsUsed: won ? currentRow + 1 : MAX_ROWS,
      guesses
    });
  }

  function showMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'wordle-message';
    msg.textContent = text;
    root.appendChild(msg);
  }

  /* =========================
     EVENTS
  ========================= */
  function handlePhysicalKeyboard(e) {
    handleKey(e.key.toUpperCase());
  }

  window.addEventListener('keydown', handlePhysicalKeyboard);

  root.querySelectorAll('.key').forEach(btn => {
    btn.addEventListener('click', () => handleKey(btn.textContent));
  });

  function cleanup() {
    window.removeEventListener('keydown', handlePhysicalKeyboard);
  }
}
