import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as Api from '../Services/Api';
import styles from './Pages.module.css';

const HomePage = () => {
  const { pathname } = useLocation();

  const [list, setList] = useState([]);

  useEffect(() => {
    Api.fetchMoviesTrending()
      .then(({ results }) => {
        setList(results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1 className={styles.tendName}>TRENDING MOVIES</h1>
      <ul className={styles.movieList}>
        {list.map(({ id, title, name, poster_path }) => (
          <li key={id} className={styles.movieItem}>
            <Link
              to={{
                pathname: `Movies/${id}`,
                state: {
                  backUrl: pathname,
                },
              }}
            >
              <img
                className={styles.poster}
                src={
                  poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
                }
                alt={title ?? name}
                width="280px"
                height="450px"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
