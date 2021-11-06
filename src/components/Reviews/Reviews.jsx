import { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import fetchMovies from '../../services/movie-api';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovies
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>not found reviews</p>
      )}
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};



export default Reviews;
