import { createContext, useState } from "react";

export const ExceptionContext = createContext();

export function ExceptionProvider({ children }) {

    const [exception, setException] = useState("");

    return (
        <ExceptionContext.Provider value={{
            exception,
            setException
        }}>
            {children}
        </ExceptionContext.Provider>
    )
}