let score = 0;
let clickPower = 1;
let autoPower = 0;
let multi = 1;

let costClick = 10;
let costAuto = 50;
let costMulti = 200;

// HTML要素
const scoreEl = document.getElementById("score");
const powerClickEl = document.getElementById("powerClick");
const powerAutoEl = document.getElementById("powerAuto");
const multiEl = document.getElementById("multi");

const costClickEl = document.getElementById("costClick");
const costAutoEl = document.getElementById("costAuto");
const costMultiEl = document.getElementById("costMulti");

// ----------------------
//  セーブデータ読み込み
// ----------------------
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

// ----------------------
//  セーブデータ保存
// ----------------------
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

// 1秒ごとに自動保存
setInterval(saveGame, 1000);

// ----------------------
//  ゲーム処理
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

// ----------------------
//  起動時にロード
// ----------------------
loadGame();
