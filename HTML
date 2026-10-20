// ============================================
// 星剣と魔導書のクロニクル
// ゲーム本体
// ============================================


// ============================================
// 基本スキル
// ============================================

const baseSkills = [
  {
    name: "火炎弾",
    tag: "炎",
    power: 1.35
  },

  {
    name: "油壺",
    tag: "油",
    power: 0.65
  },

  {
    name: "爆裂",
    tag: "爆発",
    power: 1.2
  },

  {
    name: "氷槍",
    tag: "凍結",
    power: 1.05
  },

  {
    name: "雷撃",
    tag: "雷",
    power: 1.15
  },

  {
    name: "生命吸収",
    tag: "吸血",
    power: 0.9
  }
];


// ============================================
// ガチャ限定スキル
// ============================================

const specialSkills = [
  {
    name: "星落とし",
    tag: "光",
    power: 1.9
  },

  {
    name: "深淵斬り",
    tag: "闇",
    power: 1.75
  },

  {
    name: "神風連撃",
    tag: "風",
    power: 1.55
  },

  {
    name: "天雷",
    tag: "雷",
    power: 2.0
  },

  {
    name: "獄炎",
    tag: "炎",
    power: 2.1
  }
];


// ============================================
// 職業
// ============================================

const jobs = {

  "剣士": {
    attack: 1.0,
    defense: 1.35,
    hp: 1.35
  },

  "魔導士": {
    attack: 1.35,
    defense: 0.85,
    hp: 0.9
  },

  "狩人": {
    attack: 1.18,
    defense: 1.0,
    hp: 1.0
  }

};


// ============================================
// 星魂スキルツリー
// ============================================

const treeNodes = [

  // ==========================
  // 闘争
  // ==========================

  {
    id: "w1",
    name: "猛攻",
    icon: "⚔",
    type: "war",

    description:
      "攻撃力を上昇させる。",

    effect: "attack",

    value: 0.06,

    maxRank: 3,

    cost: 1,

    x: 2,
    y: 1
  },


  {
    id: "w2",
    name: "破甲",
    icon: "🗡️",
    type: "war",

    description:
      "最終ダメージを強化する。",

    effect: "damage",

    value: 0.05,

    maxRank: 3,

    cost: 2,

    required: ["w1"],

    x: 2,
    y: 2
  },


  {
    id: "w3",
    name: "会心眼",
    icon: "◉",
    type: "war",

    description:
      "さらに攻撃性能を高める。",

    effect: "damage",

    value: 0.07,

    maxRank: 2,

    cost: 3,

    required: ["w2"],

    x: 1,
    y: 3
  },


  {
    id: "w4",
    name: "狂戦士",
    icon: "🔥",
    type: "war",

    description:
      "攻撃力を大幅強化する。守護神とは同時取得できない。",

    effect: "attack",

    value: 0.25,

    maxRank: 1,

    cost: 6,

    required: ["w3"],

    exclude: "g4",

    x: 2,
    y: 4
  },


  {
    id: "w5",
    name: "処刑星",
    icon: "☄️",
    type: "war",

    description:
      "ボスへの最終ダメージを大幅に強化する。",

    effect: "damage",

    value: 0.18,

    maxRank: 1,

    cost: 8,

    required: ["w4"],

    x: 1,
    y: 5
  },


  // ==========================
  // 守護
  // ==========================

  {
    id: "g1",
    name: "生命",
    icon: "♥",
    type: "guard",

    description:
      "最大HPを上昇させる。",

    effect: "hp",

    value: 0.08,

    maxRank: 3,

    cost: 1,

    x: 4,
    y: 1
  },


  {
    id: "g2",
    name: "堅牢",
    icon: "🛡️",
    type: "guard",

    description:
      "防御力を上昇させる。",

    effect: "defense",

    value: 0.07,

    maxRank: 3,

    cost: 2,

    required: ["g1"],

    x: 4,
    y: 2
  },


  {
    id: "g3",
    name: "再生",
    icon: "✚",
    type: "guard",

    description:
      "HPと防御力を同時に強化する。",

    effect: "tank",

    value: 0.08,

    maxRank: 2,

    cost: 3,

    required: ["g2"],

    x: 5,
    y: 3
  },


  {
    id: "g4",
    name: "守護神",
    icon: "♜",
    type: "guard",

    description:
      "HPと防御を大幅強化する。狂戦士とは同時取得できない。",

    effect: "tank",

    value: 0.25,

    maxRank: 1,

    cost: 6,

    required: ["g3"],

    exclude: "w4",

    x: 4,
    y: 4
  },


  {
    id: "g5",
    name: "不死星",
    icon: "✦",
    type: "guard",

    description:
      "HPと防御をさらに強化する。",

    effect: "tank",

    value: 0.18,

    maxRank: 1,

    cost: 8,

    required: ["g4"],

    x: 5,
    y: 5
  },


  // ==========================
  // 運命
  // ==========================

  {
    id: "f1",
    name: "黄金律",
    icon: "◆",
    type: "fate",

    description:
      "ゴールド獲得量を増加させる。",

    effect: "gold",

    value: 0.10,

    maxRank: 3,

    cost: 1,

    x: 6,
    y: 1
  },


  {
    id: "f2",
    name: "時流",
    icon: "⌛",
    type: "fate",

    description:
      "放置報酬を増加させる。",

    effect: "idle",

    value: 0.12,

    maxRank: 3,

    cost: 2,

    required: ["f1"],

    x: 6,
    y: 2
  },


  {
    id: "f3",
    name: "星の恩寵",
    icon: "✧",
    type: "fate",

    description:
      "攻撃・防御・HPをすべて強化する。",

    effect: "all",

    value: 0.04,

    maxRank: 3,

    cost: 3,

    required: ["f2"],

    x: 7,
    y: 3
  },


  {
    id: "f4",
    name: "運命改変",
    icon: "♢",
    type: "fate",

    description:
      "すべての基本能力を大幅強化する。",

    effect: "all",

    value: 0.12,

    maxRank: 1,

    cost: 6,

    required: ["f3"],

    x: 6,
    y: 4
  },


  {
    id: "f5",
    name: "輪廻星",
    icon: "∞",
    type: "fate",

    description:
      "転生者の全能力をさらに強化する。",

    effect: "all",

    value: 0.15,

    maxRank: 1,

    cost: 8,

    required: ["f4"],

    x: 7,
    y: 5
  }

];


