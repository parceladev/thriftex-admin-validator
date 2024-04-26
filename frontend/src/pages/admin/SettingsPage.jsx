import AccountSettings from '../../components/generals/settings/AccountSettings';
import Header from '../../components/layouts/Header';

const SettingsPage = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-8">
          <div className="w-full p-8 border rounded shadow-md bg-primary">
            <AccountSettings/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
