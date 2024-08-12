import { useInitData } from "@telegram-apps/sdk-react";

import {
  Modal,
  Placeholder,
  Section,
  SegmentedControl,
  Title,
} from "@telegram-apps/telegram-ui";
import React, { FC, useState } from "react";
import { SegmentedControlItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";
import { selectTasks } from "@/store/slices/tasksSlice";
import { TaskCard } from "./TaskCard";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useGeolocated } from "react-geolocated";

const MapPage = React.lazy(() =>
  import("@/pages/Map/MapPage").then(({ MapPage }) => ({ default: MapPage }))
);

const TasksList = React.lazy(() =>
  import("@/pages/Tasks/TasksList").then(({ TasksList }) => ({
    default: TasksList,
  }))
);
export const TasksTab: FC = () => {
  //Check if its tg env
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

  //Mode of task page map/list
  const [mode, setMode] = useState<"list" | "map">("list");
  const handleChangeModeClick = (mode: "list" | "map") => {
    console.log("Changing mode");
    setMode(mode);
  };
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    console.log("Modal opened");
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    console.log("Modal closed");
  };
  const [selectedTask, setSelectedTask] = useState("");
  const handleSelectTask = (taskId: string) => {
    console.log("Selected task: " + taskId);
    setSelectedTask(taskId);
    handleOpenModal();
  };

  const geolocation = useGeolocated();
  //Main data fetching
  const user = useAppSelector(selectUser);
  const tasks = useAppSelector(selectTasks);
  const availableTasks = tasks.filter(
    (task) => task.acceptedBy !== user.id && task.status === "open"
  );
  const activeTasks = tasks.filter(
    (task) => task.acceptedBy === user.id && task.status === "active"
  );

  return (
    <div className="md:container md:mx-auto">
      <Section
        className="pt-4 h-full"
        header={
          <div className="p-2 flex align-middle items-center justify-between w-full">
            <Title className="self-start">Tasks</Title>
            <SegmentedControl className="w-40 h-8 self-end ">
              <SegmentedControlItem
                className="w-4 h-8 align-middle p-1"
                onClick={() => {
                  handleChangeModeClick("list");
                }}
              >
                List
              </SegmentedControlItem>
              <SegmentedControlItem
                className="w-4 h-8 align-middle p-1"
                onClick={() => {
                  handleChangeModeClick("map");
                }}
              >
                Map
              </SegmentedControlItem>
            </SegmentedControl>
          </div>
        }
      >
        {mode === "list" ? (
          <>
            <TasksList
              title="Active tasks"
              tasks={activeTasks}
              onCardClick={handleSelectTask}
            ></TasksList>
            <TasksList
              title="Available tasks"
              tasks={availableTasks}
              onCardClick={handleSelectTask}
            ></TasksList>
          </>
        ) : (
          <>
            <MapPage
              tasks={tasks}
              position={geolocation}
              onBubbleClick={handleSelectTask}
            ></MapPage>
          </>
        )}
      </Section>
      <Modal
        open={openModal}
        onOpenChange={(open) => {
          setOpenModal(open);
        }}
        className="z-10"
        header={
          <ModalHeader
            after={
              <XMarkIcon
                className="text-[--tg-theme-plain-foreground] h-4"
                onClick={handleCloseModal}
              />
            }
          ></ModalHeader>
        }
      >
        <TaskCard id={selectedTask} closeModal={handleCloseModal} />
      </Modal>
    </div>
  );
};
