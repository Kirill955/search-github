// Types
import { FETCH_REPOS } from '../types';


const initialState = {
  loading: false,
  data: []
};

export const rootReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_REPOS:
      return { ...state, data: action.payload }
    default: 
      return state
  }
};