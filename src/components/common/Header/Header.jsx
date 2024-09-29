import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import Menu from './Menu';
import Controls from './Controls';

import s from './Header.module.scss';

const Header = ({ className }) => {
  return (
    <header className={cx(s.root, className)}>
      <Menu />
      <Controls />
    </header>
  );
};

Header.propTypes = {
  className: string,
};

export default React.memo(Header);
