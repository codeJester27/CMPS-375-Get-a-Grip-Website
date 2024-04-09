import "./App.css";
import { Loading, WebSocketContext, useWebSocketContext } from "./components";
import { ControlMenu, ErrorMenu, StartMenu } from "./menus";

function App() {
  return (
    <WebSocketContext>
      <Menus />
    </WebSocketContext>
  );
}

function Menus() {
  const { serverAddress, status } = useWebSocketContext();
  return serverAddress ? (
    status === "connecting" ? (
      <Loading />
    ) : status === "error" ? (
      <ErrorMenu message="Connection Failed" />
    ) : status === "disconnected" ? (
      <ErrorMenu message="Disconnected" />
    ) : (
      <ControlMenu />
    )
  ) : (
    <StartMenu />
  );
}

export default App;
