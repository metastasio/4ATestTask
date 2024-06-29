type DiscountAdditional = {
  [key: string]: { discount: number };
};

export const discountProgramsAdditional: DiscountAdditional = {
  '1 неделя': { discount: 40 },
  '1 месяц': { discount: 50 },
  '3 месяца': { discount: 60 },
};

type PopularAdditional = {
  [key: string]: { text: string; textLong?: string; discount: number };
};

export const popularProgramsAdditional: PopularAdditional = {
  '1 неделя': {
    text: 'Чтобы просто начать 👍🏻',
    discount: 30,
  },
  '1 месяц': {
    text: 'Привести тело в порядок 💪🏻',
    discount: 40,
  },
  '3 месяца': {
    text: 'Изменить образ жизни 🔥',
    discount: 50,
  },
  навсегда: {
    text: 'Всегда быть в форме ⭐️',
    textLong: 'Всегда быть в форме и поддерживать своё здоровье ⭐️',
    discount: 70,
  },
};
