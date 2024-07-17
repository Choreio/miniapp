import { useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";
import logo from "./logo-Photoroom.png";
//import { Avatar, Title } from "@telegram-apps/telegram-ui";

//import { useInitData } from "@telegram-apps/sdk-react";

export function NavBar() {
  //const initData = useInitData();
  //const wallet = useTonWallet();
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();

  async function connectWallet() {
    await tonConnectUI.openModal();
  }

  return (
    <header className="inset-x-0 top-0 z-49 border bg-slate-500 ">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 "
      >
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Chores</span>
            <img alt="" src={logo} className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex md:flex-1 justify-end items-center">
          {
            //  <h1 className="p-2 w-4/12 overflow-hidden overflow-ellipsis">
            //    @{initData?.user?.username}
            //  </h1>
          }
          {userFriendlyAddress ? (
            <span>{userFriendlyAddress}</span>
          ) : (
            <button onClick={connectWallet}>Connect wallet</button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
