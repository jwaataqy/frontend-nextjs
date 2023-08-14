import {ReactNode} from "react";



type status = "Santri" | "Bukan Santri";
interface note{
    name:string;
    isi: ReactNode;
    status :status;
}

const Anggota: React.FC<note> = ({name, status}) =>{
    return(
        <section className=" border border-red-500 mt-5 rounded-lg  shadow-md px-2">
        <div className="border-b border-red-500  py-2 ">
          <h5 className="font-bold text-red-500"> {name}</h5>
        </div>
        <div className="py-3 text-red-500 text-sm">{status}</div>
      </section>
    )
}

export default Anggota;