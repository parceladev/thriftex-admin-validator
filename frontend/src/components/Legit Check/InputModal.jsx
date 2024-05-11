import React from 'react';
import Proptypes from 'prop-types';

const InputModal = (props) => {
  const {
    label,
    name,
    type,
    htmlFor,
    id,
    isRequired = 'none',
    value,
    onChange,
    placeholder,
    readOnly = false,
  } = props;

  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-2 mb-2 font-sans text-lg font-semibold uppercase text-sans"
      >
        {label}
        {isRequired === 'optional' && (
          <span className="text-xs font-normal text-gray-700 dark:text-textWhite">
            {' '}
            (Optional)
          </span>
        )}
        {isRequired === 'required' && (
          <span className="text-xs font-normal text-red-500"> (Required)</span>
        )}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        className="w-full p-3 border-b-2 bg-primary dark:bg-slate-800 border-secondary dark:border-primary text-[14px] focus:outline-none"
      />
    </div>
  );
};

InputModal.propTypes = {
  label: Proptypes.string,
  type: Proptypes.string,
  htmlFor: Proptypes.string,
  className: Proptypes.string,
  placeholder: Proptypes.string,
  isCategoryClassName: Proptypes.string,
  id: Proptypes.string,
  name: Proptypes.string,
  isRequired: Proptypes.oneOf(['required', 'optional', 'none']),
  value: Proptypes.oneOfType([
    Proptypes.string,
    Proptypes.number,
    Proptypes.instanceOf(File),
  ]),
  onChange: Proptypes.func,
  readOnly: Proptypes.bool,
};

export default InputModal;
