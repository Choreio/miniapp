import { Caption, Cell } from "@telegram-apps/telegram-ui";
import { FC, useState } from "react";

type FieldProps = {
  title: string | undefined;
  children: React.JSX.Element | string | undefined;
};
export const Field: FC<FieldProps> = ({ title, children }) => {
  const [multiline, setMultiline] = useState(false);

  return (
    <div>
      <Caption
        level="2"
        weight="2"
        className="pl-6 text-[--tg-theme-hint-color]"
      >
        {title}
      </Caption>
      <Cell multiline={multiline} onClick={() => setMultiline((cur) => !cur)}>
        {children}
      </Cell>
    </div>
  );
};
