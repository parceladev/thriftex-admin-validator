import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import {
  updateValidatorBrand,
  fetchBrands,
} from "../../utils/brand-api-service";

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
          setBrandId(currentBrandId);
        }
      } catch (error) {
        console.error("Failed to load brands:", error);
      }
    };

    if (isOpen) {
      loadBrands();
    }
  }, [isOpen, currentBrandId]);

  const handleUpdate = async () => {
    try {
      console.log("Updating brand ID:", brandId);
      const updateResult = await updateValidatorBrand(brandId);
      console.log("Update Success:", updateResult);
      setUpdateStatus({
        success: true,
        message: "Brand ID berhasil diperbarui.",
      });
    } catch (error) {
      console.error("Update Failed:", error);
      setUpdateStatus({
        success: false,
        message: "Gagal memperbarui Brand ID. Coba lagi.",
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
          <div className="pb-4 bg-white sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                <div className="flex justify-between w-full p-3 border-b">
                  <h3
                    className="text-xl font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Perbarui Brand ID
                  </h3>
                  <button
                    onClick={onClose}
                    className="inline-flex justify-center px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    <IoCloseSharp />
                  </button>
                </div>
                <div className="p-6 mt-2">
                  <label
                    htmlFor="brand"
                    className="block font-medium text-gray-700 text-md"
                  >
                    Brand ID Saat Ini
                  </label>
                  <select
                    value={brandId}
                    onChange={(e) => setBrandId(e.target.value)}
                    className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  >
                    Perbarui
                  </button>
                </div>
                {updateStatus && (
                  <p
                    className={`text-${
                      updateStatus.success ? "green" : "red"
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
