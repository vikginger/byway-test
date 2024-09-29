import React, { useState } from 'react';
import cx from 'classnames';

import Share from 'icons/share.svg';

import Image from 'components/Image';
import Button from 'components/Button';
import Text from 'components/Text';

import s from './Profile.module.scss';

const BUTTONS = [
  {
    title: 'Profile',
  },
  {
    title: 'My Courses',
  },
  {
    title: 'Teachers',
  },
  {
    title: 'Message',
  },
  {
    title: 'My Reviews',
  },
];

const Profile = ({ className }) => {
  // eslint-disable-next-line no-unused-vars
  const [activeTab, setActiveTab] = useState('Message');

  return (
    <div className={cx(s.root, className)}>
      <div className={s.wrap}>
        <Image
          className={s.img}
          src="/images/john.png"
          width={160}
          height={160}
          quality={100}
          alt="image"
        />
        <Text
          className={s.name}
          size="h4"
        >
          John Doe
        </Text>
        <Button className={s.share}>
          <Text size="btn-txt">Share Profile</Text>
          <Share className={s.shareIcon} />
        </Button>
      </div>

      {BUTTONS.map(item => (
        <Button
          key={item.title}
          className={cx(s.btn, { [s.active]: activeTab === item.title })}
        >
          <Text
            size="sm-txt"
            color={activeTab === item.title ? 'white' : 'darkBlue'}
          >
            {item.title}
          </Text>
        </Button>
      ))}
    </div>
  );
};

export default Profile;
