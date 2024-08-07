import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { type FC } from "react";

export const Home: FC = () => {
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 360,
    messages: [
      {
        address: "UQCgGHViuIgfLhU1wvvS6ceUaqIfPekvE3xSA1uzV6GAf0kO",
        amount: "100000000",
      },
    ],
  };
  const donate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    tonConnectUI.sendTransaction(transaction);
  };
  return (
    <div className="md:container md:mx-auto text-center h-full">
      <div className="pt-4">
        <h1 className="text-6xl">Soon...</h1>
      </div>
      {wallet && (
        <div>
          <button
            className="w-32 h-8 bg-blue-500 rounded-xl shadow-md hover:bg-blue-600"
            onClick={donate}
          >
            Support us
          </button>
        </div>
      )}
    </div>
  );
};
