import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Proptypes from "prop-types";

const InputPassword = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-4 text-black placeholder-black border border-black rounded-md"
      />
      <button
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 px-3 py-2"
        type="button"
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </button>
    </div>
  );
};

InputPassword.prototype = {
  value: Proptypes.string,
  onChange: Proptypes.string,
  placeholder: Proptypes.string,
};

export default InputPassword;
