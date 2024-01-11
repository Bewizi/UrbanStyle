import PropsTypes from "prop-types";

export const Container = ({ ...props }) => {
  return <div className={`${props.className}`}>{props.children}</div>;
};

Container.propTypes = {
  children: PropsTypes.node,
  className: PropsTypes.string,
};
