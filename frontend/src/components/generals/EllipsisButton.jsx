import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EllipsisButton = ({ onClick, icon }) => {
  return (
    <button
      type="button"
      className="text-gray-500 focus:outline-none"
      aria-label="Options"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
    </button>
  );
};

EllipsisButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
};

export default EllipsisButton;
