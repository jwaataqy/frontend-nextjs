import clsx from "clsx";
import React from "react";
import { toEditorSettings } from "typescript";

type Variant = "solid" | "outline";
type ColorSchema = "blue" | "red" | "green";
interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant?: Variant;
  colorSchema: ColorSchema;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  isDisabled,
  colorSchema,
  variant,
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
        "border-green-300 text-green-500":
          colorSchema === "green" && variant === "outline",
        "bg-red-500  text-white":
          colorSchema === "red" && variant === "solid" && isDisabled === false,
        "bg-red-300  text-white": colorSchema === "red" && variant === "solid",
        "opacity-50": isDisabled,
        // "border-2 border-red-500 text-red-500" : title === "clear" 
      })}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
