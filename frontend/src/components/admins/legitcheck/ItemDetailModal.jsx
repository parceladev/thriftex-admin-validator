import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Contoh data dummy
const initialData = {
  id: "#4142-ONZX",
  category: "Shoes",
  brand: "Vans",
  name: "Vans Old Skool",
  photos: [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ],
  purchase: "04-01-2024",
  storeName: "Sneaker Street",
  condition: "New",
  otherNote: "",
  authenticity: "",
};

const ItemDetailModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialData);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Asumsi fungsi ini akan dipanggil ketika form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // POST data ke API
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex"
      style={{ overflowY: "auto" }}
    >
      <div
        className="relative bg-white w-full max-w-[800px] m-auto flex-col flex rounded-lg shadow-lg"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <div className="ml-4 flex flex-row justify-between items-center border-b-2 p-4">
          <p className="text-2xl font-bold text-sans text-secondary">
            Legit Check Detail
          </p>
          <button type="button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} className="text-[16px]" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-8">
          {/* Item Category */}
          <div className="mb-4">
            <label className="text-sm font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[20px] ">
              ITEM CATEGORY
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Required)
              </span>
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-3 border-b-2 border-secondary text-[14px] focus:outline-none"
            />
          </div>

          {/* Item Brand */}
          <div className="mb-4">
            <label className="text-sm font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
              ITEM BRAND
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Required)
              </span>
            </label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="w-full p-3 border-b-2 border-secondary text-[14px] focus:outline-none"
            />
          </div>

          {/* Item Name */}
          <div className="mb-4">
            <label className="text-sm font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
              ITEM NAME{" "}
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Required)
              </span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border-b-2 border-secondary text-[14px] focus:outline-none"
            />
          </div>

          {/* Item Photos */}
          <div className="mb-4">
            <label className="text-sm font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
              ITEM PHOTOS{" "}
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Required)
              </span>
            </label>
            <div className="flex space-x-2">
              {formData.photos.map((photo, index) => (
                <Zoom key={index}>
                  <img
                    src={photo}
                    alt={`Item ${index}`}
                    className="w-20 h-20 object-cover rounded"
                  />
                </Zoom>
              ))}
            </div>
          </div>

          {/* Purchase Date */}
          <div className="mb-4">
            <label className="text-sm font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
              PURCHASE{" "}
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Required)
              </span>
            </label>
            <input
              type="text"
              name="purchase"
              value={formData.purchase}
              onChange={handleChange}
              required
              className="w-full p-3 border-b-2 border-secondary text-[14px] focus:outline-none"
            />
          </div>

          {/* Store Name */}
          <div className="mb-4">
            <label className="text-sm font-semibold block  text-sans text-secondary uppercase font-sans text-[17px]">
              STORE NAME{" "}
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Required)
              </span>
            </label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              required
              className="w-full p-3 border-b-2 border-secondary text-[14px] focus:outline-none"
            />
          </div>

          {/* Item Condition */}
          <div className="mb-4">
            <label className="text-sm font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
              ITEM CONDITION{" "}
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Required)
              </span>
            </label>
            <input
              type="text"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              required
              className="w-full p-3 border-b-2 border-secondary text-[14px] focus:outline-none"
            />
          </div>

          {/* Other Note */}
          <div className="mb-4">
            <label className="text-sm font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
              OTHER NOTE{" "}
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Optional)
              </span>
            </label>
            <textarea
              name="otherNote"
              value={formData.otherNote}
              onChange={handleChange}
              className="w-full p-3 border-2 rounded border-secondary text-[14px] h-[100px]"
            />
          </div>

          {/* Authenticity */}
          <div className="mb-4">
            <label className="text-sm font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
              AUTHENTICITY{" "}
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Required)
              </span>
            </label>
            <div className="w-full p-3  border-secondary text-[14px]">
              <label className="flex items-center space-x-3 mb-3 ">
                <input
                  type="checkbox"
                  name="authenticity"
                  value="FAKE"
                  checked={formData.authenticity === "FAKE"}
                  onChange={handleChange}
                  required
                  className="form-radio h-6 w-6 "
                 
                />
                <span>FAKE</span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="authenticity"
                  value="ORIGINAL"
                  checked={formData.authenticity === "ORIGINAL"}
                  onChange={handleChange}
                  required
                  className="form-radio h-6 w-6"
                />
                <span>ORIGINAL</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Save Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemDetailModal;
