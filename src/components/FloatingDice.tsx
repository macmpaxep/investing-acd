import type { CSSProperties } from "react";

// Позиции в процентах от блока; size — ширина куба в px (на мобильном уменьшается)
const DICE = [
  { t: "NVDA", left: "3%", top: "4%", size: 128, rot: -3, dur: 6.4, delay: 0 },
  { t: "AMZN", left: "44%", top: "-4%", size: 112, rot: 3, dur: 7.2, delay: -2 },
  { t: "HOOD", left: "76%", top: "20%", size: 120, rot: -2, dur: 6.8, delay: -4 },
  { t: "RGTI", left: "6%", top: "56%", size: 108, rot: 4, dur: 7.6, delay: -1 },
  { t: "IONQ", left: "38%", top: "46%", size: 134, rot: -3, dur: 6.2, delay: -3 },
  { t: "AMD", left: "74%", top: "64%", size: 104, rot: 2, dur: 7, delay: -5 },
];

export default function FloatingDice() {
  return (
    <div className="dice-scene" aria-hidden>
      {DICE.map((d) => (
        <div
          key={d.t}
          className="fd"
          style={
            {
              left: d.left,
              top: d.top,
              "--s": `${d.size}px`,
              "--r": `${d.rot}deg`,
              "--dur": `${d.dur}s`,
              "--delay": `${d.delay}s`,
            } as CSSProperties
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/dice/${d.t}.png`} alt="" />
        </div>
      ))}
    </div>
  );
}
