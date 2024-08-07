import { useAppSelector } from "@/store/hooks";
import { setStatus, TaskState } from "@/store/slices/tasksSlice";
import { selectUser } from "@/store/slices/userSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Cell,
  Button,
  Modal,
  Section,
} from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";

import { FC, useState } from "react";
import { useDispatch } from "react-redux";

/*type TouchState = {
  x_start: number;
  translateX: number;
  direction: string;
};*/

export const TaskCardMini: FC<TaskState> = ({
  id,
  specials,
  title,
  desc,
  reward,
  customer,
  attachments,
}) => {
  const user = useAppSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const [acceptButtonLoading, setAcceptButtonLoading] = useState(false);
  const [dismissButtonLoading, setDismissButtonLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClickAccept = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Clicked accept");
    setAcceptButtonLoading(true);
    setTimeout(() => {
      console.log("Do something about 5 secs");
      dispatch(setStatus({ id: id, status: "active", userId: user.id }));
      handleCloseModal();
      setAcceptButtonLoading(false);
    }, 2000);
  };
  const handleClickDismiss = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Clicked dismiss");
    setDismissButtonLoading(true);
    await setTimeout(() => {
      console.log("Do something about 5 secs");
      dispatch(setStatus({ id: id, status: "open", userId: "" }));
      handleCloseModal();
      setDismissButtonLoading(false);
    }, 5000);
  };
  const handleClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Card clicked");
    handleOpenModal();
  };
  const handleOpenModal = () => {
    setOpenModal(true);
    console.log("Modal opened");
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    console.log("Modal closed");
  };
  return (
    <div className="flex overflow-hidden justify-stretch bg-[--tg-theme-section-bg-color]">
      <Cell
        before={<Avatar>CS</Avatar>}
        id={id}
        className="w-full md:w-full z-[6] bg-[--tg-theme-section-bg-color] shadow-lg outline-none select-none"
        multiline={false}
        description={desc}
        after={<span>{reward}</span>}
        titleBadge={
          specials && (
            <div className="bg-red-500 rounded-xl text-xs pl-1 pr-1">
              {specials}
            </div>
          )
        }
        //Remove due TG web app behavior
        /*
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onBlur={handleBlur}
        */

        onClick={handleClickCard}
      >
        {title}
      </Cell>

      <Modal
        open={openModal}
        onOpenChange={(open) => {
          setOpenModal(open);
        }}
        className="z-10 h-5/6 bg-[--tg-theme-section-bg-color]"
        header={
          <ModalHeader
            after={
              <XMarkIcon
                className="text-[--tg-theme-plain-foreground] h-4"
                onClick={handleCloseModal}
              />
            }
          >
            {title}
          </ModalHeader>
        }
      >
        <div className="flex flex-col gap-1">
          <Section
            className="flex flex-col gap-2 h-full"
            header={<SectionHeader>Details</SectionHeader>}
            footer={
              <div className="w-full flex justify-around">
                <Button
                  className="bg-green-600 w-2/6"
                  onClick={handleClickAccept}
                  loading={acceptButtonLoading}
                >
                  Accept
                </Button>
                <Button
                  className="bg-red-600 w-2/6"
                  onClick={handleClickDismiss}
                  loading={dismissButtonLoading}
                >
                  Decline
                </Button>
              </div>
            }
          >
            <Cell subhead={"Title"}>{title}</Cell>
            <Cell subhead={"Description"}>{desc}</Cell>
            <Cell subhead={"Reward"}>
              <span>{reward}</span>
            </Cell>
            {attachments && (
              <Cell subhead={"Attachments"}>
                <span>{attachments}</span>
              </Cell>
            )}
            <Cell subhead={"Customer"}>
              <span>{customer}</span>
            </Cell>
          </Section>
        </div>
      </Modal>
    </div>
  );
};
