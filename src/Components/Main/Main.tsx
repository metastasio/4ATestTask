import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { CardItem } from '../Cards/Card/CardItem';
import { useTimerContext } from '../../useTimerContext';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { popularProgramsAdditional } from '../../config';
import { TrainingProgram } from './types';

import styles from './main.module.css';

export const Main = () => {
  const { status } = useTimerContext();
  const [isOpen, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState<null | TrainingProgram[]>(null);

  const popularPrograms = data?.filter((program) => program.isPopular);
  const discountPrograms = data?.filter((program) => program.isDiscount);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://t-pay.iqfit.app/subscribe/list-testttttt',
      );
      setData(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (status === 'ended') {
      setOpen(true);
      setChecked(true);
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
            <source srcSet='img.png' media='(max-width: 600px)' />
            <img src='img big.png' alt='Фото, рекламирующее курс' />
          </picture>

          <section className={styles.description}>
            <ul className={styles.card_list}>
              {popularPrograms?.map(({ id, name, price }) => (
                <li className={styles.card_item} key={id}>
                  <CardItem
                    className={styles.item}
                    isHidden={status === 'ended'}
                    status={status}
                    date={name}
                    text={popularProgramsAdditional[name].text}
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
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
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
            <Button content='купить' style='buy' />

            <p className={styles.policy_warning}>
              Нажимая «Купить», Пользователь соглашается на автоматическое
              списание денежных средств по истечению купленного периода.
              Дальнейшие списания по тарифам участвующим в акции осуществляются
              по полной стоимости согласно оферте.
            </p>
          </section>
        </div>
      </main>
      {isOpen && <Modal setOpen={setOpen} discountData={discountPrograms} />}
    </>
  );
};
