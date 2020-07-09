// Types
import { FETCH_REPOS, FON_LOADING_REPOS } from './types';


export const fonLoadingRepos = () => {
  return async dispatch => {
    const response = await fetch('https://api.github.com/search/repositories?q=tetris&per_page=5');
    const data = await response.json();
    dispatch({
      type: FON_LOADING_REPOS,
      payload: data.items
    })
  }
};

export const fetchRepos = reposName => {
  return async dispatch => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${reposName}&per_page=10`);
    const data = await response.json();
    dispatch({
      type: FETCH_REPOS,
      payload: data.items
    })
  }
};