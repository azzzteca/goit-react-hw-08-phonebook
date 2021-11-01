import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/phonebook"
          className={s.link}
          activeClassName={s.activeLink}
        >
          PhoneBook
        </NavLink>
      )}
    </nav>
  );
}
