import "./AlertaGral.scss"
import { useEffect } from "react"

function AlertaGral() {
    useEffect(() => {
        const header = document.querySelector("header");
        header.style.animationName = "downHeader";
        
        return () => {
            const header = document.querySelector("header");
            header.style.animationName = "upHeader";
        }
    }, []);
}

export default AlertaGral;