import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const ModalDelete = ({ isOpen, onClose, onDeleteAccount }) => {
  const [showPassword, setShowPassword] = useState(false);


  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white pb-4 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 w-full sm:text-left">
                <div className="w-full flex justify-between border-b p-3">
                  <h3 className="text-xl px-6 py-1 leading-6 font-medium text-gray-900" id="modal-title">
                    Friendly Reminder
                  </h3>
                  <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    <IoCloseSharp/>
                  </button>
                </div>
                <div className="mt-2">
                
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={onDeleteAccount} type="button" className="py-3 w-full mb-3 text-center text-white bg-black dark:bg-gray-300 dark:text-black flex justify-center items-center">
              Yes, confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;