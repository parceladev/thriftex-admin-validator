// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const BorderButton = () => {
  return (
    <div>
      <button className="flex items-center justify-center w-full gap-2 p-3 border border-black rounded-md">
        <FontAwesomeIcon icon={faGoogle} />
        <p>Sign In with Google</p>
      </button>
    </div>
  );
};

export default BorderButton;
