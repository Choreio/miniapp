import { Page404 } from "@/components/Page404";
import type { ComponentType, FC, JSX } from "react";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

interface Route {
  index?: true;
  path: string;
  Component: ComponentType;
  subRoutes?: Route[];
  title?: string;
  icon?: JSX.Element;
}

const HomePage = React.lazy(() =>
  import("@/pages/Home/HomePage").then(({ HomePage }) => ({
    default: HomePage,
  }))
);

const ProfilePage = React.lazy(() =>
  import("@/pages/Profile/ProfilePage").then(({ ProfilePage }) => ({
    default: ProfilePage,
  }))
);

const UserInfo = React.lazy(() =>
  import("@/pages/Profile/UserInfo").then(({ UserInfo }) => ({
    default: UserInfo,
  }))
);
const WalletInfo = React.lazy(() =>
  import("@/pages/Profile/WalletInfo").then(({ WalletInfo }) => ({
    default: WalletInfo,
  }))
);
const Settings = React.lazy(() =>
  import("@/pages/Profile/Settings").then(({ Settings }) => ({
    default: Settings,
  }))
);

const TasksPage = React.lazy(() =>
  import("@/pages/Tasks/TasksPage").then(({ TasksPage }) => ({
    default: TasksPage,
  }))
);
const AllTasksTab = React.lazy(() =>
  import("@/pages/Tasks/AllTasksTab").then(({ AllTasksTab }) => ({
    default: AllTasksTab,
  }))
);
const MyTasksTab = React.lazy(() =>
  import("@/pages/Tasks/MyTasksTab").then(({ MyTasksTab }) => ({
    default: MyTasksTab,
  }))
);

const TaskCard = React.lazy(() =>
  import("@/pages/Tasks/TaskCard").then(({ TaskCard }) => ({
    default: TaskCard,
  }))
);
const TaskCreate = React.lazy(() =>
  import("@/pages/Tasks/TaskCreate").then(({ TaskCreate }) => ({
    default: TaskCreate,
  }))
);

const ChatPage = React.lazy(() =>
  import("@/pages/Chat/ChatPage").then(({ ChatPage }) => ({
    default: ChatPage,
  }))
);
const NewsPage = React.lazy(() =>
  import("@/pages/News/NewsPage").then(({ NewsPage }) => ({
    default: NewsPage,
  }))
);

export const CustomRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route Component={HomePage} path=""></Route>
        <Route Component={ProfilePage} path="profile">
          <Route Component={UserInfo} path="info"></Route>
          <Route Component={WalletInfo} path="wallet"></Route>
          <Route Component={Settings} path="settings"></Route>
          <Route element={<Navigate to="/profile/info" />} index />
        </Route>
        <Route Component={TasksPage} path="tasks">
          <Route Component={TaskCard} path="task/:taskId"></Route>
          <Route Component={AllTasksTab} path="all/:mode"></Route>
          <Route Component={MyTasksTab} path="my/:mode"></Route>
          <Route Component={TaskCreate} path="create"></Route>
          <Route element={<Navigate to="/tasks/all/list" />} index />
        </Route>
        <Route Component={ChatPage} path="chat"></Route>
        <Route Component={NewsPage} path="news"></Route>
        <Route path="*" Component={Page404} />
      </Routes>
    </>
  );
};
