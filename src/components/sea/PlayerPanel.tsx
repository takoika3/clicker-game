import { useGameStore } from "../store/useGameStore";

export default function PlayerPanel() {

  const player =
    useGameStore(
      (state) => state.player
    );

  const rebirth =
    useGameStore(
      (state) => state.rebirth
    );

  return (
    <div className="panel">

      <h2>プレイヤー</h2>

      <p>職業: {player.job}</p>

      <p>Lv {player.level}</p>

      <p>EXP {player.exp}/100</p>

      <p>HP {player.hp}/{player.maxHp}</p>

      <p>攻撃力 {player.attack}</p>

      <p>魔力 {player.magic}</p>

      <p>クリ率 {player.crit}%</p>

      <p>Gold {player.gold}</p>

      <p>階層 {player.floor}</p>

      <p>転生回数 {player.rebirths}</p>

      <p>スキルポイント {player.skillPoints}</p>

      <p>称号 {player.title}</p>

      <button
        onClick={() => rebirth()}
      >
        転生する(Lv50)
      </button>

    </div>
  );
}
