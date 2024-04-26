import { useState } from 'react';
import { SearchValidatorIcon } from '../../../public/icons/legitcheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { SearchTable, TablePagination } from '../generals';

const initialData = [
  {
    id: '#4142-ONZX',
    brand: 'Vans',
    status: 'Done',
    authenticity: 'FAKE',
    date: '04-01-2024',
    validator: 'Alif Lakipadada',
  },
  {
    id: '#7294-OXAZ',
    brand: 'Converse',
    status: 'Pending',
    authenticity: '-',
    date: '04-01-2024',
    validator: 'Bagus Nararya',
  },
  {
    id: '#3142-ANZX',
    brand: 'Nike',
    status: 'Done',
    authenticity: 'ORIGINAL',
    date: '05-01-2024',
    validator: 'Ayu Lestari',
  },
  {
    id: '#8342-KMAZ',
    brand: 'Adidas',
    status: 'Done',
    authenticity: 'FAKE',
    date: '06-01-2024',
    validator: 'Bayu Anggara',
  },
  {
    id: '#5294-LPAZ',
    brand: 'Puma',
    status: 'Pending',
    authenticity: '-',
    date: '07-01-2024',
    validator: 'Citra Dewi',
  },
  {
    id: '#6142-UMZX',
    brand: 'Reebok',
    status: 'Done',
    authenticity: 'ORIGINAL',
    date: '08-01-2024',
    validator: 'Dian Sastro',
  },
  {
    id: '#4142-ONZX',
    brand: 'Vans',
    status: 'Done',
    authenticity: 'FAKE',
    date: '04-01-2024',
    validator: 'Alif Lakipadada',
  },
  {
    id: '#7294-OXAZ',
    brand: 'Converse',
    status: 'Pending',
    authenticity: '-',
    date: '04-01-2024',
    validator: 'Bagus Nararya',
  },
  {
    id: '#3142-ANZX',
    brand: 'Nike',
    status: 'Done',
    authenticity: 'ORIGINAL',
    date: '05-01-2024',
    validator: 'Ayu Lestari',
  },
  {
    id: '#8342-KMAZ',
    brand: 'Adidas',
    status: 'Done',
    authenticity: 'FAKE',
    date: '06-01-2024',
    validator: 'Bayu Anggara',
  },
  {
    id: '#5294-LPAZ',
    brand: 'Puma',
    status: 'Pending',
    authenticity: '-',
    date: '07-01-2024',
    validator: 'Citra Dewi',
  },
  {
    id: '#6142-UMZX',
    brand: 'Reebok',
    status: 'Done',
    authenticity: 'ORIGINAL',
    date: '08-01-2024',
    validator: 'Dian Sastro',
  },
];
const getStatusClasses = (status) => {
  switch (status) {
    case 'Done':
      return 'bg-secondary text-primary';
    case 'Pending':
      return 'bg-buttonpending text-primary';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

const getAuthenticityClasses = (authenticity) => {
  switch (authenticity) {
    case 'FAKE':
      return 'bg-primary text-secondary border-[1px] border-secondary';
    case 'ORIGINAL':
      return 'bg-secondary text-primary';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case 'Done':
      return 'DONE';
    case 'Pending':
      return 'PENDING';
    default:
      return status;
  }
};

const getAuthenticityLabel = (status, authenticity) => {
  if (status === 'Pending') {
    return '-';
  } else if (status === 'Done' && authenticity === 'ORIGINAL') {
    return 'ORIGINAL';
  } else if (authenticity === 'FAKE') {
    return 'FAKE';
  }

  return '-';
};

const LegitCheckTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState(initialData);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalRecords = filteredData.length;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setFilteredData(
      initialData.filter((item) =>
        item.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset ke halaman pertama setelah perubahan jumlah item per halaman
  };

  const handleNextPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  };

  const showingFrom = (currentPage - 1) * itemsPerPage + 1;
  const showingTo = Math.min(showingFrom + itemsPerPage - 1, totalRecords);

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
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.brand}</td>
                <td className="px-5 py-2 whitespace-no-wrap">
                  <span
                    className={`rounded-md text-xs font-semibold mr-2 px-4 py-1 ${getStatusClasses(
                      item.status
                    )}`}
                  >
                    {getStatusLabel(item.status)}
                  </span>
                </td>
                <td className="px-5 py-2 whitespace-no-wrap">
                  <span
                    className={`rounded-md text-xs font-semibold px-4 py-1 ${getAuthenticityClasses(
                      item.authenticity
                    )}`}
                  >
                    {getAuthenticityLabel(item.status, item.authenticity)}
                  </span>
                </td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.validator}</td>
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

export default LegitCheckTable;
