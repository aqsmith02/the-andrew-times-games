// src/main.js

import './style.css';
import { startThisOrThat, reviewTodayAnswers } from './games/this-or-that/index.js';
import { startWordle } from './games/wordle-clone/index.js';
import { reviewTodayWordle } from './games/wordle-clone/review.js';
import { startNameFour } from './games/name-four/index.js';
import { reviewNameFour } from './games/name-four/review.js';
import { startSudoku } from './games/sudoku/index.js';
import { reviewSudoku } from './games/sudoku/review.js';
import { startBlackjack } from './games/blackjack/index.js';
import { reviewBlackjack } from './games/blackjack/review.js';
import { progression, RARITY_COLORS, RARITY_LABELS } from './utils/progression.js';

const app = document.getElementById('app');

/* =========================
   HOME SCREEN
========================= */
function showHome() {
  const currentLevel = progression.getCurrentLevel();
  const totalXP = progression.getTotalXP();
  const xpToNext = progression.getXPToNextLevel();
  const xpProgress = progression.getXPProgressInLevel();
  const unopenedBoxes = progression.getUnopenedBoxes();
  const stats = progression.getCollectionStats();
  
  // Check if this is a first-time user (has a box but no stickers yet)
  const isNewUser = unopenedBoxes > 0 && stats.uniqueOwned === 0;

  app.innerHTML = `
    <div class="home-screen">
      <header class="app-header">
        <h1>The Andrew Times Games</h1>
        
        ${isNewUser ? `
          <div class="welcome-message">
            <div class="welcome-icon">
              <img src="./misc/welcome.png" alt="Welcome" />
            </div>
            <h2>Welcome!</h2>
            <p>Thanks for visiting! You've earned a free mystery box to get you started. Open it to receive your first sticker!</p>
          </div>
        ` : ''}

        <div class="progress-summary">
          <div class="level-info">
            <span class="level">Level ${currentLevel}</span>
            <span class="xp">${totalXP} XP</span>
          </div>

          <div class="xp-section">
            <div class="xp-bar">
              <div class="xp-fill" style="width: ${(xpProgress / 300) * 100}%"></div>
            </div>
            <div class="xp-text">${xpToNext} XP to Level ${currentLevel + 1}</div>
          </div>

          <div class="collection-summary">
            <div class="collection-icon">🎁</div>
            <div class="collection-info">
              <div class="collection-progress">${stats.uniqueOwned}/${stats.totalStickers} Stickers</div>
              <div class="collection-percent">${stats.completionPercent}% Complete</div>
            </div>
          </div>

          ${unopenedBoxes > 0 ? `
            <button class="mystery-box-alert" onclick="showMysteryBox()">
              🎁 ${unopenedBoxes} Mystery ${unopenedBoxes === 1 ? 'Box' : 'Boxes'} Available!
            </button>
          ` : ''}
        </div>
      </header>

      <div class="game-cards">
        <!-- THIS OR THAT -->
        <div class="game-card ${progression.hasPlayedToday('thisOrThat') ? 'completed' : ''}"
             onclick="handleGameClick('thisOrThat')">
          <div class="game-icon">
            <img src="./game-icons/this_or_that_192.png" alt="This or That" />
          </div>
          <h3>This or That</h3>
          <p>Guess what I would choose</p>
          <div class="game-xp">Up to 100 XP</div>

          ${progression.hasPlayedToday('thisOrThat')
            ? '<div class="completed-badge">✓ Completed — Click to Review</div>'
            : '<div class="play-badge">Play Now</div>'
          }
        </div>

        <!-- WORDLE -->
        <div class="game-card ${progression.hasPlayedToday('wordle') ? 'completed' : ''}"
             onclick="handleGameClick('wordle')">
          <div class="game-icon">
            <img src="./game-icons/wordle_clone_192.png" alt="Wordle" />
          </div>
          <h3>Wordle</h3>
          <p>Guess the secret word</p>
          <div class="game-xp">100 XP</div>

          ${progression.hasPlayedToday('wordle')
            ? '<div class="completed-badge">✓ Completed — Click to Review</div>'
            : '<div class="play-badge">Play Now</div>'
          }
        </div>

        <!-- NAME FOUR -->
        <div class="game-card ${progression.hasPlayedToday('name-four') ? 'completed' : ''}"
             onclick="handleGameClick('name-four')">
          <div class="game-icon">
            <img src="./game-icons/name_four_192.png" alt="Name Four" />
          </div>
          <h3>Name Four</h3>
          <p>Find the four that belong together</p>
          <div class="game-xp">Up to 100 XP</div>

          ${progression.hasPlayedToday('name-four')
            ? '<div class="completed-badge">✓ Completed — Click to Review</div>'
            : '<div class="play-badge">Play Now</div>'
          }
        </div>

        <!-- SUDOKU -->
        <div class="game-card ${progression.hasPlayedToday('sudoku') ? 'completed' : ''}"
            onclick="handleGameClick('sudoku')">
          <div class="game-icon">
            <img src="./game-icons/sudoku_192.png" alt="Sudoku" />
          </div>
          <h3>Sudoku</h3>
          <p>Complete the daily puzzle</p>
          <div class="game-xp">100 XP</div>

          ${progression.hasPlayedToday('sudoku')
            ? '<div class="completed-badge">✓ Completed — Click to Review</div>'
            : '<div class="play-badge">Play Now</div>'
          }
        </div>

        <!-- BLACKJACK -->
        <div class="game-card"
            onclick="handleGameClick('blackjack')">
          <div class="game-icon">
            <img src="./game-icons/blackjack_192.png" alt="Blackjack" />
          </div>
          <h3>Blackjack</h3>
          <p>Bet XP to win double</p>
          <div class="game-xp">Bet 5-50 XP</div>
          <div class="play-badge">Play Now</div>
        </div>
      </div>

      <button class="collection-btn" onclick="showCollection()">
        View Sticker Collection
      </button>
    </div>
  `;
}

