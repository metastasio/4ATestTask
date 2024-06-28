type DiscountAdditional = {
  [key: string]: { discount: number };
};

export const discountProgramsAdditional: DiscountAdditional = {
  '84b9e8a2-5322-4597-b5b5-de7e7b4522b5': { discount: 40 },
  'a50a6b2d-1ebd-4ec1-b9eb-a7677ba5fcdb': { discount: 50 },
  'b85b7336-e1b0-4cf5-a1fd-12739b480069': { discount: 60 },
};

type PopularAdditional = {
  [key: string]: { text: string; discount: number };
};

export const popularProgramsAdditional: PopularAdditional = {
  '1 неделя': {
    text: 'Чтобы просто начать 👍🏻',
    discount: 30,
  },
  '1 месяц': {
    text: 'Привести тело впорядок 💪🏻',
    discount: 40,
  },
  '3 месяца': {
    text: 'Изменить образ жизни 🔥',
    discount: 50,
  },
  навсегда: {
    text: 'Всегда быть в форме ⭐️',
    discount: 70,
  },
};
