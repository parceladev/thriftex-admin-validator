import Header from './../../components/layouts/Header';
import { UserTable } from '../../components/user management';

const UsersPage = () => {
  return (
    <section className="w-full">
      <Header />
      <div className="flex flex-col w-full p-8">
        <UserTable />
      </div>
    </section>
  );
};

export default UsersPage;
