import PersonalForm from "./PersonalForm";
import SecurityForm from "./SecurityForm";

const AccountSettings = () => {
  return (
    <section>
      <div className="flex w-full gap-16">
        <PersonalForm />
        <SecurityForm />
      </div>
    </section>
  );
};

export default AccountSettings;
