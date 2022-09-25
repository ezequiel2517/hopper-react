import "./Mensaje.scss"
import icon from "./iconMensaje.webp"
import { useContext } from 'react';
import { MensajeContext } from '../../contexts/MensajeContext/MensajeContext';

function Mensaje() {
    const { mensaje} = useContext(MensajeContext);

    return (
        <div className="mensaje" style={{visibility:"visible"}}>
            <img className="icon" src={icon}></img>
            <p>{mensaje}</p>
        </div>
    )
}

export default Mensaje;