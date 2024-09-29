import { forwardRef, memo } from 'react';
import { oneOf, any, string, bool } from 'prop-types';

import cx from 'classnames';

import modsClasses from 'utils/modsClasses';
import s from './Text.module.scss';

const Text = forwardRef(
  (
    {
      as: As,
      className,
      children,
      size,
      transform,
      textStyle,
      isHtml,
      align,
      color,
      ...otherProps
    },
    ref
  ) => {
    const mods = modsClasses(s, {
      size,
      transform,
      textStyle,
      align,
      color,
    });

    if (isHtml) {
      return (
        <As
          className={cx(s.root, className, mods)}
          ref={ref}
          {...otherProps}
          dangerouslySetInnerHTML={{ __html: children }}
        />
      );
    }

    return (
      <As
        className={cx(s.root, className, mods)}
        ref={ref}
        {...otherProps}
      >
        {children}
      </As>
    );
  }
);

Text.propTypes = {
  children: any,
  className: string,
  size: oneOf(['subtext', 'h4', 'h5', 'p', 'btn-txt', 'sm-txt', 'label']),
  as: any,
  transform: oneOf(['uppercase', 'none', 'capitalize', 'lowercase']),
  align: oneOf(['left', 'right', 'justify', 'center']),
  color: oneOf(['black', 'white', 'darkBlue']),
  isHtml: bool,
};

Text.defaultProps = {
  as: 'div',
  size: 's',
  transform: 'none',
  align: 'left',
  color: 'black',
};

export default memo(Text);
