import React, {useState} from 'react';
import { set ,ref} from 'firebase/database';
//import firedb from './MEPage';
//import './style.css'
import { useNavigate } from 'react-router';



function  Academic() {

    const navigate = useNavigate();

    const [schoolname, setSchoolName] = useState(null);
    const [yearofpassing, setYearOfPassing] = useState(null);
    const [registrationno, setRegistrationNo] = useState(null);
    const [rollno, setRollNo] = useState(null);
    const [nameofboard,setNameOfBoard] = useState(null);
    const [subjectof10th,setSubjectOf10th] = useState(null);
    const [totalmarks, setTotalMarks] = useState(null);
    const [percentage, setPercentage] = useState(null);

   

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "schoolname"){
            setSchoolName(value);
        }
        if(id === "yearofpassing"){
            setYearOfPassing(value);
        }
        if(id === "registrationno"){
            setRegistrationNo(value);
        }
        if(id === "rollno"){
            setRollNo(value);
        }
        if(id === "nameofboard"){
            setNameOfBoard(value);
        }
        if(id === "subjectof10th"){
            setSubjectOf10th(value);
        }
        if(id === "totalmarks"){
            setTotalMarks(value);
        }
        if(id === "percentage"){
            setPercentage(value);
        }

    }

    const handleSubmit  = () => {
        navigate('/Enter/')
        console.log(schoolname,yearofpassing,registrationno,rollno,nameofboard,subjectof10th,totalmarks,percentage);
    }

    

    return(
        
        <div className="form">
            <h1>ACADEMIC INFORMATION</h1>
             <h2>"Details of (10th/Materic) Examination"</h2>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="schoolname">School Name: </label>
                    <input className="form__input" type="text" value={schoolname} onChange = {(e) => handleInputChange(e)} id="schoolname" placeholder="schoolname"/>
                </div>
                <div className="yearofpassing">
                    <label className="form__label" for="yearofpassing">Year Of Passing: </label>
                    <input  type="text" name="" id="yearofpassing" value={yearofpassing}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="yearofpassing"/>
                </div>
                <div className="registrationno">
                    <label className="form__label" for="registrationno">Registration No: </label>
                    <input  type="email" id="registrationno" className="form__input" value={registrationno} onChange = {(e) => handleInputChange(e)} placeholder="registrationno"/>
                </div>
                <div className="rollno">
                    <label className="form__label" for="mother">Roll No: </label>
                    <input className="form__input" type="rollno"  id="rollno" value={rollno} onChange = {(e) => handleInputChange(e)} placeholder="rollno"/>
                </div>
                <div className="nameofboard">
                    <label className="form__label" for="nameofboard">Name Of Board: </label>
                    <input className="form__input" type="nameofboard" id="nameofboard" value={nameofboard} onChange = {(e) => handleInputChange(e)} placeholder="nameofboard"/>
                </div>
                <div className="subjectof10th">
                    <label className="form__label" for="subjectof10th">Subject Of 10th: </label>
                    <input className="form__input" type="subjectof10th" id="subjectof10th" value={subjectof10th} onChange = {(e) => handleInputChange(e)} placeholder="subjectof10th"/>
                </div>
                <div className="totalmarks">
                    <label className="form__label" for="totalmarks">Total Marks: </label>
                    <input className="form__input" type="totalmarks" id="totalmarks" value={totalmarks} onChange = {(e) => handleInputChange(e)} placeholder="totalmarks"/>
                </div>
                <div className="percentage">
                    <label className="form__label" for="percentage">Percentage: </label>
                    <input className="form__input" type="percentage" id="percentage" value={percentage} onChange = {(e) => handleInputChange(e)} placeholder="percentage"/>
                </div>
            </div>
            <div >
                <button onClick={handleSubmit} className="btn_1">NEXT</button>
            </div>
            
        </div>
       
    )       
}

export default Academic;

