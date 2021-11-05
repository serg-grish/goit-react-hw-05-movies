import MovieDetailsPage from "../components/MovieDetailsPage/MovieDetailsPage";

import { lazy, Suspense } from 'react';
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';

import s from './MovieDetailsPage.module.scss';

const Cast = lazy(() => import('../components/Cast/Cast' /* webpackChunkName: 'Cast' */));
const Reviews = lazy(() =>
  import('../components/Reviews/Reviews' /* webpackChunkName: 'Reviews' */),
);

export default function MovieDetailsPageViews () {
    const { url } = useRouteMatch();
    const location = useLocation();
    const { movieId } = useParams();

    return (
        <>

        <MovieDetailsPage />


        <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { ...location.state },
            }}
            className={s.nav_item}
            activeClassName={s.activeNavLink}
          >
            Cast
          </NavLink>

          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { ...location.state },
            }}
            className={s.nav_item}
            activeClassName={s.activeNavLink}
          >
            Reviews
          </NavLink>

          <Suspense fallback={<h2>Loading...</h2>}>
            <Route path={`${url}/cast`}>
              <Cast movieId={movieId} />
            </Route>

            <Route path={`${url}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Suspense>
        </>
    );

}