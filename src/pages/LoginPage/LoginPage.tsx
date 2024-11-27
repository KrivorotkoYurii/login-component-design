/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './LoginPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { RememberForgot } from './components/RememberForgot';
import { LoginButton } from './components/LoginButton';
import { Register } from './components/Register';

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

          <RememberForgot />

          <LoginButton />

          <Register />
        </form>
      </div>
    </div>
  );
};
