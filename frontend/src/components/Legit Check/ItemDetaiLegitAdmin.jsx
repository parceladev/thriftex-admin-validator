import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Proptypes from 'prop-types';
import InputModal from './InputModal';
import { fetchDetailListLegit } from '../../utils/legit-api-service';
import ValidationForm from './ValidationForm';

const ItemDetaiLegitAdmin = ({ isOpen, onClose, item }) => {
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
          console.log('detail legit:', data);
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
              onChange={handleChange}
              label="Id Legit"
              name="id-legit"
              id="id-legit"
              htmlFor="id-legit"
              isRequired="none"
              value={itemDetails.id}
              readOnly={true}
            />
            <InputModal
              onChange={handleChange}
              label="Id User"
              name="id-user"
              id="id-user"
              htmlFor="id-user"
              isRequired="none"
              value={itemDetails.user_id}
              readOnly={true}
            />
            <InputModal
              onChange={handleChange}
              label="Item Category"
              name="item-category"
              id="item-category"
              htmlFor="item-category"
              isRequired="none"
              value={itemDetails.kategori_name}
              readOnly={true}
            />
            <InputModal
              onChange={handleChange}
              label="Item Brand"
              name="item-brand"
              id="item-brand"
              htmlFor="item-brand"
              isRequired="none"
              value={itemDetails.nama_brand}
              readOnly={true}
            />
            <InputModal
              onChange={handleChange}
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
              onChange={handleChange}
              label="Purchase"
              name="purchase"
              id="purchase"
              htmlFor="purchase"
              isRequired="none"
              value={itemDetails.purchase}
              readOnly={true}
            />
            <InputModal
              onChange={handleChange}
              label="Store Name"
              name="store-name"
              id="store-name"
              htmlFor="store-name"
              isRequired="none"
              value={itemDetails.toko_pembelian}
              readOnly={true}
            />
            <InputModal
              onChange={handleChange}
              label="Item Condition"
              name="item-condition"
              id="item-condition"
              htmlFor="item-condition"
              isRequired="none"
              value={itemDetails.kondisi}
              readOnly={true}
            />
            <InputModal
              onChange={handleChange}
              label="Other Notes"
              name="other-notes"
              id="other-notes"
              htmlFor="other-notes"
              isRequired="none"
              value={itemDetails.catatan}
              readOnly={true}
            />
            <InputModal
              onChange={handleChange}
              label="Authenticity"
              name="authenticity"
              id="authenticity"
              htmlFor="authenticity"
              isRequired="none"
              value={itemDetails.check_result}
              readOnly={true}
            />
            <InputModal
              onChange={handleChange}
              label="Detail Description"
              name="detail-description"
              id="detail-description"
              htmlFor="detail-description"
              isRequired="none"
              value={
                itemDetails.authentic_comment.length > 0 &&
                itemDetails.authentic_comment[0].check_note
                  ? itemDetails.authentic_comment[0].check_note
                  : 'Not yet known'
              }
              readOnly={true}
            />
            <div className="flex flex-col gap-2 p-6">
              <p>
                Contact the <span className="font-bold">Validator</span> to
                check the items authenticity
              </p>
              <div className="flex gap-2">
                <b>Id:</b>
                <p>
                  (
                  {itemDetails.authentic_comment.length > 0 &&
                  itemDetails.authentic_comment[0].validator_user_id
                    ? itemDetails.authentic_comment[0].validator_user_id
                    : '-'}
                  )
                </p>
              </div>
              <div className="flex gap-2">
                <b>Name:</b>
                <p>
                  {itemDetails.authentic_comment.length > 0 &&
                  itemDetails.authentic_comment[0].nama
                    ? itemDetails.authentic_comment[0].nama
                    : 'Not yet known'}
                </p>
              </div>
              <div className="flex gap-2">
                <b>Time Validation:</b>
                <p>
                  (
                  {itemDetails.authentic_comment.length > 0 &&
                  itemDetails.authentic_comment[0].final_time_check
                    ? itemDetails.authentic_comment[0].final_time_check
                    : '-'}
                  )
                </p>
              </div>
            </div>
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

ItemDetaiLegitAdmin.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  item: Proptypes.object.isRequired,
};

export default ItemDetaiLegitAdmin;
