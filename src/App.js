
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/Signup';
function App() {

  
  return (
 <>
 {/* <Login/> */}
 <BrowserRouter>

    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/signup" element={<Signup/>}/>
     
       
        
        
    
    </Routes>
  </BrowserRouter>
 {/* <Home/> */}
 </>
  );
}

export default App;
