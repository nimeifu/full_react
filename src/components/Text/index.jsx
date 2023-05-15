import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h2: "md:text-3xl sm:text-[28px] text-[32px]",
  h3: "text-xl",
  h4: "font-medium text-base",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
