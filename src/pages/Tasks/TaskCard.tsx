import { useAppSelector } from "@/store/hooks";
import {
  CurrencyType,
  deleteTask,
  selectTaskByID,
  setStatus,
  setTask,
  TaskStateType,
} from "@/store/slices/tasksSlice";
import {
  Cell,
  Button,
  Title,
  Avatar,
  Badge,
  Section,
  IconButton,
  List,
  Image,
  Input,
  Caption,
  InlineButtons,
  FileInput,
} from "@telegram-apps/telegram-ui";

import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  addEditedTask,
  deleteEditedTask,
  isTaskEdited,
} from "@/store/slices/changesStateSlice";
import {
  GeoLocationStateType,
  selectLocation,
} from "@/store/slices/locationSlice";
import { calcDistance } from "@/methods/calcDistance";
import { useNavigate, useParams } from "react-router-dom";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Field } from "@/components/Field";
import Lightbox from "yet-another-react-lightbox";
import { useDispatch } from "react-redux";
import { selectUser } from "@/store/slices/userSlice";
import { Zoom } from "yet-another-react-lightbox/plugins";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";
import { GeoguesserInput } from "../Map/GeoguesserInput";
import { MapContainerYandex } from "@/pages/Map/MapContainerYandex";

export const TaskMiniCard: FC<{
  task: TaskStateType;
  mode: "view" | "edit";
}> = ({ task }) => {
  //Modal handlers
  const geolocation = useAppSelector(selectLocation);
  const navigate = useNavigate();

  const edited = useAppSelector((store) => isTaskEdited(store, task.id));

  const [distance, setDistance] = useState<number>();

  useEffect(() => {
    setDistance(calcDistance(task.location?.latLong, geolocation.latLong));
  }, [geolocation, task]);

  return (
    <>
      <Cell
        before={<Avatar>CS</Avatar>}
        id={task.id}
        className="w-full select-none"
        multiline={false}
        description={task.desc}
        after={<span>{task.reward.cost + " " + task.reward.currency}</span>}
        titleBadge={
          edited ? (
            <Badge className="bg-yellow-600" mode="critical" type="number">
              !
            </Badge>
          ) : (
            <></>
          )
        }
        subhead={distance + " km"}
        onClick={() => navigate("/tasks/task/" + task.id)}
      >
        {task.title}
      </Cell>
    </>
  );
};

