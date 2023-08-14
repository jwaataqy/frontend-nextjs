"use client";
import { type } from "os";
import Button from "./component/button";
import BelajarState from "./module/module.belajarState";
import InputText from "./component/inputText";
import Label from "./component/Label";
// import Latihan from "./component/latihan";
// import Note from "./component/note";
import { useState } from "react";
import Card from "./component/children";

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
  // let [tanggal, setTanggal] = useState(0);
  // let [bulan, setBulan] = useState("Agustus");
  // let [massage, setMassage] = useState("Hai");
  // let [count, SetCount] = useState(0);
  // let [isLogin, setLogin] = useState(false);
  // let [profile, setProfile] = useState<Identitas>({
  //   nama: "Ilham Jaya Kusuma",
  //   sekolah: "SMK Madinatulquran",
  //   umur: 17,
  // });

  // let [hasil, setHasil] = useState<Hasil[]>([
  //   {
  //     mata_pelajaran: "Matematika",
  //     nilai: 90,
  //   },
  //   {
  //     mata_pelajaran: "Ilmu Pengetahuan Alam",
  //     nilai: 89,
  //   },
  //   {
  //     mata_pelajaran: "Bahasa Inggris",
  //     nilai: 100,
  //   },
  // ]);
  return (
    <main className="space-y-5">
      <h1>Hello world</h1>
      <section>
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
          isError ={false}
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
      </section>
    </main>
  );
};

export default Home;

// latihan State

{
  /* <Card
      bulan={bulan}
      tanggal={tanggal}
      setTanggal={setTanggal}
      setBulan={setBulan}
    />
    <Button
      onClick={() => {
        setTanggal((c) => c + 1);
      }}
      colorSchema="blue"
      title="tambah"
    />
    <Button
      onClick={() => {
        setTanggal((c) => c - 1);
      }}
      colorSchema="red"
      title="kurang"
    />
    <InputText
      id="bulan"
      name={"bulan"}
      value={bulan}
      onChange={(e) => {
        setBulan(e.target.value);
      }}
    /> */
}

{
  /* 
      <BelajarState
        hasil={hasil}
        setHasil={setHasil}
        profile={profile}
        setProfile={setProfile}
      /> */
}

{
  /* 
      <p>message adalah {massage}</p>
      {""}
      <Button
        title="Hello"
        variant="solid"
        colorSchema="blue"
        onClick={() => {
          setMassage("Hai");
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
          SetCount((prevCount) => prevCount + 1);
        }}
      />

      <Button
        title="Kurang"
        variant="solid"
        colorSchema="red"
        onClick={() => {
          SetCount((prevCount) => prevCount - 1);
        }}
      />

      <p>{isLogin ? "Sudah Login" : "Belum Login"}</p>
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
        title="Ubah Nama"
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
      </div> */
}
{
  /* <p>Jumlahnya adalah {count}</p>

      <p>Apakah kamu sudah Login {isLogin}</p>

      <div className="flex flex-col gap-7">
        {hasil.map((n, index) => (
          <section key={index}>
            <h5>Nama Mata Pelajaran : {n.mata_pelajaran}</h5>
            <h5>Nilai Mata Pelajaran : {n.nilai}</h5>
          </section>
        ))}
      </div> */
}
{
  /*
     

   
 */
}
