import "./servicios.css";


export default function Productos() {
 
  return ( 
   <>
   
   <div className='ServiciosUno'>
        <h2>Servicios</h2>
        </div> 
        <div className="ServiciosDos">
            <p>Le brindamos el mejor servicio para sus mascotas, en nuestro local podés encontrar...</p>
                <ul>
                    <li>Corte de pelo</li>
                    <li>Baño completo</li>
                    <li>Limpieza bucal</li>
                    <li>Atención por urgencias a domicilio</li>
                </ul>
        </div>
        <div className="Parrafos">
            <h4>Corte de Pelo</h4>
            <p>Un corte de pelo higiénico perimite que nuestra mascota esté más limpio la momento de hacer sus necesidades. Un corte de pelo potencia la personalidad de un perro según su raza o simplemente ayuda a que el animal tenga un manto limpio y prolijo evitando nudos. </p>
            <div className="Row">
                <a><img className="img" src="https://www.hogarmania.com/archivos/202108/rapar-pelo-perro-portada-1280x720x80xX.jpg"></img></a>
                <a><img className="img" src="https://img.freepik.com/fotos-premium/peluqueria-femenina-corte-pelo-bolonka-bolonesa-mesa-aseo-salon-belleza-perros-proceso-corte-final-pelo-perro-tijeras_199620-848.jpg"></img></a>
            </div>   
        </div>
        <div className="Parrafos">
            <h4>Baño completo</h4>
            <p>Nuestras mascotas comparten gran parte del día con nosotros y su estado de higiene es una parte fundamental de la salud no solamente de ella, sino de toda la familia. Un baño antipulgas y garrapaticida evitan picazones y parásitos.</p>
            <div className="Row">
                <a><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mmwx-TE0vyOSX-IqiFX9G5OlcDa5oYxMbQ&usqp=CAU"></img></a>
                <a><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKv6Lo93ZfSdWtGMXLNOCD87kdGcQuDzyLA&usqp=CAU"></img></a>
            </div>
        </div>
        <div className="Parrafos">
            <h4>Limpieza dental</h4>
            <p>En esta limieza eliminamos el sarro y la placa adherida a la superficie de los dientes mediante un equipo de ultrasonido que garantiza la integridad de las piezas dentales a la vez que elimina en profundidad cualquier resto de suciedad. Luego se pulen los dientes mediente una fresa especial que elimina la placa bacteriana y devuelve a los dientes un aspecto sano que deben de tener.</p>
            <div className="Row">
                <a><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXnrlzO8xuqUyaaVTQrPvKRwlRwdYQsF15A&usqp=CAU"></img></a>
                <a><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDexQ83yoUBLKRdGcIWbYwgtNPvsmC8o8UL8HJtAM67-MpvDbEzUVrFHqzo65aFfNNhoM&usqp=CAU"></img></a>
            </div>
        </div>
        <div className="Parrafos">
            <h4>Atención por urgencias a domicilio</h4>
            <p>Estamos disponibles las 24hs para cuidar a tu mascota y brindarle el apoyo ante cualquier urgencia o emergencia que se le presente. Para eso, contamos con profesionales capacitados y con una infraestructura adecuada para solucionar cualquier problema de salud, ya sea clínico o quirúrgico.</p>
            <div className="Row">
                <a><img className="img" src="https://vetmarketportal.com.ar/uploads/noticias/5/20220218130132_perro_sobre_camilla.jpg"></img></a>
                <a><img className="img" src="https://desivet.com.ar/wp-content/uploads/2020/04/hero-slide-2.jpg"></img></a>
            </div>
        </div></>
  );
}