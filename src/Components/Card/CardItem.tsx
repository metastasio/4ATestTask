import styles from './carditem.module.css';

export const CardItem = () => {
  return (
    <a className={styles.card_link} href='#'>
      <div className={styles.wrapper}>
        <p className={styles.date}>1 месяц</p>
        <p className={styles.text}>Чтобы просто начать</p>
        <p className={styles.price_discount}>699₽</p>
        <p className={styles.price}>999₽</p>
      </div>
    </a>
  );
};
