import clsx from "clsx";
import { Stats } from "fs";
import { ReactNode } from "react";

type status = "warning" | "error" | "success";
interface SectionProps {
  title: string;
  children: ReactNode;
  status: status;
}

const Note: React.FC<SectionProps> = ({
  title,
  status,
  children,
  ...props
}) => {
  return (
    <section
      className={clsx(`border border-red-500 mt-5 rounded-lg  shadow-md px-2`, {
        "border-red-500 border-4": status === "error",
        "border-yellow-500 border-4" : status === "warning",
        "border-blue-500 border-4" : status === "success",
      })}
    >
      <div className="border-b border-red-500  py-2 ">
        <h5 className="font-bold text-red-500"> {title}</h5>
      </div>
      <div className="py-3 text-red-500 text-sm">{children}</div>
    </section>
  );
};

export default Note;
