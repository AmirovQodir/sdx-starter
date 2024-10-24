import { Navigate, RouteObject } from "react-router-dom";
import {  ROUTE_DASHBOARD, ROUTE_HOME, ROUTE_LOGIN, ROUTE_PATIENTS } from "../common/constants";
import { DashboardBase } from "../layouts";
import { HomePage } from "../pages/home-page";
import { LoginForm } from "../features/auth/components/login-form/LoginForm";
import { Patients } from "../pages/patients";

export const routes = (pathname: string): RouteObject[] => {
    return [
        {
            path: ROUTE_HOME,
            caseSensitive: true,
            element: <HomePage/>,
            children: [
                {
                    path: ROUTE_LOGIN,
                    element: <LoginForm/>
                }
            ]
        },
        {
            path: ROUTE_DASHBOARD,
            element: <DashboardBase/>,
            caseSensitive: true,
            children: [
                {
                    path: ROUTE_DASHBOARD,
                    element: <Navigate to={`${ROUTE_DASHBOARD}/${ROUTE_PATIENTS}`} replace/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_PATIENTS}`,
                    element: <Patients/>
                },
            ]
        }
    ];
}