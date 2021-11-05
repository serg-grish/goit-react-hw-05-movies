import { useState, useEffect } from 'react';
import {
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import fetchMovies from '../../services/movie-api';
import s from './MovieDetailsPage.module.scss';



export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMovies
    .fetchMoviesById(movieId)
    .then(response => setMovie(response));
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" className={s.goBack_btn} onClick={onGoBack}>
            Go back
          </button>

          <div className={s.movie_details}>
            <div className={s.movie_img}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : 'not found image'
                }
                alt={movie.title}
              />
            </div>
            <div className={s.movie_text}>
              <p className={s.movie_title}>{movie.title}</p>
              <p className={s.movie_description}>{movie.overview}</p>
            </div>
          </div>

        </>
      )}
    </>
  );
};