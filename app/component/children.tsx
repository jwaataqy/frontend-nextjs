import { Children, ReactNode } from "react"


type note = "Sucses" | "Eror";
interface PropsChildren {
    title: string,
    children: ReactNode,
    note?: string,
};

const Card: React.FC<PropsChildren> = ({ title, children,note }) => {
    return (
        <section className=" border border-red-500 mt-5 rounded-lg  shadow-md px-2">
        <div className="border-b border-red-500  py-2 ">
          <h5 className="font-bold text-red-500"> {title}</h5>
        </div>
        <div className="py-3 text-red-500 text-sm">{children}</div>
      </section>
    )
}

export default Card;
