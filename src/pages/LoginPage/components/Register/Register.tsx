import React from 'react';
import styles from './Register.module.scss';

export const Register: React.FC = () => {
  return (
    <div className={styles.register}>
      <p>
        Don&apos;t have an account?
        <a href="#" className={styles.register__link}>
          {' '}
          Register
        </a>
      </p>
    </div>
  );
};
