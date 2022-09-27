import { useParams, useSearchParams } from "react-router-dom"


export function SayHalo(props){
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams(); // query string : semua variable yang posisinya setelah tanda ? URL.

    // console.log(params);
    // console.log (searchParams.get('person'), searchParams.get('address'));
    return (<h1>Halo {props.nama || '' }. selamat datang di react </h1>)
}