import React from "react";

const sizes = {
  "2xl": "text-[29px] font-bold md:text-[27px] sm:text-[25px]",
  xl: "text-[27px] font-bold md:text-[25px] sm:text-[23px]",
  lg: "text-2xl font-bold md:text-[22px] sm:text-[20px]",
  md: "text-[23px] font-bold md:text-[21px] sm:text-[19px]",
  s: "text-[22px] font-bold md:text-[20px] sm:text-[18px]",
  xs: "text-[21px] font-bold md:text-[19px] sm:text-[17px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900 font-inter ${sizes[size]} ${className}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
