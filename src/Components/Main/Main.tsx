import { CardItem } from '../Card/CardItem';

import styles from './main.module.css';

export const Main = () => {
  return (
    <>
      <main className={styles.wrapper}>
        <h1>Выберите подходящий тарифный план</h1>
        <picture className={styles.banner}>
          <source srcSet='img.png' media='(max-width: 600px)' />
          <img src='img big.png' alt='Фото, рекламирующее курс' />
        </picture>
        <ul className={styles.card_list}>
          <li className={styles.card_item}>
            <CardItem />
          </li>
          <li className={styles.card_item}>
            <CardItem />
          </li>
          <li className={styles.card_item}>
            <CardItem />
          </li>
          <li className={styles.card_item}>
            <CardItem />
          </li>
        </ul>
        <p className={styles.text_hint}>
          Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем
          за 1 месяц
        </p>
        <div className={styles.policy}>
          <input id='policy' type='checkbox' className={styles.policy_input} />
          <label htmlFor='policy' className={styles.policy_label}>
            Я соглашаюсь с <a href='#'>Правилами сервиса</a> и условиями{' '}
            <a href='#'>Публичной оферты</a>.
          </label>
        </div>
        <button className={styles.button_buy}>купить</button>

        <p className={styles.policy_warning}>
          Нажимая «Купить», Пользователь соглашается на автоматическое списание
          денежных средств по истечению купленного периода. Дальнейшие списания
          по тарифам участвующим в акции осуществляются по полной стоимости
          согласно оферте.
        </p>
      </main>
    </>
  );
};
