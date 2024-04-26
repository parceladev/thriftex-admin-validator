import Header from "../../components/layouts/Header";
import { Statistic } from "../../components/admins/dashboard";

const DashboardPage = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-8">
          <Statistic />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
