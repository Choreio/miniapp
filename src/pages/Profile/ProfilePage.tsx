import { type FC } from "react";

import { Tabbar } from "@telegram-apps/telegram-ui";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Cog8ToothIcon,
  UserCircleIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";

export const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="pb-24">
        <Outlet></Outlet>
      </div>
      <Tabbar style={{ height: "88px", paddingBottom: "24px" }}>
        <TabbarItem
          text="Profile"
          selected={location.pathname === "/profile/info"}
          onClick={() => navigate("/profile/info")}
        >
          <UserCircleIcon className="h-7 w-7"></UserCircleIcon>
        </TabbarItem>
        <TabbarItem
          text="Wallet"
          selected={location.pathname === "/profile/wallet"}
          onClick={() => navigate("/profile/wallet")}
        >
          <WalletIcon className="h-7 w-7"></WalletIcon>
        </TabbarItem>
        <TabbarItem
          text="Settings"
          selected={location.pathname === "/profile/settings"}
          onClick={() => navigate("/profile/settings")}
        >
          <Cog8ToothIcon className="h-7 w-7"></Cog8ToothIcon>
        </TabbarItem>
      </Tabbar>
    </div>
  );
};
