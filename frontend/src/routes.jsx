import {
  DashboardPage,
  LegitCheckPage,
  UsersPage,
  BrandsPage,
  ValidatorPage,
  SettingsPage,
} from "./pages/admin";

import {
  faChartPie,
  faCheckDouble,
  faFileInvoice,
  faGear,
  faUserCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import {
  DashboardValidatorPage,
  LegitCheckValidatorPage,
  SettingsValidatorPage,
} from "./pages/validator";

import { SignInPage } from "./pages/auth";

export const routes = [
  {
    title: "Pages",
    layout: "DashboardLayout",
    sidebarAdmin: [
      {
        icon: faChartPie,
        name: "Dashboard",
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        icon: faCheckDouble,
        name: "Legit Check",
        path: "/legit-check",
        element: <LegitCheckPage />,
      },
      {
        icon: faUsers,
        name: "Users Manage",
        path: "/users",
        element: <UsersPage />,
      },
      {
        icon: faFileInvoice,
        name: "Brands Hub",
        path: "/brands",
        element: <BrandsPage />,
      },
      {
        icon: faUserCheck,
        name: "Validators",
        path: "/validators",
        element: <ValidatorPage />,
      },
      {
        icon: faGear,
        name: "Settings",
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
    sidebarValidator: [
      {
        icon: faChartPie,
        name: "Dashboard",
        path: "/dashboard",
        element: <DashboardValidatorPage />,
      },
      {
        icon: faCheckDouble,
        name: "Legit Check",
        path: "/legit-check",
        element: <LegitCheckValidatorPage />,
      },
      {
        icon: faGear,
        name: "Settings",
        path: "/settings",
        element: <SettingsValidatorPage />,
      },
    ],
    pagesRoleAdmin: [],
    pagesRoleValidator: [],
  },
  {
    title: "Auth Pages",
    layout: "AuthLayout",
    pages: [
      {
        name: "Sign In",
        path: "/sign-in",
        element: <SignInPage />,
      },
    ],
  },
];

export default routes;
