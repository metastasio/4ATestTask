import cn from 'classnames';
import { SaleBadge } from '../SaleBadge/SaleBadge';

import styles from './discountcarditem.module.css';

type DiscountCardItemProps = {
  date: string;
  priceDiscount: number;
  price: number;
  discount: number;
  selected: boolean;
  handler: () => void;
};

export const DiscountCardItem = (props: DiscountCardItemProps) => {
  const { date, priceDiscount, price, discount, selected, handler } = props;

  return (
    <div
      className={cn(styles.wrapper, { [styles.active]: selected })}
      onClick={handler}
    >
      <p className={styles.date}>{date}</p>
      <label className='sr_only' htmlFor='discount_radio'>
        Выбрать план занятий
      </label>
      <input
        className={styles.radio_input}
        id='discount_radio'
        type='radio'
        name='course'
        checked={selected}
        onChange={() => {}}
      />
      <p className={styles.price_discount}>
        {priceDiscount}₽
        <SaleBadge discount={discount} style='mini' />
      </p>

      <p className={styles.price}>{price}₽</p>
    </div>
  );
};
