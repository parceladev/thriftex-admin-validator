import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { updateBrand } from '../../utils/brand-api-service';

const ModalEditBrand = ({ isOpen, onClose, brandId }) => {
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
      console.log('Update Success:', updateResult);
      // onClose();
      window.location.reload();
    } catch (error) {
      console.error('Update Failed:', error);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-secondary bg-opacity-50 dark:bg-primary dark:bg-opacity-10"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block overflow-hidden p-5 text-left align-bottom transition-all bg-primary dark:bg-secondary transform rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="sm:flex sm:items-start p-5">
            <div className="w-full text-center sm:text-left text-textDark dark:text-textWhite">
              <h3 className="text-lg font-medium leading-6" id="modal-title">
                Edit Brand
              </h3>
              <div className="flex flex-col gap-5 mt-8">
                <div className="gap-2 flex flex-col">
                  <label htmlFor="brand-name" className="block w-full">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    id="brand-name"
                    value={brandName}
                    onChange={handleBrandNameChange}
                    placeholder="Input New Brand Name"
                    className="w-full p-2 border border-lightBorder dark:border-darkBorder bg-primary dark:bg-secondary rounded-md"
                  />
                </div>
                <div className="gap-2 flex flex-col">
                  <label htmlFor="file-upload" className="block w-full">
                    Upload Foto
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-lightBorder dark:border-darkBorder bg-primary dark:bg-secondary rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-primary dark:bg-secondary sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent dark:bg-darkButton rounded-md shadow-sm bg-secondary focus:outline-none dark:hover:bg-gray-700 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 border border-gray-300 dark:border-darkBorder dark:text-textWhite rounded-md shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
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
