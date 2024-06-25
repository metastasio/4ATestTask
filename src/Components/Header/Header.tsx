import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useTimerContext } from '../../useTimerContext';

import styles from './header.module.css';

export const Header = () => {
  //   Получение данных от сервиса
  // Ссылка на получение: https://t-pay.iqfit.app/subscribe/list-test
  // Пример одной записи:
  const { status, setStatus } = useTimerContext();
  console.log(status);
  const [time, setTime] = useState(70000);
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
          setStatus('expiring');
        }
      };
      getTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentHours, currentMinutes, time, setStatus]);

  return (
    <header className={styles.header}>
      <p className={styles.text}>Скидка действует:</p>
      <div className={styles.timer_wrapper}>
        <div className={styles.timer_unit_wrapper}>
          <p
            className={cn(styles.timer_time, {
              [styles.expiring]: status === 'expiring',
            })}
          >
            {`${currentHours}`.padStart(2, '0')}
          </p>
          <p className={styles.timer_text}>часов</p>
        </div>
        <p
          className={cn(styles.timer_separator, {
            [styles.expiring]: status === 'expiring',
          })}
        >
          :
        </p>
        <div className={styles.timer_unit_wrapper}>
          <p
            className={cn(styles.timer_time, {
              [styles.expiring]: status === 'expiring',
            })}
          >
            {`${currentMinutes}`.padStart(2, '0')}
          </p>
          <p className={styles.timer_text}>минут</p>
        </div>
      </div>
    </header>
  );
};
