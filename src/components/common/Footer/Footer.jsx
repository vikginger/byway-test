import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import Logo from 'icons/logo-dark.svg';

import Button from 'components/Button';
import Text from 'components/Text';
import Image from 'components/Image';

import COLUMNS from 'stubs/footer';

import s from './Footer.module.scss';

const Footer = ({ className }) => {
  return (
    <footer className={cx(s.root, className)}>
      <div>
        <Button
          className={s.logo}
          href="/"
        >
          <Logo className={s.logoIcon} />
        </Button>
        <Text
          size="sm-txt"
          className={s.about}
        >
          Empowering learners through accessible and engaging online education.
          Byway is a leading online learning platform dedicated to providing
          high-quality, flexible, and affordable educational experiences.
        </Text>
      </div>
      {COLUMNS.map(item => (
        <div key={item.title}>
          <Text
            size="h5"
            className={s.title}
          >
            {item.title}
          </Text>
          {item.links.map(link =>
            link.href ? (
              <Button
                key={link.name}
                href={link.href}
                className={s.link}
              >
                <Text
                  key={link.name}
                  size="btn-txt"
                  className={s.linkTxt}
                >
                  {link.name}
                </Text>
              </Button>
            ) : (
              <Text
                key={link.name}
                className={cx(s.link, s.linkTxt)}
                size="btn-txt"
              >
                {link.name}
              </Text>
            )
          )}
          {item.isSocial && (
            <Image
              className={s.socials}
              src="/images/socials.png"
              width={296}
              height={40}
              quality={100}
              alt="image"
            />
          )}
        </div>
      ))}
    </footer>
  );
};

Footer.propTypes = {
  className: string,
};

export default React.memo(Footer);
