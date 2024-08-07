import { TaskState } from "@/store/slices/tasksSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { initPopup } from "@telegram-apps/sdk";
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
  const [openModal, setOpenModal] = useState(false);
  const [acceptButtonLoading, setAcceptButtonLoading] = useState(false);
  const [dismissButtonLoading, setDismissButtonLoading] = useState(false);

  const popup = initPopup();
  const openPopup = (title: string, message: string) => {
    console.log("Called open popup");
    popup
      .open({
        title: title,
        message: message,
        buttons: [
          { id: "confirm-button", type: "ok" },
          { id: "decline-button", type: "cancel" },
        ],
      })
      .then((buttonId) => {
        console.log(
          buttonId === null
            ? "User did not click any button"
            : `User clicked a button with ID "${buttonId}"`
        );
      });
    console.log(popup.isOpened); // true
  };
  //Remove due TG web app behavior
  /*const [sidemenu, setSideMenu] = useState(
    document.getElementById("sidebuttondiv" + id)
  );

  useEffect(() => {
    const sidemenu = document.getElementById("sidebuttondiv" + id);
    setSideMenu(sidemenu || null);

    return () => {
      //console.log("Height: " + h);
    };
  }, [sidemenu]);
  const [currentSwipe, setCurrentSwipe] = useState({
    x_start: 0,
    translateX: 0,
    direction: "none",
  } as TouchState);
  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement | HTMLSpanElement | SVGSVGElement>
  ) => {
    e.currentTarget.focus();
    e.currentTarget.style.transition = "all 0.09s";
    if (sidemenu) sidemenu.style.transition = "all 0.09s";
    setCurrentSwipe({
      ...currentSwipe,
      x_start: e.targetTouches[0].clientX,
    });
    console.log("Touch started: " + currentSwipe.x_start);
  };
  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement | HTMLSpanElement>
  ) => {
    e.currentTarget.focus();
    const x = e.targetTouches[0].clientX;
    const diff = Math.round(x - currentSwipe.x_start);
    e.currentTarget.style.transform = `translateX(${
      currentSwipe.translateX + diff
    }px)`;
    if (sidemenu)
      sidemenu.style.transform = `translateX(${
        currentSwipe.translateX + diff
      }px)`;
    if (diff < 0) {
      setCurrentSwipe({ ...currentSwipe, direction: "left" });
    }
    if (diff > 0) {
      setCurrentSwipe({ ...currentSwipe, direction: "right" });
    }
    console.log("Touch moving diffX: " + diff);
  };
  const handleTouchEnd = (
    e: React.TouchEvent<HTMLDivElement | HTMLSpanElement>
  ) => {
    e.preventDefault();
    //get current translate
    let translateX = Number(getTranslateValues(e.currentTarget)?.x || 0);
    //help close fast sidemenu
    if (translateX > -115 && currentSwipe.direction === "right") {
      translateX = 0;
      e.currentTarget.style.transform = `translateX(${translateX}px)`;
      if (sidemenu) sidemenu.style.transform = `translateX(${translateX}px)`;
      console.log("Assisted closing");
    }

    //fake or mistake swipe right handle
    if (translateX < -115 && currentSwipe.direction === "right") {
      translateX = -128;
      e.currentTarget.style.transform = `translateX(${translateX}px)`;
      if (sidemenu) sidemenu.style.transform = `translateX(${translateX}px)`;
      console.log("Mistaken closing");
    }

    //Help to open fast sidemenu
    if (translateX < -15 && currentSwipe.direction === "left") {
      translateX = -128;
      e.currentTarget.style.transform = `translateX(${translateX}px)`;
      if (sidemenu) sidemenu.style.transform = `translateX(${translateX}px)`;
      console.log("Assisted opening");
    }

    //fake or mistake swipe left handle
    if (translateX > -15 && currentSwipe.direction === "left") {
      translateX = 0;
      e.currentTarget.style.transform = `translateX(${translateX}px)`;
      if (sidemenu) sidemenu.style.transform = `translateX(${translateX}px)`;
      console.log("Mistaken opening");
    }
    setCurrentSwipe({
      ...currentSwipe,
      translateX: translateX,
      direction: "none",
    });
    console.log("Touch ended");
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLDivElement | HTMLSpanElement>
  ) => {
    const translateX = 0;
    e.currentTarget.style.transform = `translateX(${translateX}px)`;
    if (sidemenu) sidemenu.style.transform = `translateX(${translateX}px)`;
    setCurrentSwipe({ ...currentSwipe, translateX: translateX });
    //console.log("Focus lost");
  };
  */

  const handleClickAccept = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Clicked accept");
    setAcceptButtonLoading(true);
    openPopup("Warning!", "Are you sure want to accept this task?");
    setTimeout(() => {
      console.log("Do something about 5 secs");
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
