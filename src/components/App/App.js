import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Section } from '../Section/Section.jsx';
import { InputForm } from '../InputForm/InputForm.jsx';
import { Filter } from '../Filter/Filter.jsx';
import { ContactList } from '../ContactList/ContactList.jsx';
import { getContacts } from '../../redux/contacts-selectors';
import s from './App.module.css';

import { Container } from '../Continer/Container.jsx';
import { AppBar } from '../AppBar/AppBar.jsx';
import { HomePage } from '../HomePage/HomePage.jsx';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm.jsx';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/registration">
            <RegistrationForm />
          </Route>

          <Route></Route>
          <Route></Route>

          <div className={s.app}>
            <Section title={'Phonebook'}>
              <InputForm />

              <ContactList>{contacts.length > 2 && <Filter />}</ContactList>
            </Section>
          </div>
        </Switch>
      </Container>
    </>
  );
}
