import types from '../constants/actionNames';

const initialState = {
  monday: {},
  goals: [],
};

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_RESTAURANT: {
      return;
    }

    default:
      return state;
  }
};

export default goalReducer;
