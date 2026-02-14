//import { useState , useEffect, useContext} from 'react';
// import { ProvaContext } from '../redux/ProvaContext';
import { increment, decrement } from '../redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';


//function Example({cities}){
    function Example(){
   // const {count, setCount} = useContext(ProvaContext)
    //oppure const provaConst = useContext(ProvaContext)
   // e accedere con provaConst.count

   const count = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();

   // const [count, setCount] = useState(0);
    // const [data, setData] = useState(null);

    //Definizione dell'effetto
// useEffect( () => {
//     localStorage.setItem("count", count.toString());
//     document.title = `Conteggio : ${count}`;
//     console.log("Ciao da use effect");
//     }, [count, cities]);
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((response)=>response.json())
    // .then((data) => {setData(data); 
    //     console.log(data);
    // })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//}, [count]);


// const handleClick = () => {
//     setCount(count + 1);
//     document.title = `Conteggio : ${count}`;
// };

    return (
     //  <>
       <div className="mb-3">
          <p>Conteggio: {count}</p>
          {/* <p>{data}</p> */}
          <button 
          className='mr-3'
          aria-label='Increment value'
          //   onClick={() => setCount(count + 1)}>Incrementa</button>
          onClick={() => dispatch(increment())}>
            Incrementa +
            </button>
            <button 
         
          aria-label='Decrement value'
          //   onClick={() => setCount(count + 1)}>Incrementa</button>
          onClick={() => dispatch(decrement())}>
           Decrementa -
            </button>
       </div>
     //  </>
    );
}

export default Example;