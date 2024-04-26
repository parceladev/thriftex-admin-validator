import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const TablePagination = (props) => {
  const {
    htmlFor,
    label,
    id,
    value,
    onChange,
    disabledLeft,
    disabledRight,
    onClickLeft,
    onClickRight,
    showingFrom,
    showingTo,
    totalRecords,
    currentPage,
  } = props;

  return (
    <div className="flex justify-between items-center mt-4 border-[1px] border-secondary p-3 rounded-sm">
      <div className="flex items-center justify-center gap-5">
        <div>
          <label
            htmlFor={htmlFor}
            className="mx-3 font-sans font-light text-[16px]"
          >
            {label}
          </label>
          <select
            id={id}
            value={value}
            onChange={onChange}
            className="ml-2  w-[42px] h-[32px] bg-buttonangle text-secondary rounded-md text-[16px]"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <span className="font-sans font-light text-[16px]">
          Showing {showingFrom} to {showingTo} of {totalRecords} records
        </span>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={onClickLeft}
          disabled={disabledLeft}
          className="bg-buttonangle text-secondary w-[34px] h-[34px] rounded-md"
        >
          <FontAwesomeIcon className="text-[16px]" icon={faAngleLeft} />
        </button>
        <div className="w-[40px] h-[40px] text-[18px] text-primary bg-secondary flex justify-center items-center rounded-md">
          <p>{currentPage}</p>
        </div>
        <button
          onClick={onClickRight}
          disabled={disabledRight}
          className="bg-buttonangle text-secondary w-[34px] h-[34px] rounded-md"
        >
          <FontAwesomeIcon className="text-[16px]" icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

TablePagination.propTypes = {
  htmlFor: Proptypes.string,
  label: Proptypes.string,
  id: Proptypes.string,
  value: Proptypes.string,
  onChange: Proptypes.func,
  disabledLeft: Proptypes.bool,
  disabledRight: Proptypes.bool,
  onClickLeft: Proptypes.func,
  onClickRight: Proptypes.func,
  showingFrom: Proptypes.number,
  showingTo: Proptypes.number,
  totalRecords: Proptypes.number,
  currentPage: Proptypes.number,
};

export default TablePagination;
