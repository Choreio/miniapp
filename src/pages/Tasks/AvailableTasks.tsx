import { FC } from "react";
import { TaskCardMini } from "./TaskCard";
import { Divider } from "@telegram-apps/telegram-ui";
import { useAppSelector } from "@/store/hooks";
import { selectTasks } from "@/store/slices/tasksSlice";
import { selectUser } from "@/store/slices/userSlice";

export const AvailableTasks: FC = () => {
  const user = useAppSelector(selectUser);
  const availableTasks = useAppSelector(selectTasks).filter(
    (task) => task.status === "open" && task.customer != user.id
  );
  if (!availableTasks || availableTasks.length === 0)
    return <div className="text-4xl">No tasks available.</div>;
  return (
    <div>
      {availableTasks.map((task) => {
        return (
          <>
            <TaskCardMini key={task.id} {...task} />
            <Divider />
          </>
        );
      })}
    </div>
  );
};
