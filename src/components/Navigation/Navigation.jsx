import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      <NavLink
        to="/phonebook"
        className={s.link}
        activeClassName={s.activeLink}
      >
        PhoneBook
      </NavLink>
    </nav>
  );
}
