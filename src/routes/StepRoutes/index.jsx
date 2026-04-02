import React from "react";
import { useRoutes } from "react-router-dom";



import Step from "./Step";

export default function StepRoutes(props) {
  const routes = useRoutes([
    {
      path: "/",
    //   element: <Layout />,
      children: [
        { path: "/", element: <Step {...props} /> },
  
      ],
    },
  ]);

  return <div>{routes}</div>;
}
