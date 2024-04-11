import { useEffect, useRef, useState } from "react";
import { useWebSocketContext } from ".";
import handOutlineImg from "/hand_outline_by_jared_age_5.svg";

const SEND_COOLDOWN_MS = 200;

export default function HandControl() {
  return (
    <div className="hand-control">
      <img src={handOutlineImg} className="hand-control-outline" />
      <FingerSlider finger="pinky" style={beam(4, 11, 9, 20)} />
      <FingerSlider finger="ring" style={beam(11.6, 4, 14, 16)} />
      <FingerSlider finger="middle" style={beam(17.5, 0, 18, 15)} />
      <FingerSlider finger="index" style={beam(25, 2, 23, 15.5)} />
      <FingerSlider finger="thumb" style={beam(35.25, 19, 28.5, 25.75)} />
    </div>
  );
}

function FingerSlider({ finger, style }: { finger: string; style: any }) {
  const { ws } = useWebSocketContext();
  const [angle, setAngle] = useState(0);

  const canSendAfter = useRef(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (Date.now() >= canSendAfter.current) {
      send();
    } else {
      timer = setTimeout(send, canSendAfter.current - Date.now());
    }

    function send() {
      const message = JSON.stringify({ finger, angle }, undefined, 2);
      ws?.send(message);
      canSendAfter.current = Date.now() + SEND_COOLDOWN_MS;
    }

    return () => {
      clearTimeout(timer);
    };
  }, [ws, angle]);

  return (
    <input
      type="range"
      style={style}
      value={angle}
      min={0}
      max={180}
      step="any"
      id={finger}
      onChange={(e) => setAngle(Number(e.target.value))}
    />
  );
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
