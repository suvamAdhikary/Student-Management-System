import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Log from "../Components/Log";
import { SMSContext } from "../context/SMSContext";
import { adminLogin, studentLogin } from "../Utils/Axios";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [heading, setHeading] = useState("student");

    const { handleToken, setSmsUserId, setToken } = useContext(SMSContext);

    const history = useHistory();

    const handleLogin = async () => {

        let req = heading === 'student' ? studentLogin : adminLogin;

        let payload = {
            email,
            password
        }

        try {

            let { data } = await req(payload);

            if(heading === 'admin'){
                // console.log("in token", data.token);
                await handleToken(data.token);
            }

            localStorage.setItem('smsUserId', JSON.stringify(data.user._id));

            let smsId = JSON.parse(localStorage.getItem("smsUserId"));

            setSmsUserId(smsId);

            history.push("/");

            // console.log(smsId, "login data");

            setEmail("");
            setPassword("");
        } 
        catch (err) {

            console.log(err.message);
        }
    }

    // let smsId = JSON.parse(localStorage.getItem("smsUserId"));


    // const handleLogout = () => {

    //     localStorage.setItem("smsUserId", JSON.stringify(null));

    //     let smsId = JSON.parse(localStorage.getItem("smsUserId"));

    //     setSmsUserId(smsId);

    // }

    useEffect(() => {

        document.title = "Login";

        // handleLogout();

        let timerId = setTimeout(  (() => {

        localStorage.setItem("smsUserId", JSON.stringify(null));

        let smsId = JSON.parse(localStorage.getItem("smsUserId"));

        setSmsUserId(smsId);

        setToken("");

        })(), 250);

        clearTimeout(timerId);

    }, [setSmsUserId, setToken])

    return(<>
        <h1>LOGIN HERE . . .</h1>
        <br />
        <br />
        <div>
            <div>
                <h1 onClick={() => setHeading("student")} > STUDENT </h1>
                <h1 onClick={() => setHeading("admin")} > ADMIN </h1>
            </div>
            <div>
                <Log
                    heading={heading}
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                />    
            </div>
        </div>
    </>)
}

export default Login;