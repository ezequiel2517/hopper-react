import "./Mensaje.scss"
import icon from "./iconMensaje.webp"
import { useContext } from 'react';
import { ExceptionContext } from '../../contexts/ExceptionContext/ExceptionContext';

function Mensaje() {
    const { exception} = useContext(ExceptionContext);

    return (
        <div className="mensaje" style={{visibility:"visible"}}>
            <img className="icon" src={icon}></img>
            <p>{exception}</p>
        </div>
    )
}

export default Mensaje;