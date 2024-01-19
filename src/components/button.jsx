import { useState } from "react";
import { Fa, Io5 } from "../assets";
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

export const LikeButton = () => {
  const [like, setIsLiked] = useState(false);
  const liked = () => {
    setIsLiked(!like);
  };
  return (
    <button onClick={liked}>
      <Io5.IoHeartSharp
        className="absolute top-2 right-5 text-4xl bg-white p-2 rounded-full"
        color={like ? "#ca1d21" : undefined}
      />
    </button>
  );
};
