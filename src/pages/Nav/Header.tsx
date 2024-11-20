import {
  useTonConnectUI,
  useTonAddress,
  WalletsModalState,
} from "@tonconnect/ui-react";
import logo from "./logo-Photoroom.png";
import { useState } from "react";
import { Spinner } from "@telegram-apps/telegram-ui";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";

export function Header() {
  const [tonConnectUI] = useTonConnectUI();
  const user = useAppSelector(selectUser);

  const userFriendlyAddress = useTonAddress(); // || "DebguValue";

  const [connecting, setConnecting] = useState(false);

  function changeConnecting(state: WalletsModalState) {
    setConnecting(state.status === "opened" ? true : false);
  }
  let modalStateChangeUnsubscribe =
    tonConnectUI.onModalStateChange(changeConnecting);
  if (userFriendlyAddress) {
    modalStateChangeUnsubscribe();
  }
  async function connectWallet() {
    setConnecting(true);
    modalStateChangeUnsubscribe =
      tonConnectUI.onModalStateChange(changeConnecting);
    await tonConnectUI.openModal();
  }

  return (
    <header className="inset-x-0 top-0 z-49 pb-2 bg-[--tg-bg-color]">
      <nav aria-label="Global" className="w-full p-2 flex justify-around">
        <div className="absolute top-0 left-0 inline-flex items-center p-2">
          <img alt="" src={logo} className="h-12 w-12" />
        </div>
        <div className="relative flex flex-col self-center justify-end items-center">
          <span>
            {(user?.firstName || "" + " " + user?.lastName || "").trim()}
          </span>

          {userFriendlyAddress ? (
            <div className="w-32 gap-1 rounded-lg text-center">
              <span className="self-center text-[--tg-theme-subtitle-text-color]">
                {userFriendlyAddress.slice(0, 4) +
                  "..." +
                  userFriendlyAddress.slice(-5, -1)}
              </span>
            </div>
          ) : (
            <button
              className="relative flex w-32 bg-[--tg-theme-button-color] rounded-lg justify-center text-center select-none cursor-pointer hover:bg-[--tg-theme-accent-text-color]"
              onClick={connectWallet}
            >
              {!connecting ? <>Connect wallet</> : <Spinner size="s" />}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