export const TaskCard: FC = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const user = useAppSelector(selectUser);
  const taskId = params["taskId"] || "-1";

  const taskStore = useAppSelector((state) => selectTaskByID(state, taskId));

  //Task fields
  const [title, setTitle] = useState<string>(taskStore?.title || "");

  const [desc, setDesc] = useState<string>(taskStore?.desc || "");

  const [cost, setCost] = useState<number>(taskStore?.reward?.cost || 0);

  const [currency, setCurrency] = useState<CurrencyType>(
    taskStore?.reward?.currency || "TON"
  );

  const [attachments, setAttachments] = useState<string[]>(
    taskStore?.attachments || []
  );

  const [location, setLocation] = useState<GeoLocationStateType>(
    taskStore?.location || {
      available: false,
    }
  );

  const customer = useMemo(() => taskStore?.customer, [taskStore]);

  //Editing logic
  const editMode = useMemo(
    () => taskStore?.customer.id === user.id,
    [taskStore, user]
  );

  const [formNotFilledAlert, setFormNotFilledAlert] = useState(false);

  const parseSavedTask = useCallback(() => {
    const savedTask = JSON.parse(
      sessionStorage.getItem("edited-task-" + taskId) || "{}"
    ) as TaskStateType;

    try {
      setTitle(savedTask.title);
      setDesc(savedTask.desc);
      setCost(savedTask?.reward?.cost || 0);
      setCurrency(savedTask?.reward?.currency || "TON");
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
        reward: { cost, currency },
        attachments: attachments,
        location: location,
      };
      return newTask;
    }
  }, [taskStore, title, desc, cost, currency, attachments, location]);

  const [hasChanges, setHasChanges] = useState<boolean>(
    useAppSelector((state) => isTaskEdited(state, taskId))
  );

  const [editing, setEditing] = useState<boolean>(hasChanges || false);

  const [jiggle, setJiggle] = useState(false);
  //Toggle edit mode
  const handleEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Edit mode handler");
    setEditing(true);
    if (hasChanges) setJiggle(true);
    if (editing && !hasChanges) {
      setEditing(false);
    }
  };

  useEffect(() => {
    if (!hasChanges) {
      console.log("Update fields on stored task change");
      setTitle(taskStore?.title || "");
      setDesc(taskStore?.desc || "");
      setCost(taskStore?.reward?.cost || 0);
      setCurrency(taskStore?.reward?.currency || "TON");
      setAttachments(taskStore?.attachments || []);
      setLocation(taskStore?.location || { available: false });
    }
  }, [taskStore]);

  //Restore onmount
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
      cost !== taskStore.reward.cost ||
      (currency || "").trim() !== taskStore.reward.currency ||
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
      console.log("Save edited task state");
      sessionStorage.setItem(
        "edited-task-" + taskId,
        JSON.stringify(compileTask())
      );
      dispatch(addEditedTask(taskId));
    } else {
      console.log("Remove edited task state");
      sessionStorage.removeItem("edited-task-" + taskId);
      dispatch(deleteEditedTask(taskId));
    }
  }, [taskId, hasChanges, dispatch, compileTask]);

  const addAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.currentTarget.files;
    console.log(files);
    if (files && files?.length > 0) {
      const newAttach = [];
      for (let i = 0; i < files.length; i++) {
        newAttach.push(URL.createObjectURL(files[i]));
      }
      const currentAttach = attachments || [];
      console.log([...currentAttach, ...newAttach]);
      setAttachments([...currentAttach, ...newAttach]);
    }
  };

  const removeAttachment = (index: number) => {
    const currentAttach = [...attachments];
    currentAttach.splice(index, 1);
    setAttachments(currentAttach);
  };

  //LightBox logic
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

  //Delete logic
  const handleClickDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAcceptButtonLoading(true);
    setTimeout(() => {
      console.log("Do something after 2 secs");
      dispatch(deleteTask(taskId));
      setAcceptButtonLoading(false);
      history.back();
    }, 2000);
  };

  //Accept/Decline logic
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
          setStatus({
            id: taskStore.id,
            status: "active",
            user: {
              id: user.id,
              name: (user.firstName + " " + user.lastName || "").trim(),
            },
          })
        );
        setAcceptButtonLoading(false);
        history.back();
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
        dispatch(
          setStatus({
            id: taskStore.id,
            status: "open",
            user: {
              id: user.id,
              name: (user.firstName + " " + user.lastName || "").trim(),
            },
          })
        );
        setDismissButtonLoading(false);
        history.back();
      }, 2000);
    }
  };

  //Confirm/Cancel changes logic
  const handleClickConfirm = () => {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) inputs[i].blur();

    if (
      title.trim().length === 0 ||
      desc.trim().length === 0 ||
      cost === 0 ||
      !location.available
    )
      return setFormNotFilledAlert(true);

    const newTask = compileTask();
    if (newTask) {
      console.log("Save edited task to Redux");
      dispatch(setTask(newTask));
      setHasChanges(false);
      setEditing(false);
    }
  };

  const handleClickCancel = () => {
    setHasChanges(false);
    setEditing(false);
    setTitle(taskStore?.title || "");
    setDesc(taskStore?.desc || "");
    setCost(taskStore?.reward?.cost || 0);
    setCurrency(taskStore?.reward?.currency || "TON");
    setAttachments(taskStore?.attachments || []);
    setLocation(taskStore?.location || { available: false });
  };

  if (!taskStore) {
    return <>Task not found</>;
  }
  return (
    <div className="flex flex-col gap-1 h-full">
      <div className="p-2 flex align-middle items-center justify-between w-full">
        <Title>Task details</Title>
        <Button mode="plain" onClick={() => history.back()}>
          Back
        </Button>
      </div>
      <Section
        header={
          <div className="flex justify-between align-middle p-2">
            <SectionHeader>Task N{taskId}</SectionHeader>
            {editMode && (
              <IconButton
                className={"w-8 h-8 self-end".concat(
                  " ",
                  jiggle ? "animate-jiggle text-red-400" : ""
                )}
                onClick={handleEditMode}
                onAnimationEnd={() => {
                  setJiggle(false);
                }}
              >
                <PencilIcon></PencilIcon>
              </IconButton>
            )}
          </div>
        }
      >
        {hasChanges && (
          <div className="bg-yellow-400 text-center rounded-lg mb-1">
            You have uncommited changes!!!
          </div>
        )}
        <List className="flex flex-col gap-2 h-full">
          {
            //Title
          }
          <Field title="Title" editMode={editing}>
            <>
              {editing ? (
                <Input
                  value={title}
                  status={title.length === 0 ? "error" : "default"}
                  placeholder="Title..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const text = e.currentTarget.value;
                    setTitle(text);
                  }}
                />
              ) : (
                title
              )}
              <Caption
                className="pl-8 text-red-400"
                hidden={!(title.length === 0)}
              >
                This field cant be empty
              </Caption>
            </>
          </Field>
          {
            //Description
          }
          <Field title="Description" editMode={editing}>
            <>
              {editing ? (
                <Input
                  placeholder="Description..."
                  value={desc}
                  status={desc.length === 0 ? "error" : "default"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDesc(e.currentTarget.value)
                  }
                />
              ) : (
                desc
              )}
              <Caption
                className="pl-8 text-red-400"
                hidden={!(desc.length === 0)}
              >
                This field cant be empty
              </Caption>
            </>
          </Field>
          {
            //Reward
          }
          <Field title="Reward" editMode={editing}>
            <>
              {editing ? (
                <div className="flex items-center justify-stretch h-fit">
                  <div className="w-2/5 h-full flex flex-col justify-between">
                    <Input
                      placeholder="Cost..."
                      inputMode="numeric"
                      type="number"
                      status={cost === 0 ? "error" : "default"}
                      value={cost || ""}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCost(Number(e.currentTarget.value));
                      }}
                    />
                    <Caption
                      className="pl-8 text-red-400"
                      hidden={!(cost === 0 && formNotFilledAlert)}
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
                    </InlineButtons>
                  </div>
                </div>
              ) : (
                cost + " " + currency
              )}
            </>
          </Field>
          {
            //Attachments
          }
          {attachments && attachments.length > 0 && (
            <Field title="Attachments">
              <div className="pl-6 pr-6 p-2 grid grid-flow-row grid-cols-3 gap-2">
                {attachments.map((attachment, index) => {
                  return (
                    <div key={index + attachment} className="relative">
                      <Image
                        size={96}
                        src={attachment}
                        onClick={() => openImageFullscreen(index)}
                      />
                      {editing && (
                        <XMarkIcon
                          className="absolute right-0 -top-2 w-6 h-6 border border-gray-500 rounded-full bg-gray-400 bg-opacity-55"
                          onClick={() => removeAttachment(index)}
                        ></XMarkIcon>
                      )}
                    </div>
                  );
                })}
              </div>
            </Field>
          )}
          {editing && (
            <FileInput
              multiple
              label="Attach a new file"
              accept="image/*"
              onChange={addAttachment}
            ></FileInput>
          )}
          {
            //Customer
          }
          <Field title="Customer">{customer?.name}</Field>
          {
            //Address
          }
          <div>
            <Field title="Address" editMode={editing}>
              <>
                {editing ? (
                  <>
                    <Cell multiline>{location?.address?.formattedAdress}</Cell>
                    <GeoguesserInput
                      status={
                        !location.available && formNotFilledAlert
                          ? "error"
                          : "default"
                      }
                      geoposition={location || { available: false }}
                      setGeoposition={(geolocation) => setLocation(geolocation)}
                    />
                  </>
                ) : (
                  location?.address?.formattedAdress
                )}
                <Caption
                  className="pl-8 text-red-400"
                  hidden={location.available}
                >
                  Please enter correct address
                </Caption>
              </>
            </Field>
          </div>
          {
            //Map
          }
          <div className="pb-8">
            <Field title="On map">
              <MapContainerYandex
                available={location.available}
                type="target"
                center={{
                  latitude: Number(location.latLong?.latitude),
                  longitude: Number(location.latLong?.longitude),
                }}
              />
            </Field>
          </div>
        </List>
        <div className=" w-full flex justify-around p-4 ">
          {!editMode && (
            <>
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
            </>
          )}
          {editMode && !editing && (
            <>
              {taskStore.status === "open" && (
                <Button
                  className="bg-red-600 w-1/2"
                  onClick={handleClickDelete}
                  loading={acceptButtonLoading}
                >
                  Delete task
                </Button>
              )}
            </>
          )}
          {editMode && editing && (
            <>
              <Button
                className="bg-green-600 w-2/6"
                onClick={handleClickConfirm}
                loading={acceptButtonLoading}
              >
                Confirm
              </Button>
              <Button
                className="bg-red-600 w-2/6"
                onClick={handleClickCancel}
                loading={dismissButtonLoading}
              >
                Cancel
              </Button>
            </>
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
      </Section>
    </div>
  );
};
