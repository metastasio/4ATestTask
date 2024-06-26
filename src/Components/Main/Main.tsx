import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { CardItem } from '../Cards/Card/CardItem';
import { useTimerContext } from '../../context/useTimerContext';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { popularProgramsAdditional } from '../../config';
import { TrainingProgram } from './types';

import styles from './main.module.css';

export const Main = () => {
  const { status } = useTimerContext();
  const [isOpen, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState('');
  const [data, setData] = useState<TrainingProgram[] | null>(null);
  const [fetchError, setFetchError] = useState(false);

  const popularPrograms = data?.filter((program) => program.isPopular);
  const discountPrograms = data?.filter((program) => program.isDiscount);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://t-pay.iqfit.app/subscribe/list-test',
      );
      setData(response.data);
      setFetchError(false);
    } catch (e) {
      setFetchError(true);
    }
  };

  const handleClick = (id: string) => {
    setSelected((prev) => (id === prev ? '' : id));
  };

  useEffect(() => {
    if (status === 'expiring') {
      setChecked(true);
    }
    if (status === 'ended') {
      setOpen(true);
    }
  }, [status]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Выберите подходящий тарифный план</h1>

        <div className={styles.inner_wrapper}>
          <picture className={styles.banner}>
            <source srcSet='img.png' media='(max-width: 800px)' />
            <img src='img big.png' alt='Фото, рекламирующее курс' />
          </picture>
          {!fetchError ? (
            <section className={styles.description}>
              <ul className={styles.card_list}>
                {popularPrograms?.map(({ id, name, price }, i) => (
                  <li className={styles.card_item} key={id}>
                    <CardItem
                      handler={() => handleClick(id)}
                      selected={selected === id}
                      wide={i === popularPrograms?.length - 1}
                      className={styles.item}
                      isHidden={status === 'ended'}
                      status={status}
                      date={name}
                      text={popularProgramsAdditional[name].text}
                      textLong={popularProgramsAdditional[name].textLong}
                      priceDiscount={price}
                      price={Math.round(
                        (price /
                          (100 - popularProgramsAdditional[name].discount)) *
                          100,
                      )}
                      discount={popularProgramsAdditional[name].discount}
                    />
                  </li>
                ))}
              </ul>

              <p className={styles.text_hint}>
                Следуя плану на 3 месяца, люди получают в 2 раза лучший
                результат, чем за 1 месяц
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
              <Button style='buy'>купить</Button>

              <p className={styles.policy_warning}>
                Нажимая «Купить», Пользователь соглашается на автоматическое
                списание денежных средств по истечению купленного периода.
                Дальнейшие списания по тарифам участвующим в акции
                осуществляются по полной стоимости согласно оферте.
              </p>
            </section>
          ) : (
            <p className={styles.error}>Что-то пошло не так...</p>
          )}
        </div>
      </main>
      {isOpen && <Modal setOpen={setOpen} discountData={discountPrograms} />}
    </>
  );
};
