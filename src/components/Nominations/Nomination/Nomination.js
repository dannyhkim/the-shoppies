import React from 'react'
import classes from './Nomination.module.css';
import imagePlaceholder from './movie-placeholder.jpg';

const Nomination = (props) => {
  const image = props.img === "N/A" ? imagePlaceholder: props.img;

  return (
    <div className={classes.nomination_container}>

      <img
        className={classes.nomination_image}
        src={image}
        alt={`${props.title} movie poster`}
      />
      <div>
        <h3 title={props.title}>{props.title}</h3>
        <h4>{props.year}</h4>
      </div>

      <button onClick={props.remove}>Remove</button>
    </div>
  )
}

export default Nomination;
