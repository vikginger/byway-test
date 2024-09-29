import cx from 'classnames';

import getTime from 'utils/getTime';

import ArrowLeft from 'icons/arrow-left.svg';
import Dots from 'icons/dots.svg';

import Text from 'components/Text';
import Image from 'components/Image';
import Button from 'components/Button';

import s from './Chat.module.scss';

const Chat = ({ data, closeChat }) => {
  const { img, name, messages } = data;

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.headerWrap}>
          <Button
            className={s.back}
            onClick={closeChat}
          >
            <ArrowLeft />
          </Button>
          <Image
            className={s.img}
            src={img}
            width={40}
            height={40}
            quality={100}
            alt="image"
          />
          <Text
            className={s.name}
            size="h5"
          >
            {name}
          </Text>
        </div>
        <Button className={s.back}>
          <Dots />
        </Button>
      </div>
      <div className={s.wrap}>
        <div className={s.date}>
          <Text size="label">Today</Text>
        </div>
        <div className={s.inner}>
          {messages.map(msg => (
            <div
              key={msg.id}
              className={cx(s.msg, { [s.incoming]: msg.sender !== 'Me' })}
            >
              <div
                className={cx(s.msgHead, { [s.incoming]: msg.sender !== 'Me' })}
              >
                {msg.sender !== 'Me' && (
                  <Image
                    className={s.msgImg}
                    src={img}
                    width={40}
                    height={40}
                    quality={100}
                    alt="image"
                  />
                )}
                <Text
                  className={s.time}
                  size="label"
                >
                  {getTime(msg.timestamp)}
                </Text>
              </div>
              <div
                className={cx(s.txtBox, { [s.incoming]: msg.sender !== 'Me' })}
              >
                <Text
                  size="p"
                  className={cx(s.txt, {
                    [s.incoming]: msg.sender !== 'Me',
                  })}
                >
                  {msg.text}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.bottom}>
        <input
          type="text"
          className={s.input}
          placeholder="Type Your Message"
        />
        <Button className={s.btn}>
          <Text
            size="btn-txt"
            className={s.btnTxt}
          >
            Send
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default Chat;
