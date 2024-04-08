import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PageSizeSelector = ({ handleChangePageSize }) => {
  return (
    <div className=''>
      <label htmlFor="pageSize" className="pr-5">
        Display
      </label>
      <select
        id="pageSize"
        className="px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) => handleChangePageSize(parseInt(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

const PageInfo = ({ currentPage, totalRecords, itemsPerPage }) => {
  const startRecord = (currentPage - 1) * itemsPerPage + 1;
  const endRecord = Math.min(currentPage * itemsPerPage, totalRecords);
  return (
    <span className='ml-4'>
      Showing {startRecord} to {endRecord} of {totalRecords} records
    </span>
  );
};

const PaginationButton = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-2 py-2 rounded-md border border-gray-300 bg-gray-300 text-sm font-medium ${
        disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
      }`}
    >
      {children}
    </button>
  );
};

const Pagination = ({ currentPage, totalRecords, itemsPerPage, handleChangePage, handleChangePageSize }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Math.ceil(totalRecords / itemsPerPage);

  return (
    <div className="mt-4 flex justify-between items-center">
      <div className="flex justify-start items-center">
        <PageSizeSelector handleChangePageSize={handleChangePageSize} />
        <PageInfo currentPage={currentPage} totalRecords={totalRecords} itemsPerPage={itemsPerPage} />
      </div>
     
      <div className="flex items-center">
        <PaginationButton onClick={() => handleChangePage(currentPage - 1)} disabled={isFirstPage}>
          <FaChevronLeft />
        </PaginationButton>
        <span className="mx-4 text-sm font-medium text-white bg-gray-600 px-4 py-2 rounded-lg">
          {currentPage}
        </span>
        <PaginationButton onClick={() => handleChangePage(currentPage + 1)} disabled={isLastPage}>
          <FaChevronRight />
        </PaginationButton>
      </div>
    </div>
  );
};

export default Pagination;
