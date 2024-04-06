import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/layouts';
import routes from '../routes';

export function DashboardLayout() {
  return (
    <section>
      <div className="flex w-full">
        <Sidebar routes={routes} />
        <div className="w-full h-auto ml-72">
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === 'DashboardLayout' &&
                pages.map(({ path, element }) => (
                  <Route exact key={path} path={path} element={element} />
                ))
            )}
          </Routes>
        </div>
      </div>
    </section>
  );
}

DashboardLayout.displayName = '/src/layouts/DashboardLayout.jsx';

export default DashboardLayout;
