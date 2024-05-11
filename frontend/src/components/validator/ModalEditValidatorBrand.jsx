import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import {
  updateValidatorBrand,
  fetchBrands,
} from '../../utils/brand-api-service';

const ModalValidator = ({ isOpen, onClose, currentBrandId }) => {
  const [brandId, setBrandId] = useState(currentBrandId);
  const [brands, setBrands] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(null);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const result = await fetchBrands(1, 100);
        if (result && result.data && result.data.data) {
          setBrands(result.data.data);
          setNewBrandId(currentBrandId);
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
      await updateValidatorBrand(newBrandId);
      setUpdateStatus({
        success: true,
        message: 'Brand ID berhasil diperbarui.',
      });
    } catch (error) {
      console.error('Update Failed:', error);
      setUpdateStatus({
        success: false,
        message: 'Gagal memperbarui Brand ID. Coba lagi.',
      });
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
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-primary dark:bg-secondary">
            <div className="sm:flex sm:items-start">
              <div className="w-full text-center sm:mt-0 sm:text-left p-5">
                <div className="flex justify-between w-full border-darkBorder dark:border-lightBorder border-b">
                  <h3 className="text-xl font-medium" id="modal-title">
                    Validator Edit Brand
                  </h3>
                  <button
                    onClick={onClose}
                    className="inline-flex justify-center bg-transparent px-4 py-2 mt-3 text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    <IoCloseSharp />
                  </button>
                </div>
                <div className="">
                  <label
                    htmlFor="brand"
                    className="block font-medium text-md mt-5"
                  >
                    Select Brand
                  </label>
                  <select
                    value={brandId}
                    onChange={(e) => setBrandId(e.target.value)}
                    className="block w-full py-2 pl-3 bg-transparent border border-darkBorder dark:border-lightBorder pr-10 mt-1 text-base rounded-md focus:outline-none sm:text-sm"
                  >
                    <option value="">Select a brand</option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.brand_name}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleUpdate}
                    className="py-4 mt-4 font-bold text-center w-full text-textWhite dark:textWhite bg-lightButton dark:bg-darkButton rounded"
                  >
                    Changes Brand Validator
                  </button>
                </div>
                {updateStatus && (
                  <p
                    className={`text-${
                      updateStatus.success ? 'green' : 'red'
                    }-500`}
                  >
                    {updateStatus.message}
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
