import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from '../Continer/Container.jsx';
import AppBar from '../AppBar/AppBar.jsx';
import HomeView from '../../views/HomeView';
import PhoneBook from '../PhoneBook/PhoneBook.jsx';
import RegisterView from '../../views/RegisterView';
import LoginView from '../../views/LoginView';
import s from './App.module.css';
import * as authOperations from '../../redux/auth/auth-operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route path="/phonebook">
            <PhoneBook />
          </Route>

          <Route path="/registration">
            <RegisterView />
          </Route>

          <Route path="/login">
            <LoginView />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
