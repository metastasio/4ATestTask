import { useEffect, useState } from 'react';
import { CardItem } from '../Card/CardItem';

import styles from './main.module.css';

export const Main = () => {
  const [minutes, setMinutes] = useState(2);
  const [hours, setHours] = useState(
    Math.floor((minutes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutes((minutes) => {
        if (minutes === 0) {
          clearInterval(timer);
          return 0;
        } else return minutes - 1;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <p className={styles.text}>Скидка действует:</p>
        <div className={styles.timer_wrapper}>
          <div className={styles.timer_unit_wrapper}>
            <p className={styles.timer_time}>{hours}</p>
            <p className={styles.timer_text}>часов</p>
          </div>
          <p className={styles.timer_separator}>:</p>
          <div className={styles.timer_unit_wrapper}>
            <p className={styles.timer_time}>{minutes}</p>
            <p className={styles.timer_text}>минут</p>
          </div>
        </div>
      </header>
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Выберите подходящий тарифный план</h1>
        <picture className={styles.banner}>
          <source srcSet='img.png' media='(max-width: 600px)' />
          <img src='img big.png' alt='Фото, рекламирующее курс' />
        </picture>
        <ul className={styles.card_list}>
          <li className={styles.card_item}>
            <CardItem
              date='1 месяц'
              text='Чтобы просто начать 👍🏻'
              priceDiscount={699}
              price={999}
              discount={30}
            />
          </li>
          <li className={styles.card_item}>
            <CardItem
              date='3 месяца'
              text='Привести тело впорядок 💪🏻'
              priceDiscount={999}
              price={1299}
              discount={40}
            />
          </li>
          <li className={styles.card_item}>
            <CardItem
              date='1 год'
              text='Изменить образ жизни 🔥'
              priceDiscount={2990}
              price={5990}
              discount={50}
            />
          </li>
          <li className={styles.card_item}>
            <CardItem
              date='Навсегда'
              text='Всегда быть в форме ⭐️'
              priceDiscount={5990}
              price={18990}
              discount={70}
            />
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
