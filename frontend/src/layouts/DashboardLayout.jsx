import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/layouts';
import routes from '../routes';

export function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar routes={routes} />
      <div className="p-8">
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
  );
}

DashboardLayout.displayName = '/src/layouts/DashboardLayout.jsx';

export default DashboardLayout;
