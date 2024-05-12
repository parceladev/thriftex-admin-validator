import { NavLink, useLocation } from 'react-router-dom';
import routes from '../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { deleteToken } from '../../utils/token-utilities';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const baseLinkClasses =
    'flex items-center py-3 px-3 transition-colors duration-200 transform rounded-md';
  const linkClasses = `${baseLinkClasses} w-full hover:bg-secondary dark:hover:bg-darkButton hover:text-textWhite dark:hover:text-textWhite`;
  const activeLinkClasses = `${baseLinkClasses} w-full bg-secondary dark:bg-darkButton text-textWhite dark:text-textWhite`;

  const isValidator = location.pathname.includes('/validator-role');
  const basePath = isValidator ? '/validator-role' : '/admin-role';
  const sidebarType = isValidator ? 'sidebarValidator' : 'sidebarAdmin';

  const handleLogout = () => {
    deleteToken();
    navigate('/auth/sign-in');
  };

  return (
    <aside
      className="fixed h-screen p-5 border border-l-0 shadow-md w-72 border-y-0 dark:border-darkBorder"
      aria-label="Sidebar"
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col w-full">
          <div className="p-5 mb-12">
            <img src="../../../public/generals/thriftex-logo.jpg" alt="Logo" />
          </div>
          <p className="pl-3 text-md text-sans">
            {isValidator ? 'Menu Validator' : 'Menu Admin'}
          </p>
          {routes &&
            routes.map(
              (route, key) =>
                route[sidebarType] && (
                  <nav
                    key={key}
                    className="flex w-full flex-col gap-[1px] mt-4"
                  >
                    {route[sidebarType].map((item) => (
                      <NavLink
                        key={item.name}
                        to={`${basePath}${item.path}`}
                        className={({ isActive }) =>
                          isActive ? activeLinkClasses : linkClasses
                        }
                        end
                      >
                        <div className="flex items-center gap-3">
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="w-6 h-6"
                          />
                          <p className="text-sans text-md text-bold">
                            {t(item.name)}
                          </p>
                        </div>
                      </NavLink>
                    ))}
                  </nav>
                )
            )}
        </div>

        <div className="flex h-full px-3">
          <button
            onClick={handleLogout}
            className="flex self-end w-full gap-3 px-2 py-3 rounded-md hover:text-textWhite hover:bg-darkButton"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z"
                fill="currentColor"
              />
              <path
                d="M20.65 11.65L17.86 8.86C17.7905 8.78855 17.7012 8.73948 17.6036 8.71907C17.506 8.69866 17.4045 8.70783 17.3121 8.74542C17.2198 8.783 17.1408 8.84729 17.0851 8.93005C17.0295 9.01282 16.9999 9.11029 17 9.21V11H10C9.45 11 9 11.45 9 12C9 12.55 9.45 13 10 13H17V14.79C17 15.24 17.54 15.46 17.85 15.14L20.64 12.35C20.84 12.16 20.84 11.84 20.65 11.65Z"
                fill="currentColor"
              />
            </svg>

            <span>{t('Log Out')}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
