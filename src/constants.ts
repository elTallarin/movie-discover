export const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const LANGUAGE = 'en-US';
export const REGION = 'us'

export enum APIS {
  CONFIGURATION = 'configuration',
  DISCOVER = 'discover/movie',
  SEARCH = 'search/movie',
  DETAIL = 'movie/{0}',
  TRAILER = 'movie/{0}/videos',
  MOVIE_CAST ='movie/{0}/credits'
};

export enum EXTERNALS {
  GIT = 'https://github.com/elTallarin/movie-discover',
  TMDB = 'https://www.themoviedb.org/'
}
