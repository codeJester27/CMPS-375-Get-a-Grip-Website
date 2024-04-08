import { Logo } from ".";

export default function Loading() {
  return (
    <div>
      <Logo className="spin" />
      <h4>Connecting...</h4>
    </div>
  );
}
