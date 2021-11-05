import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => (
  
    <nav>
      <NavLink
        to="/"
        className={s.link}
        activeClassName={s.activeLink}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Movie
      </NavLink>
    </nav>
  
)

export default Navigation;
