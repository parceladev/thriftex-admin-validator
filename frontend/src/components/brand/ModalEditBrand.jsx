import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { updateBrand } from '../../utils/brand-api-service';
import { useTranslation } from 'react-i18next';

const ModalEditBrand = ({ isOpen, onClose, brandId }) => {
  const { t } = useTranslation();

  const [brandName, setBrandName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      const updateResult = await updateBrand(brandId, brandName, selectedFile);
      console.log(updateResult.message);
      alert(updateResult.message);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 overflow-y-auto -inset-40">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-opacity-50 bg-secondary dark:bg-primary dark:bg-opacity-10"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-primary dark:bg-secondary sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-5 sm:flex sm:items-start">
            <div className="w-full text-center sm:text-left text-textDark dark:text-textWhite">
              <h3 className="text-lg font-medium leading-6" id="modal-title">
                {t('Edit Brand')}
              </h3>
              <div className="flex flex-col gap-5 mt-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="brand-name" className="block w-full">
                    {t('Brand Name')} (Required)
                  </label>
                  <input
                    type="text"
                    id="brand-name"
                    value={brandName}
                    onChange={handleBrandNameChange}
                    placeholder="Input Edit Brand Name"
                    className="w-full p-2 border rounded-md border-lightBorder dark:border-darkBorder bg-primary dark:bg-secondary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="file-upload" className="block w-full">
                    {t('Image Logo Brand')} (Required)
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="w-full p-2 border rounded-md border-lightBorder dark:border-darkBorder bg-primary dark:bg-secondary"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-primary dark:bg-secondary sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm dark:bg-darkButton bg-secondary focus:outline-none dark:hover:bg-gray-700 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm dark:border-darkBorder dark:text-textWhite hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditBrand;