// ============================================
// 初期データ
// ============================================

function createNewData() {

  return {

    level: 1,

    exp: 0,

    gold: 120,

    crystal: 1000,

    soul: 0,

    stage: 1,

    job: "剣士",

    attackUpgrade: 0,

    defenseUpgrade: 0,

    skills:
      JSON.parse(
        JSON.stringify(baseSkills)
      ),

    owned: [],

    gear: [],

    tree: {},

    rebirths: 0,

    bank: 0,

    lastSave:
      Date.now()

  };

}


// ============================================
// セーブ読み込み
// ============================================

let game = createNewData();

const storedData =
  localStorage.getItem(
    "starSwordSave"
  );

if (storedData) {

  try {

    const loaded =
      JSON.parse(
        storedData
      );

    game = {
      ...game,
      ...loaded
    };

  } catch (error) {

    console.error(
      "セーブデータを読み込めませんでした。",
      error
    );

  }

}


// ============================================
// 古いデータ対策
// ============================================

if (
  !game.tree ||
  Array.isArray(game.tree)
) {

  game.tree = {};

}

if (
  !Array.isArray(game.skills)
) {

  game.skills =
    JSON.parse(
      JSON.stringify(baseSkills)
    );

}

if (
  !Array.isArray(game.gear)
) {

  game.gear = [];

}

if (
  !Array.isArray(game.owned)
) {

  game.owned = [];

}


// ============================================
// DOM取得
// ============================================

function element(id) {

  return document.getElementById(id);

}


// ============================================
// セーブ
// ============================================

function saveGame() {

  game.lastSave =
    Date.now();

  localStorage.setItem(
    "starSwordSave",
    JSON.stringify(game)
  );

}


// ============================================
// スキルツリーランク
// ============================================

function getTreeRank(id) {

  return game.tree[id] || 0;

}


// ============================================
// ツリーボーナス
// ============================================

function getTreeBonus(effect) {

  let total = 0;

  treeNodes.forEach(
    (node) => {

      if (
        node.effect === effect
      ) {

        total +=
          node.value *
          getTreeRank(
            node.id
          );

      }

    }
  );

  return total;

}


// ============================================
// ステータス計算
// ============================================

