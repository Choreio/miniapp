import { TaskState } from "@/store/slices/tasksSlice";
import { Accordion, Avatar, Cell, List } from "@telegram-apps/telegram-ui";
import { AccordionContent } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionContent/AccordionContent";
import { AccordionSummary } from "@telegram-apps/telegram-ui/dist/components/Blocks/Accordion/components/AccordionSummary/AccordionSummary";
import { FC, useState } from "react";

export const TasksList: FC<{
  tasks: TaskState[];
  title: string;
  onCardClick: (taskId: string) => void;
}> = ({ tasks, title, onCardClick }) => {
  const [opened, setOpened] = useState(true);
  return (
    <Accordion expanded={opened} onChange={() => setOpened(!opened)}>
      <AccordionSummary>{title}</AccordionSummary>
      <AccordionContent>
        <List>
          {tasks.length === 0 && <Cell>No tasks</Cell>}
          {tasks.map((task) => {
            return (
              <Cell
                key={task.id}
                before={<Avatar>CS</Avatar>}
                id={task.id}
                className="w-full md:w-full z-[6] bg-[--tg-theme-section-bg-color] shadow-lg outline-none select-none"
                multiline={false}
                description={task.desc}
                after={<span>{task.reward}</span>}
                titleBadge={
                  task.specials && (
                    <div className="bg-red-500 rounded-xl text-xs pl-1 pr-1">
                      {task.specials}
                    </div>
                  )
                }
                onClick={() => onCardClick(task.id)}
              >
                {task.title}
              </Cell>
            );
          })}
        </List>
      </AccordionContent>
    </Accordion>
  );
};
