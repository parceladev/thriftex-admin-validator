import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';


const ModalAddBrand = ({ isOpen, onClose, onAddBrand }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
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
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
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
                    Add Brand
                  </h3>
                  <button
                    onClick={onClose}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    <IoCloseSharp />
                  </button>
                </div>
                <div className="mt-2">
                  <form>
                    <div className="flex flex-wrap w-full sm:items-center p-6">
                      <label
                        htmlFor="full-name"
                        className="block w-full text-md font-medium text-gray-700"
                      >
                        Brand Name <span className="text-red-400">(Required)</span>
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
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full sm:items-center p-6">
                      <label
                        htmlFor="confirm-password"
                        className="block w-full text-md font-medium text-gray-700"
                      >
                        Brand logo <span className="text-red-400">(Required)</span>
                      </label>
                      <div className="mt-1 relative w-full">
                        <p className="text-gray-600 ">
                          Make sure to your logo with transparrent <br />
                          background image.
                        </p>
                        <div className="mt-1 relative w-full">
                          <div className="mt-3 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3 7v6a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-7 4V3H3v12a1 1 0 001 1h3m10 0h3a1 1 0 001-1V3h-7v8z"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:ring-indigo-500"
                                >
                                  Upload File
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={handleFileChange}
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              {selectedFile && (
                                <p className="text-md text-red-500">File: {selectedFile.name}</p>
                              )}
                              {/* <p className="text-xs text-gray-500">PNG up to 10MB</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onAddBrand}
              type="button"
              className="py-3 w-full mb-3 text-center text-white bg-black dark:bg-gray-300 dark:text-black flex justify-center items-center"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddBrand;
