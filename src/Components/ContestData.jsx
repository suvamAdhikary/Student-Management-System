import { useEffect, useState } from "react";
import { getAllContests, removeAContest } from "../Utils/Axios";


const ContestData = () => {
    const [contestData, setContestData] = useState([]);
    let count = 0;
    const getData = async () => {
        
        try {

            const { data : {data} } = await getAllContests();

            setContestData(data);

        }
        catch (err) {
            console.log(err);
        }
    }

    const handleRemove = async (id) => {

        try{

            await removeAContest(id);

            count++;
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        let timerId = setTimeout(getData(), 500);

        clearTimeout(timerId);

    }, [count])

    return (<>
        {contestData.map((contest) => (
            <div key={contest._id}>
                <h3>{contest.title}</h3>
                <p>{contest.type}</p>
                <p>{contest.tags.join(" ")}</p>
                <p>{contest.time}</p>
                <p>{contest.deadline}</p>
                <button onClick={() => handleRemove(contest._id) } >REMOVE</button>
            </div>
        ))}
    </>)
}

export default ContestData;