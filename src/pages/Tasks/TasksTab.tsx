import { useInitData } from "@telegram-apps/sdk-react";

import {
  Placeholder,
  Section,
  SegmentedControl,
  Select,
  Slider,
  Text,
  Title,
} from "@telegram-apps/telegram-ui";
import React, { FC, useEffect, useMemo, useState } from "react";
import { SegmentedControlItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";
import { selectTasks } from "@/store/slices/tasksSlice";
import { selectLocation } from "@/store/slices/locationSlice";
import { GeolocationRequest } from "../Map/GeolocationRequest";
import { calcDistance } from "@/methods/calcDistance";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const MapPage = React.lazy(() =>
  import("@/pages/Map/MapPage").then(({ MapPage }) => ({ default: MapPage }))
);

const TasksList = React.lazy(() =>
  import("@/pages/Tasks/TasksList").then(({ TasksList }) => ({
    default: TasksList,
  }))
);
export const TasksTab: FC = () => {
  //Check if its tg env
  const initData = useInitData();
  //Mode of task page map/list
  const [mode, setMode] = useState<"list" | "map">("list");
  const handleChangeModeClick = (mode: "list" | "map") => {
    console.log("Changing mode");
    setMode(mode);
  };

  const [sliderRadius, setSliderRadius] = useState(1);
  const [radius, setRadius] = useState(1000);

  useEffect(() => {
    if (sliderRadius < 10) {
      setRadius(sliderRadius * 1000);
    } else {
      setRadius(Infinity);
    }
  }, [sliderRadius]);

  const [filterOption, setFilterOption] = useState<
    "default" | "distance" | "reward"
  >("default");
  const [filterMode, setFilterMode] = useState<"asc" | "desc">("desc");

  //Main data fetching
  const user = useAppSelector(selectUser);
  const tasks = useAppSelector(selectTasks);
  const geolocation = useAppSelector(selectLocation);

  const availableTasks = useMemo(
    () =>
      tasks
        .filter(
          (task) =>
            task.acceptedBy !== user.id &&
            task.status === "open" &&
            task.customer !== user.id &&
            calcDistance(geolocation.latLong, task.location.latLong) * 1000 <=
              radius
        )
        .sort((a, b) => {
          if (filterOption === "default") {
            if (filterMode === "asc") {
              console.log("Default sorting ascending");
              if (a.id < b.id) {
                return -1;
              } else if (a.id > b.id) {
                return 1;
              }
              return 0;
            } else {
              console.log("Default sorting descending");
              if (a.id < b.id) {
                return 1;
              } else if (a.id > b.id) {
                return -1;
              }
              return 0;
            }
          }
          if (filterOption === "distance") {
            if (filterMode === "asc") {
              console.log("Distance sorting ascending");
              if (
                calcDistance(a.location.latLong, geolocation.latLong) <
                calcDistance(b.location.latLong, geolocation.latLong)
              ) {
                return -1;
              }
              if (
                calcDistance(a.location.latLong, geolocation.latLong) >
                calcDistance(b.location.latLong, geolocation.latLong)
              ) {
                return 1;
              }
              return 0;
            } else {
              console.log("Distance sorting descending");
              if (
                calcDistance(a.location.latLong, geolocation.latLong) <
                calcDistance(b.location.latLong, geolocation.latLong)
              ) {
                return 1;
              }
              if (
                calcDistance(a.location.latLong, geolocation.latLong) >
                calcDistance(b.location.latLong, geolocation.latLong)
              ) {
                return -1;
              }
              return 0;
            }
          }
          if (filterOption === "reward") {
            if (filterMode === "asc") {
              console.log("Reward sorting ascending");
              console.log(
                a.reward.split(" ")[0] + " < " + b.reward.split(" ")[0]
              );
              if (
                Number(a.reward.split(" ")[0]) < Number(b.reward.split(" ")[0])
              ) {
                return -1;
              } else if (
                Number(a.reward.split(" ")[0]) > Number(b.reward.split(" ")[0])
              ) {
                return 1;
              }
              return 0;
            } else {
              console.log("Reward sorting descending");
              if (
                Number(a.reward.split(" ")[0]) < Number(b.reward.split(" ")[0])
              ) {
                return 1;
              } else if (
                Number(a.reward.split(" ")[0]) > Number(b.reward.split(" ")[0])
              ) {
                return -1;
              }
              return 0;
            }
          }
          return 0;
        }),
    [tasks, user, geolocation, radius, filterMode, filterOption]
  );
  const activeTasks = useMemo(
    () =>
      tasks.filter(
        (task) => task.acceptedBy === user.id && task.status === "active"
      ),
    [tasks, user]
  );

  const [forceReopenAccordeon, setForceReopenAccordeon] = useState(true);

  useEffect(() => {
    console.log("Force redo accordeon");
    setForceReopenAccordeon(false);
    setTimeout(() => {
      setForceReopenAccordeon(true);
    }, 50);
  }, [availableTasks, activeTasks]);

  if (!initData) {
    return (
      <Placeholder
        header="Oops"
        description="Application was launched with missing init data"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: "block", width: "144px", height: "144px" }}
        />
      </Placeholder>
    );
  }
  if (!geolocation.available) {
    return <GeolocationRequest />;
  }
  return (
    <div className="md:container md:mx-auto">
      <Section
        className="pt-4 h-full"
        header={
          <div className="p-2 flex align-middle items-center justify-between w-full">
            <Title className="self-start">Tasks</Title>
            <SegmentedControl className="w-40 h-8 self-end z-[0]">
              <SegmentedControlItem
                className="w-4 h-8 align-middle p-1"
                selected={mode === "list"}
                onClick={() => {
                  handleChangeModeClick("list");
                }}
              >
                List
              </SegmentedControlItem>
              <SegmentedControlItem
                selected={mode === "map"}
                className="w-4 h-8 align-middle p-1"
                onClick={() => {
                  handleChangeModeClick("map");
                }}
              >
                Map
              </SegmentedControlItem>
            </SegmentedControl>
          </div>
        }
      >
        {mode === "list" && (
          <div className="pl-4 pr-4 flex justify-between items-center w-full">
            <div className="flex items-center">
              <Text>Sort by:</Text>
              <Select
                value={filterOption}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setFilterOption(
                    e.currentTarget.value as "default" | "distance" | "reward"
                  );
                }}
              >
                <option value={"default"}>Default</option>
                <option value={"distance"}>Distance</option>
                <option value={"reward"}>Reward</option>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              {filterMode === "desc" ? (
                <BarsArrowDownIcon
                  className="h-8 w-8"
                  onClick={() => setFilterMode("asc")}
                ></BarsArrowDownIcon>
              ) : (
                <BarsArrowUpIcon
                  className="h-8 w-8"
                  onClick={() => setFilterMode("desc")}
                ></BarsArrowUpIcon>
              )}
              {(filterMode !== "desc" || filterOption !== "default") && (
                <XMarkIcon
                  className="h-8 w-8"
                  onClick={() => {
                    setFilterMode("desc");
                    setFilterOption("default");
                  }}
                ></XMarkIcon>
              )}
            </div>
          </div>
        )}
        <div className="pl-8 pt-4 pr-8">
          <Text className="flex">
            You are looking for tasks in {radius} meters from your current
            position
          </Text>
          <Slider
            value={sliderRadius}
            min={1}
            max={10}
            onChange={(value) => {
              console.log("Slider change!");
              setSliderRadius(value);
            }}
          ></Slider>
        </div>
        {mode === "list" ? (
          <>
            <TasksList
              title="Accepted tasks"
              tasks={activeTasks}
              mode="view"
              open={forceReopenAccordeon}
            ></TasksList>
            <TasksList
              title="Available tasks"
              tasks={availableTasks}
              mode="view"
              open={forceReopenAccordeon}
            ></TasksList>
          </>
        ) : (
          <>
            <MapPage
              parent="Tasks"
              tasks={[...activeTasks, ...availableTasks]}
              position={geolocation}
              radius={radius}
            ></MapPage>
          </>
        )}
      </Section>
    </div>
  );
};
