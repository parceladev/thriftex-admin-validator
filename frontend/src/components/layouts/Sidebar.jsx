import { NavLink, useLocation } from 'react-router-dom';
import routes from '../../routes';
import { useNavigate } from 'react-router-dom';
import { deleteToken } from '../../utils/token-utilities';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const baseLinkClasses =
    'flex items-center px-4 py-2 transition-colors duration-200 transform';
  const linkClasses = `${baseLinkClasses} text-black hover:bg-black hover:text-white`;
  const activeLinkClasses = `${baseLinkClasses} bg-black text-white`;

  const isValidator = location.pathname.includes('/validator-role');
  const basePath = isValidator ? '/validator-role' : '/admin-role';
  const sidebarType = isValidator ? 'sidebarValidator' : 'sidebarAdmin';

  const handleLogout = () => {
    deleteToken();
    navigate('/auth/sign-in');
  };

  return (
    <aside
      className="fixed h-screen p-5 border border-gray-200 bg-primary w-72"
      aria-label="Sidebar"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col h-full">
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

        <div className="px-4">
          <button onClick={handleLogout} className="flex w-full gap-3">
            <img
              src="../../../public/icons/sidebar/logout-icon.svg"
              alt="logout-icon"
            />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
