// https://jaketrent.com/post/expose-enum-props-in-react/
import React from 'react';
import './Student.css';
import {getStudent} from '../../lib/api';
import { Link } from "react-router-dom";


export default class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: null,
            loading: false
        };
    }
    componentDidMount() {
        this.fetchUser().then();
    }
    async fetchUser() {
        this.setState({ loading: true });
        const id = this.props.match.params['id']
        const response = await getStudent(id);
        const student = response.data;
        this.setState({ student: student, loading: false });
    }
    render() {
        const { student, loading } = this.state;
        return (
            <div className="student">
                <div>
                    <Link to={`/students/sid/edit`}>
                        <button className="btn top-space">Edit</button>
                    </Link>
                    <button className="btn top-space left">Delete</button> {/* modal */}
                </div>
                <div className="top-space detail">Student details</div>
                {loading && <h5>Loading... </h5>}
                {!loading && student && (
                    <div className='student-table top-space'>
                        <div className='row'><span className="bold">ID:</span> {student[0].id}</div>
                        <div className='row'><span className="bold">First name:</span> {student[0].first_name}</div>
                        <div className='row'><span className="bold">Last name:</span> {student[0].last_name}</div>
                        <div className="row"><span className="bold">Created: </span> {student[0].created}</div>
                        <div className="row"><span className="bold">Last updated: </span> {student[0].last_update}</div>
                        <div className="academic row"><span className="bold">Skills: </span>
                            {Object.entries(student[0].skills[0]).map(([key, value]) =>
                                <div><span>&nbsp;</span>{key} (level: {value}), </div>)}
                        </div>
                        <div className="academic row"><span className="bold">Desired skills: </span>
                            {Object.entries(student[0].desired_skills[0]).map(([key, value]) =>
                                <div><span>&nbsp;</span>{key} (level: {value}), </div>)}</div>
                        <div className="academic row"><span className="bold">Courses of interest: </span>
                            {student[0].courses_of_interest.map(student =>
                                <div><span>&nbsp;</span>{student}, </div>)}</div>
                    </div>
                )}
            </div>
        );
    }
}

