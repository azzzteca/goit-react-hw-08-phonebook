import { NavLink } from 'react-router-dom';
import s from './AuthNavigation.module.css';

export function AuthNavigation() {
  return (
    <div>
      <NavLink
        to="/registration"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Registration
      </NavLink>

      <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
        Login
      </NavLink>
    </div>
  );
}
