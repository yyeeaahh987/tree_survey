import React from 'react';
import '../App.css';
import { Button } from './Button'
import './MainPage.css';
import treeBg from '../components/videos/treebg.mp4';

function MainPage() {
  return (
    <div className='hero-container'>
      <video src={treeBg} autoPlay loop muted />
      <h1>Tree Survey</h1>
      <p>Share with us</p>
      <div className="hero-btns">
        <Button className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          Sign in
        </Button>
        <Button className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          Explore <i className='far fa-play-cirle' />
        </Button>
      </div>
    </div>
  );
}

export default MainPage
