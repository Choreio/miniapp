import { type FC } from "react";
import { useInitData } from "@telegram-apps/sdk-react";

import { Placeholder } from "@telegram-apps/telegram-ui";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";

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
      <div className="flex flex-col h-full p-4 gap-2">
        <h1 className="text-6xl text-center">Your profile</h1>
        <span>User id: {user.id}</span>
        <span>Username: {user?.username}</span>
        <span>
          Name: {user.firstName} {user?.lastName}
        </span>
        <span>Photo: {user?.photoUrl}</span>
        <span>Locale: {user?.languageCode}</span>
      </div>
    </div>
  );
};
