import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const BlockButton = ({ isActive, onClick }) => {
  const { t } = useTranslation();

  return (
    <button
      className={`p-2  hover:bg-gray-100 cursor-pointer flex justify-center gap-3 w-full font-sans text-[14px] font-light ${
        isActive ? 'text-red-500' : 'text-green-500'
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={isActive ? faBan : faUnlockAlt}
        className="w-5 h-5"
      />
      {isActive ? t('Block User') : t('Unblock User')}
    </button>
  );
};

BlockButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BlockButton;
