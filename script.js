// ----------------------
// ログイン機能
// ----------------------

function checkLogin() {
  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (savedUser && savedPass) {
    // 自動ログイン
    showGameScreen();
  }
}

document.getElementById("loginBtn").addEventListener("click", () => {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    document.getElementById("loginError").textContent = "入力してください";
    return;
  }

  // 保存（本当に簡易的）
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  showGameScreen();
});

function showGameScreen() {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
}

// ログアウト
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  localStorage.removeItem("pass");
  location.reload();
});

// 起動時にログインチェック
checkLogin();


// ----------------------
// ここから下はゲーム本体
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

// セーブ読み込み
function loadGame() {
  const data = JSON.parse(localStorage.getItem("clickerSave"));
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

// セーブ保存
function saveGame() {
  const data = {
    score,
    clickPower,
    autoPower,
    multi,
    costClick,
    costAuto,
    costMulti
  };
  localStorage.setItem("clickerSave", JSON.stringify(data));
}

setInterval(saveGame, 1000);

// ゲーム処理
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

setInterval(() => {
  score += autoPower * multi;
  updateDisplay();
}, 1000);

function updateDisplay() {
  scoreEl.textContent = score;
  powerClickEl.textContent = clickPower;
  powerAutoEl.textContent = autoPower;
  multiEl.textContent = multi;

  costClickEl.textContent = costClick;
  costAutoEl.textContent = costAuto;
  costMultiEl.textContent = costMulti;
}

loadGame();
