import { type FC } from "react";
import { useInitData } from "@telegram-apps/sdk-react";

import { Cell, Placeholder, Section } from "@telegram-apps/telegram-ui";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";

export const Profile: FC = () => {
  const initData = useInitData();

  const user = useAppSelector(selectUser);

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
    <div className="md:container md:mx-auto">
      <Section
        className="flex flex-col h-full p-4 gap-2"
        header={<SectionHeader>Your profile</SectionHeader>}
      >
        <Cell subhead={"Photo"}>{user?.photoUrl}</Cell>
        <Cell subhead={"User id"}>{user.id}</Cell>
        <Cell subhead={"Username"}>{user?.username}</Cell>
        <Cell subhead={"Full name"}>
          {user.firstName} {user?.lastName}
        </Cell>
        <Cell subhead={"Locale"}>{user?.languageCode}</Cell>
      </Section>
    </div>
  );
};
