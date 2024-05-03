import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const location = useLocation();

  const baseLinkClasses =
    "flex items-center py-4 px-3 transition-colors duration-200 transform max-w-[200px] rounded-md";
  const linkClasses = `${baseLinkClasses} text-secondary hover:bg-secondary hover:text-white`;
  const activeLinkClasses = `${baseLinkClasses} bg-secondary text-white`;

  const isValidator = location.pathname.includes("/validator-role");
  const basePath = isValidator ? "/validator-role" : "/admin-role";
  const sidebarType = isValidator ? "sidebarValidator" : "sidebarAdmin";

  return (
    <aside
      className="fixed h-screen p-5 border border-gray-200 bg-primary w-72"
      aria-label="Sidebar"
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col">
          <div className="pl-2 mb-12">
            <img src="../../../public/generals/logo.png" alt="Logo" />
          </div>
          <p className="pl-5 text-black text-md text-sans text-[15px]">
            {isValidator ? "Menu Validator" : "Menu Admin"}
          </p>
          {routes &&
            routes.map(
              (route, key) =>
                route[sidebarType] && (
                  <nav key={key} className="flex flex-col gap-2 mt-2">
                    {route[sidebarType].map((item) => (
                      <NavLink
                        key={item.name}
                        to={`${basePath}${item.path}`}
                        className={linkClasses}
                        activeClassName={activeLinkClasses} // Gunakan activeClassName untuk menentukan kelas untuk tautan aktif
                        end
                      >
                        <div className="flex items-center gap-3">
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="w-6 h-6"
                          />
                          <p className="text-sans text-[15px] text-bold">{item.name}</p>
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
