// src/utils/classNames.ts

type ClassValue = string | number | boolean | undefined | null | ClassValue[];

function classNames(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  function addClass(value: ClassValue) {
    if (typeof value === "string" || typeof value === "number") {
      classes.push(value.toString());
    } else if (Array.isArray(value)) {
      value.forEach(addClass);
    } else if (typeof value === "object" && value !== null) {
      Object.keys(value).forEach((key) => {
        if (value[key]) {
          classes.push(key);
        }
      });
    }
  }

  inputs.forEach(addClass);

  return classes.join(" ");
}

export default classNames;
