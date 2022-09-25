import { createContext, useState } from "react";

export const MensajeContext = createContext();

export function MensajeProvider({ children }) {

    const [mensaje, setMensaje] = useState("");

    return (
        <MensajeContext.Provider value={{
            mensaje,
            setMensaje
        }}>
            {children}
        </MensajeContext.Provider>
    )
}