import React from "react";
import {GetStudents} from '../../lib/api';
import './Students.css';
import {Link} from "react-router-dom";

export default class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: null,
            loading: false,
        };
    }
    componentDidMount() {
        this.fetchBooks().then();
    }
    async fetchBooks() {
        this.setState({ loading: true });
        const response = await GetStudents();
        const students = response.data;
        this.setState({ students: students, loading: false });
    }
    render() {
        const { students, loading } = this.state;
        return (
            <div className='students'>
                <Link to='/students/addnew' className='add-link'>
                    <button className='addBtn'>Add Student</button>
                </Link>
                <div className='reader-info'>Click student for details and editing</div>
                {loading && <h5>Loading... </h5>}
                {!loading && students && (
                    <div className='students-table'>
                        <div className='table-header'>
                            <div className='row-id'>ID</div>
                            <div className='row-first'>First Name</div>
                            <div className='row-last'>Last Name</div>
                        </div>
                        {students.map(student =>
                            <Link to={`/students/sid${student.id}`} className='table-link' key={student.id}>
                                <div className='table-row'>
                                    <div className='row-id'>{student.id}</div>
                                    <div className='row-first'>{student.first_name}</div>
                                    <div className='row-last'>{student.last_name}</div>
                                </div>
                            </Link>)}
                    </div>
                )}
            </div>
        );
    }
}