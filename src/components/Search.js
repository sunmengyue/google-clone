import React, { useState } from 'react';
import './Search.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function Search({ hideButtons = false }) {
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

      {!hideButtons ? (
        <div className='search__buttons'>
          <Button onClick={search} variant='outlined' type='submit'>
            Google Search
          </Button>
          <Button variant='outlined'>I am feeling lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonsHidden'
            onClick={search}
            variant='outlined'
            type='submit'
          >
            Google Search
          </Button>
          <Button className='search__buttonsHidden' variant='outlined'>
            I am feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
