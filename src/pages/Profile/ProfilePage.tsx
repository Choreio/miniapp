import { type FC } from "react";

import { Tabbar } from "@telegram-apps/telegram-ui";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="pb-12">
        <Outlet></Outlet>
      </div>
      <Tabbar>
        <TabbarItem
          text="Profile"
          selected={location.pathname === "/profile/info"}
          onClick={() => navigate("/profile/info")}
        ></TabbarItem>
        <TabbarItem
          text="Wallet"
          selected={location.pathname === "/profile/wallet"}
          onClick={() => navigate("/profile/wallet")}
        ></TabbarItem>
        <TabbarItem
          text="Settings"
          selected={location.pathname === "/profile/settings"}
          onClick={() => navigate("/profile/settings")}
        ></TabbarItem>
      </Tabbar>
    </div>
  );
};
