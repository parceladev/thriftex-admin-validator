import {
  DashboardPage,
  LegitCheckPage,
  UsersPage,
  BrandsPage,
  ValidatorPage,
  DetailValidatorPage,
  AddNewValidatorPage,
  SettingsPage,
} from "./pages/dashboard";

import {
  legitCheckIcon,
  brandIcon,
  dashboardIcon,
  settingsIcon,
  userIcon,
  validatorIcon,
} from "../public/icons/sidebar";

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
    pagesadmin: [
      // Role Admin
      {
        icon: dashboardIcon,
        name: "Dashboard Page",
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        icon: legitCheckIcon,
        name: "Legit Check Page",
        path: "/legit-check",
        element: <LegitCheckPage />,
      },
      {
        icon: userIcon,
        name: "Users Page",
        path: "/users",
        element: <UsersPage />,
      },
      {
        icon: brandIcon,
        name: "Brands Page",
        path: "/brands",
        element: <BrandsPage />,
      },
      {
        icon: validatorIcon,
        name: "Validator Page",
        path: "/validators",
        element: <ValidatorPage />,
      },
      {
        name: "Detail Validator Page",
        path: "/validators/detail/1",
        element: <DetailValidatorPage />,
      },
      {
        name: "Add New Validator Page",
        path: "/validator/add-new-validator",
        element: <AddNewValidatorPage />,
      },
      {
        icon: settingsIcon,
        name: "Settings Page",
        path: "/settings",
        element: <SettingsPage />,
      },

      // Role Validator
    ],
    pagesvalidator: [
      {
        name: "Dashboard Validator Page",
        path: "/dashboard-validator",
        element: <DashboardValidatorPage />,
      },
      {
        name: "Legit Check Validator Page",
        path: "/legit-check-validator",
        element: <LegitCheckValidatorPage />,
      },
      {
        name: "Settings Validator Page",
        path: "/settings-validator",
        element: <SettingsValidatorPage />,
      },
    ],
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
