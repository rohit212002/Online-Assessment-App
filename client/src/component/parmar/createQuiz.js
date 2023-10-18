import React, { useEffect, useState } from "react"

function Quizs(){
    const [subject,setSubject] = useState('');

    const createquiz = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:5000/createquiz',{
            method:"POST",
            headers : {
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                subject
            })
        });
    }
    return (
       <div className="login">
             <h1>Welcome to Create Quiz Page</h1>
            <form method="POST">
                  <input type="text" onChange = { (e) => {setSubject(e.target.value)   }} placeholder="Enter Subject Name"/>
                  <input type="submit" onClick={createquiz}/>
            </form>
       </div>
    );
}
export default Quizs;