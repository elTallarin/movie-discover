import React, { createContext } from 'react';
import { IApiConfiguration } from '../types/apiConfiguration';

const defaultApiConfiguration: IApiConfiguration = {
  images: {
  base_url: undefined,
  poster_sizes: []
  }
}

const ApiConfigContext: React.Context<IApiConfiguration> =
  createContext<IApiConfiguration>(defaultApiConfiguration);

export default ApiConfigContext;