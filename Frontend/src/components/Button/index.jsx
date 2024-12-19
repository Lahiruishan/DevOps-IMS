import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    indigo_100: "bg-indigo-100 shadow-bs text-black-900",
  },
};
const sizes = {
  xs: "h-[51px] px-[35px] text-[21px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "indigo_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-black-900 text-[21px] font-bold bg-indigo-100 shadow-bs ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_100"]),
};

export { Button };
