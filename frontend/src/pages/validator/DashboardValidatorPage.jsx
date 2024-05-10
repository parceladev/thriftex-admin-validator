import Header from '../../components/layouts/Header';
import { StatisticValidator } from '../../components/validator';
const DashboardValidatorPage = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-8 pt-40">
          <StatisticValidator />
        </div>
      </div>
    </section>
  );
};

export default DashboardValidatorPage;
