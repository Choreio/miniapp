import {
  useTonConnectUI,
  useTonAddress,
  WalletsModalState,
} from "@tonconnect/ui-react";
import logo from "./logo-Photoroom.png";

import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "@telegram-apps/telegram-ui";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";

export function Header() {
  const [tonConnectUI] = useTonConnectUI();
  const navigate = useNavigate();
  const location = useLocation();
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
      <nav aria-label="Global" className="w-full p-2 flex justify-between">
        <div className="h-full inline-flex items-center justify-center p-2">
          <a href="/" className="-m-1.5 p-1">
            <span className="sr-only">Chores</span>
            <img alt="" src={logo} className="h-12 w-12" />
          </a>
        </div>
        <div className="relative flex flex-col self-center justify-end items-center pt-4">
          <span>{user?.firstName + " " + user?.lastName}</span>

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
        <div className="relative h-full inline-flex items-end justify-center p-2">
          <button
            onClick={() => {
              location.pathname === "/settings"
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : navigate("/settings");
            }}
            className="-m-1.5 p-1 h-12 w-12 self-end"
          >
            <Cog6ToothIcon
              className={
                location.pathname === "/settings"
                  ? "text-[--tg-theme-accent-text-color] w-6 h-6"
                  : "w-6 h-6"
              }
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
