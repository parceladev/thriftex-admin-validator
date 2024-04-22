import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import {
  TotalUserIcon,
  TotalValidatorIcon,
  TotalCheckedIcon,
  PendingIcon,
} from "../../../public/icons/dashboard";
import { getToken } from "../../utils/TokenUtilities";

const Statistic = () => {
  const [summaryData, setSummaryData] = useState({
    total_user: 0,
    total_validator: 0,
    total_checked: 0,
    total_progress: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken()
        if (!token) {
          throw new Error('Unauthorized - No token provided');
        }

        const response = await axios.get('http://localhost/rest.thriftex/api/legits/summaryadmin', {
          headers: {
            'Authorization': `${token}`
          }
        });

        if (response.data.status) {
          setSummaryData(response.data.data);
        } else {
          console.error('No data received:', response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="p-8 flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <img src={TotalUserIcon} alt="Total Legit Check" />
          <h2 className="text-[18px]">{summaryData.total_user}</h2>
        </div>
        <div className="flex self-end">
          <h2 className="text-[18px]">Total Users</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
          <div className="flex flex-col gap-3">
            <img src={TotalValidatorIcon} alt="Total Validator" />
            <h2 className="text-[18px]">{summaryData.total_validator}</h2>
          </div>
          <div className="flex self-end">
            <h2 className="text-[18px]">Total Validators</h2>
          </div>
        </div>
        <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
          <div className="flex flex-col gap-3">
            <img src={TotalCheckedIcon} alt="Total Checked" />
            <h2 className="text-[18px]">{summaryData.total_checked}</h2>
          </div>
          <div className="flex self-end">
            <h2 className="text-[18px]">Checked</h2>
          </div>
        </div>
        <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
          <div className="flex flex-col gap-3">
            <img src={PendingIcon} alt="Total Progress" />
            <h2 className="text-[18px]">{summaryData.total_progress}</h2>
          </div>
          <div className="flex self-end">
            <h2 className="text-[18px]">On Progress</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
