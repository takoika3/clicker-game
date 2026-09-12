// ----------------------
// アカウント管理
// ----------------------

// users = { "username": "password", ... }
function loadUsers() {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : {};
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
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
  loadGame(); // ← 新規登録後にロード
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
  loadGame(); // ← ログイン後にロード
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
// 起動時にログイン状態チェック
// ----------------------
if (localStorage.getItem("currentUser")) {
  showGameScreen();
  loadGame(); // ← 起動時にもロード
}


// ----------------------
// ここからゲーム本体
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
  if (!data) return;

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
}

// 1秒ごとに自動保存
setInterval(saveGame, 1000);

// ----------------------
// ゲーム処理
// ----------------------
document.getElementById("clickBtn").addEventListener("click", () => {
  score += clickPower * multi;
  updateDisplay();
});

document.getElementById("upgradeClick").addEventListener("click", () => {
  if (score >= costClick) {
    score -= costClick;
    clickPower++;
    costClick = Math.floor(costClick * 1.5);
    updateDisplay();
  }
});

document.getElementById("upgradeAuto").addEventListener("click", () => {
  if (score >= costAuto) {
    score -= costAuto;
    autoPower++;
    costAuto = Math.floor(costAuto * 1.5);
    updateDisplay();
  }
});

document.getElementById("upgradeMulti").addEventListener("click", () => {
  if (score >= costMulti) {
    score -= costMulti;
    multi++;
    costMulti = Math.floor(costMulti * 2);
    updateDisplay();
  }
});

// 自動生成
setInterval(() => {
  score += autoPower * multi;
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
}
// ダブルタップズーム防止
document.addEventListener('touchstart', function(e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

// ピンチズーム防止
document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});
