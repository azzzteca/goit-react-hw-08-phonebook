import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from '../Continer/Container.jsx';
import AppBar from '../AppBar/AppBar.jsx';
import PrivateRoute from '../PrivatePublicRouts/PrivateRoute';
import PublicRoute from '../PrivatePublicRouts/PublicRoute.js';
import * as authOperations from '../../redux/auth/auth-operations';
import * as authSelectors from '../../redux/auth/auth-selectors';
import s from './App.module.css';

const HomeView = lazy(() => import('../../views/HomeView'));
const RegisterView = lazy(() => import('../../views/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView'));
const PhoneBook = lazy(() => import('../PhoneBook/PhoneBook.jsx'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.isFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      {!isFetchingCurrentUser && (
        <Switch>
          <Suspense fallback={<p>Loading ...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/registration" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/phonebook" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/phonebook">
              <PhoneBook />
            </PrivateRoute>
          </Suspense>
        </Switch>
      )}
    </Container>
  );
}
