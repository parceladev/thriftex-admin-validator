import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import Pagination from "./Pagination";

const DataTable = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(itemsPerPage); 

  const totalPages = Math.ceil(data.length / pageSize);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleChangePageSize = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-6 w-full">
      <table className="min-w-full divide-y divide-gray-200 border">
        <thead className="text-xs text-gray-900">
          <tr>
            <td scope="col" className="pl-4 py-3 border">
              No.
            </td>
            <td scope="col" className="px-6 py-3 border">
              Username
            </td>
            <td scope="col" className="px-6 py-3 border">
              Email
            </td>
            <td scope="col" className="px-6 py-3 border">
              Brand Checking
            </td>
            <td scope="col" className="px-6 py-3 border">
              Date Creation
            </td>
            <td scope="col" className="px-6 py-3 border">
              Action
            </td>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {paginatedData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.username}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.brandChecking}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.dateCreation}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <FaTrashCan className="h-5 w-5 text-gray-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        totalRecords={data.length}
        itemsPerPage={pageSize}
        handleChangePage={handleChangePage}
        handleChangePageSize={handleChangePageSize} 
      />
    </div>
  );
}

export default DataTable;
