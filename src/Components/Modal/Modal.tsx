import { Button } from '../Button/Button';
import { DiscountCardItem } from '../Cards/DiscountCard/DiscountCardItem';
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
          setOpen(false);
        }}
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
          <ul className={styles.card_list}>
            <li className={styles.card_item}>
              <DiscountCardItem
                date='1 неделя'
                priceDiscount={599}
                price={999}
                discount={40}
              />
            </li>
            <li className={styles.card_item}>
              <DiscountCardItem
                date='1 месяц'
                priceDiscount={799}
                price={1690}
                discount={50}
              />
            </li>
            <li className={styles.card_item}>
              <DiscountCardItem
                date='3 месяца'
                priceDiscount={1690}
                price={3990}
                discount={60}
              />
            </li>
          </ul>
          <Button content='Начать тренироваться' style='start' />
        </div>
      </div>
    </>
  );
};
