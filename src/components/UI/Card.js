import React from "react";

import classes from "./Card.module.css";

// passing styles from Card.module.css via returning {classes.card} and {props.children}
// using className={`${classes.card} ${props.className} to accept multiple classes in Card component.
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
