import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import StarRatings from 'react-star-ratings'

function MovieCard({ movie }) {
  const { imgLnk, title, rate, id } = movie
  return (
    <div>
      <Link to={`/trailer/${id}`}>
        <Card
          style={{
            height: '35rem',
            position: 'relative',
            width: '18rem',
            margin: '20px',
          }}
        >
          <Card.Img style={{ height: '450px' }} variant="top" src={imgLnk} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Body>
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                margin: '5px 15px',
              }}
            >
              <StarRatings
                starDimension="30px"
                rating={rate}
                starRatedColor="#F9AB21"
                numberOfStars={5}
                name="rate"
              />
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default MovieCard
