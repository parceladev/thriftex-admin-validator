import {
  DashboardPage,
  LegitCheckPage,
  BrandsPage,
  ValidatorPage,
  SettingsPage,
} from './pages/dashboard';
import { SignInPage, SignUpPage } from './pages/auth';

export const routes = [
  {
    title: 'Pages',
    layout: 'DashboardLayout',
    pages: [
      {
        name: 'Dashboard Page',
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        name: 'Legit Check Page',
        path: '/legit-check',
        element: <LegitCheckPage />,
      },
      {
        name: 'Brands Page',
        path: '/brands',
        element: <BrandsPage />,
      },
      {
        name: 'Validator Page',
        path: '/validator',
        element: <ValidatorPage />,
      },
      {
        name: 'Settings Page',
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
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
      {
        name: 'Sign Up',
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
];

export default routes;
