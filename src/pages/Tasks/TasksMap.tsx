import { selectLocation } from "@/store/slices/locationSlice";
import { TaskStateType } from "@/store/slices/tasksSlice";
import { FC, Suspense } from "react";
import { GeolocationRequest } from "../Map/GeolocationRequest";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

import { MapContainerYandex } from "@/pages/Map/MapContainerYandex";

export const TasksMap: FC<{
  tasks: TaskStateType[];
  radius?: number;
}> = ({ tasks, radius = 0 }) => {
  const { available, latLong, address } = useAppSelector(selectLocation);
  const navigate = useNavigate();

  if (!available) {
    return <GeolocationRequest />;
  }

  return (
    <div className="text-center">
      <div>Current address: {address?.formattedAdress}</div>
      <div className="flex-col hidden">
        <span>Geolocation is available</span>
        <span>Latitude: {latLong?.latitude}</span>
        <span>Longitude: {latLong?.longitude}</span>
      </div>
      {latLong && (
        <div className="flex flex-col gap-7">
          <Suspense
            fallback={
              <div className="w-full h-[--tg-viewport-width] bg-slate-300 rounded-full overflow-hidden"></div>
            }
          >
            <MapContainerYandex
              available={available}
              type="self"
              className="p-2 w-full h-[--tg-viewport-width] overflow-hidden z-0"
              center={{
                latitude: Number(latLong.latitude),
                longitude: Number(latLong.longitude),
              }}
              points={tasks.map((task) => {
                return {
                  taskId: task.id,
                  latitude: Number(task.location.latLong?.latitude),
                  longitude: Number(task.location.latLong?.longitude),
                  onBubbleClick: () => {
                    navigate("tasks/task/" + task.id);
                  },
                };
              })}
              radius={radius}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
};
