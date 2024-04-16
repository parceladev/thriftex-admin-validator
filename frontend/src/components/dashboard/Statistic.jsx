import { useEffect, useState } from "react";
import axios from "axios";
import {
  TotalLegitCheckIcon,
  TotalUserIcon,
  TotalValidatorIcon,
  TotalCheckedIcon,
  PendingIcon,
} from "../../../public/icons/dashboard";
const Statistic = () => {
  const [totalLegitChecks, setTotalLegitChecks] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/rest.thriftex/api/legits/totallegit"
        );

        if (response && response.data && response.data.status) {
          setTotalLegitChecks(response.data.total); 
        } else {
          console.error("No data received", response.data.message);
          setTotalLegitChecks("No data"); 
        }
      } catch (error) {
        console.error("Error fetching total legit checks:", error);
        setTotalLegitChecks("Error"); 
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="p-8 flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <img src={TotalLegitCheckIcon} alt="Total Legit Check" />
          <h2 className="text-[18px]">{totalLegitChecks}</h2>
        </div>
        <div className="flex self-end">
          <h2 className="text-[18px]">Total Legit Check</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
          <div className="flex flex-col gap-3">
            <img src={TotalUserIcon} alt="Total Legit Check" />
            <h2 className="text-[18px]">3089</h2>
          </div>
          <div className="flex self-end">
            <h2 className="text-[18px]">Total Users</h2>
          </div>
        </div>
        <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
          <div className="flex flex-col gap-3">
            <img src={TotalValidatorIcon} alt="Total Legit Check" />
            <h2 className="text-[18px]">3089</h2>
          </div>
          <div className="flex self-end">
            <h2 className="text-[18px]">Total Validator</h2>
          </div>
        </div>
        <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
          <div className="flex flex-col gap-3">
            <img src={TotalCheckedIcon} alt="Total Legit Check" />
            <h2 className="text-[18px]">3089</h2>
          </div>
          <div className="flex self-end">
            <h2 className="text-[18px]">Checked</h2>
          </div>
        </div>
        <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
          <div className="flex flex-col gap-3">
            <img src={PendingIcon} alt="Total Legit Check" />
            <h2 className="text-[18px]">3089</h2>
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
