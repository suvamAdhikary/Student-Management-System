


const Log = ({ setEmail, setPassword, email, password, handleLogin, heading }) => {

    return (<>
        <fieldset>
            <legend>{heading === 'student' ? "STUDENT LOGIN" : "ADMIN LOGIN"}</legend>
            <br />
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <br />
            <br />
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <br />
            <br />
            <button onClick={handleLogin} >LOGIN</button>
            <br />
            <br />
        </fieldset>    
    </>)
}

export default Log;