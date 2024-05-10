import React from 'react';
import Proptypes from 'prop-types';
import InputModal from './InputModal';
import { useState } from 'react';
import { fetchValidationLegit } from '../../utils/legit-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const ValidationForm = ({ legitId }) => {
  const [status, setStatus] = useState('');
  const [authenticity, setAuthenticity] = useState('');
  const [declineReason, setDeclineReason] = useState('');
  const [detailDescription, setDetailDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeResponse = (event) => {
    const { value } = event.target;
    setDetailDescription(value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'status') {
      setStatus(value);
    } else if (name === 'authenticity') {
      setAuthenticity(value);
    } else if (name === 'declineReason') {
      setDeclineReason(value);
    }
  };

  const handleAccept = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('processing_status', status);
    formData.append('check_result', authenticity);
    formData.append('check_note', detailDescription);
    formData.append('legit_id', legitId);

    console.log('handle accept :');
    console.log('processing_status', status);
    console.log('check_result', authenticity);
    console.log('check_note', detailDescription);
    console.log('legit_id', legitId);

    try {
      setIsSubmitting(true);
      const successData = await fetchValidationLegit(formData);
      alert('Submission result successful');
      console.log('Success Submitting Accept', successData);
      window.location.reload();
    } catch (error) {
      console.error('Error submitting acceptance:', error);
      alert('Error when submitting');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDecline = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('processing_status', declineReason);
    formData.append('check_result', 'processing');
    formData.append('check_note', detailDescription);
    formData.append('legit_id', legitId);

    console.log('handle Decline :');
    console.log('processing_status', declineReason);
    console.log('check_result', 'processing');
    console.log('check_note', detailDescription);
    console.log('legit_id', legitId);

    try {
      setIsSubmitting(true);
      const declineData = await fetchValidationLegit(formData);
      alert('Submission Decline successful');
      console.log('Success Submitting Decline', declineData);
      // window.location.reload();
    } catch (error) {
      console.error('Error submitting acceptance:', error);
      alert('Error when submitting');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="w-full p-4 mt-10 mb-4 text-2xl font-bold text-center uppercase">
        Feedback Validator Form
      </div>
      <div className="mb-4">
        <label className="font-semibold  block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
          Status Information
          <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
            (Required)
          </span>
        </label>
        <div className="p-3">
          <label className="flex items-center mb-3 space-x-3">
            <input
              type="checkbox"
              name="status"
              value="none"
              checked={status === 'none'}
              onChange={handleChange}
              className="w-6 h-6 form-radio"
            />
            <span className="text-green-700 uppecase">Accept</span>
          </label>
          <label className="flex items-center mb-3 space-x-3">
            <input
              type="checkbox"
              name="status"
              value="decline"
              checked={status === 'decline'}
              onChange={handleChange}
              className="w-6 h-6 form-radio"
            />
            <span className="text-red-400 uppecase">Decline</span>
          </label>
        </div>
      </div>

      {/* form for accept  */}
      {status === 'none' && (
        <form onSubmit={handleAccept}>
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
                  value="real"
                  checked={authenticity === 'real'}
                  onChange={handleChange}
                  className="w-6 h-6 form-radio"
                />
                <span className="text-green-700 uppecase">Original</span>
              </label>
              <label className="flex items-center mb-3 space-x-3">
                <input
                  type="checkbox"
                  name="authenticity"
                  value="fake"
                  checked={authenticity === 'fake'}
                  onChange={handleChange}
                  className="w-6 h-6 form-radio"
                />
                <span className="text-yellow-700 uppecase">Fake</span>
              </label>
            </div>
          </div>
          <InputModal
            label="Detail Description"
            placeholder="Input Result Information"
            name="detail-description"
            id="detailDescription"
            htmlFor="detail-description"
            isRequired="required"
            value={detailDescription}
            onChange={handleChangeResponse}
            readOnly={false}
          />
          <div className="flex w-full pt-2">
            <button
              type="submit"
              className="flex items-center justify-center w-full gap-3 py-4 text-lg text-white rounded bg-secondary hover:bg-gray-900"
            >
              {isSubmitting && <FontAwesomeIcon icon={faCircleNotch} spin />}
              <span>{isSubmitting ? 'Submitting...' : 'Send Information'}</span>
            </button>
          </div>
        </form>
      )}

      {/* form for decline  */}
      {status === 'decline' && (
        <form onSubmit={handleDecline}>
          <div className="mb-4">
            <label className="font-semibold block mb-2 text-sans text-secondary uppercase font-sans text-[17px]">
              Decline Reason
              <span className="text-sans text-red-600 font-light capitalize text-[14px] ml-3">
                (Required)
              </span>
            </label>
            <select
              name="declineReason"
              value={declineReason}
              onChange={handleChange}
              className="w-full p-3 border-b-2 border-secondary text-[14px] focus:outline-none"
            >
              <option value="">Select a reason</option>
              <option value="none">none</option>
              <option value="no_brand_information">No Brand Information</option>
              <option value="no_details_pictures">No Details Pictures</option>
              <option value="no_product_information">
                No Product Information
              </option>
            </select>
          </div>
          <InputModal
            label="Detail Decline Description"
            placeholder="Input a Detail Decline"
            name="detail-description"
            id="detailDescription"
            htmlFor="detail-description"
            isRequired="required"
            value={detailDescription}
            onChange={handleChangeResponse}
            readOnly={false}
          />
          <div className="flex w-full pt-2">
            <button
              type="submit"
              className="flex items-center justify-center w-full gap-3 py-4 text-lg text-white rounded bg-secondary hover:bg-gray-900"
            >
              {isSubmitting && <FontAwesomeIcon icon={faCircleNotch} spin />}
              <span>{isSubmitting ? 'Submitting...' : 'Send Information'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

ValidationForm.propTypes = {
  handleChange: Proptypes.func,
  status: Proptypes.string,
  authenticity: Proptypes.string,
  detailDescription: Proptypes.string,
  declineReason: Proptypes.string,
  legitId: Proptypes.string,
};

export default ValidationForm;
