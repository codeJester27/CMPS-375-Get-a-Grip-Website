import { LogoWarn, useWebSocketContext } from "../components";

export default function ErrorMenu({ message = "Error" }: { message?: string }) {
  const { setServerAddress } = useWebSocketContext();

  return (
    <div>
      <LogoWarn />
      <h4>{message}</h4>
      <button className="mt" type="button" onClick={() => setServerAddress("")}>
        Go Back
      </button>
    </div>
  );
}
