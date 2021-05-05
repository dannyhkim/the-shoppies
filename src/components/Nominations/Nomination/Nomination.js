import React from 'react'
import imagePlaceholder from './movie-placeholder.jpg';

const Nomination = (props) => {
  const image = props.img === "N/A" ? imagePlaceholder: props.img;

  return (
    <div>

      <img
        src={image}
        alt={`${props.title} movie poster`}
      />
      <div>
        <h3 title={props.title}>{props.title}</h3>
        <h4>{props.year}</h4>
      </div>

      <button onClick={props.removeHandler}>Remove</button>
    </div>
  )
}

export default Nomination;
