import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addRocket } from '../redux/rockets/rockets';

export default function RocketItem({
  description,
  rocketName,
  flickrImages,
  reserved,
  id,
}) {
  const dispatch = useDispatch();

  function reservationAction(action) {
    const reserved = action === 'reserve';
    dispatch(addRocket({ id, reserved }));
  }

  return (
    <div className="flex gap-4 mb-8">
      <img src={flickrImages} className="max-w-[18rem] rounded" alt="flickr" />
      <div>
        <h2 className="font-semibold text-3xl mb-4">{rocketName}</h2>
        {
          reserved && <span className="bg-cyan-500 rounded px-[5px] text-white inline-block mr-3">Reserved</span>
        }
        <p className="text-xl inline">{description}</p>
        {
          reserved === true
            ? (
              <button
                className="bg-white  rounded text-gray-400 border-2 text-xl px-4 py-2 drop-shadow-md block mt-6"
                type="button"
                onClick={() => reservationAction('cancel')}
              >
                Cancel Reservation
              </button>
            )
            : <button className="bg-blue-500 rounded text-white text-xl px-4 py-2 block mt-6" type="button" onClick={() => reservationAction('reserve')}>Reserve Rocket</button>
        }
      </div>

    </div>
  );
}

RocketItem.propTypes = {
  description: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  reserved: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

RocketItem.defaultProps = {
  reserved: false,
};
