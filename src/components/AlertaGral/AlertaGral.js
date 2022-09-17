import "./AlertaGral.scss"
import { useEffect } from "react"
import { useContext } from 'react';
import { ExceptionContext } from '../../contexts/ExceptionContext/ExceptionContext';

function AlertaGral() {
    const {setException} = useContext(ExceptionContext);

    useEffect(() => {
        const header = document.querySelector("header");
        header.style.animationName = "downHeader";
        setException("¿NO VAS A COMPRAR NADA? ¡INTÉNTALO!");
        return () => {
            const header = document.querySelector("header");
            header.style.animationName = "upHeader";
        }
    }, []);
}

export default AlertaGral;