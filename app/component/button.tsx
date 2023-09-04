import clsx from "clsx";
import React from "react";
import { toEditorSettings } from "typescript";

export type Variant = "solid" | "outline";
export type ColorSchema = "blue" | "red" | "green" | "yellow";

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant?: Variant;
  colorSchema: ColorSchema;
  onClick?: () => void;
  width?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  title,
  isDisabled,
  colorSchema,
  variant,
  width,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      disabled={isDisabled}
      className={clsx(`w-24 h-8 rounded border`, {
        "bg-blue-500 border-solid text-white":
          colorSchema === "blue" && variant === "solid",
        // "bg-blue-100 border-solid text-white opacity-20":
        //   colorSchema === "blue" && variant === "solid" && isDisabled === true,
        "border-blue-500  text-blue":
          colorSchema === "blue" &&
          variant === "outline" &&
          isDisabled === false,
        "border-blue-300 text-blue-400 border-2":
          colorSchema === "blue" && variant === "outline",
        "border-red-300 text-red-400 border-2":
          colorSchema === "red" && variant === "outline",
        "border-green-300 text-green-500":
          colorSchema === "green" && variant === "outline",
        "bg-green-500 text-white":
          colorSchema === "green" && variant === "solid",
        "bg-red-500  text-white":
          colorSchema === "red" && variant === "solid" && isDisabled === false,
        "bg-red-300  text-white": colorSchema === "red" && variant === "solid",
        "bg-yellow-300  text-white": colorSchema === "yellow" && variant === "solid",
        "opacity-50": isDisabled,
        "w-full": width === "full",
        // "border-2 border-red-500 text-red-500" : title === "clear"
      })}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
