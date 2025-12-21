(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const M=[{id:1,optionA:"Methodical",optionB:"Rowan",answer:"B"},{id:2,optionA:"Clash Royale",optionB:"Overwatch",answer:"B"},{id:3,optionA:"Pocket 8s",optionB:"Ace 9 Suited",answer:"B"},{id:4,optionA:"Apple Bold Rock",optionB:"Mimosa Bold Rock",answer:"A"},{id:5,optionA:"Dr Pepper",optionB:"Coke",answer:"B"},{id:6,optionA:"Krusty",optionB:"Ned",answer:"B"},{id:7,optionA:"Robots",optionB:"Hoodwinked",answer:"A"},{id:8,optionA:"WW2",optionB:"Vietnam",answer:"B"},{id:9,optionA:"Oil",optionB:"Acrylic",answer:"A"},{id:10,optionA:"Pearl Jam",optionB:"Alice in Chains",answer:"A"},{id:11,optionA:"Sophomore Year HS",optionB:"Sophomore Year College",answer:"A"},{id:12,optionA:"Calculus",optionB:"Statistics",answer:"A"},{id:13,optionA:"George Bush",optionB:"Bill Clinton",answer:"A"},{id:14,optionA:"Quiche",optionB:"Roast",answer:"A"},{id:15,optionA:"Japan",optionB:"Greece",answer:"A"},{id:16,optionA:"100 Spiders",optionB:"20 Squirrels",answer:"A"},{id:17,optionA:"Unlimited Games & Bacon",optionB:"No Games",answer:"A"},{id:18,optionA:"Minecraft Cottage",optionB:"Minecraft Castle",answer:"A"},{id:19,optionA:"Lead Out Bluff",optionB:"Re-raise Bluff",answer:"B"},{id:20,optionA:"Checkerboard Flooring",optionB:"Carpet",answer:"A"},{id:21,optionA:"Sci-Fi",optionB:"Westerns",answer:"A"},{id:22,optionA:"Sunny",optionB:"Partly Cloudy",answer:"B"},{id:23,optionA:"Spring",optionB:"Summer",answer:"A"},{id:24,optionA:"Big Black Puffer",optionB:"Fake Leather",answer:"A"},{id:25,optionA:"Whole Number",optionB:"Decimal Numbers",answer:"B"},{id:26,optionA:"Butt Rash",optionB:"Butt Cuts",answer:"B"},{id:27,optionA:"Queen",optionB:"Michael Jackson",answer:"B"},{id:28,optionA:"Peak Scythe",optionB:"Peak Poker",answer:"A"},{id:29,optionA:"Bench Press",optionB:"Deadlift",answer:"A"},{id:30,optionA:"Chicken Pot Pie",optionB:"Hamburger",answer:"A"},{id:31,optionA:"Cadbury Egg",optionB:"Chocolate Chip Cookie",answer:"B"},{id:32,optionA:"Fame",optionB:"Money",answer:"B"},{id:33,optionA:"Matcha",optionB:"Iced Americano",answer:"B"},{id:34,optionA:"Mimi",optionB:"Nana",answer:"B"},{id:35,optionA:"Leather",optionB:"Velvet",answer:"A"}];function J(){const s=new Date().toDateString(),e=localStorage.getItem("thisOrThat_daily");if(e){const r=JSON.parse(e);if(r.date===s)return r.questions}const t=U();let o=M.filter(r=>!t.includes(r.id));o.length<5&&(V(),o=[...M]);const i=o.sort(()=>Math.random()-.5).slice(0,5);return z(i.map(r=>r.id)),localStorage.setItem("thisOrThat_daily",JSON.stringify({date:s,questions:i})),i}function U(){const s=localStorage.getItem("thisOrThat_seen");return s?JSON.parse(s):[]}function z(s){const e=U(),t=[...new Set([...e,...s])];localStorage.setItem("thisOrThat_seen",JSON.stringify(t))}function V(){localStorage.setItem("thisOrThat_seen",JSON.stringify([]))}const k=[{level:1,xpRequired:300,type:"image",path:"rewards/simpsons.png",title:"A Picture of Me",description:"You unlocked your first reward!"},{level:2,xpRequired:600,type:"image",path:"rewards/lil_madison.png",title:"Me Singing For You",description:"Hope you enjoy this... 🎤😅"},{level:3,xpRequired:900,type:"text",title:"A Poem Just For You",content:`Your poem will go here...
    
Multiple lines work!
You can write something sweet 💕`,description:"A special poem written just for you"},{level:4,xpRequired:1200,type:"text",title:"Coffee On Me! ☕",content:"This is an IOU for one coffee of your choice - my treat! Redeem anytime 😊",description:"Free coffee whenever you want!"},{level:5,xpRequired:1500,type:"image",path:"rewards/simpsons.png",title:"Another Picture of Me",description:"Another one for your collection! 📸"},{level:6,xpRequired:1800,type:"image",path:"rewards/lil_madison.png",title:"Funny Video",description:"Prepare to laugh 😂"},{level:7,xpRequired:2100,type:"text",title:"Ultimate Embarrassment IOU",content:"I will embarrass myself in ANY way you ask. No limits. You have full control. Use this power wisely... 😰",description:"The ultimate reward - make me do anything!"}];class K{constructor(){this.load()}load(){const e=localStorage.getItem("gameProgress");if(e){const t=JSON.parse(e);this.totalXP=t.totalXP||0,this.unlockedRewards=t.unlockedRewards||[],this.lastPlayed=t.lastPlayed||{}}else this.totalXP=0,this.unlockedRewards=[],this.lastPlayed={}}save(){localStorage.setItem("gameProgress",JSON.stringify({totalXP:this.totalXP,unlockedRewards:this.unlockedRewards,lastPlayed:this.lastPlayed}))}addXP(e){const t=this.getCurrentLevel();this.totalXP+=e;const o=this.getCurrentLevel();if(this.save(),o>t){const n=[];for(let i=t+1;i<=o;i++)this.unlockedRewards.includes(i)||(this.unlockedRewards.push(i),n.push(k[i-1]));return{leveledUp:!0,newRewards:n}}return{leveledUp:!1}}getCurrentLevel(){for(let e=k.length-1;e>=0;e--)if(this.totalXP>=k[e].xpRequired)return k[e].level;return 0}getNextReward(){const e=this.getCurrentLevel();return k[e]||null}getXPToNextLevel(){const e=this.getNextReward();return e?e.xpRequired-this.totalXP:0}getAllRewards(){return k}getUnlockedRewards(){return k.filter(e=>this.unlockedRewards.includes(e.level))}hasPlayedToday(e){const t=new Date().toDateString();return this.lastPlayed[e]===t}markPlayedToday(e){const t=new Date().toDateString();this.lastPlayed[e]=t,this.save()}getTotalXP(){return this.totalXP}}const u=new K;class Z{constructor(e){this.container=e,this.questions=J(),this.currentQuestionIndex=0,this.score=0,this.answers=[],this.isComplete=!1,this.levelUpRewards=[],this.loadProgress(),this.render()}loadProgress(){const e=new Date().toDateString(),t=localStorage.getItem("thisOrThat_progress");if(t){const o=JSON.parse(t);if(o.date===e)return this.score=o.score||0,this.answers=o.answers||[],this.currentQuestionIndex=this.answers.length,this.isComplete=o.complete||!1,!0}return!1}saveProgress(e=!1){const t=new Date().toDateString();localStorage.setItem("thisOrThat_progress",JSON.stringify({date:t,complete:e||this.isComplete,score:this.score,answers:this.answers,currentQuestionIndex:this.currentQuestionIndex}))}handleAnswer(e){const t=this.questions[this.currentQuestionIndex],o=e===t.answer;if(this.answers.push({question:t,userChoice:e,correct:o}),o){this.score+=20;const n=u.addXP(20);n.leveledUp&&n.newRewards.length>0&&this.levelUpRewards.push(...n.newRewards)}this.saveProgress(!1),this.showResult(o,t),setTimeout(()=>{this.currentQuestionIndex++,this.currentQuestionIndex>=this.questions.length?this.completeGame():this.render()},1500)}showResult(e,t){const o=this.container.querySelector(".game-content"),n=t.answer==="A"?t.optionA:t.optionB;o.innerHTML=`
      <div class="result-screen ${e?"correct":"incorrect"}">
        <div class="result-icon">${e?"✓":"✗"}</div>
        <div class="result-text">
          ${e?"Correct!":"Not quite!"}
        </div>
        <div class="correct-answer">
          I would choose: <strong>${n}</strong>
        </div>
        <div class="xp-earned">+${e?20:0} XP</div>
      </div>
    `}completeGame(){this.isComplete=!0,this.saveProgress(!0),u.markPlayedToday("thisOrThat");const e=u.getCurrentLevel(),t=u.getTotalXP();this.showCompletionScreen({currentLevel:e,totalXP:t})}showCompletionScreen(e){const t=this.score/100*100;let o=`
      <div class="completion-screen">
        <h2>Today's Results</h2>
        <div class="final-score">${this.score} / 100 XP</div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${t}%"></div>
        </div>
        <div class="summary">
          You got ${this.answers.filter(n=>n.correct).length} out of ${this.questions.length} correct!
        </div>
    `;this.levelUpRewards.length>0&&(o+=`
        <div class="level-up">
          <div class="level-up-banner">🎉 LEVEL UP! 🎉</div>
          ${this.levelUpRewards.map(n=>`
            <div class="new-reward">
              <strong>${n.title}</strong>
              <div>${n.description}</div>
            </div>
          `).join("")}
        </div>
      `),o+=`
        <div class="total-progress">
          Total XP: ${e.totalXP} 
          <span class="level-badge">Level ${e.currentLevel}</span>
        </div>
        <button class="review-btn" onclick="reviewThisOrThat()">
          Review Answers
        </button>
      </div>
    `,this.container.querySelector(".game-content").innerHTML=o}showReview(){const e=`
      <div class="review-screen">
        <h2>Answer Review</h2>
        <div class="review-list">
          ${this.answers.map((t,o)=>`
            <div class="review-item ${t.correct?"correct":"incorrect"}">
              <div class="review-number">Question ${o+1}</div>
              <div class="review-question">
                <span class="choice ${t.userChoice==="A"?"selected":""}">${t.question.optionA}</span>
                <span class="vs">or</span>
                <span class="choice ${t.userChoice==="B"?"selected":""}">${t.question.optionB}</span>
              </div>
              <div class="review-result">
                ${t.correct?"✓ Correct!":`✗ I chose: ${t.question.answer==="A"?t.question.optionA:t.question.optionB}`}
              </div>
            </div>
          `).join("")}
        </div>
        <button class="home-btn" onclick="showHome()">Back to Home</button>
      </div>
    `;this.container.querySelector(".game-content").innerHTML=e}render(){if(this.isComplete){const t=u.getCurrentLevel(),o=u.getTotalXP();this.showCompletionScreen({currentLevel:t,totalXP:o});return}const e=this.questions[this.currentQuestionIndex];this.container.innerHTML=`
      <div class="this-or-that-game">
        <div class="game-header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>This or That</h2>
          <div class="progress-indicator">
            Question ${this.currentQuestionIndex+1} / ${this.questions.length}
          </div>
        </div>
        
        <div class="game-content">
          <div class="question-prompt">Which would I choose?</div>
          
          <div class="choices">
            <button class="choice-btn choice-a" onclick="thisOrThat.handleAnswer('A')">
              ${e.optionA}
            </button>
            
            <div class="or-divider">OR</div>
            
            <button class="choice-btn choice-b" onclick="thisOrThat.handleAnswer('B')">
              ${e.optionB}
            </button>
          </div>
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `}}window.thisOrThat=null;function X(s){window.thisOrThat=new Z(s)}function W(s){const e=new Date().toDateString(),t=localStorage.getItem("thisOrThat_progress");if(!t){s.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align: center; color: #666;">Play today's This or That game first!</p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;return}const o=JSON.parse(t);if(o.date!==e||!o.complete){const i=o.answers?.length||0;s.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>${i>0?"In Progress":"No Results Yet"}</h2>
        <p style="text-align: center; color: #666;">
          ${i>0?`You've answered ${i} of 5 questions. Complete the game to review all answers!`:"Complete today's This or That game first!"}
        </p>
        ${i>0?`
          <button class="continue-btn" onclick="startThisOrThatFromMenu()">
            Continue Game
          </button>
        `:""}
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;return}const n=`
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Today's This or That Review</h2>
      <div class="review-score">Score: ${o.score} / 100 XP</div>
      <div class="review-list">
        ${o.answers.map((i,r)=>`
          <div class="review-item ${i.correct?"correct":"incorrect"}">
            <div class="review-number">Question ${r+1}</div>
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
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;s.innerHTML=n}window.reviewThisOrThat=function(){const s=document.getElementById("app");W(s)};window.startThisOrThatFromMenu=function(){const s=document.getElementById("app");X(s)};function ee(s){s.innerHTML=`
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
  `}const _="wordle_progress";function O(s){localStorage.setItem(_,JSON.stringify(s))}function F(){const s=localStorage.getItem(_);return s?JSON.parse(s):null}let b=[],N=new Set,R=!1;const I="/the-andrew-times-games/";function te(s){let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return()=>(e+=e<<13,e^=e>>>7,e+=e<<3,e^=e>>>17,e+=e<<5,(e>>>0)/4294967296)}function se(s,e){const t=te(e),o=[...s];for(let n=o.length-1;n>0;n--){const i=Math.floor(t()*(n+1));[o[n],o[i]]=[o[i],o[n]]}return o}async function oe(){if(!R)try{const[s,e]=await Promise.all([fetch(`${I}wordle-data/answers.json`),fetch(`${I}wordle-data/allowed.json`)]);if(!s.ok||!e.ok)throw new Error("Failed to load word list files");const t=await s.json(),o=await e.json();b=t.map(i=>i.toUpperCase()),b=se(b,"wordle-v1");const n=o.map(i=>i.toUpperCase());N=new Set([...b,...n]),R=!0,console.log("✅ Word lists loaded:",b.length,"answers,",N.size,"allowed"),console.log("Today's answer:",G())}catch(s){throw console.error("❌ Failed to load word lists:",s),s}}function ne(s){if(!R)return console.warn("Word lists not loaded yet"),!1;const e=s.trim().toUpperCase();return N.has(e)}function G(){if(!R)throw new Error("Word lists not loaded");if(b.length===0)throw new Error("No answers loaded");const s=new Date("2021-06-19"),e=new Date;s.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-s)/864e5)%b.length;return b[t]}const P=5,q=6,E=100;async function ie(s){await oe();const e=G(),t=new Date().toDateString(),o=F(),n=o&&o.date===t&&o.answer===e&&!o.won&&o.rowsUsed<q;let i=n?o.rowsUsed:0,r=0,p=n?!1:o&&o.date===t;const m=n?[...o.guesses]:[];s.innerHTML=`
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
  `;const w=document.getElementById("wordle-root");ee(w);const g=w.querySelectorAll(".row");n&&m.forEach((a,c)=>{const d=g[c].children;a.word.split("").forEach((h,l)=>{d[l].textContent=h,d[l].classList.add(a.result[l])})}),p&&o&&o.date===t&&(m.forEach((a,c)=>{const d=g[c].children;a.word.split("").forEach((h,l)=>{d[l].textContent=h,d[l].classList.add(a.result[l])})}),o.won?f(`🎉 You already completed today's Wordle! +${E} XP`):f(`😢 The word was ${e}`));const A=()=>{!p&&m.length>0&&O({date:t,answer:e,won:!1,rowsUsed:i,guesses:m}),v(),window.showHome()};document.getElementById("back-home").onclick=A,document.getElementById("mobile-back-home").onclick=A;function $(a){r>=P||p||(g[i].children[r].textContent=a,r++)}function L(){r===0||p||(r--,g[i].children[r].textContent="")}function B(a){if(!p){if(a==="ENTER"){if(r!==P)return;x();return}if(a==="⌫"||a==="BACKSPACE"){L();return}/^[A-Z]$/.test(a)&&$(a)}}function x(){const a=g[i].children,c=Array.from(a).map(l=>l.textContent).join("");if(!ne(c)){f("⌫ Not in word list");return}const d=e.split(""),h=Array(P).fill("absent");for(let l=0;l<P;l++)c[l]===d[l]&&(a[l].classList.add("correct"),h[l]="correct",d[l]=null);for(let l=0;l<P;l++){if(h[l]==="correct")continue;const H=d.indexOf(c[l]);H!==-1?(a[l].classList.add("present"),h[l]="present",d[H]=null):a[l].classList.add("absent")}if(m.push({word:c,result:h}),O({date:t,answer:e,won:c===e,rowsUsed:i+1,guesses:m}),c===e){y(!0);return}i++,r=0,i===q&&y(!1)}function y(a){if(p=!0,u.markPlayedToday("wordle"),a){const c=u.addXP(E);let d=`🎉 You got it! +${E} XP`,h=!1;c.leveledUp&&c.newRewards.length>0&&(h=!0,d+=`

🎉 LEVEL UP! 🎉
`,c.newRewards.forEach(l=>{d+=`
✨ Unlocked: ${l.title}
${l.description}`})),f(d,h)}else f(`😢 The word was ${e}`);O({date:t,answer:e,won:a,rowsUsed:m.length,guesses:m})}function f(a,c=!1){const d=w.querySelector(".wordle-message");d&&d.remove();const h=document.createElement("div");h.className="wordle-message",c&&h.classList.add("level-up-message"),h.textContent=a,w.appendChild(h)}function T(a){B(a.key.toUpperCase())}window.addEventListener("keydown",T),w.querySelectorAll(".key").forEach(a=>{a.addEventListener("click",()=>B(a.textContent))});function v(){window.removeEventListener("keydown",T)}}function ae(s){const e=new Date().toDateString(),t=F();if(!t||t.date!==e){s.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align:center; color:#666;">
          Play today’s Wordle first!
        </p>
      </div>
    `;return}s.innerHTML=`
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <h2>Today’s Wordle</h2>

      <div class="review-summary ${t.won?"won":"lost"}">
        ${t.won?`🎉 Solved in ${t.rowsUsed} / 6 guesses`:"😢 Not solved today"}
      </div>

      <div class="wordle-review-grid">
        ${(t.guesses||[]).map(o=>`
          <div class="review-row">
            ${o.word.split("").map((n,i)=>`
              <div class="tile ${o.result[i]}">
                ${n}
              </div>
            `).join("")}
          </div>
        `).join("")}
      </div>

      <div class="review-answer">
        Answer: <strong>${t.answer}</strong>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}const S=[{category:"Nicknames",answers:["beanie","boobie","munt","tony"]},{category:"Favorite 80s Rock Bands",answers:["the smiths","talking heads","misfits","queen"]},{category:"In Your Room",answers:["box fan","john lennon poster","vision board","wallpaper"]},{category:"Food Combos",answers:["ketchup and rice","orange juice and popcorn","weenies and toast","jam and sausage"]},{category:"Road Names",answers:["pickle buddy court","honey girl lane","ruby golightly drive","apple butter drive"]},{category:"Crushes",answers:["cillian murphy","drew starkey","dallas","chris christie"]},{category:"Lead Actors of Movies We Watched",answers:["timothee chalamet","harrison ford","dylan o'brien","jim carrey"]},{category:"My Spotify Wrapped Artists",answers:["radiohead","nat king cole","bobby darin","a tribe called quest"]}],j="name_four_progress";function re(s){localStorage.setItem(j,JSON.stringify(s))}function Q(){const s=localStorage.getItem(j);return s?JSON.parse(s):null}const D=25;function le(){const s=new Date("2025-01-01"),e=new Date;s.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-s)/(1e3*60*60*24));return S[t%S.length]}function ce(s){const e=new Date().toDateString(),t=le(),o=t.answers.map(v=>v.toUpperCase()),n=Q(),i=new Set(n?.date===e?n.found||[]:[]),r=new Set(n?.date===e?n.revealed||[]:[]);let p=n?.date===e&&n.guessCount||0,m=n?.date===e&&n.xpAwarded||0,w=n?.date===e&&n.completed,g=[];s.innerHTML=`
    <div class="name-four">
      <button class="back-btn" id="back-home">← Back</button>

      <h2>Name Four</h2>
      <div class="category">
        Category: <strong>${t.category}</strong>
      </div>

      <div class="answer-grid" id="answer-grid"></div>

      <form id="guess-form" class="guess-form">
        <input
          id="guess-input"
          type="text"
          placeholder="Type a guess..."
          autocomplete="off"
          ${w?"disabled":""}
        />
        <button type="submit" ${w?"disabled":""}>
          Submit
        </button>
      </form>

      <div id="completion-message"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" id="mobile-back-home">← Back</button>
    </div>
  `;const A=document.getElementById("guess-input"),$=document.getElementById("answer-grid"),L=document.getElementById("completion-message");document.getElementById("back-home").onclick=()=>window.showHome(),document.getElementById("mobile-back-home").onclick=()=>window.showHome(),B(),w&&T(),document.getElementById("guess-form").onsubmit=v=>{if(v.preventDefault(),w)return;const a=A.value.trim();if(!a)return;const c=a.toUpperCase();if(A.value="",p++,i.has(c)||r.has(c)){y();return}if(o.includes(c)){i.add(c);const d=x();d.leveledUp&&d.newRewards.length>0&&g.push(...d.newRewards),B(),i.size+r.size===4&&f()}y()};function B(){$.innerHTML="",o.forEach(v=>{const a=i.has(v)||r.has(v),c=document.createElement("div");c.className=`answer-box ${a?"solved":""}`;const d=document.createElement("div");if(d.className="answer-text",d.textContent=a?v:v.replace(/[A-Z]/gi,"_"),c.appendChild(d),!a&&!w){const h=document.createElement("button");h.className="reveal-single-btn",h.textContent="Reveal",h.onclick=()=>{r.add(v),B(),i.size+r.size===4&&f(),y()},c.appendChild(h)}$.appendChild(c)})}function x(){return m+=D,u.addXP(D)}function y(v=!1){re({date:e,found:[...i],revealed:[...r],completed:v||w,guessCount:p,xpAwarded:m})}function f(){w=!0,u.markPlayedToday("name-four"),A.disabled=!0,document.querySelector("#guess-form button").disabled=!0,y(!0),T()}function T(){let v=`
      <div class="completion">
        🎉 Puzzle complete
        <div class="xp">+${m} XP</div>
        <p>Total guesses: <strong>${p}</strong></p>
    `;g.length>0&&(v+=`
        <div class="level-up-section">
          <div class="level-up-title">🎉 LEVEL UP! 🎉</div>
          ${g.map(a=>`
            <div class="level-up-reward">
              <strong>${a.title}</strong>
              <div class="level-up-desc">${a.description}</div>
            </div>
          `).join("")}
        </div>
      `),v+=`
        <p>Come back tomorrow for a new category</p>
      </div>
    `,L.innerHTML=v}}function de(){const s=new Date("2025-01-01"),e=new Date;s.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-s)/(1e3*60*60*24));return S[t%S.length]}function ue(s){const e=new Date().toDateString(),t=de(),o=Q();if(!o||o.date!==e){s.innerHTML=`
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
    `;return}const n=new Set(o.found||[]),i=new Set(o.revealed||[]);s.innerHTML=`
    <div class="name-four-review">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <div class="review-card">
        <h2>Today's Name Four Review</h2>

        <div class="category">
          Category: <strong>${t.category}</strong>
        </div>

        <div class="answers">
          ${t.answers.map(r=>{const p=r.toUpperCase();return n.has(p)?`
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
  `}const C=document.getElementById("app");function Y(){const s=u.getCurrentLevel(),e=u.getTotalXP(),t=u.getXPToNextLevel(),o=u.getNextReward();C.innerHTML=`
    <div class="home-screen">
      <header class="app-header">
        <h1>The Andrew Times Games</h1>

        <div class="progress-summary">
          <div class="level-info">
            <span class="level">Level ${s}</span>
            <span class="xp">${e} XP</span>
          </div>

          ${o?`
            <div class="next-reward">
              <div class="xp-bar">
                <div class="xp-fill" style="width: ${e%300/300*100}%"></div>
              </div>
              <div class="next-reward-text">
                ${t} XP to next reward: ${o.title}
              </div>
            </div>
          `:`
            <div class="max-level">🎉 All rewards unlocked! 🎉</div>
          `}
        </div>
      </header>

      <div class="game-cards">

        <!-- THIS OR THAT -->
        <div class="game-card ${u.hasPlayedToday("thisOrThat")?"completed":""}"
             onclick="handleGameClick('thisOrThat')">
          <div class="game-icon">
            <img src="./game-icons/this_or_that_192.png" alt="This or That" />
          </div>
          <h3>This or That</h3>
          <p>Guess what I would choose</p>
          <div class="game-xp">Up to 100 XP</div>

          ${u.hasPlayedToday("thisOrThat")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- WORDLE -->
        <div class="game-card ${u.hasPlayedToday("wordle")?"completed":""}"
             onclick="handleGameClick('wordle')">
          <div class="game-icon">
            <img src="./game-icons/wordle_clone_192.png" alt="Wordle" />
          </div>
          <h3>Wordle</h3>
          <p>Guess the secret word</p>
          <div class="game-xp">100 XP</div>

          ${u.hasPlayedToday("wordle")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- NAME FOUR -->
        <div class="game-card ${u.hasPlayedToday("name-four")?"completed":""}"
             onclick="handleGameClick('name-four')">
          <div class="game-icon">
            <img src="./game-icons/name_four_192.png" alt="Name Four" />
          </div>
          <h3>Name Four</h3>
          <p>Find the four that belong together</p>
          <div class="game-xp">Up to 100 XP</div>

          ${u.hasPlayedToday("name-four")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

      </div>

      <button class="rewards-btn" onclick="showRewards()">
        View Rewards & Progress
      </button>
    </div>
  `}async function he(s){u.hasPlayedToday(s)?pe(s):await ve(s)}async function ve(s){C.innerHTML='<div id="game-container"></div>';const e=document.getElementById("game-container");s==="thisOrThat"&&X(e),s==="wordle"&&await ie(e),s==="name-four"&&ce(e)}function pe(s){C.innerHTML='<div id="game-container"></div>';const e=document.getElementById("game-container");s==="thisOrThat"&&W(e),s==="wordle"&&ae(e),s==="name-four"&&ue(e)}function we(){const s=u.getUnlockedRewards(),e=u.getAllRewards();C.innerHTML=`
    <div class="rewards-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Your Rewards</h2>

      <div class="rewards-list">
        ${e.map(t=>{const o=s.some(n=>n.level===t.level);return`
            <div class="reward-item ${o?"unlocked":"locked"}">
              <div class="reward-header">
                <span class="reward-level">Level ${t.level}</span>
                <span class="reward-xp">${t.xpRequired} XP</span>
              </div>

              ${o?`
                <h3>${t.title}</h3>
                <p class="reward-description">${t.description}</p>

                ${t.type==="text"?`
                  <div class="reward-content">${t.content}</div>
                `:t.type==="image"?`
                  <div class="reward-media">
                    <img src="${t.path}" alt="${t.title}" />
                  </div>
                `:t.type==="video"?`
                  <div class="reward-media">
                    <video controls>
                      <source src="${t.path}" type="video/mp4">
                    </video>
                  </div>
                `:""}
              `:`
                <h3>🔒 Locked</h3>
                <p class="reward-description">Reach Level ${t.level} to unlock!</p>
              `}
            </div>
          `}).join("")}
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}window.showHome=Y;window.showRewards=we;window.handleGameClick=he;Y();
