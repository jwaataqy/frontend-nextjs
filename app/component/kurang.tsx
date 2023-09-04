import React, { Dispatch, SetStateAction } from "react";
import Button from "./button";

interface Tambahprops {
  count: number;
  setCount: Dispatch<SetStateAction<any>>;
}

const Kurang: React.FC<Tambahprops> = ({count, setCount}) => {
  return (
    <section className=" border shadow-lg">
        {/* <h1>{count}</h1> */}
      <Button
        title="Kurang"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setCount((c: number) => c - 1);
        }}
      />
    </section>
  );
};

export default Kurang;
