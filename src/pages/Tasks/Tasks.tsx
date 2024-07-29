import { type FC } from "react";
import { useInitData } from "@telegram-apps/sdk-react";

import { Placeholder } from "@telegram-apps/telegram-ui";
import { tasks } from "@/store/storeTemp";
import { TaskCard } from "./TaskCard";

export const Tasks: FC = () => {
  const initData = useInitData();
  const currentTasks = tasks;
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

  return (
    <div className="md:container md:mx-auto text-center">
      <div className="flex flex-col pt-4 md:pl-4 md:pr-4 h-full">
        <div className="text-4xl pb-2">Задания рядом</div>
        {currentTasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              name={task.name}
              description={task.description}
              price={task.price}
              currency={task.currency}
              location={null}
            />
          );
        })}
      </div>
    </div>
  );
};
