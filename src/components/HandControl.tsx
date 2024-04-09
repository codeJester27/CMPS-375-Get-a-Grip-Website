import { useWebSocketContext } from ".";
import handOutlineImg from "/hand_outline_by_jared_age_5.svg";

export default function HandControl() {
  const { ws } = useWebSocketContext();

  return (
    <div className="hand-control">
      <img src={handOutlineImg} className="hand-control-outline" />
      <input
        type="range"
        style={beam(4, 11, 9, 20)}
        defaultValue={0}
        min={0}
        max={180}
        step="any"
        id="pinky"
        onChange={(e) => handleChange("pinky", Number(e.target.value))}
      />
      <input
        type="range"
        style={beam(11.6, 4, 14, 16)}
        defaultValue={0}
        min={0}
        max={180}
        step="any"
        id="ring"
        onChange={(e) => handleChange("ring", Number(e.target.value))}
      />
      <input
        type="range"
        style={beam(17.5, 0, 18, 15)}
        defaultValue={0}
        min={0}
        max={180}
        step="any"
        id="middle"
        onChange={(e) => handleChange("middle", Number(e.target.value))}
      />
      <input
        type="range"
        style={beam(25, 2, 23, 15.5)}
        defaultValue={0}
        min={0}
        max={180}
        step="any"
        id="index"
        onChange={(e) => handleChange("index", Number(e.target.value))}
      />
      <input
        type="range"
        style={beam(35.25, 19, 28.5, 25.75)}
        defaultValue={0}
        min={0}
        max={180}
        step="any"
        id="thumb"
        onChange={(e) => handleChange("thumb", Number(e.target.value))}
      />
    </div>
  );

  function handleChange(finger: string, angle: number) {
    const message = JSON.stringify({ finger, angle }, undefined, 2);

    ws?.send(message);
  }
}

function beam(x1: number, y1: number, x2: number, y2: number) {
  const width = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  const angle = Math.atan2(y2 - y1, x2 - x1);

  return {
    width: `${width}em`,
    transform: `translate(${x1}em, ${y1}em) rotate(${angle}rad)`,
    transformOrigin: "center left",
  };
}
