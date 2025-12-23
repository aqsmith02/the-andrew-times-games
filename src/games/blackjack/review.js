// src/games/blackjack/review.js

import { loadBlackjackProgress } from './storage.js';

function calculateHandValue(hand) {
  let value = 0;
  let aces = 0;

  for (const card of hand) {
    const cardValue = card.value === 'A' ? 11 : 
                     ['J', 'Q', 'K'].includes(card.value) ? 10 : 
                     parseInt(card.value);
    value += cardValue;
    if (card.value === 'A') aces++;
  }

  while (value > 21 && aces > 0) {
    value -= 10;
    aces--;
  }

  return value;
}

export function reviewBlackjack(container) {
  const saved = loadBlackjackProgress();
  const today = new Date().toDateString();

  if (!saved || saved.date !== today || !saved.gameOver) {
    container.innerHTML = `
      <div class="blackjack-review">
        <div class="header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>Blackjack Review</h2>
        </div>
        <p style="text-align:center;color:#6b7280;margin-top:40px;">
          No completed Blackjack game today.
        </p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;
    return;
  }

  const { playerHand, dealerHand, bet, result } = saved;

  container.innerHTML = `
    <div class="blackjack-review">
      <div class="header">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>Blackjack Review</h2>
      </div>

      <div class="review-result ${result}">
        ${result === 'win' ? '🎉 You Won!' : result === 'lose' ? '😔 You Lost' : '🤝 Push'}
      </div>

      <div class="review-bet">Bet: ${bet} XP</div>

      <div class="review-hands">
        <div class="review-hand">
          <h3>Dealer's Hand (${calculateHandValue(dealerHand)})</h3>
          <div class="hand">
            ${dealerHand.map(card => `
              <div class="card ${['♥', '♦'].includes(card.suit) ? 'red' : 'black'}">
                <div class="card-value">${card.value}</div>
                <div class="card-suit">${card.suit}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="review-hand">
          <h3>Your Hand (${calculateHandValue(playerHand)})</h3>
          <div class="hand">
            ${playerHand.map(card => `
              <div class="card ${['♥', '♦'].includes(card.suit) ? 'red' : 'black'}">
                <div class="card-value">${card.value}</div>
                <div class="card-suit">${card.suit}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;
}