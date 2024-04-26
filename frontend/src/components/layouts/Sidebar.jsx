import { NavLink, useLocation } from 'react-router-dom';
import routes from '../../routes';

const Sidebar = () => {
  const location = useLocation();

  const baseLinkClasses =
    'flex items-center px-4 py-2 transition-colors duration-200 transform';
  const linkClasses = `${baseLinkClasses} text-black hover:bg-gray-700 hover:text-white`;
  const activeLinkClasses = `${baseLinkClasses} bg-gray-700 text-white`;

  const isValidator = location.pathname.includes('/validator-role');
  const basePath = isValidator ? '/validator-role' : '/admin-role';
  const sidebarType = isValidator ? 'sidebarValidator' : 'sidebarAdmin';

  return (
    <aside
      className="fixed h-screen p-5 border border-gray-200 bg-primary w-72"
      aria-label="Sidebar"
    >
      <div className="flex flex-col h-full gap-10">
        <div>
          <div className="pl-2 mb-12">
            <img src="../../../public/generals/logo.png" alt="Logo" />
          </div>
          <p className="pl-5 text-black text-md">
            {isValidator ? 'Menu Validator' : 'Menu Admin'}
          </p>
          {routes &&
            routes.map(
              (route, key) =>
                route[sidebarType] && (
                  <nav key={key} className="mt-2">
                    {route[sidebarType].map(({ icon, name, path }) => (
                      <NavLink
                        key={name}
                        to={`${basePath}${path}`}
                        className={({ isActive }) =>
                          isActive ? activeLinkClasses : linkClasses
                        }
                        end
                      >
                        <div className="flex items-center gap-3">
                          <img src={icon} className="w-5 h-5" alt={name} />
                          <p>{name}</p>
                        </div>
                      </NavLink>
                    ))}
                  </nav>
                )
            )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
