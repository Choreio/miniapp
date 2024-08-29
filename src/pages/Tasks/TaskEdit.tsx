import { useAppSelector } from "@/store/hooks";
import {
  selectTaskByID,
  setTask,
  TaskStateType,
} from "@/store/slices/tasksSlice";
import {
  Button,
  Caption,
  Cell,
  FileInput,
  Image,
  InlineButtons,
  Input,
  List,
  Text,
} from "@telegram-apps/telegram-ui";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { GeoguesserInput } from "../Map/GeoguesserInput";
import {
  addEditedTask,
  deleteEditedTask,
  isTaskEdited,
} from "@/store/slices/changesStateSlice";
import { GeoLocationStateType } from "@/store/slices/locationSlice";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Lightbox from "yet-another-react-lightbox";

const MapContainerYandex = React.lazy(() =>
  import("@/pages/Map/MapContainerYandex").then(({ MapContainerYandex }) => ({
    default: MapContainerYandex,
  }))
);

type CurrencyType = "TON" | "USDT" | "BTC" | undefined;

export const TaskEdit: FC<{
  endEditing: () => void;
  taskId: string;
}> = ({ taskId, endEditing }) => {
  const dispatch = useDispatch();

  const taskStore = useAppSelector((store) => selectTaskByID(store, taskId));

  const [formNotFilledAlert, setFormNotFilledAlert] = useState(false);
  const [finishedEditing, setFinishedEditing] = useState(false);

  //Task fields
  const [title, setTitle] = useState<string>(taskStore?.title || "");

  const [desc, setDesc] = useState<string>(taskStore?.desc || "");

  const [cost, setCost] = useState<string>(
    taskStore?.reward.split(" ")[0] || ""
  );
  const [currency, setCurrency] = useState<CurrencyType>(
    taskStore?.reward.split(" ")[1] as CurrencyType
  );

  const [attachments, setAttachments] = useState<string[]>(
    taskStore?.attachments || []
  );

  const [location, setLocation] = useState<GeoLocationStateType>(
    taskStore?.location || {
      available: false,
    }
  );

  const parseSavedTask = useCallback(() => {
    const savedTask = JSON.parse(
      sessionStorage.getItem("edited-task-" + taskId) || "{}"
    ) as TaskStateType;

    try {
      setTitle(savedTask.title);
      setDesc(savedTask.desc);
      setCost(savedTask?.reward?.split(" ")[0] || "");
      setCurrency(savedTask?.reward?.split(" ")[1] as CurrencyType);
      setAttachments(savedTask.attachments || []);
      setLocation(savedTask.location);
    } catch {
      console.log("Cant parse saved task");
    }
  }, [taskId]);

  const compileTask = useCallback(() => {
    if (taskStore) {
      const newTask: TaskStateType = {
        ...taskStore,
        title: title,
        desc: desc,
        reward: cost + " " + currency,
        attachments: attachments,
        location: location,
      };
      return newTask;
    }
  }, [taskStore, title, desc, cost, currency, attachments, location]);

  const [hasChanges, setHasChanges] = useState<boolean>(
    useAppSelector((state) => isTaskEdited(state, taskId))
  );

  useEffect(() => {
    if (hasChanges) {
      console.log("Restore edited task");
      parseSavedTask();
    }
  }, []);

  //If any field filled with data, save to sessionStorage
  useEffect(() => {
    if (
      title.trim() !== taskStore?.title ||
      desc.trim() !== taskStore.desc ||
      cost.trim() !== taskStore.reward.split(" ")[0] ||
      (currency || "").trim() !== taskStore.reward.split(" ")[1] ||
      attachments !== taskStore.attachments ||
      location !== taskStore.location
    ) {
      console.log("Changes made");
      setHasChanges(true);
    } else {
      console.log("No changes");
      setHasChanges(false);
    }
  }, [taskStore, title, desc, cost, currency, attachments, location]);

  //If any changes, save to redux storage
  useEffect(() => {
    if (hasChanges) {
      console.log("Add edited task to session storage");
      sessionStorage.setItem(
        "edited-task-" + taskId,
        JSON.stringify(compileTask())
      );
      console.log("Add edited task in changes state");
      dispatch(addEditedTask(taskId));
    } else {
      console.log("Remove edited task from session storage");
      sessionStorage.removeItem("edited-task-" + taskId);
      console.log("Remove edited task from changes state");
      dispatch(deleteEditedTask(taskId));
    }
    if (finishedEditing) {
      endEditing();
    }
  }, [taskId, hasChanges, dispatch, compileTask, finishedEditing, endEditing]);

  const addAttachment = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files?.length > 0) {
      const newAttach = [];
      for (let i = 0; i < files.length; i++) {
        newAttach.push(URL.createObjectURL(files[i]));
      }
      const currentAttach = attachments || [];
      setAttachments([...currentAttach, ...newAttach]);
    }
  };

  const removeAttachment = (index: number) => {
    const currentAttach = [...attachments];
    currentAttach.splice(index, 1);
    setAttachments(currentAttach);
  };

  const handleConfirmChangesClick = () => {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) inputs[i].blur();

    if (
      title.trim().length === 0 ||
      desc.trim().length === 0 ||
      cost.length === 0 ||
      (currency || "") === "" ||
      !location.available
    )
      return setFormNotFilledAlert(true);

    const newTask = compileTask();
    if (newTask) {
      dispatch(setTask(newTask));
      setHasChanges(false);
      setFinishedEditing(true);
    }
  };

  const handleCancelChangesClick = () => {
    setHasChanges(false);
    setFinishedEditing(true);
  };

  const [imageFullscreenShow, setImageFullscreenShow] = useState(false);
  const [imageFullscreen, setImageFullscreen] = useState(0);
  const openImageFullscreen = (attachment: number) => {
    console.log("Open image fullscreen. Index: " + attachment);
    setImageFullscreenShow(true);
    setImageFullscreen(attachment);
  };
  const closeImageFullscreen = () => {
    setImageFullscreenShow(false);
    setImageFullscreen(0);
  };

  return (
    <div>
      <div>
        {hasChanges && (
          <div className="bg-yellow-400 text-center rounded-lg mb-1">
            You have uncommited changes!!!
          </div>
        )}
        <List className="flex flex-col gap-2 h-full">
          {
            //Title
          }
          <div>
            <Caption
              level="2"
              weight="2"
              className="pl-6 text-[--tg-theme-hint-color]"
            >
              Title
              {<span className="text-red-600">*</span>}
            </Caption>
            <Input
              value={title}
              status={
                title.length === 0 && formNotFilledAlert ? "error" : "default"
              }
              placeholder="Title..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const text = e.currentTarget.value;
                setTitle(text);
              }}
            />
            <Caption
              className="pl-8 text-red-400"
              hidden={!(title.length === 0 && formNotFilledAlert)}
            >
              This field cant be empty
            </Caption>
          </div>
          {
            //Description
          }
          <div>
            <Caption
              level="2"
              weight="2"
              className="pl-6 text-[--tg-theme-hint-color]"
            >
              Description
              {<span className="text-red-600">*</span>}
            </Caption>
            <Input
              placeholder="Description..."
              value={desc}
              status={
                desc.length === 0 && formNotFilledAlert ? "error" : "default"
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDesc(e.currentTarget.value)
              }
            />
            <Caption
              className="pl-8 text-red-400"
              hidden={!(desc.length === 0 && formNotFilledAlert)}
            >
              This field cant be empty
            </Caption>
          </div>
          {
            //Reward
          }
          <div>
            <Caption
              level="2"
              weight="2"
              className="pl-6 text-[--tg-theme-hint-color]"
            >
              Reward
              {<span className="text-red-600">*</span>}
            </Caption>
            <div className="flex items-center justify-stretch h-fit">
              <div className="w-2/5 h-full flex flex-col justify-between">
                <Input
                  placeholder="Cost..."
                  inputMode="numeric"
                  type="number"
                  status={
                    cost.length === 0 && formNotFilledAlert
                      ? "error"
                      : "default"
                  }
                  value={cost || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setCost(e.currentTarget.value);
                  }}
                />
                <Caption
                  className="pl-8 text-red-400"
                  hidden={!(cost.length === 0 && formNotFilledAlert)}
                >
                  This field cant be empty
                </Caption>
              </div>
              <div className="w-3/5 flex flex-col h-full justify-between">
                <InlineButtons className="h-12 items-center">
                  <InlineButtonsItem
                    onClick={() => setCurrency("TON")}
                    mode={currency === "TON" ? "bezeled" : "plain"}
                  >
                    TON
                  </InlineButtonsItem>
                  <InlineButtonsItem
                    onClick={() => setCurrency("USDT")}
                    mode={currency === "USDT" ? "bezeled" : "plain"}
                  >
                    USDT
                  </InlineButtonsItem>
                  <InlineButtonsItem
                    onClick={() => setCurrency("BTC")}
                    mode={currency === "BTC" ? "bezeled" : "plain"}
                  >
                    BTC
                  </InlineButtonsItem>
                </InlineButtons>
                <Caption
                  className="pl-8 text-red-400"
                  hidden={!((currency || "") === "" && formNotFilledAlert)}
                >
                  Please select currency
                </Caption>
              </div>
            </div>
          </div>
          {
            //Attachments
          }
          <div>
            <Caption
              level="2"
              weight="2"
              className="pl-6 text-[--tg-theme-hint-color]"
            >
              Attachments
            </Caption>
            <div className="p-2 grid grid-flow-row grid-cols-4 gap-2">
              {attachments.map((attachment, index) => {
                return (
                  <div key={index + "/" + attachment} className="relative">
                    <Image
                      size={96}
                      className="w-full"
                      src={attachment}
                      onClick={() => openImageFullscreen(index)}
                    ></Image>
                    <XMarkIcon
                      className="absolute right-0 -top-2 w-6 h-6 border border-gray-500 rounded-full bg-gray-400 bg-opacity-55"
                      onClick={() => removeAttachment(index)}
                    ></XMarkIcon>
                  </div>
                );
              })}
            </div>
            {attachments &&
              attachments.length > 0 &&
              attachments.map((attachment, index) => {
                return (
                  <Cell
                    className="pl-6"
                    key={index + attachment}
                    after={
                      <Button
                        mode="plain"
                        onClick={() => removeAttachment(index)}
                      >
                        X
                      </Button>
                    }
                  >
                    <Text>{attachment}</Text>
                  </Cell>
                );
              })}
            <FileInput
              multiple
              label="Attach a new file"
              accept="image/*"
              onChange={addAttachment}
            ></FileInput>
          </div>
          {
            //Address
          }
          <div>
            <Caption
              level="2"
              weight="2"
              className="pl-6 text-[--tg-theme-hint-color]"
            >
              Address
              {<span className="text-red-600">*</span>}
            </Caption>
            <div className="overflow-visible">
              <GeoguesserInput
                status={
                  !location.available && formNotFilledAlert
                    ? "error"
                    : "default"
                }
                geoposition={location || { available: false }}
                setGeoposition={(geolocation) => setLocation(geolocation)}
              />
              <Caption
                className="pl-8 text-red-400"
                hidden={!(!location.available && formNotFilledAlert)}
              >
                Oops...
              </Caption>
            </div>
          </div>
          {
            //Map
          }
          <div>
            <Caption
              level="2"
              weight="2"
              className="pl-6 text-[--tg-theme-hint-color]"
            >
              On map
            </Caption>
            <Cell>
              <MapContainerYandex
                available={location.available}
                type="target"
                center={{
                  latitude: Number(location.latLong?.latitude),
                  longitude: Number(location.latLong?.longitude),
                }}
              />
            </Cell>
          </div>
        </List>
      </div>
      <div className="sticky bottom-0 pt-8">
        <div className="flex flex-row justify-center items-center">
          <Button
            className="bg-green-400 w-full"
            onClick={handleConfirmChangesClick}
          >
            Save
          </Button>
          <Button
            className="bg-red-400 w-full"
            onClick={handleCancelChangesClick}
          >
            Cancel
          </Button>
        </div>
      </div>
      <Lightbox
        open={imageFullscreenShow}
        close={closeImageFullscreen}
        controller={{
          closeOnPullDown: true,
          closeOnBackdropClick: true,
          closeOnPullUp: true,
        }}
        index={imageFullscreen}
        slides={attachments.map((attach) => {
          return { src: attach };
        })}
      ></Lightbox>
    </div>
  );
};
