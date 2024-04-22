import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

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
    "https://via.placeholder.com/150"
  ],
  purchase: "04-01-2024",
  storeName: "Sneaker Street",
  condition: "New",
  otherNote: "",
  authenticity: ""
};

const ItemDetailModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialData);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Asumsi fungsi ini akan dipanggil ketika form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // POST data ke API
  };

  return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex" style={{ overflowY: 'auto' }}>
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Legit Check Detail</p>
            <button type="button" onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Item Category */}
          <div className="mb-4">
            <label className="text-sm font-bold block mb-2">ITEM CATEGORY (Required)</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Item Brand */}
          <div className="mb-4">
            <label className="text-sm font-bold block mb-2">ITEM BRAND (Required)</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Item Name */}
          <div className="mb-4">
            <label className="text-sm font-bold block mb-2">ITEM NAME (Required)</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Item Photos */}
          <div className="mb-4">
            <label className="text-sm font-bold block mb-2">ITEM PHOTOS (Required)</label>
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
            <label className="text-sm font-bold block mb-2">PURCHASE (Required)</label>
            <input
              type="text"
              name="purchase"
              value={formData.purchase}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Store Name */}
          <div className="mb-4">
            <label className="text-sm font-bold block mb-2">STORE NAME (Required)</label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Item Condition */}
          <div className="mb-4">
            <label className="text-sm font-bold block mb-2">ITEM CONDITION (Required)</label>
            <input
              type="text"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Other Note */}
          <div className="mb-4">
            <label className="text-sm font-bold block mb-2">OTHER NOTE (Optional)</label>
            <textarea
              name="otherNote"
              value={formData.otherNote}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Authenticity */}
          <div className="mb-4">
            <label className="text-sm font-bold block mb-2">AUTHENTICITY (Required)</label>
            <select
              name="authenticity"
              value={formData.authenticity}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select Authenticity</option>
              <option value="FAKE">FAKE</option>
              <option value="ORIGINAL">ORIGINAL</option>
            </select>
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
