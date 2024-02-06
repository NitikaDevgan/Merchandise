// import React from 'react'

// const Registration = () => {
//   return (
//     <>
//         <section className = "registration">
//             <div className="container1 mt-5">
//                 <div className="registration-content">
//                     <div className="registration-form">
//                         <h2 className="form-title" >Registration</h2>
//                         <form className="registration-form" id = "registration-form">
//                             <div className="form-group">
//                                 <label htmlFor="name">
//                                 <i class="zmdi zmdi-account material-icons-name"></i>
//                                 </label>
//                                 <input type ="text" name ="name" id = "name" autoComplete="off" placeholder = "Enter your name"/>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email">
//                                 <i class="zmdi zmdi-account-box material-icons-name"></i>
//                                 </label>
//                                 <input type ="text" name ="email" id = "email" autoComplete="off" placeholder = "Enter your email"/>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="Mobile">
//                                 <i class="zmdi zmdi-account-box material-icons-name"></i>
//                                 </label>
//                                 <input type ="text" name ="Mobile" id = "Mobile" autoComplete="off" placeholder = "Enter your Mobile Number"/>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="Password">
//                                 <i class="zmdi zmdi-account-box material-icons-name"></i>
//                                 </label>
//                                 <input type ="text" name ="Password" id = "Password" autoComplete="off" placeholder = "Enter your Password"/>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="Bank-details">
//                                 <i class="zmdi zmdi-account-box material-icons-name"></i>
//                                 </label>
//                                 <input type ="text" name ="Bank-details" id = "Bank-details" autoComplete="off" placeholder = "Enter your Bank-details"/>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="IFSC Code">
//                                 <i class="zmdi zmdi-account-box material-icons-name"></i>
//                                 </label>
//                                 <input type ="text" name ="IFSC Code" id = "IFSC Code" autoComplete="off" placeholder = "Enter your IFSC Code"/>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="Branch name">
//                                 <i class="zmdi zmdi-account-box material-icons-name"></i>
//                                 </label>
//                                 <input type ="text" name ="Branch name" id = "Branch name" autoComplete="off" placeholder = "Enter your Branch name"/>
//                             </div>
//                             <div className="form-group form-button">
//                                 <input type = "submit" name = "register" id = "register"className="form-submit" 
//                                 value = "Register" />
//                             </div>
//                         </form>
//                     </div>

//                 </div>

//             </div>
//         </section>
//       </>
//   )
// }

// export default Registration





// import React, { useState } from "react"
// import axios from "axios"
// import {  Link } from 'react-router-dom';

// function Registration() {

//   const[email,setEmail] = useState('')
//   const[password,setPassword] = useState('')

//   async function submit(e) {
//      e.preventDefault();
//      try{
//             await axios.post("http://localhost:3000",{
//               email,password
//             })
//      }catch{
//           console.log(e)
//      }
//   }
//   return (
//     <div className="login">

//       <h1>Registration</h1>

//       <form action="POST">
//         <input type="email" onChnage={(e) => { setEmail(e.target.value) }} placeholder="Email" name="" id="" />
//         <input type="password" onChnage={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id="" />

//         <input type="submit" onClick={submit} />
//       </form>

//       <br />
//       <p> or </p>
//       <br />

//       <Link to="/login">Login Page</Link>
//     </div>
//   )
// }

// export default Registration


// import React, { useState } from "react"
// import "./Registration.css"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// const Registration = () => {

//     const history = useNavigate()

//     const [ user, setUser] = useState({
//         name: "",
//         email:"",
//         password:"",
//         reEnterPassword: ""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const register = () => {
//         const { name, email, password, reEnterPassword } = user
//         if( name && email && password && (password === reEnterPassword)){
//             axios.post("http://localhost:3000/Registeration", user)
//             .then( res => {
//                 alert(res.data.message)
//                 history.push("/Login")
//             })
//         } else {
//             alert("invalid input")
//         }
        
//     }

//     return (
//         <div className="register">
//             {console.log("User", user)}
//             <h1>Register</h1>
//             <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
//             <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
//             <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
//             <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
//             {/* <input type="Bankdetails" name="Bankdetails"  placeholder="Enter Bank Details" onChange={ handleChange }></input>
//             <input type="IFSCcode" name="IFSCcode"  placeholder="Enter IFSC Code" onChange={ handleChange }></input>
//             <input type="BranchName" name="BranchName" placeholder="Enter Branch Name" onChange={ handleChange }></input> */}
            
//             <div className="button" onClick={register} >Register</div>
//             {/* <div>or</div>
//             <div className="button" onClick={() => history.push("/login")}>Login</div> */}
//         </div>
//     )
// }

// export default Registration



import React, {useState} from "react";
import axios from "axios";
import "./Registration.css";
import {useNavigate} from "react-router";
// import "./backend/index";
// import { useNavigate } from "react-router";
// import Login from "./test";
// import Navbar from "./Navbar";

function Registration(){
   const history=useNavigate();
   const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    async function submit(e){
          e.preventDefault();

          try{

            await axios.post("http://localhost:4000/Registration",{
                name,email,password
            })
            .then(res=>{
                if(res.data==="exist")
                { 
                    alert('user already exists');
                     
                }
                else if(res.data==="not exist")
                {
                    alert("User Registered successfully");
                    history('/Login')
                }
            })
            .catch(e=>{
                alert("wrong details")
            })
          }
          catch(e){
            console.log(e);
          }

    }

    return(
        <div className="signup">
        <div className="signup-container">
             <div>
         <h1 id="register">SIGN UP</h1>
             </div>
       
             <form method="post">
             <label className="label" >Name</label>
            <input onChange={(e)=>{setName(e.target.value)}} className="input"
               placeholder="name" type="text" />
            <label className="label" >Email</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} className="input"
             placeholder="email" type="email" />
    
         <label className="label">Password</label>
        <input onChange={(e)=>{setPassword(e.target.value)}} className="input"
          placeholder="password" type="password" />
          <div>
         <input type="submit" onClick={submit} className="btn"/>
         </div>
        </form> 
        </div>
        </div>
    )
};

export default Registration;