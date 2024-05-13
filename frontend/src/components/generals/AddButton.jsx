import { FaPlus } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const AddButton = (props) => {
  const { type, label, onClick } = props;

  return (
    <button
      type={type}
      className="flex items-center dark:hover:bg-gray-700 justify-center w-1/4 py-3 text-center uppercase text-textWhite dark:bg-darkButton bg-lightButton dark:text-textWhite"
      onClick={onClick}
    >
      <span className="mr-2">{label}</span>
      <FaPlus className="w-5 h-5" />
    </button>
  );
};

AddButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default AddButton;
