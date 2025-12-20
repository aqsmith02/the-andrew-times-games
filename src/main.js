// src/main.js

import './style.css';
import { startThisOrThat, reviewTodayAnswers } from './games/this-or-that/index.js';
import { startWordle } from './games/wordle-clone/index.js';
import { reviewTodayWordle } from './games/wordle-clone/review.js';
import { startNameFour } from './games/name-four/index.js';
import { reviewNameFour } from './games/name-four/review.js';
import { progression } from './utils/progression.js';

const app = document.getElementById('app');

/* =========================
   HOME SCREEN
========================= */
function showHome() {
  const currentLevel = progression.getCurrentLevel();
  const totalXP = progression.getTotalXP();
  const xpToNext = progression.getXPToNextLevel();
  const nextReward = progression.getNextReward();

  app.innerHTML = `
    <div class="home-screen">
      <header class="app-header">
        <h1>Daily Games ❤️</h1>

        <div class="progress-summary">
          <div class="level-info">
            <span class="level">Level ${currentLevel}</span>
            <span class="xp">${totalXP} XP</span>
          </div>

          ${nextReward ? `
            <div class="next-reward">
              <div class="xp-bar">
                <div class="xp-fill" style="width: ${((totalXP % 300) / 300) * 100}%"></div>
              </div>
              <div class="next-reward-text">
                ${xpToNext} XP to next reward: ${nextReward.title}
              </div>
            </div>
          ` : `
            <div class="max-level">🎉 All rewards unlocked! 🎉</div>
          `}
        </div>
      </header>

      <div class="game-cards">

        <!-- THIS OR THAT -->
        <div class="game-card ${progression.hasPlayedToday('thisOrThat') ? 'completed' : ''}"
             onclick="handleGameClick('thisOrThat')">
          <div class="game-icon">🤔</div>
          <h3>This or That</h3>
          <p>Guess what I would choose</p>
          <div class="game-xp">Up to 100 XP</div>

          ${progression.hasPlayedToday('thisOrThat')
            ? '<div class="completed-badge">✓ Completed – Click to Review</div>'
            : '<div class="play-badge">Play Now</div>'
          }
        </div>

        <!-- WORDLE -->
        <div class="game-card ${progression.hasPlayedToday('wordle') ? 'completed' : ''}"
             onclick="handleGameClick('wordle')">
          <div class="game-icon">📝</div>
          <h3>Wordle</h3>
          <p>Guess the secret word</p>
          <div class="game-xp">100 XP</div>

          ${progression.hasPlayedToday('wordle')
            ? '<div class="completed-badge">✓ Completed – Click to Review</div>'
            : '<div class="play-badge">Play Now</div>'
          }
        </div>

        <!-- NAME FOUR -->
        <div class="game-card ${progression.hasPlayedToday('name-four') ? 'completed' : ''}"
             onclick="handleGameClick('name-four')">
          <div class="game-icon">🔢</div>
          <h3>Name Four</h3>
          <p>Find the four that belong together</p>
          <div class="game-xp">100 XP</div>

          ${progression.hasPlayedToday('name-four')
            ? '<div class="completed-badge">✓ Completed – Click to Review</div>'
            : '<div class="play-badge">Play Now</div>'
          }
        </div>

      </div>

      <button class="rewards-btn" onclick="showRewards()">
        View Rewards & Progress
      </button>
    </div>
  `;
}

/* =========================
   GAME ROUTING
========================= */
function handleGameClick(gameName) {
  if (progression.hasPlayedToday(gameName)) {
    reviewGame(gameName);
  } else {
    playGame(gameName);
  }
}

function playGame(gameName) {
  app.innerHTML = '<div id="game-container"></div>';
  const container = document.getElementById('game-container');

  if (gameName === 'thisOrThat') {
    startThisOrThat(container);
  }

  if (gameName === 'wordle') {
    startWordle(container);
  }

  if (gameName === 'name-four') {
    startNameFour(container);
  }
}

function reviewGame(gameName) {
  app.innerHTML = '<div id="game-container"></div>';
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
}

/* =========================
   REWARDS SCREEN
========================= */
function showRewards() {
  const unlockedRewards = progression.getUnlockedRewards();
  const allRewards = progression.getAllRewards();

  app.innerHTML = `
    <div class="rewards-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Your Rewards</h2>

      <div class="rewards-list">
        ${allRewards.map(reward => {
          const unlocked = unlockedRewards.some(r => r.level === reward.level);

          return `
            <div class="reward-item ${unlocked ? 'unlocked' : 'locked'}">
              <div class="reward-header">
                <span class="reward-level">Level ${reward.level}</span>
                <span class="reward-xp">${reward.xpRequired} XP</span>
              </div>

              ${unlocked ? `
                <h3>${reward.title}</h3>
                <p class="reward-description">${reward.description}</p>

                ${reward.type === 'text' ? `
                  <div class="reward-content">${reward.content}</div>
                ` : reward.type === 'image' ? `
                  <div class="reward-media">
                    <img src="${reward.path}" alt="${reward.title}" />
                  </div>
                ` : reward.type === 'video' ? `
                  <div class="reward-media">
                    <video controls>
                      <source src="${reward.path}" type="video/mp4">
                    </video>
                  </div>
                ` : ''}
              ` : `
                <h3>🔒 Locked</h3>
                <p class="reward-description">Reach Level ${reward.level} to unlock!</p>
              `}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/* =========================
   GLOBAL EXPORTS
========================= */
window.showHome = showHome;
window.showRewards = showRewards;
window.handleGameClick = handleGameClick;

/* =========================
   BOOT
========================= */
showHome();
