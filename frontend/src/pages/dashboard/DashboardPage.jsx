import Header from './../../components/layouts/Header';

const DashboardPage = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-8">Dashboard</div>
      </div>
    </section>
  );
};

export default DashboardPage;
