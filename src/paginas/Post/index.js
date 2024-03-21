import { useParams } from "react-router-dom";

export default function Post() {
    const parametros = useParams();

    return (
        <h1>{parametros.id}</h1>
    );
}