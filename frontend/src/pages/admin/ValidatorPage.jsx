// import DataTable from '../../components/validator/DataTable';
// import SearchBar from '../../components/validator/SearchBar';
import Header from './../../components/layouts/Header';
import { ValidatorTable } from '../../components/validator';



const ValidatorPage = () => {
  return (
    <section className="w-full">
        <Header/>
      <div className="flex flex-col w-full p-8">
        <ValidatorTable/>
        {/* <Header />
        <SearchBar/>
        <DataTable data={dummyData} itemsPerPage={10}/> */}
      </div>
    </section>
  );
};

export default ValidatorPage;
