const MISSIONS_FETCHED = 'space_travellers/Missions/MISSIONS_FETCHED';
const MEMBER_STATUS = 'space_travellers/Missions/MEMBER_STATUS';

const initialState = {
  missions: [],
};

export const missionsFetched = (payload) => ({
  type: MISSIONS_FETCHED,
  payload,
});

export const memberStatusFunc = (payload) => ({
  type: MEMBER_STATUS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_FETCHED:
      return { missions: [...action.payload] };
    case MEMBER_STATUS:
      return {
        missions:
        [...state.missions].map((mission) => (mission.mission_id === action.payload.missionId
          ? { ...mission, member: action.payload.memberStatus }
          : mission)),
      };
    default:
      return state;
  }
};

export default reducer;
