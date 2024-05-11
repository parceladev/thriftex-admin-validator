import { useState, useEffect } from 'react';
import ModalValidator from './ModalValidator';
import ModalBlock from './ModalBlock';
import {
  SearchTable,
  TablePagination,
  AddButton,
  EllipsisButton,
  BlockButton,
} from '../generals';
import { fetchAllValidator } from '../../utils/users_api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import ModalEditValidatorBrand from './ModalEditValidatorBrand';

const ValidatorTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isModalBlockOpen, setIsModalBlockOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [brandToEdit, setBrandToEdit] = useState(null);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, [currentPage, itemsPerPage, searchTerm]);

  const fetchUserData = async () => {
    // setIsLoading(true);
    try {
      const response = await fetchAllValidator(
        currentPage,
        itemsPerPage,
        searchTerm
      );

      if (response.data && response.data.data) {
        const apiData = response.data;
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
    if (isLoading) return <p>Loading...</p>;
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

  const openModalBlock = () => {
    setIsModalBlockOpen(true);
  };

  const closeModalBlock = () => {
    setIsModalBlockOpen(false);
  };

  const openModalEditBrand = (id) => {
    setIsModalEditOpen(true);
    setBrandToEdit(id);
  };

  const closeModalEdit = () => {
    setIsModalEditOpen(false);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownId(openDropdownId === index ? null : index);
  };
  const blockValidator = (validatorId, isActive) => {
    setSelectedUserId(validatorId);
    setIsModalBlockOpen(true);
    setOpenDropdownId(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(date.getDate()).padStart(2, '0')}`;
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

  const totalPages = Math.ceil(totalRecords / itemsPerPage);
  const showingFrom = (currentPage - 1) * itemsPerPage + 1;
  const showingTo =
    currentPage * itemsPerPage < totalRecords
      ? currentPage * itemsPerPage
      : totalRecords;
  const openModalAdd = () => {
    setIsModalAddOpen(true);
  };

  const closeModalAdd = () => {
    setIsModalAddOpen(false);
  };
  return (
    <section>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-full">
          <div className="flex items-center gap-4 rounded-md ">
            <SearchTable
              typeInput="text"
              placeholder="Search Item ID"
              value={searchTerm}
              onChange={handleSearchChange}
              onClick={handleSearch}
              typeButton="button"
              altIcon="Search Validator"
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <AddButton
              type="button"
              label="ADD VALIDATOR"
              onClick={openModalAdd}
            />
          </div>
        </div>
        <ModalValidator
          isOpen={isModalAddOpen}
          onClose={closeModalAdd}
          onCreateAccount={() => console.log('Create Account')}
        />
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
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                Date Creation
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-lightBorder dark:border-darkBorder text-center"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="border border-lightBorder dark:border-darkBorder">
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className={` ${
                  index % 2 === 0 ? 'dark:bg-darkTable' : 'dark:bg-secondary'
                }`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </th>
                <td className="px-6 py-4">
                  {item.username} {renderUserStatus(item.is_active)}
                </td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="text-center px-6 py-4">
                  {formatDate(item.created_at)}
                </td>
                <td className="px-6 py-4 text-sm text-center text-gray-900 whitespace-nowrap">
                  <div className="relative">
                    <EllipsisButton onClick={() => toggleDropdown(index)} />
                    {openDropdownId === index && (
                      <div className="absolute right-0 z-10 p-2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                        <ul className="flex flex-col items-start text-gray-700 ">
                          <li className="w-full">
                            <BlockButton
                              isActive={item.is_active}
                              onClick={() =>
                                blockValidator(item.id, item.is_active)
                              }
                            />
                          </li>
                          <li className="w-full">
                            <button
                              type="button"
                              onClick={() => openModalEditBrand(item.id)}
                              aria-label="Edit"
                              className="p-3 hover:bg-gray-100 cursor-pointer flex justify-center gap-3 w-full font-sans text-md font-light text-yellow-500"
                            >
                              <FontAwesomeIcon
                                className="w-5 h-5"
                                icon={faPenToSquare}
                              />
                              Edit Brand
                            </button>
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
        <ModalBlock
          isOpen={isModalBlockOpen}
          onClose={() => {
            setIsModalBlockOpen(false);
          }}
          userId={selectedUserId}
        />
      </div>
      <ModalEditValidatorBrand
        isOpen={isModalEditOpen}
        onClose={closeModalEdit}
        brandId={brandToEdit}
      />
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

export default ValidatorTable;
