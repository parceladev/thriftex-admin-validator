import React, { useState } from 'react';

const ModalDeleteBrand = ({ isOpen, onClose, onDeleteAccount }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg my-8">
        <div className="flex items-start justify-between border-b px-10 py-3 text-center mb-5">
          <h3 className="text-[20px] leading-6 font-medium text-gray-900">Friendly Reminder</h3>
        </div>
        <div className="px-10 py-3">
          <p className="text-lg text-center text-gray-500 mb-8 mt-8">
            Once you delete the data, it can't be restored again, are you sure to delete the data?
          </p>
        </div>
        <div className="px-10 py-3 flex justify-center items-center gap-4 mb-5">
          <button
            onClick={onClose}
            type="button"
            className="w-1/2 justify-center border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            No, cancel
          </button>
          <button
            onClick={onDeleteAccount}
            type="button"
            className="w-1/2 justify-center border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Yes, confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteBrand;
