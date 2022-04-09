import React from 'react';
import PropTypes from 'prop-types';

function Flashcard({ card }: {card:any}) {
  console.log(card);
  console.log('hi');
  return (
    <div>
      {card.front}
      {card.back}
    </div>
  );
}

export default Flashcard;

Flashcard.propTypes = {
  flashcard: PropTypes.shape,
  front: PropTypes.string,
  back: PropTypes.string,
};
