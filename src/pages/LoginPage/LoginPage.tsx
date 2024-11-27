/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <form action="">
        <h1>Login</h1>

        <div className={styles.inputBox}>
          <input type="text" placeholder="Email" required />
        </div>

        <div className={styles.inputBox}>
          <input type="password" placeholder="Password" required />
        </div>

        <div className={styles.rememberForgot}>
          <label>
            <input type="checkbox" /> Remember me
          </label>{' '}
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className={styles.btn}>
          Login
        </button>

        <div className={styles.registerLink}>
          <p>
            Don&apos;t have an account?
            <a href="#"> Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
