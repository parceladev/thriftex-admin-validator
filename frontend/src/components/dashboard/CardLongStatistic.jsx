import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardLongStatistic = (props) => {
  const { title, icon, alt, content } = props;

  return (
    <div className="flex items-center justify-between p-8">
      <div className="flex flex-col gap-3 items-center">
        <FontAwesomeIcon icon={icon} alt={alt} className="w-10 h-10 text-secondary"/>
        <h2 className="text-[30px] text-secondary font-sans font-bold">{content}</h2>
      </div>
      <div className="flex self-end">
        <h2 className="text-[18px] text-secondary font-sans font-medium">{title}</h2>
      </div>
    </div>
  );
};

CardLongStatistic.propTypes = {
  title: Proptypes.string,
  icon: Proptypes.string,
  alt: Proptypes.string,
  content: Proptypes.number,
};

export default CardLongStatistic;
