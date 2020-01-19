import React from "react";
import './EditStudent.css';

export default function EditStudent(){
    return (
        <div className='edit'>
            <div className='edit-info'>Edit student details</div>
            <div className='inrow'>
            <button className='save addspace'>Save</button>
            <button className='save'>Cancel</button>
            </div>
        </div>
    )
}