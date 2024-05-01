import React from 'react';
import Proptypes from 'prop-types';
import InputModal from './InputModal';

const ValidationForm = (props) => {
  const [detailDescription, setDetailDescription] = React.useState('');

  const { handleChange, handleSubmit, status, declineReason, authenticity } =
    props;

  const handleChangeResponse = (event) => {
    const { name, value } = event.target;
    setDetailDescription(value);
  };

  return (
    <form onSubmit={handleSubmit}>
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
              value="accept"
              checked={status === 'accept'}
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

      {status === 'accept' && (
        <>
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
                  checked={authenticity === 'original'}
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
        </>
      )}

      {status === 'decline' && (
        <>
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
        </>
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
  );
};

ValidationForm.propTypes = {
  handleChange: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  status: Proptypes.string.isRequired,
  authenticity: Proptypes.string.isRequired,
  detailDescription: Proptypes.string,
  declineReason: Proptypes.string,
};

export default ValidationForm;
