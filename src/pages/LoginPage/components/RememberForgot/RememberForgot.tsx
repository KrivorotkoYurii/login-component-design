import React from 'react';
import styles from './RememberForgot.module.scss';

export const RememberForgot: React.FC = () => {
  return (
    <div className={styles.remember}>
      <label>
        <input type="checkbox" className={styles.remember__checkbox} /> Remember
        me
      </label>{' '}
      <a href="#" className={styles.remember__forgot}>
        Forgot password?
      </a>
    </div>
  );
};
