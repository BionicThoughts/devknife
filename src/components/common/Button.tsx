import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "base" | "lg" | "custom";
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  size = "base",
  variant = "primary",
  className = "",
  children,
  ...props // Destructure the rest of the props
}) => {
  const sizes = {
    sm: "py-[.3rem] text-sm",
    base: "btn-md",
    lg: "btn-lg",
    custom: "",
  };

  const variants = {
    primary: "bg-primary text-primary-content hover:bg-primary/80",
    secondary: "bg-secondary text-primary-content hover:bg-secondary/80",
    danger: "btn-error text-primary-content hover:bg-error/80",
  };

  const computedClassName = `
    px-2 rounded-sm
     ${sizes[size]} ${variants[variant]} ${className} 
    `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button className={computedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
