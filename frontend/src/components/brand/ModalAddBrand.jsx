import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { createBrand } from "../../utils/brand-api-service";
import { useNavigate } from "react-router-dom";

const ModalAddBrand = ({ isOpen, onClose }) => {
  const [brandName, setBrandName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && /^image\/(svg\+xml|png|jpeg)$/.test(file.type)) {
      setSelectedFile(file);
    } else {
      alert("Hanya file SVG, PNG, dan JPG yang diizinkan.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!brandName || !selectedFile) {
      alert("Harap isi semua bidang yang diperlukan.");
      return;
    }

    const userData = {
      brand_name: brandName,
      foto: selectedFile,
    };

    createBrand(
      userData,
      (data) => {
        console.log("Registration Successful", data);
      },
      (message) => {
        console.log("Registration Failed:", message);
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white p-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="w-full flex justify-between border-b p-3">
                  <h3
                    className="text-xl leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Add Brand
                  </h3>
                  <button
                    onClick={onClose}
                    type="button"
                    className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                  >
                    <IoCloseSharp size={24} />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-2 space-y-6">
                  <div>
                    <label
                      htmlFor="brand-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Brand Name (Required)
                    </label>
                    <div className="mt-1">
                      <input
                        id="brand-name"
                        name="brand-name"
                        type="text"
                        autoComplete="brand-name"
                        required
                        onChange={handleBrandNameChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="file-upload"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Brand Logo (Required)
                    </label>
                    <div className="mt-1">
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      />
                    </div>
                  </div>

                  <div className="px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create Brand
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

export default ModalAddBrand;
