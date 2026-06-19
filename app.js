const WORDS = [
  { grade: 1, unit: "はじめの10語", word: "I", meaning: "私は", image: "I", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "you", meaning: "あなたは", image: "YOU", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "he", meaning: "彼は", image: "HE", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "she", meaning: "彼女は", image: "SHE", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "it", meaning: "それは", image: "IT", kind: "人・もの" },
  { grade: 1, unit: "はじめの10語", word: "we", meaning: "私たちは", image: "WE", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "they", meaning: "彼らは", image: "THEY", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "am", meaning: "です・います", image: "am", kind: "動き・状態" },
  { grade: 1, unit: "はじめの10語", word: "is", meaning: "です・います", image: "is", kind: "動き・状態" },
  { grade: 1, unit: "はじめの10語", word: "are", meaning: "です・います", image: "are", kind: "動き・状態" },

  { grade: 1, unit: "動きのことば", word: "like", meaning: "好き", image: "LIKE", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "play", meaning: "遊ぶ・する", image: "PLAY", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "go", meaning: "行く", image: "GO", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "come", meaning: "来る", image: "COME", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "have", meaning: "持っている", image: "HAVE", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "study", meaning: "勉強する", image: "STUDY", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "read", meaning: "読む", image: "READ", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "write", meaning: "書く", image: "WRITE", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "eat", meaning: "食べる", image: "EAT", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "drink", meaning: "飲む", image: "DRINK", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "see", meaning: "見る・会う", image: "SEE", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "look", meaning: "見る", image: "LOOK", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "want", meaning: "ほしい", image: "WANT", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "can", meaning: "できる", image: "CAN", kind: "助けることば" },
  { grade: 1, unit: "動きのことば", word: "do", meaning: "する", image: "DO", kind: "動き" },

  { grade: 1, unit: "学校・持ち物", word: "student", meaning: "生徒", image: "STU", kind: "もの・人" },
  { grade: 1, unit: "学校・持ち物", word: "teacher", meaning: "先生", image: "TCH", kind: "もの・人" },
  { grade: 1, unit: "学校・持ち物", word: "school", meaning: "学校", image: "SCH", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "classroom", meaning: "教室", image: "ROOM", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "desk", meaning: "机", image: "DESK", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "chair", meaning: "いす", image: "CHAIR", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "book", meaning: "本", image: "BOOK", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "pen", meaning: "ペン", image: "PEN", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "pencil", meaning: "えんぴつ", image: "PCL", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "bag", meaning: "かばん", image: "BAG", kind: "もの" },

  { grade: 1, unit: "食べ物・生活", word: "apple", meaning: "りんご", image: "APPLE", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "orange", meaning: "オレンジ", image: "ORNG", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "milk", meaning: "牛乳", image: "MILK", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "water", meaning: "水", image: "WATER", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "rice", meaning: "ご飯・米", image: "RICE", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "bread", meaning: "パン", image: "BREAD", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "breakfast", meaning: "朝食", image: "AM", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "lunch", meaning: "昼食", image: "NOON", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "dinner", meaning: "夕食", image: "PM", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "house", meaning: "家", image: "HOME", kind: "もの" },

  { grade: 1, unit: "人・場所・曜日", word: "friend", meaning: "友だち", image: "FRND", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "family", meaning: "家族", image: "FAM", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "mother", meaning: "母", image: "MOM", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "father", meaning: "父", image: "DAD", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "sister", meaning: "姉・妹", image: "SIS", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "brother", meaning: "兄・弟", image: "BRO", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "park", meaning: "公園", image: "PARK", kind: "場所" },
  { grade: 1, unit: "人・場所・曜日", word: "Monday", meaning: "月曜日", image: "MON", kind: "曜日" },
  { grade: 1, unit: "人・場所・曜日", word: "Sunday", meaning: "日曜日", image: "SUN", kind: "曜日" },
  { grade: 1, unit: "人・場所・曜日", word: "English", meaning: "英語", image: "ENG", kind: "もの" },

  { grade: 2, unit: "中2 基礎動詞", word: "make", meaning: "作る", image: "MAKE", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "use", meaning: "使う", image: "USE", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "live", meaning: "住む・生きる", image: "LIVE", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "know", meaning: "知っている", image: "KNOW", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "speak", meaning: "話す", image: "TALK", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "learn", meaning: "学ぶ", image: "LEARN", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "try", meaning: "試す", image: "TRY", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "visit", meaning: "訪れる", image: "VISIT", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "enjoy", meaning: "楽しむ", image: "ENJOY", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "need", meaning: "必要とする", image: "NEED", kind: "動き" },

  { grade: 2, unit: "中2 くらし", word: "city", meaning: "市・都会", image: "CITY", kind: "場所" },
  { grade: 2, unit: "中2 くらし", word: "country", meaning: "国・田舎", image: "CNTRY", kind: "場所" },
  { grade: 2, unit: "中2 くらし", word: "weather", meaning: "天気", image: "WTHR", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "season", meaning: "季節", image: "SEASN", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "summer", meaning: "夏", image: "SUMR", kind: "季節" },
  { grade: 2, unit: "中2 くらし", word: "winter", meaning: "冬", image: "WNTR", kind: "季節" },
  { grade: 2, unit: "中2 くらし", word: "music", meaning: "音楽", image: "MUSIC", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "picture", meaning: "絵・写真", image: "PIC", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "question", meaning: "質問", image: "Q", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "answer", meaning: "答え", image: "A", kind: "もの" },

  { grade: 3, unit: "中3 基礎動詞", word: "become", meaning: "なる", image: "BECM", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "bring", meaning: "持ってくる", image: "BRNG", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "build", meaning: "建てる", image: "BLD", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "change", meaning: "変える", image: "CHG", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "choose", meaning: "選ぶ", image: "CHS", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "finish", meaning: "終える", image: "FIN", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "remember", meaning: "覚えている", image: "REM", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "understand", meaning: "理解する", image: "UNDR", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "practice", meaning: "練習する", image: "PRAC", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "decide", meaning: "決める", image: "DCDE", kind: "動き" },

  { grade: 3, unit: "中3 考えることば", word: "important", meaning: "重要な", image: "IMP", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "different", meaning: "違った", image: "DIFF", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "favorite", meaning: "お気に入りの", image: "FAV", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "interesting", meaning: "おもしろい", image: "INTR", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "beautiful", meaning: "美しい", image: "BEAU", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "future", meaning: "未来", image: "FUTR", kind: "もの" },
  { grade: 3, unit: "中3 考えることば", word: "world", meaning: "世界", image: "WRLD", kind: "もの" },
  { grade: 3, unit: "中3 考えることば", word: "language", meaning: "言語", image: "LANG", kind: "もの" },
  { grade: 3, unit: "中3 考えることば", word: "culture", meaning: "文化", image: "CLTR", kind: "もの" },
  { grade: 3, unit: "中3 考えることば", word: "experience", meaning: "経験", image: "EXPR", kind: "もの" }
];

