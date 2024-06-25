import styles from './modal.module.css';

type ModalProps = {
  setIsOpen: () => void;
};

export const Modal = ({ setIsOpen }: ModalProps) => {
  return (
    <>
      <div className={styles.background} onClick={() => setIsOpen(false)} />
      {/* <div className={styles.centered}> */}
        <div className={styles.modal}>
          
          <div className={styles.modalHeader}>
            <h2 className={styles.heading}>
              не упусти свой шанс <br />
              <span>последний шанс</span>
            </h2>
          </div>
          <p>
            Мы знаем, как трудно начать.. <span>Поэтому!</span>
          </p>
          <div>Дарим скидку для лёгкого старта 🏃‍♂️</div>
          <p>Посмотри, что мы для тебя приготовили 🔥</p>
          <p>ахахха ничего</p>
        {/* </div> */}
      </div>
    </>
  );
};
