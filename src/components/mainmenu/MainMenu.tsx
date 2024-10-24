import { FC } from "react";
import { HomeIcon } from "../../common/icons/HomeIcon";
import { useTranslation } from "react-i18next";
import { ROUTE_PATIENTS } from "../../common/constants";
import { useNavigate } from "react-router-dom";

export const MainMenu: FC<{collapsed: boolean}> = ({collapsed}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const items = [
        {
            key: '1',
            icon: <HomeIcon />,
            label: t('menu'),
            children: [
                {
                    key: ROUTE_PATIENTS,
                    label: t('patients'),
                },
            ]
        },
    ]

    const onSelect = (selectedMenu: {key: string, selectedKeys: string[], keyPath: string[]}) => {
        navigate(selectedMenu.key)
    }
    return <div>Menyu</div>
}