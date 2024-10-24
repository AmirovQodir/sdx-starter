import { FC } from "react";
import { useLogout } from "../../features/auth/hooks/useLogout";

export const UserMenu: FC = () => {
    const { handleLogout } = useLogout()
    const onClick = () => {
        handleLogout();
    }
    return (
        <div>
            <button onClick={onClick}>
                log out
            </button>
        </div>
    );
}