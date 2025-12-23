(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const _=[{id:1,optionA:"Methodical Coffee",optionB:"Rowan Coffee",answer:"B"},{id:2,optionA:"Clash Royale",optionB:"Overwatch",answer:"B"},{id:3,optionA:"Pocket 8s",optionB:"Ace 9 Suited",answer:"B"},{id:4,optionA:"Apple Bold Rock",optionB:"Mimosa Bold Rock",answer:"A"},{id:5,optionA:"Dr Pepper",optionB:"Coke",answer:"B"},{id:6,optionA:"Krusty",optionB:"Ned",answer:"B"},{id:7,optionA:"Robots",optionB:"Hoodwinked",answer:"A"},{id:8,optionA:"WW2",optionB:"Vietnam",answer:"B"},{id:9,optionA:"Oil",optionB:"Acrylic",answer:"A"},{id:10,optionA:"Pearl Jam",optionB:"Alice in Chains",answer:"A"},{id:11,optionA:"Sophomore Year High School",optionB:"Sophomore Year College",answer:"A"},{id:12,optionA:"Calculus",optionB:"Statistics",answer:"A"},{id:13,optionA:"George Bush",optionB:"Bill Clinton",answer:"A"},{id:14,optionA:"Quiche",optionB:"Roast",answer:"A"},{id:15,optionA:"Japan",optionB:"Greece",answer:"A"},{id:16,optionA:"100 Spiders",optionB:"20 Squirrels",answer:"A"},{id:17,optionA:"Unlimited Games & Bacon",optionB:"No Games",answer:"A"},{id:18,optionA:"Minecraft Cottage",optionB:"Minecraft Castle",answer:"A"},{id:19,optionA:"Lead Out Bluff",optionB:"Re-raise Bluff",answer:"B"},{id:20,optionA:"Checkerboard Flooring",optionB:"Carpet",answer:"A"},{id:21,optionA:"Sci-Fi",optionB:"Westerns",answer:"A"},{id:22,optionA:"Sunny",optionB:"Partly Cloudy",answer:"B"},{id:23,optionA:"Spring",optionB:"Summer",answer:"A"},{id:24,optionA:"Big Black Puffer",optionB:"Fake Leather",answer:"A"},{id:25,optionA:"Whole Number",optionB:"Decimal Numbers",answer:"B"},{id:26,optionA:"Butt Rash",optionB:"Butt Cuts",answer:"B"},{id:27,optionA:"Queen",optionB:"Michael Jackson",answer:"B"},{id:28,optionA:"Peak Scythe",optionB:"Peak Poker",answer:"A"},{id:29,optionA:"Bench Press",optionB:"Deadlift",answer:"A"},{id:30,optionA:"Chicken Pot Pie",optionB:"Hamburger",answer:"A"},{id:31,optionA:"Cadbury Egg",optionB:"Chocolate Chip Cookie",answer:"B"},{id:32,optionA:"Fame",optionB:"Money",answer:"B"},{id:33,optionA:"Matcha",optionB:"Iced Americano",answer:"B"},{id:34,optionA:"Mimi",optionB:"Nana",answer:"B"},{id:35,optionA:"Leather",optionB:"Velvet",answer:"A"},{id:36,optionA:"Morning Person",optionB:"Night Owl",answer:"B"},{id:37,optionA:"Beach Vacation",optionB:"Snowy Mountains",answer:"A"},{id:38,optionA:"Pizza",optionB:"Tacos",answer:"A"},{id:39,optionA:"Voice Messages",optionB:"Calling",answer:"B"},{id:40,optionA:"Biking",optionB:"Swimming",answer:"B"},{id:41,optionA:"Sweet",optionB:"Savory",answer:"A"},{id:42,optionA:"Stubbed Toe",optionB:"Pinched Finger",answer:"B"},{id:43,optionA:"Mixed Drink",optionB:"Shots",answer:"A"},{id:44,optionA:"Disney",optionB:"Universal",answer:"A"},{id:45,optionA:"In Rainbows",optionB:"Kid A",answer:"B"},{id:46,optionA:"Family Guy",optionB:"Rick and Morty",answer:"A"},{id:47,optionA:"Cruise",optionB:"Train",answer:"B"},{id:48,optionA:"Board Games",optionB:"Video Games",answer:"A"},{id:49,optionA:"Sabrina Carpenter",optionB:"Billie Eilish",answer:"A"},{id:50,optionA:"Wutang Clan",optionB:"A Tribe Called Quest",answer:"A"},{id:51,optionA:"Rainy Days",optionB:"Snowy Days",answer:"B"},{id:52,optionA:"Pancakes",optionB:"Waffles",answer:"B"},{id:53,optionA:"Chocolate",optionB:"Vanilla",answer:"A"},{id:54,optionA:"Instagram Reels",optionB:"Youtube Shorts",answer:"B"},{id:55,optionA:"Group Hang",optionB:"One-on-One",answer:"B"},{id:56,optionA:"Stanley Kubrick",optionB:"Francis Ford Coppola",answer:"B"},{id:57,optionA:"Ryan Gosling",optionB:"Harrison Ford",answer:"A"},{id:58,optionA:"Bowling",optionB:"Mini Golf",answer:"A"},{id:59,optionA:"Physical Books",optionB:"Audiobooks",answer:"B"},{id:60,optionA:"Southern Food",optionB:"Mexican Food",answer:"A"},{id:61,optionA:"Fried Eggs",optionB:"Scrambled Eggs",answer:"B"},{id:62,optionA:"Driving Leisurely",optionB:"Speeding",answer:"A"},{id:63,optionA:"Gold Jewelry",optionB:"Silver Jewelry",answer:"A"},{id:64,optionA:"Tom Brady",optionB:"Lebron James",answer:"A"},{id:65,optionA:"Connecticut",optionB:"Oregon",answer:"A"},{id:66,optionA:"Window Seat",optionB:"Aisle Seat",answer:"B"},{id:67,optionA:"Light Roast",optionB:"Medium Roast",answer:"A"},{id:68,optionA:"Monopoly",optionB:"Sequence",answer:"B"},{id:69,optionA:"Painting",optionB:"Sketching",answer:"A"},{id:70,optionA:"Einstein",optionB:"Newton",answer:"B"},{id:71,optionA:"Burritos",optionB:"Bowls",answer:"B"},{id:72,optionA:"Walton Goggins",optionB:"Christoph Waltz",answer:"B"},{id:73,optionA:"Christopher Nolan",optionB:"Quentin Tarantino",answer:"B"},{id:74,optionA:"Geometry",optionB:"Algebra",answer:"B"},{id:75,optionA:"Caleb Hearon",optionB:"Theo Von",answer:"A"},{id:76,optionA:"Silent Sleep",optionB:"Box Fan Sleep",answer:"A"},{id:77,optionA:"Randy Marsh",optionB:"Eric Cartman",answer:"A"},{id:78,optionA:"Pen",optionB:"Pencil",answer:"A"},{id:79,optionA:"The Beatles",optionB:"The Rolling Stones",answer:"A"},{id:80,optionA:"OJ",optionB:"Diddy",answer:"B"},{id:81,optionA:"Piano",optionB:"Saxophone",answer:"A"},{id:82,optionA:"Rick",optionB:"Morty",answer:"A"},{id:83,optionA:"Bird As A Pet",optionB:"Turtle As A Pet",answer:"B"},{id:84,optionA:"Flying",optionB:"Driving",answer:"B"},{id:85,optionA:"Sweet",optionB:"Salty",answer:"A"},{id:86,optionA:"Gregg Turkington",optionB:"Tim Heidecker",answer:"A"},{id:87,optionA:"Elves",optionB:"Dwarves",answer:"B"},{id:88,optionA:"Its Always Sunny In Philadelphia",optionB:"Seinfeld",answer:"A"},{id:89,optionA:"King Kong",optionB:"Godzilla",answer:"A"},{id:90,optionA:"Ping Pong",optionB:"Pool",answer:"B"},{id:91,optionA:"D-Day",optionB:"Bin Laden Raid",answer:"B"},{id:92,optionA:"Fight A Leopard Seal",optionB:"Fight A Lion",answer:"B"},{id:93,optionA:"Aura",optionB:"Clout",answer:"A"},{id:94,optionA:"Poop",optionB:"Crap",answer:"B"},{id:95,optionA:"Plus 10 IQ Points",optionB:"Plus 2 Inches Of Height",answer:"A"},{id:96,optionA:"Skin Turns Green",optionB:"Defy Gravity",answer:"B"},{id:97,optionA:"Salami",optionB:"Pepperoni",answer:"A"},{id:98,optionA:"Half Of Population Turns To Dust",optionB:"Extinction From Lack Of Resources",answer:"B"},{id:99,optionA:"The Shire",optionB:"Diagon Alley",answer:"B"},{id:100,optionA:"There Are More Doors In The World",optionB:"There Are More Wheels In The World",answer:"A"},{id:101,optionA:"Climb Trees Faster Than A Monkey",optionB:"Swim Faster Than An Alligator",answer:"B"},{id:102,optionA:"Tilted Towers",optionB:"Retail Row",answer:"B"},{id:103,optionA:"Cirrus",optionB:"Cumulus",answer:"A"},{id:104,optionA:"Rewatch",optionB:"Watch Something New",answer:"A"},{id:105,optionA:"Be President",optionB:"Be The Richest Man Alive",answer:"A"}];function oe(){const t=new Date().toDateString(),e=localStorage.getItem("thisOrThat_daily");if(e){const a=JSON.parse(e);if(a.date===t)return a.questions}const n=Q();let o=_.filter(a=>!n.includes(a.id));o.length<5&&(se(),o=[..._]);const i=o.sort(()=>Math.random()-.5).slice(0,5);return ne(i.map(a=>a.id)),localStorage.setItem("thisOrThat_daily",JSON.stringify({date:t,questions:i})),i}function Q(){const t=localStorage.getItem("thisOrThat_seen");return t?JSON.parse(t):[]}function ne(t){const e=Q(),n=[...new Set([...e,...t])];localStorage.setItem("thisOrThat_seen",JSON.stringify(n))}function se(){localStorage.setItem("thisOrThat_seen",JSON.stringify([]))}const ie={common:.5,uncommon:.3,rare:.15,legendary:.05},S=[{id:1,name:"Robber Andrew",rarity:"common",image:"stickers/robber.png"},{id:2,name:"Full Belly Andrew",rarity:"common",image:"stickers/full_belly.png"},{id:3,name:"Baby Andrew",rarity:"common",image:"stickers/baby.png"},{id:4,name:"Gambler Andrew",rarity:"common",image:"stickers/gambler.png"},{id:5,name:"Hotdog Andrew",rarity:"common",image:"stickers/hotdog.png"},{id:6,name:"Chef Andrew",rarity:"common",image:"stickers/chef.png"},{id:7,name:"Smart Andrew",rarity:"common",image:"stickers/smart.png"},{id:8,name:"Tweety Andrew",rarity:"common",image:"stickers/tweety.png"},{id:9,name:"Cowboy Andrew",rarity:"uncommon",image:"stickers/cowboy.png"},{id:10,name:"Rapper Andrew",rarity:"uncommon",image:"stickers/rapper.png"},{id:11,name:"Racer Andrew",rarity:"uncommon",image:"stickers/racer.png"},{id:12,name:"Dancing Andrew",rarity:"uncommon",image:"stickers/dancer.png"},{id:13,name:"Judge Andrew",rarity:"uncommon",image:"stickers/judge.png"},{id:14,name:"Wizard Andrew",rarity:"uncommon",image:"stickers/wizard.png"},{id:15,name:"Gardener Andrew",rarity:"uncommon",image:"stickers/gardener.png"},{id:16,name:"Pirate Andrew",rarity:"rare",image:"stickers/pirate.png"},{id:17,name:"Successful Andrew",rarity:"rare",image:"stickers/successful.png"},{id:18,name:"Spinosaurus Andrew",rarity:"rare",image:"stickers/spinosaurus.png"},{id:19,name:"Poochaco Andrew",rarity:"legendary",image:"stickers/poochaco.png"},{id:20,name:"Andrew Simpson",rarity:"legendary",image:"stickers/simpson.png"}];function ae(){const t={};return S.forEach(e=>{t[e.rarity]=(t[e.rarity]||0)+1}),S.map(e=>({...e,weight:ie[e.rarity]/t[e.rarity]}))}const R=ae(),N=300,re={common:25,uncommon:50,rare:100,legendary:200},x={common:"#9ca3af",uncommon:"#10b981",rare:"#3b82f6",legendary:"#f59e0b"},X={common:"Common",uncommon:"Uncommon",rare:"Rare",legendary:"Legendary"};class le{constructor(){this.load()}load(){const e=localStorage.getItem("gameProgress");if(e){const n=JSON.parse(e);this.totalXP=n.totalXP||0,this.lastPlayed=n.lastPlayed||{},this.stickerCollection=n.stickerCollection||{},this.unopenedBoxes=n.unopenedBoxes||0}else this.totalXP=0,this.lastPlayed={},this.stickerCollection={},this.unopenedBoxes=1,this.save()}save(){localStorage.setItem("gameProgress",JSON.stringify({totalXP:this.totalXP,lastPlayed:this.lastPlayed,stickerCollection:this.stickerCollection,unopenedBoxes:this.unopenedBoxes}))}addXP(e){const n=this.getCurrentLevel();this.totalXP+=e;const s=this.getCurrentLevel()-n;return s>0&&(this.unopenedBoxes+=s),this.save(),{leveledUp:s>0,levelsGained:s,unopenedBoxes:this.unopenedBoxes}}getCurrentLevel(){return Math.floor(this.totalXP/N)}getXPToNextLevel(){return(this.getCurrentLevel()+1)*N-this.totalXP}getXPProgressInLevel(){const e=this.getCurrentLevel()*N;return this.totalXP-e}openMysteryBox(){if(this.unopenedBoxes<=0)return null;const e=this.getRandomSticker(),n=this.stickerCollection[e.id]>0;this.stickerCollection[e.id]=(this.stickerCollection[e.id]||0)+1,this.unopenedBoxes--;let o=0;return n&&(o=re[e.rarity],this.totalXP+=o),this.save(),{sticker:e,isDuplicate:n,bonusXP:o,totalOwned:this.stickerCollection[e.id]}}getRandomSticker(){const e=R.reduce((o,s)=>o+s.weight,0);let n=Math.random()*e;for(const o of R)if(n-=o.weight,n<=0)return o;return R[R.length-1]}getCollectionStats(){const e=Object.keys(this.stickerCollection).length,n=S.length,o=Math.round(e/n*100),s={common:{owned:0,total:0},uncommon:{owned:0,total:0},rare:{owned:0,total:0},legendary:{owned:0,total:0}};return S.forEach(i=>{s[i.rarity].total++,this.stickerCollection[i.id]&&s[i.rarity].owned++}),{uniqueOwned:e,totalStickers:n,completionPercent:o,rarityStats:s,unopenedBoxes:this.unopenedBoxes}}getAllStickers(){return S.map(e=>({...e,owned:this.stickerCollection[e.id]||0,isNew:!this.stickerCollection[e.id],isLocked:!this.stickerCollection[e.id]}))}getStickerById(e){return S.find(n=>n.id===e)}hasPlayedToday(e){const n=new Date().toDateString();return this.lastPlayed[e]===n}markPlayedToday(e){const n=new Date().toDateString();this.lastPlayed[e]=n,this.save()}getTotalXP(){return this.totalXP}getUnopenedBoxes(){return this.unopenedBoxes}}const c=new le;if(typeof document<"u"){const t=document.createElement("style");t.textContent=`
    * {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
    }
  `,document.head.appendChild(t)}class ce{constructor(e){this.container=e,this.questions=oe(),this.currentQuestionIndex=0,this.score=0,this.answers=[],this.isComplete=!1,this.totalLevelsGained=0,this.unopenedBoxes=0,this.loadProgress(),this.render()}loadProgress(){const e=new Date().toDateString(),n=localStorage.getItem("thisOrThat_progress");if(n){const o=JSON.parse(n);if(o.date===e)return this.score=o.score||0,this.answers=o.answers||[],this.currentQuestionIndex=this.answers.length,this.isComplete=o.complete||!1,!0}return!1}saveProgress(e=!1){const n=new Date().toDateString();localStorage.setItem("thisOrThat_progress",JSON.stringify({date:n,complete:e||this.isComplete,score:this.score,answers:this.answers,currentQuestionIndex:this.currentQuestionIndex}))}handleAnswer(e){const n=this.questions[this.currentQuestionIndex],o=e===n.answer;if(this.answers.push({question:n,userChoice:e,correct:o}),o){this.score+=20;const s=c.addXP(20);s.leveledUp&&(this.totalLevelsGained+=s.levelsGained,this.unopenedBoxes=s.unopenedBoxes)}this.saveProgress(!1),this.showResult(o,n),setTimeout(()=>{this.currentQuestionIndex++,this.currentQuestionIndex>=this.questions.length?this.completeGame():this.render()},1500)}showResult(e,n){const o=this.container.querySelector(".game-content"),s=n.answer==="A"?n.optionA:n.optionB;o.innerHTML=`
      <div class="result-screen ${e?"correct":"incorrect"}">
        <div class="result-icon">${e?"✓":"✗"}</div>
        <div class="result-text">
          ${e?"Correct!":"Not quite!"}
        </div>
        <div class="correct-answer">
          I would choose: <strong>${s}</strong>
        </div>
        <div class="xp-earned">+${e?20:0} XP</div>
      </div>
    `}completeGame(){this.isComplete=!0,this.saveProgress(!0),c.markPlayedToday("thisOrThat");const e=c.getCurrentLevel(),n=c.getTotalXP();this.showCompletionScreen({currentLevel:e,totalXP:n})}showCompletionScreen(e){const n=this.score/100*100;let o=`
      <div class="completion-screen">
        <h2>Today's Results</h2>
    `;this.totalLevelsGained>0?o+=`
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
      `:o+=`
        <div class="final-score">${this.score} / 100 XP</div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${n}%"></div>
        </div>
        <div class="summary">
          You got ${this.answers.filter(i=>i.correct).length} out of ${this.questions.length} correct!
        </div>
      `,o+=`
        <div class="total-progress">
          Total XP: ${e.totalXP} 
          <span class="level-badge">Level ${e.currentLevel}</span>
        </div>
        <button class="review-btn">Review Answers</button>
      </div>
    `,this.container.querySelector(".game-content").innerHTML=o;const s=this.container.querySelector(".review-btn");s&&s.addEventListener("click",()=>this.showReview())}showReview(){const e=`
      <div class="review-screen">
        <button class="back-btn">← Back</button>
        <h2>Answer Review</h2>
        <div class="review-list">
          ${this.answers.map((o,s)=>`
            <div class="review-item ${o.correct?"correct":"incorrect"}">
              <div class="review-number">Question ${s+1}</div>
              <div class="review-question">
                <span class="choice ${o.userChoice==="A"?"selected":""}">${o.question.optionA}</span>
                <span class="vs">or</span>
                <span class="choice ${o.userChoice==="B"?"selected":""}">${o.question.optionB}</span>
              </div>
              <div class="review-result">
                ${o.correct?"✓ Correct!":`✗ I chose: ${o.question.answer==="A"?o.question.optionA:o.question.optionB}`}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `;this.container.innerHTML=e,this.container.querySelectorAll(".back-btn, .mobile-back-btn").forEach(o=>{o.addEventListener("click",()=>window.showHome())})}render(){if(this.isComplete){const n=c.getCurrentLevel(),o=c.getTotalXP();this.showCompletionScreen({currentLevel:n,totalXP:o});return}const e=this.questions[this.currentQuestionIndex];this.container.innerHTML=`
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
              ${e.optionA}
            </button>
            
            <div class="or-divider">OR</div>
            
            <button class="choice-btn choice-b" data-choice="B">
              ${e.optionB}
            </button>
          </div>
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `,this.attachEventListeners()}attachEventListeners(){this.container.querySelectorAll(".choice-btn").forEach(o=>{o.blur();const s=i=>{i.preventDefault(),i.stopPropagation(),o.blur(),o.style.pointerEvents="none";const a=o.getAttribute("data-choice");this.handleAnswer(a)};o.addEventListener("click",s,{once:!0}),o.addEventListener("touchend",s,{once:!0})}),this.container.querySelectorAll(".back-btn, .mobile-back-btn").forEach(o=>{o.addEventListener("click",()=>window.showHome())})}}window.thisOrThat=null;function q(t){window.thisOrThat=new ce(t)}function Y(t){const e=new Date().toDateString(),n=localStorage.getItem("thisOrThat_progress");if(!n){t.innerHTML=`
      <div class="review-screen">
        <button class="back-btn">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align: center; color: #666;">Play today's This or That game first!</p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `,G(t);return}const o=JSON.parse(n);if(o.date!==e||!o.complete){const i=o.answers?.length||0;t.innerHTML=`
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
    `,G(t);const a=t.querySelector(".continue-btn");a&&a.addEventListener("click",()=>q(t));return}const s=`
    <div class="review-screen">
      <button class="back-btn">← Back</button>
      <h2>Today's This or That Review</h2>
      <div class="review-score">Score: ${o.score} / 100 XP</div>
      <div class="review-list">
        ${o.answers.map((i,a)=>`
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
  `;t.innerHTML=s,G(t)}function G(t){t.querySelectorAll(".back-btn, .mobile-back-btn").forEach(n=>{n.addEventListener("click",()=>window.showHome())})}window.reviewThisOrThat=function(){const t=document.getElementById("app");Y(t)};window.startThisOrThatFromMenu=function(){const t=document.getElementById("app");q(t)};function de(t){t.innerHTML=`
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
          ${"QWERTYUIOP".split("").map(e=>`<button class="key">${e}</button>`).join("")}
        </div>

        <div class="key-row">
          ${"ASDFGHJKL".split("").map(e=>`<button class="key">${e}</button>`).join("")}
        </div>

        <div class="key-row">
          <button class="key special-key enter-key">ENTER</button>
          ${"ZXCVBNM".split("").map(e=>`<button class="key">${e}</button>`).join("")}
          <button class="key special-key">⌫</button>
        </div>
      </div>
    </div>
  `}const V="wordle_progress";function W(t){localStorage.setItem(V,JSON.stringify(t))}function K(){const t=localStorage.getItem(V);return t?JSON.parse(t):null}let f=[],Z=new Set,H=!1;const J="/the-andrew-times-games/";function ue(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return()=>(e+=e<<13,e^=e>>>7,e+=e<<3,e^=e>>>17,e+=e<<5,(e>>>0)/4294967296)}function pe(t,e){const n=ue(e),o=[...t];for(let s=o.length-1;s>0;s--){const i=Math.floor(n()*(s+1));[o[s],o[i]]=[o[i],o[s]]}return o}async function me(){if(!H)try{const[t,e]=await Promise.all([fetch(`${J}wordle-data/answers.json`),fetch(`${J}wordle-data/allowed.json`)]);if(!t.ok||!e.ok)throw new Error("Failed to load word list files");const n=await t.json(),o=await e.json();f=n.map(i=>i.toUpperCase()),f=pe(f,"wordle-v1");const s=o.map(i=>i.toUpperCase());Z=new Set([...f,...s]),H=!0}catch(t){throw console.error("❌ Failed to load word lists:",t),t}}function he(t){if(!H)return console.warn("Word lists not loaded yet"),!1;const e=t.trim().toUpperCase();return Z.has(e)}function ve(){if(!H)throw new Error("Word lists not loaded");if(f.length===0)throw new Error("No answers loaded");const t=new Date("2021-06-19"),e=new Date;t.setHours(0,0,0,0),e.setHours(0,0,0,0);const n=Math.floor((e-t)/864e5)%f.length;return f[n]}const L=5,j=6,I=100;async function we(t){await me();const e=ve(),n=new Date().toDateString(),o=K(),s=o&&o.date===n&&o.answer===e&&!o.won&&o.rowsUsed<j;let i=s?o.rowsUsed:0,a=0,p=s?!1:o&&o.date===n;const h=s?[...o.guesses]:[];let g=0,y=0;t.innerHTML=`
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
  `;const w=document.getElementById("wordle-root");de(w);const b=w.querySelectorAll(".row");s&&h.forEach((r,l)=>{const u=b[l].children;r.word.split("").forEach((v,d)=>{u[d].textContent=v,u[d].classList.add(r.result[d])})}),p&&o&&o.date===n&&(h.forEach((r,l)=>{const u=b[l].children;r.word.split("").forEach((v,d)=>{u[d].textContent=v,u[d].classList.add(r.result[d])})}),o.won?B(`🎉 You already completed today's Wordle! +${I} XP`):B(`The word was ${e}`));const C=()=>{!p&&h.length>0&&W({date:n,answer:e,won:!1,rowsUsed:i,guesses:h}),m(),window.showHome()};document.getElementById("back-home").onclick=C,document.getElementById("mobile-back-home").onclick=C;function M(r){a>=L||p||(b[i].children[a].textContent=r,a++)}function P(){a===0||p||(a--,b[i].children[a].textContent="")}function A(r){if(!p){if(r==="ENTER"){if(a!==L)return;E();return}if(r==="⌫"||r==="BACKSPACE"){P();return}/^[A-Z]$/.test(r)&&M(r)}}function E(){const r=b[i].children,l=Array.from(r).map(d=>d.textContent).join("");if(!he(l)){B("⌫ Not in word list");return}const u=e.split(""),v=Array(L).fill("absent");for(let d=0;d<L;d++)l[d]===u[d]&&(r[d].classList.add("correct"),v[d]="correct",u[d]=null);for(let d=0;d<L;d++){if(v[d]==="correct")continue;const U=u.indexOf(l[d]);U!==-1?(r[d].classList.add("present"),v[d]="present",u[U]=null):r[d].classList.add("absent")}if(h.push({word:l,result:v}),W({date:n,answer:e,won:l===e,rowsUsed:i+1,guesses:h}),l===e){O(!0);return}i++,a=0,i===j&&O(!1)}function O(r){if(p=!0,c.markPlayedToday("wordle"),r){const l=c.addXP(I);l.leveledUp?(g=l.levelsGained,y=l.unopenedBoxes,k()):B(`🎉 You got it! +${I} XP`)}else B(`The word was ${e}`);W({date:n,answer:e,won:r,rowsUsed:h.length,guesses:h})}function k(){const r=w.querySelector(".wordle-message");r&&r.remove();const l=document.createElement("div");l.className="wordle-message level-up-message",l.innerHTML=`
      <div style="font-size: 1.3rem; margin-bottom: 10px;">🎉 You got it! +${I} XP</div>
      <div style="font-size: 1.4rem; font-weight: 700; margin: 15px 0 10px;">🎉 LEVEL UP! 🎉</div>
      <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; margin-top: 10px;">
        <div style="font-size: 1.1rem; margin-bottom: 8px;">
          You gained ${g} ${g===1?"level":"levels"}!
        </div>
        <div style="margin-bottom: 12px;">
          ${y} mystery ${y===1?"box":"boxes"} waiting for you!
        </div>
        <button class="open-boxes-btn" onclick="window.showMysteryBox()">
          Open Mystery ${y===1?"Box":"Boxes"} 🎁
        </button>
      </div>
    `,w.appendChild(l)}function B(r){const l=w.querySelector(".wordle-message");l&&l.remove();const u=document.createElement("div");u.className="wordle-message",u.textContent=r,w.appendChild(u)}function $(r){A(r.key.toUpperCase())}window.addEventListener("keydown",$),w.querySelectorAll(".key").forEach(r=>{r.addEventListener("click",()=>A(r.textContent))});function m(){window.removeEventListener("keydown",$)}}function ge(t){const e=new Date().toDateString(),n=K();if(!n||n.date!==e){t.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align:center; color:#666;">
          Play today’s Wordle first!
        </p>
      </div>
    `;return}t.innerHTML=`
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <h2>Today’s Wordle</h2>

      <div class="review-summary ${n.won?"won":"lost"}">
        ${n.won?`🎉 Solved in ${n.rowsUsed} / 6 guesses`:"😢 Not solved today"}
      </div>

      <div class="wordle-review-grid">
        ${(n.guesses||[]).map(o=>`
          <div class="review-row">
            ${o.word.split("").map((s,i)=>`
              <div class="tile ${o.result[i]}">
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
  `}const D=[{category:"My Favorite 80s Rock Bands",answers:["the smiths","talking heads","misfits","queen"]},{category:"My Four Favorite Beers",answers:["guinness","blue moon","coors light","michelob ultra"]},{category:"Madison's Food Combos",answers:["ketchup and rice","orange juice and popcorn","weenies and toast","jam and sausage"]},{category:"My Spotify Wrapped Artists",answers:["radiohead","nat king cole","bobby darin","a tribe called quest"]},{category:"The Four Best Cities I Have Visited",answers:["Chicago","Charleston","St. Augustine","Anna Maria"]},{category:"My Favorite SNL Cast Members",answers:["Tim Robinson","Fred Armisen","Mike Myers","Norm Macdonald"]},{category:"Art I Would Get A Tattoo Of (Music, Movies, etc.)",answers:["Bladerunner","Rage Against The Machine","Radiohead","Tool"]},{category:"Things I Would Put In My Butt If I Had To",answers:["Marshmallow","M&Ms","Bar of Soap","Finger"]},{category:"Jobs I'd Try For A Month",answers:["Police Officer","Baker","Fisherman","Mechanic"]},{category:"Best Xbox Games I've Played",answers:["Doom Eternal","Overwatch","South Park: The Fractured But Whole","Call of Duty: Black Ops 2"]},{category:"Things I'd Buy If I Won The Lottery",answers:["Suit","Ear Rings","Radiohead Tickets","Porsche"]},{category:"Male Dog Names I Like",answers:["James","Winston","Peter","Ryan"]},{category:"Favorite Historical Civilizations",answers:["Greeks","Egyptians","Mongols","Anglo-Saxons"]},{category:"Worst Celebrities (Not Criminal)",answers:["James Corden","Ellen DeGeneres","Drake","Adam Sandler"]},{category:"Bugs I Would Like To Be",answers:["Bee","Dragonfly","Caterpillar","Centipede"]},{category:"Funny Road Names Near Madison",answers:["pickle buddy court","honey girl lane","ruby golightly drive","apple butter drive"]},{category:"Food Items That Give You The Worst Breath",answers:["Garlic","Onion","Lemonade","Candy"]},{category:"Best 90s Female Singers",answers:["Bjork","Fiona Apple","Janet Jackson","Lauryn Hill"]},{category:"Best Reality TV Shows",answers:["Love Is Blind","Love On The Spectrum","Big Brother","To Catch A Predator"]},{category:"Celebrities I Have Been Told I Look Like",answers:["Josh Allen","Markiplier","Josheph Gordon-Levitt","Mark Wahlberg"]},{category:"Show Hosts I Enjoy(ed)",answers:["Conan O'Brien","Tom Bergeron","Chris Harrison","Steve Harvey"]},{category:"Best Roller Coasters I've Been On",answers:["Fury 325","Mako","The Hulk","Dueling Dragons"]},{category:"Childhood Games I Enjoyed",answers:["Webkinz","Mariokart","Puzzle Quest","Wolf Of The Battlefield: Commando 3"]},{category:"Favorite Simpson Characters",answers:["Homer Simpson","Ned Flanders","Smithers","Principal Skinner"]},{category:"Restaurants I Have Eaten At The Most In My Life",answers:["Chickfila","Moes","Chipotle","Wendys"]},{category:"Video Games I Wish I Liked More",answers:["The Witcher 3","Mortal Kombat","Cuphead","Grand Theft Auto V"]},{category:"Superheroes I'd Like To Be",answers:["Batman","Spiderman","Cyclops","Doctor Strange"]},{category:"Cereal Mascots I Could Beat In A Fight",answers:["Lucky","Buzz","Toucan Sam","Trix Rabbit"]},{category:"Favorite Poker Slang",answers:["Muck","Bullets","Wheel","Donk"]},{category:"Breeds of Dogs I Like",answers:["English Labrador","Corgi","Dachshund","Cattle Dog"]}],ee="name_four_progress";function ye(t){localStorage.setItem(ee,JSON.stringify(t))}function te(){const t=localStorage.getItem(ee);return t?JSON.parse(t):null}const F=25;function be(){const t=new Date("2025-01-01"),e=new Date;t.setHours(0,0,0,0),e.setHours(0,0,0,0);const n=Math.floor((e-t)/(1e3*60*60*24));return D[n%D.length]}function Be(t){const e=new Date().toDateString(),n=be(),o=n.answers.map(m=>m.toUpperCase()),s=te(),i=new Set(s?.date===e?s.found||[]:[]),a=new Set(s?.date===e?s.revealed||[]:[]);let p=s?.date===e&&s.guessCount||0,h=s?.date===e&&s.xpAwarded||0,g=s?.date===e&&s.completed,y=0,w=0;t.innerHTML=`
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
          ${g?"disabled":""}
        />
        <button type="submit" ${g?"disabled":""}>
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
  `;const b=document.getElementById("guess-input"),C=document.getElementById("answer-grid"),M=document.getElementById("completion-message");document.getElementById("level-up-message");const P=document.getElementById("feedback-message");document.getElementById("back-home").onclick=()=>window.showHome(),document.getElementById("mobile-back-home").onclick=()=>window.showHome(),A(),g&&$(),document.getElementById("guess-form").onsubmit=m=>{if(m.preventDefault(),g)return;const r=b.value.trim();if(!r)return;const l=r.toUpperCase();if(b.value="",p++,i.has(l)||a.has(l)){k();return}if(o.includes(l)){i.add(l);const u=O();u.leveledUp&&(y+=u.levelsGained,w=u.unopenedBoxes),E(l,!0),setTimeout(()=>{A(),P.innerHTML="",i.size+a.size===4&&B()},1500)}else E(l,!1),setTimeout(()=>{P.innerHTML=""},1500);k()};function A(){C.innerHTML="",o.forEach(m=>{const r=i.has(m)||a.has(m),l=document.createElement("div");l.className=`answer-box ${r?"solved":""}`;const u=document.createElement("div");if(u.className="answer-text",u.textContent=r?m:m.replace(/[A-Z]/gi,"_"),l.appendChild(u),!r&&!g){const v=document.createElement("button");v.className="reveal-single-btn",v.textContent="Reveal",v.onclick=()=>{a.add(m),A(),i.size+a.size===4&&B(),k()},l.appendChild(v)}C.appendChild(l)})}function E(m,r){P.innerHTML=`
      <div class="feedback-display ${r?"correct":"incorrect"}">
        <div class="feedback-icon">${r?"✓":"✗"}</div>
        <div class="feedback-text">
          ${r?"Correct!":"Not quite!"}
        </div>
        <div class="feedback-answer">
          ${r?m:"Try again!"}
        </div>
        <div class="xp-earned">+${r?F:0} XP</div>
      </div>
    `}function O(){return h+=F,c.addXP(F)}function k(m=!1){ye({date:e,found:[...i],revealed:[...a],completed:m||g,guessCount:p,xpAwarded:h})}function B(){g=!0,c.markPlayedToday("name-four"),b.disabled=!0,document.querySelector("#guess-form button").disabled=!0,k(!0),$()}function $(){y>0?M.innerHTML=`
        <div class="completion completion-with-levelup">
          <div style="font-size: 1.3rem; margin-bottom: 10px;">🎉 Puzzle complete</div>
          <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 8px;">+${h} XP</div>
          <div style="margin-bottom: 15px;">Total guesses: <strong>${p}</strong></div>
          
          <div style="font-size: 1.4rem; font-weight: 700; margin: 15px 0 10px;">🎉 LEVEL UP! 🎉</div>
          <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; margin-top: 10px;">
            <div style="font-size: 1.1rem; margin-bottom: 8px;">
              You gained ${y} ${y===1?"level":"levels"}!
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
      `:M.innerHTML=`
        <div class="completion">
          🎉 Puzzle complete
          <div class="xp">+${h} XP</div>
          <p>Total guesses: <strong>${p}</strong></p>
          <p>Come back tomorrow for a new category</p>
        </div>
      `}}function fe(){const t=new Date("2025-01-01"),e=new Date;t.setHours(0,0,0,0),e.setHours(0,0,0,0);const n=Math.floor((e-t)/(1e3*60*60*24));return D[n%D.length]}function Ae(t){const e=new Date().toDateString(),n=fe(),o=te();if(!o||o.date!==e){t.innerHTML=`
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
    `;return}const s=new Set(o.found||[]),i=new Set(o.revealed||[]);t.innerHTML=`
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
          <strong>${o.guessCount??0}</strong>
        </div>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}const T=document.getElementById("app");function z(){const t=c.getCurrentLevel(),e=c.getTotalXP(),n=c.getXPToNextLevel(),o=c.getXPProgressInLevel(),s=c.getUnopenedBoxes(),i=c.getCollectionStats(),a=s>0&&i.uniqueOwned===0;T.innerHTML=`
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
            <span class="level">Level ${t}</span>
            <span class="xp">${e} XP</span>
          </div>

          <div class="xp-section">
            <div class="xp-bar">
              <div class="xp-fill" style="width: ${o/300*100}%"></div>
            </div>
            <div class="xp-text">${n} XP to Level ${t+1}</div>
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
        <div class="game-card ${c.hasPlayedToday("thisOrThat")?"completed":""}"
             onclick="handleGameClick('thisOrThat')">
          <div class="game-icon">
            <img src="./game-icons/this_or_that_192.png" alt="This or That" />
          </div>
          <h3>This or That</h3>
          <p>Guess what I would choose</p>
          <div class="game-xp">Up to 100 XP</div>

          ${c.hasPlayedToday("thisOrThat")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- WORDLE -->
        <div class="game-card ${c.hasPlayedToday("wordle")?"completed":""}"
             onclick="handleGameClick('wordle')">
          <div class="game-icon">
            <img src="./game-icons/wordle_clone_192.png" alt="Wordle" />
          </div>
          <h3>Wordle</h3>
          <p>Guess the secret word</p>
          <div class="game-xp">100 XP</div>

          ${c.hasPlayedToday("wordle")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- NAME FOUR -->
        <div class="game-card ${c.hasPlayedToday("name-four")?"completed":""}"
             onclick="handleGameClick('name-four')">
          <div class="game-icon">
            <img src="./game-icons/name_four_192.png" alt="Name Four" />
          </div>
          <h3>Name Four</h3>
          <p>Find the four that belong together</p>
          <div class="game-xp">Up to 100 XP</div>

          ${c.hasPlayedToday("name-four")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>
      </div>

      <button class="collection-btn" onclick="showCollection()">
        View Sticker Collection
      </button>
    </div>
  `}function ke(){T.innerHTML=`
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
          ${c.getUnopenedBoxes()} ${c.getUnopenedBoxes()===1?"box":"boxes"} remaining
        </div>

        <button class="open-box-btn" onclick="openBox()">
          Open Box
        </button>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}function xe(){const t=c.openMysteryBox();if(!t){z();return}const{sticker:e,isDuplicate:n,bonusXP:o,totalOwned:s}=t;document.getElementById("mysteryBox").classList.add("opening"),setTimeout(()=>{Se(e,n,o,s)},800)}function Se(t,e,n,o){const s=x[t.rarity],i=X[t.rarity],a=c.getUnopenedBoxes();T.innerHTML=`
    <div class="sticker-reveal-screen">
      <div class="reveal-container">
        <div class="reveal-card" style="border-color: ${s}">
          <div class="reveal-rarity" style="color: ${s}">
            ${i}
          </div>
          
          <div class="reveal-sticker">
            <img src="${t.image}" alt="${t.name}" 
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22200%22 height=%22200%22 fill=%22${s}%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2248%22 fill=%22white%22>${t.name.charAt(0)}</text></svg>'" />
          </div>
          
          <div class="reveal-name">${t.name}</div>
          
          ${e?`
            <div class="duplicate-badge">
              <span class="duplicate-icon">×${o}</span>
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
  `,setTimeout(()=>{document.querySelector(".reveal-card").classList.add("animate-in")},50)}function Te(){const t=c.getAllStickers(),e=c.getCollectionStats(),n=c.getUnopenedBoxes(),o={legendary:t.filter(s=>s.rarity==="legendary"),rare:t.filter(s=>s.rarity==="rare"),uncommon:t.filter(s=>s.rarity==="uncommon"),common:t.filter(s=>s.rarity==="common")};T.innerHTML=`
    <div class="collection-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      
      <div class="collection-header">
        <h2>Sticker Collection</h2>
        <div class="collection-stats">
          <div class="stat">
            <span class="stat-value">${e.uniqueOwned}/${e.totalStickers}</span>
            <span class="stat-label">Collected</span>
          </div>
          <div class="stat">
            <span class="stat-value">${e.completionPercent}%</span>
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
        ${Object.entries(e.rarityStats).map(([s,i])=>`
          <div class="rarity-stat" style="border-left: 3px solid ${x[s]}">
            <span class="rarity-name" style="color: ${x[s]}">
              ${X[s]}
            </span>
            <span class="rarity-count">${i.owned}/${i.total}</span>
          </div>
        `).join("")}
      </div>

      ${Object.entries(o).map(([s,i])=>`
        <div class="sticker-section">
          <h3 class="section-title" style="color: ${x[s]}">
            ${X[s]} (${i.filter(a=>a.owned>0).length}/${i.length})
          </h3>
          <div class="sticker-grid">
            ${i.map(a=>`
              <div class="sticker-card ${a.owned>0?"owned":"locked"}" 
                   style="border-color: ${x[s]}">
                ${a.owned>0?`
                  <img src="${a.image}" alt="${a.name}"
                       onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%22 height=%22100%22 fill=%22${x[s]}%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2232%22 fill=%22white%22>${a.name.charAt(0)}</text></svg>'" />
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
  `}async function Ce(t){c.hasPlayedToday(t)?$e(t):await Pe(t)}async function Pe(t){T.innerHTML=`
    <div id="game-container"></div>
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;const e=document.getElementById("game-container");t==="thisOrThat"&&q(e),t==="wordle"&&await we(e),t==="name-four"&&Be(e)}function $e(t){T.innerHTML=`
    <div id="game-container"></div>
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;const e=document.getElementById("game-container");t==="thisOrThat"&&Y(e),t==="wordle"&&ge(e),t==="name-four"&&Ae(e)}window.showHome=z;window.showCollection=Te;window.showMysteryBox=ke;window.openBox=xe;window.handleGameClick=Ce;z();
