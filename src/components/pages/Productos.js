import { Link } from "react-router-dom";


export default function Productos() {
    return (
        <>
         
            <Link  to={"/perros"}>
                <h2>Ir a Sección Perros</h2>;
            </Link>
            <Link  to={"/gatos"}>
                <h2>Ir a Sección Gatos</h2>;
            </Link>
            <Link  to={"/Indumentaria"}>
                <h2>Ir a Sección Indumentaria</h2>;
            </Link>
            <Link  to={"/Accesorios"}>
                <h2>Ir a Sección Accesorios</h2>;
            </Link>
        </>
    );
}
