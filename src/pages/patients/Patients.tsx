import { FC, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ContentHeaderContext, IContentHeader } from "../../common/contexts";

export const Patients: FC = () => {
    const { setLabel } = useContext(ContentHeaderContext) as IContentHeader;
    const { t } = useTranslation()
    
    useEffect(() => {
        setLabel(t('patients'))
    }, [])

    return <div>
        <div>Content header</div>
        <div>List view</div>
    </div>
}