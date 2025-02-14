import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import { Children } from "react";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutPage /> },
    ],
  },
]);

export default AppRouter;
