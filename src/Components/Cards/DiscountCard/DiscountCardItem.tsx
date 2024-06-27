import { useState } from 'react';
import { SaleBadge } from '../SaleBadge/SaleBadge';

import styles from './discountcarditem.module.css';

type DiscountCardItemProps = {
  date: string;
  priceDiscount: number;
  price: number;
  discount: number;
};

export const DiscountCardItem = (props: DiscountCardItemProps) => {
  const { date, priceDiscount, price, discount } = props;
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <p className={styles.date}>{date}</p>
      <label className='sr_only' htmlFor='discount_radio'>
        Выбрать план занятий
      </label>
      <input
        className={styles.radio_input}
        id='discount_radio'
        type='radio'
        name='course'
        checked={checked}
        onChange={(e) => e.stopPropagation()}
      />
      <p className={styles.price_discount}>{priceDiscount}₽</p>
      <SaleBadge discount={discount} style='mini' />
      <p className={styles.price}>{price}₽</p>
    </div>
  );
};
