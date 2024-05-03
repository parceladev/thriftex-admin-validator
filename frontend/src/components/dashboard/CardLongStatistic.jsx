import Proptypes from 'prop-types';

const CardLongStatistic = (props) => {
  const { title, src, alt, content } = props;

  return (
    <div className="flex items-center justify-between p-8">
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

CardLongStatistic.propTypes = {
  title: Proptypes.string,
  src: Proptypes.string,
  alt: Proptypes.string,
  content: Proptypes.number,
};

export default CardLongStatistic;
