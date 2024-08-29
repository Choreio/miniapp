import { XMarkIcon } from "@heroicons/react/24/solid";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { FC, ReactNode } from "react";

export const PseudoTGModal: FC<{
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  closeModal: () => void;
  hidingModal: boolean;
  setHidingModal: (hide: boolean) => void;
  children: ReactNode;
}> = ({
  children,
  openModal,
  setOpenModal,
  closeModal,
  hidingModal,
  setHidingModal,
}) => {
  return (
    <div
      id="pseudoModal"
      hidden={!openModal}
      className={"w-screen fixed top-0 bottom-0 left-0 bg-[--tg-theme-bg-color] overflow-y-scroll".concat(
        " ",
        hidingModal ? "animate-bottomDisappear" : "animate-bottomAppear",
        " ",
        openModal ? "z-10" : "-z-10"
      )}
      style={{ animationFillMode: "forward" }}
      onAnimationEnd={() => {
        if (hidingModal) {
          const pseudomodal = document.getElementById("pseudoModal");
          if (pseudomodal) pseudomodal.style.opacity = "0";
          setOpenModal(false);
          setHidingModal(false);
          console.log("Modal closed");
        }
      }}
    >
      <div className="sticky -top-0 inset-0 z-[11] bg-[--tg-theme-bg-color]">
        <ModalHeader
          after={
            <XMarkIcon
              className="text-[--tg-theme-plain-foreground] h-4"
              onClick={closeModal}
            />
          }
        ></ModalHeader>
      </div>
      {children}
    </div>
  );
};
