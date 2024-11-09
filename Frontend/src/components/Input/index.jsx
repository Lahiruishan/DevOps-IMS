import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px",
    round: "rounded-[5px]",
};
// const variants = {
//     fill:{
//         blue_gray_100:"bg-blue_gray-100",
//         indigo_100:"bg-indigo-100 shadow-bs text-black-900",
//         gray_50: "bg-gray-50",
//     },
// };
// const sizes = {
//     sm: "h-[41px] pr-[35px] text-3xl",
//     md: "h-[53px] pl-[27px] pr-[35px] text-[19px]",
//     xs: "h-[37px] pl-[27px] pr-[35px]",
// };
const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "" ,
            type = "text",
            children,
            label = "",
            prefix,
            suffix,onChange,
            shape,
            variant = "fill",
            size = "xs",
            color = "gray_0",
            ...restProps 

        },
        ref,
    )=>{
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);

        };
        return(
            <>
            <label className={`${className} flex items-center justify-center cursor-text ${(shape && shapes[shape]) || "" }4{sizes[size] || ""}`}>
                {!!label && label}
                {!!prefix && prefix}
                <input ref = {ref} type = {type} name={name} onChange = {handleChange} placeholder = {placeholder} {...restProps}/>
                {!!suffix && suffix}
            </label>
                </>
        );
    },


);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix:PropTypes.node,
    suffix:PropTypes.node,
    shape:PropTypes.oneOf(["square","round"]),
    size:PropTypes.oneOf(["sm","md","xs"]),
    variant:PropTypes.oneOf(["fill"]),
    color:PropTypes.oneOf(["blue_gray","indigo_100","gray_50"]),

};
export {Input};