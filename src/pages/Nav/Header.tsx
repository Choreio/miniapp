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
import { Avatar } from "@telegram-apps/telegram-ui";

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
    <header className="inset-x-0 top-0 z-49 border bg-slate-500 ">
      <nav aria-label="Global" className="flex items-center justify-between">
        <div className="flex p-6  ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Chores</span>
            <img alt="" src={logo} className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex justify-end items-center">
          {wallet?.photoURL ? (
            <Avatar src={wallet?.photoURL} />
          ) : (
            <Avatar acronym="??" />
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
            <div className="inline-flex w-32 gap-1 bg-slate-600 rounded-lg p-2">
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
          className="h-full inline-flex items-start justify-end p-2"
        >
          <Cog6ToothIcon className="w-12 h-12" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
