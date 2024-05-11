import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { createBrand } from '../../utils/brand-api-service';
import { useNavigate } from 'react-router-dom';

const ModalAddBrand = ({ isOpen, onClose }) => {
  const [brandName, setBrandName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && /^image\/(svg\+xml|png|jpeg)$/.test(file.type)) {
      setSelectedFile(file);
    } else {
      alert('Only SVG, PNG, and JPG files are allowed.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!brandName || !selectedFile) {
      alert('Please fill in all required fields.');
      return;
    }

    const userData = {
      brand_name: brandName,
      foto: selectedFile,
    };

    console.log('Creating Brand', userData);
    createBrand(
      userData,
      (data) => {
        alert('Registration Successful', data);
        navigate('/admin-role/brands', { replace: true });
        window.location.reload();
      },
      (message) => {
        console.log('Registration Failed:', message);
      }
    );
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
          className="fixed inset-0 transition-opacity bg-secondary bg-opacity-50 dark:bg-primary dark:bg-opacity-10"
          aria-hidden="true"
        ></div>

        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-4 bg-primary dark:bg-secondary">
            <div className="sm:flex sm:items-start">
              <div className="w-full flex flex-col gap-6 text-center p-3 text-left">
                <div className="flex items-center justify-between w-full pb-3 border-b">
                  <h3
                    className="text-xl font-medium text-textBlack dark:text-textWhite"
                    id="modal-title"
                  >
                    Add Brand
                  </h3>
                  <button
                    onClick={onClose}
                    type="button"
                    className="text-secondary hover:text-gray-900  text-textBlack dark:text-textWhite focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                  >
                    <IoCloseSharp size={24} />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="brand-name"
                      className="block text-sm font-medium text-textBlack dark:text-textWhite text-left"
                    >
                      Brand Name (Required)
                    </label>
                    <div className="mt-1">
                      <input
                        id="brand-name"
                        name="brand-name"
                        type="text"
                        autoComplete="brand-name"
                        required
                        placeholder="Add New Brand Name"
                        onChange={handleBrandNameChange}
                        className="block w-full px-3 py-2 placeholder-gray-400 bg-primary dark:bg-secondary border border-lightBorder dark:darkBorder rounded-md shadow-sm appearance-none focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="file-upload"
                      className="lock text-sm font-medium text-textBlack dark:text-textWhite text-left"
                    >
                      Brand Logo (Required)
                    </label>
                    <div className="mt-1">
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 bg-primary dark:bg-secondary border border-lightBorder dark:darkBorder rounded-md file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-secondary dark:bg-primary dark:text-textBlack text-textWHite hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                    >
                      Create Brand
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddBrand;
