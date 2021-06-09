import React from 'react'
import { Button } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'

const RatingSearch = ({ setRateSearch, rateSearch }) => {
  const changeRating = (newRating) => setRateSearch(newRating)
  return (
    <div className="starss">
      <StarRatings
        rating={rateSearch}
        starRatedColor="blue"
        changeRating={changeRating}
        numberOfStars={5}
        name="rate"
      />

      <div>
        <Button
          variant="outline-dark"
          size="sm"
          onClick={() => setRateSearch(0)}
        >
          Reset
        </Button>{' '}
      </div>
    </div>
  )
}

export default RatingSearch
