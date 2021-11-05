import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchMovies from '../../services/movie-api';
import s from './HomePage.module.scss';

function HomePageView () {
  const location = useLocation();
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchMovies
      .fetchTrendingMoviesByDay()
      .then((result) => setTrendMovies(result));
  }, []);

  return (
    <>
    <h1>Trending movies</h1>
    {trendMovies && (
      <ul className={s.movieList}>
        {trendMovies.map(( trendMovie ) => (
          <li key={trendMovie.id } className={s.movieItem}>
            <Link to={{
              pathname: `/movies/${ trendMovie.id }`,
              state: {from: location}
            }}>
              <img
                src={
                  "https://image.tmdb.org/t/p/w200" + trendMovie.poster_path
                }
                alt={trendMovie.title} width='200'
              ></img>
            </Link>
          </li>
        ))}
      </ul>
    )}
    </>
  );
}

export default HomePageView;
