import React, {useState} from 'react';
import { set ,ref} from 'firebase/database';
import { useNavigate } from 'react-router';
import fireDB from '../firebase';



function Application() {

    const navigate = useNavigate();
    
    const [firstName, setFirstName] = useState(null);
    const [father, setFather] = useState(null);
    const [email, setEmail] = useState(null);
    const [mother,setMother] = useState(null);
    const [village,setVillage] = useState(null);
    const [nationality, setNationality] = useState(null);
    const [religion, setReligion] = useState(null);
    const [category, setCategory] = useState(null);
    const [state, setState] = useState(null);
    const [mobileno, setMobileno] = useState(null);
    const [district, setDistrict] = useState(null);
    const [pincode, setPincode] = useState(null);
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
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "father"){
            setFather(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "mother"){
            setMother(value);
        }
        if(id === "village"){
            setVillage(value);
        }
        if(id === "nationality"){
            setNationality(value);
        }
        if(id === "nationality"){
            setNationality(value);
        }
        if(id === "religion"){
            setReligion(value);
        }
        if(id === "category"){
            setCategory(value);
        }
        if(id === "state"){
            setState(value);
        }
        if(id === "mobileno"){
            setMobileno(value);
        }
        if(id === "district"){
            setDistrict(value);
        }
        if(id === "pincode"){
            setPincode(value);
        }
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
        console.log(firstName,father,email,mother,village,nationality,religion,category,state,mobileno,district,pincode);
        const data1= { firstName,father,email,mother,village,nationality,religion,category,state,mobileno,district,pincode,schoolname,yearofpassing,registrationno,rollno,nameofboard,subjectof10th,totalmarks,percentage};
        set(ref(fireDB, "Users/raj"),data1);
    }

    return(
        
        <div className="form">
            <h1>STUDENT INFORMATION</h1>
             <h2>"personal information"</h2>
            <div className="form-body">
                <br/>
                <div className="username">
                    <label className="form__label" for="firstName">First Name:</label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstname" placeholder="First Name"/>
                </div>
                <br/>
                <div className="father">
                    <label className="form__label" for="father">Father's Name: </label>
                    <input  type="text" name="" id="father" value={father}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="father"/>
                </div>
                <br/>
                <div className="email">
                    <label className="form__label" for="email">Email: </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <br/>
                <div className="mother">
                    <label className="form__label" for="mother">Mother's Name </label>
                    <input className="form__input" type="mother"  id="mother" value={mother} onChange = {(e) => handleInputChange(e)} placeholder="mother"/>
                </div>
                <br/>
                <div className="village">
                    <label className="form__label" for="village">Village </label>
                    <input className="form__input" type="village" id="village" value={village} onChange = {(e) => handleInputChange(e)} placeholder="village"/>
                </div>
                <br/>
                <div className="nationality">
                    <label className="form__label" for="nationality">Nationality: </label>
                    <input className="form__input" type="nationality" id="nationality" value={nationality} onChange = {(e) => handleInputChange(e)} placeholder="nationality"/>
                </div>
                <br/>
                <div className="religion">
                    <label className="form__label" for="religion">Religion: </label>
                    <input className="form__input" type="religion" id="religion" value={religion} onChange = {(e) => handleInputChange(e)} placeholder="religion"/>
                </div>
                <br/>
                <div className="category">
                    <label className="form__label" for="category">Category: </label>
                    <input className="form__input" type="category" id="category" value={category} onChange = {(e) => handleInputChange(e)} placeholder="category"/>
                </div>
                <br/>
                <div className="state">
                    <label className="form__label" for="state">State: </label>
                    <input className="form__input" type="state" id="state" value={state} onChange = {(e) => handleInputChange(e)} placeholder="state"/>
                </div>
                <br/>
                <div className="mobileno">
                    <label className="form__label" for="mobileno">Mobile No: </label>
                    <input className="form__input" type="mobileno" id="mobileno" value={mobileno} onChange = {(e) => handleInputChange(e)} placeholder="mobileno"/>
                </div>
                <br/>
                <div className="district">
                    <label className="form__label" for="district">District: </label>
                    <input className="form__input" type="district" id="district" value={district} onChange = {(e) => handleInputChange(e)} placeholder="district"/>
                </div>
                <br/>
                <div className="pincode">
                    <label className="form__label" for="pincode">Pincode: </label>
                    <input className="form__input" type="pincode" id="pincode" value={pincode} onChange = {(e) => handleInputChange(e)} placeholder="pincode"/>
                </div>
                <br/>
            </div>
            {/* <div class="">
                <button onClick={()=>handleSubmit()} type="Next" className="btn_1">Submit</button>
            </div> */}
            <div className="form">
            <h1>ACADEMIC INFORMATION</h1>
             <h2>"Details of (10th/Materic) Examination"</h2>
            <div className="form-body">
                <br/>
                <div className="username">
                    <label className="form__label" for="schoolname">School Name: </label>
                    <input className="form__input" type="text" value={schoolname} onChange = {(e) => handleInputChange(e)} id="schoolname" placeholder="schoolname"/>
                </div>
                <br/>
                <div className="yearofpassing">
                    <label className="form__label" for="yearofpassing">Year Of Passing: </label>
                    <input  type="text" name="" id="yearofpassing" value={yearofpassing}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="yearofpassing"/>
                </div>
                <br/>
                <div className="registrationno">
                    <label className="form__label" for="registrationno">Registration No: </label>
                    <input  type="email" id="registrationno" className="form__input" value={registrationno} onChange = {(e) => handleInputChange(e)} placeholder="registrationno"/>
                </div>
                <br/>
                <div className="rollno">
                    <label className="form__label" for="mother">Roll No: </label>
                    <input className="form__input" type="rollno"  id="rollno" value={rollno} onChange = {(e) => handleInputChange(e)} placeholder="rollno"/>
                </div>
                <br/>
                <div className="nameofboard">
                    <label className="form__label" for="nameofboard">Name Of Board: </label>
                    <input className="form__input" type="nameofboard" id="nameofboard" value={nameofboard} onChange = {(e) => handleInputChange(e)} placeholder="nameofboard"/>
                </div>
                <br/>
                <div className="subjectof10th">
                    <label className="form__label" for="subjectof10th">Subject Of 10th: </label>
                    <input className="form__input" type="subjectof10th" id="subjectof10th" value={subjectof10th} onChange = {(e) => handleInputChange(e)} placeholder="subjectof10th"/>
                </div>
                <br/>
                <div className="totalmarks">
                    <label className="form__label" for="totalmarks">Total Marks: </label>
                    <input className="form__input" type="totalmarks" id="totalmarks" value={totalmarks} onChange = {(e) => handleInputChange(e)} placeholder="totalmarks"/>
                </div>
                <br/>
                <div className="percentage">
                    <label className="form__label" for="percentage">Percentage: </label>
                    <input className="form__input" type="percentage" id="percentage" value={percentage} onChange = {(e) => handleInputChange(e)} placeholder="percentage"/>
                </div>
                
            </div>
            <div >
                <button onClick={handleSubmit} className="btn_1">NEXT</button>
            </div>
            
        </div>
        </div>

       
    )       
}

export default Application;

