import { Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/layouts';
import routes from '../routes';
import { useTheme } from '../ThemeContext';

export function DashboardLayout() {
  const location = useLocation();
  const { selectedTheme } = useTheme();
  const isValidator = location.pathname.includes('/validator-role');

  return (
    <section>
      <div
        className={`flex w-full min-h-screen ${
          selectedTheme === 'dark'
            ? 'bg-secondary border-gray-700 text-textWhite'
            : 'bg-primary border-gray-700 text-textBlack'
        }`}
      >
        <Sidebar />
        <div className="w-full h-auto ml-72">
          <Routes>
            {routes.map(({ layout, sidebarAdmin, sidebarValidator }) =>
              layout === 'DashboardLayout' &&
              (isValidator ? sidebarValidator : sidebarAdmin)
                ? (isValidator ? sidebarValidator : sidebarAdmin).map(
                    ({ path, element }) => (
                      <Route key={path} path={path} element={element} />
                    )
                  )
                : null
            )}
          </Routes>
        </div>
      </div>
    </section>
  );
}

DashboardLayout.displayName = '/src/layouts/DashboardLayout.jsx';

export default DashboardLayout;
