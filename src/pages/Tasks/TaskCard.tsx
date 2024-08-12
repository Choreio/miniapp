import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useAppSelector } from "@/store/hooks";
import { selectTaskByID, setStatus } from "@/store/slices/tasksSlice";
import { selectUser } from "@/store/slices/userSlice";
import { Cell, Button, Section } from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";

import { FC, useState } from "react";
import { useDispatch } from "react-redux";

export const TaskCard: FC<{
  id: string | undefined;
  closeModal: () => void;
}> = ({ id, closeModal }) => {
  if (!id) {
    return <ErrorBoundary>ERROR</ErrorBoundary>;
  }
  const user = useAppSelector(selectUser);
  const task = useAppSelector((state) => selectTaskByID(state, id));
  const [acceptButtonLoading, setAcceptButtonLoading] = useState(false);
  const [dismissButtonLoading, setDismissButtonLoading] = useState(false);
  const dispatch = useDispatch();

  if (!task) {
    return <ErrorBoundary>ERROR</ErrorBoundary>;
  }

  const handleClickAccept = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Clicked accept");
    setAcceptButtonLoading(true);
    setTimeout(() => {
      console.log("Do something after 2 secs");
      dispatch(setStatus({ id: id, status: "active", userId: user.id }));
      setAcceptButtonLoading(false);
      closeModal();
    }, 2000);
  };
  const handleClickDismiss = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Clicked dismiss");
    setDismissButtonLoading(true);
    await setTimeout(() => {
      console.log("Do something after 5 secs");
      dispatch(setStatus({ id: id, status: "open", userId: "" }));
      setDismissButtonLoading(false);
      closeModal();
    }, 5000);
  };
  return (
    <div className="flex flex-col gap-1">
      <Section
        className="flex flex-col gap-2 h-full"
        header={<SectionHeader>Details</SectionHeader>}
        footer={
          <div className="w-full flex justify-around">
            {task.status === "open" && (
              <Button
                className="bg-green-600 w-2/6"
                onClick={handleClickAccept}
                loading={acceptButtonLoading}
              >
                Accept
              </Button>
            )}
            {task.status === "active" && (
              <Button
                className="bg-red-600 w-2/6"
                onClick={handleClickDismiss}
                loading={dismissButtonLoading}
              >
                Decline
              </Button>
            )}
          </div>
        }
      >
        <Cell subhead={"Title"}>{task.title}</Cell>
        <Cell subhead={"Description"}>{task.desc}</Cell>
        <Cell subhead={"Reward"}>
          <span>{task.reward}</span>
        </Cell>
        {task.attachments && (
          <Cell subhead={"Attachments"}>
            <span>{task.attachments}</span>
          </Cell>
        )}
        <Cell subhead={"Customer"}>
          <span>{task.customer}</span>
        </Cell>
      </Section>
    </div>
  );
};
