import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useTimerContext } from '../../useTimerContext';

import styles from './header.module.css';

export const Header = () => {
  //   Получение данных от сервиса
  // Ссылка на получение: https://t-pay.iqfit.app/subscribe/list-test
  // Пример одной записи:
  const { status, setStatus } = useTimerContext();
  const [time, setTime] = useState(10000);
  const currentMinutes = Math.floor((time / 1000 / 60) % 60);
  const currentSeconds = Math.floor((time / 1000) % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      const getTime = () => {
        if (time > 0) {
          setTime((prev) => (prev -= 1000));
        }
        if (time <= 30000) {
          setStatus('expiring');
        }
        if (time === 0) {
          setStatus('ended');
        }
      };
      getTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentMinutes, time, setStatus]);

  return (
    <header className={styles.header}>
      <p className={styles.text}>Скидка действует:</p>
      <div className={styles.timer_wrapper}>
        <div className={styles.timer_unit_wrapper}>
          <p
            className={cn(styles.timer_time, {
              [styles.timer_expiring]: status === 'expiring',
              [styles.timer_ended]: status === 'ended',
            })}
          >
            {`${currentMinutes}`.padStart(2, '0')}
          </p>
          <p className={styles.timer_text}>минут</p>
        </div>
        <p
          className={cn(styles.timer_separator, {
            [styles.timer_expiring]: status === 'expiring',
            [styles.timer_ended]: status === 'ended',
          })}
        >
          :
        </p>
        <div className={styles.timer_unit_wrapper}>
          <p
            className={cn(styles.timer_time, {
              [styles.timer_expiring]: status === 'expiring',
              [styles.timer_ended]: status === 'ended',
            })}
          >
            {`${currentSeconds}`.padStart(2, '0')}
          </p>
          <p className={styles.timer_text}>секунд</p>
        </div>
      </div>
    </header>
  );
};
