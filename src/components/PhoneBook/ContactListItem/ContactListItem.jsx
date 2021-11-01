import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import s from './ContactListItem.module.css';

export function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <>
      <span className={s.name}>
        {contact.name} {contact.number}
      </span>
      <button
        type="button"
        id={contact.id}
        onClick={evt =>
          dispatch(contactsOperations.deleteContacts(evt.target.id))
        }
      >
        Delete
      </button>
    </>
  );
}
