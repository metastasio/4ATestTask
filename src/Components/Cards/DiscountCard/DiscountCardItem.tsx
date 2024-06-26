import styles from './discountcarditem.module.css';

type DiscountCardItemProps = {
  date: string;
  priceDiscount: number;
  price: number;
  discount: number;
};

export const DiscountCardItem = (props: DiscountCardItemProps) => {
  const { date, priceDiscount, price, discount } = props;

  return (
    <a className={styles.card_link} href='#'>
      <div className={styles.wrapper}>
        <p className={styles.date}>{date}</p>
        <label className='sr_only' htmlFor='discount_radio'>Выбрать план занятий</label>
        <input
          className={styles.radio_input}
          id='discount_radio'
          type='radio'
          name='course'
        />
        <p className={styles.price_discount}>{priceDiscount}₽</p>
        <div className={styles.sale}>-{discount}%</div>
        <p className={styles.price}>{price}₽</p>
      </div>
    </a>
  );
};
