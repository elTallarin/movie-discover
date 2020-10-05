import React from 'react';
import { Ratings } from '../../../../../../types/ratings.enum';
import './rating.scss'
import { IRatingProps } from './ratingProps';

export function Rating(props: IRatingProps) {
  const { selectedRating, rating, setRating } = props;
  
  function handleRatingSelection() {
    const newRating: Ratings = rating === selectedRating
      ? Ratings.ZERO
      : rating; 
    setRating(newRating);
  }

  return (
    <span
      onClick={handleRatingSelection}
      className={'rating fa'.concat(selectedRating >= rating ? ' fa-star checked' : ' fa-star-o')}>
    </span>
  )
}