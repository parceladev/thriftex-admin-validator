import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const DeleteButton = ({ isActive, onClick, ariaLabel }) => {
  const { t } = useTranslation();

  return (
    <button
      className={`hover:bg-gray-100 dark:hover:bg-secondary p-3 cursor-pointer flex justify-start gap-3 w-full font-sans text-md font-light text-red-500`}
      onClick={onClick}
      ariaLabel={ariaLabel}
    >
      <FontAwesomeIcon
        icon={isActive ? faBan : faUnlockAlt}
        className="w-5 h-5"
      />
      {t('Delete')}
    </button>
  );
};

DeleteButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
};

export default DeleteButton;
