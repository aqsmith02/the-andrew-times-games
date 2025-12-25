(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Y=[{id:1,optionA:"Methodical Coffee",optionB:"Rowan Coffee",answer:"B"},{id:2,optionA:"Clash Royale",optionB:"Overwatch",answer:"A"},{id:4,optionA:"Apple Bold Rock",optionB:"Mimosa Bold Rock",answer:"A"},{id:5,optionA:"Dr Pepper",optionB:"Coke",answer:"B"},{id:6,optionA:"Krusty",optionB:"Ned",answer:"B"},{id:7,optionA:"Robots",optionB:"Hoodwinked",answer:"A"},{id:8,optionA:"WW2",optionB:"Vietnam",answer:"B"},{id:9,optionA:"Oil",optionB:"Acrylic",answer:"A"},{id:10,optionA:"Pearl Jam",optionB:"Alice in Chains",answer:"A"},{id:11,optionA:"Sophomore Year High School",optionB:"Sophomore Year College",answer:"A"},{id:12,optionA:"Calculus",optionB:"Statistics",answer:"A"},{id:13,optionA:"George Bush",optionB:"Bill Clinton",answer:"A"},{id:14,optionA:"Quiche",optionB:"Roast",answer:"A"},{id:15,optionA:"Japan",optionB:"Greece",answer:"A"},{id:16,optionA:"100 Spiders",optionB:"20 Squirrels",answer:"A"},{id:17,optionA:"Unlimited Games & Bacon",optionB:"No Games",answer:"A"},{id:18,optionA:"Minecraft Cottage",optionB:"Minecraft Castle",answer:"A"},{id:20,optionA:"Checkerboard Flooring",optionB:"Carpet",answer:"A"},{id:21,optionA:"Sci-Fi",optionB:"Westerns",answer:"A"},{id:22,optionA:"Sunny",optionB:"Partly Cloudy",answer:"B"},{id:23,optionA:"Spring",optionB:"Summer",answer:"A"},{id:24,optionA:"Big Black Puffer",optionB:"Fake Leather",answer:"A"},{id:25,optionA:"Whole Number",optionB:"Decimal Numbers",answer:"B"},{id:26,optionA:"Butt Rash",optionB:"Butt Cuts",answer:"B"},{id:27,optionA:"Queen",optionB:"Michael Jackson",answer:"B"},{id:28,optionA:"Peak Scythe",optionB:"Peak Poker",answer:"A"},{id:29,optionA:"Bench Press",optionB:"Deadlift",answer:"A"},{id:30,optionA:"Chicken Pot Pie",optionB:"Hamburger",answer:"A"},{id:31,optionA:"Cadbury Egg",optionB:"Chocolate Chip Cookie",answer:"B"},{id:32,optionA:"Fame",optionB:"Money",answer:"B"},{id:33,optionA:"Matcha",optionB:"Iced Americano",answer:"B"},{id:35,optionA:"Leather",optionB:"Velvet",answer:"A"},{id:36,optionA:"Morning Person",optionB:"Night Owl",answer:"B"},{id:37,optionA:"Beach Vacation",optionB:"Snowy Mountains",answer:"A"},{id:38,optionA:"Pizza",optionB:"Tacos",answer:"A"},{id:39,optionA:"Voice Messages",optionB:"Calling",answer:"B"},{id:40,optionA:"Biking",optionB:"Swimming",answer:"B"},{id:41,optionA:"Sweet",optionB:"Savory",answer:"A"},{id:42,optionA:"Stubbed Toe",optionB:"Pinched Finger",answer:"B"},{id:43,optionA:"Mixed Drink",optionB:"Shots",answer:"A"},{id:44,optionA:"Disney",optionB:"Universal",answer:"B"},{id:45,optionA:"In Rainbows",optionB:"Kid A",answer:"B"},{id:46,optionA:"Family Guy",optionB:"Rick and Morty",answer:"A"},{id:47,optionA:"Cruise",optionB:"Train",answer:"B"},{id:48,optionA:"Board Games",optionB:"Video Games",answer:"A"},{id:49,optionA:"Sabrina Carpenter",optionB:"Billie Eilish",answer:"A"},{id:50,optionA:"Wutang Clan",optionB:"A Tribe Called Quest",answer:"A"},{id:51,optionA:"Rainy Days",optionB:"Snowy Days",answer:"B"},{id:52,optionA:"Pancakes",optionB:"Waffles",answer:"B"},{id:53,optionA:"Chocolate",optionB:"Vanilla",answer:"A"},{id:54,optionA:"Instagram Reels",optionB:"Youtube Shorts",answer:"B"},{id:56,optionA:"Stanley Kubrick",optionB:"Francis Ford Coppola",answer:"B"},{id:57,optionA:"Ryan Gosling",optionB:"Harrison Ford",answer:"A"},{id:58,optionA:"Bowling",optionB:"Mini Golf",answer:"A"},{id:59,optionA:"Physical Books",optionB:"Audiobooks",answer:"B"},{id:60,optionA:"Southern Food",optionB:"Mexican Food",answer:"A"},{id:61,optionA:"Fried Eggs",optionB:"Scrambled Eggs",answer:"B"},{id:62,optionA:"Driving Leisurely",optionB:"Speeding",answer:"A"},{id:63,optionA:"Gold Jewelry",optionB:"Silver Jewelry",answer:"A"},{id:64,optionA:"Tom Brady",optionB:"Lebron James",answer:"A"},{id:65,optionA:"Connecticut",optionB:"Oregon",answer:"A"},{id:66,optionA:"Window Seat",optionB:"Aisle Seat",answer:"B"},{id:67,optionA:"Light Roast",optionB:"Medium Roast",answer:"A"},{id:68,optionA:"Monopoly",optionB:"Sequence",answer:"B"},{id:69,optionA:"Painting",optionB:"Sketching",answer:"A"},{id:70,optionA:"Einstein",optionB:"Newton",answer:"B"},{id:71,optionA:"Burritos",optionB:"Bowls",answer:"B"},{id:72,optionA:"Walton Goggins",optionB:"Christoph Waltz",answer:"B"},{id:73,optionA:"Christopher Nolan",optionB:"Quentin Tarantino",answer:"B"},{id:74,optionA:"Geometry",optionB:"Algebra",answer:"B"},{id:75,optionA:"Caleb Hearon",optionB:"Theo Von",answer:"A"},{id:76,optionA:"Silent Sleep",optionB:"Box Fan Sleep",answer:"A"},{id:77,optionA:"Randy Marsh",optionB:"Eric Cartman",answer:"A"},{id:78,optionA:"Pen",optionB:"Pencil",answer:"A"},{id:79,optionA:"The Beatles",optionB:"The Rolling Stones",answer:"A"},{id:80,optionA:"OJ",optionB:"Diddy",answer:"B"},{id:81,optionA:"Piano",optionB:"Saxophone",answer:"A"},{id:82,optionA:"Rick",optionB:"Morty",answer:"A"},{id:83,optionA:"Bird As A Pet",optionB:"Turtle As A Pet",answer:"B"},{id:84,optionA:"Flying",optionB:"Driving",answer:"B"},{id:85,optionA:"Sweet",optionB:"Salty",answer:"A"},{id:86,optionA:"Gregg Turkington",optionB:"Tim Heidecker",answer:"A"},{id:87,optionA:"Elves",optionB:"Dwarves",answer:"B"},{id:88,optionA:"Its Always Sunny In Philadelphia",optionB:"Seinfeld",answer:"A"},{id:89,optionA:"King Kong",optionB:"Godzilla",answer:"A"},{id:90,optionA:"Ping Pong",optionB:"Pool",answer:"B"},{id:91,optionA:"D-Day",optionB:"Bin Laden Raid",answer:"B"},{id:92,optionA:"Fight A Leopard Seal",optionB:"Fight A Lion",answer:"B"},{id:93,optionA:"Aura",optionB:"Clout",answer:"A"},{id:94,optionA:"Poop",optionB:"Crap",answer:"B"},{id:95,optionA:"Plus 10 IQ Points",optionB:"Plus 2 Inches Of Height",answer:"A"},{id:96,optionA:"Skin Turns Green",optionB:"Defy Gravity",answer:"B"},{id:97,optionA:"Salami",optionB:"Pepperoni",answer:"A"},{id:98,optionA:"Half Of Population Turns To Dust",optionB:"Extinction From Lack Of Resources",answer:"B"},{id:99,optionA:"The Shire",optionB:"Diagon Alley",answer:"B"},{id:100,optionA:"There Are More Doors In The World",optionB:"There Are More Wheels In The World",answer:"A"},{id:101,optionA:"Climb Trees Faster Than A Monkey",optionB:"Swim Faster Than An Alligator",answer:"B"},{id:102,optionA:"Tilted Towers",optionB:"Retail Row",answer:"B"},{id:103,optionA:"Cirrus",optionB:"Cumulus",answer:"A"},{id:104,optionA:"Rewatch",optionB:"Watch Something New",answer:"A"},{id:105,optionA:"Be President",optionB:"Be The Richest Man Alive",answer:"A"}];function me(){const o=new Date().toDateString(),t=localStorage.getItem("thisOrThat_daily");if(t){const a=JSON.parse(t);if(a.date===o)return a.questions}const n=ne();let e=Y.filter(a=>!n.includes(a.id));e.length<5&&(be(),e=[...Y]);const i=e.sort(()=>Math.random()-.5).slice(0,5);return we(i.map(a=>a.id)),localStorage.setItem("thisOrThat_daily",JSON.stringify({date:o,questions:i})),i}function ne(){const o=localStorage.getItem("thisOrThat_seen");return o?JSON.parse(o):[]}function we(o){const t=ne(),n=[...new Set([...t,...o])];localStorage.setItem("thisOrThat_seen",JSON.stringify(n))}function be(){localStorage.setItem("thisOrThat_seen",JSON.stringify([]))}const ge={common:.5,uncommon:.3,rare:.15,legendary:.05},E=[{id:1,name:"Robber Andrew",rarity:"common",image:"stickers/robber.png"},{id:2,name:"Full Belly Andrew",rarity:"common",image:"stickers/full_belly.png"},{id:3,name:"Baby Andrew",rarity:"common",image:"stickers/baby.png"},{id:4,name:"Gambler Andrew",rarity:"common",image:"stickers/gambler.png"},{id:5,name:"Hotdog Andrew",rarity:"common",image:"stickers/hotdog.png"},{id:6,name:"Chef Andrew",rarity:"common",image:"stickers/chef.png"},{id:7,name:"Smart Andrew",rarity:"common",image:"stickers/smart.png"},{id:8,name:"Tweety Andrew",rarity:"common",image:"stickers/tweety.png"},{id:9,name:"Cowboy Andrew",rarity:"uncommon",image:"stickers/cowboy.png"},{id:10,name:"Rapper Andrew",rarity:"uncommon",image:"stickers/rapper.png"},{id:11,name:"Racer Andrew",rarity:"uncommon",image:"stickers/racer.png"},{id:12,name:"Dancing Andrew",rarity:"uncommon",image:"stickers/dancer.png"},{id:13,name:"Judge Andrew",rarity:"uncommon",image:"stickers/judge.png"},{id:14,name:"Wizard Andrew",rarity:"uncommon",image:"stickers/wizard.png"},{id:15,name:"Gardener Andrew",rarity:"uncommon",image:"stickers/gardener.png"},{id:16,name:"Pirate Andrew",rarity:"rare",image:"stickers/pirate.png"},{id:17,name:"Successful Andrew",rarity:"rare",image:"stickers/successful.png"},{id:18,name:"Spinosaurus Andrew",rarity:"rare",image:"stickers/dinosaur.png"},{id:19,name:"Poochaco Andrew",rarity:"legendary",image:"stickers/poochaco.png"},{id:20,name:"Andrew Simpson",rarity:"legendary",image:"stickers/simpson.png"}];function fe(){const o={};return E.forEach(t=>{o[t.rarity]=(o[t.rarity]||0)+1}),E.map(t=>({...t,weight:ge[t.rarity]/o[t.rarity]}))}const D=fe(),j=300,ye={common:25,uncommon:50,rare:100,legendary:200},M={common:"#9ca3af",uncommon:"#10b981",rare:"#3b82f6",legendary:"#f59e0b"},z={common:"Common",uncommon:"Uncommon",rare:"Rare",legendary:"Legendary"};class ke{constructor(){this.load()}load(){const t=localStorage.getItem("gameProgress");if(t){const n=JSON.parse(t);this.totalXP=n.totalXP||0,this.lastPlayed=n.lastPlayed||{},this.stickerCollection=n.stickerCollection||{},this.unopenedBoxes=n.unopenedBoxes||0,this.highestLevelAchieved=n.highestLevelAchieved||0}else this.totalXP=0,this.lastPlayed={},this.stickerCollection={},this.unopenedBoxes=1,this.highestLevelAchieved=0,this.save()}save(){localStorage.setItem("gameProgress",JSON.stringify({totalXP:this.totalXP,lastPlayed:this.lastPlayed,stickerCollection:this.stickerCollection,unopenedBoxes:this.unopenedBoxes,highestLevelAchieved:this.highestLevelAchieved}))}addXP(t){const n=this.getCurrentLevel();this.totalXP+=t;const e=this.getCurrentLevel(),s=Math.max(0,e-Math.max(n,this.highestLevelAchieved));return e>this.highestLevelAchieved&&(this.highestLevelAchieved=e,this.unopenedBoxes+=s),this.save(),{leveledUp:s>0,levelsGained:s,unopenedBoxes:this.unopenedBoxes}}subtractXP(t){this.totalXP-=t,this.totalXP<0&&(this.totalXP=0),this.save()}getCurrentLevel(){return Math.floor(this.totalXP/j)}getXPToNextLevel(){return(this.getCurrentLevel()+1)*j-this.totalXP}getXPProgressInLevel(){const t=this.getCurrentLevel()*j;return this.totalXP-t}openMysteryBox(){if(this.unopenedBoxes<=0)return null;const t=this.getRandomSticker(),n=this.stickerCollection[t.id]>0;this.stickerCollection[t.id]=(this.stickerCollection[t.id]||0)+1,this.unopenedBoxes--;let e=0;return n&&(e=ye[t.rarity],this.totalXP+=e),this.save(),{sticker:t,isDuplicate:n,bonusXP:e,totalOwned:this.stickerCollection[t.id]}}getRandomSticker(){const t=D.reduce((e,s)=>e+s.weight,0);let n=Math.random()*t;for(const e of D)if(n-=e.weight,n<=0)return e;return D[D.length-1]}getCollectionStats(){const t=Object.keys(this.stickerCollection).length,n=E.length,e=Math.round(t/n*100),s={common:{owned:0,total:0},uncommon:{owned:0,total:0},rare:{owned:0,total:0},legendary:{owned:0,total:0}};return E.forEach(i=>{s[i.rarity].total++,this.stickerCollection[i.id]&&s[i.rarity].owned++}),{uniqueOwned:t,totalStickers:n,completionPercent:e,rarityStats:s,unopenedBoxes:this.unopenedBoxes}}getAllStickers(){return E.map(t=>({...t,owned:this.stickerCollection[t.id]||0,isNew:!this.stickerCollection[t.id],isLocked:!this.stickerCollection[t.id]}))}getStickerById(t){return E.find(n=>n.id===t)}hasPlayedToday(t){const n=new Date().toDateString();return this.lastPlayed[t]===n}markPlayedToday(t){const n=new Date().toDateString();this.lastPlayed[t]=n,this.save()}getTotalXP(){return this.totalXP}getUnopenedBoxes(){return this.unopenedBoxes}}const d=new ke;if(typeof document<"u"){const o=document.createElement("style");o.textContent=`
    * {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
    }
  `,document.head.appendChild(o)}class Be{constructor(t){this.container=t,this.questions=me(),this.currentQuestionIndex=0,this.score=0,this.answers=[],this.isComplete=!1,this.totalLevelsGained=0,this.unopenedBoxes=0,this.loadProgress(),this.render()}loadProgress(){const t=new Date().toDateString(),n=localStorage.getItem("thisOrThat_progress");if(n){const e=JSON.parse(n);if(e.date===t)return this.score=e.score||0,this.answers=e.answers||[],this.currentQuestionIndex=this.answers.length,this.isComplete=e.complete||!1,!0}return!1}saveProgress(t=!1){const n=new Date().toDateString();localStorage.setItem("thisOrThat_progress",JSON.stringify({date:n,complete:t||this.isComplete,score:this.score,answers:this.answers,currentQuestionIndex:this.currentQuestionIndex}))}handleAnswer(t){const n=this.questions[this.currentQuestionIndex],e=t===n.answer;if(this.answers.push({question:n,userChoice:t,correct:e}),e){this.score+=20;const s=d.addXP(20);s.leveledUp&&(this.totalLevelsGained+=s.levelsGained,this.unopenedBoxes=s.unopenedBoxes)}this.saveProgress(!1),this.showResult(e,n),setTimeout(()=>{this.currentQuestionIndex++,this.currentQuestionIndex>=this.questions.length?this.completeGame():this.render()},1500)}showResult(t,n){const e=this.container.querySelector(".game-content"),s=n.answer==="A"?n.optionA:n.optionB;e.innerHTML=`
      <div class="result-screen ${t?"correct":"incorrect"}">
        <div class="result-icon">${t?"✓":"✗"}</div>
        <div class="result-text">
          ${t?"Correct!":"Not quite!"}
        </div>
        <div class="correct-answer">
          I would choose: <strong>${s}</strong>
        </div>
        <div class="xp-earned">+${t?20:0} XP</div>
      </div>
    `}completeGame(){this.isComplete=!0,this.saveProgress(!0),d.markPlayedToday("thisOrThat");const t=d.getCurrentLevel(),n=d.getTotalXP();this.showCompletionScreen({currentLevel:t,totalXP:n})}showCompletionScreen(t){const n=this.score/100*100;let e=`
      <div class="completion-screen">
        <h2>Today's Results</h2>
    `;this.totalLevelsGained>0?e+=`
        <div class="completion-box completion-box-levelup">
          <div style="font-size: 2rem; margin-bottom: 15px;">${this.score} / 100 XP</div>
          <div class="score-bar">
            <div class="score-fill" style="width: ${n}%"></div>
          </div>
          <div style="font-size: 1.1rem; margin: 15px 0;">
            You got ${this.answers.filter(i=>i.correct).length} out of ${this.questions.length} correct!
          </div>
          
          <div style="font-size: 1.4rem; font-weight: 700; margin: 20px 0 10px;">🎉 LEVEL UP! 🎉</div>
          <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; margin-top: 10px;">
            <div style="font-size: 1.1rem; margin-bottom: 8px;">
              You gained ${this.totalLevelsGained} ${this.totalLevelsGained===1?"level":"levels"}!
            </div>
            <div style="margin-bottom: 12px;">
              ${this.unopenedBoxes} mystery ${this.unopenedBoxes===1?"box":"boxes"} waiting for you!
            </div>
            <button class="open-boxes-btn" onclick="window.showMysteryBox()">
              Open Mystery ${this.unopenedBoxes===1?"Box":"Boxes"} 🎁
            </button>
          </div>
        </div>
      `:e+=`
        <div class="final-score">${this.score} / 100 XP</div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${n}%"></div>
        </div>
        <div class="summary">
          You got ${this.answers.filter(i=>i.correct).length} out of ${this.questions.length} correct!
        </div>
      `,e+=`
        <div class="total-progress">
          Total XP: ${t.totalXP} 
          <span class="level-badge">Level ${t.currentLevel}</span>
        </div>
        <button class="review-btn">Review Answers</button>
      </div>
    `,this.container.querySelector(".game-content").innerHTML=e;const s=this.container.querySelector(".review-btn");s&&s.addEventListener("click",()=>this.showReview())}showReview(){const t=`
      <div class="review-screen">
        <button class="back-btn">← Back</button>
        <h2>Answer Review</h2>
        <div class="review-list">
          ${this.answers.map((e,s)=>`
            <div class="review-item ${e.correct?"correct":"incorrect"}">
              <div class="review-number">Question ${s+1}</div>
              <div class="review-question">
                <span class="choice ${e.userChoice==="A"?"selected":""}">${e.question.optionA}</span>
                <span class="vs">or</span>
                <span class="choice ${e.userChoice==="B"?"selected":""}">${e.question.optionB}</span>
              </div>
              <div class="review-result">
                ${e.correct?"✓ Correct!":`✗ I chose: ${e.question.answer==="A"?e.question.optionA:e.question.optionB}`}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `;this.container.innerHTML=t,this.container.querySelectorAll(".back-btn, .mobile-back-btn").forEach(e=>{e.addEventListener("click",()=>window.showHome())})}render(){if(this.isComplete){const n=d.getCurrentLevel(),e=d.getTotalXP();this.showCompletionScreen({currentLevel:n,totalXP:e});return}const t=this.questions[this.currentQuestionIndex];this.container.innerHTML=`
      <div class="this-or-that-game">
        <div class="game-header">
          <button class="back-btn">← Back</button>
          <h2>This or That</h2>
          <div class="progress-indicator">
            Question ${this.currentQuestionIndex+1} / ${this.questions.length}
          </div>
        </div>
        
        <div class="game-content">
          <div class="question-prompt">Which would I choose?</div>
          
          <div class="choices">
            <button class="choice-btn choice-a" data-choice="A">
              ${t.optionA}
            </button>
            
            <div class="or-divider">OR</div>
            
            <button class="choice-btn choice-b" data-choice="B">
              ${t.optionB}
            </button>
          </div>
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `,this.attachEventListeners()}attachEventListeners(){this.container.querySelectorAll(".choice-btn").forEach(e=>{e.blur();const s=i=>{i.preventDefault(),i.stopPropagation(),e.blur(),e.style.pointerEvents="none";const a=e.getAttribute("data-choice");this.handleAnswer(a)};e.addEventListener("click",s,{once:!0}),e.addEventListener("touchend",s,{once:!0})}),this.container.querySelectorAll(".back-btn, .mobile-back-btn").forEach(e=>{e.addEventListener("click",()=>window.showHome())})}}window.thisOrThat=null;function _(o){window.thisOrThat=new Be(o)}function se(o){const t=new Date().toDateString(),n=localStorage.getItem("thisOrThat_progress");if(!n){o.innerHTML=`
      <div class="review-screen">
        <button class="back-btn">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align: center; color: #666;">Play today's This or That game first!</p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `,W(o);return}const e=JSON.parse(n);if(e.date!==t||!e.complete){const i=e.answers?.length||0;o.innerHTML=`
      <div class="review-screen">
        <button class="back-btn">← Back</button>
        <h2>${i>0?"In Progress":"No Results Yet"}</h2>
        <p style="text-align: center; color: #666;">
          ${i>0?`You've answered ${i} of 5 questions. Complete the game to review all answers!`:"Complete today's This or That game first!"}
        </p>
        ${i>0?`
          <button class="continue-btn">Continue Game</button>
        `:""}
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `,W(o);const a=o.querySelector(".continue-btn");a&&a.addEventListener("click",()=>_(o));return}const s=`
    <div class="review-screen">
      <button class="back-btn">← Back</button>
      <h2>Today's This or That Review</h2>
      <div class="review-score">Score: ${e.score} / 100 XP</div>
      <div class="review-list">
        ${e.answers.map((i,a)=>`
          <div class="review-item ${i.correct?"correct":"incorrect"}">
            <div class="review-number">Question ${a+1}</div>
            <div class="review-question">
              <span class="choice ${i.userChoice==="A"?"selected":""}">${i.question.optionA}</span>
              <span class="vs">or</span>
              <span class="choice ${i.userChoice==="B"?"selected":""}">${i.question.optionB}</span>
            </div>
            <div class="review-result">
              ${i.correct?"✓ Correct!":`✗ I chose: ${i.question.answer==="A"?i.question.optionA:i.question.optionB}`}
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn">← Back</button>
    </div>
  `;o.innerHTML=s,W(o)}function W(o){o.querySelectorAll(".back-btn, .mobile-back-btn").forEach(n=>{n.addEventListener("click",()=>window.showHome())})}window.reviewThisOrThat=function(){const o=document.getElementById("app");se(o)};window.startThisOrThatFromMenu=function(){const o=document.getElementById("app");_(o)};function Ae(o){o.innerHTML=`
    <div class="wordle">
      <div class="grid">
        ${Array.from({length:6}).map(()=>`
          <div class="row">
            ${Array.from({length:5}).map(()=>'<div class="tile"></div>').join("")}
          </div>
        `).join("")}
      </div>

      <div class="keyboard">
        <div class="key-row">
          ${"QWERTYUIOP".split("").map(t=>`<button class="key">${t}</button>`).join("")}
        </div>

        <div class="key-row">
          ${"ASDFGHJKL".split("").map(t=>`<button class="key">${t}</button>`).join("")}
        </div>

        <div class="key-row">
          <button class="key special-key enter-key">ENTER</button>
          ${"ZXCVBNM".split("").map(t=>`<button class="key">${t}</button>`).join("")}
          <button class="key special-key">⌫</button>
        </div>
      </div>
    </div>
  `}const ie="wordle_progress";function G(o){localStorage.setItem(ie,JSON.stringify(o))}function ae(){const o=localStorage.getItem(ie);return o?JSON.parse(o):null}let H=[],re=new Set,X=!1;const Q="/the-andrew-times-games/";function $e(o){let t=2166136261;for(let n=0;n<o.length;n++)t^=o.charCodeAt(n),t=Math.imul(t,16777619);return()=>(t+=t<<13,t^=t>>>7,t+=t<<3,t^=t>>>17,t+=t<<5,(t>>>0)/4294967296)}function Se(o,t){const n=$e(t),e=[...o];for(let s=e.length-1;s>0;s--){const i=Math.floor(n()*(s+1));[e[s],e[i]]=[e[i],e[s]]}return e}async function Pe(){if(!X)try{const[o,t]=await Promise.all([fetch(`${Q}wordle-data/answers.json`),fetch(`${Q}wordle-data/allowed.json`)]);if(!o.ok||!t.ok)throw new Error("Failed to load word list files");const n=await o.json(),e=await t.json();H=n.map(i=>i.toUpperCase()),H=Se(H,"wordle-v1");const s=e.map(i=>i.toUpperCase());re=new Set([...H,...s]),X=!0}catch(o){throw console.error("❌ Failed to load word lists:",o),o}}function xe(o){if(!X)return console.warn("Word lists not loaded yet"),!1;const t=o.trim().toUpperCase();return re.has(t)}function Te(){if(!X)throw new Error("Word lists not loaded");if(H.length===0)throw new Error("No answers loaded");const o=new Date("2021-06-19"),t=new Date;o.setHours(0,0,0,0),t.setHours(0,0,0,0);const n=Math.floor((t-o)/864e5)%H.length;return H[n]}const O=5,V=6,R=100;async function Ce(o){await Pe();const t=Te(),n=new Date().toDateString(),e=ae(),s=e&&e.date===n&&e.answer===t&&!e.won&&e.rowsUsed<V;let i=s?e.rowsUsed:0,a=0,p=s?!1:e&&e.date===n;const B=s?[...e.guesses]:[];let f=0,m=0;o.innerHTML=`
    <div class="wordle-wrapper">

      <div class="wordle-header">
        <button class="back-btn" id="back-home">← Back</button>
        <h2>Wordle</h2>
      </div>

      <div id="wordle-root"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" id="mobile-back-home">← Back</button>
    </div>
  `;const w=document.getElementById("wordle-root");Ae(w);const v=w.querySelectorAll(".row");s&&B.forEach((l,c)=>{const h=v[c].children;l.word.split("").forEach(($,b)=>{h[b].textContent=$,h[b].classList.add(l.result[b])})}),p&&e&&e.date===n&&(B.forEach((l,c)=>{const h=v[c].children;l.word.split("").forEach(($,b)=>{h[b].textContent=$,h[b].classList.add(l.result[b])})}),e.won?P(`🎉 You already completed today's Wordle! +${R} XP`):P(`The word was ${t}`));const g=()=>{!p&&B.length>0&&G({date:n,answer:t,won:!1,rowsUsed:i,guesses:B}),A(),window.showHome()};document.getElementById("back-home").onclick=g,document.getElementById("mobile-back-home").onclick=g;function r(l){a>=O||p||(v[i].children[a].textContent=l,a++)}function u(){a===0||p||(a--,v[i].children[a].textContent="")}function y(l){if(!p){if(l==="ENTER"){if(a!==O)return;k();return}if(l==="⌫"||l==="BACKSPACE"){u();return}/^[A-Z]$/.test(l)&&r(l)}}function k(){const l=v[i].children,c=Array.from(l).map(b=>b.textContent).join("");if(!xe(c)){P("⌫ Not in word list");return}const h=t.split(""),$=Array(O).fill("absent");for(let b=0;b<O;b++)c[b]===h[b]&&(l[b].classList.add("correct"),$[b]="correct",h[b]=null);for(let b=0;b<O;b++){if($[b]==="correct")continue;const J=h.indexOf(c[b]);J!==-1?(l[b].classList.add("present"),$[b]="present",h[J]=null):l[b].classList.add("absent")}if(B.push({word:c,result:$}),G({date:n,answer:t,won:c===t,rowsUsed:i+1,guesses:B}),c===t){x(!0);return}i++,a=0,i===V&&x(!1)}function x(l){if(p=!0,d.markPlayedToday("wordle"),l){const c=d.addXP(R);c.leveledUp?(f=c.levelsGained,m=c.unopenedBoxes,S()):P(`🎉 You got it! +${R} XP`)}else P(`The word was ${t}`);G({date:n,answer:t,won:l,rowsUsed:B.length,guesses:B})}function S(){const l=w.querySelector(".wordle-message");l&&l.remove();const c=document.createElement("div");c.className="wordle-message level-up-message",c.innerHTML=`
      <div style="font-size: 1.3rem; margin-bottom: 10px;">🎉 You got it! +${R} XP</div>
      <div style="font-size: 1.4rem; font-weight: 700; margin: 15px 0 10px;">🎉 LEVEL UP! 🎉</div>
      <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; margin-top: 10px;">
        <div style="font-size: 1.1rem; margin-bottom: 8px;">
          You gained ${f} ${f===1?"level":"levels"}!
        </div>
        <div style="margin-bottom: 12px;">
          ${m} mystery ${m===1?"box":"boxes"} waiting for you!
        </div>
        <button class="open-boxes-btn" onclick="window.showMysteryBox()">
          Open Mystery ${m===1?"Box":"Boxes"} 🎁
        </button>
      </div>
    `,w.appendChild(c)}function P(l){const c=w.querySelector(".wordle-message");c&&c.remove();const h=document.createElement("div");h.className="wordle-message",h.textContent=l,w.appendChild(h)}function C(l){y(l.key.toUpperCase())}window.addEventListener("keydown",C),w.querySelectorAll(".key").forEach(l=>{l.addEventListener("click",()=>y(l.textContent))});function A(){window.removeEventListener("keydown",C)}}function He(o){const t=new Date().toDateString(),n=ae();if(!n||n.date!==t){o.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align:center; color:#666;">
          Play today’s Wordle first!
        </p>
      </div>
    `;return}o.innerHTML=`
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <h2>Today’s Wordle</h2>

      <div class="review-summary ${n.won?"won":"lost"}">
        ${n.won?`🎉 Solved in ${n.rowsUsed} / 6 guesses`:"😢 Not solved today"}
      </div>

      <div class="wordle-review-grid">
        ${(n.guesses||[]).map(e=>`
          <div class="review-row">
            ${e.word.split("").map((s,i)=>`
              <div class="tile ${e.result[i]}">
                ${s}
              </div>
            `).join("")}
          </div>
        `).join("")}
      </div>

      <div class="review-answer">
        Answer: <strong>${n.answer}</strong>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}const N=[{category:"My Favorite 80s Rock Bands",answers:["the smiths","talking heads","misfits","queen"]},{category:"My Four Favorite Beers",answers:["guinness","blue moon","coors light","michelob ultra"]},{category:"Madison's Food Combos",answers:["ketchup and rice","orange juice and popcorn","weenies and toast","jam and sausage"]},{category:"My Spotify Wrapped Artists",answers:["radiohead","nat king cole","bobby darin","a tribe called quest"]},{category:"The Four Best Cities I Have Visited",answers:["Chicago","Charleston","St. Augustine","Anna Maria"]},{category:"My Favorite SNL Cast Members",answers:["Tim Robinson","Fred Armisen","Mike Myers","Norm Macdonald"]},{category:"Art I Would Get A Tattoo Of (Music, Movies, etc.)",answers:["Bladerunner","Rage Against The Machine","Radiohead","Tool"]},{category:"Things I Would Put In My Butt If I Had To",answers:["Marshmallow","M&Ms","Bar of Soap","Finger"]},{category:"Jobs I'd Try For A Month",answers:["Police Officer","Baker","Fisherman","Mechanic"]},{category:"Things I'd Buy If I Won The Lottery",answers:["Suit","Ear Rings","Radiohead Tickets","Porsche"]},{category:"Worst Celebrities (Not Criminal)",answers:["James Corden","Ellen DeGeneres","Drake","Adam Sandler"]},{category:"Bugs I Would Like To Be",answers:["Bee","Dragonfly","Caterpillar","Centipede"]},{category:"Funny Road Names Near Madison",answers:["pickle buddy court","honey girl lane","ruby golightly drive","apple butter drive"]},{category:"Food Items That Give You The Worst Breath",answers:["Garlic","Onion","Lemonade","Candy"]},{category:"Best 90s Female Singers",answers:["Bjork","Fiona Apple","Janet Jackson","Lauryn Hill"]},{category:"Best Reality TV Shows",answers:["Love Is Blind","Love On The Spectrum","Big Brother","To Catch A Predator"]},{category:"Celebrities I Have Been Told I Look Like",answers:["Josh Allen","Markiplier","Josheph Gordon-Levitt","Mark Wahlberg"]},{category:"Show Hosts I Enjoy(ed)",answers:["Conan O'Brien","Tom Bergeron","Chris Harrison","Steve Harvey"]},{category:"Childhood Videogames I Enjoyed",answers:["Webkinz","Mariokart","Puzzle Quest","Wolf Of The Battlefield: Commando 3"]},{category:"Favorite Simpson Characters",answers:["Homer Simpson","Ned Flanders","Smithers","Principal Skinner"]},{category:"Restaurants I Have Eaten At The Most In My Life",answers:["Chickfila","Moes","Chipotle","Wendys"]},{category:"Superheroes I'd Like To Be",answers:["Batman","Spiderman","Cyclops","Doctor Strange"]},{category:"Cereal Mascots I Could Beat In A Fight",answers:["Lucky The Leprechaun","Buzz Bee","Toucan Sam","Trix Rabbit"]},{category:"Breeds of Dogs I Like",answers:["English Labrador","Corgi","Dachshund","Cattle Dog"]}],le="name_four_progress";function Le(o){localStorage.setItem(le,JSON.stringify(o))}function ce(){const o=localStorage.getItem(le);return o?JSON.parse(o):null}const F=25;function Me(){const o=new Date("2025-01-01"),t=new Date;o.setHours(0,0,0,0),t.setHours(0,0,0,0);const n=Math.floor((t-o)/(1e3*60*60*24));return N[n%N.length]}function Ee(o){const t=new Date().toDateString(),n=Me(),e=n.answers.map(A=>A.toUpperCase()),s=ce(),i=new Set(s?.date===t?s.found||[]:[]),a=new Set(s?.date===t?s.revealed||[]:[]);let p=s?.date===t&&s.guessCount||0,B=s?.date===t&&s.xpAwarded||0,f=s?.date===t&&s.completed,m=0,w=0;o.innerHTML=`
    <div class="name-four">
      <!-- DESKTOP BACK BUTTON -->
      <button class="back-btn" id="back-home">← Back</button>

      <h2>Name Four</h2>

      <div class="category">
        Category: <strong>${n.category}</strong>
      </div>

      <div class="answer-grid" id="answer-grid"></div>

      <form id="guess-form" class="guess-form">
        <input
          id="guess-input"
          type="text"
          placeholder="Type a guess..."
          autocomplete="off"
          ${f?"disabled":""}
        />
        <button type="submit" ${f?"disabled":""}>
          Submit
        </button>
      </form>

      <div id="feedback-message" class="feedback-message"></div>
      <div id="completion-message"></div>
      <div id="level-up-message"></div>
    </div>

    <!-- MOBILE BACK BAR -->
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" id="mobile-back-home">← Back</button>
    </div>
  `;const v=document.getElementById("guess-input"),g=document.getElementById("answer-grid"),r=document.getElementById("completion-message");document.getElementById("level-up-message");const u=document.getElementById("feedback-message");document.getElementById("back-home").onclick=()=>window.showHome(),document.getElementById("mobile-back-home").onclick=()=>window.showHome(),y(),f&&C(),document.getElementById("guess-form").onsubmit=A=>{if(A.preventDefault(),f)return;const l=v.value.trim();if(!l)return;const c=l.toUpperCase();if(v.value="",p++,i.has(c)||a.has(c)){S();return}if(e.includes(c)){i.add(c);const h=x();h.leveledUp&&(m+=h.levelsGained,w=h.unopenedBoxes),k(c,!0),setTimeout(()=>{y(),u.innerHTML="",i.size+a.size===4&&P()},1500)}else k(c,!1),setTimeout(()=>{u.innerHTML=""},1500);S()};function y(){g.innerHTML="",e.forEach(A=>{const l=i.has(A)||a.has(A),c=document.createElement("div");c.className=`answer-box ${l?"solved":""}`;const h=document.createElement("div");if(h.className="answer-text",h.textContent=l?A:A.replace(/[A-Z]/gi,"_"),c.appendChild(h),!l&&!f){const $=document.createElement("button");$.className="reveal-single-btn",$.textContent="Reveal",$.onclick=()=>{a.add(A),y(),i.size+a.size===4&&P(),S()},c.appendChild($)}g.appendChild(c)})}function k(A,l){u.innerHTML=`
      <div class="feedback-display ${l?"correct":"incorrect"}">
        <div class="feedback-icon">${l?"✓":"✗"}</div>
        <div class="feedback-text">
          ${l?"Correct!":"Not quite!"}
        </div>
        <div class="feedback-answer">
          ${l?A:"Try again!"}
        </div>
        <div class="xp-earned">+${l?F:0} XP</div>
      </div>
    `}function x(){return B+=F,d.addXP(F)}function S(A=!1){Le({date:t,found:[...i],revealed:[...a],completed:A||f,guessCount:p,xpAwarded:B})}function P(){f=!0,d.markPlayedToday("name-four"),v.disabled=!0,document.querySelector("#guess-form button").disabled=!0,S(!0),C()}function C(){m>0?r.innerHTML=`
        <div class="completion completion-with-levelup">
          <div style="font-size: 1.3rem; margin-bottom: 10px;">🎉 Puzzle complete</div>
          <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 8px;">+${B} XP</div>
          <div style="margin-bottom: 15px;">Total guesses: <strong>${p}</strong></div>
          
          <div style="font-size: 1.4rem; font-weight: 700; margin: 15px 0 10px;">🎉 LEVEL UP! 🎉</div>
          <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; margin-top: 10px;">
            <div style="font-size: 1.1rem; margin-bottom: 8px;">
              You gained ${m} ${m===1?"level":"levels"}!
            </div>
            <div style="margin-bottom: 12px;">
              ${w} mystery ${w===1?"box":"boxes"} waiting for you!
            </div>
            <button class="open-boxes-btn" onclick="window.showMysteryBox()">
              Open Mystery ${w===1?"Box":"Boxes"} 🎁
            </button>
          </div>
          
          <div style="margin-top: 15px;">Come back tomorrow for a new category</div>
        </div>
      `:r.innerHTML=`
        <div class="completion">
          🎉 Puzzle complete
          <div class="xp">+${B} XP</div>
          <p>Total guesses: <strong>${p}</strong></p>
          <p>Come back tomorrow for a new category</p>
        </div>
      `}}function Ie(){const o=new Date("2025-01-01"),t=new Date;o.setHours(0,0,0,0),t.setHours(0,0,0,0);const n=Math.floor((t-o)/(1e3*60*60*24));return N[n%N.length]}function Oe(o){const t=new Date().toDateString(),n=Ie(),e=ce();if(!e||e.date!==t){o.innerHTML=`
      <div class="name-four-review">
        <button class="back-btn" onclick="showHome()">← Back</button>

        <div class="review-card">
          <h2>Today's Name Four Review</h2>
          <p style="text-align: center; color: #6b7280;">
            No completed game to review today.
          </p>
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;return}const s=new Set(e.found||[]),i=new Set(e.revealed||[]);o.innerHTML=`
    <div class="name-four-review">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <div class="review-card">
        <h2>Today's Name Four Review</h2>

        <div class="category">
          Category: <strong>${n.category}</strong>
        </div>

        <div class="answers">
          ${n.answers.map(a=>{const p=a.toUpperCase();return s.has(p)?`
                <div class="review-answer guessed">
                  ${p}
                </div>
              `:i.has(p)?`
                <div class="review-answer revealed">
                  ${p}
                  <div class="review-note">Revealed</div>
                </div>
              `:`
              <div class="review-answer missed">
                ${p.replace(/[A-Z]/gi,"_")}
                <div class="review-note">Missed</div>
              </div>
            `}).join("")}
        </div>

        <div class="stats">
          Total guesses made:
          <strong>${e.guessCount??0}</strong>
        </div>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}function De(o){for(let t=o.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[o[t],o[n]]=[o[n],o[t]]}return o}function Re(o,t,n,e){for(let a=0;a<9;a++)if(o[t][a]===e||o[a][n]===e)return!1;const s=Math.floor(t/3)*3,i=Math.floor(n/3)*3;for(let a=0;a<3;a++)for(let p=0;p<3;p++)if(o[s+a][i+p]===e)return!1;return!0}function de(o){for(let t=0;t<9;t++)for(let n=0;n<9;n++)if(o[t][n]===0){for(const e of De([1,2,3,4,5,6,7,8,9]))if(Re(o,t,n,e)){if(o[t][n]=e,de(o))return!0;o[t][n]=0}return!1}return!0}function Xe(o,t=45){const n=o.map(s=>[...s]);let e=0;for(;e<t;){const s=Math.floor(Math.random()*9),i=Math.floor(Math.random()*9);n[s][i]!==0&&(n[s][i]=0,e++)}return n}function Ne(o=45){const t=Array.from({length:9},()=>Array(9).fill(0));return de(t),{solution:t,puzzle:Xe(t,o)}}const ue="sudoku_progress";function K(o){localStorage.setItem(ue,JSON.stringify(o))}function pe(){const o=localStorage.getItem(ue);return o?JSON.parse(o):null}function je(o){const t=new Date().toDateString();let n=pe(),e,s,i;if(n&&n.date===t)({puzzle:e,solution:s,grid:i}=n);else{const f=Ne(45);e=f.puzzle,s=f.solution,i=e.map(m=>[...m]),K({date:t,puzzle:e,solution:s,grid:i})}function a(){o.innerHTML=`
    <div class="sudoku">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Sudoku</h2>

      <div class="sudoku-grid">
        ${i.map((m,w)=>m.map((v,g)=>{const r=e[w][g]!==0;return`
              <input
                type="text"
                maxlength="1"
                class="cell ${r?"fixed":""}"
                data-r="${w}"
                data-c="${g}"
                value="${v||""}"
                ${r?"disabled":""}
              />
            `}).join("")).join("")}
      </div>

      <button class="check-btn" id="checkSudokuBtn">
        Check
      </button>

      <div id="sudoku-feedback" class="sudoku-feedback"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `,o.querySelectorAll(".cell").forEach(m=>{m.addEventListener("input",()=>{const w=+m.dataset.r,v=+m.dataset.c,g=+m.value;g>=1&&g<=9?i[w][v]=g:(i[w][v]=0,m.value=""),K({date:t,puzzle:e,solution:s,grid:i})})}),document.getElementById("checkSudokuBtn").addEventListener("click",()=>{B()})}function p(f,m=!1){const w=document.getElementById("sudoku-feedback");w&&(w.innerHTML=`
    <div class="sudoku-feedback-box ${m?"success":"error"}">
      ${f}
    </div>
  `,setTimeout(()=>{w.innerHTML=""},1500))}function B(){const f=v=>{const g=new Set(v);if(g.size!==9)return!1;for(let r of g)if(r<1||r>9)return!1;return!0};for(let v=0;v<9;v++)if(!f(i[v]))return p("Win condition not met"),!1;for(let v=0;v<9;v++){const g=[];for(let r=0;r<9;r++)g.push(i[r][v]);if(!f(g))return p("Win condition not met"),!1}for(let v=0;v<3;v++)for(let g=0;g<3;g++){const r=[];for(let u=0;u<3;u++)for(let y=0;y<3;y++)r.push(i[v*3+u][g*3+y]);if(!f(r))return p("Win condition not met"),!1}const m="sudoku";return d.hasPlayedToday(m)||(d.addXP(100),d.markPlayedToday(m)),localStorage.setItem("sudokuReview",JSON.stringify({date:new Date().toDateString(),grid:i})),p("🎉 Puzzle complete!",!0),!0}a()}function We(o){const t=pe(),n=new Date().toDateString();if(!t||t.date!==n){o.innerHTML=`
      <div class="sudoku-review">
        <div class="header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>Sudoku Review</h2>
        </div>
        <p style="text-align:center;color:#6b7280;">
          No Sudoku played today.
        </p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;return}const{grid:e}=t;o.innerHTML=`
      <div class="sudoku-review">
        <div class="header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>Sudoku Review</h2>
        </div>

      <div class="sudoku-grid review">
        ${e.flat().map(s=>`
          <div class="cell review-cell">${s}</div>
        `).join("")}
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}const ve="blackjack_progress";function L(o){localStorage.setItem(ve,JSON.stringify(o))}function he(){const o=localStorage.getItem(ve);return o?JSON.parse(o):null}const Ge=["♠","♥","♦","♣"],Fe=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];function ze(){const o=[];for(const t of Ge)for(const n of Fe)o.push({value:n,suit:t});return qe(o)}function qe(o){const t=[...o];for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}function q(o){return o.value==="A"?11:["J","Q","K"].includes(o.value)?10:parseInt(o.value)}function T(o){let t=0,n=0;for(const e of o){const s=q(e);t+=s,e.value==="A"&&n++}for(;t>21&&n>0;)t-=10,n--;return t}function Z(o){return o.length===2&&T(o)===21}function ee(o){return o.length===2&&q(o[0])===q(o[1])}function _e(o){const t=new Date().toDateString();let n=he(),e={deck:[],playerHands:[[]],dealerHand:[],bets:[0],gameOver:!1,result:null,playerBlackjack:!1,currentHandIndex:0,hasDoubledDown:[!1],hasSplit:!1,date:t};n&&n.date===t&&!n.gameOver&&(e=n);function s(){const r=d.getTotalXP(),u=r>=5,y=e.bets[0]>0,k=e.gameOver,x=e.playerHands[e.currentHandIndex],S=e.bets[e.currentHandIndex],P=!k&&e.currentHandIndex<e.playerHands.length,C=P&&x.length===2&&r>=S,A=P&&ee(x)&&r>=S&&e.playerHands.length<4;o.innerHTML=`
      <div class="blackjack">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>Blackjack</h2>

        <div class="xp-display">
          <span class="xp-label">Your XP:</span>
          <span class="xp-value">${r}</span>
        </div>

        ${y?`
          <div class="game-screen">
            <div class="bet-info">
              <span class="bet-label">Total Bet:</span>
              <span class="bet-amount">${e.bets.reduce((l,c)=>l+c,0)} XP</span>
            </div>

            <div class="dealer-section">
              <h3>Dealer's Hand ${k?`(${T(e.dealerHand)})`:`(${T([e.dealerHand[0]])})`}</h3>
              <div class="hand">
                ${e.dealerHand.map((l,c)=>`
                  <div class="card ${["♥","♦"].includes(l.suit)?"red":"black"} ${!k&&c===1?"hidden":""}">
                    ${!k&&c===1?`
                      <div class="card-back">🂠</div>
                    `:`
                      <div class="card-value">${l.value}</div>
                      <div class="card-suit">${l.suit}</div>
                    `}
                  </div>
                `).join("")}
              </div>
            </div>

            ${e.playerHands.map((l,c)=>`
              <div class="player-section ${c===e.currentHandIndex&&!k?"active-hand":""}">
                <h3>
                  ${e.playerHands.length>1?`Hand ${c+1} `:"Your Hand "}
                  (${T(l)})
                  ${e.bets.length>1?` - Bet: ${e.bets[c]} XP`:""}
                </h3>
                <div class="hand">
                  ${l.map(h=>`
                    <div class="card ${["♥","♦"].includes(h.suit)?"red":"black"}">
                      <div class="card-value">${h.value}</div>
                      <div class="card-suit">${h.suit}</div>
                    </div>
                  `).join("")}
                </div>
              </div>
            `).join("")}

            ${k?`
              <div class="game-result-container">
                ${e.playerHands.map((l,c)=>{const h=e.result[c],$=e.bets[c];return`
                    <div class="game-result ${h}">
                      ${e.playerHands.length>1?`<h4>Hand ${c+1}</h4>`:""}
                      ${h==="win"?`
                        <div class="result-icon">${e.playerBlackjack&&c===0?"🎰":"🎉"}</div>
                        <h3>${e.playerBlackjack&&c===0?"BLACKJACK!":"You Win!"}</h3>
                        <p>Won ${Math.floor($*(e.playerBlackjack&&c===0?1.5:1))} XP!${e.playerBlackjack&&c===0?" (Blackjack Bonus!)":""}</p>
                      `:h==="lose"?`
                        <div class="result-icon">😔</div>
                        <h3>You Lose</h3>
                        <p>Lost ${$} XP</p>
                      `:`
                        <div class="result-icon">🤝</div>
                        <h3>Push!</h3>
                        <p>Bet returned: ${$} XP</p>
                      `}
                    </div>
                  `}).join("")}
                <button class="action-btn primary" onclick="window.playAgain()">
                  Play Again
                </button>
              </div>
            `:`
              <div class="game-actions">
                <button class="action-btn hit-btn" onclick="window.hit()">
                  Hit
                </button>
                <button class="action-btn stand-btn" onclick="window.stand()">
                  Stand
                </button>
                ${C?`
                  <button class="action-btn double-btn" onclick="window.doubleDown()">
                    Double Down
                  </button>
                `:""}
                ${A?`
                  <button class="action-btn split-btn" onclick="window.split()">
                    Split
                  </button>
                `:""}
              </div>
            `}
          </div>
        `:`
          <div class="betting-screen">
            <h3>Place Your Bet</h3>
            
            ${u?`
              <div class="bet-buttons">
                <button class="bet-btn" onclick="window.placeBet(5)" ${r<5?"disabled":""}>
                  Bet 5 XP
                </button>
                <button class="bet-btn" onclick="window.placeBet(10)" ${r<10?"disabled":""}>
                  Bet 10 XP
                </button>
                <button class="bet-btn" onclick="window.placeBet(25)" ${r<25?"disabled":""}>
                  Bet 25 XP
                </button>
                <button class="bet-btn" onclick="window.placeBet(50)" ${r<50?"disabled":""}>
                  Bet 50 XP
                </button>
              </div>

              <div class="custom-bet">
                <label for="customBetInput">Custom Bet (5-50):</label>
                <input 
                  type="number" 
                  id="customBetInput" 
                  min="5" 
                  max="${Math.min(50,r)}" 
                  value="5"
                />
                <button class="bet-btn primary" onclick="window.placeCustomBet()">
                  Place Bet
                </button>
              </div>
            `:`
              <div class="insufficient-xp">
                <p>⚠️ You need at least 5 XP to play</p>
                <p>Complete other games to earn XP!</p>
              </div>
            `}
          </div>
        `}
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `}function i(r){const u=d.getTotalXP();if(r<5||r>50){alert("Bet must be between 5 and 50 XP");return}if(r>u){alert("Insufficient XP for this bet");return}if(d.subtractXP(r),e={deck:ze(),playerHands:[[]],dealerHand:[],bets:[r],gameOver:!1,result:null,playerBlackjack:!1,currentHandIndex:0,hasDoubledDown:[!1],hasSplit:!1,date:t},e.playerHands[0].push(e.deck.pop()),e.dealerHand.push(e.deck.pop()),e.playerHands[0].push(e.deck.pop()),e.dealerHand.push(e.deck.pop()),Z(e.playerHands[0])){e.playerBlackjack=!0,Z(e.dealerHand)?v(["push"]):v(["win"]);return}L(e),s()}function a(){if(e.gameOver)return;const r=e.currentHandIndex;e.playerHands[r].push(e.deck.pop());const u=T(e.playerHands[r]);u>21||u===21||e.hasDoubledDown[r]?m():(L(e),s())}function p(){e.gameOver||m()}function B(){if(e.gameOver)return;const r=e.currentHandIndex,u=e.bets[r];if(d.getTotalXP()<u){alert("Insufficient XP to double down");return}if(e.playerHands[r].length!==2){alert("Can only double down on first two cards");return}d.subtractXP(u),e.bets[r]*=2,e.hasDoubledDown[r]=!0,e.playerHands[r].push(e.deck.pop()),m()}function f(){if(e.gameOver)return;const r=e.currentHandIndex,u=e.bets[r];if(d.getTotalXP()<u){alert("Insufficient XP to split");return}if(!ee(e.playerHands[r])){alert("Can only split pairs");return}if(e.playerHands.length>=4){alert("Maximum 4 hands allowed");return}d.subtractXP(u),e.hasSplit=!0;const k=e.playerHands[r][0],x=e.playerHands[r][1];e.playerHands[r]=[k],e.playerHands.splice(r+1,0,[x]),e.bets.splice(r+1,0,u),e.hasDoubledDown.splice(r+1,0,!1),e.playerHands[r].push(e.deck.pop()),e.playerHands[r+1].push(e.deck.pop()),L(e),s()}function m(){e.currentHandIndex++,e.currentHandIndex>=e.playerHands.length?w():(L(e),s())}function w(){for(;T(e.dealerHand)<17;)e.dealerHand.push(e.deck.pop());const r=T(e.dealerHand),u=[];for(let y=0;y<e.playerHands.length;y++){const k=T(e.playerHands[y]);k>21?u.push("lose"):r>21||k>r?u.push("win"):k<r?u.push("lose"):u.push("push")}v(u)}function v(r){e.gameOver=!0,e.result=r;for(let u=0;u<r.length;u++){const y=r[u],k=e.bets[u];if(y==="win"){const S=u===0&&e.playerBlackjack?Math.floor(k*2.5):k*2;d.addXP(S)}else y==="push"&&d.subtractXP(-k)}L(e),s()}function g(){e={deck:[],playerHands:[[]],dealerHand:[],bets:[0],gameOver:!1,result:null,playerBlackjack:!1,currentHandIndex:0,hasDoubledDown:[!1],hasSplit:!1,date:t},L(e),s()}window.placeBet=r=>i(r),window.placeCustomBet=()=>{const r=document.getElementById("customBetInput"),u=parseInt(r.value);i(u)},window.hit=a,window.stand=p,window.doubleDown=B,window.split=f,window.playAgain=g,s()}function te(o){let t=0,n=0;for(const e of o){const s=e.value==="A"?11:["J","Q","K"].includes(e.value)?10:parseInt(e.value);t+=s,e.value==="A"&&n++}for(;t>21&&n>0;)t-=10,n--;return t}function Ue(o){const t=he(),n=new Date().toDateString();if(!t||t.date!==n||!t.gameOver){o.innerHTML=`
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
    `;return}const{playerHand:e,dealerHand:s,bet:i,result:a}=t;o.innerHTML=`
    <div class="blackjack-review">
      <div class="header">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>Blackjack Review</h2>
      </div>

      <div class="review-result ${a}">
        ${a==="win"?"🎉 You Won!":a==="lose"?"😔 You Lost":"🤝 Push"}
      </div>

      <div class="review-bet">Bet: ${i} XP</div>

      <div class="review-hands">
        <div class="review-hand">
          <h3>Dealer's Hand (${te(s)})</h3>
          <div class="hand">
            ${s.map(p=>`
              <div class="card ${["♥","♦"].includes(p.suit)?"red":"black"}">
                <div class="card-value">${p.value}</div>
                <div class="card-suit">${p.suit}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="review-hand">
          <h3>Your Hand (${te(e)})</h3>
          <div class="hand">
            ${e.map(p=>`
              <div class="card ${["♥","♦"].includes(p.suit)?"red":"black"}">
                <div class="card-value">${p.value}</div>
                <div class="card-suit">${p.suit}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}const I=document.getElementById("app");function U(){const o=d.getCurrentLevel(),t=d.getTotalXP(),n=d.getXPToNextLevel(),e=d.getXPProgressInLevel(),s=d.getUnopenedBoxes(),i=d.getCollectionStats(),a=s>0&&i.uniqueOwned===0;I.innerHTML=`
    <div class="home-screen">
      <header class="app-header">
        <h1>The Andrew Times Games</h1>
        
        ${a?`
          <div class="welcome-message">
            <div class="welcome-icon">
              <img src="./misc/welcome.png" alt="Welcome" />
            </div>
            <h2>Welcome!</h2>
            <p>Thanks for visiting! You've earned a free mystery box to get you started. Open it to receive your first sticker!</p>
          </div>
        `:""}

        <div class="progress-summary">
          <div class="level-info">
            <span class="level">Level ${o}</span>
            <span class="xp">${t} XP</span>
          </div>

          <div class="xp-section">
            <div class="xp-bar">
              <div class="xp-fill" style="width: ${e/300*100}%"></div>
            </div>
            <div class="xp-text">${n} XP to Level ${o+1}</div>
          </div>

          <div class="collection-summary">
            <div class="collection-icon">🎁</div>
            <div class="collection-info">
              <div class="collection-progress">${i.uniqueOwned}/${i.totalStickers} Stickers</div>
              <div class="collection-percent">${i.completionPercent}% Complete</div>
            </div>
          </div>

          ${s>0?`
            <button class="mystery-box-alert" onclick="showMysteryBox()">
              🎁 ${s} Mystery ${s===1?"Box":"Boxes"} Available!
            </button>
          `:""}
        </div>
      </header>

      <div class="game-cards">
        <!-- THIS OR THAT -->
        <div class="game-card ${d.hasPlayedToday("thisOrThat")?"completed":""}"
             onclick="handleGameClick('thisOrThat')">
          <div class="game-icon">
            <img src="./game-icons/this_or_that_192.png" alt="This or That" />
          </div>
          <h3>This or That</h3>
          <p>Guess what I would choose</p>
          <div class="game-xp">Up to 100 XP</div>

          ${d.hasPlayedToday("thisOrThat")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- WORDLE -->
        <div class="game-card ${d.hasPlayedToday("wordle")?"completed":""}"
             onclick="handleGameClick('wordle')">
          <div class="game-icon">
            <img src="./game-icons/wordle_clone_192.png" alt="Wordle" />
          </div>
          <h3>Wordle</h3>
          <p>Guess the secret word</p>
          <div class="game-xp">100 XP</div>

          ${d.hasPlayedToday("wordle")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- NAME FOUR -->
        <div class="game-card ${d.hasPlayedToday("name-four")?"completed":""}"
             onclick="handleGameClick('name-four')">
          <div class="game-icon">
            <img src="./game-icons/name_four_192.png" alt="Name Four" />
          </div>
          <h3>Name Four</h3>
          <p>Guess What Four Things Fit The Category</p>
          <div class="game-xp">Up to 100 XP</div>

          ${d.hasPlayedToday("name-four")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- SUDOKU -->
        <div class="game-card ${d.hasPlayedToday("sudoku")?"completed":""}"
            onclick="handleGameClick('sudoku')">
          <div class="game-icon">
            <img src="./game-icons/sudoku_192.png" alt="Sudoku" />
          </div>
          <h3>Sudoku</h3>
          <p>Complete the daily puzzle</p>
          <div class="game-xp">100 XP</div>

          ${d.hasPlayedToday("sudoku")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- BLACKJACK -->
        <div class="game-card"
            onclick="handleGameClick('blackjack')">
          <div class="game-icon">
            <img src="./game-icons/blackjack_192.png" alt="Blackjack" />
          </div>
          <h3>Blackjack</h3>
          <p>Come gamble your XP</p>
          <div class="game-xp">Bet 5-50 XP</div>
          <div class="play-badge">Play Now</div>
        </div>
      </div>

      <button class="collection-btn" onclick="showCollection()">
        View Sticker Collection
      </button>
    </div>
  `}function Je(){I.innerHTML=`
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
          ${d.getUnopenedBoxes()} ${d.getUnopenedBoxes()===1?"box":"boxes"} remaining
        </div>

        <button class="open-box-btn" onclick="openBox()">
          Open Box
        </button>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}function Ye(){const o=d.openMysteryBox();if(!o){U();return}const{sticker:t,isDuplicate:n,bonusXP:e,totalOwned:s}=o;document.getElementById("mysteryBox").classList.add("opening"),setTimeout(()=>{Qe(t,n,e,s)},800)}function Qe(o,t,n,e){const s=M[o.rarity],i=z[o.rarity],a=d.getUnopenedBoxes();I.innerHTML=`
    <div class="sticker-reveal-screen">
      <div class="reveal-container">
        <div class="reveal-card" style="border-color: ${s}">
          <div class="reveal-rarity" style="color: ${s}">
            ${i}
          </div>
          
          <div class="reveal-sticker">
            <img src="${o.image}" alt="${o.name}" 
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22200%22 height=%22200%22 fill=%22${s}%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2248%22 fill=%22white%22>${o.name.charAt(0)}</text></svg>'" />
          </div>
          
          <div class="reveal-name">${o.name}</div>
          
          ${t?`
            <div class="duplicate-badge">
              <span class="duplicate-icon">×${e}</span>
              <span class="duplicate-text">Duplicate! +${n} Bonus XP</span>
            </div>
          `:`
            <div class="new-badge">🌟 NEW!</div>
          `}
        </div>

        <div class="reveal-actions">
          ${a>0?`
            <button class="reveal-btn primary" onclick="showMysteryBox()">
              Open Another (${a} left)
            </button>
          `:""}
          
          <button class="reveal-btn ${a>0?"":"primary"}" onclick="showCollection()">
            View Collection
          </button>
          
          <button class="reveal-btn" onclick="showHome()">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{document.querySelector(".reveal-card").classList.add("animate-in")},50)}function Ve(){const o=d.getAllStickers(),t=d.getCollectionStats(),n=d.getUnopenedBoxes(),e={legendary:o.filter(s=>s.rarity==="legendary"),rare:o.filter(s=>s.rarity==="rare"),uncommon:o.filter(s=>s.rarity==="uncommon"),common:o.filter(s=>s.rarity==="common")};I.innerHTML=`
    <div class="collection-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      
      <div class="collection-header">
        <h2>Sticker Collection</h2>
        <div class="collection-stats">
          <div class="stat">
            <span class="stat-value">${t.uniqueOwned}/${t.totalStickers}</span>
            <span class="stat-label">Collected</span>
          </div>
          <div class="stat">
            <span class="stat-value">${t.completionPercent}%</span>
            <span class="stat-label">Complete</span>
          </div>
          ${n>0?`
            <button class="stat open-boxes-btn" onclick="showMysteryBox()">
              🎁 ${n} ${n===1?"Box":"Boxes"}
            </button>
          `:""}
        </div>
      </div>

      <div class="rarity-breakdown">
        ${Object.entries(t.rarityStats).map(([s,i])=>`
          <div class="rarity-stat" style="border-left: 3px solid ${M[s]}">
            <span class="rarity-name" style="color: ${M[s]}">
              ${z[s]}
            </span>
            <span class="rarity-count">${i.owned}/${i.total}</span>
          </div>
        `).join("")}
      </div>

      ${Object.entries(e).map(([s,i])=>`
        <div class="sticker-section">
          <h3 class="section-title" style="color: ${M[s]}">
            ${z[s]} (${i.filter(a=>a.owned>0).length}/${i.length})
          </h3>
          <div class="sticker-grid">
            ${i.map(a=>`
              <div class="sticker-card ${a.owned>0?"owned":"locked"}" 
                   style="border-color: ${M[s]}">
                ${a.owned>0?`
                  <img src="${a.image}" alt="${a.name}"
                       onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%22 height=%22100%22 fill=%22${M[s]}%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2232%22 fill=%22white%22>${a.name.charAt(0)}</text></svg>'" />
                  <div class="sticker-name">${a.name}</div>
                  ${a.owned>1?`<div class="sticker-count">×${a.owned}</div>`:""}
                `:`
                  <div class="sticker-locked">🔒</div>
                  <div class="sticker-name">${a.name}</div>
                `}
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}async function Ke(o){o==="blackjack"?await oe(o):d.hasPlayedToday(o)?Ze(o):await oe(o)}async function oe(o){I.innerHTML=`
    <div id="game-container"></div>
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;const t=document.getElementById("game-container");o==="thisOrThat"&&_(t),o==="wordle"&&await Ce(t),o==="name-four"&&Ee(t),o==="sudoku"&&je(t),o==="blackjack"&&_e(t)}function Ze(o){I.innerHTML=`
    <div id="game-container"></div>
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;const t=document.getElementById("game-container");o==="thisOrThat"&&se(t),o==="wordle"&&He(t),o==="name-four"&&Oe(t),o==="sudoku"&&We(t),o==="blackjack"&&Ue(t)}window.showHome=U;window.showCollection=Ve;window.showMysteryBox=Je;window.openBox=Ye;window.handleGameClick=Ke;U();
