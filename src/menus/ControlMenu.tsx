import { HandControl, useWebSocketContext } from "../components";

export default function ControlMenu() {
  const { setServerAddress } = useWebSocketContext();

  return (
    <div>
      <HandControl />
      <button className="mt" type="button" onClick={() => setServerAddress("")}>
        Disconnect
      </button>
    </div>
  );
}
