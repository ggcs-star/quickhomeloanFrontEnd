import React, { useEffect } from "react";
import { useRoutes, Navigate, useLocation } from "react-router-dom";

import MainRoutes from "./MainRoutes";
import OtherRoutes from "./OtherRoutes";
import DashboardRoutes from "./DashboardRoutes";
import StepRoutes from "./StepRoutes";

import { generateFCMToken } from "../firebase";
import { saveFCMTokenToBackend } from "../api";

export default function Routes(props) {

    function RequireAuth({ children }) {
        const location = useLocation();
        const isAuth = localStorage.getItem("isAuthenticated") === "true";
        const userId = localStorage.getItem("user_id");

        useEffect(() => {
            if (isAuth && userId) {
                generateFCMForLoggedInUser();
            }
        }, [isAuth, userId]);

        const generateFCMForLoggedInUser = async () => {
            try {
                const token = await generateFCMToken();
                if (token) {
                    await saveFCMTokenToBackend(userId, token);
                }
            } catch (err) {
                console.error("Error saving FCM token:", err);
            }
        };

        if (!isAuth) {
            return <Navigate to="/login" replace state={{ from: location }} />;
        }
        return children;
    }

    const routes = useRoutes([
        {
            path: "/*",
            element: (
                <>
                    <MainRoutes {...props} />
                    <OtherRoutes {...props} />
                </>
            ),
        },
        // {
        //     path: "/dashboard/*",
        //     element: (
        //         <RequireAuth>
        //             <DashboardRoutes />
        //         </RequireAuth>
        //     ),
        // },



        // uncomment
        // {
        //     path: "/apply-now/*",
        //     element: (
        //         <RequireAuth>
        //             <StepRoutes />
        //         </RequireAuth>
        //     ),
        // },
    ]);

    return <main>{routes}</main>;
}
