import { ValidatorLegitCheckTable } from "../../components/Legit Check";
import Header from "../../components/layouts/Header";
const LegitCheckValidatorPage = () => {
  return (
    <div>
      <Header />
      <div className="p-8">
        <ValidatorLegitCheckTable />
      </div>
    </div>
  );
};

export default LegitCheckValidatorPage;
