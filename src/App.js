import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import { useState, useEffect } from 'react';
//import { useReducer } from 'react';
//import { useRef } from 'react';

//array destructuring
// let [name1,name2,name3] = ["Raj","Ravi","Raghu"]
// console.log(name1)

//props destructuring
// function App({Website}) {
//   return (
//     <div className="App">
//       <h1>This is a {Website}</h1>
//     </div>
//   );
// }

// useState demonstration
// function App() {
//   let [josh,setJosh] = useState("high")
//   return (
//     <div className="App">
//       <h1>How's the josh guys ...{josh}</h1>
//       <button onClick={ () => setJosh("low")}>Low</button>
//     </div>
//   );
// }

//useEffect demonstration
// function App() {
//   let [josh,setJosh] = useState("high")
//   useEffect(() => { console.log(`I am ${josh}`);},[])
//   return (
//     <div className="App">
//       <h1>How's the josh guys ...{josh}</h1>
//       <button onClick={ () => {setJosh("low")}}>low</button>
//       <button onClick={ () => {setJosh("medium")}}>medium</button>
//     </div>
//   );
// }

//useEffect demonstration 2
// function App() {
//   let [josh,setJosh] = useState("high")
//   let [ready,setReady] = useState("yes")
//   useEffect(() => { console.log(`I am ${josh} ${ready}`);},[josh,ready])
//   return (
//     <div className="App">
//       <h1>How's the josh guys ...{josh}</h1>
//       <button onClick={ () => {setJosh("low")}}>low</button>
//       <button onClick={ () => {setJosh("medium")}}>medium</button>
//       <h1>Are you ready guys ...{ready}</h1>
//       <button onClick={ () => {setReady("no")}}>no</button>
//       <button onClick={ () => {setReady("yes")}}>yes</button>
//     </div>
//   );
// }

//checkbox
// function App() {
//   let [check,setCheck] = useState(false)
//   return (
//     <div className="App">
//     <input type="checkbox" onChange={() => {setCheck((check) => !check)}}></input>
//     <label>{check ? "checked":"unchecked"}</label>
//     </div>
//   );
// }

//useReducer
// function App() {
//   let [check,setCheck] = useReducer((check)=> !check,false)
//   return (
//     <div className="App">
//     <input type="checkbox" onChange={setCheck}></input>
//     <label>{check ? "checked":"unchecked"}</label>
//     </div>
//   );
// }

//useRef
// function App()
// {
//   let txt= useRef();
//   let color = useRef();

//   let submit = (e) => {
//     e.preventDefault();
//     alert(`${txt.current.value} ${color.current.value}`)
//     txt.current.value = ""
//     color.current.value = ""
//   }
//   return(
//   <>
//   <form onSubmit={submit}>
//     <input ref={txt} type="text" placeholder="enter your color"></input>
//     <input ref={color} type="color"/>
//     <button>submit</button>
//   </form>
//   </>)
// }

//fetching data using usestate and useeffect - 1
// function App()
// {
//   let [data,setData] = useState(null)
//   useEffect(() => {fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => response.json()).then(setData)},[]) //then(setData) IS SAME AS then((data) => setData(data))
//   return(
//   <>
//   <p>{JSON.stringify(data)}</p>
//   </>);
// }

//fetching data using usestate and useeffect - 2
function Helper({name})
{
  return(
    <h1>Pokemon name is {name}</h1>
  )
}
function App()
{
  let [data,setData] = useState(null)
  useEffect(() => {fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => response.json()).then(setData)},[]) //then(setData) IS SAME AS then((x) => setData(x))
  return(
  <Helper name= {data.name}/>
  );
}





export default App;
