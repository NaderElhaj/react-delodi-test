import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "./components/molecules/SearchForm";
import LoginForm from "./components/molecules/LoginForm";
import Error from "./components/atoms/Error";
function App() {

  
  return (
    <>
      <Error  />
    <div className="d-flex vh-100 justify-content-center align-items-center relative justify-content-evenly ">
      <SearchForm />
      <LoginForm />
    </div>
    </>
    
  );
}

export default App;
