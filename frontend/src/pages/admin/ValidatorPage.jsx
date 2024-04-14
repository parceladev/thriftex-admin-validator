// import DataTable from '../../components/validator/DataTable';
// import SearchBar from '../../components/validator/SearchBar';
import Header from './../../components/layouts/Header';
import { ValidatorTable } from '../../components/validator';

const dummyData = [
  {
    id: 1,
    username: 'JohnDoe',
    email: 'john@example.com',
    brandChecking: 'Nike',
    dateCreation: '2024-04-07',
  },
  {
    id: 2,
    username: 'JaneSmith',
    email: 'jane@example.com',
    brandChecking: 'Adidas',
    dateCreation: '2024-04-08',
  },
  {
    id: 3,
    username: 'AliceJohnson',
    email: 'alice@example.com',
    brandChecking: 'Puma',
    dateCreation: '2024-04-09',
  },
  {
    id: 4,
    username: 'BobBrown',
    email: 'bob@example.com',
    brandChecking: 'Reebok',
    dateCreation: '2024-04-10',
  },
  {
    id: 5,
    username: 'EmilyDavis',
    email: 'emily@example.com',
    brandChecking: 'Under Armour',
    dateCreation: '2024-04-11',
  },
  {
    id: 6,
    username: 'ChrisWilson',
    email: 'chris@example.com',
    brandChecking: 'New Balance',
    dateCreation: '2024-04-12',
  },
  {
    id: 7,
    username: 'JessicaMartinez',
    email: 'jessica@example.com',
    brandChecking: 'Vans',
    dateCreation: '2024-04-13',
  },
  {
    id: 8,
    username: 'MichaelThompson',
    email: 'michael@example.com',
    brandChecking: 'Converse',
    dateCreation: '2024-04-14',
  },
  {
    id: 9,
    username: 'SarahGarcia',
    email: 'sarah@example.com',
    brandChecking: 'Fila',
    dateCreation: '2024-04-15',
  },
  {
    id: 10,
    username: 'DavidHernandez',
    email: 'david@example.com',
    brandChecking: 'Skechers',
    dateCreation: '2024-04-16',
  },
  {
    id: 11,
    username: 'AmandaMartinez',
    email: 'amanda@example.com',
    brandChecking: 'Asics',
    dateCreation: '2024-04-17',
  },
  {
    id: 12,
    username: 'JamesRodriguez',
    email: 'james@example.com',
    brandChecking: 'Columbia',
    dateCreation: '2024-04-18',
  },
  {
    id: 13,
    username: 'MelissaLopez',
    email: 'melissa@example.com',
    brandChecking: 'Timberland',
    dateCreation: '2024-04-19',
  },
  {
    id: 14,
    username: 'DanielGonzalez',
    email: 'daniel@example.com',
    brandChecking: 'Lacoste',
    dateCreation: '2024-04-20',
  },
  {
    id: 15,
    username: 'LaurenPerez',
    email: 'lauren@example.com',
    brandChecking: 'Tommy Hilfiger',
    dateCreation: '2024-04-21',
  },
  {
    id: 16,
    username: 'KevinTaylor',
    email: 'kevin@example.com',
    brandChecking: 'Calvin Klein',
    dateCreation: '2024-04-22',
  },
  {
    id: 17,
    username: 'AshleyMoore',
    email: 'ashley@example.com',
    brandChecking: 'Ralph Lauren',
    dateCreation: '2024-04-23',
  },
  {
    id: 18,
    username: 'RyanClark',
    email: 'ryan@example.com',
    brandChecking: 'Hugo Boss',
    dateCreation: '2024-04-24',
  },
  {
    id: 19,
    username: 'RachelScott',
    email: 'rachel@example.com',
    brandChecking: 'Giorgio Armani',
    dateCreation: '2024-04-25',
  },
  {
    id: 20,
    username: 'JustinLewis',
    email: 'justin@example.com',
    brandChecking: 'Versace',
    dateCreation: '2024-04-26',
  }
];

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
