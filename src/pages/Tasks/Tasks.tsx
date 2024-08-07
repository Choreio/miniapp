import { useInitData } from "@telegram-apps/sdk-react";

import {
  Placeholder,
  Section,
  SegmentedControl,
} from "@telegram-apps/telegram-ui";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { FC, useEffect, useState } from "react";
import { SegmentedControlItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/SegmentedControl/components/SegmentedControlItem/SegmentedControlItem";
import { Outlet, useNavigate } from "react-router-dom";

export const Tasks: FC = () => {
  const initData = useInitData();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("available");
  const taskTabs = [
    { id: "available", name: "Available" },
    { id: "active", name: "Active" },
    { id: "created", name: "Created" },
  ];
  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Changing active tab");
    console.log("New active tab: " + e.currentTarget.id);
    setActiveTab(e.currentTarget.id);
    navigate("tasks/" + e.currentTarget.id);
  };
  useEffect(() => {
    navigate("tasks/" + activeTab);

    return () => {
      console.log("Moved to: " + activeTab);
    };
  }, [activeTab]);

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

  return (
    <div className="md:container md:mx-auto text-center">
      <Section
        className="pt-4 h-full"
        header={
          <SectionHeader>
            <SegmentedControl className="flex justify-around fill-current">
              {taskTabs.map((tab) => {
                return (
                  <SegmentedControlItem
                    id={tab.id}
                    key={tab.id}
                    onClick={handleTabClick}
                    selected={activeTab === tab.id}
                  >
                    {tab.name}
                  </SegmentedControlItem>
                );
              })}
            </SegmentedControl>
          </SectionHeader>
        }
      >
        <Outlet />
      </Section>
    </div>
  );
};
