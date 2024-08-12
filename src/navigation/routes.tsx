import type { ComponentType, JSX } from "react";
import React from "react";

interface Route {
  path: string;
  Component: ComponentType;
  childrens?: Route[];
  title?: string;
  icon?: JSX.Element;
}

const Home = React.lazy(() =>
  import("@/pages/Home/Home").then(({ Home }) => ({ default: Home }))
);
const Profile = React.lazy(() =>
  import("@/pages/Profile/Profile").then(({ Profile }) => ({
    default: Profile,
  }))
);
const TasksTab = React.lazy(() =>
  import("@/pages/Tasks/TasksTab").then(({ TasksTab }) => ({
    default: TasksTab,
  }))
);

const Settings = React.lazy(() =>
  import("@/pages/Settings/Settings").then(({ Settings }) => ({
    default: Settings,
  }))
);
const Chat = React.lazy(() =>
  import("@/pages/Chat/Chat").then(({ Chat }) => ({ default: Chat }))
);

export const routes: Route[] = [
  { path: "/", Component: Home, title: "Home" },
  { path: "profile", Component: Profile, title: "Profile" },
  {
    path: "tasks",
    Component: TasksTab,
    title: "Tasks",
  },
  { path: "settings", Component: Settings, title: "Settings" },
  { path: "chat", Component: Chat, title: "Chat" },
];
