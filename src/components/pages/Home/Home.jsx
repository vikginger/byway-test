import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Profile from './Profile';
import Messages from './Messages';

import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.wrap}>
        <Profile className={s.profile} />
        <Messages className={s.msgs} />
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(Home);
