import React, { useState, useCallback } from 'react';
import cx from 'classnames';

import getLatestReceivedMessage from 'utils/getLatestReceivedMessage';

import ITEMS from 'stubs/messages';

import Nav from './Nav';
import Item from './Item';
import Chat from './Chat';

import s from './Messages.module.scss';

const Messages = ({ className }) => {
  const [chat, setChat] = useState({
    isOpen: false,
    data: {},
  });

  const openChat = useCallback(data => {
    setChat({ isOpen: true, data });
  }, []);

  const closeChat = useCallback(() => {
    setChat({ isOpen: false, data: {} });
  }, []);

  return (
    <div className={cx(s.root, className)}>
      <Nav
        className={s.nav}
        isOpenChat={chat.isOpen}
      />
      {!chat.isOpen ? (
        ITEMS.map(item => (
          <Item
            key={item.id}
            data={item}
            img={item.img}
            date={item.date}
            name={item.name}
            message={getLatestReceivedMessage(item.messages).text}
            openChat={openChat}
          />
        ))
      ) : (
        <Chat
          data={chat.data}
          closeChat={closeChat}
        />
      )}
    </div>
  );
};

export default Messages;
