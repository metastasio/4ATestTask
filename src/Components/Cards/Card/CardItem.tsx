import cn from 'classnames';
import { SaleBadge } from '../SaleBadge/SaleBadge';

import styles from './carditem.module.css';

type CardItemProps = {
  status: string;
  date: string;
  text: string;
  priceDiscount: number;
  price: number;
  discount: number;
  isHidden: boolean;
};

export const CardItem = (props: CardItemProps) => {
  const { status, date, text, priceDiscount, price, discount, isHidden } =
    props;

  return (
    <div className={styles.wrapper}>
      <p className={styles.date}>{date}</p>
      <p className={styles.text}>{text}</p>
      <p className={styles.price_discount}>
        {status !== 'ended' ? priceDiscount : price}₽
      </p>
      <div className={styles.price_wrapper}>
        <p
          className={cn(styles.price, {
            [styles.hidden]: isHidden,
          })}
        >
          {price}₽
        </p>
      </div>
      <SaleBadge
        discount={discount}
        style='regular'
        isHidden={status === 'ended'}
      />
    </div>
  );
};
