import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import AuthorView from "./views/AuthorView";
import BooksView from "./views/BooksView";
import NotFoundView from "./views/NotFoundView";

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Books
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorView} />
      <Route path="/books" component={BooksView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
