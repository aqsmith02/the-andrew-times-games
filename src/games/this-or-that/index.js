// src/games/this-or-that/index.js

import { getDailyQuestions } from './questions.js';
import { progression } from '../../utils/progression.js';
import './style.css';

export class ThisOrThatGame {
  constructor(container) {
    this.container = container;
    this.questions = getDailyQuestions();
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.answers = [];
    this.isComplete = false;
    
    this.loadProgress();
    this.render();
  }

  loadProgress() {
    const today = new Date().toDateString();
    const saved = localStorage.getItem('thisOrThat_progress');
    
    if (saved) {
      const data = JSON.parse(saved);
      if (data.date === today) {
        // Restore progress from today
        this.score = data.score || 0;
        this.answers = data.answers || [];
        this.currentQuestionIndex = this.answers.length;
        this.isComplete = data.complete || false;
        return true;
      }
    }
    return false;
  }

  saveProgress(complete = false) {
    const today = new Date().toDateString();
    localStorage.setItem('thisOrThat_progress', JSON.stringify({
      date: today,
      complete: complete || this.isComplete,
      score: this.score,
      answers: this.answers,
      currentQuestionIndex: this.currentQuestionIndex
    }));
  }

  handleAnswer(choice) {
    const question = this.questions[this.currentQuestionIndex];
    const correct = choice === question.answer;
    
    this.answers.push({
      question,
      userChoice: choice,
      correct
    });
    
    if (correct) {
      this.score += 20;
    }

    // Save progress after each answer
    this.saveProgress(false);

    // Show result briefly
    this.showResult(correct, question);
    
    setTimeout(() => {
      this.currentQuestionIndex++;
      
      if (this.currentQuestionIndex >= this.questions.length) {
        this.completeGame();
      } else {
        this.render();
      }
    }, 1500);
  }

  showResult(correct, question) {
    const container = this.container.querySelector('.game-content');
    const correctAnswer = question.answer === 'A' ? question.optionA : question.optionB;
    
    container.innerHTML = `
      <div class="result-screen ${correct ? 'correct' : 'incorrect'}">
        <div class="result-icon">${correct ? '✓' : '✗'}</div>
        <div class="result-text">
          ${correct ? 'Correct!' : 'Not quite!'}
        </div>
        <div class="correct-answer">
          I would choose: <strong>${correctAnswer}</strong>
        </div>
        <div class="xp-earned">+${correct ? 20 : 0} XP</div>
      </div>
    `;
  }

  completeGame() {
    this.isComplete = true;
    this.saveProgress(true);
    
    // Add XP to progression system
    const result = progression.addXP(this.score);
    progression.markPlayedToday('thisOrThat');
    
    this.showCompletionScreen(result);
  }

