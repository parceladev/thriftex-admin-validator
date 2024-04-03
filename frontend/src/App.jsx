import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

function App() {
  return (
    <Routes>
      <Route path="/pages/*" element={<DashboardLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/pages/dashboard" replace />} />
    </Routes>
  );
}

export default App;
