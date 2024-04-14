// eslint-disable-next-line no-unused-vars
import React from 'react';

const InputEmail = ({value, onChange}) => {
  return (
    <div>
      <input
        type="email"
        value={value}
        required
        onChange={onChange}
        placeholder="Username or Email"
        className="w-full p-4 text-black placeholder-black border border-black rounded-md"
      />
    </div>
  );
};

export default InputEmail;
