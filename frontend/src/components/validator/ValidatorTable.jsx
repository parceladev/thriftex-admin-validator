import { FaTrashCan } from 'react-icons/fa6';
import { useState } from 'react';
import ModalValidator from './ModalValidator';
import ModalDelete from './ModalDelete';
import { SearchTable, TablePagination, AddButton } from '../generals';

const initialData = [
  {
    id: 1,
    username: 'JohnDoe',
    email: 'john@example.com',
    brandChecking: 'Nike',
    dateCreation: '2024-04-07',
  },
  {
    id: 2,
    username: 'JaneSmith',
    email: 'jane@example.com',
    brandChecking: 'Adidas',
    dateCreation: '2024-04-08',
  },
  {
    id: 3,
    username: 'AliceJohnson',
    email: 'alice@example.com',
    brandChecking: 'Puma',
    dateCreation: '2024-04-09',
  },
  {
    id: 4,
    username: 'BobBrown',
    email: 'bob@example.com',
    brandChecking: 'Reebok',
    dateCreation: '2024-04-10',
  },
  {
    id: 5,
    username: 'EmilyDavis',
    email: 'emily@example.com',
    brandChecking: 'Under Armour',
    dateCreation: '2024-04-11',
  },
  {
    id: 6,
    username: 'ChrisWilson',
    email: 'chris@example.com',
    brandChecking: 'New Balance',
    dateCreation: '2024-04-12',
  },
  {
    id: 7,
    username: 'JessicaMartinez',
    email: 'jessica@example.com',
    brandChecking: 'Vans',
    dateCreation: '2024-04-13',
  },
  {
    id: 8,
    username: 'MichaelThompson',
    email: 'michael@example.com',
    brandChecking: 'Converse',
    dateCreation: '2024-04-14',
  },
  {
    id: 9,
    username: 'SarahGarcia',
    email: 'sarah@example.com',
    brandChecking: 'Fila',
    dateCreation: '2024-04-15',
  },
  {
    id: 10,
    username: 'DavidHernandez',
    email: 'david@example.com',
    brandChecking: 'Skechers',
    dateCreation: '2024-04-16',
  },
  {
    id: 11,
    username: 'AmandaMartinez',
    email: 'amanda@example.com',
    brandChecking: 'Asics',
    dateCreation: '2024-04-17',
  },
  {
    id: 12,
    username: 'JamesRodriguez',
    email: 'james@example.com',
    brandChecking: 'Columbia',
    dateCreation: '2024-04-18',
  },
  {
    id: 13,
    username: 'MelissaLopez',
    email: 'melissa@example.com',
    brandChecking: 'Timberland',
    dateCreation: '2024-04-19',
  },
  {
    id: 14,
    username: 'DanielGonzalez',
    email: 'daniel@example.com',
    brandChecking: 'Lacoste',
    dateCreation: '2024-04-20',
  },
  {
    id: 15,
    username: 'LaurenPerez',
    email: 'lauren@example.com',
    brandChecking: 'Tommy Hilfiger',
    dateCreation: '2024-04-21',
  },
  {
    id: 16,
    username: 'KevinTaylor',
    email: 'kevin@example.com',
    brandChecking: 'Calvin Klein',
    dateCreation: '2024-04-22',
  },
  {
    id: 17,
    username: 'AshleyMoore',
    email: 'ashley@example.com',
    brandChecking: 'Ralph Lauren',
    dateCreation: '2024-04-23',
  },
  {
    id: 18,
    username: 'RyanClark',
    email: 'ryan@example.com',
    brandChecking: 'Hugo Boss',
    dateCreation: '2024-04-24',
  },
  {
    id: 19,
    username: 'RachelScott',
    email: 'rachel@example.com',
    brandChecking: 'Giorgio Armani',
    dateCreation: '2024-04-25',
  },
  {
    id: 20,
    username: 'JustinLewis',
    email: 'justin@example.com',
    brandChecking: 'Versace',
    dateCreation: '2024-04-26',
  },
];

const ValidatorTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalRecords = filteredData.length;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset ke halaman pertama setelah perubahan jumlah item per halaman
  };

  const handleSearch = () => {
    setFilteredData(
      initialData.filter((item) =>
        item.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
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

  const openModalAdd = () => {
    setIsModalAddOpen(true);
  };

  const closeModalAdd = () => {
    setIsModalAddOpen(false);
  };

  const openModalDelete = () => {
    setIsModalDeleteOpen(true);
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
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
        {/* Render ModalValidator component */}
        <ModalValidator
          isOpen={isModalAddOpen}
          onClose={closeModalAdd}
          onCreateAccount={() => console.log('Create Account')}
        />
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
                Brand Checking
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
            {currentItems.map((item, index) => (
              <tr
                key={item.id}
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
                <td className="px-6 py-4">{item.brandChecking}</td>
                <td className="px-6 py-4">{item.dateCreation}</td>
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
        <ModalDelete
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

export default ValidatorTable;
