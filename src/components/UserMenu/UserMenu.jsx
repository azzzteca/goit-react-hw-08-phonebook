import { useSelector, useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import * as authSelectors from '../../redux/auth/auth-selectors';
import s from './UserMenu.module.css';

export function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const handleLogOut = evt => {
    evt.preventDefault();

    dispatch(authOperations.logOut());
  };

  return (
    <div className={s.container}>
      <span className={s.name}> Welcome, {name}</span>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
