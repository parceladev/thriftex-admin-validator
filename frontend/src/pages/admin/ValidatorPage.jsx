// import DataTable from '../../components/validator/DataTable';
// import SearchBar from '../../components/validator/SearchBar';
import Header from './../../components/layouts/Header';
import { ValidatorTable } from '../../components/validator';



const ValidatorPage = () => {
  return (
    <section className="w-full">
        <Header/>
      <div className="flex flex-col w-full pt-40 p-8">
        <ValidatorTable/>
        
      </div>
    </section>
  );
};

export default ValidatorPage;
