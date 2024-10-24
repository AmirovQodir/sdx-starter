import { FC } from "react";
import './styles.scss';
import { useNavigate } from "react-router-dom";

const data = [
    {
        key: '1',
        patient: {
            name: 'Борисова Ольга',
            age: 36
        },
        status: {
            status: "В процессе",
            status_date: "20 янв, 12:15"
        },
        application_data: {
            date: '10 января',
            year: 2023
        },
        living_place: {
            country: 'Узбекистан',
            city: 'Ташкент'
        },
        diagnosys: 'Птоз сахарные диабет, подагра, жировой геп',
        price: {
            value: 200000,
            currency: 'вон'
        },
        departure_arrival: {
            departure: '30 января, 2023 | 06:35',
            arrival: '31 января, 2023 | 14:35'
        },
        coordinator: 'Xan Anna',
        source: {
            branch: 'WOWVOS_Uzbekistan',
            agent: 'Сергей'
        }
    }
]

export const PatientsList: FC = () => {

    const navigate = useNavigate();

    const columns = [
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    const onSelectRow = (index: any, value: any) => {
        navigate(value.key)
    }

    return <div className="patients-list">
        List
    </div>
}
