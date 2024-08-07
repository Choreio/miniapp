import { FC } from "react";
import { TaskCardMini } from "./TaskCard";
import { Divider } from "@telegram-apps/telegram-ui";
import { selectTasks } from "@/store/slices/tasksSlice";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";

export const ActiveTasks: FC = () => {
  const user = useAppSelector(selectUser);
  const activeTasks = useAppSelector(selectTasks).filter(
    (task) => task.status === "active" && task.acceptedBy === user.id
  );
  if (!activeTasks || activeTasks.length === 0)
    return <div className="text-4xl">No active tasks. Go and get some!</div>;
  return (
    <div>
      {activeTasks.map((task) => {
        return (
          <>
            <TaskCardMini key={task.id.toString()} {...task} />
            <Divider />
          </>
        );
      })}
    </div>
  );
};
