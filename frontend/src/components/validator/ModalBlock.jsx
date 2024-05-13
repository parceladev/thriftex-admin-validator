import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { blockUser } from '../../utils/auth-api-service';
import { useTranslation } from 'react-i18next';

const ModalBlock = ({ isOpen, onClose, userId, isActive, actionType }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleAction = async (action) => {
    try {
      await blockUser(userId, action);
      if (action) {
        alert('User has been successfully unblocked.');
      } else {
        alert('User has been successfully blocked.');
      }
      window.location.reload();
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  return (
    <div className="fixed -inset-56 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 dark:bg-primary dark:bg-opacity-10 bg-opacity-75"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block overflow-hidden p-4 text-left transition-all transform rounded-lg shadow-xl sm:align-middle w-[350px] h-fit">
          <div className="bg-primary p-6 dark:bg-secondary">
            <div className="flex items-center justify-between pb-3 border-b dark:border-darkBorder">
              <h3
                className="text-lg font-medium leading-6 text-textBlack dark:text-textWhite"
                id="modal-title"
              >
                {t('Friendly Reminder')}
              </h3>
              <button
                onClick={onClose}
                className="px-4 py-2 font-semibold text-gray-700 bg-transparent border border-gray-500 dark:border-darkBorder rounded hover:bg-gray-500 hover:text-white dark:text-textWhite hover:border-transparent"
              >
                <IoCloseSharp />
              </button>
            </div>
          </div>
          <div className="px-6 py-2 bg-primary dark:bg-secondary text-center">
            <p>
              {t(
                'Blocking means that the user cannot log in again and access the all of feature'
              )}
            </p>
          </div>
          <div className="pb-8 flex justify-between p-6 w-full bg-primary dark:bg-secondary">
            <button
              onClick={() => handleAction(false)}
              className="inline w-full px-4 py-2 text-base font-medium border border-transparent rounded-md shadow-sm text-textWhite bg-darkButton dark:bg-darkButton dark:text-textWhite hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:text-sm"
            >
              {t('Block User')}
            </button>
            <button
              onClick={() => handleAction(true)}
              className="inline w-full px-4 py-2 text-base font-medium border border-transparent rounded-md shadow-sm text-textWhite bg-darkButton dark:bg-darkButton dark:text-textWhite hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto sm:text-sm"
            >
              {t('Unblock User')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBlock;
