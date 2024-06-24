import { useEffect, useState } from 'react';
// import { TimerContext } from '../../App';

import styles from './header.module.css';
import { useTimerContext } from '../../useTimerContext';

export const Header = () => {
  //   Получение данных от сервиса
  // Ссылка на получение: https://t-pay.iqfit.app/subscribe/list-test
  // Пример одной записи:
  const isExpiring = useTimerContext();
  console.log(isExpiring);
  const [time, setTime] = useState(120000);
  const currentHours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const currentMinutes = Math.floor((time / 1000 / 60) % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      const getTime = () => {
        console.log(time);
        if (time > 0) {
          setTime((prev) => (prev -= 1000));
        }
        if (time <= 30000) {
          console.log('hehe');
        }
      };
      getTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentHours, currentMinutes, time]);

  return (
    <header className={styles.header}>
      <p className={styles.text}>Скидка действует:</p>
      <div className={styles.timer_wrapper}>
        <div className={styles.timer_unit_wrapper}>
          <p className={styles.timer_time}>
            {`${currentHours}`.padStart(2, '0')}
          </p>
          <p className={styles.timer_text}>часов</p>
        </div>
        <p className={styles.timer_separator}>:</p>
        <div className={styles.timer_unit_wrapper}>
          <p className={styles.timer_time}>
            {`${currentMinutes}`.padStart(2, '0')}
          </p>
          <p className={styles.timer_text}>минут</p>
        </div>
      </div>
    </header>
  );
};
