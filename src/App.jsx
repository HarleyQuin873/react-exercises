//import { useState } from 'react';
//import { useState , useEffect, useReducer, useContext } from 'react';
//import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
//import Card from './components/Card';
import CardForm from './components/CardForm';
import Example from './components/Example';
//import './components/Navbar.css';
import Navbar from './components/Navbar';
//import { ProvaContext } from './redux/ProvaContext';
//import { useSelector } from 'react-redux';

// function handleClick(){
//   alert("Ciao");
// }

// function handleChange(e){
//   console.log(e.target.value);
// }


// function handleSubmit(e){
//   e.preventDefault();
//   console.log(e.target.value);
// }

//const initialState = { name:'',email:'' };
// function formReducer(state, action){
//    switch(action.type) {
//        case "CHANGE_FIELD": 
//            return { ...state, [action.field]: action.value };
//        case "RESET_FORM": 
//           return { name: "", email: "" };
//        default: 
//           return state; 
//    }
// }

function App() {
 // const cities = useSelector((state) => state.cities.value);
  //const [count, setCount] = useState(0)   //count è il valore iniziale dell'hook chiamato useState,mentre setCount è la funzione che ci permette di modificare il valore iniziale dello stato
  // const [items, setItems] = useState([1,2,3])
  // const [user, setUser] = useState({name:"Alice", age: 30});
  // const [data, setData] = useState([]);
  

  // Definisci lo stato iniziale


  //  const [formState, dispatchFormState] = useReducer(formReducer, {
  //   name:"",
  //   email:"" , /* initialState*/
  // });
  //console.log(items);

  // const aggiungiItem = () => {
  //   const nuovoItem = 4;
  //   setItems([...items, nuovoItem]);
  //   console.log(items);
  // };

  // const updateUserName = () => {
  //   const updateUser = {...user, name:"Bob"};
  //   setUser(updateUser);
  // };

//onchange: quando scrivo dentro questo campo, mi chiami la funzione handleFieldChange e mi passi il nome del campo, cioè email e il valore, quindi il nome è contenuto nel parametro field e il valore è contenuto nel parametro value
  // const handleFieldChange = (field, value)=>{
  //   dispatchFormState({type: "CHANGE_FIELD", field, value})
  // };

  // const resetForm = (e)=>{
  //   e.preventDefault();
  //   dispatchFormState({type: "RESET_FORM"})
  // };

  // const sendForm = (e)=>{
  //   //dispatchFormState({type: "RESET_FORM"})
  //   e.preventDefault();
  //   console.log(formState);
  // };


//   useEffect( () => {
//     // localStorage.setItem("count", count.toString());
//     // document.title = `Conteggio : ${count}`;
//     // console.log("Ciao da use effect");
//     // }, [count, cities]);
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>response.json())
//     .then((data) => {setData(data); 
//         console.log(data);
//     })
// //   .then((response) => response.json())
// //   .then((json) => console.log(json));
// }, [count]);

//per cancellare un posts
// useEffect( () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1"), {
//  method: DELETE
//   })
//   .then((response) => response.status).catch
//   .then((json) => console.log(json));
// }, [count]);

