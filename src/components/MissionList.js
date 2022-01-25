/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Mission from './Mission';
import { getMissions } from '../services/spaceXAPI';

const MissionList = (() => {
  const missions = useSelector((state) => state.missionReducer.missions);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (Object.values(missions).length > 0) {
      return missions;
    }
    dispatch(getMissions());
    return missions;
  }, [dispatch]);

  return (
    <table className="min-w-full table-auto">
      <thead className="bg-white border-b">
        <tr>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Mission
          </th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Description
          </th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((data) => (
          <Mission
            key={data.mission_id}
            name={data.mission_name}
            description={data.description}
            memberActive={data.member}
            idx={data.mission_id}
          />
        ))}
      </tbody>
    </table>
  );
});

export default MissionList;
