// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PropTypes } from 'prop-types';

const SubmitButton = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="w-full p-3 text-center rounded-md bg-black/30">
        {name}
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired, // Menandakan bahwa `placeholder` adalah prop yang diperlukan dan harus bertipe string
};

export default SubmitButton;
