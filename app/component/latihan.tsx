import exp from "constants";


interface identitas {
    nama:string,
    umur: number,
    kelas:string,
    asal:string,
    isStudent: boolean,
};

export default function Latihan(props:identitas){
    return(
        <main>
            <dl>
                <dt>Name : {props.nama}</dt>
                <dt>umur : {props.umur}</dt>
                <dt>kelas : {props.kelas}</dt>
                <dt>Asal : {props.asal}</dt>
                <dt>Is Student : {props.isStudent? "Yes":"No"}</dt>
            </dl>
        </main>
    )
};