const state = {
  grade: 1,
  unit: "はじめの10語",
  size: 5,
  mode: "learn",
  session: [],
  index: 0,
  correct: 0,
  answered: false,
  progress: loadProgress()
};

const area = document.querySelector("#practiceArea");
const unitSelect = document.querySelector("#unitSelect");
const todayCount = document.querySelector("#todayCount");
const toast = document.querySelector("#toast");

let toastTimer = 0;
let voices = [];

init();
registerServiceWorker();

function init() {
  bindControls();
  refreshUnits();
  startSession();
  updateTodayCount();
  loadVoices();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function bindControls() {
  document.querySelector("#gradeTabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-grade]");
    if (!button) return;
    state.grade = Number(button.dataset.grade);
    activateButtonGroup("#gradeTabs", button);
    refreshUnits();
    startSession();
  });

  document.querySelector("#sizeTabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-size]");
    if (!button) return;
    state.size = Number(button.dataset.size);
    activateButtonGroup("#sizeTabs", button);
    startSession();
  });

  document.querySelector(".mode-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (!button) return;
    state.mode = button.dataset.mode;
    activateButtonGroup(".mode-tabs", button);
    startSession();
  });

  unitSelect.addEventListener("change", () => {
    state.unit = unitSelect.value;
    startSession();
  });
}

function activateButtonGroup(selector, activeButton) {
  document.querySelectorAll(`${selector} button`).forEach((button) => {
    button.classList.toggle("is-active", button === activeButton);
  });
}

function refreshUnits() {
  const units = [...new Set(WORDS.filter((item) => item.grade === state.grade).map((item) => item.unit))];
  unitSelect.innerHTML = "";
  units.forEach((unit) => {
    const option = document.createElement("option");
    option.value = unit;
    option.textContent = unit;
    unitSelect.append(option);
  });
  state.unit = units.includes(state.unit) ? state.unit : units[0];
  unitSelect.value = state.unit;
}

