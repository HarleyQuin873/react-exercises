//import './Navbar.css'
//import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){
  //  const x = 11;
  //  const img = "vite";
  /*
  const imgStyle= {
  height : x <10 ? "300px" : "500px"
  borderRadius: "100%",
  }
  */
    return (
        // <>
       
    //    <div className={`box rounded ${x < 10  ? "rotated" : ""}`}>x è {x}</div> 
    //     <div  
    //    {` rounded-lg w-72 h-72  ${ x < 10 ? "bg-red-500 rotate-45" : "bg-sky-500" }`} 
  //  >  
    
      
     //   <nav> 
       
    <ul className="flex gap-10 mb-10">
        <li>
            <Link to={'/'}>home</Link>
        </li>
        <li>
            <Link to={'/contatti'}>contatti</Link>
        </li>
        <li>
            <Link to={'/about'}>about</Link>
        </li>
        <li>
            <Link to={'/cards'}>cards versione 1</Link>
        </li>
        <li>
            <Link to={'/cards-children'}>cards versione 2</Link>
        </li>
    </ul>
         
      //   </nav>  
      
          //   </> 
            
    );
}

export default Navbar;

/* 
         x è {x}
        </div>  
       
         <ul>
            <li>
             <a href="#"> Ciao </a> 
            </li>

            <li> 
                <a href="#"> Ciao </a>
            </li>

            <li> 
                <a href="#"> Ciao </a>
             </li>

            <li> 
                <a href="#"> Ciao </a>
            </li>

            <li> 
                <a href="#"> Ciao </a>
            </li>
        </ul> 
        */