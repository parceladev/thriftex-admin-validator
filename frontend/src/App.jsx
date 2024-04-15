// App.js
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import NotFoundPage from "./pages/NotFoundPage";
import { ProtectedRoute } from "./components/auths/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route
        path="/admin-role/*"
        element={<ProtectedRoute element={<DashboardLayout />} />}
      />
      <Route
        path="/validator-role/*"
        element={<ProtectedRoute element={<DashboardLayout />} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
