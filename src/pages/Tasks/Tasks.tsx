import { type FC } from "react";
import { useInitData } from "@telegram-apps/sdk-react";

import { Placeholder } from "@telegram-apps/telegram-ui";

export const Tasks: FC = () => {
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
    <div className="md:container md:mx-auto text-center">
      <div className="pt-4 h-full">
        <h1 className="text-6xl">Tasks will be added soon...</h1>
      </div>
    </div>
  );
};
