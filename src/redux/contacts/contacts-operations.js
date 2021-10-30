import axios from 'axios';

import * as contactsActions from './contacts-actions';
import { v4 as uuidv4 } from 'uuid';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactsSucccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContacts = contact => dispatch => {
  dispatch(contactsActions.addContactsRequest());

  axios
    .post('/contacts', {
      name: contact.name,
      number: contact.number,
      id: uuidv4(),
    })
    .then(({ data }) => dispatch(contactsActions.addContactsSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactsError(error)));
};

export const deleteContacts = id => dispatch => {
  dispatch(contactsActions.deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContacstSuccess(id)))
    .catch(error => dispatch(contactsActions.deleteContacstError(error)));
};
