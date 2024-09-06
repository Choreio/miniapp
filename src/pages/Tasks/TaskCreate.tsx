import { useAppSelector } from "@/store/hooks";
import {
  addTask,
  CurrencyType,
  TaskStateType,
  UserType,
} from "@/store/slices/tasksSlice";
import { selectUser } from "@/store/slices/userSlice";
import {
  Button,
  Caption,
  Cell,
  FileInput,
  Image,
  InlineButtons,
  Input,
  List,
  Section,
  Text,
  Title,
} from "@telegram-apps/telegram-ui";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { GeoguesserInput } from "../Map/GeoguesserInput";
import {
  isTaskCreated,
  setTaskCreated,
} from "@/store/slices/changesStateSlice";
import { GeoLocationStateType } from "@/store/slices/locationSlice";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { MapContainerYandex } from "@/pages/Map/MapContainerYandex";

export const TaskCreate: FC = () => {
  const navigate = useNavigate();

  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();

  const [formNotFilledAlert, setFormNotFilledAlert] = useState(false);

  //Task fields
  const [title, setTitle] = useState<string>("");

  const [desc, setDesc] = useState<string>("");

  const [cost, setCost] = useState<number>(0);

  const [currency, setCurrency] = useState<CurrencyType>();

  const [attachments, setAttachments] = useState<string[]>([]);

  const [location, setLocation] = useState<GeoLocationStateType>({
    available: false,
  });
  const customer = useMemo(() => {
    return {
      id: user.id,
      name: (user.firstName + " " + user.lastName || "").trim(),
    };
  }, [user]);

  const parseSavedTask = () => {
    const savedTask = JSON.parse(
      sessionStorage.getItem("saved-task") || "{}"
    ) as TaskStateType;

    try {
      setTitle(savedTask.title);
      setDesc(savedTask.desc);
      setCost(savedTask?.reward?.cost);
      setCurrency(savedTask?.reward?.currency as CurrencyType);
      setAttachments(savedTask.attachments || []);
      setLocation(savedTask.location);
    } catch {
      console.log("Cant parse saved task");
    }
  };

  const compileTask = useCallback(
    (
      title: string,
      desc: string,
      cost: number,
      currency: CurrencyType,
      attachments: string[],
      location: GeoLocationStateType,
      customer: UserType
    ) => {
      const newTask: TaskStateType = {
        id: Date.now().toString(),
        title: title,
        desc: desc,
        reward: { cost: cost, currency: currency },
        attachments: attachments,
        location: location,
        customer: customer,
        status: "open",
      };
      return newTask;
    },
    []
  );

  const [hasChanges, setHasChanges] = useState<boolean>(
    useAppSelector(isTaskCreated)
  );

  useEffect(() => {
    if (hasChanges) {
      console.log("Restore created task");
      parseSavedTask();
    }
  }, [hasChanges]);

  //If any field filled with data, save to sessionStorage
  useEffect(() => {
    if (
      title.trim() !== "" ||
      desc.trim() !== "" ||
      cost !== 0 ||
      (currency || "").trim() !== "" ||
      attachments.length > 0 ||
      location.available
    ) {
      console.log("Changes made");
      setHasChanges(true);
      sessionStorage.setItem(
        "saved-task",
        JSON.stringify(
          compileTask(
            title,
            desc,
            cost,
            currency || "TON",
            attachments,
            location,
            customer
          )
        )
      );
    } else {
      setHasChanges(false);
      sessionStorage.removeItem("saved-task");
    }
  }, [
    title,
    desc,
    cost,
    currency,
    attachments,
    location,
    customer,
    compileTask,
  ]);

  //If any changes, save to redux storage
  useEffect(() => {
    console.log("Update changes store");
    dispatch(setTaskCreated(hasChanges));
  }, [hasChanges, dispatch]);

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

  const handleCreateClick = () => {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) inputs[i].blur();

    if (
      title.trim().length === 0 ||
      desc.trim().length === 0 ||
      cost === 0 ||
      (currency || "") === "" ||
      !location.available
    )
      return setFormNotFilledAlert(true);
    const newTask = compileTask(
      title,
      desc,
      cost,
      currency || "TON",
      attachments,
      location,
      customer
    );
    dispatch(addTask(newTask));
    setHasChanges(false);
    sessionStorage.removeItem("created-task");
    navigate("/tasks/task/" + newTask.id);
  };
  const handleCancelClick = () => {
    setHasChanges(false);
    sessionStorage.removeItem("saved-task");
    navigate("/tasks/list");
  };

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

  return (
    <div>
      {hasChanges && (
        <div className="bg-yellow-400 text-center rounded-lg mb-1">
          You have uncommited changes!!!
        </div>
      )}
      <div className="p-2 flex align-middle items-center justify-between w-full">
        <Title>Task creation</Title>
        <Button mode="plain" onClick={() => history.back()}>
          Back
        </Button>
      </div>
      <List className="flex flex-col gap-2 h-full">
        <Section header={<SectionHeader>New task</SectionHeader>}>
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
              hidden={!(desc.length === 0 && formNotFilledAlert)}
            >
              This field is required
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
              This field is required
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
                    cost === 0 && formNotFilledAlert ? "error" : "default"
                  }
                  value={cost || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setCost(Number(e.currentTarget.value));
                  }}
                />
                <Caption
                  className="pl-8 text-red-400"
                  hidden={!(cost === 0 && formNotFilledAlert)}
                >
                  This field is required
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
                hidden={!(desc.length === 0 && formNotFilledAlert)}
              >
                This field is required
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
                  latitude: Number(location.latLong?.latitude || 52.518073),
                  longitude: Number(location.latLong?.longitude || 13.376139),
                }}
              />
            </Cell>
          </div>
        </Section>
      </List>
      <div className="pt-4">
        <div className="flex flex-row justify-center items-center">
          <Button className="bg-green-400 w-full" onClick={handleCreateClick}>
            Create
          </Button>
          <Button className="bg-red-400 w-full" onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
      </div>
      <Lightbox
        open={isImgFullscreen}
        close={closeImageFullscreen}
        controller={{
          closeOnPullDown: true,
          closeOnBackdropClick: true,
          closeOnPullUp: true,
        }}
        index={imageFullscreenIndex}
        plugins={[Zoom]}
        slides={attachments?.map((attach) => {
          return { src: attach };
        })}
      ></Lightbox>
    </div>
  );
};
