import type { ComponentType, JSX } from "react";

import { Home } from "@/pages/Home/Home";
import { Profile } from "@/pages/Profile/Profile";
import { Tasks } from "@/pages/Tasks/Tasks";
import { Settings } from "@/pages/Settings/Settings";
interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: Home },
  { path: "/profile", Component: Profile },
  { path: "/tasks", Component: Tasks },
  { path: "/settings", Component: Settings },
];
