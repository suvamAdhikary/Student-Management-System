import { createContext, useState } from "react";

export const SMSContext = createContext();

export const SMSContextProvider = ({children}) => {
    let smsId = JSON.parse(localStorage.getItem("smsUserId"));

    const [token, setToken] = useState("");
    const [smsUserId, setSmsUserId] = useState(smsId);


    const handleToken = (newToken) => {

        setToken(newToken);
    };

    const value = { token, handleToken, smsUserId, setSmsUserId, setToken };

    return <SMSContext.Provider value={value}>
        { children }
    </SMSContext.Provider>
}