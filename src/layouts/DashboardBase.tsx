import { FC, useContext } from "react";
import { Outlet } from "react-router-dom";

import { withAuthorized } from "../features/auth/hocs";
import { UserMenu } from "../components/usermenu/UserMenu";
import { Languages } from "../components/languages/Languages";

export const DashboardBase: FC = withAuthorized(() => {
    return (
        <div className="flex items-stretch h-screen w-full">
            <div className="w-96 flex flex-col bg-gray-300">
                <div>
                    SDX Starter
                </div>
                <div className="flex-grow overflow-y-auto">
                    Navbar
                </div>
            </div>
            <div className="flex-grow">
                <div className="flex justify-end gap-2">
                    <Languages/>
                    <UserMenu/>
                </div>
                <Outlet />
            </div>
        </div>
    );
});