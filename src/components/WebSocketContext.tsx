import { createContext, useContext, useEffect, useRef, useState } from "react";

type WebSocketStatus = "disconnected" | "connecting" | "connected" | "error";

const Context = createContext<{
  ws: WebSocket | null;
  status: WebSocketStatus;
  serverAddress: string;
  setServerAddress: React.Dispatch<React.SetStateAction<string>>;
}>({
  ws: null,
  status: "disconnected",
  serverAddress: "",
  setServerAddress: () => {},
});

export function WebSocketContext({ children }: React.PropsWithChildren) {
  const socket = useRef<WebSocket | null>(null);
  const [webSocketStatus, setWebSocketStatus] =
    useState<WebSocketStatus>("connecting");
  const [serverAddress, setServerAddress] = useState("");

  useEffect(() => {
    if (serverAddress) {
      setWebSocketStatus("connecting");
      socket.current = new WebSocket(serverAddress);
      socket.current.onopen = () => setWebSocketStatus("connected");
      socket.current.onerror = () => setWebSocketStatus("error");
      socket.current.onclose = () => setWebSocketStatus("disconnected");
    }
    return () => {
      setWebSocketStatus("disconnected");
      socket.current?.close();
    };
  }, [serverAddress]);

  return (
    <Context.Provider
      value={{
        ws: socket.current,
        status: webSocketStatus,
        serverAddress,
        setServerAddress,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useWebSocketContext = () => useContext(Context);
