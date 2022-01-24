import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3';
const ROCKETS_END_POINT = 'rockets';

const SpaceXClient = axios.create({
  baseURL: BASE_URL,
});

export default class SpaceXAPI {
  async getRockets() {
    this.res = await SpaceXClient.get(`/${ROCKETS_END_POINT}`);
    const { data } = this.res;
    return data;
  }
}
