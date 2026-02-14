import { useState } from 'react';
//import { useState , useContext} from 'react';
import { useDispatch } from 'react-redux';
import { add } from "../redux/citiesSlice";
//import { ProvaContext } from '../redux/ProvaContext';

// function CardForm({addCity}){
function CardForm(){
     const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "", 
        description: "",
        imgURL: "",
        isVisited: false
    })

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target
        const inputValue = type == "checkbox" ? checked : value
        setFormData({
         ...formData, 
         [name] : inputValue,
        })
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        const city = {
            id: Math.random(),
            name: formData.name,
            description: formData.description,
            imgURL: formData.imgURL,
            // "https://media.istockphoto.com/id/498122776/it/foto/notte-skyline-di-sydney.jpg?s=1024x1024&w=is&k=20&c=OQt-Z_zlyai1fCtm9TC68gCFKw-QUtKEncDTLjDxjCw=",
            isVisited: formData.isVisited //false
          };
      // addCity(city);
      setFormData({
          name: "",
          description: "",
          imgURL: "",
          isVisited: false,
      });
      dispatch(add(city));
    };

  //  const { count } = useContext(ProvaContext)

    return (
         <form onSubmit={handleSubmit}   
         className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg text-white">
            <div className="flex flex-col">
                 <label>Nome</label>
                 <input 
                 className="bg-bg-white text-black p-2 rounded"
                    type="text" 
                    name="name"
                    value={formData.name} 
                    onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col">
                 <label>Descrizione 
                     {/* {count}  */}
                     </label>
                 <textarea 
                 className="bg-bg-white text-black p-2 rounded"
                    name="description"
                    value={formData.description} 
                    onChange={handleInputChange}
                 ></textarea>
            </div>
            <div className="flex flex-col">
                 <label>Immagine</label>
                 <input type="text" 
                 name="imgURL"
                 value={formData.imgURL} 
                 onChange={handleInputChange}
                 ></input>
            </div>
            <div className="flex flex-col">
                 <label>Visitata?</label>
                 <input type="checkbox" 
                 name="isVisited" 
                 className="bg-bg-white text-black p-2 rounded"
                 checked={formData.isVisited} 
                 onChange={handleInputChange}></input>
            </div>
           
            {/* <input type="text"></input>
            <input type="text"></input> */}
            <button className="bg-zinc-950" type="submit">Aggiungi Card</button>
         </form>
    )
}

export default CardForm;