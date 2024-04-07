import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const role = location.pathname.includes('/admin')
    ? 'Admin'
    : location.pathname.includes('/validator')
    ? 'Validator'
    : 'Unknown';

  return (
    <header className="flex flex-col w-full">
      <div className="flex justify-between px-8 py-5 border-b-2 border-gray-200">
        <div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src="../../../public/icons/header/menu-bar-icon.svg" alt="" />
          </button>
        </div>
        <div className="flex gap-4">
          <img
            src="../../../public/icons/header/notification-icon.svg"
            alt="profile-image"
          />
          <div className="w-6 h-full rounded-full bg-slate-200">
            <img
              src="../../../public/icons/header/alif-lakipadada-profile.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-8 py-3 border-b-2 border-gray-200 shadow-md">
        <div>
          <p>{role} (ROLE)</p>
        </div>
        <div className="flex gap-6">
          <div className="flex">
            <img
              src="../../../public/icons/header/language-icon.svg"
              alt=""
              className="w-6 h-6"
            />
            <select
              name="languages"
              id="language-select"
              className="cursor-pointer"
            >
              <option value="EN">EN</option>
              <option value="ID">ID</option>
            </select>
          </div>
          <div className="flex">
            <img
              src="../../../public/icons/header/light-mode-icon.svg"
              alt=""
            />
            <select name="themes" id="theme-select" className="cursor-pointer">
              <option value="LIGHT">LIGHT</option>
              <option value="DARK">DARK</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
