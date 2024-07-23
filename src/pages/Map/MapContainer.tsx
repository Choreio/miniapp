import { Circle, Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FC } from "react";

import stickman from "./pngwing.png";

type MapProps = {
  latitude: number;
  longitude: number;
  radius: number;
};
export const MapContainer: FC<MapProps> = ({ latitude, longitude, radius }) => {
  return (
    <YMaps>
      <div className="p-2">
        <Map
          className="w-full h-96 rounded-full overflow-hidden"
          defaultState={{
            center: [latitude, longitude],
            zoom: 12.5,
          }}
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
          <Circle
            geometry={[[latitude, longitude], radius]}
            options={{
              fillOpacity: 0.4,
              fillColor: "#dde6d5",
              strokeColor: "#a3b899",
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
};
