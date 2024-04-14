import React from 'react';

const ModalAddBrand = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add Brand</h3>
          <div className="mt-2 px-7 py-3">
            <input
              type="text"
              placeholder="Enter brand name"
              className="mt-5 mb-3 w-full border p-2"
            />
            <div className="flex justify-center items-center w-full">
              <label className="border-dashed border-2 border-gray-300 w-full p-12 flex justify-center items-center">
                <div className="text-gray-700">
                  <p>Make sure to upload your logo with transparent background image</p>
                  <input type="file" className="hidden" />
                </div>
              </label>
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
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