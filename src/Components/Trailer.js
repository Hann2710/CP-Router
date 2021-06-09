import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { FcHome } from 'react-icons/fc'
const Trailer = ({ movies }) => {
  const { id } = useParams()
  const mov = movies.filter((movie) => movie.id === id)[0]
  return (
    <div>
      <Link to="/">
        <button
          type="button"
          class="btn btn-outline-warning"
          style={{ margin: '15px', width: '70px', height: '40px' }}
        >
          <FcHome />
        </button>
      </Link>
      <div
        style={{
          margin: '20px auto ',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <ReactPlayer url={mov.trailerLnk} />
      </div>
      <div
        style={{
          justifyContent: 'center',
          margin: 'auto auto',
          border: '2px solid yellow',
          width: '60%',
        }}
      >
        <p style={{ fontSize: 'larger', fontWeight: 'bold' }}>Synopsis:</p>
        <p>{mov.description}</p>
      </div>
    </div>
  )
}

export default Trailer