function calculateStats() {

  const job =
    jobs[game.job];

  const rebirthBonus =
    1 +
    game.rebirths *
    0.12;

  const allBonus =
    1 +
    getTreeBonus(
      "all"
    );

  const attackBonus =
    1 +
    getTreeBonus(
      "attack"
    );

  const defenseBonus =
    1 +
    getTreeBonus(
      "defense"
    ) +
    getTreeBonus(
      "tank"
    );

  const hpBonus =
    1 +
    getTreeBonus(
      "hp"
    ) +
    getTreeBonus(
      "tank"
    );


  const equipmentPower =
    game.gear.reduce(
      (total, item) =>
        total +
        item.bonus,
      0
    );


  let attack =
    (
      25 +
      game.level * 7 +
      game.attackUpgrade * 8
    ) *
    job.attack *
    rebirthBonus *
    allBonus *
    attackBonus;


  let defense =
    (
      10 +
      game.level * 3 +
      game.defenseUpgrade * 6
    ) *
    job.defense *
    rebirthBonus *
    allBonus *
    defenseBonus;


  let hp =
    (
      180 +
      game.level * 35
    ) *
    job.hp *
    rebirthBonus *
    allBonus *
    hpBonus;


  attack +=
    equipmentPower;

  defense +=
    equipmentPower / 2;

  hp +=
    equipmentPower * 3;


  attack =
    Math.floor(attack);

  defense =
    Math.floor(defense);

  hp =
    Math.floor(hp);


  const power =
    Math.floor(
      attack * 14 +
      defense * 10 +
      hp * 2 +
      equipmentPower * 20
    );


  return {
    attack,
    defense,
    hp,
    power
  };

}


// ============================================
// 通知
// ============================================

function showToast(message) {

  const toast =
    element("toast");

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );


  setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );

    },
    1800
  );

}


// ============================================
// 戦闘ログ
// ============================================

function battleLog(message) {

  const log =
    element("log");

  const line =
    document.createElement(
      "div"
    );

  line.textContent =
    "› " + message;

  log.appendChild(line);

  log.scrollTop =
    log.scrollHeight;

}


// ============================================
// レベルアップ
// ============================================

function checkLevelUp() {

  while (
    game.exp >=
    game.level * 100
  ) {

    game.exp -=
      game.level * 100;

    game.level++;

    battleLog(
      "✨ レベルアップ！ Lv." +
      game.level
    );

  }

}


// ============================================
// スキルツリー解放条件
// ============================================

function canUnlockNode(
  node
) {

  if (
    node.required
  ) {

    const requirementsMet =
      node.required.every(
        (id) =>
          getTreeRank(id) >
          0
      );


    if (
      !requirementsMet
    ) {

      return false;

    }

  }


  if (
    node.exclude &&
    getTreeRank(
      node.exclude
    ) > 0
  ) {

    return false;

  }


  return true;

}


// ============================================
// スキルツリー選択
// ============================================

function selectTreeNode(id) {

  const node =
    treeNodes.find(
      (item) =>
        item.id === id
    );


  if (!node) {

    return;

  }


  const rank =
    getTreeRank(id);

  const nextCost =
    node.cost +
    rank;

  const canUnlock =
    canUnlockNode(node);


  const detail =
    element(
      "nodeDetail"
    );


  detail.innerHTML = `
    <h3>
      ${node.icon}
      ${node.name}
    </h3>

    <p>
      ${node.description}
    </p>

    <p>
      ランク:
      ${rank}
      /
      ${node.maxRank}
    </p>

    <p>
      1ランクにつき
      +${Math.round(
        node.value *
        100
      )}%
    </p>

    <button
      id="upgradeNode"
      class="primary"
    >
      強化
      ${nextCost}
      🌟
    </button>
  `;


  const button =
    element(
      "upgradeNode"
    );


  if (
    !canUnlock ||
    rank >= node.maxRank ||
    game.soul < nextCost
  ) {

    button.disabled =
      true;

  }


  button.addEventListener(
    "click",
    () => {

      if (
        game.soul <
        nextCost
      ) {

        return;

      }


      game.soul -=
        nextCost;

      game.tree[id] =
        rank + 1;


      saveGame();

      render();

      selectTreeNode(id);

      showToast(
        node.name +
        "を強化しました！"
      );

    }
  );


  document
    .querySelectorAll(
      ".node"
    )
    .forEach(
      (button) => {

        button.classList.toggle(
          "selected",
          button.dataset.node === id
        );

      }
    );

}


