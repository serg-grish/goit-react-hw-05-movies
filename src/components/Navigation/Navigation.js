import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={s.nav_item}
        activeClassName={s.activeClassName}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/movie"
        className={s.nav_item}
        activeClassName={s.activeClassName}
        exact
      >
        Movie
      </NavLink>
    </nav>
  );
};

export default Navigation;
