import { FC } from "react";
import { TaskCardMini } from "./TaskCard";
import { Divider } from "@telegram-apps/telegram-ui";
import { useAppSelector } from "@/store/hooks";
import { selectTasks } from "@/store/slices/tasksSlice";
import { selectUser } from "@/store/slices/userSlice";

export const CreatedTasks: FC = () => {
  const user = useAppSelector(selectUser);
  const createdTasks = useAppSelector(selectTasks).filter(
    (task) => task.customer === user.id
  );
  if (!createdTasks || createdTasks.length === 0)
    return (
      <div className="text-4xl">
        No tasks created. Seems like You dont need anybody`s help
      </div>
    );
  return (
    <div>
      {createdTasks.map((task) => {
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
