import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InputForm = (props) => {
  const {
    label,
    name,
    htmlFor,
    type,
    id,
    placeholder,
    isRequired = 'none',
    value,
    onChange,
    children,
    className,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNumericChange = (e) => {
    const regex = /^[0-9]*$/;
    if (regex.test(e.target.value) || e.target.value === '') {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <label htmlFor={htmlFor} className="text-xl font-semibold">
          {label}
        </label>
        {isRequired === 'optional' && (
          <span className="text-gray-700 dark:text-textWhite">(Optional)</span>
        )}
        {isRequired === 'required' && (
          <span className="text-red-500">(Required)</span>
        )}
      </div>
      <div className="relative">
        {type !== 'select' ? (
          <>
            <input
              type={
                type !== 'password' ? type : showPassword ? 'text' : 'password'
              }
              id={id}
              name={name}
              value={value}
              onChange={type === 'tel' ? handleNumericChange : onChange}
              placeholder={placeholder}
              readOnly={isRequired === 'none'}
              className={`w-full p-2 border-b-2 bg-primary dark:bg-secondary rounded border-slate-800 dark:border-darkBorder focus:outline-none focus:ring-0 ${className}`}
            />
            {type === 'password' && isRequired !== 'none' && (
              <button
                type="button"
                className={`absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 ${className}`}
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
            value={value}
            onChange={onChange}
            disabled={isRequired === 'none'}
            className={`w-full p-2 border-b-2 rounded bg-primary dark:bg-secondary border-slate-800 dark:border-darkBorder focus:outline-none focus:ring-0 ${className}`}
          >
            {children}
          </select>
        )}
      </div>
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.oneOf(['required', 'optional', 'none']),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(File),
  ]),
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputForm;
