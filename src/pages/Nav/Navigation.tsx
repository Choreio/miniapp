import { TabsList } from "@telegram-apps/telegram-ui";
import { useState } from "react";
import { TabsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import {
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  MapIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(location.pathname);
  const routes = [
    {
      to: "profile",
      title: "Profile",
    },
    {
      to: "map",
      title: "Map",
    },
    {
      to: "/",
      title: "Home",
    },
    {
      to: "tasks",
      title: "Tasks",
    },
    {
      to: "chat",
      title: "Chat",
    },
  ];
  const handleNavClick = (to: string) => {
    setActiveTab(to);
    location.pathname.split("/")[1] === to
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : navigate(to);
  };
  return (
    <footer className="sticky top-0 inset-x-0 z-10 bg-[--tg-bg-color] rounded-b-lg">
      <TabsList
        aria-label="Global"
        className="w-full h-20 flex justify-around pl-2 pr-2"
      >
        {routes.map(({ to, title }) => {
          return (
            <TabsItem
              key={title}
              title={title}
              selected={activeTab === to}
              onClick={() => {
                handleNavClick(to);
              }}
              className="flex h-full w-1/5 items-center justify-center"
            >
              {title === "Home" && <HomeIcon className="h-12 w-12" />}
              {title === "Profile" && <UserIcon className="h-12 w-12" />}
              {title === "Map" && <MapIcon className="h-12 w-12" />}
              {title === "Chat" && (
                <ChatBubbleOvalLeftEllipsisIcon className="h-12 w-12" />
              )}
              {title === "Tasks" && <BriefcaseIcon className="h-12 w-12" />}
              <div>{title}</div>
            </TabsItem>
          );
        })}
      </TabsList>
    </footer>
  );
}

export default Navigation;
