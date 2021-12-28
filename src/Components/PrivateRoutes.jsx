import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { SMSContext } from "../context/SMSContext";


export default function PrivateRoutes({ children, path, push }){

    const { token } = useContext(SMSContext);

    if(!token) {

        return <Redirect to='/' push={push}/>;
    }

    return <Route path={path}>
        {children}
    </Route>
};