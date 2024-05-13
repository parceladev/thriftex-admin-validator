import Proptypes from 'prop-types';
import { SearchValidatorIcon } from '../../../public/icons/legitcheck';

const SearchTable = (props) => {
  const {
    typeInput,
    placeholder,
    value,
    onChange,
    onClick,
    typeButton,
    altIcon,
  } = props;

  return (
    <div className="flex w-full">
      <input
        type={typeInput}
        className="w-full dark:text-textWhite dark:bg-secondary border-[1px] border-lightBorder rounded-s-sm border-r-0 dark:border-darkBorder leading-none text-gray-700 p-3 text-md focus:outline-none focus:ring-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        type={typeButton}
        className="p-3 border rounded-e-sm dark:bg-darkButton w-fit border-lightBorder dark:border-darkBorder"
        onClick={onClick}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3503 0.174866C10.4334 0.175073 8.54454 0.634467 6.84171 1.51459C5.13888 2.39471 3.67166 3.66995 2.56288 5.23356C1.45411 6.79716 0.736034 8.60363 0.468776 10.5017C0.201518 12.3999 0.392853 14.3344 1.02676 16.1433C1.66067 17.9523 2.71871 19.5831 4.11231 20.8992C5.50591 22.2153 7.19451 23.1785 9.03676 23.708C10.879 24.2374 12.8213 24.3179 14.701 23.9426C16.5808 23.5673 18.3432 22.7472 19.8409 21.5509L24.7409 26.4509C24.9924 26.6937 25.3292 26.8281 25.6788 26.8251C26.0284 26.8221 26.3628 26.6818 26.61 26.4346C26.8572 26.1874 26.9975 25.853 27.0005 25.5034C27.0035 25.1538 26.8691 24.817 26.6263 24.5655L21.7263 19.6655C23.1369 17.9 24.0204 15.772 24.2749 13.5266C24.5295 11.2811 24.1448 9.00935 23.1651 6.97286C22.1855 4.93637 20.6507 3.2179 18.7374 2.01526C16.8241 0.81261 14.6101 0.17467 12.3503 0.174866ZM4.35027 12.1749C4.35027 11.1243 4.55719 10.084 4.95923 9.1134C5.36127 8.14279 5.95054 7.26088 6.69341 6.51801C7.43628 5.77514 8.31819 5.18587 9.2888 4.78383C10.2594 4.38179 11.2997 4.17487 12.3503 4.17487C13.4008 4.17487 14.4411 4.38179 15.4117 4.78383C16.3823 5.18587 17.2643 5.77514 18.0071 6.51801C18.75 7.26088 19.3393 8.14279 19.7413 9.1134C20.1433 10.084 20.3503 11.1243 20.3503 12.1749C20.3503 14.2966 19.5074 16.3314 18.0071 17.8317C16.5068 19.332 14.472 20.1749 12.3503 20.1749C10.2285 20.1749 8.1937 19.332 6.69341 17.8317C5.19312 16.3314 4.35027 14.2966 4.35027 12.1749Z"
            fill="currentColor"
          />
        </svg>
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
