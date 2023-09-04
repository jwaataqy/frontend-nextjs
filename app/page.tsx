"use client";
import { type } from "os";
import Button from "./component/button";
import InputText from "./component/inputText";
import Label from "./component/Label";
import Latihan from "./component/latihan";
import Note from "./component/note";
import { useState } from "react";
import Card from "./component/card";
import BelajarState from "./module/belajarState";
import clsx from "clsx";
import Tambah from "./component/tambah";
import Kurang from "./component/kurang";
import { count } from "console";

export type Identitas = {
  nama: string;
  sekolah: String;
  umur: number | null;
  alamat?: string;
};

export type Hasil = {
  mata_pelajaran: string;
  nilai: number | null;
};

export type pelajaran = {
  mata_pelajaran: string;
  nilai: string;
};

const Home = () => {
  let [nama, setNama] = useState("Muhammad");
  let [tanggal, setTanggal] = useState(0);
  let [bulan, setBulan] = useState("Agustus");
  let [massage, setMassage] = useState("Hai");
  let [count, setCount] = useState(0);
  let [isLogin, setLogin] = useState(false);
  let [profile, setProfile] = useState<Identitas>({
    nama: "Ilham Jaya Kusuma",
    sekolah: "SMK Madinatulquran",
    umur: 17,
  });

  let [hasil, setHasil] = useState<Hasil[]>([
    {
      mata_pelajaran: "Matematika",
      nilai: 90,
    },
    {
      mata_pelajaran: "Ilmu Pengetahuan Alam",
      nilai: 89,
    },
    {
      mata_pelajaran: "Bahasa Inggris",
      nilai: 100,
    },
  ]);

  let [smtr, setSmtr] = useState<pelajaran>({
    mata_pelajaran: "",
    nilai: "",
  });

  let [rapor, setRaport] = useState<pelajaran[]>([
    {
      mata_pelajaran: "kimia",
      nilai: "70",
    },
  ]);

  const deleteCard = (index: number) => {
    setRaport((prevPelajaran) => {
      const updatedPelajaran = [...prevPelajaran];
      updatedPelajaran.splice(index, 1);
      return updatedPelajaran;
    });
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);

    return (
      <main className="space-y-5">
        <section className="justify-end flex flex-col gap-8 ml-8">
          <p>Latihan</p>
          <Card
            bulan={bulan}
            tanggal={tanggal}
            setTanggal={setTanggal}
            setBulan={setBulan}
          />
          <div className="flex justify-left gap-8">
            <Button
              onClick={() => {
                setTanggal((c) => c + 1);
              }}
              colorSchema="blue"
              variant="solid"
              title="Tambah"
            />
            <Button
              onClick={() => {
                setTanggal((c) => c - 1);
              }}
              colorSchema="red"
              variant="solid"
              isDisabled={false}
              title="Kurang"
            />
          </div>
          <InputText
            id="bulan"
            name={"bulan"}
            value={bulan}
            onChange={(e) => {
              setBulan(e.target.value);
            }}
          />
        </section>

        {/* Belajar Event Handling */}
        {/* <h1>Hello World</h1>
        <p>message addalah {massage}</p>{" "}
        <Button
          title="Hello"
          variant="solid"
          colorSchema="blue"
          onClick={() => {
            setMassage("Hello");
          }}
        />
        <div>{count}</div>
        <Button
          title="Tambah"
          variant="solid"
          colorSchema="blue"
          onClick={increment}
        />
        <Button
          title="Kurang"
          variant="solid"
          colorSchema="red"
          onClick={decrement}
        /> */}

        {/* <Button
      title={"Hapus"}
      variant="solid"
      colorSchema={"red"}
      isDisabled={false}
      onClick={() =>
         setRaport([])}
      /> */}
      </main>
    );
  };
};
export default Home;

{
  /* Belajar State */
}



