import cx from 'classnames';

import Text from 'components/Text';
import Image from 'components/Image';

import s from './Item.module.scss';

const Item = ({ className, data, img, name, date, message, openChat }) => {
  return (
    <div
      className={cx(s.root, className)}
      onClick={() => openChat(data)}
    >
      <div className={s.wrap}>
        <div className={s.innerWrap}>
          <Image
            className={s.img}
            src={img}
            width={40}
            height={40}
            quality={100}
            alt="image"
          />
          <Text size="h5">{name}</Text>
        </div>
        <Text
          className={s.date}
          size="sm-txt"
        >
          {date}
        </Text>
      </div>
      <Text
        className={s.msg}
        size="p"
      >
        {message}
      </Text>
    </div>
  );
};

export default Item;
