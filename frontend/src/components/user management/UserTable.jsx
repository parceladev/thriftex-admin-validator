import { useState } from 'react';
import { SearchValidatorIcon } from '../../../public/icons/legitcheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaTrashCan } from 'react-icons/fa6';
import ModalDeleteUser from './ModalDeleteUser';

const initialData = [
  {
    id: 1,
    username: 'DavidHernandez',
    email: 'david@example.com',
    dateCreation: '2024-04-16',
  },
  {
    id: 2,
    username: 'AmandaMartinez',
    email: 'amanda@example.com',
    dateCreation: '2024-04-17',
  },
  {
    id: 3,
    username: 'JamesRodriguez',
    email: 'james@example.com',
    dateCreation: '2024-04-18',
  },
  {
    id: 4,
    username: 'MelissaLopez',
    email: 'melissa@example.com',
    dateCreation: '2024-04-19',
  },
  {
    id: 5,
    username: 'DanielGonzalez',
    email: 'daniel@example.com',
    dateCreation: '2024-04-20',
  },
  {
    id: 6,
    username: 'LaurenPerez',
    email: 'lauren@example.com',
    dateCreation: '2024-04-21',
  },
  {
    id: 7,
    username: 'KevinTaylor',
    email: 'kevin@example.com',
    dateCreation: '2024-04-22',
  },
  {
    id: 8,
    username: 'AshleyMoore',
    email: 'ashley@example.com',
    dateCreation: '2024-04-23',
  },
  {
    id: 9,
    username: 'RyanClark',
    email: 'ryan@example.com',
    dateCreation: '2024-04-24',
  },
  {
    id: 10,
    username: 'RachelScott',
    email: 'rachel@example.com',
    dateCreation: '2024-04-25',
  },
  {
    id: 11,
    username: 'AlexSmith',
    email: 'alexsmith@example.com',
    dateCreation: '2024-04-26',
  },
  {
    id: 12,
    username: 'MariaGarcia',
    email: 'mariagarcia@example.com',
    dateCreation: '2024-04-27',
  },
  {
    id: 13,
    username: 'MichaelJohnson',
    email: 'michaeljohnson@example.com',
    dateCreation: '2024-04-28',
  },
  {
    id: 14,
    username: 'JessicaWilliams',
    email: 'jessicawilliams@example.com',
    dateCreation: '2024-04-29',
  },
  {
    id: 15,
    username: 'RobertBrown',
    email: 'robertbrown@example.com',
    dateCreation: '2024-04-30',
  },
  {
    id: 16,
    username: 'LindaDavis',
    email: 'lindadavis@example.com',
    dateCreation: '2024-05-01',
  },
  {
    id: 17,
    username: 'JohnMiller',
    email: 'johnmiller@example.com',
    dateCreation: '2024-05-02',
  },
  {
    id: 18,
    username: 'SarahWilson',
    email: 'sarahwilson@example.com',
    dateCreation: '2024-05-03',
  },
  {
    id: 19,
    username: 'JamesTaylor',
    email: 'jamestaylor@example.com',
    dateCreation: '2024-05-04',
  },
  {
    id: 20,
    username: 'PatriciaAnderson',
    email: 'patriciaanderson@example.com',
    dateCreation: '2024-05-05',
  },
];

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

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
      initialData.filter((item) => item.username.toLowerCase().includes(searchTerm.toLowerCase()))
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

  const openModalDelete = () => {
    setIsModalDeleteOpen(true);
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
  };

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
                if (event.key === 'Enter') {
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
            {currentItems.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </th>
                <td className="py-4 px-6">{item.username}</td>
                <td className="py-4 px-6">{item.email}</td>
                <td className="py-4 px-6">{item.dateCreation}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  <button type="button" className="" onClick={openModalDelete} aria-label="Delete">
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
          onCreateAccount={() => console.log('Create Account')}
        />
      </div>
      <div className="flex justify-between items-center mt-4 border-[1px] border-secondary p-3 rounded-sm">
        <div className="flex justify-center items-center gap-5">
          <div>
            <label htmlFor="itemsPerPage" className="mx-3 font-sans font-light text-[16px]">
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
