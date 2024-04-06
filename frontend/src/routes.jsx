import {
  DashboardPage,
  LegitCheckPage,
  UsersPage,
  BrandsPage,
  ValidatorPage,
  DetailValidatorPage,
  AddNewValidatorPage,
  SettingsPage,
} from './pages/dashboard';
import { SignInPage } from './pages/auth';

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
        path: '/users',
        element: <UsersPage />,
      },
      {
        name: 'Brands Page',
        path: '/brands',
        element: <BrandsPage />,
      },
      {
        name: 'Validator Page',
        path: '/validators',
        element: <ValidatorPage />,
      },
      {
        name: 'Validator Page',
        path: '/validators/detail/1',
        element: <DetailValidatorPage />,
      },
      {
        name: 'Validator Page',
        path: '/validator/detail/2',
        element: <DetailValidatorPage />,
      },
      {
        name: 'Validator Page',
        path: '/validator/detail/3',
        element: <DetailValidatorPage />,
      },
      {
        name: 'Validator Page',
        path: '/validator/add-new-validator',
        element: <AddNewValidatorPage />,
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
    ],
  },
];

export default routes;
