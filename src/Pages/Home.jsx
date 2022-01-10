import { useEffect } from "react";
import ContestData from "../Components/ContestData";




const Home = () => {

    
    useEffect(() => {

        // setTimeout({}, 500);
        // clearTimeout();
    }, [])

    return(<>
       <br />
       Masai Student Management System
       <br />
       <ContestData page="home" />
    </>)
}

export default Home;