  showCompletionScreen(result) {
    const percentage = (this.score / 100) * 100;
    
    let content = `
      <div class="completion-screen">
        <h2>Today's Results</h2>
        <div class="final-score">${this.score} / 100 XP</div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${percentage}%"></div>
        </div>
        <div class="summary">
          You got ${this.answers.filter(a => a.correct).length} out of ${this.questions.length} correct!
        </div>
    `;

    if (result.leveledUp && result.newRewards.length > 0) {
      content += `
        <div class="level-up">
          <div class="level-up-banner">🎉 LEVEL UP! 🎉</div>
          ${result.newRewards.map(reward => `
            <div class="new-reward">
              <strong>${reward.title}</strong>
              <p>${reward.description}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    content += `
        <div class="total-progress">
          Total XP: ${progression.getTotalXP()} 
          <span class="level-badge">Level ${progression.getCurrentLevel()}</span>
        </div>
        <button class="review-btn" onclick="reviewThisOrThat()">
          Review Answers
        </button>
      </div>
    `;

    this.container.querySelector('.game-content').innerHTML = content;
  }

  showReview() {
    const content = `
      <div class="review-screen">
        <h2>Answer Review</h2>
        <div class="review-list">
          ${this.answers.map((a, i) => `
            <div class="review-item ${a.correct ? 'correct' : 'incorrect'}">
              <div class="review-number">Question ${i + 1}</div>
              <div class="review-question">
                <span class="choice ${a.userChoice === 'A' ? 'selected' : ''}">${a.question.optionA}</span>
                <span class="vs">or</span>
                <span class="choice ${a.userChoice === 'B' ? 'selected' : ''}">${a.question.optionB}</span>
              </div>
              <div class="review-result">
                ${a.correct ? '✓ Correct!' : `✗ I chose: ${a.question.answer === 'A' ? a.question.optionA : a.question.optionB}`}
              </div>
            </div>
          `).join('')}
        </div>
        <button class="home-btn" onclick="showHome()">Back to Home</button>
      </div>
    `;

    this.container.querySelector('.game-content').innerHTML = content;
  }

  render() {
    if (this.isComplete) {
      this.showCompletionScreen({ leveledUp: false });
      return;
    }

    const question = this.questions[this.currentQuestionIndex];
    
    this.container.innerHTML = `
      <div class="this-or-that-game">
        <div class="game-header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>This or That</h2>
          <div class="progress-indicator">
            Question ${this.currentQuestionIndex + 1} / ${this.questions.length}
          </div>
        </div>
        
        <div class="game-content">
          <div class="question-prompt">Which would I choose?</div>
          
          <div class="choices">
            <button class="choice-btn choice-a" onclick="thisOrThat.handleAnswer('A')">
              ${question.optionA}
            </button>
            
            <div class="or-divider">OR</div>
            
            <button class="choice-btn choice-b" onclick="thisOrThat.handleAnswer('B')">
              ${question.optionB}
            </button>
          </div>
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;
  }
}

// Make it accessible globally for onclick handlers
window.thisOrThat = null;

export function startThisOrThat(container) {
  window.thisOrThat = new ThisOrThatGame(container);
}

// Function to review today's answers from anywhere
export function reviewTodayAnswers(container) {
  const today = new Date().toDateString();
  const saved = localStorage.getItem('thisOrThat_progress');
  
  if (!saved) {
    container.innerHTML = `
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align: center; color: #666;">Play today's This or That game first!</p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;
    return;
  }

  const data = JSON.parse(saved);
  if (data.date !== today || !data.complete) {
    const answeredCount = data.answers?.length || 0;
    container.innerHTML = `
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>${answeredCount > 0 ? 'In Progress' : 'No Results Yet'}</h2>
        <p style="text-align: center; color: #666;">
          ${answeredCount > 0 
            ? `You've answered ${answeredCount} of 5 questions. Complete the game to review all answers!` 
            : 'Complete today\'s This or That game first!'}
        </p>
        ${answeredCount > 0 ? `
          <button class="continue-btn" onclick="startThisOrThatFromMenu()">
            Continue Game
          </button>
        ` : ''}
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;
    return;
  }

  const content = `
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Today's This or That Review</h2>
      <div class="review-score">Score: ${data.score} / 100 XP</div>
      <div class="review-list">
        ${data.answers.map((a, i) => `
          <div class="review-item ${a.correct ? 'correct' : 'incorrect'}">
            <div class="review-number">Question ${i + 1}</div>
            <div class="review-question">
              <span class="choice ${a.userChoice === 'A' ? 'selected' : ''}">${a.question.optionA}</span>
              <span class="vs">or</span>
              <span class="choice ${a.userChoice === 'B' ? 'selected' : ''}">${a.question.optionB}</span>
            </div>
            <div class="review-result">
              ${a.correct ? '✓ Correct!' : `✗ I chose: ${a.question.answer === 'A' ? a.question.optionA : a.question.optionB}`}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;

  container.innerHTML = content;
}

// Global function to trigger review
window.reviewThisOrThat = function() {
  const container = document.getElementById('app');
  reviewTodayAnswers(container);
};

// Helper function to start game from menu
window.startThisOrThatFromMenu = function() {
  const container = document.getElementById('app');
  startThisOrThat(container);
};