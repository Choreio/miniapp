import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { FC } from "react";

type MapProps = {
  latitude: number;
  longitude: number;
  radius: number;
};
export const MapContainerGoogle: FC<MapProps> = ({ latitude, longitude }) => {
  const API_KEY: string = import.meta.env.GOOGLE_MAPS_API_KEY || "";
  return (
    <APIProvider apiKey={API_KEY}>
      <div className="p-2 w-full h-[--tg-viewport-width] overflow-hidden z-0">
        <Map
          className="w-full h-[--tg-viewport-width] overflow-hidden z-0"
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </div>
    </APIProvider>
  );
};
