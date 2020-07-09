// Types
import { FETCH_REPOS, FON_LOADING_REPOS, SHOW_LOADER, HIDE_LOADER } from '../types';


const initialState = {
  loading: false,
  repositories: []
};

export const rootReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FON_LOADING_REPOS: 
      return { ...state, repositories: action.payload }
    case FETCH_REPOS:
      return { ...state, repositories: action.payload }
    case SHOW_LOADER: 
      return { ...state, loading: true }
    case HIDE_LOADER: 
      return { ...state, loading: false}
    default: 
      return state
  }
};