// ============================================
// スキルツリー描画
// ============================================

function renderTree() {

  const board =
    element(
      "treeBoard"
    );

  board.innerHTML = "";


  treeNodes.forEach(
    (node) => {

      const rank =
        getTreeRank(
          node.id
        );

      const unlocked =
        canUnlockNode(
          node
        );


      const button =
        document.createElement(
          "button"
        );


      button.className =
        "node " +
        node.type;


      if (!unlocked) {

        button.classList.add(
          "locked"
        );

      }


      if (
        rank >=
        node.maxRank
      ) {

        button.classList.add(
          "maxed"
        );

      }


      button.style.gridColumn =
        node.x;

      button.style.gridRow =
        node.y;


      button.dataset.node =
        node.id;


      button.innerHTML = `
        <b>
          ${node.icon}
        </b>

        ${node.name}

        <small>
          ${rank}
          /
          ${node.maxRank}
        </small>
      `;


      button.addEventListener(
        "click",
        () => {

          selectTreeNode(
            node.id
          );

        }
      );


      board.appendChild(
        button
      );

    }
  );

}


// ============================================
// メイン描画
// ============================================

function render() {

  const stats =
    calculateStats();


  const expNeeded =
    game.level *
    100;


  element("power")
    .textContent =
    stats.power;


  element("gold")
    .textContent =
    Math.floor(
      game.gold
    );


  element("crystal")
    .textContent =
    game.crystal;


  element("soul")
    .textContent =
    game.soul;


  element("level");


  element("lv")
    .textContent =
    game.level;


  element("xp")
    .textContent =
    game.exp;


  element("xpneed")
    .textContent =
    expNeeded;


  element("xpbar")
    .style.width =
    Math.min(
      100,
      game.exp /
      expNeeded *
      100
    ) +
    "%";


  element("stage")
    .textContent =
    game.stage;


  element("area")
    .textContent =
    "第" +
    Math.ceil(
      game.stage /
      5
    ) +
    "章 星界への道";


  element("playerHp")
    .textContent =
    stats.hp;


  element("atk")
    .textContent =
    stats.attack;


  element("def")
    .textContent =
    stats.defense;


  element("offlineGold")
    .textContent =
    Math.floor(
      game.bank
    );


  element("trainCost")
    .textContent =
    50 +
    game.attackUpgrade *
    40;


  element("armorCost")
    .textContent =
    50 +
    game.defenseUpgrade *
    40;


  // =========================
  // 職業
  // =========================

  const jobsElement =
    element("jobs");

  jobsElement.innerHTML =
    "";


  Object.keys(jobs)
    .forEach(
      (jobName) => {

        const button =
          document.createElement(
            "button"
          );


        button.textContent =
          jobName;


        if (
          jobName ===
          game.job
        ) {

          button.classList.add(
            "active"
          );

        }


        button.addEventListener(
          "click",
          () => {

            game.job =
              jobName;

            saveGame();

            render();

            showToast(
              jobName +
              "に変更しました"
            );

          }
        );


        jobsElement.appendChild(
          button
        );

      }
    );


  // =========================
  // スキル
  // =========================

  const skillElement =
    element("skills");

  skillElement.innerHTML =
    "";


  game.skills
    .slice(0, 6)
    .forEach(
      (skill, index) => {

        const button =
          document.createElement(
            "button"
          );


        button.className =
          "skill";


        button.innerHTML = `
          <span>
            ${index + 1}.
            ${skill.name}
          </span>

          <strong>
            ${skill.tag}
          </strong>
        `;


        button.addEventListener(
          "click",
          () => {

            const max =
              Math.min(
                6,
                game.skills.length
              );


            const next =
              (
                index + 1
              ) %
              max;


            const temp =
              game.skills[index];


            game.skills[index] =
              game.skills[next];


            game.skills[next] =
              temp;


            saveGame();

            render();

          }
        );


        skillElement.appendChild(
          button
        );

      }
    );


  // =========================
  // 装備
  // =========================

  const gear =
    element("gear");


  if (
    game.gear.length === 0
  ) {

    gear.textContent =
      "装備なし";

  } else {

    gear.innerHTML =
      game.gear
        .slice(-5)
        .map(
          (item) => `
            <div class="card ${item.rarity}">
              ${item.rarity}
              ${item.name}
              +${item.bonus}
            </div>
          `
        )
        .join("");

  }


  // =========================
  // 星魂
  // =========================

  element("treeSoul")
    .textContent =
    game.soul;


  renderTree();


  // =========================
  // ガチャ履歴
  // =========================

  const inventory =
    element("inventory");


  if (
    game.owned.length ===
    0
  ) {

    inventory.textContent =
      "まだ召喚していません。";

  } else {

    inventory.innerHTML =
      game.owned
        .slice(-10)
        .reverse()
        .map(
          (item) => `
            <div class="card ${item.rarity}">
              <b>
                ${item.rarity}
              </b>

              <br>

              ${item.name}
            </div>
          `
        )
        .join("");

  }


  // =========================
  // 転生
  // =========================

  element("rebirths")
    .textContent =
    game.rebirths;


  element("perm")
    .textContent =
    (
      1 +
      game.rebirths *
      0.12
    ).toFixed(2) +
    "x";


  const soulGain =
    Math.max(
      0,
      Math.floor(
        game.stage /
        5
      )
    );


  element("gainSoul")
    .textContent =
    soulGain;


  element("doRebirth")
    .disabled =
    game.stage < 10;

}


