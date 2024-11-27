/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './LoginPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <form action="">
          <h1 className={styles.login__title}>Login</h1>

          <div className={styles.login__inputBox}>
            <input
              className={styles.login__input}
              type="text"
              placeholder="Email"
              required
            />
            <FontAwesomeIcon icon={faUser} className={styles.login__icon} />
          </div>

          <div className={styles.login__inputBox}>
            <input
              className={styles.login__input}
              type="password"
              placeholder="Password"
              required
            />
            <FontAwesomeIcon icon={faLock} className={styles.login__icon} />
          </div>

          <div className={styles.login__rememberForgot}>
            <label>
              <input type="checkbox" className={styles.login__checkbox} />{' '}
              Remember me
            </label>{' '}
            <a href="#" className={styles.login__forgot}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={styles.login__button}>
            Login
          </button>

          <div className={styles.login__register}>
            <p>
              Don&apos;t have an account?
              <a href="#" className={styles.login__registerLink}>
                {' '}
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
