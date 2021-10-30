import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ContactListItem } from '../../PhoneBook/ContactListItem/ContactListItem';
import {
  getContacts,
  getFilter,
} from '../../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import s from './ContactList.module.css';

export function ContactList({ children }) {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <section className={s.section}>
      <h2>Contacts</h2>
      {children}
      <ul className={s.list}>
        {!filter
          ? contacts.map(contact => (
              <li key={uuidv4()}>
                <ContactListItem contact={contact} />
              </li>
            ))
          : contacts
              .filter(contact => contact.name.toLowerCase().includes(filter))
              .map(contact => (
                <li key={contact.id}>
                  <ContactListItem contact={contact} />
                </li>
              ))}
      </ul>
    </section>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  children: PropTypes.node,
};
