import { useEffect, useRef, useState } from "react";
import WebSocket from "isomorphic-ws";
import "./App.css";
import { LoadingIndicator } from "./components";

function App() {
  const socket = useRef<WebSocket | null>(null);
  const [webSocketStatus, setWebSocketStatus] = useState<
    "connecting" | "connected" | "error"
  >("connecting");
  const [messageToSend, setMessageToSend] = useState("");

  useEffect(() => {
    socket.current = new WebSocket(`ws://${import.meta.env.VITE_WSS_URL}`);
    socket.current.onopen = () => setWebSocketStatus("connected");
    socket.current.onerror = () => setWebSocketStatus("error");
    return () => {
      socket.current?.close();
    };
  }, []);

  return (
    <div>
      <LoadingIndicator />
    </div>
  );
}

export default App;
