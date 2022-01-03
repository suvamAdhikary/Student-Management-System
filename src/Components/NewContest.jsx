import { addNewContest } from "../Utils/Axios";
import useMergeState from "../Utils/useMergeState";


const NewContest = () => {

    const [ contest, handleChange ] = useMergeState();


    const handleSubmit = async (e) => {
        
        e.preventDefault();
        
        try {

            await addNewContest(contest);

        }
        catch (err) {
            console.log(err);
        }
    }

    return <>
        <fieldset>
            <legend>ADD NEW CONTEST</legend>

            <form onSubmit={(e) => handleSubmit(e)} >

                <fieldset>
                    <legend>TITLE</legend>
                    <input
                        type="text"
                        name="title"
                        placeholder="TITLE"
                        value={contest?.title}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <legend>TYPE</legend>
                    <select
                        name="type"
                        value={contest?.type}
                        onChange={handleChange}
                    >
                        <option value="">SELECT ONE</option>
                        <option value="dsa">DSA</option>
                        <option value="coding">CODING</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>DEADLINE</legend>
                    <input
                        type="datetime-local"
                        name="deadline"
                        placeholder="DEADLINE"
                        value={contest?.deadline}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <legend>TAGS</legend>
                    <input
                        type="text"
                        name="tags"
                        placeholder="TAGS"
                        value={contest?.tags}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <legend>TIME</legend>
                    <input
                        type="time"
                        name="time"
                        placeholder="TIME"
                        value={contest?.time}
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


export default NewContest;