{
  /*

  <div className="flex flex-col">
          <h5>Nama : {profile.nama}</h5>
          <h5>Sekolah : {profile.sekolah}</h5>
          <h5>Umur : {profile.umur}</h5>
        </div>
        <h1 className="text-red-500 font-bold text-2xl">
          {isLogin ? "Sudah Login" : "Belum Login"}
        </h1>
        <Button
          title="login"
          colorSchema="blue"
          variant="solid"
          onClick={() => {
            setLogin(true);
          }}
        />
        <Button
          title="Logout"
          colorSchema="red"
          variant="solid"
          onClick={() => {
            setLogin(false);
          }}
        />
        <Button
          title={isLogin ? "Sign in" : "Sign Out "}
          colorSchema={isLogin ? "red" : "blue"}
          variant="solid"
          onClick={() => {
            setLogin(!isLogin);
          }}
        />
        <h1>{nama}</h1>
        <Button
          title="Bayu"
          colorSchema="red"
          variant="solid"
          onClick={() => {
            setNama("Bayu");
          }}
        />
        <Button
          title="Rajwaa"
          colorSchema="blue"
          variant="solid"
          onClick={() => {
            setNama("Rajwaa");
          }}
        />

        <h1>{count}</h1>
        <Button
          title="Tambah"
          colorSchema="blue"
          variant="solid"
          onClick={() => {
            setCount((prevCount) => {
              console.log("state saat ini", prevCount);
              return prevCount + 1;
            });
          }}
        />
        <Button
          isDisabled={count === 0 ? true : false}
          title="Kurang"
          colorSchema="blue"
          variant="solid"
          onClick={() => {
            setCount((prevCount) => prevCount - 1);
          }}
        />   
  
      <BelajarState
          hasil={hasil}
          setHasil={setHasil}
          profile={profile}
          setProfile={setProfile}
        />
  
  <div className="flex flex-grid gap-10">
          <Button
            width="full"
            title="Tambah Alamat"
            variant="solid"
            colorSchema="blue"
            onClick={() => {
              setProfile((prevrofile) => {
                return {
                  ...prevrofile,
                  nama: "Muhammad Raju",
                  alamat: "Depok",
                };
              });
            }}
          />
          <Button
            width="full"
            title="Kembali Ke dafault"
            variant="solid"
            colorSchema="red"
            onClick={() => {
              setProfile((prevrofile) => {
                return {
                  nama: "Ilham Jaya Kusuma",
                  sekolah: "Smk Madinatulquran",
                  umur: 17,
                };
              });
            }}
          />
        </div>
        <p>message addalah {massage}</p>
        <Button
          title="Hello"
          variant="solid"
          colorSchema="blue"
          onClick={() => {
            setMassage("Hello");
          }}
        />
        <Button
          title="Salam"
          variant="outline"
          colorSchema="blue"
          onClick={() => {
            setMassage("Assalamualaikum");
          }}
        />
        <p>Count adalah {count}</p>
        <div className="flex flex-grid gap-10">
          <Button
            title="Tambah"
            variant="solid"
            colorSchema="blue"
            onClick={() => {
              setCount((prevCount) => prevCount + 1);
            }}
          />

          <Button
            title="clear"
            variant="solid"
            colorSchema="red"
            onClick={() => {
              setCount((prevCount) => (prevCount = 0));
            }}
          />

          <Button
            title="Kurang"
            variant="solid"
            colorSchema="blue"
            onClick={() => {
              setCount((prevCount) => prevCount - 1);
            }}
          />
        </div>
        <p> {isLogin ? "Sudah Login" : "Belum Login"}</p>
        <Button
          title="Login"
          isDisabled={isLogin === true}
          variant="solid"
          colorSchema="blue"
          onClick={() => {
            setLogin(true);
          }}
        />

        <Button
          title="Logout"
          isDisabled={isLogin === false}
          variant="solid"
          colorSchema="red"
          onClick={() => {
            setLogin(false);
          }}
        />
        <Button
          title="Ubah"
          variant="solid"
          colorSchema="blue"
          onClick={() => {
            setProfile((prevProfile) => {
              return {
                ...prevProfile,
                nama: "Ilham Maulana Fikri",
              };
            });
          }}
        />

        <Button
          title="Update"
          variant="solid"
          colorSchema="blue"
          onClick={() => {
            setProfile((prevProfile) => {
              return {
                ...prevProfile,
                sekolah: "SMP MADINATULQURAN",
              };
            });
          }}
        /> */
}

// State Fundamental

{
  /* <div>
  <h2>Daftar Nilai</h2>
  {hasil.map((item, index) => (
    <section key={index}>
      <h5>Nama Mata pelajaran : {item.mata_pelajaran} </h5>
      <h5>Nilai : {item.nilai} </h5>
    </section>
  ))}
  <Button
    width="full"
    title="Tambah"
    variant="solid"
    colorSchema="blue"
    onClick={() => {
      setHasil((prevHasil) => {
        return [
          ...prevHasil,
          {
            mata_pelajaran: "B. Indonesia",
            nilai: 100,
          },
          {
            mata_pelajaran: "Fisika",
            nilai: 80,
          },
        ];
      });
    }}
  />

  <Button
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
  />
</div>; */
}

{
  /* Tugas Button */
}

{
  /* {JSON.stringify(smtr)}
      {rapor.map((item, i) => {
        return (
          <div key={i} className="bg-white shadow-xl w-[500px] rounded-lg p-4">
            <h5 className="">Mata Pelajaran: {item.mata_pelajaran}</h5>
            <h5 className="">Nilai: {item.nilai}</h5>
            <div className="px-3 py-3">
              <Button
                colorSchema="red"
                variant="solid"
                onClick={() => deleteCard(i)}
                isDisabled={rapor.length === 1}
                title="Hapus"
              />
            </div>
          </div>
        );
      })} */
}

