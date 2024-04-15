import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../auths/tokenUtilities";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const location = useLocation();
  const profilePopupRef = useRef(null);
  const profileImageRef = useRef(null);
  const navigate = useNavigate();

  const role = location.pathname.includes("/admin")
    ? "Admin"
    : location.pathname.includes("/validator")
    ? "Validator"
    : "Unknown";

  // Fungsi ini digunakan untuk menangani klik di luar pop-up profil
  const handleClickOutside = (event) => {
    if (
      profilePopupRef.current &&
      !profilePopupRef.current.contains(event.target) &&
      !profileImageRef.current.contains(event.target)
    ) {
      setIsProfilePopupOpen(false);
    }
  };

  // Toggle untuk pop-up profil
  const toggleProfilePopup = () => {
    setIsProfilePopupOpen((prev) => !prev);
    // Langsung mengatur kelas animasi ketika memanggil toggle
    // setPopupClasses(
    //   isProfilePopupOpen ? "scale-95 opacity-0" : "scale-100 opacity-100"
    // );
  };

  // Effect to add/remove event listener
  useEffect(() => {
    // Menambahkan event listener ketika pop-up terbuka
    if (isProfilePopupOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    // Membersihkan event listener
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfilePopupOpen]);

  const handleLogout = () => {
    deleteToken();
    setIsProfilePopupOpen(false);
    navigate("/auth/sign-in");
  };

  return (
    <header className="flex flex-col w-full ">
      <div className="flex justify-between px-8 py-3 border bottom-1 ">
        <div>{/* Menu button here if necessary */}</div>
        <div className="flex items-center gap-4">
          <img
            src="/icons/header/notification-icon.svg"
            alt="Notification Icon"
          />
          <div
            ref={profileImageRef}
            className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 "
            onClick={toggleProfilePopup}
          >
            <img
              src="/icons/header/alif-lakipadada-profile.png"
              alt="Profile"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-8 py-3 shadow-md">
        <div>
          <p className="text-lg font-semibold">{role} (ROLE)</p>
        </div>
        {/* Other header items */}
      </div>

      {isProfilePopupOpen && (
        <div
          ref={profilePopupRef}
          className="absolute right-0 transform transition ease-in-out duration-300  mt-12 py-2 w-48 bg-white rounded-lg shadow-xl z-50 cursor-pointer"
        >
          <ul className="block text-gray-700">
            <li className="px-4 py-2 border-b hover:bg-gray-100">
              <a href="/admin-role/settings">Profile Setting</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 " onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
