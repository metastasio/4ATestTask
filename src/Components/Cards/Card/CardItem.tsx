import cn from 'classnames';
import { SaleBadge } from '../SaleBadge/SaleBadge';

import styles from './carditem.module.css';
import { CSSProperties } from 'react';

type CardItemProps = {
  wide: boolean;
  status: string;
  date: string;
  text: string;
  textLong?: string;
  priceDiscount: number;
  price: number;
  discount: number;
  isHidden: boolean;
  className: string;
};

export const CardItem = (props: CardItemProps) => {
  const {
    status,
    date,
    text,
    textLong,
    priceDiscount,
    price,
    discount,
    isHidden,
    className,
    wide,
  } = props;

  return (
    <div className={cn(styles.wrapper, className, { [styles.wide]: wide })}>
      <p className={styles.date}>{date}</p>
      <p className={styles.text}>{text}</p>
      <p className={styles.text2}>{textLong}</p>
      <p
        className={styles.price_discount}
        style={{ '--countup': status !== 'ended' ? priceDiscount : price } as CSSProperties}
      >

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
