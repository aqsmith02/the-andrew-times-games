// src/games/this-or-that/questions.js

export const QUESTIONS = [
  { id: 1, optionA: "Methodical", optionB: "Rowan", answer: "B" },
  { id: 2, optionA: "Clash Royale", optionB: "Overwatch", answer: "B" },
  { id: 3, optionA: "Pocket 8s", optionB: "Ace 9 Suited", answer: "A" },
  { id: 4, optionA: "Apple Bold Rock", optionB: "Mimosa Bold Rock", answer: "A" },
  { id: 5, optionA: "Dr Pepper", optionB: "Coke", answer: "B" },
  { id: 6, optionA: "Krusty", optionB: "Ned", answer: "B" },
  { id: 7, optionA: "Robots", optionB: "Hoodwinked", answer: "A" },
  { id: 8, optionA: "WW2", optionB: "Vietnam", answer: "B" },
  { id: 9, optionA: "Oil", optionB: "Acrylic", answer: "A" },
  { id: 10, optionA: "Pearl Jam", optionB: "Alice in Chains", answer: "A" },
  { id: 11, optionA: "Sophomore Year HS", optionB: "Sophomore Year College", answer: "A" },
  { id: 12, optionA: "Calculus", optionB: "Statistics", answer: "A" },
  { id: 13, optionA: "George Bush", optionB: "Bill Clinton", answer: "A" },
  { id: 14, optionA: "Quiche", optionB: "Roast", answer: "A" },
  { id: 15, optionA: "Japan", optionB: "Greece", answer: "A" },
  { id: 16, optionA: "100 Spiders", optionB: "20 Squirrels", answer: "A" },
  { id: 17, optionA: "Unlimited Games & Bacon", optionB: "No Games", answer: "A" },
  { id: 18, optionA: "Minecraft Cottage", optionB: "Minecraft Castle", answer: "A" },
  { id: 19, optionA: "Lead Out Bluff", optionB: "Re-raise Bluff", answer: "B" },
  { id: 20, optionA: "Checkerboard Flooring", optionB: "Carpet", answer: "A" },
  { id: 21, optionA: "Sci-Fi", optionB: "Westerns", answer: "A" },
  { id: 22, optionA: "Sunny", optionB: "Partly Cloudy", answer: "B" },
  { id: 23, optionA: "Spring", optionB: "Summer", answer: "A" },
  { id: 24, optionA: "Big Black Puffer", optionB: "Fake Leather", answer: "A" },
  { id: 25, optionA: "Whole Number", optionB: "Decimal Numbers", answer: "B" },
  { id: 26, optionA: "Butt Rash", optionB: "Cuts", answer: "B" },
  { id: 27, optionA: "Queen", optionB: "Michael Jackson", answer: "B" },
  { id: 28, optionA: "Peak Scythe", optionB: "Peak Poker", answer: "A" },
  { id: 29, optionA: "Bench Press", optionB: "Deadlift", answer: "A" },
  { id: 30, optionA: "Chicken Pot Pie", optionB: "Hamburger", answer: "A" },
  { id: 31, optionA: "Cadbury Egg", optionB: "Chocolate Chip Cookie", answer: "B" },
  { id: 32, optionA: "Fame", optionB: "Money", answer: "B" },
  { id: 33, optionA: "Matcha", optionB: "Iced Americano", answer: "B" },
  { id: 34, optionA: "Mimi", optionB: "Nana", answer: "B" },
  { id: 35, optionA: "Leather", optionB: "Velvet", answer: "A" }
];

// Get 5 random questions for the day (seeded by date to be consistent)
export function getDailyQuestions() {
  const today = new Date().toDateString();
  const saved = localStorage.getItem('thisOrThat_daily');
  
  if (saved) {
    const data = JSON.parse(saved);
    if (data.date === today) {
      return data.questions;
    }
  }
  
  // Generate new daily questions
  const seenQuestions = getSeenQuestions();
  let availableQuestions = QUESTIONS.filter(q => !seenQuestions.includes(q.id));
  
  // If we've seen all questions, reset
  if (availableQuestions.length < 5) {
    resetSeenQuestions();
    availableQuestions = [...QUESTIONS];
  }
  
  // Shuffle and pick 5
  const shuffled = availableQuestions.sort(() => Math.random() - 0.5);
  const dailyQuestions = shuffled.slice(0, 5);
  
  // Mark these as seen
  markQuestionsAsSeen(dailyQuestions.map(q => q.id));
  
  // Save for today
  localStorage.setItem('thisOrThat_daily', JSON.stringify({
    date: today,
    questions: dailyQuestions
  }));
  
  return dailyQuestions;
}

function getSeenQuestions() {
  const saved = localStorage.getItem('thisOrThat_seen');
  return saved ? JSON.parse(saved) : [];
}

function markQuestionsAsSeen(questionIds) {
  const seen = getSeenQuestions();
  const updated = [...new Set([...seen, ...questionIds])];
  localStorage.setItem('thisOrThat_seen', JSON.stringify(updated));
}

function resetSeenQuestions() {
  localStorage.setItem('thisOrThat_seen', JSON.stringify([]));
}