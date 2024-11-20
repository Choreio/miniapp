//import { useIntegration } from "@telegram-apps/react-router-integration";
import {
  createPostEvent,
  useLaunchParams,
  User,
  initData,
  miniApp,
} from "@telegram-apps/sdk-react";
import { AppRoot, Placeholder, Spinner } from "@telegram-apps/telegram-ui";
import { Suspense, useCallback, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { CustomRoutes } from "@/navigation/routes.tsx";
import { Header } from "@/pages/Nav/Header";
import { Navigation } from "@/pages/Nav/Navigation";
import { setUser, UserState } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";

import "leaflet/dist/leaflet.css";

import "yet-another-react-lightbox/styles.css";

import { setLP, LPState, selectLP } from "@/store/slices/launchParametersSlice";
import { useAppSelector } from "@/store/hooks";
import { useGeolocated } from "react-geolocated";
import {
  GeoLocationStateType,
  setGeolocation,
} from "@/store/slices/locationSlice";
import { fetchGeocoder } from "../methods/yandexApis";

export function App() {
  const lp = useLaunchParams();
  const dispatch = useDispatch();

  const bindUser = (initUser: User | undefined) => {
    if (initUser) {
      const user: UserState = {
        id: initUser.id.toString(),
        tg_id: initUser.id.toString(),
        username: initUser?.username?.trim(),
        firstName: initUser.firstName.trim(),
        lastName: initUser?.lastName?.trim(),
        languageCode: initUser?.languageCode,
        photoUrl: initUser?.photoUrl,
        role: "user",
      };
      dispatch(setUser(user));
    }
  };

  const bindLP = useCallback(
    (initLP: LPState | undefined) => {
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
    },
    [dispatch]
  );

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
        maximumAge: 15000,
        timeout: Infinity,
      },
      watchPosition: false,
      userDecisionTimeout: undefined,
      suppressLocationOnMount: false,
      isOptimisticGeolocationEnabled: true,
      watchLocationPermissionChange: true,
    });
  const bindGeolocation = useCallback(
    (initGeolocation: GeoLocationStateType | undefined) => {
      if (initGeolocation) {
        dispatch(
          setGeolocation({
            available: true,
            latLong: initGeolocation?.latLong,
            address: initGeolocation?.address,
          })
        );
      }
    },
    [dispatch]
  );

  useEffect(() => {
    return initData && bindUser(initData.user());
  });
  useEffect(() => {
    return bindLP(lp);
  }, [lp, bindLP]);

  useEffect(() => {
    console.log(
      "Geolocation enabled: " + (isGeolocationEnabled ? "TRUE" : "FALSE")
    );
    console.log(
      "Geolocation available: " + (isGeolocationAvailable ? "TRUE" : "FALSE")
    );
    console.log(
      "Current geolocation: " + coords?.longitude + ", " + coords?.latitude
    );
    if (isGeolocationAvailable && isGeolocationEnabled && coords)
      fetchGeocoder(
        initData?.user()?.languageCode || "en",
        coords.longitude + ", " + coords.latitude
      ).then((address) => {
        console.log(address);
        return bindGeolocation(address[0]);
      });
  }, [coords, isGeolocationAvailable, isGeolocationEnabled, bindGeolocation]);

  // Create a new application navigator and attach it to the browser history, so it could modify
  // it and listen to its changes.
  /*
  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);
  */

  const postEvent = createPostEvent("7.7");
  postEvent("web_app_setup_swipe_behavior", { allow_vertical_swipe: false });
  postEvent("web_app_setup_back_button", { is_visible: false });
  postEvent("web_app_expand");

  const launchParams = useAppSelector(selectLP);

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
  return (
    <AppRoot
      id="APPROOT"
      appearance={miniApp.isDark() ? "dark" : "light"}
      platform={
        ["macos", "ios"].includes(launchParams.platform) ? "ios" : "base"
      }
    >
      <BrowserRouter>
        <Header />
        <Navigation />
        <Suspense
          fallback={
            <div className="h-full flex align-middle justify-center">
              <Spinner size="l"></Spinner>
            </div>
          }
        >
          <CustomRoutes />
        </Suspense>
      </BrowserRouter>
    </AppRoot>
  );
}
