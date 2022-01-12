import { useEffect, useRef, useState } from "react";
import { getAllStudents, removeAStudent } from "../Utils/Axios";


const StudentData = () => {
    const [studentData, setStudentData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [nameSort, setNameSort] = useState(false);
    const [ageSort, setAgeSort] = useState(false);

    const studentPages = useRef(0);

    const handleRemove = async (id) => {

        try{

            await removeAStudent(id);


        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        setTimeout( async () => {
        
            try {
    
                const { data : {data, pages} } = await getAllStudents( pageNo );
    
                setStudentData(data);
    
                studentPages.current = pages;
    
            }
            catch (err) {
                console.log(err);
            }
        }, 500);


    }, [pageNo, nameSort, ageSort])

    return (<>
        <div>
            <h3>SORT BY</h3>
            <button onClick={() => setNameSort(!nameSort)} >NAME</button>
            <button onClick={() => setAgeSort(!ageSort)} >AGE</button>
        </div>
        {studentData
            .sort((a, b) => nameSort && a.name.charCodeAt(0) - b.name.charCodeAt(0))
            .sort((a, b) =>  ageSort && +a.age - +b.age)
            .map((student) => (
            <div key={student._id}>
                <h3>{student.name}</h3>
                <p>{student.email}</p>
                <p>{student.contact}</p>
                <p>{student.age}</p>
                <button onClick={() => handleRemove(student._id) } >REMOVE</button>
            </div>
        ))}
        <div>
            <button disabled={pageNo === 1} onClick={() => setPageNo(pageNo - 1)} >PREV</button>
            <button disabled={pageNo === studentPages.current} onClick={() => setPageNo(pageNo + 1)} >NEXT</button>
        </div>
    </>)
}

export default StudentData;