import React from "react";
import { Link } from "react-router-dom";
interface MenuItemProps {
  status?: "active" | "inactive";
  className?: string;
  children: React.ReactNode;
  selected?: boolean;
  to_link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  children,
  selected = false,
  to_link,
}) => {
  const selectionStyle = "bg-primary text-primary-content hover:bg-primary ";

  const computedClassName = `
    rounded-md btn-ghost btn-sm no-animation text-left rounded-sm flex items-center
    ${selected ? selectionStyle : ""}
    ${className}
  `;
  return <Link to={to_link} className={computedClassName.trim()}>{children}</Link>;
};

export default MenuItem;
