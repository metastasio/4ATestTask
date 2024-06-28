import cn from 'classnames';

import styles from './salebadge.module.css';

type SaleBadgeProps = {
  style: string;
  discount: number;
  isHidden?: boolean;
};

export const SaleBadge = (props: SaleBadgeProps) => {
    const { style, discount, isHidden } = props;

  return (
    <div
      className={cn(styles.sale, styles[style], {
            [styles.hidden]: isHidden,
          })}
    >
      -{discount}%
    </div>
  );
};