function startSession() {
  const pool = WORDS.filter((item) => item.grade === state.grade && item.unit === state.unit);
  state.session = chooseSession(pool, state.size);
  state.index = 0;
  state.correct = 0;
  state.answered = false;
  render();
}

function chooseSession(pool, size) {
  return [...pool]
    .sort((a, b) => masteryScore(a) - masteryScore(b) || a.word.localeCompare(b.word))
    .slice(0, Math.min(size, pool.length));
}

function masteryScore(item) {
  const record = state.progress.words[item.word.toLowerCase()] || { correct: 0, wrong: 0, seen: 0 };
  return record.correct * 2 + record.seen - record.wrong * 3;
}

function render() {
  if (state.index >= state.session.length) {
    renderResult();
    return;
  }
  if (state.mode === "quiz") renderQuiz();
  if (state.mode === "spell") renderSpell();
  if (state.mode === "learn") renderLearn();
}

function renderLearn() {
  const item = currentItem();
  area.innerHTML = `
    <article class="word-card">
      ${sessionLine()}
      <div class="illustration" aria-hidden="true">${item.image}</div>
      <h2 class="word">${item.word}</h2>
      <p class="meaning">${item.meaning}</p>
      <span class="kind">${item.kind}</span>
      <button class="speak-button" type="button" aria-label="${item.word}の音声を聞く" data-action="speak">♪</button>
      <div class="action-row">
        <button class="icon-button" type="button" data-action="prev" aria-label="前の単語" ${state.index === 0 ? "disabled" : ""}>‹</button>
        <button class="main-button" type="button" data-action="known">覚えた</button>
        <button class="icon-button" type="button" data-action="next" aria-label="次の単語">›</button>
      </div>
    </article>
  `;
  area.querySelector("[data-action='speak']").addEventListener("click", () => speak(item.word));
  area.querySelector("[data-action='known']").addEventListener("click", () => {
    mark(item, true);
    showToast(randomPraise());
    nextQuestion();
  });
  area.querySelector("[data-action='next']").addEventListener("click", () => {
    mark(item, false, true);
    nextQuestion();
  });
  const prev = area.querySelector("[data-action='prev']");
  if (prev) {
    prev.addEventListener("click", () => {
      state.index = Math.max(0, state.index - 1);
      render();
    });
  }
}

function renderQuiz() {
  const item = currentItem();
  const options = makeOptions(item);
  area.innerHTML = `
    <article class="quiz-card">
      ${sessionLine()}
      <div class="quiz-prompt">
        <button class="speak-button" type="button" aria-label="${item.word}の音声を聞く" data-action="speak">♪</button>
        <h2 class="quiz-word">${item.word}</h2>
        <p class="quiz-hint">意味を選ぼう</p>
      </div>
      <div class="choices">
        ${options.map((option) => `<button class="choice" type="button" data-answer="${escapeHtml(option.meaning)}">${option.meaning}</button>`).join("")}
      </div>
      <p class="feedback" id="feedback"></p>
    </article>
  `;
  area.querySelector("[data-action='speak']").addEventListener("click", () => speak(item.word));
  area.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => answerMeaning(button, item));
  });
}

function renderSpell() {
  const item = currentItem();
  area.innerHTML = `
    <article class="quiz-card">
      ${sessionLine()}
      <div class="quiz-prompt">
        <div class="illustration" aria-hidden="true">${item.image}</div>
        <p class="meaning">${item.meaning}</p>
        <button class="speak-button" type="button" aria-label="${item.word}の音声を聞く" data-action="speak">♪</button>
      </div>
      <form class="spell-form" autocomplete="off">
        <input class="spell-input" id="spellInput" inputmode="latin" autocapitalize="none" spellcheck="false" placeholder="英語で書く">
        <button class="main-button" type="submit">答える</button>
      </form>
      <p class="feedback" id="feedback"></p>
    </article>
  `;
  area.querySelector("[data-action='speak']").addEventListener("click", () => speak(item.word));
  area.querySelector(".spell-form").addEventListener("submit", (event) => {
    event.preventDefault();
    answerSpell(item);
  });
  setTimeout(() => area.querySelector("#spellInput")?.focus({ preventScroll: true }), 80);
}

