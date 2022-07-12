import NavBar from "./components/Navbar";
import HomePage from './components/HomePage';
import Footer from './components/Footer'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AllFeature from "./routes/AllFeature";

function App() {
    
    return ( 
        <>
      
            <NavBar/>
            <HomePage/>  
            <Footer/> 
           
        
    </>
    )
}
export default App;