import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ModalAddBrand from "./ModalAddBrand";
import ModalDeleteBrand from "./ModalDeleteBrand";
import { SearchTable, TablePagination, AddButton, EllipsisButton } from "../generals";
import { fetchBrands } from "../../utils/brand-api-service";
import ModalEditBrand from "./ModalEditBrand";
const BrandTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [brandToDelete, setBrandToDelete] = useState(null);
  const [brandToEdit, setBrandToEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, [currentPage, itemsPerPage, searchTerm]);

  const fetchUserData = async () => {
    // setIsLoading(true);
    try {
      const response = await fetchBrands(currentPage, itemsPerPage, searchTerm);
      if (response.data && response.data.data) {
        const apiData = response.data;
        setData(apiData.data);
        setFilteredData(apiData.data);
        setTotalRecords(apiData.total_data);
      } else {
        throw new Error("No data received");
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

  const openModalAddBrand = () => {
    setIsModalAddOpen(true);
  };

  const closeModalAddbrand = () => {
    setIsModalAddOpen(false);
  };

  const openModalDeleteBrand = (id) => {
    setIsModalDeleteOpen(true);
    setBrandToDelete(id);
  };

  const openModalEditBrand = (id) => {
    setIsModalEditOpen(true);
    setBrandToEdit(id);
  };

  const closeModalDeleteBrand = () => {
    setIsModalDeleteOpen(false);
  };

  const closeModalEditBrand = () => {
    setIsModalEditOpen(false);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownId(openDropdownId === index ? null : index);
  };

  const onDeleteAccount = (deletedBrandId) => {
    setData(data.filter((brand) => brand.id !== deletedBrandId));
    setFilteredData(
      filteredData.filter((brand) => brand.id !== deletedBrandId)
    );
    fetchUserData();
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
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <AddButton
              type="button"
              label="ADD BRAND"
              onClick={openModalAddBrand}
            />
          </div>
        </div>
        <ModalAddBrand
          isOpen={isModalAddOpen}
          onClose={closeModalAddbrand}
          onCreateAccount={() => console.log("Create Account")}
        />
      </div>
      <div className="relative  overflow-x-auto max-h-[380px] shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Brand Logo
              </th>
              <th scope="col" className="px-6 py-3">
                Brand Name
              </th>
              <th scope="col" className="px-6 py-3 ">
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
                <td className="px-6 py-4 ">
                  <img
                    src={item.foto}
                    alt=""
                    width={34}
                    height={34}
                    className="bg-cover"
                  />
                </td>
                <td className="px-6 py-4">{item.brand_name}</td>
                <td className="px-6 py-4 ">{formatDate(item.created_at)}</td>
                <td className="flex justify-center gap-2 px-6 py-4 text-sm text-center text-gray-900 whitespace-nowrap">
                  <EllipsisButton onClick={() => toggleDropdown(index)} />
                  {openDropdownId === index && (
                    <div className="absolute right-0 z-10 w-48 p-2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                      <ul className="flex flex-col items-start text-gray-700 ">
                        <li className="w-full">
                          <button
                            type="button"
                            onClick={() => openModalEditBrand(item.id)}
                            aria-label="Edit"
                            className="p-3 hover:bg-gray-100 cursor-pointer flex  gap-3 w-full font-sans text-[14px] font-light text-blue-500"
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className ="w-5 h-5  text-blue-500"
                            />
                            Edit Brand
                          </button>
                        </li>
                        <li className="w-full">
                          <button
                            type="button"
                            onClick={() => openModalDeleteBrand(item.id)}
                            aria-label="Delete"
                            className="p-3 hover:bg-gray-100 cursor-pointer flex  gap-3 w-full font-sans text-[14px] font-light text-red-600"
                          >
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              className="w-5 h-5 text-gray-500 text-red-600"
                            />
                            Delete Brand
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalDeleteBrand
          isOpen={isModalDeleteOpen}
          onClose={closeModalDeleteBrand}
          brandId={brandToDelete}
          onDeleteAccount={onDeleteAccount}
        />
        <ModalEditBrand
          isOpen={isModalEditOpen}
          onClose={closeModalEditBrand}
          brandId={brandToEdit}
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

export default BrandTable;
