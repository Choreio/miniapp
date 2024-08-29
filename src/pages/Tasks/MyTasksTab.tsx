import {
  Badge,
  Cell,
  Section,
  SegmentedControl,
  Title,
} from "@telegram-apps/telegram-ui";
import React, { FC, useEffect, useMemo, useState } from "react";
import { SegmentedControlItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";
import { selectTasks } from "@/store/slices/tasksSlice";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { selectLocation } from "@/store/slices/locationSlice";
import { GeolocationRequest } from "../Map/GeolocationRequest";
import { isTaskCreated } from "@/store/slices/changesStateSlice";
import { PseudoTGModal } from "./PseudoTGModal";
import { TaskCard } from "./TaskCard";
const MapPage = React.lazy(() =>
  import("@/pages/Map/MapPage").then(({ MapPage }) => ({ default: MapPage }))
);

const TasksList = React.lazy(() =>
  import("@/pages/Tasks/TasksList").then(({ TasksList }) => ({
    default: TasksList,
  }))
);
export const MyTasksTab: FC = () => {
  //Mode of task page map/list
  const [mode, setMode] = useState<"list" | "map">("list");
  const handleChangeModeClick = (mode: "list" | "map") => {
    console.log("Changing mode");
    setMode(mode);
  };

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [hidingModal, setHidingModal] = useState(false);
  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
    console.log("Modal opened");
  };
  const handleCloseCreateModal = () => {
    setHidingModal(true);
  };

  //Main data fetching
  const user = useAppSelector(selectUser);
  const tasks = useAppSelector(selectTasks);
  const createdTask = useAppSelector(isTaskCreated);

  const activeTasks = useMemo(
    () =>
      tasks.filter(
        (task) => task.customer === user.id && task.status !== "closed"
      ),
    [tasks, user]
  );
  const finishedTasks = useMemo(
    () =>
      tasks.filter(
        (task) => task.customer === user.id && task.status === "closed"
      ),
    [tasks, user]
  );

  const [forceReopenAccordeon, setForceReopenAccordeon] = useState(true);

  useEffect(() => {
    console.log("Force redo accordeon");
    setForceReopenAccordeon(false);
    setTimeout(() => {
      setForceReopenAccordeon(true);
    }, 50);
  }, [tasks]);

  //If geolocation provided
  const geolocation = useAppSelector(selectLocation);
  if (!geolocation.available) {
    return <GeolocationRequest />;
  }
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
            <Cell
              disabled={openCreateModal}
              before={
                <div>
                  {createdTask && (
                    <Badge
                      className="absolute z-50 top-1 left-1 bg-yellow-600"
                      type="number"
                    >
                      !
                    </Badge>
                  )}
                  <PlusCircleIcon className="h-8 w-8"></PlusCircleIcon>
                </div>
              }
              onClick={() => {
                if (!openCreateModal) handleOpenCreateModal();
              }}
            >
              Create a new task
            </Cell>
            <TasksList
              title="Active tasks"
              tasks={activeTasks}
              mode="edit"
              open={forceReopenAccordeon}
            ></TasksList>
            <TasksList
              title="Finished tasks"
              tasks={finishedTasks}
              mode="view"
            ></TasksList>
          </>
        ) : (
          <>
            <MapPage
              parent="MyTasks"
              tasks={activeTasks}
              position={geolocation}
            ></MapPage>
          </>
        )}
      </Section>
      {
        //Create
      }
      {openCreateModal && (
        <PseudoTGModal
          openModal={openCreateModal}
          setOpenModal={setOpenCreateModal}
          closeModal={handleCloseCreateModal}
          hidingModal={hidingModal}
          setHidingModal={setHidingModal}
        >
          <TaskCard mode={"create"} closeModal={handleCloseCreateModal} />
        </PseudoTGModal>
      )}
    </div>
  );
};
