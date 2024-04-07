import "./App.css";
import { WebSocketContext, useWebSocketContext } from "./components";
import { StartMenu } from "./menus";

function App() {
  return (
    <WebSocketContext>
      <Menus />
    </WebSocketContext>
  );
}

function Menus() {
  const { serverAddress } = useWebSocketContext();
  return serverAddress ? null : <StartMenu />;
}

export default App;
