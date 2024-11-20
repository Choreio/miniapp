import {
  FolderIcon,
  FolderOpenIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { Tabbar } from "@telegram-apps/telegram-ui";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const TasksPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="pb-24">
        <Outlet />
      </div>
      <Tabbar style={{ height: "88px", paddingBottom: "24px" }}>
        <TabbarItem
          text="Tasks"
          selected={location.pathname === "/tasks/all/list"}
          onClick={() => navigate("/tasks/all/list")}
        >
          <FolderIcon className="h-7 w-7"></FolderIcon>
        </TabbarItem>
        <TabbarItem
          text="New task"
          selected={location.pathname === "/tasks/create"}
          onClick={() => navigate("/tasks/create")}
        >
          <PlusCircleIcon className="h-8 w-8" />
        </TabbarItem>
        <TabbarItem
          text="My tasks"
          selected={location.pathname === "/tasks/my/list"}
          onClick={() => navigate("/tasks/my/list")}
        >
          <FolderOpenIcon className="h-7 w-7"></FolderOpenIcon>
        </TabbarItem>
      </Tabbar>
    </div>
  );
};
