import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { SearchValidatorIcon } from "../../../public/icons/legitcheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FaTrashCan } from "react-icons/fa6";
import ModalDeleteUser from "./ModalDeleteUser";
import { getToken } from "../../utils/TokenUtilities";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
    const token = getToken();
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
        console.error("Error fetching data:", response.data.message);
        setData([]);
        setFilteredData([]);
        setTotalRecords(0);
      }
    } catch (error) {
      console.error("Error with fetching table data:", error);
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
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
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
          <div className="flex items-center border-secondary border-[1px] rounded-md ">
            <input
              type="text"
              className="  w-full rounded-md leading-none text-gray-700 p-3 text-[14px] focus:outline-none focus:ring-0"
              placeholder="Search Item ID"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button
              type="button"
              className="border border-l-secondary  w-fit p-3"
              onClick={handleSearch}
            >
              <img src={SearchValidatorIcon} alt="Search User" />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                No.
              </th>
              <th scope="col" className="py-3 px-6">
                Username
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Date Creation
              </th>
              <th scope="col" className="py-3 px-6 text-center">
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
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="py-4 px-6">{item.username}</td>
                <td className="py-4 px-6">{item.email}</td>
                <td className="py-4 px-6">{formatDate(item.created_at)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  <button
                    type="button"
                    className=""
                    onClick={openModalDelete}
                    aria-label="Delete"
                  >
                    <FaTrashCan className="h-5 w-5 text-gray-500" />
                  </button>
                </td>
                {/* <td className="py-4 px-6">{item.validator}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <ModalDeleteUser
          isOpen={isModalDeleteOpen}
          onClose={closeModalDelete}
          onCreateAccount={() => console.log("Create Account")}
        />
      </div>
      <div className="flex justify-between items-center mt-4 border-[1px] border-secondary p-3 rounded-sm">
        <div className="flex justify-center items-center gap-5">
          <div>
            <label
              htmlFor="itemsPerPage"
              className="mx-3 font-sans font-light text-[16px]"
            >
              Display
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="ml-2  w-[42px] h-[32px] bg-buttonangle text-secondary rounded-md text-[16px] "
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <span className="font-sans font-light  text-[16px]">
            Showing {showingFrom} to {showingTo} of {totalRecords} records
          </span>
        </div>

        <div className="flex gap-2 justify-center items-center ">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-buttonangle  text-secondary w-[34px] h-[34px] rounded-md"
          >
            <FontAwesomeIcon className="text-[16px]" icon={faAngleLeft} />
          </button>
          <div className="w-[40px]  h-[40px] text-[18px] text-primary bg-secondary flex justify-center items-center rounded-md">
            <p>{currentPage}</p>
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-buttonangle  text-secondary w-[34px] h-[34px] rounded-md"
          >
            <FontAwesomeIcon className="text-[16px]" icon={faAngleRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserTable;
