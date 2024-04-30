// components/EllipsisButton.js
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const EllipsisButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="text-gray-500 focus:outline-none"
      aria-label="Options"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faEllipsisVertical} className="w-5 h-5" />
    </button>
  );
};

EllipsisButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EllipsisButton;
