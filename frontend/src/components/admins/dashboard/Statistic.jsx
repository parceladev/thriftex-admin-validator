import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSummaryData } from '../../../utils/total-api-service';
import CardStatistic from './CardStatistic';
import CardTotalUser from './CardTotalUser';
import {
  TotalUserIcon,
  TotalValidatorIcon,
  TotalCheckedIcon,
  PendingIcon,
} from '../../../../public/icons/dashboard';

const Statistic = () => {
  const [summaryData, setSummaryData] = useState({
    total_user: 0,
    total_validator: 0,
    total_checked: 0,
    total_progress: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSummaryData(navigate);
      if (result.success) {
        setSummaryData(result.data);
      } else {
        console.error('Failed to fetch data:', result.message);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <section>
      <div>
        <CardTotalUser
          src={TotalUserIcon}
          alt="Total Legit Check"
          content={summaryData.total_user}
          title="Total Users"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <CardStatistic
          src={TotalValidatorIcon}
          alt="Total Validator"
          content={summaryData.total_validator}
          title="Total Validators"
        />
        <CardStatistic
          src={TotalCheckedIcon}
          alt="Total Checked"
          content={summaryData.total_checked}
          title="Checked"
        />
        <CardStatistic
          src={PendingIcon}
          alt="Total Progress"
          content={summaryData.total_progress}
          title="On Progress"
        />
      </div>
    </section>
  );
};

export default Statistic;
