import clsx from "clsx";

interface InputProps {
  isError: boolean;
  messageError?: string;
  value: number|string;
  id:number;
  name:string;
}

const InputText: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ messageError= "wajib di isi", isError = false,value, ...props }) => {
  return (
    <section>
      <input
      value={value}
        className={clsx(`w-full border-2 px-2`,{
          "border-gray-700" : isError === false,
          "border-red-500" : isError === true
        })}
        {...props}
      />
      {isError ? (
        <p className="text-red-500 font-bold">{messageError}</p>
      ) : (
        <></>
      )}

    </section>
  );
};

export default InputText;
