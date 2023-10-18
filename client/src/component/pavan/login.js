import React, { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
function Login() {

    //const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [typeofacc,setTypeofacc] = useState("student")

    const submit = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:5000',{
            method:"POST",
            headers : {
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                email,password,typeofacc
            })
        });
    }

    return (
        <div className="login">

            <h1>Login</h1>

            <form method="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <select name="typeOfAcc" onChange={(e)=>{setTypeofacc(e.target.value) ; console.log(e.target.value)}}>
                     <option  value="student"  >Student</option>
                     <option value="tutor"  >Tutor</option>
                </select>
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
     
}

export default Login;