import React from "react";

interface MenuItemProps {
  status?: "active" | "inactive";
  className?: string;
  children: React.ReactNode;
  selected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  children,
  selected = false,
}) => {
  const selectionStyle = "bg-primary hover:bg-primary ";

  const computedClassName = `
    rounded-md btn-ghost btn-sm no-animation text-left rounded-sm
    ${selected ? selectionStyle : ""}
    ${className}
  `;
  return <button className={computedClassName.trim()}>{children}</button>;
};

export default MenuItem;
