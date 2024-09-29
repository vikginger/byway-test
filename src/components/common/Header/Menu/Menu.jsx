import cx from 'classnames';

import Logo from 'icons/logo-light.svg';

import Button from 'components/Button';
import Text from 'components/Text';

import Search from './Search';

import s from './Menu.module.scss';

const Menu = ({ className }) => {
  return (
    <div className={cx(s.root, className)}>
      <Button
        className={s.logo}
        href="/"
      >
        <Logo className={s.logoIcon} />
      </Button>
      <Button
        className={s.link}
        href="/"
      >
        <Text
          size="subtext"
          color="darkBlue"
        >
          Categories
        </Text>
      </Button>
      <Search className={s.search} />
      <Button
        className={s.link}
        href="/"
      >
        <Text
          size="subtext"
          color="darkBlue"
        >
          Teach on Byway
        </Text>
      </Button>
    </div>
  );
};

export default Menu;
