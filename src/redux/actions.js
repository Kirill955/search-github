// Types
import { FETCH_REPOS, FON_LOADING_REPOS, SHOW_LOADER, HIDE_LOADER } from './types';


export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });


export const fonLoadingRepos = () => {
  return async dispatch => {
    dispatch(showLoader());
    const response = await fetch('https://api.github.com/search/repositories?q=tetris&per_page=6');
    const data = await response.json();
    dispatch({
      type: FON_LOADING_REPOS,
      payload: data.items
    })
    setTimeout(() => dispatch(hideLoader()), 1000);
  }
};
export const fetchRepos = reposName => {
  return async dispatch => {
    dispatch(showLoader());
    const response = await fetch(`https://api.github.com/search/repositories?q=${reposName}&per_page=12`);
    const data = await response.json();
    dispatch({
      type: FETCH_REPOS,
      payload: data.items
    })
    setTimeout(() => dispatch(hideLoader()), 1000);
  }
};