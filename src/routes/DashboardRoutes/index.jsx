import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";

import Leads from "./Dashboard/components/Leads";
import Automation from "./Dashboard/components/Automation";
import Reports from "./Dashboard/components/Reports";

export default function DashboardRoutes(props) {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard {...props} /> },
        { path: "leads", element: <Leads {...props} /> },
        { path: "automation", element: <Automation {...props} /> },
        { path: "reports", element: <Reports {...props} /> },
      ],
    },
  ]);

  return <div>{routes}</div>;
}
