import { createContext, useState } from "react";

export const SMSContext = createContext();

export const SMSContextProvider = ({children}) => {
    let smsId = JSON.parse(localStorage.getItem("smsUserId"));

    const [token, setToken] = useState("");
    const [sToken, setSToken] = useState("");
    const [smsUserId, setSmsUserId] = useState(smsId);


    const handleToken = (newToken) => {

        setToken(newToken);
    };

    const handleSToken = (sT) => {
        setSToken(sT);
    }

    const value = { token, handleToken, smsUserId, setSmsUserId, setToken, handleSToken, sToken, setSToken };

    return <SMSContext.Provider value={value}>
        { children }
    </SMSContext.Provider>
}