import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { blockUser } from '../../utils/auth-api-service';
import { useNavigate } from 'react-router-dom';

const ModalBlockUser = ({ isOpen, onClose, userId, isActive, actionType }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  const handleAction = async (action) => {
    try {
      const response = await blockUser(userId, action);
      alert('User has been successfully blocked.');
      window.location.reload();
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-primary dark:bg-opacity-5"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-6 py-4 bg-primary dark:bg-secondary">
            <div className="flex items-center justify-between pb-3 border-b">
              <h3
                className="text-lg font-medium leading-6 text-textBlack dark:text-textWhite"
                id="modal-title"
              >
                Friendly Reminder
              </h3>
              <button
                onClick={onClose}
                className="px-4 py-2 font-semibold text-gray-700 bg-transparent border border-gray-500 rounded hover:bg-gray-500 hover:text-white dark:text-textWhite hover:border-transparent"
              >
                <IoCloseSharp />
              </button>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse bg-primary dark:bg-secondary">
            <button
              onClick={() => handleAction(false)}
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-textWhite bg-darkButton dark:bg-darkButton dark:text-textWhite border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Block User
            </button>
            <button
              onClick={() => handleAction(true)}
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-textWhite bg-darkButton dark:bg-darkButton dark:text-textWhite border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Unblock User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBlockUser;
