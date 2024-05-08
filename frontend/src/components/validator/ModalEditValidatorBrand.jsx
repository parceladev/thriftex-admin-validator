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
          setNewBrandId(currentBrandId);
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
      console.log("Updating brand ID:", newBrandId);
      const updateResult = await updateValidatorBrand(newBrandId);
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
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white pb-4 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="w-full flex justify-between border-b p-3">
                  <h3
                    className="text-xl leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Perbarui Brand ID
                  </h3>
                  <button
                    onClick={onClose}
                    className="mt-3 inline-flex justify-center px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    <IoCloseSharp />
                  </button>
                </div>
                <div className="mt-2 p-6">
                  <label
                    htmlFor="brand"
                    className="block text-md font-medium text-gray-700"
                  >
                    Brand ID Saat Ini
                  </label>
                  <select
                    value={brandId}
                    onChange={(e) => setBrandId(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
