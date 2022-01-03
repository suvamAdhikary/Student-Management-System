
import { addNewStudent } from "../Utils/Axios";
import useMergeState from "../Utils/useMergeState";


const NewStudent = () => {

    const [user, handleChange ] = useMergeState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await addNewStudent(user);

        console.log(data);
    }

    return <>
        <fieldset>
            <legend>ADD NEW STUDENT</legend>

            <form onSubmit={(e) => handleSubmit(e)} >

                <fieldset>
                    <legend>NAME</legend>
                    <input
                        type="text"
                        name="name"
                        placeholder="FULL NAME"
                        value={user?.name}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <legend>CITY</legend>
                    <input
                        type="text"
                        name="city"
                        placeholder="CITY"
                        value={user?.city}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <legend>AGE</legend>
                    <input
                        type="text"
                        name="age"
                        placeholder="AGE"
                        value={user?.age}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <legend>EDUCATION</legend>
                    <input
                        type="text"
                        name="education"
                        placeholder="EDUCATION"
                        value={user?.education}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <legend>GENDER</legend>
                    <select
                        name="gender"
                        value={user?.gender}
                        onChange={handleChange}
                    >
                        <option value="">SELECT ONE</option>
                        <option value="male">MALE</option>
                        <option value="female">FEMALE</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>CONTACT</legend>
                    <input
                        type="tel"
                        name="contact"
                        placeholder="CONTACT"
                        value={user?.contact}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <legend>EMAIL</legend>
                    <input
                        type="email"
                        name="email"
                        placeholder="EMAIL"
                        value={user?.email}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <legend>PASSWORD</legend>
                    <input
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        value={user?.password}
                        onChange={handleChange}
                    />
                </fieldset>
                <input
                    type="submit"
                    value="SUBMIT"
                />
            </form>
        </fieldset>
    </>
}


export default NewStudent;