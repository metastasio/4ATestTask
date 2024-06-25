import styles from './modal.module.css';

type ModalProps = {
  setIsOpen: () => void;
};

export const Modal = ({ setIsOpen }: ModalProps) => {
  return (
    <>
      <div className={styles.background} onClick={() => setIsOpen(false)} />
      <div className={styles.modal}>
        <div className={styles.label}>горящее предложение</div>
        <button
          className={styles.button_close}
          onClick={() => setIsOpen(false)}
        ></button>
        {/* <div className={styles.heading}> */}
        <h2 className={styles.header}>
          не упусти свой шанс <br />
          <span className={styles.accent}>последний шанс</span>
        </h2>
        {/* </div> */}

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
        <p className={styles.text}>Посмотри, что мы для тебя приготовили 🔥</p>
        <p>ахахха ничего</p>
      </div>
    </>
  );
};
