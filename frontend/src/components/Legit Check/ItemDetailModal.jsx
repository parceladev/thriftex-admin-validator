import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Proptypes from 'prop-types';
import InputModal from './InputModal';
import { fetchDetailListLegit } from '../../utils/legit-api-service';

const ItemDetailModal = ({ isOpen, onClose, item }) => {
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ authenticity: '' });

  useEffect(() => {
    console.log('Modal opened with item:', item);
    if (isOpen && item?.case_code) {
      setLoading(true);
      fetchDetailListLegit(item.case_code)
        .then((data) => {
          setLoading(false);
          if (data && data.status && data.data.length > 0) {
            console.log('Data fetched successfully:', data.data[0]);
            setItemDetails(data.data[0]);
          } else {
            throw new Error('Failed to fetch item details');
          }
        })
        .catch((err) => {
          setLoading(false);
          setError('Error fetching details: ' + err.message);
          console.error('Error on fetching:', err);
        });
    } else {
      setItemDetails(null);
    }
  }, [isOpen, item?.case_code]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex bg-black bg-opacity-50"
      style={{ overflowY: 'auto' }}
    >
      <div
        className="relative bg-white w-full max-w-[800px] m-auto flex-col flex rounded-lg shadow-lg"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div className="flex flex-row items-center justify-between p-4 ml-4 border-b-2">
          <p className="text-2xl font-bold text-sans text-secondary">
            Legit Check Detail
          </p>
          <button type="button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} className="text-[16px]" />
          </button>
        </div>

        {loading && (
          <div className="flex items-center justify-center p-8 text-center min-h-[550px]">
            <p>Loading details...</p>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center p-8 text-center min-h-[550px]">
            <p>No detailed information available.</p>
          </div>
        )}

        {!loading && !error && itemDetails && (
          <form onSubmit={handleSubmit} className="p-8">
            <InputModal
              label="Item Category"
              name="item-category"
              id="item-category"
              htmlFor="item-category"
              isRequired="none"
              value={itemDetails.kategori_name}
              readOnly={true}
            />
            <InputModal
              label="Item Brand"
              name="item-brand"
              id="item-brand"
              htmlFor="item-brand"
              isRequired="none"
              value={itemDetails.brand_name}
              readOnly={true}
            />
            <InputModal
              label="Item Name"
              name="item-name"
              id="item-name"
              htmlFor="item-name"
              isRequired="none"
              value={itemDetails.nama_item}
              readOnly={true}
            />
            <div className="mb-4">
              <label className="font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
                ITEM PHOTOS{' '}
              </label>
              <div className="flex space-x-2">
                {itemDetails.image_list.map((image, index) => (
                  <Zoom key={index}>
                    <img
                      src={image.file_path}
                      alt={`Item Photo ${index}`}
                      className="object-cover w-20 h-20 rounded"
                    />
                  </Zoom>
                ))}
              </div>
            </div>
            {/* <InputModal
              label="Purchase"
              name="purchase"
              id="purchase"
              htmlFor="purchase"
              isRequired="optional"
              value={itemDetails.purchase}
            /> */}
            <InputModal
              label="Store Name"
              name="store-name"
              id="store-name"
              htmlFor="store-name"
              isRequired="optional"
              value={itemDetails.toko_pembelian}
              readOnly={true}
            />

            <InputModal
              label="Item Condition"
              name="item-condition"
              id="item-condition"
              htmlFor="item-condition"
              isRequired="optional"
              value={itemDetails.kondisi}
              readOnly={true}
            />

            <InputModal
              label="Other Notes"
              name="other-notes"
              id="other-notes"
              htmlFor="other-notes"
              isRequired="optional"
              value={itemDetails.catatan}
              readOnly={true}
            />
            <div className="w-full p-4 mt-8 text-lg font-semibold text-center uppercase">
              Feed Validator Form
            </div>
            <div className="mb-4">
              <label className="font-semibold  block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
                Authenticity
                <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                  (Required)
                </span>
              </label>
            <label className="flex items-center mb-3 space-x-3 ">
              <input
                type="checkbox"
                name="authenticity"
                value="declined"
                checked={formData.authenticity === 'declined'}
                onChange={handleChange}
                required
                className="w-6 h-6 form-radio"
              />
              <span className="text-red-400 uppecase">Decline</span>
            </label>
            </div>
            <div className="mb-4">
              <label className="font-semibold  block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
                Authenticity
                <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                  (Required)
                </span>
              </label>
              <div className="w-full p-3  border-secondary text-[14px]">
                <label className="flex items-center mb-3 space-x-3">
                  <input
                    type="checkbox"
                    name="authenticity"
                    value="original"
                    checked={formData.authenticity === 'original'}
                    onChange={handleChange}
                    required
                    className="w-6 h-6 form-radio"
                  />
                  <span className="text-green-700 uppecase">Original</span>
                </label>
                <label className="flex items-center mb-3 space-x-3">
                  <input
                    type="checkbox"
                    name="authenticity"
                    value="fake"
                    checked={formData.authenticity === 'fake'}
                    onChange={handleChange}
                    required
                    className="w-6 h-6 form-radio"
                  />
                  <span className="text-yellow-700 uppecase">Fake</span>
                </label>
              </div>
            </div>
            {formData.authenticity === 'declined' && (
              <>
                <div className="mb-4">
                  <label className="font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
                    Status Decline
                    <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                      (Required)
                    </span>
                  </label>
                  <select
                    name="status"
                    id="status"
                    className="w-full p-3 border-b-2 border-secondary text-[14px] focus:outline-none"
                  >
                    <option value="none">None</option>
                    <option value="no_brand_information">
                      No Brand Information
                    </option>
                    <option value="no_details_pictures">
                      No Details Pictures
                    </option>
                    <option value="no_product_information">
                      No Product Information
                    </option>
                  </select>
                </div>
                <InputModal
                  label="Detail Description"
                  placeholder="Input Result Information"
                  name="detail-description"
                  id="detail-description"
                  htmlFor="detail-description"
                  isRequired="required"
                  value={formData['detail-description'] || ''}
                  onChange={handleChange}
                  readOnly={false}
                />
              </>
            )}

            {(formData.authenticity === 'original' ||
              formData.authenticity === 'fake') && (
              <InputModal
                label="Detail Description"
                placeholder="Input Result Information"
                name="detail-description"
                id="detail-description"
                htmlFor="detail-description"
                isRequired="required"
                value={formData['detail-description'] || ''}
                onChange={handleChange}
                readOnly={false}
              />
            )}

            <div className="flex w-full pt-2">
              <button
                type="submit"
                className="w-full py-4 text-lg text-white rounded bg-secondary hover:bg-gray-900"
              >
                Send Information
              </button>
            </div>
          </form>
        )}

        {!loading && !error && !itemDetails && (
          <div className="p-8 text-center">
            <p>Error to get detail Information</p>
            <button
              onClick={onClose}
              className="px-4 py-2 mt-4 font-bold text-black bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

ItemDetailModal.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  item: Proptypes.object.isRequired,
};

export default ItemDetailModal;
