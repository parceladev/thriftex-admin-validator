import Header from '../../components/layouts/Header';
import { StatisticValidator } from '../../components/admins/validator/';

const DashboardValidatorPage = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-8">
          <StatisticValidator />
        </div>
      </div>
    </section>
  );
};

export default DashboardValidatorPage;
