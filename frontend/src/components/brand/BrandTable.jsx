import { useState } from 'react';
import ModalAddBrand from './ModalAddBrand';
import { FaPlus } from 'react-icons/fa6';
import { FaTrashCan } from 'react-icons/fa6';
import { SearchValidatorIcon } from '../../../public/icons/legitcheck';

const initialData = [
    {
      id: 1,
      username: 'Nike',
      dateCreation: '2024-04-07',
    },
    {
      id: 2,
      username: 'Adidas',
      dateCreation: '2024-04-08',
    },
    {
      id: 3,
      username: 'Puma',
      dateCreation: '2024-04-09',
    },
    {
      id: 4,
      username: 'Reebok',
      dateCreation: '2024-04-10',
    },
    {
      id: 5,
      username: 'Under Armour',
      dateCreation: '2024-04-11',
    },
    {
      id: 6,
      username: 'New Balance',
      dateCreation: '2024-04-12',
    },
    {
      id: 7,
      username: 'Vans',
      dateCreation: '2024-04-13',
    }
  ];

  const BrandTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(initialData);
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    // const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  
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
  
    const openModalAddBrand = () => {
      setIsModalAddOpen(true);
    };
  
    const closeModalAddbrand = () => {
      setIsModalAddOpen(false);
    };
  
    // const openModalDeleteBrand = () => {
    //   setIsModalDeleteOpen(true);
    // };
  
    // const closeModalDeleteBrand = () => {
    //   setIsModalDeleteOpen(false);
    // };
  
    return (
      <section>
        <div className="flex items-center justify-center mb-4 gap-3">
          <div className="w-full">
            <div className="flex items-center gap-4 rounded-md ">
              <div className="flex w-full border-secondary border-[1px] rounded-md">
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
                  <img src={SearchValidatorIcon} alt="Search Validator" />
                </button>
              </div>
              <button
                type="button"
                className="py-3 w-1/4 text-center text-white bg-black dark:bg-gray-300 dark:text-black flex justify-center items-center"
                onClick={openModalAddBrand}
              >
                <span className="mr-2">ADD BRAND</span>
                <FaPlus className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* Render ModalValidator component */}
          <ModalAddBrand
            isOpen={isModalAddOpen}
            onClose={closeModalAddbrand}
            onCreateAccount={() => console.log('Create Account')}
          />
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
                  Date Creation
                </th>
                <th scope="col" className="py-3 px-6">
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
                  <td className="py-4 px-6">{item.dateCreation}</td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    <button type="button" className="" onClick={openModalDelete} aria-label="Delete">
                      <FaTrashCan className="h-5 w-5 text-gray-500" />
                    </button>
                  </td> */}
                  {/* <td className="py-4 px-6">{item.validator}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <ModalDelete
            isOpen={isModalDeleteOpen}
            onClose={closeModalDelete}
            onCreateAccount={() => console.log('Create Account')}
          /> */}
        </div>
      </section>
    );
  };
  
  export default BrandTable;