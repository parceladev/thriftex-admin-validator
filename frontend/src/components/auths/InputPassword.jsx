import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InputPassword = (props) => {
  const { placeholder } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        className="p-4 bg-[rgba(217,217,217,0.2)] placeholder-white text-white w-full rounded-md"
      />
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 my-auto text-white cursor-pointer right-4"
      />
    </div>
  );
};

InputPassword.propTypes = {
  placeholder: PropTypes.string.isRequired, // Menandakan bahwa `placeholder` adalah prop yang diperlukan dan harus bertipe string
};

export default InputPassword;
