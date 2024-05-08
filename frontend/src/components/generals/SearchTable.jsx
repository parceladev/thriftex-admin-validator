import Proptypes from 'prop-types';
import { SearchValidatorIcon } from '../../../public/icons/legitcheck';

const SearchTable = (props) => {
  const { typeInput, placeholder, value, onChange, onClick, typeButton, altIcon } = props;

  return (
    <div className="flex w-full">
      <input
        type={typeInput}
        className="w-full  border-secondary border-[1px] rounded-s-md border-r-0 leading-none text-gray-700 p-3 text-[14px] focus:outline-none focus:ring-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button type={typeButton} className="p-3 border rounded-e-md border-secondary w-fit" onClick={onClick}>
        <img src={SearchValidatorIcon} alt={altIcon} />
      </button>
    </div>
  );
};

SearchTable.propTypes = {
  typeInput: Proptypes.string,
  placeholder: Proptypes.string,
  value: Proptypes.string,
  onChange: Proptypes.func,
  onClick: Proptypes.func,
  typeButton: Proptypes.string,
  altIcon: Proptypes.string,
};

export default SearchTable;
