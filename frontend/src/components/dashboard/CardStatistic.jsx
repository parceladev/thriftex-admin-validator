import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardStatistic = (props) => {
  const { title, icon, alt, content } = props;
  return (
    <div className="flex items-center justify-between p-6 border-[1px] rounded-md border-lightBorder dark:border-darkBorder">
      <div className="flex flex-col items-center justify-center gap-2 font-sans">
        <FontAwesomeIcon icon={icon} alt={alt} className="w-6 h-6" />
        <h2 className="text-lg font-semibold">{content}</h2>
      </div>
      <div className="flex self-end font-medium">
        <h2 className="text-lg ">{title}</h2>
      </div>
    </div>
  );
};

CardStatistic.propTypes = {
  title: Proptypes.string,
  icon: Proptypes.string,
  alt: Proptypes.string,
  content: Proptypes.number,
};

export default CardStatistic;
