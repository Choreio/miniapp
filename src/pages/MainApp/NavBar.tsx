import logo from "./logo-Photoroom.png";

import { useInitData } from "@telegram-apps/sdk-react";

export function NavBar() {
  const initData = useInitData();
  return (
    <header className="inset-x-0 top-0 z-49 border-solid border-white">
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
        <div className="flex md:flex-1 justify-end ">
          <h1>Welcome, @{initData?.user?.username}</h1>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
