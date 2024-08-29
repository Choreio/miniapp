import { Badge, TabsList } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";
import { TabsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import {
  ArchiveBoxIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  MapIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { anyTaskEdited, isUserEdited } from "@/store/slices/changesStateSlice";
import { countActiveTasks } from "@/store/slices/tasksSlice";
import { selectUser } from "@/store/slices/userSlice";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const hasChangesProfile = useAppSelector(isUserEdited);
  const hasChangesTasks = useAppSelector(anyTaskEdited);

  const user = useAppSelector(selectUser);
  const activeCount = useAppSelector((state) =>
    countActiveTasks(state, user.id)
  );
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);
  const routes = [
    {
      to: "/profile",
      title: "Profile",
    },
    {
      to: "/mytasks",
      title: "My tasks",
    },
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/tasks",
      title: "Tasks",
    },
    {
      to: "/chat",
      title: "Chat",
    },
  ];
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
              {title === "Home" && <HomeIcon className="h-12 w-12 m-auto" />}
              {title === "Profile" && (
                <div>
                  <UserIcon className="h-12 w-12 m-auto" />
                  {hasChangesProfile && (
                    <Badge
                      className="absolute top-1 right-1 bg-yellow-600 animate-pulse"
                      type="number"
                    >
                      !
                    </Badge>
                  )}
                </div>
              )}
              {title === "Map" && <MapIcon className="h-12 w-12 m-auto" />}
              {title === "Chat" && (
                <ChatBubbleOvalLeftEllipsisIcon className="h-12 w-12 m-auto" />
              )}
              {title === "Tasks" && (
                <div>
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
                </div>
              )}
              {title === "My tasks" && (
                <div>
                  <ArchiveBoxIcon className="h-12 w-12 m-auto" />
                  {hasChangesTasks && (
                    <Badge
                      className="absolute top-1 right-1 bg-yellow-600 animate-pulse"
                      type="number"
                    >
                      !
                    </Badge>
                  )}
                </div>
              )}
              <span className="text-sm">{title}</span>
            </TabsItem>
          );
        })}
      </TabsList>
    </footer>
  );
}

export default Navigation;
