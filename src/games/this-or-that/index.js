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
    this.isComplete = this.loadProgress();
    
    this.render();
  }

  loadProgress() {
    const today = new Date().toDateString();
    const saved = localStorage.getItem('thisOrThat_progress');
    
    if (saved) {
      const data = JSON.parse(saved);
      if (data.date === today && data.complete) {
        this.score = data.score;
        this.answers = data.answers;
        return true;
      }
    }
    return false;
  }

  saveProgress() {
    const today = new Date().toDateString();
    localStorage.setItem('thisOrThat_progress', JSON.stringify({
      date: today,
      complete: this.isComplete,
      score: this.score,
      answers: this.answers
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
    this.saveProgress();
    
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
        <button class="review-btn" onclick="thisOrThat.showReview()">
          Review Answers
        </button>
        <button class="home-btn" onclick="showHome()">
          Back to Home
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
    `;
  }
}

// Make it accessible globally for onclick handlers
window.thisOrThat = null;

export function startThisOrThat(container) {
  window.thisOrThat = new ThisOrThatGame(container);
}