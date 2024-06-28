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

// type TrainingProgram = {
//   id: string;
//   name: string;
//   price: number;
//   isPopular: boolean;
//   isDiscount: boolean;
// };

export const Main = () => {
  const { status } = useTimerContext();
  const [isOpen, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState<null | TrainingProgram[]>(null);

  const popularPrograms = data?.filter((program) => program.isPopular);
  const discountPrograms = data?.filter((program) => program.isDiscount);
  console.log(popularPrograms, 'POPULAR');

  const getData = async () => {
    const response = await axios.get(
      'https://t-pay.iqfit.app/subscribe/list-test',
    );
    setData(response.data);
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
        <picture className={styles.banner}>
          <source srcSet='img.png' media='(max-width: 600px)' />
          <img src='img big.png' alt='Фото, рекламирующее курс' />
        </picture>

        <ul className={styles.card_list}>
          {popularPrograms?.map((program) => (
            <li className={styles.card_item} key={program.id}>
              <CardItem
                isHidden={status === 'ended'}
                status={status}
                date={program.name}
                text={popularProgramsAdditional[program.name].text}
                priceDiscount={program.price}
                price={Math.round(
                  (program.price /
                    (100 - popularProgramsAdditional[program.name].discount)) *
                    100,
                )}
                discount={popularProgramsAdditional[program.name].discount}
              />
            </li>
          ))}
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
        <Button content='купить' style='buy' />

        <p className={styles.policy_warning}>
          Нажимая «Купить», Пользователь соглашается на автоматическое списание
          денежных средств по истечению купленного периода. Дальнейшие списания
          по тарифам участвующим в акции осуществляются по полной стоимости
          согласно оферте.
        </p>
      </main>
      {isOpen && <Modal setOpen={setOpen} discountData={discountPrograms} />}
    </>
  );
};
