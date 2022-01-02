import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Log from "../Components/Log";
import { SMSContext } from "../context/SMSContext";
import { adminLogin, studentLogin } from "../Utils/Axios";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [heading, setHeading] = useState("student");

    const { handleToken } = useContext(SMSContext);

    const history = useHistory();

    const handleLogin = async () => {

        let req = heading === 'student' ? studentLogin : adminLogin;

        let payload = {
            email,
            password
        }

        try {

            let { data : {token, user} } = await req(payload);

            await handleToken(token);

            history.push("/");

            console.log(token, user);

            setEmail("");
            setPassword("");
        } 
        catch (err) {

            console.log(err.message);
        }
    }

    useEffect(() => {
        document.title = "Login";
    }, [])

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