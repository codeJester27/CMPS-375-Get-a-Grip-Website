import { useState } from "react";
import { Logo, useWebSocketContext } from "../components";

export default function StartMenu() {
  const [inputAddress, setInputAddress] = useState(
    import.meta.env.VITE_WSS_URL
  );
  const { setServerAddress } = useWebSocketContext();

  return (
    <div className="menu-container">
      <Logo />
      <div className="divider" />
      <input
        value={inputAddress}
        onChange={(e) => setInputAddress(e.target.value)}
      />
      <button
        className="mt"
        type="button"
        onClick={() => setServerAddress(inputAddress)}
      >
        Connect
      </button>
    </div>
  );
}
