import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';
import About from './components/About'
// import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const handleAlert = (msg) => {
    setalert(msg);
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const handleMode = () => {
    console.log('toggle');
    if (mode==='light'){
      setmode('dark');
      document.body.style.background = '#444';
      handleAlert("Dark Mode enabled!");
    }else{
      setmode('light');
      document.body.style.background = '#f8f8f8';
      handleAlert("Light Mode enabled!");
    }
  }
   return (
    <>
    <Router>
    <Navbar title="TextWizard" mode={mode} handleMode={handleMode} />
    {/* <Alert alert={alert}/> */}
    

    <Routes>
      <Route exact path='/' element={<Textarea mode={mode} handleAlert={handleAlert} alert={alert}/>}>
  
      </Route>
      <Route exact path='/about' element={<About />}>
    
      </Route>
    </Routes>
    
    </Router>
    </>
  );
}

export default App;
