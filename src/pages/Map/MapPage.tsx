import { useInitData } from "@telegram-apps/sdk-react";
import { Placeholder } from "@telegram-apps/telegram-ui";
import React, { Suspense, useState } from "react";
import { useGeolocated } from "react-geolocated";

const MapContainerYandex = React.lazy(() =>
  import("./MapContainerYandex").then(({ MapContainerYandex }) => ({
    default: MapContainerYandex,
  }))
);

const MapContainerLeafets = React.lazy(() =>
  import("./MapContainerLeafets").then(({ MapContainerLeafets }) => ({
    default: MapContainerLeafets,
  }))
);

const MapContainerGoogle = React.lazy(() =>
  import("./MapContainerGoogle").then(({ MapContainerGoogle }) => ({
    default: MapContainerGoogle,
  }))
);

export function MapPage() {
  const initData = useInitData();

  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
    positionError,
    getPosition,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: Infinity,
    watchPosition: true,
    watchLocationPermissionChange: true,
  });
  const radiusSettings = [500, 1000, 2000, 3000, 5000];

  const [radius, setRadius] = useState(500);

  const handleRadiusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setRadius(Number(e.target.value));
  };
  function askPermission() {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state == "granted") {
          console.log(result.state);
          getPosition();
        } else if (result.state == "prompt") {
          console.log(result.state);
          getPosition();
        } else if (result.state == "denied") {
          console.log(result.state);
        }
        result.onchange = function () {
          console.log(result.state);
        };
      });
  }
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
    <div className="text-center">
      <div className="text-4xl pt-4">Tasks around you</div>
      <div className="text-slate-400">
        You are looking for tasks in{" "}
        <select onChange={handleRadiusChange}>
          {radiusSettings.map((rad) => {
            return (
              <option key={rad} value={rad}>
                {rad}
              </option>
            );
          })}
        </select>{" "}
        meters from you
      </div>
      {!isGeolocationAvailable ? (
        <div>Your browser doesnt support geolocation</div>
      ) : !isGeolocationEnabled ? (
        <div className="flex flex-col gap-2 items-center">
          <span>Geolocation not enabled</span>
          <button
            className="w-32 bg-slate-600 rounded-lg p-1 text-center select-none cursor-pointer hover:bg-slate-700"
            onClick={askPermission}
          >
            Grant permission
          </button>
        </div>
      ) : positionError ? (
        <div>positionError</div>
      ) : (
        <div className="flex-col hidden">
          <span>Geolocation is available</span>
          <span>Accuracy: {coords?.accuracy}</span>
          <span>Altitude: {coords?.altitude}</span>
          <span>Altitude accuracy: {coords?.altitudeAccuracy}</span>
          <span>Heading: {coords?.heading}</span>
          <span>Latitude: {coords?.latitude}</span>
          <span>Longitude: {coords?.longitude}</span>
          <span>Speed: {coords?.speed}</span>
        </div>
      )}
      {coords && (
        <div className="flex flex-col gap-7">
          <Suspense
            fallback={
              <div className="w-full h-[--tg-viewport-width] bg-slate-300 rounded-full overflow-hidden"></div>
            }
          >
            <MapContainerYandex
              latitude={coords.latitude}
              longitude={coords.longitude}
              radius={radius}
            />
          </Suspense>
          <Suspense
            fallback={
              <div className="w-full h-[--tg-viewport-width] bg-slate-300 rounded-full overflow-hidden"></div>
            }
          >
            <MapContainerGoogle
              latitude={coords.latitude}
              longitude={coords.longitude}
              radius={radius}
            />
          </Suspense>
          <Suspense
            fallback={
              <div className="w-full h-[--tg-viewport-width] bg-slate-300 rounded-full overflow-hidden"></div>
            }
          >
            <MapContainerLeafets
              latitude={coords.latitude}
              longitude={coords.longitude}
              radius={radius}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
}
