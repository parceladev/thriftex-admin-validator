import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const ModalDeleteBrand = ({ isOpen, onClose, onDeleteAccount }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
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
                    Friendly Reminder
                  </h3>
                  <button
                    onClick={onClose}
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    <IoCloseSharp />
                  </button>
                </div>
                <div className="mt-2"></div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onDeleteAccount}
              type="button"
              className="flex items-center justify-center w-full py-3 mb-3 text-center text-white bg-black dark:bg-gray-300 dark:text-black"
            >
              Yes, confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteBrand;
