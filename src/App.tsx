import "./App.css";
import { Loading, WebSocketContext, useWebSocketContext } from "./components";
import { ControlMenu, ErrorMenu, StartMenu } from "./menus";

function App() {
  return (
    <>
      <WebSocketContext>
        <Menus />
        <Footer />
      </WebSocketContext>
    </>
  );
}

function Menus() {
  const { serverAddress, status } = useWebSocketContext();
  return (
    <div className="menus">
      {serverAddress ? (
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
      )}
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/codeJester27/CMPS-375-Get-a-Grip-Website"
        target="_blank"
      >
        Github Repository
      </a>
      <a
        href="https://codejester27.github.io/Get-a-Grip-Virtual-Hand/"
        target="_blank"
      >
        Virtual Hand
      </a>
    </div>
  );
}

export default App;
