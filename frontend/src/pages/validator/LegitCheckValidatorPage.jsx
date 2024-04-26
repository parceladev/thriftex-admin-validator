import { ValidatorLegitCheckTable } from '../../components/admins/legitcheck';
import Header from '../../components/layouts/Header';

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
