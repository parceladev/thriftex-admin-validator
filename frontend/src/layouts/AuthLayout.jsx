import { Routes, Route } from 'react-router-dom';
import routes from './../routes';

export function AuthLayout() {
  return (
    <div>
      <div>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === 'AuthLayout' &&
              pages.map(({ path, element }) => (
                <Route exact key={path} path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  );
}

AuthLayout.displayName = '/src/layouts/AuthLayout.jsx';

export default AuthLayout;
