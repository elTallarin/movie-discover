import axios, { AxiosResponse } from 'axios';
import { BASE_URL, APIS, API_KEY, LANGUAGE, REGION } from '../constants';
import { IApiConfiguration } from '../types/apiConfiguration';
import { IDiscoverApi } from '../types/DiscoverApi';
import { IMovieCredits } from '../types/MovieCredits';
import { IMovieDetails } from '../types/movieDetails';
import { IMovieItem } from '../types/movieItem';

export function getAPIConfiguration(): Promise<IApiConfiguration> {
    const url = `${BASE_URL}/${APIS.CONFIGURATION}`;
    const params = {
        api_key: API_KEY
    }

    return axios
      .get<any, AxiosResponse<IApiConfiguration>>(url, { params })
      .then(response => response.data);
}

export function discoverMovies(): Promise<IMovieItem[]> {
    const url = `${BASE_URL}/${APIS.DISCOVER}`;
    const params = {
        api_key: API_KEY,
        language: LANGUAGE,
        region: REGION,
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: '1'
    };

    return axios
      .get<any, AxiosResponse<IDiscoverApi>>(
        url, { params }
      )
      .then(response => {
        return response.data.results;
      });
}

export function searchMovies(query: string): Promise<IMovieItem[]> {
    const url = `${BASE_URL}/${APIS.SEARCH}`;
    const params = {
        api_key: API_KEY,
        language: LANGUAGE,
        region: REGION,
        query,
        include_adult: 'false',
        include_video: 'false',
        page: '1'
    };
    return axios
      .get<any, AxiosResponse<IDiscoverApi>>(
        url, { params }
      )
      .then(response => response.data.results);
}

export function getMovieDetails(movieId: number): Promise<IMovieDetails> {
  const url = `${BASE_URL}/${APIS.DETAIL.replace('{0}', `${movieId}`)}`;
  const params = {
    api_key: API_KEY,
    language: LANGUAGE,
  };

  return axios
      .get<any, AxiosResponse<IMovieDetails>>(
        url, { params }
      )
      .then(response => response.data)
};

export function getMovieCredits(movieId: number): Promise<IMovieCredits> {
  const url = `${BASE_URL}/${APIS.MOVIE_CAST.replace('{0}', `${movieId}`)}`;

  const params = {
    api_key: API_KEY,
  };

  return axios
      .get<any, AxiosResponse<IMovieCredits>>(
        url, { params }
      )
      .then(response => response.data)
}

export function getMovieTrailerKey(movieId: number): Promise<string> {
  const url = `${BASE_URL}/${APIS.TRAILER.replace('{0}', `${movieId}`)}`;

  const params = {
    api_key: API_KEY,
  };

  return axios
      .get<any, AxiosResponse<{results: {key: string}[]}>>(
        url, { params }
      )
      .then(response => response.data.results[0].key)
}
