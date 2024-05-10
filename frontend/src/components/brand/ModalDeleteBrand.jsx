import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { deleteBrand } from "../../utils/brand-api-service";

const ModalDeleteBrand = ({ isOpen, onClose, brandId, onDeleteAccount }) => {
  const handleDelete = async () => {
    try {
      const response = await deleteBrand(brandId);
      if (response.message === "data berhasil dihapus") {
        onDeleteAccount(brandId); // Ini akan mengupdate state di parent component
        onClose(); // Menutup modal
      } else {
        console.error("Response message:", response.message);
      }
    } catch (error) {
      console.error("Failed to delete brand:", error);
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
          <div className="bg-white ">
            <div className="sm:flex sm:items-start">
              <div className="w-full text-center sm:mt-0 sm:text-left">
                <div className="flex items-center justify-between w-full p-3 border-b">
                  <h3
                    className="text-xl font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Friendly Reminder
                  </h3>
                  <button
                    onClick={onClose} // Ini adalah tombol close yang akan menutup modal
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center"
                    data-modal-toggle="popup-modal"
                  >
                    <IoCloseSharp size={24} />
                  </button>
                </div>
                <div className="p-3 mt-3 text-center">
                  <p className="font-sans font-thin text-[16px] max-w-[340px] mx-auto mb-5">Once you delete the data, it can’t be restored again, are you sure to delete the data?</p>
                  <button
                    onClick={handleDelete}
                    type="button"
                    className=" bg-secondary text-white rounded-sm mt-3 w-full h-[40px] hover:bg-black"
                  >
                    Yes, confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Ini adalah footer modal yang sebelumnya berisi tombol konfirmasi */}
          <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
            {/* Tombol konfirmasi sekarang dipindahkan ke dalam isi modal */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteBrand;
