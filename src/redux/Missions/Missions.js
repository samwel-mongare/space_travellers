const MISSIONS_FETCHED = 'space_travellers/Missions/MISSIONS_FETCHED';

const initialState = {
  missions: [],
};

export const missionsFetched = (payload) => ({
  type: MISSIONS_FETCHED,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_FETCHED:
      return { missions: [...action.payload] };

    default:
      return state;
  }
};

export default reducer;
