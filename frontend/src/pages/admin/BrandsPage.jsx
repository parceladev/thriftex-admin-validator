import { BrandTable } from '../../components/brand';
import Header from './../../components/layouts/Header';

const BrandsPage = () => {
  return (
    <section className="w-full">
        <Header />
      <div className="flex flex-col w-full pt-40 p-8">
        <BrandTable />
      </div>
    </section>
  );
};

export default BrandsPage;