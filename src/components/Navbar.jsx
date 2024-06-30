import './Navbar.css'
//import React from 'react';

function Navbar(){
    const x = 11;
  //  const img = "vite";
  /*
  const imgStyle= {
  height : x <10 ? "300px" : "500px"
  borderRadius: "100%",
  }
  */
    return (
        <>
       {/* <div className={`box rounded ${x < 10  ? "rotated" : ""}`}>x è {x}</div> */}
       <div className={` rounded-lg w-72 h-72  ${
        x < 10 ? "bg-red-500 rotate-45" : "bg-sky-500"
        }`}> 
        x è {x}
        </div>
       <nav>
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
        </nav>
        </>
    );
}

export default Navbar