/* =========================
   MYSTERY BOX SCREEN
========================= */
function showMysteryBox() {
  app.innerHTML = `
    <div class="mystery-box-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      
      <div class="mystery-box-container">
        <h2>Mystery Box</h2>
        <p class="mystery-subtitle">Open a box to reveal a sticker!</p>
        
        <div class="box-animation-area">
          <div class="mystery-box" id="mysteryBox" onclick="openBox()">
            <div class="box-lid">🎁</div>
            <div class="box-body"></div>
          </div>
        </div>

        <div class="boxes-remaining">
          ${progression.getUnopenedBoxes()} ${progression.getUnopenedBoxes() === 1 ? 'box' : 'boxes'} remaining
        </div>

        <button class="open-box-btn" onclick="openBox()">
          Open Box
        </button>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;
}

function openBox() {
  const result = progression.openMysteryBox();
  
  if (!result) {
    showHome();
    return;
  }

  const { sticker, isDuplicate, bonusXP, totalOwned } = result;
  
  // Animate box opening
  const boxEl = document.getElementById('mysteryBox');
  boxEl.classList.add('opening');
  
  setTimeout(() => {
    showStickerReveal(sticker, isDuplicate, bonusXP, totalOwned);
  }, 800);
}

function showStickerReveal(sticker, isDuplicate, bonusXP, totalOwned) {
  const rarityColor = RARITY_COLORS[sticker.rarity];
  const rarityLabel = RARITY_LABELS[sticker.rarity];
  const unopenedBoxes = progression.getUnopenedBoxes();

  app.innerHTML = `
    <div class="sticker-reveal-screen">
      <div class="reveal-container">
        <div class="reveal-card" style="border-color: ${rarityColor}">
          <div class="reveal-rarity" style="color: ${rarityColor}">
            ${rarityLabel}
          </div>
          
          <div class="reveal-sticker">
            <img src="${sticker.image}" alt="${sticker.name}" 
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22200%22 height=%22200%22 fill=%22${rarityColor}%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2248%22 fill=%22white%22>${sticker.name.charAt(0)}</text></svg>'" />
          </div>
          
          <div class="reveal-name">${sticker.name}</div>
          
          ${isDuplicate ? `
            <div class="duplicate-badge">
              <span class="duplicate-icon">×${totalOwned}</span>
              <span class="duplicate-text">Duplicate! +${bonusXP} Bonus XP</span>
            </div>
          ` : `
            <div class="new-badge">🌟 NEW!</div>
          `}
        </div>

        <div class="reveal-actions">
          ${unopenedBoxes > 0 ? `
            <button class="reveal-btn primary" onclick="showMysteryBox()">
              Open Another (${unopenedBoxes} left)
            </button>
          ` : ''}
          
          <button class="reveal-btn ${unopenedBoxes > 0 ? '' : 'primary'}" onclick="showCollection()">
            View Collection
          </button>
          
          <button class="reveal-btn" onclick="showHome()">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  `;

  // Add animation class
  setTimeout(() => {
    document.querySelector('.reveal-card').classList.add('animate-in');
  }, 50);
}

/* =========================
   COLLECTION SCREEN
========================= */
function showCollection() {
  const allStickers = progression.getAllStickers();
  const stats = progression.getCollectionStats();
  const unopenedBoxes = progression.getUnopenedBoxes();

  // Group by rarity
  const byRarity = {
    legendary: allStickers.filter(s => s.rarity === 'legendary'),
    rare: allStickers.filter(s => s.rarity === 'rare'),
    uncommon: allStickers.filter(s => s.rarity === 'uncommon'),
    common: allStickers.filter(s => s.rarity === 'common')
  };

  app.innerHTML = `
    <div class="collection-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      
      <div class="collection-header">
        <h2>Sticker Collection</h2>
        <div class="collection-stats">
          <div class="stat">
            <span class="stat-value">${stats.uniqueOwned}/${stats.totalStickers}</span>
            <span class="stat-label">Collected</span>
          </div>
          <div class="stat">
            <span class="stat-value">${stats.completionPercent}%</span>
            <span class="stat-label">Complete</span>
          </div>
          ${unopenedBoxes > 0 ? `
            <button class="stat open-boxes-btn" onclick="showMysteryBox()">
              🎁 ${unopenedBoxes} ${unopenedBoxes === 1 ? 'Box' : 'Boxes'}
            </button>
          ` : ''}
        </div>
      </div>

      <div class="rarity-breakdown">
        ${Object.entries(stats.rarityStats).map(([rarity, data]) => `
          <div class="rarity-stat" style="border-left: 3px solid ${RARITY_COLORS[rarity]}">
            <span class="rarity-name" style="color: ${RARITY_COLORS[rarity]}">
              ${RARITY_LABELS[rarity]}
            </span>
            <span class="rarity-count">${data.owned}/${data.total}</span>
          </div>
        `).join('')}
      </div>

      ${Object.entries(byRarity).map(([rarity, stickers]) => `
        <div class="sticker-section">
          <h3 class="section-title" style="color: ${RARITY_COLORS[rarity]}">
            ${RARITY_LABELS[rarity]} (${stickers.filter(s => s.owned > 0).length}/${stickers.length})
          </h3>
          <div class="sticker-grid">
            ${stickers.map(sticker => `
              <div class="sticker-card ${sticker.owned > 0 ? 'owned' : 'locked'}" 
                   style="border-color: ${RARITY_COLORS[rarity]}">
                ${sticker.owned > 0 ? `
                  <img src="${sticker.image}" alt="${sticker.name}"
                       onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%22 height=%22100%22 fill=%22${RARITY_COLORS[rarity]}%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2232%22 fill=%22white%22>${sticker.name.charAt(0)}</text></svg>'" />
                  <div class="sticker-name">${sticker.name}</div>
                  ${sticker.owned > 1 ? `<div class="sticker-count">×${sticker.owned}</div>` : ''}
                ` : `
                  <div class="sticker-locked">🔒</div>
                  <div class="sticker-name">${sticker.name}</div>
                `}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;
}

/* =========================
   GAME ROUTING
========================= */
async function handleGameClick(gameName) {
  if (gameName === 'blackjack') {
    // Blackjack doesn't use the hasPlayedToday system
    await playGame(gameName);
  } else if (progression.hasPlayedToday(gameName)) {
    reviewGame(gameName);
  } else {
    await playGame(gameName);
  }
}

async function playGame(gameName) {
  app.innerHTML = `
    <div id="game-container"></div>
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;
  const container = document.getElementById('game-container');

  if (gameName === 'thisOrThat') {
    startThisOrThat(container);
  }

  if (gameName === 'wordle') {
    await startWordle(container);
  }

  if (gameName === 'name-four') {
    startNameFour(container);
  }

  if (gameName === 'sudoku') {
    startSudoku(container);
  }

  if (gameName === 'blackjack') {
    startBlackjack(container);
  }
}

function reviewGame(gameName) {
  app.innerHTML = `
    <div id="game-container"></div>
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;
  const container = document.getElementById('game-container');

  if (gameName === 'thisOrThat') {
    reviewTodayAnswers(container);
  }

  if (gameName === 'wordle') {
    reviewTodayWordle(container);
  }

  if (gameName === 'name-four') {
    reviewNameFour(container);
  }

  if (gameName === 'sudoku') {
    reviewSudoku(container);
  }

  if (gameName === 'blackjack') {
    reviewBlackjack(container);
  }
}

/* =========================
   GLOBAL EXPORTS
========================= */
window.showHome = showHome;
window.showCollection = showCollection;
window.showMysteryBox = showMysteryBox;
window.openBox = openBox;
window.handleGameClick = handleGameClick;

/* =========================
   BOOT
========================= */
showHome();