//per aggiungere un posts
// useEffect( () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/users"), { o users/${idutente} dinamico con gli apici inclinati
//  method: 'POST', //'PUT'
//  body: JSON.strigify(data) // o un oggetto {} -->strigify({}),
//   headers: {
//    "Content-type" : "application/json; charset=UTF-8", 
//   },
//   })
//   .then((response) => response.json()).
//   .then((json) => console.log(json));
// }, [count]);



  // const addCity = (city) => {
  //   setCities([...cities, city]);
  // };

  // const [cities, setCities] = useState([
  // { id: 0,
  //   name: "Tokyo",
  //   description: "città di Tokyo",
  //   imgURL:"https://media.istockphoto.com/id/1444615409/it/foto/chinatown-in-giappone-alla-notte.jpg?s=1024x1024&w=is&k=20&c=vd0bD01A8AjNIBirrvwfkNO1yGw7HgkuEO3IepwX3Ts=",
  //   isVisited: true
  // },
  // {
  //   id: 1,
  //   name: "New York",
  //   description: "città di New York",
  //   imgURL:"https://media.istockphoto.com/id/525232662/it/foto/new-york-allempire-stato-building-e-la-statua-della-libert%C3%A0.jpg?s=1024x1024&w=is&k=20&c=W5gpnN04pucS9sytT9TZMGJ8orP8OojT2ltYIVnmzIo=",
  //   isVisited: false
  // },
  // {
  //   id: 2,
  //   name: "Rome",
  //   description: "città di Roma",
  //   imgURL:"https://media.istockphoto.com/id/508540910/it/foto/roma-tramonto-sul-tevere-e-st-peters-basilica-di-san-pietro-vaticano-italia.jpg?s=1024x1024&w=is&k=20&c=ZDLV6PBXukggCcJIo-XieliLBQpNp32Xc5NKXwsgj38=",
  //   isVisited: true
  // },
  // {
  //   id: 3,
  //   name: "Paris",
  //   description: "città di Parigi",
  //   imgURL:"https://media.istockphoto.com/id/1141703900/it/foto/paesaggio-urbano-di-parigi.jpg?s=1024x1024&w=is&k=20&c=xtHcMA1q7AYSki7SmddfoAPkTeVZtbzit8jdIKMZ220=",
  //   isVisited: false
  // }
  // ]);



  return (
   // <ProvaContext.Provider value={{ count, setCount }}>
   <>
       <Example
        // cities={cities}
        ></Example>
    <Navbar></Navbar>
   <div className="app-container"> 
  <CardForm 
  // addCity={addCity}
  ></CardForm>

  {/* <div className="grid grid-cols-4 gap-5"> */}
    {/* <Card title="Tokyo" imgURL="https://media.istockphoto.com/id/1444615409/it/foto/chinatown-in-giappone-alla-notte.jpg?s=1024x1024&w=is&k=20&c=vd0bD01A8AjNIBirrvwfkNO1yGw7HgkuEO3IepwX3Ts="
    isVisited={true}>
   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt veritatis placeat.
    </Card>
    <Card title="New York" imgURL="https://media.istockphoto.com/id/525232662/it/foto/new-york-allempire-stato-building-e-la-statua-della-libert%C3%A0.jpg?s=1024x1024&w=is&k=20&c=W5gpnN04pucS9sytT9TZMGJ8orP8OojT2ltYIVnmzIo="
    isVisited={false}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt veritatis placeat.
    </Card>
    <Card title="Rome" imgURL="https://media.istockphoto.com/id/508540910/it/foto/roma-tramonto-sul-tevere-e-st-peters-basilica-di-san-pietro-vaticano-italia.jpg?s=1024x1024&w=is&k=20&c=ZDLV6PBXukggCcJIo-XieliLBQpNp32Xc5NKXwsgj38="
    isVisited={true}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt veritatis placeat.
    </Card>
    
    <Card title="Paris" imgURL="https://media.istockphoto.com/id/1141703900/it/foto/paesaggio-urbano-di-parigi.jpg?s=1024x1024&w=is&k=20&c=xtHcMA1q7AYSki7SmddfoAPkTeVZtbzit8jdIKMZ220="
    isVisited={false}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo deserunt veritatis placeat.
    </Card> */}



  {/* <div className="grid grid-cols-4 gap-5">
    {cities
   // .filter((city) =>city.isVisited)
  // .filter((city) =>!city.isVisited)
    .map((city) => (
      <Card
         key={city.id}
         title={city.name}
         isVisited={city.isVisited}
         imgURL={city.imgURL}
         className="card">
         {city.description}
         </Card>
    ))} 
  </div> */}
  {/* <div className="grid grid-cols-4 gap-5">
    {data
   // .filter((city) =>city.isVisited)
  // .filter((city) =>!city.isVisited)
    .map((item) => (
      <div key={item.id} className="bg-slate-400 rounded-lg p-3">
        <p className="text-red-500 mb-1">userid:{item.userId}</p>
        <h2 className="text-xl mb-3">{item.title}</h2>
        <p className="text-gray-800">{item.body}</p>  
      </div>
    ))} 
  </div>
  {/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        {/* <button onClick={() => alert("Ciao")}>alert</button> */}

        {/* <button onClick={handleClick}>alert</button>
        <input type="text" onChange={handleChange} />
        <form onSubmit={handleSubmit}>
            <button type="Submit">invia</button>
        </form>
      </div> 
      */}
      {/** 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
       </div> 
       {/* {console.log(process.env.NODE_ENV)} */}



    {/* <form>
      <div>
      <label htmlFor="name">Nome:</label>
        <input
          type='text'
          id='name'
          value={formState.name}
          onChange={(e)=>handleFieldChange("name", e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type='email'
          id='email'
          value={formState.email}
          onChange={(e)=>handleFieldChange("email", e.target.value)} 
        />
      </div>
      <button onClick={resetForm}>Reset</button>
      <button onClick={sendForm}>Send</button> */}
      {/* <button>Invia</button> */}
    {/* </form> */}
  {/* //  </ProvaContext.Provider> */}
  </>
  );
}

export default App
