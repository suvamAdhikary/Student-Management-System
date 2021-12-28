import { useContext } from "react";
import { Link } from "react-router-dom";
import { SMSContext } from "../context/SMSContext";

export default function Navbar() {

    const { token, handleToken } = useContext(SMSContext);

    return (
        <header>
            <nav>
                <Link to="/" >HOME</Link>
                <Link to="/panel" >ADMIN PANEL</Link>
                <Link to="login" >LOGIN</Link>
            </nav>
        </header>
    )
}
