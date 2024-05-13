import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { deleteBrand } from '../../utils/brand-api-service';
import { useTranslation } from 'react-i18next';

const ModalDeleteBrand = ({ isOpen, onClose, brandId, onDeleteAccount }) => {
  const { t } = useTranslation();

  const handleDelete = async () => {
    try {
      const response = await deleteBrand(brandId);
      if (response.message === 'data berhasil dihapus') {
        onDeleteAccount(brandId);
        onClose();
      } else {
        console.error('Response message:', response.message);
      }
    } catch (error) {
      console.error('Failed to delete brand:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-secondary bg-opacity-50 dark:bg-primary dark:bg-opacity-10"
          aria-hidden="true"
        ></div>
        <div className="inline-block overflow-hidden align-bottom transition-all transform rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-primary dark:bg-secondary h-full">
            <div className="flex items-start">
              <div className="w-full h-full text-center">
                <div className="flex h-full items-center justify-between w-full p-5 border-b">
                  <h3
                    className="text-xl font-medium leading-6 text-textBlack dark:text-textWhite"
                    id="modal-title"
                  >
                    {t('Friendly Reminder')}
                  </h3>
                  <button
                    onClick={onClose}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-textWhite hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center"
                    data-modal-toggle="popup-modal"
                  >
                    <IoCloseSharp size={24} />
                  </button>
                </div>
                <div className="p-5 h-full text-center">
                  <p className="font-sans font-thin text-[16px] max-w-[340px] mx-auto mb-5">
                    {t(
                      'Once you delete the data, it can’t be restored again, are you sure to delete the data?'
                    )}
                  </p>
                  <button
                    onClick={handleDelete}
                    type="button"
                    className="bg-darkButton dark:hover:bg-gray-700 text-textWhite dark:bg-LightButton py-4 rounded-sm mt-3 w-full"
                  >
                    {t('Yes, confirm')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteBrand;
