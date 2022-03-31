import React from 'react';
import Flashcard from '../components/FlashCard';
import Navigation from '../components/Navigation';

const arr = [{
  front: '1+1',
  back: '2',
}];
function HomePage() {
  return (
    <div>
      <Navigation />
      HomePage
      hi
      {arr.map((ele) => <Flashcard flashcard={ele} />)}
    </div>
  );
}

export default HomePage;
