import handImg from "/hand_by_jared_age_5.svg";

export default function LoadingIndicator() {
  return (
    <div>
      <img src={handImg} className="loading" />
      <h2>Get a Grip</h2>
    </div>
  );
}
