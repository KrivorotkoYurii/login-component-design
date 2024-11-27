import React from 'react';
import styles from './LoginButton.module.scss';

export const LoginButton: React.FC = () => {
  return (
    <button type="submit" className={styles.button}>
      Login
    </button>
  );
};
