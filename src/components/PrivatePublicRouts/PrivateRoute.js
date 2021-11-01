import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
