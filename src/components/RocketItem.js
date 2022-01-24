import PropTypes from 'prop-types';

export default function RocketItem({
  description,
  rocketName,
  flickrImages,
  reserved = false,
}) {
  return (
    <div className="flex gap-4 mb-8">
      <img src={flickrImages} className="max-w-[18rem] rounded" alt="flickr" />
      <div>
        {
          reserved === true
            ? <span className="bg-cyan-500 rounded px-[5px] text-white">Reserved</span>
            : ''
        }
        <h2 className="font-semibold text-3xl mb-4">{rocketName}</h2>
        <p className="text-xl mb-6">{description}</p>
        {
          reserved === true
            ? <button className="bg-white  rounded text-gray-400 border-2 text-xl px-4 py-2 drop-shadow-md" type="button">Cancel Reservation</button>
            : <button className="bg-blue-500 rounded text-white text-xl px-4 py-2" type="button">Reverse Rocket</button>
        }
      </div>

    </div>
  );
}

RocketItem.propTypes = {
  description: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};
