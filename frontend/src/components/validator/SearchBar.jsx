import React, { useState } from 'react';
import ModalValidator from './ModalValidator'; 
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="p-6 w-full justify-between flex items-center">
        <div className="relative w-full pr-3">
          <input
            type="text"
            className="w-full p-3 pr-10 border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-gray-500 focus:border-black lg:text-sm sm:text-sm"
            placeholder="Search validator"
          />
          <FaSearch className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-500" />
        </div>
        <button
          type="button"
          className="py-3 w-1/4 text-center text-white bg-black dark:bg-gray-300 dark:text-black flex justify-center items-center"
          onClick={openModal}
        >
          <span className="mr-2">ADD VALIDATOR</span>
          <FaPlus className="h-5 w-5" />
        </button>
      </div>

      {/* Render ModalValidator component */}
      <ModalValidator isOpen={isModalOpen} onClose={closeModal} onCreateAccount={() => console.log("Create Account")} />
    </div>
  );
};

export default SearchBar;