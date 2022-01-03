import { useState } from "react";


const submitCallback = (data) => {
    
    return data;

}


const useMergeState = () => {

    const [user, setUser] = useState({});
    const [finalData, setFinalData] = useState({});


    const handleChange = (e) => {
        e.persist()
        
        setUser(user => ({...user, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = submitCallback({...user});

        setFinalData(data);

        return
    }
    let contest = user;
    return [contest, handleChange, handleSubmit, finalData];

}

export default useMergeState;