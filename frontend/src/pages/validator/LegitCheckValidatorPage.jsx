import { ValidatorLegitCheckTable } from '../../components/Legit Check';
import Header from '../../components/layouts/Header';
const LegitCheckValidatorPage = () => {
  return (
    <div>
      <Header />
      <div className="pt-36 p-6">
        <ValidatorLegitCheckTable />
      </div>
    </div>
  );
};

export default LegitCheckValidatorPage;
