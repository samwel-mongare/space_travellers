import { useSelector } from 'react-redux';
import useDeliveredRockets from '../../hooks/useDeliveridRokets';
import RocketItem from '../RocketItem';

export default function Rockets() {
  const rocketList = useSelector((state) => state.rocketReducer);
  useDeliveredRockets();

  return (
    <h2>
      {' '}
      {rocketList.map((rocket) => (
        <RocketItem
          key={rocket.id}
          rocketName={rocket.rocket_name}
          description={rocket.description}
          rocketType={rocket.rocket_type}
          flickrImages={rocket.flickr_images}
        />
      ))}
    </h2>
  );
}
