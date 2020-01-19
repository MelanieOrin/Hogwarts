import axios from 'axios'

export function GetStudents(){
    return axios.get('http://localhost:7000/students')
}

export function getStudent(id) {
    return axios.get(`http://localhost:7000/students/sid?id=${id}`);
}

export function AddStudent(newStudent) {
    return axios.post(`http://localhost:7000/students/addnew`, newStudent);
}

// export function GetAcademic(){
//     return axios.get('http://localhost:7000/students/addnew')
// }