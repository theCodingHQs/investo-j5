import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPriceString = (
  value: number = 0,
  isInteger?: boolean,
  typeNum?: boolean,
  per?: string
) => {
  if (!!value) {
    let valueString = value.toString();

    if (valueString.length > 5 && valueString.length <= 7) {
      return (
        valueString.slice(0, -5) +
        (isInteger
          ? "." + valueString.slice(valueString.slice(0, -5).length, -3)
          : "") +
        " Lakh"
      );
    } else if (valueString.length > 7) {
      return (
        valueString.slice(0, -7) +
        (isInteger
          ? "." + valueString.slice(valueString.slice(0, -7).length, -5)
          : "") +
        " Cr"
      );
    } else if (valueString.length > 3) {
      return (
        valueString.slice(0, -3) +
        (!typeNum && isInteger
          ? "." + valueString.slice(valueString.slice(0, -3).length, -1)
          : "") +
        (!typeNum ? "K" : "," + valueString.slice(-3)) +
        (per ? `/${per}` : "")
      );
    }
  }

  return value;
};

export const getEMIPriceString = (
  value: number = 0,
  isInteger?: boolean,
  typeNum?: boolean,
  per?: string
) => {
  if (!!value) {
    let valueString = value.toString();

    if (valueString.length > 5 && valueString.length <= 7) {
      return (
        valueString.slice(0, -5) +
        (isInteger
          ? "." + valueString.slice(valueString.slice(0, -5).length, -4)
          : "") +
        " L"
      );
    } else if (valueString.length > 7) {
      return (
        valueString.slice(0, -7) +
        (isInteger
          ? "." + valueString.slice(valueString.slice(0, -7).length, -6)
          : "") +
        " Cr"
      );
    } else if (valueString.length > 3) {
      return (
        valueString.slice(0, -3) +
        (!typeNum && isInteger
          ? "." + valueString.slice(valueString.slice(0, -3).length, -2)
          : "") +
        (!typeNum ? "K" : "," + valueString.slice(-3)) +
        (per ? `/${per}` : "")
      );
    }
    return valueString;
  }
};
