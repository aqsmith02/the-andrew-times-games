// src/games/blackjack/index.js

import './style.css';
import { saveBlackjackProgress, loadBlackjackProgress } from './storage.js';
import { progression } from '../../utils/progression.js';

const SUITS = ['♠', '♥', '♦', '♣'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function createDeck() {
  const deck = [];
  for (const suit of SUITS) {
    for (const value of VALUES) {
      deck.push({ value, suit });
    }
  }
  return shuffle(deck);
}

function shuffle(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getCardValue(card) {
  if (card.value === 'A') return 11;
  if (['J', 'Q', 'K'].includes(card.value)) return 10;
  return parseInt(card.value);
}

function calculateHandValue(hand) {
  let value = 0;
  let aces = 0;

  for (const card of hand) {
    const cardValue = getCardValue(card);
    value += cardValue;
    if (card.value === 'A') aces++;
  }

  // Adjust for aces
  while (value > 21 && aces > 0) {
    value -= 10;
    aces--;
  }

  return value;
}

export function startBlackjack(container) {
  const today = new Date().toDateString();
  let saved = loadBlackjackProgress();

  let gameState = {
    deck: [],
    playerHand: [],
    dealerHand: [],
    bet: 0,
    gameOver: false,
    result: null,
    playerStanding: false,
    date: today
  };

  if (saved && saved.date === today && !saved.gameOver) {
    gameState = saved;
  }

  function render() {
    const currentXP = progression.getTotalXP();
    const canBet = currentXP >= 5;
    const inProgress = gameState.bet > 0;
    const isGameOver = gameState.gameOver;

    container.innerHTML = `
      <div class="blackjack">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>Blackjack</h2>

        <div class="xp-display">
          <span class="xp-label">Your XP:</span>
          <span class="xp-value">${currentXP}</span>
        </div>

        ${!inProgress ? `
          <div class="betting-screen">
            <h3>Place Your Bet</h3>
            <p class="bet-description">Bet XP to play. Win double your bet!</p>
            
            ${!canBet ? `
              <div class="insufficient-xp">
                <p>⚠️ You need at least 5 XP to play</p>
                <p>Complete other games to earn XP!</p>
              </div>
            ` : `
              <div class="bet-buttons">
                <button class="bet-btn" onclick="window.placeBet(5)" ${currentXP < 5 ? 'disabled' : ''}>
                  Bet 5 XP
                </button>
                <button class="bet-btn" onclick="window.placeBet(10)" ${currentXP < 10 ? 'disabled' : ''}>
                  Bet 10 XP
                </button>
                <button class="bet-btn" onclick="window.placeBet(25)" ${currentXP < 25 ? 'disabled' : ''}>
                  Bet 25 XP
                </button>
                <button class="bet-btn" onclick="window.placeBet(50)" ${currentXP < 50 ? 'disabled' : ''}>
                  Bet 50 XP
                </button>
              </div>

              <div class="custom-bet">
                <label for="customBetInput">Custom Bet (5-50):</label>
                <input 
                  type="number" 
                  id="customBetInput" 
                  min="5" 
                  max="${Math.min(50, currentXP)}" 
                  value="5"
                />
                <button class="bet-btn primary" onclick="window.placeCustomBet()">
                  Place Bet
                </button>
              </div>
            `}
          </div>
        ` : `
          <div class="game-screen">
            <div class="bet-info">
              <span class="bet-label">Current Bet:</span>
              <span class="bet-amount">${gameState.bet} XP</span>
            </div>

            <div class="dealer-section">
              <h3>Dealer's Hand ${!isGameOver ? `(${calculateHandValue([gameState.dealerHand[0]])})` : `(${calculateHandValue(gameState.dealerHand)})`}</h3>
              <div class="hand">
                ${gameState.dealerHand.map((card, idx) => `
                  <div class="card ${['♥', '♦'].includes(card.suit) ? 'red' : 'black'} ${!isGameOver && idx === 1 ? 'hidden' : ''}">
                    ${!isGameOver && idx === 1 ? `
                      <div class="card-back">🂠</div>
                    ` : `
                      <div class="card-value">${card.value}</div>
                      <div class="card-suit">${card.suit}</div>
                    `}
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="player-section">
              <h3>Your Hand (${calculateHandValue(gameState.playerHand)})</h3>
              <div class="hand">
                ${gameState.playerHand.map(card => `
                  <div class="card ${['♥', '♦'].includes(card.suit) ? 'red' : 'black'}">
                    <div class="card-value">${card.value}</div>
                    <div class="card-suit">${card.suit}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            ${!isGameOver ? `
              <div class="game-actions">
                <button class="action-btn hit-btn" onclick="window.hit()">
                  Hit
                </button>
                <button class="action-btn stand-btn" onclick="window.stand()">
                  Stand
                </button>
              </div>
            ` : `
              <div class="game-result ${gameState.result}">
                ${gameState.result === 'win' ? `
                  <div class="result-icon">🎉</div>
                  <h3>You Win!</h3>
                  <p>You won ${gameState.bet} XP!</p>
                ` : gameState.result === 'lose' ? `
                  <div class="result-icon">😔</div>
                  <h3>You Lose</h3>
                  <p>You lost ${gameState.bet} XP</p>
                ` : `
                  <div class="result-icon">🤝</div>
                  <h3>Push!</h3>
                  <p>Your bet of ${gameState.bet} XP has been returned</p>
                `}
                <button class="action-btn primary" onclick="window.playAgain()">
                  Play Again
                </button>
              </div>
            `}
          </div>
        `}
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;
  }

  function startGame(betAmount) {
    const currentXP = progression.getTotalXP();
    
    if (betAmount < 5 || betAmount > 50) {
      alert('Bet must be between 5 and 50 XP');
      return;
    }

    if (betAmount > currentXP) {
      alert('Insufficient XP for this bet');
      return;
    }

    // Deduct bet from XP
    progression.addXP(-betAmount);

    gameState = {
      deck: createDeck(),
      playerHand: [],
      dealerHand: [],
      bet: betAmount,
      gameOver: false,
      result: null,
      playerStanding: false,
      date: today
    };

    // Deal initial cards
    gameState.playerHand.push(gameState.deck.pop());
    gameState.dealerHand.push(gameState.deck.pop());
    gameState.playerHand.push(gameState.deck.pop());
    gameState.dealerHand.push(gameState.deck.pop());

    // Check for blackjack
    if (calculateHandValue(gameState.playerHand) === 21) {
      endGame('win');
      return;
    }

    saveBlackjackProgress(gameState);
    render();
  }

  function hit() {
    if (gameState.gameOver) return;

    gameState.playerHand.push(gameState.deck.pop());
    const playerValue = calculateHandValue(gameState.playerHand);

    if (playerValue > 21) {
      endGame('lose');
    } else if (playerValue === 21) {
      stand();
    } else {
      saveBlackjackProgress(gameState);
      render();
    }
  }

  function stand() {
    if (gameState.gameOver) return;

    gameState.playerStanding = true;

    // Dealer draws until 17 or higher
    while (calculateHandValue(gameState.dealerHand) < 17) {
      gameState.dealerHand.push(gameState.deck.pop());
    }

    const playerValue = calculateHandValue(gameState.playerHand);
    const dealerValue = calculateHandValue(gameState.dealerHand);

    if (dealerValue > 21 || playerValue > dealerValue) {
      endGame('win');
    } else if (playerValue < dealerValue) {
      endGame('lose');
    } else {
      endGame('push');
    }
  }

  function endGame(result) {
    gameState.gameOver = true;
    gameState.result = result;

    if (result === 'win') {
      progression.addXP(gameState.bet * 2);
    } else if (result === 'push') {
      progression.addXP(gameState.bet);
    }

    saveBlackjackProgress(gameState);
    render();
  }

  function playAgain() {
    gameState = {
      deck: [],
      playerHand: [],
      dealerHand: [],
      bet: 0,
      gameOver: false,
      result: null,
      playerStanding: false,
      date: today
    };
    saveBlackjackProgress(gameState);
    render();
  }

  // Global functions
  window.placeBet = (amount) => startGame(amount);
  window.placeCustomBet = () => {
    const input = document.getElementById('customBetInput');
    const amount = parseInt(input.value);
    startGame(amount);
  };
  window.hit = hit;
  window.stand = stand;
  window.playAgain = playAgain;

  render();
}