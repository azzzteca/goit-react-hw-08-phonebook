import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import { getContacts } from '../../../redux/contacts/contacts-selectors';
import s from './InputForm.module.css';

export function InputForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const inputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    const newContact = name.toLowerCase();
    const savedContacts = contacts.find(
      contact => contact.name.toLowerCase() === newContact,
    );

    if (savedContacts) {
      alert(name + 'is already in contacts.');
      return;
    }

    dispatch(contactsOperations.addContacts({ name, number }));

    evt.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          onChange={inputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          onChange={inputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
