



// import axios from 'axios' ;
// import { useHistory } from 'react-router-dom'

// function Login() {


//   const history = useHistory();

//   const redirect= () =>{
//     history.push('/login');
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const email = formData.get('email');
//     const password = formData.get('password');
//     const bankAccountNumber = formData.get('bankAccountNumber');
//     try {
//       const response = await axios.post('/api/login', {
//         email,
//         password,
//         bankAccountNumber,
//       });
//       // If the login is successful, redirect the user to the home page
//       history.push('/home');
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input type="email" name="email" />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" name="password" />
//       </label>
//       <br />
//       <label>
//         Bank Account Number:
//         <input type="text" name="bankAccountNumber" />
//       </label>
//       <br />
//       <button type="submit">Log in</button>
//     </form>
//   );
// }


// import React,{ useState } from 'react'
// import { NavLink } from 'react-router-dom';

// // import log1 from "../Images/log1.png";
// import "./Login.css"


// export default function Login(){

//   const [errorMessages,setErrorMessages] = useState({});
//   const [isSubmitted,setIsSubmitted] = useState(false);


//   const database = [
//     {
//     username: "user1",
//     password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//       }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     var{ uname,pass } = document.forms[0];

//     const userData = database.find((user) => user.username === uname.value);

//     if(userData){
//       if(userData.password  !== pass.value) {
//         setErrorMessages({ name:"pass",message: errors.pass}) ;
//       }else{
//         setIsSubmitted(true);
//       }
//     }else{
//       setErrorMessages({ name:"uname",message:errors.uname});
//     }
//   };

//   const renderErrorMessage = (name) =>
//   name === setErrorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );

//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className = "input-container">
//         <i class="zmdi zmdi-account-box material-icons-name"></i>
//           <label id = "uname">Username </label>
//           <input  type = "text" name ="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//         <i class="zmdi zmdi-account-box material-icons-name"></i>
//           <label id="pswd">Password</label>
//           <input type="password" name ="pass" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="button-container">
//           <input className = "btn"  type ="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return(
//     <div className="Login">
//       <div className = "login-form mt-5">
//         <div className ="title">LOGIN</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//         <NavLink to = "/registration" className="registration-link">Create an account</NavLink>
//       </div>
//     </div>
//   )
// };






// const Login = () => {
//   return (
//     <>
//       <section className = "login">
//             <div className="container mt-5">
//                 <div className="login-content">
//                   <div classname = "login-content">
//                     <figure>
//                       {/* <img className ="log"src = {log1} alt = "loginpic" />  */}
//                     </figure>

//                   </div>
//                     <div className="login-form">
//                         <h2 className="form-title" >Login</h2>
//                         <form className="login-form" id = "login-form">

//                             <div className="form-group">
//                                 <label htmlFor="email">
//                                 <i class="zmdi zmdi-account-box material-icons-name"></i>
//                                 </label>
//                                 <input type ="text" name ="email" id = "email" autoComplete="off" placeholder = "Enter your email"/>
//                             </div>

//                             <div className="form-group" >
//                                 <label htmlFor="Password">
//                                 <i class="zmdi zmdi-account-box material-icons-name"></i>
//                                 </label>
//                                 <input type ="text" name ="Password" id = "Password" autoComplete="off" placeholder = "Enter your Password"/>
//                             </div>
//                             <div className="form-group form-button">
//                                 <input type = "submit" name = "resiter" id = "register"className="form-submit" 
//                                 value = "Login" />
//                             </div>
//                             <NavLink to = "/registration" className="registration-image-link">Create an account</NavLink>
//                         </form>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     </>
//   )
// }

// export default Login


// import React, {  useState } from "react"
// import axios from "axios"
// import { Link } from 'react-router-dom';

// function Login() {

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

//       <h1>Login</h1>

//       <form action="POST">
//         <input type="email" onChnage={(e) => { setEmail(e.target.value) }} placeholder="Email" name="" id="" />
//         <input type="password" onChnage={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id="" />

//         <input type="submit" onClick={submit} />
//       </form>

//       <br />
//       <p> or </p>
//       <br />

//       <Link to="/registration">Registration Page</Link>
//     </div>
//   )
// }

// export default Login




// import React, {useState} from "react"
// import "./Login.css"
// import axios from "axios"
// import {  NavLink } from "react-router-dom"
// import { useNavigate } from "react-router-dom"

// const Login = ({ setLoginUser}) => {

//     const history = useNavigate()

//     const [ user, setUser] = useState({
//         email:"",
//         password:""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const login = () => {
//         axios.post("http://localhost:3000/Login", user)
//         .then(res => {
//             alert(res.data.message)
//             setLoginUser(res.data.user)
//             history.push("/")
//         })
//     }
     
    

//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <i class="zmdi zmdi-account-box material-icons-name"></i>
//             <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
//             <i class="zmdi zmdi-account-box material-icons-name"></i>
//             <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
//             <div className="button" onClick = {login}>Login</div>
//             <div>or</div>
//             {/* <div className="button" onClick={() => history.push("/register")}>Register</div> */}
//             <NavLink to = "/registration" className="registration-link">Create an account</NavLink>
//         </div>
//     )
// }

// export default Login


import React, {useState} from "react";
import axios from "axios";
import "./Login.css";
import {useNavigate} from "react-router";
//import "./backend/index";
// import { useHistory } from "react-router";


function Login(){
    const history=useNavigate();
   const[name,setName]=useState('')
    
    const[password,setPassword]=useState('')

    async function submit(e){
          e.preventDefault();

          try{

            await axios.post("http://localhost:4000/Login",{
                name,password
            })
            .then(res=>{
                if(res.data==="exist")
                {
                    
                    alert("Login successfully")
                    localStorage.setItem('token',res.data.token)
                    history('/')
                }
                else if(res.data==="not exist")
                {
                    alert("Email id or password is not valid")
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
        <div className="Login">
        <div className="login-form">
          <div className="title">LOGIN</div>
        <div className='form'>
             <form action="/test" method="post">
             <div className="input-container">
             <label id="uname" >Name</label>
            <input onChange={(e)=>{setName(e.target.value)}} className="input"
               placeholder="name" type="text" />
            </div>
  <div className="input-container">
    <label id="uname">Password</label>
    <input onChange={(e)=>{setPassword(e.target.value)}} className="input"
   placeholder="password" type="password" />
   </div>
   <div className="button-container">
    <input type="submit" onClick={submit}/>
    </div>
        </form> 
        </div>
        </div>
    </div>
    )
};

export default Login;