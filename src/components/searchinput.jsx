import PropTypes from "prop-types";

export const Form = ({ ...props }) => {
  return <form action="">{props.children}</form>;
};

export const SearchInput = ({ ...props }) => {
  return (
    <input
      className={`${props.className} border-2  py-2 text-center rounded-full bg-secondary outline-none`}
      type={props.type}
      placeholder={props.placeholder}
      // value={props.value}
    />
  );
};

Form.propTypes = {
  children: PropTypes.node,
};

SearchInput.propTypes = {
  icon: PropTypes.node,

  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
