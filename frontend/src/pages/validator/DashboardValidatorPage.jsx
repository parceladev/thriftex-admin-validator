import Header from '../../components/layouts/Header';
import { StatisticValidator } from '../../components/validator';
const DashboardValidatorPage = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full">
        <Header />
        <div className="pt-36 p-6">
          <StatisticValidator />
        </div>
      </div>
    </section>
  );
};

export default DashboardValidatorPage;
