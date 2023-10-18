import React, { useEffect, useState } from "react"

function Questions(){
    const [description,setDescription] = useState('');
    const [option1,setOption1] = useState('');
    const [option2,setOption2] = useState('');
    const [option3,setOption3] = useState('');
    const [option4,setOption4] = useState('');
    const [correctOption,setCorrectOption] = useState('');

    const createQuestion = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:5000/createquiz',{
            method:"POST",
            headers : {
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                description,option1,option2,option3,option4,correctOption 
            })
        });
    }
    return (
       <div className="login">
             <h1>Welcome to Create Quiz Page</h1>
            <form method="POST">
                  <input type="text"  onChange = { (e) => {setDescription(e.target.value)   }} placeholder="Enter Question description"/>
                  <input type="text"  onChange = { (e) => {setOption1(e.target.value)   }} placeholder="Enter Option 1"/>
                  <input type="text"  onChange = { (e) => {setOption2(e.target.value)   }} placeholder="Enter Option 2"/>
                  <input type="text" onChange = { (e) => {setOption3(e.target.value)   }} placeholder="Enter Option 3"/>
                  <input type="text" onChange = { (e) => {setOption4(e.target.value)   }} placeholder="Enter Option 4"/>
                  <input type="number" onChange = { (e) => {setCorrectOption(e.target.value)   }} placeholder="Enter The Correct Answer"/>
                  <input type="submit" onClick={createQuestion}/>
            </form>
       </div>
    );
}
export default Questions;