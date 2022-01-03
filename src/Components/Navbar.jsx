import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SMSContext } from "../context/SMSContext";

export default function Navbar() {

    const { smsUserId } = useContext(SMSContext);
    
    // console.log(smsUserId);
    
    useEffect(() => {

        let timerId =  setTimeout( () => { return } , 500);

        clearTimeout(timerId);

    }, [smsUserId])

    return (
        <header>
            <nav>
                <Link to="/" >HOME</Link>
                <Link to="/panel" >ADMIN PANEL</Link>
                <Link to="login" >{smsUserId === null ? 'LOGIN' : 'LOGOUT'}</Link>
            </nav>
        </header>
    )
}
