import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSummaryData } from "../../utils/total-api-service";
import CardStatistic from "../dashboard/CardStatistic";
import CardLongStatistic from "../dashboard/CardLongStatistic";
import {
  faCheckDouble,
  faClock,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

const StatisticValidator = () => {
  const [summaryData, setSummaryData] = useState({
    total_user: 0,
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
        console.error("Failed to fetch data:", result.message);
      }
    };

    fetchData();
  }, [navigate]);

  const statisticInfo = [
    {
      icon: faSquareCheck,
      alt: "Total Checked",
      content: summaryData.total_checked,
      title: "Total Checked",
    },
    {
      icon: faClock,
      alt: "Total Pending",
      content: summaryData.total_pending,
      title: "Total Pending",
    },
  ];

  return (
    <section>
      <div>
        <CardLongStatistic
          icon={faCheckDouble}
          alt="Total Legit Check"
          content={summaryData.total_legit_check}
          title="Total Legit Check"
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

export default StatisticValidator;
