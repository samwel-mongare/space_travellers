import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMultiRockets } from '../redux/rockets/rockets';
import { SpaceXAPI } from '../services/spaceXAPI';

export default async function useDeliveredRockets() {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rocketReducer);
  const [status, setStatus] = useState('unloaded');
  const spaceXAPI = new SpaceXAPI();

  useEffect(async () => {
    if (Object.values(rocketList).length > 0) {
      return [rocketList, status];
    }
    setStatus('loading');
    const data = await spaceXAPI.getRockets();
    setStatus('loaded');
    dispatch(addMultiRockets(data));

    // console.log(rocketList);
    return [rocketList, status];
  }, []);

  return [rocketList, status];
}
