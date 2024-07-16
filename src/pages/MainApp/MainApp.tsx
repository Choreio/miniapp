import { type FC } from "react";
import { useInitData } from "@telegram-apps/sdk-react";

import { Placeholder } from "@telegram-apps/telegram-ui";

export const MainApp: FC = () => {
  const initData = useInitData();

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
    <div className="container flex items-center">
      <h1 className="text-6xl">Welcome to board {initData?.user?.username}</h1>
    </div>
  );
};
