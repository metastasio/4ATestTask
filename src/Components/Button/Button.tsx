import { PropsWithChildren } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  style: string;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { style, children } = props;

  return (
    <button className={`${styles.main_button} ${styles[style]}`}>
      {children}
    </button>
  );
};
