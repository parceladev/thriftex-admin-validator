import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import {
  updateValidatorBrand,
  fetchBrands,
} from '../../utils/brand-api-service';
import { useTranslation } from 'react-i18next';

const ModalValidator = ({ isOpen, onClose, currentBrandId }) => {
  const { t } = useTranslation();

  const [brandId, setBrandId] = useState(currentBrandId);
  const [brands, setBrands] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(null);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const result = await fetchBrands(1, 100);
        if (result && result.data && result.data.data) {
          setBrands(result.data.data);
          setBrandId(currentBrandId);
        }
      } catch (error) {
        console.error('Failed to load brands:', error);
      }
    };

    if (isOpen) {
      loadBrands();
    }
  }, [isOpen, currentBrandId]);

  const handleUpdate = async () => {
    try {
      await updateValidatorBrand(brandId);
      setUpdateStatus({
        success: true,
        message: 'Validator brand changed successfully',
      });
      window.location.reload();
    } catch (error) {
      console.error('Update Failed:', error);
      setUpdateStatus({
        success: false,
        message: 'Validator brand failed to change',
      });
      window.location.reload();
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
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 dark:bg-primary dark:bg-opacity-10"
          aria-hidden="true"
        ></div>
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-primary dark:bg-secondary">
            <div className="sm:flex sm:items-start">
              <div className="w-full text-center sm:mt-0 sm:text-left p-5">
                <div className="flex justify-between w-full pb-3 border-Border dark:border-darkBorder border-b">
                  <h3 className="text-xl font-medium" id="modal-title">
                    {t('Validator Edit Brand')}
                  </h3>
                  <button
                    onClick={onClose}
                    className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-textBlack dark:text-textWhite hover:text-gray-900 rounded-lg p-1.5  inline-flex items-center"
                  >
                    <IoCloseSharp className="text-2xl" />
                  </button>
                </div>
                <div className="">
                  <label
                    htmlFor="brand"
                    className="block font-medium text-md mt-5"
                  >
                    {t('Select Brand')}
                  </label>
                  <select
                    value={brandId}
                    onChange={(e) => setBrandId(e.target.value)}
                    className="block w-full py-2 pl-3 bg-transparent border border-lightBorder dark:border-darkBorder pr-10 mt-1 text-base rounded-md focus:outline-none sm:text-sm"
                  >
                    <option
                      value=""
                      className="bg-primary dark:bg-secondary text-textBlack dark:text-textWhite"
                    >
                      {t('Select Brand')}
                    </option>
                    {brands.map((brand) => (
                      <option
                        key={brand.id}
                        value={brand.id}
                        className="bg-primary dark:bg-secondary text-textBlack dark:text-textWhite"
                      >
                        {brand.brand_name}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleUpdate}
                    className="py-4 mt-8 dark:hover:bg-gray-700 text-center w-full text-textWhite dark:textWhite bg-lightButton dark:bg-darkButton rounded"
                  >
                    {t('Changes Brand Validator')}
                  </button>
                </div>
                {updateStatus && (
                  <p
                    className={`text-center pt-4 text-${
                      updateStatus.success ? 'green' : 'red'
                    }-500`}
                  >
                    {t(`${updateStatus.message}`)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalValidator;
