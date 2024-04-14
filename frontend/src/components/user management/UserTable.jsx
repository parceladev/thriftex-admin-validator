import { useState } from 'react';
import { SearchValidatorIcon } from '../../../public/icons/legitcheck';
import { FaTrashCan } from 'react-icons/fa6'
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
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = () => {
      setFilteredData(
        initialData.filter((item) => item.username.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    };
  
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
            {filteredData.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
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
    </section>
  );
};

export default UserTable;
