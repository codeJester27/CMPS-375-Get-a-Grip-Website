import handWarnImg from "/hand_warn_by_jared_age_5.svg";

export default function LogoWarn({ className }: { className?: string }) {
  return <img src={handWarnImg} className={`logo ${className}`} />;
}
