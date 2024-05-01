import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Proptypes from 'prop-types';
import InputModal from './InputModal';
import { fetchDetailListLegit } from '../../utils/legit-api-service';
import ValidationForm from './ValidationForm';

const ItemDetailModal = ({ isOpen, onClose, item }) => {
  const [formData, setFormData] = useState({
    status: '', // 'accept' or 'decline'
    authenticity: '', // 'original', 'fake', or ''
    detailDescription: '', // Detail description text
    declineReason: '', // Selected reason if declined
  });

  const [itemDetails, setItemDetails] = useState(null);
  const [legitId, setLegitId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      if (isOpen && item?.case_code) {
        setLoading(true);
        try {
          const data = await fetchDetailListLegit(item.case_code);
          if (data && data.status && data.data.length > 0) {
            setLegitId(data.data[0].id);
            setItemDetails(data.data[0]);
          } else {
            throw new Error('Failed to fetch item details');
          }
        } catch (err) {
          setError('Error fetching details: ' + err.message);
          console.error('Error on fetching:', err);
        } finally {
          setLoading(false);
        }
      } else {
        setItemDetails(null);
      }
    };

    fetchDetails();
  }, [isOpen, item?.case_code]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
          <div className="p-8">
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
                      className="object-cover rounded w-30 h-30"
                    />
                  </Zoom>
                ))}
              </div>
            </div>
            <InputModal
              label="Purchase"
              name="purchase"
              id="purchase"
              htmlFor="purchase"
              isRequired="none"
              value={itemDetails.purchase}
            />
            <InputModal
              label="Store Name"
              name="store-name"
              id="store-name"
              htmlFor="store-name"
              isRequired="none"
              value={itemDetails.toko_pembelian}
              readOnly={true}
            />
            <InputModal
              label="Item Condition"
              name="item-condition"
              id="item-condition"
              htmlFor="item-condition"
              isRequired="none"
              value={itemDetails.kondisi}
              readOnly={true}
            />
            <InputModal
              label="Other Notes"
              name="other-notes"
              id="other-notes"
              htmlFor="other-notes"
              isRequired="none"
              value={itemDetails.catatan}
              readOnly={true}
            />
            <ValidationForm
              formData={formData}
              handleChange={handleChange}
              status={formData.status}
              detailDescription={formData.detailDescription}
              declineReason={formData.declineReason}
              authenticity={formData.authenticity}
              legitId={legitId}
            />
          </div>
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
