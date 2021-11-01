import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from '../Continer/Container.jsx';
import AppBar from '../AppBar/AppBar.jsx';
import HomeView from '../../views/HomeView';
import PhoneBook from '../PhoneBook/PhoneBook.jsx';
import RegisterView from '../../views/RegisterView';
import LoginView from '../../views/LoginView';
import PrivateRoute from '../PrivatePublicRouts/PrivateRoute';
import PublicRoute from '../PrivatePublicRouts/PublicRoute.js';
import * as authOperations from '../../redux/auth/auth-operations';
import * as authSelectors from '../../redux/auth/auth-selectors';
import s from './App.module.css';

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
        </Switch>
      )}
    </Container>
  );
}
