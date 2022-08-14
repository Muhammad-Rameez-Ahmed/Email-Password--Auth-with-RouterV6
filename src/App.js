import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';
import Error from './Error';
import Signin from './Components/Signin';


function App() {
  return (
    <>
   
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup"  element={<Signup/> }/>
          <Route path="/signin"  element={<Signin/> }/>
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
