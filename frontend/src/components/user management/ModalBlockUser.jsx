import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { blockUser } from "../../utils/auth-api-service";
import { useNavigate } from "react-router-dom";

const ModalBlockUser = ({ isOpen, onClose, userId, isActive, actionType }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  const handleAction = async (action) => {
    try {
      const response = await blockUser(userId, action);
      // console.log("response:", response);
      alert("User has been successfully blocked.");
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-6 py-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Friendly Reminder
              </h3>
              <button
                onClick={onClose}
                className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
              >
                <IoCloseSharp />
              </button>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={() => handleAction(false)}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Block User
            </button>
            <button
              onClick={() => handleAction(true)}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
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
