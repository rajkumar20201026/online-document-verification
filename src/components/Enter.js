import React, { useState } from 'react';
import { set, ref } from 'firebase/database';

import fireDB from '../firebase';

import University from './University';
import { useNavigate } from 'react-router';

function Enter() {

    const navigate = useNavigate();


    const [schoolname, setSchoolName] = useState(null);
    const [yearofpassing, setYearOfPassing] = useState(null);
    const [registration, setRegistration] = useState(null);
    const [roll, setRoll] = useState(null);
    const [nameofboard, setNameOfBoard] = useState(null);
    const [subjectof10th, setSubjectOf10th] = useState(null);
    const [totalmarks, setTotalMarks] = useState(null);
    const [percentage, setPercentage] = useState(null);
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
        if (id === "schoolname") {
            setSchoolName(value);
        }
        if (id === "yearofpassing") {
            setYearOfPassing(value);
        }
        if (id === "registration") {
            setRegistration(value);
        }
        if (id === "roll") {
            setRoll(value);
        }
        if (id === "nameofboard") {
            setNameOfBoard(value);
        }
        if (id === "subjectof10th") {
            setSubjectOf10th(value);
        }
        if (id === "totalmarks") {
            setTotalMarks(value);
        }
        if (id === "percentage") {
            setPercentage(value);
        }
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
        console.log(schoolname, yearofpassing, registration, roll, nameofboard, subjectof10th, totalmarks, percentage);
        const data2= {schoolname, yearofpassing, registration, roll, nameofboard, subjectof10th, totalmarks, percentage, firstName, degree, registrationno, studentid, rollno, dob, branch, email, finalresult};
        set(ref(fireDB, "Users1/raj1"),data2);
        navigate('/uploadfile/');
    }

    return (

        <div className="form">
            <h2>"Details of (12th/Enter) Examination"</h2>
            <div className="form-body">
                <br/>
                <div className="username">
                    <label className="form__label" for="schoolname">School Name: </label>
                    <input className="form__input" type="text" value={schoolname} onChange={(e) => handleInputChange(e)} id="schoolname" placeholder="schoolname" />
                </div>
                <br/>
                <div className="yearofpassing">
                    <label className="form__label" for="yearofpassing">Year Of Passing: </label>
                    <input type="text" name="" id="yearofpassing" value={yearofpassing} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="yearofpassing" />
                </div>
                <br/>
                <div className="registration">
                    <label className="form__label" for="registration">Registration : </label>
                    <input type="email" id="registration" className="form__input" value={registration} onChange={(e) => handleInputChange(e)} placeholder="registration" />
                </div>
                <br/>
                <div className="roll">
                    <label className="form__label" for="roll">Roll : </label>
                    <input className="form__input" type="roll" id="roll" value={roll} onChange={(e) => handleInputChange(e)} placeholder="roll" />
                </div>
                <br/>
                <div className="nameofboard">
                    <label className="form__label" for="nameofboard">Name Of Board: </label>
                    <input className="form__input" type="nameofboard" id="nameofboard" value={nameofboard} onChange={(e) => handleInputChange(e)} placeholder="nameofboard" />
                </div>
                <br/>
                <div className="subjectof10th">
                    <label className="form__label" for="subjectof10th">Subject Of 10th: </label>
                    <input className="form__input" type="subjectof10th" id="subjectof10th" value={subjectof10th} onChange={(e) => handleInputChange(e)} placeholder="subjectof10th" />
                </div>
                <br/>
                <div className="totalmarks">
                    <label className="form__label" for="totalmarks">Total Marks: </label>
                    <input className="form__input" type="totalmarks" id="totalmarks" value={totalmarks} onChange={(e) => handleInputChange(e)} placeholder="totalmarks" />
                </div>
                <br/>
                <div className="percentage">
                    <label className="form__label" for="percentage">Percentage: </label>
                    <input className="form__input" type="percentage" id="percentage" value={percentage} onChange={(e) => handleInputChange(e)} placeholder="percentage" />
                </div>
                <br/>
                <div />
                <button onClick={() => handleSubmit()} type="NEXT" class="btn"></button>
                <div className="form">
                    <h1>Details of College/University</h1>
                    <div className="form-body">
                        <br/>
                        <div className="username">
                            <label className="form__label" for="firstname">First Name:</label>
                            <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstname" placeholder="First Name" />
                        </div>
                        <br/>
                        <div className="father">
                            <label className="form__label" for="degree">Degree: </label>
                            <input type="text" name="degree" id="degree" value={degree} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="degree" />
                        </div>
                        <br/>
                        <div className="email">
                            <label className="form__label" for="email">Email: </label>
                            <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                        </div>
                        <br/>
                        <div className="mother">
                            <label className="form__label" for="registrationno">Registration No: </label>
                            <input className="form__input" type="registrationno" id="registrationno" value={registrationno} onChange={(e) => handleInputChange(e)} placeholder="registrationno" />
                        </div>
                        <br/>
                        <div className="studentid">
                            <label className="form__label" for="studentid">Student Id: </label>
                            <input className="form__input" type="studentid" id="studentid" value={studentid} onChange={(e) => handleInputChange(e)} placeholder="studentid" />
                        </div>
                        <br/>
                        <div className="rollno">
                            <label className="form__label" for="rollno">Roll No: </label>
                            <input className="form__input" type="rollno" id="rollno" value={rollno} onChange={(e) => handleInputChange(e)} placeholder="rollno" />
                        </div>
                        <br/>
                        <div className="dob">
                            <label className="form__label" for="dob">DOB: </label>
                            <input className="form__input" type="dob" id="dob" value={dob} onChange={(e) => handleInputChange(e)} placeholder="dob" />
                        </div>
                        <br/>
                        <div className="branch">
                            <label className="form__label" for="branch">Branch: </label>
                            <input className="form__input" type="branch" id="branch" value={branch} onChange={(e) => handleInputChange(e)} placeholder="branch" />
                        </div>
                        <br/>
                        <div className="state">
                            <label className="form__label" for="finalresult">Final Result: </label>
                            <input className="form__input" type="finalresult" id="finalresult" value={finalresult} onChange={(e) => handleInputChange(e)} placeholder="finalresult" />
                        </div>
                        <br/>
                    </div>
                    <br/>
                    <div >
                        <button onClick={handleSubmit} className="btn_1">NEXT </button>
                        
                    </div>
                </div>

            </div>

 </div>
    )
}

export default Enter;

