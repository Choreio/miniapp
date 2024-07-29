import type { ComponentType, JSX } from "react";
import React from "react";

interface Route {
  path: string;
  Component: ComponentType;
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
  { path: "/profile", Component: Profile },
  { path: "/tasks", Component: Tasks },
  { path: "/settings", Component: Settings },
  { path: "/map", Component: MapPage },
  { path: "/chat", Component: Chat },
];
