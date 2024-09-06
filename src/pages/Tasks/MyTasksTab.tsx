import { Section, SegmentedControl, Title } from "@telegram-apps/telegram-ui";
import React, { FC, useEffect, useMemo, useState } from "react";
import { SegmentedControlItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";
import { selectTasks } from "@/store/slices/tasksSlice";
import { selectLocation } from "@/store/slices/locationSlice";
import { GeolocationRequest } from "../Map/GeolocationRequest";
import { useNavigate, useParams } from "react-router-dom";

const TasksMap = React.lazy(() =>
  import("@/pages/Tasks/TasksMap").then(({ TasksMap }) => ({
    default: TasksMap,
  }))
);

const TasksAccordeon = React.lazy(() =>
  import("@/pages/Tasks/TasksAccordeon").then(({ TasksAccordeon }) => ({
    default: TasksAccordeon,
  }))
);
export const MyTasksTab: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  //Mode of task page map/list
  const [mode, setMode] = useState<string>(params["mode"] || "list");

  const handleChangeModeClick = (mode: "list" | "map") => {
    console.log("Changing mode");
    setMode(mode);
  };

  useEffect(() => {
    navigate("tasks/my/" + mode);
  }, [navigate, mode]);

  //Main data fetching
  const user = useAppSelector(selectUser);
  const tasks = useAppSelector(selectTasks);

  const activeTasks = useMemo(
    () =>
      tasks.filter(
        (task) => task.customer?.id === user.id && task.status !== "closed"
      ),
    [tasks, user]
  );
  const finishedTasks = useMemo(
    () =>
      tasks.filter(
        (task) => task.customer?.id === user.id && task.status === "closed"
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
      <div className="p-2 flex align-middle items-center justify-between w-full">
        <Title>My tasks</Title>
        <SegmentedControl className="w-40 h-10 self-end z-[0]">
          <SegmentedControlItem
            className="w-4 h-8 align-middle p-1"
            selected={mode === "list"}
            onClick={() => {
              handleChangeModeClick("list");
            }}
          >
            List
          </SegmentedControlItem>
          <SegmentedControlItem
            selected={mode === "map"}
            className="w-4 h-8 align-middle p-1"
            onClick={() => {
              handleChangeModeClick("map");
            }}
          >
            Map
          </SegmentedControlItem>
        </SegmentedControl>
      </div>
      <Section className="h-full">
        {mode === "list" ? (
          <>
            <TasksAccordeon
              title="Active tasks"
              tasks={activeTasks}
              mode="edit"
              open={forceReopenAccordeon}
            ></TasksAccordeon>
            <TasksAccordeon
              title="Finished tasks"
              tasks={finishedTasks}
              mode="view"
            ></TasksAccordeon>
          </>
        ) : (
          <>
            <TasksMap tasks={activeTasks}></TasksMap>
          </>
        )}
      </Section>
    </div>
  );
};
