import React from 'react';
import PropTypes from 'prop-types';

const CustomAlert = ({ message, onClose }) => {
  return (
    <>
      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-slideDown {
            animation: slideDown 0.5s ease-out forwards; // Menambahkan durasi dan easing
          }
        `}
      </style>
      <div className="fixed inset-0 top-0 z-50 flex items-start justify-center w-full px-4 py-6 transform -translate-x-1/2 bg-gray-900 bg-opacity-20 left-1/2">
        <div className="p-4 bg-white rounded-lg shadow-xl min-w-80 animate-slideDown">
          <div className="py-2 mb-4 text-sm font-medium text-left text-gray-500 border-b-2 border-b-gray-300">
            System Alert
          </div>
          <div className="mb-6 text-left text-black text-md">{message}</div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium text-white transition-colors duration-150 rounded-lg bg-secondary hover:bg-gray-900 focus:outline-none focus:shadow-outline-blue"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomAlert;
