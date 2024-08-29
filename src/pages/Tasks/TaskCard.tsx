import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useAppSelector } from "@/store/hooks";
import { TaskStateType } from "@/store/slices/tasksSlice";
import { Cell, Button, Title, Avatar, Badge } from "@telegram-apps/telegram-ui";

import { FC, useEffect, useState } from "react";
import { isTaskEdited } from "@/store/slices/changesStateSlice";
import { selectLocation } from "@/store/slices/locationSlice";
import { calcDistance } from "@/methods/calcDistance";
import { TaskView } from "./TaskView";
import { TaskEdit } from "./TaskEdit";
import { TaskCreate } from "./TaskCreate";
import { PseudoTGModal } from "./PseudoTGModal";

export const TaskMiniCard: FC<{
  task: TaskStateType;
  mode: "view" | "edit";
}> = ({ task, mode }) => {
  //Modal handlers
  const geolocation = useAppSelector(selectLocation);

  const edited = useAppSelector((store) => isTaskEdited(store, task.id));
  const [openModal, setOpenModal] = useState(false);
  const [hidingModal, setHidingModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    console.log("Modal opened");
  };
  const handleCloseModal = () => {
    setHidingModal(true);
  };

  const [distance, setDistance] = useState<number>();

  useEffect(() => {
    setDistance(calcDistance(task.location?.latLong, geolocation.latLong));
  }, [geolocation, task]);

  return (
    <>
      <Cell
        before={<Avatar>CS</Avatar>}
        id={task.id}
        className="w-full select-none"
        multiline={false}
        description={task.desc}
        after={<span>{task.reward}</span>}
        titleBadge={
          edited ? (
            <Badge className="bg-yellow-600" mode="critical" type="number">
              !
            </Badge>
          ) : (
            <></>
          )
        }
        subhead={distance + " km"}
        onClick={handleOpenModal}
      >
        {task.title}
      </Cell>
      {openModal && (
        <PseudoTGModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          closeModal={handleCloseModal}
          hidingModal={hidingModal}
          setHidingModal={setHidingModal}
        >
          <TaskCard
            taskId={task.id}
            closeModal={handleCloseModal}
            mode={mode}
          ></TaskCard>
        </PseudoTGModal>
      )}
    </>
  );
};

export const TaskCard: FC<{
  taskId?: string;
  mode: "view" | "edit" | "create";
  closeModal: () => void;
}> = ({ taskId = "-1", closeModal, mode }) => {
  const [editingMode, setEditingMode] = useState(
    useAppSelector((state) => isTaskEdited(state, taskId))
  );

  const isEdited = useAppSelector((state) => isTaskEdited(state, taskId));
  const [jiggle, setJiggle] = useState(false);

  const handleEditMode = () => {
    if (isEdited) setJiggle(true);
    if (!isEdited) setEditingMode((edit) => !edit);
  };

  if (!taskId) {
    return <ErrorBoundary>No passed task id</ErrorBoundary>;
  }
  return (
    <div className="flex flex-col gap-1">
      <div className="p-2 flex align-middle items-center justify-between w-full">
        <Title className="text-center">Task details</Title>
        {
          //If user can edit task
          mode === "edit" && (
            <Button
              mode="plain"
              onClick={handleEditMode}
              className={jiggle ? "animate-jiggle text-red-400" : ""}
              onAnimationEnd={() => {
                setJiggle(false);
              }}
            >
              Edit
            </Button>
          )
        }
      </div>
      {mode !== "create" && !editingMode && (
        <div>
          <TaskView taskId={taskId} closeModal={closeModal} />
        </div>
      )}
      {mode !== "create" && editingMode && (
        <div>
          <TaskEdit taskId={taskId} endEditing={() => setEditingMode(false)} />
        </div>
      )}
      {mode === "create" && <TaskCreate closeModal={closeModal} />}
    </div>
  );
};
