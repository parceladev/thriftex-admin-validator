import Header from './../../components/layouts/Header';
import { ValidatorTable } from '../../components/validator';

const ValidatorPage = () => {
  return (
    <section className="w-full">
        <Header/>
      <div className="flex flex-col w-full pt-36 p-6">
        <ValidatorTable/>
      </div>
    </section>
  );
};

export default ValidatorPage;
