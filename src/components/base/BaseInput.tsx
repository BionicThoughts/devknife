import React, { useId, InputHTMLAttributes } from "react";
import BaseLabel from "./BaseLabel";

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  valid?: boolean;
  className?: string;
  errorText?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  type = "text",
  error = false,
  required = false,
  disabled = false,
  valid = false,
  className = "",
  errorText = "",
  ...rest
}) => {
  const id = useId();

  const styles = {
    base: "input input-sm rounded-sm m-1 bg-neutral-900/60",
    state: {
      normal: "",
      error: "input-error",
      valid: "input-success",
      disabled: "",
    },
  };

  const computedClassName = `
    ${styles.base}
    ${
      error
        ? styles.state.error
        : valid
        ? styles.state.valid
        : styles.state.normal
    }
    ${className}
  `;

  return (
    <div className={`relative ${className}`}>
      {label && (
        <BaseLabel id={id}>
          {label} {required && "*"}
        </BaseLabel>
      )}
      <input
        id={id}
        type={type}
        className={computedClassName}
        disabled={disabled}
        required={required}
        {...rest}
      />
      {error && <p className="mt-2 text-sm text-red-600">{errorText}</p>}
    </div>
  );
};

export default BaseInput;
