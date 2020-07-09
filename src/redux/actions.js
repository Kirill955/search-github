// Types
import { FETCH_REPOS } from './types';

export const fetchRepos = reposName => {
  return async dispatch => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${reposName}`);
    const data = await response.json();
    dispatch({
      type: FETCH_REPOS,
      payload: data.items
    })
  }
};