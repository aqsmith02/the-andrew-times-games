(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const M=[{id:1,optionA:"Methodical",optionB:"Rowan",answer:"B"},{id:2,optionA:"Clash Royale",optionB:"Overwatch",answer:"B"},{id:3,optionA:"Pocket 8s",optionB:"Ace 9 Suited",answer:"B"},{id:4,optionA:"Apple Bold Rock",optionB:"Mimosa Bold Rock",answer:"A"},{id:5,optionA:"Dr Pepper",optionB:"Coke",answer:"B"},{id:6,optionA:"Krusty",optionB:"Ned",answer:"B"},{id:7,optionA:"Robots",optionB:"Hoodwinked",answer:"A"},{id:8,optionA:"WW2",optionB:"Vietnam",answer:"B"},{id:9,optionA:"Oil",optionB:"Acrylic",answer:"A"},{id:10,optionA:"Pearl Jam",optionB:"Alice in Chains",answer:"A"},{id:11,optionA:"Sophomore Year HS",optionB:"Sophomore Year College",answer:"A"},{id:12,optionA:"Calculus",optionB:"Statistics",answer:"A"},{id:13,optionA:"George Bush",optionB:"Bill Clinton",answer:"A"},{id:14,optionA:"Quiche",optionB:"Roast",answer:"A"},{id:15,optionA:"Japan",optionB:"Greece",answer:"A"},{id:16,optionA:"100 Spiders",optionB:"20 Squirrels",answer:"A"},{id:17,optionA:"Unlimited Games & Bacon",optionB:"No Games",answer:"A"},{id:18,optionA:"Minecraft Cottage",optionB:"Minecraft Castle",answer:"A"},{id:19,optionA:"Lead Out Bluff",optionB:"Re-raise Bluff",answer:"B"},{id:20,optionA:"Checkerboard Flooring",optionB:"Carpet",answer:"A"},{id:21,optionA:"Sci-Fi",optionB:"Westerns",answer:"A"},{id:22,optionA:"Sunny",optionB:"Partly Cloudy",answer:"B"},{id:23,optionA:"Spring",optionB:"Summer",answer:"A"},{id:24,optionA:"Big Black Puffer",optionB:"Fake Leather",answer:"A"},{id:25,optionA:"Whole Number",optionB:"Decimal Numbers",answer:"B"},{id:26,optionA:"Butt Rash",optionB:"Butt Cuts",answer:"B"},{id:27,optionA:"Queen",optionB:"Michael Jackson",answer:"B"},{id:28,optionA:"Peak Scythe",optionB:"Peak Poker",answer:"A"},{id:29,optionA:"Bench Press",optionB:"Deadlift",answer:"A"},{id:30,optionA:"Chicken Pot Pie",optionB:"Hamburger",answer:"A"},{id:31,optionA:"Cadbury Egg",optionB:"Chocolate Chip Cookie",answer:"B"},{id:32,optionA:"Fame",optionB:"Money",answer:"B"},{id:33,optionA:"Matcha",optionB:"Iced Americano",answer:"B"},{id:34,optionA:"Mimi",optionB:"Nana",answer:"B"},{id:35,optionA:"Leather",optionB:"Velvet",answer:"A"}];function J(){const s=new Date().toDateString(),e=localStorage.getItem("thisOrThat_daily");if(e){const r=JSON.parse(e);if(r.date===s)return r.questions}const t=X();let o=M.filter(r=>!t.includes(r.id));o.length<5&&(K(),o=[...M]);const n=o.sort(()=>Math.random()-.5).slice(0,5);return z(n.map(r=>r.id)),localStorage.setItem("thisOrThat_daily",JSON.stringify({date:s,questions:n})),n}function X(){const s=localStorage.getItem("thisOrThat_seen");return s?JSON.parse(s):[]}function z(s){const e=X(),t=[...new Set([...e,...s])];localStorage.setItem("thisOrThat_seen",JSON.stringify(t))}function K(){localStorage.setItem("thisOrThat_seen",JSON.stringify([]))}const k=[{level:1,xpRequired:300,type:"image",path:"/rewards/simpsons.png",title:"A Picture of Me",description:"You unlocked your first reward!"},{level:2,xpRequired:600,type:"image",path:"/rewards/lil_madison.png",title:"Me Singing For You",description:"Hope you enjoy this... 🎤😅"},{level:3,xpRequired:900,type:"text",title:"A Poem Just For You",content:`Your poem will go here...
    
Multiple lines work!
You can write something sweet 💕`,description:"A special poem written just for you"},{level:4,xpRequired:1200,type:"text",title:"Coffee On Me! ☕",content:"This is an IOU for one coffee of your choice - my treat! Redeem anytime 😊",description:"Free coffee whenever you want!"},{level:5,xpRequired:1500,type:"image",path:"/rewards/simpsons.png",title:"Another Picture of Me",description:"Another one for your collection! 📸"},{level:6,xpRequired:1800,type:"image",path:"/rewards/lil_madison.png",title:"Funny Video",description:"Prepare to laugh 😂"},{level:7,xpRequired:2100,type:"text",title:"Ultimate Embarrassment IOU",content:"I will embarrass myself in ANY way you ask. No limits. You have full control. Use this power wisely... 😰",description:"The ultimate reward - make me do anything!"}];class V{constructor(){this.load()}load(){const e=localStorage.getItem("gameProgress");if(e){const t=JSON.parse(e);this.totalXP=t.totalXP||0,this.unlockedRewards=t.unlockedRewards||[],this.lastPlayed=t.lastPlayed||{}}else this.totalXP=0,this.unlockedRewards=[],this.lastPlayed={}}save(){localStorage.setItem("gameProgress",JSON.stringify({totalXP:this.totalXP,unlockedRewards:this.unlockedRewards,lastPlayed:this.lastPlayed}))}addXP(e){const t=this.getCurrentLevel();this.totalXP+=e;const o=this.getCurrentLevel();if(this.save(),o>t){const i=[];for(let n=t+1;n<=o;n++)this.unlockedRewards.includes(n)||(this.unlockedRewards.push(n),i.push(k[n-1]));return{leveledUp:!0,newRewards:i}}return{leveledUp:!1}}getCurrentLevel(){for(let e=k.length-1;e>=0;e--)if(this.totalXP>=k[e].xpRequired)return k[e].level;return 0}getNextReward(){const e=this.getCurrentLevel();return k[e]||null}getXPToNextLevel(){const e=this.getNextReward();return e?e.xpRequired-this.totalXP:0}getAllRewards(){return k}getUnlockedRewards(){return k.filter(e=>this.unlockedRewards.includes(e.level))}hasPlayedToday(e){const t=new Date().toDateString();return this.lastPlayed[e]===t}markPlayedToday(e){const t=new Date().toDateString();this.lastPlayed[e]=t,this.save()}getTotalXP(){return this.totalXP}}const u=new V;class Z{constructor(e){this.container=e,this.questions=J(),this.currentQuestionIndex=0,this.score=0,this.answers=[],this.isComplete=!1,this.loadProgress(),this.render()}loadProgress(){const e=new Date().toDateString(),t=localStorage.getItem("thisOrThat_progress");if(t){const o=JSON.parse(t);if(o.date===e)return this.score=o.score||0,this.answers=o.answers||[],this.currentQuestionIndex=this.answers.length,this.isComplete=o.complete||!1,!0}return!1}saveProgress(e=!1){const t=new Date().toDateString();localStorage.setItem("thisOrThat_progress",JSON.stringify({date:t,complete:e||this.isComplete,score:this.score,answers:this.answers,currentQuestionIndex:this.currentQuestionIndex}))}handleAnswer(e){const t=this.questions[this.currentQuestionIndex],o=e===t.answer;this.answers.push({question:t,userChoice:e,correct:o}),o&&(this.score+=20),this.saveProgress(!1),this.showResult(o,t),setTimeout(()=>{this.currentQuestionIndex++,this.currentQuestionIndex>=this.questions.length?this.completeGame():this.render()},1500)}showResult(e,t){const o=this.container.querySelector(".game-content"),i=t.answer==="A"?t.optionA:t.optionB;o.innerHTML=`
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
    `}completeGame(){this.isComplete=!0,this.saveProgress(!0);const e=u.addXP(this.score);u.markPlayedToday("thisOrThat"),this.showCompletionScreen(e)}showCompletionScreen(e){const t=this.score/100*100;let o=`
      <div class="completion-screen">
        <h2>Today's Results</h2>
        <div class="final-score">${this.score} / 100 XP</div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${t}%"></div>
        </div>
        <div class="summary">
          You got ${this.answers.filter(i=>i.correct).length} out of ${this.questions.length} correct!
        </div>
    `;e.leveledUp&&e.newRewards.length>0&&(o+=`
        <div class="level-up">
          <div class="level-up-banner">🎉 LEVEL UP! 🎉</div>
          ${e.newRewards.map(i=>`
            <div class="new-reward">
              <strong>${i.title}</strong>
              <p>${i.description}</p>
            </div>
          `).join("")}
        </div>
      `),o+=`
        <div class="total-progress">
          Total XP: ${u.getTotalXP()} 
          <span class="level-badge">Level ${u.getCurrentLevel()}</span>
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
    `}}window.thisOrThat=null;function W(s){window.thisOrThat=new Z(s)}function U(s){const e=new Date().toDateString(),t=localStorage.getItem("thisOrThat_progress");if(!t){s.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align: center; color: #666;">Play today's This or That game first!</p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;return}const o=JSON.parse(t);if(o.date!==e||!o.complete){const n=o.answers?.length||0;s.innerHTML=`
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
      <div class="review-score">Score: ${o.score} / 100 XP</div>
      <div class="review-list">
        ${o.answers.map((n,r)=>`
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
  `;s.innerHTML=i}window.reviewThisOrThat=function(){const s=document.getElementById("app");U(s)};window.startThisOrThatFromMenu=function(){const s=document.getElementById("app");W(s)};function ee(s){s.innerHTML=`
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
  `}const G="wordle_progress";function O(s){localStorage.setItem(G,JSON.stringify(s))}function F(){const s=localStorage.getItem(G);return s?JSON.parse(s):null}let y=[],N=new Set,R=!1;const I="/the-andrew-times-games/";function te(s){let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return()=>(e+=e<<13,e^=e>>>7,e+=e<<3,e^=e>>>17,e+=e<<5,(e>>>0)/4294967296)}function se(s,e){const t=te(e),o=[...s];for(let i=o.length-1;i>0;i--){const n=Math.floor(t()*(i+1));[o[i],o[n]]=[o[n],o[i]]}return o}async function oe(){if(!R)try{const[s,e]=await Promise.all([fetch(`${I}wordle-data/answers.json`),fetch(`${I}wordle-data/allowed.json`)]);if(!s.ok||!e.ok)throw new Error("Failed to load word list files");const t=await s.json(),o=await e.json();y=t.map(n=>n.toUpperCase()),y=se(y,"wordle-v1");const i=o.map(n=>n.toUpperCase());N=new Set([...y,...i]),R=!0,console.log("✅ Word lists loaded:",y.length,"answers,",N.size,"allowed"),console.log("Today's answer:",_())}catch(s){throw console.error("❌ Failed to load word lists:",s),s}}function ne(s){if(!R)return console.warn("Word lists not loaded yet"),!1;const e=s.trim().toUpperCase();return N.has(e)}function _(){if(!R)throw new Error("Word lists not loaded");if(y.length===0)throw new Error("No answers loaded");const s=new Date("2021-06-19"),e=new Date;s.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-s)/864e5)%y.length;return y[t]}const $=5,q=6,E=100;async function ie(s){await oe();const e=_(),t=new Date().toDateString(),o=F(),i=o&&o.date===t&&o.answer===e&&!o.won&&o.rowsUsed<q;let n=i?o.rowsUsed:0,r=0,h=i?!1:o&&o.date===t;const w=i?[...o.guesses]:[];s.innerHTML=`
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
  `;const p=document.getElementById("wordle-root");ee(p);const g=p.querySelectorAll(".row");i&&w.forEach((a,d)=>{const c=g[d].children;a.word.split("").forEach((m,l)=>{c[l].textContent=m,c[l].classList.add(a.result[l])})}),h&&o&&o.date===t&&(w.forEach((a,d)=>{const c=g[d].children;a.word.split("").forEach((m,l)=>{c[l].textContent=m,c[l].classList.add(a.result[l])})}),o.won?f(`🎉 You already completed today's Wordle! +${E} XP`):f(`😢 The word was ${e}`));const B=()=>{!h&&w.length>0&&O({date:t,answer:e,won:!1,rowsUsed:n,guesses:w}),b(),window.showHome()};document.getElementById("back-home").onclick=B,document.getElementById("mobile-back-home").onclick=B;function L(a){r>=$||h||(g[n].children[r].textContent=a,r++)}function T(){r===0||h||(r--,g[n].children[r].textContent="")}function S(a){if(!h){if(a==="ENTER"){if(r!==$)return;A();return}if(a==="⌫"||a==="BACKSPACE"){T();return}/^[A-Z]$/.test(a)&&L(a)}}function A(){const a=g[n].children,d=Array.from(a).map(l=>l.textContent).join("");if(!ne(d)){f("⌫ Not in word list");return}const c=e.split(""),m=Array($).fill("absent");for(let l=0;l<$;l++)d[l]===c[l]&&(a[l].classList.add("correct"),m[l]="correct",c[l]=null);for(let l=0;l<$;l++){if(m[l]==="correct")continue;const H=c.indexOf(d[l]);H!==-1?(a[l].classList.add("present"),m[l]="present",c[H]=null):a[l].classList.add("absent")}if(w.push({word:d,result:m}),O({date:t,answer:e,won:d===e,rowsUsed:n+1,guesses:w}),d===e){P(!0);return}n++,r=0,n===q&&P(!1)}function P(a){if(h=!0,u.markPlayedToday("wordle"),a){const d=u.addXP(E);let c=`🎉 You got it! +${E} XP`;d.leveledUp&&d.newRewards.length>0&&(c+=`

🎉 LEVEL UP! 🎉
`,d.newRewards.forEach(m=>{c+=`
Unlocked: ${m.title}`})),f(c)}else f(`😢 The word was ${e}`);O({date:t,answer:e,won:a,rowsUsed:w.length,guesses:w})}function f(a){const d=p.querySelector(".wordle-message");d&&d.remove();const c=document.createElement("div");c.className="wordle-message",c.textContent=a,p.appendChild(c)}function v(a){S(a.key.toUpperCase())}window.addEventListener("keydown",v),p.querySelectorAll(".key").forEach(a=>{a.addEventListener("click",()=>S(a.textContent))});function b(){window.removeEventListener("keydown",v)}}function ae(s){const e=new Date().toDateString(),t=F();if(!t||t.date!==e){s.innerHTML=`
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
            ${o.word.split("").map((i,n)=>`
              <div class="tile ${o.result[n]}">
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
  `}const C=[{category:"Nicknames",answers:["beanie","boobie","munt","tony"]},{category:"Favorite 80s Rock Bands",answers:["the smiths","talking heads","misfits","queen"]},{category:"In Your Room",answers:["box fan","john lennon poster","vision board","wallpaper"]},{category:"Food Combos",answers:["ketchup and rice","orange juice and popcorn","weenies and toast","jam and sausage"]},{category:"Road Names",answers:["pickle buddy court","honey girl lane","ruby golightly drive","apple butter drive"]},{category:"Crushes",answers:["cillian murphy","drew starkey","dallas","chris christie"]},{category:"Lead Actors of Movies We Watched",answers:["timothee chalamet","harrison ford","dylan o'brien","jim carrey"]},{category:"My Spotify Wrapped Artists",answers:["radiohead","nat king cole","bobby darin","a tribe called quest"]}],j="name_four_progress";function re(s){localStorage.setItem(j,JSON.stringify(s))}function Q(){const s=localStorage.getItem(j);return s?JSON.parse(s):null}const D=25;function le(){const s=new Date("2025-01-01"),e=new Date;s.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-s)/(1e3*60*60*24));return C[t%C.length]}function ce(s){const e=new Date().toDateString(),t=le(),o=t.answers.map(v=>v.toUpperCase()),i=Q(),n=new Set(i?.date===e?i.found||[]:[]),r=new Set(i?.date===e?i.revealed||[]:[]);let h=i?.date===e&&i.guessCount||0,w=i?.date===e&&i.xpAwarded||0,p=i?.date===e&&i.completed;s.innerHTML=`
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
          ${p?"disabled":""}
        />
        <button type="submit" ${p?"disabled":""}>
          Submit
        </button>
      </form>

      <div id="completion-message"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" id="mobile-back-home">← Back</button>
    </div>
  `;const g=document.getElementById("guess-input"),B=document.getElementById("answer-grid"),L=document.getElementById("completion-message");document.getElementById("back-home").onclick=()=>window.showHome(),document.getElementById("mobile-back-home").onclick=()=>window.showHome(),T(),p&&f(),document.getElementById("guess-form").onsubmit=v=>{if(v.preventDefault(),p)return;const b=g.value.trim();if(!b)return;const a=b.toUpperCase();if(g.value="",h++,n.has(a)||r.has(a)){A();return}o.includes(a)&&(n.add(a),S(),T(),n.size+r.size===4&&P()),A()};function T(){B.innerHTML="",o.forEach(v=>{const b=n.has(v)||r.has(v),a=document.createElement("div");a.className=`answer-box ${b?"solved":""}`;const d=document.createElement("div");if(d.className="answer-text",d.textContent=b?v:v.replace(/[A-Z]/gi,"_"),a.appendChild(d),!b&&!p){const c=document.createElement("button");c.className="reveal-single-btn",c.textContent="Reveal",c.onclick=()=>{r.add(v),T(),n.size+r.size===4&&P(),A()},a.appendChild(c)}B.appendChild(a)})}function S(){w+=D,u.addXP(D)}function A(v=!1){re({date:e,found:[...n],revealed:[...r],completed:v||p,guessCount:h,xpAwarded:w})}function P(){p=!0,u.markPlayedToday("name-four"),g.disabled=!0,document.querySelector("#guess-form button").disabled=!0,A(!0),f()}function f(){L.innerHTML=`
      <div class="completion">
        🎉 Puzzle complete
        <div class="xp">+${w} XP</div>
        <p>Total guesses: <strong>${h}</strong></p>
        <p>Come back tomorrow for a new category</p>
      </div>
    `}}function de(){const s=new Date("2025-01-01"),e=new Date;s.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-s)/(1e3*60*60*24));return C[t%C.length]}function ue(s){const e=new Date().toDateString(),t=de(),o=Q();if(!o||o.date!==e){s.innerHTML=`
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
    `;return}const i=new Set(o.found||[]),n=new Set(o.revealed||[]);s.innerHTML=`
    <div class="name-four-review">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <div class="review-card">
        <h2>Today's Name Four Review</h2>

        <div class="category">
          Category: <strong>${t.category}</strong>
        </div>

        <div class="answers">
          ${t.answers.map(r=>{const h=r.toUpperCase();return i.has(h)?`
                <div class="review-answer guessed">
                  ${h}
                </div>
              `:n.has(h)?`
                <div class="review-answer revealed">
                  ${h}
                  <div class="review-note">Revealed</div>
                </div>
              `:`
              <div class="review-answer missed">
                ${h.replace(/[A-Z]/gi,"_")}
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
  `}const x=document.getElementById("app");function Y(){const s=u.getCurrentLevel(),e=u.getTotalXP(),t=u.getXPToNextLevel(),o=u.getNextReward();x.innerHTML=`
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
          <div class="game-icon">🤔</div>
          <h3>This or That</h3>
          <p>Guess what I would choose</p>
          <div class="game-xp">Up to 100 XP</div>

          ${u.hasPlayedToday("thisOrThat")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- WORDLE -->
        <div class="game-card ${u.hasPlayedToday("wordle")?"completed":""}"
             onclick="handleGameClick('wordle')">
          <div class="game-icon">📝</div>
          <h3>Wordle</h3>
          <p>Guess the secret word</p>
          <div class="game-xp">100 XP</div>

          ${u.hasPlayedToday("wordle")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- NAME FOUR -->
        <div class="game-card ${u.hasPlayedToday("name-four")?"completed":""}"
             onclick="handleGameClick('name-four')">
          <div class="game-icon">🔢</div>
          <h3>Name Four</h3>
          <p>Find the four that belong together</p>
          <div class="game-xp">100 XP</div>

          ${u.hasPlayedToday("name-four")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

      </div>

      <button class="rewards-btn" onclick="showRewards()">
        View Rewards & Progress
      </button>
    </div>
  `}async function he(s){u.hasPlayedToday(s)?pe(s):await ve(s)}async function ve(s){x.innerHTML='<div id="game-container"></div>';const e=document.getElementById("game-container");s==="thisOrThat"&&W(e),s==="wordle"&&await ie(e),s==="name-four"&&ce(e)}function pe(s){x.innerHTML='<div id="game-container"></div>';const e=document.getElementById("game-container");s==="thisOrThat"&&U(e),s==="wordle"&&ae(e),s==="name-four"&&ue(e)}function we(){const s=u.getUnlockedRewards(),e=u.getAllRewards();x.innerHTML=`
    <div class="rewards-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Your Rewards</h2>

      <div class="rewards-list">
        ${e.map(t=>{const o=s.some(i=>i.level===t.level);return`
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
