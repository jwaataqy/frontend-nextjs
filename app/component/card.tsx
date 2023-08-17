import { Children, Dispatch, ReactNode, SetStateAction } from "react";
import Button from "./button";

type note = "Sucses" | "Eror";
interface PropsChildren {
  // title: string;
  // children: ReactNode;
  // note?: string;
  bulan: string;
  tanggal: number;
  setTanggal: Dispatch<SetStateAction<number>>;
  setBulan: Dispatch<SetStateAction<string>>;
}

const Card: React.FC<PropsChildren> = ({
  // title,
  // children,
  // note,
  bulan,
  tanggal,
  setTanggal,
  setBulan,
}) => {
  return (
    <section className=" border border-red-500 mt-5 rounded-lg w-[250px] h-auto shadow-md flex">
      <div className="flex flex-col justify-left text-center">
        <div className="bg-red-500 w-[250px] rounded-md text-white py-5">
          {bulan}
        </div>
        <div className="py-10 text-9xl">{tanggal}</div>
        <div className="pb-10">
          <Button
            title="clear"
            colorSchema="red"
            variant="outline"
            onClick={() => {
              setTanggal(0);
              setBulan('Agustus');
            }}
          />
        </div>
      </div>
      {/* {setTanggal}
      {setBulan} */}
      {/* <div className="border-b border-red-500  py-2 ">
        <h5 className="font-bold text-red-500"> {title}</h5>
      </div>
      <div className="py-3 text-red-500 text-sm">{children}</div> */}
    </section>
  );
};

export default Card;