// ============================================
// 戦闘
// ============================================

let fighting =
  false;


element("fight")
  .addEventListener(
    "click",
    () => {

      if (fighting) {

        return;

      }


      fighting =
        true;


      const stats =
        calculateStats();


      const enemyMaxHp =
        Math.floor(
          180 *
          Math.pow(
            1.28,
            game.stage - 1
          )
        );


      let enemyHp =
        enemyMaxHp;


      let playerHp =
        stats.hp;


      let skillIndex =
        0;


      element("maxhp")
        .textContent =
        enemyMaxHp;


      element("hp")
        .textContent =
        enemyHp;


      element("hpbar")
        .style.width =
        "100%";


      battleLog(
        "⚔️ 戦闘開始！"
      );


      const battle =
        setInterval(
          () => {

            const skills =
              game.skills
                .slice(
                  0,
                  6
                );


            const skill =
              skills[
                skillIndex %
                skills.length
              ];


            let damage =
              Math.floor(
                stats.attack *
                skill.power *
                (
                  1 +
                  getTreeBonus(
                    "damage"
                  )
                )
              );


            // ==================
            // 炎 → 油 → 爆発
            // ==================

            if (
              skillIndex >= 2
            ) {

              const previous1 =
                skills[
                  (
                    skillIndex -
                    1
                  ) %
                  skills.length
                ];


              const previous2 =
                skills[
                  (
                    skillIndex -
                    2
                  ) %
                  skills.length
                ];


              if (
                previous2.tag ===
                  "炎" &&
                previous1.tag ===
                  "油" &&
                skill.tag ===
                  "爆発"
              ) {

                damage =
                  Math.floor(
                    damage *
                    2.4
                  );


                battleLog(
                  "💥 魔導式「大爆発」！"
                );

              }


              // ==================
              // 凍結 → 雷
              // ==================

              if (
                previous1.tag ===
                  "凍結" &&
                skill.tag ===
                  "雷"
              ) {

                damage =
                  Math.floor(
                    damage *
                    1.8
                  );


                battleLog(
                  "⚡ 魔導式「感電」！"
                );

              }

            }


            enemyHp -=
              damage;


            battleLog(
              skill.name +
              " → " +
              damage +
              "ダメージ"
            );


            element("hp")
              .textContent =
              Math.max(
                0,
                enemyHp
              );


            element("hpbar")
              .style.width =
              Math.max(
                0,
                enemyHp /
                enemyMaxHp *
                100
              ) +
              "%";


            // ==================
            // 勝利
            // ==================

            if (
              enemyHp <= 0
            ) {

              clearInterval(
                battle
              );


              const goldReward =
                Math.floor(
                  (
                    35 +
                    game.stage *
                    18
                  ) *
                  (
                    1 +
                    getTreeBonus(
                      "gold"
                    )
                  )
                );


              game.gold +=
                goldReward;


              game.exp +=
                40 +
                game.stage *
                12;


              game.crystal +=
                15;


              battleLog(
                "🏆 勝利！"
              );


              battleLog(
                "🪙 " +
                goldReward +
                "ゴールド獲得"
              );


              battleLog(
                "💎 15クリスタル獲得"
              );


              game.stage++;


              checkLevelUp();


              fighting =
                false;


              saveGame();

              render();

              return;

            }


            // ==================
            // 敵攻撃
            // ==================

            const enemyDamage =
              Math.max(
                3,

                Math.floor(
                  16 +
                  game.stage *
                  9 -
                  stats.defense *
                  0.35
                )
              );


            playerHp -=
              enemyDamage;


            // ==================
            // 敗北
            // ==================

            if (
              playerHp <= 0
            ) {

              clearInterval(
                battle
              );


              battleLog(
                "💀 敗北しました。"
              );


              battleLog(
                "育成やスキル編成を見直そう！"
              );


              fighting =
                false;

              return;

            }


            skillIndex++;

          },

          400
        );

    }
  );


