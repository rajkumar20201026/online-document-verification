import { onValue ,ref} from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fireDB from '../firebase';

const User = () => {
  const [user,setuser]=useState({name:"",email:""});
 
  useEffect(()=>{
    onValue(ref(fireDB, "Users/raj") ,(snapshot)=>{
      const data1= snapshot.val().name;
      const data2= snapshot.val().email;
      setuser({name:data1,email:data2 })
    })
  })

    return (

    
    <div>
      <h1>Home</h1>
        <div class="jbb">uuiduduihdi</div>
      <h3>Name : {user.name} </h3>
      <h3>Email : {user.email}</h3>
    
      <h3><Link to='/' >Logout</Link></h3>
    </div>
  )
}

export default User;


