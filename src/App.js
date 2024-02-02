// src/App.js
import React, { useEffect } from "react";
import Home, { Head } from "./home";
import { Helmet } from "react-helmet";
import Page1 from "./page1";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page2 from "./page2";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page1 />,
    },
    {
      path: "/page2",
      element: <Page2 />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
