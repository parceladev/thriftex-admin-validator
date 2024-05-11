import { useState, useEffect } from 'react';
import { SearchTable, TablePagination } from '../generals';
import { fetchLegitDataValidator } from '../../utils/legit-api-service';
import ItemDetailModal from './ItemDetailModal';
import { debounce } from 'lodash';

const getStatusLabel = (check_result) => {
  switch (check_result) {
    case 'Original':
      return 'DONE';
    case 'fake':
      return 'DONE';
    case 'Waiting':
      return 'PENDING';
    case 'Canceled':
      return 'DECLINED';
    default:
      return check_result;
  }
};

const getStatusClasses = (check_result) => {
  switch (check_result) {
    case 'Original':
      return 'bg-secondary text-primary dark:bg-primary dark:text-textBlack';
    case 'fake':
      return 'bg-secondary text-primary dark:bg-primary dark:text-textBlack';
    case 'Waiting':
      return 'bg-gray-300 dark:bg-gray-700 dark:text-textWhite text-gray-800';
    case 'Canceled':
      return 'bg-red-200 text-gray-800';
    default:
      return 'bg-gray-200 text-gray-800 dark:bg-gray-200';
  }
};

const getAuthenticityLabel = (check_result) => {
  if (check_result === 'Waiting') {
    return '-';
  } else if (check_result === 'Original') {
    return 'ORIGINAL';
  } else if (check_result === 'fake') {
    return 'FAKE';
  } else if (check_result === 'Canceled') {
    return '-';
  } else {
    return '-';
  }
};

const getAuthenticityClasses = (check_result) => {
  switch (check_result) {
    case 'fake':
      return 'bg-primary text-secondary border-[1px] border-secondary dark:bg-secondary dark:border-white dark:text-textWhite';
    case 'Original':
      return 'bg-secondary text-primary dark:bg-primary dark:text-textBlack';
    case 'Waiting':
      return 'bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-textWhite';
    case 'Canceled':
      return 'bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-textWhite';
    default:
      return 'bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-textWhite';
  }
};

const ValidatorLegitCheckTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const totalPages = Math.ceil(totalRecords / itemsPerPage);
  const showingFrom = (currentPage - 1) * itemsPerPage + 1;
  const showingTo =
    currentPage * itemsPerPage < totalRecords
      ? currentPage * itemsPerPage
      : totalRecords;
  const [cache, setCache] = useState({});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    loadData();
  }, [currentPage, itemsPerPage]);

  const debouncedLoadData = debounce(() => {
    loadData();
  }, 3000);

  const loadData = async () => {
    setLoading(true);
    const cacheKey = `${currentPage}-${itemsPerPage}-${searchTerm}`;
    if (cache[cacheKey]) {
      const cachedData = cache[cacheKey];
      setData(cachedData.data);
      setTotalRecords(cachedData.totalRecords);
      setFilteredData(cachedData.data);
      setLoading(false);
      return;
    }

    try {
      const data = await fetchLegitDataValidator(
        currentPage,
        itemsPerPage,
        searchTerm
      );
      if (data.status) {
        setData(data.data.data);
        setTotalRecords(data.data.total_data);
        setFilteredData(data.data.data);
        setCache((prev) => ({
          ...prev,
          [cacheKey]: {
            data: data.data.data,
            totalRecords: data.data.total_data,
          },
        }));
      } else {
        setError('Failed to fetch data or data format incorrect');
        setData([]);

        setFilteredData([]);
        setTotalRecords(0);
      }
    } catch (error) {
      console.error('Error with fetching table data:', error);
      setData([]);
      setFilteredData([]);
      setTotalRecords(0);
    }
    setLoading(false);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    debouncedLoadData();
  };

  const handleSearch = () => {
    loadData();
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalRecords / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <div className="flex items-center justify-center mb-4">
        <div className="w-full ">
          <SearchTable
            typeInput="text"
            placeholder="Search Item ID"
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={handleSearch}
            typeButton="button"
            altIcon="Search User"
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </div>
      </div>
      <div className="relative overflow-x-auto max-h-[360px] shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-lightBorder">
          <thead className="text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-secondary dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                Item ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                Brand
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                Authenticity
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                Date Uploaded
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                Validator
              </th>
            </tr>
          </thead>
          <tbody className="border border-lightBorder dark:border-darkBorder">
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={` ${
                  index % 2 === 0 ? 'dark:bg-darkTable' : 'dark:bg-secondary'
                }`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </th>
                <td
                  className="text-center px-6 py-4 text-blue-400 underline cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  {item.case_code}
                </td>
                <td className="text-center px-6 py-4">{item.brand_name}</td>
                <td className="text-center px-5 py-2 whitespace-no-wrap">
                  <span
                    className={`rounded-md text-xs font-semibold mr-2 px-4 py-1 ${getStatusClasses(
                      item.check_result
                    )}`}
                  >
                    {getStatusLabel(item.check_result)}
                  </span>
                </td>
                <td className="text-center px-5 py-2 whitespace-no-wrap">
                  <span
                    className={`rounded-md text-xs font-semibold px-4 py-1 ${getAuthenticityClasses(
                      item.check_result
                    )}`}
                  >
                    {getAuthenticityLabel(item.check_result)}
                  </span>
                </td>
                <td className="text-center px-6 py-4">{item.submit_time}</td>
                <td className="text-center px-6 py-4">You</td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedItem && (
          <ItemDetailModal
            isOpen={modalOpen}
            onClose={closeModal}
            item={selectedItem}
          />
        )}
      </div>
      <TablePagination
        htmlFor="itemsPerPage"
        label="Display"
        id="itemsPerPage"
        value={itemsPerPage.toString()}
        onChange={handleItemsPerPageChange}
        disabledLeft={currentPage === 1}
        disabledRight={currentPage === totalPages}
        onClickLeft={handlePreviousPage}
        onClickRight={handleNextPage}
        showingFrom={showingFrom}
        showingTo={showingTo}
        totalRecords={totalRecords}
        currentPage={currentPage}
      />
    </section>
  );
};

export default ValidatorLegitCheckTable;
