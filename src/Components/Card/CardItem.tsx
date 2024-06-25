import cn from 'classnames';

import styles from './carditem.module.css';

type CardItemProps = {
  status: string;
  date: string;
  text: string;
  priceDiscount: number;
  price: number;
  discount: number;
};

export const CardItem = (props: CardItemProps) => {
  const { status, date, text, priceDiscount, price, discount } = props;

  return (
    <a className={styles.card_link} href='#'>
      <div className={styles.wrapper}>
        <p className={styles.date}>{date}</p>
        <p className={styles.text}>{text}</p>
        <p className={styles.price_discount}>
          {status !== 'ended' ? priceDiscount : price}₽
        </p>
        <p
          className={cn(styles.price, {
            [styles.hidden]: status === 'ended',
          })}
        >
          {price}₽
        </p>
        <div
          className={cn(styles.sale, {
            [styles.hidden]: status === 'ended',
          })}
        >
          -{discount}%
        </div>
      </div>
    </a>
  );
};
