"use client";
import { type } from "os";
import Button from "./component/button";
// import BelajarState from "./module/module.belajarState";
import InputText from "./component/inputText";
import Label from "./component/Label";
// import Latihan from "./component/latihan";
// import Note from "./component/note";
import { useState } from "react";
import Card from "./component/card";
import BelajarState from "./module/belajarState";

export type Identitas = {
  nama: string;
  sekolah: String;
  umur: number | null;
};

export type Hasil = {
  mata_pelajaran: string;
  nilai: number | null;
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
  return (
    <main className="space-y-5">
      <h1>Latihan</h1>

      {/* <h1 className="text-red-500 font-bold text-2xl">
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
      /> */}

      {/* <h1>{nama}</h1>
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
      /> */}
      {/* 
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
      /> */}

      {/* <Button
        isDisabled={count === 0 ? true : false}
        title="Kurang"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      /> */}

      {/* Latihan State*/}

      <section className="justify-end flex flex-col gap-8 ml-8">
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
            isDisabled ={false}
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
      {/* <BelajarState hasil={hasil} setHasil={setHasil} profile={profile} setProfile={setProfile}/> */}

      {/* <p>message addalah {massage}</p>
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

      <Button
        title="Tambah"
        variant="solid"
        colorSchema="blue"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
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

      <div className="flex flex-col">
        <h5>Nama : {profile.nama}</h5>
        <h5>Sekolah : {profile.sekolah}</h5>
        <h5>Umur : {profile.umur}</h5>
      </div>

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
      />

      <div>
        <h2>Daftar Nilai</h2>
        {hasil.map((n, index) => (
          <section key={index}>
            <h5>Nama Mata pelajaran : {n.mata_pelajaran} </h5>
            <h5>Nilai : {n.nilai} </h5>
          </section>
        ))}

        <Button
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
              ];
            });
          }}
        />

        <Button
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
      </div> */}
    </main>
  );
};

export default Home;

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
