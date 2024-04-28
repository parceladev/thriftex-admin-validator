import { useState, useEffect } from 'react';
import { SearchTable, TablePagination } from '../generals';
import { fectchLegitData } from '../../utils/legit-api-service';

const getStatusLabel = (legit_status) => {
  switch (legit_status) {
    case 'legited':
      return 'DONE';
    case 'posted':
      return 'PENDING';
    default:
      return legit_status;
  }
};

const getStatusClasses = (legit_status) => {
  switch (legit_status) {
    case 'done':
      return 'bg-secondary text-primary';
    case 'posted':
      return 'bg-buttonpending text-primary';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

const getAuthenticityLabel = (legit_status, check_result) => {
  if (legit_status === 'posted') {
    return '-';
  } else if (legit_status === 'Done' && check_result === 'ORIGINAL') {
    return 'ORIGINAL';
  } else if (check_result === 'FAKE') {
    return 'FAKE';
  }

  return '-';
};

const getAuthenticityClasses = (check_result) => {
  switch (check_result) {
    case 'FAKE':
      return 'bg-primary text-secondary border-[1px] border-secondary';
    case 'ORIGINAL':
      return 'bg-secondary text-primary';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

const ValidatorLegitCheckTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const totalRecords = filteredData.length;
  const showingFrom = (currentPage - 1) * itemsPerPage + 1;
  const showingTo = Math.min(showingFrom + itemsPerPage - 1, totalRecords);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fectchLegitData();
      if (data && data.status && Array.isArray(data.data.data)) {
        setFilteredData(data.data.data);
      } else {
        setError('Failed to fetch data or data format incorrect');
        setFilteredData([]);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setFilteredData(
      filteredData.filter((item) =>
        item.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSearch = () => {
  //   setFilteredData(
  //     initialData.filter((item) =>
  //       item.id.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  // };

  // const handleItemsPerPageChange = (event) => {
  //   setItemsPerPage(Number(event.target.value));
  //   setCurrentPage(1); // Reset ke halaman pertama setelah perubahan jumlah item per halaman
  // };

  // const handleNextPage = () => {
  //   setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  // };

  // const handlePreviousPage = () => {
  //   setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  // };

  // const showingFrom = (currentPage - 1) * itemsPerPage + 1;
  // const showingTo = Math.min(showingFrom + itemsPerPage - 1, totalRecords);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
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
            altIcon="Search Legit Check"
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Item ID
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Authenticity
              </th>
              <th scope="col" className="px-6 py-3">
                Date Uploaded
              </th>
              <th scope="col" className="px-6 py-3">
                Validator
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </th>
                <td className="px-6 py-4">{item.case_code}</td>
                <td className="px-6 py-4">{item.brand_name}</td>
                <td className="px-5 py-2 whitespace-no-wrap">
                  <span
                    className={`rounded-md text-xs font-semibold mr-2 px-4 py-1 ${getStatusClasses(
                      item.legit_status
                    )}`}
                  >
                    {getStatusLabel(item.legit_status)}
                  </span>
                </td>
                <td className="px-5 py-2 whitespace-no-wrap">
                  <span
                    className={`rounded-md text-xs font-semibold px-4 py-1 ${getAuthenticityClasses(
                      item.check_result
                    )}`}
                  >
                    {getAuthenticityLabel(item.legit_status, item.check_result)}
                  </span>
                </td>
                <td className="px-6 py-4">{item.submit_time}</td>
                <td className="px-6 py-4">You</td>
              </tr>
            ))}
          </tbody>
        </table>
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
