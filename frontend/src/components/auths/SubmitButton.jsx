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
  name: PropTypes.string.isRequired,
};

export default SubmitButton;
