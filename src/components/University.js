import React, { useState } from 'react';
import { set, ref } from 'firebase/database';
import Academic from './Academic';



function University() {

    const [firstName, setFirstName] = useState(null);
    const [degree, setDegree] = useState(null);
    const [registrationno, setRegistrationNo] = useState(null);
    const [studentid, setStudentId] = useState(null);
    const [rollno, setRollNo] = useState(null);
    const [dob, setDOB] = useState(null);
    const [branch, setBranch] = useState(null);
    const [email, setEmail] = useState(null);
    const [finalresult, setFinalResult] = useState(null);


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "degree") {
            setDegree(value);
        }
        if (id === "registrationno") {
            setRegistrationNo(value);
        }
        if (id === "studentid") {
            setStudentId(value);
        }
        if (id === "rollno") {
            setRollNo(value);
        }
        if (id === "dob") {
            setDOB(value);
        }
        if (id === "branch") {
            setBranch(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "finalresult") {
            setFinalResult(value);
        }


    }

    const handleSubmit = () => {
        console.log(firstName, degree, registrationno, studentid, rollno, dob, branch, email, finalresult);

    }



    return (

        <div className="form">
            <h1>Details of College/University</h1>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name:</label>
                    <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                </div>
                <div className="father">
                    <label className="form__label" for="degree">Degree: </label>
                    <input type="text" name="degree" id="degree" value={degree} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="degree" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email: </label>
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div className="mother">
                    <label className="form__label" for="registrationno">Registration No: </label>
                    <input className="form__input" type="registrationno" id="registrationno" value={registrationno} onChange={(e) => handleInputChange(e)} placeholder="registrationno" />
                </div>
                <div className="studentid">
                    <label className="form__label" for="studentid">Student Id: </label>
                    <input className="form__input" type="studentid" id="studentid" value={studentid} onChange={(e) => handleInputChange(e)} placeholder="studentid" />
                </div>
                <div className="rollno">
                    <label className="form__label" for="rollno">Roll No: </label>
                    <input className="form__input" type="rollno" id="rollno" value={rollno} onChange={(e) => handleInputChange(e)} placeholder="rollno" />
                </div>
                <div className="dob">
                    <label className="form__label" for="dob">DOB: </label>
                    <input className="form__input" type="dob" id="dob" value={dob} onChange={(e) => handleInputChange(e)} placeholder="dob" />
                </div>
                <div className="branch">
                    <label className="form__label" for="branch">Branch: </label>
                    <input className="form__input" type="branch" id="branch" value={branch} onChange={(e) => handleInputChange(e)} placeholder="branch" />
                </div>
                <div className="state">
                    <label className="form__label" for="finalresult">Final Result: </label>
                    <input className="form__input" type="finalresult" id="finalresult" value={finalresult} onChange={(e) => handleInputChange(e)} placeholder="finalresult" />
                </div>
            </div>
            <div >
               <button onClick={handleSubmit} class="btn"></button>
            </div>
           

        </div>


    )
}

export default University;

