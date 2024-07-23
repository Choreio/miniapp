import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type NavButtonProps = {
  to: string;
  icon: React.ReactNode;
  title: string;
};
export const NavButton: FC<NavButtonProps> = ({ to, icon, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const className =
    "h-full w-full inline-flex flex-col items-center justify-center p-2";
  return (
    <button
      onClick={() => {
        navigate("/" + to);
      }}
      className={className.concat(
        location.pathname === "/" + to
          ? " text-[--tg-theme-accent-text-color]"
          : ""
      )}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};
