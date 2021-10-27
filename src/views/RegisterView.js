import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../redux/auth/auth-operations';

import s from './RegisterView.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
    evt.target.reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  return (
    <section className={s.section}>
      <h1> REGISTRATION FORM</h1>

      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="name"
          />
        </label>
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
        </label>
        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </section>
  );
}
