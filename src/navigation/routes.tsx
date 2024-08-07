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
const Tasks = React.lazy(() =>
  import("@/pages/Tasks/Tasks").then(({ Tasks }) => ({ default: Tasks }))
);
const ActiveTasks = React.lazy(() =>
  import("@/pages/Tasks/ActiveTasks").then(({ ActiveTasks }) => ({
    default: ActiveTasks,
  }))
);
const AvailableTasks = React.lazy(() =>
  import("@/pages/Tasks/AvailableTasks").then(({ AvailableTasks }) => ({
    default: AvailableTasks,
  }))
);
const CreatedTasks = React.lazy(() =>
  import("@/pages/Tasks/CreatedTasks").then(({ CreatedTasks }) => ({
    default: CreatedTasks,
  }))
);

const Settings = React.lazy(() =>
  import("@/pages/Settings/Settings").then(({ Settings }) => ({
    default: Settings,
  }))
);
const MapPage = React.lazy(() =>
  import("@/pages/Map/MapPage").then(({ MapPage }) => ({ default: MapPage }))
);
const Chat = React.lazy(() =>
  import("@/pages/Chat/Chat").then(({ Chat }) => ({ default: Chat }))
);

export const routes: Route[] = [
  { path: "/", Component: Home, title: "Home" },
  { path: "profile", Component: Profile, title: "Profile" },
  {
    path: "tasks",
    Component: Tasks,
    title: "Tasks",
    childrens: [
      {
        path: "active",
        Component: ActiveTasks,
        title: "Active tasks",
      },
      {
        path: "available",
        Component: AvailableTasks,
        title: "Available tasks",
      },
      {
        path: "created",
        Component: CreatedTasks,
        title: "Created tasks",
      },
    ],
  },
  { path: "settings", Component: Settings, title: "Settings" },
  { path: "map", Component: MapPage, title: "Map" },
  { path: "chat", Component: Chat, title: "Chat" },
];
