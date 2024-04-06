import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <p>Admin/Validator (ROLE)</p>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-center gap-2">
            <img src="../../../public/icons/header/language-icon.svg" alt="" />
            <p>EN</p>
            <img src="../../../public/icons/header/down-icon.svg" alt="" />
          </div>
          <div className="flex gap-2">
            <img
              src="../../../public/icons/header/light-mode-icon.svg"
              alt=""
            />
            <p>LIGHT</p>
            <img src="../../../public/icons/header/down-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
