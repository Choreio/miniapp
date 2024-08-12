import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FC } from "react";

import stickman from "./pngwing.png";
import { TaskState } from "@/store/slices/tasksSlice";

type MapProps = {
  latitude: number;
  longitude: number;
  radius: number;
  tasks: TaskState[];
  onBubbleClick: (taskId: string) => void;
};
export const MapContainerYandex: FC<MapProps> = ({
  latitude,
  longitude,
  //radius,
  tasks,
  onBubbleClick,
}) => {
  return (
    <YMaps>
      <div className="p-2 w-full h-[--tg-viewport-width] overflow-hidden z-0">
        <Map
          className="flex w-full h-[--tg-viewport-width] overflow-hidden z-0"
          defaultState={{
            center: [latitude, longitude],
            zoom: 12.5,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          options={{ autoFitToViewport: "always" }}
        >
          <Placemark
            id="self"
            geometry={[latitude, longitude]}
            options={{
              iconLayout: "default#image",
              iconImageClipRect: [
                [0, 0],
                [12, 24],
              ],
              iconImageHref: stickman,
              iconImageSize: [12, 24],
              iconImageOffset: [-6, -12],
            }}
          />
          {tasks.map((task) => {
            return (
              <Placemark
                onClick={() => onBubbleClick(task.id)}
                key={task.id}
                id={"taskNo" + task.id}
                geometry={task.location}
                options={{
                  iconColor: task.status === "active" ? "#00CED1" : "#B22222",
                }}
              />
            );
          })}
          {/*
          <Circle
            geometry={[[latitude, longitude], radius]}
            options={{
              fillOpacity: 0.4,
              fillColor: "#dde6d5",
              strokeColor: "#a3b899",
            }}
          />
          */}
        </Map>
      </div>
    </YMaps>
  );
};
