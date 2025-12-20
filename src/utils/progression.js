// src/utils/progression.js

const REWARDS = [
  {
    level: 1,
    xpRequired: 300,
    type: 'image',
    path: '/rewards/simpsons.png',
    title: 'A Picture of Me',
    description: 'You unlocked your first reward! 💕'
  },
  {
    level: 2,
    xpRequired: 600,
    type: 'image',
    path: '/rewards/lil_madison.png',
    title: 'Me Singing For You',
    description: 'Hope you enjoy this... 🎤😅'
  },
  {
    level: 3,
    xpRequired: 900,
    type: 'text',
    title: 'A Poem Just For You',
    content: `Your poem will go here...
    
Multiple lines work!
You can write something sweet 💕`,
    description: 'A special poem written just for you'
  },
  {
    level: 4,
    xpRequired: 1200,
    type: 'text',
    title: 'Coffee On Me! ☕',
    content: 'This is an IOU for one coffee of your choice - my treat! Redeem anytime 😊',
    description: 'Free coffee whenever you want!'
  },
  {
    level: 5,
    xpRequired: 1500,
    type: 'image',
    path: '/rewards/simpsons.png',
    title: 'Another Picture of Me',
    description: 'Another one for your collection! 📸'
  },
  {
    level: 6,
    xpRequired: 1800,
    type: 'image',
    path: '/rewards/lil_madison.png',
    title: 'Funny Video',
    description: 'Prepare to laugh 😂'
  },
  {
    level: 7,
    xpRequired: 2100,
    type: 'text',
    title: 'Ultimate Embarrassment IOU',
    content: 'I will embarrass myself in ANY way you ask. No limits. You have full control. Use this power wisely... 😰',
    description: 'The ultimate reward - make me do anything!'
  }
];

export class ProgressionSystem {
  constructor() {
    this.load();
  }

  load() {
    const saved = localStorage.getItem('gameProgress');
    if (saved) {
      const data = JSON.parse(saved);
      this.totalXP = data.totalXP || 0;
      this.unlockedRewards = data.unlockedRewards || [];
      this.lastPlayed = data.lastPlayed || {};
    } else {
      this.totalXP = 0;
      this.unlockedRewards = [];
      this.lastPlayed = {};
    }
  }

  save() {
    localStorage.setItem('gameProgress', JSON.stringify({
      totalXP: this.totalXP,
      unlockedRewards: this.unlockedRewards,
      lastPlayed: this.lastPlayed
    }));
  }

  addXP(amount) {
    const oldLevel = this.getCurrentLevel();
    this.totalXP += amount;
    const newLevel = this.getCurrentLevel();
    
    this.save();
    
    // Check if leveled up
    if (newLevel > oldLevel) {
      const newRewards = [];
      for (let i = oldLevel + 1; i <= newLevel; i++) {
        if (!this.unlockedRewards.includes(i)) {
          this.unlockedRewards.push(i);
          newRewards.push(REWARDS[i - 1]);
        }
      }
      return { leveledUp: true, newRewards };
    }
    
    return { leveledUp: false };
  }

  getCurrentLevel() {
    for (let i = REWARDS.length - 1; i >= 0; i--) {
      if (this.totalXP >= REWARDS[i].xpRequired) {
        return REWARDS[i].level;
      }
    }
    return 0;
  }

  getNextReward() {
    const currentLevel = this.getCurrentLevel();
    return REWARDS[currentLevel] || null;
  }

  getXPToNextLevel() {
    const nextReward = this.getNextReward();
    if (!nextReward) return 0;
    return nextReward.xpRequired - this.totalXP;
  }

  getAllRewards() {
    return REWARDS;
  }

  getUnlockedRewards() {
    return REWARDS.filter(r => this.unlockedRewards.includes(r.level));
  }

  hasPlayedToday(gameName) {
    const today = new Date().toDateString();
    return this.lastPlayed[gameName] === today;
  }

  markPlayedToday(gameName) {
    const today = new Date().toDateString();
    this.lastPlayed[gameName] = today;
    this.save();
  }


  getTotalXP() {
    return this.totalXP;
  }
}

export const progression = new ProgressionSystem();