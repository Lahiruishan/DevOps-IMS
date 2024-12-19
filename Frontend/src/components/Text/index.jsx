import React from "react";

const sizes = {
  "5xl": "text-[23px] font-normal md:text-[21px]",
  "6xl": "text-[26px] font-normal md:text-2xl sm:text-[22px]",
  "7xl": "text-[27px] font-normal md:text-[25px] sm:text-[23px]",
  "8xl": "text-[33px] font-normal md:text-[31px] sm:text-[29px]",
  "2xl": "text-xl font-normal",
  "3xl": "text-[21px] font-normal",
  "4xl": "text-[22px] font-normal",
  xs: "text-base font-normal",
  lg: "text-[49px] font-normal md:text-[32px] sm:text-3xl",
  s: "text-[17px] font-normal",
  xl: "text-[19px] font-normal",
  vl:"text-[55px] font-normal",
  "9xl": "text-[34px] font-normal md:text-[32px] sm:text-3xl",
  "10xl" : "text-[35px] font-normal md:text-[33px] sm:text-[31px]",
  md: "text-[17px] font-normal ",
};

const Text = ({ children, className = "", as, size = "3xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
