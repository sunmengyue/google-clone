import React from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsOutlinedIcon />
          <AccountCircleRoundedIcon />
        </div>
      </div>
      <div className='home__body'>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
          alt='google logo'
        />
        <div className='home__inputContainer'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
