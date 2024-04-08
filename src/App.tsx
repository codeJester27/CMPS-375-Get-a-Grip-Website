import "./App.css";
import { Loading, WebSocketContext, useWebSocketContext } from "./components";
import { ErrorMenu, StartMenu } from "./menus";

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
      <ErrorMenu />
    ) : (
      status
    )
  ) : (
    <StartMenu />
  );
}

export default App;
