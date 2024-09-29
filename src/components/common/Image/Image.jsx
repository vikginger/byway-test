import { string } from 'prop-types';
import NextImage from 'next/image';
import cx from 'classnames';
import s from './Image.module.scss';

const Image = ({ className, imageClassName, src, ...props }) => {
  return (
    <div className={cx(s.root, className)}>
      <NextImage
        className={cx(s.image, imageClassName)}
        src={src}
        {...props}
      />
    </div>
  );
};

Image.propTypes = {
  className: string,
  imageClassName: string,
  src: string,
};

export default Image;
