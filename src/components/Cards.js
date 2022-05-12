import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore the different trees in the World</h1>
      <div className='cards__container'>
          <div className='cards__wrapper'>
              <ul className='cards__items'>
                  <CardItem 
                  src='images/img-1.jpeg'
                  text='樹木全書 Encyclopedia'
                  label='樹木全書 Encyclopedia'
                  path='/encyclopedia'
                  />
                  <CardItem 
                  src='images/img-2.jpeg'
                  text='樹木調查 Tree Survey'
                  label='樹木調查 Tree Survey'
                  path='/survey'
                  />
                  <CardItem 
                  src='images/img-3.jpeg'
                  text='樹木分享 Treestagram'
                  label='樹木分享 Treestagram'
                  path='/treestagram'
                  />
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Cards
