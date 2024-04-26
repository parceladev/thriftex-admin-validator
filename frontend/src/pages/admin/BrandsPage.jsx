import { BrandTable } from '../../components/admins/brand/';
import Header from './../../components/layouts/Header';

const BrandsPage = () => {
  return (
    <section className="w-full">
        <Header />
      <div className="flex flex-col w-full p-8">
        <BrandTable />
      </div>
    </section>
  );
};

export default BrandsPage;