import Header from './../../components/layouts/Header';
import { Statistic } from '../../components/dashboard';

const DashboardPage = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full">
        <Header />
        <div className="pt-36 p-6">
          <Statistic />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
