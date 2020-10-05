import React, { createContext, Dispatch, SetStateAction } from 'react';
import { Ratings } from '../types/ratings.enum';
import { IRatingContextData } from '../types/RatingContextData';

const RatingConext: React.Context<[IRatingContextData, Dispatch<SetStateAction<IRatingContextData>>]>
  = createContext<[IRatingContextData, Dispatch<SetStateAction<IRatingContextData>>]>([ {value: Ratings.ZERO}, () => {} ]);

export default RatingConext;