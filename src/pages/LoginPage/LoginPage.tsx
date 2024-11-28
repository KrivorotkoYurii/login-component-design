/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styles from './LoginPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { RememberForgot } from './components/RememberForgot';
import { LoginButton } from './components/LoginButton';
import { Register } from './components/Register';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!email.includes('@') || email.length > 255) {
      setEmailError('Email must be valid');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 8 || password.length > 255) {
      setPasswordError('Incorrect password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      // eslint-disable-next-line no-console
      console.log('Form submitted successfully!'); // remove this console statement
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.login__title}>Login</h1>

          <div className={styles.login__inputBox}>
            <input
              className={styles.login__input}
              value={email}
              onChange={event => setEmail(event.target.value)}
              type="text"
              placeholder="Email"
              required
            />
            <FontAwesomeIcon icon={faUser} className={styles.login__icon} />
            {emailError && <span>{emailError}</span>}
          </div>

          <div className={styles.login__inputBox}>
            <input
              className={styles.login__input}
              value={password}
              onChange={event => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <FontAwesomeIcon icon={faLock} className={styles.login__icon} />
            {passwordError && <span>{passwordError}</span>}
          </div>

          <RememberForgot />

          <LoginButton />

          <Register />
        </form>
      </div>
    </div>
  );
};
