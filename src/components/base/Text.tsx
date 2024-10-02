import React from "react";

interface TextProps {
  size?: "sm" | "base" | "lg";
  variant?: "gray" | "white" | "dark";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  size = "base",
  variant = "gray",
  as: Tag = "p",
  className = "",
  children,
}) => {
  const sizes = {
    sm: "font-medium text-sm leading-normal",
    base: "font-medium text-base leading-normal",
    lg: "font-semibold text-lg md:text-2xl leading-relaxed",
  };

  const variants = {
    gray: "text-gray-400",
    white: "text-gray-200",
    dark: "text-gray-900",
  };

  const computedClassName = `
    ${sizes[size]}
    ${variants[variant]}
    ${className}
  `;

  return <Tag className={computedClassName.trim()}>{children}</Tag>;
};

export default Text;
