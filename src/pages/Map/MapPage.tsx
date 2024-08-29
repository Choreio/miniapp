import { GeoLocationStateType } from "@/store/slices/locationSlice";
import { TaskStateType } from "@/store/slices/tasksSlice";
import { Modal } from "@telegram-apps/telegram-ui";
import React, { FC, Suspense, useState } from "react";
import { GeolocationRequest } from "./GeolocationRequest";
import { TaskCard } from "../Tasks/TaskCard";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";

const MapContainerYandex = React.lazy(() =>
  import("./MapContainerYandex").then(({ MapContainerYandex }) => ({
    default: MapContainerYandex,
  }))
);

export const MapPage: FC<{
  parent: "MyTasks" | "Tasks";
  tasks: TaskStateType[];
  position: GeoLocationStateType;
  radius?: number;
}> = ({ parent, tasks, position, radius = 0 }) => {
  const { available, latLong, address } = position;

  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskStateType>();

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
                    handleOpenModal();
                    setSelectedTask(task);
                  },
                };
              })}
              radius={radius}
            />
          </Suspense>
          <Modal
            header={<ModalHeader />}
            className="h-2/3"
            open={openModal}
            onOpenChange={(open) => setOpenModal(open)}
          >
            <TaskCard
              taskId={selectedTask?.id}
              mode={parent === "Tasks" ? "view" : "edit"}
              closeModal={handleCloseModal}
            />
          </Modal>
        </div>
      )}
    </div>
  );
};
