import { Badge, TabsList } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";
import { TabsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import {
  NewspaperIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { isUserEdited } from "@/store/slices/changesStateSlice";
import { countActiveTasks } from "@/store/slices/tasksSlice";
import { selectUser } from "@/store/slices/userSlice";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const hasChangesProfile = useAppSelector(isUserEdited);

  const user = useAppSelector(selectUser);
  const activeCount = useAppSelector((state) =>
    countActiveTasks(state, user.id)
  );
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname.split("/")[1]);
  }, [location]);

  const handleNavClick = (to: string) => {
    setActiveTab(to);
    location.pathname === to
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : navigate(to);
  };
  return (
    <footer className="sticky top-0 inset-x-0 z-[1] bg-[--tg-bg-color] rounded-b-lg">
      <TabsList
        aria-label="Global"
        className="w-full h-20 flex justify-around pl-2 pr-2"
      >
        <TabsItem
          title="Profile"
          onClick={() => handleNavClick("/profile")}
          selected={activeTab === "profile"}
          className="h-full"
        >
          <UserIcon className="h-12 w-12 m-auto" />
          {hasChangesProfile && (
            <Badge
              className="absolute top-1 right-1 bg-yellow-600 animate-pulse"
              type="number"
            >
              !
            </Badge>
          )}
          <span className="text-sm">{"Profile"}</span>
        </TabsItem>
        <TabsItem
          title="Tasks"
          onClick={() => handleNavClick("/tasks")}
          selected={activeTab === "tasks"}
          className="h-full"
        >
          <BriefcaseIcon className="h-12 w-12 m-auto" />
          {activeCount > 0 && (
            <Badge
              className="absolute top-1 right-1"
              type="number"
              mode="primary"
            >
              {activeCount}
            </Badge>
          )}
          <span className="text-sm">{"Tasks"}</span>
        </TabsItem>
        <TabsItem
          title="Home"
          onClick={() => handleNavClick("/")}
          selected={activeTab === ""}
          className="h-full"
        >
          <HomeIcon className="h-12 w-12 m-auto" />
          <span className="text-sm">{"Home"}</span>
        </TabsItem>
        <TabsItem
          title="News"
          onClick={() => handleNavClick("/news")}
          selected={activeTab === "news"}
          className="h-full"
        >
          <NewspaperIcon className="h-12 w-12 m-auto" />
          <span className="text-sm">{"News"}</span>
        </TabsItem>
        <TabsItem
          title="Chat"
          onClick={() => handleNavClick("/chat")}
          selected={activeTab === "chat"}
          className="h-full"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-12 w-12 m-auto" />
          <span className="text-sm">{"Chat"}</span>
        </TabsItem>
      </TabsList>
    </footer>
  );
}

export default Navigation;
