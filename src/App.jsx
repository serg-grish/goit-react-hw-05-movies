import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.scss";
import AppBar from "./components/AppBar/AppBar";


const HomePage = lazy(() =>
  import('./pages/HomePageView' /* webpackChunkName: 'HomePage' */),
);
const MoviesPage = lazy(() =>
  import('./components/MoviesPage' /* webpackChunkName: 'MoviesPage' */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage' /* webpackChunkName: 'MovieDetailsPage' */
  ),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundView' /* webpackChunkName: 'NotFoundPage' */),
);

export default function App() {
  return (
  <div className="App">
    <AppBar />
    <Suspense fallback={<h2>Loading...</h2>}>
    
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/movies" component={MoviesPage} exact />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
    </div>
  );
}
