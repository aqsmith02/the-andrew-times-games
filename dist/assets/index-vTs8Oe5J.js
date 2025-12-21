(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const N=[{id:1,optionA:"Methodical",optionB:"Rowan",answer:"B"},{id:2,optionA:"Clash Royale",optionB:"Overwatch",answer:"B"},{id:3,optionA:"Pocket 8s",optionB:"Ace 9 Suited",answer:"B"},{id:4,optionA:"Apple Bold Rock",optionB:"Mimosa Bold Rock",answer:"A"},{id:5,optionA:"Dr Pepper",optionB:"Coke",answer:"B"},{id:6,optionA:"Krusty",optionB:"Ned",answer:"B"},{id:7,optionA:"Robots",optionB:"Hoodwinked",answer:"A"},{id:8,optionA:"WW2",optionB:"Vietnam",answer:"B"},{id:9,optionA:"Oil",optionB:"Acrylic",answer:"A"},{id:10,optionA:"Pearl Jam",optionB:"Alice in Chains",answer:"A"},{id:11,optionA:"Sophomore Year HS",optionB:"Sophomore Year College",answer:"A"},{id:12,optionA:"Calculus",optionB:"Statistics",answer:"A"},{id:13,optionA:"George Bush",optionB:"Bill Clinton",answer:"A"},{id:14,optionA:"Quiche",optionB:"Roast",answer:"A"},{id:15,optionA:"Japan",optionB:"Greece",answer:"A"},{id:16,optionA:"100 Spiders",optionB:"20 Squirrels",answer:"A"},{id:17,optionA:"Unlimited Games & Bacon",optionB:"No Games",answer:"A"},{id:18,optionA:"Minecraft Cottage",optionB:"Minecraft Castle",answer:"A"},{id:19,optionA:"Lead Out Bluff",optionB:"Re-raise Bluff",answer:"B"},{id:20,optionA:"Checkerboard Flooring",optionB:"Carpet",answer:"A"},{id:21,optionA:"Sci-Fi",optionB:"Westerns",answer:"A"},{id:22,optionA:"Sunny",optionB:"Partly Cloudy",answer:"B"},{id:23,optionA:"Spring",optionB:"Summer",answer:"A"},{id:24,optionA:"Big Black Puffer",optionB:"Fake Leather",answer:"A"},{id:25,optionA:"Whole Number",optionB:"Decimal Numbers",answer:"B"},{id:26,optionA:"Butt Rash",optionB:"Butt Cuts",answer:"B"},{id:27,optionA:"Queen",optionB:"Michael Jackson",answer:"B"},{id:28,optionA:"Peak Scythe",optionB:"Peak Poker",answer:"A"},{id:29,optionA:"Bench Press",optionB:"Deadlift",answer:"A"},{id:30,optionA:"Chicken Pot Pie",optionB:"Hamburger",answer:"A"},{id:31,optionA:"Cadbury Egg",optionB:"Chocolate Chip Cookie",answer:"B"},{id:32,optionA:"Fame",optionB:"Money",answer:"B"},{id:33,optionA:"Matcha",optionB:"Iced Americano",answer:"B"},{id:34,optionA:"Mimi",optionB:"Nana",answer:"B"},{id:35,optionA:"Leather",optionB:"Velvet",answer:"A"}];function J(){const o=new Date().toDateString(),e=localStorage.getItem("thisOrThat_daily");if(e){const r=JSON.parse(e);if(r.date===o)return r.questions}const t=q();let s=N.filter(r=>!t.includes(r.id));s.length<5&&(V(),s=[...N]);const n=s.sort(()=>Math.random()-.5).slice(0,5);return z(n.map(r=>r.id)),localStorage.setItem("thisOrThat_daily",JSON.stringify({date:o,questions:n})),n}function q(){const o=localStorage.getItem("thisOrThat_seen");return o?JSON.parse(o):[]}function z(o){const e=q(),t=[...new Set([...e,...o])];localStorage.setItem("thisOrThat_seen",JSON.stringify(t))}function V(){localStorage.setItem("thisOrThat_seen",JSON.stringify([]))}const k=[{level:1,xpRequired:300,type:"image",path:"/rewards/simpsons.png",title:"A Picture of Me",description:"You unlocked your first reward!"},{level:2,xpRequired:600,type:"image",path:"/rewards/lil_madison.png",title:"Me Singing For You",description:"Hope you enjoy this... 🎤😅"},{level:3,xpRequired:900,type:"text",title:"A Poem Just For You",content:`Your poem will go here...
    
Multiple lines work!
You can write something sweet 💕`,description:"A special poem written just for you"},{level:4,xpRequired:1200,type:"text",title:"Coffee On Me! ☕",content:"This is an IOU for one coffee of your choice - my treat! Redeem anytime 😊",description:"Free coffee whenever you want!"},{level:5,xpRequired:1500,type:"image",path:"/rewards/simpsons.png",title:"Another Picture of Me",description:"Another one for your collection! 📸"},{level:6,xpRequired:1800,type:"image",path:"/rewards/lil_madison.png",title:"Funny Video",description:"Prepare to laugh 😂"},{level:7,xpRequired:2100,type:"text",title:"Ultimate Embarrassment IOU",content:"I will embarrass myself in ANY way you ask. No limits. You have full control. Use this power wisely... 😰",description:"The ultimate reward - make me do anything!"}];class K{constructor(){this.load()}load(){const e=localStorage.getItem("gameProgress");if(e){const t=JSON.parse(e);this.totalXP=t.totalXP||0,this.unlockedRewards=t.unlockedRewards||[],this.lastPlayed=t.lastPlayed||{}}else this.totalXP=0,this.unlockedRewards=[],this.lastPlayed={}}save(){localStorage.setItem("gameProgress",JSON.stringify({totalXP:this.totalXP,unlockedRewards:this.unlockedRewards,lastPlayed:this.lastPlayed}))}addXP(e){const t=this.getCurrentLevel();this.totalXP+=e;const s=this.getCurrentLevel();if(this.save(),s>t){const i=[];for(let n=t+1;n<=s;n++)this.unlockedRewards.includes(n)||(this.unlockedRewards.push(n),i.push(k[n-1]));return{leveledUp:!0,newRewards:i}}return{leveledUp:!1}}getCurrentLevel(){for(let e=k.length-1;e>=0;e--)if(this.totalXP>=k[e].xpRequired)return k[e].level;return 0}getNextReward(){const e=this.getCurrentLevel();return k[e]||null}getXPToNextLevel(){const e=this.getNextReward();return e?e.xpRequired-this.totalXP:0}getAllRewards(){return k}getUnlockedRewards(){return k.filter(e=>this.unlockedRewards.includes(e.level))}hasPlayedToday(e){const t=new Date().toDateString();return this.lastPlayed[e]===t}markPlayedToday(e){const t=new Date().toDateString();this.lastPlayed[e]=t,this.save()}getTotalXP(){return this.totalXP}}const c=new K;class Z{constructor(e){this.container=e,this.questions=J(),this.currentQuestionIndex=0,this.score=0,this.answers=[],this.isComplete=!1,this.loadProgress(),this.render()}loadProgress(){const e=new Date().toDateString(),t=localStorage.getItem("thisOrThat_progress");if(t){const s=JSON.parse(t);if(s.date===e)return this.score=s.score||0,this.answers=s.answers||[],this.currentQuestionIndex=this.answers.length,this.isComplete=s.complete||!1,!0}return!1}saveProgress(e=!1){const t=new Date().toDateString();localStorage.setItem("thisOrThat_progress",JSON.stringify({date:t,complete:e||this.isComplete,score:this.score,answers:this.answers,currentQuestionIndex:this.currentQuestionIndex}))}handleAnswer(e){const t=this.questions[this.currentQuestionIndex],s=e===t.answer;this.answers.push({question:t,userChoice:e,correct:s}),s&&(this.score+=20),this.saveProgress(!1),this.showResult(s,t),setTimeout(()=>{this.currentQuestionIndex++,this.currentQuestionIndex>=this.questions.length?this.completeGame():this.render()},1500)}showResult(e,t){const s=this.container.querySelector(".game-content"),i=t.answer==="A"?t.optionA:t.optionB;s.innerHTML=`
      <div class="result-screen ${e?"correct":"incorrect"}">
        <div class="result-icon">${e?"✓":"✗"}</div>
        <div class="result-text">
          ${e?"Correct!":"Not quite!"}
        </div>
        <div class="correct-answer">
          I would choose: <strong>${i}</strong>
        </div>
        <div class="xp-earned">+${e?20:0} XP</div>
      </div>
    `}completeGame(){this.isComplete=!0,this.saveProgress(!0);const e=c.addXP(this.score);c.markPlayedToday("thisOrThat"),this.showCompletionScreen(e)}showCompletionScreen(e){const t=this.score/100*100;let s=`
      <div class="completion-screen">
        <h2>Today's Results</h2>
        <div class="final-score">${this.score} / 100 XP</div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${t}%"></div>
        </div>
        <div class="summary">
          You got ${this.answers.filter(i=>i.correct).length} out of ${this.questions.length} correct!
        </div>
    `;e.leveledUp&&e.newRewards.length>0&&(s+=`
        <div class="level-up">
          <div class="level-up-banner">🎉 LEVEL UP! 🎉</div>
          ${e.newRewards.map(i=>`
            <div class="new-reward">
              <strong>${i.title}</strong>
              <p>${i.description}</p>
            </div>
          `).join("")}
        </div>
      `),s+=`
        <div class="total-progress">
          Total XP: ${c.getTotalXP()} 
          <span class="level-badge">Level ${c.getCurrentLevel()}</span>
        </div>
        <button class="review-btn" onclick="reviewThisOrThat()">
          Review Answers
        </button>
      </div>
    `,this.container.querySelector(".game-content").innerHTML=s}showReview(){const e=`
      <div class="review-screen">
        <h2>Answer Review</h2>
        <div class="review-list">
          ${this.answers.map((t,s)=>`
            <div class="review-item ${t.correct?"correct":"incorrect"}">
              <div class="review-number">Question ${s+1}</div>
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
    `;this.container.querySelector(".game-content").innerHTML=e}render(){if(this.isComplete){this.showCompletionScreen({leveledUp:!1});return}const e=this.questions[this.currentQuestionIndex];this.container.innerHTML=`
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
    `}}window.thisOrThat=null;function X(o){window.thisOrThat=new Z(o)}function U(o){const e=new Date().toDateString(),t=localStorage.getItem("thisOrThat_progress");if(!t){o.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align: center; color: #666;">Play today's This or That game first!</p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;return}const s=JSON.parse(t);if(s.date!==e||!s.complete){const n=s.answers?.length||0;o.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>${n>0?"In Progress":"No Results Yet"}</h2>
        <p style="text-align: center; color: #666;">
          ${n>0?`You've answered ${n} of 5 questions. Complete the game to review all answers!`:"Complete today's This or That game first!"}
        </p>
        ${n>0?`
          <button class="continue-btn" onclick="startThisOrThatFromMenu()">
            Continue Game
          </button>
        `:""}
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;return}const i=`
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Today's This or That Review</h2>
      <div class="review-score">Score: ${s.score} / 100 XP</div>
      <div class="review-list">
        ${s.answers.map((n,r)=>`
          <div class="review-item ${n.correct?"correct":"incorrect"}">
            <div class="review-number">Question ${r+1}</div>
            <div class="review-question">
              <span class="choice ${n.userChoice==="A"?"selected":""}">${n.question.optionA}</span>
              <span class="vs">or</span>
              <span class="choice ${n.userChoice==="B"?"selected":""}">${n.question.optionB}</span>
            </div>
            <div class="review-result">
              ${n.correct?"✓ Correct!":`✗ I chose: ${n.question.answer==="A"?n.question.optionA:n.question.optionB}`}
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;o.innerHTML=i}window.reviewThisOrThat=function(){const o=document.getElementById("app");U(o)};window.startThisOrThatFromMenu=function(){const o=document.getElementById("app");X(o)};function ee(o){o.innerHTML=`
    <div class="wordle">
      <div class="grid">
        ${Array.from({length:6}).map(()=>`
          <div class="row">
            ${Array.from({length:5}).map(()=>'<div class="tile"></div>').join("")}
          </div>
        `).join("")}
      </div>

      <div class="keyboard">
        ${["QWERTYUIOP","ASDFGHJKL","ENTERZXCVBNM⌫"].map(e=>`
          <div class="key-row">
            ${e.split("").map(t=>`<button class="key">${t}</button>`).join("")}
          </div>
        `).join("")}
      </div>
    </div>
  `}const W="wordle_progress";function x(o){localStorage.setItem(W,JSON.stringify(o))}function F(){const o=localStorage.getItem(W);return o?JSON.parse(o):null}let b=[],E=new Set,S=!1;const M="/the-andrew-times-games/";function te(o){let e=2166136261;for(let t=0;t<o.length;t++)e^=o.charCodeAt(t),e=Math.imul(e,16777619);return()=>(e+=e<<13,e^=e>>>7,e+=e<<3,e^=e>>>17,e+=e<<5,(e>>>0)/4294967296)}function oe(o,e){const t=te(e),s=[...o];for(let i=s.length-1;i>0;i--){const n=Math.floor(t()*(i+1));[s[i],s[n]]=[s[n],s[i]]}return s}async function se(){if(!S)try{const[o,e]=await Promise.all([fetch(`${M}wordle-data/answers.json`),fetch(`${M}wordle-data/allowed.json`)]);if(!o.ok||!e.ok)throw new Error("Failed to load word list files");const t=await o.json(),s=await e.json();b=t.map(n=>n.toUpperCase()),b=oe(b,"wordle-v1");const i=s.map(n=>n.toUpperCase());E=new Set([...b,...i]),S=!0,console.log("✅ Word lists loaded:",b.length,"answers,",E.size,"allowed"),console.log("Today's answer:",G())}catch(o){throw console.error("❌ Failed to load word lists:",o),o}}function ne(o){if(!S)return console.warn("Word lists not loaded yet"),!1;const e=o.trim().toUpperCase();return E.has(e)}function G(){if(!S)throw new Error("Word lists not loaded");if(b.length===0)throw new Error("No answers loaded");const o=new Date("2021-06-19"),e=new Date;o.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-o)/864e5)%b.length;return b[t]}const B=5,I=6,O=100;async function ie(o){await se();const e=G(),t=new Date().toDateString(),s=F(),i=s&&s.date===t&&s.answer===e&&!s.won&&s.rowsUsed<I;let n=i?s.rowsUsed:0,r=0,w=i?!1:s&&s.date===t;const v=i?[...s.guesses]:[];o.innerHTML=`
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
  `;const f=document.getElementById("wordle-root");ee(f);const y=f.querySelectorAll(".row");i&&v.forEach((a,h)=>{const d=y[h].children;a.word.split("").forEach((m,l)=>{d[l].textContent=m,d[l].classList.add(a.result[l])})}),w&&s&&s.date===t&&(v.forEach((a,h)=>{const d=y[h].children;a.word.split("").forEach((m,l)=>{d[l].textContent=m,d[l].classList.add(a.result[l])})}),s.won?p(`🎉 You already completed today's Wordle! +${O} XP`):p(`😢 The word was ${e}`));const T=()=>{!w&&v.length>0&&x({date:t,answer:e,won:!1,rowsUsed:n,guesses:v}),_(),window.showHome()};document.getElementById("back-home").onclick=T,document.getElementById("mobile-back-home").onclick=T;function P(a){r>=B||w||(y[n].children[r].textContent=a,r++)}function A(){r===0||w||(r--,y[n].children[r].textContent="")}function $(a){if(!w){if(a==="ENTER"){if(r!==B)return;R();return}if(a==="⌫"||a==="BACKSPACE"){A();return}/^[A-Z]$/.test(a)&&P(a)}}function R(){const a=y[n].children,h=Array.from(a).map(l=>l.textContent).join("");if(!ne(h)){p("⌫ Not in word list");return}const d=e.split(""),m=Array(B).fill("absent");for(let l=0;l<B;l++)h[l]===d[l]&&(a[l].classList.add("correct"),m[l]="correct",d[l]=null);for(let l=0;l<B;l++){if(m[l]==="correct")continue;const H=d.indexOf(h[l]);H!==-1?(a[l].classList.add("present"),m[l]="present",d[H]=null):a[l].classList.add("absent")}if(v.push({word:h,result:m}),x({date:t,answer:e,won:h===e,rowsUsed:n+1,guesses:v}),h===e){u(!0);return}n++,r=0,n===I&&u(!1)}function u(a){if(w=!0,c.markPlayedToday("wordle"),a){const h=c.addXP(O);let d=`🎉 You got it! +${O} XP`;h.leveledUp&&h.newRewards.length>0&&(d+=`

🎉 LEVEL UP! 🎉
`,h.newRewards.forEach(m=>{d+=`
Unlocked: ${m.title}`})),p(d)}else p(`😢 The word was ${e}`);x({date:t,answer:e,won:a,rowsUsed:v.length,guesses:v})}function p(a){const h=f.querySelector(".wordle-message");h&&h.remove();const d=document.createElement("div");d.className="wordle-message",d.textContent=a,f.appendChild(d)}function g(a){$(a.key.toUpperCase())}window.addEventListener("keydown",g),f.querySelectorAll(".key").forEach(a=>{a.addEventListener("click",()=>$(a.textContent))});function _(){window.removeEventListener("keydown",g)}}function ae(o){const e=new Date().toDateString(),t=F();if(!t||t.date!==e){o.innerHTML=`
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

      <div class="review-summary ${t.won?"won":"lost"}">
        ${t.won?`🎉 Solved in ${t.rowsUsed} / 6 guesses`:"😢 Not solved today"}
      </div>

      <div class="wordle-review-grid">
        ${(t.guesses||[]).map(s=>`
          <div class="review-row">
            ${s.word.split("").map((i,n)=>`
              <div class="tile ${s.result[n]}">
                ${i}
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
  `}const C=[{category:"Nicknames",answers:["beanie","boobie","munt","tony"]},{category:"Favorite 80s Rock Bands",answers:["the smiths","talking heads","misfits","queen"]},{category:"In Your Room",answers:["box fan","john lennon poster","vision board","wallpaper"]},{category:"Food Combos",answers:["ketchup and rice","orange juice and popcorn","weenies and toast","jam and sausage"]},{category:"Road Names",answers:["pickle buddy court","honey girl lane","ruby golightly drive","apple butter drive"]},{category:"Crushes",answers:["cillian murphy","drew starkey","dallas","chris christie"]},{category:"Lead Actors of Movies We Watched",answers:["timothee chalamet","harrison ford","dylan o'brien","jim carrey"]},{category:"My Spotify Wrapped Artists",answers:["radiohead","nat king cole","bobby darin","a tribe called quest"]}],j="name_four_progress";function re(o){localStorage.setItem(j,JSON.stringify(o))}function Q(){const o=localStorage.getItem(j);return o?JSON.parse(o):null}const D=100;function le(){const o=new Date("2025-01-01"),e=new Date;o.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-o)/(1e3*60*60*24));return C[t%C.length]}function ce(o){const e=new Date().toDateString(),t=le(),s=t.answers.map(u=>u.toUpperCase()),i=Q(),n=new Set(i?.date===e?i.found:[]),r=i?.date===e&&i.completed;let w=i?.date===e&&i.guessCount||0;o.innerHTML=`
    <div class="name-four">
      <button class="back-btn" id="back-home">← Back</button>

      <h2>Name Four</h2>
      <div class="category">
        Category: <strong>${t.category}</strong>
      </div>

      <form id="guess-form" class="guess-form">
        <input
          id="guess-input"
          type="text"
          placeholder="Type a guess..."
          autocomplete="off"
          ${r?"disabled":""}
        />
        <button type="submit" ${r?"disabled":""}>
          Submit
        </button>
      </form>

      <div class="found">
        Found (<span id="found-count">0</span> / 4)
        <ul id="found-list"></ul>
      </div>

      <div id="completion-message"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" id="mobile-back-home">← Back</button>
    </div>
  `;const v=document.getElementById("guess-input"),f=document.getElementById("found-list"),y=document.getElementById("found-count"),T=document.getElementById("completion-message");document.getElementById("back-home").onclick=()=>{window.showHome()},document.getElementById("mobile-back-home").onclick=()=>{window.showHome()},P(),r&&R(),document.getElementById("guess-form").onsubmit=u=>{if(u.preventDefault(),r)return;const p=v.value.trim();if(!p)return;const g=p.toUpperCase();if(v.value="",w++,n.has(g)){A(!1);return}if(s.includes(g)){n.add(g),A(!1),P(),n.size===4&&$();return}A(!1)};function P(){f.innerHTML="",y.textContent=n.size,[...n].forEach(u=>{const p=document.createElement("li");p.textContent=u,p.className="found-item",f.appendChild(p)})}function A(u){re({date:e,found:[...n],completed:u,guessCount:w})}function $(){A(!0);const u=c.addXP(D);c.markPlayedToday("name-four"),v.disabled=!0,document.querySelector("#guess-form button").disabled=!0,R(u)}function R(u){let p=`
      <div class="completion">
        🎉 You got all four!
        <div class="xp">+${D} XP</div>
        <p>Solved in <strong>${w}</strong> guesses</p>
    `;u&&u.leveledUp&&u.newRewards.length>0&&(p+=`
        <div style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #5f8f7a 0%, #7fb3a1 100%); color: white; border-radius: 8px;">
          <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 10px;">🎉 LEVEL UP! 🎉</div>
          ${u.newRewards.map(g=>`
            <div style="margin-top: 10px;">
              <strong>${g.title}</strong>
              <div style="font-size: 0.9rem; opacity: 0.9;">${g.description}</div>
            </div>
          `).join("")}
        </div>
      `),p+=`
        <p>Come back tomorrow for a new category</p>
      </div>
    `,T.innerHTML=p}}function de(){const o=new Date("2025-01-01"),e=new Date;o.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-o)/(1e3*60*60*24));return C[t%C.length]}function ue(o){const e=new Date().toDateString(),t=de(),s=Q();if(!s||s.date!==e){o.innerHTML=`
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
    `;return}o.innerHTML=`
    <div class="name-four-review">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <div class="review-card">
        <h2>Today's Name Four Review</h2>

        <div class="category">
          Category: <strong>${t.category}</strong>
        </div>

        <div class="answers">
          ${s.found.map(i=>`
            <div class="review-answer">${i}</div>
          `).join("")}
        </div>

        <div class="stats">
          Total guesses made:
          <strong>${s.guessCount??s.found.length}</strong>
        </div>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}const L=document.getElementById("app");function Y(){const o=c.getCurrentLevel(),e=c.getTotalXP(),t=c.getXPToNextLevel(),s=c.getNextReward();L.innerHTML=`
    <div class="home-screen">
      <header class="app-header">
        <h1>The Andrew Times Games</h1>

        <div class="progress-summary">
          <div class="level-info">
            <span class="level">Level ${o}</span>
            <span class="xp">${e} XP</span>
          </div>

          ${s?`
            <div class="next-reward">
              <div class="xp-bar">
                <div class="xp-fill" style="width: ${e%300/300*100}%"></div>
              </div>
              <div class="next-reward-text">
                ${t} XP to next reward: ${s.title}
              </div>
            </div>
          `:`
            <div class="max-level">🎉 All rewards unlocked! 🎉</div>
          `}
        </div>
      </header>

      <div class="game-cards">

        <!-- THIS OR THAT -->
        <div class="game-card ${c.hasPlayedToday("thisOrThat")?"completed":""}"
             onclick="handleGameClick('thisOrThat')">
          <div class="game-icon">🤔</div>
          <h3>This or That</h3>
          <p>Guess what I would choose</p>
          <div class="game-xp">Up to 100 XP</div>

          ${c.hasPlayedToday("thisOrThat")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- WORDLE -->
        <div class="game-card ${c.hasPlayedToday("wordle")?"completed":""}"
             onclick="handleGameClick('wordle')">
          <div class="game-icon">📝</div>
          <h3>Wordle</h3>
          <p>Guess the secret word</p>
          <div class="game-xp">100 XP</div>

          ${c.hasPlayedToday("wordle")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- NAME FOUR -->
        <div class="game-card ${c.hasPlayedToday("name-four")?"completed":""}"
             onclick="handleGameClick('name-four')">
          <div class="game-icon">🔢</div>
          <h3>Name Four</h3>
          <p>Find the four that belong together</p>
          <div class="game-xp">100 XP</div>

          ${c.hasPlayedToday("name-four")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

      </div>

      <button class="rewards-btn" onclick="showRewards()">
        View Rewards & Progress
      </button>
    </div>
  `}async function he(o){c.hasPlayedToday(o)?ve(o):await pe(o)}async function pe(o){L.innerHTML='<div id="game-container"></div>';const e=document.getElementById("game-container");o==="thisOrThat"&&X(e),o==="wordle"&&await ie(e),o==="name-four"&&ce(e)}function ve(o){L.innerHTML='<div id="game-container"></div>';const e=document.getElementById("game-container");o==="thisOrThat"&&U(e),o==="wordle"&&ae(e),o==="name-four"&&ue(e)}function we(){const o=c.getUnlockedRewards(),e=c.getAllRewards();L.innerHTML=`
    <div class="rewards-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Your Rewards</h2>

      <div class="rewards-list">
        ${e.map(t=>{const s=o.some(i=>i.level===t.level);return`
            <div class="reward-item ${s?"unlocked":"locked"}">
              <div class="reward-header">
                <span class="reward-level">Level ${t.level}</span>
                <span class="reward-xp">${t.xpRequired} XP</span>
              </div>

              ${s?`
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
