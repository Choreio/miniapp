import { type FC } from "react";
import { useThemeParams } from "@telegram-apps/sdk-react";

import { RGB } from "./RGB";

export const Home: FC = () => {
  const themeParams = useThemeParams();

  return (
    <div className="md:container md:mx-auto text-center">
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
