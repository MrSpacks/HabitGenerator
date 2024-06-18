// store/reducers.js
import { createStore } from 'redux';

const initialState = {
  habits: [],
};

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(habitReducer);

export default store;
