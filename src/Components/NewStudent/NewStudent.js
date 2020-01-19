import React from "react";
import './NewStudent.css';
import {AddStudent} from '../../lib/api';


export default class NewStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            datenow: new Date().toISOString().substring(0, 10),
            update: new Date().toISOString().substring(0, 10),
            skills: [{'': ''}],
            desiredSkills: [{'': ''}],
            courses_of_interest: [''],
        }
    }
    handleFirstNameChange(event) {
        this.setState({ first: event.target.value });
    }
    handleLastNameChange(event) {
        this.setState({ last: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const newStudent = { "first_name": this.state.first, "last_name": this.state.last, "created": this.state.datenow, "last_update": this.state.update, "skills": this.state.skills , "desired_skills": this.state.desiredSkills , "courses_of_interest": this.state.courses_of_interest  }
        AddStudent(newStudent)
    }
    render() {
        const { first, last } = this.state;
        const skillList = ["Alchemy", "Animation", "Conjuror", "Disintegration", "Elemental", "Healing", "Illusion", "Immortality",
            "Invisibility", "Invulnerability", "Necromancer", "Omnipresent", "Omniscient", "Poison", "Possession",
            "Self-detonation", "Summoning", "Water breathing"]
        const skillCheck = []
        for (var i = 0; i < skillList.length; i++) {
            skillCheck.push(
                <label>
                    <input
                        type="checkbox"
                        name={skillList[i]} />
                    {skillList[i]}</label>);
        }

        
        const radioBtnsSkill = []
        for (var i = 0; i < skillList.length; i++) {
            for (var a = 0; a < 5; a++) {
                radioBtnsSkill.push(
                    <label>
                        <input
                            type="radio"
                            name={`${skillList[i]}Skill`}
                            value={`${a + 1}`}
                        />{`Level ${a + 1}`}</label>);
            }
        }
        const radioBtnsDesired = []
        for (var i = 0; i < skillList.length; i++) {
            for (var a = 0; a < 5; a++) {
                radioBtnsDesired.push(
                    <label>
                        <input
                            type="radio"
                            name={`Desire${skillList[i]}`}
                            value={`${a + 1}`}
                        /> {`Level ${a + 1}`}</label>);
            }
        }
        const courseList = ["Alchemy basics", "Alchemy advanced", "Magic for day-to-day life",
            "Magic for medical professionals", "Dating with magic",]
        const courseCheck = []
        for (var i = 0; i < courseList.length; i++) {
            courseCheck.push(
                <label>
                    <input
                        type="checkbox"
                        name={courseList[i]}
                    />{courseList[i]}</label>);
        }
        return (
            <form className='new-student' onSubmit={event => this.handleSubmit(event)}>
                <label> First Name
                <input
                        type="text"
                        value={first}
                        name="first"
                        className='space'
                        onChange={event => this.handleFirstNameChange(event)}
                    /></label>
                <label> Last Name
                <input
                        type="text"
                        value={last}
                        onChange={event => this.handleLastNameChange(event)}
                    /></label>
                <div>Courses of interest</div>
                <div>{courseCheck}</div>
                <div>Skills/Desired skills</div>
                <div>{skillList.map((skill, i)=> <label key={i}><input type="checkbox" name={skill}/>{skill}</label>)}
                    {/* <div>{radioBtnsSkill}</div>
                    <div>{radioBtnsDesired}</div> */}
                </div>
                <input type="submit" value="Submit" className='submitBtn' />
            </form>
        );
    }
}


