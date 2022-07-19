import { useParams } from "react-router-dom";
import {useEffect} from "react";

export default function Detail(){
    const { id } = useParams();
    const fetchDetail = async () => {
        const res = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(res);
    }
    useEffect(() => {
        fetchDetail();
    }, [])
    return <h1>Detail</h1>
}
