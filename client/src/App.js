import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {useState} from 'react';
import Login from './component/pavan/login';
import Signup from './component/pavan/signup';
import Createquiz from './component/parmar/createQuiz.js';
import CreateQuestion from './component/parmar/createQuestion';


function App() {
  return (
      <Router>
          <Routes>
               <Route path="/" element={<Login/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/createquiz" element={<Createquiz/>}/>
               <Route path="/createquestion" element={<CreateQuestion/>}/>
          </Routes>
      </Router>
  );
}

export default App;
