import { useEffect, useRef, useState } from "react";
import { getAllContests, removeAContest } from "../Utils/Axios";


const ContestData = ({page}) => {
    const [contestData, setContestData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [sortDeadLine, setSortDeadLine] = useState(false);
    const [filter, setFilter] = useState(null);

    const contestPages = useRef(0);

    const handleRemove = async (id) => {

        try{

            await removeAContest(id);

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        setTimeout( async () => {
        
            try {

                const { data : {data, pages} } = await getAllContests( pageNo );
                setContestData(data);
                contestPages.current = pages;
                
            }
            catch (err) {
                console.log(err);
            }
        }, 500);

    }, [pageNo])

    return (<>
        <div>
            <div>
                <h3>SORT BY</h3>
                <button onClick={() => setSortDeadLine(!sortDeadLine)} >DEADLINE</button>
            </div>
            <div>
                <h3>FILTER BY</h3>
                <button onClick={() => {setFilter(filter === "dsa" ? null : "dsa")}} >DSA</button>
                <button onClick={() => {setFilter(filter === "coding" ? null : "coding")}} >CODING</button>
            </div>
        </div>
        {contestData
            .filter((el) => filter !== null ? el.type === filter : 'undefined')
            .sort((a, b) => sortDeadLine && a.deadline - b.deadline)
            .map((contest) => (
            <div key={contest._id}>
                <h3>{contest.title}</h3>
                <p>{contest.type}</p>
                <p>{contest.tags.join(" ")}</p>
                <p>{contest.time}</p>
                <p>{contest.deadline}</p>
                {page !== 'home' && <button onClick={() => handleRemove(contest._id) } >REMOVE</button>}
            </div>
        ))}
        <div>
            <button disabled={pageNo === 1} onClick={() => setPageNo(pageNo - 1)} >PREV</button>
            <button disabled={pageNo === contestPages.current} onClick={() => setPageNo(pageNo + 1)} >NEXT</button>
        </div>
    </>)
}

export default ContestData;