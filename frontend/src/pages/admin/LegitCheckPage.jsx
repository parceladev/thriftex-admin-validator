import Header from "./../../components/layouts/Header";
import { LegitCheckTable } from "../../components/Legit Check";

const LegitCheckPage = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full">
        <Header />
        <div className="pt-36 p-6">
          <LegitCheckTable />
        </div>
      </div>
    </section>
  );
};

export default LegitCheckPage;
