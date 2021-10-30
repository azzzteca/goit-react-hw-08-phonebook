import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { UserMenu } from '../UserMenu/UserMenu';
import * as authSelectors from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      <AuthNavigation />
      <UserMenu />

      {/* {!isLoggedIn ? <AuthNavigation /> : <UserMenu />} */}
    </header>
  );
}
