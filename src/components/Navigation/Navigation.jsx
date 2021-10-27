import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export function Navigation() {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink
            exact
            to="/"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Home
          </NavLink>

          <NavLink
            to="/phonebook"
            className={s.link}
            activeClassName={s.activeLink}
          >
            PhoneBook
          </NavLink>

          <NavLink
            to="/registration"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Registration
          </NavLink>

          <NavLink
            to="/login"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
