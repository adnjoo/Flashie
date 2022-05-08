import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Flashcard({ card }: {card:any}) {
  const [isActive, setIsActive] = useState(false);

  const flipCard = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="flip-card">
      {/* eslint-disable-next-line  */}
      <div className={!isActive ? 'flip-card-inner' : 'flip-card-inner flip'} onClick={flipCard}>
        <div className="flip-card-front">
          {card.front}
        </div>
        <div className="flip-card-back">
          {card.back}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;

Flashcard.propTypes = {
  flashcard: PropTypes.shape,
  front: PropTypes.string,
  back: PropTypes.string,
};
