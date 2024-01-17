import { useState } from "react";
import { Fa } from "../assets";
import PropTypes from "prop-types";

export const Button = ({ ...props }) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export const IconButton = () => {
  const [clicked, isclicked] = useState(false);
  const handleClick = () => {
    isclicked(!clicked);
  };
  return (
    <button onClick={handleClick}>
      <Fa.FaStar color={clicked ? "#FFB906" : undefined} />
    </button>
  );
};
