import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const EditButton = ({ onClick, ariaLabel }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex justify-start w-full gap-3 p-3 font-sans font-light text-yellow-500 cursor-pointer text-start hover:bg-gray-100 dark:hover:bg-secondary text-md"
    >
      <FontAwesomeIcon className="w-5 h-5" icon={faPenToSquare} />
      {t('Edit Brand')}
    </button>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
};

export default EditButton;
