import { PropTypes } from 'prop-types';

const InputEmail = (props) => {
  const { value, onChange } = props;

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

InputEmail.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default InputEmail;
