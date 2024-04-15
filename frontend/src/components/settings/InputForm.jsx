import { PropTypes } from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const InputForm = (props) => {
  const {
    label,
    htmlFor,
    type,
    id,
    name,
    placeholder,
    isOptional = false,
    isMust = false,
    children,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <label htmlFor={htmlFor} className="text-xl font-semibold">
          {label}
        </label>
        <span className={`text-gray-700 ${isOptional ? "" : "hidden"}`}>
          Optional
        </span>
        <span className={`text-red-500 ${isMust ? "" : "hidden"}`}>*</span>
      </div>
      <div className="relative">
        {type !== "select" ? (
          <>
            <input
              type={
                type !== "password" ? type : showPassword ? "text" : "password"
              }
              id={id}
              name={name}
              placeholder={placeholder}
              className="w-full p-2 border-b-2 rounded border-slate-800 focus:outline-none focus:ring-0"
            />
            {type === "password" && (
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            )}
          </>
        ) : (
          <select
            id={id}
            name={name}
            className="w-full p-2 border-b-2 rounded border-slate-800 focus:outline-none focus:ring-0"
          >
            {children}
          </select>
        )}
      </div>
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isOptional: PropTypes.bool,
  isMust: PropTypes.bool,
  children: PropTypes.node,
};

export default InputForm;
