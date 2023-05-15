import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder10: "rounded-[10px]" };
const variants = { FillLightblueA700: "bg-light_blue_A700 text-white_A700" };
const sizes = { sm: "p-2" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf(["FillLightblueA700"]),
  size: PropTypes.oneOf(["sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
