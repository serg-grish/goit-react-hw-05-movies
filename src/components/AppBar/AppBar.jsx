import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.scss";

export default function Appbar() {
  return (
    <header className={s.nav}>
      <Navigation />
    </header>
  );
};