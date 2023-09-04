import { Children, Dispatch, ReactNode, SetStateAction, useState } from "react";
import Button from "./button";
// import { pelajaran } from "../page";
import { type } from "os";

type note = "Sucses" | "Eror";

// type pelajaran = {
//   mata_pelajaran: string;
//   nilai: string;
// };
interface PropsChildren {
  // title: string;
  // children: ReactNode;
  // note?: string;
  bulan: string;
  tanggal: number;
  setTanggal: Dispatch<SetStateAction<number>>;
  setBulan: Dispatch<SetStateAction<string>>;
  // mata_pelajaran: string;
  // nilai: string | number;
  // smtr?: string;
  // setSmtr?: Dispatch<SetStateAction<string>>;
  // setRapor?: Dispatch<SetStateAction<string>>;
  // deleteCard?: () => void;
}

const Card: React.FC<PropsChildren> = ({
  // title,
  // children,
  // note,
  bulan,
  tanggal,
  setTanggal,
  setBulan,
  // mata_pelajaran,
  // nilai,
  // smtr,
  // setSmtr,
  // setRapor,
  // deleteCard,
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
              setBulan("Agustus");
            }}
          />
        </div>
      </div>
    </section>
  );
};

{
  /* <Button
width="full"
title="Kurang"
isDisabled={hasil.length <= 1}
variant="solid"
colorSchema="red"
onClick={() => {
  setHasil((prevHasil) => {
    prevHasil.pop();
    return [...prevHasil];
  });
}}
/> */
}
export default Card;

{
  /* {setTanggal}
{setBulan} */
}
{
  /* <div className="border-b border-red-500  py-2 ">
  <h5 className="font-bold text-red-500"> {title}</h5>
  </div>
<div className="py-3 text-red-500 text-sm">{children}</div> */
}

// Latihan

{
  /* <section className="my-10 w-[500px] rounded-lg shadow-gray-300 shadow-md">
<div className="flex flex-col py-3 px-3">
  <h1>Nama Mata Pelajaran: {mata_pelajaran}</h1>
  <p>Nilai:{nilai}</p>
  <div className="pt-3">
    <Button
      title="Hapus"
      colorSchema="red"
      variant="solid"
      isDisabled={mata_pelajaran == "kimia" && nilai == 70}
      onClick={() => {
        for (var i = 0; i <= mata_pelajaran.length; i++) {
          if(mata_pelajaran.length == i){
            mata_pelajaran.slice();
          }
        }
      }}
    />
  </div>
</div>
</section> */
}
