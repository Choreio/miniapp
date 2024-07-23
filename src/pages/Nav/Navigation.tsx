import {
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  HomeIcon,
  MapIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Route } from "react-router-dom";
import { NavButton } from "./NavButton";

type Route = {
  to: string;
  icon: React.ReactNode;
  title: string;
};

export function Navigation() {
  const routes: Route[] = [
    {
      to: "profile",
      icon: <UserIcon />,
      title: "Profile",
    },
    {
      to: "map",
      icon: <MapIcon />,
      title: "Map",
    },
    {
      to: "",
      icon: <HomeIcon />,
      title: "Home",
    },
    {
      to: "tasks",
      icon: <BriefcaseIcon />,
      title: "Tasks",
    },
    {
      to: "chat",
      icon: <ChatBubbleBottomCenterTextIcon />,
      title: "Chat",
    },
  ];
  return (
    <footer className="sticky top-0 inset-x-0 z-49 bg-[--tg-bg-color] rounded-b-lg">
      <nav
        aria-label="Global"
        className="flex w-full justify-between h-16 gap-px pr-2 pl-2"
      >
        {routes.map(({ to, icon, title }) => {
          return <NavButton key={title} to={to} icon={icon} title={title} />;
        })}
      </nav>
    </footer>
  );
}

export default Navigation;
