import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSummaryData } from "../../utils/total-api-service";
import CardStatistic from "./CardStatistic";
import CardLongStatistic from "./CardLongStatistic";
import { faCheckDouble, faClock, faSquareCheck, faUserCheck, faUsers } from "@fortawesome/free-solid-svg-icons";

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
        console.error("Failed to fetch data:", result.message);
      }
    };

    fetchData();
  }, [navigate]);

  // Daftar informasi untuk ditampilkan dengan CardStatistic
  const statisticInfo = [
    {
      icon: faUsers,
      alt: "Total User",
      content: summaryData.total_user,
      title: "Total User",
    },
    {
      icon: faUserCheck,
      alt: "Total Validators",
      content: summaryData.total_validator,
      title: "Total Validators",
    },
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
        {/* Mapping untuk membuat CardStatistic secara dinamis */}
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
