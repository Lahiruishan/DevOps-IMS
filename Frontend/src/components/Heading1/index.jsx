import React from "react";

const sizes = {
  "2xl": "text-[29px] font-bold md:text-[27px] sm:text-[25px]",
  xl: "text-[27px] font-bold md:text-[25px] sm:text-[23px]",
  s: "text-[22px] font-bold",
  md: "text-[23px] font-bold md:text-[21px]",
  xs: "text-[21px] font-bold",
  lg: "text-2xl font-bold md:text-[22px]",
};

const Heading1 = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading1 };
