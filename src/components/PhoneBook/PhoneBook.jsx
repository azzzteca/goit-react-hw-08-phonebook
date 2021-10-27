import { useSelector } from 'react-redux';
import { Section } from '../PhoneBook/Section/Section';
import { InputForm } from '../PhoneBook/InputForm/InputForm';
import { ContactList } from '../PhoneBook/ContactList/ContactList';
import { Filter } from '../PhoneBook/Filter/Filter';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import s from './PhoneBook.module.css';

export default function PhoneBook() {
  const contacts = useSelector(getContacts);
  return (
    <div className={s.section}>
      <Section title={'Phonebook'}>
        <InputForm />

        <ContactList>{contacts.length > 2 && <Filter />}</ContactList>
      </Section>
    </div>
  );
}
