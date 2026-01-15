import React from "react";

type Option<T extends string | number = string> = {
  value: T;
  label: string;
};

type SelectProps<T extends string | number = string> =
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: Option<T>[];
    placeholder?: string;
  };

const Select = <T extends string | number = string>({
  options,
  placeholder,
  className = "",
  value = "",
  ...props
}: SelectProps<T>) => {
  return (
    <select
      {...props}
      value={value}
      className={`block w-full px-3 py-2 bg-white border border-gray-300 rounded-md
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((opt) => (
        <option key={String(opt.value)} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
