import { PropTypes } from 'prop-types';

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
  } = props;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <label htmlFor={htmlFor} className="text-xl font-semibold">
          {label}
        </label>
        <span className={`text-gray-700 ${isOptional ? '' : 'hidden'}`}>
          Optional
        </span>
        <span className={`text-red-500 ${isMust ? '' : 'hidden'}`}>*</span>
      </div>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="p-2 border-b-2 rounded border-slate-800 focus:outline-none focus:ring-0"
      />
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isOptional: PropTypes.string,
  isMust: PropTypes.string,
};

export default InputForm;
