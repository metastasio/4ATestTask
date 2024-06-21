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
        <ul>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
        </ul>
        <p>
          Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем
          за 1 месяц
        </p>
        <label htmlFor='policy'>
          Я соглашаюсь с Правилами сервиса и условиями Публичной оферты.
        </label>
        <input id='policy' type='checkbox' />
      </main>
    </>
  );
};
