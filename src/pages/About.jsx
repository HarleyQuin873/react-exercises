import Navbar from "../components/Navbar";
import { useEffect } from "react";

function About() {
    useEffect(() =>{
        const intervalID = setInterval(() => {
             const randomNumber = Math.floor(Math.random()*100)
             console.log(randomNumber);
        }, 1000)

        return ()=>{
            clearInterval(intervalID)
        }
    }, [] ) 

    
    return (
        <>
        <Navbar></Navbar>
        <h1 className="text-3xl font-bold">Pagina about 📌</h1>
        </>
    );
}

export default About;