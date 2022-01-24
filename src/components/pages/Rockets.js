import { useSelector } from 'react-redux';
import useDeliveredRockets from '../../hooks/useDeliveridRokets';
import RocketItem from '../RocketItem';

export default function Rockets() {
  const rocketList = useSelector((state) => state.rocketReducer);
  useDeliveredRockets();

  return (
    <main className="m-8">
      {rocketList.map((rocket) => (
        <RocketItem
          key={rocket.id}
          id={rocket.id}
          reserved={rocket.reserved}
          rocketName={rocket.rocket_name}
          description={rocket.description}
          rocketType={rocket.rocket_type}
          flickrImages={rocket.flickr_images}
        />
      ))}
    </main>
  );
}
