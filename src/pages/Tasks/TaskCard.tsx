import { getTranslateValues } from "@/components/getTranslateValues";
import { TaskInfo } from "@/types";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Cell, Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { FC, useEffect, useState } from "react";

type TouchState = {
  x_start: number;
  translateX: number;
  x_end: number;
  direction: string;
};

export const TaskCard: FC<TaskInfo> = ({
  id,
  name,
  description,
  price,
  currency,
}) => {
  const [currentSwipe, setCurrentSwipe] = useState({
    x_start: 0,
    x_end: 0,
    translateX: 0,
    direction: "none",
  } as TouchState);
  const [cardHeight, setCardHeight] = useState(32);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const h = document.getElementById(id.toString())?.offsetHeight;
    setCardHeight(h || 32);

    return () => {
      //console.log("Height: " + h);
    };
  }, [cardHeight]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.currentTarget.focus();
    e.currentTarget.style.transition = "all 0.3s";
    setCurrentSwipe({
      ...currentSwipe,
      x_start: e.targetTouches[0].pageX,
    });
    console.log("Touch started: " + currentSwipe.x_start);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.currentTarget.focus();
    const x = e.targetTouches[0].pageX;
    const diff = Math.round(x - currentSwipe.x_start);
    if (Number(getTranslateValues(e.currentTarget)?.x) || 0 <= 0)
      e.currentTarget.style.transform = `translateX(${
        currentSwipe.translateX + diff
      }px)`;
    if (diff < 0) {
      setCurrentSwipe({ ...currentSwipe, direction: "left" });
    }
    if (diff > 0) {
      setCurrentSwipe({ ...currentSwipe, direction: "right" });
    }
    if (diff === 0) {
      setCurrentSwipe({ ...currentSwipe, direction: "none" });
    }
    console.log("Touch moving diffX: " + diff);
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    //get current translate
    let translateX = Number(getTranslateValues(e.currentTarget)?.x || 0);
    //If user clicked it, open modal with full info
    if (currentSwipe.direction === "none" && translateX === 0) {
      hanleOpenModal();
    }
    //help close fast sidemenu
    if (translateX > -110 && currentSwipe.direction === "right") {
      translateX = 0;
      e.currentTarget.style.transform = `translateX(${translateX}px)`;
      console.log("Assisted closing");
    }

    //fake or mistake swipe right handle
    if (translateX < -110 && currentSwipe.direction === "right") {
      translateX = -128;
      e.currentTarget.style.transform = `translateX(${translateX}px)`;
      console.log("Mistaken closing");
    }

    //Help to open fast sidemenu
    if (translateX < -20 && currentSwipe.direction === "left") {
      translateX = -128;
      e.currentTarget.style.transform = `translateX(${translateX}px)`;
      console.log("Assisted opening");
    }

    //fake or mistake swipe left handle
    if (translateX > -20 && currentSwipe.direction === "left") {
      translateX = 0;
      e.currentTarget.style.transform = `translateX(${translateX}px)`;
      console.log("Mistaken opening");
    }
    setCurrentSwipe({
      ...currentSwipe,
      translateX: translateX,
      direction: "none",
    });
    console.log("Touch ended");
  };
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const translateX = 0;
    e.currentTarget.style.transform = `translateX(${translateX}px)`;
    setCurrentSwipe({ ...currentSwipe, translateX: translateX });
    //console.log("Focus lost");
  };
  const handleClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Card clicked");
    hanleOpenModal();
  };
  const handleClickConfirm = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Clicked COnfirm");
  };
  const handleClickCancel = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Clicked Cancel");
  };
  const hanleOpenModal = () => {
    setOpenModal(true);
    console.log("Modal opened");
  };
  //const handleCloseModal = () => {
  //  setOpenModal(false);
  //  console.log("Modal closed");
  //};
  return (
    <div className="flex overflow-hidden bg-[--tg-theme-section-bg-color] border-b">
      {
        //<div className="left-0 inline-flex focus:outline-none" id={id.toString()}>
      }
      <Cell
        tabIndex={-1}
        id={id.toString()}
        className="w-screen md:w-full z-[6] bg-[--tg-theme-section-bg-color] shadow-lg outline-none"
        multiline={true}
        description={description}
        after={
          <span>
            {price} {currency}
          </span>
        }
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onBlur={handleBlur}
        onClick={handleClickCard}
      >
        {name}
      </Cell>
      {
        //</div>
      }
      <div
        className="fixed right-0 flex w-32 z-[5] md:hidden"
        style={{ height: cardHeight }}
      >
        <div
          className="flex justify-center items-center w-1/2 text-center border-r border-gray-700 bg-green-700"
          onClick={handleClickConfirm}
        >
          <CheckIcon className="h-8 w-8" fill="currentColor" />
        </div>
        <div
          className="flex justify-center items-center w-1/2 text-center bg-red-700"
          onClick={handleClickCancel}
        >
          <XMarkIcon className="h-8 w-8" fill="currentColor" />
        </div>
      </div>
      <Modal
        open={openModal}
        className="z-[9999] h-full bg-[--tg-theme-section-bg-color]"
        header={<ModalHeader>{name}</ModalHeader>}
      >
        <div className="flex flex-col gap-1">
          <span>{name}</span>
          <span>{description}</span>
          <span>
            {price} {currency}
          </span>
        </div>
      </Modal>
    </div>
  );
};