function renderResult() {
  const total = state.session.length;
  const title = state.correct === total ? "ナイス！" : "よくできました";
  area.innerHTML = `
    <article class="result-card">
      <div>
        <h2>${title}</h2>
        <p>${total}語の小さな練習が終わりました。</p>
        <div class="mini-stats">
          <div class="mini-stat">
            <strong>${state.correct}</strong>
            <span>できた</span>
          </div>
          <div class="mini-stat">
            <strong>${total - state.correct}</strong>
            <span>もう一回</span>
          </div>
        </div>
        <button class="main-button" type="button" data-action="again">もう一度</button>
      </div>
    </article>
  `;
  area.querySelector("[data-action='again']").addEventListener("click", startSession);
}

function sessionLine() {
  const total = state.session.length;
  const count = Math.min(state.index + 1, total);
  const width = total ? Math.round((state.index / total) * 100) : 0;
  return `
    <div class="session-line">
      <span>${count}/${total}</span>
      <div class="progress-track" aria-hidden="true"><div class="progress-fill" style="width: ${width}%"></div></div>
      <span>${state.unit}</span>
    </div>
  `;
}

function currentItem() {
  return state.session[state.index];
}

function answerMeaning(button, item) {
  if (state.answered) return;
  state.answered = true;
  const isCorrect = button.dataset.answer === item.meaning;
  const feedback = area.querySelector("#feedback");
  area.querySelectorAll(".choice").forEach((choice) => {
    if (choice.dataset.answer === item.meaning) choice.classList.add("is-correct");
    if (choice === button && !isCorrect) choice.classList.add("is-wrong");
    choice.disabled = true;
  });
  feedback.textContent = isCorrect ? randomPraise() : `正解は「${item.meaning}」`;
  feedback.className = `feedback ${isCorrect ? "good" : "retry"}`;
  mark(item, isCorrect);
  if (isCorrect) speak(item.word);
  setTimeout(nextQuestion, isCorrect ? 780 : 1300);
}

function answerSpell(item) {
  if (state.answered) return;
  const input = area.querySelector("#spellInput");
  const feedback = area.querySelector("#feedback");
  const answer = normalize(input.value);
  const correct = normalize(item.word);
  const isCorrect = answer === correct;
  state.answered = true;
  feedback.textContent = isCorrect ? randomPraise() : `正解は ${item.word}`;
  feedback.className = `feedback ${isCorrect ? "good" : "retry"}`;
  input.disabled = true;
  mark(item, isCorrect);
  speak(item.word);
  setTimeout(nextQuestion, isCorrect ? 900 : 1500);
}

function makeOptions(item) {
  const others = WORDS
    .filter((word) => word.grade === state.grade && word.meaning !== item.meaning)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return shuffle([item, ...others]);
}

function nextQuestion() {
  state.index += 1;
  state.answered = false;
  render();
}

function mark(item, isCorrect, seenOnly = false) {
  const key = item.word.toLowerCase();
  const record = state.progress.words[key] || { correct: 0, wrong: 0, seen: 0 };
  record.seen += 1;
  if (!seenOnly) {
    if (isCorrect) {
      record.correct += 1;
      state.correct += 1;
    } else {
      record.wrong += 1;
    }
  }
  state.progress.words[key] = record;
  bumpToday();
  saveProgress();
  updateTodayCount();
}

function bumpToday() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.progress.today.date !== today) {
    state.progress.today = { date: today, count: 0 };
  }
  state.progress.today.count += 1;
}

function updateTodayCount() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.progress.today.date !== today) {
    state.progress.today = { date: today, count: 0 };
    saveProgress();
  }
  todayCount.textContent = state.progress.today.count;
}

function speak(word) {
  if (!("speechSynthesis" in window)) {
    showToast("この端末では音声が使えません");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.78;
  utterance.pitch = 1;
  const voice = pickVoice();
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  voices = window.speechSynthesis.getVoices();
}

function pickVoice() {
  const englishVoices = voices.filter((voice) => /^en[-_]/i.test(voice.lang));
  return englishVoices.find((voice) => /samantha|daniel|google us english|microsoft aria|premium/i.test(voice.name))
    || englishVoices.find((voice) => /en-US/i.test(voice.lang))
    || englishVoices[0];
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1100);
}

function randomPraise() {
  return shuffle(["ナイス！", "いいね！", "できた！", "その調子！"])[0];
}

function normalize(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function loadProgress() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const saved = JSON.parse(localStorage.getItem("ototan-word-progress") || "null");
    if (saved && saved.words && saved.today) return saved;
  } catch {
    // Broken local data should not stop practice.
  }
  return { words: {}, today: { date: today, count: 0 } };
}

function saveProgress() {
  localStorage.setItem("ototan-word-progress", JSON.stringify(state.progress));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!["http:", "https:"].includes(window.location.protocol)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
