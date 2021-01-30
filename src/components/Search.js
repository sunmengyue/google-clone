import React, { useState } from 'react';
import './Search.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log('you hit search');

    history.push('/search');
  };
  return (
    <form className='search'>
      <div className='search__input'>
        <SearchRoundedIcon className='search__inputIcon' />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MicRoundedIcon />
      </div>
      <div className='search__buttons'>
        <Button onClick={search} variant='outlined' type='submit'>
          Google Search
        </Button>
        <Button variant='outlined'>I am feeling lucky</Button>
      </div>
    </form>
  );
}

export default Search;