// ============================================
// 攻撃強化
// ============================================

element("train")
  .addEventListener(
    "click",
    () => {

      const cost =
        50 +
        game.attackUpgrade *
        40;


      if (
        game.gold <
        cost
      ) {

        showToast(
          "ゴールドが足りません"
        );

        return;

      }


      game.gold -=
        cost;


      game.attackUpgrade++;


      saveGame();

      render();


      showToast(
        "攻撃力を強化しました！"
      );

    }
  );


// ============================================
// 防御強化
// ============================================

element("armor")
  .addEventListener(
    "click",
    () => {

      const cost =
        50 +
        game.defenseUpgrade *
        40;


      if (
        game.gold <
        cost
      ) {

        showToast(
          "ゴールドが足りません"
        );

        return;

      }


      game.gold -=
        cost;


      game.defenseUpgrade++;


      saveGame();

      render();


      showToast(
        "防御力を強化しました！"
      );

    }
  );


// ============================================
// 放置報酬受け取り
// ============================================

element("claim")
  .addEventListener(
    "click",
    () => {

      const reward =
        Math.floor(
          game.bank
        );


      game.gold +=
        reward;


      game.bank =
        0;


      saveGame();

      render();


      showToast(
        reward +
        "ゴールド獲得！"
      );

    }
  );


// ============================================
// ガチャ
// ============================================

function summon(
  count,
  cost
) {

  if (
    game.crystal <
    cost
  ) {

    showToast(
      "クリスタルが足りません"
    );

    return;

  }


  game.crystal -=
    cost;


  const results =
    [];


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const random =
      Math.random();


    let rarity;


    if (
      random <
      0.05
    ) {

      rarity =
        "SSR";

    } else if (
      random <
      0.28
    ) {

      rarity =
        "SR";

    } else {

      rarity =
        "R";

    }


    // 10連最後はSR以上

    if (
      count === 10 &&
      i === 9 &&
      rarity === "R"
    ) {

      rarity =
        "SR";

    }


    // ==================
    // スキル
    // ==================

    if (
      Math.random() <
      0.45
    ) {

      const original =
        specialSkills[
          Math.floor(
            Math.random() *
            specialSkills.length
          )
        ];


      const item = {

        name:
          original.name,

        rarity:
          rarity,

        type:
          "skill"

      };


      game.owned.push(
        item
      );


      const alreadyOwned =
        game.skills.some(
          (skill) =>
            skill.name ===
            original.name
        );


      if (
        !alreadyOwned
      ) {

        game.skills.push({

          name:
            original.name,

          tag:
            original.tag,

          power:
            original.power

        });

      }


      results.push(
        item
      );

    }


    // ==================
    // 装備
    // ==================

    else {

      const equipmentNames = [
        "星鉄の剣",
        "月影の杖",
        "天風の弓",
        "星界の鎧",
        "輪廻の指輪"
      ];


      let bonus;


      if (
        rarity === "SSR"
      ) {

        bonus =
          35;

      } else if (
        rarity === "SR"
      ) {

        bonus =
          15;

      } else {

        bonus =
          6;

      }


      const item = {

        name:
          equipmentNames[
            Math.floor(
              Math.random() *
              equipmentNames.length
            )
          ],

        rarity:
          rarity,

        bonus:
          bonus,

        type:
          "gear"

      };


      game.gear.push(
        item
      );


      game.owned.push(
        item
      );


      results.push(
        item
      );

    }

  }


  // =========================
  // 結果表示
  // =========================

  element("results")
    .innerHTML =
    results
      .map(
        (item) => `
          <div
            class="card ${item.rarity}"
          >
            <b>
              ${item.rarity}
            </b>

            <br>

            ${item.name}
          </div>
        `
      )
      .join("");


  saveGame();

  render();

}


