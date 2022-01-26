/* eslint-disable camelcase */
import axios from 'axios';
import { missionsFetched } from '../redux/Missions/Missions';

const BASE_URL = 'https://api.spacexdata.com/v3';
const ROCKETS_END_POINT = 'rockets';

const SpaceXClient = axios.create({
  baseURL: BASE_URL,
});

export class SpaceXAPI {
  async getRockets() {
    this.res = await SpaceXClient.get(`/${ROCKETS_END_POINT}`);
    const { data } = this.res;
    return data;
  }
}

export const getMissions = () => async (dispatch) => {
  axios.get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      const newMission = response.data;
      const mappedMissions = Object.entries(newMission).map(([mission_id, mission]) => {
        const { mission_name, description } = mission;
        return { mission_id, mission_name, description };
      });
      dispatch(missionsFetched(mappedMissions));
    });
};
