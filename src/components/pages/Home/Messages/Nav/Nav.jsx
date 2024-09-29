import cx from 'classnames';

import DDArrow from 'icons/dd-arrow.svg';
import Filter from 'icons/filter.svg';

import Button from 'components/Button';
import Text from 'components/Text';

import Search from './Search';

import s from './Nav.module.scss';

const Nav = ({ className, isOpenChat }) => {
  return (
    <div className={cx(s.root, className)}>
      <Text
        className={s.title}
        size="h4"
      >
        Messages
      </Text>
      {!isOpenChat && (
        <div className={s.wrap}>
          <Search />
          <div className={s.innerWrap}>
            <Text
              className={s.txt}
              size="p"
            >
              Sort by
            </Text>
            <Button className={cx(s.btn, s.btnLeft)}>
              <Text
                size="btn-txt"
                className={s.btnTxt}
              >
                Relevance
              </Text>
              <DDArrow className={s.btnIcon} />
            </Button>
            <Button className={s.btn}>
              <Filter className={s.btnIcon} />
              <Text
                size="btn-txt"
                className={s.btnTxtRight}
              >
                Filter
              </Text>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
