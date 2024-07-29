import { useIntegration } from "@telegram-apps/react-router-integration";
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  initNavigator,
  postEvent,
  useInitData,
  useLaunchParams,
  useMiniApp,
  User,
  useThemeParams,
  useViewport,
} from "@telegram-apps/sdk-react";
import { AppRoot, Placeholder, Spinner } from "@telegram-apps/telegram-ui";
import { Suspense, useEffect, useMemo } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";

import { routes } from "@/navigation/routes.tsx";
import { Header } from "@/pages/Nav/Header";
import { Navigation } from "@/pages/Nav/Navigation";
import { setUser, UserState } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";

import "leaflet/dist/leaflet.css";

export function App() {
  const lp = useLaunchParams();
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();
  const initData = useInitData();

  if (!initData) {
    return (
      <Placeholder
        header="Oops"
        description="Application was launched with missing init data"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: "block", width: "144px", height: "144px" }}
        />
      </Placeholder>
    );
  }
  const dispatch = useDispatch();
  const bindUser = (initUser: User | undefined) => {
    if (initUser) {
      const user: UserState = {
        id: initUser.id.toString(),
        firstName: initUser.firstName,
        lastName: initUser?.lastName,
        username: initUser?.username,
        languageCode: initUser?.languageCode,
        photoUrl: initUser?.photoUrl,
      };
      dispatch(setUser(user));
    }
  };
  bindUser(initData.user);

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  // Create a new application navigator and attach it to the browser history, so it could modify
  // it and listen to its changes.
  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
  const [location, reactNavigator] = useIntegration(navigator);

  // Don't forget to attach the navigator to allow it to control the BackButton state as well
  // as browser history.
  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  postEvent("web_app_setup_back_button", { is_visible: false });
  postEvent("web_app_expand");

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
      className="h-[--tg-viewport-height]"
    >
      <Router location={location} navigator={reactNavigator}>
        <Header />
        <Navigation />
        <Suspense
          fallback={
            <div className="flex align-middle justify-center">
              <Spinner size="l"></Spinner>
            </div>
          }
        >
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </AppRoot>
  );
}
