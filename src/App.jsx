import { useState } from 'react';
//import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';
//import './components/Navbar.css';
//import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/*  <Navbar></Navbar>*/ }
  <div className="grid grid-cols-4 gap-5">
    <Card title="Tokyo" imgURL="https://media.istockphoto.com/id/1444615409/it/foto/chinatown-in-giappone-alla-notte.jpg?s=1024x1024&w=is&k=20&c=vd0bD01A8AjNIBirrvwfkNO1yGw7HgkuEO3IepwX3Ts="></Card>
    <Card title="New York" imgURL="https://media.istockphoto.com/id/525232662/it/foto/new-york-allempire-stato-building-e-la-statua-della-libert%C3%A0.jpg?s=1024x1024&w=is&k=20&c=W5gpnN04pucS9sytT9TZMGJ8orP8OojT2ltYIVnmzIo="></Card>
    <Card title="Rome" imgURL="https://media.istockphoto.com/id/508540910/it/foto/roma-tramonto-sul-tevere-e-st-peters-basilica-di-san-pietro-vaticano-italia.jpg?s=1024x1024&w=is&k=20&c=ZDLV6PBXukggCcJIo-XieliLBQpNp32Xc5NKXwsgj38="></Card>
    
    <Card title="Paris" imgURL="https://media.istockphoto.com/id/1141703900/it/foto/paesaggio-urbano-di-parigi.jpg?s=1024x1024&w=is&k=20&c=xtHcMA1q7AYSki7SmddfoAPkTeVZtbzit8jdIKMZ220="></Card>
    
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/** 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}

export default App
