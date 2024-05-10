import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardStatistic = (props) => {
  const { title, icon, alt, content } = props;
  return (
    <div className="flex items-center justify-between p-6 border-2 rounded-md border-secondary">
      <div className="flex flex-col items-center justify-center gap-2 font-sans text-secondary">
        <FontAwesomeIcon
          icon={icon}
          alt={alt}
          className="w-6 h-6 text-secondary"
        />
        <h2 className="text-lg font-semibold">{content}</h2>
      </div>
      <div className="flex self-end font-medium text-secondary">
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
