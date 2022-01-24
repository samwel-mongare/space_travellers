import { useState, useEffect } from 'react';
import { addMultiRockets } from '../redux/rockets/rockets';
import SpaceXAPI from '../services/spaceXAPI';

const localCache = {};

export default function useDeliveredRockets(dispatch) {
  const [rocketList, setRocketList] = useState([]);
  const [status, setStatus] = useState('unloaded');
  const spaceXAPI = new SpaceXAPI();

  useEffect(() => {
    async function requestRocketList() {
      setRocketList([]);
      setStatus('loading');
      await spaceXAPI.getRockets()
        .then((data) => {
          localCache.rockets = data || [];
          setRocketList(localCache.rockets);
          setStatus('loaded');
          dispatch(addMultiRockets(localCache.rockets));
        });
    }

    requestRocketList();
  }, []);

  return [rocketList, status];
}
