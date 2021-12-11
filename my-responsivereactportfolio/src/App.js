

import { Link } from "react-router-dom";
import NavTabs from "./pages/navTabs";
import Home from "./pages/HomePage";
import About from "./pages/about";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

export default function App() {
  return (
  
    <div>
      <h1>Jennifer Detmering</h1>
      
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
    
      >
    
        <Link to="/"></Link> 
        <Link to="/HomePage"></Link> |{""}
        <Link to="/about">About</Link> |{""}
        <Link to="/resume">Resume</Link> |{""}
        <Link to="/portfolio">Portfolio</Link> |{""}
        <Link to="/contact">Contact</Link> 
        
      </nav>
    </div>
  );
}





