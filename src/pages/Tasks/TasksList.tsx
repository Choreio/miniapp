import { TaskStateType } from "@/store/slices/tasksSlice";
import { Accordion, Cell, List } from "@telegram-apps/telegram-ui";
import { AccordionContent } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import { AccordionSummary } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import { FC, useEffect, useState } from "react";
import { TaskMiniCard } from "./TaskCard";

export const TasksList: FC<{
  tasks: TaskStateType[];
  title: string;
  open?: boolean;
  mode: "view" | "edit";
}> = ({ tasks, title, mode, open = false }) => {
  const [opened, setOpened] = useState(open);

  const [localTasks, setLocalTasks] = useState(tasks);
  useEffect(() => {
    setLocalTasks(tasks);
    console.log("Task lisk (" + title + "): Updated tasks");
    console.log(tasks);
  }, [tasks, title]);

  return (
    <Accordion expanded={opened} onChange={() => setOpened(!opened)}>
      <AccordionSummary>{title}</AccordionSummary>
      <AccordionContent>
        <List>
          {localTasks.length === 0 && <Cell>No tasks</Cell>}
          {localTasks.map((task) => {
            return <TaskMiniCard key={task.id} task={task} mode={mode} />;
          })}
        </List>
      </AccordionContent>
    </Accordion>
  );
};
