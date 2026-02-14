import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Card(){
    const { cardID } = useParams();
    console.log(cardID);

    const cities = useSelector((state) => 
       state.cities.value.filter((city) => city.id == cardID.toString())
    );

    console.log(cities);

    return(
       <>
         <Navbar></Navbar>
         <div className="flex flex-col p-4">
            {
                cities[0].isVisited && (
                    <span className="text-green-600">✔ visitata</span>
                )}
            {!cities[0].isVisited && (
                <span className="text-red-600">❌ non visitata</span>
            )}
         </div>
         <img
             src={cities[0].imgURL}
             className="rounded-t-md"
             alt=""
             width="400"></img>
       </>
    );
}

export default Card;