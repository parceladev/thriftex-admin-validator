import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSummaryData } from '../../utils/total-api-service';
import CardStatistic from './CardStatistic';
import CardLongStatistic from './CardLongStatistic';
import {
  faCheckDouble,
  faClock,
  faSquareCheck,
  faUserCheck,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Statistic = () => {
  const { t } = useTranslation();
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

  const statisticInfo = [
    {
      icon: faUsers,
      alt: t('Total User'),
      content: summaryData.total_user,
      title: t('Total User'),
    },
    {
      icon: faUserCheck,
      alt: t('Total Validators'),
      content: summaryData.total_validator,
      title: t('Total Validators'),
    },
    {
      icon: faSquareCheck,
      alt: t('Total Checked'),
      content: summaryData.total_checked,
      title: t('Total Checked'),
    },
    {
      icon: faClock,
      alt: t('Total Pending'),
      content: summaryData.total_pending,
      title: t('Total Pending'),
    },
  ];

  return (
    <section>
      <div>
        <CardLongStatistic
          icon={faCheckDouble}
          alt={t('Total Legit Check')}
          content={summaryData.total_legit_check}
          title={t('Total Legit Check')}
        />
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        {statisticInfo.map((info, index) => (
          <CardStatistic
            key={index}
            icon={info.icon}
            alt={info.alt}
            content={info.content}
            title={info.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Statistic;
