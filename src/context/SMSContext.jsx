import { createContext, useState } from "react";

export const SMSContext = createContext();

export const SMSContextProvider = ({children}) => {

    const [token, setToken] = useState("");

    const handleToken = (newToken) => {

        setToken(newToken);
    };

    const value = { token, handleToken };

    return <SMSContext.Provider value={value}>
        { children }
    </SMSContext.Provider>
}