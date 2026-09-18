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

// クリティカル
let critRate = 0;      // %
let critMulti = 2;     // 倍

// フィーバー
let clickCount = 0;
let feverActive = false;
let feverEndTime = 0;
let feverBaseTime = 30000; // 基本30秒

// 強化コスト
let costClick = 10;
let costAuto = 50;
let costMulti = 200;
let costCritRate = 1000;
let costCritMulti = 2000;

// ガチャコスト
const costClickPowerGacha = 10000000;
const costAutoGacha = 50000000;
const costFeverGacha = 30000000;

// 要素取得
const scoreEl = document.getElementById("score");
const powerClickEl = document.getElementById("powerClick");
const powerAutoEl = document.getElementById("powerAuto");
const multiEl = document.getElementById("multi");

const costClickEl = document.getElementById("costClick");
const costAutoEl = document.getElementById("costAuto");
const costMultiEl = document.getElementById("costMulti");

const critRateEl = document.getElementById("critRate");
const critMultiEl = document.getElementById("critMulti");
const costCritRateEl = document.getElementById("costCritRate");
const costCritMultiEl = document.getElementById("costCritMulti");

const feverStatusEl = document.getElementById("feverStatus");

// ----------------------
// 数字短縮表記
// ----------------------
function formatNumber(num) {
  if (num < 1000) return num;

  const units = ["K", "M", "B", "T", "aa", "ab", "ac", "ad", "ae"];
  let unitIndex = -1;

  while (num >= 1000 && unitIndex < units.length - 1) {
    num /= 1000;
    unitIndex++;
  }

  return num.toFixed(2) + units[unitIndex];
}

// ----------------------
// セーブ読み込み
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

  critRate = data.critRate ?? 0;
  critMulti = data.critMulti ?? 2;

  costClick = data.costClick;
  costAuto = data.costAuto;
  costMulti = data.costMulti;
  costCritRate = data.costCritRate ?? 1000;
  costCritMulti = data.costCritMulti ?? 2000;

  feverBaseTime = data.feverBaseTime ?? 30000;

  updateDisplay();
}

// ----------------------
// セーブ保存
// ----------------------
function saveGame() {
  const user = localStorage.getItem("currentUser");
  if (!user) return;

  const data = {
    score,
    clickPower,
    autoPower,
    multi,
    critRate,
    critMulti,
    costClick,
    costAuto,
    costMulti,
    costCritRate,
    costCritMulti,
    feverBaseTime
  };

  localStorage.setItem("save_" + user, JSON.stringify(data));
}

setInterval(saveGame, 1000);

// ----------------------
// フィーバー判定
// ----------------------
function checkFever() {
  if (!feverActive && clickCount >= 500) {
    feverActive = true;
    feverEndTime = Date.now() + feverBaseTime;
    clickCount = 0;

    document.body.classList.add("feverRainbow");
  }

  if (feverActive && Date.now() > feverEndTime) {
    feverActive = false;
    document.body.classList.remove("feverRainbow");
  }

  feverStatusEl.textContent = feverActive
    ? "フィーバー中！ ×3"
    : "フィーバー：なし";
}

// ----------------------
// クリティカル演出
// ----------------------
function spawnCritEffect(gain) {
  const effect = document.createElement("div");
  effect.className = "critEffect";
  effect.textContent = "+" + Math.floor(gain);

  effect.style.left = (Math.random() * 60 + 20) + "%";
  effect.style.top = (Math.random() * 40 + 30) + "%";

  document.getElementById("effectLayer").appendChild(effect);

  setTimeout(() => effect.remove(), 600);
}

// ----------------------
// クリック処理
// ----------------------
function doClick() {
  clickCount++;
  checkFever();

  let totalMulti = multi;
  if (feverActive) totalMulti *= 3;

  let gain = clickPower * totalMulti;

  if (Math.random() < critRate / 100) {
    gain *= critMulti;
    spawnCritEffect(gain);
  }

  score += gain;

  updateDisplay();
}

document.getElementById("clickBtn").addEventListener("click", doClick);

// ----------------------
// 強化処理
// ----------------------
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

// クリティカル率強化
document.getElementById("upgradeCritRate").addEventListener("click", () => {
  if (score >= costCritRate && critRate < 50) {
    score -= costCritRate;
    critRate++;
    costCritRate = Math.floor(costCritRate * 1.5);
    updateDisplay();
  }
});

// クリティカル倍率強化
document.getElementById("upgradeCritMulti").addEventListener("click", () => {
  if (score >= costCritMulti) {
    score -= costCritMulti;
    critMulti += 0.1;
    costCritMulti = Math.floor(costCritMulti * 1.5);
    updateDisplay();
  }
});

// ----------------------
// 自動生成
// ----------------------
setInterval(() => {
  let totalMulti = multi;
  if (feverActive) totalMulti *= 3;

  score += autoPower * totalMulti;
  updateDisplay();
}, 1000);

// ----------------------
// ガチャ：クリックパワー
// ----------------------
document.getElementById("clickPowerGachaBtn").addEventListener("click", () => {
  if (score < costClickPowerGacha) {
    document.getElementById("clickPowerGachaResult").textContent = "ポイント不足（1000万必要）";
    return;
  }

  score -= costClickPowerGacha;

  const results = [1, 3, 5, 10];
  const gain = results[Math.floor(Math.random() * results.length)];

  clickPower += gain;

  document.getElementById("clickPowerGachaResult").textContent =
    `結果：クリックパワー +${gain}`;

  updateDisplay();
});

// ----------------------
// ガチャ：オートクリック
// ----------------------
document.getElementById("autoGachaBtn").addEventListener("click", () => {
  if (score < costAutoGacha) {
    document.getElementById("autoGachaResult").textContent = "ポイント不足（5000万必要）";
    return;
  }

  score -= costAutoGacha;

  const results = [1, 5, 20, 100];
  const gain = results[Math.floor(Math.random() * results.length)];

  autoPower += gain;

  document.getElementById("autoGachaResult").textContent =
    `結果：オートクリック +${gain}`;

  updateDisplay();
});

// ----------------------
// ガチャ：フィーバー延長（ランダム +5〜+30秒）
// ----------------------
document.getElementById("feverGachaBtn").addEventListener("click", () => {
  if (score < costFeverGacha) {
    document.getElementById("feverGachaResult").textContent = "ポイント不足（3000万必要）";
    return;
  }

  score -= costFeverGacha;

  const gain = Math.floor(Math.random() * 26) + 5; // 5〜30秒
  feverBaseTime += gain * 1000;

  document.getElementById("feverGachaResult").textContent =
    `結果：フィーバー時間 +${gain}秒`;

  updateDisplay();
});

// ----------------------
// 表示更新（短縮表記版）
// ----------------------
function updateDisplay() {
  scoreEl.textContent = formatNumber(score);
  powerClickEl.textContent = formatNumber(clickPower);
  powerAutoEl.textContent = formatNumber(autoPower);
  multiEl.textContent = formatNumber(multi);

  critRateEl.textContent = critRate;
  critMultiEl.textContent = critMulti.toFixed(1);

  costClickEl.textContent = formatNumber(costClick);
  costAutoEl.textContent = formatNumber(costAuto);
  costMultiEl.textContent = formatNumber(costMulti);
  costCritRateEl.textContent = formatNumber(costCritRate);
  costCritMultiEl.textContent = formatNumber(costCritMulti);
}

// ----------------------
// スペースキー（長押し対策）
// ----------------------
document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    doClick();
  }
});

// ----------------------
// ズーム防止
// ----------------------
document.addEventListener('touchstart', function(e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});
