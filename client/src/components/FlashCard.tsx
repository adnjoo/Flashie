import React from 'react';
import PropTypes from 'prop-types';

function Flashcard({ flashcard }: {flashcard:any}) {
  return (
    <div>
      {flashcard.front}
      {flashcard.back}
    </div>
  );
}

export default Flashcard;

Flashcard.propTypes = {
  flashcard: PropTypes.shape,
  front: PropTypes.string,
  back: PropTypes.string,
};
