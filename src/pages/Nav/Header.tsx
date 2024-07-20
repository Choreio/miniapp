import {
  useTonConnectUI,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";
import logo from "./logo-Photoroom.png";

import {
  ArrowRightEndOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { useInitData } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";

export function Header() {
  //const initData = useInitData();
  //const wallet = useTonWallet();
  const userFriendlyAddress = useTonAddress(); //|| "DebguValue";
  const wallet = useTonWallet();
  const initData = useInitData();
  const [tonConnectUI] = useTonConnectUI();
  const navigate = useNavigate();

  async function connectWallet() {
    await tonConnectUI.openModal();
  }

  async function disconnectWallet() {
    await tonConnectUI.disconnect();
  }

  return (
    <header className="inset-x-0 top-0 z-49 pb-2">
      <nav
        aria-label="Global"
        className="w-full flex items-center justify-between"
      >
        <div className="h-full inline-flex self-start items-start justify-end p-2">
          <a href="#" className="-m-1.5 p-1">
            <span className="sr-only">Chores</span>
            <img alt="" src={logo} className="h-6 w-6" />
          </a>
        </div>
        <div className="flex flex-col self-center justify-end items-center pt-4">
          {initData ? (
            <span>
              {initData.user?.firstName + " " + initData.user?.lastName}
            </span>
          ) : (
            <span>Unknown user</span>
          )}
          {userFriendlyAddress ? (
            <div className="inline-flex w-32 gap-1 bg-slate-600 rounded-lg p-2">
              <span className="self-center">
                {userFriendlyAddress.slice(0, 4) +
                  "..." +
                  userFriendlyAddress.slice(-5, -1)}
              </span>
              <ArrowRightEndOnRectangleIcon
                className="cursor-pointer h-6 self-end"
                onClick={disconnectWallet}
              />
            </div>
          ) : (
            <div className="inline-flex w-32 gap-1 bg-slate-600 rounded-lg p-1">
              <button className="self-center" onClick={connectWallet}>
                Connect wallet
              </button>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            navigate("/Settings");
          }}
          className="h-full inline-flex self-start items-start justify-end p-2"
        >
          <Cog6ToothIcon className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
