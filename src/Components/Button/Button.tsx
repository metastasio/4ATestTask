import styles from './button.module.css';

type ButtonProps = {
  content: string;
  style: string;
};

export const Button = (props: ButtonProps) => {
  const { content, style } = props;

  return (
    <button className={`${styles.main_button} ${styles[style]}`}>
      {content}
    </button>
  );
};
