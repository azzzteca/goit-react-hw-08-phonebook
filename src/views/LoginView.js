import s from './LoginView.module.css';

export default function LoginForm() {
  return (
    <section className={s.section}>
      <h1>LOGIN FORM</h1>
      <form className={s.form}>
        <input type="text" />
        <input type="text" />
        <button type="button"> Login</button>
      </form>
    </section>
  );
}
