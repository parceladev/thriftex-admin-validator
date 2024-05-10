import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const routeActive = location.pathname.includes('/admin-role/dashboard')
    ? 'Dashboard (Admin)'
    : location.pathname.includes('/admin-role/users')
    ? 'Users Management (Admin)'
    : location.pathname.includes('/admin-role/brands')
    ? 'Brands Management (Admin)'
    : location.pathname.includes('/admin-role/validators')
    ? 'Validators Management (Admin)'
    : location.pathname.includes('/admin-role/legit-check')
    ? 'Legit Check (Admin)'
    : location.pathname.includes('/admin-role/settings')
    ? 'Settings (Admin)'
    : location.pathname.includes('/validator-role/dashboard')
    ? 'Dashboard (Validator)'
    : location.pathname.includes('/validator-role/legit-check')
    ? 'Legit Check (Validator)'
    : location.pathname.includes('/validator-role/settings')
    ? 'Settings (Validator)'
    : 'Unknown';

  return (
    <header className="fixed z-[45] flex flex-col w-[calc(100%-18.5%)] bg-primary">
      <div className="flex justify-between px-8 py-5 border-b-2 border-gray-200">
        <div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.857117V3.71426H20V0.857117H0ZM0 6.5714V9.42854H20V6.5714H0ZM0 12.2857V15.1428H20V12.2857H0Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-4">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25062 13.2499C9.25074 13.6283 9.10781 13.9928 8.8505 14.2703C8.59318 14.5478 8.24048 14.7177 7.86312 14.7461L7.75062 14.7499H6.25062C5.87219 14.75 5.50769 14.6071 5.23021 14.3498C4.95272 14.0924 4.78275 13.7397 4.75437 13.3624L4.75062 13.2499H9.25062ZM7.00062 0.499878C8.36185 0.499855 9.66988 1.02855 10.6488 1.97443C11.6277 2.92032 12.2009 4.20944 12.2476 5.56988L12.2506 5.74988V8.57288L13.6171 11.3059C13.6768 11.4251 13.7066 11.5571 13.7041 11.6904C13.7016 11.8237 13.6668 11.9544 13.6028 12.0713C13.5387 12.1882 13.4472 12.2879 13.3362 12.3618C13.2252 12.4356 13.098 12.4815 12.9654 12.4954L12.8791 12.4999H1.12212C0.988742 12.4999 0.857344 12.4676 0.739184 12.4057C0.621025 12.3439 0.519628 12.2543 0.443682 12.1446C0.367735 12.035 0.319504 11.9086 0.303122 11.7762C0.28674 11.6438 0.302694 11.5095 0.349619 11.3846L0.384119 11.3059L1.75062 8.57288V5.74988C1.75062 4.35749 2.30374 3.02213 3.28831 2.03757C4.27287 1.053 5.60823 0.499878 7.00062 0.499878Z"
              fill="currentColor"
            />
          </svg>
          <div className="relative w-6 h-full rounded-full bg-slate-200">
            <img
              src="../../../public/icons/header/alif-lakipadada-profile.png"
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-8 py-3 border-b-2 border-gray-200 shadow-md">
        <div>
          <p>{routeActive}</p>
        </div>
        <div className="flex gap-6">
          <div className="flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C10.7613 21 9.59467 20.7633 8.5 20.29C7.40533 19.8167 6.452 19.1733 5.64 18.36C4.82667 17.5487 4.18333 16.5953 3.71 15.5C3.23667 14.4053 3 13.2387 3 12C3 10.758 3.23667 9.59033 3.71 8.497C4.184 7.40367 4.82733 6.451 5.64 5.639C6.45133 4.827 7.40467 4.18433 8.5 3.711C9.59467 3.237 10.7613 3 12 3C13.242 3 14.4097 3.23667 15.503 3.71C16.5963 4.184 17.549 4.82733 18.361 5.64C19.173 6.452 19.8157 7.40433 20.289 8.497C20.763 9.59033 21 10.758 21 12C21 13.2387 20.7633 14.4053 20.29 15.5C19.8167 16.5947 19.1733 17.548 18.36 18.36C17.548 19.1727 16.5957 19.816 15.503 20.29C14.4097 20.7633 13.242 21 12 21ZM12 20.008C12.5867 19.254 13.0707 18.5137 13.452 17.787C13.8327 17.0603 14.1423 16.247 14.381 15.347H9.619C9.883 16.2977 10.199 17.1363 10.567 17.863C10.935 18.5897 11.4127 19.3047 12 20.008ZM10.727 19.858C10.2603 19.308 9.83433 18.628 9.449 17.818C9.06367 17.0087 8.777 16.1847 8.589 15.346H4.753C5.32633 16.59 6.13867 17.61 7.19 18.406C8.242 19.202 9.42067 19.686 10.726 19.858M13.272 19.858C14.5773 19.686 15.756 19.202 16.808 18.406C17.86 17.61 18.6723 16.59 19.245 15.346H15.411C15.1577 16.1973 14.8387 17.028 14.454 17.838C14.0687 18.6473 13.6747 19.3207 13.272 19.858ZM4.345 14.346H8.38C8.304 13.936 8.25067 13.5363 8.22 13.147C8.188 12.7577 8.172 12.3753 8.172 12C8.172 11.6247 8.18767 11.2423 8.219 10.853C8.25033 10.4637 8.30367 10.0637 8.379 9.653H4.347C4.23833 9.99967 4.15333 10.3773 4.092 10.786C4.03067 11.1947 4 11.5993 4 12C4 12.4013 4.03033 12.806 4.091 13.214C4.15233 13.6227 4.23733 14 4.346 14.346M9.381 14.346H14.619C14.695 13.936 14.7483 13.5427 14.779 13.166C14.811 12.79 14.827 12.4013 14.827 12C14.827 11.5987 14.8113 11.21 14.78 10.834C14.7487 10.4573 14.6953 10.064 14.62 9.654H9.38C9.30467 10.064 9.25133 10.4573 9.22 10.834C9.18867 11.21 9.173 11.5987 9.173 12C9.173 12.4013 9.18867 12.79 9.22 13.166C9.25133 13.5427 9.30567 13.936 9.381 14.346ZM15.62 14.346H19.654C19.7627 13.9993 19.8477 13.622 19.909 13.214C19.9703 12.806 20.0007 12.4013 20 12C20 11.5987 19.9697 11.194 19.909 10.786C19.8477 10.3773 19.7627 10 19.654 9.654H15.619C15.695 10.064 15.7483 10.4637 15.779 10.853C15.811 11.2423 15.827 11.6247 15.827 12C15.827 12.3753 15.8113 12.7577 15.78 13.147C15.7487 13.5363 15.6953 13.9363 15.62 14.347M15.412 8.654H19.246C18.66 7.38467 17.8573 6.36467 16.838 5.594C15.818 4.82333 14.6297 4.33333 13.273 4.124C13.7397 4.73733 14.1593 5.43933 14.532 6.23C14.904 7.02 15.1973 7.828 15.412 8.654ZM9.619 8.654H14.381C14.117 7.71533 13.7913 6.86667 13.404 6.108C13.0173 5.34867 12.5493 4.64333 12 3.992C11.4513 4.64333 10.9833 5.34867 10.596 6.108C10.2093 6.86667 9.88367 7.71533 9.619 8.654ZM4.754 8.654H8.588C8.80267 7.828 9.096 7.02 9.468 6.23C9.84067 5.43933 10.2603 4.737 10.727 4.123C9.35767 4.333 8.16633 4.82633 7.153 5.603C6.13967 6.38033 5.33967 7.397 4.753 8.653"
                fill="currentColor"
              />
            </svg>
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
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.31465 9.00636C4.29759 10.6106 4.56193 11.4862 5.05407 11.987C5.545 12.4867 6.40875 12.7617 8.0004 12.7617C9.5918 12.7617 10.4459 12.4868 10.9323 11.9884C11.4227 11.4861 11.6861 10.6082 11.6861 8.99998C11.6861 7.3918 11.4227 6.5139 10.9323 6.01151C10.4459 5.5132 9.5918 5.23826 8.0004 5.23826C6.40926 5.23826 5.56487 5.51313 5.0829 6.0101C4.59418 6.51403 4.3318 7.3942 4.31465 9.00636Z"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 1.91223V3.00266"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M8 14.9974V16.0878"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M14.9639 9L13.8924 9"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M2.10742 9L1.03599 9"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M2.64258 3.54785L3.40019 4.3189"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M2.64258 14.6779L3.40019 13.9069"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M13.5791 3.54785L12.8215 4.3189"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M13.5791 14.6779L12.8215 13.9069"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              />
            </svg>

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
