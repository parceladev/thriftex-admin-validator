import React, { useState } from 'react'; // Corrected import statement
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { CustomAlert } from '../generals';

const IdValidator = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const textToCopy = '4374';

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setAlertMessage('Text copied to clipboard');
        setIsAlertOpen(true);
      })
      .catch((err) => {
        setAlertMessage('Failed to copy text');
        setIsAlertOpen(true);
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-3">
        <p className="text-xl font-semibold">Validator ID</p>
        <span className="select-text">{textToCopy}</span>
      </div>
      <div onClick={copyToClipboard} className="ml-2 cursor-pointer">
        <FontAwesomeIcon icon={faClone} />
      </div>
      {isAlertOpen && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setIsAlertOpen(false)}
        />
      )}
    </div>
  );
};

export default IdValidator;
