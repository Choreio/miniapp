import { TaskInfo } from "@/store/store";
import { FC, useState } from "react";

export const TaskCard: FC<TaskInfo> = ({
  name,
  description,
  price,
  currency,
}) => {
  const [cardOpened, setCardOpened] = useState(true);
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCardOpened(!cardOpened);
  };
  return (
    <div
      className="flex flex-col bg-[--tg-theme-section-bg-color] rounded-lg hover:shadow-xl"
      onClick={handleCardClick}
    >
      <span className="p-2 text-2xl self-center">{name}</span>
      <span
        className="p-2 self-start text-[--tg-theme-hint-color]"
        hidden={cardOpened}
      >
        {description}
      </span>
      <span className="self-end p-2">
        Вознаграждение: {price} {currency}
      </span>
      <div className="self-end p-2" hidden={cardOpened}>
        <button className="bg-[--tg-theme-button-color] m-1 p-1">
          Не интересует
        </button>
        <button className="bg-[--tg-theme-button-color] m-1 p-1">
          Взять в работу
        </button>
      </div>
    </div>
  );
};
