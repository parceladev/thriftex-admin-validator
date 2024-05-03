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
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white pb-4 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 w-full sm:text-left">
                <div className="w-full flex justify-between border-b p-3">
                  <h3
                    className="text-xl px-6 py-1 leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Add Validator
                  </h3>
                  <button
                    onClick={onClose}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    <IoCloseSharp />
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <div className="flex flex-wrap w-full sm:items-center p-6">
                      <label
                        htmlFor="full-name"
                        className="block w-full text-md font-medium text-gray-700"
                      >
                        Full name
                        <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="mt-1 w-full">
                        <input
                          id="full-name"
                          name="full-name"
                          type="text"
                          autoComplete="name"
                          required
                          className="appearance-none block w-full px-3 py-2 border-b-2 border-gray-600 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-600 focus:border-gray-500 sm:text-sm"
                          placeholder="Enter full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full sm:items-center p-6">
                      <label
                        htmlFor="email"
                        className="block w-full text-md font-medium text-gray-700"
                      >
                        Email <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="mt-1 w-full">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none block w-full px-3 py-2 border-b-2 border-gray-600 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-600 focus:border-gray-500 sm:text-sm"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full sm:items-center p-6">
                      <label
                        htmlFor="password"
                        className="block w-full text-md font-medium text-gray-700"
                      >
                        Password{" "}
                        <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="mt-1 relative w-full">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border-b-2 border-gray-600 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-600 focus:border-gray-500 sm:text-sm"
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
                              className="h-5 w-5 text-gray-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <BsFillEyeFill
                              className="h-5 w-5 text-gray-500"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full sm:items-center p-6">
                      <label
                        htmlFor="confirm-password"
                        className="block w-full text-md font-medium text-gray-700"
                      >
                        Confirm Password
                        <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="mt-1 relative w-full">
                        <input
                          id="confirm-password"
                          name="confirm-password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-confirm-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border-b-2 border-gray-600 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-600 focus:border-gray-500 sm:text-sm"
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
                              className="h-5 w-5 text-gray-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <BsFillEyeFill
                              className="h-5 w-5 text-gray-500"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full sm:items-center p-6">
                      <label
                        htmlFor="brand"
                        className="block w-full text-md font-medium text-gray-700"
                      >
                        Brand <span className="text-gray-300">(Required)</span>
                      </label>
                      <div className="mt-1 w-full">
                        <select
                          id="brand"
                          name="brand"
                          required
                          className="block w-full pl-3 pr-10 py-2 text-base border-b-2 border-gray-600 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="py-3 w-full mb-3 text-center text-white bg-black dark:bg-gray-300 dark:text-black flex justify-center items-center"
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
