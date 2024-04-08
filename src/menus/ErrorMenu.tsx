import { LogoWarn, useWebSocketContext } from "../components";

export default function ErrorMenu() {
  const { setServerAddress } = useWebSocketContext();

  return (
    <div>
      <LogoWarn />
      <h4>Connection Error</h4>
      <button className="mt" type="button" onClick={() => setServerAddress("")}>
        Go Back
      </button>
    </div>
  );
}
