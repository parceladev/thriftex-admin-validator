import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const baseLinkClasses =
    "flex items-center px-4 py-2 transition-colors duration-200 transform";
  const linkClasses = `${baseLinkClasses} text-black hover:bg-gray-700 hover:text-white`;
  const activeLinkClasses = `${baseLinkClasses} bg-gray-700 text-white`;

  return (
    <aside
      className="fixed h-screen p-5 border border-gray-200 bg-primary w-72"
      aria-label="Sidebar"
    >
      <div className="flex flex-col  h-full gap-10">
        <div>
          <div className="pl-2 mb-12">
            <img src="../../../public/generals/logo.png" alt="Logo" />
          </div>
          <p className="pl-5 text-black text-md">Menu Admin</p>
          <nav className="mt-2">
            <NavLink
              to="/pages/dashboard"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
              end
            >
              <div className="flex items-center gap-3">
                <img
                  src="../../../public/icons/sidebar/dashboard-icon.svg"
                  alt=""
                />
                <p>Dashboard</p>
              </div>
            </NavLink>
            <NavLink
              to="/pages/legit-check"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
              end
            >
              <div className="flex items-center gap-3">
                {/* <img src="../../../public/icons/sidebar/legit-check-icon.svg" alt="" /> */}
                <img
                  src="../../../public/icons/sidebar/legit-check-icon.svg"
                  alt=""
                />
                <p>Legit Checks</p>
              </div>
            </NavLink>
            <NavLink
              to="/pages/users"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              <div className="flex items-center gap-3">
                <img src="../../../public/icons/sidebar/user-icon.svg" alt="" />
                <p>Users</p>
              </div>
            </NavLink>
            <NavLink
              to="/pages/validators"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              <div className="flex items-center gap-3">
                <img
                  src="../../../public/icons/sidebar/validator-icon.svg"
                  alt=""
                />
                <p>Validators</p>
              </div>
            </NavLink>
            <NavLink
              to="/pages/brands"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              <div className="flex items-center gap-3">
                <img
                  src="../../../public/icons/sidebar/brand-icon.svg"
                  alt=""
                />
                <p>Brands</p>
              </div>
            </NavLink>
            <NavLink
              to="/pages/settings"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              <div className="flex items-center gap-3">
                <img
                  src="../../../public/icons/sidebar/settings-icon.svg"
                  alt=""
                />
                <p>Account Settings</p>
              </div>
            </NavLink>
          </nav>
        </div>
        <div>
          <p className="pl-5 text-black text-md">Menu Validator</p>
          <nav className="mt-2">
            <NavLink
              to="/pages/dashboard-validator"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : linkClasses
              }
            >
              <div className="flex items-center gap-3">
                <img
                  src="../../../public/icons/sidebar/settings-icon.svg"
                  alt=""
                />
                <p>Dashboard</p>
              </div>
            </NavLink>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
