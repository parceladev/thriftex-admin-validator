import AccountSettings from '../../components/settings/AccountSettings';
import Header from '../../components/layouts/Header';
const SettingsValidatorPage = () => {
  return (
    <div>
      <Header />
      <div className="pt-36 p-6">
        <div className="w-full p-8 border dark:border-darkBorder rounded shadow-md">
          <AccountSettings />
        </div>
      </div>
    </div>
  );
};

export default SettingsValidatorPage;
