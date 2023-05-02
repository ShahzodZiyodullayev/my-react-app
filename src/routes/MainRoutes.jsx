import { lazy } from "react";

import MainLayout from "../layouts/MainLayout";
import Loadable from "../components/Loadable";

const Current = Loadable(lazy(() => import("../pages/Current")));
const Hourly = Loadable(lazy(() => import("../pages/Hourly")));
const Daily = Loadable(lazy(() => import("../pages/Daily")));

const MainRoutes = [
  {
    path: "/hi",
    element: <Current />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Current />,
      },
      {
        path: "/hourly",
        element: <Hourly />,
      },
      {
        path: "/daily",
        element: <Daily />,
      },
    ],
  },
];

export default MainRoutes;
