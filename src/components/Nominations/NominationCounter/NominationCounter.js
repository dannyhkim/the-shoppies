import React from 'react'

const NominationCounter = (props) => {
  return (
    <p>Nominations <span>{props.length}/5</span></p>
  )

}

export default NominationCounter;
