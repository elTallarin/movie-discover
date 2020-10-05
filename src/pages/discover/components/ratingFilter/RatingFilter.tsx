import React, { useContext } from 'react';
import RatingConext from '../../../../state/rating.context';
import { Ratings } from '../../../../types/ratings.enum';
import { Rating } from './components/rating/Rating';

export default function RatingFilter() {
  // const [ selectedRating, setRating ] = useState<Ratings>(Ratings.ZERO);
  const [selectedRating, selectRating] = useContext(RatingConext);
  function setSelectedRating(rating: Ratings) {
     selectRating({ value: rating });
  }

  return (
    <div>
      {/* Did not find easy way to loop over enum values, so created components one by one */}
      <Rating
        selectedRating={selectedRating.value}
        rating={Ratings.ONE}
        setRating={setSelectedRating}/>
      <Rating
        selectedRating={selectedRating.value}
        rating={Ratings.TWO}
        setRating={setSelectedRating}/>
      <Rating
        selectedRating={selectedRating.value}
        rating={Ratings.THREE}
        setRating={setSelectedRating}/>
      <Rating
        selectedRating={selectedRating.value}
        rating={Ratings.FOUR}
        setRating={setSelectedRating}/>
      <Rating
        selectedRating={selectedRating.value}
        rating={Ratings.FIVE}
        setRating={setSelectedRating}/>
    </div>
  )
}