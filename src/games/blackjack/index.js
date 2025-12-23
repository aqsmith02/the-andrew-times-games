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

function isBlackjack(hand) {
  return hand.length === 2 && calculateHandValue(hand) === 21;
}

function canSplit(hand) {
  return hand.length === 2 && getCardValue(hand[0]) === getCardValue(hand[1]);
}

export function startBlackjack(container) {
  const today = new Date().toDateString();
  let saved = loadBlackjackProgress();

  let gameState = {
    deck: [],
    playerHands: [[]],  // Array of hands for splitting
    dealerHand: [],
    bets: [0],  // Array of bets (one per hand)
    gameOver: false,
    result: null,
    playerBlackjack: false,
    currentHandIndex: 0,
    hasDoubledDown: [false],
    hasSplit: false,
    date: today
  };

  if (saved && saved.date === today && !saved.gameOver) {
    gameState = saved;
  }

  function render() {
    const currentXP = progression.getTotalXP();
    const canBet = currentXP >= 5;
    const inProgress = gameState.bets[0] > 0;
    const isGameOver = gameState.gameOver;
    const currentHand = gameState.playerHands[gameState.currentHandIndex];
    const currentBet = gameState.bets[gameState.currentHandIndex];
    const isCurrentHandActive = !isGameOver && gameState.currentHandIndex < gameState.playerHands.length;

    const canDouble = isCurrentHandActive && currentHand.length === 2 && currentXP >= currentBet;
    const canSplitHand = isCurrentHandActive && canSplit(currentHand) && currentXP >= currentBet && gameState.playerHands.length < 4;

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
              <span class="bet-label">Total Bet:</span>
              <span class="bet-amount">${gameState.bets.reduce((sum, bet) => sum + bet, 0)} XP</span>
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

            ${gameState.playerHands.map((hand, handIdx) => `
              <div class="player-section ${handIdx === gameState.currentHandIndex && !isGameOver ? 'active-hand' : ''}">
                <h3>
                  ${gameState.playerHands.length > 1 ? `Hand ${handIdx + 1} ` : 'Your Hand '}
                  (${calculateHandValue(hand)})
                  ${gameState.bets.length > 1 ? ` - Bet: ${gameState.bets[handIdx]} XP` : ''}
                </h3>
                <div class="hand">
                  ${hand.map(card => `
                    <div class="card ${['♥', '♦'].includes(card.suit) ? 'red' : 'black'}">
                      <div class="card-value">${card.value}</div>
                      <div class="card-suit">${card.suit}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}

            ${!isGameOver ? `
              <div class="game-actions">
                <button class="action-btn hit-btn" onclick="window.hit()">
                  Hit
                </button>
                <button class="action-btn stand-btn" onclick="window.stand()">
                  Stand
                </button>
                ${canDouble ? `
                  <button class="action-btn double-btn" onclick="window.doubleDown()">
                    Double Down
                  </button>
                ` : ''}
                ${canSplitHand ? `
                  <button class="action-btn split-btn" onclick="window.split()">
                    Split
                  </button>
                ` : ''}
              </div>
            ` : `
              <div class="game-result-container">
                ${gameState.playerHands.map((hand, handIdx) => {
                  const handResult = gameState.result[handIdx];
                  const handBet = gameState.bets[handIdx];
                  return `
                    <div class="game-result ${handResult}">
                      ${gameState.playerHands.length > 1 ? `<h4>Hand ${handIdx + 1}</h4>` : ''}
                      ${handResult === 'win' ? `
                        <div class="result-icon">${gameState.playerBlackjack && handIdx === 0 ? '🎰' : '🎉'}</div>
                        <h3>${gameState.playerBlackjack && handIdx === 0 ? 'BLACKJACK!' : 'You Win!'}</h3>
                        <p>Won ${Math.floor(handBet * (gameState.playerBlackjack && handIdx === 0 ? 1.5 : 1))} XP!${gameState.playerBlackjack && handIdx === 0 ? ' (Blackjack Bonus!)' : ''}</p>
                      ` : handResult === 'lose' ? `
                        <div class="result-icon">😔</div>
                        <h3>You Lose</h3>
                        <p>Lost ${handBet} XP</p>
                      ` : `
                        <div class="result-icon">🤝</div>
                        <h3>Push!</h3>
                        <p>Bet returned: ${handBet} XP</p>
                      `}
                    </div>
                  `;
                }).join('')}
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

    // Deduct bet directly without triggering level-up logic
    progression.subtractXP(betAmount);

    gameState = {
      deck: createDeck(),
      playerHands: [[]],
      dealerHand: [],
      bets: [betAmount],
      gameOver: false,
      result: null,
      playerBlackjack: false,
      currentHandIndex: 0,
      hasDoubledDown: [false],
      hasSplit: false,
      date: today
    };

    // Deal initial cards
    gameState.playerHands[0].push(gameState.deck.pop());
    gameState.dealerHand.push(gameState.deck.pop());
    gameState.playerHands[0].push(gameState.deck.pop());
    gameState.dealerHand.push(gameState.deck.pop());

    // Check for blackjack
    if (isBlackjack(gameState.playerHands[0])) {
      gameState.playerBlackjack = true;
      
      // Check if dealer also has blackjack (push)
      if (isBlackjack(gameState.dealerHand)) {
        endGame(['push']);
      } else {
        endGame(['win']);
      }
      return;
    }

    saveBlackjackProgress(gameState);
    render();
  }

  function hit() {
    if (gameState.gameOver) return;

    const handIdx = gameState.currentHandIndex;
    gameState.playerHands[handIdx].push(gameState.deck.pop());
    const handValue = calculateHandValue(gameState.playerHands[handIdx]);

    if (handValue > 21) {
      // Bust - move to next hand or end game
      moveToNextHand();
    } else if (handValue === 21 || gameState.hasDoubledDown[handIdx]) {
      // Auto-stand on 21 or after double down
      moveToNextHand();
    } else {
      saveBlackjackProgress(gameState);
      render();
    }
  }

  function stand() {
    if (gameState.gameOver) return;
    moveToNextHand();
  }

  function doubleDown() {
    if (gameState.gameOver) return;
    
    const handIdx = gameState.currentHandIndex;
    const currentBet = gameState.bets[handIdx];
    const currentXP = progression.getTotalXP();

    if (currentXP < currentBet) {
      alert('Insufficient XP to double down');
      return;
    }

    if (gameState.playerHands[handIdx].length !== 2) {
      alert('Can only double down on first two cards');
      return;
    }

    // Deduct additional bet
    progression.subtractXP(currentBet);
    gameState.bets[handIdx] *= 2;
    gameState.hasDoubledDown[handIdx] = true;

    // Deal one more card and automatically stand
    gameState.playerHands[handIdx].push(gameState.deck.pop());
    
    moveToNextHand();
  }

  function split() {
    if (gameState.gameOver) return;

    const handIdx = gameState.currentHandIndex;
    const currentBet = gameState.bets[handIdx];
    const currentXP = progression.getTotalXP();

    if (currentXP < currentBet) {
      alert('Insufficient XP to split');
      return;
    }

    if (!canSplit(gameState.playerHands[handIdx])) {
      alert('Can only split pairs');
      return;
    }

    if (gameState.playerHands.length >= 4) {
      alert('Maximum 4 hands allowed');
      return;
    }

    // Deduct additional bet
    progression.subtractXP(currentBet);
    gameState.hasSplit = true;

    // Split the hand
    const card1 = gameState.playerHands[handIdx][0];
    const card2 = gameState.playerHands[handIdx][1];

    gameState.playerHands[handIdx] = [card1];
    gameState.playerHands.splice(handIdx + 1, 0, [card2]);
    gameState.bets.splice(handIdx + 1, 0, currentBet);
    gameState.hasDoubledDown.splice(handIdx + 1, 0, false);

    // Deal one card to each new hand
    gameState.playerHands[handIdx].push(gameState.deck.pop());
    gameState.playerHands[handIdx + 1].push(gameState.deck.pop());

    saveBlackjackProgress(gameState);
    render();
  }

  function moveToNextHand() {
    gameState.currentHandIndex++;
    
    if (gameState.currentHandIndex >= gameState.playerHands.length) {
      // All hands played, now dealer plays
      playDealer();
    } else {
      saveBlackjackProgress(gameState);
      render();
    }
  }

  function playDealer() {
    // Dealer draws until 17 or higher
    while (calculateHandValue(gameState.dealerHand) < 17) {
      gameState.dealerHand.push(gameState.deck.pop());
    }

    const dealerValue = calculateHandValue(gameState.dealerHand);
    const results = [];

    // Determine result for each hand
    for (let i = 0; i < gameState.playerHands.length; i++) {
      const playerValue = calculateHandValue(gameState.playerHands[i]);
      
      if (playerValue > 21) {
        results.push('lose');
      } else if (dealerValue > 21 || playerValue > dealerValue) {
        results.push('win');
      } else if (playerValue < dealerValue) {
        results.push('lose');
      } else {
        results.push('push');
      }
    }

    endGame(results);
  }

  function endGame(results) {
    gameState.gameOver = true;
    gameState.result = results;

    // Process payouts for each hand
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      const bet = gameState.bets[i];

      if (result === 'win') {
        const isBlackjackHand = i === 0 && gameState.playerBlackjack;
        const payout = isBlackjackHand 
          ? Math.floor(bet * 2.5)  // 2.5x total for blackjack
          : bet * 2;                // 2x total for regular win
        
        progression.addXP(payout);
      } else if (result === 'push') {
        // Return the bet without triggering level-up logic
        progression.subtractXP(-bet);
      }
      // If lose, XP was already deducted so do nothing
    }

    saveBlackjackProgress(gameState);
    render();
  }

  function playAgain() {
    gameState = {
      deck: [],
      playerHands: [[]],
      dealerHand: [],
      bets: [0],
      gameOver: false,
      result: null,
      playerBlackjack: false,
      currentHandIndex: 0,
      hasDoubledDown: [false],
      hasSplit: false,
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
  window.doubleDown = doubleDown;
  window.split = split;
  window.playAgain = playAgain;

  render();
}