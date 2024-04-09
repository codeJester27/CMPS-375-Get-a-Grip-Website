import { useState } from "react";
import { Logo, useWebSocketContext } from "../components";

export default function StartMenu() {
  const [inputAddress, setInputAddress] = useState(
    import.meta.env.VITE_WSS_URL
  );
  const { setServerAddress } = useWebSocketContext();

  return (
    <div className="menu-container">
      <Logo className="bars" />
      <h2>Get a Grip</h2>
      <div className="divider" />
      <input
        value={inputAddress}
        onChange={(e) => setInputAddress(e.target.value)}
        type="text"
        placeholder="Server Address"
      />
      <button
        className="mt"
        type="submit"
        onClick={() => setServerAddress(inputAddress)}
      >
        Connect
      </button>
    </div>
  );
}
