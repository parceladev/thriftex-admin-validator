import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route
        path="/admin-role/*"
        element={<PrivateRoute element={<DashboardLayout />} />}
      />
      <Route
        path="/validator-role/*"
        element={<PrivateRoute element={<DashboardLayout />} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
