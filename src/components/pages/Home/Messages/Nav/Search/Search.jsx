import React, { useState, useCallback } from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import { useRouter } from 'next/router';

import SearchIcon from 'icons/search.svg';

import Button from 'components/Button';

import s from './Search.module.scss';

const Search = ({ className }) => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleChangeInput = useCallback(
    e => {
      setSearchValue(e.target.value);
    },
    [setSearchValue]
  );

  const handleSearch = useCallback(() => {
    router.push(`/search?query=${searchValue}`);
  }, [router, searchValue]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <div className={cx(s.root, className)}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        className={s.input}
        placeholder="Search courses"
      />
      <Button
        className={s.btn}
        onClick={handleSearch}
      >
        <SearchIcon className={s.btnIcon} />
      </Button>
    </div>
  );
};

Search.propTypes = {
  className: string,
};

export default React.memo(Search);
