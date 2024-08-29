import { useAppSelector } from "@/store/hooks";
import {
  selectTaskByID,
  setStatus,
  TaskStateType,
} from "@/store/slices/tasksSlice";
import { selectUser } from "@/store/slices/userSlice";
import { Button, Image, List } from "@telegram-apps/telegram-ui";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { MapContainerYandex } from "../Map/MapContainerYandex";
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import { Field } from "@/components/Field";

export const TaskView: FC<{
  taskId: string;
  closeModal: () => void;
}> = ({ taskId, closeModal }) => {
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);
  //Task variables
  const taskStore = useAppSelector((state) =>
    selectTaskByID(state, taskId)
  ) as TaskStateType; //Get task from store

  const [isImgFullscreen, setImageFullscreen] = useState(false);
  const [imageFullscreenIndex, setImageFullscreenIndex] = useState(0);
  const openImageFullscreen = (attachment: number) => {
    console.log("Open image fullscreen. Index: " + attachment);
    setImageFullscreen(true);
    setImageFullscreenIndex(attachment);
  };
  const closeImageFullscreen = () => {
    console.log("Close image fullscreen");
    setImageFullscreen(false);
    setImageFullscreenIndex(0);
  };

  //Accept/Decline/Delete logic
  const [acceptButtonLoading, setAcceptButtonLoading] = useState(false);
  const [dismissButtonLoading, setDismissButtonLoading] = useState(false);

  const handleClickAccept = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (taskStore) {
      e.preventDefault();
      console.log("Clicked accept");
      setAcceptButtonLoading(true);
      setTimeout(() => {
        console.log("Do something after 2 secs");
        dispatch(
          setStatus({ id: taskStore.id, status: "active", userId: user.id })
        );
        setAcceptButtonLoading(false);
        closeModal();
      }, 2000);
    }
  };

  const handleClickDismiss = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (taskStore) {
      e.preventDefault();
      console.log("Clicked dismiss");
      setDismissButtonLoading(true);
      await setTimeout(() => {
        console.log("Do something after 5 secs");
        dispatch(setStatus({ id: taskStore.id, status: "open", userId: "" }));
        setDismissButtonLoading(false);
        closeModal();
      }, 2000);
    }
  };
  return (
    <div>
      <List className="flex flex-col gap-2 h-full">
        {
          //Title
        }
        <Field title="Title">{taskStore.title}</Field>
        {
          //Description
        }
        <Field title="Description">{taskStore.desc}</Field>
        {
          //Reward
        }
        <Field title="Reward">{taskStore.reward}</Field>
        {
          //Attachments
        }
        {taskStore.attachments && taskStore.attachments.length > 0 && (
          <Field title="Attachments">
            <div className="p-2 grid grid-flow-row grid-cols-3 gap-2">
              {taskStore.attachments.map((attachment, index) => {
                return (
                  <Image
                    size={96}
                    key={index + attachment}
                    src={attachment}
                    onClick={() => openImageFullscreen(index)}
                  />
                );
              })}
            </div>
          </Field>
        )}
        {
          //Customer
        }
        <Field title="Customer">{taskStore.customer}</Field>
        {
          //Address
        }
        <div>
          <Field title="Address">
            {taskStore?.location?.address?.formattedAdress}
          </Field>
        </div>
        {
          //Map
        }
        <div>
          <Field title="On map">
            <MapContainerYandex
              available={taskStore.location.available}
              type="target"
              center={{
                latitude: Number(taskStore.location.latLong?.latitude),
                longitude: Number(taskStore.location.latLong?.longitude),
              }}
            />
          </Field>
        </div>
      </List>
      <div className="w-full flex justify-around pb-8">
        {taskStore.status === "open" && (
          <Button
            className="bg-green-600 w-2/6"
            onClick={handleClickAccept}
            loading={acceptButtonLoading}
          >
            Accept
          </Button>
        )}
        {taskStore.status === "active" && (
          <Button
            className="bg-red-600 w-2/6"
            onClick={handleClickDismiss}
            loading={dismissButtonLoading}
          >
            Decline
          </Button>
        )}
      </div>
      <Lightbox
        open={isImgFullscreen}
        controller={{
          closeOnPullDown: true,
          closeOnBackdropClick: true,
          closeOnPullUp: true,
        }}
        close={closeImageFullscreen}
        index={imageFullscreenIndex}
        plugins={[Zoom]}
        slides={taskStore?.attachments?.map((attach) => {
          return { src: attach };
        })}
      ></Lightbox>
    </div>
  );
};
