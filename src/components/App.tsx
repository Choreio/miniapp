import { useIntegration } from "@telegram-apps/react-router-integration";
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  createPostEvent,
  initNavigator,
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
import { setLP, LPState, selectLP } from "@/store/slices/launchParametersSlice";
import { useAppSelector } from "@/store/hooks";

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

  const bindLP = (initLP: LPState | undefined) => {
    if (initLP) {
      const lp: LPState = {
        botInline: initLP.botInline,
        platform: initLP.platform,
        showSettings: initLP.showSettings,
        startParam: initLP.startParam,
        version: initLP.version,
      };
      dispatch(setLP(lp));
    }
  };

  useEffect(() => {
    return initData && bindUser(initData.user);
  }, []);
  useEffect(() => {
    return bindLP(lp);
  }, [lp]);

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

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  const postEvent = createPostEvent("7.7");
  postEvent("web_app_setup_swipe_behavior", { allow_vertical_swipe: false });
  postEvent("web_app_setup_back_button", { is_visible: false });
  postEvent("web_app_expand");

  const launchParams = useAppSelector(selectLP);
  return (
    <AppRoot
      id="APPROOT"
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={
        ["macos", "ios"].includes(launchParams.platform) ? "ios" : "base"
      }
      style={{
        maxHeight: viewport?.stableHeight,
        minHeight: viewport?.stableHeight,
      }}
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
              <Route key={route.path} {...route}>
                {route.childrens &&
                  route.childrens.map((child) => {
                    return <Route key={child.path} {...child} />;
                  })}
              </Route>
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </AppRoot>
  );
}
