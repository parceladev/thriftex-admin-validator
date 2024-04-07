import {
  DashboardPage,
  LegitCheckPage,
  UsersPage,
  BrandsPage,
  ValidatorPage,
  SettingsPage,
} from './pages/admin';

import {
  legitCheckIcon,
  brandIcon,
  dashboardIcon,
  settingsIcon,
  userIcon,
  validatorIcon,
} from '../public/icons/sidebar';

import {
  DashboardValidatorPage,
  LegitCheckValidatorPage,
  SettingsValidatorPage,
} from './pages/validator';

import { SignInPage } from './pages/auth';

export const routes = [
  {
    title: 'Pages',
    layout: 'DashboardLayout',
    sidebarAdmin: [
      {
        icon: dashboardIcon,
        name: 'Dashboard',
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        icon: legitCheckIcon,
        name: 'Legit Check',
        path: '/legit-check',
        element: <LegitCheckPage />,
      },
      {
        icon: userIcon,
        name: 'Users',
        path: '/users',
        element: <UsersPage />,
      },
      {
        icon: brandIcon,
        name: 'Brands',
        path: '/brands',
        element: <BrandsPage />,
      },
      {
        icon: validatorIcon,
        name: 'Validator',
        path: '/validators',
        element: <ValidatorPage />,
      },
      {
        icon: settingsIcon,
        name: 'Settings',
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
    sidebarValidator: [
      {
        icon: dashboardIcon,
        name: 'Dashboard',
        path: '/dashboard',
        element: <DashboardValidatorPage />,
      },
      {
        icon: legitCheckIcon,
        name: 'Legit Check',
        path: '/legit-check',
        element: <LegitCheckValidatorPage />,
      },
      {
        icon: settingsIcon,
        name: 'Settings',
        path: '/settings',
        element: <SettingsValidatorPage />,
      },
    ],
    pagesRoleAdmin: [],
    pagesRoleValidator: [],
  },
  {
    title: 'Auth Pages',
    layout: 'AuthLayout',
    pages: [
      {
        name: 'Sign In',
        path: '/sign-in',
        element: <SignInPage />,
      },
    ],
  },
];

export default routes;
