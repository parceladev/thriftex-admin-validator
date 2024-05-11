import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardLongStatistic = (props) => {
  const { title, icon, alt, content } = props;

  return (
    <div className="flex items-center justify-between p-8 border-[1px] rounded-md border-lightBorder dark:border-darkBorder">
      <div className="flex flex-col items-center gap-3">
        <FontAwesomeIcon icon={icon} alt={alt} className="w-8 h-8" />
        <h2 className="font-sans text-2xl font-bold">{content}</h2>
      </div>
      <div className="flex self-end">
        <h2 className="font-sans text-2xl font-medium">{title}</h2>
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
