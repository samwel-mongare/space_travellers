import PropTypes from 'prop-types';

export default function RocketItem({
  description,
  rocketName,
  rocketType,
  flickrImages,
}) {
  return (
    <div>
      <img src={flickrImages} alt="flickr" />
      <h2>{rocketName}</h2>
      <span>{rocketType}</span>
      <p>{description}</p>
    </div>
  );
}

RocketItem.propTypes = {
  description: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketType: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};
