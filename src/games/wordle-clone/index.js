// src/games/wordle-clone/index.js

import './style.css';
import { renderWordleGrid } from './render.js';
import { progression } from '../../utils/progression.js';
import { saveWordleProgress, loadWordleProgress } from './storage.js';
import {
  loadWordLists,
  getDailyAnswer,
  isValidGuess
} from './words.js';

const WORD_LENGTH = 5;
const MAX_ROWS = 6;
const WIN_XP = 100;

export async function startWordle(container) {
  await loadWordLists();

  const ANSWER = getDailyAnswer();
  const today = new Date().toDateString();

  // Load existing progress
  const savedProgress = loadWordleProgress();
  const hasSavedProgress = savedProgress && 
                          savedProgress.date === today && 
                          savedProgress.answer === ANSWER &&
                          !savedProgress.won &&
                          savedProgress.rowsUsed < MAX_ROWS;

  let currentRow = hasSavedProgress ? savedProgress.rowsUsed : 0;
  let currentCol = 0;
  let gameOver = hasSavedProgress ? false : (savedProgress && savedProgress.date === today);
  const guesses = hasSavedProgress ? [...savedProgress.guesses] : [];

  container.innerHTML = `
    <div class="wordle-wrapper">

      <div class="wordle-header">
        <button class="back-btn" id="back-home">← Back</button>
        <h2>Wordle</h2>
      </div>

      <div id="wordle-root"></div>
    </div>
  `;

  const root = document.getElementById('wordle-root');
  renderWordleGrid(root);
  const rows = root.querySelectorAll('.row');

  // Restore previous guesses
  if (hasSavedProgress) {
    guesses.forEach((guess, rowIndex) => {
      const tiles = rows[rowIndex].children;
      guess.word.split('').forEach((letter, colIndex) => {
        tiles[colIndex].textContent = letter;
        tiles[colIndex].classList.add(guess.result[colIndex]);
      });
    });
  }

  // If game already completed today, show completion state
  if (gameOver && savedProgress && savedProgress.date === today) {
    guesses.forEach((guess, rowIndex) => {
      const tiles = rows[rowIndex].children;
      guess.word.split('').forEach((letter, colIndex) => {
        tiles[colIndex].textContent = letter;
        tiles[colIndex].classList.add(guess.result[colIndex]);
      });
    });
    
    if (savedProgress.won) {
      showMessage(`🎉 You already completed today's Wordle! +${WIN_XP} XP`);
    } else {
      showMessage(`😢 The word was ${ANSWER}`);
    }
  }

  document.getElementById('back-home').onclick = () => {
    // Save progress before leaving
    if (!gameOver && guesses.length > 0) {
      saveWordleProgress({
        date: today,
        answer: ANSWER,
        won: false,
        rowsUsed: currentRow,
        guesses
      });
    }
    cleanup();
    window.showHome();
  };

  function addLetter(letter) {
    if (currentCol >= WORD_LENGTH || gameOver) return;
    rows[currentRow].children[currentCol].textContent = letter;
    currentCol++;
  }

  function removeLetter() {
    if (currentCol === 0 || gameOver) return;
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

  function submitGuess() {
    const tiles = rows[currentRow].children;
    const guess = Array.from(tiles).map(t => t.textContent).join('');

    if (!isValidGuess(guess)) {
      showMessage('❌ Not in word list');
      return;
    }

    const answerLetters = ANSWER.split('');
    const result = Array(WORD_LENGTH).fill('absent');

    // Pass 1: correct
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guess[i] === answerLetters[i]) {
        tiles[i].classList.add('correct');
        result[i] = 'correct';
        answerLetters[i] = null;
      }
    }

    // Pass 2: present / absent
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (result[i] === 'correct') continue;

      const index = answerLetters.indexOf(guess[i]);
      if (index !== -1) {
        tiles[i].classList.add('present');
        result[i] = 'present';
        answerLetters[index] = null;
      } else {
        tiles[i].classList.add('absent');
      }
    }

    guesses.push({ word: guess, result });

    // Save progress after each guess
    saveWordleProgress({
      date: today,
      answer: ANSWER,
      won: guess === ANSWER,
      rowsUsed: currentRow + 1,
      guesses
    });

    if (guess === ANSWER) {
      endGame(true);
      return;
    }

    currentRow++;
    currentCol = 0;

    if (currentRow === MAX_ROWS) {
      endGame(false);
    }
  }

  function endGame(won) {
    gameOver = true;
    progression.markPlayedToday('wordle');

    if (won) {
      progression.addXP(WIN_XP);
      showMessage(`🎉 You got it! +${WIN_XP} XP`);
    } else {
      showMessage(`😢 The word was ${ANSWER}`);
    }

    // Final save with completion status
    saveWordleProgress({
      date: today,
      answer: ANSWER,
      won,
      rowsUsed: guesses.length,
      guesses
    });
  }

  function showMessage(text) {
    const existing = root.querySelector('.wordle-message');
    if (existing) existing.remove();
    
    const msg = document.createElement('div');
    msg.className = 'wordle-message';
    msg.textContent = text;
    root.appendChild(msg);
  }

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