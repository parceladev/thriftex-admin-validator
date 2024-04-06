import {
  TotalLegitCheckIcon,
  TotalUserIcon,
  TotalValidatorIcon,
  TotalCheckedIcon,
  OnProgressIcon,
} from "../../../public/icons/dashboard";
const Statistic = () => {
  return (
    <section>
      <div className="p-8 flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <img src={TotalLegitCheckIcon} alt="Total Legit Check" />
          <h2 className="text-[18px]">3089</h2>
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
            <h2 className="text-[18px]">Total Legit Check</h2>
          </div>
        </div>
        <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
          <div className="flex flex-col gap-3">
            <img src={TotalValidatorIcon} alt="Total Legit Check" />
            <h2 className="text-[18px]">3089</h2>
          </div>
          <div className="flex self-end">
            <h2 className="text-[18px]">Total Users</h2>
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
            <img src={OnProgressIcon} alt="Total Legit Check" />
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
