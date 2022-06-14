import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "./components/molecules/SearchForm";
import LoginForm from "./components/molecules/LoginForm";
import Error from "./components/atoms/Error";
function App() {
  const [display,setDisplay]=useState('d-none')
  useEffect(() => {
    setTimeout(()=>{
      setDisplay('d-bloc')
    },10000)
  })
  
  return (
    <>
      <Error display={display} />
      <SearchForm />
      <LoginForm />
    </>
    
  );
}

export default App;
