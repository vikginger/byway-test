import { cloneElement } from 'react';
import cx from 'classnames';

import Heart from 'icons/heart.svg';
import Cart from 'icons/cart.svg';
import Bell from 'icons/bell.svg';

import Button from 'components/Button';

import s from './Controls.module.scss';

const BUTTONS = [
  {
    icon: <Heart />,
    title: 'heart',
  },
  {
    icon: <Cart />,
    title: 'cart',
  },
  {
    icon: <Bell />,
    title: 'bell',
  },
];

const Controls = ({ className }) => {
  return (
    <div className={cx(s.root, className)}>
      {BUTTONS.map(item => (
        <Button
          key={item.title}
          className={s.btn}
        >
          {cloneElement(item.icon, { className: s.icon })}
        </Button>
      ))}
      <Button className={s.account}>J</Button>
    </div>
  );
};

export default Controls;
