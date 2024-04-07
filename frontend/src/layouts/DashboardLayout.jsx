import { Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/layouts';
import routes from '../routes';

export function DashboardLayout() {
  const location = useLocation();
  const isValidator = location.pathname.includes('/validator');

  return (
    <section>
      <div className="flex w-full">
        <Sidebar />{' '}
        {/* Hapus prop `routes` jika tidak diperlukan oleh Sidebar */}
        <div className="w-full h-auto ml-72">
          <Routes>
            {routes.map(
              ({ layout, sidebarAdmin, sidebarValidator }) =>
                layout === 'DashboardLayout' &&
                (isValidator ? sidebarValidator : sidebarAdmin) // Memilih sidebar berdasarkan role
                  ? (isValidator ? sidebarValidator : sidebarAdmin).map(
                      ({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                      )
                    )
                  : null // Tambahkan kondisi null untuk menghindari error
            )}
          </Routes>
        </div>
      </div>
    </section>
  );
}

DashboardLayout.displayName = '/src/layouts/DashboardLayout.jsx';

export default DashboardLayout;