{
  /* <div className="flex flex-grid gap-5">
        <Button
          title="Fisika"
          variant="solid"
          colorSchema="blue"
          isDisabled={smtr.mata_pelajaran === "fisika"}
          onClick={() => {
            setSmtr((prev) => {
              return {
                ...prev,
                mata_pelajaran: "fisika",
              };
            });
          }}
        />
        <Button
          title="Biologi"
          isDisabled={smtr.mata_pelajaran === "biologi"}
          variant="solid"
          colorSchema="green"
          onClick={() => {
            setSmtr((prev) => {
              return {
                ...prev,
                mata_pelajaran: "biologi",
              };
            });
          }}
        />
        <Button
          title="Kimia"
          isDisabled={smtr.mata_pelajaran === "kimia"}
          variant="solid"
          colorSchema="red"
          onClick={() => {
            setSmtr((prev) => {
              return {
                ...prev,
                mata_pelajaran: "kimia",
              };
            });
          }}
        />

        <Button
          title="Matematika"
          isDisabled={smtr.mata_pelajaran === "matematika"}
          variant="solid"
          colorSchema="yellow"
          onClick={() => {
            setSmtr((prev) => {
              return {
                ...prev,
                mata_pelajaran: "matematika",
              };
            });
          }}
        />
      </div>

      <div className="flex flex-grid gap-5">
        <Button
          title="70"
          colorSchema="red"
          variant="solid"
          isDisabled={smtr.nilai === "70"}
          onClick={() => {
            setSmtr((prev) => {
              return {
                ...prev,
                nilai: "70",
              };
            });
          }}
        />
        <Button
          title="80"
          colorSchema="yellow"
          variant="solid"
          isDisabled={smtr.nilai === "80"}
          onClick={() => {
            setSmtr((prev) => {
              return {
                ...prev,
                nilai: "80",
              };
            });
          }}
        />
        <Button
          title="90"
          colorSchema="blue"
          variant="solid"
          isDisabled={smtr.nilai === "90"}
          onClick={() => {
            setSmtr((prev) => {
              return {
                ...prev,
                nilai: "90",
              };
            });
          }}
        />
        <Button
          title="100"
          colorSchema="green"
          variant="solid"
          isDisabled={smtr.nilai === "100"}
          onClick={() => {
            setSmtr((prev) => {
              return {
                ...prev,
                nilai: "100",
              };
            });
          }}
        />
      </div>

      <Button
        title="Simpan"
        colorSchema="blue"
        variant="solid"
        isDisabled={smtr.mata_pelajaran == "" || smtr.nilai == ""}
        onClick={() => {
          setRaport((prev) => {
            return [
              ...prev,
              {
                mata_pelajaran: smtr.mata_pelajaran,
                nilai: smtr.nilai,
              },
            ];
          });
          setSmtr((prev) => {
            return {
              ...prev,
              mata_pelajaran: "",
              nilai: "",
            };
          });
        }}
      /> */
}

{
  /* Props */
}
{
  /* <section>
        <Label title="username" htmlFor="username" isRequired />
        <InputText
          id="username"
          name="username"
          value={"Muhammad Rajwaa"}
          placeholder="username"
          type="text"
          messageError="Username not empty"
          isError ={false}
        />
      </section>
      <section>
        <Label title="password" htmlFor="password" isRequired />
        <InputText
          id="password"
          name="password"
          value={"12345678"}
          placeholder="******"
          type="passoword"
          isError ={false}
        />
      </section>
      <section>
        <Label title="name" htmlFor="name" isRequired />
        <InputText
          id="name"
          name="name"
          value={"Rajwaa"}
          onChange={() => {
            console.log("ok");
          }}
        />
      </section>

      <section className="space-x-5">
        <Button
          title="simpan"
          isDisabled={false}
          variant="solid"
          colorSchema="blue"
        />
        <Button
          title="simpan"
          isDisabled={true}
          variant="solid"
          colorSchema="blue"
        />
        <Button
          title="Update"
          isDisabled={false}
          variant="outline"
          colorSchema="blue"
        />
        <Button
          title="Update"
          isDisabled={true}
          variant="outline"
          colorSchema="blue"
        />
        <Button
          title="Draft"
          isDisabled={false}
          variant="outline"
          colorSchema="green"
        />

        <Button title="Batal" isDisabled variant="solid" colorSchema="red" />

        <Button
          title="Batal"
          isDisabled={false}
          variant="solid"
          colorSchema="red"
        />
      </section> */
}

// const App = () => {
//   let [count, setcount] = useState(0);
//   return (
//     <>
//       <h1 className="text-lg text-center">Angka Ke {count}</h1>
//       <section className="flex justify-center items-center">
//         <Tambah count={count} setCount={setcount} />
//         <Kurang count={count} setCount={setcount}/>
//       </section>
//     </>
//   );
// };

// export default App;
