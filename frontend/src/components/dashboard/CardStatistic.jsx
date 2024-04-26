import Proptypes from 'prop-types';

const CardStatistic = (props) => {
  const { title, src, alt, content } = props;
  return (
    <div className="p-8 flex justify-between items-center border-[#13A9D9] border-2 rounded-md">
      <div className="flex flex-col gap-3">
        <img src={src} alt={alt} />
        <h2 className="text-[18px]">{content}</h2>
      </div>
      <div className="flex self-end">
        <h2 className="text-[18px]">{title}</h2>
      </div>
    </div>
  );
};

CardStatistic.propTypes = {
  title: Proptypes.string,
  src: Proptypes.string,
  alt: Proptypes.string,
  content: Proptypes.number,
};

export default CardStatistic;
