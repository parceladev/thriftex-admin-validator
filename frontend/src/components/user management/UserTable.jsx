import { useState, useEffect } from 'react';
import ModalBlockUser from './ModalBlockUser';
import { fetchAllUsers } from '../../utils/users_api-service';
import { debounce } from 'lodash';
import { useTranslation } from 'react-i18next';

import {
  BlockButton,
  EllipsisButton,
  SearchTable,
  TablePagination,
} from '../generals';

const UserTable = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalBlockOpen, setIsModalBlockOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, [currentPage, itemsPerPage, searchTerm]);

  const debouncedLoadData = debounce(() => {
    loadData();
  }, 3000);

  const fetchUserData = async () => {
    // setIsLoading(true);
    try {
      const response = await fetchAllUsers(
        currentPage,
        itemsPerPage,
        searchTerm
      );

      if (response.data && response.data.data) {
        const apiData = response.data;
        setData(apiData.data);
        setFilteredData(apiData.data);
        setTotalRecords(apiData.total_data);
        setIsLoading(false);
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
    if (isLoading) return <p>Loading...</p>;
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    debouncedLoadData();
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

  const openModalBlock = () => {
    setIsModalBlockOpen(true);
  };

  const closeModalBlock = () => {
    setIsModalBlockOpen(false);
  };

  const renderUserStatus = (isActive) => {
    if (isActive) {
      return (
        <span className="ml-2 font-sans text-sm font-light text-green-500">
          (Active)
        </span>
      );
    } else {
      return (
        <span className="ml-2 font-sans text-sm font-light text-red-500">
          (Blocked)
        </span>
      );
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const toggleDropdown = (index) => {
    setOpenDropdownId(openDropdownId === index ? null : index);
  };

  const blockUser = (userId, isActive) => {
    setSelectedUserId(userId);
    setIsModalBlockOpen(true);
    setOpenDropdownId(null);
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
      <div className="relative overflow-x-auto max-h-[360px] shadow-md">
        <table className="w-full text-sm text-left text-gray-500 border dark:text-gray-400 border-lightBorder">
          <thead className="text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-secondary dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-center border border-lightBorder dark:border-darkBorder"
              >
                No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center border border-lightBorder dark:border-darkBorder"
              >
                {t('Username')}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center border border-lightBorder dark:border-darkBorder"
              >
                {t('Email')}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center border border-lightBorder dark:border-darkBorder"
              >
                {t('Date Creation')}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center border border-lightBorder dark:border-darkBorder"
              >
                {t('Action')}
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
                  className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </th>
                <td className="px-6 py-4">
                  {item.username}
                  {renderUserStatus(item.is_active)}
                </td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4 text-center">
                  {formatDate(item.created_at)}
                </td>
                <td className="px-6 py-4 text-sm text-center text-gray-900 whitespace-nowrap">
                  <div className="relative">
                    <EllipsisButton onClick={() => toggleDropdown(index)} />
                    {openDropdownId === index && (
                      <div className="absolute right-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                        <ul className="text-gray-700">
                          <li className="flex justify-center">
                            <BlockButton
                              isActive={item.is_active}
                              onClick={() => blockUser(item.id, item.is_active)}
                            />
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalBlockUser
          isOpen={isModalBlockOpen}
          onClose={() => {
            setIsModalBlockOpen(false);
          }}
          userId={selectedUserId}
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
