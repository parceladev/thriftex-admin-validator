import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { SearchValidatorIcon } from '../../../public/icons/legitcheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FaTrashCan } from 'react-icons/fa6';
import ModalDeleteUser from './ModalDeleteUser';
import { SearchTable, TablePagination } from '../generals';
import { getAccessToken } from '../../utils/token-utilities';

const UserTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, [currentPage, itemsPerPage, searchTerm]);

  const fetchUserData = async () => {
    setIsLoading(true);
    const token = getAccessToken();
    try {
      const response = await axios.get(
        `http://localhost/rest.thriftex/api/users/list?page=${currentPage}&limit=${itemsPerPage}&search=${searchTerm}`,
        { headers: { Authorization: `${token}` } }
      );
      if (response.data && response.data.data) {
        const apiData = response.data.data;
        setData(apiData.data);
        setFilteredData(apiData.data);
        setTotalRecords(apiData.total_data);
      } else {
        console.error('Error fetching data:', response.data.message);
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
    setIsLoading(false);
  };

  if (isLoading) {
    <FontAwesomeIcon icon={faSpinner} />;
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    } else {
      fetchUserData();
    }
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

  const openModalDelete = () => {
    setIsModalDeleteOpen(true);
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const totalPages = Math.ceil(totalRecords / itemsPerPage);
  const showingFrom = (currentPage - 1) * itemsPerPage + 1;
  const showingTo =
    currentPage * itemsPerPage < totalRecords
      ? currentPage * itemsPerPage
      : totalRecords;
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Date Creation
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
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
                <td className="px-6 py-4">{item.username}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{formatDate(item.created_at)}</td>
                <td className="px-6 py-4 text-sm text-center text-gray-900 whitespace-nowrap">
                  <button
                    type="button"
                    className=""
                    onClick={openModalDelete}
                    aria-label="Delete"
                  >
                    <FaTrashCan className="w-5 h-5 text-gray-500" />
                  </button>
                </td>
                {/* <td className="px-6 py-4">{item.validator}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <ModalDeleteUser
          isOpen={isModalDeleteOpen}
          onClose={closeModalDelete}
          onCreateAccount={() => console.log('Create Account')}
        />
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

export default UserTable;
