import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SMSContext } from "../context/SMSContext";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    z-index: 9;
    top: 0px;
    
    width: 100vw;
    height: 6vh;
    background-color: skyblue;

    > header > nav {
        width: 100vw;
        padding: 0.5% 2%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 2%;
    } 
`;

export default function Navbar() {

    const { smsUserId } = useContext(SMSContext);
    
    // console.log(smsUserId);
    
    useEffect(() => {

        let timerId =  setTimeout( () => { return } , 500);

        clearTimeout(timerId);

    }, [smsUserId])

    return (<Wrapper>
        <header>
            <nav>
                <Link to="/" >HOME</Link>
                <Link to="/panel" >ADMIN PANEL</Link>
                <Link to="login" >{smsUserId === null ? 'LOGIN' : 'LOGOUT'}</Link>
            </nav>
        </header>
    </Wrapper>)
}
