import handImg from "/hand_by_jared_age_5.svg";

export default function Logo({ className }: { className?: string }) {
  return <img src={handImg} className={`logo ${className}`} />;
}
