import { useAppSelector } from "@/store/hooks";
import {
  deleteTask,
  selectTaskByID,
  setStatus,
  setTask as setTaskStore,
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

import React, { FC, useEffect, useMemo, useState } from "react";
import {
  addEditedTask,
  deleteEditedTask,
  isTaskEdited,
} from "@/store/slices/changesStateSlice";
import { selectLocation } from "@/store/slices/locationSlice";
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

  const [hasChanges, setHasChanges] = useState<boolean>(
    useAppSelector((state) => isTaskEdited(state, taskId)) || false
  );

  const [editing, setEditing] = useState<boolean>(
    useAppSelector((state) => isTaskEdited(state, taskId)) || false
  );

  const taskStore = useAppSelector((state) => selectTaskByID(state, taskId));
  const taskEdited = JSON.parse(
    sessionStorage.getItem("edited-task-" + taskId) || "{}"
  );
  const [task, setTask] = useState<TaskStateType | undefined>(
    hasChanges ? taskEdited : taskStore
  );

  //Editing logic
  const editMode = useMemo(
    () => taskStore?.customer.id === user.id,
    [taskStore, user]
  );

  const [formNotFilledAlert, setFormNotFilledAlert] = useState(false);

  //Updating changes state
  useEffect(() => {
    hasChanges
      ? dispatch(addEditedTask(taskId))
      : dispatch(deleteEditedTask(taskId));
  }, [hasChanges, taskId, dispatch]);

  //Check if there are any changes after editing fields
  useEffect(() => {
    if (task)
      if (JSON.stringify(taskStore) !== JSON.stringify(task)) {
        //Update saved edited task
        sessionStorage.setItem("edited-task-" + task.id, JSON.stringify(task));
        setHasChanges(true);
      } else {
        setHasChanges(false);
        sessionStorage.removeItem("edited-task-" + task.id);
      }
  }, [task, taskStore]);

  //Update main task object after we dispatch our changes
  useEffect(() => {
    if (!hasChanges) {
      console.log("Sync task");
      setTask(taskStore);
    }
  }, [taskStore, hasChanges]);

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

  const addAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (task) {
      e.preventDefault();
      const files = e.currentTarget.files;
      console.log(files);
      if (files && files?.length > 0) {
        const newAttach = [];
        for (let i = 0; i < files.length; i++) {
          newAttach.push(URL.createObjectURL(files[i]));
        }
        const currentAttach = task.attachments || [];
        setTask({ ...task, attachments: [...currentAttach, ...newAttach] });
      }
    }
  };

  const removeAttachment = (index: number) => {
    if (task) {
      const currentAttach = [...(task.attachments || [])];
      console.log(currentAttach);
      currentAttach.splice(index, 1);
      console.log(currentAttach);
      setTask({ ...task, attachments: currentAttach });
    }
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
    if (task) {
      if (
        task.title.trim().length === 0 ||
        task.desc.trim().length === 0 ||
        task.reward.cost === 0 ||
        !task.location.available
      )
        return setFormNotFilledAlert(true);
      console.log("Save edited task to Redux");
      dispatch(setTaskStore(task));
      dispatch(deleteEditedTask(task.id));
      setHasChanges(false);
      setEditing(false);
    }
  };

  const handleClickCancel = () => {
    console.log("Changes canceled");
    setTask(taskStore);
    setEditing(false);
    setHasChanges(false);
  };

  if (!taskStore || !task) {
    return <>Task not found</>;
  }

  return (
    <div>
      <div className="flex flex-col gap-1 h-full">
        {hasChanges && (
          <div className="bg-yellow-400 text-center rounded-lg mb-1">
            You have uncommited changes!!!
          </div>
        )}
        <div className="p-2 flex align-middle items-center justify-between w-full">
          <Title>Task details</Title>
          <Button mode="plain" onClick={() => history.back()}>
            Back
          </Button>
        </div>
        <List>
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
            <List className="flex flex-col gap-2 h-full">
              {
                //Title
              }
              <Field title="Title" editMode={editing} type={"text"}>
                <>
                  {editing ? (
                    <Input
                      value={task.title}
                      status={task.title.length === 0 ? "error" : undefined}
                      placeholder="Title..."
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const text = e.currentTarget.value;
                        setTask({ ...task, title: text });
                      }}
                    />
                  ) : (
                    task.title
                  )}
                  <Caption
                    className="pl-8 text-red-400"
                    hidden={!(task.title.length === 0)}
                  >
                    This field cant be empty
                  </Caption>
                </>
              </Field>
              {
                //Description
              }
              <Field title="Description" editMode={editing} type={"text"}>
                <>
                  {editing ? (
                    <Input
                      placeholder="Description..."
                      value={task.desc}
                      status={task.desc.length === 0 ? "error" : undefined}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTask({ ...task, desc: e.currentTarget.value })
                      }
                    />
                  ) : (
                    task.desc
                  )}
                  <Caption
                    className="pl-8 text-red-400"
                    hidden={!(task.desc.length === 0)}
                  >
                    This field cant be empty
                  </Caption>
                </>
              </Field>
              {
                //Reward
              }
              <Field title="Reward" editMode={editing} type={"text"}>
                <>
                  {editing ? (
                    <div className="flex items-center justify-stretch h-fit">
                      <div className="w-2/5 h-full flex flex-col justify-between">
                        <Input
                          placeholder="Cost..."
                          inputMode="numeric"
                          type="number"
                          status={task.reward.cost === 0 ? "error" : undefined}
                          value={task.reward.cost || ""}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setTask({
                              ...task,
                              reward: {
                                ...task.reward,
                                cost: Number(e.currentTarget.value),
                              },
                            });
                          }}
                        />
                        <Caption
                          className="pl-8 text-red-400"
                          hidden={
                            !(task.reward.cost === 0 && formNotFilledAlert)
                          }
                        >
                          This field cant be empty
                        </Caption>
                      </div>
                      <div className="w-3/5 flex flex-col h-full justify-between">
                        <InlineButtons className="h-12 items-center">
                          <InlineButtonsItem
                            onClick={() =>
                              setTask({
                                ...task,
                                reward: { ...task.reward, currency: "TON" },
                              })
                            }
                            mode={
                              task.reward.currency === "TON"
                                ? "bezeled"
                                : "plain"
                            }
                          >
                            TON
                          </InlineButtonsItem>
                          <InlineButtonsItem
                            onClick={() =>
                              setTask({
                                ...task,
                                reward: { ...task.reward, currency: "USDT" },
                              })
                            }
                            mode={
                              task.reward.currency === "USDT"
                                ? "bezeled"
                                : "plain"
                            }
                          >
                            USDT
                          </InlineButtonsItem>
                        </InlineButtons>
                      </div>
                    </div>
                  ) : (
                    task.reward.cost + " " + task.reward.currency
                  )}
                </>
              </Field>
              {
                //Attachments
              }
              {task.attachments && task.attachments.length > 0 && (
                <Field title="Attachments" type={"other"}>
                  <div className="pl-6 pr-6 p-2 grid grid-flow-row grid-cols-3 gap-2">
                    {task.attachments.map((attachment, index) => {
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
              <Field title="Customer" type={"text"}>
                {task.customer?.name}
              </Field>
              {
                //Address
              }
              <div>
                <Field title="Address" editMode={editing} type={"other"}>
                  <>
                    {editing ? (
                      <>
                        <Cell multiline>
                          {task.location?.address?.formattedAdress}
                        </Cell>
                        <GeoguesserInput
                          status={
                            !task.location.available && formNotFilledAlert
                              ? "error"
                              : undefined
                          }
                          geoposition={task.location || { available: false }}
                          setGeoposition={(geolocation) =>
                            setTask({ ...task, location: geolocation })
                          }
                        />
                      </>
                    ) : (
                      task.location?.address?.formattedAdress
                    )}
                    <Caption
                      className="pl-8 text-red-400"
                      hidden={task.location.available}
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
                <Field title="On map" type={"other"}>
                  <MapContainerYandex
                    available={task.location.available}
                    type="target"
                    center={{
                      latitude: Number(task.location.latLong?.latitude),
                      longitude: Number(task.location.latLong?.longitude),
                    }}
                  />
                </Field>
              </div>
            </List>
          </Section>
        </List>
        <div className="sticky bottom-24 pl-4 pr-4">
          {!editMode && (
            <div className="flex flex-row justify-center items-center">
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
          )}
          {editMode && !editing && (
            <div className="flex flex-row justify-center items-center">
              {taskStore.status === "open" && (
                <Button
                  className="bg-red-600 w-1/2"
                  onClick={handleClickDelete}
                  loading={acceptButtonLoading}
                >
                  Delete task
                </Button>
              )}
              {taskStore.status === "active" && (
                <Button className="bg-red-600 w-1/2" disabled>
                  You cant delete active task
                </Button>
              )}
            </div>
          )}
          {editMode && editing && (
            <div className="flex flex-row justify-center items-center">
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
            </div>
          )}
        </div>
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
