import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const[mode,setMode] = useState('light');
  const[btnText, setBtnText] = useState('Dark Mode');


  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      setBtnText('Light Mode');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      
    }
    else{
      setMode('light');
      setBtnText('Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      
    }
  }

  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <TextForm />
      <Footer mode={mode}/>
    </>
  );
}

export default App;
