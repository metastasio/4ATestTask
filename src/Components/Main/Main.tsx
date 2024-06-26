import { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { CardItem } from '../Cards/Card/CardItem';
import { useTimerContext } from '../../useTimerContext';
import { Modal } from '../Modal/Modal';

import styles from './main.module.css';

export const Main = () => {
  const { status } = useTimerContext();
  const [isOpen, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (status === 'ended') {
      setOpen(true);
      setChecked(true);
    }
  }, [status]);

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Выберите подходящий тарифный план</h1>
        <picture className={styles.banner}>
          <source srcSet='img.png' media='(max-width: 600px)' />
          <img src='img big.png' alt='Фото, рекламирующее курс' />
        </picture>
        <ul className={styles.card_list}>
          <li className={styles.card_item}>
            <CardItem
              status={status}
              date='1 месяц'
              text='Чтобы просто начать 👍🏻'
              priceDiscount={699}
              price={999}
              discount={30}
            />
          </li>
          <li className={styles.card_item}>
            <CardItem
              status={status}
              date='3 месяца'
              text='Привести тело впорядок 💪🏻'
              priceDiscount={999}
              price={1299}
              discount={40}
            />
          </li>
          <li className={styles.card_item}>
            <CardItem
              status={status}
              date='1 год'
              text='Изменить образ жизни 🔥'
              priceDiscount={2990}
              price={5990}
              discount={50}
            />
          </li>
          <li className={styles.card_item}>
            <CardItem
              status={status}
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
          <input
            id='policy'
            type='checkbox'
            className={styles.policy_input}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
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
      {isOpen && <Modal setOpen={setOpen} />}
    </>
  );
};
