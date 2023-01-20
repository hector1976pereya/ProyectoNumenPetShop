import { useState } from "react";
import "./Formulario.css";


const initialForm = {
    name:"",
    email:""
}

const Formulario = () => {

    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value
    })

    const handleSubmit = (e) => {

        if (!form.name || !form.email) {
            alert("Datos incompletos")
            return;
        }
    }

    return(
        <div  className="Formulario">
            <h2>Formulario</h2>
            <form className="Form" onSubmit={handleSubmit}>
                <input
                style={{
                    margin:'15px 0'
                }}
                type="text" name="name" placeholder="Nombre y Apellido" onChange={handleChange} value={form.name}/>
                <input type="text" name="email" placeholder="Email" onChange={handleChange} value={form.email}/>
                <input
                style = {{
                    color:'#ffffff',
                    width:'70px',
                    background:'#EB6440',
                    margin:'15px 0'
                }}
                type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Formulario;