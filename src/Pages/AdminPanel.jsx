import { useState } from "react";
import ContestData from "../Components/ContestData";
import NewContest from "../Components/NewContest";
import NewStudent from "../Components/NewStudent";
import StudentData from "../Components/StudentData";


const AdminPanel = () => {
    const [smsForm, setSmsForm] = useState("contest");

    return (<>
        <div>
            <div><h1>ADMIN PANEL</h1></div>
            <div>
                <div className="admin__main--left" >
                    <div>
                        <div>
                            <div onClick={() => setSmsForm("addstudent")} >STUDENTS</div>
                            <br />
                            <div onClick={() => setSmsForm("contest")} >CONTESTS</div>
                        </div>
                        <br />
                        <div>
                            {
                                smsForm !== "contest" ?
                                <StudentData /> :
                                <ContestData />
                            }
                        </div>
                    </div>
                </div>
                <div className="admin__main--right" >
                    <div>
                        <div onClick={() => setSmsForm("addstudent")} >ADD STUDENT</div>
                        <br />
                        <div onClick={() => setSmsForm("contest")} >ADD CONTEST</div>
                    </div>
                    <br />
                    <div> 
                        {
                            smsForm !== "contest" ?
                            <NewStudent /> :
                            <NewContest />
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default AdminPanel;