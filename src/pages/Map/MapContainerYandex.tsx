import { Map, Placemark, YMaps, Circle } from "@pbe/react-yandex-maps";
import { FC } from "react";

import stickman from "./pngwing.png";
import { Skeleton } from "@telegram-apps/telegram-ui";

type MapProps = {
  available: boolean;
  center: {
    latitude: number;
    longitude: number;
  };
  type: "self" | "target";
  points?: {
    taskId: string;
    latitude: number;
    longitude: number;
    onBubbleClick: () => void;
  }[];
  radius?: number;
};
export const MapContainerYandex: FC<
  MapProps & React.HTMLAttributes<HTMLDivElement>
> = ({ available, className, type, center, points, radius = 0 }) => {
  return (
    <YMaps
      query={{
        lang: "en_US",
      }}
    >
      {!available ? (
        <Skeleton visible className="w-96 h-48"></Skeleton>
      ) : (
        <Map
          className={className} //"flex w-full h-[--tg-viewport-width] overflow-hidden z-0"
          state={{
            center: [center.latitude, center.longitude],
            zoom: 12.5,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          options={{ autoFitToViewport: "always" }}
        >
          <Placemark
            id="self"
            geometry={[center.latitude, center.longitude]}
            options={
              type === "self"
                ? {
                    iconLayout: "default#image",
                    iconImageClipRect: [
                      [0, 0],
                      [12, 24],
                    ],
                    iconImageHref: stickman,
                    iconImageSize: [12, 24],
                    iconImageOffset: [-6, -12],
                  }
                : { iconColor: "red" }
            }
          />
          {points &&
            points?.length > 0 &&
            points.map((point) => {
              return (
                <Placemark
                  key={point.taskId}
                  id={"taskNo" + point.taskId}
                  geometry={[point.latitude, point.longitude]}
                  onClick={point.onBubbleClick}
                  //options={{
                  //  iconColor: task.status === "active" ? "#00CED1" : "#B22222",
                  //}}
                />
              );
            })}
          {radius < Infinity && (
            <Circle
              geometry={[[center.latitude, center.longitude], radius]}
              options={{
                fillOpacity: 0.2,
                fillColor: "#dde6d5",
                strokeColor: "#a3b899",
              }}
            />
          )}
        </Map>
      )}
    </YMaps>
  );
};
