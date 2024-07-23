import { classNames, type RGB as RGBType } from "@telegram-apps/sdk-react";
import type { FC } from "react";

import "./RGB.css";

export type RGBProps = JSX.IntrinsicElements["div"] & {
  color: RGBType | undefined;
};

export const RGB: FC<RGBProps> = ({ color, className, ...rest }) => (
  <span {...rest} className={classNames("rgb", className)}>
    <i className="rgb__icon" style={{ backgroundColor: color }} />
    {color}
  </span>
);
