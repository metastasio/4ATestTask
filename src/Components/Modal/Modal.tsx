import styles from './modal.module.css';

type ModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({ setOpen }: ModalProps) => {
  return (
    <>
      <div
        className={styles.background}
        onClick={() => {
          console.log('keke');
          setOpen(false);
        }}
      >
        <div className={styles.modal}>
          <div className={styles.label}>горящее предложение</div>
          <button
            className={styles.button_close}
            onClick={() => setOpen(false)}
          ></button>
          <h2 className={styles.header}>
            не упусти свой <br />
            <span className={styles.accent}>последний шанс</span>
          </h2>

          <p className={styles.text}>
            Мы знаем, как трудно начать.. <strong>Поэтому!</strong>
          </p>
          <p className={styles.bordered_p}>
            <strong>
              Дарим скидку для{' '}
              <span className={styles.accent}>лёгкого старта</span>
            </strong>
            🏃‍♂️
          </p>
          <p className={styles.text}>
            <strong>Посмотри, что мы для тебя приготовили&nbsp;🔥</strong>
          </p>
          <p>ахахха ничего</p>
        </div>
      </div>
    </>
  );
};
