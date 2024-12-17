import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import React from 'react'
import Login from "./pages/Auth/Login.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import Home from "./pages/Home/Home.jsx";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" exact element={<Root/>}></Route>
        {/* <Route path="/dashboard" exact element={<Home/>}/> */}
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" exact element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  )
}

const Root = () =>{
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ):(
    <Navigate to="/login"/>
  );
};

export default App