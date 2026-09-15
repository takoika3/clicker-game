// ----------------------
// アカウント管理
// ----------------------

function loadUsers() {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : {};
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ----------------------
// ランキング管理
// ----------------------

function loadRanking() {
  const data = localStorage.getItem("ranking");
  return data ? JSON.parse(data) : {};
}

function saveRanking(ranking) {
  localStorage.setItem("ranking", JSON.stringify(ranking));
}

function updateRanking(user, score) {
  if (!user) return;
  const ranking = loadRanking();
  ranking[user] = score;
  saveRanking(ranking);
}

// ----------------------
// 新規登録
// ----------------------
document.getElementById("signupBtn").addEventListener("click", () => {
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;

  if (!user || !pass) {
    document.getElementById("signupError").textContent = "入力してください";
    return;
  }

  const users = loadUsers();

  if (users[user]) {
    document.getElementById("signupError").textContent = "そのユーザー名は既に使われています";
    return;
  }

  users[user] = pass;
  saveUsers(users);

  localStorage.setItem("currentUser", user);
  showGameScreen();
  loadGame();
});

// ----------------------
// ログイン
// ----------------------
document.getElementById("loginBtn").addEventListener("click", () => {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  const users = loadUsers();

  if (!users[user] || users[user] !== pass) {
    document.getElementById("loginError").textContent = "ユーザー名またはパスワードが違います";
    return;
  }

  localStorage.setItem("currentUser", user);
  showGameScreen();
  loadGame();
});

// ----------------------
// 画面切り替え
// ----------------------
document.getElementById("gotoLogin").addEventListener("click", () => {
  signupScreen.style.display = "none";
  loginScreen.style.display = "block";
});

document.getElementById("gotoSignup").addEventListener("click", () => {
  loginScreen.style.display = "none";
  signupScreen.style.display = "block";
});

function showGameScreen() {
  signupScreen.style.display = "none";
  loginScreen.style.display = "none";
  gameScreen.style.display = "block";
}

// ----------------------
// ログアウト
// ----------------------
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  location.reload();
});

// ----------------------
// 起動時ログインチェック
// ----------------------
if (localStorage.getItem("currentUser")) {
  showGameScreen();
  loadGame();
}


// ----------------------
// ゲーム本体
// ----------------------

let score = 0;
let clickPower = 1;
let autoPower = 0;
let multi = 1;

let costClick = 10;
let costAuto = 50;
let costMulti = 200;

const scoreEl = document.getElementById("score");
const powerClickEl = document.getElementById("powerClick");
const powerAutoEl = document.getElementById("powerAuto");
const multiEl = document.getElementById("multi");

const costClickEl = document.getElementById("costClick");
const costAutoEl = document.getElementById("costAuto");
const costMultiEl = document.getElementById("costMulti");

// ----------------------
// セーブ読み込み（ユーザーごと）
// ----------------------
function loadGame() {
  const user = localStorage.getItem("currentUser");
  if (!user) return;

  const data = JSON.parse(localStorage.getItem("save_" + user));
  if (!data) {
    updateDisplay();
    return;
  }

  score = data.score;
  clickPower = data.clickPower;
  autoPower = data.autoPower;
  multi = data.multi;

  costClick = data.costClick;
  costAuto = data.costAuto;
  costMulti = data.costMulti;

  updateDisplay();
}

// ----------------------
// セーブ保存（ユーザーごと）
// ----------------------
function saveGame() {
  const user = localStorage.getItem("currentUser");
  if (!user) return;

  const data = {
    score,
    clickPower,
    autoPower,
    multi,
    costClick,
    costAuto,
    costMulti
  };

  localStorage.setItem("save_" + user, JSON.stringify(data));
  updateRanking(user, score);
}

setInterval(saveGame, 1000);

// ----------------------
// ゲーム処理
// ----------------------
document.getElementById("clickBtn").addEventListener("click", () => {
  score += clickPower * multi;
  updateRanking(localStorage.getItem("currentUser"), score);
  updateDisplay();
});

document.getElementById("upgradeClick").addEventListener("click", () => {
  if (score >= costClick) {
    score -= costClick;
    clickPower++;
    costClick = Math.floor(costClick * 1.5);
    updateRanking(localStorage.getItem("currentUser"), score);
    updateDisplay();
  }
});

document.getElementById("upgradeAuto").addEventListener("click", () => {
  if (score >= costAuto) {
    score -= costAuto;
    autoPower++;
    costAuto = Math.floor(costAuto * 1.5);
    updateRanking(localStorage.getItem("currentUser"), score);
    updateDisplay();
  }
});

document.getElementById("upgradeMulti").addEventListener("click", () => {
  if (score >= costMulti) {
    score -= costMulti;
    multi++;
    costMulti = Math.floor(costMulti * 2);
    updateRanking(localStorage.getItem("currentUser"), score);
    updateDisplay();
  }
});

// 自動生成
setInterval(() => {
  score += autoPower * multi;
  updateRanking(localStorage.getItem("currentUser"), score);
  updateDisplay();
}, 1000);

// 表示更新
function updateDisplay() {
  scoreEl.textContent = score;
  powerClickEl.textContent = clickPower;
  powerAutoEl.textContent = autoPower;
  multiEl.textContent = multi;

  costClickEl.textContent = costClick;
  costAutoEl.textContent = costAuto;
  costMultiEl.textContent = costMulti;

  showRanking();
}

// ----------------------
// ランキング表示
// ----------------------
function showRanking() {
  const ranking = loadRanking();
  const list = Object.entries(ranking)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  let html = "<ol>";
  list.forEach(([user, score]) => {
    html += `<li>${user}: ${score}</li>`;
  });
  html += "</ol>";

  document.getElementById("rankingList").innerHTML = html;
}

// ----------------------
// ガチャ機能（100万ポイント消費）
// ----------------------
function pullGacha() {
  const user = localStorage.getItem("currentUser");
  if (!user) {
    document.getElementById("gachaResult").textContent = "ログインしてください";
    return;
  }

  if (score < 1000000) {
    document.getElementById("gachaResult").textContent = "ポイントが足りません！（100万必要）";
    return;
  }

  score -= 1000000;

  const roll = Math.random() * 100;
  let result;

  if (roll < 40) {
    result = 0.5;
  } else if (roll < 70) {
    result = 1.1;
  } else if (roll < 90) {
    result = 1.5;
  } else if (roll < 99) {
    result = 2;
  } else {
    result = 10;
  }

  // 上乗せ方式
  multi = multi * result;

  document.getElementById("gachaResult").textContent =
    `ガチャ結果：${result}倍！（現在の倍率：${multi}倍）`;

  updateRanking(user, score);
  updateDisplay();
}

document.getElementById("gachaBtn").addEventListener("click", pullGacha);

// ----------------------
// スペースキーで1回だけクリック（長押し対策）
// ----------------------
document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    score += clickPower * multi;
    updateRanking(localStorage.getItem("currentUser"), score);
    updateDisplay();
  }
});

// ----------------------
// ズーム防止（iPad連打対策）
// ----------------------
document.addEventListener('touchstart', function(e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});
