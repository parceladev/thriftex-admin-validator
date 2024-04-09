/* eslint-disable no-unused-vars */

import { SearchValidatorIcon } from "../../../public/icons/legitcheck";
import { useState } from "react";
const initialData = [
  {
    id: "#4142-ONZX",
    brand: "Vans",
    status: "Done",
    authenticity: "FAKE",
    date: "04-01-2024",
    validator: "You",
  },
  {
    id: "#7294-OXAZ",
    brand: "Converse",
    status: "Pending",
    authenticity: "-",
    date: "04-01-2024",
    validator: "You",
  },
  {
    id: "#3142-ANZX",
    brand: "Nike",
    status: "Done",
    authenticity: "ORIGINAL",
    date: "05-01-2024",
    validator: "You",
  },
  {
    id: "#8342-KMAZ",
    brand: "Adidas",
    status: "Done",
    authenticity: "FAKE",
    date: "06-01-2024",
    validator: "You",
  },
  {
    id: "#5294-LPAZ",
    brand: "Puma",
    status: "Pending",
    authenticity: "-",
    date: "07-01-2024",
    validator: "You",
  },
  {
    id: "#6142-UMZX",
    brand: "Reebok",
    status: "Done",
    authenticity: "ORIGINAL",
    date: "08-01-2024",
    validator: "You",
  },
];
const getStatusClasses = (status) => {
  switch (status) {
    case "Done":
      return "bg-secondary text-primary";
    case "Pending":
      return "bg-buttonpending text-primary";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

const getAuthenticityClasses = (authenticity) => {
  switch (authenticity) {
    case "FAKE":
      return "bg-primary text-secondary border-[1px] border-secondary";
    case "ORIGINAL":
      return "bg-secondary text-primary";
    default:
      return "bg-buttonpending text-primary";
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case "Done":
      return "DONE";
    case "Pending":
      return "PENDING";
    default:
      return status;
  }
};

const getAuthenticityLabel = (status, authenticity) => {
  if (status === "Pending") {
    return "-";
  } else if (status === "Done" && authenticity === "ORIGINAL") {
    return "ORIGINAL";
  } else if (authenticity === "FAKE") {
    return "FAKE";
  }

  return "-";
};

const ValidatorLegitCheckTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setFilteredData(
      initialData.filter((item) =>
        item.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
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
              <img src={SearchValidatorIcon} alt="Search Validator" />
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
                Item ID
              </th>
              <th scope="col" className="py-3 px-6">
                Brand
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Authenticity
              </th>
              <th scope="col" className="py-3 px-6">
                Date Uploaded
              </th>
              <th scope="col" className="py-3 px-6">
                Validator
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
                <td className="py-4 px-6">{item.id}</td>
                <td className="py-4 px-6">{item.brand}</td>
                <td className="px-5 py-2 whitespace-no-wrap">
                  <span
                    className={`rounded-md text-xs font-semibold mr-2 px-4 py-1 ${getStatusClasses(
                      item.status
                    )}`}
                  >
                    {getStatusLabel(item.status)}
                  </span>
                </td>
                <td className="px-5 py-2 whitespace-no-wrap">
                  <span
                    className={`rounded-md text-xs font-semibold px-4 py-1 ${getAuthenticityClasses(
                      item.authenticity
                    )}`}
                  >
                    {getAuthenticityLabel(item.status, item.authenticity)}
                  </span>
                </td>
                <td className="py-4 px-6">{item.date}</td>
                <td className="py-4 px-6">{item.validator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ValidatorLegitCheckTable;
