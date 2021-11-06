import Navigation from '../Navigation/Navigation';
import style from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className = {style.nav}>
      <Navigation />
    </header>
  );
};
