import { useState } from 'react';
import { discountProgramsAdditional } from '../../config';
import { Button } from '../Button/Button';
import { DiscountCardItem } from '../Cards/DiscountCard/DiscountCardItem';
import { TrainingProgram } from '../Main/types';

import styles from './modal.module.css';

type ModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  discountData: TrainingProgram[] | undefined;
};

export const Modal = (props: ModalProps) => {
  const { setOpen, discountData } = props;
  const [checked, setChecked] = useState('');

  const handleClick = (id: string) => {
    setChecked((prev) => (prev === id ? '' : id));
  };

  return (
    <>
      <div
        className={styles.background}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.heading}>
            <div className={styles.label}>горящее предложение</div>
            <button
              className={styles.button_close}
              onClick={() => setOpen(false)}
            ></button>
          </div>

          <h2 className={styles.header}>
            не упусти свой <span className={styles.accent}>последний шанс</span>
          </h2>

          <p className={`${styles.text} ${styles.first}`}>
            Мы знаем, как трудно начать.. <strong>Поэтому!</strong>
          </p>
          <p className={styles.bordered_p}>
            <strong>
              Дарим скидку для{' '}
              <span className={styles.accent}>лёгкого старта</span>
            </strong>
            🏃‍♂️
          </p>
          <p className={`${styles.text} ${styles.strong}`}>
            <strong>
              Посмотри,&nbsp;что&nbsp;мы для&nbsp;тебя&nbsp;приготовили&nbsp;🔥
            </strong>
          </p>

          <ul className={styles.card_list}>
            {discountData?.map(({ id, name, price }) => (
              <li className={styles.card_item} key={id}>
                <DiscountCardItem
                  handler={() => handleClick(id)}
                  selected={checked === id}
                  date={name}
                  priceDiscount={price}
                  price={Math.round(
                    (price /
                      (100 - discountProgramsAdditional[name].discount)) *
                      100,
                  )}
                  discount={discountProgramsAdditional[name].discount}
                />
              </li>
            ))}
          </ul>

          <Button style='start'>Начать тренироваться</Button>
        </div>
      </div>
    </>
  );
};