// 単発

element("pull1")
  .addEventListener(
    "click",
    () => {

      summon(
        1,
        100
      );

    }
  );


// 10連

element("pull10")
  .addEventListener(
    "click",
    () => {

      summon(
        10,
        900
      );

    }
  );


// ============================================
// 転生
// ============================================

element("doRebirth")
  .addEventListener(
    "click",
    () => {

      if (
        game.stage <
        10
      ) {

        return;

      }


      const soulGain =
        Math.floor(
          game.stage /
          5
        );


      const answer =
        confirm(
          "転生しますか？\n\n" +
          "獲得星魂: " +
          soulGain +
          " 🌟"
        );


      if (!answer) {

        return;

      }


      game.soul +=
        soulGain;


      game.rebirths++;


      game.level =
        1;


      game.exp =
        0;


      game.gold =
        120;


      game.stage =
        1;


      game.attackUpgrade =
        0;


      game.defenseUpgrade =
        0;


      game.bank =
        0;


      saveGame();

      render();


      showToast(
        "🌠 転生しました！"
      );

    }
  );


// ============================================
// スキルツリーリセット
// ============================================

element("resetTree")
  .addEventListener(
    "click",
    () => {

      let refund =
        0;


      treeNodes.forEach(
        (node) => {

          const rank =
            getTreeRank(
              node.id
            );


          for (
            let i = 0;
            i < rank;
            i++
          ) {

            refund +=
              node.cost +
              i;

          }

        }
      );


      if (
        refund === 0
      ) {

        showToast(
          "リセットする能力がありません"
        );

        return;

      }


      const answer =
        confirm(
          "スキルツリーを初期化しますか？\n\n" +
          refund +
          " 星魂が返却されます。"
        );


      if (!answer) {

        return;

      }


      game.soul +=
        refund;


      game.tree =
        {};


      saveGame();

      render();


      element(
        "nodeDetail"
      ).innerHTML = `
        <p>
          ノードを選択すると
          詳細を表示します。
        </p>
      `;


      showToast(
        "星魂盤を初期化しました"
      );

    }
  );


// ============================================
// タブ切り替え
// ============================================

document
  .querySelectorAll(
    "[data-tab]"
  )
  .forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "nav button"
            )
            .forEach(
              (navButton) => {

                navButton
                  .classList
                  .remove(
                    "active"
                  );

              }
            );


          document
            .querySelectorAll(
              ".tab"
            )
            .forEach(
              (tab) => {

                tab
                  .classList
                  .remove(
                    "active"
                  );

              }
            );


          button
            .classList
            .add(
              "active"
            );


          element(
            button.dataset.tab
          )
            .classList
            .add(
              "active"
            );

        }
      );

    }
  );


// ============================================
// セーブ初期化
// ============================================

element("reset")
  .addEventListener(
    "click",
    () => {

      const answer =
        confirm(
          "本当にセーブデータを削除しますか？\n\n" +
          "この操作は取り消せません。"
        );


      if (!answer) {

        return;

      }


      localStorage.removeItem(
        "starSwordSave"
      );


      location.reload();

    }
  );


// ============================================
// オフライン報酬計算
// ============================================

function calculateOfflineReward() {

  const now =
    Date.now();


  const elapsed =
    Math.min(

      8 * 60 * 60,

      Math.max(
        0,

        (
          now -
          game.lastSave
        ) /
        1000
      )

    );


  const rewardRate =
    (
      1 +
      game.stage *
      0.22
    ) *
    (
      1 +
      getTreeBonus(
        "idle"
      )
    );


  const reward =
    Math.floor(
      elapsed *
      rewardRate
    );


  game.bank +=
    reward;


  game.lastSave =
    now;

}


// ============================================
// 放置報酬リアルタイム増加
// ============================================

function startIdleTimer() {

  setInterval(
    () => {

      const rewardRate =
        (
          1 +
          game.stage *
          0.22
        ) *
        (
          1 +
          getTreeBonus(
            "idle"
          )
        );


      game.bank +=
        Math.max(
          1,
          Math.floor(
            rewardRate
          )
        );


      element(
        "offlineGold"
      ).textContent =
        Math.floor(
          game.bank
        );

    },

    1000
  );

}


// ============================================
// ゲーム開始
// ============================================

calculateOfflineReward();

saveGame();

render();

startIdleTimer()
