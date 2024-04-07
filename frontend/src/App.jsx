import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/admin-role/*" element={<DashboardLayout />} />
      <Route path="/validator-role/*" element={<DashboardLayout />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;
