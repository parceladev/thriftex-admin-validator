import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardStatistic = (props) => {
  const { title, icon, alt, content } = props;
  return (
    <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
      <div className="flex flex-col gap-2 items-center text-secondary font-sans">
        <FontAwesomeIcon icon={icon} alt={alt} className='w-9 h-9 text-secondary' />
        <h2 className="text-[25px] font-semibold">{content}</h2>
      </div>
      <div className="flex self-end text-secondary font-medium">
        <h2 className="text-[18px] ">{title}</h2>
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
