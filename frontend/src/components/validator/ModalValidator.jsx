import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { fetchAddValidator } from "../../utils/auth-api-service";
import { fetchBrands } from "../../utils/brand-api-service";

const ModalValidator = ({ isOpen, onClose, onCreateAccount }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const result = await fetchBrands(1, 100); 
        if (result && result.data && result.data.data) {
          setBrands(result.data.data)
        }
      } catch (error) {
        console.error("Failed to load brands:", error);
      }
    };

    if (isOpen) {
      loadBrands();
    }
  }, [isOpen]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const userData = {
      nama: name,
      email: email,
      password: password,
      passconf: confirmPassword,
      role: "validator",
      brandname: selectedBrand,
    };

    fetchAddValidator(
      userData,
      (data) => {
        console.log("Registration Successful", data);
        navigate("/auth/sign-in");
      },
      (message) => {
        console.log("Registration Failed:", message);
      }
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="pb-4 bg-white sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                <div className="flex justify-between w-full p-3 border-b">
                  <h3
                    className="px-6 py-1 text-xl font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Add Validator
                  </h3>
                  <button
                    onClick={onClose}
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    <IoCloseSharp />
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <div className="flex flex-wrap w-full p-6 sm:items-center">
                      <label
                        htmlFor="full-name"
                        className="block w-full font-medium text-gray-700 text-md"
                      >
                        Full name
                        <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="w-full mt-1">
                        <input
                          id="full-name"
                          name="full-name"
                          type="text"
                          autoComplete="name"
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border-b-2 border-gray-600 shadow-sm appearance-none focus:outline-none focus:ring-gray-600 focus:border-gray-500 sm:text-sm"
                          placeholder="Enter full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full p-6 sm:items-center">
                      <label
                        htmlFor="email"
                        className="block w-full font-medium text-gray-700 text-md"
                      >
                        Email <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="w-full mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border-b-2 border-gray-600 shadow-sm appearance-none focus:outline-none focus:ring-gray-600 focus:border-gray-500 sm:text-sm"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full p-6 sm:items-center">
                      <label
                        htmlFor="password"
                        className="block w-full font-medium text-gray-700 text-md"
                      >
                        Password{" "}
                        <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="relative w-full mt-1">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border-b-2 border-gray-600 shadow-sm appearance-none focus:outline-none focus:ring-gray-600 focus:border-gray-500 sm:text-sm"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 px-4 py-2 focus:outline-none"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <BsFillEyeSlashFill
                              className="w-5 h-5 text-gray-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <BsFillEyeFill
                              className="w-5 h-5 text-gray-500"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full p-6 sm:items-center">
                      <label
                        htmlFor="confirm-password"
                        className="block w-full font-medium text-gray-700 text-md"
                      >
                        Confirm Password
                        <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="relative w-full mt-1">
                        <input
                          id="confirm-password"
                          name="confirm-password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-confirm-password"
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border-b-2 border-gray-600 shadow-sm appearance-none focus:outline-none focus:ring-gray-600 focus:border-gray-500 sm:text-sm"
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 px-4 py-2 focus:outline-none"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <BsFillEyeSlashFill
                              className="w-5 h-5 text-gray-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <BsFillEyeFill
                              className="w-5 h-5 text-gray-500"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full p-6 sm:items-center">
                      <label
                        htmlFor="brand"
                        className="block w-full font-medium text-gray-700 text-md"
                      >
                        Brand <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="w-full mt-1">
                        <select
                          id="brand"
                          name="brand"
                          required
                          className="block w-full py-2 pl-3 pr-10 text-base border-b-2 border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          // value={brand}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                        >
                          <option value="">Select a brand</option>
                          {brands.map((brand) => (
                            <option key={brand.id} value={brand.brand_name}>
                              {brand.brand_name}
                            </option>
                          ))}
                          {/* Dan seterusnya... */}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full py-3 mb-3 text-center text-white bg-black dark:bg-gray-300 dark:text-black"
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalValidator;
