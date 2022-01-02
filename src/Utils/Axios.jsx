import axios from "axios";



export const getAllContests = () => {

    return axios.get("https://masai-sms.herokuapp.com/contests");
};

export const addNewContest = ( payload ) => {

    return axios.post("https://masai-sms.herokuapp.com/contests", payload);
};

export const removeAContest = ( id ) => {

    return axios.delete(`https://masai-sms.herokuapp.com/contests/${id}`);
};

export const updateAContest = ( id, payload ) => {

    return axios.patch(`https://masai-sms.herokuapp.com/contests/${id}`, payload);
};




export const getAllStudents = () => {

    return axios.get("https://masai-sms.herokuapp.com/students");
};

export const addNewStudent = ( payload ) => {

    return axios.post(`https://masai-sms.herokuapp.com/students`, payload);
};

export const removeAStudent = ( id ) => {

    return axios.delete(`https://masai-sms.herokuapp.com/students/${id}`);
};

export const updateAStudent = ( id, payload ) => {

    return axios.patch(`https://masai-sms.herokuapp.com/students/${id}`, payload);
};

export const studentLogin = ( payload ) => {

    return axios.post('https://masai-sms.herokuapp.com/studentlogin', payload);
};

export const adminLogin = ( payload ) => {

    return axios.post('https://masai-sms.herokuapp.com/adminlogin', payload);
}