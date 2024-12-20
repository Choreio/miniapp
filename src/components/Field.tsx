import { Caption, Cell } from "@telegram-apps/telegram-ui";
import { FC, useState } from "react";

type FieldProps = {
  type: "text" | "other";
  title: string | undefined;
  children?:
    | React.JSX.Element
    | React.JSX.Element[]
    | string
    | boolean
    | undefined;
  editMode?: boolean;
};
export const Field: FC<FieldProps> = ({
  type,
  title,
  children,
  editMode = false,
}) => {
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
      {editMode ? (
        children
      ) : (
        <Cell
          multiline={multiline}
          onClick={() => {
            if (type === "text") {
              setMultiline((cur) => !cur);
            }
          }}
        >
          {children}
        </Cell>
      )}
    </div>
  );
};
