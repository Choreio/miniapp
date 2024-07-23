import { type FC } from "react";
import { useInitData, useThemeParams } from "@telegram-apps/sdk-react";

import { Placeholder } from "@telegram-apps/telegram-ui";
import { RGB } from "./RGB";

export const Home: FC = () => {
  const initData = useInitData();
  const themeParams = useThemeParams();
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
    <div className="md:container md:mx-auto text-center home">
      <div className="pt-4 h-full">
        <h1 className="text-6xl">Soon...</h1>
      </div>
      <div className="flex flex-col items-start p-6">
        <span className="text-4xl">Debug section</span>
        <span>
          accentTextColor: <RGB color={themeParams?.accentTextColor} />
        </span>
        <span>
          bgColor: <RGB color={themeParams.bgColor} />
        </span>
        <span>
          buttonColor: <RGB color={themeParams.buttonColor} />
        </span>
        <span>
          buttonTextColor: <RGB color={themeParams.buttonTextColor} />
        </span>
        <span>
          destructiveTextColor: <RGB color={themeParams.destructiveTextColor} />
        </span>
        <span>
          headerBgColor: <RGB color={themeParams.headerBgColor} />
        </span>
        <span>
          hintColor: <RGB color={themeParams.hintColor} />
        </span>
        <span>isDark: {themeParams.isDark ? "TRUE" : "FALSE"}</span>
        <span>
          linkColor: <RGB color={themeParams.linkColor} />
        </span>
        <span>
          secondaryBgColor: <RGB color={themeParams.secondaryBgColor} />
        </span>
        <span>
          sectionBgColor: <RGB color={themeParams.sectionBgColor} />
        </span>
        <span>
          sectionHeaderTextColor:{" "}
          <RGB color={themeParams.sectionHeaderTextColor} />
        </span>
        <span>
          sectionSeparatorColor:{" "}
          <RGB color={themeParams.sectionSeparatorColor} />
        </span>
        <span>
          subtitleTextColor: <RGB color={themeParams.subtitleTextColor} />
        </span>
        <span>
          textColor: <RGB color={themeParams.textColor} />
        </span>
      </div>
    </div>
  );
};
