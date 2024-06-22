import styles from './carditem.module.css';

type CardItemProps = {
  date: string;
  text: string;
  priceDiscount: number;
  price: number;
  discount: number;
};

export const CardItem = (props: CardItemProps) => {
  const { date, text, priceDiscount, price, discount } = props;

  return (
    <a className={styles.card_link} href='#'>
      <div className={styles.wrapper}>
        <p className={styles.date}>{date}</p>
        <p className={styles.text}>{text}</p>
        <p className={styles.price_discount}>{priceDiscount}₽</p>
        <p className={styles.price}>{price}₽</p>
        <div className={styles.sale}>-{discount}%</div>
      </div>
    </a>
  );
};
