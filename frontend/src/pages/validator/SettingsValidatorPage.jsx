import AccountSettings from "../../components/settings/AccountSettings";
import Header from "../../components/layouts/Header";
const SettingsValidatorPage = () => {
  return (
    <div>
      <Header />
      <div className="p-8"><AccountSettings/></div>
    </div>
  );
};

export default SettingsValidatorPage;
