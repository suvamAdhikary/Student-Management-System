import { useEffect, useState } from "react";
import { getAllStudents, removeAStudent } from "../Utils/Axios";


const StudentData = () => {
    const [studentData, setStudentData] = useState([]);

    const getData = async () => {
        
        try {

            const { data : {data} } = await getAllStudents();

            setStudentData(data);

        }
        catch (err) {
            console.log(err);
        }
    }

    const handleRemove = async (id) => {

        try{

            await removeAStudent(id);


        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        let timerId = setTimeout(getData(), 500);

        clearTimeout(timerId);

    }, [])

    return (<>
        {studentData.map((student) => (
            <div key={student._id}>
                <h3>{student.name}</h3>
                <p>{student.email}</p>
                <p>{student.contact}</p>
                <p>{student.age}</p>
                <button onClick={() => handleRemove(student._id) } >REMOVE</button>
            </div>
        ))}
    </>)
}

export default StudentData;