import { Link } from "react-router-dom";
import "../../App.css";

export default function Productos() {
    return (
        <>
            <Link  to={"/Productos-gatos"}>
                <h1>Ir a Sección Gatos</h1>;
            </Link>
        </>
    );
}
